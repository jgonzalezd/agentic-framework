# Midjourney

> **⚠ ENTIRELY SECOND-HAND. NO PAGE WAS EVER FETCHED.** Every fetch path failed. **No string in this file is verbatim page copy.** All quoted strings are quoted *by third-party articles as being from* Midjourney's plans page and docs. Two independent sources agree on the tier figures, which raises confidence but does **not** make them first-hand. Do not cite anything here as observed on midjourney.com.

- **URL attempted:** https://www.midjourney.com/plans
- **Observed:** 2026-08-12
- **Fetched successfully:** **no.** Direct fetch returned 403 (Cloudflare); `curl` with a browser user-agent returned 403; the `r.jina.ai` proxy returned Midjourney's own 404 page ("This page has not been /imagine'd yet"); every `docs.midjourney.com` article URL attempted returned 404 through the proxy. **Second-hand sources, fetched 2026-08-12:** eesel (published 2026-06-05), techjacksolutions.
- **Category:** AI tool (image and video generation)
- **Buyer:** individual creator, then commercial studio
- **Value metric:** **time on a machine.** "Fast GPU Time", measured in hours per month. Alone in the AI-tool cohort, the unit is neither a count of outputs nor an abstract credit — it is **rented compute duration, priced by the hour.**
- **Model:** subscription with a metered compute-time allowance, a second unlimited-but-queued lane, and non-expiring purchased top-ups — `<models pack pending — references/models/ not yet populated>`
- **Scale:** unknown — nothing observed

## Structure, top to bottom

Per secondary sources only: four plan columns (Basic, Standard, Pro, Mega) with a monthly/annual toggle at 20% off, each column listing Fast GPU hours, Relax mode availability, concurrency limits, and Stealth mode.

**Headline, subhead, badge, CTA copy and section order could not be verified — none of it survived any fetch path.**

## Verbatim copy

**None available.** The strings below are second-hand quotations, each attributed:

- **Fast GPU allocations**, as quoted by eesel (2026-06-05) and techjacksolutions: "Fast GPU 3.3 hr/mo" · "Fast GPU 15 hr/mo" · "Fast GPU 30 hr/mo" · "Fast GPU 60 hr/mo"; Basic also given as "3.3 hr/month (200 minutes)"
- **Relax mode:** **"Unlimited"** images in Relax on Standard, Pro, Mega; Pro and Mega get "Unlimited Images & SD Video"; per techjacksolutions, "Relax mode lets you generate without spending fast GPU hours"
- **Stealth mode:** "only available on the Pro and Mega Plans" / "available only on the Pro and Mega plans"
- **Top-up:** **"$4/hr"** across all plans; techjacksolutions adds "extra fast hours cost $4 each and do not expire"
- **Annual discount:** "20% discount on your subscription by committing to an annual plan" / "Pay for a full year upfront and every tier drops by 20%"
- **Expiry**, per eesel: "Unused Fast GPU time still resets monthly even on annual plans" and **"Fast hours don't roll over."**
- **Refund**, per eesel: refunds available only if consumption is "fewer than 20 GPU minutes total — roughly 15-20 basic image generations"
- **Commercial fence**, per techjacksolutions: companies with "$1,000,000 in gross annual revenue" must use Pro or Mega
- **Cost calibration**, per eesel: "A single still image uses roughly one GPU minute, while an HD video batch uses about 26."
- **Badge / CTAs / guarantee wording as displayed:** `N/A — not captured; no fetch path rendered the page`

## Tier table

*(All figures second-hand. Two independent sources agree on all of them.)*

| Tier | Monthly | Annual (as displayed) | Fenced on | Allowance | CTA | Badge |
|---|---|---|---|---|---|---|
| Basic | $10 | "$96/yr" ($8/mo) | **no Relax at all** — the only hard stop | 3.3 hr/mo Fast GPU | not verified | not verified |
| Standard | $30 | "$288/yr" ($24/mo) | Relax unlocked | 15 hr/mo Fast; "Unlimited" Relax images | not verified | not verified |
| Pro | $60 | "$576/yr" ($48/mo) | Stealth; video in Relax | 30 hr/mo Fast; "Unlimited Images & SD Video" Relax | not verified | not verified |
| Mega | $120 | "$1,152/yr" ($96/mo) | Stealth; highest concurrency | 60 hr/mo Fast; "Unlimited Images & SD Video" Relax | not verified | not verified |
| Top-up | **"$4/hr"**, all plans | — | — | purchased hours **"do not expire"** | — | — |

