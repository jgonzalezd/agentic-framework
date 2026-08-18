# spec-system

A linter for spec-driven TDD, plus the spec skeleton it checks against. One engine, driven by a
config file, so more than one project can share it instead of forking it.

It merges two hand-written linters that had grown apart: `mms-repo/mmn-project/scripts/verify-specs.mjs`
and `youtube-metronome/metronome-core/scripts/verify-specs.mjs`. Node ESM, no dependencies, runs
under plain `node`.

Files here:

| File | What it is |
|---|---|
| `verify-specs.mjs` | The engine. Exports `verifySpecs(config)` and runs as a CLI. |
| `spec-config.example.mjs` | A commented config, with both projects' values written out. |
| `SPEC_TEMPLATE.md` | The generic spec skeleton. Copy it per spec. |
| `README.md` | This file. |

## What it checks

Always, for every spec file in the specs directory:

- **Frontmatter parses and is well-typed.** A `---` block at the top, scalars and lists in the
  controlled subset the parser accepts. Fields named in `listFields` must parse as lists.
- **Every field in `requiredFields` is present.**
- **`id` equals the filename** without `.md`.
- **`status` is one of `statuses`**, and `area` is one of `areas` when `areas` is set.
- **`last_reviewed` is an ISO date** (`YYYY-MM-DD`).
- **Spec references resolve.** Every id in a field listed in `specRefFields` (normally
  `related_specs`) names a real spec file.
- **The index and the specs directory agree.** Every spec has a row in the index file, and every
  index link points at a spec that exists. Orphans in either direction are errors.
- **Required sections are present**, and sections in `nonEmptySections` carry real prose rather than
  a heading over nothing.
- **Test bindings, at the statuses that owe them.** For a spec whose status is in
  `implementedStatuses`, every test path it names must exist, and each of those files must contain
  the spec's back-reference string (by default `product/specs/<id>.md`).

Optional, when configured:

- **Cross-references.** A frontmatter field whose every value must appear somewhere else in the
  repo — a version in a changelog, a metric in a metrics map, an analytics event in application
  code. Configured as `crossReferences`.
- **A staleness warning.** Non-fatal. A spec at a given status, last reviewed more than N days ago,
  with no mention in a nominated directory.
- **Running the suite.** `tests.runCommand` is a shell command the engine runs after every other
  check passes. Left `null`, the engine checks that the named tests exist and back-reference the
  spec, and the host's own gate is what runs them.

Not a failure, but printed on every clean run: the list of specs not yet at a `doneStatuses` status.
That list is the work queue.

## The rule that is not configurable

**Test bindings are owed at `in-progress` and `shipped`, and never at `planned` or `idea`.** Which
statuses count is a config value (`implementedStatuses`), so a project with a `gated` stage can add
it. What is hard-coded is that a status not in that list is exempt from the test check entirely.
Demanding a test file for unwritten work only produces a stub file that satisfies the linter and
tests nothing.

The other half is equally fixed: **a spec reaches `shipped` only when the tests it names exist,
back-reference the spec by path, and pass.** The engine checks existence and the back-reference
itself. Whether it also runs the suite depends on `tests.runCommand`; when that is `null`, the host
project must run the linter and the suite in the same gate, which is what both projects do today.
Leaving `runCommand` null and *not* running the suite in that gate would be a weakening of the rule.

## Wiring it into a project

1. Copy `verify-specs.mjs` into the project, or reference it from a shared checkout.
2. Copy `spec-config.example.mjs` to `spec-config.mjs` and edit it.
3. Copy `SPEC_TEMPLATE.md` into the specs directory. `ignoreFiles` keeps the linter from grading it.
4. Run it:

   ```bash
   node verify-specs.mjs                        # loads ./spec-config.mjs
   node verify-specs.mjs --config scripts/spec-config.mjs
   ```

   Exit code 1 with one `❌` line per problem, or exit 0 with a count and the work queue.
5. Put the command in whatever gate already runs the tests — a `make` target, `prebuild`, CI.

To call it from other JavaScript instead:

```js
import { verifySpecs } from './verify-specs.mjs';
import config from './spec-config.mjs';

const { ok, errors, warnings, queue } = verifySpecs(config);
```

`root` in the config decides what every relative path resolves against, including the test paths
inside specs. Set it explicitly when the linter is not run from the repo root.

## What each project's config differs on

Both projects share the frontmatter parser, the id-equals-filename rule, the index sync check, the
non-empty Non-goals rule, and the ISO date check. Below is every value where they diverge.

| Config key | mmn-project | metronome-core |
|---|---|---|
| `statuses` | `idea, planned, in-progress, shipped, deprecated` | the same plus `gated` (merged, behind a flag) |
| `implementedStatuses` | `in-progress, shipped` | `in-progress, shipped, gated` |
| `areas` | `library, dev-tooling, web-flow, prompts, evals` | `tempo, rhythm, sound, persistence, session, content, meta` |
| `requiredFields` | `id, name, status, area, owner, last_reviewed, related_specs` | the same seven plus `introduced_version`, `success_metrics`, `related_events` |
| `listFields` | `related_specs` | `success_metrics, related_events, related_specs` |
| `requiredSections` | includes `### Tests`; matches its own linter | no `### Tests`; includes `### Success metrics`. **Proposed, not current** — metronome-core's own linter checks no sections at all |
| `tests.mode` | `section` — backticked paths bulleted under `### Tests` | `bullet` — one `- Tests:` line under Implementation pointers |
| `crossReferences` | none | three: `introduced_version` against `app/lib/whatsNew/changelog.ts`, `success_metrics` against `product/metrics/metrics-map.md`, `related_events` against `trackEvent`/`trackOnce`/`sendEvent` calls under `app/` |
| `staleWarning` | none | 90 days, for `shipped` and `gated`, waived by a mention in `product/learning/insights/` |
| `onMissingSpecsDir` | `error` — a checkout with no specs dir is broken | `skip` — the linter runs in `prebuild`, which must not fail on a tree without `product/` |
| `specsDir`, `indexFile` | `product/specs`, `product/INDEX.md` | identical |

