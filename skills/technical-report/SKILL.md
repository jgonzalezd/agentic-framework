---
name: technical-report
description: Write a technical report on one part of a system for the person who decides what to spend on it — an owner, a founder, a CTO. Use when asked to "report on X", "write up how X works", "what's the state of X", "explain the X implementation", "is X ready to ship", or when handing over a subsystem someone else will own. Produces a report that says what works, what it costs, what breaks, what is unfinished, and what only they can do. Do NOT use for a report on work you just did in this session — that is an end-of-turn report and it has a different shape; do not use for user-facing documentation, a runbook, or a design proposal.
metadata:
  version: 2.0.0
---

# Technical report on a subsystem

The reader decides whether to spend money or time on this thing. They have not been inside the code
this week and cannot supply anything left out.

## Rule 0 — a report is not a tour

Never walk the reader through the files in the order they were read. State the conclusion, then
support it. Every section below exists because somebody asked that question out loud. A section that
cannot be filled with something true is deleted rather than padded.

## Gathering

Four rules, and they are most of what separates a report from a guess.

**Read the code, not the documents about the code.** A document in the repository is a claim by
whoever wrote it, and it goes stale on the day someone tunes a constant. Open the files it points at.
When a document and the code disagree, the code is the finding and the stale document is a second
one.

**Fetch every third-party fact live, and date it.** Prices, rate limits, free-tier caps, API shapes.
Quoting a vendor from memory is how a report becomes confidently wrong, and it is the failure that
costs the most trust, because the reader cannot check it without repeating the work.

**Mark how each claim is known.** Verified means it was run or read. Inferred means it was reasoned
from something verified. Untested means nobody has checked. An inference presented as proof makes a
whole report unusable.

**State what was not checked.** A report with no gaps is a report that did not look for any.

## Sections

This order. Omit any section that is genuinely empty, except the last two.

1. **Summary.** Four to six sentences. What state the subsystem is in, what is finished, what is
   missing, and what it will take. A reader who stops here should be able to make the decision.
2. **Scope.** What the subsystem does, expressed as the jobs it performs rather than the technology
   it uses. Name who depends on each job.
3. **Architecture.** The path one request takes, with file paths. State the vendor boundary
   explicitly: what runs on our machines, what runs on someone else's, and what that party is paid to
   do. A reader who believes we operate a server we do not operate will decide badly later.
4. **Cost and limits.** The current tier, its limits, and which limit binds first. Not the
   theoretical bill at scale.
5. **Failure modes.** A table. One row per condition, with what the customer receives and what is
   recorded internally. Prose hides the case nobody handled.
6. **Current status.** Three groups: complete and passing, verified only in part, not started. Give
   test counts and file paths.
7. **Outstanding work.** A table with an owner column. Split by who can do it: engineering, or a
   person with an account and a card. Cut it down to what the jobs in section 2 require, and list
   everything else under one deferred line so the reader sees a decision rather than an oversight.
8. **Risks.** Conditions that have not occurred and would matter. Each one says whether it is
   measured or inferred.
9. **Recommendations.** Numbered, each one sentence of action followed by one sentence naming what
   the alternative costs.

Sections 8 and 9 are never omitted. "No risks identified" and "no action recommended" are valid
contents and are written out.

## Headings

**A heading is a short noun phrase naming the subject of its section.** Not a sentence, not a
question, and never addressed to the reader.

This is what published engineering reports do. GitLab's 2017 database outage report uses "Database
setup", "Timeline", "Data loss impact", "Root cause analysis". The Google SRE example postmortem uses
"Lessons Learned", "Timeline", "Supporting information". Cloudflare uses "The outage", "Memory
preallocation". Amazon's 2017 S3 report uses no internal headings at all. Not one of them is a
sentence and not one addresses the reader.

- Correct: "Cost and limits". "Failure modes". "Outstanding work".
- Wrong, conversational: "What mail is for, and who is stuck without it". "The part you asked for".
- Wrong, editorial: "Nothing has reached an inbox yet". "Why this matters".

The finding goes in the first sentence of the section, where there is room to state it properly. A
heading cannot hold a finding without compressing it into something that reads like speech.

## Sentences and paragraphs

If the repository has a writing standard, it wins and this section is a summary of it. In this
repository that is `mmn-project/docs/REPORTING.md`.

**Paragraphs, not bursts.** Three to five sentences each, in continuous prose. A document made of
one-line paragraphs, each with a bolded opening clause, reads as emphasis rather than as
information. Bold is for a term being defined, and for nothing else.

**The first sentence of a paragraph carries its point.** Readers skim opening sentences and skip the
rest. Everything after the first sentence supports it.

**Anything enumerable is a list.** A paragraph that runs "The first is… The second is…" is a list
that was typed as prose, and it must be converted. Sequences, options, conditions and items with an
owner all become bullets or a table. Prose is for reasoning and causation.

**No second person.** The reader is not addressed. Ownership is expressed in a column of a table, not
by writing "what I need from you". This is the single change that most separates a report from a
message.

**No opinion words and no emphasis adjectives.** Severity comes from numbers. "The daily cap is 100
messages and alerts are uncapped" states a risk; "this is the dangerous one" states a feeling.

Also, and these hold everywhere:

- One idea per sentence, under 30 words.
- Complete sentences. A fragment used for effect is an effect.
- No metaphor and no analogy. Keep the technical vocabulary and drop the image.
- Define a tool, package or service in the same sentence that first names it.
- Both sides of every comparison and every trade-off, or drop it.
- Give the file path on first mention, not a description of where the file lives.
- Delete any sentence whose only job is to say the next sentence matters.

## Models worth reading before writing one

All four predate the current wave of generated prose, which is why they are the reference.

- Amazon, S3 service disruption, 2017: <https://aws.amazon.com/message/41926/>
- GitLab, database outage, 2017:
  <https://about.gitlab.com/blog/2017/02/10/postmortem-of-database-outage-of-january-31/>
- Google SRE, example postmortem: <https://sre.google/sre-book/example-postmortem/>
- Design Docs at Google, 2020: <https://www.industrialempathy.com/posts/design-docs-at-google/>

## Two checks before sending

**The report that is all mechanism.** Every file explained, and no answer to the question of whether
it is ready. Sections 6 through 9 are what the report was requested for. If they are the thinnest,
it is inverted.

**The report that softens the bad news.** A defect discovered while writing goes in, including when
nobody asked and when it makes the work look worse. It goes where the reader will reach it, not in a
closing note.

## Hand it to a cold reader before you hand it to the engineer

**Neither check above can be done from inside the session that wrote the report.** A sentence reads
as clear to its author because the author already knows what it refers to. That is why the check is
delegated, not repeated harder.

Dispatch a subagent with no session history. Give it two files and forbid every other one:
`mmn-project/docs/REPORTING.md`, and the report. Ask for rule violations by number. Do not tell it
what you expect it to find, or you have graded your own work through a proxy.

It will catch the defects you cannot see: an identifier used as if its content were shared, a
backward reference with no target on the page, a measurement with no consequence attached.

**It enforces rules that exist and does not discover rules that do not.** Measured 2026-08-16 on one
draft, reviewed twice: with the relevant rule absent from `REPORTING.md`, the reviewer missed the
defect; with it present, it found it and named it. So a clean review means the report breaks no
written rule. It does not mean the report is good.
