# Decision records

A decision record captures a choice that outlives the work that prompted it. It exists so nobody
re-argues a settled question, and so a reader can tell why the current shape is the current shape.

Templates: `ADR_TEMPLATE.md` for the record, `INDEX_TEMPLATE.md` for the log.

## When a decision earns a record

Write one when any of these holds.

1. **It constrains future work.** Later changes have to comply with it, or explicitly supersede it.
2. **It was expensive to reach.** Options were compared, evidence was gathered, or a human ratified
   it. That work is lost the moment it is not written down.
3. **It will look wrong later.** A choice whose reason is not visible in the code invites someone to
   "fix" it. The record is what stops that.
4. **It is not undone by an edit.** It moves money, deletes data, changes a published string, or
   commits to a vendor.
5. **Two or more components have to agree.** A convention only holds if there is one place stating
   it.

## When it belongs somewhere else

- **A plan.** A choice about sequencing, scope, or who does what. Plans expire. Records do not.
  If the plan's choice constrains work after the plan is finished, promote it to a record and cite
  the plan as the source.
- **A commit body.** A local implementation choice, reversible by editing one file, that no other
  component depends on. Name the alternative you rejected in the body and stop there.
- **A spec.** What the product does and why it should. A record argues how the system is built or
  which constraint was accepted; a spec states the behaviour promised.
- **A code comment.** A non-obvious line that would otherwise be simplified into a bug.

The failure mode is writing records for everything. A log of forty entries where six matter is a log
nobody reads, and the six lose their authority.

The opposite failure is a decision that lives only in a plan file. Plans are read once, and then the
constraint is invisible.

## The numbering rule

Four digits, zero-padded, assigned in the order records are written. Numbers are never reused and
files are never renumbered, because other documents cite them by number. The full convention is in
`INDEX_TEMPLATE.md`.

## Superseding

A decision is replaced, never edited. Write the new record, cite the old one in its pointers, and
set the old record's status to `Superseded by NNNN`. The old reasoning stays readable, which is how
the next reader learns what changed and what did not.

## What every record must answer

- What was chosen.
- What was rejected, and at what specific cost.
- What the choice traded: the gain and the loss, both stated.
- Whose decision it was, and when it was ratified.
- Which plan or discussion it came from, by path.

The last two are the ones people drop. Without them a reader cannot tell an invented constraint from
an instruction someone gave, and cannot find the argument that produced the record.
