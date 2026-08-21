# Freemium

## What the buyer is purchasing

At first, nothing — and that is the whole design. The buyer is taking a real, working product for free, on the understanding (usually unspoken) that they will hit a wall if they keep using it. What they are actually purchasing later is **the removal of a wall they walked into while succeeding.** The free tier's job is to get them far enough that the wall feels like their own progress rather than your extraction, which is why the fence has to sit *after* the aha moment and never before it.

The distinction this pack turns on: in freemium, **the free tier is a funnel** — its KPI is free→paid conversion, and every free user who never converts is a cost. In `free-core.md`, the free tier is a *distribution asset* whose KPI is reach, and crippling it destroys the business. Deciding which one you are running, writing it down, and not drifting is the single most consequential decision in this pack.

## The mechanics

- **Unit of purchase:** a paid tier, bought from inside the free product.
- **Cadence:** the free tier is perpetual; the paid tier is a subscription (see `subscription.md`) or a hybrid (`hybrid.md`).
- **What governs the amount:** whatever governs the paid ladder. Free is priced at zero and fenced, not metered.
- **Entitlement on payment:** the fence lifts. The best free tiers are designed so exactly one fence lifts, so the upgrade decision has one variable.
- **What happens at the limit:** the buyer is stopped, and how you stop them is the design. A **usage or time fence** lets them experience the whole product and hit the wall through success; a **feature fence** teaches them which capabilities you withheld. Prefer the former.
- **Expiry and rollover:** rollover is a paid-tier benefit and a free-tier cost. ElevenLabs offers rollover on Creator/Pro/Scale/Business and **none on Free/Starter** (2026, via L10) — the correct default.

## Fits when

- **Marginal cost of a free user is near zero**, or small enough to survive the arithmetic in `## The arithmetic`. This is the original guardrail from the monetization canon (L01 Ch. 7) and it is the condition AI products break.
- **The product's value is not legible from the outside** and has to be experienced. If a stranger can see the value from a screenshot, you may be leaving 5× conversion on the table — see `hard-paywall.md`.
- **You can name a fence the buyer hits by succeeding**, not one they need to start. Linear fences its free tier at **250 issues and 2 teams** with unlimited members (observed 2026-08-12, `references/teardowns/linear.md`). Four further fences are worth knowing as shapes rather than as current facts: Slack forgetting everything older than 90 days, Loom capping recordings at 5 minutes, Zoom at 40, and Zapier at 100 tasks with two-step workflows. **All four are `[undated — no teardown exists for any of these four products in `references/teardowns/`, and no observation date was recorded when they entered this library. Vendor free-tier limits change without notice, so re-check the live page before quoting any of them.]`** The Linear figure beside them is dated because it was observed; the others are not, and the difference is deliberate.
- **Top-of-funnel volume is large enough that a 2–5% conversion rate produces a business.** This is the load-bearing scale condition, and it is arithmetic — see below. **The 2–5% band itself is trade guidance rather than a measured benchmark**, as contested item 3 records: it circulates without an underlying dataset, and the nearest measured anchor in this library — RevenueCat's 2.1% median — is **consumer mobile in-app purchase, not B2B software and not web checkout**. Use the band to run the multiplication, not to judge whether your rate is healthy.
- **The free tier is a funnel, not the product.** If free users generate your acquisition — SEO, links, network effects, supply side — you are in `free-core.md` and the conversion-optimising advice here will damage you.

## Fails when

