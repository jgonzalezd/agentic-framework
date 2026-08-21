#!/bin/bash
# Block agent writes to iCloud Drive except under the Coding/ subdirectory.
input=$(cat)

# Fast path: not touching iCloud Drive at all
if ! echo "$input" | grep -qE "com~apple~CloudDocs|Mobile Documents/com~apple"; then
  exit 0
fi

# Coding/ and its contents are allowed
if echo "$input" | grep -qE 'com~apple~CloudDocs/Coding(/|"| |$)'; then
  exit 0
fi

echo "BLOCKED: Agent writes to iCloud Drive are restricted to ~/iCloud Drive/Coding/. All other iCloud directories are protected." >&2
exit 1
