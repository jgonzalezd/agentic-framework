# Fathom Analytics — Jack Ellis / Paul Jarvis

- **URL:** https://usefathom.com/pricing
- **Observed:** 2026-08-12
- **Fetched successfully:** **yes** — direct fetch, full extraction. (Their "why no free plan" post **404'd on fetch** — that reasoning is a gap.)
- **Category:** prosumer SaaS (privacy-focused web analytics), indie-scale
- **Buyer:** a site owner or small agency who wants analytics without Google
- **Value metric:** **pageviews**, banded — with **sites** as a separate add-on meter
- **Model:** flat volume-banded subscription with **no free tier and no discounting, both by stated policy** — `<models pack pending — references/models/ not yet populated>`
- **Scale:** unknown — no customer count captured on the pricing page

## Structure, top to bottom

1. Headline
2. Pageview bands with prices
3. Annual framing
4. Trial CTA
5. Site allowance and add-on packs
6. Policy statements — no free tier, no discounts

## Verbatim copy

- **Headline:** **"Simple and sustainable pricing"**
- **Price band captured:** **"Up to 500,000 pageviews"** — **"$45/month"**
- **Savings expression:** **"Pay yearly instead (2 months free)"**
- **Trial:** **"7-day free trial"** · CTA: **"Start your 7-day free trial"**
- **Billing microcopy:** **"All pricing is in USD and renews automatically unless cancelled"**
- **Site allowance:** **"50 sites included"**
- **Add-on:** **"Add them yourself in packs of 50 for $10/month"**
- **On a free tier:** **"Nope, and here's why: we've heavily invested in enterprise-level infrastructure"**
- **On discounts:** **"Never. Not even for Black Friday"**
- **Tier names / descriptors / badge:** `none observed — the bands are the tiers, labelled by pageview ceiling`
- **Billing toggle:** monthly / yearly, `default state not captured`
- **Guarantee / refund:** `none observed` — the 7-day trial is the risk reversal

## Tier table

| Tier | Monthly | Annual (as displayed) | Fenced on | Allowance | CTA | Badge |
|---|---|---|---|---|---|---|
| **Only band captured** | **"$45/month"** | **"Pay yearly instead (2 months free)"** | **pageviews** | **"Up to 500,000 pageviews"**, **"50 sites included"** | "Start your 7-day free trial" | — |
| Add-on: extra sites | **"packs of 50 for $10/month"** | — | sites | 50 sites per pack | — | — |
| Free | **does not exist, by stated policy** | — | — | — | — | — |

**Trial:** 7 days. **Overage:** `not captured — the page's behaviour above 500,000 pageviews was not recorded.` **Expiry:** n/a.

> **Only one pageview band was captured.** The full band ladder is a gap: **the shape of the volume curve for Fathom cannot be computed from this research.**

## Ladder arithmetic

**Per-unit price at the one captured band.** $45 ÷ 500,000 pageviews = **$0.00009 per pageview**, or **$0.09 per 1,000 pageviews.**

**Annual discount, checked.** "2 months free" = 10/12 = **16.7%** — identical to `elevenlabs.md`'s "two months free — you pay for 10 months", and expressed the same way. **Duration rather than percentage.** The buyer does not have to compute anything or trust the base the percentage was taken from; they get two months, and 2/12 is self-evidently correct. **16.7% is the market default across this corpus**, and "two months free" is its canonical phrasing.

**The site add-on, and the inversion check that must NOT be run naively.** The base plan "includes" 50 sites at $45/month; extra sites cost **"packs of 50 for $10/month"**. **A naive reading — "$10 for 50 sites versus $45 for 50 sites" — looks like a 4.5× inversion and is wrong.** The meters differ: **the $45 buys the analytics service itself (500,000 pageviews) and only incidentally 50 sites.** The site count is a container, not the value metric. **No inversion is computable, because the two prices are denominated in different things.**

**What the add-on *is* a clean example of: capacity sold in fixed packs at a flat recurring price, rather than metered.** No per-site rate is published, no partial packs exist, and the price does not scale with usage — a buyer needing 51 sites pays the same $10 as one needing 100. **Chunky, legible, and impossible to get wrong at checkout.**

**Trial arithmetic.** 7 days against $45/month is **$10.36 of value given away** — a modest, well-bounded risk reversal for a product with real infrastructure costs, and the stated reason for having no free tier is exactly that: **"we've heavily invested in enterprise-level infrastructure."**

**Does a lower tier plus add-ons reach a higher tier?** **Not computable** — only one band was captured, so there is no higher band to reach. **Recorded as a gap in the research, not in the page.**

## Social proof, trust and objection handling

**None captured on the pricing page** — no counts, testimonials, ratings or logos.

The objection handling is done entirely by **two policy statements written in the founders' own voice**, and both are unusual:

> **"Nope, and here's why: we've heavily invested in enterprise-level infrastructure"** — on why there is no free tier.
> **"Never. Not even for Black Friday"** — on discounts.

**Both answer an objection by refusing it and giving a reason.** The free-tier answer converts an absence into a quality signal (we spend money on infrastructure, therefore we cannot give it away). The discount answer removes an entire recurring decision — and, more valuably at solo scale, **every discount-hunting support email, forever.**

The billing microcopy — **"All pricing is in USD and renews automatically unless cancelled"** — states currency and auto-renewal in one line, which is the same plain-English renewal disclosure that `headspace.md` and `blinkist.md` do well and most pages bury.

## FAQ

**Present in substance** — the two policy answers above are FAQ-shaped ("Is there a free plan?" / "Do you offer discounts?"). **Full question list and count: `N/A — not captured in research.`**

## Mechanisms in use

`<pattern IDs pending — library numbering in progress>`

- **Volume banding on pageviews** as the value metric.
- **Annual discount expressed as duration** ("2 months free" = 16.7%).
- **No free tier, with a published reason** — an absence converted into a quality signal.
- **A published no-discount policy** — "Never. Not even for Black Friday."
- **Add-on capacity sold in fixed packs at a flat recurring price**, on a meter distinct from the value metric.
- **Short trial in place of a free tier.**
- **Plain-English auto-renewal disclosure.**

## What they do that most pages don't

**They publish a no-discount policy and commit to it in writing.** "Never. Not even for Black Friday" is a single sentence that eliminates a recurring decision and a recurring support load. **At solo scale, decisions you never have to make again are worth real money.**

**They explain why there is no free tier instead of leaving the absence unexplained.** Compare `raycast.md`, which does the mirror-image thing — explains why the free tier *is* so generous. **Both convert a pricing structure into a trust argument by supplying a reason.** An unexplained absence reads as stinginess; an explained one reads as discipline.

**They express the annual discount as time.** "2 months free" needs no verification; "17% off" invites it.

## What they conspicuously omit

- **Any free tier**, deliberately and with a stated reason.
- **Any discount, ever**, deliberately and with a stated reason.
- Any money-back guarantee — the 7-day trial substitutes.
- Any badge, urgency device or "most popular" steering.
- Any social proof on the pricing page.

## Documented pricing changes

| Date | Change | Stated reason | Source |
|---|---|---|---|
| — | none captured | — | Their "why no free plan" post **404'd on fetch** — a real gap |

## What transfers, and what doesn't

**Infrastructure-driven:** the no-free-tier position is justified by real per-user server cost. **A product with near-zero marginal cost cannot borrow this reasoning** — and should not, because for zero-marginal-cost products the free tier is usually the acquisition channel (see `16personalities.md`, `nomads-com.md`).

**Genuinely universal, and this is the most useful page in the corpus for a solo operator's *policy* decisions rather than their price points:**

1. **Price your annual plan as "two months free."** That is 16.7% and it is the market default — ElevenLabs and Fathom independently use the identical phrasing. **Expressing the discount as time rather than a percentage reads larger than the same number as "17% off."** Do not go past 25% without a specific cash-flow reason.
2. **Publish a no-discount policy if you can hold it.** It removes an entire class of decision and an entire class of support email. The cost is the occasional lost sale; the benefit is that you never negotiate again.
3. **If you decline to offer something the market expects — a free tier, a refund, monthly billing — publish the reason.** "Nope, and here's why" converts an absence into a position. An unexplained absence is read as meanness.
4. **Sell add-on capacity in fixed packs at a flat price**, and **check that your pack price and your plan price are denominated in the same meter before you compare them.** Fathom's site packs look like an inversion and are not; a page whose add-on genuinely shares the plan's meter must run the check properly (see `elevenlabs-reception-ai.md` for the rule).
5. **State currency and auto-renewal in one plain line.** "All pricing is in USD and renews automatically unless cancelled" is the whole disclosure, and it belongs on the page rather than at checkout.
