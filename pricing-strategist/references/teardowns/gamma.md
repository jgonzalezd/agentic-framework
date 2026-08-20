# Gamma

- **URL:** https://gamma.app/pricing
- **Observed:** 2026-08-12
- **Fetched successfully:** **partial.** Direct fetch returned 403; `curl` returned a Cloudflare interstitial ("Just a moment... Enable JavaScript and cookies to continue", 679 KB of challenge shell); the page was **recovered in full via the `r.jina.ai` text-extraction proxy, including the complete FAQ.** Everything quoted below is live page copy retrieved through a proxy. Team and Business prices did not come through.
- **Category:** AI tool (AI presentation / document generation)
- **Buyer:** individual creator → small team → business
- **Value metric:** **credits with an explicitly variable exchange rate** — and, uniquely in the corpus, **a second capacity unit stacked on top: slides per prompt.**
- **Model:** seat subscription with a variable-rate credit meter, a concrete capability ceiling, and purchasable top-ups — `<models pack pending — references/models/ not yet populated>`
- **Scale:** unknown — no customer count observed

## Structure, top to bottom

1. Headline
2. "Pay monthly Pay annually" toggle with "Save up to 28% with annual billing"
3. Four tier cards (Free, Plus, Pro with "Most popular", Ultra)
4. Per-tier monthly credits and slides-per-prompt
5. CTA per tier
6. Team / business tiers
7. SOC 2 badge
8. Model-partner logos
9. FAQ

## Verbatim copy

- **Headline:** **"Choose the plan that's right for you"**
- **Tier names:** Free · Plus · Pro · Ultra · Team · Business
- **Tier descriptors:** `N/A — not captured in research`
- **Badge:** **"Most popular"** — on **Pro**
- **Billing toggle:** **"Pay monthly Pay annually"** · default state: `not captured`
- **Savings expression:** **"Save up to 28% with annual billing"**; FAQ restates it as **"Yes! You can save up to 28% by choosing an annual plan compared to monthly billing."**
- **CTAs:** **"Start for free"** (Free) · **"Get started"** (Plus, Pro, Ultra)
- **Friction removal:** **"No credit card required"**
- **Guarantee / refund:** `none` — but see the cancellation terms below, which do much of the same work
- **Limit language, verbatim:**
  - **The credit definition, central to the page:** **"Credits are used for AI features throughout Gamma. The number of credits an action uses can vary based on what you're doing, which AI model is used, and the length or complexity of the generation."**
  - **The credit allocations FAQ, in full:** **"Paid plans include monthly credits: Plus: 1,000 / month; Pro: 4,000 / month; Ultra: 20,000 / month; Team: 6,000 / seat / month; Business: 10,000 / seat / month. Unused credits roll over up to 2× the monthly amount. Example: Plus can hold up to 2,000. Paid users can purchase additional credits. Free plan includes 400 starter credits that do not refill."**
  - Capability ceiling: "Up to 10 slides per prompt" (Free) versus "Up to 100 slides per prompt" (Plus and above)
- **Cancellation FAQ, verbatim:** **"Absolutely! You can upgrade, downgrade, or cancel your plan at any time from 'Settings & members'. If you cancel, you'll retain access to your paid features and credits until the end of your current billing period."**
- **Content ownership FAQ:** **"Your content remains yours, regardless of your subscription status. If you downgrade or cancel, you'll retain access to all your created content, but some advanced features may be limited."**
- **Models FAQ:** **"We leverage a variety of the most advanced AI models to provide you with the best possible experience. These include: Claude (Anthropic), ChatGPT + DALL-E (OpenAI), Gemini + Imagen (Google), Flux, Recraft, Playground, Ideogram, Luma, Leonardo."**
- **Payment FAQ:** **"We accept all major credit and debit card brands. You can also pay directly via any US or EU bank. For customers in India, UPI payments are supported."**
- **Export FAQ:** **"Yes! You can export any content you create as a PowerPoint (PPT) or PDF file. Alternatively, you can also import any PPT file into Gamma to be enriched."**
- **API FAQ:** **"Gamma offers an API that lets you connect Gamma to other tools and workflows."**
- **Compliance:** SOC 2 Type II

## Tier table

