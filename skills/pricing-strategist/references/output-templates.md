# Output Templates — the deliverable contract

Every run produces exactly three files in the agreed output directory (`docs/pricing/` in an app repo, `Projects/<name>/pricing/` in the vault). Follow these skeletons; `<angle brackets>` are placeholders. Where a section doesn't apply, **keep the heading and write `N/A — <one-line reason>`** so absence is visibly deliberate rather than an omission.

| Mode | File 1 | File 2 | File 3 |
|---|---|---|---|
| **audit** | `audit.md` | `page.md` | `measurement.md` |
| **design** | `strategy.md` | `page.md` | `measurement.md` |

## Shared conventions

- Each file opens with a one-line header: `<Product> pricing — <file role>. Generated <date> by pricing-strategist. Regime: <COLD|HOT>. Companion files: <the other two>.`
- **Every number is sourced with a date and a cohort, or bracketed.** Bracketed tokens carry their own fix and are copied verbatim from the Phase 2 inventory: `[cost per analysis — unknown; no margin argument is possible until this exists]`. Never a plausible-sounding figure.
- **Every recommendation cites its pattern IDs** — `(P-034, P-091)`. A recommendation with no ID behind it is either an invention or a gap in the library; say which.
- **All page copy is final copy**, not a description of copy. Mark each file once: *"Copy is drafted against the product's existing voice — read it aloud before shipping."*
- Recommendations are numbered `R1…Rn` consistently across all three files. `page.md` is the source of truth for numbering.
- **Spec only, no code.** Nothing names a framework, library, or implementation detail beyond "analytics tool" and "payment provider".
- Where our own `Pricing/Ledger.md` contradicts the library, say so inline, in this shape: *"(P-000 carries `<weight>` in our ledger rather than the library's — it was refuted on `<product>` in `<experiment>`.)"* Every element of that sentence is a placeholder to be filled from an actual ledger row. **Do not ship it with a real pattern ID and an invented outcome attached**, which is how a template sentence becomes a false claim about a real pattern.

---

## 1. `audit.md`

```markdown
# <Product> Pricing Audit

<header line>

## Verdict
<Three sentences maximum. What this page is currently doing, what it is costing, and the one change that matters most.>

## Score

| Section | Weight | Score | Notes |
|---|---|---|---|
| Ladder integrity | | /10 | |
| Value framing | | /10 | |
| Tier architecture | | /10 | |
| Price presentation | | /10 | |
| Objection handling | | /10 | |
| Trust & proof | | /10 | |
| Checkout path | | /10 | |
| **Total** | | **/70** | |

Scored against `references/audit-rubric.md`. Every line cites the pattern IDs behind it.

## Structural findings — these come first

<Failures of the Phase 4.5 ladder-arithmetic gate. Each with the arithmetic shown. These outrank everything below regardless of how easy the fixes below are, because no copy change survives a ladder that does not add up.>

### S1 — <finding>
**The arithmetic:** <shown>
**Why it matters:** <the buyer behaviour it produces>
**Fix:** <the specific change>

## Findings

Ranked by expected impact × confidence. Each carries its class, its pattern IDs, and its recommendation number.

| # | Finding | Class | Patterns | Impact | Confidence |
|---|---|---|---|---|---|
| R1 | | absent \| weak \| harmful | P-000 | high \| med \| low | high \| med \| low |

### R1 — <finding>
**Class:** <absent | present-but-weak | actively harmful>
**What's there now:** "<verbatim current copy or 'nothing'>"
**Evidence:** <the pattern, its observed effect with cohort and date, and its evidence rating. If the effect is unquantified, say so.>
**Why it applies here:** <the product-specific argument — this is the part that cannot be copied from the library>
**Fix:** → `page.md` R1
**Falsifier:** <the one observation that would show this was wrong>

## What I am NOT recommending, and why

<Named tactics deliberately excluded — a hard paywall on a free-core product, urgency on a calm brand, a decoy tier on a two-tier ladder. An unexplained omission reads as an oversight, and the reasoning here is often more useful than the recommendations.>

## Open questions this audit could not answer

<Each with what it would take to answer it. Drawn from the Phase 2 Unknown column.>
```

---

## 2. `strategy.md` (design mode)

```markdown
# <Product> Pricing Strategy

<header line>

## The decision
<Three sentences. The model, the metric, the ladder, the entry mechanic.>

## Value metric
**What the buyer gets more of when they pay more:** <the metric>
**Why this one:** <the argument>
**Rejected alternatives:** <each, with the reason>
**Quantity or capability?** <Which the ladder sells, and what that implies about the funnel — a quantity fence requires the buyer to want the product *again*; a capability fence requires them to want a *better version*. These are different businesses.>

## Packaging model
**Model:** <name> — see `references/models/<pack>.md`
**Fits because:** <the conditions from the pack that this product meets>
**Fails if:** <the conditions from the pack that would break it, and how we would notice>

## Tier ladder

| Tier | Named buyer | Fenced on | Allowance | Monthly | Annual | $/unit |
|---|---|---|---|---|---|---|

### Ladder arithmetic — Phase 4.5 gate

| Check | Result | Working |
|---|---|---|
| No inverted add-on | pass \| **FAIL** | |
| No sideways rung | pass \| **FAIL** | |
| Monotonic unit price | pass \| **FAIL** | |
| Nameable jumps | pass \| **FAIL** | |
| Annual coherence | pass \| **FAIL** | |

## Price points
**Method used:** <from `derivation-methods.md`, and why this method given what the product can support>
**Derivation:** <the working>
**Margin at each rung:** <or `[COGS unknown — no margin argument available; <how to get it>]`>

## Entry mechanic
<Free tier, trial, guarantee, hard paywall — the decision and the evidence, with the cohort warning if the evidence is app-store data applied to a web checkout.>

## Open risks and assumptions
<Every assumption made without confirmation, and what would falsify it.>
```

