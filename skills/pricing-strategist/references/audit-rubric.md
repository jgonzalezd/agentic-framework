# Audit rubric — scoring an incumbent pricing page

**Loaded at:** Phase 6.5, audit mode only. Never before the blind spec exists.

This file turns the pattern library into a score. It produces exactly the table in `output-templates.md` § `audit.md` — seven named sections, each out of 10, totalling 70 — and nothing else. Every scoring line below cites the pattern IDs that justify it, because a line with no pattern behind it is either an invention or a gap in the library, and the closing section names the ones that are gaps.

---

## How to score

**1. Scoring runs after the blind spec, never before.** Phase 6 produces the page you would have built with no reference to the incumbent. Only then do you open the incumbent and score it. A rubric run first becomes a checklist the blind spec is quietly edited to satisfy, and the diff — which is the actual deliverable — disappears. **Never revise the blind spec after scoring.**

**2. Score each section 0–10 against the band descriptors below.** The descriptors are written to be behavioural rather than evaluative, so that two auditors reading the same page land within a point. Where you cannot decide between two bands, take the lower one and say in the Notes column which line moved you.

**3. Apply negative markers after the base score.** Each section carries a list of elements that actively lose points, drawn from `anti-patterns.md`. A negative marker is subtracted from the base score, floored at 0. Two markers — fabricated proof (P-237) and undisclosed recurring charge (P-250) — are prohibitions rather than deductions: their presence caps the section at 2 regardless of everything else in it.

**4. Ladder integrity is not a normal section.** It is scored 0–10 like the rest so the table sums to 70, but it does not behave like the rest. **Any FATAL check from `patterns/03-tier-architecture.md` § Ladder arithmetic caps the section at 2 and becomes a structural finding that outranks every other line on the page, regardless of the other six scores.** A page scoring 60/70 with an inverted add-on is in worse shape than a page scoring 40/70 without one, because the first page's high score was earned on decoration sitting above a structure a rational buyer can arbitrage. The arithmetic does not care how good the copy is. Report the structural finding first, in its own section, with the working shown, and do not let a strong total soften it.

The trap this rule exists to prevent is scoring Ladder integrity generously because most of its checks passed. Nine passes and one FATAL is a 2, not a 7. If that feels harsh, note what the alternative produces: a report whose headline is a CTA rewrite while the entry rung is dominated by the free tier plus two top-up packs.

**5. The Weight column carries priority, not a multiplier.** The template fixes the total at 70, which means seven equal sections of 10. Weight therefore records **how far a point in that section moves the audit's conclusions**, and it is used for ranking findings, not for arithmetic. The classes and their basis:

| Section | Weight class | Basis |
|---|---|---|
| Ladder integrity | **Overriding** | Not a judgement call. Layer 03 states its own evidence class: the core is deductive, and a dominance argument needs no experiment because the buyer's arithmetic settles it. **Seven of its 14 checks are rated Fatal** — L1, L2, L7, L9, L10, L11 and L13 in the table below. |
| Tier architecture | High | `medium` evidence across P-041–P-064, plus the Athenic cannibalisation case (a rung inside the canonical spacing band that took 56% of the tier above it — Artisan Growth, fetched 2026-08-12, an **aggregator citing an operator write-up that could not be retrieved independently**, so the direction is informative and the magnitude unconfirmed). The caveat travels with the figure every time it is quoted, including here, where it is what sets a weight class. Direction well established, magnitudes mostly unconfirmed. |
| Value framing | High | Mechanism-strong, effect-weak. Layer 01 argues the metric is the decision everything downstream inherits, but no pattern in it carries a measured conversion effect. **This weight is judgement, declared as such.** |
| Price presentation | Medium | Split evidence. Cost transparency is the best-sourced material in the library (Baymard, n=1,026, 2025); ending effects are explicitly contested (P-089, P-090). |
| Objection handling | Medium | Layer 07's own transfer warning states that roughly 95% of its benchmarks are App Store artifacts that do not describe a web checkout. Mechanisms transfer; magnitudes do not. |
| Trust & proof | Medium | Prevalence is well observed (33-page census); effect sizes are largely absent, and the two most-quoted ones (badge lift, FAQ lift) are in the folklore register as fabricated. The section still matters because P-237 is a boundary, not a tactic. |
| Checkout path | Medium | Good published numbers, wrong cohort. Baymard's corpus is e-commerce checkout, not SaaS self-serve, and layer 10 says which four findings transfer. |

**6. COLD regime: score what is structurally present; mark the rest `not assessable — no data`.** Every section's checklist is split into **structural lines** (answerable from the page and the price list alone) and **data-dependent lines** (needing traffic, usage, WTP or COGS). The rule is asymmetric on purpose:

- A data-dependent line can **lower** a score only when the data exists and shows a failure.
- Absence of the data never lowers the score. It is recorded as `not assessable — no data`, carrying the bracketed token from the Phase 2 inventory, and the section is annotated `scored on N of M lines — COLD`.
- A pre-launch product therefore cannot lose points for lacking testimonials it could not honestly have (P-236, P-237). It can still reach 9–10 on structure alone, and several sections are easier to score well in COLD precisely because the honest page is thinner.

Never guess a data-dependent line. A guessed reading becomes a finding, the finding becomes a recommendation, and nothing downstream ever traces it back.

---

## The seven sections

### 1. Ladder integrity — /10

**Measures** whether a rational buyer can construct a strictly better package out of your own catalogue than the one you want them to buy.

**Bands**

| Score | Descriptor |
|---|---|
| **0–2** | Any FATAL check fails: an inverted add-on, a sideways rung, a per-unit inversion, an annual price that undercuts the rung below, or a negative-margin rung at realized mix. One FATAL is enough. Nine passes do not lift it. |
| **3–5** | No FATAL, but two or more STRUCTURAL failures: an unfenced step, a compressed rung, a dominated or never-bought top rung, a volume discount outside its band with no fence to justify it. |
| **6–8** | No FATAL, at most one STRUCTURAL failure, and the DIAGNOSTIC readings are recorded rather than acted on blindly. The per-unit table exists and is coherent end to end. |
| **9–10** | Every runnable check passes with headroom, add-on pricing is pegged rather than costed, and any check that could not run is bracketed with the instrumentation that would run it. 10 requires all fourteen checks actually run; a COLD page with four brackets tops out at 9. |

