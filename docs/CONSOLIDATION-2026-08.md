# Consolidation ledger, August 2026

Every piece of agent configuration that existed on 2026-08-21, with its disposition. A row is
closed when its phase has run and the commit hash is recorded.

Two terms this ledger uses:

- **RESIDUE** is `rules/RESIDUE.md`, the framework's record of things deliberately not promoted,
  with the reason.
- **The unrecorded skills** are four skills that `scripts/snapshot.sh` copies by name because no
  repo owns them: `45-stephenturner-skill-deslop`, `avoid-ai-writing`, `find-skills`, `humanizer`.

Backup for this consolidation: `/Users/main/Backups/consolidation-2026-08-21/`.

## Stay where they are

| Asset | Location | Reason | Status |
| --- | --- | --- | --- |
| 5 framework skills (`dev-loop`, `distill-learning`, `pm-status-report`, `stripe-ops`, `technical-report`) | `agentic-framework/skills/` | Already the single source | done |
| Host CLAUDE.md, settings.json, auto-memory | `~/.claude/` | Machine-local by design | done |
| outperformer-code `.claude/` agents, commands, settings.local.json | `outperformer-code/.claude/` | Project-scoped, already committed | done |
| 13 `.cursor/rules`, 8 `.cursor/agents`, 2 `.cursor/commands` | `outperformer-code/.cursor/` | Cursor-native formats, no Claude equivalent | done |
| `landing-page/.claude/settings.local.json` | outperformer-code | Machine-local permissions | done |
| The 4 unrecorded skills | `.claude-state/skills-unrecorded/` | `snapshot.sh` mechanism unchanged. Checked 2026-08-21: only `find-skills` is live in `~/.claude/skills`; `45-stephenturner-skill-deslop`, `avoid-ai-writing` and `humanizer` exist only in the snapshot. `wire.sh` restores them once Phase 2 fixes the `--state` default, which today points at the container-only `/workspace/.claude-state` | done |
| `find-skills` | `~/.agents/skills/` | Reinstallable from `~/.agents/.skill-lock.json` | done |
| `plan-orchestrator` | `mms-repo/mmn-project/.claude/skills/` | Project-scoped, one project | done |
| 7 metronome-core skills (`ctr-optimizer`, `frontend-architect`, `liaison`, `marketing-strategist`, `nextjs-interview-coach`, `skill-coach`, `team-builder`) | `youtube-metronome/metronome-core/.claude/skills/` | Named as deliberately unpromoted in the `project-skills.txt` comment header | done |
| `.githooks/pre-commit` | outperformer-code | A git hook, not agent config | done |
| Ruby repos | `CodeBases/Ruby/` | No agent config | done |

## Move in Phase 1 — merge claude-skills

| Asset | From | To | Status |
| --- | --- | --- | --- |
| 7 skills (`interview-drilling`, `landing-page-designer`, `onboarding-builder`, `pricing-strategist`, `product-describer`, `python-bootcamp`, `technical-blog-writer`) | `~/.claude/skills` (claude-skills repo) | `agentic-framework/skills/` | done `f3bee83` |
| claude-skills README, .gitignore | same | folded into framework README and `.gitignore` | done `f3bee83` |
| `_post.md` | `~/.claude/commands/` | `agentic-framework/commands/` | done `03cae19` |
| `block-icloud-writes.sh` | `~/.claude/hooks/` | `agentic-framework/hooks/` | done `03cae19` |
| `interview-drilling/state/` | `~/.claude/skills/` | framework working tree, gitignored | done `03cae19` |

## Move in Phase 3 — dependency workflow and CookingApp

| Asset | From | Disposition | Status |
| --- | --- | --- | --- |
| `ai-development-protocol.md` | `CookingApp-code/.agent/` | Merge into `safe-dependency-install`; pointer file stays | pending |
| `ai-development-protocol.md` (byte-identical copy) | `outperformer-code/.cursor/rules/` | Same content, second project. See sweep row S-1 | pending |
| `ai-development-protocol.md` (byte-identical copy) | `outperformer-staging/.cursor/rules/` | Same content, third project. See sweep row S-1 | pending |
| 8 Expo skills (`api-routes`, `building-ui`, `cicd-workflows`, `data-fetching`, `deployment`, `dev-client`, `upgrading-expo`, `use-dom`) | `CookingApp-code/.agent/skills/` | Promote to `agentic-framework/skills/` | pending |
| Same 8 skills, duplicate copy | `CookingApp-code/.cursor/skills/` | Replace with symlinks. See sweep row S-2 | pending |
| `web-design-guidelines` skill | `CookingApp-code/.cursor/skills/` | Gitignored only-copy. See sweep row S-3 | pending |
| `.cursor/rules/design.mdc` | CookingApp-code | Gitignored only-copy, Cursor-native. See sweep row S-3 | pending |

## Move in Phase 4 — outperformer integration

