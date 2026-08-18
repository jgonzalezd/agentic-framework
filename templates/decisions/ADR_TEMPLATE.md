# Decision record template

Copy the block below to `decisions/NNNN-short-slug.md`. Take the next unused number, zero-padded to
four digits. Then add a row to `decisions/INDEX.md`.

Five fields are mandatory and are the reason this template exists.

1. **Decision** — what was chosen.
2. **Rejected alternatives** — what was not chosen, and why each was rejected.
3. **Consequences and trade-offs** — what the choice costs, stated beside what it buys.
4. **Decided by** — whose decision it was, and when it was ratified.
5. **Source** — the plan file or discussion the decision came from, by path.

A record missing any of the five is incomplete. A reader six months later cannot tell an invented
constraint from an instruction, and cannot tell a considered rejection from an option nobody saw.

```markdown
# NNNN — <decision title, stated as the choice made>

- **Status:** Proposed | Accepted | Superseded by NNNN | Deprecated
- **Date:** YYYY-MM-DD
- **Decided by:** <name or role> — ratified YYYY-MM-DD. <If it followed from an earlier decision or
  an explicit instruction, quote the instruction.>
- **Source:** `<path to the plan, issue, or discussion this came from>`
- **Affects:** `<component>`, `<spec>`, `<policy>` — the surfaces this constrains.

## Context
Why a decision was needed. The constraint, the cost, or the conflict that forced it.
State what was measured and what was assumed. Mark which is which.

## Decision
What was chosen, in the present tense, as a rule someone can follow.
Be specific enough that a reader can tell whether a later change violates it.

## Rejected alternatives
- **<option>** — <why it was rejected. Name the specific cost, not a preference.>
- **<option>** — <why it was rejected.>

## Consequences and trade-offs
- **Gains:** <what this buys, concretely>
- **Costs:** <what this gives up, concretely>
- <What has to be true for the choice to keep holding.>
- <What would reverse it. If reversing it is a new decision, say so.>

## Open questions
Anything deliberately left undecided, and who decides it. Do not resolve these in code.

## Pointers
Related decisions by number and path. Implementation locations. Prior analysis.
```

## Rules

- The title states the choice, not the topic. "Store state on the client only" is a title. "State
  storage" is not.
- Both sides of every trade-off, or drop the line. Half a trade-off is not a finding.
- Superseding never edits the old record. Set its status to `Superseded by NNNN` and write a new
  file. The old reasoning stays readable.
- A decision that turns out to be wrong stays in the log. Deleting it removes the evidence that the
  reasoning was reconsidered.
- Keep implementation detail in pointers. The record argues the choice; the code performs it.
