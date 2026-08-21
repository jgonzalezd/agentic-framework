# Voice Calibration

> Read at **Phase 2**, after the ledger and before the angle. The target is not a style guide's idea of good writing. It is this author's own voice, at its best, cleaned up.

---

## Layer 1 — read the anchors

**Blog repository:** `~/Git-Repos/CodeBases/Ruby/jgonzalezd.github.io`

Read these 3 posts from `_posts/` before drafting:

- `2026-03-31-i-built-an-x-to-obsidian-button.md`
- `2025-03-18-my-agentic-testing-rules.md`
- `2025-06-28-my-trick-for-creating-system-prompts-fast.md`

**Then read the first 30 lines of the anti-anchor** so you can feel the difference:

- `2025-12-08-why-premature-architecture-is-now-essential-clean-architecture-as-ai-agent-superpower.md`

If the repository is unreachable, say so in the deliverable and calibrate from the frozen pairs below rather than skipping the phase.

---

## The anchor list is curated by hand. Never replace it with "the newest posts."

Some published posts are already contaminated. The 2025-12-08 post and the 2025-07-13 post both drifted into consultant register, and 2025-07-13 opens with a symmetric reveal in its first 2 sentences. Calibrating on the latest N posts would sample those, and each contaminated post would then pull the next one further out. The list above changes only when the user adds a post they are happy with, by hand.

---

## What the anchors do right

- **They start where the annoyance started.** "I quite often find good stuff on X that I want to use for inspiration… I had to do repetitive markdown formatting."
- **They say the blunt thing.** "a tiny Chrome/Brave extension that does one blunt, practical thing."
- **They show the artifact.** Real prompts, real rule files, real screenshots, quoted in full rather than described.
- **They admit the messy process.** "Usually, this is an iterative process. It takes a few iterations until I find the prompt that provides the best results."
- **They end on the practical fact**, usually a repository link, not on a reflection.
- **The sentences are sometimes long and sometimes clumsy**, and they always sound like a person. The clumsiness is not the target, but it is the thing that gets lost first when a draft is polished.

## What the anti-anchor does wrong

- Abstract nouns doing the work: "outsized impact", "leveraging".
- Claims with no artifact behind them.
- A confident consultant register that could have been written about any codebase.
- Section headers that are labels rather than claims.

---

## Layer 2 — frozen before/after pairs

Mined from the author's own published posts. The left column is real text that drifted; the right column is the same content in the anchor register.

**1. Symmetric reveal opening**

- Drifted: "Most software engineers believe their primary job is to write code. They're wrong."
- Anchor register: "Most engineers describe their job as writing code. After 15 years I would describe mine as writing down what I meant precisely enough that something else can build it."

**2. Abstract value claim**

- Drifted: "your leverage — your very wealth as an engineer — is shifting to a higher plane: communication."
- Anchor register: "The part of the job that got more valuable is the part where you write down exactly what you want, because that is now the input to the thing that builds it."

**3. Balanced fragment pair**

- Drifted: "That's the output, not the outcome. It's the *how*, not the *why*."
- Anchor register: "The code is what came out the end. The reasoning that produced it is what I actually needed to keep, and that is the part I was throwing away."

**4. Consultant abstraction**

- Drifted: "Clean architecture is now an AI agent superpower, delivering outsized impact."
- Anchor register: "Keeping the boundaries clean turned out to matter more once an agent was writing inside them, because the agent respects a boundary it can see in the directory structure and ignores one that only exists in my head."

**5. Description instead of artifact**

- Drifted: "I created a comprehensive rule file to guide the agent's testing behaviour."
- Anchor register: "So I wrote a rules file for it, which I use as an auxiliary to my `generate-tasks.mdc` file. Here it is in full."

---

## The calibration instruction

Write as though explaining this to a colleague who works on something else and is mildly interested. Keep the directness, the ordinary vocabulary, and the willingness to say a thing was annoying or that a first attempt did not work.

Fix what an editor would fix: grammar, a run-on that has stopped tracking, a paragraph doing 2 jobs. Add nothing beyond that. Every additional pass of polish moves the text toward the anti-anchor, and the finished draft should read as though the author wrote it carefully rather than as though something smoothed it afterwards.

---

**Created:** 2026-08-20. The anchor list is maintained by hand; add a post only after the user says they are happy with how it reads.
