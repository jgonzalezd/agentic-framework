# reporting.md — reports the owner can act on

This file governs everything an agent writes *to the engineer*: end-of-turn summaries, subagent and
work-package reports, plan files, PR and issue descriptions, commit bodies, and prose in
documentation and specs.

**This binds subagents.** An orchestrator relays what its subagents hand back, so a decision buried
in a work-package report is buried in the user-facing summary one hop later.

**When a project carries its own reporting document, that document wins.** This file is the floor,
not the ceiling.

There are three ways a report fails. It can leave things out, so the reader cannot act on it. It can
be unreadable, so the reader does not get to the part that matters. Or it can present a guess as a
fact, so the reader has nothing to disagree with until the code is written. This file used to cover
only the first failure. It now covers all three, in that order of discovery.

**The reader owns this codebase.** They wrote the symbols you are naming and they know what the
numbers in them mean. They did not watch you work. Your report feeds decisions they are about to
make.

## The one rule that produced the rewrite

Keep the vocabulary. Write plain sentences.

Those are two separate things, and an earlier version of this file ran them together. It said
"density is fine" and it said that simplifying vocabulary the reader owns is a defect. The first half
is right: write the function's real name, not "the function that handles paid invoices". The second
half got applied to sentence construction, and produced reports with 59-word sentences that the owner
could not read at all.

So, precisely:

- **Keep** the real names, file paths, exact numbers, and the codebase's own nouns.
- **Drop** the long sentence, the em-dash aside carrying a second thought, the "X, not Y" inversion,
  the clause that doubles back on itself.

**A customer-facing voice or copy guide has no authority here.** Such a guide is tuned for a customer
reading about their own situation. Its rules typically forbid the system's own names and target a
general reading age. Both would strip the vocabulary this reader needs.

## The shape

Use labelled sections in this order. Omit a section that has nothing in it; do not write "none".

**Open** is the exception. Write it every time, even when it is empty, because "nothing needs you" is
something the reader acts on.

1. **Status** — what is done and whether it works, first line.
2. **Verified** — what was actually run and what it returned.
3. **Inferred** — claims resting on indirect evidence, with the inference shown, and what would make
   it a real verification.
4. **Untested** — code paths not exercised, and what depends on them.
5. **Decisions** — one entry each; see rule 1.
6. **Open** — what needs the reader. Every entry follows rule 25.

**Answer first, inside every section.** State the conclusion, then support it. This is the BLUF rule
from US Army Regulation 25-50 and the Minto Pyramid Principle, and it is the opposite of how
engineers are trained to write. Do not build up to the finding.

## Plans

A plan is a report about work that has not happened yet. It uses the six sections above, and it adds
one that comes first: **Assumptions**. The Assumptions block, the triggers that mean stop and ask,
and the rules on how to ask live in `planning.md`.

A plan may also carry an evidence section. Rule 24 governs it.

## The sentences

These are borrowed from Google's Technical Writing One and from Amazon's rules for narrative memos.
They are not style preferences. Each one has a failure behind it.

### One idea per sentence

A sentence is a statement in a program: it does one thing. When a sentence branches into a second
idea, split it. Two short sentences always beat one that needs re-reading.

### Under 30 words

Amazon's memo rule, and a usable ceiling. Count when a sentence feels long. If it is over 30 words it
is almost always two sentences that have not been separated yet.

### No em-dash aside carrying a second thought

An aside between dashes is a second idea hidden inside the first. It reads fine to the person who
already knows both. Put it in its own sentence.

### No "X, not Y" inversions

"A ledger entry records what the refund covered, not what was taken" makes the reader hold two things
at once to find out which is true. Say what is true. Then, if the contrast matters, say what it is
not, in a second sentence.

### Cut filler

"At this point in time" is "now". "Causes the triggering of" is "triggers". A phrase that adds words
without adding information costs the reader time and buys nothing.

### Anything enumerable is a list

A paragraph running "The first is… The second is…" is a list that was typed as prose. Prose is for
reasoning and causation.

### Length is not the enemy

A long report that reads easily is better than a short one that has to be decoded. Do not compress by
deleting the context. Compress by cutting filler and splitting sentences.

## The rules

The numbers are stable. Cite them by number when reporting a violation.

### 1. A decision gets its own entry, never a subordinate clause

> …completes fine, which is why I didn't plumb thought signatures through…