**Overage:** "$4/hr". **Expiry:** included hours reset monthly, no rollover; purchased hours never expire.

**Concurrency**, per eesel: Basic 3 Fast · Standard 3 Fast or Relax · Pro and Mega 12 Fast or 3 Relax. Video concurrency: Basic 1 Fast · Pro 6 Fast or 3 Relax · Mega 12 Fast or 3 Relax.

## Ladder arithmetic

*(Computed from second-hand figures. The arithmetic is sound; the inputs are not first-hand.)*

**Price per Fast GPU hour at each rung (monthly billing):**

| Tier | Monthly | Hours | **$/hr** |
|---|---|---|---|
| Basic | $10 | 3.3 | **$3.03** |
| Standard | $30 | 15 | **$2.00** |
| Pro | $60 | 30 | **$2.00** |
| Mega | $120 | 60 | **$2.00** |

**The curve is a step, not a slope.** Basic is 51.5% more expensive per hour than every tier above it, and Standard → Pro → Mega are **exactly flat at $2.00/hr** across an 18× volume range. There is no volume discount at all above the entry rung. Basic is not a volume tier — it is a **paid trial**, priced badly on purpose so that Standard reads as the first serious option. (The same shape appears in `photoai.md` at 7.8× and `elevenlabs-reception-ai.md` at 33%.)

**Annual discount, checked.** $96 ÷ ($10 × 12) = 0.80; $288 ÷ $360 = 0.80; $576 ÷ $720 = 0.80; $1,152 ÷ $1,440 = 0.80. **Exactly 20% at every tier** — the stated discount is honest and uniform.

**The top-up premium — the number that makes this page worth reading.** Included hours run **$2.00/hr** on every tier above Basic; top-ups run **"$4/hr"**. That is a clean, computable **2× premium**, and it is priced *above the entry tier's own rate too* ($3.03), so **no customer at any tier can buy top-up hours below their plan's marginal rate. The ladder cannot invert.** This is the same structural result as `elevenlabs-reception-ai.md` reaches with a flat $0.40 overage, arrived at independently.

**Does a lower tier plus top-ups reach a higher tier?** Test it: a Standard customer ($30, 15 hr) buying 15 more hours pays $30 + (15 × $4) = **$90 for 30 hours**, against **Pro at $60 for 30 hours**. Topping up is **50% more expensive than upgrading**, so the upgrade always dominates — a well-formed ladder. And the gap widens with volume: matching Mega's 60 hours from Standard costs $30 + (45 × $4) = **$210 vs $120**, a 75% penalty. **The premium scales against the customer automatically, with no per-tier rule written anywhere.**

**Expiry asymmetry, and it is rare.** Subscription hours reset monthly with no rollover; **purchased top-up hours "do not expire."** Paid-for capacity is treated as **property**; included capacity is treated as a **lease**. Most credit systems expire both. This is the same device Runway uses (`runway.md`) — permanence as the non-price justification for a higher unit rate.

**Refund fence, computed in the right unit.** "Fewer than 20 GPU minutes total" ≈ 15–20 basic image generations, and at $2.00/hr represents about **$0.67 of consumed compute**. The refund is fenced on the thing the company cannot recover, not on a calendar.

**Buyer-frame conversion, using the published rate.** At ≈1 GPU minute per still image: Basic 3.3 hr ≈ **200 images**; Standard 15 hr ≈ **900 images**; Mega 60 hr ≈ **3,600 images**. At ≈26 minutes per HD video batch: Standard's 15 hr ≈ **34 video batches**. Third-party guides all perform this conversion, **which is evidence the page itself does not do it well enough.**

## Social proof, trust and objection handling

**Not observable.** No fetch path rendered the page. Absence here means unobtainable, not absent.

## FAQ

**Not observable.** Every docs URL attempted returned 404 through the proxy.

## Mechanisms in use

