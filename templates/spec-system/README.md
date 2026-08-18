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
| `requiredSections` | includes `### Tests` | no `### Tests`; includes `### Success metrics` |
| `tests.mode` | `section` — backticked paths bulleted under `### Tests` | `bullet` — one `- Tests:` line under Implementation pointers |
| `crossReferences` | none | three: `introduced_version` against `app/lib/whatsNew/changelog.ts`, `success_metrics` against `product/metrics/metrics-map.md`, `related_events` against `trackEvent`/`trackOnce`/`sendEvent` calls under `app/` |
| `staleWarning` | none | 90 days, for `shipped` and `gated`, waived by a mention in `product/learning/insights/` |
| `onMissingSpecsDir` | `error` — a checkout with no specs dir is broken | `skip` — the linter runs in `prebuild`, which must not fail on a tree without `product/` |
| `specsDir`, `indexFile` | `product/specs`, `product/INDEX.md` | identical |

`requiredFields` is the one worth stating plainly, because the two linters named the constant
differently (`REQUIRED_FIELDS` against `REQUIRED`) and the lists were never compared:
**mmn-project's list is a strict subset of metronome-core's.** All seven mmn fields appear in
metronome-core, which adds three more. No field is unique to mmn-project.

Adopting this engine changes one behavior in metronome-core: its old linter never checked test
bindings at all, so specs at `in-progress`, `shipped` or `gated` that name no tests, name a test
that does not exist, or name one that does not back-reference the spec, will start failing. That is
the mmn rule being adopted, and it is the point of the merge.
