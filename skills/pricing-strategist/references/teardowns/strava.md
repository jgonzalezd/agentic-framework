# Strava

- **URL:** https://www.strava.com/subscribe
- **Observed:** 2026-08-12
- **Fetched successfully:** **yes — the only target in the consumer-subscription lane that rendered on a plain direct fetch.** Confirmed a second time through the `r.jina.ai` proxy with consistent figures.
- **Category:** consumer subscription (fitness tracking / athletic social network)
- **Buyer:** individual athlete, with family, student and affinity variants
- **Value metric:** **the account** — flat all-you-can-use; the free tier is fenced on features (routes, segment leaderboards, training analysis), not volume
- **Model:** freemium consumer subscription, **annual-first with three of four plans annual-only** — `<models pack pending — references/models/ not yet populated>`
- **Scale:** **not present on the subscribe page.** Strava's usual "150 million athletes" claim **did not appear in either fetch.**

## Structure, top to bottom

1. Promise tied to the user's own goals
2. Concrete unlocks
3. Four plan cards, each with an aggressive savings badge
4. Trial framing on every card
5. Affinity discounts (student, teacher, military, medical) as a final catch

## Verbatim copy

- **Headline:** **"The best of Strava. Built for your goals."**
- **Subhead:** **"Unlock subscription features including routes, segment leaderboards, advanced training analysis and more."**
- **Section header:** **"Everything you need, all in one place"**
- **Bundle promo:** **"Train smarter and save up to 60% with Strava + Runna"**
- **Tier names:** Individual · Family · Student · Strava + Runna
- **Tier descriptors:** `N/A — the plans are labelled by audience, not by descriptor lines`
- **Badge:** `no "most popular" badge` — the badges present are **savings** badges: **"Save 44%"** (Individual) · **"50% Off (Verified Students)"** · **"Up to 60% Off"** (bundle)
- **Billing toggle:** `none` — three of four plans are marked **"Annual only."**
- **Savings expression:** **"Save 44%"** · **"50% Off (Verified Students)"** · **"Up to 60% Off"**
- **CTAs:** **"Start free trial"** · **"Choose plan"** · **"Try it free"**
- **Trial language:** **"30-day trial for $0"** · **"Start free 30-day trial"** · and the best line on the page: **"Start achieving your goals. On us for 30 days."**
- **Affinity:** **"25% off a Strava subscription"** for teachers, military and medical professionals (Individual plans only)
- **Guarantee / refund:** **none.** The 30-day trial is the entire risk reversal.
- **Limit language:** `N/A — nothing is metered`
- **Tax disclosure:** **"+ tax"** printed on every annual price

## Tier table

| Tier | Monthly | Annual (as displayed) | Fenced on | Allowance | CTA | Badge |
|---|---|---|---|---|---|---|
| Individual | offered, **price not displayed on the page** | **"$6.67/month"** billed **"$79.99/year + tax"** | routes, leaderboards, training analysis | unlimited | "Start free trial" | **"Save 44%"** |
| Family (4 accounts) | — | **"$2.92/mo. per person"** billed **"$139.99/year + tax. Annual only."** | 4 accounts | unlimited | "Choose plan" | — |
| Student | — | **"$3.33/month"** billed **"$39.99/year + tax. Annual only."** | verified identity | unlimited | "Start free trial" | **"50% Off (Verified Students)"** |
| Strava + Runna bundle | — | **"$12.50/month"** billed **"$149.99/year + tax. Annual only."** | bundled second product | unlimited | "Choose plan" | **"Up to 60% Off"** |

**Trial:** 30 days, $0. **Overage:** none. **Expiry:** n/a.

> **Three of the four plans are marked "Annual only."** Family, Student and the Runna bundle cannot be bought monthly at all. **Monthly survives only on the plain Individual plan, and its price is not even printed on the page** — you must choose it to find out. This is Blinkist's delete-the-monthly tactic applied *selectively*: monthly exists, but only in the least attractive configuration.

