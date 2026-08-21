# Linear

- **URL:** https://linear.app/pricing
- **Observed:** 2026-08-12
- **Fetched successfully:** yes — full extraction. Pricing-history rows are `[secondary]` and carry their own sources.
- **Category:** prosumer SaaS (issue tracking for software teams)
- **Buyer:** eng lead / founder
- **Value metric:** **seats** ("per user/month") — but the free-tier fence is **issues**, not seats
- **Model:** per-seat subscription with a volume fence on the artifact (issues) rather than the person — `<models pack pending — references/models/ not yet populated>`
- **Scale:** "Trusted by more than **40,000** companies" (stated on the page, observed 2026-08-12)

## Structure, top to bottom

1. Nav
2. Pricing tier cards (Free · Basic · Business · Enterprise)
3. Social proof line
4. Feature comparison table (~40+ rows)
5. Closing CTA section
6. Footer

## Verbatim copy

- **Headline:** "Pricing" (that is the entire H1 — no marketing headline)
- **Subhead:** **none present**
- **Tier names:** Free · Basic · Business · Enterprise
- **Tier descriptors:** "Free for everyone" · "Billed yearly" · "Billed yearly" · "Annual billing only" — these are billing descriptors, not audience descriptors; the page names no audience per tier
- **Badge:** **none present**
- **Billing toggle:** **none present.** Yearly is presented as the only price.
- **Savings expression:** `none`
- **CTAs:** "Get started" (Free) / "Get started" (Basic) / "Get started" + "Contact sales" (Business) / "Contact sales" (Enterprise)
- **Guarantee / refund:** **none present**
- **Limit language:** Free tier contents as listed: "Unlimited members", "2 teams", "250 issues", "Agent platform", "Linear Agent". Price strings: "$0" · "$10 per user/month" · "$16 per user/month" · "Custom"
- **Microcopy under CTA:** none captured in research
- **Social proof line:** "Trusted by more than 40,000 companies" with link "Customer stories→"

## Tier table

| Tier | Monthly | Annual (as displayed) | Fenced on | Allowance | CTA | Badge |
|---|---|---|---|---|---|---|
| Free | "$0" | — | **2 teams, 250 issues**, unlimited members | 250 issues, 2 teams, unlimited members | "Get started" | — |
| Basic | not displayed | "$10 per user/month" / "Billed yearly" | unlimited issues, more teams | unlimited issues | "Get started" | — |
| Business | not displayed | "$16 per user/month" / "Billed yearly" | AI/agent workflows, Asks, Insights | not itemised | "Get started" + "Contact sales" | — |
| Enterprise | not displayed | "Custom" / "Annual billing only" | SAML/SCIM, invoice/PO billing, priority support | custom | "Contact sales" | — |

Enterprise lists 9 features including "Invoice/PO billing", "SAML and SCIM", "Enterprise-grade security", "Priority support".

## Ladder arithmetic

**Per-seat rung prices (all billed yearly, as displayed).** Free $0 → Basic $10 → Business $16 per user/month. Business is **1.6× Basic** (+60%).

**Monthly prices cannot be checked.** The page displays no monthly figure at any rung, so no annual-discount percentage is computable from the page. The research notes monthly exists in checkout but is never anchored on. This is a deliberate refusal to expose the comparison.

**Does any add-on invert the ladder?** N/A — **the page publishes no add-ons of any kind.** There is no second meter, no credit pack, no seat-type variant. Inversion is structurally impossible.

**Does a lower tier plus add-ons reach a higher tier?** N/A for the same reason. A Basic customer who wants Business capability has exactly one path: pay $16.

**Free-tier fence arithmetic.** 250 issues against **unlimited members**. The research records `[secondary]` that the cap is hard — new issue creation stops. Because seats are free and issues are capped, the cost of the free tier to Linear rises with team size while the fence stays fixed, which is the inverse of every peer in the cohort. The upgrade trigger is therefore accumulated artifact volume, not headcount.

