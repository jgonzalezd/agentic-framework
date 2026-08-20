# PhotoAI — Pieter Levels

- **URL:** https://photoai.com/pricing
- **Observed:** 2026-08-12
- **Fetched successfully:** **yes** — direct fetch, full extraction. Revenue figures are **founder-published, self-reported and unaudited (`anecdote`)**.
- **Category:** AI tool (AI photo generation from a trained personal model), indie-scale
- **Buyer:** an individual wanting professional-looking photos of themselves
- **Value metric:** **AI credits — but fenced by output quality**, which is the whole design
- **Model:** subscription with a credit allowance **plus a stacked quality fence** — `<models pack pending — references/models/ not yet populated>`
- **Scale:** `[anecdote]` levels.io (fetched 2026-08-12): **"Photoai.com is a 40,870 line index.php making 105,000/mo revenue and 80,000/mo profit"**

## Structure, top to bottom

1. Headline stating the entry price
2. Four tier cards with credits, quality fence and free-photo counts
3. Annual option per tier
4. CTA

## Verbatim copy

- **Headline:** **"Photo AI Pricing — Plans Starting at $19/month"**
- **Tier names:** Starter · Pro · Max · Ultra
- **Tier descriptors:** `N/A — the quality-fence lines below serve as descriptors`
- **Badge:** **"Most Popular"** — on **Max**
- **Billing toggle:** monthly / yearly; annual framed as **"6+ months free"**, e.g. Starter **"$99 billed annually"**, which the page frames as a **"$9/month equivalent"**
- **Savings expression:** **"6+ months free"**
- **CTA:** **"Subscribe →"**
- **Guarantee / refund:** `none observed`
- **Limit language, verbatim per tier:**
  - Starter: **"Get 50 AI Credits per month"**, **"48 free photos"** per model
  - Pro: **"Get 1,000 AI Credits per month"**, **"Medium quality photos"**, **"Medium likeness"**, **"144 free photos"**
  - Max: **"Get 3,000 AI Credits per month"**, **"High quality photos"**, **"High likeness"**, **"480 free photos"**
  - Ultra: **"Get 10,000 AI Credits per month"**, **"Ultra quality photos"**, **"Ultra-high likeness"**, **"2,400 free photos"**

## Tier table

| Tier | Monthly | Annual (as displayed) | Fenced on | Allowance | CTA | Badge |
|---|---|---|---|---|---|---|
| Starter | **$19** | **"$99 billed annually"** — framed as "$9/month equivalent" | volume **and** quality | "Get 50 AI Credits per month"; "48 free photos" | "Subscribe →" | — |
| Pro | **$49** | "6+ months free" | volume + **"Medium quality photos"**, **"Medium likeness"** | "Get 1,000 AI Credits per month"; "144 free photos" | "Subscribe →" | — |
| Max | **$99** | "6+ months free" | volume + **"High quality photos"**, **"High likeness"** | "Get 3,000 AI Credits per month"; "480 free photos" | "Subscribe →" | **"Most Popular"** |
| Ultra | **$199** | "6+ months free" | volume + **"Ultra quality photos"**, **"Ultra-high likeness"** | "Get 10,000 AI Credits per month"; "2,400 free photos" | "Subscribe →" | — |

**Trial:** none observed. **Overage / top-up:** **not shown on the page.** **Expiry:** `not captured`.

## Ladder arithmetic

**Price per credit at each rung (monthly billing):**

| Tier | Monthly | Credits/mo | **$/credit** |
|---|---|---|---|
| Starter | $19 | 50 | **$0.3800** |
| Pro | $49 | 1,000 | **$0.0490** |
| Max | $99 | 3,000 | **$0.0330** |
| Ultra | $199 | 10,000 | **$0.0199** |

**Nominal volume discount, entry to top: 94.8%** ($0.3800 → $0.0199) across a **200× credit range.**

**That number looks impossible next to every other product in the corpus — until you notice the second fence.**

**Levels does not sell credits as a commodity. Each rung also changes output quality and likeness** ("Medium" → "High" → "Ultra"). **So the per-credit numbers are deliberately not comparable across tiers: a Starter credit and an Ultra credit do not buy the same thing.**

**This is the single most transferable structural idea in the credit lane. Stacking a quality fence on top of the volume fence defeats per-unit price shopping.** A buyer cannot reason "I'll just buy the cheap tier and use more credits", because the cheap tier's output is worse. **It also means the steep-looking discount curve costs Levels little: the marginal cost of an Ultra credit is genuinely higher, so the discount is partly illusory.**

**Contrast with `elevenlabs.md`, and this is the cleanest pair in the corpus.** ElevenLabs runs a **17.5% discount over the same 200× volume range** because a character is a character at every tier — a **commodity unit**, where a steep curve would be an arbitrage invitation (a Business customer could buy 33 Starter accounts). PhotoAI runs **94.8% over the same range** because its unit is quality-fenced. **The steepness of your volume curve is determined entirely by whether your unit is identical across tiers.** If it is, your curve must be shallow — 20–40% is the practical band.

**Starter is not a volume tier at all.** At **$0.38/credit it is 7.8× the per-credit price of the next rung up** ($0.0490). **That rung is a paid trial, positioned to make $49 Pro look like the first serious option.** The same shape appears at `midjourney.md` (Basic 1.5× the next rung) and `elevenlabs-reception-ai.md` (Basic 33% worse than Plus). **The entry rung is routinely priced badly on purpose; you are not obliged to put your cheapest tier on the discount curve.**

**The badge sits on Max, the third of four** — classic centre-anchoring, one rung above the point where the per-credit rate stops improving sharply.