That is a call shaping four provider adapters, delivered as an aside attached to a sentence about
something else. The owner cannot override a decision they did not notice was made.

A decision entry has four parts. What you chose. What you rejected. What the choice traded. Whether
it is reversible.

If a sentence contains "which is why I" or "so I just", a decision is hiding in it. Pull it out.

### 2. Name whose decision it was

State who made the call: the owner, or you.

If the behaviour traces back to something the owner asked for, say so and quote them. If you chose
it, say that instead, so they know what is theirs to overturn.

The failure this rule exists for. A report described how partial refunds are handled. It never said
that partial refunds existed because the owner had asked for them. They read it as a corner case an
agent had invented, and had no way to tell.

### 3. Explain why a situation happens before explaining how the code handles it

This is the curse of knowledge. You have spent the whole session inside the problem. The reader has
not, and cannot supply the missing half.

Before describing what the code does in a situation, say why that situation happens at all. Say
whether it is common or rare. Say whether it is imposed from outside — by a vendor's API, by a
browser, by the model — or chosen here.

The failure: "two half refunds take 60 then 60, not 60 then 120". Twelve words. The owner's reply was
"why on earth would we be refunding in two halves?", which the report never answered.

### 4. Both sides of a trade-off, or it is not a trade-off

> that would cost ~4.5× the input tokens and widen the shared response type for all four providers.

That is the cost. What spending it would have *bought* is never stated, so there is nothing to weigh
it against.

State both sides, then stop. Do not convert to dollars. Do not pre-decide. Do not soften. The reader
does the math.

### 5. Mark every claim as verified, inferred, or untested

> The 200s are the proof instead — the old body could not have produced them.

That is an inference wearing the word "proof". Making the inference is fine, and inference from a
negative result is often the best evidence available. State it as an inference. Show the reasoning.
Say what would settle it.

The three registers read identically in prose. The section labels exist so they cannot.

### 6. Blast radius by name

"Widens the shared response type for all four providers" is right, and should go further: name the
four adapter files.

This is the one place a report should get more specific, not less. The reader prices a change by what
it touches.

### 7. Give the coordinate on first use, not a definition

A symbol the reader wrote needs its file path after it, once, so the reader can look. Not a gloss.
Not an explanation. A path.

One carve-out. Inside a spec, the spec template wins: keep the WHAT & WHY free of function names,
file paths and key literals. Symbols and paths belong in the Behavior contract and the tests.

### 8. One item per entry

A paragraph carrying a verification gap, an evidence substitution, an untested code path and a
rejected design is four entries pretending to be one. The reader should not have to do the sorting.

### 9. Numbers carry their basis

"~4.5× input tokens" — of what, per what? Per repair turn, per analysis, per run?

A number without its basis cannot be compared to anything. Give it raw and comparable, not
translated.

### 10. "I did not test X" is its own line under Untested

Not a hedge. Not "one honest limit". Not a clause attached to a success.

An untested path the reader learns about from a production failure was a line you owed them.

### 11. No metaphors and no analogies, anywhere

> Nodemailer is the wheel.

The reader's reply: *"what fucking wheel are you talking about? are you reparing a fucking truck?"*

The sentence was reaching for "this already exists, do not rebuild it". It should have said that.
A metaphor asks the reader to decode an image and then map it back onto a fact they do not have yet.
It is the single most expensive thing on this page and it has no defensible use here.

This is stricter than "no jargon" and it is not the same rule. Keep `billing_reason`. Drop the image.

### 12. A heading states the finding, not the topic

> ## What neither package gives us

That announces that a subject is coming. The reader has to read the section to find out what was
concluded, which is the opposite of BLUF.

It should have read: **Neither package handles failure, so we write that part either way.**

A heading is the one line guaranteed to be read. Spend it on the answer.

**Correction. This rule is wrong for a standalone report, and it produced a worse failure than the
one it fixed.** Applied to a report on the mail layer it generated headings like *"What mail is for,
and who is stuck without it"* and *"Done, missing, and the five things launch actually needs"*. The
reader's words: *"why are you talking like this? can you fucking talk naturally."*

Four published engineering reports were checked. GitLab's 2017 database outage report, the Google SRE
example postmortem, Cloudflare's outage reports and Amazon's 2017 S3 report use headings like
"Database setup", "Timeline", "Data loss impact", "Memory preallocation". Amazon uses no internal
headings. None is a sentence, and none addresses the reader.