**Scoring lines** — run `patterns/03-tier-architecture.md` § Ladder arithmetic in its published order. Value-referenced first: passing the price rules proves less than it looks.

| # | Line | Class | Patterns |
|---|---|---|---|
| L0 | Per-unit table exists: every rung, add-on, top-up and annual variant, with price, allowance, rate, fence, named buyer | structural | P-047 |
| L1 | **A1 Assembly** — no add-on subset reconstructs tier n+1 at or below its price | structural · FATAL | P-045, P-060 |
| L2 | **A2 Reverse assembly** — no material share of higher-tier accounts could rebuild their package cheaper | data-dependent · FATAL | P-046, P-059 |
| L3 | **A3 Named fence** — every step statable in one sentence with the table closed, and not by an adjective | structural · STRUCTURAL | P-041, P-042, P-043 |
| L4 | **A4 Step integrity** — SII in 0.8–1.2; adjacent-SKU overlap ≤ 66% | data-dependent (SII) · structural (overlap) | P-053 |
| L5 | **A5 Empirical mix** — lowest rung < 80%, top rung share > 0, no rung collapsed since the last packaging change | data-dependent · DIAGNOSTIC | P-059 |
| L6 | **A6 Decoy honesty** — top rung not dominated, bought by someone, delivered | structural + data-dependent | P-055, P-056 |
| L7 | **B1 Monotonicity** — per-unit rate non-increasing as price rises | structural · FATAL | P-047 |
| L8 | **B2 Compression** — no step discount more than ~2× a neighbour; vacuous below three priced rungs, and saying so is the honest output | structural · STRUCTURAL | P-047, P-051, P-096 |
| L9 | **B3 Overage** — overage rate ≥ the plan's own rate **and** ≥ the next rung's marginal rate | structural · FATAL | P-048 |
| L10 | **B4 Top-up peg** — one flat rate ≥ 1.1× the entry paid tier's rate; pack size ≥ entry allowance | structural · FATAL | P-049, P-034, P-097, P-276 |
| L11 | **B5 Annual coherence** — Aₙ₊₁/12 > Pₙ; per-unit monotone inside the annual ladder; discount ≤ 1 − Pₙ/Pₙ₊₁ | structural · FATAL | P-054, P-092, P-093 |
| L12 | **B6 Spacing** — 1.5 ≤ Pₙ₊₁/Pₙ ≤ 2.0, flag only, settled by L4 and never by moving the price to satisfy the multiplier | structural · DIAGNOSTIC | P-053 |
| L13 | **C1 Margin floor** — positive gross margin per rung at realized mix; free tier's cost-to-serve ÷ conversion < acceptable CAC | data-dependent · FATAL | P-021, P-027, P-088 |
| L14 | **C2 Break-even** — computed before any proposed price move; >20% increase implies grandfathering | structural | P-062, P-086, P-098 |
| L15 | Top-up guarded on a non-price axis, or not sold at all | structural | P-050, P-036 |

**Where the numeric gates in this table come from.** Four lines above state a bare number, and a number sitting inside a blocking check has to say what stands behind it.

- **L10's ≥ 1.1× top-up peg is the only one of the four with corpus evidence under it.** `teardowns/_CROSS-CUTTING.md` § 5 computes the premium for the four products in the corpus that publish both halves of the arithmetic and reports **seven observations across four products running 1.1×–1.3× the entry tier's per-unit price and resolving to about 2.0× at the top rung**, with **no observation anywhere below plan per-unit price**. The one product at parity, Vercel at 1.00×, compensates with a published spend ceiling rather than with a rate. Until that section was written the gate rested on P-049's deductive argument alone — a flat rate above the highest in-plan rate cannot invert at any rung — and it now carries a prevalence finding as well.
- **L4's SII band of 0.8–1.2 and its ≤ 66% adjacent-SKU overlap are PriceBeam's Step Integrity Index** (fetched 2026-08-12), reaching this rubric through P-053. P-053 rates the index `anecdote` and says why: it is one consultancy's framework with no published derivation of the band. Score L4 as the flag that sends you to get willingness-to-pay data, never as the threshold that settles a rung.
- **L12's 1.5–2.0× spacing band is trade folklore, and the rubric scores it as a flag only.** P-053 traces it to trade blogs with no underlying dataset, and the Athenic ladder sat at 1.51× and 1.68× — inside the band — and still lost 56% of the tier above it. That is what "flag only, settled by L4" means in the table, and it is why L12 can never fail a page on its own.
- **L14's >20% grandfathering trigger comes from P-062**, whose own source for the number is a single undated vendor blog. Treat the 20% as this library's working trigger rather than as a measured threshold. The break-even computation beside it is a different matter — that one is Nagle's and is derived rather than surveyed, and it is the half of L14 that carries real weight.

The library already labels its own coinages honestly elsewhere, naming the Assembly Check as its own rather than as industry vocabulary. The same standard applies to these four: one is now sourced, one is a consultancy framework, and two are this library's working thresholds.

**Negative markers** (4)

| Marker | Effect | Source |
|---|---|---|
| Inverted add-on or top-up priced below the plan it attaches to | caps at 2 | anti-patterns § unpredictable units; P-048, P-049 |
| Sideways rung — lower tier plus add-ons reaches the tier above at or below its price | caps at 2 | P-045 |
| Dominated or zero-share rung kept as furniture, or a rung added to harvest a decoy effect | −2 | anti-patterns § folklore (decoy); P-055 |
| Annual discount above the 1 − Pₙ/Pₙ₊₁ bound on any rung | caps at 2 | P-054 |

**COLD handling.** L2, L4 (SII half), L5 and L13 are the four that need data. Bracket them verbatim: `[step integrity — no WTP data; run the 10–15 interview sequence in derivation-methods.md]`, `[cost per unit — unknown; no margin argument is possible until this exists]`. Use that count and no other. `derivation-methods.md` sets **10–15 as the pre-launch floor** and 20 in a week as the target, and it names the popular "5 pricing interviews" framing as folklore for which no primary source was located — five interviews can falsify a price hypothesis and cannot set one. A bracketed token ships verbatim into a customer deliverable, so it must not carry a number the library elsewhere debunks. The other ten of the fourteen checks are fully runnable from a spreadsheet, which is why this is the one section a zero-traffic product can complete to the same standard as a product with a million visitors. Below roughly 200 accounts, L2 is a census rather than a sample, so run it by hand instead of bracketing it.