| Tier | Monthly | Annual (as displayed) | Fenced on | Allowance | CTA | Badge |
|---|---|---|---|---|---|---|
| Free | $0 | — | **one-time grant**; 10 slides/prompt | **"400 starter credits"** that **"do not refill"** | "Start for free" | — |
| Plus | $9/seat/mo | "$108 annually" | branding removal; 100 slides/prompt | 1,000 credits/mo | "Get started" | — |
| Pro | $18/seat/mo | "$216 annually" | premium image models; custom branding; API access; up to 10 custom domains | 4,000 credits/mo | "Get started" | **"Most popular"** |
| Ultra | $90/seat/mo | "$1,080 annually" | most advanced models; up to 100 custom domains; early access | 20,000 credits/mo | "Get started" | — |
| Team | **not captured** | — | seats | 6,000 credits/seat/mo | not captured | — |
| Business | **not captured** | — | seats | 10,000 credits/seat/mo | not captured | — |

**Overage:** "Paid users can purchase additional credits" — **rate not published.** **Expiry:** rolls over up to 2× the monthly amount; Free's 400 credits do not refill.

## Ladder arithmetic

**The displayed monthly figures are annual-equivalent rates, and the arithmetic proves it.** $9 × 12 = **$108**, exactly the stated "$108 annually". $18 × 12 = **$216**. $90 × 12 = **$1,080**. All three match the annual totals to the dollar, which means the captured per-month figures **cannot** be the monthly-billing prices — if they were, the annual discount would be 0% against a claimed "up to 28%". Working the claim backwards, a true monthly price would be about **$12.50 (Plus), $25.00 (Pro) and $125.00 (Ultra)** at the full 28%. **Those back-computed figures are derived, not observed** — the lane captured the page in one billing state and the monthly-billing numbers did not come through. Flagged rather than asserted.

**Price per credit at each rung (using the captured, annual-equivalent rates):**

| Tier | Rate | Credits/mo | **$/credit** |
|---|---|---|---|
| Plus | $9 | 1,000 | **$0.0090** |
| Pro | $18 | 4,000 | **$0.0045** |
| Ultra | $90 | 20,000 | **$0.0045** |

**Plus → Pro is a 50% per-credit discount; Pro → Ultra is exactly flat.** The corpus regularity holds again: **the top rung is never sold on unit price.** Ultra costs 5× Pro for 5× the credits and sells on model quality, 100 custom domains and early access instead. And the badge sits on **Pro — the rung where the per-unit discount actually happens.** Everything above it is priced flat.

**The Free fence, computed.** 400 starter credits that do not refill, against Plus's 1,000/month. Free is **40% of one paid month, once, ever.** Against the *credit* axis that is a 2.5× step to Plus — unpersuasive. Against the *slides* axis it is a **10× step** (10 → 100 slides per prompt). **The 10× capability jump is a far more legible upgrade argument than the 2.5× credit jump**, and that is exactly why the second unit exists.

**Does any add-on invert the ladder?** **Not computable — the top-up rate is not published.** Gamma states that "Paid users can purchase additional credits" and stops. Compare `elevenlabs-reception-ai.md`, which publishes both halves and can be checked, and `descript.md` / `runway.md`, which make the same withholding choice as Gamma. Recorded as a gap in the page, not in the research.

**Does a lower tier plus top-ups reach a higher tier?** Unknown for the same reason. **Rollover, however, cannot substitute for upgrading:** the 2× cap means a Plus customer can hold at most 2,000 credits — half of Pro's 4,000 monthly allowance. **The rollover ceiling is set below the next rung's monthly allowance**, which is the same guard ElevenLabs uses.

**Team and Business per-seat credits (6,000 and 10,000/seat/month) exceed Pro's 4,000** but their prices were not captured, so the seat ladder cannot be checked.

## Social proof, trust and objection handling

Present and unusually strong for this cohort, which otherwise carries almost none: a **SOC 2 Type II** badge and a **model-partner logo row** (Claude, ChatGPT + DALL-E, Gemini + Imagen, Flux, Recraft, Playground, Ideogram, Luma, Leonardo).

The partner logos are doing something specific: **borrowing credibility from upstream suppliers.** A buyer who does not know Gamma knows Anthropic, OpenAI and Google, and the row converts that recognition into confidence in a company they have not heard of.

Objection handling is done in the FAQ, and it is generous: content ownership survives cancellation, credits survive to period end, payment methods include UPI for India, and export to PPT/PDF is confirmed — **the anti-lock-in objection answered directly on the pricing page.**

## FAQ

Present, captured in full via proxy. **Question count: `N/A — the lane captured the answers verbatim but did not enumerate a count.`** The answers quoted above cover: credit definition, credit allocations and rollover, annual savings, cancellation, content ownership, models used, payment methods, export/import, and API availability.

The composition x-rays the model precisely: **the two longest answers are both about credits** — what one costs and how many you get. When your unit is variable, the FAQ is where you become honest without cluttering the conversion path. **The card sells, the FAQ discloses.**

## Mechanisms in use

