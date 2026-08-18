# RESIDUE.md — what stayed behind, and what was re-anchored

This file accounts for the extraction of `reporting.md` and `planning.md` from three project
documents. It exists so the engineer can check the judgement without re-reading the sources.

The sources were `docs/REPORTING.md` and `CLAUDE.md` in the mental-models-navigator project, and the
user-level `~/.claude/CLAUDE.md`.

Nothing was softened. Every rule marked non-negotiable in a source is stated the same way in the
promoted file. Rule numbers 1 through 24 are unchanged, because the rules cross-reference each other
by number and the cold-context reviewer reports violations by number.

## Passages not promoted

| Passage | Where it was | Why it stayed behind |
| --- | --- | --- |
| Worked rewrite 1, the thought-signatures report | `REPORTING.md` lines 621–651 | Every sentence in it is a project symbol or path, so re-anchoring it would mean rewriting it rather than relocating it. |
| Worked rewrite 2, the refund clawback report | `REPORTING.md` lines 653–686 | Same reason; it turns on one product's refund arithmetic, its Stripe event names and its key format. |
| Worked rewrite 3, the plan-file entry | `REPORTING.md` lines 688–717 | Same reason; it turns on one release board's row `B14` and one plan's phase numbering. |
| "Both worked rewrites below arrived that way." | `REPORTING.md` line 619 | It is a backward reference to the three rewrites that were dropped. |
| The chronological grouping headers, five of them | `REPORTING.md` lines 152, 257, 317, 366, 434 | They date the project sessions that produced each batch of rules, and a cross-project file has no session history to date. |
| "Neither failure is caught by rules 1 through 19" and its two siblings | inside those grouping headers | They are commentary on the order the project discovered its rules, and they carry no instruction. |
| The pointer to `skills/technical-report/SKILL.md` | `REPORTING.md` rule 12 | It names a skill that lives in the source repo; the framework will need its own pointer once that skill exists here. |
| The Enforcement section's two named programs | `REPORTING.md` lines 571–578 | `web/__tests__/infrastructure.test.ts` and `scripts/verify-release.mjs` are project files; the shape of each check is promoted without the name. |
| The `docs/VOICE.md` paragraph, as written | `REPORTING.md` lines 32–34 | It names a project document and its two specific rules; the precedence it asserts is promoted in generalized form. |
| The pointer sentence "follows `docs/REPORTING.md`" | `CLAUDE.md` line 351 | It points at the document that was promoted, so inside `reporting.md` it points at itself. |
| The bullet naming `docs/INFRASTRUCTURE.md` and its test | `CLAUDE.md` lines 410–411 | Rule 23 in `reporting.md` states the same requirement without the two file names. |
| `product/specs/refund-revokes-analyses.md` | `CLAUDE.md` line 286 | It is a spec path in the source repo; the incident it records is promoted in full from the longer telling in `REPORTING.md`. |
| Rule 7's carve-out phrase "the spec template's rule 4" | `REPORTING.md` line 542 | The rule number belongs to a template that does not exist in this repo; the carve-out itself is promoted. |
| The measured exit-code facts for one vendor CLI | `REPORTING.md` lines 399–403 | The measurement is true of one command on one date; the generic half is promoted, with an instruction to measure your own tool. |
| Everything in the user-level `~/.claude/CLAUDE.md` except one line | that file, lines 9–53 | It is a strict subset of `REPORTING.md`; its Shape, Sentences, Pointing at things, Reporting a change and Claims sections all appear in `reporting.md` already. |

Two things in the user-level file are worth naming because they were checked, not skipped. Its
Decisions bullet folds "Name whose decision it was" into the section list, and `reporting.md` keeps
that as rule 2. Its "floor, not the ceiling" line had no equivalent in either project document, and
it was promoted.

## Passages promoted with the example re-anchored