---

### 2. Value framing — /10

**Measures** whether the page tells the buyer what they get more of when they pay more, in a unit they already count.

**Bands**

| Score | Descriptor |
|---|---|
| **0–2** | The metric is an abstract unit the seller mints (credits, tokens, compute) with no burn table and no translation sentence, or the page never states what scales at all. The buyer cannot predict a month's consumption. |
| **3–5** | A real metric exists but the page describes the software rather than the metric. The value sentence is missing, the denominator questions ("how much is that", "what happens when I run out") are unanswered next to the price, or the quantity-versus-capability question was never decided and the ladder mixes both. |
| **6–8** | The metric is a countable noun the buyer already uses, stated on the card, and passes the mental-arithmetic test. One of: variance undisclosed, the translation into the buyer's own frame missing, or the fence type mismatched to the shape of the value. |
| **9–10** | Metric, value sentence, denominator answers and the buyer's own frame all present on the card. Quantity or capability is declared and the ladder is consistent with the declaration. Variance in the unit is disclosed rather than hidden. |

**Scoring lines**

| # | Line | Class | Patterns |
|---|---|---|---|
| V1 | The value sentence is writable, and its blank names the metric | structural | P-003, P-001 |
| V2 | Quantity or capability is declared, and the ladder matches the declaration | structural | P-002 |
| V3 | The metric tracks delivered value, not incurred cost | structural | P-005 |
| V4 | The unit is a countable noun the buyer already uses; not credits, not multipliers, not raw tokens | structural | P-006, P-008 |
| V5 | Mental-arithmetic test: a prospect can estimate their monthly consumption in one pass | structural | P-012, P-017 |
| V6 | The unit is translated into the buyer's own frame on the card | structural | P-013 |
| V7 | Consumer products favour predictability; B2B favours value-tracking | structural | P-014 |
| V8 | Variance in the unit is disclosed rather than hidden | structural | P-018 |
| V9 | The metric cannot be trivially gamed, and does not break when the buyer automates | structural | P-009, P-011 |
| V10 | Seats are charged only where the second seat creates value | structural | P-010 |
| V11 | Burn table published, and allowance terms under change control with a notice cycle | structural | P-026, P-031, P-038 |
| V12 | The metric's distribution across existing users is known | data-dependent | P-004, P-022 |

**Negative markers** (3)

| Marker | Effect | Source |
|---|---|---|
| Abstract minted unit with no burn table and no translation sentence | −2 | anti-patterns § unpredictable usage units; P-006, P-008, P-026 |
| Burn rate or allowance terms changed without notice, grandfathering or a dated changelog | −3 | anti-patterns § the redenomination trap; P-038, P-217 |
| Unit whose per-use cost the buyer cannot predict, with variance concealed rather than stated | −2 | P-012, P-018 |

**COLD handling.** V12 is the only data-dependent line; bracket it. Everything else is checkable against the page and a round of real prospects with a whiteboard, which is the layer's own stated COLD move. Size that round at **10–15 prospects**, the pre-launch floor in `derivation-methods.md`, rather than at the five that circulates as a rule of thumb and is carried there as folklore. A product with no traffic loses nothing here.

---

### 3. Tier architecture — /10

**Measures** whether each rung names a buyer, fences on something that buyer can state, and is presented so the fence is visible.

**Bands**

| Score | Descriptor |
|---|---|
| **0–2** | Rungs differ by adjectives, or the badge is on two tiers, or the free tier is gated on a feature the buyer needs to start rather than on a limit they hit by succeeding. The ladder's shape cannot be recovered from the page. |
| **3–5** | Rungs exist and differ, but at least one step has no nameable fence, or the top-up is purchasable wherever it creates an arbitrage, or the free tier's role (lead magnet or product) was never decided and the page shows the drift. |
| **6–8** | Every step has a fence the buyer could state. One weakness: the delta is not what the card lists, the badge is unlabelled or on a tier whose modality is unverified, or an add-on exists that a majority rather than a minority wants. |
| **9–10** | Every rung names its buyer in the descriptor, fences on the shape of the value rather than on what was easy to build, and carries exactly one badge with a reason attached. Add-ons sell only what a minority wants; a downgrade rung exists so cancelling is not the only exit. |

**Scoring lines**

| # | Line | Class | Patterns |
|---|---|---|---|
| T1 | Every rung has a fence the buyer can name in one sentence | structural | P-041, P-042 |
| T2 | Every rung brings a new buyer and a new fence; no rung exists only to be seen | structural | P-043, P-055 |
| T3 | Tier count follows from ladder arithmetic, not from a folklore number | structural | P-044 |
| T4 | Free tier's role is decided and written down, and it is gated on a success limit rather than a starting feature | structural | P-057, P-058, P-028 |
| T5 | Exactly one badge in a visible grid, labelled with a reason where one can honestly be given | structural | P-127, P-128 |
| T6 | The badge's claim is true: "most popular" only on the modal tier, otherwise "Recommended" | data-dependent | P-227 |
| T7 | Cards list the delta, not the full feature set, in one fixed composition order | structural | P-125, P-126 |
| T8 | A gridded comparison table where tiers differ on discrete features; cards where they differ on one continuous axis | structural | P-130, P-131, P-133 |
| T9 | The table does not scroll horizontally on mobile, and the mobile stack leads with the promoted plan | structural | P-134, P-135 |
| T10 | Add-ons sell only what a minority genuinely wants; bundling where marginal cost is near zero | structural | P-060, P-061 |
| T11 | A downgrade rung exists, so cancelling is not the only exit | structural | P-063, P-267 |
| T12 | An unpriced top rung exists only where there is an organisational buyer | structural | P-056, P-136 |
| T13 | Realized mix read before any redesign | data-dependent | P-059 |

**Negative markers** (3)

| Marker | Effect | Source |
|---|---|---|
| Two badges in one visible grid | −2 | anti-patterns § badging two tiers destroys the signal; P-127 |
| "Most popular" on a tier that is not modal | −2 | anti-patterns; P-227, P-237 |
| Top-up purchasable at a rung where it creates the arbitrage (most often the free tier) | −2 | P-050, and the B3 finding it produces |

**COLD handling.** T6 and T13 need a customer distribution. In COLD, T6 is not a failure — it is a constraint: a product with 40 customers cannot verify modality, so the honest badge label is "Recommended" and the page scores full marks for using it. Mark T13 `not assessable — no data`.

