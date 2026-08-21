# One-Off

## What the buyer is purchasing

A finished thing, once. The buyer has a problem with an end — a report they want, a call they want, a batch they need processed before a deadline — and they want the transaction to be over when the thing arrives. A large part of what they are paying for is **the absence of a relationship**: no renewal, no card on file, no cancellation chore, no line item to defend next quarter. That is a real product attribute with real willingness-to-pay behind it, and it is the attribute a subscription cannot offer at any price.

The buyer's mental model is a purchase, not a plan. Which means every subscription-shaped thing you attach to it — auto-renewal, a trial that converts, an "upgrade to keep your results" — reads as a bait-and-switch even when it is disclosed.

## The mechanics

- **Unit of purchase:** one deliverable, or one bounded batch of work.
- **Cadence:** none. The transaction is terminal by design.
- **What governs the amount:** the deliverable's scope, or the size of the batch.
- **Entitlement on payment:** the artefact, delivered immediately or on a stated schedule. Where the artefact is a file, say the format — the Enneagram Institute specifies its report is "available in a PDF format" and includes "Expanded Type Descriptions (of over 2,500 words each)" for the buyer's top three scores (observed 2026-08-12). **Every credible one-off report product specifies its deliverable physically.**
- **What happens at the limit:** there is no limit; there is a scope. State it as a number.
- **Expiry and rollover:** the honest one-off primitive is the **single-use code** — bought, redeemed once, done. Where a one-off grants capacity rather than an artefact, permanence is the differentiator: Midjourney's purchased top-up hours **never expire** while included hours do; Runway's "Any additional credits you purchase never expire" (2026 / observed 2026-08-12).

## Fits when

- **The need is genuinely episodic and the buyer knows it.** Tax season. A move. A decision. A one-time cleanup.
- **The deliverable is named, bounded and has an endpoint.** Talkspace's "$299" psychiatry initial evaluation is a genuine, publicly priced, no-subscription one-off, and what makes it possible is precisely that it is **a named, bounded, credentialed deliverable with a clear endpoint** (observed 2026-08-12).
- **You are selling at the edge of a free product.** 16Personalities gives the test away and sells a "$29" report, accepting the one-off as terminal and monetising breadth rather than depth — the cleanest `free-core.md` + one-off composition in this library (observed 2026-08-12).
- **It is a top-up inside another model.** A credit pack or overage bundle is a one-off SKU. It is governed by `hybrid.md`'s inequalities and must never be priced as a standalone product.
- **The buyer wants to escape recurring billing and will pay a premium to.** Stoic's "$299.00 Lifetime Premium" is priced at roughly **3× its top annual AI SKU ($99.99)**, implying a ~3-year breakeven (observed 2026-08-12). That is a one-off *purchase of a subscription* rather than a one-off deliverable — a different animal, but it proves buyers will pay a large single sum to stop renewing.

## Fails when

- **You expect it to become a subscription.** L14's cross-cutting finding is blunt: **nobody in the researched market converts a one-off artefact buyer into a subscriber honestly.** The one working path (MentorCruise) works because the recurring product is *a relationship with a specific human* — a different, obviously better thing — not a repetition of the same deliverable. **A product that sells the same artefact repeatedly cannot honestly become a subscription.**
- **You convert them by default anyway.** JustAnswer is the largest business built on single-answer intent and it monetises that shape by **refusing to sell it as a one-off** — advertising "as little as $1 or $5" while charging "$28–$125" monthly, with the FTC complaint alleging this affected hundreds of thousands of consumers since January 2022; two ROSCA counts filed **2026-01-13**. Read it as a market signal and not only as a scandal: JustAnswer had every incentive and all the data and concluded the one-off could not be monetised at a price it wanted, so it faked recurring. **The demand is proven; honest monetisation of it is the open problem.**
- **You price it above one month of the equivalent subscription.** Then "subscribe and cancel" dominates it — see the arithmetic below. This is the model's signature ladder failure and it is easy to ship by accident.
- **The deliverable is vague.** "Detailed insights" does not sell; "a PDF with 2,500-word descriptions of your top three types" does. With no ongoing relationship to build trust over, the artefact description *is* the trust.
- **You need predictable revenue.** One-off revenue is a function of this month's demand with no floor under it. There is no MRR, no renewal base, no expansion.
- **Scale floor:** the lowest of any model in this directory — one price, one checkout, no meter, no renewal, no dunning, no save flow. **The one-off's constraint is a ceiling, not a floor** (below), which makes it the correct first SKU for a very small product and a poor sole SKU for a growing one.

