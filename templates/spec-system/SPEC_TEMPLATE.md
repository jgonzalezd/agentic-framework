---
id: kebab-case-spec-id
name: Human Readable Spec Name
status: planned
area: replace-with-an-area-from-your-config
owner: your-handle
last_reviewed: YYYY-MM-DD
related_specs: []
---

<!--
HOW TO USE THIS TEMPLATE

1. Copy to <specsDir>/<id>.md. The filename without `.md` MUST equal `id`.
2. Fill in every frontmatter field named in `requiredFields` in your spec config. The linter
   (`verify-specs.mjs`) enforces them:
     status:         one of `statuses` in the config
     area:           one of `areas` in the config
     owner:          a name
     last_reviewed:  ISO date (YYYY-MM-DD)
     related_specs:  ids of coupled specs; each must resolve to a real spec file
   A project with extra fields (a version, metrics, analytics events) adds them here and adds a
   matching `crossReferences` entry so the values are checked against the code that defines them.
3. Add a row to the index file linking ./specs/<id>.md. The linter fails on orphans both ways: an
   index row with no spec, and a spec with no index row.
4. Keep WHAT & WHY free of code symbols — no function names, file paths, or key literals. Those
   live in HOW. The Behavior contract is the exception people get wrong: it may state observable
   mechanics, defaults, limits and exact user-visible strings, because those are testable. It may
   not name the function that implements them.
5. `### Tests` lists repo-relative test paths, one backticked path per bullet. Once `status` is
   `in-progress` or `shipped`, the linter requires every path to exist AND requires each of those
   files to name this spec (`<specsDir>/<id>.md`) in its own text. That back-reference is the whole
   point: a spec whose tests nobody can find is prose, and a test nobody can trace to a spec is a
   guess.

THE WORKFLOW THIS ENFORCES (spec-driven TDD)

   write the spec                                        ->  status: planned
   write the tests from the Behavior contract, fail      ->  status: in-progress
   implement until green                                 ->  status: shipped

`planned` and `idea` specs owe no tests, on purpose: demanding a test file for unwritten work only
invites a stub. The linter's list of not-yet-shipped specs is the work queue. Do not flip a spec to
`shipped` because the code exists; flip it when the tests named below exist, back-reference it, and
pass.
-->

# {name}

> One-line description. This line is mirrored verbatim into the index.

## WHAT & WHY

### Problem / user need
Who has what problem, in what context. For tooling specs the "user" is the developer, and the
problem is usually that they were told something false by their own tools.

### Goals
Outcome-oriented bullets. What success looks like.

### Non-goals
Explicitly out of scope, so this is not re-litigated later. Must be non-empty — state at least one
boundary.

### Rationale & trade-offs
WHY it works this way. Alternatives considered and rejected, with the reason for each.

### Behavior contract
The testable WHAT: observable behavior, limits, defaults, edge cases, exact strings. Every bullet
here should map to at least one assertion in the tests named under HOW.

### Status & history
Current status and what moved it there.

## HOW

### Implementation pointers
- Primary: `path/to/module` (responsibility)
- Supporting: `path/to/other`

### Tests
- `path/to/__tests__/thing.test.ts`

### Open questions / next
Unresolved questions. Delete the section rather than leaving "none".