---

## 3. `page.md`

The page, top to bottom, as it would ship. **This file is the one the user works from**, so it carries the copy and nothing else.

```markdown
# <Product> Pricing Page — specification

<header line>

## Section order
1. <section> — <its one job>

## The page

### <N>. <Section name>
**Purpose:** <the one job this section does in the decision>
**Copy:**
- Headline: "<final>"
- Body: "<final>"
- CTA: "<final>"
**Visual/content note:** <what is on screen besides copy — never an implementation detail>
**Patterns:** P-000, P-000
**Recommendation:** R<n> — <new | changed from "<verbatim old>" | unchanged>

## Tier cards

### <Tier name>
- **Descriptor:** "<the line naming who this is for>"
- **Price display:** "<exact string, including the annual framing>"
- **Allowance line:** "<exact>"
- **Feature lines:** "<exact>" × n
- **Badge:** "<exact>" | none
- **CTA:** "<exact>"

## Comparison table
| Row | Free | <Tier> | <Tier> |
|---|---|---|---|

## FAQ
<Each question verbatim, each answer final copy. Choose questions by which objections actually stop this product's buyer — the FAQ is an objection-handling instrument, not a help page.>

**Q: "<verbatim>"**
A: "<final copy>"
*Handles:* <the objection> · *Pattern:* P-000

## Net-new mechanisms

<From Phase 7 — purchase shapes, expansion paths, referral economics, save flows the product does not currently have.>

### M1 — <mechanism>
**What it is:** <plain description>
**What it would earn:** <estimate with its basis, or `[unknown — <what would size it>]`>
**What it costs to build:** <honest>
**Falsifier:** <what would show it was not worth it>
**Worth it at this scale?** <yes | no | not yet — with the reason>

## Change list

| # | Element | From | To | Effort |
|---|---|---|---|---|
| R1 | | "<verbatim>" | "<verbatim>" | S \| M \| L |
```

---

## 4. `measurement.md`

The content of this file is decided by the regime. **A file that reads the same in both regimes means Phase 2 did not do its job.**

```markdown
# <Product> Pricing Measurement

<header line — includes the regime>

## Regime: COLD
<Use this half when there is no traffic or no instrumentation at the point of sale.>

### Minimum instrumentation set
Ordered. Each event paired with the pricing question it answers. Nothing here is optional — without it, every recommendation in the companion files stays unfalsifiable.

| # | Event | Properties | The pricing question it answers | Add when |
|---|---|---|---|---|

### Falsifiers
One per recommendation. The single observation that would show it was wrong.

| Rec | Falsifier | Visible once we have | Check after |
|---|---|---|---|

### What we cannot learn yet, at any price
<Honest. At low traffic most differences are undetectable. Say which questions need scale that does not exist, so nobody burns months trying to answer them.>

---

## Regime: HOT
<Use this half when real numbers exist at the point of sale.>

### Current numbers
| Metric | Value | Period | Source |
|---|---|---|---|

### Test queue
Ranked by expected value ÷ effort.

| # | Hypothesis | Primary metric | Baseline | MDE | Sample needed | Duration at current traffic |
|---|---|---|---|---|---|---|

### Tests that are not worth running
<Any test whose sample-size arithmetic puts it beyond a quarter. Say so plainly and propose a different way to learn — a sequential change, a qualitative round, or accepting the prior. An unrunnable test presented as a plan is worse than no plan.>

---

## Ledger write-back
Pattern IDs cited in this run, to be added to `Pricing/Ledger.md` with `our-result: untested`:

| ID | Pattern | Cited in |
|---|---|---|
```

---

## Closing summary (chat, not a file)

End every run in the conversation — not in a file — with:

1. **The verdict in one sentence.** What is wrong, or what to charge.
2. **The structural findings**, if any. If the ladder failed the Phase 4.5 gate, that is the headline and nothing else competes with it.
3. **The top three changes**, ranked, each in one line with its expected effect.
4. **The one thing that would most change this analysis** if it were known — usually unit economics or a willingness-to-pay figure.
5. **The handoff.** Which capability is next: `/_stripe-link` for the rail, `onboarding-builder` for paywall placement, `/_play` for the stage question.

Do not restate the deliverables in chat. They are written; point at them.
