# Claude Skills

Portable [Agent Skills](https://docs.claude.com/en/docs/claude-code/skills) for Claude Code. Each
directory is one skill, discovered automatically when it lives at `~/.claude/skills/`.

## Install

```sh
git clone git@github.com:jgonzalezd/claude-skills.git ~/.claude/skills
```

If `~/.claude/skills` already exists, clone elsewhere and move the directories in.

## The skills

| Skill | What it does |
|---|---|
| **python-bootcamp** | An ordered Python curriculum for an experienced engineer whose reflexes are Ruby and Java. 37 units across seven modules, taught one per session in book prose, each with a Ruby contrast, predict-the-output snippets, and a from-scratch exercise. |
| **interview-drilling** | Technical interview prep by inversion: the skill writes realistic flawed code, the user critiques it, and the critique is graded against a defect ledger committed to disk beforehand. Tracks recurring blind spots across sessions. |
| **landing-page-designer** | Turns a product and an audience into landing page copy and section structure, with a chosen tone and a measurement plan. |
| **product-describer** | Writes product descriptions pitched at a specific audience — customers, recruiters, or investors — surfacing unknowns as bracketed tokens rather than inventing facts. |

`find-skills` also appears in `~/.claude/skills/` but is a symlink into `~/.agents/skills/`, a
separate and currently unversioned location. It is gitignored here so the repo does not store a path
that resolves nowhere on another machine.

## Layout

A skill is a directory holding `SKILL.md` with YAML frontmatter (`name`, `description`). Anything the
skill needs to load conditionally lives under `references/`, so `SKILL.md` stays small and the heavy
material loads only when a session actually needs it.

```
skill-name/
├── SKILL.md          always loaded; keep it short
├── references/       loaded on demand
└── state/            per-machine, gitignored
```

`state/` is excluded from version control. It holds session progress, generated lesson text, and —
in `interview-drilling` — defect ledgers that would spoil a drill if shared.
