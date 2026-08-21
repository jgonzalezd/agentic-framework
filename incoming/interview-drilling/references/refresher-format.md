# Refresher Format

The beat-1 refresher uses the **trap unit** shape defined in
[../../python-bootcamp/references/lesson-format.md](../../python-bootcamp/references/lesson-format.md).
That file is the single source of truth for the teaching register, the ten-part shape, the hard rules,
the worked example, and the anti-patterns. Read it before writing a refresher.

The register in particular is not negotiable and was not cheap: it took four rounds of user review to
arrive at book prose — complete declarative sentences, one idea per sentence, explicit transitions,
the register of *Effective Java* and *Practical Object-Oriented Design in Ruby* — rather than the
compressed assistant prose that reads as word salad to this reader. Duplicating those rules here
would let the two copies drift, which is why this file is a pointer.

## The three drill-specific constraints

Everything below is additional to `lesson-format.md`, and applies only when the lesson is serving as
beat 1 of a drill.

**Length is fixed at 1,000–1,500 words.** A drill refresher always uses the trap shape, never the
shorter syntax shape, because the artifact that follows always contains traps.

**Never telegraph the artifact.** The refresher must not hint at which defects are seeded in the code
the user is about to review. Keep the examples generic, or draw them from a different corner of the
domain than the artifact uses. A reader who can predict the defect ledger from the refresher has been
given the answer, and the drill measures nothing.

**Shorten to a recap when the bootcamp already taught it.** Read
`~/.claude/skills/python-bootcamp/state/progress.md`. If the drill topic maps to a unit already
covered there, do not re-teach it from scratch. Deliver roughly 200 words reactivating the mechanism
and the decision rule, then link the saved lesson at
`~/.claude/skills/python-bootcamp/state/lessons/<unit-id>-<slug>.md` so the user can reread the full
treatment if they want it. Teaching the same material twice wastes the session; the drill's value is
the artifact, not the lecture.
