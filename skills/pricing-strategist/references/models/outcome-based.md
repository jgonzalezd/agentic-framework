# Outcome-Based

> **Read the scale line before the rest of the pack.** Outcome-based pricing sat at **5% adoption in mid-2025** and is only *expected* to reach 25% by 2028 — and that forecast is a survey of intentions (n=240+, fielded Apr–May 2025, Growth Unhinged). Every live implementation this library could verify is in customer support, at either enterprise contract values ($50k–$600k+/yr) or high per-unit volume. **For almost every product reading this pack, the honest answer is "not yet", and the useful part of the pack is the instrumentation you do now so that "not yet" can become "yes" in a year.**

## What the buyer is purchasing

A result, with the execution risk removed. The buyer is not paying for access, for capacity, or for attempts — they are paying for the thing that happened, and if it does not happen they pay nothing. Intercom's framing for Fin is exactly this: *you pay when Fin successfully resolves a conversation end-to-end.* The shippable form of the promise is four words: **"You're charged when it works."**

What the buyer actually gets, and what makes them willing to pay several times a usage-based rate for it, is the transfer of variance. Under usage pricing the customer buys attempts and absorbs the failures. Under outcome pricing the vendor absorbs them. That is a real, priceable service — and it is the reason this model commands the highest prices in the category and also the reason it is the hardest to run.

## The mechanics

- **Unit of purchase:** one verified outcome, defined in writing before anything bills.
- **Cadence:** in arrears, usually monthly, frequently against a committed minimum.
- **What governs the amount:** the count of events that pass the definition. Not attempts, not usage, not seats.
- **Entitlement on payment:** nothing is unlocked — the entitlement is the result itself. Attempts are unlimited and free, which inverts the economics of every other model here.
- **What happens at the limit:** there is no natural limit, which is why the live implementations wrap the outcome unit inside a hybrid. Intercom's "Fin for Platforms" is **$49/mo including 50 resolutions, then $0.99 each** (2026) — a base fee, an included allowance, and an outcome as the unit. **The hybrid wrapper is the norm, not an exception.**
- **Expiry and rollover:** an included outcome allowance behaves like any other allowance and inherits `hybrid.md`'s rules. The outcome unit itself has nothing to expire.
- **The mechanic every live implementation has and every proposal forgets:** a *verification layer* that decides whether an event counts, and an *evidence record* per billed event that survives a dispute.

## Fits when

- **The outcome is discrete, attributable to your system, and machine-verifiable.** All three, and the third is where proposals die. Zendesk's May 2026 restructure narrowed billing to ***Verified* Resolutions**, confirmed by LLM evaluation — the second-generation version of an outcome price adds a verifier, which tells you the verifier was the missing piece the first time.
- **The buyer already measures this outcome themselves.** This is the sharpest available filter and it is not stated in any source — it is the mechanical consequence of the others. If the customer does not already count the thing, you are not selling outcome pricing, you are selling a measurement system with a pricing model attached, and you will be arguing about the measurement rather than the price.
- **Success rate is high enough that failures are a rounding error.** The stated criterion is **≥ ~80%** (Product Growth, 2026-03-23) — **one analyst's heuristic, with no published derivation.** Treat it as a prior, not a threshold.
- **You can absorb cost variance on failed attempts.** You pay inference on every failure and book nothing.
- **The value per outcome is large enough to carry the overhead.** Each billed event needs a definition, a verification pass, an evidence record and a dispute path. At $0.99 per resolution that overhead is amortised across enormous volume; at enterprise ACVs it is absorbed into the contract.
- **You are in a category where the outcome is already a commercial noun.** "Resolution" existed as a support-industry term before anyone billed on it. Categories without such a noun have to invent one, and inventing the unit and pricing on it simultaneously is two hard problems at once.

**Boundary against neighbouring packs.** `usage-based.md` charges for work attempted; this charges for work that worked. `credits.md` abstracts the unit so you never have to choose one; this requires you to choose one and then defend it. `hybrid.md` is what you ship while you build the verification.

## Fails when

