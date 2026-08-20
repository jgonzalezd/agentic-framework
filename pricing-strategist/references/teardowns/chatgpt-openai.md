# ChatGPT / OpenAI

- **URL:** https://openai.com/chatgpt/pricing/
- **Observed:** 2026-08-12
- **Fetched successfully:** **partial, and the gap matters.** Direct fetch and `curl` with a browser user-agent both returned **HTTP 403** (Cloudflare). The page was recovered via the `r.jina.ai` text-extraction proxy: structure, tier names, limit bullets and CTA copy are **live page copy retrieved through a proxy**. **The dollar amounts render client-side and did not appear in any extraction.** Every price below is therefore attributed to **OpenAI's help centre** or to **dated third-party trackers**, never to the pricing page. Do not cite any OpenAI price here as observed on the pricing page.
- **Category:** AI tool (general-purpose assistant, consumer + business)
- **Buyer:** individual consumer, then teams of 2+
- **Value metric:** **a comparative adverb.** The page shows no unit at all — "Limited", "More", "Expanded", "Maximum", and for Pro a multiplier ("5x or 20x more usage"). The only absolute number near a unit is the context window.
- **Model:** flat-rate subscription with undisclosed, discretionary limits — `<models pack pending — references/models/ not yet populated>`
- **Scale:** unknown — no user count observed on the pricing page

## Structure, top to bottom

1. Headline and subhead
2. Segment switcher (individual / business / enterprise)
3. Four individual tier cards (Free, Go, Plus, Pro), each with a positioning line and a "Get X" CTA
4. Long feature comparison matrix whose cells are the adverb ladder
5. Context-window row
6. Business / enterprise section
7. Education and nonprofit section
8. FAQ

The ladder is the whole design. Every row of the matrix reads Limited → More → Expanded → Maximum across the four columns. A buyer scanning vertically learns their tier's **rank** without ever learning a **quantity**.

## Verbatim copy

- **Headline:** "Pricing"
- **Subhead:** "See pricing for our individual, business, and enterprise plans."
- **Tier names:** Free · Go · Plus · Pro (individual); Business; Enterprise
- **Tier descriptors:** "Best for trying out ChatGPT" (Free) · "Best for longer conversations" (Go) · "Best for advanced work and productivity" (Plus) · "Best for research and coding" (Pro)
- **Alternate positioning strings also present on the page:** "Intelligence for everyday tasks" (Free) · "Expanded access" (Go) · "Do more with advanced intelligence" (Plus) · "Maximize your productivity" (Pro)
- **Badge:** `none observed`
- **Billing toggle:** `none observed` — no individual annual option surfaced
- **Savings expression:** `none`
- **CTAs:** "Get Free" · "Get Go" · "Get Plus" · "Get Pro"
- **Guarantee / refund:** `none observed`
- **Limit language — the entire ladder, verbatim:**
  - Free: "Unlimited text chats with GPT-5.6 Luna" · "Limited messages with uploads" · "Limited and slower image generation" · "Limited voice chats" · "Limited deep research" · "Limited memory and context" · "Limited Codex access"
  - Go: "More messages with tools" · "More uploads" · "More image creation" · "More voice chats" · "Longer memory"
  - Plus: "Advanced reasoning models with GPT-5.6" · "Expanded messages and uploads" · "Expanded deep research" · "Expanded memory and context" · "Expanded Codex usage"
  - Pro: "5x or 20x more usage" · "Pro reasoning with GPT-5.6 Sol Pro" · "Unlimited and faster image creation" · "Maximum Codex tasks" · "Maximum deep research" · "Maximum memory and context"
- **Context window row:** Free "27K" / "~12 pages of text" · Go and Plus "54K" / "~40 pages of text" · Pro "128K" / "~250 pages of text"
- **Pro price prefix:** "From" … "/ month"
- **Nonprofit FAQ:** nonprofits qualify for up to "75% discount on ChatGPT Business or ChatGPT Enterprise"
- **Business minimum:** business plans require a minimum of 2 users
- **From OpenAI help centre (not the pricing page), ChatGPT Plus article:** "$20/month (billed monthly)" · "Higher model limits: Use more messages and broader model options than on the Free plan" · **"Plus subscriptions may include usage limits such as message caps, especially during high demand. These limits may vary based on system conditions."**

