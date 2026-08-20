# Packaging Model Template — schema and the adding-a-model checklist

This file is NOT a model. It defines what every packaging-model pack must contain. The skill enumerates `references/models/*.md` (excluding this file) at Phase 0 and reads the relevant ones at Phase 4 — adding a file here is the ONLY step needed to make a model available.

A **model** is a shape a business can take: what the buyer purchases, how often, and what governs the amount. It is a bigger decision than a tier ladder and it comes first — the ladder is built inside the model, never the other way round.

## Adding a model — checklist

1. Copy this file to `<model-name>.md` (kebab-case; the filename IS the model's name). Fill **every** section. A pack missing a section is invalid and must not be offered.
2. **The `## Fails when` section is the reason this pack exists.** A model with no failure conditions has not been understood, and it will be recommended where it does damage. Be specific and concrete.
3. Worked examples use the shared *Ledgerly* product defined in `references/patterns/_TEMPLATE.md`. Never a real product.
4. Every number carries a source, a date and a cohort, or is omitted. No plausible-sounding figures.
5. Name at least three real products running this model, with the date you observed them. Where a `references/teardowns/` file exists for one, link it.
6. Self-check: lay your `## Fits when` beside every existing model's. If two models claim the same conditions, at least one of them is wrong — sharpen the boundary or merge the packs.

## The evidence vocabulary these packs use

Packs in this directory carry no `evidence:` field, because a pack is not a pattern. They nonetheless make claims of differing quality, and two distinct axes are in play. Keep them separate, because a reader who conflates them cannot tell how much weight a sentence carries.

**Strength** is the axis defined in `references/patterns/_TEMPLATE.md` and shared with `Build/CLAUDE.md` and `Pricing/CLAUDE.md`. It has exactly three values — `anecdote`, `medium`, `strong` — and those are the only three. Where a pack rates the strength of a claim it must use one of them.

**Provenance** is a separate axis describing how the claim reached this library, and it ranks against nothing. Two markers appear in these packs and they mean the following:

- **`[secondary]`** — the figure was read from someone other than the party who published or set it: an aggregator, a review site, a competitor's comparison page, a trade write-up. The underlying fact may be perfectly good; what is missing is a first-party confirmation. A `[secondary]` figure is not automatically weaker than an `anecdote` and not automatically stronger — the marker says where the number came from, not how much it is worth.
- **`secondhand`** — a claim *about* a fact, reported by someone who did not observe it. A price history recounted in an article years after the fact is secondhand; a price read off a live page today is not. Secondhand claims cannot be re-verified from the record that carries them, which is why they are marked rather than quietly used.

Both markers sit at the point of use, never once at the top of a file, because a claim that travels loses its caveat first.

## Ledgerly's two documented shapes — which top-up price a pack should use

The canonical block in `references/patterns/_TEMPLATE.md` gives Ledgerly two shapes, and a pack must state which one it is using:

- **Incumbent — top-up $4 for 50** ($0.080/receipt, against Solo's $0.090). Deliberately defective, and it is the example the Phase 4.5 ladder gate exists to catch: free plus two packs reaches 105 receipts for $8.00 against Solo's 100 for $9.00, a Fatal dominance failure.
- **Corrected — top-up $5 for 50** ($0.100/receipt, 1.11× Solo's per-unit rate, inside the corpus norm of 1.1×–1.3× at the entry rung recorded in `teardowns/_CROSS-CUTTING.md` §5).

**Diagnostic contexts use the incumbent $4 and must label it as such.** Anything demonstrating an arithmetic trap, a failure mode or a before-and-after needs the broken price, and converting it to $5 deletes the thing the section exists to show — which matters here because this template requires every pack to state its known arithmetic trap and the inequality that detects it. **Recommendations, copy strings and post-gate examples use the corrected $5.** A pack that quotes a bare "$4" with no label is wrong regardless of context.

## Ledgerly's cost-to-serve — derived once, used everywhere

Ledgerly is fictional, so its cost-to-serve is derived rather than measured, and it is derived in exactly one place: **`references/patterns/02-packaging-models.md`, P-021**, which builds it from three passes per receipt against stated token counts and model rates. Every pack in this directory uses those two figures and no others.

| Figure | Value | Where it applies |
|---|---|---|
| **Pre-lever cost-to-serve** | **$0.060 per receipt** | Stress-testing the ladder *as it stands*, which is what P-022 does |
| **Post-lever cost-to-serve** | **$0.0186 per receipt** | Deriving any *forward* price, because P-021's rule is to compute the floor after the levers |
| 2× floor, pre-lever | $0.120 per receipt | — |
| 2× floor, post-lever | $0.037 per receipt | — |

**Do not substitute the $0.040/task figure for either of these.** $0.040 is the generic single-pass example published in the Digital Applied framework (2026-06-30), reproduced in several packs to demonstrate the *method*; P-021 derives Ledgerly's own cost the honest multi-call way and gets $0.060. Using $0.040 as Ledgerly's cost understates it by a third and, in at least one pack, reversed the sign of a gross-margin conclusion. The two numbers are not interchangeable and must not be described as the same placeholder.

---

# <Model Name>   ← pack content starts here; delete everything above this line in your copy

## What the buyer is purchasing

<One paragraph in plain language, from the buyer's side of the table. Not "usage-based billing with committed spend" — what the person thinks they are buying.>

## The mechanics

- **Unit of purchase:** <what one purchase is>
- **Cadence:** <one-off · monthly · annual · on-demand · hybrid>
- **What governs the amount:** <seats · usage · capability · time · outcome · nothing>
- **Entitlement on payment:** <what unlocks, immediately and over time>
- **What happens at the limit:** <hard stop · overage · degraded service · queue · nothing>
- **Expiry and rollover:** <the policy, and whether purchased and included allowances differ>

## Fits when

<Specific, checkable conditions. Product characteristics, buyer behaviour, purchase frequency, COGS shape, scale.>

## Fails when

<The failure conditions, each with the mechanism. "Fails for low-usage buyers" is not enough — say what goes wrong and why. Include the scale below which the model is not worth its operational overhead.>

## The arithmetic

<How money actually works in this model. Include:
 - the unit-economics shape, and where the margin cliff is
 - the check that reveals whether this model is priced coherently
 - a worked example on Ledgerly, with real arithmetic
Where the model has a known arithmetic trap — an add-on that can undercut a plan, a flat price that inverts on power users — state the trap and the inequality that detects it.>

## How it is presented

<What the pricing page must do for this model to be comprehensible. The unit shown to the buyer, the limit language, what has to be answered before the price makes sense. Verbatim examples from real products, attributed and dated.>

## Who runs it

| Product | Structure | Observed | Teardown |
|---|---|---|---|

## Migrating into and out of it

<What it costs to adopt this model later, and what it costs to leave. Repricing existing customers is the expensive part of every model change — say what that looks like here, including grandfathering.>

## Interactions

<Which models this composes with (hybrids are common and usually the right answer), and which it excludes. Which `references/patterns/` layers matter most under this model.>

## Where this model is contested

<The honest argument against it, represented fairly, with sources. Every model has a serious critique; a pack without one has not read the opposition.>

## Folklore and unverified claims

<Optional, and required the moment a claim in this pack's territory is demoted. Mirrors the `## Folklore` table in `references/patterns/_TEMPLATE.md`: a claim that circulates in this model's territory but reaches no primary source goes here, with a note on where it circulates and an explicit verdict. A number in this table must never also appear in the body as a benchmark or a target.>

| Claim | Where it circulates | Traceable to | Verdict |
|---|---|---|---|
