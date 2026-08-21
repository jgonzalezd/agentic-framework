# Perplexity

- **URL:** https://www.perplexity.ai/pro
- **Observed:** 2026-08-12
- **Fetched successfully:** **partial, and this is the thinnest teardown in the corpus.** Direct fetch, `curl` and proxy attempts on `/pricing`, `/hub/faq` and the help centre **all returned HTTP 403**. **One proxy fetch of `/pro` succeeded and is the sole primary source for everything below.** No tier grid, no Free tier, no Max tier, no monthly price and no pricing history could be obtained. The gaps are left as gaps.
- **Category:** AI tool (answer engine / research assistant)
- **Buyer:** individual knowledge worker doing research
- **Value metric:** **credits, bolted onto an otherwise unquantified feature list.** "4,000 bonus credits" is the only number on the page; everything else is comparative.
- **Model:** flat-rate subscription with a secondary credit meter over an undisclosed primary allowance — `<models pack pending — references/models/ not yet populated>`
- **Scale:** unknown — no user count observed

## Structure, top to bottom

1. Headline
2. Subhead
3. Pro feature bullets
4. Closing conversion block

The captured page is a **single-tier landing page, not a comparison table.** Perplexity routes Pro buyers to a dedicated persuasion page rather than a tier grid. **Whether a full grid exists at `/pricing` could not be verified** — that URL 403'd on every path.

## Verbatim copy

- **Headline:** **"The most accurate answers from all the top AI models"**
- **Subhead:** **"Power your deep work with Perplexity Computer, reliable research, premium data, and the top AI models."**
- **Tier names:** only "Pro" is present on the captured page
- **Tier descriptors:** `none` — a single-tier page has nobody to differentiate against
- **Badge:** `none observed`
- **Billing toggle:** `none` — see below
- **Savings expression:** `none` — the annual price is the *only* price displayed
- **Price string:** **"$17/month when billed annually"**
- **Feature bullets, verbatim and in order:** "Expanded Computer access" · **"4,000 bonus credits"** · "Deep research" · "Access to top AI models" · "Select between AI models" · "Create polished documents & apps" · **"More usage limits and memory"**
- **CTA / closing block:** **"Ready to unlock Pro?"** followed by **"Get deeper answers, access to all the top AI models, and higher file upload limits in one subscription."**
- **Guarantee / refund:** `none observed`
- **Limit language:** "4,000 bonus credits" and "More usage limits and memory" — see the arithmetic section
- **Microcopy under CTA:** none captured

## Tier table

| Tier | Monthly | Annual (as displayed) | Fenced on | Allowance | CTA | Badge |
|---|---|---|---|---|---|---|
| Free | **not verified — page 403'd** | — | not verified | not verified | not verified | — |
| Pro | **not shown on the captured page** | **"$17/month when billed annually"** | model breadth, Computer access, research depth | "4,000 bonus credits"; "More usage limits and memory" | "Ready to unlock Pro?" | — |
| Max | **not verified** — blog and pricing URLs 403'd | — | not verified | not verified | not verified | — |
| Enterprise | **not verified** | — | not verified | not verified | not verified | — |

## Ladder arithmetic

**Almost none of it can be run, and the reason is a page design choice rather than a fetch failure.** There is one tier on the page, one price, and one quantity. With no Free tier displayed and no higher tier displayed, there are no rungs to compare, no per-unit curve to plot, no add-on to invert and no stacking path to test.

**What can be computed is the annual anchoring.** "$17/month when billed annually" implies **$204 charged up front**. The monthly alternative is **never shown**. Every other company in the AI-tool cohort displays both and lets a toggle do the work; Perplexity simply omits the worse number, which makes this **the most aggressive annual-anchoring in the corpus**. The buyer cannot compute the annual discount because they are never shown the base it is taken from.

**The credit figure does not resolve.** "4,000 bonus credits" is a hard number in a named unit, sitting in the same seven-bullet list as "More usage limits and memory", an adverb with no referent. **More than what?** The Free tier, presumably — but the page never shows Free, so the comparison has no anchor visible to the reader.

