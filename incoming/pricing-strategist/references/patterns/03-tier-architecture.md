# Layer 03 — Tier architecture

**Layer slug:** `tier-architecture` · **Loaded at:** Phase 4 + the Phase 4.5 gate

This layer governs the shape of the ladder: how many rungs, what each rung fences on, who each rung names as its buyer, what an add-on or top-up is allowed to cost, and whether the whole menu holds together arithmetically. Menus do not fail aesthetically — they fail arithmetically. The single most common failure is a ladder in which a rational buyer can construct a strictly better package out of your own catalogue than the one you want them to buy: a top-up priced below the plan it attaches to, a lower tier plus two add-ons that reproduces the tier above it for less, a rung whose only difference from its neighbour is an adjective. None of that is visible on a pricing page and none of it is fixable with copy. The second most common failure is subtler: adding a rung that passes every price-referenced rule and still eats the tier above it, because the rule it passed was about prices and the damage was done in value.

## How to use this layer

Read the **Phase 4.5 gate section first and in full** — it is the reason this file exists, and it runs before any pattern here becomes actionable. Then read the patterns in three bands: **P-041 → P-046** are load-bearing and decide the ladder's structure (fences, rung count, assembly); **P-047 → P-054** are the arithmetic patterns that keep the numbers coherent once the structure is set, and they are where a metered product lives or dies; **P-055 → P-064** are situational — free-tier design (P-057, P-058), the unpriced top rung (P-056), governance and price moves (P-062, P-064). Skip P-056 entirely if you have no organisational buyer, and treat P-061 as background unless you are deciding whether to unbundle.

In a **COLD** regime every check in the gate is still runnable — that is the point of this layer. The gate needs only your own price list and a spreadsheet, so it is the one part of pricing work a product with zero traffic can complete to the same standard as a product with a million visitors. Three checks are the exception: **Step Integrity (needs willingness-to-pay data)**, **Reverse-Assembly (needs 90 days of entitlement-versus-usage data)** and **Empirical Mix (needs a stable customer distribution)**. In COLD, bracket those three explicitly rather than guessing at them. In **HOT**, run all fourteen and rank the failures by revenue exposure.

**A note on this layer's evidence distribution.** Most patterns here carry `medium` rather than the library's usual `anecdote` default, and that is deliberate rather than sloppy. The core of this layer is *deductive* — a dominance argument does not need an experiment, because if a cheaper package strictly beats a more expensive one, the buyer's arithmetic settles it. Where a pattern rests on a behavioural claim rather than an arithmetic one (P-053, P-055) it is rated `anecdote`, and the two most famous behavioural claims in this territory — the decoy effect and choice overload — are demoted to Folklore and must not be rehabilitated.

## Ladder arithmetic — the Phase 4.5 gate

Notation, used throughout: tier *n* has list price **Pₙ** and includes **Qₙ** units of the value metric. **rₙ = Pₙ / Qₙ** is that rung's per-unit rate. An add-on **a** has price **A** and, where it is a unit pack, **Q_a** units. All fourteen checks below are restatements of one constraint — the **self-selection / incentive-compatibility constraint** from second-degree price discrimination: the menu must be built so that each customer type prefers the package intended for it, and cannot arbitrage its way to a better one (Pepall et al., instructor materials, fetched 2026-08-12).

**Severity vocabulary**, used on every check:

- **Fatal** — a rational buyer has a strictly better path through your own catalogue. The ladder is dominated. Fix before anything else in the engagement; nothing in Phases 5–8 matters until it is fixed.
- **Structural** — the ladder is not dominated, but a rung is not doing the job it was built for. Fix before any page or copy work.
- **Diagnostic** — the check cannot fail on its own; it tells you where to look. Run it, record the reading, act through one of the checks above.

**Order matters, and the order is not the obvious one.** Value-referenced checks run before price-referenced ones. The reason is the single best-documented cannibalisation case in the public record: Athenic inserted a Growth tier at **$77/mo between Starter at $51 and Professional at $129**, and **Professional signups fell 56% while ARPU fell 6%** (Artisan Growth, fetched 2026-08-12 — an aggregator citing an operator write-up that could not be retrieved independently; direction informative, magnitude unconfirmed). The two new multipliers were **1.51× and 1.68×** — *both inside* the canonical 1.5–2× spacing band. The ladder passed the price-referenced rule and was destroyed anyway, because the new rung sat close enough to Professional's **value** to absorb more than half its demand at 60% of its price. Spacing is not a defence. Value proximity is what cannibalises, so the checks that reference value go first.

---

### Band A — Value-referenced checks

These ask whether the buyer can get what they actually want without climbing. They are the checks the Athenic case argues should run first.

#### A1 — The Assembly Check

