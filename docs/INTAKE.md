# INTAKE

What to do with agent configuration found in a project that this framework does not know about.

This exists because a sweep missed one. The August 2026 consolidation checked for `.claude/`,
`.agents/` and `.cursor/` directories and reported the machine clean. The engineer then found
`CookingApp-code/.agent/` — singular, no `s` — holding a library-integration protocol and eight
skills. Running the full sweep afterwards found nine more things, including a ninth skill that
existed in one gitignored directory and nowhere else.

A naming variant that is missed once is missed again. So the sweep is written down, and so is what
happens to each find.

## The sweep

```sh
find ~/Git-Repos \
  -type d \( -name node_modules -o -name .git -o -name vendor -o -name .venv \) -prune -o \
  -type d \( -name .agent -o -name .agents -o -name .claude -o -name .cursor -o -name .windsurf \) -print

find ~/Git-Repos \
  -type d \( -name node_modules -o -name .git -o -name vendor -o -name .venv \) -prune -o \
  -type f \( -name AGENTS.md -o -name .cursorrules -o -name .clinerules \) -print
```

Run it on each machine, not once. The second Mac holds different projects.

Add a name to both lists whenever a tool introduces one. The list is the only thing standing between
a new convention and another silent miss.

## What to do with each find

**Inventory it.** List the files. Check whether they are tracked, untracked, or gitignored, with
`git check-ignore -v <path>`. Gitignored means the working tree holds the only copy, and that is a
backup before anything else happens.

**Give it a row** in `docs/CONSOLIDATION-2026-08.md`, or in whichever ledger is current. The row
names the find, what it is, its disposition, and its status.

**Choose exactly one disposition:**

- *Promote to the framework.* Requires a second project that needs it, and an entry in
  `docs/EVOLUTION.md` giving the evidence. Promoting on the grounds that something looks generic is
  the failure the policy exists to stop. An exception is allowed and is recorded as one, with its
  own justification, the way the Expo skills were on 2026-08-21.
- *Keep it project-scoped and wire it.* A skill only one project needs goes on the global discovery
  path through `project-skills.txt`, or is reached through the project's own `.claude/skills/`. A
  repo used by two tools gets the `.agents/skills/` source with symlinks from `.claude/skills/` and
  `.cursor/skills/`.
- *Record it in `rules/RESIDUE.md`* with the reason it stays where it is. A reader who cannot find
  a rule must be able to tell a deliberate omission from an oversight.

**Never delete without a row.** Not the duplicate, not the obsolete copy, not the empty directory.
The row is what lets the deletion be checked later.

## Two checks worth doing every time

**Is it a duplicate?** `diff -r` it against the copy you already know about before deciding it is
new. The 2026-08-21 sweep found one protocol byte-identical in three repos and eight skills
byte-identical in two directories of one repo. A duplicate across two projects is the promotion
trigger; a duplicate inside one project is a symlink waiting to happen.

**Does anything load it today?** Claude Code discovers skills from `~/.claude/skills`, a project's
`.claude/skills`, and plugins. Nothing else. Cursor reads `.cursor/skills`. A directory named
anything else is read by no tool, however carefully it is written, and that is worth knowing before
you decide what it is worth.
