#!/usr/bin/env bash
# memory-push.sh -- commit and push the general memory store at session end.
#
# Registered by wire.sh as a SessionEnd hook, with the agent-memory clone path
# as its one argument. It exists because auto memory is machine-local: without
# a push, a memory written on this Mac is invisible on the other one until
# somebody remembers to sync by hand.
#
# Scope is the general store only. Project memory rides the project's own commit
# flow, so that agent commits never interleave with the engineer's work in a
# project's history.
#
# Every failure here is silent and non-fatal. A hook that blocks the end of a
# session because the network is down costs more than the delayed push does.

REPO="${1:-}"
[ -n "$REPO" ] || exit 0
[ -d "$REPO/.git" ] || exit 0

cd "$REPO" || exit 0

# Nothing staged, nothing changed: the common case, and it exits without a
# commit so the history stays one entry per real change.
if [ -z "$(git status --porcelain 2>/dev/null)" ]; then
  exit 0
fi

git add -A >/dev/null 2>&1 || exit 0
git commit -q -m "memory: session-end sync $(date -u +%Y-%m-%dT%H:%M:%SZ)" >/dev/null 2>&1 || exit 0

# Rebase before pushing so a memory written on the other machine since the last
# pull is not clobbered, and so a push does not fail on a fast-forward check.
git pull --rebase --autostash --quiet >/dev/null 2>&1
git push --quiet >/dev/null 2>&1

exit 0
