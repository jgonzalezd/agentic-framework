# Experimentation methods — the arithmetic

**Loaded at:** Phase 8 (measurement), alongside `patterns/12-experimentation.md`. Also consulted at **Phase 2**, because the sample-size arithmetic below is what decides whether the COLD/HOT declaration is honest.

This file is operational. `patterns/12-experimentation.md` owns the *patterns* — what the published record says and how much of it to believe. This file owns the *runnable arithmetic*: the sample-size calculation, what it returns at a real product's traffic, and what to do with the answer when the answer is "you cannot test this."

It exists because the entire published experimentation literature is written by and for organisations with traffic. **No study of low-traffic pricing decisions was located in any research lane.** Everything below the first section is standard two-proportion power calculation applied to an unstudied situation. Treat it as sound statistics, not as evidence.

Worked examples use the shared fictional product: **Ledgerly**, a web app that turns a photo of a receipt into a categorised expense entry — free 5 receipts/month · Solo $9/mo for 100 · Books $19/mo for 400 · top-up $5 for 50 · **~2,000 monthly visitors · ~40 paying customers**, of whom 30 pay monthly and 10 annually, giving **~31 charge events a month, about one a day**. Provenance flags follow `benchmarks.md`: `[derived]` means computed here with the arithmetic shown; `[assumed]` means a fixture input that is not a measurement.

Three rules govern this file.

1. **Compute before you propose.** Never write a test into a deliverable before running the sample-size calculation for it. Phase 8's instruction — *if the arithmetic says a test would take longer than a quarter to reach power, say so and propose a different way to learn* — is enforced here, and it is enforced by number, not by feel.
2. **The answer is usually no.** At the traffic most products have, most pricing questions are not answerable by experiment within any planning horizon. Sections 2–4 are the substitute, and they are the majority of this file by design.
3. **A proxy metric is a loan, not income.** Section 5 prices the loan. Take it knowingly or not at all.

---

## Sample size and MDE, worked concretely

### The formula

For a two-arm test on a binary outcome (visitor → paid, visitor → checkout), the sample **per arm** is

```
        ( z₁₋α/₂ · √(2·p̄·(1−p̄))  +  z₁₋β · √(p₁(1−p₁) + p₂(1−p₂)) )²
n  =    ─────────────────────────────────────────────────────────────
                              (p₂ − p₁)²
```

where `p₁` is the baseline rate, `p₂` the rate you want to be able to detect, `p̄ = (p₁+p₂)/2`, and for the conventional settings — **α = 0.05 two-sided, 80% power** — `z₁₋α/₂ = 1.95996` and `z₁₋β = 0.84162`.

A founder who wants to redo this in their head can use the rule of thumb `n ≈ 16·p̄(1−p̄) / (p₂−p₁)²`, which lands within about 2% of the exact figure at these rates. Every number in this section is the exact formula.

Two things to notice before touching Ledgerly's numbers. **`n` scales with the inverse square of the effect**: halving the effect you want to detect quadruples the sample. And **`n` scales roughly with `1/p₁`**: a rare outcome is far more expensive to measure than a common one. Those two facts, together, are the whole reason a small product cannot test its price.

### Step 1 — define one rate with a numerator, a denominator and a window

Ledgerly's headline figures are ~2,000 monthly visitors and ~40 paying customers. **Those two numbers do not form a conversion rate.** 40 is a stock accumulated over months; 2,000 is a monthly flow. Dividing them produces "2%", which is not a rate of anything and cannot be tested against. This is the first job of any measurement plan and it is skipped almost universally — see P-295.

The rate that can be tested:

> **Ledgerly baseline:** new paid subscriptions started ÷ unique visitors, within the calendar month. **`p₁ = 0.5%`** — 10 new paying customers per 2,000 visitors. `[assumed]` — this is a fixture input consistent with ~40 customers accumulated over roughly four months, not a measured figure. In a real run this cell is a bracketed Unknown from Phase 2 until instrumented.

### Step 2 — required sample per arm, by effect size

At `p₁ = 0.005`. Traffic splits 50/50, so each arm receives **1,000 visitors per month**.

| Effect to detect | `p₂` | Required n per arm | Months at 1,000/arm/mo | Verdict |
|---|---|---|---|---|
| +10% relative | 0.55% | **327,916** | **327.9 months (27.3 years)** | impossible |
| +20% relative | 0.60% | **85,861** | **85.9 months (7.2 years)** | impossible |
| +30% relative | 0.65% | **39,884** | **39.9 months (3.3 years)** | impossible |
| +50% relative | 0.75% | **15,598** | **15.6 months** | impossible within a horizon |
| +100% relative | 1.00% | **4,673** | **4.7 months** | over a quarter |
| +130% relative | 1.15% | **3,039** | **3.0 months** | the quarter boundary |
| +200% relative | 1.50% | **1,553** | **1.6 months** | runnable, and no page change delivers it |

All rows `[derived]` — exact two-proportion formula, α = 0.05 two-sided, 80% power, computed against the `[assumed]` 0.5% baseline.

### Step 3 — read it the other way: MDE at the sample you have

The founder's real question is not "how long for a +10%" but "what can I detect by a date."

| Window | Total visitors | Per arm | Minimum detectable effect on paid conversion |
|---|---|---|---|
| 1 month | 2,000 | 1,000 | **+270%** relative `[derived]` |
| 1 quarter | 6,000 | 3,000 | **+130%** relative `[derived]` |
| 6 months | 12,000 | 6,000 | **+86%** relative `[derived]` |
| **1 full year, all traffic, one test** | 24,000 | 12,000 | **+58%** relative `[derived]` |

