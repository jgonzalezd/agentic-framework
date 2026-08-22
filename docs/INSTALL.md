# Installing the framework on a machine

Two paths. The first is what every environment on this Mac uses. The second exists for a machine
that cannot reach this clone on disk, and nothing uses it today.

---

## Path 1 — shared clone and symlinks (the one in use)

This is the primary path. Three environments consume one working tree: the macOS host running
Claude natively, the JS devcontainer, and the Rails devcontainer.

### On the host

```bash
git clone git@github.com:jgonzalezd/agentic-framework.git \
  ~/Git-Repos/CodeBases/JS-PSQL-Redis/agentic-framework

~/Git-Repos/CodeBases/JS-PSQL-Redis/agentic-framework/scripts/wire.sh \
  --root ~/Git-Repos/CodeBases/JS-PSQL-Redis/agentic-framework
```

### In a devcontainer that already mounts the workspace

The JS devcontainer bind-mounts the whole workspace folder, so the clone is already visible at
`/workspace/agentic-framework`. Nothing needs mounting.

```bash
/workspace/agentic-framework/scripts/wire.sh --root /workspace/agentic-framework
```

Add that line to the container's `postCreate.sh`. A rebuild wipes `~/.claude` because it is not a
bind mount, and a rebuild happens months apart — low frequency and high consequence, which is the
worst combination to leave to memory.

### In a devcontainer that does not mount the workspace (the Rails one)

Add a bind mount of the host clone to its `devcontainer.json`:

```jsonc
"mounts": [
  {
    "source": "${localEnv:HOME}/Git-Repos/CodeBases/JS-PSQL-Redis/agentic-framework",
    "target": "/opt/agentic-framework",
    "type": "bind"
  }
]
```

Then in its `postCreate.sh`:

```bash
/opt/agentic-framework/scripts/wire.sh --root /opt/agentic-framework
```

`--root` differs per environment, which is why it is a required argument and not a constant.

This is wired in `outperformer-code/.devcontainer/` and mirrored to `outperformer-staging` as of
2026-08-21. Both mount the framework at the same target, so the symlinks that land in the shared
`outperformer-claude-config` volume are valid in either container.

### On a second Mac

The second Mac cannot share this disk, so it clones instead of bind-mounting. Two commands:

```sh
git clone git@github.com:jgonzalezd/agentic-framework.git ~/Git-Repos/agentic-framework
~/Git-Repos/agentic-framework/scripts/wire.sh --root ~/Git-Repos/agentic-framework
```

**MISSING is expected there.** `project-skills.txt` and `memory-map.txt` list repos that live on
the other Mac. `wire.sh` prints MISSING for each one it cannot find, and that is the correct result,
not a failure.

**Add the general memory store**, so the memory written on either machine is one set:

```sh
git clone git@github.com:jgonzalezd/agent-memory.git ~/Git-Repos/agent-memory
~/Git-Repos/agentic-framework/scripts/wire.sh --root ~/Git-Repos/agentic-framework \
  --memory-repo ~/Git-Repos/agent-memory
```

`--memory-repo` defaults to the parent of the workspace plus `/agent-memory`; pass it explicitly if
the clone is somewhere else.

**What does not sync, and that is deliberate.** Credentials, session transcripts and the plugin
payload stay per machine. Project memory arrives with each project clone. General memory arrives
with the `agent-memory` clone.

**The sync loop after the first install:**

```sh
git -C ~/Git-Repos/agentic-framework pull          # rules and command edits are live immediately
~/Git-Repos/agentic-framework/scripts/wire.sh --root ~/Git-Repos/agentic-framework
```

The second line is only needed after a pull that adds a skill, a command or a hook. Linking is per
item, so a new one is invisible until something links it. Re-running is idempotent.

**Run the intake sweep there too.** That Mac holds projects this one does not. See `docs/INTAKE.md`.

### What wire.sh does

1. Symlinks each `skills/<name>` into `~/.claude/skills/`. Claude discovers skills from that
   directory only; a skill that is not linked there is invisible, and neither `/reload-skills` nor
   a new session fixes it.
2. Symlinks each project-scoped skill named in `project-skills.txt` into the same directory. A
   project skill lives in `<project>/.claude/skills/<name>` and is reachable only from a session
   whose working directory is that project, so it is invisible everywhere else until it is linked.
   The list is written down rather than swept off disk, because two projects here shipped different
   skills under the same name (`orchestrator`) and a scan links whichever it reaches last without
   saying so. Both have since been renamed for what they take as input — `plan-orchestrator` reads a
   plan file, `skill-orchestrator` coordinates other skills. `--project-skills <path>` points at a
   different list.
3. Symlinks each `commands/*.md` into `~/.claude/commands/`.
4. Registers `hooks/rename-plans.py` in `~/.claude/settings.json` by absolute path. The hook reads
   only `HOME` and the working directory, so it needs no plugin context.
5. Appends an `@`-import block to `~/.claude/CLAUDE.md` pointing at `rules/reporting.md` and
   `rules/planning.md`, by absolute working-tree path.
6. Fills gaps in `~/.claude/settings.json` from the rescue snapshot: model, effort level, theme,
   and the plugin enablements. It never overwrites a value that is already set.

It is idempotent. Running it twice changes nothing the second time. `--dry-run` prints what it
would do and changes nothing.

### Restoring after a container rebuild

`~/.claude` and `~/.agents` are container-local. A rebuild deletes the plans, the auto-memory, the
settings and every skill symlink. `wire.sh` restores what it can from `/workspace/.claude-state`,
which the umbrella repo pushes off the machine. Refresh that snapshot with `scripts/snapshot.sh`
and commit it; nothing refreshes it automatically, because what it copies is personal state and
publishing it is not an automatic decision.

Three things `wire.sh` does not restore, and why:

- **The authentication token.** It is never in a repository. Sign in again.
- **The plans.** They are in the snapshot but they are not copied back, because after Iteration 3
  they live in project repositories and copying them back would duplicate them.
- **The plugin payloads.** `~/.claude/plugins` is about 900 MB. Only the two small registry files
  are restored; Claude refetches the rest.

---

## Path 2 — plugin install (fallback, unused today)

For a machine that cannot reach this clone on disk. The `.claude-plugin/` manifests are kept valid
for exactly this case.

```bash
claude plugin marketplace add jgonzalezd/agentic-framework
claude plugin install agentic-framework@jgonzalezd-agentic-framework
```

Two differences to know before choosing it:

- **Rules are not imported automatically.** A plugin ships skills, commands and hooks. The `@`-import
  in `~/.claude/CLAUDE.md` still has to be added by hand, and it must point at a stable path.
  A plugin cache path is not stable: it embeds the version, so it breaks on the next bump.
- **Updates arrive on a version bump rather than on save.** That is the trade. The shared-clone
  path gives immediate propagation and no release step; the plugin path gives a release boundary
  and delayed propagation.

---

## Merging a second machine's lessons back

The Rails container will learn things this one has not. Those lessons come back as commits to this
repo from that machine, through `/distill-learning`, which routes each one to a domain-ops skill, a
rules file, a memory, or the project's own docs. A process change also earns a dated line in
`docs/EVOLUTION.md` naming the incident behind it.