## The arithmetic

### The verified price ceiling — the most reliable number in the L14 lane

**A one-off, self-serve, no-human, structured personal deliverable bears $9.95–$36.** Four independent products cluster tightly, all observed 2026-08-12:

| Product | Price (verbatim) | Deliverable |
|---|---|---|
| UnderstandMyself | **"$9.95"** | One-time assessment + report, "10 to 20 minutes" of input |
| Enneagram Institute (RHETI) | **"$20 per test"** | Report, PDF, expanded type descriptions |
| 16Personalities | **"$29"** | Structured personality report |
| Enneagram Institute (bundle) | **"$40 $36"** | Bundled reports |

**No researched product in this shape prices above $36.** And there is a **structural gap between roughly $36 and $39** — the ceiling of the self-serve artefact and the floor of the cheapest human call (Intro.co's cheapest observed expert call at "$39", against a ceiling of "$2,500"). **Anything priced inside that gap must clearly be one thing or the other, because the buyer's mental comparison flips there.**

The band's cohort: *personal-insight reports generated from structured self-report input, delivered immediately, with no human in the loop*. It transfers to another product only to the extent that product shares those properties, and the transfer must be stated whenever it is made.

The upper reaches of the one-off market, for orientation (all 2026-08-12): named-human single call **$39–$2,500** (Intro.co); mentorship single session **"$39/call"** alongside "$120–$270/month", both public (MentorCruise); specialist evaluation **"$299"** (Talkspace psychiatry). **The middle is empty** — the market pays for a face or for a cheap artefact, not for the space between.

**And the negative finding, which is as important as the band:** **not one of the three verified AI advice products (Rosebud, Abby, Rocky.ai) sells a one-off SKU at all** — all are subscription-only. Two readings are possible: an open gap, or an idea the category has tested privately and rejected. **The evidence available cannot distinguish them.** Do not present the vacancy as an opportunity without saying that.

### The dominance test — the trap every one-off must clear

If the same entitlement is available by subscription, the one-off is dominated whenever:

```
P_oneoff  >  P_month × (months of entitlement the one-off grants)
```

Because "subscribe, use, cancel" reproduces it more cheaply. The fix is one of two things — and it must be one, not neither:

1. **Price at or below one month** and fence the one-off on something real (no updates, no retention of results, single export, no support).
2. **Give the one-off something the subscription does not have**: permanence. Runway's purchased-credits-never-expire and Midjourney's never-expiring top-up hours are the live instances. The buyer is paying for permanence, not being fined — and it makes the two SKUs non-comparable, which dissolves the arithmetic entirely.

### Worked example — Ledgerly

Ledgerly's ladder in its **corrected** shape: free 5/mo · Solo $9/100 · Books $19/400 · top-up **$5/50**. The incumbent $4 pack is the trap `hybrid.md` diagnoses; this example prices a new SKU against a ladder that already passes, which is the only sequence that makes sense. Suppose a **"Tax-season batch — 500 receipts, one payment"** SKU.

**Step 1 — the dominance test.** 500 receipts is more than Books' 400, so one month of Books does not reproduce it; two months does:

```
subscribe-and-cancel reconstruction:  2 × $19  =  $38   for 800 receipts across two months
one-off must therefore sit below $38 to be rational for a buyer willing to manage a cancellation
```

But most buyers will compare against the *single* month they think they need:

```
P_month × 1  =  $19   ← the number sitting in the buyer's head
```

**Any one-off above $19 must justify itself against "just subscribe for a month and cancel."** That is the real constraint, and it is much tighter than the $38 arithmetic suggests.

**Step 2 — the per-unit check, which is non-negotiable.** The one-off is an SKU on the same ladder and must clear `hybrid.md`'s tests. At $29 for 500 receipts:

```
r_oneoff = $29 / 500 = $0.0580/receipt
r_Solo   = $0.0900     r_Books = $0.0475
```

$0.0580 sits **above Books ($0.0475) and below Solo ($0.0900)**. So it does not invert against Books, but it **does undercut Solo**, and Solo buyers with volume would rationally buy the one-off instead of upgrading. Whether that is a bug depends on whether you want Solo customers migrating to a non-recurring SKU — usually you do not.

**Step 3 — apply the ceiling honestly.** $29 sits inside the verified **$9.95–$36** band. **But the band's cohort is personal-insight reports, and a bookkeeping batch is not one** — different buyer, different job, different comparison set (the buyer's alternative here is an hour of their own time or a bookkeeper's hourly rate, not another personality test). **The transfer is a prior, not evidence.** `[willingness to pay for a Ledgerly one-off batch — no data; run the qualitative interview sequence in derivation-methods.md; do not treat $9.95–$36 as measured for this product.]`

**Step 4 — the honest recommendation that falls out.** Ledgerly's need is seasonal (a freelancer's receipts spike at tax time), the deliverable is bounded, and a one-off would serve a buyer the current ladder turns away — the person with 400 receipts once a year who will not start a subscription. But three things must hold: price it so that "subscribe and cancel" does not beat it, fence it so it does not undercut Solo per-receipt, and give it permanence (the processed entries stay exported and downloadable forever) so it is genuinely a different product rather than a month of Books wearing a different name. **And do not build it expecting it to feed the subscription** — L14 says that conversion does not happen honestly, and Ledgerly has no human relationship to make it the exception.

