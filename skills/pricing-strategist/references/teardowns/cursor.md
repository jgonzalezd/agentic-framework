# Cursor

- **URL:** https://cursor.com/pricing
- **Observed:** 2026-08-12
- **Fetched successfully:** **yes** — direct fetch succeeded, extended by a proxy fetch. Blog posts on the June 2025 repricing fetched successfully from cursor.com and are **the richest change-history material in the corpus.**
- **Category:** AI tool (AI coding IDE / agent)
- **Buyer:** individual developer → engineering team → enterprise
- **Value metric:** **two units, historically in conflict.** Currently "limits on Agent" expressed as multipliers (3x, 20x, 5x), sitting on top of an underlying meter of **dollars of model inference at API prices.** Cursor is the one company in the corpus that tried to show the buyer the true COGS unit, got burned, and partially retreated.
- **Model:** flat-rate subscription with multiplier tiers and opt-in metered overflow — `<models pack pending — references/models/ not yet populated>`
- **Scale:** unknown — no customer count observed on the pricing page

## Structure, top to bottom

1. Headline "Pricing"
2. "Monthly Yearly" toggle
3. Hobby (free)
4. Individual segment containing three sub-tiers (Pro, Pro+, Ultra)
5. Teams segment (Standard, Premium)
6. Enterprise
7. Usage-based pricing explanation
8. FAQ

The Individual card containing three sub-tiers is the structural signature — the same concealment pattern as Claude's "From $100" and OpenAI's "From" on Pro, except **Cursor at least names all three** (Pro, Pro+, Ultra) rather than hiding them behind a price prefix.

## Verbatim copy

- **Headline:** **"Pricing"**
- **Tier names:** Hobby · Pro · Pro+ · Ultra · Teams Standard · Teams Premium · Enterprise
- **Tier descriptors:** `N/A — not captured as distinct descriptor lines; the feature bullets below stand in their place`
- **Badge:** `none observed`
- **Billing toggle:** **"Monthly Yearly"** · default state: `not captured`
- **Savings expression:** `none observed` — the toggle carries no percentage
- **CTAs:** **"Download"** (Hobby) · **"Get Pro"** · **"Get Teams"** · **"Contact Sales"**
- **Guarantee / refund:** none on the pricing page; a **bounded, dated refund** was published in the June 2025 blog — see Documented pricing changes
- **Limit language, verbatim:**
  - Hobby: **"No credit card required"** · **"Limited Agent requests"** · "Access to Composer"
  - Pro: **"Extended limits on Agent"** · **"Generous limits for Grok"** · "Access to frontier models" · "MCPs, skills, and hooks" · "Cloud agents" · "Bugbot on usage-based billing"
  - Pro+: **"3x Pro limits on Agent"**
  - Ultra: **"20x Pro limits on Agent"** · "Priority access to new features"
  - Teams Standard: "Centralized team billing and administration" · "Team marketplace for internal rules, skills, and plugins" · "Agentic code reviews with Bugbot" · "Cloud agents and automations with shared team context" · "Usage analytics to understand team behavior" · "Team-wide privacy mode" · "SAML/OIDC SSO"
  - Teams Premium: **"5x Standard limits on Agent"**
  - Enterprise: **"Pooled usage"** · "Invoice/PO billing" · "SCIM seat management" · "Repository, model, and MCP access controls" · "Auto-run, browser, and network controls" · "Audit logs and service accounts" · "AI code tracking API" · "Priority support and account management"
  - **The overage sentence, verbatim:** **"Every plan includes a set amount of model usage. On-demand usage allows you to continue using models after your included amount is consumed, billed in arrears."**
- **FAQ, verbatim:**
  - **"We recommend Pro+ for daily agent users, and Ultra for agent power users."**
  - **"Self-serve plans support all major credit and debit cards. For invoice-based billing and wire transfers, please contact us."**
  - **"All prices are exclusive of any applicable taxes"**
  - **"When it is enabled, we guarantee that code data is not used for training by us or our model providers."**
  - **"Cursor subscriptions are only sold directly through cursor.com."**

## Tier table

| Tier | Monthly | Annual (as displayed) | Fenced on | Allowance | CTA | Badge |
|---|---|---|---|---|---|---|
| Hobby | $0 | — | volume | "Limited Agent requests"; "No credit card required" | "Download" | — |
| Pro | $20/mo | via "Monthly Yearly" toggle | volume + frontier model access | "Extended limits on Agent"; historically "at least $20 of model inference at API prices per month" | "Get Pro" | — |
| Pro+ | **not shown on card** | toggle | volume | **"3x Pro limits on Agent"** | "Get Pro" | — |
| Ultra | **$200/mo** (per the Jun 2025 announcement: "a $200 / mo plan with 20x more usage than Pro") | toggle | volume + early access | **"20x Pro limits on Agent"** | "Get Pro" | — |
| Teams Standard | $40/user/mo | toggle | team admin, SSO | Agent limits unstated | "Get Teams" | — |
| Teams Premium | **not shown** | toggle | volume | **"5x Standard limits on Agent"** | "Get Teams" | — |
| Enterprise | Custom | — | governance | **"Pooled usage"** | "Contact Sales" | — |

