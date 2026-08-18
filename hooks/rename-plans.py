#!/usr/bin/env python3
"""Rename freshly-created plan files from their random slug to a content-derived,
mnemonic slug based on the plan's first `# ` heading.

Runs as a Stop hook. It processes each plan file at most once: existing files are
seeded into the state on first run so we never clobber names you already have, and
each new plan gets renamed exactly once. Manual renames you do afterwards stick.

A plan modified within GRACE_SECONDS is skipped and left out of the state, because
the session that wrote it may still be running and the harness tracks the plan by
its original path (/plan view breaks if it is renamed underneath). A later Stop,
after the file has gone quiet, renames it.
"""
import json
import os
import re
import sys
import time

HOME = os.path.expanduser("~")
STATE_FILE = os.path.join(HOME, ".claude", "plan-namer-state.json")
GRACE_SECONDS = 6 * 3600

# Plan directories to watch (absolute). Add more here if needed.
PLAN_DIRS = [
    os.path.join(HOME, ".claude", "plans"),
    os.path.join(os.getcwd(), ".claude", "plans"),
]

STOPWORDS = {
    "a", "an", "the", "to", "for", "of", "and", "or", "in", "on", "is", "be",
    "plan", "we", "should", "our", "your", "goal", "create", "lets", "let",
}


def slugify(heading: str) -> str:
    # Drop a leading "Plan:" label if present.
    heading = re.sub(r"^\s*plan\s*:\s*", "", heading, flags=re.I)
    words = re.findall(r"[a-z0-9]+", heading.lower())
    kept = [w for w in words if w not in STOPWORDS] or words
    slug = "-".join(kept[:6])
    return slug[:60].strip("-")


def first_heading(path: str) -> str | None:
    try:
        with open(path, encoding="utf-8") as fh:
            for line in fh:
                if line.startswith("# "):
                    return line[2:].strip()
    except OSError:
        pass
    return None


def load_state() -> set:
    try:
        with open(STATE_FILE, encoding="utf-8") as fh:
            return set(json.load(fh).get("seen", []))
    except (OSError, ValueError):
        return set()


def save_state(seen: set) -> None:
    os.makedirs(os.path.dirname(STATE_FILE), exist_ok=True)
    with open(STATE_FILE, "w", encoding="utf-8") as fh:
        json.dump({"seen": sorted(seen)}, fh, indent=2)


def main() -> None:
    seen = load_state()
    changed = False

    for d in PLAN_DIRS:
        if not os.path.isdir(d):
            continue
        for name in os.listdir(d):
            if not name.endswith(".md"):
                continue
            key = os.path.join(d, name)
            if key in seen:
                continue  # already handled or seeded

            try:
                if time.time() - os.path.getmtime(key) < GRACE_SECONDS:
                    continue  # possibly still in use by a live session; retry on a later Stop
            except OSError:
                continue

            heading = first_heading(key)
            slug = slugify(heading) if heading else ""
            if not slug:
                seen.add(key)
                changed = True
                continue

            target_name = f"{slug}.md"
            target = os.path.join(d, target_name)
            # Resolve collisions with a numeric suffix.
            n = 2
            while os.path.exists(target) and os.path.abspath(target) != os.path.abspath(key):
                target = os.path.join(d, f"{slug}-{n}.md")
                n += 1

            if os.path.abspath(target) != os.path.abspath(key):
                try:
                    os.rename(key, target)
                except OSError:
                    seen.add(key)
                    changed = True
                    continue

            seen.add(os.path.join(d, os.path.basename(target)))
            changed = True

    if changed:
        save_state(seen)


if __name__ == "__main__":
    # Hook passes JSON on stdin; we don't need it. Read & ignore to avoid SIGPIPE.
    try:
        sys.stdin.read()
    except Exception:
        pass
    main()
