# Noom

- **URL:** `https://www.noom.com/`, `https://www.noom.com/blog/weight-management/noom-cost/`
- **Observed:** 2026-08-12
- **Fetched successfully:** **yes** for both Noom URLs. **Funnel detail is `[secondary]`**, from `revenuecat.com/blog/growth/web-to-app-onboarding-funnel` and `web2appworld.com/breakdowns/noom/`, both fetched 2026-08-12.
- **Category:** advice/wellness (behaviour-change weight programme, now with GLP-1 medication)
- **Buyer:** an individual with a weight goal, intercepted by a quiz
- **Value metric:** **a multi-month programme term** — 4, 6 or 12 months, sold as a block
- **Model:** **quiz-to-paywall funnel** — ~113 screens of personal disclosure before any price appears — `<models pack pending — references/models/ not yet populated>`
- **Scale:** unknown — no user count observed; claims are outcome percentages

**Included in this corpus not for its category but because it is the most studied example of converting personal disclosure into willingness to pay.**

## Structure, top to bottom

Per RevenueCat `[secondary]`, verbatim where quoted:

- **"approximately 113 screens over 10-15 minutes."**
- A behavioural quiz of **10 slider questions**, with **"Question X of 10"** shown throughout.
- Sequence: goal selection ("What's your weight loss goal?") → health questions (sex assigned at birth, gender identity, pregnancy status, weight, medical conditions) → **event/deadline identification** → pace selection → 10-slider behavioural quiz → nutrition and habit questions → stress-management mini-quiz → **loading screens with educational content** → results → **paywall**.
- Urgency: stress management offered as a **"free enhancement if I sign up within 15 minutes"** — *"The 15-minute countdown creates urgency."*
- The trial is **"pay what you want"** across three options — and critically: **"regardless of which trial price you choose, you proceed to the same offer in terms of costs after the trial."**

## Verbatim copy

- **Headline:** **"Meds to lose the weight. Noom to keep it off."**
- **Mission line:** **"We're changing the way the world thinks about weight loss."**
- **Quiz framing:** **"take a quick quiz to customize your experience based on your goals, lifestyle, and preferences"**
- **Results screen** `[secondary]`: **"this plan was built just for you"** — *with the analyst's caveat* **"even while knowing some of it is smoke and mirrors"**
- **Trial framing** `[secondary]`: **"it costs us X to offer this trial"** — with an **"altruistic nudge ('help others access Noom')"**
- **Outcome claims:** **"37% more weight lost with Noom + GLP-1 than with medication alone"** · **"98% of Noomers say Noom helps change their habits and behaviors for good"**
- **Personalisation promise:** **"Your plan will be customized based on your responses to the Noom questionnaire at sign-up."**
- **CTAs:** **"See if you qualify"** / **"Start your trial"**
- **Badge:** `none observed`
- **Billing toggle:** `none` — the three plan lengths are the choice
- **Savings expression:** expressed as **"average monthly cost"** per term — see arithmetic
- **Guarantee / refund:** `none observed`
- **Limit language:** `N/A — the programme is not metered`

## Tier table

| Plan | Price | Effective monthly (as displayed) |
|---|---|---|
| Noom Weight, 12 months | **"12 months $209"** | **"average monthly cost $17.42"** |
| Noom Weight, 6 months | **"6 months $179"** | **"$29.83"** |
| Noom Weight, 4 months | **"4 months $169"** | **"$42.25"** |
| Trial | **"7-day trial available, cancel anytime"** — "pay what you want" across three options `[secondary]` | |
| Homepage offer | **"$49 Limited-Time Offer: Microdose GLP-1Rx Program"** | |
| GLP-1Rx | **"Starts at $129 for the initial 4-week supply, then $279 per month"** | |
| Reported street price `[secondary]` | **"$59.99/month (often increasing to $70/month after initial promotion)"** | |

**Overage:** none. **Expiry:** the term itself.

## Ladder arithmetic

**The per-month curve is steep and monotonic, and every displayed figure checks out.**

| Term | Total | ÷ months | Displayed | Discount vs 4-month rate |
|---|---|---|---|---|
| 4 months | $169 | $42.25 | "$42.25" ✓ | — |
| 6 months | $179 | $29.83 | "$29.83" ✓ | **29.4% cheaper** |
| 12 months | $209 | $17.42 | "$17.42" ✓ | **58.8% cheaper** |

**The marginal arithmetic is the interesting part.** Going from 4 months to 6 costs **$10 for two extra months — $5.00 per month.** Going from 6 to 12 costs **$30 for six extra months — $5.00 per month.** **The marginal price of an additional month is exactly $5.00 at both steps**, against a first-term rate of $42.25/month.

**So Noom is not selling a programme with a volume discount. It is selling a $169 entry fee plus $5/month.** Read that way, the 12-month plan is $169 + (8 × $5) = $209 — the arithmetic reconciles perfectly. **The entry fee is 81% of the 12-month price**, which means the buyer's real decision is made once, and every additional month is nearly free. That is the correct structure for a business whose cost is front-loaded into onboarding and whose risk is early churn.

**Against the reported street price** `[secondary]` of "$59.99/month (often increasing to $70/month after initial promotion)": the 12-month plan at $17.42/month is a **71%–75% discount** to the ungated rate. **The number the buyer sees after 113 screens is a fraction of the number that exists elsewhere**, which is what makes the funnel's investment feel repaid.

**The trial arithmetic is the sharpest observation in the file.** The trial is **"pay what you want"** across three options — **"regardless of which trial price you choose, you proceed to the same offer in terms of costs after the trial."** **The price flexibility is purely psychological: it changes nothing downstream.** What it does is convert a binary (trial / no trial) into a choice the user has already made in the seller's favour, plus an "altruistic nudge" that recruits the user's self-image into the purchase.

