# Notion

- **URL:** https://www.notion.com/pricing (www.notion.so/pricing 301-redirects here)
- **Observed:** 2026-08-12
- **Fetched successfully:** yes — direct fetch after a 301 to notion.com/pricing; full extraction. Pricing-history rows are marked `[secondary]` and carry their own sources.
- **Category:** prosumer SaaS (horizontal workspace / docs + wiki + projects)
- **Buyer:** ranges from individual to org IT
- **Value metric:** **seats** ("per member / month"), with a second, newer metric layered on top — **Notion credits** for AI/agents
- **Model:** per-seat subscription with a stacked credit meter for AI — `<models pack pending — references/models/ not yet populated>`
- **Scale:** unknown — no customer count is published on the page (the lane notes this is a deliberate omission "despite having one available")

## Structure, top to bottom

1. Nav
2. H1 "One tool to run your company."
3. Billing toggle ("Pay monthly" / "Pay yearly", "Save up to 20% with yearly")
4. Four tier cards: Free · Plus · Business (Recommended) · Enterprise
5. Social-proof logo row + customer testimonial
6. Section "Essentials for staying organized."
7. Section "The AI workspace for work that matters."
8. Add-on pricing (Custom Agents / credits)
9. Full feature comparison table (~70+ rows, grouped: Content · Sharing & collaboration · Notion AI · Database features · Developer platform · Web publishing · Admin & security · Support)
10. FAQ (17 questions)
11. Footer

## Verbatim copy

- **Headline:** "One tool to run your company."
- **Subhead:** N/A — not captured as a distinct element in research. Section headlines captured: "Essentials for staying organized." / "The AI workspace for work that matters."
- **Tier names:** Free · Plus · Business · Enterprise
- **Tier descriptors:**
  - Free: "For individuals to organize personal projects and life."
  - Plus: "For small teams and professionals to work together."
  - Business: "For growing businesses to streamline teamwork."
  - Enterprise: "For organizations to operate with scalability, control, and security."
- **Badge:** "Recommended" — on **Business**
- **Billing toggle:** "Pay monthly" / "Pay yearly" · default state: unknown — not captured in research
- **Savings expression:** "Save up to 20% with yearly"
- **CTAs:** "Sign up" (Free) / "Get started" (Plus) / "Get started" (Business) / "Contact Sales" (Enterprise)
- **Guarantee / refund:** "We'll be happy to refund you the full amount (not pro-rated) if you downgrade your subscription within three days of signing up for monthly billing, or within 30 days of signing up for annual billing."
- **Limit language:** price strings as rendered — "$0per member / month" · "$10per member / month" · "$20per member / month" · "Custom pricing". Add-on: "Custom Agents" — "$10 per 1,000 monthly Notion credits"
- **Microcopy under CTA:** none captured in research
- **Testimonial:** "There's power in a single platform where you can do all your work out of. Notion is that single place." — Nick Erdenberger, GTM, OpenAI

## Tier table

| Tier | Monthly | Annual (as displayed) | Fenced on | Allowance | CTA | Badge |
|---|---|---|---|---|---|---|
| Free | $0 | $0 | individual use; block storage limit; limited AI | block storage limit (number not captured) | "Sign up" | — |
| Plus | $10/member/mo | toggle-driven, "Save up to 20% with yearly" | small-team collaboration | not captured | "Get started" | — |
| Business | $20/member/mo | toggle-driven | **full Notion AI**, SSO, admin | full Notion AI | "Get started" | "Recommended" |
| Enterprise | "Custom pricing" | annual | security, scale, control | custom | "Contact Sales" | — |
| Add-on: Custom Agents | "$10 per 1,000 monthly Notion credits" | — | agent usage | 1,000 credits | — | — |

## Ladder arithmetic

**Per-seat rung prices.** Free $0 → Plus $10 → Business $20 per member/month. Business is exactly **2× Plus** (+100%), justified on the page almost entirely by full Notion AI plus SSO and admin. The lane records `[secondary]` teardowns flagging this as the weakest value-justification on the page.

**Annual.** The toggle-driven annual prices were not rendered as numerals in the research; only the expression "Save up to 20% with yearly" was captured. At the stated ceiling of 20%, Plus would be $8/member/mo and Business $16/member/mo — **derived, not observed**, and the phrase "up to" means the real discount on any given tier may be lower.

**Credit add-on unit price.** "$10 per 1,000 monthly Notion credits" = **$0.01 per credit**. This is the only per-unit price published anywhere on the page.

**Does any add-on invert the ladder?** No inversion is computable. The seat meter and the credit meter are different units, so there is no rate at which credits can be bought below a seat price. The credits add-on cannot substitute for a seat.

