# Figma

- **URL:** https://www.figma.com/pricing/ (plus https://www.figma.com/pricing-faq/)
- **Observed:** 2026-08-12
- **Fetched successfully:** yes — both the pricing page and the pricing-FAQ page fetched, full extraction. Pricing-history rows carry `[secondary]` / `[secondary summary]` flags.
- **Category:** prosumer SaaS (design platform)
- **Buyer:** designer → design manager → procurement
- **Value metric:** **seat type × seat count**, plus **AI credits per seat per month** as a second meter
- **Model:** two-dimensional grid — plan tier crossed with seat type — plus a stacked credit meter — `<models pack pending — references/models/ not yet populated>`
- **Scale:** unknown — no customer count or revenue figure appears on the page; only an 18-logo wall

## Structure, top to bottom

1. Nav & header
2. Banner: "New AI add-ons are now available for all plans"
3. H1 "Pick your plan, choose your seats"
4. Product tabs selector
5. "Prices in USD"
6. Four tier cards: Starter · Professional · Organization · Enterprise
7. Note on viewer access
8. Feature comparison table
9. "Add-ons" section — "Customize your plan with optional add-ons"
10. "Compare all features" table (~100+ rows, sectioned by Figma Design, Figma Make, Figma Motion, Figma Draw, Figma Sites, Dev Mode, FigJam, Figma Slides, Figma Buzz, Platform)
11. "Pricing FAQs" (11 questions)
12. "Trusted by teams at" logo wall
13. Footer

## Verbatim copy

- **Headline:** "Pick your plan, choose your seats"
- **Subhead:** "Prices in USD"
- **Tier names:** Starter · Professional · Organization · Enterprise
- **Tier descriptors:**
  - Professional: "Choose Professional if you: Are a professional or part of a small team"
  - Organization: "Choose Organization if you: Are a business that designs products across your organization"
  - Enterprise: "Choose Enterprise if you: Are a business designing for multiple products or brands"
  - Starter: "Free limited access to Figma products"
- **Badge:** **none present**
- **Billing toggle:** "MonthlyAnnual" — **Professional only**. Organization and Enterprise show "Billed annually" with no toggle. Default state: unknown — not captured in research.
- **Savings expression:** `none` — no percentage or duration framing captured
- **CTAs:** "Get started for free" (Starter) / "Select plan" (Professional) / "Select plan" (Organization) / "Contact sales" (Enterprise)
- **Guarantee / refund:** "Payments for Figma subscriptions are non-refundable." (from pricing-faq)
- **Limit language:**
  - Starter: "150 AI credits/day, up to 500 AI credits/mo"
  - AI beta: "The agent is free to use during the beta. AI credits are not consumed"
  - Governance+ add-on marked "Only available on Enterprise plan"
  - Add-ons section: "Customize your plan with optional add-ons"
- **Microcopy under CTA:** none captured in research
- **Seat definitions (from pricing-faq, verbatim):**
  - "The Full seat includes full access to all Figma products, including Figma Design, Dev Mode, Figma Slides, FigJam, and Figma Sites."
  - "The Dev seat full access to Dev Mode, Figma Slides, and FigJam. It also gives users view and comment access in Figma Design files." *(sic — the missing verb is on the live page)*
  - "The Collab seat includes full access to Figma Slides and FigJam. It also gives users view and comment access in Figma Design files."
  - "Anyone with a free View seat can view or comment on files they've been given access to. They can also export files and access redlines on a file."
- **Mid-cycle billing (from pricing-faq):** "If you add new paid seats to your team during your annual subscription term, Figma charges you a separate monthly subscription for those seats at the monthly price... The cost of the seat will be prorated based on the day it was approved until the end of your current monthly billing term."

## Tier table

| Tier | Full seat | Dev seat | Collab seat | AI credits (Full seat) | CTA | Badge |
|---|---|---|---|---|---|---|
| Starter | free | — | — | "150 AI credits/day, up to 500 AI credits/mo" | "Get started for free" | — |
| Professional | "$16/mo" | "$12/mo" | "$3/mo" | "3,000 AI credits/mo" | "Select plan" | — |
| Organization | "$55/mo" | "$25/mo" | "$5/mo" | "3,500 AI credits/mo" | "Select plan" | — |
| Enterprise | "$90/mo" | "$35/mo" | "$5/mo" | "4,250 AI credits/mo" | "Contact sales" | — |