`requiredFields` is the one worth stating plainly, because the two linters named the constant
differently (`REQUIRED_FIELDS` against `REQUIRED`) and the lists were never compared:
**mmn-project's list is a strict subset of metronome-core's.** All seven mmn fields appear in
metronome-core, which adds three more. No field is unique to mmn-project.

Adopting this engine changes two behaviors in metronome-core. Its old linter never checked test
bindings, so specs at `in-progress`, `shipped` or `gated` that name no tests, name a test that does
not exist, or name one that does not back-reference the spec, will start failing. Its old linter
also checked no sections, so `requiredSections` is new there too. Both are mmn rules being adopted,
and adopting them is the point of the merge. The measured cost is in the next section.

## `tests.mode` stays configurable, and both modes are permanent

Decided 2026-08-18 by the engineer. The rejected alternative was to convert metronome-core's four
`- Tests:` bullets into `### Tests` sections and then delete `bullet` mode, leaving one extraction
path to maintain.

**It was rejected because the format is not what fails.** Measured on metronome-core the same day:

- 29 real specs. **Four** name tests at all. The other 25 name none, and 23 of those are `shipped`.
- Six test files are named across those four specs. All six exist. **Two** back-reference their spec
  by path; four do not.
- One of the four, `skins.md`, carries a `- Tests:` bullet that names no test. It names two source
  globs, `app/lib/skins/*` and `app/lib/state/SkinStore*`, and says they are unit-tested per a ship
  checklist.

Both extraction modes read the same paths out of the same four files, so converting the format
changes no verdict. Every failure above comes from a missing back-reference, a bullet naming source
files instead of tests, or a spec naming nothing at all.

**The trade.** The engine carries two extraction paths permanently, about fifteen lines. What that
buys is that adopting the engine costs a project zero edits to its existing specs, so the decision
to adopt is separable from the decision to fix its test coverage. A project should not have to
reformat thirty files to find out how many of them fail.

## Measured against both real spec trees, 2026-08-18

The engine had never been pointed at a real `product/` tree until this date. Both runs used
`spec-config.example.mjs` with only `root` overridden.

**mmn-project: `✅ Verified 38 product specs`, exit 0.** That reproduces its own linter exactly, so
the engine can replace `mms-repo/mmn-project/scripts/verify-specs.mjs` with no change in verdict.

**metronome-core: 41 problems, exit 1**, against `✅ Verified 29 product specs (0 warnings)` from its
own linter the same day. The gap is the whole point of the merge, and it decomposes into four
groups, not one:

| Problems | What they are | State |
|---|---|---|
| 1 | `/es/*` reported as a named test that does not exist | Engine defect, fixed below |
| 5 | A named test file exists but does not back-reference its spec | Fixed 2026-08-18 |
| 2 | `skins.md` named two source globs where tests belong | Fixed 2026-08-18 |
| 24 | A spec at `shipped` or `gated` names no tests at all | Open, and it is a coverage question |
| 9 | `color-palette-system.md` has none of the required sections | Open, see below |

33 problems remain, and both remaining groups are the owner's call rather than tooling work.

### The extractor defect this run found

`bullet` mode read every backticked token on the `Tests:` bullet, including tokens inside a
parenthetical gloss. `homepage-seo.md` writes:

```
- Tests: `test/homeJsonLd.test.ts` (WebSite node shape + canonical-agreeing URL per locale);
  `test/esInternalLinks.test.ts` (ES chrome/home emit real `/es/*` links).
```

So `/es/*` was reported as a third named test that does not exist. `testPaths()` now strips
parenthesised spans before reading the backticks. `section` mode never had the defect: its regex is
anchored to `- ` at line start, so only a token opening its own bullet counts. mmn-project's run is
byte-identical before and after the fix.

### `color-palette-system.md`, and a config claim that was too strong

`color-palette-system.md` carries spec frontmatter, sits in `product/specs/`, and is a design
reference: OKLch constraints, palette families, validity rules. It has no WHAT & WHY structure at
all. metronome-core's own linter never noticed, because **it has no required-sections check** — it
validates frontmatter, the index, cross-references and staleness, and nothing about headings.

The `metronomeCore` config here lists eight `requiredSections`. That list was written from
mmn-project's, not read out of metronome-core's linter, so this README's own comparison table
overstated what that project enforces today. The list is left strict, because adopting mmn's rules
is what the merge is for. What changes is the claim: those eight sections are **proposed** for
metronome-core, not a description of its current gate.

Two ways to close it, and neither is tooling's decision. Restructure the file into a spec. Or move
it out of `product/specs/` into a reference directory, where no spec rule reaches it.

**What metronome-core still owes:** a decision about 24 specs at `shipped` or `gated` that name no
tests, and a decision about `color-palette-system.md`. The first is a question about test coverage,
not about spec format.
