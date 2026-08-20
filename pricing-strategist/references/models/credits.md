# Credits

## What the buyer is purchasing

A private currency, spendable inside your product. The buyer thinks they are buying flexibility — one balance that works across everything you offer, so they do not have to predict in advance which feature they will need. What they discover is that they now have a second job: learning your exchange rates well enough to answer the only question they actually care about, which is *how much of the thing I want does this buy me*. A credit is the answer to "we ship many different features and cannot agree on one unit"; it is never the answer to "what is our value metric".

## The mechanics

- **Unit of purchase:** an abstract token with no intrinsic meaning, redeemable against a published (or unpublished) burn table.
- **Cadence:** an allowance granted per billing period, plus optional purchased packs on demand.
- **What governs the amount:** the tier boundary, which in a credit model is usually defined *by credit volume outright* — Clay's tiers are set by credit volume, Airtable runs **500 (Free) → 25,000 (Business)** AI credits (PricingSaaS, 2025-08-29, via L10).
- **Entitlement on payment:** the balance is credited immediately; features draw it down at per-action rates you control.
- **What happens at the limit:** buy more credits, or wait for the reset. Some products degrade instead — see `hybrid.md` on the Relax lane.
- **Expiry and rollover:** the most contested part of the model. The observed convergence is **rollover capped at 2× the monthly allowance** (ElevenLabs: up to two months' worth on paid tiers, none on Free/Starter, rolled-over balances die at end of period on downgrade or cancellation; Gamma: capped at 2,000 on a 1,000/mo allowance — both 2026, via L10). The harsher end: **Workday Flex Credits expire at contract-year end**; the gentler: **PostHog rolls over half of unused credits, but only on a renewal at ≥ the previous contract's spend** (HubSpot buyer guide, 2026-05-21). Purchased credits are increasingly made permanent — Runway: "Any additional credits you purchase never expire" (observed 2026-08-12).

## Fits when

- **AI *is* the product, and you ship three or more heterogeneous features whose natural units are genuinely incompatible.** A deck, an image and a refinement have no shared noun. That is the only honest reason to mint a currency.
- **Cost per action varies by more than roughly 5×** across those features, so a single named unit would either overprice the cheap action or lose money on the expensive one. **The 5× is an unsourced practitioner threshold and this pack will not pretend otherwise.** No study in this library derives it, and Photoroom cannot confirm it: that product's API prices "$0.02" for background removal against "$0.10" for GenAI editing (observed 2026-08-12), which is *exactly* 5×, so citing it as confirmation is fitting the threshold to the single observation it was drawn beside. The number also coincides with the ~5× intra-family model price spread quoted in `02-packaging-models` P-021, which is a different quantity entirely — the spread between model tiers, not the dispersion between your own features — and the coincidence should not be read as corroboration. `[the cost-dispersion threshold at which a named unit stops working — no source; the checkable substitute is your own p95/p50 cost ratio across features, which turns a borrowed threshold into a measurement.]` Treat 5× as the order of magnitude at which to start looking, not as a gate.
- **You need to ship fast without building outcome telemetry.** Metronome — which sells usage-billing infrastructure and therefore profits when companies adopt credits — calls cost-plus credits "born of necessity rather than preference," a **bridge, not a destination** (2025-09-22). Its own quoted customers: *"We don't love credits, but we didn't have time to define outcomes. This was the fastest way to ship"*; *"Our finance team likes it. Our customers don't know what a credit does."*
- **You are retrofitting consumption onto an existing seat price.** Adding a credit meter alongside seats is the survivable move — Figma, HubSpot, Salesforce, Adobe, Cursor and Lovable all did it in 2025 "without killing the seats" (PricingSaaS, 2026-01-07).
- **Your burn rates are stable enough to publish and few enough to fit in one table of about eight rows.** If they are not, publishing the table advertises the complexity instead of resolving it.

**Boundary against neighbouring packs.** Credits are a `hybrid.md` whose unit is abstract. Every allowance/overage/expiry/inversion mechanic in that pack applies here unchanged. What is *added* here is an exchange rate you control and can silently devalue — and that addition is what the entire critique below is about. **If you have one dominant countable output, use `hybrid.md` with the named unit and skip this pack.**

## Fails when

- **You have already chosen a unit.** Selling "100 receipts" and then converting it to "100 credits at 1 credit per receipt" adds an abstraction layer, a conversion table and a devaluation risk in exchange for nothing. Every one of the six flaws below is a consequence of *abstracting* the unit — exposing your cost structure requires a token-correlated meter; the exchange-rate matrix requires multiple burn rates; devaluation risk requires a currency you control. A named unit has none of those properties because there is no rate to devalue and nothing to reverse-engineer.
- **The burn table grows past about eight rows, or the rates change monthly.** Each new feature adds a row to a table the buyer must now study to forecast a bill.
- **You redenominate silently.** You mint the currency and control its exchange rate, so every rate change is legible to customers as devaluation. Announced a cycle ahead with a grandfather period it is a price change; discovered by a user it is a scandal, and the modal outcome is a public reversal.
- **Your buyer is a prosumer who has to justify the spend to themselves.** The abstraction that helps your finance team hurts theirs.
- **Scale floor — mechanical.** Credits require, at minimum: a balance ledger, a per-action burn table, an expiry policy, a rollover policy with a cap, a top-up SKU, a refund-on-failure rule, a spend cap, a usage meter in-product, and change control on the rates. **Below three genuinely incompatible feature units, none of that machinery buys anything a named allowance would not.** L15's blunt version, aimed at small products: *"If any of this feels like too much machinery for your size: don't sell top-ups"* — and a credit system is top-ups with extra steps. Bannerbear refuses overage entirely and has the simplest pricing page in its lane (observed 2026-08-12).

## The arithmetic

### The exchange-rate identity

A credit system is only comprehensible if the buyer can compute one number:

```
outputs affordable  =  allowance / credits-per-output
```

Gamma publishes both halves: **~50 credits per 10-slide deck**, AI images **2–40 credits** by quality, refinements **5–10 credits**, against a Plus allowance of **1,000 credits/mo** at ~$8/mo billed annually — and then does the division for the buyer: **1,000 credits ≈ 15–20 decks** (2026, via L10). Microsoft Copilot Studio publishes **2 credits per generative answer, 10 for tenant graph grounding** (HubSpot buyer guide, 2026-05-21). If your page does not let the buyer run that division in their head, the credit is not a unit, it is a fog.

### The implied dollar rate, and why buyers compute it

```
$ per credit = plan price / allowance
```

This is the number a sophisticated buyer computes first, and it is the number that makes credits leaky: credits correlate to tokens and API calls whose prices are publicly posted by model vendors, so a buyer can reverse-engineer your markup in an afternoon.

### The inversion tests apply here unchanged

Both inequalities from `hybrid.md` govern credit packs. With plan rate `rₙ = Pₙ / Qₙ` in dollars per credit:

```
(A)  r_pack  ≥  rₙ  for every rung                      ← the plan-rate test
(B)  r_pack  ≥  (Pₙ₊₁ − Pₙ) / (Qₙ₊₁ − Qₙ)              ← the overage floor (marginal rate of the next rung)
```

and the fix is the same: **one flat pack price at ~1.1× the ENTRY tier's per-credit rate**, never the top tier's.

Two non-price guards observed in live credit systems, both worth copying because they defend the ladder without a price argument: **permanence** — Runway makes purchased credits never expire while plan credits reset, so the buyer is paying for permanence rather than being fined for overuse, which also makes the two credit types not directly comparable and softens the per-unit arithmetic entirely; and **minimum pack size** — Runway's minimum top-up is **1,000 credits against a 625-credit Standard allowance**, so the smallest available top-up exceeds the entire entry plan and cannot function as a permanent cheap tier (both observed 2026-08-12).

### Worked example — Ledgerly

Ledgerly's unit is a receipt. **The correct recommendation is not to build credits at all** — but run the arithmetic, because the case for skipping this pack is arithmetic rather than taste.

**If Ledgerly credit-ised at 1 credit = 1 receipt**, on the **incumbent** ladder whose $4 pack `hybrid.md` diagnoses — the incumbent is the right shape to use here, because the point of the exercise is what renaming the unit does to a ladder that is already broken:

| Rung | Price | Credits | $/credit |
|---|---|---|---|
| Solo | $9 | 100 | $0.0900 |
| Books | $19 | 400 | $0.0475 |
| Pack, *incumbent* | $4 | 50 | $0.0800 |

Identical numbers, identical inversion — the pack at $0.0800 sits below Solo's $0.0900, so free + 2 packs ($8 for 105 credits) still beats Solo ($9 for 100). **Renaming the unit does not fix a ladder; it only makes the failure harder for the buyer to notice.** That is the honest summary of what credits do to arithmetic. On the **corrected** shape the pack is **$5 for 50, or $0.100 per credit**, and the same table passes in either vocabulary — which is the other half of the point, since the fix was arithmetic and had nothing to do with what the unit was called.

**The one condition that would force Ledgerly into credits:** if receipts varied in cost by more than roughly 5× — a single till receipt versus a 40-page itemised invoice, or a quick OCR pass versus a multi-agent line-item extraction. **As above, the 5× is an unsourced heuristic rather than a derived threshold**, so what follows is a measurement instruction and not a gate; if your ratio comes out at 4× or 7× the decision is a judgement, and the ratio is the input to it. Test it directly:

```
cost(p95 receipt) / cost(p50 receipt)  >  5   →  a uniform receipt price is mispriced at both ends
```

Even then the prescription is **not** credits — and note that this one is an internal synthesis of the AI-pricing research lane rather than a sourced finding, so it is reasoning you can check rather than evidence you can cite. It is **two or three named types with separate allowances** — "Receipts" and "Invoices", each with its own number on the plan card. Users understand two nouns; they do not understand a currency with two exchange rates. `[Ledgerly's cost dispersion across receipt types — unmeasured; log input page count and token cost per receipt for 30 days and compute the p95/p50 ratio before this decision is even askable.]`

**Where a credit *would* legitimately arrive:** if Ledgerly later ships receipt capture, a mileage log and a quarterly tax-summary generator — three features with three incompatible natural units — then one balance across all three becomes the honest answer, and the burn table would need to fit in about eight rows with the Gamma-style translation sentence beneath it ("1,000 credits ≈ 800 receipts, or 40 mileage months, or 4 quarterly summaries").

## How it is presented

**Publish the burn table on the pricing page, above the fold on the plan card, not in a docs page** — and put the translation sentence directly beneath it. The table answers "what does this cost"; the sentence answers "is this enough for me", which is the question that actually gates the purchase.

Publish the **dollar** number too. HubSpot sells capacity packs at **"1,000 credits/month for $10"** with the price locked for the contract duration (2026-05-21) — a credit whose dollar price is stated is a unit; one whose dollar price is implied is a fog. Notion's agent add-on is stated the same way: **"$10 per 1,000 monthly Notion credits"** (observed 2026-08-12, `references/teardowns/notion.md`).

Show a persistent meter where the work happens, warn at 80% with the exact number and reset date, and offer the pack from inside the warning. Say the expiry and rollover policy in the same sentence that announces the allowance, so the terms are disclosed rather than discovered.

Where credits scale with tier, check whether they scale *at all* for every seat type — Figma grants Full seats 3,000 → 3,500 → 4,250 AI credits/mo across Professional / Organization / Enterprise, while Dev and Collab seats carry a flat **500 AI credits/mo on every paid tier** (observed 2026-08-12, `references/teardowns/figma.md`). That is a defensible design, but it must be stated on the card or a Dev-seat buyer will assume the headline number applies to them.

## Who runs it

| Product | Structure | Observed | Teardown |
|---|---|---|---|
| Gamma | ~$8/mo annual = 1,000 credits/mo; published burn table (~50/deck, 2–40/image, 5–10/refinement); rollover capped at 2,000 | 2026 (eesel, secondary) | — |
| ElevenLabs (core) | Credits explicitly pegged to characters — 1 credit = 1 character on Multilingual v2, 0.5 credits/char on Flash/Turbo; $6/30k → $990/6M; rollover up to two months; **no top-up sold** | 2026-08-12 | — |
| Runway | $15/625 → $95/9,500 credits; purchased credits never expire, plan credits reset; minimum top-up 1,000 credits | 2026-08-12 | — |
| Figma | Seats plus AI credits per seat per month — Starter "150 AI credits/day, up to 500 AI credits/mo"; Professional 3,000; Organization 3,500; Enterprise 4,250 | 2026-08-12 | `references/teardowns/figma.md` |
| Notion | Per-seat subscription with a credit meter stacked on top; Custom Agents add-on "$10 per 1,000 monthly Notion credits" | 2026-08-12 | `references/teardowns/notion.md` |
| Framer | Per-site subscription with credits as one of three stacked meters ("Agents and other AI features consume credits") | 2026-08-12 | `references/teardowns/framer.md` |
| Microsoft Copilot Studio | Published per-action exchange rate: generative answer = 2 credits, tenant graph grounding = 10 | 2026-05-21 (via HubSpot) | — |

**Adoption context, with its caveats.** The PricingSaaS 500 Index — a census of published pricing pages across a curated 500-company universe — recorded credit-based models going from **35 companies at end-2024 to 79 during 2025, +126% YoY** (2026-01-07). Read the level, not the growth rate: **79/500 = 16% absolute adoption**, and the 126% is a small-base figure that reads far more dramatic than the level does. PricingSaaS is a commercial pricing-intelligence vendor, the full dataset is paywalled, the raw company list is not publicly auditable, and the index's inclusion criteria are not published.

## Migrating into and out of it

**Into it, from seats:** additive, and the best-documented migration in this library — six named companies did it in one year without repricing the seat.

**Into it, from a named unit:** almost always a mistake. You are trading a self-explaining meter for one that needs a conversion table.

**Out of it, to named units:** the observed direction of travel for vendors that abandoned credits — Fireflies.ai and Synthesia moved toward transcription and video *minutes* (Metronome, 2025-09-22). It is a real migration cost (every plan card, every doc, every invoice line) but it is a one-time cost against a permanent comprehension gain.

**Redenomination is the expensive, dangerous operation, and it must be treated as a price change.** Airlines devalue frequent-flyer miles roughly **15% annually**; SPP alleges Cursor raised effective per-unit rates **20×+ through credit redenomination in early 2026** (2026-04-16 — contested, single-source, and SPP is commercially opposed to credits). Even if that multiple is wrong, the structural point stands: **a currency you mint and can silently devalue will eventually be devalued, and customers know it.** Announce a cycle ahead, grandfather, publish a dated changelog, and if the rate rose because model costs rose, say so.

## Interactions

**Composes with:** `hybrid.md` (credits are its abstract-unit variant — read that pack's arithmetic first), `subscription.md` (the seat price the credits bolt onto), `freemium.md` (a small free credit grant is the standard taster — Figma Starter's "150 AI credits/day, up to 500 AI credits/mo"), `usage-based.md` (a credit balance is prepaid usage).

**Excludes:** `one-off.md` in spirit — a credit pack is a one-off SKU, but it inherits every ladder constraint, so it can never be priced as a standalone product.

**Pattern layers that matter most:** `01-value-metric` (the layer this model exists to avoid — read it before deciding), `05-page-anatomy` (the burn table is a page element with a size limit), `11-expansion-and-retention` (expiry, rollover, forfeiture-on-cancellation as a retention hook), `09-trust-and-proof` (the meter, the changelog).

## Where this model is contested

**The strongest case against credits is Chris Mele's (Software Pricing Partners, 2026-04-16), and it deserves to be taken seriously even though SPP sells the consulting that competes with the "just ship credits" default.** Represented in full:

1. **Credits expose your cost structure and invite margin compression.** Credits correlate to tokens whose prices are publicly posted. A sophisticated buyer reverse-engineers your markup and negotiates you toward infrastructure cost. Mele cites a **$600,000 bill shock that ended an enterprise relationship outright.** This is a genuine asymmetry versus classic SaaS, where the buyer had no visibility into your marginal cost.
2. **Credits become incomprehensible at scale.** *"What starts as '1 credit = $1' evolves into a matrix of exchange rates, consumption rules, product-specific ratios, and exception policies that nobody fully understands."*
3. **Credits defer the pain of paying, then deliver it all at once.** Prepayment psychologically decouples spend from consumption; the customer feels nothing while burning the balance, then meets the full number at renewal. **A worse emotional shape than metered billing, not a better one.**
4. **Credits create an exchange-rate risk you cannot resist exploiting.** The frequent-flyer analogy, and the Cursor allegation above.
5. **Prepaid credits mask pricing problems.** Revenue books immediately while value delivery happens over months; usage skew hides inside an aggregate balance; you discover the misalignment at renewal, all at once, when it is hardest to fix.
6. **Credits cap your revenue at infrastructure margins.** Cost-plus thinking trains you to accept infrastructure-level economics as your ceiling. Mele's case study: the same product moved from cost-correlated to outcome-based pricing and renewed at **$300,000/year instead of roughly $833/year** — a single unnamed case, and an existence proof rather than a benchmark.

His prescription is not one replacement but a trifecta: outcome-based pricing where outcomes are measurable, hybrid base + usage premiums where they are not, capability-based packaging that treats AI as a value add-on, and — where you must meter — metering **a primary operation the customer already names** ("simulations run", "documents processed") rather than an abstract credit. His summary line: *"Find the value metric that credits were invented to avoid choosing."*

**Corroboration from a party with the opposite commercial interest.** Metronome sells usage-billing infrastructure and profits when companies adopt credits — and its own 2025-09-22 analysis calls cost-plus credits a bridge, not a destination. When the vendor selling the shovel says the hole is temporary, believe them.

**Buyer-side evidence.** **78% of IT leaders reported surprise AI-related charges in the past year** (Zylo 2026 SaaS Management Index, n=218, via HubSpot — and Zylo sells SaaS management software). HubSpot's own buyer's guide, from a company that sells credit packs, warns buyers about expiry traps and about how hard total-cost comparison becomes when subscriptions and credits interact.

**The honest counterweight, and it is not weak.** Credits persist despite all of this because they sit between seat-based access and outcome pricing, offering **more transparency than legacy licenses and more feasibility than outcomes** — most products cannot define or verify an outcome, and outcome-based pricing was at **5% adoption in mid-2025**, only *expected* to reach 25% by 2028 on a survey of intentions. For the ~95% of products that cannot charge for a verified outcome, the real choice is credits versus a flat price that inverts on power users, and the arithmetic says flat loses. **The critique is right that credits are not the destination. It does not follow that you can skip them** — though if you already have one legible unit, as most small products do, you can and should.