**The word "bonus" does structural damage.** It signals that 4,000 credits are *supplementary to* some baseline allowance — and that baseline is never named, quantified or even mentioned. The buyer is told they get extra of something whose ordinary amount is undisclosed. **This is the single most confused piece of unit communication in the AI-tool lane**, and it is confused in a specific way: it borrows the *precision* of a credit system without supplying the *frame* that makes precision meaningful. A credit with no exchange rate and no baseline is strictly worse than honest vagueness, because it invites an estimate the buyer cannot make.

**Note also what the credits attach to.** The bullets lead with "Expanded Computer access" — an agentic product — with credits second. Credits appear to meter agentic/compute work while search itself is governed by the unquantified "More usage limits". **A dual-metric system where only one metric is disclosed.**

**Implicit competitive arithmetic, done by the headline.** A buyer paying $17 here is implicitly comparing against paying roughly $20 each to OpenAI and Anthropic separately. "The most accurate answers from all the top AI models" performs that arithmetic for them without stating it — the aggregator position converts a price into a saving without a comparison table.

## Social proof, trust and objection handling

**None observed** on the captured page — no logos, testimonials, counts, ratings, security or privacy framing. Consistent with the rest of the AI-tool cohort.

## FAQ

**None on the captured page.** `/hub/faq` and the help centre both returned 403, so whether an FAQ exists elsewhere could not be determined. Recorded as **unobtainable, not absent.**

## Mechanisms in use

`<pattern IDs pending — library numbering in progress>`

- **Single-tier landing page in place of a comparison grid** — removes competitive framing and removes the downgrade path from view. The buyer is never shown what they would lose by staying free, because they are never shown free.
- **Annual-only price display** — "$17/month when billed annually" with no monthly alternative anywhere on the page.
- **Credits as a secondary meter over an undisclosed primary allowance.**
- **Model-access breadth as the headline value proposition** rather than volume.

## What they do that most pages don't

**They lead on model breadth rather than on their own model.** "The most accurate answers from all the top AI models" positions Perplexity as an aggregator whose value is *not* being locked to one lab — a position none of the other AI-tool teardowns can take. The pricing consequence is real and is described in the arithmetic section above.

**They show no monthly price at all.** Every other company in the cohort displays both and lets the toggle do the work. Perplexity omits the worse number entirely.

## What they conspicuously omit

- The monthly price.
- The Free tier — its existence is implied by "bonus" and "More", but it is never shown.
- The baseline the "bonus" credits are a bonus *to*.
- Any exchange rate for a credit.
- Any FAQ, guarantee, social proof or badge on the captured page.

## Documented pricing changes

| Date | Change | Stated reason | Source |
|---|---|---|---|
| — | not verified | — | Max announcement blog 403'd; search budget exhausted |

**Gap, stated plainly:** there is **no verifiable pricing history for Perplexity in this corpus.** Every route to it — the pricing page, the hub blog, the help centre — returned 403, and the session's search budget was gone before dated third-party coverage could be reached. It was **not reconstructed.**

## What transfers, and what doesn't

**Scale-driven, do not copy:** nothing here requires scale, which is what makes the page a useful cautionary object rather than an aspirational one.

**Category-driven:** the aggregator headline only works if you genuinely resell multiple upstream providers. It is a positioning asset, not a pricing technique.

**Genuinely transferable — one good idea and one strong warning:**

1. **The good idea: let the headline do the competitive arithmetic.** "…from all the top AI models" invites the buyer to compare $17 against the sum of the subscriptions they would otherwise hold, without a comparison table and without naming a competitor. If your product replaces two or more paid things, the headline is where that gets said.

2. **The warning, and it is the more valuable half: do not adopt credit vocabulary without a credit-shaped problem.** "4,000 bonus credits" against an undisclosed baseline is precision without a frame. If you publish a number in a unit, you owe the buyer either an exchange rate (see `elevenlabs.md`, "1 text character equals 1 credit") or a second concrete unit that carries the comprehension load (see `gamma.md`, "Up to 10 slides per prompt"). A number with neither is worse than an honest adverb, because it looks answerable and is not.

3. **A secondary warning about annual-only display.** Hiding the monthly price maximises the anchor but also removes the buyer's ability to verify the discount — and a buyer who cannot verify a discount often assumes there isn't one. Weigh this against `claude-anthropic.md`'s opposite choice, which shows both numbers and the true up-front charge in a single sentence.