## Ladder arithmetic

**Every displayed rate is the annual price divided by twelve, and each one checks out.**

| Plan | Annual | ÷ 12 | Displayed | Match |
|---|---|---|---|---|
| Individual | $79.99 | $6.666 | "$6.67/month" | ✓ |
| Student | $39.99 | $3.333 | "$3.33/month" | ✓ |
| Runna bundle | $149.99 | $12.499 | "$12.50/month" | ✓ |
| Family (÷ 12 ÷ 4) | $139.99 | $2.916 | "$2.92/mo. per person" | ✓ |

**The undisclosed monthly price, derived.** "Save 44%" against an effective $6.67/month implies a monthly price of $6.67 ÷ 0.56 = **$11.91, i.e. almost certainly $11.99 — derived, not observed.** The lane could not see it because the page does not print it. The monthly-to-annual-equivalent ratio would then be **1.79×**, *below* the 2.2×–2.9× band. **Strava does not need to inflate monthly, because it simply declines to show it.**

**The Family plan is the smallest number on the page attached to the second-largest commitment.** $139.99/year is presented as **"$2.92/mo. per person"** — a **double reduction**: annual → monthly, and household → individual. Per person per year that is **$35.00**, against $79.99 for an individual — **56% cheaper per head.**

**Family break-even, again at two.**
- 1 person: individual $79.99 < family $139.99 → individual wins.
- **2 people: 2 × $79.99 = $159.98 > $139.99 → family wins by $19.99.**
- 4 people: 4 × $79.99 = $319.96 vs $139.99 → **56% cheaper.**

The same break-even-at-two shape as Duolingo, Calm and Headspace. **Four independent consumer products converged on it.**

**Student discount, checked.** $39.99 ÷ $79.99 = **50.0%** exactly, matching "50% Off (Verified Students)". The affinity discount (25% off Individual) would put teachers, military and medical at **$59.99/year — derived, not observed.**

**The bundle discount cannot be checked.** "Up to 60% Off" on the Strava + Runna bundle at $149.99/yr requires Runna's standalone price, which **the research does not record.** If Strava alone is $79.99, the bundle adds Runna for an incremental **$70.00/year** — but whether that represents 60% off Runna's list is **not computable from the available data.** Note the hedge: **"up to"**.

**Savings expressed as percentage rather than dollars, and the choice is arithmetic.** "Save 44%" represents roughly $63 against the derived $143 annualised monthly — but Strava quotes the **percentage** because 44 sounds larger than the dollar figure at this price point. Blinkist makes the opposite choice for the opposite reason. **Rule: compute both, publish whichever is the bigger-sounding number.**

**Does any add-on invert the ladder?** No add-ons. The Runna bundle is a separate plan, not a stackable add-on.

**Does a lower tier plus add-ons reach a higher tier?** No stacking path.

**Refund arithmetic:** none — no guarantee exists. The **30-day trial is the longest in the consumer cohort by a wide margin** and is the entire risk reversal. At $79.99/yr the trial gives away **$6.67 of value** to seed a training habit.

## Social proof, trust and objection handling

**Conspicuously thin, and deliberately so.** No athlete count, no testimonials, no logos, no ratings appeared on the subscribe page in either fetch — **Strava's usual "150 million athletes" claim is absent from this page.**

What handles objections instead:
- **"+ tax" disclosed on every card**, which costs a little conversion at the click and buys back trust at checkout.
- **A laddered affinity structure** — 50% student, 25% teacher/military/medical — catching price-sensitive buyers by identity rather than by haggling.
- **The 30-day trial**, framed as generosity rather than as a sample.

## FAQ

**None present on the subscribe page.** `N/A — no FAQ section observed.`

## In-app paywall, where documented

