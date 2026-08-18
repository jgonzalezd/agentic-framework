---
name: dev-loop
description: Make a web app fast and pleasant to develop against — add a mock/live switch for slow, paid, or nondeterministic external calls, fix dev-server state bugs, and script away restart friction. Use when the user says the dev experience is bad, local testing is slow or expensive, they want to mock an API / LLM / payment provider, they want to run the app without an API key, they keep restarting the server or resetting state by hand, or they ask to "speed up the dev loop", "make it easy to test locally", "add a dev mode", or "switch between mocked and real". Stack agnostic — applies to any web app with a dev server. Not for writing unit tests, setting up CI, or configuring a test runner.
---

# Dev loop

Make a human able to open the app, type whatever they want, and see it work — in seconds, for
free, without editing config. Most "bad dev experience" is one of four things: the app fails on
input that isn't the canned happy path, switching to real calls means editing env vars and
restarting, dev state silently disappears between requests, or the same manual chore happens
twenty times a day.

The order below matters. Each step makes the next one testable.

## 1. Drive the app before reading it

Start it and complete the primary user journey yourself, typing **arbitrary realistic input** —
not the seeded example, not the fixture string. Keep the server log visible. Every place you
hesitate, wait, retry, or hit an opaque error is a finding; write them all down before touching
code.

Do this first because reading the codebase finds the wrong bugs. Code that is obviously correct
on the page routinely fails the moment a real person supplies real input, and a green test suite
is not evidence otherwise — tests exercise the paths someone already thought of.

## 2. Fix dev-server state footguns first

Symptom: state written during one request is invisible to the next, or vanishes on save. Cause is
almost always a **module-scoped singleton** — an in-memory store, cache, or client held in a
module-level variable — under a dev server that evaluates modules more than once (per-route
compilation, HMR, autoreload). You get two instances of a thing that must be one.

Fix by pinning the instance to a process-global rather than a module variable (`globalThis.__x` in
Next.js/Vite SSR — the same trick as the well-known Prisma-in-dev fix; a module-level registry in
Django autoreload; `eager_load` behavior in Rails). Nothing downstream is trustworthy until this
is right, so do it before anything else.

## 3. Inventory the seams

List every point where the app talks to something **slow, paid, rate-limited, or
nondeterministic**: model providers, payment processors, email/SMS, object storage, search,
third-party APIs. For each, ask one question: is there already an interface here, or do call sites
hold the vendor SDK directly?

The seam is the unit of work, not the feature. If a seam has no interface, introducing one *is*
the task — but only for seams you're actually about to give a second implementation. Don't
abstract the rest.

## 4. Put a lenient dev implementation behind the existing interface

This is the step that decides whether the whole effort works, and it turns on a distinction that
is easy to get backwards:

- A **fixture** recognizes known inputs and throws on everything else. Correct for regression
  tests — a fixture that silently answers an unknown input is a broken test.
- A **mock** always returns something structurally valid, for any input at all. Correct for a
  human poking at the app.

**The zero-config default for dev must be the mock.** Shipping the strict fixture as the default
is what turns "I typed my own text" into an opaque 500, and the developer has no way to guess that
two magic strings were the only valid input. Keep the strict path reachable behind an explicit
flag; it still has a job.

Build the mock by preferring a real match when the input resembles known data, then falling back
unconditionally. It must never throw. Route the choice through **one factory function** — never
`if (isDev)` sprinkled across call sites, which is how modes drift apart and how dev code reaches
production.

## 5. Add a "real but free" mode when one is reachable

Before asking the user for a new API key, look for credentials **already on the machine**: an
authenticated vendor CLI (`gh`, `aws`, `stripe`, `claude`), a test-mode key already in the env, or
a local emulator (Stripe test mode, LocalStack, Firebase emulator, Mailhog, MinIO). Any of these
becomes another implementation of the same interface from step 3 — no new call sites, no new
config.

Two things to get right if it shells out to a CLI:

- Pass an **argv array, never an interpolated shell string**. User-typed content reaches this call;
  string interpolation is a command-injection bug.
- Budget a **real timeout**. A trivial smoke test tells you nothing about production-shaped
  payloads — a cold CLI round trip with a large prompt or body can be an order of magnitude slower.
  Set the timeout just under whatever ceiling the caller enforces, and map failures onto the error
  taxonomy the interface already uses.

## 6. Switch at runtime, not at boot

Ranked, best first: **cookie / request header / query param** → localStorage → env var plus a
restart (last resort, and admit it's a fallback).

The acceptance test is a rule, not a preference: **a human must be able to flip modes in under two
seconds without typing anything or remembering a string.** A documented env var fails this test —
anything requiring recall or a restart will not get used, and the mode nobody switches to might as
well not exist.

In a UI app that means a visible dev-only control — a small fixed-corner widget, rendered only
when the dev flag is set, that writes the cookie and reloads. For a headless service it means a
request header plus a paste-ready `curl` line in the README. Read the override server-side at the
single factory from step 4.

## 7. Script the recurring friction

Anything you did by hand more than twice becomes a checked-in script plus a task-runner entry
(`npm run dev:restart`, a `make` target, a `just` recipe): killing stale servers, freeing a port,
seeding data, resetting local state, tailing logs.

One specific trap, since it costs an hour every time: **killing a dev server by process name is
unreliable.** Kernels truncate the name, so the pattern you'd reach for first can silently match
nothing while the process keeps holding the port. Match on more than one pattern and print what
you killed.

## 8. Verify by driving both paths end to end

Real requests against the running app, all the way through the primary journey — mock mode with
arbitrary input, then live mode. Unit tests do not substitute here; they routinely stay green
through exactly the bugs this work exists to fix.

Restart cleanly before you trust a result. A dev server that has been up across many file changes
accumulates stale-bundle errors that look like real bugs and disappear on a fresh boot with the
build cache cleared.

## Guardrails

- **Dev implementations must be unreachable in production.** Guard at the factory *and* throw from
  the constructor, then actually prove it — construct them with the production flag set and watch
  them refuse.
- **Label mock output.** A provenance field on the response, a visible badge, or both. The worst
  outcome of this work is someone debugging canned data while believing it's real.
- **Don't edit generated or synced code.** Check for codegen, sync scripts, or drift checks before
  choosing where new files go; dev-only code belongs in the hand-written server tier, beside the
  other server-only modules.
- **Keep the strict fixture reachable.** Demoting it from default is the fix; deleting it is not.

## Anti-goals

No mock-server framework, no new config file format, no record-and-replay cassette layer, no
interface for a seam that will only ever have one implementation. The finished deliverable is one
factory, one lenient implementation, one runtime toggle, and a script or two. If it's growing
past that, the extra is not dev-loop work.
