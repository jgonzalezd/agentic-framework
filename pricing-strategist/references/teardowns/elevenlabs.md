# ElevenLabs (core / TTS)

- **URL:** https://elevenlabs.io/pricing
- **Observed:** 2026-08-12
- **Fetched successfully:** **yes** — direct fetch succeeded, confirmed and extended by a second proxy fetch, and independently re-fetched by a second lane the same day with consistent figures. **The most completely captured page in the AI-tool cohort.** (The separate Reception AI product has its own teardown: `elevenlabs-reception-ai.md`. Do not conflate their numbers.)
- **Category:** AI tool (text-to-speech / audio generation)
- **Buyer:** individual creator → studio → business
- **Value metric:** **credits, pegged 1:1 to characters of text.** The rarest thing in the corpus: an abstract currency that is explicitly and publicly convertible to a physical unit the buyer already understands.
- **Model:** volume-laddered subscription with bounded rollover and no top-up — `<models pack pending — references/models/ not yet populated>`
- **Scale:** unknown — no customer count observed on the pricing page

## Structure, top to bottom

1. Headline
2. Monthly/annual toggle
3. Seven tier columns (Free, Starter, Creator, Pro, Scale, Business, Enterprise) with "Popular" on Creator
4. Per-tier credit allocation and feature list
5. Per-tier CTA
6. Credit mechanics explanation
7. FAQ
8. Rollover and cancellation terms

Seven tiers is the widest ladder in the corpus, spanning $0 to $990 self-serve before Enterprise. That breadth is only navigable *because* the unit is consistent: every tier is the same product with a different number of credits, so the buyer's only real decision is volume.

## Verbatim copy

- **Headline:** **"Flexible pricing for your needs"**
- **Tier names:** Free · Starter · Creator · Pro · Scale · Business · Enterprise
- **Tier descriptors:** `N/A — not captured in research`
- **Badge:** **"Popular"** — on **Creator**
- **Billing toggle:** **"Monthly billing"** · default state: `not captured`
- **Savings expression:** **"Annual billing works out to two months free — you pay for 10 months"**
- **CTAs:** **"Build for free"** (Free) · **"Choose Starter"** · **"Choose Creator"** · **"Choose Pro"** · **"Choose Scale"** · **"Choose Business"** · **"Contact us"** (Enterprise)
- **Guarantee / refund:** `none observed`
- **Limit language, verbatim:**
  - **"Each text character you consumes credits"** *(sic — the grammatical error is in the source)*, at 1 credit per character for V2 models
  - **"1 text character equals 1 credit"** (V2 Multilingual)
  - **"discounted pricing applies for API usage, costing between 0.5 and 1 credit per character"** / **"between 0.5 and 1 credit per character"**
  - Cross-product rates: "Speech to Text 330 credits per minute; Eleven Music 900 credits per minute; Sound Effects 200 credits per generation; Voice Changer and Voice Isolator 1,000 credits per minute; Dubbing 2,000–10,000 credits per minute"
  - Rollover: **"Unused credits roll over for up to two months"** / **"Unused credits roll over for up to two months — up to 2× your monthly quota"**, with a maximum balance of **"3× your monthly quota"**
  - Forfeiture: **"Downgrading or cancelling forfeits unused credits."**
  - Cancellation: **"You can cancel your subscription at any time. Your subscription will remain active until the end of your current billing cycle"**
- **Promo:** Creator — "50% off first month at $11"
- **FAQ line:** **"Credits are charged per generation request, not per download."** Regenerations may be free if **"content and certain settings do not change."**

## Tier table

| Tier | Monthly | Annual (as displayed) | Fenced on | Allowance | CTA | Badge |
|---|---|---|---|---|---|---|
| Free | $0/mo | — | volume | 10,000 credits/mo | "Build for free" | — |
| Starter | $6/mo | $5/mo equivalent ("two months free — you pay for 10 months") | volume | 30,000 credits/mo | "Choose Starter" | — |
| Creator | $22/mo ("50% off first month at $11") | $18.33/mo equivalent | volume | 121,000 credits/mo | "Choose Creator" | **"Popular"** |
| Pro | $99/mo | $82.50/mo equivalent | volume | 600,000 credits/mo | "Choose Pro" | — |
| Scale | $299/mo | $249.17/mo equivalent | volume | 1,800,000 credits/mo | "Choose Scale" | — |
| Business | $990/mo | $825/mo equivalent | volume | 6,000,000 credits/mo | "Choose Business" | — |
| Enterprise | Custom | — | custom | custom | "Contact us" | — |

