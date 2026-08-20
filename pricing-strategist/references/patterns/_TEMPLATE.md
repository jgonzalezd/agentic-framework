# Pattern Layer Template — schema, shared example, and the adding-a-layer checklist

This file is NOT a layer. It defines what every layer file must contain and holds the shared fictional product that all worked examples use. The skill enumerates `references/patterns/*.md` (excluding this file) to discover layers — adding a file here is the ONLY step needed to make a layer available.

## The twelve layers

Layers are numbered so they load in workflow order, not alphabetically. The number is part of the filename, never part of the pattern ID.

| File | Layer slug | Loaded at |
|---|---|---|
| `01-value-metric.md` | `value-metric` | Phase 3 |
| `02-packaging-models.md` | `packaging` | Phase 4 |
| `03-tier-architecture.md` | `tier-architecture` | Phase 4 + the 4.5 gate |
| `04-price-points.md` | `price-points` | Phase 5 |
| `05-page-anatomy.md` | `page-anatomy` | Phase 6 |
| `06-copy-and-framing.md` | `copy` | Phase 6 |
| `07-risk-reversal.md` | `risk-reversal` | Phase 6 |
| `08-urgency-and-timing.md` | `urgency` | Phase 6 |
| `09-trust-and-proof.md` | `trust-proof` | Phase 6 |
| `10-checkout.md` | `checkout` | Phase 6 |
| `11-expansion-and-retention.md` | `expansion-retention` | Phase 7 |
| `12-experimentation.md` | `experimentation` | Phase 8 |

## Adding or extending a layer — checklist

1. New layer: copy this file to `<NN>-<layer-name>.md`, using the next free number. Fill **every** section below. A layer missing a section is invalid and must not be loaded.
2. **Pattern IDs are `P-NNN`, globally unique across all layers, assigned in mint order — never per-layer, never renumbered.** `Pricing/Ledger.md` and every past deliverable reference them. Retire an ID by marking it `superseded: P-NNN`; never reuse it.
3. Every pattern needs a `works-when` **and** a `fails-when`. A pattern with no failure condition has not been understood, and it will be applied where it does damage.
4. Every `observed-effect` is either a sourced figure with its **cohort and date**, or the literal string `no quantified effect published`. Never a plausible-sounding number.
5. Every number carries its cohort. `+14% on premium-plan selection (GoodUI Evidence #70, e-commerce, 2016)` is usable. `+14% conversion` is not.
6. Where two patterns contradict, **keep both** and make the `works-when` / `fails-when` do the separating. Never average them into mush.
7. Worked examples use the shared product below — never a real product, never a client's numbers.
8. Self-check before shipping: reread every `evidence: strong` rating and ask what public data actually backs it. `anecdote` is the honest default and most patterns should carry it.

## The evidence vocabulary

Shared with `Build/CLAUDE.md` and `Pricing/CLAUDE.md`; it means the same thing everywhere.

- **`anecdote`** — one operator, one product, no counterfactual. **The default.**
- **`medium`** — repeated across several independent operators, or a mechanism with an obvious causal story.
- **`strong`** — near-universal practice with public, large-N data behind it. Rare. Most pricing "best practice" does not qualify.

Two further rules this library learned the hard way:

- **Folklore gets its own section, never a pattern.** A claim repeated everywhere that traces to no primary source goes in `## Folklore`, with a note on where it circulates. Several famous pricing statistics are citation-laundering loops between AI-written SEO posts.
- **A published A/B win is selected evidence.** Publication bias, early stopping and low power all inflate it. Discount accordingly and say so in `fails-when`.

## Shared worked-example product

Every worked example in every layer uses this fictional product. Same product across layers is what makes examples comparable — and what stops a real client's numbers leaking into the library.

> **Product:** *Ledgerly* — a web app that turns a photo of a receipt into a categorised expense entry.
> **Buyer:** a freelancer who does their own bookkeeping and dreads it once a month.
> **Value metric:** receipts processed.
> **Incumbent shape (what Ledgerly ships today, and it is broken on purpose):** free tier at 5 receipts/month · Solo $9/mo for 100 · Books $19/mo for 400 · top-up pack **$4 for 50**.
> **Corrected shape (what the Phase 4.5 gate produces):** identical, except the top-up pack becomes **$5 for 50**.
> **Scale:** ~2,000 monthly visitors, ~40 paying customers. COLD at the point of sale.
> **Billing mix:** of the 40, **30 pay monthly and 10 pay annually** → `30 + 10/12 = 30.83`, so roughly **31 charge events a month**, about one a day, about seven a week.
> **Acquisition flow:** roughly **5 new paying customers a month**, against ~2,000 monthly visitors. The 40 is a **stock accumulated since launch**, not a monthly rate.
>
> **Fictional — never let "Ledgerly" appear in a deliverable.**