## Tier table

| Tier | Monthly | Annual (as displayed) | Fenced on | Allowance | CTA | Badge |
|---|---|---|---|---|---|---|
| Free | $0 | — | everything "Limited"; 27K context | "Unlimited text chats with GPT-5.6 Luna" | "Get Free" | — |
| Go | **$8/mo — `[secondary]` felloai, layer3labs; not on page** | not verified | "More" across the board; 54K context | unstated | "Get Go" | — |
| Plus | **$20/mo — OpenAI help centre, verbatim "$20/month (billed monthly)"** | not shown; no individual annual option surfaced | "Expanded" across the board; 54K context | unstated | "Get Plus" | — |
| Pro | **"From" $100/mo; $200/mo upper — `[secondary]` trackers** | not verified | "5x or 20x more usage"; 128K context | multiplier only | "Get Pro" | — |
| Business | **"$20 per seat per month billed annually, or $25 per seat per month billed monthly" — `[secondary]` layer3labs, dated** | as quoted | min. 2 users | not itemised | contact / self-serve | — |
| Enterprise | Custom | — | pooled | pooled | contact | — |

No overage exists on any individual tier. No expiry mechanic is published — there is no balance to expire.

## Ladder arithmetic

**Most of the standard checks cannot be run, and that is the finding.** Four of the six tiers publish no quantity, so there is no price per unit at any rung, no computable overage premium and no add-on to invert. A page can be this opaque only when the brand carries the sale.

What *can* be computed:

**Context window, the one honestly-numbered axis.** 27K → 54K → 54K → 128K. Free→Go is **2×**; Go→Plus is **1×** (identical); Plus→Pro is **2.37×**. Against `[secondary]` prices of $8 → $20 → $100 (from), the price per thousand tokens of context is **$0.148 (Go) → $0.370 (Plus) → $0.781 (Pro at the "From" price)** — i.e. context gets **monotonically more expensive per token as you climb**, which is the opposite of a volume discount. Two conclusions follow. First, context is not what the tier price is buying. Second, **Go and Plus have identical context at 2.5× the price**, so the $12 gap between them is paid entirely for the unnumbered adverbs ("More" → "Expanded") and for "Advanced reasoning models with GPT-5.6".

**The multiplier at the top has no absolute anchor.** "5x or 20x more usage" is defined by reference to Plus, whose own allowance is "Expanded", which is defined by reference to Go's "More", which is defined against Free's "Limited". The chain terminates in an unquantified base, so the multiplier resolves to nothing. It is a **retention-and-expansion unit, not an acquisition unit**: it is useless to a first-time buyer and nearly perfect for someone who has already hit Plus's ceiling and knows what it feels like.

**"From" on Pro conceals a 2× spread.** The card shows one price prefix for what `[secondary]` trackers describe as a $100 and a $200 product. The higher anchor is deliberately not displayed — see the corresponding finding in `claude-anthropic.md` and `cursor.md`, where the same choice recurs.

**The Business seat minimum is a leak-stopper, not a package.** Business at "$20 per seat per month billed annually" `[secondary]` is the same nominal number as Plus at "$20/month (billed monthly)". The **minimum of 2 users** is what stops a solo buyer arbitraging the business rate — without it, an individual could buy the cheaper annual seat and skip Plus entirely.

## Social proof, trust and objection handling

**None observed on the pricing page.** No logos, no testimonials, no user counts, no ratings. Consistent with the rest of the AI-tool cohort, where product awareness precedes the pricing page and proof is apparently redundant by the time a buyer arrives.

The nearest thing to objection handling is the help centre's disclosure that limits "may vary based on system conditions" — candour about elasticity, published somewhere the buyer will only look after purchase.

## FAQ

Present on the page (the lane captured the nonprofit and business-minimum answers but did not enumerate the full question list). **Question count and full verbatim list: `N/A — not captured in research`.**