Dev and Collab seats carry "500 AI credits/mo" on every paid tier — credits do **not** scale with tier for those seat types. Starter free-tier contents: "Unlimited drafts", "UI kits and templates", "150 AI credits/day, up to 500 AI credits/mo".

## Ladder arithmetic

**Full-seat price escalation.** $16 → $55 → $90. Professional→Organization is **3.44×**; Organization→Enterprise is **1.64×**; end to end **5.63×**.

**AI-credit escalation on the same seats.** 3,000 → 3,500 → 4,250. Professional→Organization is **1.17×**; Organization→Enterprise **1.21×**; end to end **1.42×**. Price escalates roughly 4× faster than allowance. Credits are demonstrably not the reason for the tier jump — governance is.

**Cost per AI credit, Full seat (derived):**
- Professional: $16 ÷ 3,000 = **$0.00533/credit**
- Organization: $55 ÷ 3,500 = **$0.01571/credit**
- Enterprise: $90 ÷ 4,250 = **$0.02118/credit**

**This is an inverted volume curve.** Per-credit price *rises* 3.97× as you climb the ladder — the exact opposite of the volume discount every credit-metered peer publishes. That is only tolerable because the buyer is not buying credits at Organization and Enterprise; they are buying admin, SSO and governance, and the credits ride along.

**Cost per AI credit, Dev and Collab seats (derived, 500 credits/mo flat):**
- Dev: Professional $12 ÷ 500 = **$0.024**; Organization $25 ÷ 500 = **$0.050**; Enterprise $35 ÷ 500 = **$0.070**
- Collab: Professional $3 ÷ 500 = **$0.006**; Organization $5 ÷ 500 = **$0.010**; Enterprise $5 ÷ 500 = **$0.010**

**Does any seat type invert against another?** Yes, on the credit meter, at the top two tiers. At Organization a Collab seat buys credits at $0.010 while a Full seat buys them at $0.01571 — the **cheap seat is 36% cheaper per credit than the expensive one**. At Enterprise the gap widens: Collab $0.010 vs Full $0.02118, a **2.1× inversion**. At Professional the inversion does not occur (Full $0.00533 beats Collab $0.006).

**Caveat on that inversion:** the research does not record whether AI credits pool across seats in a workspace. If they do not pool, the inversion is not exploitable — a Collab seat cannot run Figma Design work regardless of its credit balance. This is a documented per-unit inversion whose exploitability is **unknown — not captured in research**.

**Does a lower tier plus add-ons reach a higher tier?** Not computable. The add-ons section ("Customize your plan with optional add-ons") was captured by name only; no add-on prices were recorded, and Governance+ is explicitly Enterprise-only, so the highest-value add-on is fenced out of the substitution path by design.

**Free-tier fence, dual cap.** "150 AI credits/day, up to 500 AI credits/mo" — the daily cap ×30 would be 4,500/mo, so the monthly cap binds at **11% of the daily allowance run continuously**. The pair prevents burst abuse (daily) and monthly accumulation (monthly) simultaneously.

## Social proof, trust and objection handling

"Trusted by teams at" + 18 logos: Atlassian, Braintree, Dribbble, GitHub, Microsoft, One Medical, Slack, The New York Times, Zoom, Walgreens, AirBnb, Asana, Basic/Dept, Coinbase, Dropbox, Herman Miller, Rakuten, Vodafone. Placed **near the bottom**, after the FAQ — unusually late. No customer count, no testimonials with quotes, no ratings. Trust framing on the page is procedural rather than social: the FAQ points to security ("Where can I learn more about security on Figma?") and the refund position is stated flatly and unhedged.

## FAQ

Present — **11 questions**, verbatim:

"What is a seat?" · "Where can I see a breakdown of my billing?" · "What happens if I add seats mid-year on an annual plan?" · "Can I purchase products individually?" · "Can I inspect files without Dev Mode?" · "What are AI credits and how do they work?" · "Does the AI agent consume credits in beta?" · "Is Figma available for government or public sector teams?" · "How do I downgrade or cancel my paid plan?" · "Where can I learn more about security on Figma?" · "Do you have a discount for schools or classrooms?"