**These figures are canonical. Derive from them; never restate them differently.**

**Ledgerly has two shapes, and which one an example uses depends on what the example is teaching.** The incumbent $4 pack is deliberately defective: it prices receipts at **$0.080** against Solo's **$0.090**, so a buyer is better off ignoring the plan and buying packs, and free tier plus two packs reaches 105 receipts for **$8.00** against Solo's 100 for **$9.00**. That is a **Fatal** dominance failure, and it is the worked example the ladder-arithmetic gate exists to catch. The corrected $5 pack prices receipts at **$0.100, or 1.11× Solo's per-unit rate**, which sits inside the corpus norm of 1.1×–1.3× at the entry rung (`teardowns/_CROSS-CUTTING.md` § 5). At $5 the assembly check passes with headroom: free plus two packs is 105 receipts for **$10.00** against Solo's 100 for **$9.00**, dearer in total and dearer per receipt.

**The rule that decides which price an example uses:**

- **Diagnostic contexts use $4** — anything demonstrating a check, a failure mode, or a before-and-after. Label it as the incumbent price being diagnosed.
- **Every copy string, page spec, recommendation and post-gate example uses $5.** Copy is drafted for the ladder you are recommending, never for the one you just ruled Fatal. A layer that ships "$4 for 50 extra receipts" as a shippable string is handing the writer a price the gate killed two phases earlier, which is the single worst defect this library has carried.

Two further figures have been got wrong before and are fixed here:

1. **Per-unit rates are $0.090 (Solo), $0.0475 (Books), and either $0.080 (incumbent top-up) or $0.100 (corrected top-up).** Monotonicity holds down the plan ladder in both shapes; only the corrected top-up sits above it, as a top-up must.
2. **Payment events are ~31/month, not "40" and not "10".** The 40 is a *stock* of customers; the charge-event *flow* follows from the billing mix above. Conflating the two is the exact error P-295 exists to prevent, so this library must not commit it. Any alarm threshold, cadence or per-payment figure derives from ~1/day.
3. **New paying customers are ~5/month, not "40".** This is the second half of the same error and it was committed separately: several layers wrote "~40 conversions a month", which silently converts the whole installed base into a monthly acquisition rate and inflates every sample-size and test-duration estimate built on it by roughly eightfold. Any conversion count, MDE, or test-duration figure derives from **~5/month**.

**Do not derive a churn rate from these three figures.** They are not a steady-state system: the 40 is what has accumulated since launch, and Ledgerly is COLD and has never measured churn. A product that has never instrumented retention cannot have a retention number back-solved out of its own worked example, and any pattern needing one must bracket it.

---

# Layer <NN> — <Layer Name>   ← layer content starts here; delete everything above this line in your copy

**Layer slug:** `<slug>` · **Loaded at:** Phase <N>

<One paragraph: what decisions this layer governs, and the one thing that goes wrong most often when people get it wrong.>

## How to use this layer

<2-4 sentences on the order to read the patterns in, and which are load-bearing versus situational. If some patterns only apply in a COLD or HOT regime, say which.>

## Patterns

### P-NNN — <short imperative name>

- **layer**: `<slug>`
- **mechanism**: <the behavioural or economic mechanism — why this works at all>
- **works-when**: <specific, checkable conditions>
- **fails-when**: <specific conditions where it backfires, including replication caveats and cohort limits>
- **observed-effect**: <figure + metric + cohort + source + date, or `no quantified effect published`>
- **evidence**: `anecdote` | `medium` | `strong`
- **sources**: <urls or citations>
- **how-to**: <2-6 sentences. Exactly what to do — specific enough to execute without reading the source.>
- **example-copy**: "<verbatim shippable string, where the pattern touches copy>"
- **worked-example**: <the pattern applied to Ledgerly, with arithmetic where arithmetic applies>

### P-NNN — <next>

## Interactions

<Which patterns in this layer conflict with each other or with patterns in other layers, and what decides between them. This section is what stops the library being applied as a checklist.>

## Folklore

| Claim | Where it circulates | Traceable to | Verdict |
|---|---|---|---|

<Widely repeated claims in this layer's territory that could not be sourced. Naming them here is what stops them being quoted later.>

## Where this layer is thin

<Honest gaps: what nobody has measured, what the evidence base skews toward, what a solo founder at low traffic cannot learn from any of it.>