**Overage:** on-demand, **"billed in arrears"**, available on every plan. **Expiry:** not stated.

## Ladder arithmetic

**Half the ladder has no price and half has no quantity, so most per-unit checks are unrunnable.** Pro+ and Teams Premium prices are not shown on their cards; Hobby, Pro and Teams Standard allowances are given only as adjectives. What can be computed:

**Price per unit of "Agent limit", where both ends are known.** Pro at **$20** buys 1 Pro-unit of Agent limit, so a Pro-unit costs **$20.00**. Ultra at **$200** is **10× the price** and buys **"20x Pro limits"**, so a Pro-unit costs **$10.00** there — **a 50% per-unit discount across the ladder's only computable step.** *(An earlier version of this file described the step as "exactly flat per unit". That was wrong: flat per unit would require Ultra to cost $400. The figure above is the arithmetic on the two published prices.)* What is unusual is the *reason* for the step rather than its size: Ultra is sold as a **predictability product**, and the company's own stated rationale confirms it — Ultra was "highly requested by power users seeking **more predictability than usage-based pricing would offer**."

**Pro+ sits at an unstated price for "3x Pro limits".** On Pro's per-unit rate it would be $60/mo; on Ultra's it would be $30/mo, and the gap between those two figures is the width of the unknown. **The research does not record its price**, so the interior of the ladder cannot be checked. Note that Cursor names Pro+ but does not price it on the card — the same partial concealment as the "From" pattern, applied one rung lower.

**Teams arithmetic.** Standard at $40/user/mo is **2× Pro** for team administration, SSO and Bugbot — no additional Agent volume is stated. Teams Premium gives "5x Standard limits" at an unpublished price. So the team ladder charges 2× for governance before any volume uplift, then sells volume separately on top.

**Does any add-on invert the ladder?** No add-on packs exist. The only stackable spend is **on-demand usage "billed in arrears"**, and its rate is not published on the pricing page. **The overage premium therefore cannot be computed** — which is itself the finding, and a direct consequence of the history below: the dollar meter that used to be the headline is now deliberately unquantified on the card.

**Does a lower tier plus overage reach a higher tier?** **Unknown and, on the evidence, unknowable to the buyer.** A Pro user can buy unlimited on-demand usage in arrears, so in dollar terms a Pro account can certainly exceed Ultra's spend. Whether it can exceed Ultra's *capability* is not answerable, because the plan allowance ("20x Pro limits") and the overage (dollars of inference) are denominated in different units with no published conversion. **Cursor has priced the overage in a unit the buyer cannot compare to the plan.** That is what makes overage feel like a trap and flat tiers feel like safety — which is exactly the dynamic the June 2025 episode revealed.

**The one honest number in Cursor's history, and it is retired from the front page.** Pro used to include **"at least $20 of model inference at API prices per month"** — a 1:1 peg between price and included value, and economically the most honest unit anyone in this corpus has ever shipped. It is now demoted to the overage mechanism. **The dollar meter still runs underneath; it just no longer appears on the card.**

## Social proof, trust and objection handling

**No social proof observed** — no logos, testimonials or user counts.

The trust work is done by four FAQ commitments: a training-data guarantee (**"we guarantee that code data is not used for training by us or our model providers"**), a tax disclosure, a payment-methods answer, and a channel statement (**"Cursor subscriptions are only sold directly through cursor.com"** — an anti-fraud signal as much as a sales one).

The most important objection handling is not on the pricing page at all. It is the **published apology with a bounded refund window** — see below.

## FAQ

Present. Verbatim answers captured above; **full question list and count: `N/A — not captured in research`.**

The load-bearing entry is **"We recommend Pro+ for daily agent users, and Ultra for agent power users."** This is the single most instructive FAQ line in the corpus: **when your unit is uninterpretable, you must replace unit-based selection with persona-based selection.** Multipliers cannot tell a buyer which tier they are; a sentence naming two kinds of person can.

## Mechanisms in use

`<pattern IDs pending — library numbering in progress>`

- **Multiplier tiering (3x / 20x / 5x) as the public unit**, over **dollar-denominated inference as the private unit.**
- **On-demand overage "billed in arrears"** — opt-in overflow rather than a headline meter.
- **"Unlimited access to the 'Auto' model"** — a **model-choice escape valve**, where surrendering model selection buys unlimited volume.
- **Grandfathering on unit migration** — "Existing subscribers could retain the previous 500-request structure if preferred."
- **Persona-based tier recommendation in the FAQ.**
- **"Pooled usage" at Enterprise.**
- **Free tier with "No credit card required."**
- **Direct-channel-only sales.**
- **A public apology with a dated, bounded refund window.**

