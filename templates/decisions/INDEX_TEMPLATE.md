# Decision log

Copy this file to `decisions/INDEX.md`.

Cross-cutting product and architecture decisions, with the trade-offs behind them. One file per
decision. Other documents link here instead of re-arguing a settled choice.

To add a decision: copy `ADR_TEMPLATE.md` to `NNNN-short-slug.md`, take the next number, and add a
row below.

| # | Title | Status | Date | Decided by |
|---|---|---|---|---|
| [0001](./0001-short-slug.md) | <the choice, in one line> | Accepted | YYYY-MM-DD | <name or role> |
| [0002](./0002-short-slug.md) | <the choice, in one line> | Superseded by 0004 | YYYY-MM-DD | <name or role> |

> Status values: `Proposed` · `Accepted` · `Superseded by NNNN` · `Deprecated`.

## The numbering convention

- Four digits, zero-padded, starting at `0001`. The filename is `NNNN-short-slug.md`.
- Numbers are assigned in the order decisions are recorded, not in the order they were made.
- A number is never reused, even when the file is superseded or deprecated.
- A file is never renumbered. Other documents cite decisions by number, and renumbering breaks every
  citation silently.
- The slug is lowercase and hyphenated. It may be reworded only if the file is new.
- Two people drafting at once will collide on the next number. Resolve it when the second lands:
  renumber the unmerged file, never the merged one.

## The row convention

- The Title column states the choice made, so the log is readable without opening any file. A row
  naming a topic makes the reader open every file to find the one they want.
- The Title column matches the record's own heading. Keeping them identical lets a lint check it.
- Every row links its file. A row with no file, or a file with no row, is a defect worth linting.
