# Duolingo

- **URL:** https://www.duolingo.com/super (marketing page); prices via https://apps.apple.com/us/app/duolingo-language-lessons/id570060128
- **Observed:** 2026-08-12
- **Fetched successfully:** **partial.** The marketing page rendered through the `r.jina.ai` text proxy and yielded verbatim copy; a direct fetch returned an empty body. **All price strings are client-side rendered and did not appear on the page.** Every price below comes from the **App Store in-app-purchase manifest, fetched the same day** — first-party, but from the store listing, not from duolingo.com. In-app paywall claims are attributed to named third parties with their own dates; several are stale and marked.
- **Category:** consumer subscription (language learning, freemium mobile-first)
- **Buyer:** individual learner; family plan seeded at the individual decision point
- **Value metric:** **the account** — a flat all-you-can-use subscription. Nothing is metered; the free tier is fenced on friction (hearts, ads, mistakes) rather than volume.
- **Model:** freemium consumer subscription with a 7-day trial and a family expansion — `<models pack pending — references/models/ not yet populated>`
- **Scale:** page claims **"500m+ total learners worldwide"** and **"#1 downloaded education app"**; App Store shows **"4.7"** from **"5.4M ratings"** (2026-08-12)

## Structure, top to bottom

A soft, low-pressure marketing page: promise → #1-in-category proof → the Super feature set framed as removals of friction (hearts, ads, mistakes) → the trial as a dated timeline → the family expansion.

**The web page is not where the money is made.** Duolingo's conversion machine is the in-app paywall at the end of a very long onboarding; the web page reads like a brand asset by comparison.

## Verbatim copy

- **Headline:** **"learn a new language the fun way"**
- **Subhead:** **"Reach your language goals fast with the world's #1 education app"**
- **Tier names:** Super Duolingo · Super Family · (Duolingo Max — not confirmed first-party)
- **Tier descriptors:** `N/A — not captured in research`
- **Badge:** `none observed on the web page`
- **Billing toggle:** `not observed — prices did not render`
- **Savings expression:** `none observed on the web page`
- **CTAs:** **"Try 1 week free"**
- **Trial language:** **"Try 1 week free"** / **"no commitment. cancel anytime."**
- **Trial timeline, verbatim, three rows:**
  - **"Today: Unlock full access to all Super Duolingo features"**
  - **"Day 5: Get reminded when your trial is about to end"**
  - **"Day 7: Your account is charged, cancel anytime 24 hours before"**
- **Family framing:** **"Enjoy faster learning on up to 6 Super accounts"**
- **Social proof:** **"100+ language courses"** · **"#1 downloaded education app"** · **"500m+ total learners worldwide"**
- **Guarantee / refund:** **none.** There is no refund promise and no money-back language anywhere on the page. **The trial is the risk reversal.**
- **Limit language:** `N/A — the free-tier fences (hearts, ads, mistakes) are described as features removed by Super, not as caps`
- **Microcopy under CTA:** "no commitment. cancel anytime."

## Tier table

| Tier | Monthly | Annual (as displayed) | Fenced on | Allowance | CTA | Badge |
|---|---|---|---|---|---|---|
| Super (individual) | **$9.99 and $12.99 — both live as IAP SKUs** | **$83.99 and $95.99 — both live as IAP SKUs** | hearts, ads, mistake practice | unlimited | "Try 1 week free" | — |
| Super Family | — | **$119.99** (two identical SKUs listed) | up to 6 accounts | unlimited | — | — |
| Duolingo Max | not confirmed first-party | not confirmed first-party | — | — | — | — |
| Gems (consumable) | $0.99 / $4.99 / $9.99 / $19.99 | — | in-app currency | — | — | — |

**Trial:** 1 week, all tiers. **Overage:** none. **Expiry:** n/a.

> ### ⚑ Live price A/B test, readable from public data
> **Two concurrent monthly SKUs ($9.99 / $12.99) and two concurrent annual SKUs ($83.99 / $95.99) were live in the App Store IAP manifest on 2026-08-12.** That is an unresolved production price test, visible to anyone who reads the store listing.
>
> **The technique matters more than the fact.** The App Store IAP list is a free, standing window into any competitor's price testing — no account, no install, no scraping of a protected page. Calm's manifest showed the same signature on the same day (see `calm.md`). **Treat "read the competitor's IAP manifest" as a repeatable research method, not a one-off observation.**

