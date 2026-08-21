# Descript

- **URL:** https://www.descript.com/pricing
- **Observed:** 2026-08-12
- **Fetched successfully:** **yes** for the pricing page. **The top-up rates are NOT public** — the page shows that top-ups exist and withholds the price; help-centre article fetches returned 403. **That gap is a finding, not a research failure.**
- **Category:** prosumer SaaS / AI tool (audio and video editing by transcript)
- **Buyer:** individual creator → team
- **Value metric:** **two independent meters** — **media hours** (transcription) and **AI credits**
- **Model:** per-seat subscription with dual meters and **price-gated top-ups** — `<models pack pending — references/models/ not yet populated>`
- **Scale:** unknown — no customer count captured

## Structure, top to bottom

1. Headline
2. Five tiers with dual allowances
3. Annual framing
4. Top-up availability (without prices)
5. CTAs

## Verbatim copy

- **Headline:** **"A plan for whatever you create"**
- **Tier names:** Free · Hobbyist · Creator · Business · Enterprise
- **Tier descriptors:** `N/A — not captured in research`
- **Badge:** **"MOST POPULAR"** — on **Creator**
- **Billing toggle:** monthly / annual, `default state not captured`
- **Savings expression:** **"Save up to 35% with annual billing"**
- **CTAs:** **"Get started for free"** · **"Get started"** · **"Talk to sales"**
- **Guarantee / refund:** `none observed`
- **Limit language:** the page surfaces **"Top up media minutes"** and **"Top up AI credits"** as available on Hobbyist, Creator and Business — **with no prices attached**
- **Price strings, verbatim:** "$0" · "$24 per person/month" / "$16 per person/month" · "$35 per person/month" / "$24 per person/month" · "$65 per person/month" / "$50 per person/month" · "Custom"

## Tier table

| Tier | Monthly | Annual (per mo) | Fenced on | Allowance | CTA | Badge |
|---|---|---|---|---|---|---|
| Free | **"$0"** | — | volume | 60 min media · **100 AI credits (one-time)** | "Get started for free" | — |
| Hobbyist | **"$24 per person/month"** | **"$16 per person/month"** | volume | 600 min (10 hr) · 400 credits | "Get started" | — |
| Creator | **"$35 per person/month"** | **"$24 per person/month"** | volume | 1,800 min (30 hr) · 800 credits | "Get started" | **"MOST POPULAR"** |
| Business | **"$65 per person/month"** | **"$50 per person/month"** | seats, collaboration, admin | 2,400 min (40 hr) · 1,500 credits | "Get started" | — |
| Enterprise | **"Custom"** | — | — | — | "Talk to sales" | — |

**Overage:** **top-ups exist on Hobbyist, Creator and Business — rates not published.** **Expiry:** `not captured`.

## Ladder arithmetic

**Two meters, and the curves disagree with each other.**

**Cost per media hour (monthly prices):**

| Tier | Monthly | Media hours | **$/hour** |
|---|---|---|---|
| Hobbyist | $24 | 10 | **$2.400** |
| Creator | $35 | 30 | **$1.167** |
| Business | $65 | 40 | **$1.625** |

**Cost per AI credit (monthly prices):**

| Tier | Monthly | Credits | **$/credit** |
|---|---|---|---|
| Hobbyist | $24 | 400 | **$0.0600** |
| Creator | $35 | 800 | **$0.0438** |
| Business | $65 | 1,500 | **$0.0433** |

**The media-hour curve is non-monotonic: Business is 39.2% *worse* per media hour than Creator** ($1.625 vs $1.167). The AI-credit curve, meanwhile, is monotonic but flattens hard — 27.8% entry-to-top, essentially all of it earned in the first step.

**This is not a mistake.** Business is a **per-seat team plan bought for collaboration and admin features**, so its price is not primarily buying hours. **But it is a useful warning: once you have more than one meter and more than one buying reason, your per-unit curve stops being legible, and a spreadsheet-minded customer will notice the inversion and ask about it.**

**Run the inversion test explicitly.** A team of three on **Creator** pays 3 × $35 = **$105/month for 90 media hours and 2,400 credits.** A team of three on **Business** pays 3 × $65 = **$195/month for 120 hours and 4,500 credits.** The Business team pays **86% more for 33% more hours and 88% more credits** — so **Business is bought for the collaboration features, not for the meters**, and any customer who evaluates it on hours alone will conclude it is a bad deal. **It is, on that axis.**

**Annual discount — and the claim does not reconcile with any observed tier.**

| Tier | Monthly | Annual/mo | **Actual discount** |
|---|---|---|---|
| Hobbyist | $24 | $16 | **33.3%** |
| Creator | $35 | $24 | **31.4%** |
| Business | $65 | $50 | **23.1%** |

