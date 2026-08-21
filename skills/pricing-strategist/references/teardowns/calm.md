# Calm

> **⚠ THE PRICING PAGE WAS NEVER OBTAINED.** `calm.com/subscribe` and `calm.com/pricing` both returned **HTTP 403** on direct fetch; through the text proxy, `/subscribe` resolves only to an account-creation gate. **Every price in this file comes from the App Store IAP manifest or from dated secondary sources, never from Calm's pricing page.** Page structure, tier descriptors, CTA copy, badges, savings expressions and guarantee language for the pricing page are **unobtainable, not absent.**

- **URL:** https://www.calm.com/subscribe and https://www.calm.com/pricing (both 403); https://www.calm.com/ (rendered); https://apps.apple.com/us/app/calm/id571800810 (IAP manifest)
- **Observed:** 2026-08-12
- **Fetched successfully:** **no** for pricing. The homepage rendered via proxy and is the source of all verbatim marketing copy below. **Calm gates pricing behind account creation on the web** — the only copy behind `/subscribe` is "Experience Calm", "Create a free Calm account", and the terms acknowledgment. **That gating is itself the finding.**
- **Category:** consumer subscription (sleep / meditation / mental wellness)
- **Buyer:** individual; family plan and lifetime exist per secondary sources
- **Value metric:** **the account** — flat all-you-can-use, nothing metered
- **Model:** freemium consumer subscription with a 7-day trial `[secondary]`, a family plan and a lifetime SKU — `<models pack pending — references/models/ not yet populated>`
- **Scale:** homepage claims **"Over 2 million 5-star reviews"**; App Store shows **"4.8"** from **"2M ratings"** (2026-08-12)

## Structure, top to bottom

**Pricing page: unobtainable.**

On the **homepage** (fetched 2026-08-12), the order is: category claim → feature specifics with numbers → testimonial wall → research/science block. **Price appears nowhere on the homepage.**

## Verbatim copy

All from the homepage, fetched 2026-08-12, unless noted.

- **Headline / positioning:** **"Calm is the #1 mental health app designed to help you manage stress, sleep better, and live a happier, healthier life"**
- **Social proof:** **"Over 2 million 5-star reviews"**
- **Testimonials:**
  - **"When I cannot fall asleep, I turn on this app and am out within 5 minutes."**
  - **"I have a very busy brain and can find it hard to unwind. Now a daily practice is actually so wonderful and healing for me."** — John from Chicago
  - **"Calm has changed my life in immeasurable ways. I am more resilient and feel so much more connected to myself."** — Allison from San Jose
- **Feature-as-proof:** **"500+ Sleep Stories®, soundscapes, and guided sleep meditations"** · **"60-second Breathe Bubble"**
- **Science framing:** **"Our research-based tools help you build life-changing habits to support your mental health"**; study framing **"In a Calm Science study of 900+ parents (US) who use Calm Kids with their kids at least once a week"**, reporting 74% lower parenting stress, 95% saying Sleep Stories help their child fall asleep faster, 63% better own sleep
- **App Store editorial copy, 2026-08-12:** subtitle **"Sleep, Meditation, Relaxation"**; editorial opens **"Take a deep breath. That phrase greets you whenever you open Calm. It's both a call to action and a defining feature of the app's approach to meditation: You're going to get through this, and all you need to start is a moment."**
- **Account gate at `/subscribe`:** "Experience Calm" · "Create a free Calm account"
- **Tier names / descriptors / badge / billing toggle / savings expression / CTAs on the pricing page:** **not obtained**
- **Annual framing on the pricing page:** **not obtained**
- **Guarantee / refund:** **not obtained first-party**

## Tier table

| Tier | Monthly | Annual (as displayed) | Fenced on | Allowance | CTA | Badge |
|---|---|---|---|---|---|---|
| Calm Premium | **$14.99 and $16.99 — both live as IAP SKUs** | **$69.99 and $79.99 — both live as IAP SKUs** | full library | unlimited | not obtained | not obtained |
| Family (up to 6) | — | **$99.99/yr — `[secondary]` only** (carepaths, thedolceway, both 2026) | 6 accounts | unlimited | not obtained | — |
| Lifetime | — | **Sources conflict: $399.99 (thedolceway, 2026-03-12) vs $499.99 (carepaths, 2026). Neither is first-party. Do not cite either without verification.** | perpetual | unlimited | not obtained | — |

