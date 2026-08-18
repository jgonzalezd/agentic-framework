# Insight template

Copy the block below to `insights/NNNN-short-slug.md`. Take the next unused number, zero-padded to
four digits. Then add a row to `insights/INSIGHTS.md`.

An insight records one codified learning. It has three parts: the signal observed, how it was read,
and the write-back it produced. It is the durable record of why the product or the process changed.

Trigger: a change was made to a spec, a rule, a template, or a decision record, and the reason for
that change came from evidence rather than from a feature request. Every codified change earns one
entry.

```markdown
# NNNN — <title>

- **Date:** YYYY-MM-DD
- **Signal source:** metric | user feedback | agent reflection | incident | review trace
- **Review:** <path to the review that produced it, or "ad hoc">

## What we observed
The evidence. Numbers with their window, or the count of instances, or the verbatim feedback.
State how strong the evidence is.

## How we interpreted it
The reading being acted on. Name the alternative reading that was rejected, and why.

## What we changed (write-backs)
- <path> — <what it said before, what it says now>

## What to watch next
The observation that would show the write-back worked, and the observation that would show it did
not.
```

## The index row

`insights/INSIGHTS.md` holds one row per entry:

```markdown
| # | Date | Insight | Signal source | Wrote back to |
|---|---|---|---|---|
| [0001](./0001-short-slug.md) | YYYY-MM-DD | <one sentence, the finding not the topic> | <source> | `<path>`, `<path>` |
```

The Insight column states the finding. A row reading "reviewed the export flow" names a topic and is
useless at a glance.

## Rules

- No write-back, no insight. An observation with nothing changed belongs in a reflection.
- Cite the artefact that changed by path, not by name.
- An insight that promotes a `PATTERNS.md` row links that row and marks it `codified`.