---

### 4. Price presentation — /10

**Measures** whether the number on the page is the number the buyer will pay, and whether it is expressed in the form that makes it comparable.

**Bands**

| Score | Descriptor |
|---|---|
| **0–2** | No price is published and no priced scenarios substitute for it, or the displayed number is not the number charged (currency, tax or renewal price differs and is disclosed late), or a strikethrough anchors against a price never charged. |
| **3–5** | A price exists but the annual expression is incoherent: multiplied up from monthly, expressed once, or discounted without the renewal price inside the disclosure. Currency stamp or tax posture missing. |
| **6–8** | Price, term and annual saving all present and internally consistent. One weakness: the ending was chosen by reflex, the annual ratio came from the market median rather than from the product's own churn, or no margin argument is available and the page does not say so. |
| **9–10** | The level was settled before the ending. Annual saving is expressed twice (percentage at the toggle, currency at the card), denominated in monthly units, with the renewal price inside the disclosure. Currency stamped inline, tax posture stated beside the price. Every number traces to a derivation method or is bracketed. |

**Scoring lines**

| # | Line | Class | Patterns |
|---|---|---|---|
| N1 | The level was settled before the ending was chosen | structural | P-081, P-089 |
| N2 | The number anchors against the alternative the buyer named, not against a competitor's list price | structural | P-083, P-160 |
| N3 | The price sits inside the ceiling of the decision neighbourhood the buyer puts the product in | structural | P-084, P-085 |
| N4 | The 9-ending trade is priced explicitly (conversion up, retention down) rather than assumed free | structural | P-089, P-090, P-091 |
| N5 | The monthly price produces an annual figure that rounds cleanly | structural | P-092 |
| N6 | The annual discount is derived from the product's own churn, then sanity-checked against the market median | data-dependent (churn) · structural (median check) | P-093, P-269 |
| N7 | Annual saving expressed twice: percentage at the toggle, currency at the card | structural | P-148, P-149 |
| N8 | Annual price denominated in monthly units, never multiplied up from the monthly price | structural | P-150 |
| N9 | The renewal price sits inside the discount disclosure | structural | P-151, P-188 |
| N10 | One all-in number, with the cost of that transparency understood | structural | P-094, P-238 |
| N11 | Free components are genuinely $0 rather than nearly free | structural | P-095 |
| N12 | Volume discount inside 20–40% unless the unit is genuinely fenced | structural | P-096, P-051 |
| N13 | Currency stamped inline; tax posture stated beside the price; EU consumers see tax-inclusive prices | structural | P-165, P-102, P-101, P-248 |
| N14 | Billing toggle above the cards, defaulted to the term being sold, with the default acknowledged as untested | structural | P-123, P-124 |
| N15 | Price varies by market, never by person; cohort ladders rather than price A/B tests | structural | P-100, P-099 |
| N16 | Margin stated at each rung, or explicitly bracketed as unavailable | data-dependent | P-088, P-021 |

**Negative markers** (3)

| Marker | Effect | Source |
|---|---|---|
| Strikethrough or "was" price never actually charged | −3 | anti-patterns § folklore (fabricated anchors); P-129, P-212 |
| Price withheld entirely with no priced scenarios | −2 | P-136 |
| The number shown is not the number charged — tax, currency or renewal differs and surfaces after the decision | −3 | P-165, P-102, P-248, P-250 |

**COLD handling.** N6's churn half and N16 need history. Bracket both. The remaining fourteen lines are page-readable, so a pre-launch page is fully scoreable here. Note that N4 cannot be resolved by evidence in either regime: the ending literature is a genuine field-versus-lab split, and for subscriptions the trade runs the other way. Score N4 on whether the page's owner *knows* they are making a trade, not on which ending they chose.

---

### 5. Objection handling — /10

**Measures** whether the page answers *what happens to me if this is a mistake* at the moment the fear arrives.

**Bands**

| Score | Descriptor |
|---|---|
| **0–2** | Risk devices are stacked without a decision (a free tier, a trial, a guarantee and a cancel-anytime line all at once), or the page carries a deadline it cannot document, or cancellation runs through support. |
| **3–5** | One entry mechanic exists but the fears it creates are unanswered: no microcopy under the button, no renewal date, a guarantee called "satisfaction", or an FAQ ordered by frequency rather than by blocking power. |
| **6–8** | Entry mechanic chosen deliberately, both trial fears answered separately under the button, FAQ ordered by blocking power and voiced in the customer's words. One weakness: guarantee wording generic, refund fenced on the calendar rather than on consumption, or the unfavourable term disclosed away from the button. |
| **9–10** | One mechanic, chosen and defended. Guarantee named for what it actually promises, fenced on consumption where the product generates output on demand, and placed at the price's visual weight. Cancellation sold on the pricing page. The regulatory status of the cancellation flow verified before anything ships. |

**Scoring lines**

| # | Line | Class | Patterns |
|---|---|---|---|
| O1 | One entry mechanic, chosen before a word of the page was written | structural | P-181, P-194 |
| O2 | Card requirement matches the goal (revenue versus population), and the conversion rate is read as selection | structural | P-183, P-182, P-184 |
| O3 | Trial length set from the product's own time-to-value, not from a mobile benchmark | structural | P-185 |
| O4 | Risk varies across plans, not only price | structural | P-186 |
| O5 | Both trial fears answered separately in the two lines under the button | structural | P-187, P-156 |
| O6 | Renewal price and date inside the offer sentence, and surfaced as dated calendar events the buyer can move | structural | P-188, P-189 |
| O7 | Guarantee named for what it promises; never "satisfaction" | structural | P-190, P-191 |
| O8 | No anti-guarantee ported to a subscription with a card on file | structural | P-192 |
| O9 | Guarantee placed where the price is, at the price's visual weight | structural | P-193, P-138 |
| O10 | Refund fenced on consumption rather than on the calendar; failed units auto-refunded and shown in the meter | structural | P-196, P-197, P-199 |
| O11 | A spend cap ships where the meter itself is the fear | structural | P-198, P-033 |
| O12 | Refunds lowered by pre-purchase clarity rather than by tighter conditions | data-dependent (refund reasons) | P-195 |
| O13 | FAQ ordered by blocking power, capped at 5–6 for a consumer price, each question in the customer's anxious voice | structural | P-137, P-157 |
| O14 | The unfavourable term is disclosed at the button | structural | P-158 |
| O15 | The cancellation path is sold on the pricing page | structural | P-200, P-251 |
| O16 | Click-to-cancel regulatory status verified before any cancellation-flow recommendation ships | structural · blocking | P-201 |
| O17 | Any deadline on the page is real, with the mechanism next to the date, and sits on the offer rather than on the price | structural | P-204, P-206, P-210 |
| O18 | Price increases announced with a date and then actually made; existing customers grandfathered for a stated period | structural | P-207, P-208, P-098 |
| O19 | Promotions show the discounted price rather than a code, and carry a stated end condition | structural | P-211 |
| O20 | Promotions judged by their renewal cohort, not by the signup spike | data-dependent | P-213, P-216 |