`<pattern IDs pending — library numbering in progress>`

- **Compute-time as the literal unit** — the buyer is sold the actual COGS driver.
- **Dual speed lanes** — metered Fast, unlimited-but-queued Relax — converting a hard cap into a **speed tier**. This is the most important idea in the AI-tool lane. A buyer who exhausts Fast is not cut off; they are slowed down. The cost ceiling holds because Relax runs on spare capacity, so marginal COGS approaches zero at the margin, while the user's experience of the limit changes from "blocked" to "waiting". **Note the fence: Basic gets no Relax at all, so the cheapest tier is the only one with a genuine hard stop — which is precisely where the upgrade pressure has to live.**
- **Concurrency as a second independent throttle** — you can have hours left and still be blocked by parallel-job limits.
- **Hourly top-up at a legible 2× premium that never expires.**
- **Monthly reset with no rollover on included hours.**
- **Privacy (Stealth) fenced to the top two tiers** — a non-volume fence that does not touch COGS.
- **A revenue-based commercial fence** at "$1,000,000 in gross annual revenue" — like Vercel's Hobby restriction, a fence on *who you are* rather than *how much you use*.
- **A refund policy quantified in consumed units.**

## What they do that most pages don't

**They price the overage in the same unit as the allowance, at a legible rate.** "$4/hr" against 15 hours for $30 means included hours run $2/hr and top-ups run $4/hr — a 2× premium the buyer can compute in their head. Almost nobody else in the AI-tool cohort lets you compare the marginal price to the average price at all, because their units are not priced per-unit anywhere.

**A time-denominated unit auto-adjusts to model economics.** If a new model is 3× more expensive to run, an image simply consumes 3× the hours and no announcement is required. A count-denominated unit cannot do this — see `cursor.md` for what happens when a company tries to reprice a count.

**The refund policy is denominated in usage, not in days.** "Fewer than 20 GPU minutes total" maps to the actual thing the company cannot recover: spent compute. A buyer who tried it and didn't like it gets their money back; a buyer who generated 400 images does not. Time-based windows get this exactly wrong in both directions.

## What they conspicuously omit

**Cannot be assessed** — the page was never observed. Recording "omits X" here would be a fabrication.

## Documented pricing changes

| Date | Change | Stated reason | Source |
|---|---|---|---|
| — | not verified | — | techjacksolutions explicitly notes it "lacks ... explicit pricing change history with specific dates"; search budget exhausted |

**Gap, stated plainly:** no verifiable pricing history. Midjourney's own pages were unreachable and the reachable secondary sources carry no dated change log.

## What transfers, and what doesn't

**Category-driven:** compute-hours as a unit only make sense when compute duration genuinely is your cost driver and your buyer will tolerate learning a conversion rate. The evidence that they only half-tolerate it is that every third-party guide has to do the conversion for them.

**Genuinely universal, and this page carries three of the best items in the corpus:**

1. **Build the Relax lane.** When the allowance runs out, do not block — degrade. Unlimited on a smaller model, or queued at low priority, or capped at shallower depth. Nobody hits a wall, so nobody churns at a wall; your headline ("25 fast X, then unlimited standard X") reads more generous than a competitor's flat count while costing you less; and the cap converts from a source of resentment into a continuously-felt demonstration of what the paid tier buys. **Fence the cheapest tier out of the Relax lane**, exactly as Basic is fenced — the entry rung should be the only one with a hard stop.
2. **Price the top-up in the same unit as the allowance, at a visible multiple, pegged above your entry tier's rate.** "$4/hr" against $2.00/hr included is arithmetic the buyer does instantly, and pegging above the *entry* rate makes inversion structurally impossible at every tier. See `elevenlabs-reception-ai.md` for the generalised rule.
3. **Refund on consumption, not on calendar.** "Fewer than 20 GPU minutes" is trivially auditable, maps to unrecoverable cost, and lets you advertise a genuinely generous guarantee with almost no exposure.

**And one transferable caution:** a unit that tracks your costs perfectly still needs a published conversion into the buyer's frame. Midjourney has the most economically honest unit in the cohort and still relies on third parties to explain it. If you adopt a cost-shaped unit, publish the conversion yourself.
