# Raycast

- **URL:** https://www.raycast.com/pro (marketing page) and https://www.raycast.com/pricing (price grid)
- **Observed:** 2026-08-12
- **Fetched successfully:** partial — `/pro` fetched but contains no complete price table; `/pricing` fetched and returned the plan grid, FAQ and section order, but **CTA copy per tier and trial details were incomplete**. The Advanced AI add-on price and the trial length are `[secondary]` and marked inline.
- **Category:** prosumer SaaS (Mac launcher / productivity utility)
- **Buyer:** individual developer or power user, then their team
- **Value metric:** **seats** for Teams; **flat per-user** for Pro; **AI capability** as a paid add-on
- **Model:** freemium flat-rate subscription with a stackable capability add-on — `<models pack pending — references/models/ not yet populated>`
- **Scale:** unknown — no customer count or user count was observed on either page

## Structure, top to bottom

As observed on `/pricing`:

1. Navigation / header
2. Hero image
3. FAQs section
4. Footer navigation
5. Pricing comparison table

**Provenance caution:** the fetched section order places the **FAQ above the pricing table**, which if accurate is an unusual inversion. The lane observed this once and flagged it as possibly an artifact of how the page serialises to text rather than the true visual order. Do not reproduce this ordering on the strength of this observation alone.

## Verbatim copy

From **/pro**:

- **Headline:** "Raycast Pro"
- **Tagline:** "New Level Unlocked"
- **Subhead:** "Turn Pro to harness the power of AI, make Raycast your own with custom themes, keep your Macs in sync and more."
- **Price line:** "Starting at $8/month"
- **Plan descriptors:**
  - Pro: "for individuals. It includes Raycast AI, Cloud Sync and more."
  - Team: "for organizations. On top of all Pro features, teams can share Extensions, Snippets and Quicklinks privately."
- **Features named:** Translator, Cloud Sync, Clipboard History, Custom Window Management, Raycast Notes, Custom Themes
- **Student program:** "50% discount to verified students" — "Only applies to the Raycast Pro plan, and not the Advanced AI add-on."

From **/pricing**:

- **Headline (page title / H1 as served):** "Raycast Pricing: Free Forever or Pro with AI for $8/month"
- **Subhead:** "You've got questions. We've got answers"
- **Billing toggle:** `none` — section headers are used instead: "Monthly Subscription" and "Annual Subscription -20%"
- **Savings expression:** "Annual Subscription -20%" (as a section header, not a toggle label)
- **Tier names:** Free · Pro · Teams Free · Teams Pro · Enterprise
- **CTAs:** "Select Plan" (repeated) and "Create Organization"
- **Badge:** `none observed`
- **Guarantee / refund:** `none observed` on either page
- **Limit language:** Free is rendered as the price string **"Free, Forever."**
- **Microcopy under CTA:** none captured in research

## Tier table

| Tier | Monthly | Annual (as displayed) | Fenced on | Allowance | CTA | Badge |
|---|---|---|---|---|---|---|
| Free | "Free, Forever." | "Free, Forever." | core launcher, no AI, no sync | full launcher | "Select Plan" | — |
| Pro | "$10 / month" | "$8 / month" | Raycast AI, Cloud Sync, custom themes, unlimited clipboard history | not itemised | "Select Plan" | — |
| Teams Free | "$0 / user / month" | "$0 / user / month" | shared extensions/snippets/quicklinks (free tier of Teams) | — | "Create Organization" | — |
| Teams Pro | "$15 / user / month" | "$12 / user / month" | Pro features + private team sharing | — | "Select Plan" | — |
| Enterprise | "Custom" | "Custom" | — | — | — | — |
| Add-on: Advanced AI | **+$8/month `[secondary]`** | — | access to more powerful models; "not available during the trial" `[secondary]` | — | — | — |

**Trial:** `[secondary]` — 14-day free trial on starting a Yearly or Monthly Pro subscription; no credit card required to start. Not prominently stated on the pricing page itself.

## Ladder arithmetic

**Annual discount, checked.** Pro: $8 ÷ $10 = 0.80 → exactly **20% off**, matching the published "Annual Subscription -20%". Teams Pro: $12 ÷ $15 = 0.80 → also exactly 20%. The discount is uniform across both paid rungs and the stated percentage is **honest, not "up to"**.

**Rung spacing.** Pro $8 → Teams Pro $12 annual is **1.5×**; monthly $10 → $15 is also 1.5×. The multiplier is preserved across billing periods, which is what you get when the annual discount is a flat percentage rather than a per-tier negotiation.

**Add-on unit arithmetic.** Advanced AI at **+$8/mo `[secondary]`** stacked on Pro at $8/mo annual is a **100% uplift on the base plan** — the add-on costs exactly as much as the entire product it attaches to. This is the cleanest instance in the corpus of decoupling AI cost from plan cost: ARPU can double without the headline $8 ever moving.

**Does any add-on invert the ladder?** Not computably, and the reason matters. Pro + Advanced AI = **$16/user/mo annual**, which is *more* than Teams Pro at **$12/user/mo annual**. An individual who wants frontier models therefore pays more than a team seat costs. That looks like an inversion but is not one in the same unit: Teams Pro buys private team sharing, not frontier models, and the page's own FAQ asks **"Can I upgrade my Team plan to use Advanced AI?"** — which implies the two are separately purchasable and that the answer was not obvious enough to leave unstated. **The research does not record the answer**, so whether $12 Teams Pro can reach frontier models at all is unknown, and the comparison cannot be closed.