**AI capability was added to Business at no extra charge** (`[secondary]`) while Business rose **$12 → $16** (+33%) — so the effective per-seat price of the AI is $4/user/month, but the page never presents it that way and there is no line item to point at.

## Social proof, trust and objection handling

**A single aggregate proof number:** "Trusted by more than 40,000 companies", plus a link "Customer stories→". No logo wall, no testimonial quotes, no ratings, no press. No security or privacy framing on the pricing page beyond the Enterprise feature row "Enterprise-grade security". No guarantee, refund or cancellation language anywhere.

## FAQ

**Absent.** Linear publishes no FAQ on the pricing page. Every objection is expected to be answered by the ~40-row comparison table or not at all. In a cohort where the FAQ is the load-bearing disclosure surface, its total absence is the signature of a model simple enough not to need one.

## Mechanisms in use

`<pattern IDs pending — library not yet numbered>`

- **Usage fence on a free plan with unlimited seats.** Inverted from the category norm. You can bring your whole team in free; you hit a wall at 250 issues. This maximises team-wide habit formation before the paywall, so the upgrade decision is made by a team that already depends on the tool.
- **No billing toggle at all.** Yearly is presented as the only price — it removes the "$10 vs $12" comparison entirely and prevents the annual discount from making the monthly price look punitive.
- **No badge, no trial, no FAQ, no testimonial quotes.** Minimalism as positioning: the page's restraint *is* the brand argument.
- **Dual CTA on Business** ("Get started" + "Contact sales") — self-serve and sales-assist on the same card, catching both motions at the tier where deal size starts to matter.
- **Single aggregate proof number** (40,000 companies) instead of a logo wall.

## What they do that most pages don't

- Omits a marketing headline entirely. The H1 is the word "Pricing".
- Gives away unlimited seats on free — nearly every peer fences seats first.
- Publishes no FAQ.

## What they conspicuously omit

- No trial (there is nothing to trial — Free is permanent).
- No refund, cancellation, or guarantee language anywhere on the page.
- No monthly prices displayed.
- No "most popular" steering — the page assumes you can read a table.

## Documented pricing changes

| Date | Change | Stated reason | Source |
|---|---|---|---|
| ~2024-05 | Tiers renamed **Standard → Basic**, **Plus → Business** | structural simplification | `[secondary]` usecarly.com, tierly.app |
| ~2024-05 | Basic $8, Business $12 at time of rename | — | `[secondary]` |
| by 2026-07 | Basic **$8 → $10**, Business **$12 → $16** (both billed yearly) | not publicly stated | `[secondary]` costbench.com |
| 2025–26 | AI features (Triage Intelligence, Linear Agent, Linear Asks, Linear Insights) added to Business at no extra charge | — | `[secondary]` |

The Linear pattern is notable: they raised Business 33% while *adding* AI, rather than charging for AI separately or as credits.

## What transfers, and what doesn't

**Genuinely universal, and the most valuable idea on the page:** **pick a fence that lets people form a habit first.** Free gives away unlimited seats and walls you at 250 issues, so the paywall arrives *after* dependency, not before it. For a consumer product the equivalent is to give away the thing that creates the habit and fence the thing that only matters once the habit exists — fence on accumulated volume (saved items, history, projects) rather than on features, because a volume fence gets hit by exactly the users who are already committed while a feature fence gets hit by everyone including people who were never going to pay.

**Also universal:** the single aggregate proof number in place of a logo wall — the only social proof a solo founder can honestly deploy; and the decision to absorb AI into an existing tier and reprice that tier, rather than bolting on a visible second meter.

**Scale-driven, do not copy:** the no-toggle, no-badge, no-FAQ minimalism. Linear can refuse to explain itself because 40,000 companies and a strong brand already did the persuading. A page with no traffic and no brand that refuses to handle objections simply fails to handle objections. Likewise the Enterprise tier and the 40-row table.

**Category-driven:** the seat metric and the "Contact sales" dual CTA on the mid tier.