**Negative markers** (4)

| Marker | Effect | Source |
|---|---|---|
| Countdown, stock bar or scarcity cue with no documentable constraint behind it | −3 | anti-patterns § urgency spends trust; P-204, P-205, P-214 |
| A deadline that resets, repeats, or is announced and not honoured | −3 | P-205, P-207, P-210 |
| Urgency stacked on a fabricated reference price | −3 | P-212, P-129 |
| Cancellation only via support or email, or behind a multi-screen retention maze | −3 | anti-patterns § dark patterns; P-200, P-251 |

Note the asymmetry the evidence actually supports, because it is the reverse of how urgency is usually sold: the trust cost of scarcity cues is measured (Tuncer et al., n=202, and the damage occurred for *honest* cues too), while the conversion gain is unsourced. A page's own A/B test structurally cannot see the cost (P-203), so an urgency device is scored against mechanism, never against the test that approved it.

**COLD handling.** O12 and O20 need refund reasons and renewal cohorts. Bracket both. O16 is not scoreable from the page at all — it is a check on the auditor's own process, and it blocks the recommendation rather than the score. In COLD, prefer scoring the lines whose mechanism is a legal or arithmetic fact (O8, O10, O16) over those whose mechanism is someone else's conversion cohort.

---

### 6. Trust & proof — /10

**Measures** whether the page's claims are checkable by the person being sold to, and whether the proof sits where the doubt arises.

**Bands**

| Score | Descriptor |
|---|---|
| **0–2** | Any fabricated element: invented or composite testimonials, counts no query produces, "join N others" where N is aspirational, a logo wall of non-customers, a homemade seal, an award with no date or issuer. Automatic, regardless of the rest of the section. |
| **3–5** | Proof is real but generic or misplaced: adjectives instead of counts, a single trust block in the footer, claims of intention rather than mechanism, or numbers that contradict each other across the page. |
| **6–8** | Real, specific, attributed proof placed near the objections it answers. One weakness: proof visually competing with the CTA, a stale figure, or a badge whose claim is unsubstantiated. |
| **9–10** | Proof adjacent to each objection and subordinate to the CTA in contrast. Counts precise and regenerable. Security reinforced at the card field rather than in the footer. Where the honest proof set is thin, the thin set ships and the customer-proof slots are left empty rather than filled. |

**Scoring lines**

| # | Line | Class | Patterns |
|---|---|---|---|
| P1 | Proof sits where the objection fires, not in one block | structural | P-221, P-138 |
| P2 | Proof is visually subordinate to the CTA | structural | P-222 |
| P3 | Security reinforced at the card field, not in the footer | structural | P-223, P-252 |
| P4 | Seals chosen for consumer brand recognition, and the recognition figure read as the finding | structural | P-224 |
| P5 | Counts are specific and precisely odd rather than adjectival; live activity sits beside the cumulative total | data-dependent | P-225, P-226 |
| P6 | Every badge is substantiated or the claim is downgraded | data-dependent | P-227 |
| P7 | Proof numbers audited for staleness and internal contradiction | structural | P-228 |
| P8 | For disclosure products, the privacy claim sits beside the input box, in a verb the user can feel | structural | P-229, P-231 |
| P9 | Claims are mechanisms, not intentions | structural | P-230 |
| P10 | Missing credentials substituted with a named model and a specified deliverable | structural | P-232 |
| P11 | The page states plainly what the product is not | structural | P-233 |
| P12 | Substitution and superiority claims are made by a customer, not by the seller | data-dependent | P-234, P-163 |
| P13 | Press, awards and logo walls used only where the relationship matches what the wall implies | structural | P-235 |
| P14 | Where customers do not yet exist, the pre-launch proof set is used: artefact specification, lineage, time cost, unconditional refund, a published complete example, named limits | structural | P-236 |
| P15 | Nothing on the fabrication list appears anywhere on the page | structural · prohibition | P-237 |

**Negative markers** (3)

| Marker | Effect | Source |
|---|---|---|
| Fabricated proof of any kind (invented testimonials, unproducible counts, stock-photo quotes, logo walls of non-customers, homemade seals) | **caps at 2** | anti-patterns § fabricating social proof; P-237 |
| Unsubstantiated badge, award or press claim; an award with no date or issuer | −2 | P-227, P-235 |
| Stale or internally contradicting proof numbers | −2 | P-228 |

**COLD handling.** This is the section most often mis-scored. P5, P6 and P12 all require customers, and their absence on a pre-launch page is **not a deduction**. Mark them `not assessable — no data` and score the section on P1–P4 and P7–P15, which are all available at zero scale. A pre-launch page that ships the P-236 set honestly, leaves the customer-proof slots empty, and states what the product is not can score 9. The page will be visibly thinner than a competitor's, and that thinness is the correct outcome rather than a gap to fill.

---

### 7. Checkout path — /10

**Measures** the distance, in effort and in surprise, between choosing a plan and being charged.

**Bands**

| Score | Descriptor |
|---|---|
| **0–2** | The recurring charge is not disclosed in the block where the decision is made, or a nominal entry fee occupies the price slot while the real recurring number arrives in small print. Automatic, regardless of the rest. |
| **3–5** | The total appears late, an account is required with no guest path, or the form is materially longer than the eight visible fields the buyer actually sees. |
| **6–8** | All-in total shown before effort, guest checkout available, form near eight fields, checkout is a tunnel. One weakness: no decline recovery, no payment alarm, or currency and tax stated only at the payment step. |
| **9–10** | Total before effort, guest checkout impossible to miss, form cut to the informative fields, recurring line in the same block and type size as the price, decline treated as recoverable, payment path alarmed, and post-purchase screen spent on the one thing the buyer must do next. |