The last row is the one to quote. **Ledgerly can spend an entire year running a single A/B test on its price and emerge able to detect only a change that nearly doubles conversion** — and the test would end with roughly 60 conversions in control against 95 in treatment. Nothing a pricing page does moves conversion by 58%.

### Step 4 — the traffic that would be required instead

Inverting the same arithmetic gives the multiple of Ledgerly's traffic needed to answer each question inside one quarter.

| Question | Monthly visitors required | Multiple of Ledgerly's 2,000 |
|---|---|---|
| Detect +10% on paid conversion in a quarter | **218,611** | **109×** `[derived]` |
| Detect +20% on paid conversion in a quarter | **57,241** | **29×** `[derived]` |
| Detect +50% on paid conversion in a quarter | **10,399** | **5.2×** `[derived]` |

This is the number to put in front of anyone asking why the pricing page is not being A/B tested.

---

## The low-traffic reality check

### What is not detectable, and by when

At 2,000 monthly visitors and a 0.5% paid conversion rate, **every effect size that pricing changes actually produce is undetectable.** Calibrate against the published record, all of which sits far below Ledgerly's +130% quarterly MDE:

- Paltalk's winning subscription-page layout: **+6.74% purchases** over **53 days of all incoming traffic at a 50/50 split** (sample not published). At Ledgerly that effect moves 10 monthly conversions to 10.7 — detecting it would require **710,703 visitors per arm, about 711 months (59 years) at current traffic**. `[derived]`
- Menufy's four sensible checkout improvements: a "highly significant" **+1% sales**. Undetectable at any traffic Ledgerly will ever have.
- GoodUI's grouped-change wins — Examine.com **+28%**, Designlab **+49%**, KensingtonTours **+42%**, Bomgar **+30%**, Thomasnet **+17%**, none with a published sample size — are all below the +130% quarterly bar, and the two largest are below the +58% annual bar.
- Charm pricing, the cheapest change to test, has an effect bounded near zero by two preregistered replications (Fenneman et al., *PLOS ONE* 2022, N = 266 / 4,788 decisions; Escher et al., *Frontiers* 2026, N = 729). It is not merely undetectable at Ledgerly's scale — it is undetectable at most scales.

**The counts make it concrete.** A quarter-long test at Ledgerly's traffic ends with about **15 conversions in control and 35 in treatment** even under the +130% effect it is barely powered for. Fifty conversions is the entire evidentiary output of three months of traffic. Below that effect, the arms are 15 versus 17 and there is nothing to read.

**Revenue per visitor is worse, not better.** It is a zero-inflated, heavy-tailed variable — 99.5% zeros, then a mixture of $9, $19 and $5 top-ups — so its variance is dominated by the price mix rather than by the conversion rate, and it requires *more* sample than the binary conversion metric to reach the same power. **No published variance figure for a comparable funnel was located in any lane**, so no exact multiplier can be given here. Treat "we will measure revenue per visitor instead" as a harder test, never an easier one.

**Segment reads are worse again.** Splitting a Ledgerly result by device, channel or geography divides an already-inadequate sample and multiplies the false-positive rate. Airbnb's own arithmetic: a *dummy* experiment broken down by 100 countries should be expected to return about **5 spurious non-neutral results** by construction. Ledgerly has no segment large enough to read and every incentive to read one anyway.

### What is detectable

Ledgerly's scale supports **census, not comparison**. With ~40 paying customers the entire population can be observed directly — what it cannot do is compare two populations. That inverts which observations are cheap.

Detectable without any statistics at all:

- **Refunds.** 3 refunds against ~40 customers is a 7.5% refund rate and is visible by eye. This is the single measurement Ledgerly's scale genuinely favours.
- **Billing support contacts.** Any contact at all is countable; three about the same confusion is a finding.
- **Upgrade and top-up events.** Solo → Books upgrades and top-up purchases are countable events, and a *zero* is informative: a top-up nobody buys in a quarter is dead weight regardless of what the ladder arithmetic says about it.
- **Per-account usage against the allowance.** How many receipts each account actually processes against its 100 or 400 answers the value-metric question directly, on a population of 40, with no inference required.
- **Catastrophic breakage.** At ~31 charge events a month — roughly one a day, about seven a week — **two consecutive days with no completed payment** is already a genuine signal, and it is the scale-appropriate substitute for the payments-per-hour alarm a larger product would set. Note which number this derives from: the charge-event flow, not the 40-customer stock, and conflating the two is the error P-295 exists to prevent.

### The Poisson floor, and why before/after is not the escape hatch

A useful sanity check on any month-over-month claim. At an expected 10 conversions per month, Poisson noise alone gives a standard deviation of **√10 ≈ 3.2 conversions**. A month that goes 10 → 14 is 1.3 standard deviations — routine variance, not a result. For a single month to clear 2 SD it has to reach `10 + 2 × 3.16 =` **16.32 conversions**, and because conversions are whole numbers that means **17, a +70% jump**. Note what 16 alone would be: `(16 − 10) / 3.16 =` **1.90 SD**, a +60% jump, which does not clear the bar. Either way the operational reading is the same, and it is the reason the passage exists: before any traffic-mix change is accounted for, a month-over-month move under roughly +60% is not a finding.

Comparing a full quarter before against a full quarter after (≈30 conversions each side), the SD of the difference is **√(30+30) ≈ 7.7**, so 2 SD is **15.5 conversions** — a shift of about **+52%** `[derived]`.

That figure is worth sitting with. A pre/post comparison over six calendar months reaches roughly the same sensitivity (+52%) as a randomised test running for **15.6 months** (+50%), because pre/post uses all the traffic instead of splitting it and borrows the pre-period as its control. **The statistics are not what makes before/after inferior. The confounding is.** Traffic volume, channel mix, seasonality, product changes and the founder's own marketing effort all move between the two periods, and none of them is measured. Section 3 treats it accordingly.

