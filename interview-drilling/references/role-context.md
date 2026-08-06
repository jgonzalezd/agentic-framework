# Role Context

The target role this skill is calibrated to. Read before the first drill of a session so artifacts,
follow-ups, and grading are pitched correctly.

## The role

A ~4-person engineering team at a startup building software for **public housing applications in NYC**.
Users are **applicants** and **leasing managers**. The product includes a **voice + text AI agent** that
answers basic questions about applications. Platform is **FastAPI + Next.js**, already live in
production. The hire works **directly with the CEO**, across the full stack, and is expected to help
**expand into new product areas**.

## What each fact implies for the interview

### Regulated, public-benefit domain

The user on the other end is a family trying to get housing. A wrong answer has consequences that a
wrong answer in a B2B SaaS dashboard does not.

- Correctness and auditability beat cleverness. A clear, boring, testable implementation wins.
- PII is everywhere: names, addresses, SSNs, income documents, household composition, immigration
  status, disability accommodations. Any artifact that logs a request body or puts a document into a
  prompt is a defect, not a style issue.
- Authorization is per-record, not per-role. "Can this leasing manager see this applicant?" is the
  question, and it is answered per row.
- "What did we tell this applicant, and when?" is a real product requirement. Audit trails are a
  feature, not infrastructure hygiene.
- Fairness matters structurally: anything that silently ranks, filters, or deprioritizes applicants
  needs to be explainable.

### Live platform

- Migrations run against tables with real applicants in them. Adding a `NOT NULL` column without a
  default, or backfilling in one transaction, is a production incident.
- Backwards compatibility on API responses — the deployed Next.js frontend is a client you cannot
  atomically upgrade with the backend.
- No big-bang rewrites. If asked how to fix something structural, the answer is a strangler-fig path
  with a shipping order, not a rewrite plan.

### ~4 engineers, direct CEO contact

- **Scope negotiation is a tested skill.** Expect "what would you cut?" A thin-slice plan with a
  shipping order beats an architecture diagram every time.
- No platform team, no dedicated SRE, no QA. Whatever gets built gets owned. Prefer boring managed
  services over infrastructure to operate.
- Being able to say "I'd ship the dumb version this week and learn whether anyone uses it" is a
  positive signal, not a lack of rigor.

### Voice + text agent over application state

This is the most interesting technical surface and the most likely deep-dive. The hard parts:

- **Grounding** — answers must come from *this applicant's actual record*, not the model's priors
  about how housing programs generally work.
- **Refusal** — eligibility determinations and legal advice are out of bounds. The agent says what
  the record says and routes the rest to a human. Knowing *where that line is* is the senior answer.
- **ASR failure modes** — names, street addresses, and apartment numbers are exactly what speech
  recognition gets wrong, and exactly what the agent needs right. Confirmation strategies matter.
- **Latency** — time-to-first-token and barge-in handling define whether a voice agent feels alive.
  Batch-shaped thinking (retrieve everything, then generate) is the wrong instinct here.
- **Language access** — NYC housing services serve many non-English speakers. This will impress if
  raised unprompted.
- **Fallback to a human** — every path needs one, and the handoff should carry context.

### "Expand into new product areas"

They are hiring someone to own a vertical, not close tickets. Questions about *why* a feature exists
and who it serves are being evaluated as much as the code.

## What interviewers weight (2026 signal)

- **Why, not what.** "I used `useCallback` here" is not an answer. "I memoized because this prop
  drives a child that re-renders on every keystroke" is.
- **Production awareness over architecture diagrams.** Cost, latency, guardrails, monitoring, and
  failure modes are the senior tells in AI-feature rounds.
- **FastAPI rounds probe real fluency** — DI, the request lifecycle, what actually blocks the event
  loop — not framework trivia.
- **Precision under review.** Confidently flagging correct code is a stronger negative signal than
  missing something.

## Calibration notes for artifacts

Draw scenarios from this world, never from `Foo`/`Bar`:

- household composition and income-limit eligibility (AMI bands)
- income document upload → OCR → extraction → verification → human review
- application status timeline and the agent that answers questions about it
- leasing manager work queues, assignment, and SLA tracking
- lottery log numbers, waitlist position, and preference categories
- notices and deadlines (respond-by dates, document requests)
- multi-development / multi-property tenancy boundaries
