---
name: interview-drilling
description: >
  Drills technical interview readiness for full-stack Python and AI engineering roles by writing
  realistic flawed code for the user to critique, grading that critique against a defect ledger
  committed to disk beforehand, and tracking recurring blind spots across sessions. Every drill
  opens with a succinct refresher. Covers Python language and OOP (composition vs inheritance,
  protocols, dataclasses, decorators, async), FastAPI (dependency injection, sessions, N+1,
  streaming, migrations), production AI features (RAG, tool-calling agents, evals, guardrails,
  voice pipelines), and systems architecture (multi-tenancy, intake pipelines, idempotency, audit
  logs), plus system-design and behavioral rounds. Use when the user is preparing for a coding,
  technical, or system-design interview, wants to practice code review, asks to be quizzed or
  drilled on Python/FastAPI/LLM topics, or wants a refresher before an interview.
---

# Interview Drilling

A spaced drill loop for technical interview prep. The inversion that makes it work: **the skill writes
the code, the user critiques it.** Reading flawed code, naming what breaks and for whom, and *not*
flagging things that are actually fine is the exact signal these interviews test — and it is several
times faster per session than writing code from scratch.

Target role context: see [references/role-context.md](references/role-context.md). Read it before the
first drill of a session so artifacts and follow-ups are pitched at the right role.

## State location

All `state/` paths in this document mean **`~/.claude/skills/interview-drilling/state/`**, never a
directory relative to the current working directory. This skill runs from wherever the user happens
to be; it MUST NOT write drill state into their project.

## Modes

| Invocation | Behavior |
|---|---|
| `interview-drilling` | Read `state/progress.md`, pick the weakest track, run one drill |
| `interview-drilling <track> [topic]` | Targeted drill, e.g. `python composition`, `fastapi sessions` |
| `interview-drilling design` | System design round — no code. See [references/design-round.md](references/design-round.md) |
| `interview-drilling behavioral` | STAR mining + questions to ask. See [references/behavioral.md](references/behavioral.md) |
| `interview-drilling mock` | ~60-min simulated loop, 3–4 drills across tracks, one consolidated debrief |
| `interview-drilling review` | Progress report, recurring blind spots, ranked study plan |

## Tracks

Load **only** the one track file the drill needs. Loading all four wastes context and produces
generic artifacts.

| Track | File | Covers |
|---|---|---|
| `python` | [references/tracks/python-oop.md](references/tracks/python-oop.md) | Composition vs inheritance, Protocols/ABCs, dataclasses vs Pydantic, dunders, decorators, generators, context managers, async internals, mutability traps, MRO, typing, pytest |
| `fastapi` | [references/tracks/fastapi.md](references/tracks/fastapi.md) | DI and `yield` deps, request lifecycle, async vs sync, Pydantic v2, SQLAlchemy sessions and N+1, background tasks, authz, pagination, SSE/WebSocket, Alembic |
| `ai` | [references/tracks/ai-features.md](references/tracks/ai-features.md) | Prompt vs RAG vs fine-tune, tool-calling agents, structured output, evals, grounding and refusal, prompt injection, PII, cost/latency, voice pipeline |
| `architecture` | [references/tracks/systems-architecture.md](references/tracks/systems-architecture.md) | Multi-tenancy and row-level access, document intake pipelines, idempotency, audit logs, caching, job design, observability, API evolution |

To add a track, copy [references/tracks/\_TEMPLATE.md](references/tracks/_TEMPLATE.md) and add a row
above. No other edits needed.

## The drill loop

Five beats. Run them in order. Do not compress.

### Beat 1 — Refresher

Before any code, deliver a refresher on the topic as a **complete book item** in the nine-part
shape defined in [references/refresher-format.md](references/refresher-format.md): why it matters,
the mechanism, the trap shown breaking **with the bug as values** (`# expected: X — actual: Y`),
the fix re-running the same demo, when the risky tool is the right call, when it's mandatory, a
named open-source library using it in the wild, the decision rule, and the interview probes.
1,000–1,500 words; every snippet followed by a walk-through. Written **in book prose** per the
Voice section of the format file — complete declarative sentences with explicit transitions, the
register of Effective Java and POODR, never compressed assistant prose.