**Does a lower tier plus add-ons reach a higher tier?** Not in the individual→team direction: no amount of add-on spend on Pro buys private team sharing. The two axes (individual capability, organisational sharing) never meet, which is a well-formed two-dimensional grid rather than a ladder failure.

**Student-discount arithmetic, and the fence that protects it.** 50% off Pro = **$4/mo annual**. The discount explicitly excludes the add-on ("Only applies to the Raycast Pro plan, and not the Advanced AI add-on"), so a student who buys Advanced AI pays $4 + $8 = **$12/mo, of which the add-on is 67%** — the add-on becomes twice the price of the discounted base. The concession is fenced precisely around the marginal-cost item, which is the correct place to fence it.

## Social proof, trust and objection handling

**None observed.** No testimonials, no customer counts, no logo wall, no ratings on either page. No refund, guarantee or cancellation language anywhere. The only trust device present is the FAQ answer to **"Why is Raycast free for personal use?"** — an explanation of the business model offered in place of social proof.

## FAQ

Present on both pages, verbatim as observed:

From **/pro**: "How do you handle my data?" · "What's the difference between the Pro and Team plan?" · "Can I use my own OpenAI API key?" · "Which model do you use for Raycast AI?" · "Can I upgrade my Team plan to use Advanced AI?" · "Does Raycast have a Student Program?"

From **/pricing**: "Why is Raycast free for personal use?" · "Is the Raycast Free and Team plans available for organizational use?" *(sic — the grammatical error is on the live page)* · "Is it possible to get the Pro plan without AI?" · "What is free and paid in Raycast AI?"

The composition x-rays the model: **three of the ten questions are about AI specifically**, and one — "Is it possible to get the Pro plan without AI?" — is a direct admission that a segment of buyers wants sync and themes and resents paying for AI. That question exists because the money exists behind it.

## Mechanisms in use

`<pattern IDs pending — library numbering in progress>`

- **"Free, Forever." as a price string.** Not "Free" — the permanence is the copy. The free tier is genuinely the whole launcher, which is why the FAQ must explain "Why is Raycast free for personal use?" A free tier this generous requires a *justification*, and they supply one.
- **Five plan slots across two axes** (individual vs org × free vs pro), collapsing what could be two pages into one grid.
- **Savings expressed as a section header, not a toggle** ("Annual Subscription -20%"). Both price sets are shown simultaneously rather than swapped by a control — removes a click and lets the reader do the comparison themselves.
- **AI as a stackable add-on on top of a paid tier** (+$8 on $8) — a 100% ARPU uplift available without repricing the base plan.
- **Student discount as a fenced concession** — 50% off, explicitly excluding the add-on. Protects the marginal-cost item.
- **Title-tag as headline** — the H1 as served is literally an SEO-shaped price statement.

## What they do that most pages don't

- States a reason the free tier exists at all, turning generosity into a trust argument rather than an unexplained gift.
- Shows monthly and annual price sets side by side instead of behind a toggle.
- Sells AI as a stackable add-on rather than a tier gate — the opposite of Notion's choice.

## What they conspicuously omit

- No "most popular" badge across five plan slots.
- No testimonials or customer counts on either page.
- No refund, guarantee or cancellation language observed.
- The trial is not prominently stated on the pricing page itself.

## Documented pricing changes

| Date | Change | Stated reason | Source |
|---|---|---|---|
| 2023 | Pro tier launched at $8/mo annual, $10/mo monthly | — | `[secondary]` |
| 2023 → 2026 | **Sticker price unchanged.** What changed is which AI models the Pro plan covers, not the price | — | `[secondary]` toolradar.com, raycast-discount-code.com |
| ongoing | "Advanced AI" add-on introduced at +$8/mo for frontier models | isolate expensive model costs from base plan | `[secondary]` |

Raycast is the only company in the L11 cohort that has **not raised its headline price in three years**, absorbing AI cost changes into an add-on instead. The $8 number is doing brand work, so they protect it.

## What transfers, and what doesn't

**Scale-driven, do not copy:** the Enterprise "Custom" slot, and the five-slot grid — a two-axis grid only pays for itself once you genuinely sell to both individuals and organisations.

**Category-driven:** the AI-heavy FAQ is an artefact of selling a utility whose newest capability has a real marginal cost to a technical audience that knows it. A consumer product's buyers will not ask "Which model do you use?"

**Genuinely universal, and this is the strongest set in the L11 cohort:**
1. **Showing both billing periods at once** instead of behind a toggle. A toggle is a click and a click is a place to leave; "Annual Subscription -20%" as a header lets the reader do the arithmetic without interacting.
2. **Charging for the expensive capability separately so the headline price never moves.** If your marginal cost is concentrated in one feature, put it in an add-on and protect the number that does your brand work.
3. **Justifying the free tier out loud.** A generous free tier reads as either confidence or desperation; the FAQ answer decides which.
4. **Fencing a discount around the marginal-cost item.** 50% off the plan, 0% off the add-on, stated in one sentence.