**Scoring lines**

| # | Line | Class | Patterns |
|---|---|---|---|
| C1 | All-in total shown before the buyer invests any effort; the total, not the rate | structural | P-238, P-239 |
| C2 | Clicks from plan choice to charge counted, and the uninformative ones deleted | structural | P-240 |
| C3 | Form cut to roughly eight visible fields, counted as a new user sees them | structural | P-241, P-242 |
| C4 | Guest checkout offered and impossible to miss; password requested afterwards | structural | P-243 |
| C5 | Checkout is a tunnel — no competing navigation | structural | P-244 |
| C6 | Coupon field removed or collapsed | structural | P-245 |
| C7 | Hosted versus embedded decided on inherited trust and maintenance burden | structural | P-246 |
| C8 | Payment methods match what the buyer's country actually uses | data-dependent | P-247 |
| C9 | Currency and tax treatment stated before the payment step | structural | P-248, P-165 |
| C10 | Declines treated as recoverable, with reason codes logged and distinguishable from renewal failures | structural | P-249, P-264, P-265 |
| C11 | Recurring amount, period and renewal behaviour in the same visual block and type size as the price, before the card fields | structural · prohibition | P-250 |
| C12 | Leaving is as short as joining; at most one interception screen with the cancel button visible | structural | P-251, P-200 |
| C13 | Payment path alarmed, with a threshold appropriate to the traffic; one real purchase after every deploy touching it | structural | P-252, P-296 |
| C14 | Payment step designed for a screen half-covered by a keyboard | structural | P-253 |
| C15 | Checkout page weight budgeted as a conversion asset | structural | P-254 |
| C16 | Post-purchase screen spent on the one next action | structural | P-255, P-272 |
| C17 | Effort spent in the order the abandonment data ranks, not the order vendors sell it | structural | P-256 |

**Negative markers** (3)

| Marker | Effect | Source |
|---|---|---|
| Recurring charge disclosed between the card fields and the button, or absent from the decision block | **caps at 2** | anti-patterns § dark patterns carry regulatory risk; P-250 |
| Forced account creation with no guest path | −2 | P-243 |
| Nominal-fee anchoring — a $1/$5 number in the price slot while the real recurring figure arrives in small print | **caps at 2** | anti-patterns § JustAnswer mechanism stack; P-250, P-238 |

**COLD handling.** C8 needs country data on real buyers. Everything else is walkable: complete the purchase yourself with a real card and count. At roughly **31 charge events a month** — about one a day, from 30 monthly subscribers plus 10 annual ones — and roughly **10 new subscriptions a month** on the fixture baseline in `experimentation.md`, none of this is testable: the published effects here run between 1% and 10%, and every one of them is far smaller than either flow can detect. Note which figure each claim uses. The 40 is a *stock* of paying customers and is never a monthly rate, which is the confusion P-295 exists to prevent. Score on mechanism, and instrument completion per step as a diagnostic only.

---

## The runnable checklist

Execute top to bottom. Ladder arithmetic first, always. An hour is enough for a three-tier page.

```
PREREQUISITE.  The Phase 6 blind spec exists and is written down. If it does not,
               stop. Scoring before the blind spec produces an audit that finds nothing.

A. LADDER ARITHMETIC                                                    (~20 min)
 1. Tabulate every rung, add-on, top-up and annual variant: price,
    allowance, per-unit rate, fence, named buyer.                       [L0]
 2. Run A1–A6 in order (value-referenced first).                        [L1–L6]
 3. Run B1–B6.                                                          [L7–L12]
 4. Run C1–C2.                                                          [L13–L14]
 5. Any FATAL? → Ladder integrity caps at 2, and each failure becomes a
    structural finding with the arithmetic shown. Continue scoring the
    other six sections, but nothing they contain outranks this.

B. THE OTHER SIX SECTIONS                                               (~25 min)
 6. Value framing        — V1–V12
 7. Tier architecture    — T1–T13
 8. Price presentation   — N1–N16
 9. Objection handling   — O1–O20
10. Trust & proof        — P1–P15
11. Checkout path        — C1–C17   (walk the real purchase; count the fields)

C. NEGATIVE SWEEP                                                       (~10 min)
12. Sweep all 23 negative markers across the page in one pass. Apply the
    two caps first (P-237 fabricated proof, P-250 undisclosed recurring
    charge), then the deductions, floored at 0.

D. SCORE AND RANK                                                       (~5 min)
13. Fill the seven-row table. Annotate any COLD section
    "scored on N of M lines". Mark every unassessable line
    "not assessable — no data" with its bracketed token. Guess nothing.
14. Rank findings per the next section. Structural findings go above
    everything regardless of impact or ease.
15. Diff the scored page against the blind spec. The diff is the
    deliverable; the score is the summary of it.
```

---

## Ranking findings

Findings are ordered by **expected impact × confidence**, never by ease of fix. The four classes come from `output-templates.md`:

- **structural** — a failure of the Phase 4.5 ladder-arithmetic gate
- **actively harmful** — the element is costing conversions or trust right now
- **absent** — the element is missing
- **present but weak** — the element exists and underperforms

**The pinning rule.** Every structural finding is pinned above every other finding, in its own `## Structural findings` section, with the arithmetic shown. Impact and confidence are not computed for them, because a dominated ladder is not a probabilistic claim. Within the structural block, order FATAL before STRUCTURAL before DIAGNOSTIC, which is the severity vocabulary layer 03 already defines.

**Confidence** is read off the underlying pattern's `evidence` rating, not invented: `strong` → high, `medium` → medium, `anecdote` or `no quantified effect published` → low. A recommendation resting on a pattern with no published effect is still worth making when its mechanism is a legal or arithmetic fact (P-237, P-250, P-201), and the confidence label should say so rather than borrowing credibility the pattern does not have.

**Impact** is estimated from the section's weight class, the finding's position in the buyer's path, and the share of buyers who meet the condition. Discount your own estimate before ranking — roughly 1 idea in 3 works, and published lifts are the right tail of a distribution whose body is null (P-289, P-290).

**Tie-breaking**, applied in order:

