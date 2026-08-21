# Critique Rubric

How to grade beat 4. Score against `state/session-<n>-ledger.md`, which was written before the user
saw the artifact.

## Contents

- The five signals
- Scoring scale
- Calibration examples (junior / mid / senior write-ups of the same defect)
- Report format
- Grader discipline

## The five signals

Each scored 0–3. Total out of 15.

### 1. Correctness catch

Did the user find the real defects? Score on coverage of the ledger, weighted by severity — a missed
critical outweighs three missed nitpicks.

- **3** — found every critical and high, plus most mediums
- **2** — found all criticals, missed some highs
- **1** — missed a critical but found real issues
- **0** — surfaced only style and naming

### 2. Consequence framing

Did they say *what breaks, for whom, and when*? This is the single strongest seniority signal.

- **3** — named the failure mode, who it hits, and under what conditions ("under concurrent uploads
  two managers both claim the same review task")
- **2** — named the failure mode but not the conditions
- **1** — asserted wrongness without a mechanism ("this is a race condition" with no path)
- **0** — described what the code does rather than what goes wrong

### 3. Trade-off literacy

Did they consider what the author was plausibly optimizing for before calling it wrong? This is what
separates a reviewer people want to work with from one they route around.

- **3** — named the plausible motivation and why it does not hold here
- **2** — acknowledged a trade-off exists
- **1** — treated a judgment call as an objective error
- **0** — style-guide recitation

### 4. Precision

Did they avoid flagging the decoys? Count each false positive.

- **3** — zero false positives
- **2** — one FP, hedged ("this might be fine if X, but worth checking")
- **1** — one FP asserted confidently
- **0** — two or more confident false positives

Flagging correct code is a stronger negative signal in a real interview than missing a bug. Grade it
that way, and say so explicitly when it happens.

### 5. Prioritization

Did they lead with what matters?

- **3** — opened with the highest-severity defect and ordered the rest sensibly
- **2** — covered everything but in arbitrary order
- **1** — buried the critical finding under nitpicks
- **0** — no ordering, and the biggest issue never surfaced as biggest

## Calibration examples

The same seeded defect — a leasing manager work-queue endpoint that reads a task, checks it is
unclaimed, and writes the claim in two separate statements — written up three ways.

**Junior (correctness 2, consequence 1, trade-off 0, prioritization 1):**
> There's a race condition on line 34. You should use a lock.

Found it. But "race condition" is asserted, not demonstrated; no interleaving is described; the fix
is named without considering whether the DB can do it. Nothing here proves they could have found it
without pattern-matching the shape.

**Mid (correctness 3, consequence 2, trade-off 1, prioritization 2):**
> Line 34 does a read-then-write without a transaction, so two requests can both see
> `claimed_by IS NULL` and both write. You'd want `SELECT ... FOR UPDATE` or a conditional update.

Real mechanism, real fix. Still missing: who this hurts and how often, and any acknowledgment of why
it might have been written this way.

**Senior (3 across the board):**
> Highest-priority issue: the claim on line 34 is a check-then-act across two statements, so under
> concurrent polling two managers both see `claimed_by IS NULL` and both write — last write wins,
> silently. In practice that means two people work the same income verification and an applicant gets
> two conflicting document requests, which in this domain is a real complaint, not just wasted work.
> The window is small but the queue is polled, so it will happen weekly at any volume.
>
> I'd make it a conditional update — `UPDATE ... WHERE id = ? AND claimed_by IS NULL` — and treat
> `rowcount == 0` as "someone beat you to it," returning the next task instead of erroring. That
> keeps it one round trip, which I suspect is what the two-statement version was going for.
>
> Lower priority: [...]

Note what makes it senior: the interleaving is spelled out, the consequence lands on an *applicant*,
the frequency is estimated, the fix handles the losing branch, and the author's likely motivation is
named and preserved.

## Report format

```markdown
## Grade: N/15

**Hits (X of Y)**
- <defect> — <one line on write-up quality: what made it strong or thin>

**Misses (Z)**
- <defect, location> — <what it breaks, for whom> — <what a senior write-up sounds like>

**False positives (N)**
- <what they flagged> — this is actually correct because <reason>

**Signals**
| Correctness | Consequence | Trade-off | Precision | Prioritization |
|---|---|---|---|---|
| n/3 | n/3 | n/3 | n/3 | n/3 |

**Blind spot** — <one line, the pattern to carry into `progress.md`>
```

## Grader discipline

- Grade against the ledger, not against what the user said. If they raise something real that is not
  in the ledger, credit it — and note that the ledger missed it.
- Do not inflate. A 15/15 on an early drill means the artifact was too easy; say so and raise
  difficulty rather than letting the score stand as achievement.
- Do not soften misses. The point of a miss is that it is now memorable.
- One blind spot per drill, not five. It has to be carryable into the next session.
