# Framer

- **URL:** https://www.framer.com/pricing/
- **Observed:** 2026-08-12
- **Fetched successfully:** yes — fetched twice, consistent both times. Pricing-history rows are `[secondary]`; one `[secondary]`-reported tier (Scale, $100/mo) was **not observed on the live page** and is flagged as such below.
- **Category:** prosumer SaaS (no-code website builder)
- **Buyer:** designer/freelancer → agency → company marketing site owner
- **Value metric:** **the site** (per-site plans), with **credits** for AI, **editors** as a seat add-on, and **bandwidth** as a usage fence
- **Model:** per-artifact subscription with three stacked meters (credits, editors, add-ons) — `<models pack pending — references/models/ not yet populated>`
- **Scale:** unknown — no customer count, revenue figure, testimonial or logo wall observed on the pricing page

## Structure, top to bottom

1. Pricing tiers overview
2. Comparison table (~30+ rows: limits, CMS, bandwidth, hosting, analytics, collaboration, agents, add-ons)
3. Agents section ("Agents and other AI features consume credits")
4. Live collaboration section (workspace owners, viewers, editors)
5. Add-ons section ("From localizing your site to running multiple A/B-tests, power up your site with add-ons.")
6. Legal / billing note
7. FAQ (11 questions)

## Verbatim copy

- **Headline:** "Start free, then scale your site"
- **Subhead:** none captured separately
- **Tier names:** Free · Basic · Pro · Enterprise
- **Tier descriptors:** "Try for free" (Free) · "Creative personal sites" (Basic) · "Growing professional sites" (Pro) · "Mission critical sites" (Enterprise)
- **Badge:** **none present**
- **Billing toggle:** labelled "Yearly billing", shown as the default state
- **Savings expression:** `none` — no monthly-vs-yearly percentage is displayed; the toggle just says "Yearly billing"
- **CTAs:** "Start for Free" / "Start with Basic" / "Start with Pro" / "Request Trial"
- **Guarantee / refund:** "If you live in the EU or Turkey, you are legally eligible for a refund if your subscription was purchased within the last 14 days."
- **Limit language:** price strings "$0" · "$10, per month" · "$30, per month" · "Custom". Free tier: "500 credits to try", "Free Framer domain", "1 GB bandwidth", "Design pages". Agents section: "Agents and other AI features consume credits". Add-ons section: "From localizing your site to running multiple A/B-tests, power up your site with add-ons."
- **Editors add-on:** "$20 / month, and viewers are free"
- **Enterprise features listed:** "Custom limits, Unlimited editors, Enterprise-grade security, Uptime guarantee, SCIM, SSO"
- **Microcopy under CTA:** none captured in research

## Tier table

| Tier | Monthly | Annual (as displayed) | Fenced on | Allowance | CTA | Badge |
|---|---|---|---|---|---|---|
| Free | "$0" | — | credits, bandwidth, Framer subdomain | "500 credits to try", "Free Framer domain", "1 GB bandwidth", "Design pages" | "Start for Free" | — |
| Basic | not displayed separately | "$10, per month" (yearly billing default) | custom domain, higher bandwidth/credits | allowance figures not captured | "Start with Basic" | — |
| Pro | not displayed separately | "$30, per month" | staging, rollback, roles & permissions, locales, relational CMS, redirects `[secondary]` | allowance figures not captured | "Start with Pro" | — |
| Enterprise | — | "Custom" | SSO, SCIM, uptime guarantee, unlimited editors | custom limits | "Request Trial" | — |
| Add-on: extra editor | "$20 / month, and viewers are free" | — | seat | 1 editor | — | — |

## Ladder arithmetic

**Per-site rung prices.** Free $0 → Basic $10 → Pro $30 per month. Pro is **3× Basic**.

**Annual discount is not computable.** The toggle reads "Yearly billing" and the prices shown are the yearly-billing prices; **no monthly-billed figure is displayed anywhere on the page**, and no savings percentage is stated. There is nothing to divide.

**Per-credit and per-GB rates are not computable.** The Free tier's allowance is published ("500 credits to try", "1 GB bandwidth") but the Basic and Pro allowances were not captured in research, so no $/credit or $/GB curve can be built. **Insufficient numbers — the page's own meters are not priced per unit anywhere in the captured data.**

**Does any add-on invert the ladder?** The editor add-on is the only add-on with a captured price: **$20/month per editor**. It is a different unit from the site plan, so no direct per-unit inversion is computable. But note the relative magnitude: **one extra editor ($20) costs twice the entire Basic site plan ($10)**, and two-thirds of Pro. On the editor meter, the cheapest way to add a collaborator is more expensive than the cheapest way to add a whole website.

**Does a lower tier plus add-ons reach a higher tier?** Yes, exactly: **Basic $10 + one editor $20 = $30/month, identical to Pro.** At that price Pro dominates — it carries staging, rollback, roles & permissions, locales, relational CMS and redirects on top. So the editor add-on is priced precisely at the Basic→Pro gap, which makes the stack-on-Basic path never rational. Whether the editor add-on is purchasable on Basic is **unknown — not captured in research**.

