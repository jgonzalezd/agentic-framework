# Hard Paywall

## What the buyer is purchasing

Entry. There is no sample, no trial run of the real thing, no "have a look around first" — the buyer decides to pay on the strength of what they were shown *before* using the product: the landing page, the onboarding, the promise. What they are purchasing is the resolution of a decision they have already emotionally made, at the exact moment they made it. The model's whole thesis is that intent is highest at first contact and decays from there, so you ask while it is high and accept that everyone who says no was never going to say yes later.

A card-required free trial is a hard paywall with a delayed charge, not a free tier: the purchase decision is still made at first contact.

## The mechanics

- **Unit of purchase:** access, bought before use.
- **Cadence:** subscription, typically with a monthly/annual choice presented at the wall; or a trial that converts.
- **What governs the amount:** the tier chosen at the wall. Keep the choice small — the modal mobile paywall shows **two** plans (distribution: 1 plan 20–40%, 2 plans 41–60%, 3+ plans 6–27%; RevenueCat 2026, 115k apps, **mobile IAP**).
- **Entitlement on payment:** everything, immediately. A hard paywall that unlocks a partial product is asking for the purchase decision twice.
- **What happens at the limit:** not applicable — the limit is the door.
- **Expiry and rollover:** not applicable.

## Fits when

- **Value is legible from the outside**, before use. A stranger can look at the promise and know whether they want it. The vault's Build engine states the condition as a hard gate: *"Never hard-paywall a product whose value a stranger cannot see from the outside"* (`Build/Plays/Hard Paywall with Superwall.md`).
- **The purchase is impulsive rather than considered.** Consumer, low ticket, emotional. The same play's `works-when`: "iOS consumer app. Impulse purchase. Value legible from the outside (before use). Emotional onboarding precedes it."
- **An onboarding precedes it that earns the ask.** A hard paywall without a priming onboarding converts badly — the onboarding is what earns the ask. Apps triggering the paywall after a measurable **value moment** saw **2.1× higher trial-start rates** than immediate hard paywalls (Adapty 2026, 16k apps). **The cohort is mobile in-app purchase and the metric is a store-managed trial start**, so the multiple is evidence about paywall *placement* in an app onboarding, not a measured web result. Read the direction; do not carry the 2.1× onto a web checkout as a forecast.
- **Your free tier is not doing structural work.** If free produces SEO, virality, network effects or supply-side liquidity, this model is forbidden — see `free-core.md`.
- **Per-use COGS is material.** A hard paywall means every user who costs you money is paying you money, which is the cleanest possible answer to the free-tier cost problem.

**Boundary against neighbouring packs.** `freemium.md` defers the decision; `free-core.md` never asks for it on the core; this pack asks immediately and accepts the loss of everyone who declines.

## Fails when

- **The product is free-core.** Stated as a refusal, not a trade-off. Gating the core stops new search rankings, links and invites forming immediately, while the existing stock decays over quarters — so the conversion win lands inside the test window and the traffic collapse lands outside it. See `free-core.md`; the vault's own play names MetronomeOnline in its `fails-when` for exactly this reason.
- **The purchase is considered rather than impulsive**, or the buyer is B2B. Then the wall arrives before the evidence the buyer needs, and there is no mechanism to supply that evidence later. The Build engine's contested-calls table routes these to a risk-free offer instead.
- **The value only becomes visible after use.** A tool whose quality is invisible until you try it cannot be sold at the door, and no amount of onboarding copy substitutes for the experience.
- **You have no traffic.** The model converts a fixed pool of intent more efficiently; it does not create intent. At low traffic the effect is a smaller number of a smaller number.
- **You ignore the review externality.** Hard paywalls generate angry reviews, and reviews feed app-store discovery — the play flags this explicitly and instructs watching refund and 1-star rates alongside conversion. **The trade is real and it is not visible in a conversion metric.**
- **Scale floor:** the binding constraint is not customer count but **statistical power**. Testing hard against soft needs enough weekly conversions to detect a difference; at Ledgerly's ~40 paying customers and ~2,000 monthly visitors, a test would take longer than a quarter to reach power on any realistic MDE, so the decision has to be made from priors and instrumented rather than tested. Do not propose a test the product cannot run.

## The arithmetic

### The comparison, and the metric that decides it

```
decision metric  =  revenue per acquired user over a fixed window (D60, or Year-1 realized LTV)
                    NOT signup rate, NOT paywall-view conversion
```