`[secondary]` dealnews (updated 2026-05-11) independently reports "~$12.99/month", "~$83.99 – $95.99/year", "~$119.99/year (covers up to 6 users)" and a "~$47.99/year" student plan. **The student figure is secondary and unverified.**

## Ladder arithmetic

**Annual discount, both arms of the test.**
- Cheap arm: $83.99 ÷ ($9.99 × 12 = $119.88) → **29.9% saving**; effective **$7.00/month**.
- Expensive arm: $95.99 ÷ ($12.99 × 12 = $155.88) → **38.4% saving**; effective **$8.00/month**.

The expensive arm is testing a **higher monthly price against a barely-higher annual price**, which widens the apparent annual discount from 30% to 38% while raising both numbers. That is the monthly-inflation tactic executed as an experiment: the variable being tested is not really the annual price, it is **how punitive monthly has to be before annual becomes automatic.**

**The monthly-to-annual-equivalent ratio** is 1.43× on the cheap arm ($9.99 vs $7.00) and 1.62× on the expensive arm ($12.99 vs $8.00). Both sit *below* the 2.2×–2.9× band seen at Headspace, Calm and Blinkist — **Duolingo punishes monthly less than its peers do**, consistent with a product whose free tier is genuinely usable and whose conversion happens on habit rather than on price pressure.

**Family arithmetic, and it contains a real inversion.** Super Family is **$119.99/yr for up to 6 accounts** = **$20.00/yr, or $1.67/month, per person** at full occupancy. Against individual annual:

- 1 person: individual $83.99 < family $119.99 → individual wins.
- **2 people: 2 × $83.99 = $167.98 > $119.99 → family wins by $47.99.**
- 6 people: 6 × $83.99 = $503.94 vs $119.99 → family is **76% cheaper**.

**The break-even is two.** Any household with two learners should always buy Family, and the individual annual plan is dominated from the second account onward. This is not a flaw — it is the entire reason the family plan is seeded at the *individual* decision point. Per tasu.ai (June 2026), **half of Duolingo's four in-app offers are family plans, shown to a solo user.** The arithmetic is designed to be discovered by someone who arrived alone.

**Gems are a separate, unconvertible meter.** Four consumable SKUs ($0.99 / $4.99 / $9.99 / $19.99) with **no published exchange rate to anything** and no relationship to the subscription price. **No per-unit arithmetic is possible**, and no inversion is computable, because gems and Super are not denominated in a common unit.

**Does a lower tier plus add-ons reach a higher tier?** No. Gems buy in-game consumables, not Super features; there is no stacking path.

**Refund arithmetic:** none — no guarantee exists. The trial's own arithmetic is the substitute: **7 days free, with a company-made commitment to remind on Day 5**, i.e. the user is given 48 hours of warned time to cancel.

## Social proof, trust and objection handling

On the web page: **"100+ language courses"** · **"#1 downloaded education app"** · **"500m+ total learners worldwide"**. From the App Store on the same day: **"4.7"** from **"5.4M ratings"**; subtitle **"Languages, Math, Music & Chess"**.

Note the composition — **every proof point is a count**. A counted feature ("100+ courses") reads as evidence of investment; an uncounted one reads as a claim.

**The trial timeline is the objection handling**, and it is unusually good. Most pages write "7-day free trial, cancel anytime" and consider the objection closed. Duolingo renders the user's future as three dated rows and puts the reminder **inside the product's promise** — "Day 5: Get reminded when your trial is about to end" is a commitment the company makes, not a warning the user must heed.

## FAQ

**None present on the observed page.** `N/A — the Super marketing page carries no FAQ section.`

## In-app paywall, where documented

