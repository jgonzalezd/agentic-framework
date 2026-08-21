# Claude / Anthropic

- **URL:** https://claude.com/pricing
- **Observed:** 2026-08-12
- **Fetched successfully:** **yes** — direct fetch succeeded (truncated on the feature tables), re-fetched via the `r.jina.ai` proxy for complete bullets. Support-centre articles fetched directly for the limit language. Prices below are first-hand from the pricing page unless attributed to the support centre.
- **Category:** AI tool (general-purpose assistant, consumer → team → enterprise)
- **Buyer:** individual knowledge worker, then teams of 2–150, then enterprise
- **Value metric:** **a session multiple.** The unit is "usage per 5-hour session", expressed only as a ratio to the tier below. Nothing is counted in messages, tokens or credits anywhere on the page.
- **Model:** flat-rate subscription with rolling-window limits, crossing into metered pass-through at Enterprise — `<models pack pending — references/models/ not yet populated>`
- **Scale:** unknown — no user count observed on the pricing page

## Structure, top to bottom

1. Headline
2. Individual plans (Free, Pro, Max) as three cards
3. Team and enterprise section (Team with two seat types, Enterprise self-serve, Enterprise sales-assisted)
4. Feature comparison
5. FAQ
6. Legal footnote

**Max is a single card reading "From $100"** that conceals two products (Max 5x at $100 and Max 20x at $200). Same pattern as OpenAI's Pro card and Cursor's Individual card. All three declined to display the high anchor.

## Verbatim copy

- **Headline:** `N/A — not captured in research`
- **Tier names:** Free · Pro · Max · Team (Standard / Premium seats) · Enterprise
- **Tier descriptors:** "Free for everyone" · "For everyday productivity" (Pro) · "Get the most out of Claude" (Max) · "For teams of 2 to 150" (Team) · "For large businesses operating at scale" (Enterprise)
- **Badge:** `none observed`
- **Billing toggle:** `none observed` — annual is expressed inside the Pro price string rather than by a control
- **Savings expression:** **"$17"** with the note **"Per month with annual subscription discount ($200 billed up front). $20 if billed monthly."**
- **CTAs:** "Try Claude" (Free, Pro **and** Max — identical across all three) · "Get Team plan" · "Get Enterprise plan" · "Contact sales"
- **Guarantee / refund:** `none observed`
- **Limit language, verbatim:**
  - Pro allowance bullet, in full: **"More usage"**
  - Max allowance bullets: **"Choose 5x or 20x more usage than Pro"** · "Higher output limits for all tasks" · "Early access to advanced Claude features" · "Priority access at high traffic times"
  - Max price string: **"From $100"**
  - Team: "$20/month annually ($25 monthly)" (Standard seat) · "$100/month annually ($125 monthly)" (Premium seat)
  - Enterprise self-serve: "Seat price + usage at API rates" · "$20/seat. Usage cost scales with model and task."
- **FAQ — the only place a ratio is anchored:** **"Pro gives you at least 5x more usage per 5-hour session than Free."** · **"Max gives you 5x or 20x more usage per 5-hour session than Pro."** · **"On Team plans, Standard seats give more than Pro and Premium seats give 5x more than Standard."**
- **Legal footnote:** **"Usage limits apply. Prices shown don't include applicable tax. Price and plans are subject to change at Anthropic's discretion."**
- **From the support centre (not the pricing page), Max article:** "Max 5x" is "$100 per month"; "Max 20x" is "$200 per month" · "five times more usage per session than the Pro plan" · "20 times more usage per session than the Pro plan" · limits "will reset every five hours" · "a weekly usage limit that applies across all models"
- **Support centre, the escape clause:** **"In addition, to manage capacity and ensure fair access to all users, we may limit your usage in other ways, such as weekly and monthly caps or model and feature usage, at our discretion."**
- **Support centre, Claude Code:** "Both Pro and Max plans offer usage limits that are shared across Claude and Claude Code, meaning all activity in both tools counts against the same usage limits." Users see "warning messages about remaining capacity" and can check allocation with the `/status` command.

## Tier table

