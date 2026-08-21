# TinyWow

- **URL:** https://tinywow.com/pricing
- **Observed:** 2026-08-12
- **Fetched successfully:** **yes** — direct fetch, full extraction.
- **Category:** utility/credit — free-tool aggregator (PDF, image, video, writing utilities)
- **Buyer:** anyone who needs a one-off file conversion, arriving from search
- **Value metric:** **none — nothing is metered.** What the subscription sells is **the removal of deliberately-introduced friction.**
- **Model:** freemium subscription where the fence is **ads, CAPTCHAs and queue position** rather than volume — `<models pack pending — references/models/ not yet populated>`
- **Scale:** unknown — no user count captured

**The anti-credit-pack design, and the most important counter-example in the credit lane.**

## Structure, top to bottom

1. Two billing options
2. Premium feature list — all three are friction removals
3. Free-tier contents and data-retention promise
4. Dual CTAs, including the decline path

## Verbatim copy

- **Headline:** `N/A — not captured in research`
- **Tier names:** Monthly · Yearly
- **Tier descriptors:** `N/A — not captured`
- **Badge:** **"Best Value"** — on **Yearly**
- **Billing toggle:** monthly / yearly, `default state not captured`
- **Savings expression:** `none stated as a percentage` — the two prices are simply shown
- **Premium features, verbatim:** **"No advertisements"** · **"Skip all CAPTCHAs"** · **"Priority processing for faster results"**
- **Free tier, verbatim:** **"access to all our free tools"**; **"All files both processed and unprocessed are deleted after 1 hour."**
- **CTAs:** **"Upgrade Now"** · **"Continue with Free"**
- **Guarantee / refund:** `none observed`
- **Limit language:** `N/A — nothing is capped. The free tier gets every tool.`

## Tier table

| Tier | Monthly | Annual (as displayed) | Fenced on | Allowance | CTA | Badge |
|---|---|---|---|---|---|---|
| Free | $0 | — | **ads, CAPTCHAs, queue position** | **"access to all our free tools"** — no volume cap | **"Continue with Free"** | — |
| Monthly | **"$20 per month"** | — | — | unlimited | "Upgrade Now" | — |
| Yearly | — | **"$15.00 per month"** | — | unlimited | "Upgrade Now" | **"Best Value"** |

**Trial:** none observed. **Overage:** none. **Expiry:** files deleted after 1 hour.

## Ladder arithmetic

**Annual discount, derived.** $15.00 ÷ $20.00 = 0.75 → **25.0%**. Annualised, that is **$180/year against $240** — a **$60 saving.** The page states no percentage; it shows both numbers and lets the reader divide. (Compare `headspace.md`, which makes the same choice, and `elevenlabs.md` / `fathom-analytics.md`, which express the equivalent as "two months free" = 16.7%.)

**25% sits at the top of the observed annual band.** Across the credit-and-indie lane, annual discounts cluster tightly at **16.7%–25%** — ElevenLabs and Fathom at 16.7%, Runway at 20%, TinyWow at 25%, Photoroom at 33%, Descript claiming "up to 35%". **PhotoAI is the outlier at ~57%**, which reads as an aggressive cash-flow play rather than a discount norm.

**Per-unit price: there is none, and that is the entire design.**

**TinyWow does not fence on volume at all. The free tier gets *all the tools*.** What $20/month buys is the removal of ads, CAPTCHAs and queue position. **Instead of metering output, it meters dignity.**