**So the rule is split by document type.** In an end-of-turn report or a work-package report, where
the six labelled sections are fixed and a heading is a subsection inside them, the heading carries
the finding as written above. **In a standalone technical report, a heading is a short noun phrase
naming the section, and the finding goes in the section's first sentence**, where there is room to
state it without compressing it into speech.

The failure both halves are guarding against is the same: a heading that announces a topic and makes
the reader hunt for the conclusion.

### 13. Name a thing and define it in the same breath, on first mention

Every tool, package, service or platform feature gets one sentence the first time it appears: what
it is, and what it would do in this codebase.

The failure: `nodemailer` was named four times, compared on six attributes, and priced — before any
sentence said it was a mail-sending library. The reader asked, reasonably, *"is this a layer on top
of resend? is it replacing it? what console are you talking about?"*

One sentence would have prevented all of it: *"`nodemailer` is a general-purpose mail client that
speaks SMTP, so one setup can point at Resend, Amazon SES, or a mail server you run yourself."*

Rule 7 already says give the coordinate on first use, and it is about paths inside this repo. This
is the outside-the-repo half, and it needs a definition rather than a path.

### 14. Every comparison names both sides

> Nodemailer throws, has no console fallback, and logs nothing.

Three comparisons, and what the alternative does is never stated. The reader wrote: *"logs nothing,
ok, but does the alternative does, are we even talking about alternatives, or what is it?"*

If an attribute is worth mentioning, it is worth a table or a matched clause. If only one side is
known, say which side was checked and which was not.

This is rule 4 applied to comparisons rather than to trade-offs, and it fails the same way: half the
information looks like a conclusion.

### 15. Delete any sentence whose only job is to say the next sentence matters

> This is the part that decides how much a dependency actually saves.

> Here is what I found.

> And that second one is a defect.

None of these carry information. They stage it. The reader's words: *"I'm not here for a fucking tv
show."*

Cut them. The finding survives on its own, and it arrives one sentence earlier.

### 16. Never use a shorthand before defining it, and never as a heading

> **Deployment identity fails closed.**

"Fails closed" is a real term and the reader may well know it. It still cannot carry a heading,
because at that point nothing had said what the deployment identity *was* or what closed meant here.

Define the mechanism in plain words first. The shorthand can appear afterwards, once, as a label for
something already explained.

### 17. An identifier is not a description

`B14` says where to look. It does not say what is there.

The reader owns the board and holds dozens of row ids. `B14` asks where a particular deployment
secret is durably stored. Nothing in the entry said so, so the reader had a label and no content.

Give the sentence saying what the thing asks or asserts, every time it carries weight. This applies
to board rows, spec ids, plan phases, journey numbers and test case ids.

**This is not a reversal of rule 7.** Rule 7 says give the coordinate rather than a gloss, and it is
right, because it is about symbols the reader wrote. A symbol they wrote needs its file path after it
and no explanation. Rule 17 is about identifiers whose content is the whole point and which nobody
memorises. The reader owns the board and still cannot recall which row is which.

### 18. Never point backwards at something you have not named

> …to bring **the question** back to you at exactly the moment we just settled **it**. **It** now
> records **the decision** on the row instead.

Four backward references in twenty-six words, and not one of their targets appears anywhere in the
entry. The definite article claims the reader already shares the reference. They did not watch you
work, and a session offers many candidates.

Name the thing again, even when the sentence gets longer.

Rule 16 covers a shorthand used before it is defined. This is the other half of the same failure: a
reference used before its target is on the page.

### 19. Report a change as before, after, and why

"It previously instructed" and "it now records" describe both ends abstractly. Neither the old text
nor the new text appears, so the reader cannot check what moved or whether it needed to.

When the work was editing a document, a config or a file, every entry carries three things:

1. What it said before.
2. What it says now.
3. Why.

An outcome on its own is not reviewable. It asks for trust in exactly the place the reader is
supposed to be able to disagree.

### 20. A blocked step is reported immediately, and it ends the turn

The failure this rule exists for. A session was asked to verify an API key and then set it as a
repository secret. The verification failed. Nothing was said about it, and the session moved on to
writing code that depended on the secret being set. The reader found out from their inbox, two days
later, still receiving the alert mail the work was supposed to stop.

