# Book Prose — the positive anatomy

> Read at **Phase 4**, before drafting. `anti-slop.md` says what not to do; this file says what to do instead.

---

## The register

Write in the register of technical books rather than technical blog posts. The models are *Effective Java*, *Fluent Python* and *Practical Object-Oriented Design in Ruby*: an author who knows the material explaining it to a reader they respect, with the reasoning shown rather than compressed.

Concretely, that means:

- **Complete declarative sentences.** No fragments used for emphasis, no colon scaffolding, no bolded label followed by a phrase.
- **Explicit transitions.** "Because of that", "which meant", "the problem with this was". A reader should never have to reconstruct why one paragraph follows another.
- **One idea per sentence.** 3 clauses is the working target and 4 is the hard cap.
- **The reasoning shown.** When you state a conclusion, the sentence before it or after it says how you got there.
- **Ordinary words.** The subject matter supplies the difficulty; the prose does not need to add any.

The failure this prevents is a post that is technically correct and reads like a chat response. That register is fine in a terminal and fatal in a post signed with a real name.

---

## The thesis spine

Before drafting, write down the single sentence the post argues. Not the topic, the argument. "Specs should name the tests that back-reference them" is a thesis. "What I learned building a spec linter" is a topic.

Then every section has to earn its place against that sentence. If a section is interesting but does not advance the argument, it is a different post. Cut it and note it as a future post rather than folding it in.

A post with no thesis reads as a tour of a repository, which is the most common shape of a technical post and the least persuasive one for this audience. A tour proves familiarity. An argument proves judgment.

---

## The arc

Most technical posts that work follow the same movement. Use it unless the post-type pack says otherwise.

1. **The problem, as it was actually lived.** A specific moment, with enough detail that a reader with the same problem recognises it. Not the abstract category of problem.
2. **The pressure.** Why the obvious fix did not hold, or what made it worse over time. This is where most posts skip a step and lose the reader's trust.
3. **The root cause.** The thing that turned out to be actually wrong, which is usually not the thing that looked wrong.
4. **Why the old model fails.** State the mental model you were working under and why it could not have produced the right answer.
5. **The new model.** The thesis, stated plainly, at the point where the reader has enough context to agree with it.
6. **Why it works, with evidence.** What you built, what it does, and what happened when you ran it. Numbers from the ledger.
7. **What it does not do.** The limits, the sample size, the untested cases. This is the section that separates a post from marketing.

The arc can be compressed but its steps should not be reordered. Stating the thesis before the pressure is what makes a post read as a product announcement.

---

## Every claim gets an example

An abstract claim followed by a concrete instance is the basic unit of this kind of writing. The claim alone is an assertion; the instance is what makes it checkable.

Weak: "The verification step catches specs that drifted from the code."

Better: "The verification step reads each shipped spec, finds the test files it names, and greps those files for a reference back to the spec's own path. A spec that names `auth_test.exs` passes only if `auth_test.exs` mentions the spec. When I ran it across the older project, 8 specs named test files that had never heard of them."

The second version can be wrong, which is the point. A reader can check it, and a claim a reader can check is worth more than 3 that they cannot.

---

## Code and output

- Quote real code and real output. Never reconstruct an error message from memory or write a "representative" example. If you do not have the real output, describe what happened in prose instead.
- Keep excerpts short enough to read in place. A 60-line block gets skipped, and a skipped block proves nothing.
- Say what to look at before the block, not after. The reader should know what they are looking for while they read it.
- Never post a block without prose around it. A wall of code with a heading is a gist, not a post.

---

## Openings

The opening decides whether the post is read. Open on the concrete thing: a moment, a command, a number, a decision. The reader's question in sentence 1 is "does this person have my problem", and the answer has to arrive before sentence 4.

Banned openers, all of them dead on arrival with this audience:

- "In this post, we will explore…"
- "In today's fast-moving world of software…"
- "As developers, we all know that…"
- "Have you ever found yourself…"
- Any definition of a widely known term.

Good openers do one of these: state the problem as it happened, state a result and promise the explanation, or state a position that the reader might disagree with.

---

## Anti-pattern quick table

| Anti-pattern | What it looks like | Fix |
|---|---|---|
| Tour of the repo | Section per directory, no argument | Find the thesis; cut everything that does not serve it |
| Tutorial drift | Post turns into setup instructions | Link the README, keep the post about the decision |
| Feature list | "It also supports…" repeated | Pick the one feature the thesis needs; name the rest in a sentence |
| Buried result | The number appears in the last paragraph | Move it up; a result is a reason to keep reading |
| Missing limits | No section on what it does not do | Add it; it is the highest-credibility part of the post |
| Passive retrospective | "It was decided that…" | Say who decided and when |
| Timeline as structure | "First I… then I… then I…" | Structure by argument; the chronology is a detail |

---

## Length

There is no target length. There is a target density: every paragraph either advances the argument or supplies evidence for it. A post that does that for 700 words is finished at 700 words.

The one hard rule is that the post ends when the argument is finished. A summary section that restates what was already said is filler, and filler at the end of a post is where aphorisms get written.

---

**Mirrored:** 2026-08-20. Master concepts: the SmartVault memory rules on book prose and AI-slop prose, plus the OutperformerVault humane-register reference.
