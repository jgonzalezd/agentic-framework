# Track: FastAPI Backend

## Contents

- Refresher units (11 concepts)
- Artifact seeds (8 scenarios)
- Follow-up question bank
- Blind-spot markers

---

## Refresher units

### 1. Dependency injection and `yield` dependencies

**Model.** `Depends()` resolves a callable per request and caches it *within* that request (same
dependency requested twice → resolved once, unless `use_cache=False`). A `yield` dependency runs
setup, hands over, then runs teardown after the response — teardown code after `yield` needs
`try/finally` to survive an exception. Sub-dependencies form a DAG resolved depth-first.
**Rule.** DI for anything request-scoped: DB session, current user, tenant context, rate limiter.
Nothing request-scoped belongs in a module-level global.
**Tell.** Knowing teardown runs *after* the response is generated — so a session closed there is
already closed by the time a lazy-loaded attribute is serialized.

### 2. Request lifecycle and middleware

**Model.** Middleware → routing → dependencies → endpoint → response model serialization →
dependency teardown → middleware unwind. Middleware sees the raw request/response; exception handlers
sit between the endpoint and the client. Reading `request.body()` in middleware consumes the stream
unless it is put back.
**Rule.** Middleware for cross-cutting concerns that need the raw request (correlation IDs, timing).
Dependencies for anything the endpoint needs a *value* from.
**Tell.** Knowing response-model serialization happens *before* `yield` teardown.

### 3. async vs sync endpoints and the threadpool

**Model.** `async def` runs on the event loop. Plain `def` runs in a bounded threadpool (default 40
in AnyIO). A blocking call in `async def` stalls every concurrent request; the same call in `def` only
occupies a thread. Mixing a sync DB driver into `async def` is the single most common FastAPI defect.
**Rule.** All-async or all-sync per path. If the driver is sync, make the endpoint `def`. Never
`async def` with a blocking driver.
**Tell.** Knowing plain `def` is *safer* than `async def` with sync I/O — counterintuitive and a
strong signal.

### 4. Pydantic v2 validation and response models

**Model.** v2 validates in Rust and is strict about coercion in ways v1 was not. `response_model`
filters output — fields not on the model are dropped, which is a security control, not cosmetics.
`model_config` with `from_attributes=True` reads ORM objects. Validators run in a defined order;
`field_validator` vs `model_validator` differ in what they can see.
**Rule.** A separate response model per endpoint. Never return an ORM object directly, and never
reuse the DB model as the API schema.
**Tell.** Framing response models as *leak prevention* — in this domain, returning an ORM `Applicant`
exposes SSN and immigration status to whoever calls the endpoint.

### 5. SQLAlchemy sessions, N+1, and detached instances

**Model.** A session is a unit of work with an identity map and pending changes. Sharing one across
requests leaks data between users. Lazy-loaded relationships emit a query per access — N+1 — and
accessing one *after* the session closes raises `DetachedInstanceError`. `selectinload`/`joinedload`
fix it at query time.
**Rule.** One session per request via a `yield` dependency. Eager-load anything the response model
touches. Never let an ORM object outlive its session.
**Tell.** Spotting N+1 that only appears in the *serialization* step, not in the visible query.

### 6. Background tasks vs a real queue

**Model.** `BackgroundTasks` runs in the same process after the response. If the process restarts or
the deploy rolls, the work is silently gone — no retry, no visibility, no dead-letter. It also shares
the event loop, so a slow task degrades request handling.
**Rule.** `BackgroundTasks` only for fire-and-forget work whose loss is acceptable. Anything a user
would notice missing — a notice email, an OCR job, a status change — belongs in a durable queue.
**Tell.** Asking "what happens if this pod is killed mid-task?" unprompted.

### 7. Auth and per-record authorization

**Model.** Authentication (who) and authorization (what) are separate. FastAPI gives you the first
cheaply via dependencies; the second is yours. Role checks at the endpoint are not enough when the
question is "can *this* manager see *this* applicant" — that is a per-row predicate and it belongs in
the query, not in a post-fetch `if`.
**Rule.** Scope every query by tenant/assignment in the `WHERE` clause. Return 404, not 403, for
records outside scope — 403 confirms the record exists.
**Tell.** Catching IDOR: an endpoint taking `application_id` and fetching by primary key alone.

### 8. Pagination

**Model.** Offset pagination (`LIMIT/OFFSET`) degrades linearly and skips or duplicates rows when the
underlying set changes between pages. Cursor pagination on a stable sort key is O(1) and stable, but
cannot jump to page N.
**Rule.** Cursor for feeds, queues, and anything append-heavy. Offset only for small bounded admin
tables. Always cap `limit` server-side — an uncapped `limit` is a denial-of-service parameter.
**Tell.** Naming the *skipped row* problem in an actively-changing work queue, not just the speed one.

### 9. Streaming: SSE and WebSocket

**Model.** `StreamingResponse` with an async generator streams tokens; SSE is one-way, reconnects
automatically, and survives proxies that buffer. WebSocket is bidirectional but you own reconnection,
heartbeats, and backpressure. Buffering proxies and `response_model` both defeat streaming.
**Rule.** SSE for LLM token streams. WebSocket only when the client must push mid-stream — voice,
barge-in, live collaboration.
**Tell.** Knowing that a generator which awaits the *entire* LLM response before yielding is not
streaming, regardless of the response class.

