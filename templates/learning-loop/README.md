# The learning loop

A learning loop is closed when an observation changes a file that future work reads. Anything short
of that is a log.

Most projects have logs. They record incidents, they record friction, and nothing downstream reads
them. The loop below exists to make the write-back mandatory and auditable.

Operating model: **agent-drafted, human-ratified.** Agents gather signals and draft the write-backs.
A human approves, edits, or rejects each one. Nothing lands unratified.

## The four artefacts

| Artefact | File | Written when | Written by |
|---|---|---|---|
| Reflection | `reflections/JOURNAL.md` | End of any non-trivial task | The person or agent who did the task |
| Pattern row | `reflections/PATTERNS.md` | A reflection or incident resembles an earlier one | Whoever notices the resemblance |
| Postmortem | `postmortems/NNNN-slug.md` | Something broke, shipped wrong, or was wrong unnoticed | Whoever investigated |
| Insight | `insights/NNNN-slug.md` | A write-back landed | The review that ratified it |

Templates: `POSTMORTEM_TEMPLATE.md`, `INSIGHT_TEMPLATE.md`, `PATTERNS_TEMPLATE.md`.

## How they relate

Reflections and postmortems are inputs. They are cheap, frequent, and unprocessed.

`PATTERNS.md` is the index that connects them. A reflection tags a pattern slug; the instance is
associated there permanently. One instance is noise. Two instances are a system defect.

Insights are outputs. An insight exists only because something changed. It names the file that
changed and what it said before.

```
task done ──► reflection ──┐
                           ├──► PATTERNS.md row ──► (2+ instances) ──► review ──► write-back ──► insight
incident ──► postmortem ───┘                                                          │
                                                                                      ▼
                                                        the rule file, the template, or the spec
```

## What triggers each one

- **Reflection.** Every task that met friction. Was the intent clear? Was any document stale or
  misleading? What one change would have helped most? Keep it short and honest.
- **Pattern row.** Any reflection or postmortem that feels familiar. Open the row at one instance
  and mark it `watch`. Opening it early is the whole value.
- **Postmortem.** Any defect that reached users, or any defect that existed for long enough that
  nobody noticing is itself the finding.
- **Insight.** Any change to a spec, a rule, a template, or a decision record whose justification is
  evidence rather than a feature request.

## The review ritual

Run it on a cadence, on demand before planning work in an area, and on trigger when a metric crosses
a threshold or an incident closes.

Four stages.

1. **Sense.** Gather the signals. Metrics against what each shipped spec said it would move. User
   feedback, read directly by a human at least in sample. Reflections, triaged for recurring
   friction. Open and closed postmortems.
2. **Review.** Produce a verdict per shipped unit of work: keep, iterate, or deprecate, with the
   evidence attached. Output proposed write-backs as concrete diffs. A vague observation cannot be
   ratified.
3. **Ratify.** A human approves, edits, or rejects each write-back.
4. **Codify.** Write each approved change into the source of truth that owns it, then log an
   insight.

### Where a signal is written back

| If the signal is… | Write back to… |
|---|---|
| A metric below its stated target, or a feedback theme | The spec's rationale and success metrics; or a new planned spec for an iteration; or mark the spec deprecated |
| Recurring friction in the reflections | The agent-facing system: the session-loaded rules file, the spec template, or the review checklist |
| An incident | The affected spec, plus a new or superseding decision record |
| A review trace | The artefact under review, plus the reviewer checklist, so the same defect is caught next time |

Recurring agent friction is the case people skip. If agents keep struggling with the same rule, the
rule is the defect, not the agent.

## Closing the loop

A cycle is closed when all four hold.

1. The signal is recorded with its source and its strength.
2. A specific file changed, and the change is stated as before, after, and why.
3. The changed file is one that later work actually loads. A rule written where nobody reads it is
   not a write-back.
4. An insight entry links the signal to the change, and the index row states the finding.

The loop reviews itself. Ask each cycle whether the process helped or got in the way. Friction with
the templates is itself a signal, and it is written back the same way.

## Anti-stall

The loop dies quietly. It dies by everyone writing reflections and nobody promoting them.

Add a lint that fires on shipped work whose review date is older than your chosen window and which
no insight references. That combination names the features nobody is learning from. When the lint
fires, that work is overdue for a review.

Add a second lint for `PATTERNS.md` rows that have sat at `open` for more than one review cycle. An
`open` row is an unclaimed system defect with the evidence already gathered.