- **You cannot define the outcome in a sentence a customer would sign.** This is the default case and the honest default answer. Write the definition as if drafting an SLA that will be disputed, because it is one.
- **Attribution is contestable.** The buyer's argument is always available: the result would have happened anyway, or it happened because of something else they did. In customer support the vendor holds the strong position because the interaction is fully inside the vendor's system. **The further the outcome sits from your product boundary, the weaker your position gets, and there is no source in this library on how disputes resolve in categories where the outcome is downstream of the vendor's system.**
- **The definition can be narrowed later, and it will be.** Zendesk narrowed to *Verified* Resolutions in **May 2026**, which mechanically reduced billable volume on existing contracts. Definitions tighten in the vendor's direction when volume is expensive and in the buyer's direction when renewal is at risk. **A price you can restate as a policy change is a price under permanent renegotiation.**
- **You charge for an interaction rather than a result.** Salesforce Agentforce launched at **$2 per conversation** — including conversations that failed — abandoned it after customer backlash in favour of flexible credits, and is now reported to run three concurrent pricing models (2025–2026). The cost of getting this wrong is not a refund; it is a permanent structural mess.
- **Success rate is low.** Below the ~80% prior you eat inference on failures while booking nothing, and revenue becomes a function of model quality that you only partly control. Model regressions then arrive as revenue events.
- **Your buyer's incentives run against yours at the margin.** Under outcome pricing the buyer profits from disputing outcomes and, where the success signal is behavioural, from *producing* the signal that means failure. See the adversarial arithmetic below.
- **Scale floor.** **Not one product in this library's researched set runs outcome pricing below either enterprise contract scale ($50k–$600k+/yr: Sierra, Decagon, Ada) or very high unit volume (Intercom Fin at $0.99, Zendesk at ~$1.50).** No source publishes a minimum viable volume, and this pack will not invent one. The mechanical statement that can be made: **the model requires an outcome definition, a verification pass with its own inference cost, an evidence log per billed unit, and a dispute process staffed by a human — and below the scale where those four are amortised, a hybrid with the outcome merely *instrumented* captures most of the alignment at none of the cost.**

## The arithmetic

### Part 1 — the value-capture identity, which is why anyone bothers

```
P_outcome  =  capture share  ×  V_outcome
```

`V_outcome` is the buyer's own quantified value, not yours. Ramanujam's post-book position is that **AI products can capture 25–50% of value created, against 10–20% for traditional SaaS** (~2025, via interviews — **not from the 2016 book and not backed by data in any source in this library**). That is the entire commercial case for the model: the ceiling under a cost-correlated metric is your infrastructure margin, and the ceiling under a value metric is a share of the customer's economics.

The measurement instrument is Nagle's **Economic Value Estimation**:

```
Total Economic Value  =  Reference Value  +  Differentiation Value
Reference Value       =  the PRICE of the next-best competitive alternative
Differentiation Value =  Positive Differentiation − Negative Differentiation
```

The NBCA is found with one question: *"If I, the seller, did not exist, what would my customer do?"* Nagle names three failure modes, and **the third is the one that bites small software products: the alternative is frequently doing nothing.** His four honesty rules: count only the *difference* against the NBCA; measure differentiation either as cost saved or as extra benefit but never both; do not assume value is proportional to performance; subtract negative differentiation (switching cost, learning curve, added risk) explicitly.

**The one independent cross-check on the 25–50% band in this library** is Nagle's drug-eluting stent: implantation surgery costs >$30,000, uncoated stents re-clog within a year in 20% of cases against ~5% for the coated version, so differentiation value = 15 percentage points × $30,000 = **$4,500**. The company charged a **$1,750 premium** — a **38.9% capture** — and used the remaining gap to defuse price-gouging accusations. That lands inside Ramanujam's band. **It is a single medtech case from a 2016 textbook edition, not a software benchmark, and it is the only quantified capture-share datapoint available.**

### Part 2 — Michelin, the clean case

Michelin moved from selling tyres to charging fleets **per kilometre driven**. Write the two metrics against the same engineering improvement:

```
metric = tyres sold        →  a tyre lasting 20% longer  →  ~20% FEWER replacement sales
metric = kilometres driven →  a tyre lasting 20% longer  →  ~20% MORE revenue
```

Same tyre, same factory, opposite sign on the P&L. The improvement that was a threat becomes the growth lever, and engineering quality stops fighting revenue.