**Free-tier fence.** "500 credits to try" is explicitly a one-shot trial framing, not a monthly allowance — the copy says "to try". Paired with "1 GB bandwidth", the free tier fences on two independent meters at once.

## Social proof, trust and objection handling

**None observed on the pricing page.** No testimonials, no logo wall, no customer count, no ratings, no press. For a design-tool pricing page this is unusual. The only trust surface is the FAQ and the geographic refund disclosure.

## FAQ

Present — **11 questions**, verbatim:

"What are credits?" · "What's included in the Free plan?" · "Which plan is right for me?" · "How are extra editors billed?" · "What happens if I go over a limit?" · "How many add-ons can you purchase on the Pro plan?" · "How are events billed for the Convert add-on?" · "What's included in the Advanced Hosting add-on?" · "What if my open-source or side project receives a lot of traffic?" · "What payment methods do you offer?" · "What is your refund policy?"

The FAQ is a **meter-anxiety** FAQ: credits, editor billing, going over a limit, add-on event billing, and the surprise-traffic question all defuse fear of an unpredictable bill. "What if my open-source or side project receives a lot of traffic?" pre-empts the single scariest objection for a usage-metered builder.

## Mechanisms in use

`<pattern IDs pending — library not yet numbered>`

- **Per-site pricing, not per-seat.** The unit of value is the published website, which matches how a freelancer actually monetises (one client = one site = one plan). Seats are a *separate* add-on at $20/mo, and viewers are free.
- **Free viewers, paid editors** — same distribution logic as a free view seat.
- **Credits as a trial mechanic on the free plan** ("500 credits to try") — the free tier is explicitly framed as a taste, not a permanent home, and the copy says so.
- **Four-way meter stack**: site plan + credits + editors + add-ons. Each is small; together they compound ARPU well past the headline $30.
- **CTA copy that names the tier** ("Start with Basic", "Start with Pro") rather than a generic verb — micro-commitment framing that makes the choice feel already made.
- **"Request Trial" as the enterprise CTA** instead of "Contact sales" — softer, lower-commitment ask for a self-serve-native audience that dislikes talking to sales.
- **Jurisdiction-scoped refund language** — they disclose only the refund they are legally forced to give, which is a quiet signal that there is no discretionary refund.
- **Headline names the journey, not the product**: "Start free, then scale your site" describes the pricing model itself in six words.

## What they do that most pages don't

- Prices the artifact (site), not the person (seat).
- FAQ includes "What if my open-source or side project receives a lot of traffic?" — pre-empting the surprise-bill fear directly.
- Refund language is explicitly geographic.

## What they conspicuously omit

- No "most popular" badge despite a classic 3-paid-tier layout.
- No testimonials, logo wall, or customer count observed on the pricing page at all.
- No monthly-vs-yearly savings percentage displayed.
- **No "Scale" plan visible on the live page**, despite `[secondary]` sources describing a $100/mo Scale tier introduced Oct 2025. Either it was removed, or it is behind the toggle/table. It was not observed and its existence is not asserted here.

## Documented pricing changes

| Date | Change | Stated reason | Source |
|---|---|---|---|
| 2025-10 | Restructure from five tiers to three main paid plans | simplification | `[secondary]` designzig.com, allaboutframer.com |
| 2025-10 | Basic reduced **$15 → $10**/mo, retargeted to "personal, hobby, and side projects" | — | `[secondary]` designzig.com |
| 2025-10 | Startup ($75/mo) and Scaleup ($200/mo) consolidated into a single Scale plan at $100/mo, annual only | consolidation | `[secondary]` pricetimeline.com — **not observed on the live page 2026-08-12** |
| 2025-10 | AI credit system introduced across all plans alongside AI Agents; monthly credit allowance per plan, extra credits purchasable | "rather than charging separately for each AI feature" | `[secondary]` allaboutframer.com |

## What transfers, and what doesn't

**Genuinely universal:** (1) **CTA copy that names the tier** — "Start with Pro" completes the sentence the buyer is already saying to themselves, and it costs nothing to write; (2) **pricing the artifact rather than the person** when the buyer's own revenue scales with artifacts rather than headcount; (3) **pre-empting the surprise-bill fear explicitly in the FAQ** — one honest question about the scariest scenario is worth several procedural ones; (4) the six-word headline that describes the pricing model itself.

**Actively avoid:** the four-way meter stack. Site plan + credits + editors + add-ons is four independent ways for a buyer to be confused, and the FAQ's composition shows what it costs — five of eleven questions exist purely to defuse meter anxiety. At a low price point that friction is unaffordable.

**Category-driven:** the bandwidth fence, the per-site unit, the "Request Trial" enterprise softening.

**Note the refund posture honestly:** disclosing only the EU/Turkey statutory 14-day right is a signal that there is no discretionary refund. A product without Framer's category position cannot afford that posture — a plain money-back sentence is cheap trust that Framer no longer needs to buy.
