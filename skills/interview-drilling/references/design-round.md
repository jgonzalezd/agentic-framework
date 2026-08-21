# System Design Round

Mode: `interview-drilling design`. No code. The user designs; the skill poses, stays quiet, probes,
then critiques.

## Beat structure

### 1. Pose, thinly

State the prompt in two or three sentences and **stop**. Real design rounds are deliberately
underspecified — the first thing being graded is whether the candidate extracts requirements or
starts drawing boxes.

Do not volunteer constraints. If asked a direct scoping question, answer it concretely and briefly
(as an interviewer would). If asked "what should I focus on," reflect it back: "that's your call."

### 2. Let them design

Silence. No leading questions, no reactions, no "good" or "hmm." Twenty to twenty-five minutes is the
realistic budget.

### 3. Probe one branch, three levels deep

This is where the round finds the floor. Pick the branch the user **underspecified** — not the one
they explained best — and push:

1. "How does that work?"
2. "What happens when it fails?"
3. "Now at 50x, with two of those running concurrently?"

Three levels is the point. One level tests preparation; three tests whether the design is understood
or recited. Then pick a second branch and do it again if time allows.

### 4. Critique

Grade on the five dimensions below and name the single thing that would most have improved the design.

## Grading dimensions

| Dimension | Weight | What earns it |
|---|---|---|
| Requirement extraction | High | Asked who the users are, scale, what "done" means, what is out of scope — **before** designing |
| Data model | High | Entities, relationships, and what is the source of truth. Most designs fail here, quietly |
| Failure modes | High | Each dependency has a stated degraded mode. This is the senior separator |
| Explicit non-goals | Medium | Said what they were *not* building and why. On a 4-person team this is the whole job |
| Communication | Medium | Led with the shape, then drilled. Did not narrate a box diagram left to right |

Deliberately *not* weighted: naming specific technologies. "Postgres or Dynamo" matters far less than
knowing what the access pattern is.

## Prompts

Drawn from the target product. Pose one; the parenthetical is for the grader, not the candidate.

**P1 — Document intake.** "Applicants upload income documents. Design the system that takes an upload
and produces verified income data a leasing manager can act on."
*(Probes: async pipeline state, OCR confidence thresholds, human-in-the-loop, retry/idempotency,
immutable original, PII at rest.)*

**P2 — The agent.** "Design the backend for the voice + text agent that answers applicant questions
about their application."
*(Probes: retrieval vs SQL split, grounding, refusal boundaries, streaming and TTFT, conversation
state, audit of what the agent said, human handoff, provider outage.)*

**P3 — Application data model.** "Model an application from submission through decision, including
household members and income. It must be possible to explain a decision made a year ago."
*(Probes: append-only vs mutable status, decision-time snapshots, household validity dates, soft
delete, current-state vs historical-truth split.)*

**P4 — Manager work queues.** "Leasing managers across many developments need a queue of applications
needing review. Design it."
*(Probes: tenant isolation, claim/assignment concurrency, cursor pagination on a changing set, SLA
tracking, fairness of assignment.)*

**P5 — Notices and deadlines.** "Applicants must be notified of document requests and respond-by
dates, across email, SMS, and the portal. Design it."
*(Probes: idempotency and double-send, scheduling, delivery failure, language access, audit of what
was sent, timezone correctness.)*

**P6 — Multi-agency expansion.** "You're live in NYC. A second city wants to use this. What changes?"
*(Probes: tenancy boundaries, rules-as-configuration vs hardcoded, migration path, what genuinely
does not generalize. The "expand into new product areas" question in disguise.)*

## Interviewer discipline

- **Never fill a silence.** Thinking time is data.
- **Do not accept a technology name as an answer.** "I'd use Kafka" → "what does that buy you here?"
- **Push on the weakest branch, not the strongest.** Politeness ruins the round's diagnostic value.
- **Ask the scope question at least once**: "It's Friday and this ships Monday. What's in?"
- **In this domain, ask once about the applicant**: "What does the person on the other end see when
  this fails?" A design that never mentions the user is incomplete regardless of its architecture.