**GLP-1 arithmetic, separately.** "Starts at $129 for the initial 4-week supply, then $279 per month" — the second month is **2.16× the first.** A $49 "Limited-Time Offer" sits on the homepage above a $279/month product, i.e. **the advertised number is 17.6% of the recurring one.** This is the same shape as `justanswer.md`'s nominal-fee anchoring, here applied to a disclosed and legitimate product ladder rather than to a hidden continuity charge — but the psychological mechanism is identical, and the distance between the entry number and the recurring number is what a reader should measure.

**Does any add-on invert the ladder?** No add-ons on the programme; GLP-1Rx is a separate product.

**Does a lower tier plus add-ons reach a higher tier?** No — the terms are mutually exclusive blocks.

**Refund arithmetic:** none — no guarantee observed. The 7-day trial is the risk reversal.

## Social proof, trust and objection handling

**Percentage-outcome claims** — "37% more weight lost with Noom + GLP-1 than with medication alone", "98% of Noomers say Noom helps change their habits and behaviors for good" — plus an **"AS SEEN IN" logo wall** (Fortune, WebMD, Healthline, Forbes, Fast Company, The New York Times, Bloomberg).

**And, most importantly, the questionnaire itself as a credibility device.** Being asked 100+ specific questions **signals expertise before any expertise is demonstrated.** The loading screens dramatise computation the user cannot see. The results screen says **"this plan was built just for you"** — which the analyst who documented it believed **"even while knowing some of it is smoke and mirrors."**

**The sunk-cost logic, stated plainly by the web2app analysis:** *"Every question answered is another reason not to quit. The longer the quiz, the harder it becomes to walk away without seeing what's behind the paywall."*

## FAQ

**None captured.** `N/A — not captured in research.`

## Mechanisms in use

`<pattern IDs pending — library numbering in progress>`

- **Questionnaire-as-commitment-device at extreme length** — ~113 screens, 10–15 minutes, before any price.
- **Processing theater** — loading screens that dramatise computation the user cannot see.
- **Progress visibility** ("Question X of 10") to keep the quiz completable.
- **Deadline elicitation** — asking the user to name their own event **converts their urgency into the product's.**
- **Countdown urgency** — a "free enhancement if I sign up within 15 minutes".
- **Pay-what-you-want trial with a fixed back end** — price flexibility that is purely psychological.
- **Personalisation as the price justification** — the plan is expensive because it is *yours*.
- **Entry fee plus near-free months**, presented as a volume discount.
- **Nominal-fee anchoring on the medication product** ($49 offer above a $279/month recurring).

## What they do that most pages don't

**They ask the user to name their own deadline.** Event/deadline identification mid-quiz means the urgency at the paywall is **the buyer's own**, supplied by the buyer, and therefore unarguable. No countdown timer can manufacture what the user has already told you.

**They price the trial three ways and route all three to the same offer.** A choice that changes nothing downstream still produces a commitment upstream.

**They make the questionnaire the credential.** In a category where a solo product has no clinicians and no studies, this is the cheapest authority signal available — and the most dangerous, because it is authority the product has not earned.

## What they conspicuously omit

- **Any price, for 113 screens.**
- Any money-back guarantee.
- Any FAQ on the observed pages.
- Any statement of what the plan costs at renewal, on the pages captured.

## Documented pricing changes

| Date | Change | Stated reason | Source |
|---|---|---|---|
| — | Reported street price of **"$59.99/month (often increasing to $70/month after initial promotion)"** | not stated | `[secondary]`, undated in research |

`No dated first-party pricing history was obtainable, and none was reconstructed.`

## What transfers, and what doesn't

**Scale-driven, and the arithmetic of the mechanism is the reason not to copy it.** The sunk-cost engine **needs** ~113 screens over 10–15 minutes to function. A short intake pays the **full trust cost of gating** — 39% of BetterHelp's users resent it (`betterhelp.md`) — and collects **almost none of the benefit.** There is no small version of this technique that works; it is a threshold effect, and below the threshold you are simply hiding your price.

**Do not adopt:**
1. **The 15-minute countdown.** In an emotionally sensitive category, a ticking clock is coercive, will be recognised as coercive, and poisons the trust the purchase depends on.
2. **Processing theater and "built just for you"** where the personalisation is thinner than the theatre implies. The analyst who documented Noom's flow called it "smoke and mirrors" *while being persuaded by it* — a solo product caught doing the same has no brand to absorb the discovery.
3. **A questionnaire used as a credential.** Being asked many questions signals expertise you may not have.

**Genuinely universal:**
1. **Ask the buyer to name their own deadline.** It converts their urgency into your urgency without a single manufactured scarcity device, and it is the one technique on this page that is both effective and honest.
2. **Decompose your term pricing before you publish it.** Noom's "volume discount" is an **entry fee plus $5/month**, and reading it that way tells you exactly where the business's cost and risk sit. Run the same decomposition on your own ladder: if the marginal month is nearly free, say so or price it deliberately.
3. **Divide the term price down to a monthly figure and display it.** "12 months $209 / average monthly cost $17.42" — the user pays $209 once; the number they remember is $17.42.
4. **A choice that changes nothing downstream can still buy commitment upstream** — but be careful: `noom.md`'s pay-what-you-want trial is disclosed as flexible and undisclosed as inconsequential. The line between a harmless commitment device and a deceptive one is whether the buyer would feel cheated on discovering the mechanism.