**Annual discount, derived and checked.** Starter "$99 billed annually" ÷ 12 = **$8.25/month**, against a monthly $19 → **56.6% off**. The page frames this as a **"$9/month equivalent"**, which is a $0.75/month *overstatement of the true rate* — i.e. the page quotes a **rounder, slightly less flattering number than the arithmetic supports.** The framing "6+ months free" is consistent: at 56.6%, the buyer effectively receives **6.8 months free**, so "6+" is honest and conservative.

**~57% is the steepest annual discount in the corpus**, far outside the 16.7%–25% band the rest of the lane occupies. **Read it as an aggressive cash-flow play by a solo operator, not as a discount norm.**

**The "free photos" counts are a second concrete unit.** 48 → 144 → 480 → 2,400 per model, i.e. **3× → 3.33× → 5× steps**, scaling *faster* than nothing and *slower* than credits (which go 20× → 3× → 3.33×). Like `gamma.md`'s "slides per prompt", **this is a concrete unit in the buyer's own domain sitting beside an abstract cost meter** — a photo is something the buyer can count and want; a credit is not.

**Does any add-on invert the ladder?** **No top-up is shown on the page**, so no add-on arithmetic exists to run. Consistent with `bannerbear.md`'s deliberate refusal.

**Does a lower tier plus add-ons reach a higher tier?** **No — and the quality fence makes this structurally impossible even if top-ups existed.** No quantity of Starter credits produces "Ultra quality photos". **The fence is not on volume, so volume cannot defeat it.**

**Refund arithmetic:** none — no guarantee observed.

## Social proof, trust and objection handling

**None observed on the pricing page** — no counts, testimonials, ratings or logos.

The founder publishes revenue figures on his own blog instead, which functions as an unconventional trust signal for this audience. **All `anecdote` — self-reported, unaudited** (levels.io, fetched 2026-08-12):

- **"Photoai.com is a 40,870 line index.php making 105,000/mo revenue and 80,000/mo profit"**
- **"I hit a new $420,000/mo revenue record thanks to the Lex Fridman podcast"** (across his portfolio)
- **"my sites get 4 billion requests a year but I only pay $244/mo to host them on my own VPS"**
- Post title, directly relevant to free-tier design: **"Free users vs paying users is about 1,000x"** — **the title was captured but the post body could not be fetched. The claim inside is a gap and was not guessed.**

## FAQ

**None captured.** `N/A — not captured in research.`

## Mechanisms in use

`<pattern IDs pending — library numbering in progress>`

- **A quality fence stacked on the volume fence** — "Medium" → "High" → "Ultra" quality and likeness — **which defeats per-unit price shopping and licenses a steep discount curve.**
- **A second concrete unit** ("free photos": 48 / 144 / 480 / 2,400) sitting beside the abstract credit meter.
- **Entry rung priced as a paid trial** at 7.8× the next rung's per-unit rate.
- **"Most Popular" on the third of four** — centre-anchoring.
- **An aggressive annual discount (~57%) expressed as duration** ("6+ months free"), conservatively stated.
- **Headline that states the entry price** — "Plans Starting at $19/month".
- **No top-up offered.**

## What they do that most pages don't

**They fence on quality as well as volume, and it changes what the price ladder can do.** Every other credit product in this lane sells the same unit at every tier and is therefore trapped in a shallow discount curve. PhotoAI is not, and **the fence is stated in the buyer's own language — "likeness" — rather than in a technical spec.**

**They price the entry rung to be rejected.** $19 for 50 credits is not a deal; it is a doorway. The page does not hide this — the credits are printed.

**They publish the business's revenue and infrastructure cost on the founder's blog.** Unusual, and for an indie audience it is the social proof.

## What they conspicuously omit

- **Any top-up or overage** — running out means upgrading.
- Any refund, guarantee or trial.
- Any testimonial, count or logo on the pricing page.
- Any FAQ.
- Any statement of what a credit buys in photos **at each quality level** — the "free photos" counts are per model, not per credit, so **the credit-to-photo exchange rate is not published.**

## Documented pricing changes

| Date | Change | Stated reason | Source |
|---|---|---|---|
| — | none captured | — | — |

`N/A — no pricing history was obtainable. The founder's blog was fetched but carries no dated pricing changelog.`

## What transfers, and what doesn't

**Operator-driven:** the ~57% annual discount and the very low cost base ("$244/mo to host") reflect a solo operator optimising for cash flow with almost no fixed costs. **Do not read 57% as a market norm** — the rest of the corpus clusters at 16.7%–25%.

**Genuinely universal, and the first item is the most valuable in the credit lane:**

1. **Decide first whether your unit is identical across tiers — it determines everything else.** If it is, you are ElevenLabs: **keep the volume curve in the 20–40% band** or large buyers will buy several small accounts. If you can fence tiers by *quality* — deeper output, better model, richer result — you are PhotoAI and can run a much steeper curve. **Building that quality fence is worth more than any pricing tweak**, because it unlocks the steep curve, defeats per-unit comparison shopping, and does so while your marginal cost at the top genuinely *is* higher.
2. **State the quality fence in the buyer's language.** "Ultra-high likeness" means something to someone buying photos of themselves; "higher-parameter model" does not.
3. **Make your entry tier a paid trial, not a value tier.** Its job is to make rung 2 look correct. Two other products in this lane do the same thing at 1.5× and 1.33×; PhotoAI does it at 7.8×.
4. **Pair the abstract meter with a concrete count in the buyer's domain.** "48 free photos" does comprehension work that "50 AI Credits" cannot — the same dual-unit structure as `gamma.md`'s slides-per-prompt.
5. **If you run a steep annual discount, express it as duration and understate it.** "6+ months free" against a true 6.8 months is conservative, unfalsifiable and reads as generous.
