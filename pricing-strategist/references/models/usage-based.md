# Usage-Based

## What the buyer is purchasing

Exactly what they used, and nothing else. There is no plan to pick, no allowance to estimate, no unused capacity to resent — the buyer turns the tap and pays for the water. The pitch is fairness, and it is genuinely fair: a light month costs little, a heavy month costs more, and nobody subsidises anybody. What the buyer discovers is that they have traded the anxiety of "am I on the right plan" for a harder one — **"what is this going to cost me next month, and can I find out before the invoice arrives."** Usage-based pricing moves the forecasting burden from you to them, and whether they can carry it is the entire fit question.

## The mechanics

- **Unit of purchase:** one unit of work — a call, a request, a minute, an image, a resolution, a kilometre.
- **Cadence:** billed in arrears per period, or drawn down from prepaid balance. There is no base fee; where a minimum commitment exists it is a floor on spend, not an entitlement.
- **What governs the amount:** realised consumption, full stop.
- **Entitlement on payment:** access is granted up front and billed behind; nothing is unlocked by paying.
- **What happens at the limit:** there is no limit unless the buyer sets one — which is why **spend caps and alerts are product features in this model, not settings**. Vercel's shape is instructive: Pro includes 10M edge requests then bills **$2 per 1M** beyond (via L16, S11), so even "pure" metering usually carries a floor.
- **Expiry and rollover:** not applicable to arrears billing. Where prepaid, you are in `credits.md` and inherit its expiry problems.

## Fits when

- **The buyer already thinks in your unit.** A developer audience that reasons in tokens, requests or GB. This is close to a hard requirement.
- **Cost variance across buyers is enormous** — orders of magnitude, not factors of two. Then any fixed price is wrong for almost everyone, and metering is the only structure that is right for anyone.
- **The unit tracks delivered value on the customer's side rather than your cost.** This is the model's best version and the canon's cleanest example: **Michelin charging fleets per kilometre driven rather than per tire.** Selling tires means a longer-lasting tire cannibalises your own revenue; charging per kilometre means a tire that lasts 20% longer earns roughly 20% more revenue — engineering quality and revenue stop fighting each other (L01 Ch. 7, "alternative metric / pay-as-you-go"; Optimizely's move to monthly unique visitors instead of seats is the software instance). **No controlled comparison of this change has been published** — the cases are selected after the fact.
- **You need margin stability above all else.** Pure usage at a fixed markup produces the same gross margin at every point of the distribution: **50% GM on the light user, the median user and the power user alike** at a 2× markup (Digital Applied stress test, 2026-06-30). No other model does that.
- **You can absorb revenue unpredictability.** Your MRR becomes a forecast of someone else's behaviour.

**Boundary against neighbouring packs.** `hybrid.md` has a base fee and an included allowance; this pack has neither. `credits.md` is prepaid usage with an abstract unit. If you are adding a base fee "for predictability", you have left this pack — say so and go there.

## Fails when

- **Your buyer is a consumer or prosumer.** They cannot forecast a bill, and an unforecastable bill is the top reported procurement complaint in this category: **78% of IT leaders reported surprise AI-related charges in the past year** (Zylo 2026 SaaS Management Index, n=218, via HubSpot — Zylo sells SaaS management software). For an individual buyer with no procurement function, the same anxiety has no institutional container at all.
- **You meter in raw tokens for a non-developer.** Tokens measure your compute, not their value. Token pricing also **publishes your markup**, because model rates are public — a sophisticated buyer prices your margin off them and negotiates it away. The category has moved the other way: vendors are increasingly pricing on UX-level units — actions, assists, conversations, generations — which abstracts tokens entirely (Flexera, 2026 — Flexera sells IT spend management).
- **Revenue predictability matters to you or to your investors.** There is no MRR floor. A quiet quarter for your customers is a quiet quarter for you, with no contractual buffer.
- **Usage does not correlate with value in the buyer's mind.** Then heavy use feels like punishment for adoption, and the model teaches your best customers to use you less. This is the mirror image of Michelin: metering the wrong thing makes your success and your customer's success diverge.
- **You have not built the controls.** Spend caps, alerts at thresholds, per-project budgets, and a usage view that updates in near real time are not nice-to-haves in this model — without them you are selling an open-ended liability.
- **Scale floor — the highest in this directory.** Pure metering requires: per-event metering infrastructure, rating, invoicing on a variable amount, dunning for failed variable charges, spend caps, alerting, a real-time usage view, and a forecasting aid on the pricing page. **Below roughly 100 customers or without a developer-shaped buyer, none of that is repaid.** At Ledgerly's ~40 customers and ~$400–$500 estimated MRR, building it would consume more engineering than the entire pricing question is worth. **The small-product answer is `hybrid.md` with a published overage rate, which delivers most of the margin protection for a fraction of the machinery.**

