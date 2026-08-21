Write a technical blog post about something just built, shipped or debugged — for an audience of people hiring staff, lead and senior software engineers. Front door to the `technical-blog-writer` skill, which holds the truth-ledger protocol, the anti-slop rules, the blind critic and the Jekyll packaging conventions.

Usage:
- `/_post [repo path or topic]` — draft a post · e.g. `/_post ~/Git-Repos/CodeBases/JS-PSQL-Redis/agentic-framework`
- `/_post audit [file]` — de-slop an existing draft: slop report with rule numbers and quoted lines, then a rewrite
- `/_post teaser [post file]` — LinkedIn teaser for an already-written post
- No argument → ask what was recently built or shipped, and offer the most recent repo with commits from the last few days.

**You usually won't be typed.** The router in `_vault/capability-map.md` sends "blog about this", "write up what I built", "does this read like AI", and teaser intents here. Run it without being asked.

**This command is installed globally** (`~/.claude/commands/_post.md`), so it runs from any project directory, not just the vault. Do not assume the vault is the working directory.

## Steps

### 1. Resolve the mode

`draft` when given a repository path, a topic, or nothing. `audit` when given an existing markdown file to fix. `teaser` when given a finished post. A bare path routes to `draft` in one line without asking.

### 2. Read state first

1. `ls` the blog repo's `_posts/` — check for an existing post on the same subject or the same date, and read the newest one to confirm the frontmatter conventions still hold.
2. `git log --oneline -20` in the subject repository — this is what the post is about, and it is the first thing the skill will mine anyway.
3. Only if the vault is reachable: `_vault/log.md` for whether this subject was already written up.

### 3. Invoke the skill

Call `technical-blog-writer` via the Skill tool. Don't re-implement its workflow here — it owns the phases, the truth ledger, the two blocking gates, the voice calibration and the packaging. This command owns state, routing and the write-back.

Deliverables land in the blog repository: `_posts/YYYY-MM-DD-<slug>.md` and `_teasers/YYYY-MM-DD-<slug>.md`.

### 4. Write back

Test for the vault log before writing to it:

```sh
test -f /Users/main/Git-Repos/ObsidianVaults/SmartVault/_vault/log.md
```

The path is absolute because this command runs from any working directory. The vault exists only
on the macOS host. Inside a container, and on the second Mac, the test fails.

When the test passes, append:

`## [YYYY-MM-DD HH:MM] /_post | <subject> — <mode> — <the angle, in one line>`

When the test fails, skip the write-back and say so in one line of the deliverable. Do not create
the file and do not fail the run. The post is the deliverable; the log line is bookkeeping.

### 5. Name the handoff

- **The user publishes.** Reviewing, committing, pushing and posting to LinkedIn are theirs. Say so explicitly and list what was left undone.
- **`/_experiment`** — if a new AI tool or technique was used in the work being written about, the result belongs in the AI-Leverage Engine.
- **Interview-prep documents** — positioning and career-strategy questions raised by the post are not this command's job.

## Guardrails

- **Never commit, push or publish.** No `git add`, no `git commit`, no `git push`, no posting anywhere. Files only.
- **Never write into the subject repository.** It is read-only for the entire run.
- **Never invent a number.** Every figure traces to a truth-ledger row with a real source, or it is cut. Run the fabrication sweep before delivering and show the mapping.
- **The Phase 3.5 angle gate, the Phase 4.5 mechanical sweep and the Phase 5 blind critic are never skipped**, including when the draft reads well. Reading well is the failure mode.
- **A KILL verdict is reported, never overridden.** Go back to the angle; do not argue with the critic.
- **The critic gets 2 file paths and nothing else.** Any context makes it agreeable, which makes it useless.
- **Anonymise by default.** Client names, private repository names and unpublished company details need explicit approval at the angle gate.

## Path policy

The blog repository and the subject repository are outside the vault, so absolute paths are unavoidable there — use `~/…` form. Inside the vault, relative paths only, except the log write-back above, which needs the absolute path because the working directory is arbitrary. Never `cd`.

## Sources

End with a **Sources** section listing the reference files the skill loaded and the repository files mined, using `[[Note Name]]` syntax for vault notes.
