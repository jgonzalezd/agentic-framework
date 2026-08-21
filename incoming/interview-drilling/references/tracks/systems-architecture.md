# Track: Systems Architecture

## Contents

- Refresher units (10 concepts)
- Artifact seeds (8 scenarios)
- Follow-up question bank
- Blind-spot markers

For the open-ended design round, see `references/design-round.md`. This track drills the same material
as code artifacts.

---

## Refresher units

### 1. Multi-tenancy and row-level access

**Model.** Three shapes: separate databases (strongest isolation, worst operability), shared schema
with a tenant column (best operability, one missing `WHERE` from a breach), or Postgres row-level
security (enforcement in the database rather than in every query). Here the boundaries are
developments, property managers, and household privacy — a leasing manager at one development must
not see another's applicants.
**Rule.** Shared schema with the tenant predicate enforced *below* application code — RLS, or a
session-scoped query filter — so a forgotten `WHERE` fails closed. Never rely on every developer
remembering.
**Tell.** Wanting enforcement somewhere a code review cannot miss.

### 2. Document intake pipelines

**Model.** Upload → virus scan → store → OCR → extract → validate → human review → decision. Every
stage can fail independently and some are slow and expensive. Synchronous chaining means one slow OCR
call holds an HTTP request open; a crash loses the work; a retry re-bills the vendor.
**Rule.** Persist state per stage and drive transitions asynchronously. The document row *is* the
state machine. Store the raw artifact immutably; derived extractions are recomputable, the original
is not. Route low confidence to human review rather than guessing.
**Tell.** Modeling it as a state machine with explicit terminal failure states, not a function chain.

### 3. Idempotency and retries

**Model.** Anything retried must be safe to run twice. At-least-once delivery is what queues actually
give you; exactly-once is a property you build with idempotency keys, not one you buy. Retry without
backoff plus jitter turns a slow dependency into an outage.
**Rule.** Idempotency key on every mutation reachable from a retry or a double-click. Exponential
backoff with jitter, a retry cap, and a dead-letter queue that a human actually looks at.
**Tell.** Asking "what happens if this runs twice?" as a reflex.

### 4. Audit logs as a product requirement

**Model.** In a regulated domain, "what did the system tell this applicant, and when?" is a question
someone will ask under legal pressure. That is different from debug logging: append-only, immutable,
retained on a schedule, queryable by subject, and it must capture agent-generated messages too.
**Rule.** Write audit events in the same transaction as the change they describe, or they will drift.
Record actor, action, subject, before/after, timestamp, and correlation ID. Never mutate or delete.
**Tell.** Distinguishing audit from logging, and putting audit writes in the transaction.

### 5. Background jobs

**Model.** A durable queue has visibility timeouts, retry counts, dead-letter routing, and
observability. In-process background tasks have none. Long jobs need a heartbeat or they get retried
while still running. Queue ordering is not guaranteed unless you buy it.
**Rule.** Durable queue for anything a user would notice missing. Jobs take IDs, not objects — the
row may have changed by the time it runs. Make the handler idempotent, and cap concurrency against
shared external dependencies.
**Tell.** Passing an ID rather than a serialized payload, and knowing why.

### 6. Caching and invalidation

**Model.** Cache-aside is the default; the hard part is invalidation. Stale data in this domain has
teeth — telling an applicant they have documents outstanding after they submitted them erodes trust
in the whole product. Thundering herd on expiry can take down the origin.
**Rule.** Cache what is expensive and tolerant of staleness (program rules, AMI tables, static
content). Do not cache the applicant's live status. Invalidate on write, TTL as a backstop, jitter
the TTLs.
**Tell.** Naming which data is allowed to be stale and which is not, by consequence.

### 7. API evolution on a live system

**Model.** During any rollout, old frontend and new backend run simultaneously. Additive changes are
safe; removals, renames, and type changes are not. A response field the old client reads cannot be
removed until that client is gone.
**Rule.** Expand-and-contract across deploys. Add new fields alongside old, migrate the client, then
remove. Never repurpose an existing field's meaning — that breaks silently rather than loudly.
**Tell.** Reasoning explicitly about the simultaneous-versions window.

### 8. Data model for applications

**Model.** An application is a long-lived, versioned, multi-party object with a status timeline,
attached documents, household members with their own income, and a legal history that must be
reconstructable. Overwriting fields destroys the history someone will need. Household composition
changes over time — people are born, move in, move out — so a snapshot at decision time matters.
**Rule.** Event-sourced or at minimum append-only status transitions. Soft-delete with a reason, never
hard-delete. Store the decision-time snapshot separately from current state.
**Tell.** Recognizing that current state and historical truth are different requirements.

### 9. Observability