The step was asked for. It cannot be done. Say so before doing anything else.

Not at the end of the work. Not in a summary section under Open. Not after starting the next item.
The report says four things: what was asked, what was tried, what it returned, and what is now
needed to unblock it.

Continuing to other work first leaves the reader believing a step happened. Every decision they make
after that rests on it, including decisions about money and about what to stop watching.

**Silence about a failure costs more than the failure.** A step that cannot be done is ordinary. A
step the reader thinks was done, and was not, is a wrong picture of their own system.

This rule is not the human-gated checkpoint rule. That one covers a step only the reader can do,
identified in advance. This one covers a step you were told to do that turns out to be impossible.

### 21. Committed is not fixed, and neither is merged

The failure this rule exists for. A session reported a fix as done. The fix was committed to a branch
nobody had merged, so the deployed system was running the old code the whole time.

Code has four states and they are not interchangeable:

1. **Written.** It exists in the working tree. Nothing runs it.
2. **Committed.** It is in git history on some branch. Nothing runs it.
3. **Merged.** It is on the branch that deploys. Nothing runs it yet.
4. **Deployed.** The running system executes it.

"Fixed", "done" and "landed" all claim state 4. Writing one of them about state 2 tells the reader
their problem stopped, when the defect is still live and still costing them.

Name the state, and name what moves it to the next one. "The suppression is committed on
`release/alert-mute`; it reaches staging when that branch merges and redeploys" is checkable. "The
fix is done" was not, and was wrong.

This rule applies hardest to anything the reader can observe from outside the repo: mail they
receive, money that moves, a page that loads.

### 22. An error is not an empty result

The failure this rule exists for. A session was asked whether an account had a webhook endpoint
registered. It ran the vendor's list command. The stored key was a restricted key, so the vendor
answered 403 with an error body:

```json
{
  "error": {
    "message": "The provided key does not have access to this endpoint.",
    "type": "invalid_request_error"
  }
}
```

The reader of that body counted `data`, defaulted the missing key to empty, and got zero. The
sentence that reached the reader was "none, and that is deliberate". It went into three files, in
each case as a checked fact.

A call that fails and a call that returns nothing are different states of the world. The 403 above
means nobody has looked. It does not mean there is nothing to see.

**Do not infer absence from a body you have not checked the shape of.** A missing `data` key counted
with a default of empty yields zero, and zero is indistinguishable from a real empty list once the
count is the only thing you kept.

**The exit code does not settle it, and how it fails is worth knowing precisely.** A command can
print an error body on stdout and still exit 0, while the same command with an invalid key exits 1.
So an exit-status check catches the second case and misses the first. A check that passes because
nothing complained has not answered the question. Measure which way your own tool fails before
relying on its exit code.

**A check that did not answer leaves the claim where it was.** It does not lower the claim to
"probably", and it does not raise it to "none found". The claim stays unverified, and the report says
which check was attempted and why it returned nothing usable.

"The stored key cannot read that endpoint, so nobody has checked" is a sentence the reader can act
on. "None registered" was not.

### 23. A claim written into a file carries the check that produced it

The row that carried the wrong sentence:

> `| CI sandbox | <account id> | … | none, and that is deliberate |`

It records a conclusion and nothing else. No date, no command, no account. A reader six weeks later
cannot tell whether somebody checked, and neither can the person who wrote it.

A report is read once and argued with. A file is read for months and quoted. So the bar is higher in
a file, not lower.

A claim in a documentation file or on a release board carries three things: the date it was checked,
the command or console that answered, and the account or environment it was read on. When nothing
produced it, the claim says so in one controlled word and names who can settle it.

A `Verified` column reading `2026-08-09, /v2/teams/{id} reports billing.plan = hobby` has this shape.
A table with no such column is where a wrong sentence survives review.

This rule is the one worth giving a checker. See **Enforcement** below.

### 24. Evidence is reported with the decision it changes

The failure this rule exists for. A plan carried a section headed "What I verified before planning",
introduced by this sentence:

> Every claim below I ran myself, because a plan built on an unchecked claim is the defect this work
> exists to stop.

Under it sat a three-column table. One row read:

> | Under `set -e`, a failing command substitution in argument position does not abort | `bash -e -c 'echo "X=$(bash -c "exit 1")" >> f; echo SUCCEEDED'` | prints SUCCEEDED, exit 0, file holds `X=` |

