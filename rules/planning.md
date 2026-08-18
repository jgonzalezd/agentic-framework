# planning.md — before you build

This file governs what an agent does before it writes code: what it must ask, when it must stop, and
what every plan carries. It is the companion to `reporting.md`, which governs everything written to
the engineer.

**A plan is a report about work that has not happened yet.** It uses the six labelled sections in
`reporting.md`: Status, Verified, Inferred, Untested, Decisions, Open. It adds one that comes first,
**Assumptions**.

Guessing was not the mistake. **Guessing silently was.**

## Every plan carries an Assumptions block

Straight after the context, before any work is described. It is never omitted. When there is nothing
to declare it reads "None — every requirement below is quoted from you or verified in the code."

One entry per place the engineer's words admitted more than one reading, four lines each:

```
- **<name>**
  - You said: "<their exact words>"
  - I read it as: <the reading being built on>
  - I rejected: <the other reading>
  - If I'm wrong: <what changes, and how much work is thrown away>
```

Quote them. Do not paraphrase. A paraphrase is already the reading, so it cannot be disagreed with.

This is the cheapest place to catch a misread. A wrong line in a plan becomes hundreds of wrong lines
of code; the engineer can point at a wrong line in a plan in seconds.

### The failure this section exists for

The reader wrote: "Partial refund for the remaining months. Month counts based on the 14 days
policy. less or equal to 14, refund current month and remaining."

"14" meant the fourteenth day of a customer's own billing cycle. It was read as the fourteen-day
money-back guarantee, which is a different number in a different unit. The reading was never written
down anywhere the reader could see it. Four hundred lines were built on it, including two mechanisms
they had never asked for: a fraction of the refunded amount, and a running total to sum partial
refunds. They found out from the report afterwards, and replied "why on earth would we be refunding
in two halves?"

The entry that would have caught it, in ten seconds, at zero cost:

> - **What "14" counts**
>   - You said: "Month counts based on the 14 days policy. less or equal to 14"
>   - I read it as: the published fourteen-day money-back guarantee, counted from the first payment.
>   - I rejected: day 14 of the customer's own billing cycle.
>   - If I'm wrong: the arithmetic is different in every case past month one, and the refund code and
>     its tests are rewritten.

### Two things the block is not

It is not a hedge. "This might be wrong" attached to a paragraph is not an entry; an entry names the
other reading, which is the part that makes it answerable.

It is not a substitute for asking. If a trigger below fires, ask before the plan exists. The block is
what catches the readings that felt obvious enough not to ask about, which is the category the refund
misreading was in.

### A plan may carry an evidence section, and rule 24 governs it

A plan often rests on things that were measured before it was written. Those may be reported, in one
section, placed after **Assumptions** and before the work is described.

Every item in it is subject to rule 24 in `reporting.md`, which says a measurement is reported with
the decision it changes: it names the design choice it forces. An item that does not name one is cut,
not kept for completeness. A plan is not the place to store results.

This paragraph exists because the section had no defined contract, so it was invented from scratch
and got it wrong.

## Six triggers that mean stop and ask

The Assumptions block catches a misread at approval. These catch it before the plan is written. Any
one of them is enough:

1. Their words admit two readings that lead to different code.
2. You are about to build a mechanism they never named. Machinery with no sentence of theirs behind
   it is the tell — the fraction and the running total were exactly that.
3. The change moves money, deletes data, or is otherwise not undone by an edit.
4. A published string, a policy document, or a consent version would have to change.
5. The answer changes the shape of the work rather than a detail inside it.
6. A step they explicitly named turns out to be blocked, unnecessary or wrong. Dropping it,
   deferring it or replacing it with something else is their call and never yours. Report the block
   and stop. "That step is dropped from this plan" is a scope decision about their money and their
   time, written as if it were housekeeping.

**The limit, so this does not become asking about everything: do not ask what the repo, the code, or
a vendor's documentation can answer.** Check first. Ask only what only they know. "Who issues a
refund here" was answered by the vendor's documentation and one grep, and asking it would have wasted
a turn.

## How to ask

- **Never offer options you know are all wrong.** Two refund behaviours were offered and neither was
  the rule. The engineer wrote: *"I accepted because that was the only option available that you gave
  me (along with another worse), not what the requirement should actually be."* If no option is
  likely right, the question is wrong. Describe the problem and ask what the rule should be.
- **One question at a time when the ground is unsettled.** Three dense questions were asked at once,
  twice. The engineer wrote: *"I don't understand your questions."* The single plain question that
  followed was answered immediately.
- **Ask in the customer's terms, not the system's.** The question that worked said "someone pays
  $119 in January and gets 120 analyses". The ones that failed named a source file and an API field.

## Use the date that is in context

Searching for 2025 material on a day in August 2026 is the same root cause as the refund misreading:
filling a gap with an assumption when the fact was already in front of you. The current date is in
context every session. Read it before writing any query, filename, or changelog entry.

## Before the plan is handed over

A plan is reviewed by a subagent holding no session history before it reaches the engineer. See **The
cold-context review** in `reporting.md`. The reviewer gets the reporting rules and the plan, and
nothing else, and it returns rule violations by number.