### The honest one-line summary for a deliverable

> At ~2,000 monthly visitors and ~0.5% paid conversion, no A/B test on this pricing page can detect any effect a pricing page realistically produces. A full year of all traffic on a single test detects +58% or larger. Every recommendation in this run therefore ships on a prior with a falsifier attached, not on a test result.

---

## What to do instead when a test is unrunnable

Five substitutes, ordered by how much inference they support. Each entry states what it *can* establish, what it *cannot*, and the sentence form that reports it honestly. The write-up form matters as much as the method: an unrunnable test relabelled as a "learning" is how priors get laundered into evidence.

### 1. Sequential change with a recorded pre-period

**Method.** Write down the trailing 90-day figure for the primary metric *before* shipping. Ship one coherent change. Hold everything else — traffic spend, channels, product, positioning — fixed for the full post-period. Read at one full billing cycle plus the refund window, then again at 90 days.

**Supports.** Detection of *large* effects only — at Ledgerly's counts, roughly +52% or larger over quarter-versus-quarter `[derived]`. Detection of catastrophic damage, which is its real value. Confirmation that a change did not break the payment path.

**Cannot support.** Attribution of the effect to the change rather than to seasonality, traffic-mix drift, or anything else that moved. Any effect below ~50%. A forecast. Nothing shipped in the same window as a marketing push can be read at all — Wistia's packaging result is the cautionary case, reported alongside an **88% cut in ad spend** in the same period, a change large enough to produce the whole revenue effect by itself.

**Write-up form.**
> "Shipped 2026-09-01 as a sequential change, not a test. Pre-period trailing 90-day paid conversion recorded 2026-08-31 at [value]. Post-period read scheduled 2026-12-01. Concurrent changes in the window: [list, or 'none — held fixed by agreement']. This comparison cannot separate the change from seasonality and will not be reported as a lift."

**The discipline that makes it worth anything:** record the pre-period number *before* shipping. A post-hoc comparison against a figure nobody wrote down is not a comparison.

### 2. Qualitative rounds

**Method.** The interview sequence in `derivation-methods.md` — 10–25 conversations, 20 in a week as the target, ending in a commitment ask.

**Supports.** Whether the value metric tracks value the buyer recognises. Whether a fence can be named by the buyer in one sentence. Which objection actually kills the sale. The vocabulary the page should use. A willingness-to-pay *band*.

**Cannot support.** Any effect size. A conversion forecast. A price point to the dollar — every method in `derivation-methods.md` returns a band. And stated preference is not behaviour: only the commitment ask, a pre-order or a sale measures what people do.

**Write-up form.**
> "Basis: 12 interviews, Aug 2026, all with people who currently reconcile receipts manually. Finding: 9 of 12 could not state what separates Solo from Books without re-reading the page. This is a qualitative finding on n=12 and carries no effect size."

**This is the highest-value substitute at Ledgerly's scale, and it is the one Phase 3 already mandates.** A product that cannot test its price can still find out that nobody understands its fence, which is usually the larger defect.

### 3. Natural experiments

**Method.** Find a split in the world you did not create: a price change applied to new customers while existing ones are grandfathered, one acquisition channel with a materially different page, a geography with different pricing, a period when a payment method was unavailable, an outage.

**Supports.** Directional inference *only where the assignment is plausibly as-if random with respect to the outcome*. Grandfathering is the strongest available case in a pricing context, because the split is by signup date rather than by buyer type.

**Cannot support.** Anything where the split correlates with who the buyer is. A channel comparison is not a natural experiment — the channels deliver different people, and the difference you measure is the people. Geography is the same trap. The moment you cannot argue the assignment was as-if random, you have an observational comparison, and the largest datasets in this whole library are observational and cannot establish causality.

**Write-up form.**
> "Natural experiment: customers who signed up before 2026-09-01 pay $9; those after pay $12. Assignment is by signup date. Threat to validity: [the seasonality/traffic-source difference between the cohorts, named explicitly]. Directional only; no significance is claimed and none is computable at n=[count]."

### 4. Borrowing a prior from the library

**Method.** Take the direction from the strongest pattern in this library that covers the decision, apply the discount schedule in section 7, ship it, and stop.

**Supports.** Choosing a default when both options cost the same to build and no local evidence exists. Ordering a queue.

**Cannot support.** A forecast — practitioners' median absolute error on experiment outcomes is **2.7 percentage points** against effects usually smaller than that, with **56% of 1,391 guesses overestimating** (GoodUI, 2026). Nor can it settle the two questions founders most want settled. **Do not borrow a prior on plan count or price prominence:** GoodUI's own free power lines put pattern **#113 "More Or Fewer Plans" at 10.7% of its 90% cumulative power target at 2% MDE from 3 tests**, and **#114 "Less Or More Visible Prices" at 54.4% from 7 tests**. The largest meta-analytic dataset in the field has least power on exactly those two. Decide them from structure and the buyer's stated reasoning, and say that the library could not answer.

**Write-up form.**
> "Basis: prior only. Pattern P-2xx, evidence rating `medium`, discounted per `experimentation.md` § How much to discount a published A/B lift. No local evidence. Falsifier attached below."

### 5. Accepting the prior and stopping

**Method.** For any change with a published effect below about 5%, ship the version the literature mildly favours and delete it from the queue. Do not measure it, do not revisit it, do not spend a slot on it.

**Supports.** Freeing the one or two decision slots a small product has per year for the structural questions in section 8.

**Cannot support.** Anything. This is explicitly a decision to stop learning about something, and the write-up should say so rather than dressing the change as an improvement.