## How it is presented

- **Specify the deliverable physically.** Format, length, delivery time, what is inside it. This is the single most consistent behaviour across every credible one-off report product observed.
- **State the input cost as well as the price.** "10 to 20 minutes" (UnderstandMyself) tells the buyer the total cost of the transaction, which for a one-off is money *plus* effort.
- **Say "one-time" in the price string.** With no free tier and no trial to build trust, the absence of recurrence is a feature and must be legible without reading terms.
- **Never auto-renew a one-off, never pre-tick a subscription, never require a cancellation to avoid a charge.** The single-use code is the honest primitive; the negative option is the ROSCA exposure.
- **Where a one-off and a subscription sit side by side, make both first-class and let the buyer choose.** MentorCruise ships "$39/call" alongside "$120–$270/month", both publicly priced, plus "Try your first call for free with every mentor" — the only researched model that serves the one-off buyer honestly *and* has an upgrade path. **The upgrade is offered by satisfaction, not extracted by default.**

## Who runs it

| Product | Structure | Observed | Teardown |
|---|---|---|---|
| UnderstandMyself | Pure one-off, "$9.95", assessment + report, no subscription | 2026-08-12 | — |
| 16Personalities | Free test at scale + "$29" one-off report; treats the one-off as terminal | 2026-08-12 | — |
| Enneagram Institute | "$20 per test" RHETI; bundle "$40 $36"; deliverable specified as PDF with 2,500-word type descriptions | 2026-08-12 | — |
| Intro.co | Pure one-off marketplace — named experts selling a single video call, "$39" to "$2,500"; no subscription anywhere; **no conversion attempt to recurring** | 2026-08-12 | — |
| MentorCruise | Honest dual-track — "$39/call" one-off alongside "$120–$270/month", both public, free first call | 2026-08-12 | — |
| Talkspace (psychiatry) | "$299" initial evaluation as a true one-off inside a subscription business ("$475" for three follow-ups) | 2026-08-12 | — |
| Nomads.com | Pure two-rung one-off ladder — **"$19.99 Lifetime / $9.99 Lite"**, no subscription; reportedly down from a "$100 lifetime" in 2022, founder's explanation not found | 2026-08-12 | — |
| Stoic | "$299.00 Lifetime Premium" at ~3× its top annual AI SKU ($99.99) — a one-off *purchase of a subscription* | 2026-08-12 | — |

