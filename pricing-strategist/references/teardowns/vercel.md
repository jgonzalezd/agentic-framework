# Vercel

- **URL:** https://vercel.com/pricing
- **Observed:** 2026-08-12
- **Fetched successfully:** **partially — with an important caveat.** Both fetch attempts returned what appears to be a **structured / LLM-oriented representation** of the pricing page (it self-describes as "Structured pricing data for Vercel platform"), **not the rendered marketing page.** Plan names, prices, descriptors, feature rows and the FAQ are accurate as served, but **visual layout, badges, billing toggles, social proof, testimonials and any pricing calculator could not be observed.** Every "not present" below means *not observable in what was served*, not *absent from the page*. The Hobby non-commercial restriction is `[secondary]`.
- **Category:** prosumer SaaS (frontend cloud platform / developer infrastructure)
- **Buyer:** individual dev → eng team → platform org
- **Value metric:** **hybrid** — seats ($20/user/mo) **plus** metered infrastructure usage drawn against an included credit
- **Model:** seat subscription with a fungible usage credit and metered overage — `<models pack pending — references/models/ not yet populated>`
- **Scale:** unknown — no customer count observable in the served representation

## Structure, top to bottom

As served (this is the structured representation's ordering, not a verified visual order):

1. Plans (Hobby · Pro · Enterprise)
2. Vercel Delivery Network features
3. Vercel Firewall features
4. Content, Caching & Optimization
5. Vercel Compute
6. AI features
7. Build & Deploy
8. Observability
9. Access & Deployment Security
10. Compliance
11. FAQs

## Verbatim copy

- **Headline:** "Vercel Pricing" — *served as the structured-representation title; **not** confirmed as the visual H1*
- **Subhead:** "Structured pricing data for Vercel platform." — *this is the structured-representation wrapper, not page marketing copy*
- **Tier names:** Hobby · Pro · Enterprise
- **Tier descriptors:**
  - Hobby: "The perfect starting place for your web app or personal project. **Free forever.**"
  - Pro: "Everything you need to build and scale your app. **$20/mo** + additional usage"
  - Enterprise: "Critical security, performance, observability, platform SLAs, and support."
- **Badge:** not observable
- **Billing toggle:** not observable
- **Savings expression:** not observable
- **CTAs:** **not observable in the served representation**
- **Guarantee / refund:** none served
- **Limit language** — price strings and usage examples verbatim:
  - "Free" · "$20/user/month" · "Custom"
  - Edge Requests: "10M per month included; then starting at $2 per 1M"
  - Fast Data Transfer: "1TB / month included; then starting at $0.15 per GB"
  - Active CPU: "Starting at $0.128 per hour"
  - Included credit: Pro includes "$20 of included usage credit"
- **Microcopy / spend reassurance:** "We provide customers with tools to observe, control, and alert on their infrastructure spend with Spend Management. All new teams have a default on-demand usage budget of $200 (which can be customized)."

## Tier table

| Tier | Monthly | Annual (as displayed) | Fenced on | Allowance | CTA | Badge |
|---|---|---|---|---|---|---|
| Hobby | "Free" / "Free forever" | — | personal projects; usage caps; **non-commercial use** `[secondary]` | not itemised in served representation | not observable | — |
| Pro | "$20/user/month" — framed as "$20/mo + additional usage" | not served | commercial use, team features, then metered overage | "$20 of included usage credit" (per team) | not observable | — |
| Enterprise | "Custom" | — | SLAs, security, observability, support | custom | not observable | — |

## Ladder arithmetic

**Published per-unit rates, restated.** Edge Requests **$2 per 1M** = $0.000002 each. Fast Data Transfer **$0.15 per GB**. Active CPU **$0.128 per hour**. Vercel is one of very few pages in this corpus that publishes marginal rates on the pricing page itself rather than in a calculator or docs.

**Does the included credit reconcile with the included allowances?** Not cleanly, and this is the most interesting arithmetic on the page. At list rate:

- 10M edge requests × ($2 / 1M) = **$20.00** — exactly the "$20 of included usage credit".
- 1 TB fast data transfer at $0.15/GB = 1,024 GB × $0.15 = **$153.60** — more than seven times the credit.

The two "included" figures therefore cannot both be denominated in the same $20 credit at published list rates. The most likely explanation is that the served representation **mixes pre- and post-September-2025 language**: the 2025-09-09 change replaced fixed per-metric allocations with a single fungible credit, and the fixed-sounding "10M per month included" / "1TB / month included" strings read as residue of the older model. **This is arithmetic on the figures as served, not a claim about what a Pro account actually receives**, and the lane could not observe the rendered page to resolve it. Flagged as a live inconsistency rather than resolved.

**Seat arithmetic, and the quiet revenue lever.** The credit is reported to belong to **the team, not the seat** `[secondary]`. If so, a two-seat team pays $40/mo and still receives $20 of credit — the included usage **per seat halves at two seats and falls to a third at three**. The headline "$20/mo + additional usage" is stable per seat; the included value is not.

**Spend ceiling as a multiple of the plan.** The default on-demand budget of **$200 is 10× the $20 seat price**. For a usage-priced product the spend cap is the functional equivalent of a guarantee, and publishing the multiple is what makes it reassuring: the buyer learns their worst plausible month before they learn the rates.

**Does any add-on invert the ladder?** No inversion is computable. There are no add-on packs with their own unit price to compare against the seat price; overage is billed at the same published marginal rates regardless of tier, and no tier-specific rate table was served.

**Does a lower tier plus add-ons reach a higher tier?** No. The Hobby→Pro fence is reported to be **legal rather than numeric** — non-commercial use only `[secondary]` — so no amount of usage purchase moves a Hobby account into compliance. This is the sharpest free-tier fence in the L11 cohort: generous limits, but the moment the project earns money the account is out of terms. It converts on **intent**, not on volume.

## Social proof, trust and objection handling

**Not observable.** No logos, testimonials, counts or ratings appeared in the served representation, and their absence cannot be treated as evidence of absence.

The page's one genuine trust device *is* observable, and it is not social proof: **Spend Management with a default $200 on-demand budget**, disclosed on the pricing page. For usage-based pricing, a published spend ceiling is the risk reversal — it caps downside rather than refunding it.

## FAQ

Present — **11 questions**, verbatim:

"Which Vercel plan is right for me?" · "Do you offer custom invoicing?" · "What are the limits for each plan?" · "I went over my included credit. What can I do?" · "Can I buy additional usage?" · "I have a Hobby account, how do I upgrade to a paid plan?" · "Is there a limit to how many teams I can have?" · "How does Vercel calculate usage?" · "I want to transfer a domain name to Vercel. Is there a fee?" · "Do cached responses affect usage?" · "How can I manage my spend?"

**Five of eleven are about usage anxiety** — going over credit, buying more, how usage is calculated, whether caching counts, how to manage spend. That ratio is the signature of a metered model: the page's primary job is not to sell the price, it is to defuse the fear of an unbounded bill. Compare Notion, whose FAQ is 11-of-17 about billing *mechanics* — the signature of seats at scale, where the anxiety is administrative rather than financial.

## Mechanisms in use

`<pattern IDs pending — library numbering in progress>`

- **Seat + credit hybrid**: $20 buys both a deploying seat *and* $20 of fungible infrastructure credit.
- **Fungible credit replacing fixed buckets** (the Sept 2025 change): one $20 number is far easier to reason about than eight separate metric allowances, even though the underlying meters are unchanged.
- **"Free forever" paired with a legal fence** rather than a usage fence — the free tier converts on intent.
- **Spend Management as the trust device**: a published default $200 budget. For usage pricing, a spend ceiling *is* the guarantee.
- **Anchoring on the low number**: "$20/mo + additional usage" leads with $20 even though the additional usage is where the revenue lives.
- **Enormous feature comparison** (100+ rows across 9 product sections) — a moat display for the enterprise buyer more than a decision aid for the self-serve one.

## What they do that most pages don't

- Publishes per-unit overage rates ("$2 per 1M", "$0.15 per GB", "$0.128 per hour") directly on the pricing page rather than in a calculator or docs.
- Discloses a default spend budget ($200) as a headline reassurance.
- **Serves a machine-readable structured version of the pricing page** — itself a notable 2026-era choice, given that LLMs are now a significant channel through which buyers ask "what does X cost?". The fact that this teardown had to be written from that representation is the finding.

## What they conspicuously omit

- The **non-commercial restriction on Hobby is not stated on the pricing page** in what was served; it lives in fair-use guidelines `[secondary]`. This is the most consequential term on the free tier and it is the least visible.
- No refund or cancellation language served.
- No trial — Pro has none; Hobby is the trial.

## Documented pricing changes

| Date | Change | Stated reason | Source |
|---|---|---|---|
| 2025-09-09 | Pro moves to a **flexible $20 team credit** replacing fixed per-metric allocations; **free Viewer seats**; self-serve enterprise add-ons; default spend alerts | "replaces static usage buckets with a more flexible system that adapts to your workload" | vercel.com/changelog/included-pro-usage-is-now-credit-based, vercel.com/blog/new-pro-pricing-plan `[secondary summary]` |
| 2026-02-27 | Pricing page last updated (per fair-use documentation) | — | `[secondary]` |

## What transfers, and what doesn't

**Scale-driven, do not copy:** the 100+-row comparison table across nine product sections, the Enterprise "Custom" tier, the compliance section. All of it is infrastructure for surviving a procurement review.

**Category-driven:** the usage-anxiety FAQ and the published marginal rates are artefacts of metered infrastructure. They are the correct response to a real fear — a viral post generating a surprise bill — that a flat-rate consumer product simply does not create. Note the inverse warning: adopting a credit/token economy imports this FAQ whether you want it or not.

**Genuinely universal:**
1. **If you meter, publish a spend ceiling and make it the headline reassurance.** A cap is a better risk reversal than a refund for usage pricing, because it prevents the loss rather than reversing it, and a default budget disclosed on the pricing page tells the buyer their worst month before they read a single rate.
2. **Publish marginal rates rather than hiding them in a calculator.** A buyer who can compute their own bill does not need to be sold on the price.
3. **Consider what your fence actually converts on.** Vercel's Hobby fence is legal, not numeric — you upgrade when you start earning, not when you get big. If the moment your user starts making money is legible to you, that is a stronger and fairer trigger than a volume cap.
4. **Check whether your included allowance is per-account or per-seat before you write the copy.** Vercel's credit is per team, so included value per seat falls as the team grows; that is a defensible design, but only if it is stated.