- **You give the farm away.** The canonical failure: building the free tier so complete that nothing remains to monetise (L01, freemium guardrails). Diagnostic thresholds: free→paid below **2%** (self-serve), or a free:paid user ratio above **100:1** against a healthy ~50:1 (S26 via L16 — trade guidance, treat as directional).
- **You loosen the limit to "drive adoption."** The cleanest single experiment in this library: Athenic raised the free-tier task limit from **100 to 500** and free→paid conversions fell **60%** (S29 via L16 — aggregator citing an operator write-up that could not be reached independently). In a taster architecture the *limit* is the conversion lever, not the feature set. It is dangerous to loosen and very hard to tighten back.
- **You gate a feature on the path to first value.** Gating core-value features early in adoption "creates resentment rather than upgrades" (Stripe packaging guide, via L16). The free user never reaches the aha, so there is nothing to convert.
- **You drift.** RevenueCat names the destructive failure mode precisely: slowly shifting more and more of the offering to premium, one experiment at a time, where each A/B test wins locally but the cumulative effect of chipping away at the free tier erodes the thing that made free valuable. Their remedy is a **Bill of Rights** — an internal constitution naming the features that must always be free and what is off-limits for A/B testing. Life360's version: "the core map, location history, and place alerts, they must be free."
- **Your free users have material COGS.** Every free receipt, generation or minute is a real bill. At $1.00/month cost-to-serve and a 1% conversion rate you pay **$100/month of infrastructure per acquired paid customer** (L16 Check 11 — the source is an aggregator, but the check is a definition, not a finding).
- **Scale floor:** freemium's floor is a *traffic* floor, not a customer floor. If `visitors × conversion × ARPU` is below what the business needs, no amount of fence design fixes it — the model is arithmetically incapable of the target and you need either more traffic or a different model. Run that multiplication before designing anything.

## The arithmetic

### The freemium unit-economics check

```
cost-to-serve(free user) / (free→paid conversion rate)  <  acceptable CAC
```

This is the check that decides whether freemium is affordable at all. The left-hand side is what each paying customer costs you in free-tier infrastructure alone, before any marketing spend.

### The traffic identity

```
paying customers  =  visitors × (visitor→signup) × (free→paid)
MRR               =  paying customers × ARPU
```

Run it forward before designing the fence. If the answer is not a business, redesign the model rather than the page.

### Worked example — Ledgerly

Ledgerly runs free at 5 receipts/month, ~2,000 monthly visitors, ~40 paying customers.

**Check 1 — the observed funnel.** 40 payers against 2,000 monthly visitors is a **2.0% visitor→paid** rate. Note carefully what that is *not*: it is not free→paid, and Ledgerly does not instrument the step in between. `[free signups per month — not instrumented; this is the single most valuable missing number, because free→paid and visitor→signup have completely different fixes.]`

A caution worth stating because it is the kind of coincidence that becomes a false belief: 2.0% happens to sit almost exactly on RevenueCat's median **freemium D35 download-to-paid of 2.1%** (115k apps, 2026). That is a **mobile in-app-purchase cohort measured off app-store downloads**, and a web visitor is a far weaker intent signal than an app install. **The match is a coincidence and must not be read as confirmation that Ledgerly's funnel is healthy.**

**Check 2 — cost of the free tier.** Ledgerly's cost-to-serve is derived once, in `02-packaging-models` P-021, and restated in `models/_TEMPLATE.md`: **$0.060 per receipt before the cost levers and $0.0186 after them**. An earlier version of this check used $0.040, which is the generic single-pass figure from the same source rather than Ledgerly's own multi-call cost, and every figure below moved when that was corrected.

```
pre-lever,  free user at the full 5 receipts:  5 × $0.060  = $0.30/month
at 2.0% conversion:                            $0.30 / 0.02 = $15.00 per acquired paying customer
post-lever:                                    5 × $0.0186 = $0.093/month  →  $4.65 per acquired customer
```

Read the payback against **gross profit, not revenue**, because free-tier COGS has to be recovered out of what is left after serving the paying customer. A Solo customer at full utilisation costs $6.00/month pre-lever and returns $3.00 of gross profit, so $15.00 is a **five-month payback**; after the levers the same customer costs $1.86 and returns $7.14, so $4.65 is a **0.7-month payback**. **Freemium is comfortably affordable at Ledgerly's post-lever cost and merely tolerable at its pre-lever cost** — which is a weaker statement than this pack used to make, and the correct one. It holds at all only because the free allowance is small. Watch what happens if the free tier is "generously" raised to 25 receipts:

```
pre-lever:  25 × $0.060 = $1.50/month  →  $1.50 / 0.02 = $75.00 per acquired customer
```

**That is twenty-five months of pre-lever Solo gross profit spent on infrastructure alone**, and it assumes conversion holds — which the Athenic result says it will not; it says conversion *falls* when the limit rises. The two effects compound in the same direction, which is why "raise the free limit to grow" is the most expensive well-intentioned change in this model.