| Source | Date | Placement | Structure | Notes |
|---|---|---|---|---|
| Growth.Design, "Strava: When good UX intentions fail without psychology" | **Undated on page** | Shown to returning users inactive for months | A genuine **free 30-day premium gift** presented in paywall clothing | The critique: the word **"Upgrade"** at the top, a **"25% Off"** banner, and copy saying **"Subscription"** made a free reward read as a sales pitch. Six contradicting signals including a feature list and a decline button. Principles named: contextual design, System 1 thinking. Verdict quoted: **"It's always better to be clear than clever"** |

**No dated screenshot-library entry for Strava's current in-app paywall was found.** Adapty's library did not surface one. Recorded as absence of evidence.

## Mechanisms in use

`<pattern IDs pending — library numbering in progress>`

- **Selective annual-only.** Three of four plans cannot be bought monthly; the fourth's monthly price is not printed.
- **Double division on the family plan** — annual → monthly *and* household → individual, producing the smallest number on the page.
- **Savings badges in percentages**, chosen because the percentage is the larger-sounding number at this price point.
- **A 30-day trial**, long enough to seed a training habit rather than to sample a product.
- **Trial framed as the company underwriting the user's ambition** — "On us for 30 days".
- **Laddered affinity discounts** (50% / 25%) fenced by verification.
- **Honest "+ tax" disclosure on the card.**
- **Goal-instrumentation positioning** — the goals are the user's, pre-existing; the product is instrumentation for them.

## What they do that most pages don't

**"Start achieving your goals. On us for 30 days."** The trial is framed as the company underwriting the user's ambition, not as a product sample. **"On us" carries a generosity that "free trial" has been drained of by overuse** — and it costs nothing to write.

**Strava is unusually honest about tax on the card itself.** "+ tax" on every price. Most consumer pages defer this to checkout, where it reads as a bait-and-switch.

**The headline names the buyer's goals, not the product's features.** "The best of Strava. Built for your goals." The goals are pre-existing and the buyer's own; the subscription is positioned as instrumentation for ambition they already have. **Compare a feature-first framing and note how much less defensive the buyer feels.**

## What they conspicuously omit

- **The monthly price**, on the only plan that offers monthly.
- **The athlete count** — present elsewhere on Strava's site, absent here.
- Any testimonials, logos or ratings.
- Any money-back guarantee.
- Any FAQ.
- Any "most popular" badge — the only badges are savings claims.

## Documented pricing changes

| Date | Change | Stated reason | Source |
|---|---|---|---|
| 2022–2023 | Moved to a unified global subscription with regionally-adjusted pricing | not stated | `[secondary]`, undated in research |
| recent | Runna bundle added, reflecting the 2024 acquisition | not stated | observed as a live plan |

**No dated first-party prior price observations exist in this corpus, and the history was not reconstructed.**

## What transfers, and what doesn't

**Scale-driven:** the Runna bundle requires owning a second product. The affinity-discount ladder requires verification infrastructure (Strava and Headspace both use identity verification to make large concessions safe).

**Category-driven:** the 30-day trial length is calibrated to habit formation in training. A product whose value is demonstrated in one session does not need 30 days, and a product whose value takes three months will not be proved by it either.

**Genuinely universal:**
1. **Divide by every axis you legitimately can.** Annual → monthly, then household → person. "$2.92/mo. per person" attaches the smallest number on the page to the second-largest commitment, and every step of the division is true.
2. **Restrict monthly rather than deleting it.** Marking the good plans "Annual only." and declining to print the monthly price is softer than Blinkist's deletion and achieves most of the same effect — while leaving an escape hatch for the buyer whose need might end.
3. **Frame the trial as a gift, not a sample.** "On us for 30 days" is four words and it is the warmest line in the consumer cohort.
4. **Disclose tax on the card.** Small conversion cost, large trust return, and it removes the worst surprise in the funnel.
5. **Compute both the dollar and the percentage saving, and publish the larger.** Strava publishes 44%; Blinkist publishes $35.00. Both are right for their price point.
6. **Recover price-sensitive buyers by identity, not by discounting for everyone.** A verified 50% is cheaper than an unverified 10%.