The FAQ **leads with "What is a seat?"** — the signature of a novel unit that must be taught before it can be sold.

## Mechanisms in use

`<pattern IDs pending — library not yet numbered>`

- **Two-dimensional grid pricing** (tier × seat type) — price discrimination by role, not by company size. Lets Figma sell a $3/mo Collab seat to a PM and a $90/mo Full seat to a designer in the same org.
- **Free View seat** — deliberately zero-priced to maximise file distribution, since every viewer is a latent editor.
- **Metered AI on top of seats**, with credits scaling weakly by tier.
- **"Choose X if you:" self-selection framing** rather than "For teams of 10-50". Reduces the shame of picking the cheap tier.
- **Hard, unhedged non-refundability** ("Payments for Figma subscriptions are non-refundable") — possible only with category dominance.
- **Admin-approved seat upgrades** (from the 2025 billing change) — turns uncontrolled seat sprawl into controlled, forecastable expansion; a *retention* mechanism disguised as an admin feature.
- **Free-during-beta AI** as adoption seeding before metering starts.

## What they do that most pages don't

- Sells the same product at four different per-seat prices based on what the seat can do, on one page, without it collapsing into confusion.
- Puts a **daily** AI credit cap on free ("150 AI credits/day, up to 500 AI credits/mo") — a dual cap that prevents both burst abuse and monthly accumulation.
- Explains mid-year seat proration on the pricing page's FAQ rather than burying it.

## What they conspicuously omit

- No "most popular" badge on a 4-tier, 3-seat-type grid — arguably a missed steer, or a deliberate refusal because the right answer genuinely depends on org shape.
- No trial of paid tiers advertised.
- No customer count, no testimonials with quotes — only logos, and placed late.

## Documented pricing changes

| Date | Change | Stated reason | Source |
|---|---|---|---|
| 2024-12-10 (announced) | New seat model announced: Full / Dev / Collab / View | "more functionality with every seat"; all paid seats gain FigJam and Figma Slides | figma.com/blog/billing-experience-update-2025/ `[secondary summary]` |
| 2025-03-11 | Migration begins; per-product seats replaced by unified seat types; **price increase for Figma Design**; billing re-architected so **admins approve seat upgrades by default** | move away from user-driven upgrades | same |
| 2025-03-11 | Dev seat price held flat despite adding FigJam + Slides; Collab seat priced at the old FigJam seat price | value-add without price change | same |
| ~2026-02 | Plans restructured; **Dev Mode (previously +$25/editor/mo) bundled into Professional at no extra cost** | — | `[secondary]` saascrmreview.com, saaspricepulse.com |
| current | AI credits per seat per month introduced across all tiers; AI add-ons banner | — | live page, observed 2026-08-12 |

## What transfers, and what doesn't

**Scale-driven, do not copy:** the 100+-row comparison table, the four-tier ladder, the three-seat-type grid, the Enterprise "Contact sales" column, the 18-logo wall, and above all the flat "non-refundable" — Figma can write that because it is Figma. A product with no brand cannot.

**Category-driven:** the seat-type grid exists because a design file has readers, inspectors and authors with genuinely different needs and genuinely different willingness to pay. If your product has only one kind of user, the grid is pure complexity.

**Genuinely universal:** (1) the **dual cap on the free tier** — a daily limit *and* a monthly limit is the cheapest way to stop both burst abuse and accumulation, and it costs one extra line of copy; (2) **"Choose X if you:" self-selection framing** — describing the buyer rather than the company size removes the shame of picking the cheap tier and works at any scale; (3) **defining the unit in the FAQ's first question** when the unit is novel; (4) putting the free zero-priced role (the View seat) exactly where distribution happens.

**A documented failure worth carrying:** the AI-credit per-unit curve *rises* with tier and the cheap seat type beats the expensive one on credits at the top two rungs. Real pages fail the per-unit monotonicity check, and Figma's does — visibly, on the published numbers.