| Tier | Monthly | Annual (as displayed) | Fenced on | Allowance | CTA | Badge |
|---|---|---|---|---|---|---|
| Free | "$0" | — | baseline capability | unstated; 5-hour reset | "Try Claude" | — |
| Pro | "$20 if billed monthly" | **"$17" / "Per month with annual subscription discount ($200 billed up front)"** | volume | "More usage" — "at least 5x more usage per 5-hour session than Free" | "Try Claude" | — |
| Max | "From $100" ($100 = 5x, $200 = 20x, per support centre) | not shown on card | volume + priority + early access | "Choose 5x or 20x more usage than Pro" | "Try Claude" | — |
| Team Standard | "$25 monthly" | "$20/month annually" | team admin | "more than Pro" | "Get Team plan" | — |
| Team Premium | "$125 monthly" | "$100/month annually" | volume | "5x more than Standard" | "Get Team plan" | — |
| Enterprise self-serve | "$20/seat" + usage | — | metered | **"usage at API rates"** — uncapped | "Get Enterprise plan" | — |

No overage on any subscription plan; the overage *is* the model at Enterprise self-serve. Expiry is a **5-hour rolling reset** plus a weekly cap.

## Ladder arithmetic

**Annual discount, checked against the stated up-front charge.** $17 × 12 = $204, against the stated "$200 billed up front" — the displayed monthly-equivalent is **rounded up by $4/yr**, i.e. the true effective rate is $16.67/mo. Against $20 monthly ($240/yr), $200 annual is a **16.7% discount** — precisely the "two months free" band that recurs across the corpus, though Anthropic does not use that framing.

**Rung spacing.** Pro $20 → Max 5x $100 is **5×**; Max 5x → Max 20x is **2×** for **4× the usage** (5x → 20x). So the second Max rung is the best per-unit value on the individual ladder: usage quadruples while price doubles, a **50% per-unit discount** at the top step. Below it, Pro→Max 5x charges 5× the price for "5x more usage" — **flat per unit, no volume discount at all**. The ladder is flat, flat, then suddenly steep, which tells you Max 20x is priced to catch a segment that would otherwise go to the API.

**Team seat arithmetic.** Standard $20/mo annually is the **same price as Pro annually is not** — Pro is $17 effective, Standard is $20. The Team Standard seat therefore costs **17.6% more than a Pro seat** and delivers "more than Pro" (unquantified) plus admin. Team Premium at $100/mo annually is **5× Standard for "5x more than Standard"** — again flat per unit, and identical in both price and multiplier to Max 5x. Anthropic has priced the team ladder as a mirror of the individual one.

**Multiply the chain out.** Free → Pro (≥5x) → Max 20x (20x Pro) resolves to **Max 20x ≈ 100× Free** — but every link is anchored to an unquantified base, so the product of the chain is also unquantified. No buyer performs this arithmetic and the page never invites it.

**Does any add-on invert the ladder?** There are no add-ons. Nothing is purchasable on top of a plan, so no inversion is possible — a deliberate simplification.

**Does a lower tier plus add-ons reach a higher tier?** No, and it cannot: there is nothing to stack. The only cross-over is **Enterprise self-serve at "$20/seat. Usage cost scales with model and task."** — a heavy Pro user could in principle pay $20/seat plus API rates and exceed any Max ceiling, but the two are denominated in different units (opaque session multiples vs metered API rates) and the page provides no conversion, so the comparison is not computable by the buyer. **That incomparability is the point:** the same page sells a predictability product and a pass-through product and lets the buyer self-select by how much they care about a bounded bill.

**Refund / risk arithmetic:** `N/A — no refund or guarantee language observed.`

## Social proof, trust and objection handling

**No social proof observed** — no logos, testimonials or user counts on the pricing page.

The trust work is done instead by **disclosure**. The legal footnote — "Price and plans are subject to change at Anthropic's discretion" — plus the support centre's "at our discretion" clause together constitute the most explicit reservation of repricing rights in the AI-tool cohort. Anthropic chose legal candour about elasticity where OpenAI chose silence.

The `/status` command in Claude Code is a mechanism unto itself: **the balance is inspectable on demand but not displayed by default.** The buyer is told the shape of the limit at purchase and given a tool to query it at runtime, rather than being shown a depleting gauge.

## FAQ

Present. The lane captured the load-bearing answers verbatim (the three ratio statements above) but **did not enumerate the full question list — question count: `N/A — not captured in research`.**