## Mechanisms in use

`<pattern IDs pending — library numbering in progress>`

- **Adverb ladder in place of quantities** — Limited → More → Expanded → Maximum. A rank order with no scale attached, which lets OpenAI retune actual caps continuously without republishing the page or contradicting a printed promise.
- **Multiplier tiering at the top** (5x / 20x).
- **Context window as the one honestly-numbered axis, with a plain-language translation.**
- **Price anchoring via "From" on Pro**, hiding two sub-tiers behind one card.
- **Segment switcher** separating consumer from business psychology.
- **Discount fences for education and nonprofits** (up to 75%).
- **Seat minimum of 2 on Business** to stop solo buyers arbitraging the cheaper per-seat rate.
- **Silent fallback on cap exhaustion** — `[secondary]` layer3labs reports that when a cap is reached "the fallback is silent" and the user is served by a lighter model without an error. **Unverified.** If accurate it is the logical endpoint of unnumbered limits: not only is the allowance unstated, its exhaustion is unannounced.

## What they do that most pages don't

**They translate the one number they do publish.** "128K / ~250 pages of text" is the single best line in the AI-tool lane. Token counts are meaningless to the buyer OpenAI is actually selling to; pages are not. Most companies publish the token number and stop, congratulating themselves on transparency while communicating nothing.

They also **refuse to publish the number that would help competitors most** — the message cap — while publishing the one that helps buyers most. That is a coherent position rather than evasiveness, and the two should be judged separately.

## What they conspicuously omit

- Every quantity except context window.
- Any individual annual option — none surfaced.
- Any guarantee, refund, trial or social proof.
- Any explanation of *why* limits exist. Nobody in this cohort says "inference is expensive"; OpenAI is no exception.

## Documented pricing changes

| Date | Change | Stated reason | Source |
|---|---|---|---|
| Aug 2025 | ChatGPT Go launched in India at "$4-5/month" | not stated | `[secondary]` felloai tracker (fetched 2026-08-12) |
| Jan 15, 2026 | Go "went global on January 15, 2026 at $8/month" | none stated for the increase | `[secondary]` felloai tracker |
| Feb 2026 | "advertising" added to Free and Go tiers | not stated | `[secondary]` layer3labs tracker |
| Apr 2026 | Business pricing reduced from "$25/$30" to "$20/$25" | not stated | `[secondary]` layer3labs tracker |
| Jul 30, 2026 | API: Luna cut 80%, Terra cut 20%; Sol unchanged at "$5.00 input / $30.00 output per million tokens" | "efficiency gains from GPT-5.6 itself" | `[secondary]` felloai tracker |

**The Go trajectory is the instructive one:** a tier launched cheap in a single price-sensitive market, then globalised at roughly double the launch price with no announcement framing it as an increase — because to most of the world it was a launch, not a change. **Geographic staging as a repricing mechanism.**

## What transfers, and what doesn't

**Brand-driven, do not copy — this is the important warning.** The adverb ladder is the terminal form of the flexibility/comprehension trade: comprehension near zero, flexibility absolute. There is no number to contradict, no peg to honour, no announcement required to retune anything. **OpenAI can afford it because their brand does the selling and their free tier does the educating. For anyone without that brand it reads as evasion rather than confidence.** Copying the adverb ladder without the brand is the single most tempting and most damaging move a small product can make from this page.

**Category-driven:** the absence of social proof, the absence of a guarantee, and the recurring free tier are all artefacts of selling a unit that can only be learned by consuming it. If your unit is comprehensible before purchase, none of these apply to you.

**Genuinely universal:**
1. **Translate your one honest number into the buyer's frame.** "128K / ~250 pages of text" costs nothing and is worth more than every other line on the page. Whatever unit you publish, publish the conversion beside it.
2. **Publish the number that helps buyers and withhold the one that only helps competitors** — and be able to say which is which.
3. **Set a seat minimum on any cheaper per-seat plan**, or your individual tier is the one being arbitraged.
4. **Staging a launch geographically is a repricing mechanism.** A price that is new in a market is not read as an increase, even when it is one.
