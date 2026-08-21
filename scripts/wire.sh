#!/usr/bin/env bash
# wire.sh -- connect a machine's Claude overlay to this framework clone.
#
# Run this after a container rebuild, on a new machine, or after adding a skill
# or command to this repo. It is idempotent: running it twice changes nothing
# the second time.
#
# The consumption model is a shared clone plus symlinks, not a plugin install.
# Every consumer points at this working tree, so an edit here is live everywhere
# immediately. That is deliberate and it is the reason there is no version to
# bump: see docs/EVOLUTION.md.
#
#   ./scripts/wire.sh --root /workspace/agentic-framework
#   ./scripts/wire.sh --root ~/Git-Repos/CodeBases/JS-PSQL-Redis/agentic-framework
#
# --root is required because the clone sits at a different absolute path on the
# macOS host than it does inside a container, and symlinks and hook
# registrations both need the absolute path of the environment they run in.

set -euo pipefail

ROOT=""
STATE=""
CLAUDE_HOME="${HOME}/.claude"
MANIFEST=""
WORKSPACE=""
DRY=0

usage() {
  cat <<'USAGE'
Usage: wire.sh --root <path to this clone> [options]

  --root  <path>   Absolute path of the agentic-framework clone. Required.
  --workspace <path>
                   Directory holding the sibling project repos, substituted for
                   ${WS} in project-skills.txt. Default: the parent of --root.
  --state <path>   Rescue snapshot directory. Default: <workspace>/.claude-state
  --home  <path>   Claude config directory. Default: $HOME/.claude
  --project-skills <path>
                   List of project-scoped skills to put on the global path.
                   Default: <root>/project-skills.txt
  --dry-run        Print what would change and exit without changing it.
USAGE
}

while [ $# -gt 0 ]; do
  case "$1" in
    --root)    ROOT="${2:-}"; shift 2 ;;
    --workspace) WORKSPACE="${2:-}"; shift 2 ;;
    --state)   STATE="${2:-}"; shift 2 ;;
    --home)    CLAUDE_HOME="${2:-}"; shift 2 ;;
    --project-skills) MANIFEST="${2:-}"; shift 2 ;;
    --dry-run) DRY=1; shift ;;
    -h|--help) usage; exit 0 ;;
    *) echo "wire.sh: unknown argument '$1'" >&2; usage; exit 2 ;;
  esac
done

[ -n "$ROOT" ] || { echo "wire.sh: --root is required" >&2; usage; exit 2; }
[ -d "$ROOT/skills" ] || { echo "wire.sh: '$ROOT' is not an agentic-framework clone (no skills/)" >&2; exit 2; }
ROOT="$(cd "$ROOT" && pwd)"

# The clone sits beside the project repos it links skills from: /workspace in
# the JS devcontainer, ~/Git-Repos/CodeBases/JS-PSQL-Redis on the macOS host.
# Deriving the workspace from --root rather than hardcoding it is what lets one
# committed project-skills.txt resolve in both. --workspace overrides it for a
# layout where the clone does not sit beside its projects.
[ -n "$WORKSPACE" ] || WORKSPACE="$(dirname "$ROOT")"
[ -n "$STATE" ]     || STATE="$WORKSPACE/.claude-state"

[ -n "$MANIFEST" ] || MANIFEST="$ROOT/project-skills.txt"

say()  { printf '  %s\n' "$*"; }
step() { printf '\n== %s\n' "$*"; }
run()  { if [ "$DRY" = 1 ]; then say "would: $*"; else "$@"; fi; }

# ---------------------------------------------------------------- 1. skills
# One symlink per skill. Claude discovers skills from ~/.claude/skills only, so
# a skill that exists in this repo and not there is invisible -- and neither a
# new session nor /reload-skills fixes it, because the file genuinely is not on
# the discovery path yet.
link_skill() {
  d="${1%/}"
  [ -d "$d" ] || return 0
  [ -f "$d/SKILL.md" ] || { say "skip     $(basename "$d") (no SKILL.md)"; return 0; }
  name="${2:-$(basename "$d")}"
  target="$CLAUDE_HOME/skills/$name"
  if [ -L "$target" ]; then
    current="$(readlink "$target")"
    if [ "$current" = "$d" ]; then say "ok       $name"; return 0; fi
    say "repoint  $name (was $current)"
    run rm "$target"
  elif [ -e "$target" ]; then
    # A real directory here is the pre-framework copy. Moving it aside rather
    # than deleting it means a wrong guess costs a rename, not the file.
    say "displace $name -> $name.pre-wire"
    run mv "$target" "$target.pre-wire"
  else
    say "link     $name"
  fi
  run ln -s "$d" "$target"
}