1. Class: actively harmful, then absent, then present-but-weak. A harmful element is removed before a missing one is added, because removal is certain and addition is a bet.
2. Position in the buyer's path: earlier beats later. A page the buyer leaves before reaching cannot convert on anything below that point.
3. Evidence rating of the underlying pattern: higher beats lower.
4. Counter-metric exposure: a recommendation with a defined counter-metric outranks one without, because the second cannot be read as a win or a loss (P-291).

Never rank by effort. Effort belongs in the `page.md` change list as an S/M/L column, where it informs sequencing without contaminating the ranking.

---

## Calibration examples

Both pages are hypothetical variants of **Ledgerly**, the shared fictional product, taken at its **pre-correction ladder**: free 5 receipts/month · Solo $9 for 100 · Books $19 for 400 · top-up **$4 for 50**. That $4 pack is the defect these two examples exist to demonstrate, which is why it appears here and nowhere else. The canonical Ledgerly in `patterns/_TEMPLATE.md` carries the repegged **$5 for 50**, and Example B is the page that arrives at it. Regime: COLD (40 paying customers, ~31 charge events a month, no instrumentation at the point of sale, no WTP data, no COGS note).

### Example A — the weak page: **16/70**

The incumbent as it actually ships, with the page elements a support inbox and a growth blog produced.

| Section | Weight | Score | Working |
|---|---|---|---|
| Ladder integrity | Overriding | **2**/10 | B3 and B4 both FAIL on one root cause. Top-up is $4/50 = **$0.0800/receipt** against Solo's $9/100 = **$0.0900**. First inequality fails: $0.0800 < $0.0900. Consequence: **Free (5) + two packs (100) = 105 receipts for $8.00** against Solo's $9.00 for 100 — the entry paid rung is strictly dominated by the free rung plus top-ups. B2 also flags: with two paid rungs there is one step, d = 1 − 0.0475/0.0900 = **47.2%**, outside the 20–40% band (P-051, P-096) for a unit that carries no quality fence — a receipt processed on Books is the same receipt processed on Solo. B6 flags at 19/9 = **2.11×**. A1 passes thinly ($9 + 6 × $4 = $33 vs $19). A3, A6, B1, B5 pass. A2, A4, A5, C1 `not assessable — no data`. One FATAL caps the section at 2; scored on 10 of 14 lines. |
| Value framing | High | **5**/10 | Metric is receipts, a countable noun the buyer already uses (V4 ✓), legible in one pass (V5 ✓), tracks delivered value (V3 ✓). But the headline sells the software rather than the outcome, the denominator questions are unanswered next to the price (V-line failures against P-145), and quantity-versus-capability was never declared while the ladder fences on both (V2 ✗). Band 3–5, top of band. |
| Tier architecture | High | **4**/10 | Base 6: fences are nameable (A3 passed), three rungs each with a buyer, cards list a delta. Negative marker: **"Most popular" on Solo and "Best value" on Books** — two badges in one grid, −2 (P-127). Also T-line failure at P-050: the top-up is purchasable on the free tier, which is what creates the B3 arbitrage. 6 − 2 = 4. |
| Price presentation | Medium | **3**/10 | Base 5: round endings, annual toggle present, prices published. Negative marker: Solo's card shows **~~$19~~ $9** — a "was" price Ledgerly has never charged, −3 (P-129). No currency stamp and no tax posture beside the price (N13 ✗). 5 − 3 = 2, raised to 3 because the annual figure is denominated in monthly units correctly (P-150 ✓). |
| Objection handling | Medium | **1**/10 | Base 5: six FAQ questions, roughly ordered by blocking power. Negative markers: a **"48 hours left on this price"** banner that resets on refresh, −3 (P-205, P-210); cancellation available only by emailing support, −3 (P-200, P-251). Floored at 0, raised to 1 because the FAQ's overage question sits second, which is correct for a metered product (P-137 ✓). |
| Trust & proof | Medium | **0**/10 | **"Trusted by hundreds of freelancers"** at 40 paying customers is a count no query produces. P-237 caps the section at 2; the remaining lines then take it lower — the proof band also carries three unattributed quotes and a wall of four logos of companies that are not customers. 0. |
| Checkout path | Medium | **1**/10 | The plan card shows "$9/mo"; the recurring line appears between the card fields and the button. That is the JustAnswer structure at smaller numbers, and the smaller numbers are not a defence — the complaint is about disclosure. P-250 caps at 2. Account creation is required with no guest path, −2 (P-243). Floored at 0, raised to 1 because the all-in total does appear before the card fields (P-238 partial). |
| **Total** | | **16**/70 | |

**Report order.** The structural finding leads: the entry rung is dominated by the free rung plus two top-up packs, with the arithmetic shown. The fabricated count and the undisclosed recurring charge follow as actively harmful. The badge, the anchor and the cancellation path follow those. The FAQ improvements do not appear in the top five, and would have led the report under any ranking by ease.

### Example B — the strong page: **60/70**

The same product after the ladder was fixed and the page rebuilt from the blind spec.

The two documented defects are repaired first, and the repair of one does not repair the other:

- **Top-up repegged to $5 for 50 = $0.100/receipt.** Required by B4: 1.1 × $0.0900 = **$0.099**. $0.100 clears it, a **+11% premium over Solo**. Free + 2 packs now costs **$10.00** against Solo's $9.00, so the dominance disappears. Against the marginal floor at the new allowance, (19 − 9)/(300 − 100) = **$0.0500**, and $0.100 clears that too.
- **Books trimmed to 300 receipts at $19 = $0.0633/receipt.** The step discount becomes d = 1 − 0.0633/0.0900 = **29.6%**, inside the 20–40% band. The alternative considered and rejected: hold 400 receipts and raise Books to $24 (**$0.0600**, d = **33.3%**, also in band) — rejected because it moves spacing from 2.11× to **2.67×**, which flags B6, and B6 can only be settled with WTP data Ledgerly does not have. Trimming the allowance is the move that does not require a measurement the product cannot make.
- **The crossover the page can now state honestly:** Solo plus top-ups reaches $19 at 200 receipts ($9 + 2 × $5), so above 200 receipts Books is strictly the better buy, and the card says so.
- **Annual holds:** Solo $90 ($7.50/mo), Books $190 ($15.83/mo). $15.83 > $9.00 ✓. $90/1,200 = $0.0750 ≥ $190/3,600 = $0.0528 ✓. Top-up $0.100 ≥ 1.1 × $0.0750 = $0.0825 ✓. Discount 16.7% against the bound 1 − 9/19 = **52.6%** ✓.