The reader is a strong engineer coming from **Ruby and Java** — ground every Python-specific
semantic in plain language and bridge from those languages where it clarifies; never assume
Python-idiom fluency.

The user asked for this explicitly. It is not optional and it does not get skipped because the topic
seems basic.

### Beat 2 — Commit the ledger, then show the artifact

Pick 1–3 artifact seeds from the track file. Write a realistic code sample set in the target
product's domain (housing applications, eligibility, income-document intake, application-status
agent, leasing-manager queues) — not `Foo`/`Bar` toy code. 40–120 lines is the useful range.

Seed it with:
- **3–6 real defects** at mixed severity (at least one that only bites in production — concurrency,
  scale, a partial failure — not just a style issue)
- **1–2 decoys**: code that pattern-matches to "bug" but is correct in context

**MUST**, in this order:
1. Write the defect ledger to `state/session-<n>-ledger.md` — every defect and decoy, with location,
   severity, why it breaks, and what a senior write-up of it sounds like. The file MUST open with a
   `SPOILERS — do not read until beat 4` header, since the write renders in the user's terminal.
2. Only then print the artifact, with a one-line note not to expand the ledger write above.

The ledger is a commitment made before seeing the user's answer. Without it, grading drifts into
agreeing with whatever the user happened to say, and the exercise is worthless.

**MUST NOT** reveal, summarize, hint at, or gesture toward ledger contents during beats 2–3.

### Beat 3 — The user critiques

Hand it over and stop. Offer a timer (12 min is a realistic PR-review budget for ~80 lines).

**MUST NOT** hint, lead, ask Socratic questions, react to partial answers, or grade incrementally.
Silence is the point — a real interviewer is watching, not helping. If the user asks a clarifying
question about *what the code is supposed to do*, answer it. If they fish for whether they're on the
right track, decline and hold.

### Beat 4 — Grade against the ledger

Read `state/session-<n>-ledger.md`. Score with
[references/critique-rubric.md](references/critique-rubric.md) — five signals, 0–3 each:

1. **Correctness catch** — found the real defect
2. **Consequence framing** — said what breaks and for whom, not "this is wrong"
3. **Trade-off literacy** — named what the author was plausibly optimizing for
4. **Precision** — did not flag the decoys
5. **Prioritization** — led with what pages someone at 2am

Report as: **hits** (with a note on write-up quality), **misses** (with the defect revealed and its
consequence), **false positives** (each decoy flagged, and why it is actually correct).

**MUST** score false positives against the user. Flagging correct code reads as junior faster than
missing a bug does, and no other prep tool trains this.

Be a hard grader. A 15/15 on an early drill means the artifact was too easy — say so and raise the
difficulty next time rather than inflating the score.

### Beat 5 — Follow-ups and repair

Ask 3–5 interviewer follow-ups drawn from the track's question bank, specific to *this* artifact
("why composition here rather than a base class?", "what breaks at 10k applicants?", "how would you
test this?"). Let the user answer; grade briefly.

Then show the corrected version with one line of rationale per fix.

Finally, **MUST** append one row to `state/progress.md`:

```
| YYYY-MM-DD | track | topic | hits/total | FPs | one-line blind spot |
```

Create the file with that header row if it does not exist. Never rewrite existing rows.

## Difficulty calibration

Read `state/progress.md` at the start of every drill.

- First drill on a topic → 3 defects, 1 decoy, defects visible within a single function
- Scoring ≥ 70% on a track → 5–6 defects, 2 decoys, at least one defect that requires reading two
  files together or reasoning about concurrency
- A blind spot recurring 2+ times → seed that exact defect class again, in a different disguise,
  without announcing it

## Hard rules

- MUST write the ledger to `state/` before printing any artifact.
- MUST NOT reveal ledger contents before beat 4.
- MUST include at least one decoy in every code artifact.
- MUST score false positives against the user.
- MUST append to `state/progress.md` after every drill.
- MUST NOT skip the refresher.
- Load one track file per drill, not all of them.
