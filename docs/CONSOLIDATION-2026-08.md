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
| `ai-development-protocol.md` | `CookingApp-code/.agent/` | Merged into `safe-dependency-install`; pointer file left behind | done `2e9e3b9`, CookingApp `df01bb6` |
| `ai-development-protocol.md` (byte-identical copy) | `outperformer-code/.cursor/rules/` | Replaced with a pointer to the skill | done `7fefc80` |
| `ai-development-protocol.md` (byte-identical copy) | `outperformer-staging/.cursor/rules/` | BLOCKED. That repo is on a detached HEAD with 19 uncommitted files. Nothing was written there | blocked |
| 8 Expo skills (`api-routes`, `building-ui`, `cicd-workflows`, `data-fetching`, `deployment`, `dev-client`, `upgrading-expo`, `use-dom`) | `CookingApp-code/.agent/skills/` | Promoted to `agentic-framework/skills/`; `.agent/skills/` removed | done `2e9e3b9`, CookingApp `df01bb6` |
| Same 8 skills, duplicate copy | `CookingApp-code/.cursor/skills/` | Replaced with symlinks into the framework clone. `.cursor` is gitignored there, so the links are machine-local and never travel | done, not committed (gitignored) |
| `web-design-guidelines` skill | `CookingApp-code/.cursor/skills/` | Promoted as a ninth skill; it now has a copy in version control for the first time | done `2e9e3b9` |
| `.cursor/rules/design.mdc` | CookingApp-code | Backed up, left in place. Committing it means changing that repo's gitignore policy, which is the owner's call. Recorded in RESIDUE | backed up |

## Move in Phase 4 — outperformer integration

| Asset | From | To | Status |
| --- | --- | --- | --- |
| `tdd` | `outperformer-code/.agents/skills/` | Wired to `.claude/skills/`; a Claude session in that repo now loads it | done `fb17d61` |
| 5 `.cursor/skills` (`backend`, `frontend`, `research`, `rspec-debugger`, `semantic-color-mining`) | `outperformer-code/.cursor/skills/` | Moved to `.agents/skills/`, relative symlinks back from both tools | done `9b10d46`, `fb17d61` |
| `seo-visibility-expert` | `landing-page/.claude/skills/` (gitignored) | Rescued into `.agents/skills/` and committed, 5 files | done `2966031` |
| `orchestrator` | `landing-page/.claude/skills/` | Deleted. Re-confirmed before deletion: `diff` showed the `name:` line only | done (gitignored path) |
| `skill-orchestrator` | `metronome-core/.claude/skills/` | Promoted; metronome-core's path is now a symlink. The promoted copy carries the 2026-08-18 rename that had never been committed there | done `2e9e3b9`, metronome-core `d024ce6` |
| `staging-main-only-policy.md` + `MEMORY.md` | outperformer volume | Committed to `outperformer-code/.claude/memory/`. The ADR it cites, Decision 0019, is on the unmerged branch `chore/staging-main-policy` | done `7fefc80` |
| 2 plan files | outperformer volume | Committed to `outperformer-code/plans/` | done `7fefc80` |
| outperformer-staging devcontainer | `outperformer-staging/.devcontainer/` | BLOCKED. Detached HEAD, 19 uncommitted files including `config/credentials.yml.enc`. Nothing was written there | blocked |

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
| S-1 | `ai-development-protocol.md` in `outperformer-code/.cursor/rules/` and `outperformer-staging/.cursor/rules/`, both byte-identical to CookingApp's (`diff` returned no output, 2026-08-21) | The same library-integration protocol, tracked in both outperformer repos | outperformer-code's copy is now a pointer. Staging's is blocked on that repo's detached HEAD | partly done |
| S-2 | `CookingApp-code/.cursor/skills/` holds real directories, not symlinks, byte-identical to `.agent/skills/` for all 8 Expo skills | A duplicate of the same 8 skills for Cursor | Promoted once; `.agent/skills/` removed and `.cursor/skills/` replaced with symlinks into the framework clone | done |
| S-3 | `CookingApp-code/.cursor/` is gitignored (`.gitignore:2`), and holds two files with no other copy: `skills/web-design-guidelines/SKILL.md` and `rules/design.mdc` | A ninth skill and a Cursor design rule, uncommitted | Backed up 2026-08-21 to `Backups/consolidation-2026-08-21/cookingapp-cursor/`, `diff -r` clean. `web-design-guidelines` was promoted and is now in version control. `design.mdc` stays gitignored; committing it changes that repo's policy, which is the owner's call. Recorded in RESIDUE | done |
| S-4 | `outperformer-staging/.claude/` (1 agent, 8 commands), `.cursor/` (8 agents, 2 commands, 12 rules), `.agents/skills/tdd`, all tracked | A near-mirror of outperformer-code's surface in the staging repo | BLOCKED on that repo's detached HEAD and 19 uncommitted files. No file there was read-modified or written | blocked |
| S-5 | `mms-repo/mmn-project/tmp/skill-trials/.claude/skills/` and `.agents/skills/` (`brand-naming`, `brand-naming-strategies`, `product-name`), gitignored under `tmp/` | Throwaway skill trials | No action. `tmp/` is scratch space by name and by gitignore | closed |
| S-6 | `JS-PSQL-Redis/.claude/settings.local.json`, `youtube-metronome/.claude/settings.local.json`, `_archive/Youtube-comments-extension/.claude/settings.local.json`, `_archive/barking_app/.claude/settings.local.json`, `ObsidianVaults/.../AI API Key Protection/.claude/settings.local.json`, all gitignored | Machine-local permission grants only, no skills or commands | Stay where they are | closed |
| S-7 | `metronome-core/AGENTS.md`, `metronome-core/.cursor/plans/reusable-library.plan.md`, both gitignored; `mms-repo/tools/pm-board/AGENTS.md`, tracked | Project-scoped agent instructions and one plan | Stay where they are. Project-scoped by content, no second project needs them | closed |
| S-8 | `Ruby/jgonzalezd.github.io/.cursor/` is an empty directory | Nothing | No action | closed |
| S-9 | Three Obsidian vaults carry committed agent config: `Applied AI (Deep Learning)` (15 agents, 31 commands, 85 tracked files, no git remote), `OutperformerVault` (12 agents, 35 commands, 17 skills, plus `.agents/skills/product-brainstorming`, remote `OutperformerOS-Obsidian`), `SmartVault` (51 commands, remote `SmartVaultPersonal`) | A fourth configuration surface the plan never scoped: 27 agents, 117 commands, 18 skills | Open. Raised to the owner as a scope question; nothing in this consolidation touches the vaults | open |