### 10. Error handling

**Model.** `HTTPException` for expected conditions; `@app.exception_handler` for mapping domain
exceptions to responses globally. An unhandled exception yields a 500 whose body may contain internals.
Validation errors return 422 with a body that echoes the input — which can echo PII into logs.
**Rule.** Map domain exceptions centrally. Never leak internals or the submitted payload. Log a
correlation ID, not the body.
**Tell.** Noticing that a 422 echoing an SSN into an error response is a disclosure bug.

### 11. Alembic migrations against live tables

**Model.** `ALTER TABLE ADD COLUMN NOT NULL` without a default rewrites and locks. Backfilling in one
transaction holds locks for the duration. Dropping a column breaks the currently-deployed app during
the rollout window.
**Rule.** Expand → migrate → contract, over three deploys: add nullable, backfill in batches, then
enforce and drop. Migrations must be reversible and must not import application models.
**Tell.** Reasoning about the window where old and new code run *simultaneously*.

---

## Artifact seeds

### Seed A — Applicant detail endpoint
Fetches an application with household members and documents, returns it.
**Defects:** ORM object returned directly, leaking SSN and immigration status; N+1 on household
members during serialization; fetch by primary key with no tenant scope (IDOR); `DetachedInstanceError`
waiting on a lazy relationship touched after teardown.
**Decoys:** a `joinedload` that looks redundant but prevents an N+1 in the response model.

### Seed B — Session dependency
A `get_db` dependency plus two endpoints using it.
**Defects:** module-level `Session` shared across requests; teardown after `yield` with no
`try/finally` so a failed request leaks a connection; a second dependency opening its own session and
splitting the transaction; missing `rollback` on exception.
**Decoys:** `use_cache=False` on a dependency where it is genuinely needed.

### Seed C — Document upload
Accepts an income document, stores it, kicks off OCR.
**Defects:** `file.read()` loading a 40MB scan fully into memory; `requests.post` to the OCR service
inside `async def`; `BackgroundTasks` for OCR with no retry or durability; no content-type or size
validation; original filename used as the storage path (traversal).
**Decoys:** a sync `def` endpoint that is correct precisely because the storage client is sync.

### Seed D — Leasing manager work queue
Lists and claims review tasks.
**Defects:** offset pagination on a queue that changes under the reader; uncapped `limit`;
check-then-act claim across two statements; role check that does not scope to assigned developments.
**Decoys:** a seemingly redundant `ORDER BY created_at, id` that is actually required for a stable cursor.

### Seed E — Agent chat streaming endpoint
Streams the AI agent's answer about an application.
**Defects:** the full LLM response awaited before the first yield (not actually streaming);
`response_model` set on a `StreamingResponse`; no client-disconnect handling so generation continues
and bills; conversation state in a module-level dict, so it leaks across users and dies on restart.
**Decoys:** a heartbeat comment frame that looks like dead code but keeps proxies from timing out.

### Seed F — Pydantic schemas
Request and response models for the application intake form.
**Defects:** the SQLAlchemy model reused as the API schema; `Optional` on fields that are actually
required; a validator with a side effect; 422 handler echoing the submitted body into the response.
**Decoys:** a `model_validator` doing genuine cross-field validation (income vs household size).

### Seed G — Auth dependency
`get_current_user` plus a manager-only route.
**Defects:** JWT decoded without verifying signature or expiry; role read from a client-supplied
header; 403 returned for out-of-scope records, confirming existence; token in a query parameter, so
it lands in access logs.
**Decoys:** a deliberately generic 404 that looks like a lost error case but is the correct
non-disclosure behavior.

### Seed H — Alembic migration
Adds a `verification_status` column to a live `applications` table.
**Defects:** `NOT NULL` with no default on a populated table; single-transaction backfill; a `down_revision`
that drops data irreversibly; the migration importing application models, so it breaks on the next
model change.
**Decoys:** a nullable-then-backfill split that looks needlessly cautious but is the correct expand phase.

---

## Follow-up question bank

**On concurrency**
- This is `async def` — what in it blocks, and what does that do to the other 200 in-flight requests?
- What happens if two managers claim this task in the same millisecond?

**On data access**
- How many queries does this endpoint actually issue for a household of six?
- Where is the check that this manager may see this applicant? What if I change the ID in the URL?
- What is the session's lifetime here, and what is still attached to it when the response serializes?

**On operations**
- The pod is killed right after the response is sent. What was lost?
- This is going out to a live table with 200k rows. What is the deploy sequence?
- Old frontend and new backend are both live for ten minutes during the rollout. What breaks?

**On the product**
- What does the applicant see when this fails?
- What would you cut to ship this by Friday?

---

## Blind-spot markers

- Knows plain `def` beats `async def` when the driver is sync
- Spots N+1 that lives in *serialization*, not in the visible query
- Treats `response_model` as a data-leak control, not formatting
- Asks what happens on pod restart mid-`BackgroundTask`
- Catches IDOR: fetch-by-PK with no tenant predicate
- Returns 404 rather than 403 for out-of-scope records
- Notices a "stream" that awaits the full response first
- Reasons about the simultaneous-old-and-new-code window during deploys
- In this domain: notices PII in logs, error bodies, URLs, and 422 echoes