| Asset | From | To | Status |
| --- | --- | --- | --- |
| `tdd` | `outperformer-code/.agents/skills/` | Wired to both `.claude` and `.cursor` | pending |
| 5 `.cursor/skills` (`backend`, `frontend`, `research`, `rspec-debugger`, `semantic-color-mining`) | `outperformer-code/.cursor/skills/` | `git mv` to `.agents/skills/`, symlink back | pending |
| `seo-visibility-expert` | `landing-page/.claude/skills/` (gitignored) | Rescued into `.agents/skills/`, committed | pending |
| `orchestrator` | `landing-page/.claude/skills/` | Delete; verbatim duplicate of `skill-orchestrator` | pending |
| `skill-orchestrator` | `metronome-core/.claude/skills/` | Promote to framework; symlink back | pending |
| `staging-main-only-policy.md` + `MEMORY.md` | outperformer volume | `outperformer-code/.claude/memory/` | pending |
| 2 plan files | outperformer volume | `outperformer-code/plans/` | pending |
| outperformer-staging devcontainer | `outperformer-staging/.devcontainer/` | Mirror the framework mount and wire call | pending |

## Record in RESIDUE, Phase 7

| Asset | Location | Reason |
| --- | --- | --- |
| `koeficator` | `~/.agents/skills/` | Host-local, no second project needs it |

## Discovery sweep, 2026-08-21

Command: `find /Users/main/Git-Repos` pruning `node_modules`, `.git`, `vendor`, `.venv`, for
directories named `.agent`, `.agents`, `.claude`, `.cursor`, `.windsurf` and files named
`AGENTS.md`, `.cursorrules`, `.clinerules`.

The sweep found nine things the plan's inventory did not list. Each gets a row here and a
disposition, per `docs/INTAKE.md`.

| Row | Find | What it is | Disposition | Status |
| --- | --- | --- | --- | --- |
| S-1 | `ai-development-protocol.md` in `outperformer-code/.cursor/rules/` and `outperformer-staging/.cursor/rules/`, both byte-identical to CookingApp's (`diff` returned no output, 2026-08-21) | The same library-integration protocol, tracked in both outperformer repos | Strengthens the Phase 3 promotion: three copies across three repos is the framework's second-project trigger, not an exception to it. Both copies become pointers to the framework skill in Phase 3 | pending |
| S-2 | `CookingApp-code/.cursor/skills/` holds real directories, not symlinks, byte-identical to `.agent/skills/` for all 8 Expo skills | A duplicate of the same 8 skills for Cursor | Phase 3 promotes once and replaces both trees with symlinks, the `.agents/skills` pattern Phase 4 establishes for outperformer | pending |
| S-3 | `CookingApp-code/.cursor/` is gitignored (`.gitignore:2`), and holds two files with no other copy: `skills/web-design-guidelines/SKILL.md` and `rules/design.mdc` | A ninth skill and a Cursor design rule, uncommitted | Backed up 2026-08-21 to `Backups/consolidation-2026-08-21/cookingapp-cursor/`, `diff -r` clean. `web-design-guidelines` joins the Phase 3 promotion as a ninth skill. `design.mdc` is Cursor-native and stays, committed in Phase 3 so it stops being an only-copy | backed up |
| S-4 | `outperformer-staging/.claude/` (1 agent, 8 commands), `.cursor/` (8 agents, 2 commands, 12 rules), `.agents/skills/tdd`, all tracked | A near-mirror of outperformer-code's surface in the staging repo | Phase 4 step 7 widens: staging gets the same `.agents/skills` treatment as outperformer-code, not only the devcontainer mount | pending |
| S-5 | `mms-repo/mmn-project/tmp/skill-trials/.claude/skills/` and `.agents/skills/` (`brand-naming`, `brand-naming-strategies`, `product-name`), gitignored under `tmp/` | Throwaway skill trials | No action. `tmp/` is scratch space by name and by gitignore | closed |
| S-6 | `JS-PSQL-Redis/.claude/settings.local.json`, `youtube-metronome/.claude/settings.local.json`, `_archive/Youtube-comments-extension/.claude/settings.local.json`, `_archive/barking_app/.claude/settings.local.json`, `ObsidianVaults/.../AI API Key Protection/.claude/settings.local.json`, all gitignored | Machine-local permission grants only, no skills or commands | Stay where they are | closed |
| S-7 | `metronome-core/AGENTS.md`, `metronome-core/.cursor/plans/reusable-library.plan.md`, both gitignored; `mms-repo/tools/pm-board/AGENTS.md`, tracked | Project-scoped agent instructions and one plan | Stay where they are. Project-scoped by content, no second project needs them | closed |
| S-8 | `Ruby/jgonzalezd.github.io/.cursor/` is an empty directory | Nothing | No action | closed |
| S-9 | Three Obsidian vaults carry committed agent config: `Applied AI (Deep Learning)` (15 agents, 31 commands, 85 tracked files, no git remote), `OutperformerVault` (12 agents, 35 commands, 17 skills, plus `.agents/skills/product-brainstorming`, remote `OutperformerOS-Obsidian`), `SmartVault` (51 commands, remote `SmartVaultPersonal`) | A fourth configuration surface the plan never scoped: 27 agents, 117 commands, 18 skills | Open. Raised to the owner as a scope question; nothing in this consolidation touches the vaults | open |
