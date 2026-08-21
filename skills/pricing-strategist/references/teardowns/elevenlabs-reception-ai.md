# ElevenLabs Reception AI

- **URL:** https://elevenlabs.io/docs/reception-ai/billing/plans-and-pricing.md
- **Observed:** 2026-08-12
- **Fetched successfully:** **yes** — the plans-and-pricing documentation page fetched directly. **Note what was fetched: this is a documentation page, not a marketing pricing page.** There is no headline, badge, CTA, testimonial or FAQ to capture, and every such field below reads `N/A — documentation page, not a marketing page` rather than `none observed`. A separate marketing pricing page, if one exists, was not located.
- **Category:** AI tool (AI phone receptionist for small businesses)
- **Buyer:** a small business that answers its own phone and wants to stop
- **Value metric:** **phone minutes**, with **web chat minutes** as a second allowance running at exactly 2× the phone allowance at every rung
- **Model:** volume-laddered subscription with **a single flat overage rate published alongside the plan allowances** — `<models pack pending — references/models/ not yet populated>`
- **Scale:** unknown — nothing observed

> **This teardown exists because six other files in this corpus already cite it.** `bannerbear.md`, `descript.md`, `gamma.md`, `midjourney.md`, `photoai.md` and `talkspace.md` all reference `elevenlabs-reception-ai.md` as the corpus's canonical published sub-plus-top-up pair, and the file did not exist. It is a different product from core ElevenLabs TTS; **do not conflate its numbers with `elevenlabs.md`.**

## Structure, top to bottom

`N/A — documentation page. The extracted content is a plans table followed by a billing-mechanics paragraph. There is no marketing section sequence to record.`

## Verbatim copy

- **Headline / subhead / tier descriptors / badge / billing toggle / savings expression / CTAs / guarantee / microcopy:** **`N/A — documentation page, not a marketing page.`** None of these elements exist on the surface that was fetched.
- **Tier names:** Free Trial · Basic · Plus · Premium
- **Price strings, verbatim:** **"$0 (14 days)"** · **"$22/month"** · **"$55/month"** · **"$99/month"**
- **Allowance strings, verbatim:** **"30 phone minutes"** / **"60 web chat minutes"** (Free Trial) · **"60"** / **"120"** (Basic) · **"200"** / **"400"** (Plus) · **"500"** / **"1,000"** (Premium)
- **The overage sentence, verbatim, and it is the reason this page is in the corpus:**
  > **"Additional usage is billed at $0.40 per credit"**
  
  applied **uniformly across Basic, Plus and Premium.** The Free Trial has no overage.
- **Annual billing:** **not present on the fetched page.** No annual option, no annual price and no annual discount were captured.
- **Rollover / expiry:** **not stated on the fetched page.**
- **Limit language beyond the allowances and the overage rate:** `N/A — not captured in research`

> **⚠ THE ONE ASSUMPTION EVERYTHING BELOW RESTS ON.** The plans are denominated in **minutes** and the overage is denominated in **credits**, and **the page does not publish the mapping between them.** Every per-unit figure in this file assumes **1 credit = 1 phone minute.** Note that web chat minutes are exactly 2× phone minutes at every rung, so **if credits map to chat minutes instead, every plan rate below halves and every top-up multiple doubles.** This is flagged, not resolved. It is the single weakest link in the corpus's most load-bearing datapoint.

## Tier table

| Tier | Monthly | Annual (as displayed) | Fenced on | Allowance | CTA | Badge |
|---|---|---|---|---|---|---|
| Free Trial | **"$0 (14 days)"** | — | duration and volume | **"30 phone minutes"** · **"60 web chat minutes"** | N/A | — |
| Basic | **"$22/month"** | not present | volume | **"60"** phone min · **"120"** web chat min | N/A | — |
| Plus | **"$55/month"** | not present | volume | **"200"** phone min · **"400"** web chat min | N/A | — |
| Premium | **"$99/month"** | not present | volume | **"500"** phone min · **"1,000"** web chat min | N/A | — |