**The diagnostic that falls out, and it is runnable on any product in ten seconds:** *if you made the product 20% better tomorrow, would revenue rise or fall under your current metric?* If it would fall, you have Michelin's problem, and outcome pricing — or at minimum an alternative value metric — is the structural fix rather than a pricing preference.

**The caveat this pack must carry:** kilometres driven is a *proxy* for the outcome (fleet uptime), it is measured by an odometer both parties trust, and it was already a commercial noun in fleet contracting. Michelin did not have to define, instrument or defend the metric — it inherited one. **Most software products inherit nothing**, and the distance between "we found a great metric" and "both parties already count it the same way" is where this model is actually hard.

### Part 3 — worked example: Ledgerly

Ladder in its **corrected** shape: free 5/mo · Solo $9 / 100 · Books $19 / 400 · top-up **$5 / 50**. This pack derives forward prices rather than diagnosing the ladder, so it uses the corrected top-up; the incumbent $4 pack is the trap `hybrid.md` exists to detect and is diagnosed there. Cost-to-serve is derived once, in `02-packaging-models` P-021 and restated in `models/_TEMPLATE.md`, at **$0.060 per receipt pre-lever and $0.0186 after the routing, caching and batching levers**. Everything below uses the post-lever **$0.0186**, because it derives forward prices and P-021's rule is to compute the floor after the levers. The figure is now consistent with `hybrid.md` and `lifetime.md`, which previously disagreed with each other on the pre-lever number.

**Step 1 — the EVE, run properly, including the part where it stalls.**

```
NBCA:  the freelancer keys the receipts into a spreadsheet themselves.
Reference Value = $0 out of pocket.        ← Nagle's failure mode (c): the competitor is "do it yourself"
⇒ 100% of the price must come from Differentiation Value, and the only currency is the buyer's time.
```

```
Differentiation Value per receipt  =  minutes saved  ×  the freelancer's own valuation of an hour
```

**Both inputs are missing.** `[minutes to key one receipt manually — no measured figure exists in this library]` and `[what a Ledgerly freelancer values an hour at — not measured; it is not their billing rate, because this is unbilled evening admin]`. Demonstrating the arithmetic on stated assumptions, clearly flagged as such — **2 minutes saved and a self-valuation of $30/hour**, so **$1.00 of value per receipt**:

| Rung | Receipts | Value at $1.00/receipt | Price | **Capture share** | Price at 25% capture | Price at 50% |
|---|---|---|---|---|---|---|
| Solo | 100 | $100/mo | $9 | **9.0%** | $25 | $50 |
| Books | 400 | $400/mo | $19 | **4.75%** | $100 | $200 |

**The finding is not the price, it is the capture share.** Even on conservative assumptions Ledgerly captures single-digit percentages of the value it creates, against a claimed AI-product band of 25–50%, and the capture share *falls* as the customer gets larger — the volume-discount curve running in the wrong direction against value. **Two things follow. First, the EVE is worth running even if Ledgerly never bills on an outcome**, because it reframes the entire pricing question from "is $9 too much" to "why are we at 9%". Second, **the two missing inputs are the highest-value measurements the founder could take this month**, and both come from customer conversations rather than from analytics.

**Step 2 — the candidate outcome, and the failure economics.** The natural outcome unit is *a categorised expense entry the freelancer never edits*, taken as a proxy for "correct". Writing `p` for the price per verified entry, `c` for cost per attempt and `s` for success rate:

```
expected margin per attempt =  s·p − c        →      break-even   p = c / s
```

| Success rate `s` | Break-even `p` | Against Solo's current $0.0900/receipt |
|---|---|---|
| 0.95 | **$0.0196** | 4.6× headroom |
| 0.80 | **$0.0233** | 3.9× headroom |
| 0.50 | **$0.0372** | 2.4× headroom |

Add the verifier, because a verified outcome needs a second pass: routing a validation call to the cheap model costs **$0.00265** (`02-packaging-models`, P-021), taking `c` from $0.0186 to **$0.0213** and the `s = 0.80` break-even from $0.0233 to **$0.0266** — a 14% increase in cost-to-serve, still 3.4× under today's rate.