step "skills -> $CLAUDE_HOME/skills"
run mkdir -p "$CLAUDE_HOME/skills"
for d in "$ROOT"/skills/*/; do link_skill "$d"; done

# ------------------------------------------------------- 1b. project skills
# A project-scoped skill lives in <project>/.claude/skills/<name>, which is not
# a discovery path. mmn-project's CLAUDE.md says to symlink one by hand in the
# same turn you create it. That was done for the framework skills and missed for
# mmn-project's plan orchestrator, which sat unlinked until 2026-08-18 -- it kept
# working only because a session whose cwd is that project picks it up locally,
# so the gap is invisible from inside the project that owns it and total from
# anywhere else.
#
# The list is read from project-skills.txt rather than swept off disk. A sweep
# was written first and its dry run found the reason not to: two projects each
# shipped a skill named `orchestrator`, and a sweep links whichever it reaches
# last without saying so. Both were renamed for what they take as input --
# plan-orchestrator and skill-orchestrator. See the header of that file.
step "project skills from $MANIFEST"
if [ -f "$MANIFEST" ]; then
  while IFS= read -r raw || [ -n "$raw" ]; do
    line="${raw%%#*}"
    line="$(printf '%s' "$line" | sed 's/^[[:space:]]*//; s/[[:space:]]*$//')"
    [ -n "$line" ] || continue
    case "$line" in *=*) ;; *) say "ignored  malformed line: $raw"; continue ;; esac
    n="$(printf '%s' "${line%%=*}" | sed 's/[[:space:]]*$//')"
    src="$(printf '%s' "${line#*=}" | sed 's/^[[:space:]]*//')"
    src="${src//\$\{WS\}/$WORKSPACE}"
    if [ ! -d "$src" ]; then say "MISSING  $n -> $src (listed but not on disk)"; continue; fi
    link_skill "$src" "$n"
  done < "$MANIFEST"
else
  say "no manifest at $MANIFEST; no project skills linked"
fi

# -------------------------------------------------------------- 2. commands
step "commands -> $CLAUDE_HOME/commands"
run mkdir -p "$CLAUDE_HOME/commands"
shopt -s nullglob
for f in "$ROOT"/commands/*.md; do
  name="$(basename "$f")"
  target="$CLAUDE_HOME/commands/$name"
  if [ -L "$target" ] && [ "$(readlink "$target")" = "$f" ]; then say "ok       $name"; continue; fi
  [ -e "$target" ] && { say "displace $name -> $name.pre-wire"; run mv "$target" "$target.pre-wire"; }
  say "link     $name"
  run ln -s "$f" "$target"
done
shopt -u nullglob

# ----------------------------------------------------------------- 3. hooks
# Registered by absolute path, not by a symlink into ~/.claude/hooks. Both hooks
# read only stdin, HOME and cwd, so neither needs plugin context or a copy.
#
# register_hook takes (event, matcher, command, stale-key). The stale key is the
# script's basename: a registration matching it at a different absolute path is
# dropped, so moving the clone does not leave a hook pointing at a directory
# that no longer exists. Pass an empty matcher for events that do not use one.
register_hook() {
  ev="$1"; matcher="$2"; cmd="$3"; key="$4"
  if [ "$DRY" = 1 ]; then say "would register $ev: $cmd"; return 0; fi
  python3 - "$CLAUDE_HOME/settings.json" "$ev" "$matcher" "$cmd" "$key" <<'PY'
import json, os, sys
path, event, matcher, cmd, key = sys.argv[1:6]
try:
    with open(path) as fh: s = json.load(fh)
except (OSError, ValueError):
    s = {}
groups = s.setdefault("hooks", {}).setdefault(event, [])
for g in groups:
    for h in g.get("hooks", []):
        if h.get("command") == cmd and g.get("matcher", "") == matcher:
            print(f"  ok       {key} already registered on {event}"); sys.exit(0)
for g in groups:
    g["hooks"] = [h for h in g.get("hooks", []) if key not in h.get("command", "")]
groups[:] = [g for g in groups if g.get("hooks")]
entry = {"hooks": [{"type": "command", "command": cmd}]}
if matcher:
    entry["matcher"] = matcher
groups.append(entry)
os.makedirs(os.path.dirname(path), exist_ok=True)
with open(path, "w") as fh: json.dump(s, fh, indent=2); fh.write("\n")
print(f"  register {key} on {event}")
PY
}

step "hooks -> $CLAUDE_HOME/settings.json"

# Renames a new plan file from its random slug to one derived from its heading.
HOOK="$ROOT/hooks/rename-plans.py"
if [ -f "$HOOK" ]; then
  register_hook Stop "" "python3 \"$HOOK\"" "rename-plans.py"
else
  say "SKIP: $HOOK not found"
fi

# Blocks agent writes to iCloud Drive outside Coding/. Exits 0 immediately on
# any input that does not mention an iCloud path, so registering it on every
# tool costs one grep per call and it is inert off macOS.
ICLOUD_HOOK="$ROOT/hooks/block-icloud-writes.sh"
if [ -f "$ICLOUD_HOOK" ]; then
  register_hook PreToolUse ".*" "bash \"$ICLOUD_HOOK\"" "block-icloud-writes.sh"
else
  say "SKIP: $ICLOUD_HOOK not found"
fi

# -------------------------------------------------------------- 4. settings
# Restores only what is missing. A live preference is never overwritten,
# because this script runs on machines where the engineer has already tuned
# something and a "restore" that reverts it is worse than no restore.
step "settings restore from $STATE"
if [ ! -d "$STATE/settings" ]; then
  say "SKIP: no snapshot at $STATE/settings (run scripts/snapshot.sh on a live machine first)"
elif [ "$DRY" = 1 ]; then
  say "would fill gaps in settings.json from $STATE/settings/settings.json"
else
  python3 - "$CLAUDE_HOME/settings.json" "$STATE/settings/settings.json" <<'PY'
import json, os, sys
live_path, snap_path = sys.argv[1], sys.argv[2]
def load(p):
    try:
        with open(p) as fh: return json.load(fh)
    except (OSError, ValueError): return {}
live, snap = load(live_path), load(snap_path)
added = []
for key in ("model", "effortLevel", "theme"):
    if key not in live and key in snap:
        live[key] = snap[key]; added.append(key)
snap_plugins = snap.get("enabledPlugins", {})
if snap_plugins:
    live_plugins = live.setdefault("enabledPlugins", {})
    new = [k for k in snap_plugins if k not in live_plugins]
    for k in new: live_plugins[k] = snap_plugins[k]
    if new: added.append(f"{len(new)} plugin enablements")
if added:
    os.makedirs(os.path.dirname(live_path), exist_ok=True)
    with open(live_path, "w") as fh: json.dump(live, fh, indent=2); fh.write("\n")
    print("  restored " + ", ".join(added))
else:
    print("  ok       nothing missing")
PY
  # The plugin registry itself. plugins/ is ~900 MB of payload and is refetched;
  # these two small files are what say which plugins to refetch.
  mkdir -p "$CLAUDE_HOME/plugins"
  for f in installed_plugins.json known_marketplaces.json; do
    if [ -f "$STATE/settings/$f" ] && [ ! -f "$CLAUDE_HOME/plugins/$f" ]; then
      cp "$STATE/settings/$f" "$CLAUDE_HOME/plugins/$f"; say "restored plugins/$f"
    fi
  done
  # Third-party skill provenance, and the skills with no recorded source.
  if [ -f "$STATE/agents/skill-lock.json" ] && [ ! -f "$HOME/.agents/.skill-lock.json" ]; then
    mkdir -p "$HOME/.agents"
    cp "$STATE/agents/skill-lock.json" "$HOME/.agents/.skill-lock.json"; say "restored ~/.agents/.skill-lock.json"
  fi
  if [ -d "$STATE/skills-unrecorded" ]; then
    for d in "$STATE"/skills-unrecorded/*/; do
      [ -d "$d" ] || continue
      n="$(basename "$d")"
      [ -e "$CLAUDE_HOME/skills/$n" ] || { cp -a "${d%/}" "$CLAUDE_HOME/skills/$n"; say "restored skill $n (no upstream source recorded)"; }
    done
  fi
fi

# ----------------------------------------------------------------- 5. rules
# Imported by absolute path into the working tree. Never a plugin cache path:
# those embed the version, so every bump silently breaks the import.
step "rules import in $CLAUDE_HOME/CLAUDE.md"
MARK="<!-- agentic-framework:rules -->"
BLOCK="$MARK
@$ROOT/rules/reporting.md
@$ROOT/rules/planning.md"
if [ "$DRY" = 1 ]; then
  say "would ensure import block for $ROOT/rules/"
elif grep -qF "$MARK" "$CLAUDE_HOME/CLAUDE.md" 2>/dev/null; then
  if grep -qF "@$ROOT/rules/reporting.md" "$CLAUDE_HOME/CLAUDE.md"; then
    say "ok       already imported"
  else
    say "WARN: an import block exists but points elsewhere. Fix by hand:"
    grep -A2 -F "$MARK" "$CLAUDE_HOME/CLAUDE.md" | sed 's/^/         /'
  fi
else
  printf '\n%s\n' "$BLOCK" >> "$CLAUDE_HOME/CLAUDE.md"
  say "appended import block"
fi

printf '\n== done\n'
[ "$DRY" = 1 ] && say "dry run: nothing was changed"
exit 0
