# Postmortem template (blame-free)

Copy the block below to `postmortems/NNNN-short-slug.md`. Take the next unused number, zero-padded
to four digits.

Blame-free means the subject is the system, never a person. The output is a write-back: a change to
a spec, a decision record, an agent rule, or the instrumentation. A postmortem with no write-back is
unfinished.

Trigger: something broke, shipped wrong, or was found to have been wrong for a while. Severity does
not gate it. A defect nobody noticed for a month is worth more than an outage everybody saw.

```markdown
# NNNN — <incident title>

- **Date:** YYYY-MM-DD (resolved YYYY-MM-DD)
- **Status:** investigating | mitigated | resolved
- **Affected spec(s) / component(s):** <path>
- **Detected by:** <metric, alert, test, user report, or review trace>
- **Pattern:** `<slug>` — the row in `reflections/PATTERNS.md` this instance belongs to. Omit if
  genuinely novel. If it feels familiar and has no slug, coin one and open its row.

## Summary
One paragraph. What happened, who was affected, how large, how long.

## Signals
- Metrics or events: <what the numbers showed, and over what window>
- User feedback: <verbatim or theme, with its source>
- Agent reflections: <if a reflection surfaced it>

## Timeline
- <when it started> — <what was happening>
- <when it was noticed> — <what was seen, and by whom>
- <when it was mitigated> — <what was done>

## Root cause and contributing factors
The system conditions that allowed it. Name every condition that had to hold.
State why the defect was not visible earlier.

## What we changed (write-backs)
- <file or artefact> — <what it said before, what it says now, why>

## Follow-ups
- [ ] <action> — <owner>
```

## Rules

- One incident per file. Two incidents sharing a cause are two files and one `PATTERNS.md` row.
- The write-back section names paths. An outcome with no path cannot be checked.
- A follow-up with no owner is not a follow-up.
- Reopen the file when a follow-up lands. Postmortems stay accurate after the incident closes.