This matters because the two models win at different funnel stages. **The freemium funnel looks better on every early metric**, and Adapty's cut shows soft paywalls out-converting hard at the paywall-view stage — **4.85% vs 3.34%**, which is 4.85 ÷ 3.34 = 1.452, a **+45% lift** rather than the ~50% this file previously stated — while producing **21% lower LTV**. Adapty's cohort is **mobile in-app purchase**, so both rates describe an app paywall view rather than a web pricing page. Commit to the revenue endpoint before running anything.

### The benchmark set — and its cohort warning

All figures below: **RevenueCat 2026 cohort, 115,000+ apps, $16B revenue, 1B transactions, medians across apps, iOS + Google Play in-app purchases.** They are **mobile-skewed and must never be applied to a web checkout without saying so** — a web visitor is a far weaker intent signal than an app install, and "download" has no web equivalent.

| Metric | Hard paywall | Freemium | Ratio |
|---|---|---|---|
| Download→paid, D35 | **10.7%** | **2.1%** | 5× |
| Revenue per install, D60 | **$3.09** | **$0.38** | ~8× |
| Revenue per install, D14 | $2.32 | $0.27 | ~8.6× |
| **Year-1 payer retention** | **27%** | **28%** | **~1.0 — no meaningful difference** |

**The retention parity is the load-bearing finding.** The standard objection to hard paywalls is that they buy conversion with worse cohort quality — payers who were pushed rather than pulled, who churn. This data says the payers a hard paywall produces retain at the same rate as freemium payers, so the 5× is not paid for in churn.

**There is no top-decile benchmark in this pack, and the numbers that used to sit here have been demoted.** A "38.7% / ~40% top-decile conversion" pair previously appeared at this point in the file; it is now in `## Folklore and unverified claims` below with the reasoning. Nothing in this library supports a top-decile target for this model, and the median figures in the table above are the only conversion numbers the pack will stand behind.

Two integrity notes: hard-paywall conversion **fell 12.1% → 10.7%** YoY while freemium stayed flat (2.18% → 2.1%), and the two years compare **different samples** (75k apps/$10B in 2025 vs 115k/$16B in 2026), so part of that fall is composition change from 40,000 newly added apps skewed toward recent launches.

### Worked example — Ledgerly

Ledgerly is a web app: ~2,000 monthly visitors, ~40 paying customers, free tier at 5 receipts/month.

**Step 1 — apply the ratio, then discount it honestly.**

```
observed:                 40 payers / 2,000 visitors  =  2.0% visitor→paid
naive hard-paywall prior: 2.0% × 5  =  10.0%  →  200 payers/month
```

**Do not use that number.** The 5× ratio is measured on app-store *downloads*, and a download is a far stronger intent signal than a web visit — the person already searched a store, read a listing and installed something. Ledgerly's 2,000 visitors include bounces from unrelated queries. The honest statement is directional: **a hard gate would raise conversion among visitors with real intent and lose all of the low-intent tail**, magnitude unknown for web. `[web-cohort hard-paywall lift — no source in this library; the RevenueCat cohort is mobile IAP only. Obtain by testing on new traffic, not by transferring the ratio.]`

**Step 2 — the revenue comparison, computed properly.** At Solo's $9/mo, the decision reduces to:

```
hard paywall wins  ⟺  visitors × p_hard × ARPU_hard  >  visitors × p_free × ARPU_free
```

Ledgerly cannot fill in `p_hard`. What it *can* compute is the break-even lift required:

```
required lift = p_hard / p_free  >  1  (before accounting for the free tier's own costs)
```

and then note that the free tier is currently **cheap**. Ledgerly's cost-to-serve is **$0.060 per receipt pre-lever and $0.0186 post-lever**, derived in `02-packaging-models` P-021 and restated in `models/_TEMPLATE.md`; an earlier version of this passage used $0.040, which is the generic single-pass figure from the same source rather than Ledgerly's own, and every number in this paragraph moved when that was corrected.

```
pre-lever :  5 × $0.060  = $0.30/month per fully-active free user
             $0.30 / 0.02 = $15.00 of free-tier inference per acquired customer
post-lever:  5 × $0.0186 = $0.093/month  →  $4.65 per acquired customer
```

**When the free tier costs $15 per acquired customer against a $9/mo price, the cost argument for a hard paywall is weak**, and after the levers it is weaker still at $4.65. Read the payback on gross profit rather than on revenue, though, because that is the honest denominator: a Solo customer at full utilisation costs $6.00/month pre-lever, leaving $3.00 of gross profit, so $15.00 is a **five-month** payback rather than the 1.7 months the revenue figure suggests. The cost argument becomes strong the moment the free allowance rises: at 25 free receipts the free tier costs $1.50/month, or **$75.00 per acquired customer**, which is 25 months of pre-lever Solo gross profit, and gating starts to pay for itself on COGS alone.