**Does a lower tier plus add-ons reach a higher tier?** Yes, at exactly par: **Plus ($10) + one Custom Agents credit block ($10) = $20/member/mo, identical to Business.** At that price Business dominates — it carries full Notion AI, SSO and admin on top of whatever the credit block buys. So the add-on is priced such that stacking it on Plus is never the rational move, which is a well-formed ladder rather than a failure. **Caveat:** the research does not record whether the Custom Agents add-on is purchasable on Plus at all, so this check is arithmetic on the published numbers, not a confirmed purchasable path.

**Refund window arithmetic.** 3 days (monthly) vs 30 days (annual) — a **10× asymmetry**, with the longer window on the plan the company wants selected.

## Social proof, trust and objection handling

Logo row: **OpenAI, Figma, Volvo, Ramp, Cursor**. One named testimonial: "There's power in a single platform where you can do all your work out of. Notion is that single place." — Nick Erdenberger, GTM, OpenAI. **No customer count claim on the page.** The refund policy quoted above is the page's explicit risk reversal.

## FAQ

Present — **17 questions**, verbatim:

"How does Notion AI use my data?" · "Where can I find my invoices?" · "What are your accepted payment methods?" · "What is a block?" · "What happens when I go over the block storage limit on a Free Plan?" · "Do you offer student discounts?" · "What do the different analytics tiers mean?" · "How is pricing calculated for the paid plans?" · "How do I get charged when I add members to my workspace?" · "How does adding and removing members work?" · "How are paid seats counted?" · "What happens when I change plans?" · "How do I cancel my paid plan?" · "What happens if my payment fails?" · "Can I change my payment method?" · "How do refunds work?" · "What if I live in a region with a mandatory refund policy?"

The FAQ is unusually **billing-operations heavy** — 11 of 17 questions are about invoices, seats, proration, cancellation, failed payments, refunds. Only "What is a block?" is a product question. This is a page written for the person who has already decided and is now worried about the mechanics of paying.

## Mechanisms in use

`<pattern IDs pending — library not yet numbered>`

- **Recommended-badge steering** onto the tier that carries the AI margin, not the tier most users need.
- **Feature fence as the upgrade trigger**, not a usage fence: the Plus→Business jump is +100% ($10→$20), justified almost entirely by AI + SSO.
- **Dual value metric**: seats for the base, credits for AI. Lets them raise ARPU without touching the seat price again.
- **Anchor-and-descend**: Enterprise "Custom pricing" makes $20 read as mid-range.
- **Risk reversal via explicit refund window**, quantified and asymmetric (3 days monthly / 30 days annual) — the longer window is on the plan they want you to pick.

## What they do that most pages don't

- Publishes an add-on unit price for AI credits ("$10 per 1,000 monthly Notion credits") right on the pricing page, rather than hiding it in docs.
- Answers "What is a block?" on the pricing page — defining the free tier's fence unit inline, because the free limit is meaningless otherwise.
- Names a refund policy with specific day counts, which most B2B SaaS avoids.

## What they conspicuously omit

- No free trial of paid tiers is advertised on the page.
- No customer count ("used by X million") despite having one available.
- No "most popular" language — they use "Recommended", which is a *seller's* recommendation rather than a *social* proof claim. Different psychological lever, and a legally safer one.

## Documented pricing changes

| Date | Change | Stated reason | Source |
|---|---|---|---|
| 2025-05-13 | Standalone Notion AI add-on eliminated; full AI (Agents, "Ask Notion") folded into Business | consolidate AI into the plan rather than sell it as a line item | `[secondary]` usecarly.com/blog/notion-ai-pricing-change/ |
| 2025-05-13 | Business raised **$15 → $20** per member/mo (annual) | same repackaging | `[secondary]` danian.co, get-alfred.ai |
| ~2025-11 → 2025-12-01 | Legacy AI add-on subscribers migrated to full Business "at the same price" | grandfathering during migration | `[secondary]` usecarly.com |
| current | Credit-metered agents introduced as a paid add-on | — | live page, observed 2026-08-12 |

## What transfers, and what doesn't

**Scale-driven, do not copy:** the 70+-row comparison table, the "Contact Sales" Enterprise tier, the four-tier ladder, the Fortune-500 logo row, the SSO/admin fence. All of it is infrastructure for selling to organisations.

**Category-driven:** the seat value metric and the billing-mechanics FAQ are both artefacts of per-seat B2B pricing at scale — the anxiety they defuse is administrative, not financial. A single-buyer consumer product has neither problem.

**Genuinely universal:** (1) the **quantified, asymmetric refund window** — a discretionary refund with day counts, longer on the plan you want committed to; (2) **defining your fence unit on the pricing page itself** ("What is a block?") when the free limit is expressed in a unit the buyer does not already own; (3) publishing an **add-on unit price** rather than burying it in docs; (4) the choice of "Recommended" over "Most popular" — a seller's endorsement makes no falsifiable claim about other buyers.
