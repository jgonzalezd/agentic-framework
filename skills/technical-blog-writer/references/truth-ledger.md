# The Truth Ledger

> Read at **Phase 1**, before any angle exists. The ordering is the whole mechanism: an angle chosen first selects the evidence that flatters it, and once a plausible number is in a draft it survives to publication.

---

## The ledger

One table, built from the repository, before drafting.

| Claim | Exact source | Status |
|---|---|---|
| The linter is 391 lines with no dependencies | `templates/spec-system/verify-specs.mjs`, `wc -l`, no imports outside node builtins | verified |
| 8 commits on 2026-08-18 | `git log --format='%h %ad %s'` | verified |
| It saved me time | — | unusable |

Three statuses and nothing else:

- **verified** — you can point at the artifact. A file and a line count, a commit hash and a date, a recorded run, a quoted output.
- **user-must-confirm** — you believe it is true but only the user can attest. Anything about intent, motivation, how long something felt, what happened at a company, or a result measured before this session. Carry it to the Phase 3.5 gate as an explicit question.
- **unusable** — plausible and unsourced. It does not enter the draft in any form, including a softened one. "It saved me time" does not become "it seemed to save time"; it is cut.

---

## The silent completion test

For every concrete-sounding claim, silently finish the sentence *"this comes from…"*.

If the completion names a commit, a file, a dated run, a documented source, or an observation the user made and can attest to, the claim is fine. If the completion is "I made it sound right", the claim is fabricated, however reasonable it is. Reasonable is exactly what makes it dangerous: a fabricated claim that is obviously wrong gets caught, and a fabricated claim that is plausible gets quoted back in an interview.

---

## Citing reads as diligence, claiming reads as bluffing

This matters more for this audience than for any other. A senior engineer reading a post assumes the author is selling. Attribution is the cheapest way to stop reading as a salesperson:

- "The run across my older project reported 38 specs verified" beats "it verifies dozens of specs".
- "I measured this once, on 2 of my own repositories, so treat it as an anecdote" beats silence about the sample.
- "The Node docs describe this behaviour" beats stating it as personal knowledge when it is not.

The reverse is also true. A number stated with no provenance, in a post whose whole argument rests on it, invites the reader to check. If they check and it does not hold, nothing else in the post survives.

---

## Mining a repository

Work through this list. Everything here is read-only; the skill never writes to the subject repository.

1. **`git log --format='%h %ad %s' --date=short`** — the real dates, the real commit count, the real sequence. Message text is often the best record of what the problem was at the time.
2. **`git log --stat`** on the load-bearing commits — what actually changed, and how much.
3. **The README and any design, evolution or decision documents.** These carry the intent, which is the part of a post that cannot be reconstructed later.
4. **`wc -l` on the files the argument depends on.** Size is evidence of what kind of thing something is; a 391-line tool and a 4,000-line tool make different arguments.
5. **Numbers the repository already recorded.** Run outputs, benchmark notes, incident write-ups, a dated experiment. These are the strongest rows in the ledger because they were measured before anyone was writing a post about them.
6. **What is absent.** No tests, no CI, no benchmarks, one contributor, 3 days of history. Absence is a fact and belongs in the ledger as a row.

Never run the project's build or test suite to generate a number for the post unless the user asks. A number produced specifically to be quoted is a number produced under a conflict of interest, and it should be labelled as one if it is used at all.

---

## Numbers from private or client codebases

Common case: the tool lives in a public repository, but the results came from private ones.

The rule is that the number survives and the source gets genericised, and the post says that it was genericised. "Across 2 of my own product repositories, which are private" is honest and costs nothing. "Across 2 production codebases" implies clients and is a quiet upgrade of the claim, which is the failure this rule exists to prevent.

Never name a client, a company or a private repository without explicit approval at the Phase 3.5 gate. Never quote code, error output, file paths or commit messages from a private repository — paraphrase the shape of the problem instead.

---

## The fabrication sweep

Run at Phase 4.5 and again before delivering:

```bash
grep -onE '[0-9][0-9,.]*%?|\$[0-9]+' "$DRAFT" | sort -u
```

Every hit maps to a ledger row. Present the mapping in the deliverable as a two-column list, value beside source, so the user can audit it in 10 seconds. A value with no row is cut before delivery, not flagged for later.

Version numbers, years and code excerpts will show up in the sweep. They still get checked, because a wrong version number is a fabrication like any other.

---

## What belongs in the post and what does not

The ledger is a working document. It goes in the deliverable message so the user can audit the claims, and it never goes in the post itself. A post that shows its own evidence table reads as defensive, and the citation work should be invisible: it shows up as a post whose every number happens to be right.

---

**Created:** 2026-08-20. Derived from the evidence-inventory pattern in `pricing-strategist` and the research-veneer rules in the OutperformerVault voice engine.