**Model.** Logs (what happened), metrics (how much and how fast), traces (where the time went),
correlation IDs stitching them. On a 4-person team the constraint is *what you will actually look at*
at 2am. Alerting on symptoms users feel beats alerting on resource graphs.
**Rule.** Correlation ID from the edge through every job and LLM call. Alert on user-visible SLOs —
applications stuck in a state, queue depth, p99 latency, agent refusal-rate spikes — not CPU.
**Tell.** Picking alerts by "would I get out of bed for this," and knowing PII must not enter traces.

### 10. Failure modes and degradation

**Model.** Every external dependency is eventually down: the LLM provider, OCR, storage, email, the
telephony vendor. Full outage on a dependency failure is a choice, usually an unconsidered one.
**Rule.** Decide per dependency what degraded mode looks like. LLM down → the agent says so and offers
a human, rather than timing out. OCR down → queue and tell the applicant it is received. Timeouts and
circuit breakers on everything crossing the network. No unbounded retry against a failing dependency.
**Tell.** Having a specific answer for "the LLM provider is down — what does the applicant see?"

---

## Artifact seeds

### Seed A — Tenant scoping layer
A base query helper meant to scope every read to the current manager's developments.
**Defects:** the helper is opt-in, and two of five call sites forget it; tenant read from a
client-supplied header; an admin bypass with no audit trail; a join that reaches an unscoped table.
**Decoys:** a seemingly redundant second predicate that correctly guards a many-to-many join.

### Seed B — Document pipeline orchestrator
Chains scan → store → OCR → extract.
**Defects:** all stages inline in the request handler; no persisted per-stage state, so a crash loses
position; retry re-runs OCR and re-bills; low-confidence extraction auto-accepted with no human path;
the raw file deleted after extraction.
**Decoys:** an apparently redundant status write that is the crash-recovery point.

### Seed C — Notice sender
Sends deadline notices to applicants.
**Defects:** no idempotency key, so a retry double-sends (a real complaint in this domain); retry with
no backoff; job takes a serialized applicant object that is stale by execution; failures swallowed
with no dead-letter.
**Decoys:** a dedupe window that looks like premature optimization and is the actual fix.

### Seed D — Audit logging
Records status changes on an application.
**Defects:** audit written after commit in a separate transaction, so it drifts on failure; audit rows
updatable; agent-generated messages not audited at all; full document contents in the audit payload;
no retention policy.
**Decoys:** an append-only table with no update path — looks inflexible, is the requirement.

### Seed E — Status caching
Caches application status for the applicant portal and the agent.
**Defects:** live status cached with a 1h TTL, so applicants see stale document requirements; no
invalidation on write; identical TTLs causing synchronized expiry; cache key missing the tenant, so
entries collide across managers.
**Decoys:** a cached AMI-limits table with a long TTL, which is correct.

### Seed F — Household data model
Schema for applications, household members, and income sources.
**Defects:** status overwritten in place, destroying the timeline; hard delete on household member
removal; income stored as float; no decision-time snapshot, so a past decision cannot be explained;
household composition with no validity dates.
**Decoys:** a denormalized `current_status` column alongside the event table — looks redundant, is a
justified read optimization.

### Seed G — Agent fallback path
What the chat/voice agent does when the LLM provider errors.
**Defects:** unbounded retry against a failing provider; a 30s timeout the caller waits through; a
raw provider error surfaced to the applicant; no circuit breaker; no human handoff; the failure never
audited, so nobody learns it happened.
**Decoys:** a hardcoded plain-text fallback message that looks lazy and is correct degradation.

### Seed H — Rollout of a renamed field
Migration plus API change renaming `status` to `application_status`.
**Defects:** rename in one deploy while the old frontend is live; field meaning repurposed rather than
added; no dual-write window; migration irreversible.
**Decoys:** a temporary dual-write that looks like duplication and is the expand phase.

---

## Follow-up question bank

**On isolation**
- A manager at Development A changes the ID in the URL to an applicant at Development B. Walk me
  through every layer that should stop them.
- Where would you put that check so a new developer cannot forget it?

**On failure**
- This job runs twice. What happens to the applicant?
- The OCR vendor is down for four hours. What does an applicant who uploads a pay stub see?
- The LLM provider returns 503. What does the caller on the phone hear?

**On history**
- An applicant appeals a decision from eight months ago. Can you reconstruct what the system knew
  and what it told them?
- Their household changed size in between. Which version does the decision reference?

**On scope**
- This is a 4-person team. Which half of this would you not build in v1?
- What is the cheapest thing that gets this live this month?

---

## Blind-spot markers

- Wants tenant isolation enforced below application code, where review cannot miss it
- Models pipelines as state machines with persisted state, not function chains
- Reflexively asks what happens when a job runs twice
- Puts audit writes in the same transaction as the change
- Passes IDs to jobs, not serialized objects
- Separates data that may be stale from data that may not, by consequence
- Reasons about the simultaneous-old-and-new-code window
- Knows current state and historical truth are different requirements
- Has a concrete degraded mode per external dependency
- Cuts scope without being asked twice