## Migrating into and out of it

**Into it, from subscription:** adding a one-off SKU is cheap and low-risk *if* it clears the dominance test and the per-unit checks. It reaches a buyer the subscription turns away. The risk is cannibalisation of the entry tier, which the per-unit check detects.

**Out of it, to subscription: assume it does not work.** This is the strongest negative finding in L14 and it is worth restating as an operating rule: **one-off → subscription works only when the recurring product is a different, obviously better thing** — an ongoing relationship with a specific human — not a repetition of the same deliverable. The two companies that tested this structurally landed on opposite sides of an FTC complaint.

**The alternative to migrating is accepting terminality and building for it.** 16Personalities monetises breadth (a billion tests) rather than depth. That is a real business, and it requires an acquisition engine — usually `free-core.md` — rather than a retention engine.

**Repricing a one-off** is the easiest reprice in this library: no installed base, no grandfathering, no notice period. Change the number and watch the next cohort. That freedom is the model's underrated advantage and the main reason to ship one early.

## Interactions

**Composes with:** `free-core.md` (free product, paid artefact — 16Personalities is the reference), `hybrid.md` (every top-up pack is a one-off and inherits its inequalities), `subscription.md` (as a lifetime SKU or as an honest dual track — MentorCruise), `hard-paywall.md` (Talkspace's "$299" sits behind a door with no free experience).

**Excludes:** nothing structurally — but it excludes *auto-renewal* absolutely, and a one-off with a renewal attached is not this model, it is a subscription with a misleading price string.

**Pattern layers that matter most:** `07-risk-reversal` (with no trial and no relationship, the guarantee carries the whole trust load), `09-trust-and-proof` (the deliverable specification is the proof), `06-copy-and-framing` (the words "one-time" are load-bearing), `10-checkout` (single-use code, no stored card by default).

## Where this model is contested

**1. The ceiling might be a cohort artefact rather than a law.** $9.95–$36 is verified across four independent products with no exceptions above $36 — genuinely the most reliable number in the L14 lane. But all four are **personality/self-insight reports sold to consumers**, a category with a decades-old price anchor and a strong free-alternative shadow. Whether the ceiling binds a bounded professional deliverable — a tax batch, a contract review, a structured plan — **is not established by this data**, and treating it as a law would systematically underprice products in adjacent categories. It is the most-transferable prior available and it is still a prior.

**2. The market leader's revealed preference argues the one-off is not monetisable at all.** JustAnswer had the demand, the data and every incentive, and chose negative-option continuity over an honest one-off. That is either evidence that the one-off price ceiling is below the cost of serving the transaction, or evidence that a growth-stage company preferred recurring revenue for reasons unrelated to unit economics. **The FTC complaint tells us what they did, not why the honest version failed.**

**3. The AI-category vacancy has two readings and the evidence cannot separate them.** Not one verified AI advice product sells a one-off, while human marketplaces have proven the transaction at $39–$500. Open gap, or privately tested and rejected. **Anyone presenting the vacancy as an opportunity is choosing a reading, and should say so.** L14 flags the blocked sources (Ash/Slingshot AI, Wysa, Sonia, Rocket Money's in-app ladder) as the places the answer would most likely be found.

**4. Terminal revenue is contested as a business model, not as a transaction.** A one-off has no MRR, no renewal base and no expansion path, so it is structurally disfavoured by investors and by every SaaS metric convention. The counter-evidence is thin but real: Nomads.com abandoned recurring entirely for a two-rung lifetime ladder at $19.99/$9.99, and Stoic sells a $299 lifetime alongside its subscriptions. **Two products is an observation, not a trend**, and the founder rationale for the Nomads.com move could not be found.
