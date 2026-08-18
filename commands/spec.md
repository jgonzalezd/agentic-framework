---
description: Scaffold or update a product feature spec (What & Why) from the project's template
argument-hint: <feature name or id>
---

You are authoring or maintaining a product spec for **$ARGUMENTS**.

This command is the sequence only. Every path, exemplar and grounding source it names is read from
the project's own spec config, because the two things a spec must be grounded in — where the
behavior actually lives, and where its metrics are defined — are different files in every repo.

## Before step 1: load the project's config

Read `spec-config.mjs` from the project root, or the path its `CLAUDE.md` names. It supplies:

- `specsDir` and `indexFile` — where specs and their index live
- `requiredFields` — the frontmatter every spec must fill
- `statuses` and `implementedStatuses` — the lifecycle, and which statuses owe test bindings
- `groundingSources` — an ordered list of files or globs to read before writing, each with a note
  saying what to take from it
- `exemplar` — the spec to copy the quality bar from
- `journal` — where to append a reflection, if the project keeps one

If the project has no config, stop and say so. Do not guess the paths. A spec written against
invented paths passes review and fails the linter.

## Steps

1. **Resolve the feature id** in kebab-case. If `<specsDir>/<id>.md` exists you are updating it.
   Otherwise create it by copying the project's `SPEC_TEMPLATE.md`.

2. **Ground the content before writing.** Read every entry in `groundingSources` and take from it
   what that entry's note says to take. Confirm each fact against the file. A frontmatter field
   filled from memory rather than from the source is the defect this step exists to prevent.

3. **Fill every required field and every What and Why section.** Keep What and Why free of
   implementation detail. Keep How to thin pointers: file, region, event names. Non-goals must be
   non-empty — a spec with no non-goals has not been scoped.

   The Behavior contract is the exception people get wrong. It may state observable mechanics,
   defaults, limits and exact strings, because those are testable. It may not name code symbols.

4. **Set the status honestly.** A spec is `planned` until its tests exist and fail. It is
   `shipped` only when the tests it names exist, back-reference it by path, and pass. The linter
   enforces that; setting `shipped` early makes the linter the thing you fight rather than the
   thing that protects you.

5. **Add or update the matching row in the index file.**

6. **Append a short reflection to the journal**, if the project defines one: what was unclear,
   what knowledge was missing, what tooling got in the way.

## What this command does not do

Do not change product behavior. Do not make keep, iterate or deprecate decisions — those are the
engineer's calls. Surface open product questions in the spec's own open-questions section rather
than resolving them.