**Overage: "Additional usage is billed at $0.40 per credit", flat across all three paid tiers.** **Expiry:** not stated. **Refund:** not stated.

## Ladder arithmetic

**Price per phone minute at each rung.**

| Tier | Monthly | Phone minutes | **$/minute** |
|---|---|---|---|
| Basic | $22 | 60 | **$0.36667** |
| Plus | $55 | 200 | **$0.27500** |
| Premium | $99 | 500 | **$0.19800** |

**Discount, entry to top: 46.0%** ($0.36667 → $0.19800) across an **8.33× volume range** (60 → 500 minutes). Per step: Basic → Plus is **25.0%**, Plus → Premium is **28.0%**. The curve is monotonic and does not flatten at the top, which puts it in a small minority within this corpus.

**The web chat allowance is a constant multiple, not a second curve.** 120 ÷ 60 = 2. 400 ÷ 200 = 2. 1,000 ÷ 500 = 2. **The second meter is pinned at exactly 2× the first at every rung**, which means it carries no segmentation work at all. Contrast `descript.md`, whose two meters disagree with each other badly enough to invert, and `figma.md`, whose credit meter runs backwards against its seat meter. **A second allowance that is a fixed multiple of the first is a simplification, not a second lever** — it costs nothing to publish and never needs its own explanation.

**The top-up premium, and this is the number the corpus is built on.** The overage is a single flat **$0.40 per credit** against in-plan rates that decline as you climb:

| Tier | Plan $/minute | Overage $/minute | **Top-up as a multiple of plan** |
|---|---|---|---|
| Basic | $0.36667 | $0.40 | **1.09×** (+9.1%) |
| Plus | $0.27500 | $0.40 | **1.45×** (+45.5%) |
| Premium | $0.19800 | $0.40 | **2.02×** (+102.0%) |

**One number produces the whole schedule.** The flat rate is pegged just above the **worst** in-plan rate, which is the **entry** tier's, and three consequences follow mechanically:

1. **The ladder cannot invert at any rung.** $0.40 sits above $0.36667, the most expensive in-plan minute anyone can buy, so no customer at any tier can purchase a top-up minute below their own plan's marginal rate. Cannibalisation is eliminated structurally rather than managed by rules.
2. **The penalty widens automatically as the customer grows.** A flat rate against a declining in-plan curve produces escalating upgrade pressure — 1.09× at the bottom, 2.02× at the top — with no per-tier overage table and no additional policy written anywhere.
3. **It is one number to publish, explain and defend.** The entire overage policy is nine words.

**The common mistake this page avoids.** Pegging the overage to the *top* tier's rate feels generous and hands the entry customers a live arbitrage: at $0.198 flat, a Basic customer could buy minutes at 46% below their own plan rate and never upgrade. **Peg to entry and every tier is safe; peg to the top and your smallest customers get the best marginal price in the business.**

**Note where 2.02× lands.** `midjourney.md` reaches **2.00×** at its volume tiers with a completely different unit and a completely different rationale, and `talkspace.md` reaches **2.00×** on a human service. **Three independent products, three unrelated categories, all converging within 0.02× of a 2× top-up premium at the top of their ladders.**

**The free trial, computed.** 30 phone minutes at Basic's $0.36667 is **$11.00 of value**, plus 60 web chat minutes, bounded at 14 days. That is **half the entry plan's monthly allowance**, given for two weeks — generous by the standards of the AI-tool cohort, and affordable because a receptionist that never receives a call costs nothing to run.

**Does any add-on invert the ladder?** **No, and it is one of only three pages in this corpus where the check can actually be run**, because both halves of the arithmetic are published. The check passes at every rung: $0.40 > $0.36667 > $0.27500 > $0.19800.

**Does a lower tier plus top-ups reach a higher tier?** In spend, yes; in economics, never favourably. A Basic customer buying 140 extra minutes to match Plus's 200 pays $22 + (140 × $0.40) = **$78.00**, against **Plus at $55.00** — topping up is **41.8% more expensive than upgrading**. Matching Premium's 500 minutes from Basic costs $22 + (440 × $0.40) = **$198.00** against **$99.00**, a **100% penalty**. **The gap widens with volume without a single rule being written to make it happen.**