## The arithmetic

### The unit-economics shape

```
GM  =  (p − c) / p        ← constant at every usage level; independent of q
```

where `p` is your price per unit and `c` your cost per unit. **This is the model's defining property: there is no margin cliff.** The published default markup is **2× cost-to-serve**, producing a 50% gross margin at every volume. In the worked example that markup comes from (Digital Applied, 2026-06-30): $0.040/task cost → **$0.08/task price floor**. That $0.040 is the framework's own generic single-pass task and is **not** Ledgerly's cost-to-serve, which is $0.060 pre-lever — see `models/_TEMPLATE.md`.

2× is a *floor*, not a target — the price below which the unit is structurally unprofitable regardless of volume.

### The COGS floor method, reproduced

```
Cost per task = (input tokens  × input rate  per MTok ÷ 1,000,000)
              + (output tokens × output rate per MTok ÷ 1,000,000)
```

Worked (Digital Applied, 2026-06-30, frontier-class model at $5/MTok input, $25/MTok output):

```
input :  3,000 tokens × $5  / 1,000,000  =  $0.015
output:  1,000 tokens × $25 / 1,000,000  =  $0.025
                             cost/task   =  $0.040
2× floor                                 =  $0.080/task
```

**Measure this on real traffic, not a happy-path prompt.** Include retries, failed generations you do not charge for, evaluation and guardrail calls, embedding and retrieval calls, and any second-pass critic model. In practice the naive estimate understates true cost-to-serve by a wide margin because the visible generation is one of several calls. Take **p50 and p95** — p95 is the user who decides whether your packaging survives — and recompute quarterly, because model prices fall fast enough that a floor set twelve months ago is meaningfully wrong.

**Pull the cost levers before naming the price**, not after: prompt caching on repeated input, model routing, and batch or async execution for non-urgent work. The rates usually attached to those three — **≈90% off cached input reads, a ~5× price spread between tiers of the same model family, and ~50% off batch** — **name no vendor and carry no date.** All three trace to a single practitioner framework post (Digital Applied, 2026-06-30), and the accompanying claim of up to **70% compute cost reduction** from routing is Red Hat's, likewise undated in the record this library holds. None of the four is quoted from a provider's published price list. `[the current cached-read, intra-family and batch discounts for your own provider — unsourced here; read them off that provider's price page, which is the only authoritative place, and re-read them each quarter because they move.]` **Use the three as the order of attack, not as coefficients in a cost model.** Pricing high and cutting later is a worse sequence than pricing correctly once.

### The monitoring ratio

```
IER  =  AI Product Revenue ÷ Inference Cost
```

Use **AI product revenue specifically** — blending in total company revenue hides the problem. Published thresholds (The SaaS CFO, 2026-05-11): **AI-native** — warning below 3:1, target floor **4:1**, healthy 5:1+. **AI-infused SaaS** — warning below 5:1, floor **8:1**, healthy 10:1+. Worked: a $5M ARR company at $417k monthly AI revenue against $95k inference = **4.4:1**; after routing, caching and pricing changes inference fell to $52k = **8.0:1**. Industry context: inference consumes **~23% of AI product revenue** at scaling-stage AI B2B companies — an implied industry IER of about **4.3** (ICONIQ via SaaS Mag, 2026-05-15; sample and methodology not public), i.e. the average company sits below the healthy line.

### Worked example — Ledgerly

**Step 1 — price the unit.** Ledgerly's cost-to-serve is derived once, in `02-packaging-models` P-021 and restated in `models/_TEMPLATE.md`, at **$0.060 per receipt pre-lever and $0.0186 after the cost levers**. An earlier version of this step used $0.040, the generic single-pass figure from the same source rather than Ledgerly's own.

```
pre-lever  2× floor  =  $0.120/receipt
post-lever 2× floor  =  $0.037/receipt
```

Ledgerly's top-up in its **corrected** shape is **$5 for 50, or $0.100 per receipt** — the incumbent $4 pack sits at $0.080 and is the inversion `hybrid.md` diagnoses, so it is the corrected rate that a pure-usage price should be derived from. **$0.10/receipt is therefore the natural pure-usage price**: a top-up *is* metered usage sold in packs, and the two prices should not disagree. It clears the post-lever floor by 2.7× and sits below the pre-lever floor, which is the same finding `hybrid.md` reaches: the levers are what make this price viable, so the floor is computed after them.

**Step 2 — what pure usage does to the existing base.** The break-even volume against each current plan:

```
Solo  $9  / $0.10  =   90 receipts     ← anyone under 90 pays LESS under pure usage
Books $19 / $0.10  =  190 receipts     ← anyone under 190 pays LESS
```