| Section | Weight | Score | Working |
|---|---|---|---|
| Ladder integrity | Overriding | **9**/10 | All ten runnable checks pass with headroom. B6 still flags at 2.11× and is carried as a diagnostic note rather than acted on. A2, A4 (SII half), A5 and C1 bracketed with their tokens. Not 10: four of fourteen checks could not run. Scored on 10 of 14 lines — COLD. |
| Value framing | High | **9**/10 | Receipts on every card, translated into the buyer's frame ("about a shoebox a month"), quantity fence declared, variance disclosed ("a receipt is a receipt — a 40-page invoice still counts as one"), no minted unit anywhere. V12 `not assessable — no data`. |
| Tier architecture | High | **9**/10 | One badge, on Solo, labelled "Recommended" rather than "Most popular" because modality cannot be verified at 40 customers (P-227 handled correctly in COLD). Free gated at 5 receipts — a limit hit by succeeding, not a feature needed to start (P-058). Top-up made unpurchasable on the free tier (P-050). T6 and T13 `not assessable`. |
| Price presentation | Medium | **8**/10 | Currency stamped, tax posture stated, saving expressed twice, renewal price inside the disclosure. Docked 2 for a present-but-weak line: the annual discount is the 16.7% market default rather than a figure derived from Ledgerly's own churn (P-093). That is a structural choice made without the data, not missing data, so it scores. |
| Objection handling | Medium | **8**/10 | One mechanic (free tier, no trial), both fears answered under the button, the guarantee named for what it promises and fenced on consumption (P-196), cancel path sold on the page. Docked 2: the spec does not record that click-to-cancel status was verified before the cancellation copy shipped (O16, P-201) — a blocking check, and its absence is scoreable because it is an action, not data. |
| Trust & proof | Medium | **8**/10 | The P-236 set: export specification, Schedule C lineage, time cost, unconditional 30-day refund, a complete published example export, and a stated limit ("this will not do your bookkeeping; it turns photos into rows"). One real testimonial. Customer-proof slots left empty. Docked 2 for a present-but-weak placement: the proof sits in one band below the table rather than adjacent to each objection (P-221). P5, P6, P12 `not assessable — no data`. |
| Checkout path | Medium | **9**/10 | "$9.00 today, and $9.00 every month until you cancel" in the same block and type size as the price, before the card fields. Guest checkout, seven visible fields, tunnel layout, decline screen that keeps the entered data, a 48-hour zero-payment alarm sized to **~31 charge events a month, about one a day**. At that rate two silent days sits well outside normal variation, which is what makes 48 hours the right threshold — a 10-a-month reading would have argued for a week and let a broken payment path run for six days. Docked 1: payment methods were not checked against buyer countries (C8, `not assessable — no data` would have been wrong here, since the check is runnable from the existing 40 customers). |
| **Total** | | **60**/70 | |

### The dangerous middle — why band 0–2 on Ladder integrity is not negotiable

Take Example B and revert one number: the top-up back to $4 for 50. Nothing else on the page changes. Six sections still score 9, 9, 8, 8, 8, 9.

An auditor scoring Ladder integrity as a normal section would reason that ten checks ran, nine passed, and one failed, and would write **7**. The table would total **58/70** and the report would open with the annual-discount finding. That report is wrong. The correct score is **1** — one FATAL — for a total of **52/70**, and the correct report opens with a single structural finding: *Free plus two top-up packs delivers 105 receipts for $8.00 against Solo's 100 for $9.00, so the entry paid rung is strictly dominated and every price-sensitive buyer has a cheaper path through the catalogue.*

Both totals are respectable-looking numbers. Only one of them tells the owner that their entry rung does not sell. **A page at 52/70 with a FATAL is in worse shape than a page at 40/70 without one**, and the rubric encodes that by capping rather than by weighting, because a weight can be out-argued and a cap cannot.

---

## Gaps this rubric exposes

Every scoring line above cites at least one pattern. The following are things an auditor will want to score and **cannot**, because the library has no pattern behind them. They are listed as library gaps, not as rubric omissions.

1. **No effect size exists for badge presence, so T5 is mechanism-only.** P-127 and P-128 rest on a prevalence census and one 2016 lab study whose total fixation time did not differ significantly. The circulating "30–40% badge lift" is in the folklore register as untraceable. The rubric scores badge *singularity* and *honesty*, which are arguable from mechanism, and does not score badge *presence*, which is not.
2. **FAQ presence cannot be scored, only FAQ ordering and voice.** P-137 states plainly that no credible evidence for an effect of FAQ presence exists, and the "15–25% lower exit rates" figure is fabricated. O13 therefore scores order and register only.
3. **Page performance has no pattern outside checkout.** P-254 budgets the checkout page's weight; nothing covers the pricing page's load time, despite it sitting upstream of everything scored here. A line for it would have no ID behind it, so there is none.
4. **Accessibility of the price block is unscoreable.** No pattern in any of the twelve layers addresses contrast, type size, screen-reader order or keyboard navigation of a tier grid. P-253 covers the payment step on a keyboard-obscured screen and stops there. This is the largest single gap in the library relative to what a real audit is asked about.
5. **In-app paywalls inherit page-anatomy lines that P-122 explicitly says do not apply there.** P-122 names the paywall-inside-an-app case as a failure condition for the conventional section order, but no layer supplies the replacement order. Sections 3 and 5 are therefore weaker instruments for a mobile paywall than for a web pricing page, and an auditor should say so rather than scoring confidently.
6. **The relative weight of the seven sections has no evidential basis.** Only Ladder integrity's precedence is derivable — from the deductive character of a dominance argument, which layer 03 states about itself. The remaining six orderings are judgement, declared as judgement in the weight table, and they move no arithmetic because the total is fixed at 70.
7. **The rubric scores the incumbent; it does not score the diff.** The comparison against the blind spec is procedural, defined in SKILL.md Phase 1 and 6.5, and no pattern governs how a diff is presented. If diff quality needs scoring, that is a new pattern, not a new rubric line.

**Related:** `patterns/03-tier-architecture.md` (the gate this rubric executes) · `anti-patterns.md` (every negative marker) · `output-templates.md` (the table this produces) · `benchmarks.md` (cohort labels for any number quoted in a finding)