| Rule or passage | Original example | What it says now | Why |
| --- | --- | --- | --- |
| "The reader owns this codebase" | `RawCompletion` at `packages/core/src/llm/types.ts`, and `attempts: 1` | "the symbols you are naming" and "the numbers in them" | The claim is about ownership, and any project's symbols demonstrate it. |
| Keep the vocabulary | write `grantInvoice`, not "the function that handles paid invoices" | write the function's real name, not "the function that handles paid invoices" | `grantInvoice` is one project's billing symbol; the contrast survives without it. |
| Customer-facing voice guide has no authority | `docs/VOICE.md` and its two named rules | "a customer-facing voice or copy guide", with the two rule types described | Most projects have such a guide under a different name. |
| Rule 3, imposed from outside | "by Stripe, by a browser, by the model" | "by a vendor's API, by a browser, by the model" | Stripe is one project's payment vendor. |
| Rule 4, the trade-off example | "widen `RawCompletion` for all four providers" | "widen the shared response type for all four providers" | The defect is the missing benefit, and the type's real name adds nothing here. |
| Rule 6, blast radius | `anthropic.ts`, `gemini.ts`, `openai.ts`, `moonshot.ts` | "name the four adapter files" | The instruction is to name them; which four is a project fact. |
| Rule 7, the coordinate | `RawCompletion` plus its path | "A symbol the reader wrote needs its file path after it" | Same reason as above. |
| Rule 12, the correction | dated "Correction, 2026-08-07" | "Correction." with the correction intact | The date locates a project session; the split by document type is unchanged. |
| Rule 17, the identifier | "`B14` asks where the Vercel bypass secret is durably stored" | "`B14` asks where a particular deployment secret is durably stored" | `B14` is kept because the rule is about a bare identifier, and the secret it names is project infrastructure. |
| Rule 20, the incident | a Stripe key set as a repository secret | "an API key" set as a repository secret | The vendor is incidental to the failure, which was silence about a failed verification. |
| Rule 21, the branch example | `release/mysituation-rename`, and "The test-clock fix is done" | `release/alert-mute`, and "The fix is done" | Both name project work; the four states and the checkable sentence are unchanged. |
| Rule 22, the 403 body | a `rkcs_test_` sandbox key, quoted verbatim from Stripe | a restricted key, with the message shortened to the same shape | The `data`-key inference is the rule, and it holds for any vendor that answers 403 with an error object. |
| Rule 22, the blast radius of the wrong sentence | `docs/INFRASTRUCTURE.md`, board row A11c, `skills/stripe-ops/SKILL.md`, commit `9afce10` | "three files, in each case as a checked fact" | The count is what makes the point; the names are project coordinates. |
| Rule 23, the bad row | a table row carrying a real Stripe account id in its second cell | the same row with `<account id>` in that cell | A real account id does not belong in a shared framework file. |
| Rule 23, the good example | "`docs/INFRASTRUCTURE.md` already had this shape in one table" | "A `Verified` column reading `2026-08-09, /v2/teams/{id} reports billing.plan = hobby` has this shape" | The cell is kept because it demonstrates the required shape, and it names no project. |
| Rule 24, the consequence | `.github/workflows/money-path.yml` | "a workflow file in that repo" | The file is project-specific and the consequence pattern is not. |
| The cold-context review | "`../CLAUDE.md` working rule 2 states this for evals" | "The same principle governs grading" | The eval discipline is one project's, and the argument against self-review is general. |
| Enforcement scope | "specs under `product/specs/`" | "specs" | Directory layout is a project choice. |
| Commit subject lines | the literary example subject from one repo's history | "the literary subject style some histories use" | The quoted subject line is one project's commit. |
| The limit on asking | "answered by Stripe's docs and one grep" | "answered by the vendor's documentation and one grep" | Stripe is the vendor in the source project only. |
| How to ask, third bullet | "said `web/src/webCopy.ts` and `amount_refunded`" | "named a source file and an API field" | Both are project coordinates, and the contrast with customer terms survives. |
| Precedence line | "When a repository carries its own reporting document" | "When a project carries its own reporting document" | One word, so the line covers a project that spans more than one repository. |

## Examples kept intact on purpose

Four examples were kept word for word because the example is the rule.

1. **"Nodemailer is the wheel"**, in rule 11. The metaphor and the reader's reply are what make the
   ban legible, and `nodemailer` is a public package rather than a project artifact.
2. **The nodemailer definition and comparison failures**, in rules 13 and 14. They are the same
   incident, and splitting the package out of them would leave two rules with no evidence.
3. **The "14" misreading**, in `planning.md`. The four-line entry that would have caught it is the
   only worked Assumptions entry in either source.
4. **The `set -e` command-substitution measurement**, in rule 24. It is a fact about bash and it is
   the row that shows what an unusable evidence table looks like.

## What a consuming project still owes

Three things do not travel, and a project adopting these files should write its own.

1. **Worked rewrites.** A project's own bad report, with its own symbols, teaches more than a
   generic one. The three that stayed behind are the model for the format.
2. **The checkers.** Rule 23 is the only rule worth a program, and the program has to know where the
   project keeps its documentation tables and its release board.
3. **The technical-report pointer.** Rule 12 splits by document type, and the longer version of the
   standalone-report half lives in a skill that this repo does not yet have.