What the capture does establish is the cohort-wide pattern: **the card sells, the FAQ discloses.** Every genuinely important number that is not on a card lives in the FAQ, including the only place the 5-hour session is anchored to a ratio.

## Mechanisms in use

`<pattern IDs pending — library numbering in progress>`

- **Session-window limits rather than monthly buckets.** The 5-hour rolling reset is the genuinely distinctive mechanic. It changes the felt experience from *depletion* to *pacing* — you never "run out for the month", you wait until the window resets. Materially kinder psychology than a monthly credit balance, and it costs nothing because it also smooths load.
- **A weekly cap layered on top**, added to stop the highest-intensity users consuming every 5-hour window back-to-back.
- **Multiplier tiering with no absolute anchor.**
- **"From $100" concealing a 2× price spread.**
- **Annual discount expressed as both an effective monthly rate and the true up-front charge.**
- **Seat-type mixing on Team.**
- **A genuine hybrid at Enterprise** where subscription and metered API pricing coexist on the same page.
- **Shared pool across products** — chat and Claude Code draw the same allowance.
- **Explicit discretion clause** reserving the right to reprice and to add caps.
- **Identical CTA across Free, Pro and Max** ("Try Claude"), which quietly deprioritises the tier choice: the buyer is pushed into the product first and asked to pick a tier once they have *felt* the limits. Given that the limits are only comprehensible experientially, that is the coherent sequencing.

## What they do that most pages don't

**They state the true annual charge next to the effective monthly rate.** "$17 / Per month with annual subscription discount ($200 billed up front). $20 if billed monthly." is the honest form of the annual-discount pattern. The industry norm is to display "$17/mo" in large type and bury the $200 charge until checkout. Anthropic puts the amount that will actually hit the card in the same sentence as the flattering per-month figure. It costs some conversion and buys a great deal of goodwill at the moment of the charge.

**They cross the subscription/metered boundary inside one price list.** Free through Team are flat-rate with opaque limits; Enterprise self-serve is pass-through. Most companies pick one model and force everyone into it.

## What they conspicuously omit

- Any absolute quantity, anywhere. Free is the only reference point and it is unquantified.
- The $200 Max price on the card.
- Any badge, any social proof, any guarantee, any trial.
- A billing toggle — annual lives inside a sentence instead.

## Documented pricing changes

| Date | Change | Stated reason | Source |
|---|---|---|---|
| — | Max plan introduction | not verified | **attempted fetch failed** — anthropic.com/news/max-plan returns 404 as of 2026-08-12 |
| current | Weekly usage limit layered on top of the 5-hour session limit | "to manage capacity and ensure fair access to all users" | support.claude.com, Max plan article |
| current | Pro at "$17" annual / "$20" monthly; Max at $100 / $200 | n/a | claude.com/pricing (Max sub-prices from support centre) |

**Gap, stated plainly:** the lane could not verify Claude's pricing history. The official Max announcement 404s and the session's search budget was exhausted before dated third-party coverage could be sourced. The 2025 sequence was **deliberately not reconstructed from memory**. The weekly-limit addition is the one change with evidence, and its stated reason is on the record.

## What transfers, and what doesn't

**Brand-driven, do not copy:** the unquantified ladder. Like OpenAI's adverbs, the session multiplier works because a generous free tier teaches the unit and a strong brand carries the sale. Without both, "5x more usage" reads as a refusal to answer.

**Category-driven:** the discretion clause, the shared cross-product pool, the absence of social proof. All are artefacts of selling capacity whose cost moves faster than a pricing page can.

**Genuinely universal, and the two best items in the AI-tool lane are both here:**
1. **State the true charge next to the flattering one.** "$17 / Per month with annual subscription discount ($200 billed up front). $20 if billed monthly." — one sentence, both numbers, no ambush at checkout. This is the single most trust-building line on any page in the cohort and it is free to copy verbatim in structure.
2. **Prefer a rolling window to a monthly bucket.** A limit that refills every few hours converts exhaustion from *depletion* into *pacing*. Nobody churns at a wall they only lean on for an hour. It also smooths your own load, so the kinder design is the cheaper one.
3. **If your limits can only be learned by using them, make the CTA identical across tiers** and let the buyer choose after they have felt the constraint.
4. **Reserve your repricing rights in writing, plainly.** It is more honest than an unstated cap and cheaper than a repricing apology — see `cursor.md` for the alternative.
