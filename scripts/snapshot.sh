#!/usr/bin/env bash
# snapshot.sh -- copy the Claude overlay into /workspace/.claude-state so the
# umbrella repo pushes it off the machine.
#
# Why this exists. ~/.claude and ~/.agents are not host bind mounts in this
# devcontainer; only /workspace, ~/.ssh and ~/.cache/ms-playwright are. A
# container rebuild therefore deletes the plans, the auto-memory, the settings
# and every skill symlink. Rebuilds are months apart, so the exposure is low
# frequency and high consequence.
#
#   ./scripts/snapshot.sh                      # refresh the snapshot
#   ./scripts/snapshot.sh --dest /some/path    # somewhere else
#
# Commit and push the destination afterwards. This script does not commit: what
# it copies is personal state, and the decision to publish it is not automatic.

set -euo pipefail

DEST="/workspace/.claude-state"
CLAUDE_HOME="${HOME}/.claude"

while [ $# -gt 0 ]; do
  case "$1" in
    --dest) DEST="${2:-}"; shift 2 ;;
    --home) CLAUDE_HOME="${2:-}"; shift 2 ;;
    -h|--help) echo "Usage: snapshot.sh [--dest <path>] [--home <path>]"; exit 0 ;;
    *) echo "snapshot.sh: unknown argument '$1'" >&2; exit 2 ;;
  esac
done

# ---------------------------------------------------------------------------
# EXCLUSIONS. Hard-coded on purpose, so that nobody widens the copy later and
# takes one of these with it.
#
#   .credentials.json        an authentication token. It never enters a repo.
#   plan-namer-state.json    re-derivable; re-running the namer over the plans
#                            changes two filenames, which is acceptable.
#   .remember/               lives under /workspace, which is bind-mounted, so a
#                            rebuild does not touch it.
#   projects/                313 MB of transcripts. Only projects/*/memory is
#                            copied, which is 16 files.
#   plugins/                 901 MB of plugin payload. Only the two small
#                            registry files are copied; the payload is refetched.
# ---------------------------------------------------------------------------

say() { printf '  %s\n' "$*"; }

mkdir -p "$DEST"/{plans,memory,settings,agents,skills-unrecorded,skills-mine}

printf '\n== plans\n'
if [ -d "$CLAUDE_HOME/plans" ]; then
  rsync -a --delete "$CLAUDE_HOME/plans/" "$DEST/plans/" 2>/dev/null \
    || cp -a "$CLAUDE_HOME/plans/." "$DEST/plans/"
  say "$(find "$DEST/plans" -type f | wc -l) files"
else
  say "none"
fi

printf '\n== auto-memory (projects/*/memory only)\n'
n=0
for d in "$CLAUDE_HOME"/projects/*/memory; do
  [ -d "$d" ] || continue
  p="$(basename "$(dirname "$d")")"
  mkdir -p "$DEST/memory/$p"
  cp -a "$d/." "$DEST/memory/$p/"
  n=$((n+1))
done
say "$n project(s), $(find "$DEST/memory" -type f | wc -l) files"

printf '\n== settings\n'
[ -f "$CLAUDE_HOME/CLAUDE.md" ] && { cp -a "$CLAUDE_HOME/CLAUDE.md" "$DEST/CLAUDE.md"; say "CLAUDE.md"; }
[ -f "$CLAUDE_HOME/settings.json" ] && { cp -a "$CLAUDE_HOME/settings.json" "$DEST/settings/settings.json"; say "settings.json"; }
for f in installed_plugins.json known_marketplaces.json; do
  [ -f "$CLAUDE_HOME/plugins/$f" ] && { cp -a "$CLAUDE_HOME/plugins/$f" "$DEST/settings/$f"; say "$f"; }
done

printf '\n== third-party skill provenance\n'
if [ -f "$HOME/.agents/.skill-lock.json" ]; then
  cp -a "$HOME/.agents/.skill-lock.json" "$DEST/agents/skill-lock.json"
  say "skill-lock.json ($(python3 -c 'import json,sys;d=json.load(open(sys.argv[1]));print(len(d.get("skills",d)))' "$HOME/.agents/.skill-lock.json" 2>/dev/null || echo '?') entries)"
  say "the locked skills are reinstallable from this file and are not copied"
else
  say "no lock file found"
fi

printf '\n== skills with no recorded source\n'
# A skill that is neither in the lock file nor in the framework repo cannot be
# reinstalled from anything, so the copy is the only backup it will ever have.
for s in 45-stephenturner-skill-deslop avoid-ai-writing find-skills humanizer; do
  if [ -d "$CLAUDE_HOME/skills/$s" ] && [ ! -L "$CLAUDE_HOME/skills/$s" ]; then
    rm -rf "${DEST:?}/skills-unrecorded/$s"
    cp -a "$CLAUDE_HOME/skills/$s" "$DEST/skills-unrecorded/"
    say "$s"
  fi
done

printf '\n== verify exclusions\n'
fail=0
for bad in .credentials.json plan-namer-state.json .remember; do
  hits="$(find "$DEST" -name "$bad" 2>/dev/null | wc -l)"
  if [ "$hits" -ne 0 ]; then echo "  FAIL: $bad present in snapshot ($hits)"; fail=1; else say "absent  $bad"; fi
done
if grep -rIlE 'sk-ant-|gho_[A-Za-z0-9]{20}|ghp_[A-Za-z0-9]{20}' "$DEST" >/dev/null 2>&1; then
  echo "  FAIL: a token-shaped string is present in the snapshot"; fail=1
else
  say "absent  token-shaped strings"
fi
[ "$fail" = 0 ] || { echo; echo "snapshot.sh: refusing to report success with an exclusion violated" >&2; exit 1; }

printf '\n== done: %s (%s)\n' "$DEST" "$(du -sh "$DEST" | cut -f1)"
say "commit and push it from /workspace to put it off this machine"