**Check 3 — is the fence in the right place?** Five receipts is a *taster* fence: same product, usage-limited (RevenueCat's taxonomy). The question that decides whether it works is whether a freelancer reaches the aha inside 5 receipts. Ledgerly's aha is plausibly "I photographed a receipt and a categorised expense entry appeared" — reached at receipt 1. So 5 is generous enough to demonstrate and tight enough to bind, which is the correct shape. **But 5/month is also below the monthly volume of essentially any real user, which means the free tier is not usable as a product at all** — it is a demo with a calendar attached. That is a legitimate freemium design and it is worth naming out loud, because it means Ledgerly cannot claim free-tier reach as an acquisition asset (see `free-core.md` for what that would require).

**Check 4 — the free tier must not be assemblable into a paid one.** This is the check that catches Ledgerly's **incumbent** top-up of **$4 for 50**, and the incumbent is what the check has to be run against. If that pack is purchasable *on the free tier*, then:

```
free (5) + 2 packs ($8)  =  105 receipts for $8
Solo                     =  100 receipts for $9
```

**The free tier plus two top-ups strictly dominates the entry paid tier.** Freemium's fence has been sold at retail for less than the plan it protects. `hybrid.md` derives the correction — the **corrected** shape prices the pack at $5/50, which is $0.10/receipt, or 1.11× Solo's $0.090 entry rate — and at that price the check passes: free plus two packs is 105 receipts for **$10.00** against Solo's 100 for **$9.00**, dearer in total and dearer per receipt. The freemium-specific guard is separate and should be shipped regardless: **gate top-up purchase behind a paid plan**, which removes the whole class of free-tier assembly rather than pricing around one instance of it.

## How it is presented

- **The free tier is a card on the pricing page, not a link in the nav.** It carries a price ("$0", "Free, Forever." — Raycast, observed 2026-08-12) and a CTA in the same visual language as the paid tiers.
- **State the fence as a number on the card, in the buyer's noun.** Linear's free card reads on **2 teams, 250 issues, unlimited members** (observed 2026-08-12) — three numbers, no adjectives. A fence expressed as "limited" is not a fence, it is a warning.
- **The upgrade must have exactly one variable.** If the paid tier lifts the limit *and* adds four features *and* changes the support tier, the buyer cannot price the decision.
- **Do not put the strongest social proof on the free card.** The free card's job is to be taken; the paid card's job is to be believed.
- **Modal paywalls show two plans.** Distribution of plans shown on mobile paywalls: 1 plan **20–40%**, 2 plans **41–60%**, 3+ **6–27%** (RevenueCat 2026, 115k apps — **mobile IAP, not web**).

## Who runs it

| Product | Structure | Observed | Teardown |
|---|---|---|---|
| Linear | Free fenced on **250 issues / 2 teams / unlimited members** — the fence is the artifact, not the person; Basic "$10 per user/month", Business "$16 per user/month" | 2026-08-12 | `references/teardowns/linear.md` |
| Raycast | "Free, Forever." full launcher with no AI and no sync; Pro "$10 / month" ("$8 / month" annual) lifts AI, Cloud Sync, unlimited clipboard history | 2026-08-12 | `references/teardowns/raycast.md` |
| Notion | Free (individual use, block storage limit, limited AI) → Plus $10 → Business $20 per member/mo, with "Recommended" on Business | 2026-08-12 | `references/teardowns/notion.md` |
| Slack | Free capped at **90-day message history** and 10 apps — a time fence on the artifact that *is* the product | via L16 (S12) | — |
| Zapier | Free at **100 tasks** and two-step workflows, into a ~20-step allowance ladder inside Pro | via L16 (S10) | — |
| Clipdrop | Free fenced on **rolling per-tool 24-hour caps** ("20/24h", "50/24h" for Text Remover); Pro "1000/24h" — a 50× jump on the same meter, plus queue priority and resolution | 2026-08-12 | — |

**Prevalence, and an arithmetic problem inside it.** SaaS Research Lab's March 2026 scan of 110 products across 12 categories reports **38.2% free trial** and **31.0% carrying a "contact sales" enterprise option**, alongside a **median starter price of $29, IQR $19–$49**, with price clustering at $19/$25/$29/$49.

Two of the four shares in that scan cannot be right as published. On n = 110 every share is a multiple of 1/110 = 0.909%, so the only achievable values near the reported ones are as follows. 38.2% is exactly 42/110 and 31.0% is exactly 34/110, so both of those reproduce. **54.1% and 22.4% do not**: 54.1% implies 59.5 products and 22.4% implies 24.6, and neither is a count. `[freemium share — unreliable as published; the nearest achievable values are 59/110 = 53.6% or 60/110 = 54.5%, and the underlying counts were not published, so the intended figure cannot be recovered.]` `[demo-only share — unreliable as published; nearest achievable are 24/110 = 21.8% or 25/110 = 22.7%, same reason.]`

This pack previously called the scan "the most defensible prevalence dataset in this library". **That claim is withdrawn.** A dataset whose published shares are not achievable on its own stated sample size has an unexplained rounding or denominator problem somewhere, and until the counts are published the two surviving figures should be read as the only usable ones.

## Migrating into and out of it

**Into it, from paid-only:** cheap to build, expensive to reverse. Everything you put in free is very hard to take back — see the drift warning.

**Out of it, to a hard paywall:** the RevenueCat data makes this look obvious and it is not. Before switching, **confirm your free tier is not doing structural work** — SEO, virality, supply-side liquidity, network effects. If it is, you are in `free-core.md` and removing free removes acquisition. Then test the hard gate **on new traffic only**, and measure to **D60 revenue per acquired user**, not to signup: the freemium funnel will look better on every early metric.

**Tightening an existing free tier** is the most dangerous routine change in this model. Grandfather the existing free base at the old limit and apply the new limit to new signups only; the alternative is a public reversal. Compute break-even churn first where the change touches payers: `break-even churn = 1 − (P_old / P_new)` (L16 Check 12).

## Interactions

**Composes with:** `subscription.md` and `hybrid.md` (freemium is a free rung bolted to one of those ladders), `credits.md` (a small free credit grant is the standard taster — Figma Starter's "150 AI credits/day, up to 500 AI credits/mo", observed 2026-08-12).

**Excludes:** `hard-paywall.md` by definition — they are the two answers to the same question. `free-core.md` is not an alternative model so much as a different *purpose* for the same free rung, and confusing the two is the most common structural error in this territory.

**Pattern layers that matter most:** `03-tier-architecture` (free-tier design and the fence taxonomy live there), `11-expansion-and-retention` (the upgrade trigger), `05-page-anatomy` (where the free card sits and what it is allowed to say).

## Where this model is contested

**1. The strongest evidence says freemium loses badly on revenue, and the caveat is doing a lot of work.** RevenueCat's 2026 cohort (115,000+ apps, $16B, **mobile in-app purchases only**): D35 download-to-paid **10.7% hard paywall vs 2.1% freemium** (5×); D60 revenue per install **$3.09 vs $0.38** (~8×); and — the load-bearing finding — **Year-1 payer retention 27% vs 28%, statistically indistinguishable.** The usual defence of freemium is that hard-paywall payers are lower-quality and churn faster; this data says they do not. **All of it is mobile-skewed and must not be applied to a web checkout without saying so.** The same source's YoY numbers also compare different samples (75k apps in 2025 vs 115k in 2026), so the reported fall from 12.1% → 10.7% is partly composition change.

**2. The counter-reading from a different vendor points the other way at a different funnel stage.** Adapty reports soft paywalls out-converting hard at the paywall-view stage — **4.85% vs 3.34%**, which is 4.85 ÷ 3.34 = 1.452, a **+45% lift** and not the ~50% previously stated here — while producing **21% lower LTV**. Adapty's cohort is **mobile in-app purchase**, so "paywall view" means an in-app paywall impression rather than a web pricing-page view. The funnel stage you measure decides which model "wins", which means the argument is unresolvable until you commit to a revenue endpoint before running the test.

**3. Conversion benchmarks for freemium are not settled and the good numbers are folklore-adjacent.** The 2–5% band and the 50:1 ratio circulate widely in trade guidance without an underlying dataset. The one clean *experimental* datapoint in this library — Athenic's 100→500 limit change costing 60% of conversions — comes through an aggregator citing an operator write-up that could not be reached independently.

**4. The free-tier cost problem is new and unsolved for AI products.** The canon's guardrail is "marginal cost of a free user ≈ 0". For a product with per-use inference that is simply false, and none of the classic freemium literature was written against a free tier with a real bill attached. The check in `## The arithmetic` is the honest substitute, and it is a definition rather than a benchmark — nobody has published what an acceptable free-tier COGS ratio actually is.