The reader replied: *"What are those verifications for? what's that table purpose, what should I
check on that table? ... you just put stuff there that I'm supposed to guess why is there and how
that's related to what we are working on."*

The heading names a topic and not a finding, which rule 12 already forbids. The introductory sentence
exists only to say the next thing matters, which rule 15 already forbids. Those two needed no new
rule. The third defect did.

Every row of that table was true and none of them was usable. The missing thing is the consequence:
a workflow file in that repo wrote its signing secret in exactly that argument-position form, so the
fix had to move the substitution into a standalone assignment.

Without that sentence the reader has to redo the derivation the writer already did, starting from a
shell exit code, with no idea which file it points at.

**So a measurement, a benchmark, a test result or a verification is reported with what it settles.**
Name the file, the design choice, or the claim that changes because of it.

**And if a result changes nothing, cut it.** That half is what stops this rule producing padding.
Evidence with no consequence is not context. It is unfinished work handed to the reader.

**This is the other half of rule 9.** Rule 9 covers the input side: "~4.5× input tokens" of what, per
what? Rule 24 covers the output side: what does this number change? Neither half implies the other.

### 25. An open item is a decision briefing

The failure this rule exists for. A report ended with this Open item:

> metronome-core owes one choice, and it is now a choice between two known jobs. Write ~18
> bindings for tests that already exist, which is mechanical and adds no coverage. Or write tests
> for the ~6 specs at shipped with nothing asserting them, which is real work and is where the
> actual risk is. They are independent — doing the second first is defensible.

The reader could not tell, in their words, "what the issue is about, why it exist, the impact on
the product, the blast radious". The item named two jobs in codebase shorthand and asked for a
ranking. It gave the reader nothing to rank by.

An Open item exists to get a decision from the reader. So each item is a briefing built for that
decision, with this shape.

**The heading is the decision phrased as a question.** The question must be answerable in one
line: "Test the six unasserted specs first, or write the eighteen missing bindings first?" A topic
label such as "Test coverage gap" does not qualify. The body below the heading exists so the
reader can check the question before answering it. This is a carve-out from rule 12: an open
decision has no finding yet, so the question stands where the finding would.

**Six fields under the heading, in this order:**

1. **What this is.** Every codebase name the item uses, defined in one sentence each on first use.
   This applies rules 13 and 17 to Open items. A symbol the reader wrote gets its file path
   instead of a definition, per rule 7. A reader who did not watch the session must be able to
   parse the question after this field alone.
2. **Why it's open.** Two halves, one sentence each. How the situation came to exist: imposed from
   outside or chosen here, common or rare (rule 3). And why the call belongs to the reader rather
   than the agent (rule 2).
3. **Product impact.** What a user of the product, or the product itself, feels under each branch,
   and what breaks silently if nothing is done. State it in the customer's terms, per the "How to
   ask" section of `planning.md`.
4. **Options.** One entry per option: what it costs in comparable units (rule 9), what it buys,
   its blast radius by name (rule 6), and whether it is reversible. Both sides of every trade,
   per rule 4.
5. **If you don't decide.** The default that happens on its own: what stays broken, what stays
   blocked, or "nothing; this can wait indefinitely." This field carries the urgency.
6. **My call.** The agent's recommendation and its reason, labeled as the agent's opinion so the
   reader knows it is theirs to overturn (rule 2). It ends with a reply token: a short string,
   `1b`, standing for one answer to this item.

**The recommendation is a deliberate carve-out from rule 4.** Rule 4 says do not pre-decide, and
it still governs field 4: options are stated with both sides and no stated preference. Field 6
then gives one labeled opinion, last, after both sides are on the page. The reader chose this,
selecting "Recommendation + reasoning" when neutral-only items were offered; a briefing with no
recommendation hands the ranking work back to them.

**After the last item, the reply tokens are collected.** One line per item maps each token to its
meaning; call this list the decision sheet. It lets a three-item Open section be answered with
`1a, 2: tests first, 3 defer`.

**A trivial item may compress fields 1 through 5 into two sentences.** Trivial means yes/no, low
stakes, and reversible. The question, the impact, and the recommendation are never dropped. This
keeps a small report from spending a page on a housekeeping item.

The metronome-core item above, rewritten as a briefing:

