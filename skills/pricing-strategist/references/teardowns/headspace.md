# Headspace

- **URL:** https://www.headspace.com/subscriptions (plus https://www.headspace.com/family-plan)
- **Observed:** 2026-08-12
- **Fetched successfully:** **yes, via the `r.jina.ai` text proxy.** A direct fetch rendered the page skeleton but returned prices as `null USD` and every social-proof number as `0.0` / `0M`; the proxy resolved the real prices. **The social-proof counters remained zeroed in both fetches**, so the labels are captured and **the numbers are not — they were not guessed.**
- **Category:** consumer subscription (meditation / mental wellness)
- **Buyer:** individual; student and family escape hatches offered for the price-sensitive
- **Value metric:** **the account** — flat all-you-can-use, nothing metered
- **Model:** freemium consumer subscription with **asymmetric trial lengths** by billing period — `<models pack pending — references/models/ not yet populated>`
- **Scale:** unknown — the proof labels exist but **all three numbers returned as zeros in both fetches**

## Structure, top to bottom

1. Promise
2. Invitation to choose
3. Two plans, annual marked "Best value"
4. Renewal disclosure in plain language
5. What's included
6. Student and family escape hatches for the price-sensitive

## Verbatim copy

- **Headline:** **"Be kind to your mind"**
- **Secondary headline:** **"Find some headspace today"**
- **Subhead:** **"A healthier, happier you starts right here. Choose a Headspace plan and get started"**
- **Tagline:** **"The everyday app for feeling better"**
- **Tier names:** Monthly · Annual (plus Family and Student on separate surfaces)
- **Tier descriptors:** **"Annual - 14 days free"** · **"Monthly - 7 days free - $12.99 USD/month"**
- **Badge:** **"Best value"** — on **Annual**
- **Billing toggle:** `none` — the two plans are shown side by side as cards, not swapped by a control
- **Savings expression:** `none as a percentage` — the annual plan is instead displayed as **"$5.83 USD/month"** against a monthly plan of $12.99, so the comparison is done in units rather than in a claim
- **CTAs:** **"Start your free trial"** and **"Try for free"**; Family: **"Get started"**
- **Guarantee / refund:** **none present.** No refund or money-back language appears on the subscriptions page. **The trial is the risk reversal.**
- **Renewal disclosure, verbatim:** **"After your free trial, the annual subscription is $69.99 USD and automatically renews each year."**
- **Student plan:** **"Save 85%, with valid SheerID student verification, for our student plan"**
- **Cross-sell:** **"Check out our student and family plans, too."**
- **Family page:** headline **"One big happier family"**, with **"Enjoy 6x the mindfulness for less"**, $99.99/yr for 6 accounts, CTA **"Get started"**
- **Limit language:** `N/A — nothing is capped; the tiers differ only by billing period and occupancy`
- **Included:** **"Access our entire library of meditations, sleep sounds, yoga and fitness, and focus music"** · **"Get a new meditation delivered to your phone every day"** · **"Daily inspirational videos to start the day off right"**

## Tier table

| Tier | Monthly | Annual (as displayed) | Fenced on | Allowance | CTA | Badge |
|---|---|---|---|---|---|---|
| Monthly | **$12.99 USD/month** | — | billing period | unlimited | "Start your free trial" | — |
| Annual | **displayed as $5.83 USD/month** | **$69.99 USD/year** | billing period | unlimited | "Start your free trial" | **"Best value"** |
| Family (6 accounts) | — | **$99.99 USD/year** | occupancy | unlimited | "Get started" | — |
| Student | — | **"Save 85%"** via SheerID | verified identity | unlimited | — | — |

**Trial: 14 days on Annual, 7 days on Monthly.** **Overage:** none. **Expiry:** n/a.

## Ladder arithmetic

**Annual discount, checked.** $69.99 ÷ 12 = **$5.83/month**, matching the displayed figure exactly. Against $12.99 × 12 = $155.88, the annual plan saves **$85.89, or 55.1%.** The monthly-to-annual-equivalent ratio is **2.23×** — the low end of the 2.2×–2.9× band the consumer cohort clusters in.

Note that Headspace **never states the percentage.** It shows $12.99 and $5.83 side by side and lets the reader see that annual is less than half. **A ratio the buyer computes themselves is more persuasive than a percentage the seller asserts**, and it invites no verification.

**Note the direction, which is the cohort-wide rule.** The *big* number is divided down ($69.99 → $5.83/mo). The *small* number is never multiplied up. **No page in the cohort shows "monthly = $155.88/year."**

**Trial arithmetic — the sharpest single idea in the consumer lane.** 14 days on annual versus 7 on monthly is a **2× asymmetry in risk, placed on the plan with 12 months of lock-in.** Headspace is not discounting annual harder; **it is de-risking annual harder.** The user reads it as generosity; it functions as a habit-formation window twice as long on the plan the company wants. Nobody else in the consumer cohort does this.

Compare the structurally identical move in `notion.md`: a 3-day refund window on monthly versus 30 days on annual — a 10× asymmetry, longer window on the plan they want committed to. **Two different categories, same principle: vary the risk, not just the price.**

**Family arithmetic, and the break-even is two again.** $99.99/yr for 6 accounts = **$16.67/yr, or $1.39/month, per person** at full occupancy.

- 1 person: individual $69.99 < family $99.99 → individual wins.
- **2 people: 2 × $69.99 = $139.98 > $99.99 → family wins by $39.99.**
- 6 people: 6 × $69.99 = $419.94 vs $99.99 → family is **76% cheaper**.