| Source | Date | Placement | Structure | Notes |
|---|---|---|---|---|
| tasu.ai, "Duolingo Onboarding Teardown: 38 Screens to $1B ARR" | June 2026 | After first lesson and path personalization | 38 screens before/including the paywall; four offers presented, **half of them family plans** | Claims the first element the user meets is **"Try now"** rather than a price — price is deliberately withheld on first view. Framing: the flow is engineered to increase "what the user has to lose" before pricing appears |
| FunnelFox paywall roundup | 2026-04-25 | In-app | Individual and Family side by side | Quotes **"Get started with a 7 day free trial"**, CTA **"Start my free week"**, reassurance **"Cancel anytime"**. Criticises the paywall for never explaining what Super actually includes |
| Axel Le Pennec (@alpennec), X | 2025-09-23 | In-app, multi-step | A/B test sighting | Reports Duolingo testing **a paywall where the user chooses when to receive the end-of-trial reminder**, replacing the fixed "2 days before". **Single-observer report, ~11 months old — a test sighting, not shipped behaviour** |
| Martin Schreiter, LinkedIn teardown | ~2025 (post is "1 year ago") | In-app | — | Makes *recommendations* rather than quoting shipped copy. **His recommended trial timeline is now visibly live on the web page** — the Today/Day 5/Day 7 rows |
| retention.blog, "What do Calm, AllTrails, and Duolingo have in common?" | 2023-11-20 | Post-onboarding | Progressive disclosure: value prop → free-vs-paid comparison → trial reassurance → **price last** | **Nearly three years old; directionally consistent with the 2026 teardowns but do not quote as current** |

## Mechanisms in use

`<pattern IDs pending — library numbering in progress>`

- **Loss-aversion manufacture before the paywall.** Thirty-eight onboarding screens exist to create something worth losing — a streak, a placement, a path. A paywall shown to a user with nothing at stake is just a price.
- **The dated trial timeline** converting an abstract "7-day trial" into three concrete calendar events, with the reminder framed as a company commitment.
- **Deferred price reveal** behind "Try now".
- **Family plan seeded at the individual decision point**, reframing the purchase from personal indulgence to provision for people you love — and raising ACV on the same impression.
- **Live multi-price A/B testing** visible in the store manifest.
- **Friction as the free-tier fence** (hearts, ads, mistakes) rather than volume — the same anti-credit design as TinyWow.

## What they do that most pages don't

**The trial timeline is a diagram, not a sentence.** Three dated rows, with the reminder inside the promise.

**The price is not the first thing on the paywall.** In an industry that leads with a strikethrough, leading with "Try now" is a real deviation.

## What they conspicuously omit

- No price anywhere on the web marketing page — it renders client-side only.
- No money-back guarantee, no refund language.
- No badge and no "most popular" steering on the web page.
- No FAQ.

## Documented pricing changes

| Date | Change | Stated reason | Source |
|---|---|---|---|
| 2026-08-12 | Two concurrent monthly SKUs ($9.99 / $12.99) and two concurrent annual SKUs ($83.99 / $95.99) live simultaneously | — | App Store IAP manifest, observed. **Evidence of an unresolved price test, not a history** |
| by 2024-09-18 | Adapty's paywall-library entry recorded annual at **"$79.99–$83.99"** | — | `[secondary]` adapty.io, last updated 2024-09-18 |
| 2024→2026 | Against today's $83.99–$95.99, **the top of the annual band has moved up roughly 20% in under two years** | not stated | derived from the two rows above |

**No first-party changelog of pricing exists.** Anything more granular would be reconstruction.

## What transfers, and what doesn't

**Scale-driven, do not copy:** the 38-screen onboarding. It works because Duolingo has the traffic to amortise a 15-minute funnel and the brand to survive it. A small product attempting it pays the full abandonment cost and collects almost none of the sunk-cost benefit — see `noom.md`, where the mechanism needs ~113 screens to function.

**Category-driven:** gems, hearts and the game economy; the "fun as the mechanism" positioning, which works because "learn a language" is an intimidating outcome and the *how* dissolves the objection.

**Genuinely universal:**
1. **Turn the trial into dated calendar events, and commit to the reminder.** "Today / Day 5 / Day 7" is three rows of HTML that convert billing terms from a threat the user must track into a promise you make. If you can ship Le Pennec's sighted variant — **let the user choose the reminder day** — you have the most trustworthy trial in your category.
2. **Seed the multi-seat plan at the individual decision point**, and price it so the break-even is two. It reframes the purchase from self-indulgence to provision for others, and it raises ACV on the same impression.
3. **Read your competitors' App Store IAP manifests.** Live price tests are legible from public data.
4. **Quantify your proof.** Every claim on this page is a count.
5. **A friction fence beats a volume fence when marginal cost is near zero.** Hearts and ads cost nothing to remove and create no credit arithmetic, no rollover policy and no unused-balance resentment.