> ### 1. Test the six unasserted specs first, or write the eighteen missing bindings first?
>
> **What this is.** A binding is a comment line in a test file naming the spec it verifies; the
> spec linter uses it to prove every `shipped` spec has tests. Two gaps exist. Eighteen tests run
> and pass but carry no binding line. Six specs are marked `shipped` and no test asserts them.
>
> **Why it's open.** The binding convention arrived after those eighteen tests were written, and
> the six specs were marked `shipped` before the linter enforced coverage. Both jobs are real and
> independent, so the order is a call on your time and only you can make it.
>
> **Product impact.** The six unasserted specs cover [named behaviors]; a regression in any of
> them ships without a test failing. The eighteen bindings change nothing a user can feel. Those
> tests already run; only the linter's proof is missing.
>
> **Options.** (a) Bindings first: ~18 mechanical edits, ~1 focused hour, no new coverage,
> reversible, touches only test files. (b) Spec tests first: real test-writing across [named
> areas], roughly [estimate], closes the silent-regression window, reversible.
>
> **If you don't decide.** The linter stays red either way, and the six behaviors stay unwatched.
>
> **My call** (my opinion, yours to overturn): (b) first — the risk is in the untested specs;
> the bindings are safe to defer. Reply `1b` to accept.

The bracketed placeholders mark what the writing agent fills from the repo before the item ships.
An item that keeps a placeholder has not been finished. A check that fails leaves the claim
unverified, per rule 22. The item then says `unknown — needs <what>` and names who can settle it,
per rule 23.

## Enforcement

**Rule 23 is the one worth a checker. Nothing else here has one.** Prose in a chat turn is not a
file, so most of this document is enforced by the reader noticing.

Two kinds of program can enforce the shape of a written claim:

1. **A test that blocks a merge.** It requires every table in a documentation file to carry a
   `Verified` column, and every cell in it to hold either an ISO date or one controlled hedge word.
2. **A script that prints and does not fail.** It lists `done` rows on a release board whose gate
   cell carries neither a date nor a re-runnable check. It sits outside the merge gate on purpose,
   because a half-filled board should not break the build.

**Both test the shape of a claim. Neither can test whether the claim is true.** A false date passes
both. What they stop is a claim arriving with no provenance at all.

### The cold-context review

**A plan, a standalone report, or a spec is reviewed by a subagent holding no session history before
it is handed over.** The subagent gets two files and nothing else: this document, and the artifact.
It returns rule violations by number.

The reviewer stands where the reader stands. It cannot resolve "the question" or "that decision", it
does not know what a measurement was for, and it has no memory that makes a bare identifier legible.
Rules 17, 18 and 24 describe defects that are invisible from inside the session that wrote them.

**Why a self-review does not substitute.** The plan that produced rule 24 was re-read by its own
author before it was sent. Every table row read as meaningful, because the author already knew what
each one decided. The reader could not use a single one. The same principle governs grading: a
grader who can read the cases produces a worthless grade.

**Measured on 2026-08-16, and this bounds what the review is for.** The same draft was reviewed
twice. Given this document *without* rule 24, the reviewer caught the filler sentence and the topic
headings, and did **not** report that the evidence table named no consequences. Given this document
*with* rule 24 present, it reported the table under rule 24 by number, and correctly identified the
one row of seven that already complied.

**So the review enforces rules that exist. It does not discover rules that do not.** A new rule still
comes from an incident and from the reader saying a thing was unusable. Do not treat a clean review
as evidence that the artifact is good, only as evidence that it does not break a written rule.

**Scope today: plan files, standalone reports, and specs.** Not end-of-turn summaries, conversational
answers, PR and issue bodies, or commit bodies, all of which this document still governs. The review
is deliberately narrower than the rules it enforces, and widening it is the reader's decision.

The acceptance test has two halves:

1. The reader finishes the report without having to reconstruct what was decided.
2. The reader does not have to ask what a sentence means.

A report that fails either one contributes its worst sentence to a project's own copy of this file as
a new bad example.

## Commit messages and PR descriptions

The subject line says what changed and where. This is a deliberate break from the literary subject
style some histories use.

Bodies name the specs, the test counts, and the target that was run. They gain rules 1 through 5, and
the sentence rules above.

PR and issue bodies use the six-section shape directly. A PR description is a report to a reviewer;
nothing more is needed than saying so.