**Read this the right way round. For Ledgerly the success rate is not the binding constraint — the verification is.** Ledgerly could bill only on entries the user does not edit, at roughly today's effective rate, and make money at any plausible accuracy. What stops it is not the arithmetic.

**Step 3 — what stops it: attribution and adversarial incentives, made concrete.** An unedited entry is a *proxy* for correct, not a definition of correct, and the proxy fails in both directions:

- **False positive:** a freelancer who never checks their entries produces the identical signal to a perfect extraction. You bill for work nobody validated, and you find out at tax time.
- **False negative, and this is the adversarial one:** the moment the bill depends on edits, the buyer has a mechanical way to reduce it — touch one field in every entry. **You have handed the customer a lever on your revenue that costs them two seconds and that you cannot distinguish from a genuine correction.** Every behavioural success signal has a version of this, and the question to ask of any candidate outcome is: *what is the cheapest thing the buyer can do to make this event not count?*
- **The dispute path:** the industry's answer is an independent verifier (Zendesk's LLM evaluation) or a narrowed definition (Zendesk again, May 2026) or a retreat to a hybrid wrapper (Fin for Platforms). **No source in this library publishes dispute rates, dispute-resolution times, or the cost of running a dispute process. That absence is real and it is the number a solo founder would most want.**

**Step 4 — the verdict for Ledgerly.** Outcome pricing is not available today, and the blocking condition is that correctness is judged by the freelancer rather than by the system. What *is* available today is one line of instrumentation: **log the post-processing edit signal per entry** — whether it was edited, which field, how long after processing, and whether the corrected entry survived to export. Twelve months of that log is the difference between a definition you can defend and a definition you are guessing at. That is the concrete step, and it costs a table and an event.

## What a solo founder should actually do

Almost certainly not this, yet. Concretely, in order:

1. **Run the EVE anyway.** It takes customer conversations rather than infrastructure, it produces your capture share, and the capture share is the most decision-relevant number in this pack whether or not you ever change models. Ledgerly's 9% is a pricing finding that has nothing to do with outcome billing.
2. **Ship `hybrid.md` and instrument the outcome underneath it.** This is the near-unanimous prescription: charge on the named activity, log the downstream result. Software Pricing Partners' summary line for the metering half is *"Find the value metric that credits were invented to avoid choosing."*
3. **Pick the downstream event this week and start writing rows.** Not "we should track outcomes" — the specific event, its timestamp, its identifiers, and enough surrounding context to reconstruct a disputed case a year later. You cannot backfill this, which is why it is urgent despite the model being a year away.
4. **Auto-refund failed attempts now, and say so on the page.** This is the outcome model's best property available without any of its machinery: no charge on a hard failure, the refund shown in the usage meter (*"1 analysis refunded — generation failed"*), plus a bounded one-click "this wasn't useful". The flag stream doubles as your evaluation dataset, which is also what you will need to prove a success rate later.
5. **Write the outcome definition before you need it, and put a date on it.** A definition written under commercial pressure at renewal is a worse definition than one written a year early with no money on the table.
6. **Revisit in twelve months against three gates:** can you define it in one sentence, can you verify it without a human, and does the customer already count it? Three yeses and the model is live. Anything less and you are still instrumenting, which is not a failure — it is the 95% case.

## How it is presented

- **Publish the definition before the price.** The number is the easy half. "Resolution", "Verified Resolution", "successful placement" — the adjective is doing the commercial work, so choose it deliberately and put it in the unit's name where the buyer cannot miss it.
- **State what does not bill, in the same breath.** The credibility of an outcome price is entirely in its exclusions. Agentforce's original **$2 per conversation** billed conversations that failed, and that is the sentence that produced the reversal.
- **Show the buyer their own arithmetic.** Outcome pricing only reads as cheap next to the customer's cost of producing the outcome themselves, so the page must carry that comparison — the manual cost per outcome × their volume, next to your price.
- **Wrap it in a base fee if the volume is lumpy.** Intercom's platform SKU — **$49/mo including 50 resolutions, then $0.99 each** — is the shape that makes an outcome unit purchasable by a buyer who cannot forecast their count.
- **Say it in four words on the card:** *"You're charged when it works."*
- **Carry the vendor-interest warning into any comparison you publish or read.** The richest public comparison of AI-agent outcome pricing is on **fin.ai, which is Intercom's**, and Intercom sells the $0.99/resolution model it benchmarks. The $1M → $100M+ ARR figure for Fin is Intercom's own claim.