**Write-up form.**
> "Shipped on the prior and closed. Published effect under 5%, undetectable at this traffic within any horizon. Not instrumented, not scheduled for review. Reopened only if [the falsifier] occurs."

---

## The COLD-regime falsifier method

In a COLD regime the deliverable contains recommendations that cannot be tested. A recommendation with no falsifier is indistinguishable from an opinion and survives indefinitely, because nothing can dislodge it. Attaching one falsifying observation converts a prior into a claim with an expiry date. That is the only accountability available when there is no test to run.

**No study measures the effect of attaching falsifiers to pricing recommendations.** The argument for it is the documented forecasting record — ~64% directional accuracy across 1,391 practitioner guesses, and Microsoft's own designers picking the winning design **3 times out of 21**. Treat the method as borrowed discipline, not as a measured intervention.

### The form of a good falsifier

Five fields, all required. A falsifier missing any one of them is decoration.

1. **The prior it attacks.** Name the specific claim, not the general area. "Receipts is the right value metric" — not "the pricing is right."
2. **A countable observation, not a rate.** At 40 customers, "if conversion drops" is unobservable and "if 3 of the first 10 Books customers do X" is observable. **Wherever the customer count is small, the falsifier must be a count.**
3. **The single event or field that makes it visible.** If seeing it requires instrumentation the product does not have, that instrumentation goes into the minimum event set in `measurement.md` — and if it cannot be built, the recommendation is marked *unfalsifiable* in the deliverable rather than quietly kept.
4. **A check-after date.** A real date, chosen so the observation can plausibly have arrived by it.
5. **The action it forces.** What specifically gets reopened when the falsifier fires. A falsifier you would not act on is not a falsifier.

**Three ways falsifiers fail.** Written loosely enough that any outcome satisfies them ("if customers seem confused"). Requiring a sample the product will not reach in the window. Requiring an event the product cannot see — which is the common one, and the reason Phase 8's instrumentation set and its falsifier table have to be written together.

### Three worked examples on Ledgerly

**Falsifier 1 — the value metric.**

- **Prior:** receipts processed per month is the value metric; the 100 / 400 fence sells more of what buyers came for.
- **Falsifier:** if, among the first 20 Solo customers in their *second* full month, the median receipts processed is **below 25** — a quarter of the allowance they are paying for — then receipts is not what they are buying and the fence is arbitrary. A second, sharper form: if **3 of the first 10 Books customers** process fewer than 100 receipts in their first full month, they bought a capability rather than a quantity, and the meter is wrong.
- **Visible once:** a monthly per-account receipt count is stamped and retained. This is event #1 in the minimum instrumentation set — nothing else in Phase 3 is checkable without it.
- **Check after:** 2026-11-01.
- **Forces:** re-run Phase 3 with connected accounts, clients, or months-of-history as candidate metrics. A wrong value metric invalidates the entire ladder above it, so this falsifier outranks every page recommendation in the run.

**Falsifier 2 — the top-up pack.**

- **Prior:** the $5/50 top-up serves occasional overflow on Solo and does not displace the Books upgrade. The ladder arithmetic behind the prior: the top-up prices receipts at **$0.100 each** against Solo's **$0.090 each** `[derived]`, an 11% premium, so overflow is dearer per receipt than the plan it attaches to and the crossover sits at two packs: `$9 + 2 × $5 = $19` buys 200 receipts, which is exactly what Books charges for 400, so above 200 receipts Books is strictly the better buy.
- **Falsifier:** if, within one quarter, **more than 2 Solo customers buy 3 or more top-ups in a single month without upgrading**, they are paying `$9 + 3 × $5 = $24` for 250 receipts against Books at $19 for 400 and still not switching, which means the crossover is invisible on the page rather than absent from the ladder. The mirror-image failure is equally informative: if **zero** top-ups are purchased in a full quarter, the pack is dead weight and should be removed rather than repriced.
- **Visible once:** top-up purchases are attributed to a customer and a plan, and are queryable per month.
- **Check after:** 2026-12-01.
- **Forces:** state the crossover on the Solo card, and re-check that Books' fence is nameable in one sentence — or delete the pack. Either way the Phase 4.5 ladder check is re-run before anything on the page is touched.

**Falsifier 3 — the free tier.**

- **Prior:** 5 receipts/month is tight enough that a real user meets the ceiling inside the first month and faces the paid decision while the problem is still vivid.
- **Falsifier:** if **fewer than 4 of the next 20 free signups reach the 5-receipt ceiling at all within 30 days**, the free tier is not a fence — it is a permanent free product, and no page copy will fix that.
- **Visible once:** the ceiling-hit event is logged with a timestamp and joined to signup date. Note this is a *different* event from the receipt count in Falsifier 1: one is a total, the other is the moment of collision with the limit, and the second is the one that carries the pricing meaning.
- **Check after:** 30 days from the 20th signup after instrumentation lands.
- **Forces:** cut the free allowance, or convert free to a time-boxed full-access trial. Do not respond by adding urgency copy to the paywall; the fence is the defect.

**One falsifier per recommendation, and no recommendation without one.** Where a recommendation genuinely cannot be given one — usually because the observation needs a customer count the product will not reach — it is listed in the deliverable under *unfalsifiable* with the reason. That list is itself a finding, and it is normally short. If it is long, the recommendations are too vague.

---

## The metric-proxy ladder

When the deep metric is unpowered, the temptation is to score the test on something closer to the top of the funnel. That trade is legitimate, it is quantifiable, and it must be declared before the test starts rather than discovered after.

### The rungs, with the numbers

All figures from GoodUI's correlation study, published **2023-11-30**, plus Conversion.com's independent dataset published in the same piece. **Both are measured on e-commerce funnels, not on SaaS pricing pages** — the metrics are literally adds-to-cart, checkout visits and orders — so every rung below crosses a cohort wall the moment it is applied to a pricing page, and the label travels with the number wherever it is used.