**Refund arithmetic:** `N/A — no refund or guarantee language was captured.`

## Social proof, trust and objection handling

`N/A — documentation page. No logos, counts, ratings, testimonials, press, security or privacy framing appear on the surface fetched.`

## FAQ

`N/A — documentation page. No FAQ present on the fetched surface.`

## Mechanisms in use

`<pattern IDs pending — library numbering in progress>`

- **A single flat overage rate published on the same surface as the plan allowances** — the corpus's cleanest sub-plus-top-up pair.
- **Overage pegged just above the entry tier's in-plan unit price**, producing an automatically graduated premium up the ladder.
- **A second allowance pinned at a constant 2× multiple of the primary meter**, carrying no segmentation work.
- **A duration-bounded free trial sized at half the entry plan's monthly allowance** ("$0 (14 days)", "30 phone minutes").
- **Monotonic volume curve that does not flatten at the top rung** — unusual in this corpus.

## What they do that most pages don't

**They publish the overage rate next to the plan allowances.** Of the thirteen products in this corpus that sell both a plan and something purchasable on top, only three publish enough numbers in a common unit for a buyer to compute an add-on premium, and a fourth — Vercel — publishes enough to compare its in-plan and out-of-plan rates on the same meter. `descript.md`, `gamma.md`, `cursor.md` and `runway.md` all confirm a top-up exists and withhold the rate. Publishing it makes the ladder checkable, which is a cost only if the ladder does not survive the check.

**They chose one rate instead of a table.** The temptation with a declining in-plan curve is to write a matching overage curve so that the premium feels equally fair at every tier. Doing that removes the upgrade pressure the flat rate creates for free.

## What they conspicuously omit

- **The credit-to-minute mapping**, which is the one thing needed to make the published overage rate mean something without an assumption. This is the page's real gap and it is a significant one.
- Any annual billing option, discount or commitment.
- Any rollover or expiry policy for unused plan minutes.
- Every element of a marketing pricing page: headline, badge, CTA, guarantee, social proof, FAQ.

## Documented pricing changes

| Date | Change | Stated reason | Source |
|---|---|---|---|
| — | `N/A — no pricing history was captured for this product.` | — | — |

## What transfers, and what doesn't

**This is the single most transferable page in the corpus for anyone selling a metered plan with an overflow, and the transferable part is one sentence long.**

**Genuinely universal:**

1. **Set one flat top-up price at roughly 1.1× the per-unit price of your cheapest paid tier.** Observed here at +9.1% over entry, which resolves to +45.5% at the middle rung and +102.0% at the top without any further rules. `midjourney.md` reaches the same 2× at the top from the other direction, pegging a flat $4/hr against a $2.00/hr plan rate.
2. **Never peg the top-up to your best tier's rate.** It reads as generous and it hands your entry customers a marginal price below their own plan's.
3. **Publish both halves.** A buyer who can compute the premium can also see that upgrading always wins, which is the argument the ladder is supposed to make anyway.
4. **If your second meter does not segment, pin it to a constant multiple of the first and stop thinking about it.** Two meters that scale independently is a design decision that has to earn its keep, and here it does not have to.

**Not transferable:** the 46.0% entry-to-top curve. It is defensible here because a phone minute at Premium plausibly costs the seller less to serve at volume, and because the buyer is a business with a payroll comparison in mind. A consumer product selling an identical unit at every tier is bound by the shallower constraint `elevenlabs.md` demonstrates at 17.5%.

**The caveat that limits everything above:** the 1-credit-equals-1-minute assumption is unverified. If a credit maps to a web chat minute, the plan rates halve and the premiums become 2.18×, 2.91× and 4.04×. The *shape* of the finding survives either way — flat overage above the entry rate, widening up the ladder — but the specific multiples do not.