**Step 3 — the qualitative gate, which decides it.** Run the Build engine's condition: *can a stranger see the value from the outside?* Ledgerly's promise — photograph a receipt, get a categorised expense entry — **is** legible from a screenshot and a five-second demo video. That argues for the model. Against it: bookkeeping is a considered purchase with a trust component (this software touches tax records), and the buyer's real question is "does it get *my* messy receipts right", which only use answers. **The two conditions point in opposite directions, which is exactly the case where a hard paywall should not be shipped blind.** The intermediate that resolves it is a value-moment paywall: let the user process one real receipt of their own, then gate. The 2.1× trial-start finding is measured on precisely this placement — **but it is measured on mobile in-app purchases, and Ledgerly is a web product**, so the finding motivates the placement rather than predicting its size here. That crossing is stated deliberately, because this is the point in the pack where a mobile figure is doing the most work on a web decision. `[the same placement effect on web — no source in this library; obtain it by instrumenting first-receipt→paid on Ledgerly's own traffic, which is the third of the four events Step 4 asks for.]`

**Step 4 — the instrumentation this decision requires before it can be made at all.** Ledgerly is COLD at the point of sale. Minimum set: visitor→signup, signup→first receipt processed, first-receipt→paid, and D60 revenue per acquired visitor. Without the middle two, a hard-paywall decision is a coin flip with a citation attached.

## How it is presented

- **The wall arrives after the priming, not before it.** The onboarding is what earns the ask; the paywall is the ask.
- **Two plans, not four.** The modal paywall shows two, and Adapty's experiment win-rates for LTV uplift rank **trial structure 59.6%, plan duration 58.7%, number of plans 57.1%, localization 62.3%** — all above **price changes 45.5%** and far above **visual/copy-only 34.6%** (105,000 paywalls, 2026). The structure of the offer moves more than the number on it, and much more than the design of it.
- **Trial length: longer converts better and the market is going the other way.** Trial-to-paid runs **42.5% for 17–32-day trials vs 37.4% (5–9 days) vs 25.5% (≤4 days)** — 42.5 ÷ 25.5 = 1.667, so a **+66.7% lift** long-vs-short — yet the share of apps using ≤4-day trials *rose* **42.1% → 46.5%** YoY (RevenueCat 2026, mobile IAP, card-on-file trials). If you ship a card-required trial, ship a long one. **This is a store-managed trial on a mobile in-app purchase**, where the platform holds the card and the cancellation flow; a web trial you run yourself is a different mechanism and the lift does not transfer without testing.
- **Say the price and the renewal terms at the wall, in plain language.** A hard paywall that obscures the recurrence is the negative-option pattern, and it has legal exposure — JustAnswer advertised "as little as $1 or $5" while charging "$28–$125" monthly, and is defending two ROSCA counts filed **2026-01-13** (L14, observed 2026-08-12). Whatever the conversion argument, this is the line the model must not cross.
- **Watch the review stream, not just the funnel.** Named in the vault play as a real cost of the model.

## Who runs it

| Product | Structure | Observed | Teardown |
|---|---|---|---|
| BetterHelp | No free tier; smallest commitment "$65 to $100 per week" `[secondary]` | 2026-08-12 | — |
| Noom | No free usable tier; shortest plan "4 months $169" — a hard gate plus a long commitment | 2026-08-12 | — |
| Rosebud · Abby · Rocky.ai | All three verified AI advice products are **subscription-only with zero one-off SKU** and no usable free product; a person who needs help once has no legitimate way to buy | 2026-08-12 | — |
| Talkspace (psychiatry) | Paid at the door: "$299" initial evaluation, no subscription required for that SKU | 2026-08-12 | — |
| Superhuman | Historically the reference invite-only paid-from-day-one product; **now ships a Free tier** (Free / Pro / Business / Enterprise on `/plans`) — a datapoint that a famous hard-paywall product moved off it | 2026-08-12 | `references/teardowns/superhuman.md` |

**A note on the tooling.** Remote paywall control (Superwall wired to RevenueCat) is what makes this model testable at all — before it, every paywall test meant a full App Store review cycle, so nobody ran them. The vault's play carries a founder claim of tripling revenue on install, and then dismantles it: *"The Superwall install and the paywall redesign were not isolated variables... What's credible: remote A/B testing lets you find a better paywall much faster. What isn't: that installing an SDK triples revenue."* Cite the capability, never the multiple.

## Migrating into and out of it

**Into it, from freemium:** test on **new traffic only** and hold the existing free base — retroactively walling current free users is the change that produces the public reversal. Measure to D60 revenue per acquired user. Expect every early metric to look worse.

**Out of it, to freemium or free-core:** cheap and generally safe. You are giving something away, and giving away rarely triggers backlash. The cost is the free tier's COGS and the risk that the free tier cannibalises paid — run `freemium.md`'s unit-economics check before, not after.

**Repricing inside it** is straightforward because there is no allowance to renegotiate. Compute break-even churn first: `1 − (P_old / P_new)` — a $20 → $30 move can lose **33.3%** of the affected cohort and stay flat.

## Interactions

**Composes with:** `subscription.md` (what sits behind the wall), `one-off.md` (a hard-paywalled product can sell a single-purchase SKU at the door — Talkspace's "$299" psychiatry evaluation is exactly this), `hybrid.md` (the wall gates entry; the meter governs volume after).

**Excludes:** `free-core.md`, categorically. Also excludes `freemium.md` by construction — they are the two answers to one question.

**Pattern layers that matter most:** `07-risk-reversal` (with no trial of the product, the guarantee is doing the work the free tier would have done), `08-urgency-and-timing` (the placement of the wall relative to the value moment is this model's biggest lever), `09-trust-and-proof` (the buyer is paying on promise alone), `05-page-anatomy`.

## Where this model is contested

**1. Every headline figure supporting it is mobile in-app-purchase data, and the transfer to web is unproven.** 10.7% vs 2.1%, $3.09 vs $0.38 — all RevenueCat 2026, iOS + Google Play, medians across 115k apps. App-store discovery, store-managed trials, one-tap payment and platform refund policies all differ from a web checkout. **This pack's central evidence does not straightforwardly apply to most products this library will be used on**, and saying so is not hedging, it is the cohort rule.

**2. The funnel stage decides the winner, which makes the comparison partly a definition.** Adapty: soft paywalls **+45%** at paywall view (4.85% vs 3.34%), −21% LTV. RevenueCat: hard paywalls 5× at D35 download-to-paid, 8× at D60 revenue per install. Both are mobile in-app purchase cohorts, and both can be true at once. Whoever picks the metric picks the answer.

**3. Definitional instability inside the primary source.** RevenueCat's own pages report Year-1 realized LTV per payer for North America as both **$26.07** and **$32**; "conversion rate" variously means download→paid at D35, download→trial at D30, trial→paid, or paywall-view→purchase, and these differ by an order of magnitude. Cross-source comparison in this territory is generally invalid.

**4. The strongest operator argument for it is also the least examined.** The position underneath the model, quoted in the vault play: *"We don't really care about the users who are not willing to pay for our product."* That is coherent for an impulse consumer app with store-driven discovery. It is false for any product where non-payers generate acquisition, and the model gives you no way to find out which one you are before you have already spent the stock. **The retention-parity finding removes the cohort-quality objection; it does not touch the distribution objection, and the distribution objection is the one that kills free-core products.**

**5. Higher price wins on revenue and loses on retention, simultaneously.** Year-1 realized LTV per payer: **$62.19 high-priced / $28.75 mid / $10.69 low** (~6× spread), while 12-month retention runs the other way — **low 36% / mid 26% / high 23%** — and D35 download-to-paid is 2.8% / 2.0% / 1.4% (RevenueCat 2026, mobile IAP). If your north star is retention or churn, a correct price increase will look like a failure. Commit to realized revenue over a fixed window before testing.

## Folklore and unverified claims

| Claim | Where it circulates | Traceable to | Verdict |
|---|---|---|---|
| "Top-decile hard-paywall conversion runs **38.7%**" | Trade posts about paywall benchmarking; carried into founder decks as the number a good paywall should hit | A SaaStr trade post. No date, no sample size, no cohort, and no statement of which funnel stage "conversion" is measured at | **UNVERIFIED — never cite as a benchmark and never set as a target.** Removed from `## The arithmetic` on 2026-08-13 |
| "~40%" top-decile paywall conversion | Repeated alongside the 38.7% figure as apparent corroboration | An agency page ("neoads") that could not be identified further. No date, no n, no cohort | **UNVERIFIED — never cite.** It is not independent corroboration of the 38.7%; it is the same claim rounded |

**Why these two are demoted rather than merely caveated.** This pack's own contested item 3 establishes that RevenueCat's "conversion rate" means at least four different things — download→paid at D35, download→trial at D30, trial→paid, and paywall-view→purchase — which differ by an order of magnitude. A top-decile figure with no stated stage therefore cannot be compared to any number in the table above, and placing it beside cited RevenueCat data lent it a credibility neither source earns. The practical harm is specific and one-directional: a founder who reads 38.7% as the target concludes a paywall converting at the *median* is broken, and the reflexive remedy is a price cut. `[a defensible top-decile figure for this model — no source in this library; it would require a distribution rather than a headline, from a named cohort at a named funnel stage.]`
