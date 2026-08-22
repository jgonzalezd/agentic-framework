---
name: safe-dependency-install
description: The gate every third-party dependency passes before it is installed or called. Use BEFORE running npm install, pnpm add, yarn add, bundle add, gem install, pip install, uv add, cargo add, go get, brew install, apt install, expo install, or any "add package X" request — and BEFORE writing the first line of code against a library's API. Three checks: the package is the one it claims to be, the install costs what you said it would, and the API you are about to call actually exists. Do NOT use for upgrading a dependency already in the lockfile, or for choosing between libraries on features — that is a design question.
metadata:
  version: 1.0.0
---

# Safe dependency install

Three gates, in order. Identity, then cost, then API. Each one has a stop condition, and a stop
means present findings and wait, not pick the safer-looking option and continue.

The order matters. Identity failures install malware. Cost failures burn an hour. API failures
produce code that compiles and does not work. Running them out of order means paying the earlier
cost to discover the later problem.

---

## Gate 1 — Identity: is this the package it claims to be?

The attack this stops: a package published under a name that resembles a real one, which runs its
install script on your machine with your credentials in the environment.

Search for the library's current official install command before running anything. Do not install
from memory. Install instructions change, packages get renamed, and scoped packages replace
unscoped ones.

Then verify, from the registry page and the official repository:

- [ ] The registry name matches exactly what the official docs and repository README tell you to
      install. Compare character by character. Hyphens, scopes (`@org/name`), plural vs singular,
      `.js` suffixes and digit-for-letter swaps are the whole attack surface.
- [ ] The registry entry's repository link points back at the real project's repository, and the
      publisher or owning org matches that project.
- [ ] The package's age and release history fit a package with this many users.
- [ ] Download counts are in the range the project's popularity implies.

**Stop and ask when any of these is true:**

- The package was first published within the last 30 days and is presented as an established
  library.
- Its download count is an order of magnitude or more below the established package whose name it
  resembles. Name the established package explicitly in what you report: "`colours` at 1.2k weekly
  downloads against `colors` at 18M" is checkable; "low downloads" is not.
- The registry entry's repository link, publisher, or org does not match the official project.
- The docs and the registry disagree about the name.

On a stop, report the four facts you checked and what each returned. Do not install and then
mention the discrepancy.

**Never disable install scripts to make an install "safe".** An untrusted package with scripts
disabled still ships the code you are about to import. The decision is whether to install it at
all.

---

## Gate 2 — Cost: what does this install actually pull in?

The incident this stops, 2026-08-21, an iOS-Mac session. `brew install` of Maestro declared one
dependency, `openjdk`. That package's closure on the machine was 40 packages. Several had no
usable prebuilt bottle, because the machine's Command Line Tools were older than the bottles
required. Homebrew surfaced "building from source" only after downloading 535 MB. The agent noted
the change in passing and kept waiting, because it had already spent the download. The fast path
was available the whole time: unzip the already-cached `maestro.zip` and point `JAVA_HOME` at a
JDK that was already on the machine.

**Before running a package-manager install, state three things:**

1. The dependency closure, not the declared dependency list. `brew deps --tree <formula>`,
   `npm info <pkg> dependencies`, `pip install --dry-run <pkg>`, `bundle lock --print`. The
   declared list and the closure differ by an order of magnitude often enough that the declared
   list is not evidence.
2. Whether prebuilt binaries exist for this machine, and whether this machine can use them.
   `brew info <formula>` names the bottles; a wheel is `pip download --only-binary :all:`. A
   bottle that exists and a bottle this machine accepts are different facts.
3. The expected download size and the install route, source or binary, in one line before the
   command runs.

**The mid-install stop rule.** When new information changes the cost by an order of magnitude,
stop the install and re-present the options. Do not continue because of what has already been
spent. Already-downloaded bytes are gone under every option, so they are not a reason to prefer
one.

The words **"building from source"** in an install log are the canonical trigger. So are a
compiler starting, a closure larger than announced, and a download that passes several times the
stated size.

**When the cause is machine state, name the machine-level fix as its own item.** Outdated Command
Line Tools forcing source builds is not a property of the package being installed. It will force
source builds for every future install too. Report it separately from the install decision, so it
can be fixed once instead of worked around every time.

**Check for a fast path before accepting a heavy one.** An already-downloaded archive, a runtime
already on the machine, a container that has the tool, or a hosted runner all beat a 40-package
source build. Look before you start, and look again at the stop.

---

## Gate 3 — API: does the thing you are about to call exist?

Verification before implementation, not after the first error. This gate came from
`CookingApp-code`, where it was written after a session implemented against an assumed event-
listener API for a library that used callbacks.

**Read, in this order:**

- [ ] The official documentation, from the registry page or the project repository.
- [ ] The shipped type definitions in the installed package. `node_modules/<pkg>/**/*.d.ts`, the
      `.pyi` stubs, the gem's signatures. These are what the code will actually be checked
      against, and they outrank the docs when they disagree.
- [ ] At least one working example, from the library's own repository, its test files, or its
      minimal reproduction app.

**Confirm before writing the call:**

- [ ] The exact method name exists. `startRecording` and `start` are not interchangeable.
- [ ] The parameter signature matches, including whether options are positional or an object.
- [ ] The interaction style is right: callback, event listener, promise, or hook. Guessing this
      produces code that runs and silently never fires.
- [ ] Event names, if there are events.
- [ ] Return type and shape.
- [ ] Platform-specific setup: iOS `Info.plist` keys, `app.json` config, Android permissions, and
      whether the native module needs a rebuild such as `expo prebuild`.

**Stop and ask when you cannot find the documentation, the type definitions, or a working
example.** Ask for a documentation link, a known working example, or an alternative library. Do
not proceed on an unverified assumption, and do not write a placeholder implementation without
saying that is what it is.

**Mark what you did not verify.** `// ASSUMPTION: <what, and why it could not be checked>` in the
code, and a line under Untested in the report. An unverified call that looks like a verified one
is the failure this gate exists to prevent.

**After any library mistake, sweep the siblings.** The same wrong assumption is usually applied in
more than one place. Check every other call into that library in the codebase, and add a test that
fails if the assumption comes back.

---

## What this skill does not decide

Which library to choose. That is a design question about features, licence, maintenance and fit,
and it is answered before this skill runs. This skill starts once a specific package has been
named.
