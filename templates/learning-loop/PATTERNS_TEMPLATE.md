# Recurrence patterns — the association index

Copy this file to `reflections/PATTERNS.md`.

One row per recurring underlying issue, with every instance that belongs to it. This is what turns a
flat journal into something that notices repeats. A journal alone re-logs the same problem forever
without connecting the occurrences.

Each instance names its date and links its source: a reflection block, a postmortem, or an insight.

**Status legend**

- `watch` — one instance. The pattern is unconfirmed.
- `open` — two or more instances. Ripe for an insight entry and a preventive write-back.
- `codified` — a write-back landed. Link it.

The preventive step is the write-back, not this table. An `open` pattern becomes a rule in the file
every session loads, so the next person or agent is warned before repeating it.

| Pattern | Slug | Status | Instances | Preventive write-back |
|---|---|---|---|---|
| **<one sentence stating the underlying issue, not the symptom>.** <Two or three sentences on how it presents and what to check.> | `short-slug` | **watch** | • `YYYY-MM-DD` — <what happened, with a link to the reflection or postmortem>. | — |
| **A guard encodes a state assumption that a later redesign invalidated.** The condition looks correct read alone. The defect is only visible when the two handlers that set and read the state are traced together. | `stale-state-guard` | **codified** | • `YYYY-MM-DD` — <instance>.<br>• `YYYY-MM-DD` — <instance>. | **Landed:** `<path>` → insight [`NNNN`](../insights/NNNN-slug.md) |

> Opening a row for a brand-new pattern at one instance is correct. Mark it `watch`. The point is
> that the second time it happens, the connection is already there to find.

## Rules

- The Pattern column states the underlying issue. A row naming a symptom collects nothing.
- A slug is coined once and never renamed. Reflections cite it.
- Every instance carries a date and a link. An instance with neither cannot be audited.
- Promotion to `open` is mechanical at two instances. It is not a judgement call.
- A row reaching `codified` stays in the table. Removing it loses the association for the next
  instance.