*(L16 records that this test has no standard trade name. It is stated informally in exactly one source — "customers do the math" — and no consulting framework formalises it. The name `Assembly Check` is this library's, and it should be introduced as such, not cited as industry vocabulary.)*

**The inequality.** For every subset **S** of purchasable add-ons that together reproduce tier *n+1*'s capability set:

```
Pₙ + Σ_{a∈S} A_a  >  Pₙ₊₁          (strictly greater, with real headroom)
```

**What it detects.** Whether a buyer can build the higher tier out of the lower tier plus your own add-ons for less than the higher tier costs.

**Worked example — Ledgerly passes, thinly.** Ledgerly's only purchasable add-on today is the top-up pack. To reconstruct Books' 400-receipt allowance from Solo: $9 + 6 × $4 = **$33** against Books at **$19**. Headroom $14, and the reconstruction is still incomplete — it does not deliver multi-client tagging, the accountant seat, or unlimited history. **Pass.**

**Worked example — the failing variant.** Ledgerly ships the two obvious add-ons a support inbox asks for: an accountant seat at $4/mo and multi-client tagging at $3/mo, both purchasable on Solo. A freelancer at 90 receipts who wants both now pays **$9 + $4 + $3 = $16** and gets everything they were going to buy Books for, against Books at **$19**. Headroom is **−$3**. Books stops selling to everyone under 100 receipts a month, which at this product's size is most of the market. **Fail — and note that neither add-on price was unreasonable on its own.** They were priced on build cost, which is the mistake.

**The fix.** Price add-ons at the level that protects the rung above, never at the level that recovers their build cost. Where headroom is thin, prefer making one capability *unpurchasable* at the lower tier over making all of them expensive — an incomplete reconstruction is a stronger defence than an expensive one. Vercel is the reference implementation: SAML SSO **$300/mo**, Advanced Deployment Protection **$150/mo**, HIPAA BAA **$350/mo**, static IPs **$100/project/mo**, preview-deployment suffix **$100/mo**, so a Pro team assembling the Enterprise security posture pays **$1,000/mo plus seats and usage** and *still* does not get the 99.99% SLA, audit logs, project-level RBAC, SCIM, managed WAF or multi-region failover, none of which are purchasable on Pro at any price (vercel.com/pricing, fetched 2026-08-12).

**Severity: Fatal.** A failed assembly check means the higher rung is dominated for a describable segment.

#### A2 — The Reverse-Assembly / Downgrade Check

**The inequality.** Run A1 from the top down. For each existing tier-*n+1* account, using 90 days of actual feature and volume usage:

```
Pₙ + Σ (add-ons covering only what that account actually uses)  <  Pₙ₊₁   →  flag
```

**What it detects.** Which of your current higher-tier customers are already paying for a package they could rebuild more cheaply — a downgrade waiting for the next procurement review or price objection.

**Worked example — Ledgerly, constructed against a plausible account.** A Books customer processes 140 receipts/month, uses multi-client tagging every month, and has never invited an accountant. Reconstruction: Solo **$9** + one 50-receipt top-up **$5** (at the corrected price from B4) + tagging add-on **$3** = **$17**, against Books at **$19**. Gap **+$2/month**. That account is a downgrade candidate, and it will find the arithmetic itself the first time it reviews its subscriptions. Repeat across the base and sort descending by gap.

**The fix.** Either raise the reconstruction cost (A1's fix) or move a capability that account genuinely values out of add-on reach and into the higher tier only. Do this *before* building a cancellation save flow — otherwise the save flow becomes the mechanism by which customers discover the cheaper package.

**Severity: Fatal** where the flagged share is material. This failure leaks on renewal rather than on acquisition, which is precisely why it is invisible on an acquisition dashboard. The detection procedure is a **migration audit** tracking "customer movements from higher-cost to lower-cost plans following new launches" and "sudden spikes in down-selling patterns after feature releases" (Pedalix, fetched 2026-08-12). Its grandfathering-side twin: "users on grandfathered pricing are often the heavy users who pay the least" (PayPro Global, fetched 2026-08-12).

**COLD note.** Ledgerly at 40 customers can run this by hand in a spreadsheet in under an hour, and should. Below roughly 200 accounts it is a census, not a sample — which makes it *more* reliable at small scale, not less.

#### A3 — The Named-Fence Check

**The condition.** For every adjacent pair (n, n+1) there exists at least one fence that is (a) **observable**, (b) **enforceable in-product**, (c) **tracks the value metric**, and (d) **statable by the buyer in one sentence, without the comparison table in front of them.**

```
∀ n :  ∃ fence(n, n+1)  satisfying (a) ∧ (b) ∧ (c) ∧ (d)
```

**What it detects.** Steps that have a price difference but no purchase reason.

**Worked example — Ledgerly passes.** Free→Solo: *"Free does five receipts a month; Solo does a hundred and exports straight into your accounting software."* One sentence, observable, enforced, and denominated in the value metric. Solo→Books: *"Solo is you; Books is you, your accountant, and every client kept separate."* Also one sentence, and it names a different buyer rather than a bigger number. **Pass.**

**Worked example — the failing variant.** Books' differences are trimmed to "priority email support" and "advanced export". The buyer's sentence becomes *"Books is Solo but the support is priority and the export is advanced"* — two adjectives and no observable difference. The reference failure in the wild is Slack's Pro→Business+ support step, where Pro is "24/7 with 4-hour first response" and Business+ is "24/7 **priority** with 4-hour first response" — the same SLA number and one adjective, which is presumably why Slack loads that step with Advanced AI and enterprise search instead (slack.com/pricing, fetched 2026-08-12). **If the only difference on a step is an adjective, the step has no fence.**

**The fix.** Merge the two rungs, or move a real capability across the line. Do not add a third adjective.

**Severity: Structural.** An unfenced step does not dominate anything; it simply never converts, and the customers pile up on the rung below — which then shows up as a bottom-heavy mix in A5.

#### A4 — The Step Integrity Check

**The inequality.** PriceBeam's **Step Integrity Index**:

```
SII(n) = (Pₙ₊₁ − Pₙ) / (perceived value gap between rung n and n+1, from WTP research)

target band:  0.8 ≤ SII ≤ 1.2
```

Below 0.8, "a rung is compressing" — the price jump is too small for the value handed over and you are giving the step away. Above 1.2, "the jump looks unjustified" and the buyer sees a cliff. A companion rule from the same source: adjacent-SKU **overlap above 66%** means "you are paying for duplication" (PriceBeam, fetched 2026-08-12).

**What it detects.** Whether the price ladder is actually coupled to a *measured* value ladder rather than to internal cost or a folklore multiplier. This is the only rule found that does that, which is why it outranks B6.

**Worked example — Ledgerly cannot currently run it, and that is the finding.** Ledgerly has no willingness-to-pay data, so the deliverable carries `[step integrity — no WTP data; run the interview sequence in derivation-methods.md, whose floor is 10–15 interviews rather than the folkloric five, before defending the $9→$19 gap]`. To show the arithmetic, suppose a Van Westendorp on 20 freelancers returned a perceived value of $12 for Solo and $26 for Books — **hypothetical inputs, not measurements**. Value gap $14, price gap $10, **SII = 0.71**. Below 0.8: Solo→Books is compressing, and Books is being handed over too cheaply relative to what it is worth. The fix is to raise Books toward $22–$24, not to cut Solo.

Overlap, which *can* be computed today: if Books' entitlement list is 12 rows and 9 are identical to Solo's, overlap is **75% > 66%** — flag for duplication, and consider whether the three genuine differences justify a separate SKU or belong as add-ons.

**The fix.** Get the value gap before adjusting the price gap. An SII failure is never fixed by moving the price alone, because moving the price changes the numerator of a ratio whose denominator you have not measured.

**Severity: Structural**, and **Diagnostic** where no WTP data exists — in which case say so rather than substituting B6 silently.

#### A5 — The Empirical Mix Check

**The conditions.** On the realized distribution across rungs, measured by share of *new* customers and share of *revenue*, monthly, by acquisition cohort:

```
share(lowest rung)  <  0.80          — else upgrade triggers are not binding
share(top rung)     >  0             over a full quarter
no rung's share collapses  > ~20%    in the period after a packaging change
```

**What it detects.** The ladder's report card. It fails in two directions — bottom-heavy, and top-rung-never-bought.

**Worked example — Ledgerly flags.** Of 40 paying customers, 34 are on Solo and 6 on Books: **85% on the lowest paid rung**. That crosses Stripe's diagnostic threshold — "if 80% of customers occupy the lowest tier, upgrade triggers aren't working effectively" (Stripe, fetched 2026-08-12) — and points at A3 (is the Solo→Books fence binding?) or B1 (is Solo's allowance too generous relative to Books'?). **But at n=40, one customer is 2.5 points**, so this reading is a prompt to look, never a verdict. The trade target of 50–60% in the middle rung comes from an aggregator with no dataset behind it and is directional only.

**The failing variant that matters most.** Athenic's inserted $77 rung took **56% of Professional's signups** and **6% of ARPU** `[aggregator-sourced via Artisan Growth; the operator write-up could not be retrieved independently — direction informative, magnitude unconfirmed]` — a failure visible *only* in the mix, and invisible on the pricing page, on the conversion rate, and on every price-referenced check.

**The fix.** Diagnose through A1–A4, not by redesigning the page. Pair the mix with win-loss: if prospects who had budget chose the cheaper plan anyway, the value gap between those two rungs is too small.

**Severity: Diagnostic.** It never fails on its own; it tells you which of A1–A4 to run harder.

#### A6 — The Decoy-Honesty Check

**The conditions.** For the anchor (top) tier:

```
1.  ¬dominated  — no other option is better on every attribute at the same or lower price
2.  share > 0   — someone bought it over a full quarter
3.  delivered   — if bought, it is delivered at the promised standard
```

**What it detects.** Whether your top rung is a tier or a manipulation.

**Worked example — Ledgerly passes.** Three rungs, none dominated, and Books was bought by 6 customers over the quarter. **Pass.**

**Worked example — the failing variant.** Ledgerly adds "Books Plus — $29/mo, 400 receipts, priority support" to make Books look moderate. It is not strictly dominated, but over a full quarter its share is **0**. It is not a tier; it is furniture the buyer has to read past. Remove it.

**The fix.** Remove a dominated rung outright. Give a zero-share rung a real capability that a nameable buyer wants, or delete it — do not reprice it, because a rung nobody bought at $29 is not a rung somebody buys at $24. If you already have a decoy tier, deleting it is optional; what is not optional is that you stop attributing your conversion rate to it and stop spending design cycles tuning it.

**The demotion this check carries, and why it is not a licence.** The reference case for a pure decoy is Ariely's *Economist* test — online-only $59, print-only $125, print+web $125, splitting **16% / 0% / 84%**, and flipping to **68% / 32%** when print-only was removed. That was **n=100 MIT students making a hypothetical choice**, not a market test. The effect does not survive replication as a design tool: Yang & Lynn (*JMR* 2014) report **91 attempts across 23 product classes and 73 decoyed choice sets producing only 11 reliable effects**; Frederick, Lee & Baskin (*JMR* 2014) find it "restricted to stylized product representations in which every product dimension is represented by a number," absent once any attribute is perceptual, and document a **repulsion** effect where share moves the wrong way. **This check exists to remove decoys, not to build them.** Never add a rung in order to harvest a decoy effect.

**Severity: Structural.** A dominated or never-bought rung costs comprehension on every visit and buys nothing measurable.

---

### Band B — Price-referenced checks

These are arithmetic on your own numbers. They are cheap, they need no data you do not already have, and they catch the expensive, embarrassing mistakes. They run second only because passing them proves less than it appears to.

#### B1 — The Quantity-Surcharge Check (per-unit monotonicity)

**The inequality.**

```
rₙ ≥ rₙ₊₁     for every adjacent pair        where rₙ = Pₙ / Qₙ
```

Per-unit price must be non-increasing as you climb. The academic name for a violation is a **quantity surcharge**; the revenue-growth-management name is a **per-unit inversion** or **broken rung**. Revology states the health condition directly: healthy curves "decline smoothly with no inversions (smaller pack costing less per unit than larger pack in same channel)," and list per-unit inversions **first** among broken-rung signals (Revology Analytics, fetched 2026-08-12).

**What it detects.** Whether a bigger package is secretly worse value than buying several small ones.

**Worked example — Ledgerly passes.**

| Rung | Price | Receipts/mo | $/receipt |
|---|---|---|---|
| Free | $0 | 5 | — |
| Solo | $9 | 100 | **$0.0900** |
| Books | $19 | 400 | **$0.0475** |

$0.0900 > $0.0475 — monotone decreasing. **Pass.**

**Worked example — the failing variant.** Books is repriced to $19 for 180 receipts (a plausible "let's protect margin" move). Then r = **$0.1056** against Solo's $0.0900. A buyer needing 180 receipts now buys **two Solo accounts — $18 for 200 receipts** — instead of Books at $19 for 180. That is a quantity surcharge and an open invitation to account-splitting arbitrage. **Fail.**

The reference passing ladder is Zapier Professional, annual: **Pro 750 at $19.99 ($0.02665/task) → Pro 1,500 at $39.00 ($0.02600) → Pro 2,000 at $49.00 ($0.02450)** — monotone (zapier.com/pricing, fetched 2026-08-12). The reference failure, constructed from the same real ladder: price the 1,500 rung at $41 and r rises to **$0.02733**, above the 750 rung — at which point two 750 accounts ($39.98) beat one 1,500 plan ($41).

**The fix.** Move the allowance or move the price until the column is non-increasing. Fix inversions before anything else in Band B.

**Severity: Fatal.**

#### B2 — The Step-Compression Check (per-unit discount cadence)

**The inequality.** Define the step discount

```
dₙ = 1 − (rₙ₊₁ / rₙ)
```

Require the **dₙ series to be non-erratic** — no single step more than roughly double its neighbours. Revology's second broken-rung signal is "cliff-shaped decay: erratic per-unit discounts (e.g. 15%, 18%, 19%, then 33%)."

**What it detects.** A rung that is under-discounted relative to the steps around it, so buyers skip past it — no outright inversion, but a rung nobody stops on.

**Worked example — the best-documented ladder repair in the public record (Revology's beverage ladder, fetched 2026-08-12).** Singles $1.99, 6-pack $6.49, 12-pack $11.99, 24-pack $19.99 → per-can **$1.99, $1.08, $1.00, $0.83**.

- single→6: **d = 46%**  (1 − 1.08/1.99)
- 6→12: **d = 7.4%** ← compressed  (1 − 1.00/1.08)
- 12→24: **d = 17%**  (1 − 0.83/1.00)

The 6→12 rung barely discounts at all against the 46% step below it — the series runs 46%, 7.4%, 17%, so the compressed step is roughly a sixth of its lower neighbour and less than half its upper one. That is the erratic cadence the check exists to catch, and it is why a buyer who has already reached for a 6-pack has almost no arithmetic reason to reach for the 12. The prescribed fix is to widen the gap by cutting the 6-pack's promotional depth **$0.50**; with the measured elasticities (6-pack own-elasticity ≈ **−1.9**, cross-elasticity ≈ **+1.5**, so "roughly half the lost 6-pack volume migrates to the 12-pack"), the recapture is put at **$1.2–1.6M annualized gross profit**.

**Worked example — Ledgerly.** With two paid rungs there is exactly one step (d = 47.2%) and no neighbour to compare it to: **the check is vacuous below three priced rungs, and saying so is the honest output.** It becomes live the moment a third rung appears. Constructed failure: add "Studio $39/mo for 1,000 receipts" → r = $0.0390, and d(Books→Studio) = 1 − 0.0390/0.0475 = **17.9%** against the 47.2% step below it — a ratio of **2.64×**, erratic. Studio at **$29** gives r = $0.0290 and d = **38.9%**, a ratio of 1.21× — smooth.

**The fix.** Adjust the compressed rung's price or allowance, not its neighbours.

**Severity: Structural.**

#### B3 — The Overage-Premium Check

**The inequality.** For the plan an overage attaches to, both conditions must hold:

```
r_overage ≥ rₙ                                      (never cheaper than the plan's own units)
r_overage ≥ (Pₙ₊₁ − Pₙ) / (Qₙ₊₁ − Qₙ)               (the overage floor — the MARGINAL rate of the next rung up)
```

**The second inequality is the one operators miss.** It is not enough to clear the current plan's *average* rate; the overage must clear the *marginal* rate of the next step, or the ladder's own next rung is dominated by the top-up. *(L16 records this floor formula as its own derivation from the incentive-compatibility constraint, not as a cited rule — there is no published statement of it.)*

**What it detects.** Whether the plan allowance is worth anything, and whether the next rung up is buyable.

**Worked example — Zapier passes.** Task overage is priced at **2.5× the base rate on monthly plans and 1.25× on annual**. On the 2,000-task annual rung (r = $0.0245), overage is ≈ **$0.0306/task** — ratio 1.25 ≥ 1. The monthly 2.5× multiplier does double duty as a term fence, making annual commitment the cheaper way to be unpredictable. Against the floor: the 750→1,500 step gives **($39.00 − $19.99) / (1,500 − 750) = $0.0253/task**, and the actual annual overage at the 750 rung (1.25 × $0.02665) is **$0.0333** — clears it comfortably.

**Worked example — the failing variant, constructed from the same real ladder.** Set overage at $0.020/task and leave the plan ladder intact. A buyer needing 2,000 tasks compares:

- Pro 2,000: **$49.00**
- Pro 750 + 1,250 tasks of overage at $0.020: $19.99 + $25.00 = **$44.99**

The lower rung plus top-up beats the higher rung by **$4.01**. Every 2,000-task buyer downgrades. **Fail** — and note that $0.020 is *below* the $0.0253 floor, which is exactly what the floor formula predicts.

**Worked example — Ledgerly fails today.** The top-up pack is **$4 for 50 = $0.0800/receipt**, against Solo's plan rate of **$0.0900**. The first inequality fails: **$0.0800 < $0.0900**. The floor is satisfied — (19 − 9) / (400 − 100) = **$0.0333** — so Books is not dominated, but Solo is: a buyer needing 100 receipts can take **Free (5) + two top-up packs (100) = 105 receipts for $8.00** against Solo's $9.00 for 100. **The entry paid rung is strictly dominated by the free rung plus top-ups.** This is a live arbitrage in the product's current shape.

**The fix.** See B4 — the corrected top-up is **$5 for 50 ($0.10/receipt)**, at which Free + 2 packs costs $10.00 against Solo's $9.00 and the dominance disappears. If the top-up must stay at $4, the alternative fix is to make top-ups unpurchasable on the free tier, which closes this specific hole but leaves the marginal rate below the plan rate and so leaves the allowance devalued.

**Severity: Fatal.**

#### B4 — The Top-Up Peg Check

**The inequality.** One flat top-up rate, pegged to the **entry paid tier**:

```
A / Q_a  ≥  1.1 × r_entry            where r_entry = the entry PAID tier's per-unit rate
A / Q_a  ≥  max over n of [ (Pₙ₊₁ − Pₙ) / (Qₙ₊₁ − Qₙ) ]
Q_a      ≥  Q_entry                  (secondary guard — the minimum pack is not smaller than the entry allowance)
```

**What it detects.** Whether your top-up can invert against *any* rung, and whether upgrade pressure scales as customers grow.

**Why pegging to entry is the whole answer.** Because in-plan unit price *declines* as you climb, a single flat rate pegged just above the **highest** in-plan rate — which is your **cheapest, entry** tier — is automatically (a) never cheaper than any tier's marginal unit, so no inversion is possible at any rung, and (b) progressively more punitive as customers grow, so upgrade pressure scales without a per-tier overage table. **The common mistake is pegging to your top tier's rate to feel generous, which hands your entry customers a live arbitrage.**

**The one product in the public record that publishes both halves of the arithmetic** is ElevenLabs Reception AI (elevenlabs.io, fetched 2026-08-12), against a flat $0.40/credit overage:

| Tier | Plan $/min (derived) | Flat overage | Premium |
|---|---|---|---|
| Basic | $0.3667 | $0.40 | **+9%** |
| Plus | $0.2750 | $0.40 | **+45%** |
| Premium | $0.1980 | $0.40 | **+102%** |

**Worked example — Ledgerly fails, and this is the direct fix.** Required: 1.1 × $0.0900 = **$0.099/receipt**. Current: **$0.0800**. Fail. Set the pack at **$5 for 50 = $0.100/receipt** — a **+11% premium over Solo and +111% over Books**, which mirrors the ElevenLabs structure almost exactly. Every downstream number then holds: Free + 2 packs = $10.00 > Solo $9.00 ✓; $0.100 ≥ the $0.0333 marginal floor ✓; the Solo-plus-top-ups path crosses Books' $19 at 200 receipts, so above 200 receipts Books is strictly the better buy ✓. The secondary size guard is *not* met (a 50-pack is half of Solo's 100 allowance), but with the rate pegged above entry the top-up cannot function as a permanent cheap tier anyway, so the guard is belt-and-braces here rather than load-bearing.

**The fix.** One flat number, pegged at ~1.1× the entry paid rate, published once. Never a per-tier overage table unless a regulator makes you.

**Severity: Fatal** when the peg is below any rung's rate. **Structural** when it clears every rung but sits so close to the top rung's rate that the top rung gets no upgrade pressure.

#### B5 — The Annual Coherence Check

**The inequalities.** With **Aₙ** the annual price of rung *n*:

```
Aₙ / 12   <  Pₙ                        (the discount is real)
Aₙ₊₁ / 12 >  Pₙ                        (a higher tier's annual does not undercut a lower tier's monthly)
Aₙ / Qₙ   ≥  Aₙ₊₁ / Qₙ₊₁               (B1 holds inside the annual ladder too)
A / Q_a   ≥  1.1 × (A_entry / Q_entry) (B4 recomputed against annual rates)
Aₙ / Qₙ   >  Pₙ₊₁ / Qₙ₊₁               (the cross-term check — see below)
```

**The cross-term inequality is the one this check was missing, and it was added on 2026-08-13 after a live audit failed it while passing every other line.** The four inequalities above it all compare a price to a price, or compare per-unit rates *within* a single term. None of them compares a **lower rung's annual per-unit rate** against a **higher rung's monthly per-unit rate**, which is exactly where a two-term ladder cannibalises itself: the cheap rung bought yearly can deliver units more cheaply than the expensive rung bought monthly, at which point the expensive rung is squeezed from below by the tier beneath it and from beside it by its own annual variant, and has no buyer left.

**Worked example — the failure that produced this inequality.** A two-tier product priced its entry rung at $14.99/month for 10 units and $119/year for 120 granted on day one, and its top rung at $29.99/month for 25. Entry annual runs at `$119 / 120 = $0.99167` per unit; top monthly runs at `$29.99 / 25 = $1.1996`. The inequality fails, and the consequence states itself in dollars: **$119.00 buys 120 units while $119.96 buys 100.** The per-unit column across the whole menu reads `$1.4990 → $0.99167 → $1.1996 → $0.79667`, so it *rises* at step two. Every published check passed. The ladder still carried a dominated rung.

**How to run it.** Do not run the checks as a list against adjacent pairs. **Tabulate the entire menu — every rung, every term, every add-on — as one per-unit column sorted by price, and look for any rise.** A ladder with two terms has roughly twice as many dominance paths as a single-term ladder, and the ones that cross both a tier boundary and a term boundary are invisible to any check that holds one of the two fixed.

**Severity: Fatal.** A dominated rung is dominated whichever pair of axes revealed it.

From the second condition falls a bound worth writing on the wall — **the maximum annual discount you can offer on rung n+1 without dominating rung n's monthly price**:

```
max discount on rung n+1  =  1 − (Pₙ / Pₙ₊₁)
```

*(Derived here from the failure mode L16 names for the commitment/term fence — "the annual price of tier n+1 undercuts the monthly price of tier n and breaks the ladder." The failure mode is cited; the closed form is this library's.)*

**What it detects.** A term fence that has quietly demolished the volume ladder underneath it.

**Worked example — Ledgerly passes at the market-default discount.** "Two months free" is the market default and it is **16.7%** (observed across ElevenLabs, Fathom and others; the annual cluster runs **16.7–25%** and is almost always expressed as time rather than percent). Solo annual **$90 ($7.50/mo)**, Books annual **$190 ($15.83/mo)**. Condition 2: $15.83 > $9.00 ✓. Condition 3: $90/1,200 = **$0.0750** ≥ $190/4,800 = **$0.0396** ✓. Condition 4: the $0.10 top-up ≥ 1.1 × $0.0750 = $0.0825 ✓, and ≥ the annual marginal rate (190 − 90)/(4,800 − 1,200) = **$0.0278** ✓. **Pass.**

**Worked example — the failing variant.** Ledgerly runs a "save 60%" annual promotion on Books only: **$91/yr = $7.58/mo**. Books annual now delivers **4× the receipts for $1.42 less per month** than Solo monthly. Solo monthly is strictly dominated and becomes unbuyable. The bound predicts it exactly: the ceiling is 1 − ($9/$19) = **52.6%**, and 60% is above it.

**The fix.** Cap the annual discount at the bound, or raise the lower rung. Never discount one rung's annual term without recomputing the whole annual ladder.

**Severity: Fatal.**

#### B6 — The Rung-Spacing Check

**The inequality.** The widely repeated, weakly sourced trade rule:

```
1.5  ≤  Pₙ₊₁ / Pₙ  ≤  2.0
```

with the whole-ladder version stated as **1× / 2–3× / 4–5×** across Starter / Professional / Advanced.

**What it detects.** Nothing on its own. It flags rungs for review.

**Worked example — Ledgerly is marginally out of band.** $9 → $19 = **2.11×**, just above 2.0. Flag for review, then settle it with A4 (get the value gap), not by moving the price to satisfy the multiplier.

**The arithmetic that makes this check useful for once.** A buyer asks whether to insert a fourth rung between Solo and Books. Two in-band steps require a total gap of at least 1.5 × 1.5 = **2.25×**, and Ledgerly's gap is **2.11×** — so **no insertion between $9 and $19 can put both steps inside the band**. The check says: there is no room. Contrast Athenic, whose $51→$129 gap was **2.53×** and *did* have room — which is exactly how a rung at 1.51× and 1.68× got inserted, passed this check, and cut the tier above it by 56% `[aggregator-sourced via Artisan Growth; direction informative, magnitude unconfirmed]`.

**Real ladders against the band** (all fetched 2026-08-12): Slack monthly $0 → $8.75 → $18.00 → custom (2.06× at the top step, in band); Notion $0 → $10 → $20 → custom (2.0×, in band); Airtable Free → Team $24 → Business $54 (2.25×, in band); Figma Full seat $0 → $16 → $55 → $90 (**3.44×** then 1.64× — the Professional→Organization cliff is defensible only because the *buyer changes*, from individual/small team to cross-department business).

**The fix.** Do not adjust the price to satisfy the multiplier. Go and get the value gap.

**Severity: Diagnostic.** The band traces to trade blogs with no dataset (M Accelerator, an aggregator, fetched 2026-08-12) and is echoed as "50–100% gaps" by a vendor blog. **Treat as a smell test, never as a law.** A ladder can sit perfectly inside it and still cannibalise.

---

### Band C — Economics and change control

These do not check the shape of the ladder. They check whether the ladder makes money and whether you may safely move it.

#### C1 — The Cost-to-Serve Floor Check

**The inequality.**

```
gross margin(rung)  >  0    at the REALIZED usage mix on that rung, with fully-loaded cost
```

and, for the free tier:

```
cost-to-serve(free user) / (free→paid conversion rate)  <  acceptable CAC
```

**What it detects.** Rungs that are quietly loss-making, and free tiers whose infrastructure bill is a hidden acquisition cost.

**Worked example — Ledgerly, with the unknown bracketed.** Ledgerly has no COGS note, so the deliverable carries `[cost per receipt processed — unknown; no margin argument is possible until this exists]`. To show the arithmetic only, assume $0.02/receipt: Solo at its 100 cap costs $2.00 against $9 → **77.8% GM**; Books at its 400 cap costs $8.00 against $19 → **57.9% GM** — positive but materially thinner, which is the reading that matters. Free at 5 receipts costs **$0.10/user/month**; at a 2% free→paid conversion that is **$5.00/month of free-tier infrastructure per acquired paying customer**, against Solo's $9/month — payback inside the first month. The general form, verifiable because it is a definition rather than a finding: at $1.00/month cost-to-serve and a 1% conversion rate you pay **$100/month of infrastructure per acquired paid customer**.

**The reason to run it.** A price-pack audit across CPG found that "roughly one pack in ten is quietly loss-making once true costs land," and names "loss-making rungs — packs surviving only on trade support with negative margins" as a broken-rung signal (Revology Analytics, fetched 2026-08-12). The bundling analogue: "bundling expensive features for low-paying segments erodes margin" (Umbrex, fetched 2026-08-12).

**The fix.** Raise the rung, cap the allowance, or move the expensive capability up a tier. Never fix it with volume.

**Severity: Fatal** for a negative-margin rung at realized mix. **Diagnostic** where COGS is unknown — in which case bracket it and say no margin argument is available.

#### C2 — The Price-Increase Break-Even Check

**The inequality.**

```
break-even churn  =  1 − (P_old / P_new)
```

You may lose that share of the affected cohort and still be flat.

**What it detects.** Whether a price move is comfortable, or needs splitting into two.

**Worked example — the documented case (Glencoyne, fetched 2026-08-12).** 500 customers at $20/mo = $10,000 MRR. New price $30/mo → $15,000 MRR gross. Break-even churn = 1 − (20/30) = **33.3%** — you can lose **166 of the 500** and still be flat. The prescribed forecasting procedure models the outcome at **5%, 10% and 15%** churn against that threshold. A stricter operational guardrail found elsewhere: ensure churn-driven losses do not exceed **50% of the increase's benefit**, and pause the rollout if realized churn exceeds projection by more than **2 percentage points** (KnowledgeLib — an aggregator whose every figure carries an opaque citation marker; directionally useful, numerically unverified).

**Worked example — Ledgerly.** Raise Solo from $9 to $12. Break-even churn = 1 − (9/12) = **25.0%**; across 34 Solo customers that is **8.5 customers**. The increase is **33.3%**, which crosses the >20% threshold above which grandfathering is advised rather than immediate migration. **That threshold is not a literature: it traces to a single undated vendor blog (SaaSDash), with no sample, no method and no counterfactual behind the number.** Treat it as a convention this library follows for consistency, and do not present it to a client as a finding. **And the honest scale caveat: at n=34 a single cancellation is 2.9 percentage points, so realized churn cannot be measured against a 25% threshold with any confidence.** The decision is made on judgement, not on the monitoring plan.

**The fix.** If your realistic worst case is within a few points of break-even, the move is too large for one step — take it in two (e.g. 15% now, 15% in twelve months). Run the change through a **5% canary batch** first to surface billing-system bugs, and staff for a support spike in the first week. The commonly-quoted **15–20% increase in support tickets** figure comes from PayPro Global (fetched 2026-08-12) — **a vendor blog with no sample, no method and no date on the measurement, so plan capacity from it but never forecast with it.**

**Severity: Structural** — it never invalidates a ladder, but skipping it converts a computable decision into a nervous one.

---

### The runnable checklist

Execute top to bottom against any ladder. Each line is answerable from a spreadsheet plus, where marked, one dataset you may not have.

```
0.  TABULATE.  One row per rung — including every allowance step, every add-on,
    every top-up pack, and the annual variant of each. Columns: price, allowance,
    per-unit rate, dominant fence, named buyer.

    VALUE-REFERENCED  (run first — passing the price rules proves less than it looks)

1.  A1  ASSEMBLY.      For each tier n+1, enumerate every add-on subset that
                       reconstructs it. Is Pₙ + ΣA > Pₙ₊₁, with headroom?      [FATAL]
2.  A2  REVERSE ASM.   Join 90-day usage to entitlements per higher-tier account.
                       Sort by (Pₙ₊₁ − reconstruction cost). Any positive gaps?
                       [needs usage data — bracket if COLD]                    [FATAL]
3.  A3  NAMED FENCE.   Write each step as ONE sentence with the table closed.
                       Any step you cannot write? Any step that is only an adjective?  [STRUCTURAL]
4.  A4  STEP INTEGRITY. SII = price gap ÷ WTP value gap, band 0.8–1.2.
                       Adjacent-SKU overlap ≤ 66%.
                       [needs WTP data — bracket if COLD]                      [STRUCTURAL]
5.  A5  EMPIRICAL MIX. Lowest rung < 80%? Top rung share > 0 this quarter?
                       Any rung collapsed since the last packaging change?
                       [needs a stable distribution — bracket if COLD]         [DIAGNOSTIC]
6.  A6  DECOY HONESTY. Top rung: not dominated, bought by someone, delivered.  [STRUCTURAL]

    PRICE-REFERENCED  (cheap, mechanical, and catches the expensive mistakes)

7.  B1  MONOTONICITY.  Is the per-unit column non-increasing as price rises?    [FATAL]
8.  B2  COMPRESSION.   dₙ = 1 − rₙ₊₁/rₙ. Is any step more than ~2× a neighbour?
                       [vacuous below three priced rungs — say so]             [STRUCTURAL]
9.  B3  OVERAGE.       r_overage ≥ rₙ AND ≥ (Pₙ₊₁−Pₙ)/(Qₙ₊₁−Qₙ).              [FATAL]
10. B4  TOP-UP PEG.    One flat rate ≥ 1.1 × the ENTRY PAID tier's rate.
                       Pack size ≥ entry allowance (secondary).                [FATAL]
11. B5  ANNUAL.        Aₙ₊₁/12 > Pₙ. Per-unit monotone inside the annual ladder.
                       Annual discount ≤ 1 − Pₙ/Pₙ₊₁.                          [FATAL]
12. B6  SPACING.       1.5 ≤ Pₙ₊₁/Pₙ ≤ 2.0 — flag only, then settle with A4.   [DIAGNOSTIC]

    ECONOMICS AND CHANGE CONTROL

13. C1  MARGIN FLOOR.  Positive gross margin per rung at realized mix, fully
                       loaded. Free: cost-to-serve ÷ conversion < acceptable CAC.
                       [needs COGS — bracket if absent]                        [FATAL]
14. C2  BREAK-EVEN.    Before ANY price move: 1 − (P_old/P_new). Compare to a
                       realistic worst case. >20% increase → grandfather.      [STRUCTURAL]

15. REPORT.  Every failure with the arithmetic shown, ordered FATAL → STRUCTURAL →
    DIAGNOSTIC. A single FATAL outranks every finding in Phases 6–8.
```

Governance, once the ladder passes: assign a named owner, "document guardrails (minimum per-unit gaps, channel price corridors, promotional floors), review quarterly and after cost changes, require exception approvals with expiration dates" (Revology Analytics, fetched 2026-08-12). See P-064.

## Patterns

### P-041 — Give every rung a fence the buyer can name in one sentence

- **layer**: `tier-architecture`
- **mechanism**: A buyer only climbs when they can articulate what they are buying. A fence that is observable, enforceable, tracks the value metric, and fits in one sentence converts a price difference into a purchase reason; an unnameable difference reads as arbitrary and stalls the decision at the rung below.
- **works-when**: the product has at least one dimension that visibly separates casual from serious use — history depth, volume, seats, security posture — and the fence is enforceable in-product rather than by policy.
- **fails-when**: the step's only difference is an adjective ("priority" support at the same SLA number); or the fence gates something on the activation path, which produces "resentment rather than upgrades"; or the fence is unverifiable and therefore shareable, which is the top fence failure mode — "easily gamed fences: shared coupons, unverifiable status."
- **observed-effect**: `no quantified effect published`. Observable in market structure only: Slack Free→Pro reduces to "Free forgets everything older than 90 days and caps you at 10 apps," while Slack does *not* lean on the Pro→Business+ support step, where both tiers show the same 4-hour first response (slack.com/pricing, fetched 2026-08-12).
- **evidence**: `medium` *(convergent framework guidance from two independent consultancies plus a primary pricing page; no effect has ever been measured)*
- **sources**: https://slack.com/pricing · https://stripe.com/resources/more/saas-pricing-and-packaging-strategy · https://umbrex.com/resources/frameworks/marketing-frameworks/price-fences-framework/ (all fetched 2026-08-12)
- **how-to**: Write each adjacent step as a single sentence with the comparison table closed. If you need a conjunction, the step carries more than one fence and should be simplified. If you cannot write the sentence at all, the step has no fence and should be merged into a neighbour. Then check the fence moves with the value metric: a buyer who doubles the value they extract should be closer to hitting it.
- **example-copy**: "Free keeps this month. Solo keeps the year, and hands it to your accountant as a spreadsheet."
- **worked-example**: Ledgerly's two steps both pass. Free→Solo: *"Free does five receipts a month; Solo does a hundred and exports straight into your accounting software."* Solo→Books: *"Solo is you; Books is you, your accountant, and every client kept separate."* The second sentence names a different buyer rather than a bigger number, which is what makes it a fence rather than an allowance step.

### P-042 — Match the fence type to the shape of the value, not to what is easy to build

- **layer**: `tier-architecture`
- **mechanism**: Fences that track the value metric feel fair and bind harder as the buyer succeeds. Fences chosen for engineering convenience feel arbitrary, get negotiated away, and let a high-value buyer pay the same as a low-value one. The metric is *what* you charge for; the fence is *who is allowed to get which price for it* — conflating them is the root error.
- **works-when**: you have identified a single dominant value metric and can name what varies across segments. Map it: value differs in **kind** → feature fence; in **volume** → usage fence; by **who is in the room** → seat/persona fence; by **cost of failure** → support/SLA fence; by **how long the artefact matters** → time fence; where WTP differs but the product does not → identity or flexibility fence.
- **fails-when**: the fence and the metric diverge — gating on admin seats while value scales with documents processed. Also fails when value is O(n²) in team size but price is O(n), or the reverse: a flat $50 fee failed for a communication product because communication value grows faster than seat count (Stripe Atlas teardown). And a support/SLA fence fails when it is the *only* differentiator on a step, which buyers read as a shakedown.
- **observed-effect**: `no quantified effect published` for the matching rule itself. Market structure: Notion fences version history by time — **7 days Free → 30 Plus → 90 Business → unlimited Enterprise**; Vercel fences runtime logs at **1 hour Hobby → 1 day Pro → 3 days Enterprise**; Figma fences by *seat persona* inside every tier — Professional **Full $16 / Dev $12 / Collab $3**, Organization **$55 / $25 / $5**, Enterprise **$90 / $35 / $5**; regional identity fences carry real spread, with Nordic buyers reported at ~**28% above** the US price and Brazilian buyers ~**12% below** (all fetched 2026-08-12; the regional figures are a vendor blog's, uncited).
- **evidence**: `medium`
- **sources**: https://www.notion.com/pricing · https://www.figma.com/pricing/ · https://vercel.com/pricing · https://www.producttranquility.com/pricing-metrics-your-secret-weapon-in-the-quest-for-value-based-pricing/ · https://umbrex.com/resources/frameworks/marketing-frameworks/price-fences-framework/
- **how-to**: Write the value metric down first. For each candidate fence ask: does a buyer who doubles their value metric get closer to this fence? If not, it is orthogonal to value and will read as a tax. Then apply the five non-negotiables — observable, enforceable, fair and explainable, aligned with value, arbitrage-resistant. Use exactly one dominant fence per step plus optional secondary ones; the remedy for fence proliferation is "start small, standardize, retire underperformers."
- **example-copy**: n/a (structural)
- **worked-example**: Ledgerly's value metric is receipts processed, so its dominant fence is a usage fence (5 / 100 / 400) — correct, because value differs in volume. Its secondary fence on the Solo→Books step is a *persona* fence (the accountant seat), correct because at that step the buyer genuinely changes from a solo filer to a filer-plus-advisor. A feature fence on export formats would be wrong here: export is on the path to the aha moment, so gating it blocks activation rather than monetising it.

### P-043 — Add a rung only when it brings a new buyer and a new fence

- **layer**: `tier-architecture`
- **mechanism**: A rung that subdivides an existing allowance without introducing a new fence has no independent reason to exist, so it absorbs demand from its neighbours instead of creating it. A rung that arrives with a distinct nameable buyer *and* a distinct fence adds a step to the value ladder rather than to the price list.
- **works-when**: you can name the new rung's buyer in one sentence and its fence in another, and the rung clears A1, A2 and A4 against **both** neighbours.
- **fails-when**: the new rung's buyer is "people who found the middle a bit expensive" — that is a discount wearing a tier's clothes. Also fails when the difference is purely an allowance number: express it as an allowance step *inside* a tier instead, the way Zapier runs roughly twenty task-volume steps inside a single Professional tier rather than as twenty tiers.
- **observed-effect**: The failure: a Growth tier at **$77/mo inserted between Starter $51 and Professional $129** cut **Professional signups 56% and ARPU 6%**, despite multipliers of 1.51× and 1.68× sitting inside the conventional band. The success from the same source: a move from a 3-tier per-seat model to a **4-tier hybrid keyed to workflows processed** reported **ARR +25%, ACV +35%, enterprise churn halved** — because the fourth rung came with a new *value metric* rather than a subdivided allowance. (Artisan Growth, fetched 2026-08-12 — **aggregator citing an operator write-up that could not be retrieved independently; treat the direction as informative and the magnitudes as unconfirmed.**)
- **evidence**: `medium` *(one direction-consistent pair of cases, both second-hand through the same aggregator)*
- **sources**: https://www.artisangrowthstrategies.com/blog/saas-pricing-experiment-results-real-tests-what-they-changed · https://stripe.com/resources/more/saas-pricing-and-packaging-strategy · https://zapier.com/pricing
- **how-to**: Before adding a rung, write the buyer sentence and the fence sentence. If either duplicates an existing rung's, do not add it. Then run A1, A2 and A4 against both neighbours *before* publishing, not after the mix moves. If the only real difference is a number on an allowance you already sell, ship it as an allowance step.
- **example-copy**: n/a (structural)
- **worked-example**: Ledgerly is asked for a rung between Solo ($9) and Books ($19) "for people who need a bit more than 100." The buyer sentence is *"people who found Books a bit expensive"* — a discount, not a tier. The fence sentence duplicates Solo's. And B6's arithmetic confirms there is no room: two in-band steps need a 2.25× total gap and Ledgerly's is 2.11×. **Rejected**, with the recommendation to sell more top-ups instead, which is exactly what an allowance step is.

### P-044 — Choose the tier count from ladder arithmetic, never from choice overload

- **layer**: `tier-architecture`
- **mechanism**: The real cost of an extra rung is not psychological — it is combinatorial. Every additional rung multiplies the number of adjacent pairs, add-on subsets and assembly combinations that A1–A6 and B1–B6 must clear, and each new rung must be given a fence a buyer can name. Three is a reasonable default because it is the smallest set that produces a middle, not because it has been shown to convert best.
- **works-when**: you are choosing between 2, 3 and 4 rungs and can articulate what each one fences on. Two beat three when the market genuinely contains two buyers (individual vs team; self-serve vs assisted) or when you cannot yet name a fence for a third. Four or more beat three when the value metric is *usage* — allowance steps are cheap to name and enforce — or when you sell across a genuinely wide segment range.
- **fails-when**: you cut tiers "because of choice overload." **Choice overload is not a law you can design against: `anecdote`.** Scheibehenne, Greifeneder & Todd (*JCR* 2010) pooled **63 conditions from 50 experiments, N = 5,036**, and found a mean effect size of essentially zero (**d ≈ 0.02**) with high between-study variance, identifying "several potentially important preconditions" but explicitly **no sufficient conditions**. Also fails when applied to a usage ladder, where the "tiers" are allowance steps and the comparison cost is one number.
- **observed-effect**: Published guidance, with its provenance: Stripe's packaging guide says "**two to four tiers are ideal**"; Stripe Atlas, on a real 8-tier product, says condense to "**three plus 'call us for enterprise pricing'**"; Umbrex caps the catalogue at "~**3 tiers + 3–5 high-impact add-ons**"; Elena Verna's rule is "**3 plans is ideal, 5 plans is the max**"; the *Monetizing Innovation* complexity ceilings are **fewer than ~4 tiers/SKUs and fewer than ~9 benefits per package**. Against that, the only prevalence dataset: SaaS Research Lab's March 2026 scan of **110 products across 12 categories** shows real ladders spread across 2, 3, 4 and 5+ tiers, with freemium adoption of **41% / 41% / 67% / 48%** at 2 / 3 / 4 / 5+ tiers — i.e. 4-tier products are the *most* likely to carry a free tier, not the least. **No dataset establishing an optimal tier count exists.**
- **evidence**: `medium` *(for the arithmetic argument, which is deductive; the tier-count guidance itself is convergent opinion, and the "three is optimal" claim is Folklore)*
- **sources**: https://stripe.com/resources/more/saas-pricing-and-packaging-strategy · https://stripe.com/guides/atlas/saas-pricing · https://saasresearchlab.com/report/pricing-study · https://academic.oup.com/jcr/article/37/3/409/1795787 · https://umbrex.com/resources/frameworks/pricing-frameworks/bundling-unbundling-frameworks/
- **how-to**: Start from the buyers you can name, not from a number. For each candidate rung write the buyer sentence and the fence sentence (P-041, P-043). Then count the arithmetic burden: *k* rungs create *k−1* adjacent pairs, and *m* add-ons create up to 2^m assembly subsets per pair. If you cannot run A1 by hand across that space, you have too many SKUs. Never justify a tier count with the jam study.
- **example-copy**: n/a (structural)
- **worked-example**: Ledgerly holds at three rungs (Free / Solo / Books) with one add-on. That is 2 adjacent pairs and a trivial subset space — the full gate runs in under an hour on a spreadsheet, which is the correct amount of machinery for a one-person product with 40 customers. A fourth rung would double the audit burden and, per P-043, has no buyer.

### P-045 — Run the assembly test before you publish any add-on

- **layer**: `tier-architecture`
- **mechanism**: Every purchasable add-on creates a new synthetic package — lower tier plus add-on. If any such package matches a higher tier's value at or below its price, the higher tier stops selling, because buyers assemble instead of climbing. The add-on's price must therefore be set by **what it protects**, not by what it cost to build.
- **works-when**: add-ons are enumerable and their capability overlap with higher tiers can be mapped feature by feature.
- **fails-when**: add-ons are launched by a product team on cost-plus logic without a packaging review; or the catalogue grows past the point where subsets can be enumerated by hand — beyond roughly 8 add-ons, choice paralysis arrives *and* the arithmetic becomes intractable at the same time.
- **observed-effect**: `no quantified effect published`. The canonical trade statement: "If your $99/month Pro tier includes feature X, do not also sell X as a $30 add-on to the $29 Starter tier. Customers do the math" ($29 + $30 = $59 < $99), generalised as "a $30 add-on that delivers what the next tier includes for $50 trains customers to never upgrade" (Dodo Payments, vendor blog, uncited figures, fetched 2026-08-12). The counter-example: Vercel's Pro add-ons total **$1,000/mo plus seats and usage** ($300 SAML SSO + $150 Advanced Deployment Protection + $350 HIPAA BAA + $100 static IPs + $100 preview-deployment suffix) to assemble an Enterprise security posture, and still omit the SLA, audit logs, RBAC, SCIM, managed WAF and multi-region failover, which are unpurchasable at that tier (vercel.com/pricing, fetched 2026-08-12).
- **evidence**: `medium` *(a deductive dominance argument with one clean market implementation on each side; no measured effect exists)*
- **sources**: https://dodopayments.com/blogs/saas-add-ons-pricing-strategy · https://vercel.com/pricing
- **how-to**: List every add-on and every higher-tier capability. For each higher tier, find the **cheapest** subset that reconstructs the capabilities buyers actually cite as their reason for that tier. Require lower tier + subset to exceed the higher tier's price with real headroom. Where headroom is thin, prefer making one capability unpurchasable at the lower tier over pricing everything up — an incomplete reconstruction is a stronger defence than an expensive one.
- **example-copy**: n/a (structural)
- **worked-example**: Ledgerly's proposed accountant-seat ($4) and multi-client-tagging ($3) add-ons on Solo would reconstruct Books for **$16 against $19** — headroom −$3, and Books dies for everyone under 100 receipts/month. The fix that costs nothing: keep tagging as a $3 add-on and make the **accountant seat unpurchasable on Solo**. Reconstruction is then incomplete at any price, and the $3 add-on still monetises the freelancers who want tagging without an accountant.

### P-046 — Run reverse assembly against the installed base, not the pricing page

- **layer**: `tier-architecture`
- **mechanism**: The assembly test protects acquisition; the same arithmetic run top-down protects renewal. Every higher-tier customer whose *actual* usage can be rebuilt more cheaply from your catalogue is holding a downgrade they have not yet noticed — and this leak is invisible on an acquisition dashboard, because nothing about the funnel changes until a procurement review or a price objection surfaces it.
- **works-when**: you have entitlement data joined to 90 days of feature and volume usage, and a small enough base to sort by hand or a big enough one to script.
- **fails-when**: you read it without segmenting — a single large cohort or a promotion can dominate the sort; and when the gap is small enough that switching cost dominates it, in which case the account is theoretically at risk and practically not.
- **observed-effect**: `no quantified effect published`. The detection procedure is documented as a **migration audit** tracking "customer movements from higher-cost to lower-cost plans following new launches" plus "sudden spikes in down-selling patterns after feature releases" (Pedalix, fetched 2026-08-12). The population it finds is corroborated from the grandfathering side: "users on grandfathered pricing are often the heavy users who pay the least" (PayPro Global, fetched 2026-08-12).
- **evidence**: `medium`
- **sources**: https://www.pedalix.com/en/blog/cannibalization · https://payproglobal.com/how-to/manage-grandfathering-pricing/
- **how-to**: For each higher-tier account, join entitlements to actual usage over 90 days. Build the minimum-cost reconstruction from {lower tier} ∪ {add-ons}. Sort descending by (Pₙ₊₁ − reconstruction cost). Any positive gap is a downgrade waiting for a trigger. Fix the ladder *before* you ship a cancellation save flow, or the save flow becomes the channel through which customers learn the cheaper package exists.
- **example-copy**: n/a (structural)
- **worked-example**: A Ledgerly Books account at 140 receipts/month that uses tagging and has never invited an accountant reconstructs as Solo $9 + one $5 top-up + $3 tagging = **$17 against $19** — a $2/month gap. Across 6 Books accounts this is a spreadsheet, not a project. If three of six carry a positive gap, the finding is that Books' fence is the accountant seat and nothing else, which sends you back to P-041.

### P-047 — Check per-unit monotonicity and the step-discount cadence before anything else

- **layer**: `tier-architecture`
- **mechanism**: Price per unit of the value metric must never rise as the buyer climbs. An inversion — the academic term is *quantity surcharge* — makes the larger package strictly worse than buying multiples of a smaller one, which invites account-splitting arbitrage and destroys trust in the whole ladder the moment one buyer notices. The second-order version is cadence: a step that under-discounts relative to its neighbours is a rung nobody stops on.
- **works-when**: there is a single dominant value metric with a defined unit, and the rungs are sold on volume.
- **fails-when**: tiers differ mainly by feature rather than volume, so there is no meaningful per-unit rate — the analogue is then A4's price-gap-to-value-gap ratio. Also **fails as stated at the top rung**, which is legitimately sold on bandwidth, seats, support or terms rather than on unit price (see P-052) — but if you take that exemption, say so on the page, because a buyer with a spreadsheet will find the inversion. Cadence is vacuous below three priced rungs.
- **observed-effect**: Zapier Professional annual runs **$0.02665 → $0.02600 → $0.02450** per task and is monotone (zapier.com/pricing, fetched 2026-08-12). Revology names per-unit inversions **first** among broken-rung signals and cliff-shaped decay ("15%, 18%, 19%, then 33%") second, and reports that in price-pack audits "roughly one pack in ten is quietly loss-making once true costs land." Their documented repair on a beverage ladder — singles $1.99 / 6-pack $6.49 / 12-pack $11.99 / 24-pack $19.99, per-can $1.99 / $1.08 / $1.00 / $0.83, step discounts 46% / 7.4% / 17% — cuts the 6-pack's promotional depth **$0.50** and, at own-elasticity ≈ **−1.9** and cross-elasticity ≈ **+1.5**, puts the recapture at **$1.2–1.6M annualized gross profit** (Revology Analytics, fetched 2026-08-12).
- **evidence**: `strong` *(the core is a deductive dominance argument that needs no experiment, and the audit practice is established with scanner data behind it in CPG/RGM. **The transfer to SaaS is an inference — no public dataset of SaaS ladder arithmetic exists.**)*
- **sources**: https://revologyanalytics.com/articles/price-pack-architecture/ · https://zapier.com/pricing · https://onlinelibrary.wiley.com/doi/10.1111/joca.12174
- **how-to**: Build a two-column table of price and included units for every rung, add a per-unit column, and sort ascending by price. The per-unit column must be non-increasing. Then add a step-discount column, 1 − (rₙ₊₁/rₙ), and look for values more than roughly double their neighbours. Fix inversions first; they are the only failure a buyer can screenshot.
- **example-copy**: n/a (structural)
- **worked-example**: Ledgerly is monotone — $0.0900 (Solo) > $0.0475 (Books) — and its single step of 47.2% has no neighbour to be erratic against, so cadence is vacuous and should be reported as vacuous rather than as a pass. The instructive failing variant is repricing Books to $19 for 180 receipts: r rises to **$0.1056**, and **two Solo accounts deliver 200 receipts for $18** against Books' 180 for $19.

### P-048 — Price top-ups above the marginal rate of the next rung, not the average rate of this one

- **layer**: `tier-architecture`
- **mechanism**: If an overage or top-up unit costs less than the same unit inside the plan, the allowance is worthless and every buyer converges on the smallest plan plus permanent overage. But clearing the current plan's *average* rate is not enough: if the top-up undercuts the *marginal* rate of the step above, the ladder's own next rung is dominated by the top-up even while the top-up looks like a premium.
- **works-when**: the value metric is metered and top-ups or overage are sold at all.
- **fails-when**: the premium is set so high it reads as punitive and triggers churn instead of an upgrade — the fix there is auto-upgrade or a soft limit with a grace period, never a cheap overage. Also fails silently when a new rung is inserted later and nobody recomputes the marginal rate.
- **observed-effect**: **Zapier prices task overage at 2.5× the base rate on monthly plans and 1.25× on annual** — the monthly/annual spread simultaneously prices unpredictability and functions as a term fence. On the 750→1,500 step the marginal rate is **($39.00 − $19.99) / (1,500 − 750) = $0.0253/task**, and the actual annual overage at that rung (1.25 × $0.02665) is **$0.0333**, clearing it. **This is the only published overage multiplier found anywhere in the public record; there is no benchmark distribution.** (zapier.com/pricing, fetched 2026-08-12.)
- **evidence**: `medium` *(the floor inequality is a derivation from the incentive-compatibility constraint, not a cited rule; the one supporting multiplier is a single vendor's published rate)*
- **sources**: https://zapier.com/pricing · https://payproglobal.com/how-to/build-saas-tiered-pricing/
- **how-to**: Compute (Pₙ₊₁ − Pₙ) / (Qₙ₊₁ − Qₙ) for every step. Set the overage above the **larger** of that number and the current plan's average rate. Recompute both whenever a rung moves. Then notify at ~80% of the allowance so the buyer chooses the upgrade before the overage bill arrives — the overage exists to make upgrading attractive, not to be collected.
- **example-copy**: "You're at 80 of your 100 receipts this month. Books gives you 400 for $19 — or add 50 more for $5."
- **worked-example**: Ledgerly's floor is (19 − 9) / (400 − 100) = **$0.0333/receipt**, which the current $0.08 top-up clears easily — so Books is safe. What the current top-up does **not** clear is Solo's own $0.09 rate, which is the failure B3 catches and P-049 fixes.

### P-049 — Peg one flat top-up at ~1.1× the entry tier's per-unit price

- **layer**: `tier-architecture`
- **mechanism**: Because in-plan unit price declines as the buyer climbs, a **single flat** top-up rate pegged just above the *highest* in-plan rate — which is your cheapest, entry tier — is automatically two things at once: never cheaper than any tier's marginal unit, so no inversion is possible at any rung; and progressively more punitive as customers grow, so upgrade pressure scales without a per-tier overage table. Pegging to the *top* tier's rate instead, which feels generous, hands entry customers a live arbitrage against their own plan.
- **works-when**: you meter a unit that is broadly comparable across tiers, and you want one number on the page rather than a table.
- **fails-when**: the unit is genuinely different across tiers (higher-quality output, a better model), in which case a flat rate over-charges the top tier for a better unit and the peg needs restating per unit-class. Also fails if you later add a *cheaper* entry rung and forget to re-peg — the peg is defined against entry, so entry moving moves the top-up.
- **observed-effect**: The one product in this dataset publishing both halves of the arithmetic is ElevenLabs Reception AI against a flat **$0.40/credit** overage: Basic **$0.3667/min → +9%**, Plus **$0.2750 → +45%**, Premium **$0.1980 → +102%** (elevenlabs.io, fetched 2026-08-12; the credit-to-minute mapping is not stated on the page and is assumed 1:1). Entry $22/60 min, top $99/500 min, entry-to-top volume discount **46.0%**.
- **evidence**: `medium` *(exactly one published operator pair — normally `anecdote` — raised because the mechanism is arithmetic rather than behavioural: given a declining in-plan curve, a flat rate above the highest rate cannot invert anywhere, which is true by construction)*
- **sources**: https://elevenlabs.io/pricing (Reception AI ladder, fetched 2026-08-12)
- **how-to**: Compute your entry **paid** tier's per-unit rate. Multiply by 1.1. Publish that as one flat number and never vary it by tier. Set the minimum pack size at or above your entry plan's full monthly allowance if you want a second guard against the top-up becoming a permanent cheap tier. Re-peg whenever the entry tier changes.
- **example-copy**: "Need more? Add 50 receipts for $5, any time. They never expire."
- **worked-example**: Ledgerly's entry paid rate is $9/100 = **$0.0900**; 1.1× = **$0.099**, so the pack becomes **$5 for 50 ($0.100/receipt)** — a **+11% premium over Solo and +111% over Books**, which reproduces the ElevenLabs shape almost exactly. This is the direct fix for the current $4 pack, which at $0.080 sits *below* Solo's own rate and lets Free + 2 packs (105 receipts, $8.00) dominate Solo (100 receipts, $9.00).

### P-050 — Guard the top-up on a non-price axis, or refuse to sell one at all

- **layer**: `tier-architecture`
- **mechanism**: A top-up priced above the plan rate needs a *reason* the buyer accepts, or it reads as a fine. Giving purchased units a non-price advantage — permanence — lets the buyer trade money for a property the plan does not have, which justifies the premium without the word "penalty" and makes the two unit types not directly comparable. The opposite strategy removes the problem entirely: no top-up means no inversion risk and no policy surface.
- **works-when**: you have a metered product and either (a) the billing system can distinguish purchased from granted units, or (b) you are small enough that the simplest ladder wins.
- **fails-when**: a hard wall lands mid-campaign on a customer who cannot upgrade that day — the cost of the no-top-up strategy is real and lands on your best-timed users. And a permanence sweetener fails if unused purchased balances grow into a hoard that suppresses future months' revenue; cap it.
- **observed-effect**: `no quantified effect published`. Four live strategies observed (all fetched 2026-08-12): **Bannerbear** refuses outright — "It is not possible to go over your monthly image / video API credits limit"; **Runway** makes purchased credits permanent ("Any additional credits you purchase never expire") while plan credits reset, and enforces a **1,000-credit minimum purchase against a 625-credit Standard allowance**, so a small customer cannot make a small top-up; **Descript** and **Runway** both surface the *existence* of top-ups on the pricing page and withhold the *rate* until you are logged in and out of credits (**neither rate could be captured — these are real gaps, not estimates**); **ElevenLabs core** substitutes rollover for top-ups — "Unused credits roll over for up to two months," capped at **3× your monthly quota**, with "Downgrading or cancelling forfeits unused credits," which turns the balance into a retention asset.
- **evidence**: `anecdote` *(four single-operator observations, no counterfactual for any of them)*
- **sources**: https://www.bannerbear.com/pricing/ · https://runwayml.com/pricing · https://www.descript.com/pricing · https://elevenlabs.io/pricing
- **how-to**: Pick one. If you sell top-ups, give purchased units permanence and cap the rollover balance at ~3× a monthly quota. If you are one person under $30/mo, seriously consider selling none — the safest top-up price is no top-up, and the policy surface you avoid (rollover, expiry, refunds, forfeiture disputes) is a real cost at that size. Keeping the rate off the public page is a legitimate middle path that keeps the ladder comparison-shoppable.
- **example-copy**: "Receipts you buy never expire. Receipts included with your plan reset each month."
- **worked-example**: Ledgerly should keep the top-up (its buyers are lumpy by month — quarterly filings) and add permanence rather than a bigger pack: at **$5 for 50, never expiring**, the +11% premium over Solo reads as paying for a receipt that waits for you. The Runway-style size guard (pack ≥ entry allowance, i.e. a 100-pack) is *not* needed once the rate is pegged above entry, and a 100-receipt minimum would price the smallest buyers out of the release valve entirely.

### P-051 — Keep the volume discount in the 20–40% band when the unit is identical at every tier

- **layer**: `tier-architecture`
- **mechanism**: How steep your entry-to-top per-unit curve can be is set by whether the unit is genuinely the same thing at every rung. When it is, a steep curve makes the entry price look extractive relative to the top and creates cross-tier substitution pressure. When the unit is *fenced* — better output, exclusive features, rollover privileges — cross-tier substitution is unattractive and a much steeper curve holds.
- **works-when**: you sell one uniform metered unit across all tiers and want to know how much discount the top rung may carry.
- **fails-when**: the tiers genuinely differ in unit quality, where the band is far too tight — and **the band is an observed regularity across a small sample, not a law**. Note also that L15's stated mechanism for the band ("the big customer just buys many small accounts") does not follow arithmetically from a steep curve, which makes the *rate* worse for small packs, not better; the coherent arbitrage runs the other way — several small buyers pooling into one large account. **Use the band as an observed regularity and a fairness smell test; do not repeat the stated mechanism.**
- **observed-effect**: Entry-to-top per-unit discounts across seven live ladders, all derived from published monthly prices, fetched 2026-08-12: **shallow, commodity units** — ElevenLabs core **17.5%** across a 200× volume range, Descript AI credits **27.8%**, Descript media hours **32.3%** (non-monotonic — Creator at $1.167/hour is cheaper than Business); **steep, fenced units** — Runway **58.3%**, Bannerbear **69.5%**, PhotoAI **94.8%** across a 200× range, possible only because tiers also differ in output quality. Reception AI sits between at **46.0%**. The stated practical band for a small product selling a uniform unit is **20–40% from entry to top**.
- **evidence**: `medium` *(a seven-product derived dataset from one research lane, with a clean structural split; the causal story offered by the source is unreliable)*
- **sources**: https://elevenlabs.io/pricing · https://www.descript.com/pricing · https://runwayml.com/pricing · https://www.bannerbear.com/pricing/ · https://photoai.com/ (all fetched 2026-08-12)
- **how-to**: Decide first whether your unit is identical across tiers — it determines everything else. If it is, hold entry-to-top between roughly 20% and 40% and expect to compete on unit price. If you want a steeper curve, **build the fence first**: a quality difference, a feature difference, or a rollover privilege that makes the cheap tier's unit genuinely worth less. Building that fence is worth more than any pricing tweak, because it unlocks the steep curve, defeats per-unit comparison shopping, and does it while your marginal cost at the top genuinely is higher.
- **example-copy**: n/a (structural)
- **worked-example**: A Ledgerly receipt is the same receipt at every tier, so Ledgerly is in the commodity cluster — and its entry-to-top discount is **1 − ($0.0475/$0.0900) = 47.2%**, above the 20–40% band. Two coherent responses: narrow the curve by moving Books to $23/400 (**$0.0575**, a 36.1% discount, in band), or build the fence that earns the steeper curve — for instance, making multi-client tagging and the accountant seat genuinely change what a Books receipt *is*. The second is the better business and the first is the faster fix.

### P-052 — Let the curve break at its ends: entry as a paid trial, top rung off the curve

- **layer**: `tier-architecture`
- **mechanism**: The volume curve is a statement about the middle of the ladder, not about its ends. The bottom rung's job is to make rung 2 look correct, so it is priced as a paid trial rather than as value. The top rung's job is to serve buyers whose constraint is not unit price at all — bandwidth, seats, support, terms — so it is where you are allowed to stop discounting, and almost everyone does.
- **works-when**: you have three or more priced rungs and a genuine difference in what the top and bottom buyers are optimising for.
- **fails-when**: you take the exemption silently on a page where the per-unit rate is computable — a buyer with a spreadsheet finds the inversion and reads it as a mistake or a trick. State the reason on the page. It also fails when the entry rung is your *only* paid rung, in which case there is no rung 2 for it to flatter and it must be priced as value.
- **observed-effect**: Across the same seven-product dataset (fetched 2026-08-12), the curve **flattens or inverts at the top rung in almost every product**: ElevenLabs Scale **$0.1661** is worse than Pro **$0.1650**; Bannerbear Enterprise **$0.01495** is worse than Scale **$0.0149**; Descript Business is **39% worse per media hour** than Creator. And the entry rung is frequently not a volume tier at all: PhotoAI Starter is **7.8× the per-unit price of the very next rung**, and Reception AI Basic is **33% worse per minute** than Plus.
- **evidence**: `medium` *(a regularity observed across seven independent operators in one lane; no measured effect on conversion or revenue)*
- **sources**: https://elevenlabs.io/pricing · https://www.bannerbear.com/pricing/ · https://www.descript.com/pricing · https://photoai.com/
- **how-to**: Price the entry rung to make rung 2 the obvious buy, not to be good value — and check that the *free* rung, if you have one, is not then a better deal than the entry rung (this is exactly the trap Ledgerly fell into). At the top, stop discounting and switch the sales argument to something other than unit price: support, terms, bandwidth, seats. Say on the page what the top rung is sold on, so the flat per-unit rate reads as deliberate.
- **example-copy**: "Books isn't cheaper per receipt than Studio — Studio is for agencies who need the seats and the support."
- **worked-example**: Ledgerly has only two paid rungs, so the "entry as paid trial" move is unavailable: Solo *is* the value tier, and pricing it as a flattering-but-poor deal would leave nothing for a buyer to graduate to. The pattern becomes live if a Studio rung is ever added — at which point Solo may be repriced upward as the paid trial and Studio's per-unit rate is allowed to flatten.

### P-053 — Space rungs by measured value gap; use 1.5–2× only as a smell test

- **layer**: `tier-architecture`
- **mechanism**: The price gap between rungs should be proportional to the value gap the buyer *perceives*, so each step feels earned. The widely repeated 1.5–2× multiplier is a proxy for that relationship, useful for flagging rungs and useless for settling them — because a ladder can sit perfectly inside the band and still cannibalise.
- **works-when**: you have willingness-to-pay data (conjoint, Van Westendorp, Gabor-Granger) to compute the value gap, or a clear qualitative read on it from interviews. Use the multiplier only as the flag that sends you to get that data.
- **fails-when**: **you treat the multiplier as the rule.** The Athenic sideways rung sat at **1.51× and 1.68×** from its neighbours — inside the band — and still took **56%** of the tier above it `[aggregator-sourced via Artisan Growth; direction informative, magnitude unconfirmed]`. It also fails where a jump exceeds 2× legitimately because the *buyer changes* across it, which is the only thing that makes Figma's $16→$55 cliff defensible.
- **observed-effect**: PriceBeam's **Step Integrity Index** — price gap ÷ WTP-derived value gap — targets **0.8–1.2**; below 0.8 "a rung is compressing," above 1.2 "the jump looks unjustified," and adjacent-SKU overlap above **66%** means "you are paying for duplication" (fetched 2026-08-12). Real ladders against the multiplier: Slack **$8.75→$18.00 (2.06×)**, Notion **$10→$20 (2.0×)**, Airtable **$24→$54 (2.25×)**, Figma Full seat **$16→$55→$90 (3.44×, 1.64×)**. **The 1.5–2× band itself traces to trade blogs with no underlying dataset**, echoed as "50–100% gaps" by a vendor blog.
- **evidence**: `anecdote` *(the headline number is unsourced trade folklore; the Step Integrity Index it defers to is a single consultancy's framework with no published derivation of its band. The value-gap **principle** is sound; the multiplier is a smell test.)*
- **sources**: https://blog.pricebeam.com/ppa-how-to-build-ladders-consumers-trust-and-retailers-approve · https://maccelerator.la/en/blog/entrepreneurship/tiered-pricing-checklist-saas-founders/ · https://flexprice.io/blog/how-to-design-tiered-pricing-models-for-saas · https://www.artisangrowthstrategies.com/blog/saas-pricing-experiment-results-real-tests-what-they-changed
- **how-to**: Compute the multiplier for every adjacent pair and flag anything under 1.5× or over 2×. For flagged pairs, **do not adjust the price — go and get the value gap.** Where a jump exceeds 2× and survives, check that the buyer changes across it. Where a gap is under 1.5×, ask whether the two rungs are really one.
- **example-copy**: n/a (structural)
- **worked-example**: Ledgerly's $9→$19 is **2.11×**, marginally outside the band — a flag, not a fault. The useful arithmetic it produces is negative: two in-band steps require a total gap of at least **2.25×**, so no fourth rung can be inserted between Solo and Books without putting a step outside the band. The gap is settled by A4 once WTP data exists; until then the deliverable carries `[step integrity — no WTP data]`.

### P-054 — Keep the annual ladder coherent with the monthly one

- **layer**: `tier-architecture`
- **mechanism**: A term fence is a second, parallel ladder. Discount depth applied to one rung and not another silently reorders the whole menu, and the reordering is invisible because nobody re-tabulates the annual column. The bound is exact: an annual discount on rung *n+1* deeper than **1 − (Pₙ / Pₙ₊₁)** makes the higher tier's monthly-equivalent price cheaper than the lower tier's monthly price, at which point the lower rung is strictly dominated and stops selling.
- **works-when**: you offer annual billing at a genuine discount and can recompute the full per-unit table in the annual column.
- **fails-when**: a promotion is run on one rung only, or a "limited time" annual offer is stacked on top of the standing discount. It also fails quietly at the top-up: the top-up peg is defined against the entry rate, and the *annual* entry rate is lower, so a top-up that clears the monthly peg may not clear the annual one.
- **observed-effect**: Annual discounts cluster tightly at **16.7–25%** and are almost always expressed as *time* rather than percent — "two months free" (ElevenLabs, Fathom), "Save up to 35%" (Descript), 25% (TinyWow), 20% (Runway), 33% (Photoroom), with PhotoAI an outlier at ~**57%** ("6+ months free"), which reads as a cash-flow play rather than a discount norm. **"Two months free" is the market default and it is 16.7%.** Elsewhere: Zapier annual = **33% off monthly**, Notion **20%**, with a standard band of 15–20% quoted by a vendor guide. (All fetched 2026-08-12.) The failure mode is named — "the annual price of tier *n+1* undercuts the monthly price of tier *n* and breaks the ladder" — but **no source states the bound**; the closed form here is this library's derivation.
- **evidence**: `anecdote` *(the inequality is derived, not cited; the discount cluster is a prevalence observation across ~8 products)*
- **sources**: https://zapier.com/pricing · https://www.notion.com/pricing · https://elevenlabs.io/pricing · https://www.descript.com/pricing · https://runwayml.com/pricing
- **how-to**: Rebuild the whole per-unit table in the annual column, including add-ons and top-ups, every time any annual price moves. Check Aₙ₊₁/12 > Pₙ for every pair. Cap any single-rung promotion at 1 − (Pₙ/Pₙ₊₁). Express the discount as free months rather than a percentage — it is the market default and it reads as a gift rather than a markdown.
- **example-copy**: "Pay yearly — two months free."
- **worked-example**: Ledgerly at the 16.7% default: Solo **$90/yr ($7.50/mo)**, Books **$190/yr ($15.83/mo)**. Books annual sits above Solo monthly ✓; the annual per-unit column is monotone ($0.0750 > $0.0396) ✓; the $0.10 top-up clears 1.1 × $0.0750 = $0.0825 ✓ and the annual marginal rate $0.0278 ✓. **Pass.** The bound says any annual discount on Books deeper than **1 − (9/19) = 52.6%** dominates Solo monthly — so a "save 60%" promotion ($91/yr, $7.58/mo) would deliver 4× the receipts for $1.42 less per month than Solo and kill the entry rung outright.

### P-055 — Build the top rung to be bought, not merely to be seen

- **layer**: `tier-architecture`
- **mechanism**: A top tier that nobody buys anchors the middle by misrepresenting the choice set — it works, when it works at all, by dominating an option the buyer is not told is dominated. A top tier that some buyers genuinely want anchors the middle as a *side effect*, with nothing misrepresented. The operational difference is testable in three questions and does not require you to believe anything about behavioural economics.
- **works-when**: there is a real high-end segment, even a small one — agency use, high volume, security posture — and you would happily deliver the rung if someone bought it.
- **fails-when**: the top rung is a repriced middle with nothing added; buyers detect it and the whole page's credibility drops with it. **And it fails as a *tactic*: do not add a rung expecting a decoy effect.**
- **observed-effect**: The canonical decoy demonstration — *Economist* subscriptions at online-only $59 / print-only $125 / print+web $125, splitting **16% / 0% / 84%**, and flipping to **68% / 32%** when print-only was removed — was **n=100 MIT students making a hypothetical choice**, not a market test. As a design tool the effect does not survive replication: **91 attempts across 23 product classes and 73 decoyed choice sets produced only 11 reliable effects** (Yang & Lynn, *JMR* 2014), and Frederick, Lee & Baskin (*JMR* 2014) find it "restricted to stylized product representations in which every product dimension is represented by a number," absent when any attribute is perceptual, and document a **repulsion** effect where share moves the wrong way. Huber, Payne & Puto published a 2014 rebuttal, so the field is not unanimous, but the burden of proof has shifted onto the effect. What *anchoring* can do without a decoy: a genuinely purchasable **$429** bread machine roughly **doubled** sales of an existing $279 model (Williams-Sonoma), and premium tequila lifted the lower lines (Patrón) — **both anchors were real products people bought.**
- **evidence**: `anecdote` *(**the `strong` rating this pattern carries in the source lane is deliberately not carried here.** The decoy literature is demoted on replication grounds and the honest-anchor cases are single-company anecdotes.)*
- **sources**: https://en.wikipedia.org/wiki/Decoy_effect · https://journals.sagepub.com/doi/10.1509/jmr.14.0020 · https://journals.sagepub.com/doi/abs/10.1509/jmr.12.0061 · https://en.wikipedia.org/wiki/Good%E2%80%93better%E2%80%93best · https://journals.sagepub.com/doi/10.1177/002224379202900301
- **how-to**: Apply three tests to your top rung. (1) Is it **dominated** — strictly worse than another option on every attribute at the same or higher price? If yes, remove it. (2) Does **anyone buy it** over a full quarter? Zero share means it is not a tier. (3) If bought, is it **delivered** at the promised standard? Build tiers because each serves a real segment. If you already have a decoy tier, do not tear it out on theory either — just stop attributing your conversion rate to it and stop spending design cycles tuning it.
- **example-copy**: n/a (structural)
- **worked-example**: Ledgerly's Books is bought by 6 of 40 customers and is not dominated — it is a tier. A proposed "Books Plus $29 — 400 receipts and priority support" would not be strictly dominated either, but would carry the same allowance for $10 more on a support adjective, and would almost certainly sell zero. **Rejected**, and the rejection is stated in the deliverable so it does not read as an oversight.

### P-056 — Keep an unpriced top rung only if you have an organisational buyer

- **layer**: `tier-architecture`
- **mechanism**: An unpriced "Contact us" rung does three jobs: it anchors the visible ladder upward without committing you to a number, it preserves the ability to price large deals on their actual value rather than on your list, and it signals institutional seriousness to mid-market buyers. It costs one card and one inbox — but only if there is a buyer at the other end.
- **works-when**: **B2B or organisational selling.** You sell to organisations at all, or plausibly might, and you can name the capabilities large buyers actually ask for (SSO, audit logs, RBAC, SLA, SCIM, DPA/BAA).
- **fails-when**: **you are a small consumer product — do not ship this.** With no enterprise motion, an empty "Contact us" column signals a company that is not there, and the teardown advice for prosumer and consumer products is explicit: skip the enterprise tier entirely. It also fails when it becomes a way to avoid deciding your prices — if every deal routes through "contact us," you have a quote desk, not a ladder — and when the rung promises capabilities you cannot deliver.
- **observed-effect**: SaaS Research Lab's March 2026 scan of **110 products across 12 categories** found **31.0%** carrying a "contact sales" enterprise option (alongside 54.1% freemium, 38.2% free trial, 22.4% demo-only; median starter price **$29**, IQR **$19–$49**). Stripe Atlas advises condensing an 8-tier product to "three plus 'call us for enterprise pricing'" and, in another teardown, moving enterprise from a considered **$500/month toward $10K–$25K annually** once usage justified it — a move only possible because the price had never been published. **The anchoring effect of an unpriced top rung on the priced rungs below it has never been measured.**
- **evidence**: `medium` *(prevalence is well-sourced at n=110; the anchoring effect has no evidence at all)*
- **sources**: https://saasresearchlab.com/report/pricing-study · https://stripe.com/guides/atlas/saas-pricing · https://vercel.com/pricing · https://www.figma.com/pricing/
- **how-to**: If you ship it, give the rung a real capability list drawn from what large buyers actually ask for, be honest in the sales call about what is built, and make the CTA a form rather than an email link so you capture segment data that later tells you what the priced version should contain. If you do not have an organisational buyer, do not ship it and say in the deliverable that you rejected it.
- **example-copy**: n/a (structural)
- **worked-example**: Ledgerly sells to individual freelancers at $9–$19. There is no organisation to sell into, no SSO conversation, and no procurement. **The unpriced rung is explicitly rejected**, and the rejection is written into the deliverable: an empty fourth column on a three-rung consumer ladder advertises an enterprise motion that does not exist and costs comprehension on every visit.

### P-057 — Decide free-tier-as-lead-magnet or free-tier-as-product, write it down, and stop drifting

- **layer**: `tier-architecture`
- **mechanism**: The two purposes demand opposite feature-allocation decisions. A **lead magnet** is designed to bind — deliver the aha, then hit a wall; its KPI is free→paid conversion. A **free product** is designed to satisfy indefinitely and pay you in distribution and defensibility; its KPI is reach and the option value of the installed base. Without an explicit choice, a sequence of individually-winning A/B tests migrates the free tier from product to magnet one feature at a time, and the distribution asset is spent without anyone deciding to spend it.
- **works-when**: you can state in one sentence which asset the free tier is buying you — pipeline, or reach — and there is a named owner who can veto an experiment on it.
- **fails-when**: the free tier is unowned and each quarter's growth experiment gets to trim it. The architecture taxonomy matters here: a **taster** (same full product, usage-limited — Loom's 5-minute cap, Zoom's 40-minute cap) is a lead magnet by construction; a **split** (genuinely different feature sets for different segments) is a product; a **hybrid** (taster limits plus exclusive premium features — Slack's 90-day history plus Slack Connect) is usually a product with a monetisation path.
- **observed-effect**: The failure is named directly: "slowly shift[ing] more and more of your offering to premium, one experiment at a time," where each A/B test wins locally but "the cumulative effect of chipping away at the free tier" erodes the thing that made free valuable. The prescribed remedy is a written **Bill of Rights** — an internal constitution naming the features that "must always be free, no matter what," plus what is off-limits for A/B testing; Life360's list is "the core map, location history, and place alerts" (RevenueCat, backed by its State of Subscription Apps dataset, fetched 2026-08-12). Health diagnostics from a named operator: free→paid **2–5% healthy, below 2% alarm**; free:paid user ratio **~50:1 healthy, above 100:1 means the free tier is too generous** (Atticus Li, fetched 2026-08-12).
- **evidence**: `medium`
- **sources**: https://www.revenuecat.com/blog/growth/freemium-tier-design · https://atticusli.com/blog/posts/freemium-trap-free-tier-cannibalizes-paid-growth/
- **how-to**: Write one sentence naming the free tier's job and a short list of capabilities permanently off the table for gating, and put both under a named owner. Add a rule that any experiment touching the free tier is evaluated on the free tier's own KPI as well as on conversion. Review the list annually, deliberately, rather than letting it erode weekly.
- **example-copy**: n/a (internal document)
- **worked-example**: Ledgerly's free tier at 5 receipts/month is a **taster** and therefore a lead magnet — five receipts is not a bookkeeping solution for anyone. The Bill of Rights is short and worth writing anyway: *photo capture, categorisation, and CSV export of whatever you have processed are always free.* Export in particular must never be gated, because a free tier that holds your data hostage converts anger rather than customers — and because export is on the path to the aha moment (P-042).

### P-058 — Gate free on a limit the buyer hits by succeeding, not on a feature they need to start

- **layer**: `tier-architecture`
- **mechanism**: A usage or time limit lets the free user experience the whole product and reach the wall through their own success, so the upgrade prompt arrives with evidence attached. A feature gate placed before activation blocks the buyer from ever learning what the product is worth, converting a would-be customer into a bounce.
- **works-when**: you have a metered value metric or a time-decaying artefact (history, versions, logs). Free must include everything on the path to the aha moment, with the paid gate placed *after* it. The governing rule: free users should reach "meaningful progress toward their goal — but not reach the full solution"; the sharper operator version is "enough value to drive adoption, not satisfaction."
- **fails-when**: the limit is set so high that free users never reach it — the limit stops being a fence and becomes a gift. It also fails in the other direction: **the limit is dangerous to loosen and much harder to tighten back**, so treat every loosening as a price cut (P-062) rather than as a growth experiment.
- **observed-effect**: The taster architecture in the wild: Loom's 5-minute recording cap, Zoom's 40-minute cap, Slack's 90-day history and 10-app cap, Zapier's 100 tasks and two-step workflows (all fetched 2026-08-12). The direct experimental evidence: **Athenic raised the free task limit from 100 to 500 and free→paid conversions fell 60%** (Artisan Growth, fetched 2026-08-12 — **aggregator; the underlying operator write-up could not be reached**). That is the cleanest single demonstration that in a taster architecture the *limit*, not the feature set, is the conversion lever. The allocation heuristic sorted by adoption rate — ≥80% → base tier; 50–79% → mid tier or higher; 30–49% → add-on; 10–29% → Enterprise; <10% → custom or discontinue — comes from a vendor blog with uncited figures and is a sorting device, not a benchmark.
- **evidence**: `medium` *(one second-hand experiment plus consistent market structure across five products)*
- **sources**: https://www.revenuecat.com/blog/growth/freemium-tier-design · https://zapier.com/pricing · https://slack.com/pricing · https://www.artisangrowthstrategies.com/blog/saas-pricing-experiment-results-real-tests-what-they-changed
- **how-to**: Identify the aha moment and place every capability needed to reach it inside free. Then set the limit at the point where a user is demonstrably succeeding — one real project, one real week, one real month of filing. Instrument the share of free users who reach the limit; if it is very small, the limit is too loose. Loosen limits only with a controlled test, because the elasticity appears steep and re-tightening is far more costly than the original loosening was cheap.
- **example-copy**: "You've used your 5 free receipts this month. Solo gives you 100 for $9."
- **worked-example**: Ledgerly's free tier is a **usage** fence (5 receipts) rather than a feature fence, which is correct — a freelancer who photographs five receipts has experienced the entire product and knows exactly what it is worth. The instrumentation to add: the share of free accounts that hit 5 in a month. If that share is small, 5 is too generous relative to the population, not too mean.

### P-059 — Read the realized mix before you redesign the page

- **layer**: `tier-architecture`
- **mechanism**: The distribution of customers across rungs is the ladder's report card and it diagnoses failures the page itself cannot show. A bottom-heavy mix means the entry rung includes too much or the next fence does not bind; a zero-share top rung means the anchor is a decoy; a middle rung that collapsed after a launch means a new rung went sideways.
- **works-when**: you have enough volume for the mix to be stable quarter over quarter, and you can segment by acquisition cohort.
- **fails-when**: you read the mix without segmenting — a skew from one large cohort or a promotion tells you nothing about the ladder. **And it fails at small n**, where a single customer moves the percentage by points; at 40 customers the mix is a prompt to look, never a verdict.
- **observed-effect**: The diagnostic: "if 80% of customers occupy the lowest tier, upgrade triggers aren't working effectively" (Stripe, fetched 2026-08-12). Trade guidance targets **50–60% in the middle rung** (M Accelerator, aggregator with no dataset — directional only). The failure the mix catches and nothing else does: Athenic's new $77 rung dropped Professional signups **56%** and ARPU **6%** `[aggregator-sourced via Artisan Growth; direction informative, magnitude unconfirmed]`.
- **evidence**: `medium`
- **sources**: https://stripe.com/resources/more/saas-pricing-and-packaging-strategy · https://www.pedalix.com/en/blog/cannibalization · https://www.artisangrowthstrategies.com/blog/saas-pricing-experiment-results-real-tests-what-they-changed
- **how-to**: Track share of new customers *and* share of revenue by rung, monthly, by acquisition cohort. After any packaging change, watch specifically for a down-selling spike. Pair the mix with win-loss: if prospects with budget chose the cheaper plan anyway, the value gap between those two rungs is too small — which sends you to A4, not to the page.
- **example-copy**: n/a (structural)
- **worked-example**: Ledgerly runs **34 Solo / 6 Books = 85% on the lowest paid rung**, crossing the 80% diagnostic threshold. The two candidate causes are testable without traffic: either Solo's 100-receipt allowance covers almost the whole population (check the receipts-per-month histogram) or the Solo→Books fence is not binding (check how many Solo accounts have ever asked about an accountant seat). At n=40 the mix cannot settle it; the histogram can.

### P-060 — Sell as an add-on only what a minority genuinely wants

- **layer**: `tier-architecture`
- **mechanism**: Add-ons exist to monetise variance. A capability nearly everyone wants belongs in the base — charging separately for it adds a decision and a support ticket for revenue you would have collected anyway. A capability almost nobody wants is not worth the SKU. The productive band is genuinely variable demand, where an add-on lets the minority pay without taxing the majority.
- **works-when**: you can measure per-feature demand or adoption and your billing system supports entitlements cleanly. **Two independent bands exist and this library keeps both, because they answer slightly different questions.** The demand-share rule from the *Monetizing Innovation* canon: if roughly **10–20%** of customers want a thing, make it an **add-on**; if **50%+** want it, it belongs in a **leader** package. The vendor-blog adoption rule puts the add-on sweet spot at "**30 to 60 percent of customers want the feature**." They agree that **30–50%** is add-on territory and disagree at the edges; the canon's band is pre-launch survey demand, the vendor's is post-launch adoption, and adoption is always lower than stated demand.
- **fails-when**: the "add-on" is something users consider table stakes, where charging reads as nickel-and-diming; or demand share is measured on an unrepresentative sample; or the catalogue sprawls — beyond a handful of add-ons, buyers stall **and** the assembly test (P-045) becomes combinatorially hard to run by hand.
- **observed-effect**: `no quantified effect published` for either band. The canon's companion test for what to *cut*: a feature is likely a **killer** if it is valued by **fewer than 20%** of customers *and* actively unwanted by **more than 20%** — the 20/20 rule, on which three independent notes agree in wording. Catalogue caps: "~3 tiers + 3–5 high-impact add-ons; retire low-velocity SKUs" (Umbrex); minimum 3 add-ons to justify operational setup, optimal 4–6, choice paralysis above 8, priced at 20–50% of the base tier (Dodo Payments, vendor blog, uncited).
- **evidence**: `medium` *(two independent bands from different traditions, neither with a dataset; the mechanism — monetise variance, absorb consensus — is straightforward)*
- **sources**: https://dodopayments.com/blogs/saas-add-ons-pricing-strategy · https://umbrex.com/resources/frameworks/pricing-frameworks/bundling-unbundling-frameworks/ · https://www.marketingjournal.org/monetizinginnovation/
- **how-to**: Run the most/least exercise or instrument feature adoption per account, then sort features by demand share. Move anything above ~50–80% into the base and delete its SKU. Keep 3–6 add-ons in the 30–50% overlap band. Cut anything failing the 20/20 test. **Re-run the assembly test every single time you add one.**
- **example-copy**: n/a (structural)
- **worked-example**: For Ledgerly, multi-client tagging is plausibly wanted by the ~30–40% of freelancers who serve multiple clients — squarely add-on territory under both bands. The accountant seat is wanted by a smaller share but is also the **only** fence holding Books up (P-046), so it must **not** be sold as an add-on regardless of its demand share. That is the case where the assembly test overrides the demand-share rule, and it is the more important of the two.

### P-061 — Bundle where marginal cost is near zero; unbundle where willingness-to-pay varies

- **layer**: `tier-architecture`
- **mechanism**: With near-zero marginal cost and independent valuations, bundling many goods concentrates the distribution of bundle valuations near its mean, making demand more elastic near the mean and letting the seller capture more surplus with a single price. Where marginal cost is material, or where segments differ sharply in what they want, the logic reverses and separate pricing with enforceable fences captures more.
- **works-when**: information goods with negligible reproduction cost and valuations reasonably independent across components.
- **fails-when**: marginal costs are substantial — **Bakos & Brynjolfsson establish that for the uniform-distribution case, bundling underperforms once marginal cost exceeds m/4** — or valuations correlate with an underlying customer type, in which case bundling cannot remove the deadweight loss without segmentation. Also fails operationally when unbundling outruns the assembly test: every module you unbundle creates new synthetic packages.
- **observed-effect**: Bakos & Brynjolfsson (*Management Science* 45(12), 1999) prove that as bundle size grows with zero marginal cost, deadweight loss and consumer surplus per good both converge to zero. This is a theorem, not a benchmark — its `strong` rating rests on a formal proof rather than on a dataset, and the boundary conditions (independence, zero marginal cost) are exactly where real products depart from it. In practice **mixed bundling** — tiers plus optional modules — usually beats pure bundling by serving both the simplicity-seeker and the high-WTP assembler. "Ignoring cost-to-serve" is named as a bundling failure mode: "bundling expensive features for low-paying segments erodes margin" (Umbrex, fetched 2026-08-12).
- **evidence**: `strong` *(a formal result with stated conditions, plus convergent consulting practice on the mixed-bundling conclusion)*
- **sources**: https://pages.stern.nyu.edu/~bakos/big/big.html · https://umbrex.com/resources/frameworks/pricing-frameworks/bundling-unbundling-frameworks/
- **how-to**: Map fully-loaded marginal cost per feature. Bundle the near-zero-cost features into tiers and hold the high-cost ones as premium-tier or paid modules so cost-to-serve does not leak into a low-priced rung (C1). Prefer mixed bundling: a clean tier ladder for the majority, a small module catalogue for the variance. Then re-run the assembly test.
- **example-copy**: n/a (structural)
- **worked-example**: Ledgerly's marginal cost is **not** near zero — every receipt costs an OCR call, which is exactly the m > 0 case where the bundling theorem stops applying. That is why Ledgerly's ladder is correctly built on a usage fence rather than on a feature bundle, and why its free tier must stay small (C1). The near-zero-cost capabilities — tagging, export formats, history retention — are the ones safe to bundle into tiers; the receipts themselves are the ones that must be metered.

### P-062 — Compute break-even churn before you touch a price, then choose the grandfather window

- **layer**: `tier-architecture`
- **mechanism**: A price increase is a trade of customers for margin, and the exchange rate is computable in advance: **break-even churn = 1 − (P_old / P_new)**. Knowing it turns a nervous decision into a monitored one and tells you whether the move is comfortable or needs splitting. Grandfathering is then the instrument that buys the goodwill back — but only for a stated window, because a permanent legacy price compounds into a widening cohort gap and makes your oldest and often heaviest users indefensible.
- **works-when**: you can identify the affected cohort and its current MRR, and your billing system can express a sunset date. Pick **one** eligibility criterion and state it in a sentence — sign-up date before a cutoff is the cleanest, because it is unambiguous and gives you a per-cohort changelog to justify the new price.
- **fails-when**: you model revenue but not the second-order costs — support load and CS time spike in the same week. It also fails when you granted "forever" in a public promise or in contract language: **check the ToS before designing the policy, because it may already have decided it for you.** And it fails at small n, where realized churn cannot be measured against the threshold with any confidence.
- **observed-effect**: Worked example: **500 customers at $20/mo = $10,000 MRR; at $30/mo = $15,000; break-even churn 33.3%, i.e. 166 customers**, with practitioners modelling **5% / 10% / 15%** churn scenarios against that line (Glencoyne, fetched 2026-08-12). Operational guardrails, **both of which are single undated vendor blogs rather than measurements and should be read as conventions**: run the change on **5% of legacy users first** to catch billing bugs and expect a **15–20% support-ticket increase in the first week** (PayPro Global — no sample, no method); **grandfather when the increase is >20%, migrate immediately when it is <10%**, on a 90-day timeline (−90 CS alerted, −60 formal notice, −30 migration options, 0 migration at renewal, +30 check-in) (SaaSDash — no dataset behind either cut-point). Notice-period guidance clusters at **30 days minimum, 60 for B2B on significant changes, 90 before renewal for annual subscribers**; an aggregator reports churn above baseline of 1.8pp at 90+ days rising to **7–9pp under 14 days** — directionally consistent across sources but **numerically unverified**. Windows range 6–12 months (two sources) to 12–24 months (an aggregator); indefinite grandfathering is uniformly discouraged as "unsustainable long-term revenue drag."
- **evidence**: `medium` *(the formula is definitional and the policy options converge across four independent sources; every churn figure attached to notice periods is aggregator-sourced and unverified)*
- **sources**: https://www.glencoyne.com/guides/grandfathering-pricing-policy · https://payproglobal.com/how-to/manage-grandfathering-pricing/ · https://saasdash.ai/blog/saas-grandfathering-pricing-strategy · https://knowledgelib.io/finance/saas-benchmarks/saas-price-increase-playbook/2026
- **how-to**: Compute break-even churn and compare it to your realistic worst case; if the worst case is within a few points, the increase is too large for one step — take it as 15% now and 15% in twelve months. Run a 5% canary batch through billing first. Publish the grandfather end date at announcement so the sunset is never a second surprise. Lead the message with what shipped since that cohort signed up, never with your costs. **And treat a loosened free-tier limit as a price cut and run the same arithmetic on it.**
- **example-copy**: "Your price stays at $9 until 1 March. Here's everything we shipped since you joined."
- **worked-example**: Ledgerly raising Solo $9→$12 has a break-even churn of **1 − (9/12) = 25.0%** — across 34 Solo customers, 8.5 customers. The increase is **33.3%**, above the >20% vendor-blog threshold, so grandfather with a 6-month window keyed to sign-up date — a convention followed for consistency rather than a measured breakpoint. The honest caveat, which belongs in the deliverable: at n=34 **one cancellation is 2.9 percentage points**, so the monitoring plan cannot distinguish a 10% outcome from a 25% one. The decision is made on judgement; the arithmetic only tells you how much room you have.

### P-063 — Build a downgrade rung so cancelling is not the only exit

- **layer**: `tier-architecture`
- **mechanism**: A ladder with no way down converts every budget squeeze and every usage dip into a cancellation. A cheaper rung, a pause, or a reduced allowance lets the relationship survive a bad quarter, and retains the data, the integrations and the habit — all of which make the eventual upgrade cheap.
- **works-when**: your lower rungs are genuinely usable rather than crippled, and billing can execute a mid-cycle change.
- **fails-when**: the downgrade path is so easy and so close in value that it becomes the default — which is the reverse-assembly failure (P-046), and means the ladder was broken before the cancellation flow existed. **Fix the ladder first, or the save flow becomes the mechanism that teaches customers the cheaper package.**
- **observed-effect**: `no quantified effect published` that survives source-chasing. The framing is "a pause is better than a cancel, and a downgrade is not churn" (SaaStr). Trade guidance holds that matching the intervention to the stated cancellation reason — discount or downgrade for price, pause for low usage — moves save rates from under 15% for generic offers to 20–40% for matched ones, and that 70–80% of paused subscribers reactivate within 30 days. **These figures come from a search-result-page summary of vendor guides rather than a fetched primary study — treat as trade consensus, not measurement.**
- **evidence**: `anecdote`
- **sources**: https://www.saastr.com/as-a-saas-company-do-you-allow-customers-to-pause-their-account/ · https://churnkey.co/guides/reduce-subscription-churn · https://recurly.com/blog/cancellation-flow-examples-to-improve-subscriber-retention/
- **how-to**: Ask for the cancellation reason first and branch on it: price → show the lower rung with the specific things they keep; low usage → offer a pause with a reactivation date. Before shipping the flow, run P-046 on the installed base. **Check 5 tells you which downgrade rungs will actually be used** — if the reconstruction cost of a higher tier is far below its price, the "save" offer your customers want already exists in your catalogue and they will find it with or without a flow.
- **example-copy**: "Going quiet for a few months? Pause Books and keep every receipt — we'll pick up where you left off."
- **worked-example**: Ledgerly's downgrade path already exists and is good: Books → Solo keeps all history and all receipts, and Solo → Free keeps the archive read-only. The one thing to add is a **pause**, because a freelancer's dead quarter is a seasonal fact rather than a verdict on the product — and the reason to add pause rather than a discount is that Ledgerly's reverse-assembly gap (P-046) is only $2/month, so a discount would open a hole the ladder currently does not have.

### P-064 — Own the ladder, audit it quarterly, and put expiry dates on exceptions

- **layer**: `tier-architecture`
- **mechanism**: Ladders decay. Costs move, competitors reprice, usage patterns drift, and every ad-hoc discount and one-off add-on quietly changes the arithmetic. Without a named owner, a written guardrail set and an expiring-exception rule, a ladder that passed every check at launch will silently fail them within a year — and the failure will be discovered by a customer rather than by you.
- **works-when**: there is a single accountable owner with the mandate to say no. At solo-founder scale that is you, and the substitute for governance is a calendar entry.
- **fails-when**: pricing is owned by committee, or exceptions are granted permanently by sales without a review date. The named decay modes: "one-and-done launch" for bundles and "static decay — behavior shifts; fences become stale" for fences.
- **observed-effect**: `no quantified effect published`. The prescription, verbatim: assign ladder ownership, "document guardrails (minimum per-unit gaps, channel price corridors, promotional floors), review quarterly and after cost changes, require exception approvals with expiration dates" (Revology Analytics, fetched 2026-08-12). Stripe Atlas independently advises revisiting prices **quarterly** rather than leaving them untouched for years; PayPro and Paddle echo quarterly review, and enterprise contracts typically bake in **3–5% annual escalators**.
- **evidence**: `medium` *(convergent prescription across four independent sources — one RGM consultancy, one payments platform, two vendor guides — with no measured effect. **The `strong` rating in the source lane is not carried: near-universal advice is not the same as public data.**)*
- **sources**: https://revologyanalytics.com/articles/price-pack-architecture/ · https://umbrex.com/resources/frameworks/marketing-frameworks/price-fences-framework/ · https://stripe.com/guides/atlas/saas-pricing
- **how-to**: Write the guardrails down as numbers: minimum per-unit gap between rungs, minimum overage multiple, minimum assembly headroom, maximum discount without approval. Run the fourteen-check audit quarterly and after any cost change or competitive repricing. Require every pricing exception to carry an expiry date. Track leakage — pocket price, discount variance, exception rate — so erosion is visible before it is structural.
- **example-copy**: n/a (internal document)
- **worked-example**: Ledgerly's guardrail sheet is four lines and belongs beside the price list: *top-up ≥ 1.1 × Solo's per-unit rate; no add-on may bring Solo + add-ons within $5 of Books; annual discount ≤ 50% on any single rung; per-unit rate non-increasing across Free → Solo → Books.* One calendar entry per quarter to re-run the checklist. At 40 customers the whole audit is an hour, which is the argument for doing it: it is cheaper than the arbitrage it prevents.

## Interactions

**Value-referenced checks versus price-referenced checks — the ordering that this layer exists to enforce.** A ladder can pass B1, B2, B5 and B6 and be destroyed by a rung that A1, A4 and A5 would have caught. Athenic is the proof: 1.51× and 1.68×, both in band, and Professional lost 56% of its signups `[aggregator-sourced via Artisan Growth; direction informative, magnitude unconfirmed — this layer's whole ordering rule rests on one second-hand case, and any deliverable that invokes the ordering should say so]`. When a price-referenced check and a value-referenced check disagree, the value-referenced one wins, and the price-referenced one is downgraded to a flag. **The corollary is uncomfortable and correct: passing the whole of Band B tells you almost nothing about whether your ladder works.**

**P-049 (peg the top-up at 1.1× entry) versus P-051 (hold the volume discount at 20–40%) — these are the same number.** If the top-up is 1.1 × r_entry and the top rung sits at r_entry × (1 − d), then the top rung's top-up premium is exactly **1.1 / (1 − d)**. At d = 40% that is **1.83×**; at Ledgerly's d = 47.2% it is **2.08×**. ElevenLabs Reception AI confirms it arithmetically: d = 46.0% and a +9% entry peg predict 1.09 / 0.54 = **2.02×**, against an observed **+102%**. So you cannot set the volume discount and the top-up premium independently — **choosing your discount depth chooses your top rung's overage penalty, and vice versa.** If the top-rung premium comes out punitive, the fix is a shallower curve, not a cheaper top-up.

**P-047 (per-unit monotonicity) versus P-052 (the top rung comes off the curve).** These formally contradict each other and both are right. B1 applies to rungs sold on volume; a top rung sold on bandwidth, seats, support or terms is not on the volume ladder and its per-unit rate is not the buyer's comparison. **The resolution is disclosure**: take the exemption, but say on the page what the top rung is sold on. A flat or inverted top rung with no stated reason is indistinguishable from a mistake, and a buyer with a spreadsheet will treat it as one.

**P-045 (assembly) versus P-060 (add-on demand share).** The demand-share rule says put a 30–50%-demand capability in an add-on. The assembly test may say that specific capability is the only fence holding the next rung up, in which case it must not be purchasable at any price. **Assembly wins.** Ledgerly's accountant seat is exactly this case: correct add-on candidate by demand, forbidden add-on by arithmetic. This is also why the add-on catalogue cap (3–6 SKUs) is really an arithmetic-tractability limit rather than a psychological one — *m* add-ons create up to 2^m subsets to check per adjacent pair.

**P-058 (free limit) versus P-057 (free-as-product) versus P-062 (break-even).** A Bill of Rights that promises a *feature* forever is a modest commitment; one that promises a *limit* forever is a permanent price. The Athenic 100→500 result means loosening a limit is a price cut with an unusually steep elasticity, so it must carry a break-even calculation, and it is far harder to reverse than to make. **Never loosen a free limit as a growth experiment without running C2 on it first.**

**P-056 (the unpriced top rung) versus the B2B/consumer boundary.** Everything in the packaging canon that touches NRR, expansion revenue, seat-based reasoning, enterprise tiers and contact-sales motions comes from B2B samples — n=200, n=230, n=240 — whose typical respondent is a $1–10M ARR software company with **$50–$249 monthly ARPU** and a sales motion available. A $10–30/mo consumer product is at the extreme low edge of, or entirely outside, every one of those samples. **Do not import:** NRR targets, expansion playbooks, seat-based reasoning *or its critique*, enterprise tiers, or any B2B free-to-paid conversion band. For a solo consumer product, NRR above 100% is essentially unreachable through expansion; the analogous levers are churn reduction and annual plans, which the canon treats as a footnote.

**The gate versus Layer 04 (price points) and Layer 05 (page anatomy).** A ladder failure outranks every finding in Phases 6–8, without exception. The page-anatomy layer states the same thing from its side: a badge cannot rescue a ladder that fails the Phase 4.5 arithmetic, and if a lower tier plus two top-ups reaches a higher tier's allowance, badging the higher tier is dressing a structural fault. **Structure before decoration, always.**

**The gate versus Layer 01 (value metric).** Every check here is denominated in the value metric. If Phase 3 picked the wrong metric, the gate runs cleanly and measures the wrong units — a perfectly monotone per-unit curve in a unit nobody buys on. The gate cannot detect that failure and must not be trusted to.

**P-055 (honest top rung) versus the temptation this layer creates.** Having a checklist that can *detect* a decoy makes it tempting to construct one. The replication evidence forbids it, and the check is stated as a removal procedure for that reason. **A demoted claim does not become usable because a tool exists to measure it.**

## Folklore

| Claim | Where it circulates | Traceable to | Verdict |
|---|---|---|---|
| **Three tiers is optimal**; four or more causes decision paralysis | Near-universal in SaaS pricing advice — PayPro ("a widely accepted standard"), Getcone, M Accelerator, most pricing SEO content | **No controlled experiment establishing an optimal tier count could be located.** Usually propped up by the Iyengar & Lepper jam study — 24 vs 6 jam varieties at a supermarket tasting booth, which is not tiers, not a funnel, and not a buyer with prior intent. A **category error.** GoodUI's own pattern #113 "More Or Fewer Plans" sits at **10.7% of its 90% cumulative power target from 3 tests** — the weakest pricing pattern in that library. SaaS Research Lab's 110-product scan shows real ladders spread across 2, 3, 4 and 5+ | **Best-practice folklore.** Three is a reasonable default because it is the smallest set that produces a middle, not because it converts best. Treat as a hypothesis; decide tier count with P-044 |
| Choice overload means fewer tiers convert better | Every "simplify your pricing" post | Scheibehenne, Greifeneder & Todd (*JCR* 2010): **63 conditions, 50 experiments, N=5,036, d ≈ 0.02** — a mean effect of essentially zero, with **no sufficient conditions** identifiable. Chernev et al. (2015) restore an effect only after conditioning on four moderators | **Not a design constraint.** Cut tiers because you cannot differentiate them honestly, never because of overload |
| "More than 4 tiers reduces conversions by **25%**" | M Accelerator and downstream SaaS SEO posts | Nothing. The source is an aggregator and the figure is uncited | **Untraceable. Invented-looking precision** |
| A decoy tier lifts selection of the tier above it | CRO and pricing blogs, always via Ariely's *Economist* example | The *Economist* demonstration was **n=100 MIT students, hypothetical choice**. As a design tool: **91 attempts, 23 product classes, 73 decoyed choice sets → 11 reliable effects** (Yang & Lynn 2014); confined to all-numeric stylised stimuli and sometimes **reversing into repulsion** (Frederick, Lee & Baskin 2014) | **Do not architect a ladder around it.** P-055 exists to remove decoys, not to build them |
| Adjacent tiers must sit **1.5–2×** apart, or **50–100%** | M Accelerator, Dodo Payments, most tier-design checklists | Trade blogs with no underlying dataset. The Athenic ladder sat at 1.51× and 1.68× — inside the band — and lost 56% of the tier above | **Smell test, not a law.** Flag with it; settle with A4 |
| Target **50–60%** of customers in the middle rung | M Accelerator | Aggregator, no dataset, no cohort | **Directional at best.** Do not report it as a benchmark |
| The 5→3 tier consolidation that "more than doubled conversion" (1.2% → 3.1%, **+158%**) | Growigami, Artisan Growth, quoted as proof that fewer tiers convert | Two aggregators. **Five things changed at once** — tier count, features per tier (30+ → 8–10), a "Most Popular" badge, CTA copy, and logos above the cards | **Real direction, wrong attribution.** Evidence that overloaded pricing pages underperform, not that tier count is the lever |
| Freemium converts at ~**8%** median, card-required trials at **30–60%** | Artisan Growth, Growigami | Aggregators whose numbers **conflict with RevenueCat's dataset** (median freemium **2.1%**, hard paywalls **10.7%**) by 4×. **RevenueCat's figures are consumer mobile in-app-purchase data and the aggregators' are web SaaS, so part of the gap is a cohort difference rather than a definitional one** | **Contested, and across two cohorts.** Plan on **2–5%** for self-serve free→paid, holding it as a prior imported from app-store data rather than as a web benchmark; treat anything above 10% as requiring a stated definition of "conversion" |
| Add-ons should be priced at **20–50%** of the base tier | Dodo Payments and downstream | Vendor blog, uncited | **Heuristic, not benchmark.** And it is the wrong frame: add-ons are priced by what they protect (P-045), not by a ratio to the base |
| There is a standard SaaS overage multiple | Assumed in most metered-pricing writing | **One published multiplier exists in the entire public record** — Zapier's 2.5× monthly / 1.25× annual. No benchmark distribution has ever been published | **No norm exists.** Use the floor formula (B3), not a remembered multiple |

## Where this layer is thin

- **The Assembly Check has no standard trade name.** The arithmetic appears informally in exactly one source — "customers do the math" — and no consulting framework formalises "lower tier + add-on subset versus higher tier" as a named check. The nearest formal statement is the incentive-compatibility / self-selection constraint from second-degree price discrimination, which is rigorous but taught as economics rather than as a packaging procedure. **The trade names the symptom (cannibalization, broken rung, quantity surcharge) but not the test.** When citing it, say the name is this library's.
- **No public dataset of SaaS ladder arithmetic exists.** Everything quantitative on per-unit monotonicity comes from CPG and revenue-growth-management practice, where scanner data makes ladders auditable. Nobody appears to have scraped a large sample of SaaS pricing pages and computed per-unit rates, overage multiples and assembly costs. That study would be straightforward and does not exist.
- **Overage and top-up rates are almost entirely unpublished.** One overage multiplier (Zapier) and one complete plan-plus-top-up pair (ElevenLabs Reception AI) in the whole public record. Descript's and Runway's top-up rates are confirmed to exist and are **not public** — those are real gaps, not estimates withheld. The overage-floor formula in B3 and the annual-coherence bound in B5 are **derivations, not cited rules**, and should be presented as such.
- **The Step Integrity Index band (0.8–1.2) has no published derivation.** It comes from a single consultancy and the >66% overlap rule comes with it. Both are plausible and neither is validated. Worse, the check requires willingness-to-pay data most operators do not have, which is precisely why they substitute the folklore multiplier it is supposed to replace.
- **The Athenic experiments are second-hand.** They are the single best empirical demonstrations found of tier cannibalization and free-limit elasticity, and they reach this library only through an aggregator whose underlying operator write-up could not be retrieved. **Direction informative, magnitudes unconfirmed** — and this layer leans on them heavily, including for its own ordering rule.
- **The unpriced "contact us" rung's anchoring effect has never been measured.** Prevalence is solid (31.0% of 110 products); the effect on the priced rungs below it is unknown. `[unsourced — would need an experiment adding or removing a contact-sales card while holding the priced tiers constant.]`
- **The volume-discount band (20–40%) rests on seven products from one research lane**, and the mechanism its source offers for the band does not follow arithmetically. The regularity is real in that sample; the explanation should not be repeated.
- **Quantity-surcharge incidence is paywalled.** The academic term and literature exist but the primary papers could not be opened; the only surfaced figure is a consumer-survey number rather than an audited shelf-incidence rate.
- **Every price-increase churn figure attached to a notice period is aggregator-sourced.** The 1.8pp-at-90-days to 7–9pp-under-14-days gradient is directionally consistent across sources and numerically unverified everywhere. The break-even formula is definitional and safe; the churn predictions are not.
- **A solo founder at 40 customers cannot run three of the fourteen checks with any confidence** — Step Integrity (no WTP data), Empirical Mix (one customer is 2.5 points), and the monitoring half of Break-Even (one cancellation is 2.9 points). **But they can run the other eleven to the same standard as a company with a million visitors, in about an hour, on a spreadsheet.** That asymmetry is the most useful thing in this layer: the gate is the one part of pricing work where small scale costs you almost nothing.
