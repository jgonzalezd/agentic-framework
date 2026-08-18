---
name: pm-status-report
description: Use when reporting product or launch status to a product manager, or to a founder reading in the PM role — launch readiness, what is open, what is left, what needs a decision. Not for engineer-facing subsystem reports; that is technical-report.
---

# Status report to a product manager

The reader decides launch scope, sequencing, and risk acceptance. They do not read code and should
not have to. They were not inside the work this week and cannot supply anything left out.

This skill differs from `technical-report` in one way that changes everything downstream: that
reader decides whether to spend on a subsystem, this one decides whether and when real customers
arrive. So every item here is stated as what a customer or the bank account experiences, never as
what the code does.

## Rule 0 — verdict first

The first paragraph answers the question the report exists for: can we launch, what stands in the
way, and what it costs to clear. A reader who stops after one paragraph has the answer; everything
after it is support. This is bottom-line-up-front, and it applies inside sections too — the first
sentence of each section carries its point.

## Translation rule

No code symbols, file paths, environment variable names, or API shapes in the body. The test for
every line: could the reader act on it without opening an editor? A dollar figure, a
customer-visible behavior, and a date are the units this report is written in.

Wrong: "`exportGrantConfigured()` returns false so the route 503s."
Right: "Every analysis on the live site fails today with a server error, before any money is spent.
One setting fixes it; it is not yet set."

## Named findings

Every issue, risk, and decision in the report carries one descriptive name, two to five words, in
the reader's terms: "the missing production settings", "the spend cap that is not set". The name is
the item's identity for the whole report.

- The name is used word-for-word everywhere the item appears — verdict, money section, open items,
  decisions — so the reader can jump from the first mention to the detail by scanning or searching
  for the same words. Never rephrase a name between sections; a synonym breaks the jump.
- The item's detail entry leads with the name, in bold.
- A board row id is a pointer into the board, not a name. It never appears in the verdict, and it
  never appears anywhere as the only identifier. It may follow the descriptive name in parentheses
  in the item's detail entry, for the reader who wants the board row.

**The bold name is read by a tool, not only by a person.** `tools/pm-board` parses each numbered
item under `## Decisions needed` and takes the `**bold lead**` as the card's headline and the rest
as its body. Two consequences. The bold name has to survive on its own, with no sentence before it.
And the text after it has to read as its own sentence rather than as a continuation, because on a
card the name is a heading and the remainder sits underneath it.

The release board uses the same shape for the same reason — see `product/release/README.md`. One
convention, two trackers.

Wrong, in a verdict: "every analysis on the live deployment fails, because three production
settings are missing (B5f)" — the reader meets `B5f` before anything says what it is, and the
reference is useless at the moment it is needed.
Right, in a verdict: "the missing production settings make every analysis on the live site fail
before any money is spent" — and the money section has an entry leading with **the missing
production settings** (`B5f`), which is where the id belongs.

## Sections

This order. The money section and the decisions section are never omitted — if either is genuinely
empty, write that out, because the reader cannot distinguish an empty section from an unchecked one.

1. **Verdict.** One paragraph. Launch yes/no/when, the blocking items by name, total cost to clear.
2. **What can go wrong with money.** Every item that can move money the wrong way: uncapped
   provider spend, a misconfigured payment rail, a refund path, an exposed secret. Each line gives
   the cap or states its absence, and the worst month in dollars. A corner being cut is named with
   the nature and likelihood of the failure it invites — never silently absorbed. This is the
   launch-review discipline from the SRE book, and it is the report's reason to exist under a
   no-monetary-risk posture.
3. **Open items, as unknowns.** Status is unknowns-versus-solved, not task counts — task lists
   grow as work progresses, so "12 of 18 done" measures nothing. Each open item says whether the
   remaining work is understood and just needs doing (downhill) or is still being figured out
   (uphill). An uphill item near the launch date is the finding; say so.
4. **Decisions needed.** One per line, addressed to the reader, each with the default that happens
   if nobody decides. A decision with no default is a hidden blocker; find the default and write it.
5. **Deliberately not doing.** The fast-startup half of the posture, stated instead of implied.
   Each entry names what accepting it costs, so the reader is choosing, not discovering later.
6. **Changed since last report.** Only if a prior report exists. Deltas, not a restatement.

## No surprises

Anything the reader would be upset to learn later goes in, even when nobody asked and when it makes
the work look worse. Report early despite uncertainty rather than waiting for certainty: readers
would rather hear the current state of understanding and have it revised than hear nothing.
Uncertainty is stated as uncertainty ("not yet verified", "measured once"), not smoothed over.

## Second-order audience

The verdict paragraph will be repeated — to a cofounder, an investor, a partner — by someone who
read only it. Write it so it survives repetition without the rest of the report attached: no
pronouns pointing backward, numbers included, nothing that becomes false when quoted alone.

## Sentence rules

Inherited from `mmn-project/docs/REPORTING.md`, which wins where they differ: one idea per
sentence, under 30 words. No metaphors and no analogies. Both sides of every trade-off. Claims
marked verified, inferred, or untested. Decisions get their own entry with what was rejected.
Sections differ from REPORTING.md because the reader differs; the sentences do not.

These rules govern the report file this skill writes. They are **in addition to** the end-of-turn
summary printed on screen when the work finishes, which keeps the shape and voicing REPORTING.md
already sets. Writing one is not a substitute for the other.

## Hand it to a cold reader before you hand it over

**A report is reviewed by a subagent holding no session history before it is sent.** Give it two
files and forbid every other one: `mmn-project/docs/REPORTING.md`, and the report. Ask for rule
violations by number, and do not tell it what you expect it to find.

The reviewer stands where the product manager stands. It cannot resolve a bare ticket id, it does not
know which decision "that decision" points at, and it has no memory that makes a named finding
legible. Those defects are invisible from inside the session that wrote them, and re-reading your own
draft harder does not surface them.

**It enforces rules that exist and does not discover rules that do not.** A clean review means the
report breaks no written rule. It is not evidence the report is useful.

## Sources

The form of this report is taken from writing published before 2023, each fetched and dated when
this skill was written (2026-08-11):

- Google SRE book, "Reliable Product Launches at Scale" (2016) — launch readiness as risk-tiered
  review; a stakeholder kept informed of the nature and likelihood of failure when a corner is cut.
  <https://sre.google/sre-book/reliable-product-launches/>
- Andrew Bosworth, "Communication is the Job" (2016-12-29) — layer the message for varied
  engagement; write for the second-order audience; communicate early despite uncertainty.
  <https://boz.com/articles/communication-is-the-job>
- Basecamp, Shape Up ch. 13 "Show Progress" (2019) — status as unknowns-versus-solved, because
  task lists grow as work progresses. <https://basecamp.com/shapeup/3.4-chapter-13>
- Animalz, "BLUF: The Military Standard That Can Make Your Writing More Powerful" (2019-09-09) —
  bottom line up front; the request, the why, and the deadline in the first lines.
  <https://www.animalz.co/blog/bottom-line-up-front/>

Dropped during research: Lenny's Newsletter templates post (URL now 404), Wes Kao's pre-2023
posts and the 5-15 report tradition (not verified live; nothing is cited from memory).