The App Store manifest also shows a **$29.99** SKU and a separate **"Calm Subscription $14.99"** SKU. **Trial:** 7-day, per secondary sources.

> ### ⚑ Live price A/B test, readable from public data
> **Two concurrent monthly SKUs ($14.99 / $16.99) and two concurrent annual SKUs ($69.99 / $79.99) were live in the App Store IAP manifest on 2026-08-12** — an active production price test.
>
> The same signature appeared in Duolingo's manifest on the same day (see `duolingo.md`). **The App Store IAP list is a free, standing window into a competitor's price testing, requiring no account and no access to a protected page.** For a company that 403s automated fetches and gates its price behind account creation, the store listing is the leak. **Treat this as a repeatable research method.**

## Ladder arithmetic

**Annual discount, all four combinations.** Effective monthly rates: $69.99 ÷ 12 = **$5.83**; $79.99 ÷ 12 = **$6.67**.

| Monthly SKU | Annual SKU | Annual as monthly | Saving |
|---|---|---|---|
| $14.99 | $69.99 | $5.83 | **61.1%** |
| $14.99 | $79.99 | $6.67 | **55.5%** |
| $16.99 | $69.99 | $5.83 | **65.7%** |
| $16.99 | $79.99 | $6.67 | **60.7%** |

**Every combination exceeds 55%, and the monthly-to-annual ratio runs 2.25× to 2.91×.** This is the top of the 2.2×–2.9× band the consumer-subscription cohort clusters in, and it is the clearest instance of the tactic retention.blog named outright in 2023: Calm **"prices monthly plans higher to make annual appear more attractive."**

**The test is on the monthly arm, and that is the tell.** Annual has sat at $69.99 in the manifest across 2023 (Adapty) and 2026 (App Store) with $79.99 live alongside it, while monthly is being tested at $14.99 and $16.99. **The headline annual price has been essentially flat for three years while monthly rose** — the monthly-inflation tactic visible directly in the price data rather than inferred from copy.

**Family arithmetic** `[secondary]`. $99.99/yr for up to 6 = **$16.67/yr, or $1.39/month, per person** at full occupancy. Break-even against individual annual: 2 × $69.99 = $139.98 > $99.99, so **two accounts already beat two individual subscriptions by $39.99.** The same break-even-at-two shape as Duolingo, Headspace and Strava.

**Lifetime arithmetic** `[secondary, and the two sources conflict]`. Against $69.99/yr annual:
- At $399.99 → **5.7 years to break even.**
- At $499.99 → **7.1 years to break even.**

**Both figures are second-hand and mutually inconsistent, so the break-even is a range with an unverified base.** What the range does establish is the shape: a lifetime SKU priced at roughly six to seven annual terms is asking the buyer to pay for a decade of a habit they have not yet formed. Compare `journaling-cohort.md`, where Stoic's $299 lifetime sits at roughly 3× its top annual SKU.

**Does any add-on invert the ladder?** No add-ons exist. **Does a lower tier plus add-ons reach a higher tier?** No stacking path — the ladder is a single product at different durations and occupancies.

**Refund arithmetic:** **not obtained.** No first-party guarantee or refund language was retrievable.

## Social proof, trust and objection handling

Substantial, and all of it on the homepage rather than at the point of sale — which is consistent with a page that will not show a price until you create an account.

**"Over 2 million 5-star reviews"**, three named-and-located testimonials, quantified features ("500+ Sleep Stories®", "60-second Breathe Bubble"), and a **first-party research brand**: "In a Calm Science study of 900+ parents (US)…" with three specific percentages attached.

**Calm does not cite external studies; it manufactures the authority and names it.** The sample size is stated, the numbers are specific, and the provenance goes unexamined by the reader. This is effective and it is available only to a company that can fund the survey.

## FAQ

**Not obtained** — the pricing page was never retrieved. Recorded as unobtainable, not absent.

## In-app paywall, where documented

| Source | Date | Placement | Structure | Notes |
|---|---|---|---|---|
| retention.blog | **2023-11-20 — nearly 3 years old** | Post-onboarding | Text-heavy paywall aimed at skeptical users; **dynamic paywalls with imagery and copy matched to the content the user came from** | Reports Calm **"prices monthly plans higher to make annual appear more attractive"**; quotes value messaging **"Fall asleep faster, Easy tools for immediate relief, Find your Calm today"**, the volume claim **"50,000+ minutes of audio"**, and the science claim **"24% reduction in anxiety"**. Also reports Calm evolved *away* from leading with free trials, toward annual-with-discount, then removed both from onboarding. **Do not treat as current — read as a documented trajectory** |
| retention.blog | 2023-11-20 | Off-app | **40% discount ($41.99) sent by email, routing to Stripe web checkout** | Deliberate App Store fee avoidance. **Whether this is still running is unverified** |
| Adapty paywall library — Calm | Screens captured **2023-04-28 and 2023-06-10** | In-app | Records IAP range $14.99–$79.99 | **The library page contains no machine-readable paywall copy** — the screenshots are images. The on-screen text could not be quoted and **was not invented** |