A freelancer processing ~60 receipts/month pays **$6.00** instead of $9.00 — a **33% revenue cut on the median buyer.** Meanwhile a 500-receipt tax-season month bills **$50.00** instead of $19.00. The model transfers revenue from the median to the tail, which is only a win if the tail is fat. `[Ledgerly's usage distribution — unmeasured; the p50 and p95 receipts-per-customer are the two numbers that decide whether this model gains or loses revenue, and neither exists.]`

**Step 3 — seasonality, which is the disqualifier here.** Bookkeeping demand spikes at tax time and collapses afterward. Under pure usage, Ledgerly's revenue does the same — no floor, no MRR, and a cash-flow shape that a solo operator cannot plan against. Under the current subscription, the same seasonal customer pays through the quiet months for the privilege of being ready. **That "waste" is the business.**

**Step 4 — margin comparison, at the pre-lever $0.060.** These figures now reproduce `subscription.md`'s flat-price table exactly, which they did not when the two packs used different cost figures.

| Model | Light (50) | Median (200) | Power (1,000) |
|---|---|---|---|
| Flat $19 unlimited | 84.2% | 36.8% | **−215.8%** |
| **Pure usage @ $0.10** | **40.0%** | **40.0%** | **40.0%** |
| Hybrid $9 base + 100 incl. + $0.10 over | **66.7%**¹ | **36.8%**² | **39.4%**³ |

¹ revenue $9, cost $3. ² revenue $9 + 100×$0.10 = $19, cost $12. ³ revenue $9 + 900×$0.10 = $99, cost $60.

