# War Story

> "This broke, here is what I thought was wrong, here is what was actually wrong."

---

## Choose this when

There was a real incident with a date: something failed, cost time or money, and was diagnosed. The author remembers or can reconstruct what they believed at the time.

This is the highest-credibility post type for a hiring audience, because the wrong first theory is the part no marketing post ever contains and no model can invent about someone else's system.

## Do not choose this when

- The incident cannot be dated or the diagnosis is a reconstruction. A war story with an invented timeline is the worst possible failure for this skill.
- The root cause is embarrassing in a way that exposes a client, a former employer or a security detail. Raise it at the Phase 3.5 gate rather than deciding alone.
- Nothing was learned. An incident with no rule minted at the end is an anecdote.

## Required ledger rows

1. A date for the incident, from a commit, a log, an issue or a dated note.
2. The cost: time lost, work redone, data affected, or the scope of the blast radius.
3. The wrong first theory, sourced from what was actually tried — commits that fixed the wrong thing, a reverted change, a note written at the time.
4. The root cause, with the artifact that proves it.
5. What changed afterwards: the rule, the check, the test, the process.

## Anatomy

1. **The breaking moment.** Where you were, what you saw, what time it was. Concrete and short. Mandatory.
2. **What it cost.** Mandatory, and stated in units: hours, commits, a lost afternoon, a corrupted run.
3. **The wrong first theory.** Mandatory and never cut. What you believed, why it was reasonable, and what you did about it before finding out it was wrong. A war story that goes straight to the correct diagnosis is a post that quietly claims the author does not make mistakes, which no senior reader believes.
4. **The turn.** The observation that broke the wrong theory. Usually 1 detail that did not fit.
5. **The root cause.** Properly explained, with the code or the configuration that caused it.
6. **The rule that came out of it.** What is now checked, automated or written down so this class of failure cannot recur silently. This section is why the post exists.

## The thesis shape

A general rule earned by a specific failure, stated so the reader can apply it before their own version of the incident.

Example: "A background job that is idempotent in the happy path and not idempotent on retry is not idempotent, and the only way I have found to know which one I have is to run it twice on purpose in CI."

## Failure mode

**Heroic narration.** The story flatters the author: the diagnosis is quick, the fix is elegant, the lesson is tidy. The tell is a wrong-first-theory section that lasts 1 sentence, or the phrase "I immediately suspected". If the wrong theory section is shorter than the root cause section, the post is a highlight reel.

Second failure: **reconstructed detail.** Error messages typed from memory, times rounded to the nearest dramatic number, a dialogue that did not happen. Quote the real artifact or describe it in prose.

## Length

600 to 1,200 words. War stories are shorter than build logs because the narrative carries them and elaboration dilutes it.