**Break-even at two**, identical in shape to Duolingo, Calm and Strava. The verbal version on the family page — **"Enjoy 6x the mindfulness for less"** — states the ratio without stating the arithmetic.

**Student arithmetic.** "Save 85%" against $69.99/yr = **$10.50/yr, or $0.87/month — derived, not observed.** At that level the student plan is not a discount, it is a different product priced to capture a segment that would otherwise pay nothing. Note the fence: **valid SheerID verification**, which is what makes an 85% concession safe to publish.

**Does any add-on invert the ladder?** No add-ons exist.

**Does a lower tier plus add-ons reach a higher tier?** No stacking path. The only cross-plan inversion is the family break-even above, and it is intentional.

**Refund arithmetic:** none — no guarantee exists. The 14/7-day trials are the entire risk reversal.

## Social proof, trust and objection handling

**Labels present, numbers not captured.** The page carries three counters — **"Stars"** (average rating), **"Ratings On iOS and Google Play"**, **"Downloads Across all platforms"** — and **all three returned as zeros in both the direct and proxy fetches.** The numbers were **not guessed.**

The real trust work is done by a single sentence: **"After your free trial, the annual subscription is $69.99 USD and automatically renews each year."** Written in complete, unhedged English, stating both the amount and the recurrence, on the page rather than at checkout. **It builds trust precisely by refusing to bury it** — the same principle Blinkist's fine print operationalises and Growth.Design measured at +23% trial signups.

**The student and family plans function as price objections' escape hatches**: a user about to abandon over $69.99 is offered 85% off or a way to split the cost, rather than being lost.

## FAQ

**None present on the subscriptions page.** `N/A — no FAQ section observed.`

## In-app paywall, where documented

| Source | Date | Placement | Structure | Notes |
|---|---|---|---|---|
| Growth.Design, "How To Properly Apply Jobs-To-Be-Done To User Onboarding" | **Undated on page; references the older Headspace flow — assume stale** | **Before the user sees the app** — splash → signup form → goal selection ("Manage anxiety", sleep, gratitude) → content preview → paywall | **Hard paywall, pre-value** | Verdict quoted: **"Arghh... A paywall before I even see the app!"** and that Headspace **"missed the opportunity to personalize the sell"** against the goal the user had just selected. The reviewer "almost dropped here". Principles named: endowment effect, reciprocity, labor illusion. **The case study does not quote the paywall's own copy, and none was supplied** |

## Mechanisms in use

`<pattern IDs pending — library numbering in progress>`

- **Asymmetric trial length by billing period** — 14 days on annual, 7 on monthly. The single most transferable move in the consumer lane.
- **Annual displayed in monthly units** ($5.83/mo) so both plans sit on one axis where annual wins by more than half.
- **"Best value" badge** doing the deciding on a two-option page.
- **Plain-language renewal disclosure** stating amount and recurrence before purchase.
- **Identity-framed promise** — "Be kind to your mind" reframes buying as an act of self-compassion.
- **Student and family plans as objection escape hatches**, fenced by verification and by occupancy.
- **Two options only.** No third tier, no enterprise column, no comparison table.

## What they do that most pages don't

**They give the plan they want you to buy a longer trial.** Almost every competitor offers one trial length and varies only the price. **Headspace varies the *risk*, which is the dimension the hesitant buyer is actually weighing.**

**"Be kind to your mind" is doing something rare.** It makes declining the purchase feel like a small unkindness to yourself, **without ever saying so**. It never mentions meditation, sleep or focus — it never describes the product at all. Compare the tier-descriptor slot in `notion.md` ("For growing businesses to streamline teamwork"): one of those is worth a price, the other is a taxonomy.

## What they conspicuously omit

- No percentage savings claim — the two prices are shown and the reader does the division.
- No money-back guarantee or refund language.
- No FAQ.
- No third tier and no upsell above annual.
- No social-proof numbers rendered to either fetch — labels only.

## Documented pricing changes

| Date | Change | Stated reason | Source |
|---|---|---|---|
| — | none documented first-party | — | — |

Annual at $69.99 and monthly at $12.99 are the observed 2026-08-12 values. **No dated prior first-party observation exists in this corpus, and none was inferred.**

## What transfers, and what doesn't

**Almost all of it transfers, which makes this the most useful page in the consumer cohort for a small product.** Two plans, no comparison table, no enterprise column, no badge inflation, one promise, one honest sentence about renewal.

**Category-driven:** the self-compassion framing works because the product's benefit is emotional. A utility cannot borrow it without sounding absurd.

**Genuinely universal:**
1. **Give the annual plan a longer trial than the monthly plan.** Headspace's 14-vs-7 is the single most transferable idea in the consumer lane and almost nobody does it. It reads as generosity, functions as lock-in, requires no discount, and is a one-line change in billing config. **Where the buyer's need takes weeks to resolve, the longer window is also the honest amount of time your product needs to prove itself.**
2. **Denominate annual in monthly units and never do the reverse.** "$5.83/month, billed $69.99/year" — divide the big number down, never multiply the small one up.
3. **Show both numbers and skip the percentage.** A ratio the buyer computes is more convincing than a claim they must trust.
4. **Write the renewal sentence in plain English, on the page.** "…automatically renews each year" costs a little conversion at the click and prevents the chargeback, the refund request and the one-star review.
5. **Make the tier descriptor a promise about the buyer's life, not a description of the software.**
6. **Offer identity-fenced concessions (student, family) instead of discounting for everyone.** They recover price-sensitive buyers at the moment of abandonment without touching the headline price.