**"Save up to 35% with annual billing" overstates the best observed discount by 1.7 percentage points — no captured tier reaches 35%.** The hedge "up to" carries the claim, and it is doing real work: **the tier a buyer is most likely to choose (Creator, badged "MOST POPULAR") gets 31.4%, and the most expensive tier gets the smallest discount of the three.** Compare `elevenlabs.md` and `fathom-analytics.md`, whose "two months free" is exactly 16.7% at every rung and needs no hedge. **A percentage with "up to" in front of it signals the buyer probably will not get it — and here, verifiably, nobody does.**

**The Free tier's credits are one-time (100), not recurring**, unlike its 60 monthly media minutes. **A dual-meter free tier where one meter refills and the other does not** — the same one-time-grant device as `gamma.md`'s "400 starter credits that do not refill", applied to only half the product.

**Does any add-on invert the ladder?** **Not computable — the top-up rates are not published.** This is the same choice `runway.md` makes and the opposite of `elevenlabs-reception-ai.md`, which publishes both halves and can therefore be checked. **The lane could not capture either Descript rate, and did not estimate one.**

**Does a lower tier plus top-ups reach a higher tier?** **Unknown for the same reason.** With a 39% per-hour inversion already present between Creator and Business, **an underpriced top-up would make Creator-plus-top-ups strictly dominate Business on both meters** — which is very likely why the rate is not on the page.

**Refund arithmetic:** none — no guarantee observed.

## Social proof, trust and objection handling

**None captured on the pricing page** — no counts, testimonials, ratings or logos.

The page's principal objection-handling device is **the existence of top-ups without their price**: it reassures the buyer that running out is survivable while **deferring the cost conversation to the moment of maximum willingness to pay** — logged in, out of credits, mid-project.

## FAQ

**None captured.** `N/A — not captured in research.`

## Mechanisms in use

`<pattern IDs pending — library numbering in progress>`

- **Two independent meters** (media hours, AI credits) fencing different behaviours separately.
- **Top-ups surfaced on the pricing page with the rate withheld** — public ladder stays clean and comparison-shoppable; the overage conversation happens after login.
- **"MOST POPULAR" on the middle of three paid tiers** — centre-anchoring, and it is also the best per-hour tier.
- **Hedged annual percentage** ("up to 35%") that no observed tier achieves.
- **A one-time credit grant on the free tier** alongside a recurring minutes allowance.
- **A per-seat team tier priced on collaboration, with meters that get worse per unit.**

## What they do that most pages don't

**They run two meters and fence different behaviours with each.** Media hours constrain volume of raw material; AI credits constrain use of the expensive generative features. **Separating them lets Descript sell a long-form podcaster and a heavy AI user different products at the same list price.**

**They put "Top up" on the pricing page and the rate behind a login.** It is a deliberate structure: the ladder stays legible to a comparison shopper, and nobody can compute the inversion the ladder probably contains.

## What they conspicuously omit

- **Both top-up rates.**
- Any refund or guarantee.
- Any social proof or FAQ.
- Any explanation of the Creator→Business per-hour inversion.
- Any rollover or expiry policy for either meter.

## Documented pricing changes

| Date | Change | Stated reason | Source |
|---|---|---|---|
| — | none captured | — | — |

`N/A — no pricing history was obtainable in this research.`

## What transfers, and what doesn't

**Category-driven:** two meters make sense when two genuinely different resources are consumed — storage/transcription time versus generative inference. A single-action product should not manufacture a second meter to look sophisticated.

**Genuinely universal:**

1. **Two meters plus two buying reasons destroys per-unit legibility — know that before you add the second meter.** Descript's Business tier is **39% worse per media hour than Creator**, which is defensible (it is bought for collaboration) and indefensible to a spreadsheet. **If you run more than one meter, expect to be asked about the inversion, and have the answer ready.**
2. **If you say "up to X%", make sure someone actually gets X%.** No captured Descript tier reaches the advertised 35%. **The hedge is legally safe and reputationally expensive**, and the alternative is free: express the discount as duration ("two months free") and it is exactly true at every rung.
3. **Withholding your top-up rate keeps the public ladder clean and hides the arithmetic that would embarrass it.** That is a real strategy with a real cost — a buyer who cannot price the overflow will assume the worst, and `cursor.md` documents what happens when overflow pricing surprises people.
4. **Give the badge to the tier that is genuinely the best value**, as Descript does — Creator is both "MOST POPULAR" and the cheapest per media hour. A badge that survives arithmetic is worth more than one that does not.
5. **A one-time grant on one meter and a recurring allowance on the other is a legitimate free-tier design** — it lets the buyer sample the expensive capability once while using the cheap capability continuously.
