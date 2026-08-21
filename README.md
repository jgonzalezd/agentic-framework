# agentic-framework

The process every project on this machine shares: how work is reported, how a plan is written
before it is built, the skills and commands that do not belong to one codebase, and the templates
a new project starts from.

It exists because the process used to live per project. An agent working in one repo did not
inherit the other's rules, and the cost was visible: a plan written in one project used an analogy
that the other project's reporting rules ban.

## What is here

| Path | What it is |
|---|---|
| `rules/reporting.md` | The reporting contract. Governs end-of-turn summaries, subagent reports, plan files, PR and issue bodies, commit bodies. Imported into `~/.claude/CLAUDE.md`. |
| `rules/planning.md` | The planning contract. The Assumptions block, the triggers that mean stop and ask, and how to ask. |
| `rules/RESIDUE.md` | Every rule deliberately left behind in a project, with the reason. Read this before concluding a rule was lost. |
| `skills/` | Skills that are true of more than one project. Listed in full below. |
| `commands/spec.md` | The spec-authoring sequence. Paths and grounding sources come from each project's own config. |
| `hooks/rename-plans.py` | Renames a new plan file from its random slug to one derived from its heading. Registered as a global Stop hook. |
| `project-skills.txt` | Project-scoped skills that go on the global discovery path, one `name = path` per line. Written down rather than scanned off disk: two projects here ship different skills under the same name. |
| `scripts/wire.sh` | Connects a machine's Claude overlay to this clone. Run after a rebuild, on a new machine, or after adding a skill. |
| `scripts/snapshot.sh` | Copies the Claude overlay into `/workspace/.claude-state` so the umbrella repo pushes it off the machine. |
| `templates/spec-system/` | One configurable spec linter, merged from two independent implementations, plus a spec skeleton. |
| `templates/decisions/` | ADR template and index format. |
| `templates/learning-loop/` | Postmortem, insight and pattern templates, and how the loop closes. |
| `docs/INSTALL.md` | How a machine or container starts consuming this. |
| `docs/EVOLUTION.md` | Dated log of process changes and the evidence behind each. |

## The skills

A skill is a directory holding `SKILL.md` with YAML frontmatter (`name`, `description`). Anything
the skill loads conditionally lives under `references/`, so `SKILL.md` stays small. A `state/`
directory is per-machine session state and is gitignored.

| Skill | What it does |
|---|---|
| `dev-loop` | The build-test-report cycle a session runs inside a project. |
| `distill-learning` | Routes a finished learning to a skill, a feedback memory, or a repo doc. The consolidation ritual between memory tiers. |
| `pm-status-report` | Turns repo and board state into a status report for the owner. |
| `stripe-ops` | Stripe operations: subscriptions, refunds, webhook checks. |
| `technical-report` | The standalone technical report format from `rules/reporting.md`. |
| `interview-drilling` | Interview prep by inversion: the skill writes realistic flawed code, the user critiques it, and the critique is graded against a defect ledger committed to disk beforehand. Tracks recurring blind spots across sessions. |
| `landing-page-designer` | Turns a product and an audience into landing page copy and section structure, with a chosen tone and a measurement plan. |
| `onboarding-builder` | Designs an app onboarding flow: archetype and paywall decision, screen-by-screen spec with draft copy, and a measurement plan. Content specs only, never code. |
| `pricing-strategist` | Derives a value metric, packaging, tier ladder and price points from an evidence-tagged pattern library, or audits an existing pricing page down to final copy strings. |
| `product-describer` | Writes product descriptions pitched at customers, recruiters, or investors, surfacing unknowns as bracketed tokens rather than inventing facts. |
| `python-bootcamp` | An ordered Python curriculum for an engineer whose reflexes are Ruby and Java. 37 units across seven modules, one per session, each with a Ruby contrast and a from-scratch exercise. |
| `technical-blog-writer` | Writes a technical blog post about something just built or debugged. Mines the repository first and builds a truth ledger, so every number and claim traces to a commit, a file, or a measured run. |

The last seven arrived from the `claude-skills` repo, merged here on 2026-08-21 by `git subtree`
so their history came with them.

`find-skills` also appears in `~/.claude/skills/` but is a symlink into `~/.agents/skills/`, a
separate unversioned location. It is not stored here: the link would record a path that resolves
nowhere on another machine.

## How it is consumed

**A shared clone plus symlinks. Not a plugin install.** Three environments consume this repo: the
macOS host running Claude natively, the JS devcontainer, and a Rails devcontainer. All three sit on
the same disk, so all three point at one working tree.

Per payload type, because they are not wired the same way:

| Payload | Mechanism |
|---|---|
| skills | one symlink per skill into `~/.claude/skills/` |
| commands | one symlink per command into `~/.claude/commands/` |
| rules | `@`-import by absolute working-tree path from `~/.claude/CLAUDE.md` |
| hooks | absolute working-tree path registered in `~/.claude/settings.json` |
| templates, spec-system | neither: vendored or installed per project. Node resolves `node_modules` only, and `CLAUDE_PLUGIN_ROOT` is unset outside hooks and commands |

`scripts/wire.sh --root <clone path>` does all of it. `--root` is required because the clone's
absolute path differs between the host and a container.

**Never import a rules file by a plugin cache path.** Those paths embed the version, so every
version bump silently breaks the import.

## Two consequences of the shared clone

**An unfinished edit is live everywhere, immediately.** There is no staging step between saving a
file here and an agent in another project reading it. This is accepted deliberately: one engineer,
one session at a time. It would not be acceptable with a second person.

**Version bumps are vestigial.** `plugin.json` carries a version so that a future machine which
cannot share this disk gets a meaningful number from a plugin install. While every consumer is live
on the working tree, that number means nothing. `docs/EVOLUTION.md` is the real record, and it is
written at each change rather than at a release boundary.

The `.claude-plugin/` manifests are kept valid for exactly that future machine. Nothing on this
machine installs them.