**The consequences are worth enumerating, because they are all absences:**
- No allowance to top up → **no top-up price to peg** (`elevenlabs-reception-ai.md`'s central problem does not arise).
- No balance to accumulate → **no rollover policy** (`elevenlabs.md`'s 2×/3× rules unnecessary).
- No balance to lose → **no expiry policy, no cancellation-forfeiture dispute.**
- No per-unit price → **no ladder to invert**, at any tier, ever.
- No exchange rate → **no comprehension problem** (`gamma.md`'s variable credit, `perplexity.md`'s "bonus credits").

**For a consumer web product where per-unit cost is near zero, this avoids the entire credit-arithmetic problem by construction.** It should be taken seriously as *the* alternative to a metered structure, not as a fallback.

**The cost of the design.** The fence is only as strong as the friction is annoying. A user who tolerates ads and CAPTCHAs never converts, and there is **no usage-driven upgrade trigger at all** — nobody ever "runs out" and reconsiders. The revenue depends entirely on the friction being calibrated to be irritating without being abandonment-inducing, which is a live tuning problem with no published number attached.

**Does any add-on invert the ladder?** No add-ons exist.

**Does a lower tier plus add-ons reach a higher tier?** No stacking path.

**Refund arithmetic:** none — no guarantee observed.

## Social proof, trust and objection handling

**No counts, testimonials, ratings or logos captured.**

The one trust device on the page is a **data-retention promise stated as a mechanism**: **"All files both processed and unprocessed are deleted after 1 hour."** For a tool people upload documents to, that single sentence answers the only real objection — and it does so with a **number and a mechanism** rather than an intention. Compare the privacy hierarchy in `journaling-cohort.md`: **a capability or mechanism claim can be verified; an intention can only be trusted.**

**The decline path is the second trust device.** **"Continue with Free"** sits next to **"Upgrade Now"** — **most freemium paywalls hide the decline path**, and showing it is a small, unusually honest choice that also reduces the resentment that drives users to a competitor's tool.

## FAQ

**None captured.** `N/A — not captured in research.`

## Mechanisms in use

`<pattern IDs pending — library numbering in progress>`

- **Friction as the fence** — ads, CAPTCHAs and queue position, in place of any volume meter.
- **Full tool access on free** — nothing is capability-gated either.
- **"Best Value" badge on the yearly option**, on a two-option page.
- **Both prices shown, no percentage claimed** — the reader does the division.
- **A visible decline path** ("Continue with Free") beside the upgrade CTA.
- **Data retention stated as a mechanism with a number** ("deleted after 1 hour").

## What they do that most pages don't

**They give away every tool and charge for dignity.** In a lane where every peer meters output, TinyWow meters **irritation** — and thereby avoids rollover, expiry, top-up pricing, unused-credit resentment and cancellation-forfeiture disputes entirely.

**They show the decline button.** "Continue with Free" next to "Upgrade Now" is unusual and costs almost nothing: the users who take it were not converting today anyway, and the ones who resent a hidden decline path do not come back.

**They state data retention as a mechanism with a number.** "Deleted after 1 hour" is checkable in spirit and specific in fact.

## What they conspicuously omit

- **Any usage limit whatsoever** — no caps, credits, quotas or allowances.
- Any savings percentage on the annual plan.
- Any refund or guarantee.
- Any social proof.
- Any FAQ.
- Any trial — the free tier is permanent and complete.

## Documented pricing changes

| Date | Change | Stated reason | Source |
|---|---|---|---|
| — | none captured | — | — |

`N/A — no pricing history was obtainable in this research.`

## What transfers, and what doesn't

**Traffic-driven:** TinyWow is a search-intercepted utility with enormous free usage and near-zero marginal cost per operation. The friction fence works because the free tier is a **volume acquisition machine** and the conversion happens on annoyance. A product with low traffic and high per-use cost cannot give away every tool.

**Genuinely universal, and this is the page to read before designing any credit system:**

1. **At a low price point, seriously consider having no credit system at all.** TinyWow charges $20/month and fences on ads, CAPTCHAs and queue position while giving away every tool. **A credit system is a lot of machinery, and machinery is a real cost when you are one person.** Note that `bannerbear.md`, at 2.5× this price point, still refuses to sell overage for the same reason — **simplicity is worth more than the marginal revenue.**
2. **If your marginal cost is near zero, meter friction rather than output.** Queue position, ads, watermarks, export formats and speed are all fences that cost you nothing to remove and create no arithmetic.
3. **Show the decline path.** "Continue with Free" beside "Upgrade Now" reduces resentment at near-zero conversion cost.
4. **State data handling as a mechanism with a number**, adjacent to where the user uploads. "Deleted after 1 hour" does more than a policy page.
5. **Know the trade-off you are accepting.** A friction fence produces **no usage-driven upgrade trigger** — nobody ever runs out and reconsiders. If your product's value grows with use, a volume fence gives you a moment of decision that a friction fence never will. (See `linear.md`: unlimited free seats, capped issues — the paywall arrives *after* dependency exists.)
