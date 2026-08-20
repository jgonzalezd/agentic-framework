# Bannerbear — Jon Yongfook

- **URL:** https://www.bannerbear.com/pricing/
- **Observed:** 2026-08-12
- **Fetched successfully:** **yes** — direct fetch, full extraction. The $9 → $49 price-change history is **`secondhand`** (the founder's own post could not be fetched).
- **Category:** prosumer SaaS / utility-credit (API for automated image and video generation), indie-scale
- **Buyer:** a developer or marketer automating creative production
- **Value metric:** **API credits**, with **bandwidth** as a second allowance
- **Model:** subscription with a **hard credit cap and no overage, by explicit policy** — `<models pack pending — references/models/ not yet populated>`
- **Scale:** `[secondary + anecdote, May 2022]` listenupih.com: **"Bannerbear is doing $36K MRR with 450 paying users"** ≈ **$80/user/month** derived. **Four years stale.**

## Structure, top to bottom

1. Headline
2. Three tier cards with credits and bandwidth
3. Free-trial entry
4. Limit policy

## Verbatim copy

- **Headline:** **"Start Automating Today"**
- **Tier names:** Automate · Scale · Enterprise
- **Tier descriptors:** `N/A — not captured in research`
- **Badge:** `none observed`
- **Billing toggle:** `none observed`
- **Savings expression:** `none observed`
- **CTAs:** **"Start a Free Trial"** · **"OK Lets Get Started"** *(sic — the missing apostrophe is on the live page)*
- **Trial:** **"Start a free trial with 30 API Credits — no credit card required"**
- **Guarantee / refund:** `none observed`
- **Limit language, and it is the most important sentence on the page:**
  > **"It is not possible to go over your monthly image / video API credits limit"**
  
  Users must upgrade if they reach their limit. **No overage. No top-up packs. No rollover mentioned.**

## Tier table

| Tier | Monthly | Annual (as displayed) | Fenced on | Allowance | CTA | Badge |
|---|---|---|---|---|---|---|
| Automate | **"$49 USD / month"** | `none observed` | volume | **"1,000"** API credits/mo · **"10"** GB bandwidth | "Start a Free Trial" | — |
| Scale | **"$149 USD / month"** | `none observed` | volume | **"10,000"** credits/mo · **"50"** GB | "Start a Free Trial" | — |
| Enterprise | **"$299 USD / month"** | `none observed` | volume + bandwidth | **"20,000"** credits/mo · **"100"** GB | "Start a Free Trial" | — |
| Free trial | $0 | — | **30 API Credits, no card** | 30 credits | "Start a Free Trial" | — |

**Overage: none — by explicit policy. Expiry:** `no rollover mentioned`.

## Ladder arithmetic

**Price per API credit at each rung:**

| Tier | Monthly | Credits/mo | **$/credit** |
|---|---|---|---|
| Automate | $49 | 1,000 | **$0.0490** |
| Scale | $149 | 10,000 | **$0.0149** |
| Enterprise | $299 | 20,000 | **$0.01495** |

**Discount, entry to top: 69.5%** across a **20× credit range** — and **completely flat after Scale.**

**Enterprise is marginally *worse* per credit than Scale** ($0.01495 vs $0.0149). **The top rung is not sold on unit price; it is selling bandwidth (100 GB vs 50 GB) and, presumably, support and terms.** This is the corpus-wide regularity, observed again: **the curve flattens or inverts at the top rung in almost every product** — `elevenlabs.md` (Scale worse than Pro), `descript.md` (Business 39% worse per media hour than Creator), `gamma.md` (Ultra exactly flat with Pro). **You are allowed to stop discounting, and everyone does.**

**Bandwidth scales exactly linearly with price and sub-linearly with credits.** 10 → 50 → 100 GB is **5× then 2×**, against credits at **10× then 2×**. At Automate a customer gets **10 MB of bandwidth per credit**; at Scale, **5 MB**; at Enterprise, **5 MB**. **The bandwidth-per-credit ratio halves at the first step and then holds** — so the cheap tier is comparatively generous on bandwidth and stingy on credits, which is the correct shape if credits are the real COGS driver.

**The 69.5% curve is only defensible because of tier-exclusive value.** By the rule established in `photoai.md` and `elevenlabs.md` — **a commodity unit forces a shallow curve, a fenced unit licenses a steep one** — Bannerbear's 69.5% over 20× sits in the "steep" cluster, and what fences it is bandwidth plus enterprise terms rather than output quality. **Without that fence, a Scale-priced credit at 3.3× cheaper than an Automate credit would invite a large customer to run three Automate accounts.**

**The trial, computed.** 30 API credits at the Automate rate of $0.0490 is **$1.47 of value** given away, with **no credit card required.** A minimal, well-bounded sample — enough to prove the API works, not enough to complete a campaign.

**Does any add-on invert the ladder?** **There are no add-ons, deliberately.** **"It is not possible to go over your monthly image / video API credits limit."**

**Does a lower tier plus add-ons reach a higher tier?** **Structurally impossible.** This is **the cleanest example in the corpus of the opposite answer to the sub-plus-top-up question**: rather than pricing a top-up carefully so it does not cannibalise the tiers, **Bannerbear removes the top-up entirely and forces the tier upgrade.**

**The trade is explicit.** The cost is **a hard wall for a customer mid-campaign** — the worst possible moment to be stopped. The benefit is that **the ladder can never invert and the pricing page needs no overage footnote.** For a very small product with few tiers, **the safest top-up price is no top-up.**

**Refund arithmetic:** none — no guarantee observed.

## Social proof, trust and objection handling

**None observed on the pricing page** — no counts, testimonials, ratings or logos.

The objection handling is the **hard-limit sentence itself**, which is unusual: most products bury their cap behaviour. Bannerbear states it plainly on the pricing page, which converts a nasty surprise into a disclosed term. **A buyer who reads "It is not possible to go over your monthly limit" before purchase and hits the wall later has been told; one who has not been told files a support ticket and a refund request.**

**"no credit card required"** on the trial is the second trust device, and the only friction removal on the page.

## FAQ

**None captured.** `N/A — not captured in research.`

## Mechanisms in use

`<pattern IDs pending — library numbering in progress>`

- **A hard cap with no overage, stated explicitly on the pricing page.**
- **Forced tier upgrade as the only response to hitting the limit.**
- **A dual allowance** — credits (the cost driver) plus bandwidth (the delivery constraint) — scaling at different rates.
- **A small, card-free trial** (30 credits ≈ $1.47 of value).
- **A flat top rung** sold on bandwidth and terms rather than unit price.

## What they do that most pages don't

**They refuse to sell overage, and say so.** In a lane where `descript.md` and `runway.md` both hide their top-up rates behind a login and `gamma.md` mentions purchasable credits without a price, **Bannerbear's answer is to have no answer to hide.** The pricing page needs no overage table, no footnote and no per-tier exception.

**They disclose the cap behaviour before purchase.** "It is not possible to go over your monthly image / video API credits limit" is the sentence most companies leave to a help-centre article discovered at 2 a.m. mid-campaign.

## What they conspicuously omit

- **Any top-up, overage or rollover** — deliberately.
- **Any annual billing option** on the observed page.
- Any badge or "most popular" steering across three tiers.
- Any refund or guarantee.
- Any social proof or FAQ.

## Documented pricing changes

| Founder / product | Change | Before | After | Outcome | Evidence | Source | Date |
|---|---|---|---|---|---|---|---|
| Jon Yongfook / Bannerbear | **Raised entry price, narrowed to a niche** (marketers/designers) | **$9/mo** | **$49/mo** | **"$36K MRR with 450 paying users"** | `secondhand` + `anecdote` | listenupih.com/raise-your-prices | Article **May 2022** |

**Observed 2026-08-12, the entry price is still $49 and the range is $49–$299, which matches.** **The $9 → $49 change is real and founder-attributed, but Yongfook's own post could not be fetched — grade it `secondhand`.**

**A 5.4× entry-price increase, accompanied by a narrowing of the target market rather than a broadening of it.** That pairing is the substance of the change: the price rise was not a standalone move but the pricing half of a repositioning.

## What transfers, and what doesn't

**Category-driven:** bandwidth as a second allowance only matters for a product that serves generated media.

**Genuinely universal, and this page is the most useful counter-argument in the corpus to building a top-up system:**

1. **The safest top-up price is no top-up.** Zero inversion risk, zero pricing-page complexity, no rollover policy, no expiry policy, no forfeiture dispute — at the cost of a hard wall for a customer mid-campaign. **Bannerbear operates at 2.5× the price point of a typical consumer web product and still refuses overage, precisely because simplicity is worth more than the marginal revenue.** If the machinery in `elevenlabs-reception-ai.md` and `runway.md` feels like too much apparatus for your size, this is the alternative and it is legitimate.
2. **Disclose your cap behaviour on the pricing page.** Whatever happens when the allowance runs out — hard stop, degraded service, billed overage — say so before the buyer commits. A disclosed wall is a term; an undisclosed one is a refund request.
3. **Expect your top rung to go flat or invert on unit price, and be deliberate about what it sells instead.** Enterprise here is fractionally *worse* per credit than Scale and is selling bandwidth and terms. **Stop discounting when you run out of reasons to discount.**
4. **A steep volume curve requires a fence.** 69.5% over 20× is only safe because the tiers differ on bandwidth as well as credits. Without a fence, keep the curve in the 20–40% band.
5. **Raising price and narrowing the audience are the same move.** Bannerbear went $9 → $49 while narrowing to marketers and designers. A price increase without a repositioning is just a price increase.
