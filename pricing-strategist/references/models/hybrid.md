# Hybrid

> **Read this pack most carefully.** It is the model most likely to be recommended — hybrid adoption grew **+12–14 percentage points per year across two consecutive annual surveys** — and it is the model with the most arithmetic traps, because it is the only one where three prices (base, allowance, overage) must all agree with each other and with every other rung on the ladder.

## What the buyer is purchasing

A budget with a safety valve. The buyer pays a fixed monthly fee that covers everything they normally do, and understands that if they have an unusual month they will not be blocked — they will pay a little more. What they think they are buying is *predictability without a wall*. The base fee is the number they quote to their accountant; the allowance is the number that makes them feel unmetered; the overage is the number they hope never to see and whose existence is nonetheless the reason they trust the plan.

## The mechanics

- **Unit of purchase:** one billing period, comprising a base fee **plus** an included allowance denominated in the value metric.
- **Cadence:** monthly or annual base, with on-demand overage or top-up purchases layered on top.
- **What governs the amount:** the tier (which sets both base and allowance) plus realised usage above the allowance.
- **Entitlement on payment:** the tier's full capability set immediately, plus the allowance credited at the start of each period.
- **What happens at the limit:** this is the design decision. Three live answers — **metered overage** at a published rate (ElevenLabs, Zapier, Cursor); **self-serve top-up packs** (Midjourney's "$4/hr", Runway, Descript); or **degrade rather than block** — Midjourney's Relax lane and Cursor's "unlimited Auto mode" both convert a hard cap into a *speed or model-choice tier*, which is the single most important mechanism in this lane. A hard stop is the fourth answer and it is legitimate (Bannerbear: "It is not possible to go over your monthly image / video API credits limit", observed 2026-08-12), but it wastes your highest-intent expansion moment.
- **Expiry and rollover:** **asymmetric, and the asymmetry is the point.** Included allowance expires; purchased top-ups do not. Midjourney's exact policy: included fast GPU hours expire at the end of every billing cycle with no carryover, for monthly *and* annual subscribers alike, while purchased top-up hours at $4/hr **never expire** (eesel/appscribed, 2026, via L10). Where rollover of the *included* allowance is offered, two independent vendors converged on the same cap: **2× the monthly allowance** — ElevenLabs rolls over up to two months' worth on Creator/Pro/Scale/Business with none on Free/Starter; Gamma caps rollover at 2,000 on a 1,000/mo allowance (2026, via L10).

## Fits when

- **Usage is skewed** — which it essentially always is — **and you cannot yet charge for a verified outcome.** Outcome pricing sat at **5% adoption in mid-2025** and is only *expected* to reach 25% by 2028 (Growth Unhinged, 2025-06-04), so for most products the real choice is hybrid versus a flat price that inverts.
- **Cost-to-serve is material per unit of work.** Hybrid is the only package shape that is simultaneously acceptable at every point of the usage distribution — see the stress test below.
- **The median user should never think about the meter.** Set the allowance so roughly **80–90% of users never reach it**. **That band is an unsourced practitioner heuristic** — no study in this library derives it, and it is stated here because it is the number operators quote, not because anyone has measured it. `[the share of users who should sit under the allowance — no source; the checkable substitute is your own distribution, so set the allowance at your p80–p90 usage and the heuristic becomes a measurement.]` The principle underneath it does not depend on the band: the allowance is a comfort feature, not a revenue feature, and the overage is the margin instrument.
- **You have a nameable, countable unit.** If you need an abstraction layer over three or more incompatible features, you are in `credits.md`. If your unit is one legible noun, stay here.
- **You can afford the machinery.** A usage meter in-product, an 80% warning, a spend cap, a top-up purchase flow, dunning on a variable amount, and change control on the rate.

**Boundary against neighbouring packs.** `subscription.md` has no priced allowance. `usage-based.md` has no meaningful base. `credits.md` is a hybrid whose unit is abstract rather than named — every hybrid mechanic here applies there too, plus the exchange-rate problems.

## Fails when

- **The buyer has zero tolerance for a variable line item.** Some procurement-gated enterprises cannot approve an unbounded PO. Offer a committed-spend variant with a hard cap, or lose the deal — and note that **78% of IT leaders reported surprise AI-related charges in the past year** (Zylo 2026 SaaS Management Index, n=218, via HubSpot's buyer guide), so this objection is now the default posture, not an edge case.
- **Usage variance is genuinely low.** If the p95 user and the p50 user are within a factor of two, the overage line collects almost nothing and costs you an entire billing subsystem plus a class of support ticket. **The mechanical scale floor: if fewer than roughly 10% of your users would ever exceed the allowance, do not ship overage** — ship a hard cap and a forced upgrade, which is Bannerbear's deliberate choice and produces the simplest pricing page in its lane.
- **You ship the limit before the meter.** A limit the user can see approaching is a budget; the identical limit invisible until it fires is a betrayal. Cursor's June 2025 change removed the request counter from the UI while redefining the limits; the backlash forced a **public apology on 2025-07-04 and refunds of unexpected charges from mid-June to early July** (CloudZero/Vantage, 2026, via L10).
- **You call the overflow lane "unlimited" without publishing its number.** Perplexity's "unlimited Pro Search" had a real cap that was **cut from 600 to 200 per week in early 2026** (Finout, 2026, via L10). A stated 200/week is defensible; "unlimited" that turns out to be 200/week is the news story.
- **The overage price was never checked against the ladder.** This is the trap the next section exists for, and it is the most common failure this skill finds.
- **Operational scale floor:** below roughly 50–100 paying customers, the overage line is unlikely to earn back the meter UI, the warning emails, the spend cap, the refund-on-failure policy and the change-control process. At that scale the honest options are a hard cap with forced upgrade, or rollover as the substitute for top-ups (ElevenLabs core sells **no top-up at all** — "Unused credits roll over for up to two months", capped, with "Downgrading or cancelling forfeits unused credits", observed 2026-08-12). Rollover solves the same customer problem — lumpy usage — with **zero inversion risk** and adds a retention hook.

## The arithmetic

### The stress test — why hybrid exists at all

Same cost-to-serve of **$0.04/task**, three package designs, three user profiles (Digital Applied, 2026-06-30, via L10):

| User | Tasks/mo | Cost | Flat $30/mo | Pure usage @ $0.08 | **Hybrid: $15 base + overage** |
|---|---|---|---|---|---|
| Light | 100 | $4 | 86.7% GM | 50% GM | **73.3% GM** |
| Median | 500 | $20 | 33.3% GM | 50% GM | **42.9% GM** |
| Power | 2,500 | $100 | **−233% GM** | 50% GM | **48.7% GM** |

Hybrid is the only column acceptable at every row. Flat is the only column that goes negative. That is the whole argument, and it is arithmetic rather than preference.

### THE INVERSION TRAP — read before pricing any add-on

**An add-on priced below the plan it attaches to inverts the ladder.** The plan's allowance becomes worthless: the rational buyer purchases the *smallest* plan and lives permanently on top-ups, and every rung above the entry rung becomes unbuyable.

**The detecting inequality.** For every rung *n* with price **Pₙ** and allowance **Qₙ**, the plan rate is `rₙ = Pₙ / Qₙ`. The top-up or overage rate `r_topup` must clear **both** of these, and the binding constraint is the larger:

```
(A)  r_topup  ≥  rₙ                              for every rung n      ← the plan-rate test
(B)  r_topup  ≥  (Pₙ₊₁ − Pₙ) / (Qₙ₊₁ − Qₙ)      for every step n→n+1  ← the overage floor
```

**(B) is the overage floor and it is the one people get wrong.** The floor is the **marginal** rate of the next rung up, *not* the current plan's average rate. Below it, your own next step is dominated by your own top-up: a buyer who needs the higher rung's volume gets there more cheaply by staying put and topping up. Zapier's 750→1,500 step: ($39.00 − $19.99) / (1,500 − 750) = **$0.0253/task** — any overage below that makes the 1,500 rung unbuyable (L16 Check 3).

**(A) is necessary too, and (B) does not imply it.** A top-up can clear the marginal floor of the next step and still sit below the *entry* rung's average rate, which hands entry-tier buyers a live arbitrage. Ledgerly fails exactly this way — see below.

**The fix — the top-up premium rule.** Set **one flat top-up price at ~1.1× the per-unit price of your ENTRY tier — never your top tier.** Because in-plan unit price declines as you climb, a single flat rate pegged just above the *highest* in-plan rate (which is your cheapest, entry tier) is automatically never cheaper than any rung's marginal unit, and automatically more punitive the bigger the customer gets. Inversion becomes structurally impossible rather than managed, and upgrade pressure widens on its own without a per-tier overage table.

The observed instance, and the load-bearing datapoint in L15 — **ElevenLabs Reception AI**, observed 2026-08-12, one flat overage of **"$0.40 per credit"** across all three tiers (assumes 1 credit = 1 phone minute; the page does not state the mapping, and if credits map to chat minutes instead every figure halves — flagging, not asserting):

| Tier | Plan $/min (derived) | Flat overage | **Premium over plan** |
|---|---|---|---|
| Basic $22 / 60 min | $0.3667 | $0.40 | **+9%** |
| Plus $55 / 200 min | $0.2750 | $0.40 | **+45%** |
| Premium $99 / 500 min | $0.1980 | $0.40 | **+102%** |

One number to publish. No footnotes. No tier can invert. **The common mistake is pegging the top-up to your top tier's rate to feel generous — do that and your entry customers get an arbitrage against you.**

### The volume-discount band

The entry-to-top discount `1 − (r_top / r_entry)` should land in **20–40% for a small product selling a uniform unit**. Everything in L15's dataset selling a genuinely identical unit lands there: ElevenLabs core **17.5%** across a 200× volume range, Descript AI credits **27.8%**. Steeper curves (Runway **58.3%**, Bannerbear **69.5%**, PhotoAI **94.8%**) are only reachable because those tiers also differ in output quality, bandwidth or rollover privilege — a fence that makes the cheap tier's unit genuinely worth less. **If you want a steeper curve, build the fence first.** (All observed 2026-08-12.)

### Worked example — Ledgerly

Ledgerly carries two documented shapes, and this worked example is the derivation that connects them. The **incumbent** ladder is free 5/mo · **Solo $9 / 100** · **Books $19 / 400** · **top-up $4 / 50**, and its top-up is deliberately defective — it is the arithmetic trap this pack exists to detect. The **corrected** shape moves the top-up to **$5 / 50** and nothing else. Steps 1 to 3 diagnose the incumbent, Step 4 derives the correction, and every figure below is labelled with which shape it belongs to.

**Step 1 — per-unit table, on the incumbent ladder.**

| Rung | Price | Receipts | $/receipt |
|---|---|---|---|
| Solo | $9 | 100 | **$0.0900** |
| Books | $19 | 400 | **$0.0475** |
| Top-up, *incumbent* | $4 | 50 | **$0.0800** |

Monotonicity across plan rungs: $0.0900 > $0.0475. **Pass** (L16 Check 1).

**Step 2 — test (B), the overage floor.**

```
(P_Books − P_Solo) / (Q_Books − Q_Solo) = ($19 − $9) / (400 − 100) = $10 / 300 = $0.0333/receipt
```

Top-up at $0.0800 ≥ $0.0333. **Pass.** And the assembly check confirms it: reaching 400 receipts from Solo costs $9 + 6 packs × $4 = **$33 > $19**, so Books is not undercut (L16 Check 4).

**Step 3 — test (A), the plan-rate test. This is where it breaks.**

```
r_topup = $0.0800  <  r_Solo = $0.0900        ← INVERTED
```

The top-up buys receipts **11% cheaper than Solo's own allowance.** Watch what that does, assuming top-ups are purchasable without a subscription:

```
Free tier + 2 top-up packs  =  $8.00  for 105 receipts
Solo                        =  $9.00  for 100 receipts
```

**$8 buys more than $9 does. The Solo tier is dominated at every volume** — free + (n+2) packs costs $4n + $8 for 105 + 50n receipts, while Solo + n packs costs $9 + $4n for 100 + 50n, so at every matched rung the free path is **$1 cheaper for 5 more receipts**. Ledgerly's entire entry tier can be reconstructed more cheaply out of its own free tier and its own top-up. No copy change rescues this. (If top-ups are gated behind a paid plan, the arbitrage narrows but does not vanish: Solo's allowance is still the most expensive receipt Ledgerly sells.)

**Step 4 — the fix, via the top-up premium rule.**

```
r_topup  =  1.1 × r_entry  =  1.1 × $0.0900  =  $0.099  ≈  $0.10/receipt
→  reprice the pack: $5 for 50 receipts
```

Re-run both tests: $0.10 ≥ $0.0900 ✓ (A) and $0.10 ≥ $0.0333 ✓ (B). Re-run the free-tier arbitrage: free + 2 packs = **$10 for 105** vs Solo **$9 for 100** — Solo wins. And the premium now widens automatically with tier size, exactly as Reception AI's does:

| Rung | Plan $/receipt | Flat top-up | Premium |
|---|---|---|---|
| Solo | $0.0900 | $0.10 | **+11%** |
| Books | $0.0475 | $0.10 | **+111%** |

**Step 5 — the volume-discount check.** `1 − ($0.0475 / $0.0900)` = **47.2%** across a 4× volume range. A receipt is a receipt at every tier — a uniform unit — so this sits above the 20–40% band with no fence justifying it. Either flatten it (raise Books, or cut its allowance) or build the fence that earns it: multi-year retention on Books, an accountant-export format, priority processing. Note L15's secondary regularity that the entry rung is often deliberately *off* the curve, priced as a paid trial whose job is to make rung 2 look correct (PhotoAI Starter is 7.8× the per-unit price of the next rung, observed 2026-08-12) — that is a defensible reason to leave Solo expensive, but it must be a decision, not an accident.

**Step 6 — the COGS floor, and the collision.** Ledgerly's cost-to-serve is derived once, in `02-packaging-models` P-021 and restated in `models/_TEMPLATE.md`: **$0.060 per receipt before the cost levers, $0.0186 after them.** An earlier version of this step used $0.040 — the generic single-pass figure from the same source, not Ledgerly's own three-pass cost — and that substitution put Books at a positive 15.8% gross margin when its true pre-lever margin is negative. **The correction reverses the sign, so the conclusion below is not the one this step used to reach.** Applying the 2× floor rule (2× cost-to-serve → 50% GM at every usage level):

```
pre-lever floor = 2 × $0.060 = $0.120 per receipt

Solo   $0.0900/receipt  →  BELOW the floor.  At full 100: cost $6.00,  revenue $9.00,  GM =  33.3%
Books  $0.0475/receipt  →  BELOW the floor.  At full 400: cost $24.00, revenue $19.00, GM = −26.3%
Top-up $0.1000/receipt  →  BELOW the floor.  Per pack:    cost $3.00,  revenue $5.00,  GM =  40.0%
```

**At the pre-lever cost, not one rung on Ledgerly's ladder clears the floor, and Books is negative outright.** That is a stronger statement than "Books is close to underwater", and it is the correct one. Holding the pre-lever floor would require Books at **$48 / 400** or **$19 / ~158** receipts — and $19/158 is $0.120/receipt against Solo's $0.090, which is not a volume discount at all but an inversion, Books charging more per receipt than the tier beneath it. **At a $0.060 cost-to-serve there is no ladder that runs a $9 entry price, a positive volume discount and a 2× COGS floor simultaneously. The pre-lever cost does not permit this product.**

Which is why the sequence matters. P-021's answer is to attack the cost before the price: prompt caching on the fixed extraction prompt, routing the easy majority to a cheaper model, and batching anything not watched in real time. **The discount rates attached to those three levers — ≈90% on cached input reads, ~5× price spread within a model family, ~50% on batch — carry no vendor and no date.** They trace to a single practitioner framework post (Digital Applied, 2026-06-30), plus a Red Hat claim of up to 70% compute reduction from routing, and none of the three is quoted from a named provider's published price list. `[the actual cached-read, intra-family and batch discounts for the model you intend to run — unsourced here; read them off your provider's own current price list, which is the only place they are authoritative, and note that they move.]` **Treat them as the order in which to attack cost, not as multipliers to compute a price from.**

Applied on the stated assumptions, those levers take Ledgerly from $0.060 to $0.0186 per receipt (the derivation is P-021's, not this pack's), the 2× floor falls to **$0.037**, and the ladder clears at every rung:

```
Solo   $0.0900  =  4.8× cost   →  at full 100: cost $1.86, revenue $9.00,  GM = 79.3%
Books  $0.0475  =  2.6× cost   →  at full 400: cost $7.44, revenue $19.00, GM = 60.8%
Top-up $0.1000  =  5.4× cost   →  per pack:    cost $0.93, revenue $5.00,  GM = 81.4%
```

**Compute the floor after the levers, not before** — pricing high and cutting later is a worse sequence than pricing correctly once. And note what the two blocks together actually say: **the cost levers, not a price change, are what make this ladder viable at all.** That is a packaging finding and it belongs at the top of any deliverable, above the tier table.

## How it is presented

Each plan card must carry **four** numbers, and the buyer must not have to open a second page to combine them: base price, included allowance in named units, overage price per named unit, and a typical total for that plan's median user.

- **Translate the allowance into whole outputs.** Gamma publishes its burn table (~50 credits per 10-slide deck, 2–40 per image, 5–10 per refinement) and then adds the sentence that actually gates the purchase: **1,000 credits ≈ 15–20 decks** (2026, via L10). The table answers "what does this cost"; the sentence answers "is this enough for me".
- **State the overage price in dollars per named unit, next to the allowance.** Not in the FAQ.
- **State the expiry asymmetry in one sentence**, so it reads as fairness rather than as a trap discovered later — included units expire at the end of the cycle, purchased units never do.
- **Show the meter in the product, not in billing settings.** "7 of 20 used — resets March 14", where the work is initiated. Warn at 80% with the exact number and date, and offer the top-up *inside that warning* — the highest-intent expansion moment you will ever get, and the same moment that otherwise produces a support ticket. Claude's `/usage` is the positive reference; Cursor's removed counter is the cautionary one.
- **Ship a spend cap and say so on the pricing page.** For a buyer who has been burned — and 78% of IT leaders have — the cap is a stronger purchase argument than the price.

Three live alternatives to publishing the rate, all observed 2026-08-12: **keep it off the public page** (Descript "Top up media minutes", Runway "purchase additional credits from the Plans & Billing page" — the ladder stays comparison-shoppable and the overage conversation happens at maximum willingness to pay; L15 could not capture either rate, so this genuinely works as concealment); **refuse to sell top-ups at all** (Bannerbear); **set a minimum top-up size above your entry plan's full allowance** (Runway: minimum 1,000 credits against a 625-credit Standard allowance, so a small customer literally cannot make a small top-up).

## Who runs it

| Product | Structure | Observed | Teardown |
|---|---|---|---|
| ElevenLabs Reception AI | $22/60 min · $55/200 · $99/500, one flat overage "$0.40 per credit" across all tiers | 2026-08-12 | — |
| Midjourney | $10/3.3 · $30/15 · $60/30 · $120/60 fast GPU hours, annual −20%; "$4/hr" top-up; included hours expire, purchased never do; unmetered Relax lane on Standard+ | 2026 (eesel/appscribed, secondary) | — |
| Cursor | Subscription whose fee *is* a credit pool denominated in API dollars (Pro $20, Pro+ $60, Ultra $200 since June 2025); metered overage at model rates; "unlimited Auto mode" as the degraded lane | 2026 (CloudZero/Vantage, both vendor-interested) | — |
| Zapier | Task allowance ladder (~20 steps inside Pro); overage at **2.5× base rate monthly, 1.25× annual** — the multiplier doubles as a term fence | via L16 (S10) | — |
| Intercom Fin for Platforms | $49/mo including 50 resolutions, then $0.99 each — hybrid wrapping an outcome unit | 2026 (fin.ai; **Intercom sells this model**) | — |
| Framer | Per-site subscription with three stacked meters — credits, editors, bandwidth add-ons | 2026-08-12 | `references/teardowns/framer.md` |

## Migrating into and out of it

**Into it, from flat subscription:** the survivable version is **additive**. Keep the existing price as the base and add the allowance and overage as a second dimension — Figma, HubSpot, Adobe and Cursor all did exactly this in 2025, adding consumption meters "without killing the seats" (PricingSaaS, 2026-01-07). Set the first allowance generously enough that no existing customer sees an overage line in month one; you are installing the meter, not collecting on it yet.

**Into it, from usage-based:** easy and welcome — you are handing buyers predictability they were asking for.

**Out of it, to a hard cap:** cheap, and legitimate at small scale. Announce it as a simplification and grandfather anyone currently paying overage.

**Repricing the allowance is the expensive part, and it is where trust dies.** Treat the allowance and the burn rate as a published price list under change control: announce at least one billing cycle ahead, grandfather existing subscribers for a stated period, publish a dated changelog. If a rate must rise because model costs rose, **say that explicitly** — customers accept cost pass-through far better than an unexplained shrinking allowance. Never let the first signal of a change be a user noticing they ran out early. Salesforce Agentforce had to abandon $2/conversation for flexible credits after customer backlash and is now reported to run three concurrent pricing models (2025–2026, via L10) — the cost of getting this wrong is not a refund, it is a permanent structural mess.

## Interactions

**Composes with:** `subscription.md` (the base fee is one), `credits.md` (a hybrid with an abstract unit — every mechanic here transfers), `usage-based.md` (the overage tail is one), `freemium.md` (the free rung is a zero-base hybrid with a tiny allowance and no overage — and note that offering top-ups on the free rung is exactly how Ledgerly's inversion arises), `one-off.md` (the top-up pack *is* a one-off SKU, and it must clear the same inequalities).

**Excludes:** nothing outright. Hybrid is the default composition target, which is why its arithmetic must be checked hardest.

**Pattern layers that matter most:** `03-tier-architecture` (the ladder checks are the gate), `01-value-metric` (the allowance is meaningless if the unit is wrong), `11-expansion-and-retention` (expiry, rollover, the 80% warning, the top-up moment).

## Where this model is contested

**1. The headline adoption number does not replicate, and this pack must not repeat it as fact.** The primary is Growth Unhinged's *State of B2B Monetization*. The **2025** edition (published 2025-06-04, fielded Apr–May 2025, n=240+) reports hybrid moving **27% → 41%**. The **2026** edition by the same author (published 2026-05-13, fielded Apr–May 2026, n=230) reports hybrid at **37%, up from 25% twelve months prior** — i.e. it says hybrid was 25% in mid-2025 when the mid-2025 edition said 41%. **The two editions are mutually inconsistent on level, because the self-selected sample turns over each year. Only the slope replicates: roughly +12 to +14 percentage points per year, two years running. Cite the slope. Never cite "41%" as a market fact.** Both editions are self-reported online surveys of a newsletter audience that skews pricing-engaged, run by an author who sells pricing advisory.

**2. Hybrid buys margin stability with billing complexity, and complexity has a body count.** Every mechanic in this pack — allowance, overage, expiry, rollover, top-up, spend cap, refund-on-failure — is a rule the buyer must hold in their head to forecast a bill. Software Pricing Partners' critique of credit pricing applies with reduced force to a *named-unit* hybrid but does not vanish: prepayment decouples spend from consumption, the customer feels nothing while burning the balance and meets the full number at renewal, which is a *worse* emotional shape than metered billing rather than a better one (SPP, 2026-04-16 — and SPP sells the consulting that competes with the "just ship a meter" default).

**3. "It hedges the power tail" assumes you can see the tail.** Hybrid only protects margin if the overage rate actually exceeds your cost-to-serve, and most operators set the overage by copying a competitor rather than from a measured cost. Industry-wide, **inference consumes ~23% of AI product revenue** at scaling-stage AI B2B companies — an implied Inference Efficiency Ratio of about **4.3** against an AI-native healthy floor of 4:1 (ICONIQ Growth *2026 State of AI Bi-Annual Snapshot* via SaaS Mag, 2026-05-15; sample and methodology not public). The average company running this model is sitting on the warning line, which suggests the model is being adopted faster than its arithmetic is being done.

**4. The degraded-lane mechanism may not survive contact with agentic usage.** Relax lanes and Auto modes work because the cheap path's marginal cost approaches zero on spare capacity. That assumption held for interactive human use. It has not been tested against automated loops, and the defensive reactions so far — Anthropic's April 2026 ToS fence, Cursor's repricings, Replit's — are reactions rather than designs. **The economics of "one user, thousands of automated calls" are still being discovered in production, expensively.**