## What they do that most pages don't

**"Unlimited access to the 'Auto' model" is the sharpest single mechanism in the AI-tool lane.** If the user surrenders model choice, the limit disappears. The incentives align exactly: Cursor routes to whatever is cheapest and adequate, the user gets unbounded volume, and the cost ceiling holds because Cursor controls the routing. It is Midjourney's Relax lane rendered in model-selection terms — **unlimited on the seller's terms, metered on the buyer's.** Two companies arrived at this independently, which is the strongest evidence in the corpus that it is a real pattern rather than a quirk.

**They published the apology with a refund window.** Naming a date range — "between June 16 and July 4" — converts a vague goodwill gesture into an auditable commitment. Almost every company that reprices badly issues a statement of regret without a bounded remedy.

**They let existing subscribers keep the old model** during a unit migration. Almost nobody does this, and it is the correct handling.

## What they conspicuously omit

- Prices for Pro+ and Teams Premium on their cards.
- The on-demand overage rate, anywhere on the pricing page.
- Any quantity for Hobby, Pro or Teams Standard.
- Any social proof, badge, guarantee or trial.

## Documented pricing changes

**This is the best-documented repricing in the corpus, sourced to the company's own blog.**

| Date | Change | Stated reason | Source |
|---|---|---|---|
| pre-Jun 2025 | 500 requests/month on Pro | — | cursor.com/blog/june-2025-pricing |
| Jun 16, 2025 | Ultra launched: "a $200 / mo plan with 20x more usage than Pro" | "highly requested by power users seeking more predictability than usage-based pricing would offer"; enabled by "multi-year partnerships from OpenAI, Anthropic, Google, and SpaceXAI" providing capacity at a fixed price | cursor.com/blog/new-tier |
| week of Jun 16, 2025 | Pro moved from request-based to compute limits: "all users will get at least $20 of model inference at API prices per month"; "unlimited access to the 'Auto' model and lifting all limits on tool calls"; existing subscribers could keep the 500-request structure | "the hardest requests cost an order of magnitude more than simple ones" and "API-based pricing is the best way to reflect that" | cursor.com/blog/june-2025-pricing |
| Jul 2025 | Apology and refunds: **"We will refund any unexpected charges you may have incurred for usage over the past 3 weeks"**; window **"between June 16 and July 4"** | **"Our recent pricing changes for individual plans were not communicated clearly, and we take full responsibility."** and **"We recognize that we didn't handle this pricing rollout well, and we're sorry."** | cursor.com/blog/june-2025-pricing |
| current (2026-08) | Public unit is multipliers ("3x Pro limits on Agent", "20x Pro limits on Agent"); dollar meter demoted to overage | not stated | cursor.com/pricing |

**Note the two theories launched in the same week.** Ultra's stated rationale — power users wanting "more predictability than usage-based pricing would offer" — and the $20-of-inference meter encode **opposite** beliefs about what the buyer wants. **The flat tier won**, and it is the one Cursor now leads with.

## What transfers, and what doesn't

**The single most valuable case study in the corpus, and its lesson is not the obvious one.**

**The lesson is not that dollar-denominated usage is wrong.** It is that **a unit whose consumption rate the user cannot predict will produce bill shock regardless of how honest the unit is.** "$20 of inference" is perfectly legible as a *quantity* and completely illegible as a *duration*: no user knows whether that is a day of work or a month of it, and they cannot find out except by spending it. A monthly subscription implicitly promises a duration, and the honest unit did not deliver one.

**Category-driven:** the multiplier vocabulary, the pooled enterprise usage, the training-data guarantee.

**Genuinely universal:**
1. **Resist the instinct to introduce credits the moment your COGS misbehaves.** Cursor ran exactly that experiment on a large audience, in public, with a good-faith rationale, and had to apologise and issue refunds. Their stated reason — "the hardest requests cost an order of magnitude more than simple ones" — will be true of your product too. It was true for them, the honest unit was still the wrong product, and they retreated.
2. **Build the escape valve.** "Unlimited access to the 'Auto' model" — when the allowance runs out, let the user continue on your terms rather than stopping. Nobody churns at a wall they never hit.
3. **If your unit is uninterpretable, sell by persona instead.** "We recommend Pro+ for daily agent users, and Ultra for agent power users" is what a tier selector looks like when the numbers cannot do the selecting.
4. **Grandfather the old unit through a migration, and if you get it wrong, bound the remedy with dates.** "Between June 16 and July 4" is what an auditable apology looks like.
5. **The deepest lesson, stated by their own announcement without quite noticing it: the buyer is not buying a quantity. They are buying the absence of having to think about quantity.**