## Who runs it

| Product | Structure | Observed | Teardown |
|---|---|---|---|
| Intercom Fin | **$0.99 per resolution**; "Fin for Platforms" (on a non-Intercom helpdesk) **$49/mo including 50 resolutions, then $0.99 each** | 2026 (fin.ai — **Intercom sells this model**) | — |
| Zendesk | **~$1.50 per automated resolution** committed, **~$2 pay-as-you-go**; **May 2026** restructure narrowed billing to ***Verified* Resolutions** confirmed by LLM evaluation | 2026-05 | — |
| Sierra · Decagon · Ada | Custom enterprise contracts, **$50k–$600k+/yr**, outcome-denominated | 2026 (via fin.ai, vendor-interested) | — |
| Salesforce Agentforce | **$2 per conversation** — abandoned after customer backlash, replaced by flexible credits; now reported to run three concurrent pricing models | 2025–2026 | — |
| Michelin | Fleet contracts denominated in **kilometres driven** rather than tyres sold — the canonical non-software case | Ramanujam & Tacke, *Monetizing Innovation* (Wiley, **2016**); no live observation | — |

**Adjacent but not this model:** Optimizely priced on **monthly unique visitors** instead of seats (same 2016 source) — an alternative *value metric*, not an outcome. The distinction matters: unique visitors counts something the customer does, not something the vendor achieved, and it bills whether or not the tests won.

## Migrating into and out of it

**Into it, from hybrid — the only survivable path, and it is a two-stage move.** Stage one: keep charging on the activity and log the outcome silently, until you have enough history to state a success rate and defend a definition. Stage two: introduce the outcome as a *unit inside the existing hybrid* — a base fee with an included count, then per-outcome — which is exactly Fin for Platforms' shape. **Never make revenue depend on a verification layer you have not run in shadow mode first.**

**Into it, from usage-based:** harder than it looks, because your existing usage log is not an outcome log. Usage is recorded at the moment of work; the outcome happens downstream, often days later, sometimes in a system you do not control. The missing table is the whole migration.

**Out of it, or rather *within* it — the migration nobody plans for.** The expensive change is not abandoning outcome pricing, it is **narrowing the definition**, which mechanically cuts billable volume on live contracts and reads to the customer as a price rise they did not agree to. Zendesk did it in May 2026. Treat the outcome definition with the same change control as a credit burn table: announce at least one billing cycle ahead, grandfather the existing definition for a stated period, publish a dated changelog, and **state the reason** — buyers accept "we found we were billing for cases that shouldn't have counted" far better than a silently shrinking count.

**Abandoning it outright is the Agentforce path** and the record shows what it costs: a public reversal, a replacement model chosen under pressure, and three concurrent pricing models still running afterwards.

**Repricing per-outcome is easy; redefining the outcome is not.** The first is a number on a page. The second is a renegotiation of what the customer bought, and it will be relitigated at every renewal.

## Interactions