## Mechanisms in use

`<pattern IDs pending — library numbering in progress>`

- **Pricing opacity as strategy.** The one mechanism statable with confidence from first-party evidence: **Calm will not show a US visitor a price without an account.** The smallest possible foot-in-the-door before the number appears.
- **Features quantified into proof** ("500+ Sleep Stories®", "50,000+ minutes of audio", "Over 2 million 5-star reviews").
- **First-party research branded as an institution** ("Calm Science"), with sample size stated.
- **Speed-of-relief as the promise** rather than an outcome claim.
- **Monthly inflation to make annual inevitable** — visible in the price data, not just the 2023 reporting.
- **Live multi-price A/B testing** in the store manifest.
- `[secondary, 2023]` **Content-matched dynamic paywalls** and an **email discount routing to Stripe** to avoid store fees.

## What they do that most pages don't

**Calm runs its own science brand.** "In a Calm Science study of 900+ parents (US)" is a company-funded survey wearing the clothes of research, and it works because the numbers are specific and the sample size is stated.

**Calm sells a speed-of-relief claim rather than an outcome claim.** The lead testimonial is **"out within 5 minutes"** — falsifiable tonight. That is a much easier promise to believe than "reduce your anxiety", and it is checkable by the buyer on the first evening.

## What they conspicuously omit

**Assessable only for the homepage**, since the pricing page was never seen:

- **No price anywhere on the homepage**, and none behind `/subscribe` without an account.
- No guarantee or refund language observed anywhere.

**Omissions on the pricing page cannot be assessed** — recording them would be fabrication.

## Documented pricing changes

| Date | Change | Stated reason | Source |
|---|---|---|---|
| through 2023 | Onboarding moved trial-forward → annual-with-discount → **removing both from onboarding** | not stated | `[secondary]` retention.blog, 2023-11-20 |
| 2023 → 2026 | **Annual has sat at $69.99 across both observations** (Adapty 2023, App Store 2026), with $79.99 live alongside it in 2026 | — | Adapty `[secondary, stale]` + App Store manifest, observed |
| 2023 → 2026 | **Monthly rose** while annual held — the monthly-inflation tactic visible in the data | not stated | derived from the two rows above |
| 2026-08-12 | Two monthly and two annual SKUs live simultaneously | — | App Store manifest, observed. **A live test, not a history** |

**Known conflict, unresolved:** Calm Lifetime is $399.99 per thedolceway (2026-03-12) and $499.99 per carepaths (2026). **Neither is first-party.**

## What transfers, and what doesn't

**Scale-driven, do not copy:**
- **The science brand.** "Calm Science" requires funding a study. A solo founder citing invented research will be caught, and in a trust-dependent category that is unrecoverable. The honest substitutes are the number of people you have actually helped, your own experience told plainly, and the specific method you use — **provenance you can defend beats authority you have borrowed.**
- **Pricing opacity.** Gating the price behind account creation is available to a market leader whose brand pulls people through the gate. A product nobody has heard of pays the full abandonment cost and gets nothing. See `betterhelp.md`, where **39% of surveyed users said they wanted more immediate information about pricing.**

**Category-driven:** the testimonial wall, the sleep-tonight promise, the family plan.

**Genuinely universal:**
1. **Make the promise falsifiable tonight.** "…out within 5 minutes" beats "reduces anxiety over time" because the buyer can check it before the trial ends. **Fast and checkable beats large and vague.**
2. **Quantify your features into proof.** A counted feature reads as evidence of investment; an uncounted one reads as a claim.
3. **Read the IAP manifest.** Calm blocks fetches, gates its price and renders nothing publicly — and its live price test is still legible from the store listing.
4. **If you inflate monthly to sell annual, know the observed band: 2.2×–2.9×.** Calm sits at the top of it. Whether that is right for you depends on whether your buyer's need has an end — see `oura.md` for the counter-example, where pushing annual would reopen a settled objection.