`<pattern IDs pending — library numbering in progress>`

- **Credits with a disclosed-variable rate** — the exchange rate is admitted to vary by action, model and complexity.
- **A second concrete capability unit (slides per prompt) doing the comprehension work** the credit cannot.
- **A one-time non-refilling free grant** instead of a recurring free tier — Free is explicitly a trial, not a supported segment.
- **"Most popular" on the second paid tier**, which is also where the per-credit discount lands.
- **Annual discount as a hedged percentage** ("up to 28%").
- **Rollover at 2× with a worked example.**
- **Purchasable top-up credits at an unpublished rate.**
- **Model quality as a tier fence** ("Advanced AI image models" → "Premium AI image models" → "most advanced AI models").
- **Branding removal as the Plus-tier hook.**
- **Custom domain count as a scaling axis** (10 → 100).
- **SOC 2 badge and model-partner logos as social proof.**
- **Payment-method breadth including UPI for India.**

## What they do that most pages don't

**They admit the exchange rate is variable instead of pretending it's fixed.** "The number of credits an action uses can vary based on what you're doing, which AI model is used, and the length or complexity of the generation" is a genuinely uncomfortable sentence to publish, and publishing it is right — the alternative is a buyer who computes an expectation from an implied fixed rate and feels cheated when a complex generation costs 5×. **Gamma pre-empts the grievance at the cost of some purchase-time clarity.**

**They pair the abstract unit with a concrete one.** Credits meter cost; slides-per-prompt communicates capability. Neither could carry the page alone. **This dual-unit structure is the most directly transferable idea in the AI-tool lane.**

**They work the example.** "Unused credits roll over up to 2× the monthly amount. **Example: Plus can hold up to 2,000.**" Six words that eliminate every ambiguity in "2×" — 2× of what, the plan or the balance? ElevenLabs publishes the same rule and does not work the example.

**Their cancellation terms are the friendliest in the cohort.** "You'll retain access to your paid features and credits until the end of your current billing period." Compare ElevenLabs: "Downgrading or cancelling forfeits unused credits." Same mechanism, opposite generosity. Forfeiture creates switching costs; honouring removes a reason to hesitate at purchase. **The choice reveals whether you are optimising acquisition or retention.**

## What they conspicuously omit

- The top-up credit rate.
- Team and Business prices (not captured — may be present on the live page).
- Any refund or guarantee language.
- Any quantification of how much the credit rate actually varies. "Can vary" is honest about the existence of variance and silent about its magnitude.

## Documented pricing changes

| Date | Change | Stated reason | Source |
|---|---|---|---|
| — | not verified | — | search budget exhausted; no changelog surfaced on the pricing page or FAQ |

**Gap, stated plainly:** no verifiable pricing history. The credit-allocation structure (400 / 1,000 / 4,000 / 20,000) and the presence of Team and Business tiers with per-seat credits suggest iteration, but **no dated evidence was found and none was invented.**

## What transfers, and what doesn't

**Scale-driven:** SOC 2, Team/Business seat tiers, the API.

**Category-driven:** the model-partner logo row only works if you genuinely resell recognisable upstream models.

**Genuinely universal, and the first item is the most valuable idea in the AI-tool lane:**

1. **Pair an abstract cost meter with a concrete capability ceiling.** Credits meter what you spend; "Up to 10 slides per prompt" versus "Up to 100" tells the buyer what they can *do*. This does three jobs at once: it gives the free tier a real fence that isn't just a small number, it creates an upgrade reason for the buyer whose *volume* is low but whose *needs* are deep, and it bounds your worst-case COGS per action. Note the asymmetry Gamma exploits — the capability jump is 10× where the credit jump is 2.5×, so **the more persuasive number is also the one that protects margin.**
2. **Disclose the variance rather than implying a fixed rate.** Write Gamma's sentence in your own register. It costs a little purchase-time clarity and buys immunity from the grievance when the buyer's allowance goes further one month and less the next.
3. **Work the example.** "Example: Plus can hold up to 2,000." Any rule expressed as a multiple should be followed by one worked instance.
4. **On cancellation, decide deliberately between forfeiture and grace, and know which you are optimising.** At an early stage, acquisition usually dominates retention — which argues for Gamma's side of this choice, not ElevenLabs'.
5. **A one-time free grant is a legitimate alternative to a recurring free tier** — "400 starter credits that do not refill" says *try it properly once, then decide*, and paired with "No credit card required" it is an honest offer rather than a trap. But note the cohort pattern: **companies whose unit can only be learned by experience all run recurring free tiers.** A one-time grant only works when the buyer can evaluate the output immediately.
