---
description: Rewrite the Open items of a report as decision briefings per reporting.md rule 25
argument-hint: [pasted items, or a pointer to a specific report — omit to use the latest in conversation]
---

You are rewriting the Open items of a report as decision briefings, so the reader can decide each
one without reconstructing the session that produced it.

The target format is rule 25 in `/workspace/agentic-framework/rules/reporting.md`: a question
heading, six fields per item, a decision sheet at the end. Read that rule before writing anything.
This command is the retrieval and verification sequence around it.

## Steps

1. **Find the Open items.** Use the most recent report in this conversation that carries an
   **Open** section. If **$ARGUMENTS** names a report or pastes items, use that instead. If no
   Open section exists in either place, say so and stop. Do not invent items from other sections.

2. **Verify before explaining.** The briefing feeds a decision, so a wrong number in it costs more
   than the time this step takes.
   - Recompute every count and number from the repo. If the report says "~18 bindings", count
     them. When your count differs from the report's, the briefing carries your count, the
     report's, and the method, so the reader can see which to trust. Rule 22 governs a check
     that errors: an error is not an empty result, and a failed check leaves the claim
     unverified.
   - Expand every identifier by reading its source. A spec id or board row gets the sentence
     saying what it asks or asserts (rule 17). A symbol gets its file path (rule 7).
   - When the repo cannot answer a claim, write `unknown — needs <what>` and name who or what can
     settle it. Never guess a value to make a field look complete.

3. **Render each item** in the rule 25 shape: the decision as a one-line question, then the six
   fields. The fields, in order: What this is, Why it's open, Product impact, Options, If you
   don't decide, My call. A trivial item may compress per rule 25. Keep reporting.md's sentence
   rules: one idea per sentence, under 30 words. Rules 11 and 16 also apply: no metaphors, no
   shorthand before its definition.

4. **Close with the decision sheet.** One line per item mapping each reply token to its meaning,
   so the reader can answer everything in a single short reply.

## What this command does not do

- Do not decide anything. Every recommendation is labeled opinion and the reader's to overturn.
- Do not start any of the work the items describe.
- Do not modify files. The briefing is conversation text only.
- Do not restate the report's other five sections. The scope is the Open items alone.