| Rung | Correlation with the deep metric | Tests | Shared variance (R², `[derived]`) |
|---|---|---|---|
| **Checkout visits → sales** | **R = 0.6085, p ≈ 0** | **533** | ~37% |
| **All progression metrics → sales** | **R = 0.5085** | **119** | ~26% |
| **Adds-to-cart → sales** | **R = 0.4983** | **44** | ~25% |
| **Adds-to-cart → orders** (Conversion.com) | **R = 0.4349** | **~200** | ~19% |
| Plan-card clicks, CTA clicks → sales | **no published correlation located** | — | unknown |

Conversion.com's dataset also reports directional agreement rising from **35%** agnostic of significance to **66%** when filtered for significance on orders. GoodUI's stated conclusion across both: *"the closer the metric to a sale/order, the higher the correlation."*

### How much inference each rung costs

Read the R² column as the fraction of the variance in whether the deep metric moved that is explained by the proxy moving. **At the best-measured rung — checkout visits, 533 tests — roughly 37% of the variance is shared and roughly 63% is not.** At the adds-to-cart rung it is a quarter and three quarters. A proxy win is therefore not a weak version of a revenue win; it is a different observation that agrees with a revenue win somewhat more often than not.

What that buys in exchange, at Ledgerly's traffic:

| Metric | Baseline | MDE in one quarter | Inferential status |
|---|---|---|---|
| Paid conversion | 0.5% `[assumed]` | **+130%** `[derived]` | the answer |
| Pricing-page → checkout visits | 5% `[assumed]` | **+34%** `[derived]` | R = 0.6085, 533 tests — **e-commerce checkout-visits → sales, borrowed onto a SaaS pricing-page → checkout proxy** |

**About 4× more sensitive, and worth roughly 37% of the answer — with the qualification that the 37% is an e-commerce number.** GoodUI measured checkout visits against sales in a cart funnel; nothing in the harvest measures a SaaS pricing-page click against a subscription, so the 37% is the closest available estimate of the trade rather than a measurement of it, and it should be quoted with that sentence attached. That is the whole trade written out, and it is still not enough: no page change delivers +34% on checkout visits either. Climbing the ladder does not rescue Ledgerly. It rescues a product one order of magnitude larger, which is precisely who the technique is for.

For reference, the proxy's own time-to-power at Ledgerly's traffic, `p₁ = 5%`, 1,000 visitors per arm per month: **+10% → 31.2 months; +20% → 8.2 months; +34% → 3.0 months; +50% → 1.5 months** `[all derived]`.

### The standing rules

1. **Use checkout visits, never plan-card clicks.** Checkout visits is the rung measured at **R = 0.6085 across 533 tests** (e-commerce; carried across the cohort wall deliberately, and the wall is named every time the number is quoted). Plan-card clicks has **no published correlation at all** — not a low one, an absent one. Substituting it is not a smaller loan; it is an unpriced one.
2. **Never accept a pricing win measured on a plan-click.** This is the hard rule of this section and it holds regardless of how significant the click result is. Royal Discount's famous "+10.21% revenue" price-emphasis result **did not reach significance on the revenue goal**; only the upstream add-to-cart click metric (**+36.54%**) moved convincingly, and the revenue framing is the version that propagated. PriceCharting's **+620.9% clickthrough at 99.9% significance over 1 week** at a $2 price point is a click result with no sample published. Microsoft's Office Online store showed the price and lost **64% of Buy-button clicks**, and the authors' own read was that *"it is entirely possible that no more users purchased the product."* A click metric on a pricing test measures curiosity.
3. **Never let the substitution happen silently after the fact.** Declaring the deep metric primary and then reporting the proxy is the specific move that converts an honest null into a published win. If the primary metric is not powered, that goes in the test plan before launch.
4. **Watch for proxies that move opposite to revenue.** Any change that widens the top of the funnel by lowering qualification will do this. Thomasnet's registration wall produced **+1135% signups against −18% visits to company profile pages**, and the team rejected the test — GoodUI noting the baseline registration rate was "incredibly low to begin with," which is what manufactured the spectacular relative figure. Price-visibility changes are the canonical case and are governed by P-286.
5. **A proxy result re-ranks a queue. It never closes a question.** Write the conclusion in the form: *"the proxy moved +X%; at R = 0.6085 this is consistent with a revenue effect anywhere from negative to +X%, and we are not claiming the revenue effect."* Then schedule an uncontrolled revenue re-read a quarter out.

---

## Stopping rules and early stopping

### The mechanism, on the one published pricing example

Airbnb's max-price-filter test (raising the filter ceiling from **$300 to $1000**) crossed **p ≈ 0.05 with a +4% effect on day 7** and finished **null** — *"the final effect size was practically null."* Airbnb's own stated cause: *"users often take a long time to book, so the early converters have a disproportionately large influence in the beginning of the experiment."* (Airbnb Engineering, 2014.)

Two distinct things are going wrong, and both matter for pricing.

**First, the statistical one.** Watching a running test and stopping at the first crossing of p < 0.05 is a multiple-comparisons procedure. Each look is another chance for noise to cross the line, so the true false-positive rate of "peek daily, stop on significance" is far above the nominal 5%. This is generic and applies to any test.

**Second, and specific to considered purchases: the early sample is not a small random sample of the eventual sample.** In a business with purchase latency — marketplaces, SaaS trials, anything with a deliberation period — the people who convert in the first days are drawn overwhelmingly from those who were already far along in deciding when the test started: returning visitors, people who arrived intending to buy, people with short deliberation. Their purchase was substantially determined before they ever saw the variant, so the treatment effect among them can differ in both size and *sign* from the effect among the slow deciders who arrive later.