## Blocked

`outperformer-staging` was checked on 2026-08-21 with `git status` and `git branch --show-current`.
It reports "Not currently on any branch" and 19 modified or deleted files, among them
`config/credentials.yml.enc`, `app/frontend/pages/Auth/SignIn.tsx` and two deleted components.

Committing on a detached HEAD writes commits that no branch points at, and they are lost at the
next checkout. So nothing in that repo was written. Two rows are blocked on it: the devcontainer
mirror, and the wider `.agents/skills` treatment that sweep row S-4 identified.

To unblock: put that work on a branch, or stash it, then re-run the two rows. Neither depends on
anything else in this ledger.

## Verification, 2026-08-21, macOS host

| Check | Result |
| --- | --- |
| `wire.sh --root <clone> --dry-run` | No MISSING, no SKIP, no WARN |
| `~/.claude/skills` | 28 entries, 0 dead links |
| `~/.claude/commands` | 3 symlinks |
| Hooks in `~/.claude/settings.json` | `rename-plans.py` on Stop, `block-icloud-writes.sh` on PreToolUse, `memory-push.sh` on SessionEnd |
| Rules imported in `~/.claude/CLAUDE.md` | 2 |
| `block-icloud-writes.sh` behaviour | Protected iCloud path exits 1; `CloudDocs/Coding` exits 0; a normal path exits 0 |
| `memory-push.sh` behaviour | Clean repo is a no-op; dirty repo commits and pushes; missing path and no argument both exit 0 |
| `snapshot.sh` | Writes to `JS-PSQL-Redis/.claude-state`; all four exclusion checks report absent |
| Skills load in a live session | The 9 promoted Expo skills, `safe-dependency-install`, and the 3 snapshot-restored skills all appeared |
| `outperformer-code` project skills | A Claude session discovered all 7 through `.claude/skills`, including `tdd` and `seo-visibility-expert` for the first time |
| Pre-merge history | `git merge-base --is-ancestor b37495e HEAD` returns true; `git log 511a2c6 -- interview-drilling/SKILL.md` walks it |

Not verified on the host, because it needs another environment or a person:

- Cursor loading the symlinked skills. `.cursor/skills/research` and the other four resolve on
  disk. Whether Cursor follows them needs Cursor opened on this Mac.
- The outperformer devcontainer rebuild. The mount and the `postCreateCommand.sh` line are
  committed and `devcontainer.json` parses, but no rebuild was run.
- Anything on the iOS Mac.