Read the two middle rows together. **Pure usage is the only row that never moves — that is its virtue.** But hybrid beats it decisively on the light user (66.7% vs 40.0%, because the $9 base collects from someone who consumed $3 of work), converges to it at the tail (39.4% vs 40.0% — the base fee's implied $0.09/receipt is fractionally below the $0.10 meter, so the two curves meet), and dips just below it at the median where the base has been fully consumed. **Hybrid dominates pure usage at the low end, ties it at the high end, and adds an MRR floor at both.** At Ledgerly's scale that trade is decisive, and it is decisive before any of the metering machinery is costed in.

**The ordering does not depend on which cost figure you use.** At the post-lever $0.0186 every cell rises — pure usage to a flat 81.4%, hybrid to 89.7% / 80.4% / 81.2% — and the same three relationships hold: hybrid wins the light user by eight points, dips a point below at the median, and converges within a point at the tail. The conclusion is robust to the cost correction; only the magnitudes moved.

**Step 5 — the recommendation.** **Do not run pure usage at Ledgerly.** Run `hybrid.md`, and use this pack for exactly one thing: **deriving the overage price from a measured cost-to-serve rather than from a competitor's page.** That is the piece of this model every product needs, whether or not it adopts the model.

## How it is presented

- **Do the multiplication for the buyer.** Show base rate, a typical monthly volume, and the resulting monthly and **annual** total. An unforecastable meter becomes a budget line the moment you annualise it. Where variance is genuinely wide, show a **range** and label it a range.
- **State the unit in the customer's noun.** "$0.02 per image" (Photoroom API, Remove Background) and "$0.10 per image" (Image Editing + GenAI) — observed 2026-08-12. Two rates, priced by operation cost, each named after the operation. That is legible; "credits" would not be.
- **Give away a real starting quantity.** Photoroom API offers "1,000 free images" in sandbox mode (observed 2026-08-12) — enough to build against, which is what a developer buyer needs before they can estimate anything.
- **Ship the spend cap and say so on the pricing page.** For a buyer who has been burned, the cap is a stronger purchase argument than the price.
- **Never charge for a failed generation, and say so.** The dominant objection to metered AI is "I paid for garbage." Auto-refund the unit on any hard failure without being asked and surface it in the meter ("1 receipt refunded — extraction failed"); add a one-click "this wasn't useful" that refunds up to a bounded number of units per cycle. The refund policy is the risk-reversal that makes a per-unit price acceptable at all, and the flag stream doubles as your best eval dataset.

## Who runs it

| Product | Structure | Observed | Teardown |
|---|---|---|---|
| OpenAI API · Anthropic API · Amazon Bedrock | Raw token metering at a marked-up rate, developer audience, no base fee | 2026 (via L10's model landscape) | — |
| Photoroom API | "$0.02" per image (Remove Background) and "$0.10" per image (GenAI editing) — priced by operation cost, not a uniform credit; "1,000 free images" sandbox | 2026-08-12 | — |
| Vercel | Pro includes 10M edge requests then **$2 per 1M**; usage metering layered under a seat price | via L16 (S11) | — |
| Zendesk | Outcome-metered: **~$1.50 per automated resolution** committed, **~$2 PAYG**; narrowed in a **May 2026** restructure to bill only *Verified* Resolutions confirmed by LLM evaluation | 2026-05 (fin.ai comparison — **Intercom sells a competing model**) | — |
| Michelin (non-software reference) | Per-kilometre driven rather than per tire — the canonical case for metering the customer's value rather than your cost | via L01 (S1); no date in source | — |

## Migrating into and out of it

**Into it, from subscription:** the hard part is that you are removing predictability from a base that bought it. Expect resistance from exactly the customers you least want to lose. The survivable version is to **offer it as an alternative rather than a replacement**, and let buyers self-select.

**Out of it, to hybrid:** easy and usually welcomed — you are adding a floor and a comfort allowance to something buyers found stressful. Set the first allowance at each customer's historical p50 so nobody's bill rises in month one.

**Rate changes** are the one reprice that is genuinely simple here: no allowance to renegotiate, no grandfather tiers, one number in one place. Announce a cycle ahead anyway and publish a dated changelog — and if the rate rose because model costs rose, say that explicitly. Customers accept cost pass-through far better than an unexplained increase.

**The deflation problem is specific to this model and unresolved.** If inference cost falls ~10× per year for equivalent capability (a16z's 2024 "LLMflation" analysis, via L10), a price set at a 2× markup drifts to a 10× markup within a year. **Nobody has published a norm for how much of that to pass through**, and the first mover to pass it through aggressively could reset the category's price points. Set a quarterly review that recomputes cost-to-serve and decides deliberately.

## Interactions

**Composes with:** `hybrid.md` (usage is the tail of it — this is by far the most common live composition), `credits.md` (prepaid usage with an abstract unit), `free-core.md` (free product, metered API for professionals inside it — the Photoroom shape), `subscription.md` (a seat price with metered consumption layered under it — the Vercel shape).

**Excludes:** nothing structurally, but it is incompatible with a buyer who cannot forecast, which in practice excludes most consumer and prosumer segments.

**Pattern layers that matter most:** `01-value-metric` (getting the unit wrong is fatal here in a way it is not elsewhere, because there is nothing else on the invoice), `04-price-points` (the COGS floor method lives here), `07-risk-reversal` (spend caps and no-charge-on-failure), `09-trust-and-proof` (the real-time meter).

## Where this model is contested

**1. Buyers do not want it, and the evidence for that is stronger than the evidence for it.** 78% of IT leaders reporting surprise AI charges is the buyer-side verdict on open-ended metering, and HubSpot's own buyer guide — from a company that sells credit packs — advises buyers to set limits and pause features. The whole reason hybrid adoption is climbing **+12–14 pts/yr** is that pure metering is unsellable to most buyers without a base fee wrapped around it.

**2. Metering exposes your markup, and that is a permanent structural asymmetry.** Classic SaaS buyers had no visibility into marginal cost. AI buyers can read the model vendors' public rates and reverse-engineer yours in an afternoon, then negotiate you toward infrastructure cost. Software Pricing Partners frames this as the first of six fatal flaws of credit pricing and it applies with **more** force to raw metering, not less — with credits there is at least an abstraction layer between your price and the public rate. **Metering is maximally honest and maximally exposed, and those are the same property.**

**3. "Margin-stable" is true and insufficient.** A constant 50% gross margin at every usage level is worthless if the revenue it stabilises is too small or too volatile to run a business on. The stress test that recommends hybrid does so precisely because pure usage, while never bad, is never best: **50% / 50% / 50% against hybrid's 73.3% / 42.9% / 48.7%** across light/median/power. Hybrid wins the light user decisively, which for most products is most users.

**4. The value-metric version of the model is oversold by selected cases.** Michelin, Optimizely, LinkedIn, Porsche — the canon's evidence for pricing on an alternative metric is a portfolio of successful cases assembled after the fact, with obvious survivorship exposure, published by a consultancy with a commercial interest in the diagnosis. **No controlled comparison exists.** The mechanism (align the meter with the customer's value so your quality and your revenue stop fighting) is sound reasoning; the case studies are illustration, not proof.

**5. Outcome-based metering is where this model is heading, and the definitions are actively contested.** Zendesk's **May 2026** narrowing to *Verified* Resolutions is the leading edge of a fight over attribution with no settled standard — and note that tightening the definition **mechanically reduces billable volume on existing contracts**. Outcome pricing sat at **5% adoption in mid-2025**, expected 25% by 2028 on a survey of *intentions*, and intention surveys in pricing are historically optimistic. The practical rule where you can reach it: charge for outcomes only above roughly **80% success rate**, and build the verification before you build the billing.