That means the day-7 number is not a noisy estimate of the effect you care about. **It is a precise-ish estimate of a different quantity** — the effect on fast deciders — which then regresses toward the true average as the slow deciders complete their journeys. Noise and bias compound: the estimate is off-target *and* the peeking procedure is selecting for the moments when noise happens to point the same way.

**Ledgerly has this property in full.** A receipt-scanning tool is a considered purchase evaluated against a manual habit, and its buyers deliberate across at least one bookkeeping cycle. Any early read on a Ledgerly pricing test is a read on the subset of buyers who had already decided.

Airbnb's companion warning belongs in the same rule: a *dummy* experiment broken down by 100 countries should be expected to return about **5 spurious non-neutral results** by construction. Unplanned subgroup reads are a second peeking problem wearing different clothes.

### The rules

1. **Compute `n` and convert it to a date before the variant is built.** Duration is an *output* of the sample-size calculation, never an input. "Two weeks is long enough" has **no methodological source** anywhere in the research lanes; it appears to have been inferred from published case-study durations, and those durations range from PriceCharting's 1 week to Paltalk's 53 days with no calculation shown by either.
2. **Do not read significance before that date.** Not once. If peeking is operationally unavoidable, adopt a **pre-registered sequential design with an alpha-spending schedule** — the legitimate exception, because it prices the peeks in advance.
3. **Run whole weeks.** A test that stops mid-week carries an unbalanced day-of-week mix in one arm. Two weeks is under two full weekly cycles and cannot absorb weekly seasonality.
4. **Run at least one full billing cycle plus the refund window** whenever the metric is subscription revenue. For Ledgerly's monthly billing that is roughly **45 days** before the first read means anything — and note what that figure is: not a stopping rule, but a *floor* underneath a test that the arithmetic in section 1 already says is unrunnable.
5. **Pre-register every subgroup you intend to read.** A subgroup finding you did not pre-register is a hypothesis for a fresh test, never a result.
6. **The one legitimate early stop is a guardrail breach.** Halting on damage — payments failing, refunds spiking, billing support contacts climbing — is a different decision from halting on a win, and the asymmetry is deliberate. Stopping early on a win inflates the false-positive rate on the very thing you are trying to learn. Stopping early on damage costs you only the test. Write both rules into the plan *before* there is any incentive to blur them.
7. **Read the result again at the revenue horizon.** Schedule a read at one billing cycle plus the refund window, and a second at 90 days. **No paywall or pricing case study in the harvest reports a 90-day revenue read or a post-launch holdout.** The one published test with a genuine long horizon — Microsoft's MSN Video design, a 2-week cohort tracked for 6 weeks — is the one that flipped from a **+2% engagement win** to a net loss on ad impressions.

### The plan line

> "Test window: 2026-09-01 to 2026-12-01 (13 whole weeks). Required n: 15,600 per variant. Significance will not be read before 2026-12-01. Guardrails checked daily: payment success rate, refund requests, billing support contacts — a breach halts the rollout regardless of the primary metric."

---

## How much to discount a published A/B lift

### The base rates that anchor everything

| Source | Base rate | Cohort |
|---|---|---|
| Microsoft (Kohavi, Crook & Longbotham, 2009) | *"only about one-third were successful"* — of well-designed, well-executed experiments aimed at a key metric | industrial experimentation programme |
| QualPro (Holland et al. 2005, via Microsoft 2009) | **150,000 business-improvement ideas over 22 years; 75% had no impact or actively hurt performance** | 22 years of tested ideas |
| Netflix (Moran 2007, via Microsoft 2009) | *"considers 90% of what they try to be wrong"* | stated internal figure |
| Quicken Loans (Hadiaris, via Microsoft 2009) | after five years of testing, correct outcome guesses *"about 33% of the time"* | practitioner self-report |
| Microsoft MSN Real Estate design contest | **3 of 21 people** picked the winning design | one documented contest |
| **GoodUI, advertised** | **92% success rate, 23% median impact across the 26 Datastories it sells for $289** | case studies a vendor chose to write up and sell |
| GoodUI, own self-audits | **67% (14 of 21)** Q1 2017; **71% across 51 tests** by January 2019 | its own pattern-driven tests |

Both the 33% and the 92% can be honest. They measure different populations: **all experiments run**, versus **experiments a vendor selected for publication and sale**. The planning base rate is 33%, or QualPro's 25%. It is never 92%.

And the denominator problem sits on top: **of ~45 published pricing and checkout case studies harvested, 2 report a sample size and 4 report a significance level** (L09 harvest, accessed Aug 2026). The two most-cited large numbers in that set — PriceCharting **+620.9%** clickthrough and Flos USA **+125%** checkout conversion — publish no sample size. You are usually being handed a numerator.

### The five compounding reasons a published lift overstates

1. **Publication selection.** VWO's public library is, as far as the harvest could determine, 100% wins across ~17 case studies; the only losses appear in a post specifically about learning from bad results. Nobody is lying — you are reading the right tail of a distribution whose body is null. The corroborating detail: the two most useful *negative* pricing results found anywhere — Groove's null on `.00` vs `.99` vs `.97` endings and Buffer's reported **~$25K MRR loss** from mobile price changes — are both on primary pages that no longer exist (`blog.groovehq.com` → Helply, 404; `data.buffer.com`, ENOTFOUND), and both are flagged `[SECONDARY — primary offline]` and unverified. The failure library is the first thing deleted in a rebrand.
2. **Early stopping.** Airbnb's price test read **+4% at p ≈ 0.05 on day 7** and finished null. Vendor case studies almost never report a stopping rule, so you cannot tell which of them stopped at the peak.
3. **Low power inflates the surviving effect.** When a test is underpowered, the only results that clear significance are the ones noise pushed far from zero — so the *published* effect is biased upward even when the effect is real. This is why the genre reports numbers like +620.9% and +125%.
4. **Novelty and primacy decay.** Short tests measure existing users reacting to *change*, not future users' steady-state preference. Ben's ~2-week run and PriceCharting's 1 week both sit inside the novelty window.
5. **Seasonality and concurrent changes.** Wistia's packaging restructure — **sales 2×, revenue +46%** — is reported alongside an **88% cut in ad spend** in the same period, a traffic-mix change large enough to produce the entire effect.

