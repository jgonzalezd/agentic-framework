# Teardown Template — schema and the adding-a-teardown checklist

This file is NOT a teardown. It defines what every teardown must contain. The skill enumerates `references/teardowns/*.md` (excluding this file) at Phase 0 and pulls the two or three closest to the product's category at Phase 6.

A teardown is a **dated observation of a real page**, not an opinion about it. Its value is entirely in the verbatim copy and the exact structure. A paraphrased teardown is worthless — by the time it is read, the reader cannot tell what the page actually said.

## Adding a teardown — checklist

1. Copy this file to `<company-name>.md` (kebab-case). Fill **every** section; where a section does not apply, keep the heading and write `N/A — <one-line reason>` so the absence is visibly deliberate.
2. **Fetch the live page.** Never reconstruct a pricing page from memory — these change monthly and memory will be confidently wrong. If the fetch fails, say so in `Fetched successfully` and mark every field sourced from elsewhere as second-hand, with its own date.
3. **Quote copy verbatim, in quotation marks.** This is the whole point. Headlines, badges, CTAs, savings expressions, guarantee language, limit language.
4. Every price carries the **observation date and currency**. A price without a date is unusable within months.
5. Record what the page **omits** as carefully as what it includes. An absent FAQ or missing badge on a heavily-optimised page is a deliberate choice and often more informative than a present one.
6. **Pricing changes over time are the highest-value section.** A company that repriced in public has told you what it learned. Fill this whenever the history is findable.
7. Categorise honestly in the frontmatter block. The skill selects teardowns by *similarity*, not fame — a mis-tagged category means the wrong page gets used as a model.

---

# <Company>   ← teardown content starts here; delete everything above this line in your copy

- **URL:** <url>
- **Observed:** YYYY-MM-DD
- **Fetched successfully:** yes | no — <reason, and what the second-hand sources were>
- **Category:** <prosumer SaaS · AI tool · consumer subscription · utility/credit · marketplace · advice/wellness>
- **Buyer:** <who this page is written for>
- **Value metric:** <what the price scales on>
- **Model:** <which `references/models/` pack this is an instance of>
- **Scale:** <what is publicly known about their traffic or revenue, with a source — or `unknown`>

## Structure, top to bottom

1. <section>
2. <section>

<The actual section sequence. This is what the skill reproduces when specifying a page, so get the order right.>

## Verbatim copy

- **Headline:** "<exact>"
- **Subhead:** "<exact>"
- **Tier names:** <exact, in page order>
- **Tier descriptors:** "<exact — the line naming who each tier is for>"
- **Badge:** "<exact wording, and which tier carries it>" | `none`
- **Billing toggle:** "<exact labels>" · default state: <monthly | annual> | `none`
- **Savings expression:** "<exact>" | `none`
- **CTAs:** "<exact, per tier>"
- **Guarantee / refund:** "<exact>" | `none`
- **Limit language:** "<exact — how caps, overage and 'unlimited' are described>" | `N/A`
- **Microcopy under CTA:** "<exact>" | `none`

## Tier table

| Tier | Monthly | Annual (as displayed) | Fenced on | Allowance | CTA | Badge |
|---|---|---|---|---|---|---|

## Ladder arithmetic

<Run the Phase 4.5 checks from `patterns/03-tier-architecture.md` against this page. Price per unit at each rung; whether any add-on inverts; whether any lower tier plus add-ons reaches a higher tier. **Real pages fail these checks more often than not, and a documented failure in the wild is one of the most useful things this library can hold.**>

## Social proof, trust and objection handling

<What is present, exactly what it claims, and where it sits on the page. Logos, counts, ratings, testimonials, press, security and privacy framing. Quote the claims.>

## FAQ

<Present? How many questions? List them verbatim. FAQ composition x-rays the pricing model — a page whose FAQ is mostly billing mechanics is telling you its buyers are anxious about billing mechanics.>

## Mechanisms in use

<Name the pattern IDs this page implements — `P-NNN` from `references/patterns/`. This is what connects the teardown corpus to the library.>

## What they do that most pages don't

## What they conspicuously omit

## Documented pricing changes

| Date | Change | Stated reason | Source |
|---|---|---|---|

## What transfers, and what doesn't

<Honest. Most heavily-optimised pages belong to companies with traffic, brand and a sales motion that a small product does not have. Say which choices are category-driven, which are scale-driven, and which are genuinely universal.>