**Composes with:** `hybrid.md` (the base + included-outcomes wrapper is how every live implementation is actually sold, and it inherits all of hybrid's inequalities), `usage-based.md` (the fallback you ship while instrumenting, and the model whose ceiling this one exists to escape), `subscription.md` (as a committed floor beneath a variable outcome count).

**Excludes:** `credits.md`, structurally rather than commercially. Credits exist precisely to avoid choosing a unit — they are, in Metronome's own words, *"born of necessity rather than preference"*, a bridge rather than a destination. An outcome price is the opposite commitment: one unit, defined, defended, verified. Running both at once means you have two prices for the same value and the buyer will find the cheaper one.

**Pattern layers that matter most:** `01-value-metric` (the entire model is a value-metric decision that happens to have a billing consequence), `07-risk-reversal` (no-charge-on-failure is the model's core promise and is worth adopting even without the model), `09-trust-and-proof` (the evidence record per billed event is the proof), `12-experimentation` (the shadow-mode verification run is the experiment that gates the whole migration).

## Where this model is contested

**1. The whole model rests on a definition, and the definition is being actively renegotiated in public.** Zendesk's May 2026 narrowing to *Verified* Resolutions is the leading edge of a fight over attribution and verification with no settled standard. Expect definitions to keep tightening, which mechanically reduces billable volume on existing contracts. **Anyone presenting outcome pricing as a solved model is describing a target that moved in the last twelve months.**

**2. The adoption figure is 5% and the forecast is an intentions survey.** 5% in mid-2025, 25% expected by 2028 (n=240+, Apr–May 2025) — and intention surveys in pricing are historically optimistic. Compounding this, the same author's consecutive annual editions disagree with each other on levels for hybrid (41% versus 25% for the same period), which is direct evidence that levels in this survey series do not replicate. **Cite the direction. Do not cite the level.**

**3. The best revenue evidence is a single unnamed case from an interested party.** Software Pricing Partners' case study — the same product moving from cost-correlated to outcome-based pricing and renewing at **$300,000/year instead of roughly $833/year** — is an existence proof, not a benchmark, and SPP sells the consulting that competes with the "just ship credits" default. The other headline number, Fin's $1M → $100M+ ARR, is Intercom's own claim about Intercom's own model.

**4. The ≥80% success-rate threshold is one analyst's heuristic** (Product Growth, 2026-03-23) with no published derivation, no cohort and no sensitivity analysis. It is repeated widely enough to look like a finding. It is not one.

**5. Ramanujam's 25–50% capture claim is post-book and sourced to interviews.** *Monetizing Innovation* (2016) names five models and outcome-based is not among them; the sixth-model position and the capture band are a later update, attributed to interviews rather than to data, and no source in this library independently measures capture share for AI products. The single independent cross-check is a 2016 medtech example at 38.9%.

**6. Both sides of the credit debate say credits are transitional — and that agreement is worth exactly what it is worth.** Metronome sells usage-based billing infrastructure and profits when companies adopt credits, yet calls cost-plus credits *"born of necessity rather than preference"*, a bridge and not a destination, quoting its own customers: *"We don't love credits, but we didn't have time to define outcomes"* and *"Our finance team likes it. Our customers don't know what a credit does."* SPP profits from the opposite conclusion and prescribes outcomes. **Two parties with opposing commercial interests agreeing on direction is unusually strong evidence about direction — and it says nothing whatsoever about timing.** Meanwhile credit adoption is still climbing fast: the PricingSaaS 500 Index went from **35 companies to 79 during 2025 (+126%, and 16% absolute adoption)** while outcome pricing sat at 5%. **The destination argument and the adoption data are both true, and a founder has to live in the gap between them.**

**7. The 2025–2026 agentic-pricing discussion is genuinely unsettled, and this pack will not pretend otherwise.** The premise is well-evidenced: per-seat pricing collapses under agentic usage, because agents do not log in and a better agent reduces the headcount that was your meter. Seat-based fell **21% → 15%** in twelve months (n=240+, Apr–May 2025) and remains at 29% among >$150M-ARR companies, which is a lagging cohort. The widely-repeated companion claims — "40% lower gross margins and 2.3× higher churn" for seat-priced AI — have **no traceable primary source and must not be cited**; the "$234B of enterprise software spend at risk by 2030" figure is trade-press-carried and belongs in the narrative column.

What is *not* settled is what replaces the seat. Outcome pricing is the theoretically indicated answer and it is at 5% adoption. Everything actually shipped in this window is defensive: Anthropic's **2026-04-04** terms fence barring Pro and Max flat plans from powering third-party agent frameworks, with the reported rationale that a single agentic session could consume **$1,000–$5,000 of API cost**; Cursor's repricings and its **2025-07-04** apology with refunds; Replit's revisions. **These are reactions, not designs. The economics of "one user, thousands of automated calls" are being discovered in production, expensively, and there is no consensus for this pack to report.**

**8. The honest counterweight to this pack's own enthusiasm.** Credits and hybrids persist because they sit between seat-based access and outcome pricing, offering more transparency than legacy licences and more feasibility than outcomes — most products cannot define or verify an outcome, and for that ~95% the real choice is a metered model versus a flat price that inverts on power users. **Being right that outcomes are the destination does not make you able to get there this quarter.**
