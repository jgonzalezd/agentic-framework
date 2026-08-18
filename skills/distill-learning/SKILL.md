---
name: distill-learning
description: Capture an operational learning so a future session hits it at decision time instead of re-paying for it. Use when a mistake cost the session real time or tokens, when the user says "we should have known better" or "remember this", or after any incident where a known constraint was rediscovered the hard way. Classifies the learning and writes it where it will actually be recalled — a domain-ops skill, a feedback memory, or the repo doc that owns the fact — without bloating default context files.
metadata:
  version: 1.0.0
---

# Distill a learning

The failure this skill exists for: a constraint was already known, but it lived in session history,
so nothing surfaced it when the decision was made and the cost was paid twice. The fix is not
writing more — it is writing the constraint where the *next* decision will trip over it.

## Workflow

1. **State the learning as a testable constraint.** One sentence someone could check, plus the
   date it was paid for and what it cost. "The sandbox thing went wrong" is not a learning;
   "an unclaimed sandbox's `rkcs_test_` key cannot create test clocks" is.

2. **Search before writing.** `grep -ri` the key terms over the framework clone's `skills/` and
   `rules/`, the current project's own `.claude/skills/`, the memory directory
   (`~/.claude/projects/<project>/memory/`), and the project docs that own the domain. If the
   constraint is already recorded, sharpen that entry — add the new date and cost — instead of
   duplicating it. A learning recorded twice will be updated once.

3. **Classify, then write in exactly one place. Ask first whether the learning is true of one
   project or of every project.** That answer decides framework or project, and getting it
   backwards is the common failure: a project-specific fact promoted to the framework reaches
   sessions it is false in.
   - **Vendor or domain constraint** (an API shape, a key restriction, a CLI behavior) →
     `<framework>/skills/<domain>-ops/SKILL.md`, e.g. `stripe-ops`. These are cross-project by
     nature: the vendor does not know which repo is calling. Create the skill if the domain has
     none, and write its description as the trigger: name the *actions* that should surface it
     ("use BEFORE provisioning…"), not the topic.
   - **How-we-work rule** (sequencing with the user, when to stop and hand over) → a `feedback`
     memory file with a one-line MEMORY.md index entry, following the existing format there.
   - **Account or state fact** (what exists, what is configured where) → the project doc that owns
     it, in that project's repo. State goes stale; rules do not. Never put state in an ops skill,
     and never put it in the framework, where no test can hold it to the account it describes.
   - **Reporting or writing rule** (how a claim is worded, what a report must carry, what a plan
     must declare) → `<framework>/rules/reporting.md`, or `rules/planning.md` if it governs a plan.
     One file, once. This used to be a two-place edit, because the rules were duplicated into a
     `CLAUDE.md` that sessions actually load and a `docs/` file that held the reasoning. The
     duplication is gone: every consumer `@`-imports these files, so the file a session loads and
     the file that holds the reasoning are the same file. Quote the sentence that went wrong; a
     reporting rule with no offending sentence cannot be checked against a future report.
   - **Project-specific process rule** (true of one codebase only) → that project's own
     `CLAUDE.md`. Resist promoting it. The test is whether it would still be true in a repo with a
     different stack.

4. **Keep the entry lean.** Constraint sentence in bold, date and cost, the rule. No narrative.
   The whole ops skill should stay under ~80 lines; when it grows past that, split by
   sub-domain rather than trimming evidence dates.

5. **If a new skill was created, wire it and verify** — this step is silently load-bearing:

   ```bash
   <framework>/scripts/wire.sh --root <framework>
   ls -la ~/.claude/skills/   # must show the link resolving
   ```

   Claude discovers skills from `~/.claude/skills/` only. Without the symlink the skill is
   invisible, and neither `/reload-skills` nor a new session fixes it, because the file genuinely
   is not on the discovery path yet. Only the symlink puts it there.

6. **Commit** the change in the repo that owns it: the framework clone for a framework skill or
   rule, the project repo for a project fact. Memory files are private and are not committed.

7. **If the learning changed how the process works, add a dated line to
   `<framework>/docs/EVOLUTION.md`** naming the incident that motivated it. With every consumer
   live on the working tree there is no release boundary to record against, so that file is the
   only record that a rule changed and why.

## What does not belong here

- Facts the repo already records (code structure, dated script comments doing their job, git
  history). Point at them from an entry if useful; do not copy them.
- Session-specific state ("the secret is currently in three places") — that is a board row or an
  infrastructure doc line, not a learning.
- Rules with no incident behind them. Every entry carries the date it was paid for; a rule nobody
  paid for is decoration (the same principle as eval rule 7).
- Reporting rules with no offending sentence quoted. Without the sentence that went wrong, nothing
  in a future report can be checked against the rule.
