# Behavioral Round

Mode: `interview-drilling behavioral`.

Two deliverables: a **story bank** built from real material, and **questions to ask** a CEO on a
four-person team.

## Contents

- Sourcing real material
- Story bank construction
- The prompts this role will actually use
- Grading a told story
- Questions to ask
- Red flags to listen for

---

## Sourcing real material

Stories must come from things that happened. Invented detail collapses on the second follow-up, which
is exactly where interviewers push.

Look for an Obsidian vault, in order, and stop at the first that resolves:

1. `~/vault/_context/` (symlink; may not exist)
2. `~/Git-Repos/ObsidianVaults/SmartVault/_context/`
3. Ask the user for the path

Read `Who I Am.md`, `work-career.md`, `startup-building.md`, and `transformation.md` if present.
**Read-only — never write to the vault from this skill.**

If no vault is reachable, interview the user instead: ask for four projects or situations from the
last three years, one sentence each, and build from those. Do not stall on the missing file.

## Story bank construction

Aim for **six** stories that cover the standard prompt space. One story can serve several prompts —
that is the point of a bank rather than a script.

Per story, in this shape:

```markdown
### <Two-word handle>

**Prompt fit:** <which of the prompts below this answers>
**S/T:** <situation and stakes — one sentence, with a number if one exists>
**A:** <what *you* specifically decided and did — three beats max, first person singular>
**R:** <outcome, quantified where possible; if it failed, what changed as a result>
**Follow-up ready:** <the two hardest questions this invites, and the answers>
```

Rules:
- **"We" is a smell.** Interviewers cannot grade a team. Every action beat is "I decided," "I chose."
- One number per story minimum. "Faster" is not a result.
- A failure story is required. Ownership of a real failure outscores a fourth success, and its
  absence is itself a signal.
- **Follow-up ready is the part people skip and interviewers rely on.** Every story invites two
  obvious probes; have them answered before you walk in.

## The prompts this role will actually use

A four-person team with direct CEO exposure probes differently from a large company. It is looking
for autonomy, scope judgment, and whether you can be trusted with a vertical.

**Autonomy and ambiguity**
- Tell me about something you shipped with no one telling you what to build.
- When did you decide a spec was wrong and do something else?

**Scope and pragmatism** *(the most likely area, given a live product and a lean team)*
- A deadline is in a week and the feature is two weeks. Walk me through the conversation.
- Tell me about something you deliberately built badly and were right to.
- What did you cut that you later wished you had not?

**Ownership**
- Describe a production incident you caused.
- What is something broken you fixed that nobody asked you to?

**Working with a founder**
- Tell me about a time you disagreed with someone who could overrule you.
- How do you handle being told the priority changed mid-sprint?

**Learning velocity** *(this hire spans full stack + AI)*
- What is the last thing you learned well enough to ship, from cold?
- How did you get productive in an unfamiliar codebase?

**Why this**
- Why this problem? — Public housing is a mission domain and the CEO will care whether the answer
  is real. A concrete answer beats an enthusiastic one, and "I want to build products people
  actually depend on" is fine if it is true. An answer that is only about the tech stack reads as
  indifference to the users.

## Grading a told story

Have the user tell it aloud (typed is fine), then grade:

| Signal | What earns it |
|---|---|
| Specificity | Names, numbers, dates, constraints — not categories |
| Ownership | "I decided," with the decision's reasoning exposed |
| Judgment | A trade-off named and consciously accepted |
| Consequence | What changed because of it, including for users |
| Compression | Ninety seconds. Rambling costs credibility more than a thin result |

Then push exactly where an interviewer would: the unexamined claim, the passive-voice sentence, the
result with no number. If the story survives two probes it is ready.

## Questions to ask

Asking nothing is the loudest negative signal in the loop. Pick four; they should be answerable only
by *this* CEO.

**About the business**
- What has to be true a year from now for this to have worked?
- Who pays — the city agency, the property managers, someone else? How does that shape the roadmap?
- What is the constraint right now: distribution, product, or headcount?

**About the product**
- What does the agent get wrong most often today, and what is your tolerance for that?
- Where do leasing managers still fall back to a spreadsheet or a phone call?
- What has an applicant told you that changed the roadmap?

**About the work**
- What broke most recently, and what did the team do about it?
- How does something get decided when you and an engineer disagree?
- What does the first ninety days look like, and what would make you regret this hire?

**About the team**
- Four engineers — how is ownership split, and which parts have no owner?
- What is the piece of the system everyone is quietly afraid of?

## Red flags to listen for

Interviews go both ways. Note the answers to:

- "What broke most recently" met with a blank — either nothing ships or nothing is measured.
- No answer on who pays — the business model is unresolved and runway is a question.
- The agent's error rate is unknown — no evals, which means the AI work is unmeasured and you will
  be the one building that from zero.
- "We're pre-product-market-fit but we have a two-year roadmap."