**Overage:** none — the core TTS page shows **no credit top-up**. The answer to running out is rollover or a tier upgrade. (Docs URLs for usage-based billing 404'd on fetch.)
**Expiry:** rolls over up to 2× monthly quota, total balance capped at 3×; forfeited on downgrade or cancellation.

Note the **121,000** on Creator. Not 120,000. An odd number in a ladder of round ones, almost certainly the residue of a historical repricing that nobody rounded off — and a small piece of circumstantial evidence that this ladder has been retuned at least once.

## Ladder arithmetic

**Price per 1,000 credits at each rung (monthly billing):**

| Tier | Monthly | Credits/mo | **$/1,000 credits** |
|---|---|---|---|
| Starter | $6 | 30,000 | **$0.2000** |
| Creator | $22 | 121,000 | **$0.1818** |
| Pro | $99 | 600,000 | **$0.1650** |
| Scale | $299 | 1,800,000 | **$0.1661** |
| Business | $990 | 6,000,000 | **$0.1650** |

**This is the flattest volume-discount curve in the corpus: 17.5% from entry to top across a 200× volume range** ($0.2000 → $0.1650). And it is **fully flat from Pro onward — Scale is fractionally *worse* per credit than Pro** ($0.1661 vs $0.1650), an inversion of about 0.7%.

**Why the curve must be this flat, and this is the generalisable finding.** ElevenLabs sells a **commodity unit**: a character is a character at every tier. If Business credits were meaningfully cheaper, a Business customer could simply buy 33 Starter accounts and arbitrage the difference. **Shallow curves are a defence, not a lack of ambition.** Compare `photoai.md`, which runs a 94.8% discount over the same 200× range — possible only because PhotoAI stacks a *quality* fence on top of the volume fence, so a Starter credit and an Ultra credit do not buy the same thing. **The steepness of your volume curve is determined by whether your unit is identical across tiers.**

**Annual discount, checked.** "Two months free — you pay for 10 months" = 10/12 = **16.7%**, and the displayed equivalents confirm it: $6 → $5 (16.7%), $22 → $18.33 (16.7%), $99 → $82.50 (16.7%), $299 → $249.17 (16.7%), $990 → $825 (16.7%). **Uniform and honest** — no "up to".

**Does any add-on invert the ladder?** There are no add-ons and no top-ups on this page, so **no inversion is possible.** This is a deliberate structural choice: rollover substitutes for top-ups (see below), which solves the same customer problem — lumpy usage — with zero cannibalisation risk.

**Does a lower tier plus add-ons reach a higher tier?** Not purchasable. The only stacking mechanic is rollover, and it is capped: a customer can accumulate to **3× monthly quota** and no further. A Creator customer can therefore hold at most 363,000 credits — still well below Pro's 600,000 monthly. **The rollover cap is set below the next rung's allowance, so banking can never substitute for upgrading.**

**Rollover arithmetic, and the tension it encodes.** Credits "roll over for up to two months — up to 2× your monthly quota", with a hard ceiling of "3× your monthly quota". One unused month accumulates, two accumulate, then accumulation stops. Generous enough to remove the end-of-month panic that drives churn; bounded enough that ElevenLabs never faces an unbounded deferred liability — **a customer cannot bank a year of credits and dump them in one catastrophic month.** Every credit system permitting unlimited rollover carries that exposure; ElevenLabs capped it at 3× and published the cap.

Against that generosity sits the sharpest sentence on the page: **"Downgrading or cancelling forfeits unused credits."** Rollover is a **retention mechanism, not a property right**. A customer holding 2.5× banked credits faces a real switching cost, which is precisely what the rollover was built to create.

**Buyer-frame conversion, using the published peg.** At "1 text character equals 1 credit": a 2,000-word script ≈ 12,000 characters ≈ 12,000 credits. Creator's 121,000 credits therefore covers **about ten such scripts a month**. **This is the only unit in the AI-tool cohort a buyer can evaluate before purchase using a document they already have.** The rate is not uniform — API usage costs "between 0.5 and 1 credit per character" — and ElevenLabs discloses the range rather than hiding it, which lets a buyer bound their worst case at 1:1 and be pleasantly surprised.

## Social proof, trust and objection handling

**None observed** — no logos, testimonials, counts or ratings on the pricing page.

The objection handling is done entirely by **disclosure**: the published peg, the published cross-product rates, the published rollover ceiling, and the published forfeiture clause. A page that tells you exactly what you are buying does not need to tell you who else bought it.

## FAQ

Present. The lane captured the load-bearing answer verbatim — **"Credits are charged per generation request, not per download,"** with the softener that regenerations may be free if "content and certain settings do not change." **Full question list and count: `N/A — not captured in research`.**

That single line resolves the most common billing surprise in generative products: the buyer who regenerates ten times to get one good take and expects to pay once. ElevenLabs states plainly that they pay ten times, then softens it. **Charging on the COGS event and saying so in the FAQ is the correct handling.**

## Mechanisms in use

`<pattern IDs pending — library numbering in progress>`

- **Credits with a published 1:1 character peg** — the physical peg, the highest-comprehension unit in the cohort.
- **Seven-tier volume ladder** made navigable by a single consistent unit.
- **"Popular" badge on the third of seven** — classic centre-anchoring, on the tier where the credit jump from the rung below is largest (30k → 121k, a 4× step for 3.7× the price).
- **Annual discount framed as duration, not percentage.**
- **First-month promo on the badged tier** ("50% off first month at $11").
- **Bounded rollover** — 2× accrual, 3× ceiling.
- **Forfeiture on downgrade/cancel as a switching cost.**
- **Differential credit rates for API vs UI**, disclosed as a range.
- **Charging on generation, not download.**
- **Month-end cancellation with retained access.**
- **Rollover as the substitute for top-ups** — same customer problem solved, zero inversion risk.

## What they do that most pages don't

**They express the annual discount as time rather than percentage.** "Annual billing works out to two months free — you pay for 10 months" is materially easier to evaluate than "save 17%". The buyer does not have to compute anything or trust the base the percentage was taken from; they get two months, and 2/12 is self-evidently correct. **Percentage discounts invite the suspicious buyer to check the arithmetic. This formulation invites nothing.**

**They publish both directions of the rollover.** The generous half (2× accrual) and the punitive half ("Downgrading or cancelling forfeits unused credits") appear in the same terms block. Most companies publish the accrual and bury the forfeiture in the ToS, discovering it to the customer at the worst possible moment. Disclosing both up front converts a future support ticket into a present-tense retention argument.

**They publish an exchange rate at all.** No other credit system in the corpus does this to the same standard.

## What they conspicuously omit

- No top-up mechanism, deliberately.
- No refund or guarantee language.
- No social proof of any kind.
- No explanation of *why* the API rate differs from the UI rate.

## Documented pricing changes

| Date | Change | Stated reason | Source |
|---|---|---|---|
| — | not verified | — | ElevenLabs blog index fetched 2026-08-12: "no blog posts about pricing changes, credit changes, or plan updates" — the blog covers product launches, expansions, customer stories, funding |

**Gap, stated plainly:** ElevenLabs does not announce pricing changes on its blog, and the session's search budget was exhausted before archival evidence could be sourced. The anomalous "121k" on Creator is circumstantial evidence of at least one past retune, but **a history was not built on an odd number.**

## What transfers, and what doesn't

**Domain-driven, and this is the honest caveat.** ElevenLabs escapes the usual comprehension/flexibility trade-off because **characters happen to be both what the buyer counts and what the cost scales with** — text-to-speech is unusually close to linear. That coincidence is a gift of their problem domain, not a strategy anyone can adopt by deciding to. If your COGS does not track a unit your buyer already counts, you cannot publish a peg, and pretending otherwise will hurt you the first time a complex request costs 5×.

**Category-driven:** seven tiers, the API/UI rate split, the absence of social proof.

**Genuinely universal:**
1. **If your unit is the buyer's unit, publish the exchange rate and never trade it away.** The ability to price your own workload before purchase is the rarest asset on any pricing page. Multipliers exist because most companies cannot offer it.
2. **Express the annual discount as time.** "Two months free — you pay for 10 months" is the market default (16.7%) and reads larger than the same number as a percentage.
3. **If your unit is identical across tiers, keep the volume curve shallow — 20–40% entry-to-top.** A steep curve on a commodity unit is an arbitrage invitation.
4. **Bound your rollover and publish both halves.** 2× accrual, 3× ceiling, forfeited on cancellation. Generous enough to stop end-of-month churn, bounded enough to cap the deferred liability, and the forfeiture clause converts the generosity into a switching cost.
5. **Charge on the cost event and say so in the FAQ.** "Charged per generation request, not per download" pre-empts the single most common billing grievance in generative products.