### The discount schedule

Apply by tier. **Only the Tier B halving is a sourced rule** (L09's stated practical discount rule). The rest is a heuristic constructed here from the base rates above, and it is labelled as such — do not present the multipliers to a stakeholder as measured quantities.

| Tier | What it looks like | Examples | Direction | Magnitude | Plan on |
|---|---|---|---|---|---|
| **A — industrial research** | Published methodology, reports its own nulls and failures | Microsoft ExP (2009), Airbnb (2014) | trustworthy | trustworthy | Take at face value. Note that most of these results are reports of *failure*, which is why they are trustworthy |
| **B — duration + significance, no sample** | A real test, partially disclosed | PriceCharting (1 wk, 99.9%), WorkZone (22 days, 99%), Paltalk (53 days) | **informative** | **halve at minimum** `[sourced]` | Half the published magnitude as a ceiling; then apply the base rate below |
| **C — vendor case study, nothing disclosed** | A number and a logo | Examine.com +28%, Designlab +49%, Bomgar +30%, FitnessAI, Rootd +500% | weakly informative | **uninformative** | Rank an idea with it. Forecast **zero** with it |
| **D — confounded by a concurrent change** | Effect reported alongside another large change in the same window | Wistia (2× sales / +46% revenue with an 88% ad-spend cut) | **not informative** | **not informative** | No inference. Cite only as a description of what a company did |
| **E — proxy relabelled as revenue** | A click or signup win reported as a money win | Royal Discount "+10.21% revenue" (revenue goal did not reach significance); Thomasnet +1135% signups | **misleading as stated** | **discard** | Discard the revenue claim entirely. The proxy result may be quoted *as a proxy result*, per section 5 |
| **F — no traceable primary source** | A fully-specified statistic that exists nowhere in the named vendor's publications | "Hotjar's ~3,000 SaaS pricing pages, 2.8% average, 6.5–12% top quartile" | **zero** | **zero** | **Never cite.** Fabricated / unverifiable, and actively laundered back through search summarisers |

### The base-rate haircut on top

The tier schedule discounts the *reported* number. A separate haircut applies when you carry it onto **your** product, because a published win is a win *somewhere else*, and roughly **one idea in three** works even for the people who generate them well. Composing the two, for a Tier B study:

```
expected effect on your product  ≈  published lift  ×  0.5 (Tier B halving)  ×  ~0.33 (base rate)
                                 ≈  published lift  ×  ~0.17
```

`[derived heuristic — the 0.5 is L09's stated rule; the 0.33 is Microsoft's measured base rate; their product is a construction of this file and is not itself a measured quantity.]`

**Plan on roughly one-sixth of a Tier B published lift, and on zero for Tier C and below.** Then apply P-290's separate correction to your own estimate: practitioner forecasts carry a documented **+0.7pp median optimism bias**, **56% of 1,391 guesses overestimated**, and aggregating five estimators cut absolute error from ~2.8pp to ~2.3pp while leaving the bias essentially unchanged at +0.8pp. Shave the point off and say you have done so.

### The four fields, every time

For every external lift you are about to act on, write: **sample size per variant · duration · significance level · the exact metric.** Mark each missing field `n/p`. Three or four `n/p` fields means the study may **rank an idea** and may not **forecast an outcome**. Carry that distinction into the deliverable verbatim:

> "Published lift: +34% form submissions (WorkZone, 22 days, 99% significance, sample n/p). Tier B — direction informative, magnitude halved, then base-rate discounted. Used to rank this change, not to forecast it."

---

## What to test first

Order the queue by expected effect size, and let effect size be the only thing that orders it. Cheapness to build never promotes an item, because a change too small to detect is not cheap — it costs a slot, and a small product has one or two slots a year.

Two independent bodies of evidence point the same way. The first is this library's own reading of the price-psychology material: **structural levers run roughly 10× the effect size of cosmetic ones.** `[This library's synthesis, not a measured finding. "L03" is an internal research lane, and no study in the harvest compares structural against cosmetic effect sizes on a common metric. What is measured is each side separately — the largest structural result available is Wistia's packaging restructure at 2× sales and +46% revenue, itself Tier D; on the cosmetic side, charm pricing is null across two preregistered replications, choice overload pools to d ≈ 0.02, and Menufy's four checkout changes bought +1%. The 10× is a ratio constructed from those, and the ordering below does not rest on it — the queue is unchanged whether the true multiple is 3× or 30×.]` The second is Adapty's win-rate ranking for LTV uplift, which across **105,000 paywalls in a 16,000-app / $3B cohort (2026)** orders the levers directly: localization **62.3%**, trial structure **59.6%**, plan duration **58.7%**, number of plans **57.1%**, price changes **45.5%**, **visual/copy only 34.6%**. `[cohort: mobile in-app purchase — not a web checkout. Direction carried across the wall deliberately; magnitudes not carried.]` Trial structure beats visual and copy work by **59.6% to 34.6%**, roughly 2:1 on win rate alone, before any effect-size difference is counted.

### The order

**0. Fix the ladder before testing anything.** Phase 4.5 failures — an inverted add-on, a sideways rung, a non-monotonic unit price — are defects, not hypotheses. They are fixed, not tested. Ledgerly's **pre-correction** $4/50 top-up at **$0.08 per receipt** against Solo's **$0.09 per receipt** `[derived]` was exactly this category: no test was warranted or possible, and no page change would have compensated for it. It was repegged to **$5 for 50 ($0.100, 1.11× Solo)** by the ladder arithmetic itself, which is what the gate is for.

**1. The value metric.** What the buyer gets more of when they pay more. Getting this wrong invalidates every tier, every price and every line of copy above it, and it is settled by interview (`derivation-methods.md`), not by experiment. Highest expected impact of anything in this list.

**2. Packaging — what is bundled and what is fenced.** Wistia's move to *all tiers get all features, tiers differ only on monthly upload volume* reported **sales 2× and revenue +46%**, though it is Tier D on the schedule above (88% concurrent ad-spend cut, no sample published) and cannot be used as a forecast. The direction is nevertheless the largest structural result in the harvest.

**3. The free component.** Where the free tier stops, and whether it is a fence or a permanent product. This is the highest-leverage single decision on a freemium ladder and it is answered by the ceiling-hit data in Falsifier 3, not by a split test.

**4. Trial structure and plan duration.** Adapty's **59.6%** and **58.7%** win rates. If the product has a trial at all, its length and shape outrank everything on the page.

**5. Plan count.** Adapty **57.1%**. But note the collision: GoodUI's pattern **#113 "More Or Fewer Plans" sits at 10.7% of its 90% cumulative power target at 2% MDE from 3 tests** — the weakest-evidenced pattern in the largest library available, and Netflix is logged rejecting a preselected single-plan recommendation against its standard three-plan layout. **The library cannot answer this one.** Decide it from the fence structure and say so.

**6. Price level.** Adapty's **45.5%** — the lowest-winning structural lever, below every other structural change and barely above cosmetics. Combined with the fact that **almost nothing in the published record is a true price-*level* test**, the conclusion is firm: settle the price level with willingness-to-pay interviews and a staged rollout to new customers, never with a split test. This is also the one carrying legal and reputational exposure.

**7. Price prominence and page structure, as a deliberate bundle.** Ship 5–10 changes that all attack the same objection on the same screen, as one variant, with the removal list written down first (P-288). Accept the loss of attribution explicitly. Calibrate expectations to Menufy: four sensible checkout changes bought **+1%**, and that was the result that reached significance. Note that price prominence specifically is GoodUI pattern **#114 at 54.4% of its 90% power target from 7 tests** — thin, and the two documented results point opposite directions (Microsoft **−64% clicks** from showing the price; PriceCharting **+620.9% clicks** from hiding it), both measured on clicks and neither on purchases.

**8. Cosmetics — never.** Price endings, decoy tiers, dropping the currency symbol, button colour. Charm pricing failed two preregistered replications (Fenneman et al. 2022, N = 266 / 4,788 decisions, just-below 47.1% vs rounded 45.9% vs control 45.3%, n.s.; Escher et al. 2026, N = 729, no effect on purchase intentions). Choice overload pooled to **d ≈ 0.02** across ~50 experiments (Scheibehenne, Greifeneder & Todd, *JCR* 2010). The attraction/decoy effect produced **11 reliable effects from 91 attempts** (Yang & Lynn 2014). For anything with a published effect under about 5%, ship the version the literature mildly favours and close the item — section 3, method 5.

### The Ledgerly queue as it actually resolves

Ledgerly's plausible queue contains "test $9 vs $9.99 on Solo" and "test metering on receipts vs metering on connected accounts."

The first has an effect indistinguishable from zero in two preregistered replications and would require a sample Ledgerly will not reach this decade. Delete it.

The second changes what the buyer is choosing between and is the only item worth a slot — **and it will still be settled by 12 interviews and a receipt-count read on 20 accounts, not by a split test**, because section 1's arithmetic says a randomised answer would take 15.6 months to detect an effect twice the size of anything a pricing page has ever produced.

That is the honest shape of a measurement plan at 2,000 visitors: one structural question per quarter, answered qualitatively, shipped on a prior, and carrying a countable falsifier with a date on it.

---

## Where this file is thin

**No published study of low-traffic pricing decisions was located in any research lane.** Every power figure here is standard two-proportion arithmetic applied to a situation nobody has studied. The statistics are sound; the situation is unstudied.

**Ledgerly's baseline rates are fixture inputs, not measurements.** The 0.5% visitor→paid and 5% pricing-page→checkout rates are `[assumed]` and were chosen to be plausible. In a real run both are bracketed Unknowns from Phase 2, and the entire section-1 table must be recomputed against the product's own measured rates. A baseline of 1% rather than 0.5% roughly halves every required sample in this file.

**No variance figure for revenue-per-visitor was available**, so no exact sample-size arithmetic for a revenue metric is given — only the direction (it needs more, not less).

**The correlation figures are single-vendor plus one corroborating dataset.** GoodUI's 533-test checkout-visits correlation is the strongest number in this file, and Conversion.com's ~200-test figure agrees on direction and magnitude. Neither is independent of the CRO industry, and no academic replication of either was located.

**The discount schedule's multipliers are constructed, not measured.** Only the Tier B halving comes from a source. The composition with the 33% base rate is a heuristic of this file's own making and is flagged as such wherever it appears.

**GoodUI's decision-relevant numbers are paywalled.** Every repeatability score, shallow median and deep median for the pricing, plan, checkout and signup patterns sits behind a $60/month subscription, verified individually against patterns #2, #17, #113, #114 and #115, which render the literal placeholder `X.X%`. What is public is the power data, and the power data says the two questions founders most want answered are the two least resolved.
