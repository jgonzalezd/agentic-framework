# Derivation methods — how to produce a price number

**Loaded at:** Phase 3, alongside `patterns/01-value-metric.md`.

This file is operational. Everything in it is a procedure you can run without reading any source material, and the two things a founder can genuinely run today — the qualitative willingness-to-pay interview and the breakeven sales change — are reproduced in full, verbatim where the exact wording is load-bearing.

Three rules govern its use.

1. **Pick the method the product can actually support.** A pre-launch product with no list runs interviews, not a survey it cannot field. Selecting Van Westendorp because it produces a chart is the most common way this phase fails.
2. **Every method here returns a band, not a number.** The number comes from choosing a position inside the band, and founders systematically choose the bottom (see `patterns/04-price-points.md`, which carries the pattern on taking the upper third of a derived band).
3. **Stated preference is not behaviour.** Every survey method in this file measures what people say. Only the commitment ask at the end of the interview, a pre-order, and actual sales measure what people do. Weight accordingly.

Worked examples use the shared fictional product from `patterns/_TEMPLATE.md`: **Ledgerly**, a web app that turns a photo of a receipt into a categorised expense entry — free 5 receipts/month · Solo $9/mo for 100 · Books $19/mo for 400 · top-up $5 for 50 · ~2,000 monthly visitors · ~40 paying customers. Examples labelled *illustrative* use synthetic input data; the arithmetic in them is real and reproducible.

---

## Method selection

| Method | What it needs | Cost | Time | Sample needed | Fits when | Do not use when |
|---|---|---|---|---|---|---|
| **Qualitative WTP interview** | Access to ~10–25 people who have the problem | ~$0 (your time) + incentives | 1–3 weeks | 10–25 conversations; **20 in a week** is the recommended target | Pre-launch, no traffic, no list. **The default for a zero-traffic product.** | You need a defensible point estimate for a board, an investor, or a price-discrimination question |
| **Comparables triangulation** | One afternoon and a spreadsheet | $0 | 1 day | n/a | Always. Run it first — it costs nothing and bounds everything else | As your *only* method; it inherits your competitors' mistakes |
| **EVE / economic value estimation** | The buyer's own economics, and a named next-best alternative | $0 | 1–3 days | n/a | B2B, or any buyer who can state a dollar outcome. Gives you a **ceiling** and the sentences for the page | As a price — it is explicitly a ceiling, with no capture rate attached |
| **Breakeven sales change** | Your contribution margin and a proposed change | $0 | 10 minutes | n/a | **Every price move, up or down, always.** Converts elasticity into a falsifiable threshold | As a forecast. It says what must be true, not what will happen |
| **Cost-plus floor** | A unit-economics model | $0 | 1 day | n/a | Any product with real COGS — inference, hardware, human delivery | As a *price*. It is a floor, never a target |
| **Van Westendorp PSM** | A panel or list you can survey | $0 with your own list; panel cost otherwise | 1–2 weeks | **≥200 total, ≥100 per segment** | You have a list ≥400 and want a *range*, not a point | Genuinely novel category with no reference price; when you need revenue optimisation; any sample under 200 |
| **Gabor-Granger** | The same, plus a credible product description | The same | 1–2 weeks | ≥200 total, ≥100 per segment | You already have a candidate price band and want the revenue-maximising rung inside it | You have no idea of the band — the ladder anchors respondents |
| **Choice-based conjoint** | Design software, a real attribute set | $10k–$25k full-service; low hundreds DIY | 3–8 weeks | **300 minimum**, 200 per subgroup; `n ≥ 500c/(t·a)` | You are choosing packaging *and* price jointly and have real budget | Solo founder pre-launch — you cannot recruit 300 qualified respondents |
| **MaxDiff** | The same tooling | $5k–$10k full-service; cheaper DIY | 2–5 weeks | **N=300** total, N=200 per subgroup | Ranking which features justify a higher tier | You need an actual price. **MaxDiff ranks; it does not price** |
| **Live A/B price test** | Traffic — thousands of sessions per arm | $0 tooling | 4–12 weeks | Thousands of sessions per arm | Established product with real traffic | Pre-launch or low traffic. Also carries legal and reputational exposure |
| **Sequential / cohort / geo test** | A launch you can stage | $0 | Ongoing | n/a | Pre-launch and low-traffic products | You need a clean causal read — confounds are unavoidable |

Cost and sample figures: Conjointly FAQ on sample size, Sawtooth Software sample-size rules of thumb, and agency list prices via a Drive Research / Quali-Fi comparison (all accessed 2026-08-12). Agency prices are list, not DIY.

---

## The qualitative WTP interview

**This is the method that fits a product with no users, no traffic and no list — and for most products reading this skill it is the only method that applies at all.** It is also the method most likely to be run badly. The failure mode is not that people lie. It is that you ask hypothetical questions and then treat the answers as data.

### The governing constraints

From *The Mom Test* (Rob Fitzpatrick), three rules:

1. **Focus on their life, not your idea.** Ask about their problems, cares, constraints and goals.
2. **Explore past behaviour over future opinions.** Never ask "would you buy a product which did X?" — Fitzpatrick warns against it specifically, because it asks for an opinion on a theoretical scenario.
3. **Validate through concrete commitments**, in one of three currencies: **time** (a scheduled follow-up, a trial), **reputation risk** (an introduction to a peer, a testimonial), or **money** (a letter of intent, a pre-order, a deposit).

Rule 3 is what makes this a pricing method rather than a chat. Everything before the ask is context; **the ask is the measurement.**

### Structural design

- **Length:** 30–45 minutes. `[unsourced — no source prescribes a duration; this is the practical range that fits the sequence below]`
- **Count:** **20 conversations in a week** is the recommended target for a founder with 50–1,000 users and no research background (Maren, accessed 2026-08-12). For a true pre-launch founder with no users, 10–15 is the realistic floor. **The popular "5 pricing interviews" framing is folklore** — no primary source for the number five was located. Five is enough to *falsify* a price hypothesis and not enough to *set* one.
- **Sequence law:** the order matters critically — progress from past behaviour, through decision moments, before touching any hypothetical territory. Build rapport before pricing questions.
- **Do not name your price until Block 8.** Every number you say before then becomes their anchor.
- **Follow roughly 25% of answers with "why?"** This is the single most repeated operational instruction across the willingness-to-pay literature, and it is what separates a number from a number with a reason attached.
- **Record it.** You are going to need the exact verbs they used to describe the problem; those become your pricing-page copy.

### The question sequence — verbatim and in order

Use as-is. Replace `[the problem]` with a plain-language description of the job (e.g. "keeping on top of business receipts"), and `[your product]` with your product name. Bracketed *italic* text is instruction to you, not to be read aloud.

**Block 0 — Frame** *(say this, verbatim)*

> "Thanks for doing this. I'm not going to pitch you anything. I'm trying to understand how people
> actually handle [the problem] today, and I'd rather hear that things are fine than have you be
> polite with me. If at any point this isn't relevant to you, say so and we'll stop early."

*Why: this pre-authorises the negative answer, which is the answer you need and the one social pressure suppresses.*

**Block 1 — Current behaviour**

> 1. "Walk me through how you currently handle [the problem]."
> 2. "What prompted you to look for a solution in this area?"
> 3. "What's most painful about the way you do it now?"
> 4. "How do you know whether it worked?"

**Block 2 — Spend history**

> 5. "What have you tried before this?"
> 6. "What did you pay for those, if anything?"
> 7. "What are you currently paying — whether to a tool, a contractor, or in your own time — to keep [the problem] under control?"
> 8. "What was the approximate investment in your current solution?"

*This block is the single highest-value part of the interview. It replaces "what would you pay" with "what have you paid", which is a fact rather than a forecast. Interpretation rule: collect the current spending figures and let the **median become your pricing floor**.*

**Block 3 — The decision moment**

> 9. "Tell me about the last time [the problem] became urgent enough that you actually did something about it."
> 10. "What was happening that week that pushed you to act, instead of letting it slide?"
> 11. "What did you actually try first? And then?"

*Interpretation rule: cluster the "what was happening" answers into 3–4 categories; each becomes a marketing message and a packaging signal.*

**Block 4 — Money and authority**

> 12. "When you decided to pay for [the alternative they bought], whose budget did it come from? Was there anyone you had to convince?"
> 13. "Do you have a budget allocated for this type of thing?"
> 14. "How long did the decision take, from first noticing the problem to handing over a card?"
> 15. "Was there anything that almost stopped you from buying?"
> 16. "How do you normally prefer to pay for something like this — monthly, annually, or one-off?"

**Block 5 — Value quantification**

> 17. "If this were completely solved, what would be different for you?"
> 18. "How would you put a number on what solving [the specific pain point] is worth?"
> 19. "What would success look like in the first three months? In the first year?"
> 20. "If it delivered [the specific outcome they just named], would that justify paying a premium over what you use now?"

*Q18 is the input to the EVE and value-heuristic sections below. Most consumers cannot answer it; most B2B buyers can. If they can't, do not push — the answer to "what is it worth" for an emotional job is "what comparable emotional purchases cost", which you get from Block 7.*

**Block 6 — Price reaction** *(the Van Westendorp questions, conversationally)*

Ask these in this order and **let silence do the work**. Do not fill the pause after each one.

> 21. "If a tool did exactly that — what would you expect it to cost?"
> 22. "At what price would this start to feel expensive to you — not out of the question, but you'd have to think about it?"
> 23. "At what price would it be so expensive you wouldn't consider it at all?"
> 24. "And going the other way — at what price would it be so cheap you'd assume something was wrong with it?"
> 25. "At what price would it feel like an obvious bargain?"

*Q22–Q25 are the four Van Westendorp questions in conversational form. At n=15 you cannot plot curves, but you can take the **median of each of the four** and read the same four boundaries by hand. That is a legitimate, if coarse, use of the instrument.*

*A common alternative to Q21–Q23 is the three-threshold price ladder: "What's an **acceptable** price for this?" → "What's an **expensive** price?" → "What's a **prohibitively expensive** price?" The gloss: acceptable is where the customer is comfortable with no friction; expensive is one they would still pay but don't prefer, and is **typically closest to the actual value**; prohibitive is the cliff where demand collapses. Your candidate sits between acceptable and expensive, and never above the prohibitive cluster.*

**Block 6b — The probe**

Immediately after **any** number they give, ask:

> 26. "What are you comparing that to?"

*This is the load-bearing follow-up: it reveals anchoring rather than true willingness-to-pay. If the answer is "I dunno, it just felt right," discount the number heavily. If the answer is "well, my bookkeeper charges $60 an hour," you have just been handed your comparables set.*

**Block 7 — Substitute mapping**

> 27. "What else did you consider before you settled on what you're doing now?"
> 28. "If [your product] didn't exist and never would, what would you do instead?"
> 29. "What would it take for you to just keep doing nothing about this?"

*Q28 and Q29 surface the status quo and the non-obvious substitutes. Competing alternatives include direct competitors, substitutes in adjacent categories, potential entrants, and — always — the status quo, or do-nothing option. **Do-nothing is priced at $0 and it wins most deals**; you must know why it lost the ones it lost.*

**Block 8 — The commitment ask** *(this is the measurement)*

Now, and only now, name a specific price. Say it as a fact, not a question, and do not soften it.

> 30. "I'm building this. It's going to be $X per month. Can I put you down as one of the first ten people on it — I'd charge your card on launch day, and you can cancel any time before then."

Then, depending on the answer:

> 31. *(If yes)* "Great — what made that an easy yes?"
> 32. *(If hesitation)* "What would have to be different for that to be a yes?"
> 33. *(If no)* "Totally fine. Is it the price, or the thing itself?"
> 34. *(If "it's the price")* "What would be the number where you'd stop thinking about it?"

*If you cannot bring yourself to charge on launch day, the weaker but still valid commitment ladder runs, in descending order of signal: (a) card on file or deposit, (b) signed letter of intent, (c) an introduction to two peers with the same problem, (d) a scheduled 30-minute follow-up in their calendar. These are the three currencies — money, reputation, time. **"Sounds great, send me the link when it's live" is not a commitment and must be recorded as a no.***

**Block 9 — Close**

> 35. "Is there anything I should have asked you that I didn't?"
> 36. "Who else do you know who deals with this? Would you introduce me?"

### The intent haircut

If at any point you ask a 1–5 purchase-probability question — "on a scale of 1 to 5, how likely are you to buy at $X?", where 1 is not at all interested and 5 is would buy for certain — **discount the stated scores before you believe them.** Stated intent systematically exceeds behaviour, and a fixed haircut turns an unusable vanity signal into a usable demand curve:

| Stated score | Real purchase likelihood | Use |
|---|---|---|
| **5** | ~**30–50%** *(one set of notes on the same source records ~30%)* | 0.4 |
| **4** | ~**10–20%** | 0.15 |
| **3 and below** | **zero** | 0 |

Source: Ramanujam's own haircuts, reported across secondary summaries of *Monetizing Innovation* (accessed 2026-08-12). Multiply by respondents to get an expected take rate per price, then pick the price that maximises `rate × price`, and sanity-check against an actual paid test before committing.

**Note the disputed direction of the error.** Gao, Huang & Jung (2023), reviewed across 10 experiments, find hypothetical settings *inflate* stated valuations — which would mean the ladder overstates WTP for novel products. The same review finds multiple-price-list and Gabor-Granger formats may *understate* WTP by roughly 10–15% — which would mean they cause underpricing. Both errors are real, they push in opposite directions, and the mitigation is the same: haircut hard, mix methods, and validate with a paid pilot.

### How to turn 15 interviews into one number

Do this on paper, in this order:

1. **Floor** = median of Block 2 answers — what they already spend on the job.
2. **Ceiling** = median of Q23 ("so expensive you wouldn't consider it").
3. **Reference** = median of Q21 ("what would you expect it to cost").
4. **Bargain line** = median of Q25.
5. Your candidate band is roughly **[max(floor, median Q25) … median Q22]** — from the bargain line up to the point where they'd have to think about it. **Take the upper third of that band as your launch price.** Founders systematically pick the bottom.
6. **Overwrite all of the above with Block 8.** If four people out of fifteen put a card down at $X, $X is defensible regardless of what the stated numbers said. **If zero out of fifteen put a card down at any price, you do not have a pricing problem.**

### The politeness-bias checklist

Discount an interview's numeric answers if any of these are true:

- They gave a number without a comparison when you asked Q26.
- They have never paid for anything in this category (Block 2 all zeros) — their number is imagination.
- They said "I'd definitely use that" *before* you named a price. Enthusiasm before price is not information.
- They are a friend, a colleague, or someone who wants you to succeed. Their number runs high and their commitment runs low.
- They answered Q23 (too expensive) with a number less than 2× their Q25 (bargain) answer — the spread is implausibly tight, suggesting they anchored on one figure and worked outward.

### Worked example — Ledgerly

Ledgerly runs 15 interviews with freelancers who file their own quarterly expenses. Illustrative medians: Block 2 spend on the job (a bundled receipt feature, an occasional bookkeeper hour, a quarterly Sunday) = **$8/month**; Q25 bargain = **$10**; Q21 expected = **$15**; Q22 "have to think about it" = **$22**; Q23 prohibitive = **$40**.

Band = `[max($8, $10) … $22]` = **$10–$22**. Upper third = **$18–$22**. Solo at $9 sits *below the bargain line* — not a cautious price but a price outside the band on the wrong side. If 4 of 15 then put a card down at $14 and 1 of 15 at $19, the defensible launch price is $14 with $19 as the next rung, and Block 8 overrides the stated band in both directions. `[Ledgerly interview data — does not exist. These medians are illustrative; run the sequence before treating any of it as a finding.]`

---

## Van Westendorp Price Sensitivity Meter

Developed by Peter van Westendorp (1976). It maps a **range of acceptable prices**, not a demand curve. Everything it produces is a bound.

### The four questions, verbatim

These are the canonical wordings. Substitute your product name for "the product"; **keep the clause structure intact** — the method depends on respondents distinguishing "expensive" from "too expensive".

> 1. **(Too cheap)** "At what price would you consider the product to be priced so low that you would feel the quality couldn't be very good?"
> 2. **(Cheap / bargain)** "At what price would you consider the product to be a bargain—a great buy for the money?"
> 3. **(Expensive / high side)** "At what price would you consider the product starting to get expensive, so that it is not out of the question, but you would have to give some thought to buying it?"
> 4. **(Too expensive)** "At what price would you consider the product to be so expensive that you would not consider buying it?"

Source: https://en.wikipedia.org/wiki/Van_Westendorp%27s_Price_Sensitivity_Meter (accessed 2026-08-12)

An alternative, slightly tighter phrasing set — useful if respondents stumble on the long clauses:

> - **Too cheap:** "The price at which the product is so cheap you would have doubts about its quality"
> - **Cheap:** "The price at which the product is inexpensive yet you have no doubts about its quality"
> - **Expensive:** "The price at which you begin to feel the product is expensive but still worth buying"
> - **Too expensive:** "The price at which the product is too expensive and not worth buying"

Source: https://wiki.q-researchsoftware.com/wiki/Marketing_-_Price_Sensitivity_Meter (accessed 2026-08-12)

### Administration rules that matter

- Ask in the order **too cheap → cheap → expensive → too expensive**, or the exact reverse, but **never scrambled** — respondents need the ladder to stay coherent.
- Use an **open numeric box**, never a dropdown. A dropdown anchors.
- Show the product description **once**, before Q1, and keep it visible throughout.
- **Reject respondents whose answers are not monotonically increasing** (too cheap ≤ cheap ≤ expensive ≤ too expensive). This is the standard data-cleaning step. `[unsourced — the typical rejection rate; nobody publishes what fraction of respondents this removes]`

### Plotting procedure

1. Collect four numbers per respondent.
2. Drop non-monotonic respondents.
3. Build a price grid spanning the full observed range.
4. At each price *p* on the grid compute four percentages. **Two curves are cumulated upward and two downward** — two of the four cumulative frequencies must be inverted for four intersections to exist at all:
   - **Too cheap (TC)** — % of respondents whose "too cheap" answer is **≥ p**. Decreasing in p.
   - **Cheap (C)** — % whose "cheap" answer is **≥ p**. Decreasing in p.
   - **Expensive (E)** — % whose "expensive" answer is **≤ p**. Increasing in p.
   - **Too expensive (TE)** — % whose "too expensive" answer is **≤ p**. Increasing in p.
5. Plot all four against price and read the four crossings.

### Reading all four intersection points

| Point | Crossing | Meaning |
|---|---|---|
| **PMC** — point of marginal cheapness | TC × E | Lower bound of the acceptable range. Below this, more people doubt the quality than find it expensive |
| **PME** — point of marginal expensiveness | C × TE | Upper bound. Above this, more people refuse outright than see a bargain |
| **IPP** — indifference price point | C × E | "The price at which an equal number of respondents rate the price point as either 'cheap' or 'expensive'." Read it as the market's **reference price** — often close to the incumbent's price or the median WTP |
| **OPP** — optimal price point | TC × TE | The point where "an equal number of respondents describe the price as exceeding either their upper or lower limits" |
| **RAP** — range of acceptable prices | PMC → PME | The band inside which you may price without triggering mass rejection |

**The single most common misreading: OPP is not "the optimal price" in any economic sense.** It minimises the count of people who reject on price in either direction. It says nothing about revenue or profit, and it systematically sits below the revenue-maximising price because it weights the too-cheap complaint equally with the too-expensive one. To get revenue you need the Newton-Miller-Smith extension below, or Gabor-Granger.

**Contested — get this right.** Wikipedia and Conjointly agree: **PMC = TC × E** and **PME = C × TE**. At least one published design guide states PMC = TC × C and PME = E × TE, which cannot produce the classic four-crossing figure and appears to be an error. Use the Wikipedia/Conjointly mapping; the wrong one reports a materially different acceptable range.

### Worked example — *illustrative*

20 respondents, monthly subscription in USD, synthetic but deliberately heterogeneous. Curves computed exactly as specified above.

| Price | Too cheap % | Cheap % | Expensive % | Too expensive % |
|---:|---:|---:|---:|---:|
| $5 | 70 | 100 | 0 | 0 |
| $10 | 35 | 75 | 0 | 0 |
| $14 | 25 | 55 | 10 | 0 |
| $16 | 20 | 45 | 20 | 0 |
| $18 | 15 | 40 | 25 | 0 |
| $20 | 10 | 35 | 35 | 5 |
| $22 | 5 | 30 | 40 | 10 |
| $25 | 5 | 25 | 50 | 20 |
| $28 | 0 | 20 | 60 | 25 |
| $30 | 0 | 15 | 65 | 35 |
| $35 | 0 | 10 | 75 | 45 |
| $40 | 0 | 5 | 85 | 55 |
| $50 | 0 | 0 | 95 | 75 |

Crossings, by linear interpolation between grid points:

- **PMC** (TC × E) ≈ **$16.00**. Both curves read 20% at $16, so this crossing sits exactly on a grid point.
- **IPP** (C × E) ≈ **$20.00**. Both curves read 35% at $20, so this one is also on a grid point.
- **OPP** (TC × TE) ≈ **$21.00**. Between $20 and $22 the TC curve falls 10 → 5 while TE rises 5 → 10, so the five-point gap at $20 closes at five points per dollar and the two curves meet one dollar along, at 7.5% each.
- **PME** (C × TE) ≈ **$26.50**. Between $25 and $28 the C curve falls 25 → 20 while TE rises 20 → 25, so the five-point gap at $25 closes at 3.33 points per dollar and the two curves meet a dollar and a half along, at 22.5% each.
- **Range of acceptable prices: $16.00 – $26.50**

How to act on it: the reference price is ~$20 and the rejection-minimising price is ~$21. If your objective is revenue rather than adoption, price **toward PME** ($23–$26) and accept losing the bottom of the range — in this shape the "cheap" curve still reads 23–28% across that span, meaning roughly a quarter of the market calls it a bargain even at the top of the band. **Pricing at OPP is the timid choice, and it is the one most founders make.**

### Newton-Miller-Smith extension — how to get revenue out of a PSM

After the four price questions, ask two purchase-intent follow-ups, piped with the respondent's own answers:

> - "At [their *cheap* price], how likely are you to purchase the product?"
> - "At [their *expensive* price], how likely are you to purchase the product?"

Capture on a 5- or 7-point likelihood scale, convert scale points to purchase probabilities in [0,1], interpolate the two anchors across the acceptable range to produce a **trial curve**, and multiply by price to produce a **revenue curve**. This converts the PSM from an attitude instrument into a demand estimate at the cost of two extra survey items — **the single most valuable upgrade available to the method.** Read the revenue peak, not OPP.

### Sample size

| Guidance | Number | Source |
|---|---|---|
| Minimum total / per segment | **≥200 total, ≥100 per segment** | Conjointly FAQ (accessed 2026-08-12) |
| Minimum per segment (academic) | ≥200 per segment | Lipovetsky, Magnan & Zanetti-Polzi (2011), **cited secondarily; paper not read** |
| Practical B2C mass market | 300–500 | Kicue design guide (accessed 2026-08-12) |
| Practical B2B niche | ~100 | Kicue design guide |
| Stable / ideal / segmentable | 200 min, 250–300 ideal, 500+ to segment | Saucery, via search snippet |

**Operational read: if you cannot reach 200 qualified respondents, do not run a PSM.** Run interviews instead. A PSM at n=40 produces four intersections that are essentially noise — and the four-point output *looks* authoritative in a way that noise should not.

### The method's criticisms

These are not soft, and they come from inside market research:

1. **No theoretical foundation.** The output leaves users with "a nebulous sense of a price range".
2. **It invites lowballing.** Its reliance on direct questions about price makes the pricing intent transparent, "which usually invites price lowballing" — recommendations come in below what the market would actually bear.
3. **It ignores competitive context.** "Price/value perceptions are always relative to an internal point of reference," and the PSM never surfaces that reference.
4. **No predictive validity.** It "has no history of predictive success" and "does not allow us to optimize revenue, profits, or net present value".
5. **It is worst exactly where it is most used — new products.** Buyers of an unfamiliar category have no reference price to anchor on.

Added by Lipovetsky et al. via secondary citation: stated sensitivity diverges from actual purchase behaviour; concept-presentation quality drives response scatter; competitor-price awareness anchors answers; and the method yields a range but no elasticity.

Source: https://www.relevantinsights.com/articles/van-westendorp-price-sensitivity-meter/ (accessed 2026-08-12)

**Net: treat PSM output as a sanity band, not a decision.** Its honest job is to tell you that $8 is too low and $60 is too high. It will not tell you whether $19 or $24 is right.

---

## Gabor-Granger

Developed in the 1960s by André Gabor and Clive Granger. Unlike the PSM it produces an actual demand curve and therefore a revenue-maximising price.

### Procedure

1. **Set up 5 price points.** (In practice use 5–7 rungs spanning roughly 0.4× to 2.5× your working hypothesis.)
2. Show the product description, then present **a randomly selected price** from the ladder with a **5-point purchase-intent question** — the standard "Definitely would buy / Probably would buy / Might or might not / Probably would not / Definitely would not".
3. **Ladder logic:**
   - Top-2 box answer ("Definitely" or "Probably") → present a **higher** price.
   - Not top-2 → present a **lower** price.
4. **Terminate** when you have identified the highest price at which that respondent still gives a top-2 rating.
5. **Code:** that highest top-2 price is the respondent's Gabor-Granger value. Respondents who never give a top-2 rating, even at the lowest rung, are typically coded zero or excluded.

Canonical example: with $1, $2, $3, $4, $5 — a respondent showing top-2 intent at $4 but not at $5 is coded as **$4**.

### Price ladder design rules

- **A random starting rung is what protects against anchoring.** Never always start high or always start low.
- Space rungs roughly **geometrically** ($9 / $19 / $29 / $39 / $49, or $19 / $29 / $49 / $79 / $129) rather than linearly — perceived price differences are ratio-scaled.
- The ladder must **bracket your hypothesis on both sides**. If the top rung still gets 40% top-2 across the sample, your ladder was too short: you have learned only that you are underpricing. Extend it upward and refield rather than reporting a ceiling you never found.

### Demand and revenue curves

- **Demand chart:** x = price; y = % of respondents willing to buy at that price, cumulative — anyone whose Gabor-Granger value is ≥ p counts as a buyer at p.
- **Revenue curve:** x = price; y = `price × % willing to buy` (× your addressable population for absolute dollars).
- **If you have real COGS, plot contribution instead:** `(price − unit COGS) × buyers`. **The contribution peak always sits at a higher price than the revenue peak.**

### Worked example — *illustrative*

Ladder $9 / $19 / $29 / $39 / $49. Synthetic top-2 rates. Population assumed 1,000 qualified prospects.

| Price | Top-2 % | Buyers (of 1,000) | Revenue |
|---:|---:|---:|---:|
| $9 | 72% | 720 | $6,480 |
| $19 | 55% | 550 | $10,450 |
| $29 | 38% | 380 | **$11,020** |
| $39 | 21% | 210 | $8,190 |
| $49 | 9% | 90 | $4,410 |

Revenue peaks at **$29**, even though $9 attracts **1.9×** the buyers (720 against 380). This is the whole point of the method and the single most common founder blind spot: the price that maximises *customers* and the price that maximises *revenue* are far apart, and taking the customer-maximising rung here would cost **70% of revenue** ($6,480 against $11,020). Note also how much steeper the buyer ratio gets further down the ladder — $9 attracts 3.4× the buyers of the $39 rung — which is why the comparison has to be drawn against the revenue peak rather than against whichever rung makes the point most dramatically.

**Deflate stated intent before you act on absolute numbers.** Stated top-2 intent overstates behaviour. `[unsourced — the specific standard deflation weights, e.g. 0.75/0.25 or Juster-scale calibration; would need a published concept-test calibration study]` The relative **shape** of the revenue curve survives any constant deflator, so the *choice* of $29 is robust even when the absolute dollars are not. If you want a defensible deflator, use the intent haircut in the interview section (5 → 0.4, 4 → 0.15, ≤3 → 0).

### Sample size

**≥200 total and ≥100 per segment** — the same guideline as Van Westendorp (Conjointly, accessed 2026-08-12).

### Limits

- **The ladder anchors.** Respondents infer the acceptable range from the rungs you chose, so you are partly measuring your own hypothesis.
- **No competitive context.** The respondent is not choosing between you and an alternative; they are rating you in a vacuum.
- **No packaging read.** It prices one fixed bundle. It cannot tell you the right move was a $49 tier with two extra features.
- **Stated intent is not behaviour.** This is the family-level critique and it applies to everything in this section.

---

## EVE — economic value estimation

EVE gives you a **ceiling** and, more usefully for a small product, the sentences you will put on the pricing page. It does not give you a price: Nagle is explicit that economic value "does not indicate the appropriate price to charge", and neither the book nor its derivative literature offers a capture percentage. You are handed a ceiling and left to pick.

### The formula

```
Total Economic Value    = Reference Value + Differentiation Value
Differentiation Value   = Positive Differentiation Value − Negative Differentiation Value
```

- **Reference Value** = the **price** the customer pays for the Next-Best Competitive Alternative (NBCA) — not the NBCA's use value, its price.
- **Positive Differentiation Value** = monetised worth of what you do better, expressed as `customer financial metric × percent impact of your offering`.
- **Negative Differentiation Value** = switching cost, training, learning curve, added risk, *plus* any positive differentiation the NBCA has over you. **It excludes your own price.**
- **Total Economic Value is the ceiling** — "the maximum price that a smart shopper, fully informed about the market and seeking the best value, would pay."

**Finding the NBCA is one question:** *"If I, the seller, did not exist, what would my customer do?"* Three failure modes: defining the category too narrowly (a uniform maker believed it had 85% share; once department stores and discounters were counted, its true share was **35%**); the alternative being a *basket* the customer assembles rather than a single product; and the alternative being **doing nothing** — customer apathy is frequently the real competitor.

### The worked example — GenetiCorp "Dyna-Test"

*(Nagle & Müller, 6th ed., Ch. 2, Exhibits 2-5 to 2-7. Disguised client case. Reproduced with its arithmetic intact.)*

Dyna-Test is a DNA-synthesis test kit. The NBCA is a competitor kit, EnSyn, at **$30 per kit**. That $30 is the reference value.

**Segment A — commercial pharma/biotech researchers.** Five differentiation drivers, each built bottom-up from the *customer's* economics.

*Driver 1 — Yield opportunity cost (the chain worth studying):*

| Input | Value | Source of the number |
|---|---|---|
| Annual revenue of a successful drug (conservative pick from a $250M–$1B range) | $400,000,000 | customer business-model research |
| Contribution margin | 75% | → $300M annual profit contribution |
| Cost to develop a typical drug | $590,000,000 | industry data |
| ⇒ NPV of a successful drug over 17-year patent life | $41,000,000 / yr | derived |
| Target tests required to find one successful gene sequence | 500 | customer interviews |
| ⇒ Value of one target test | $82,000 | $41M ÷ 500 |
| Work-year | 260 days ≈ 2,100 hours | — |
| ⇒ **Value of researcher time on a target test** | **$39 / hour** | $82,000 ÷ 2,100 |
| Time saved by Dyna-Test | 1 week = 40 hours | customer interviews |
| ⇒ **Driver 1** | **$1,560** | 40 × $39 |

*Driver 2 — Yield labour savings:* 16 hours of processing labour saved × $24/hr lab wage = **$384**
*Driver 3 — QC labour savings:* 2 hours of eliminated quality checks × $24/hr = **$48**
*Driver 4 — Sample-size opportunity cost:* an emergency re-gather costs 3 weeks = 3 × $1,560 = $4,680, but occurs only **10%** of the time ⇒ **$468**
*Driver 5 — Sample-size labour:* 16 hours × $24/hr × 10% = **$38**

> **Total Economic Value (commercial segment) = $30 + $1,560 + $384 + $48 + $468 + $38 = $2,528 per kit.**

**Segment B — academic / government labs.** Same reference value ($30), same driver structure, different customer economics (lower economic reward from primary research, near-free student labour):

> **$30 + $1,055 + $231 + $29 + $317 + $23 = $1,685 per kit.**

**What GenetiCorp did with it.** It had been pricing on cost-plus markup and then discounting under purchasing-agent pressure. After the EVE work it **raised prices two- to fivefold** while launching an education campaign. Purchasing agents objected; sales kept growing, because even the new price was a small fraction of value delivered; profits rose significantly the following year.

**A second, shorter EVE worth memorising — the drug-eluting stent** (Nagle, Ch. 3): priced at **$3,500**, twice the uncoated stent. Implantation surgery costs **>$30,000**. Uncoated stents re-clog within a year in **20%** of cases; the drug-eluting version drops that to **~5%**. Differentiation value = 15 percentage points × $30,000 = **$4,500**. The company charged a **$1,750 premium against $4,500 of quantified value** and used the gap to defuse price-gouging accusations.

### The four rules that keep an EVE honest

1. **Count only the difference** versus the NBCA. Benefits both products share are already priced by competition and are embedded in the reference value. You can charge nothing extra for them regardless of their use value.
2. **Measure differentiation either as cost saved** to reach a given benefit level **or as extra benefit** at equal cost. **Never both** — that is double counting.
3. **Value is not proportional to performance.** A part that lasts twice as long is not worth 2× a $10 competitor if it halves production-line shutdowns worth six figures.
4. **Subtract negative differentiation explicitly.** Where a competitor is genuinely better — faster delivery, better warranty — quantify it the same way and net it out.

### The generalised procedure

1. **Name the NBCA** by asking "if I did not exist, what would this customer do?" Include doing nothing, priced at $0.
2. **Set the reference value** = the NBCA's price, annualised to your billing period.
3. **List 3–6 differentiation drivers**, each with an algorithm of the form `customer financial metric × percent impact`. Build every input from the customer's own economics, not yours.
4. **Quantify negative differentiation** — switching cost, learning curve, anything the alternative does better — and amortise one-off costs over the expected life.
5. **Sum to a ceiling.** Then stop: the model does not tell you what fraction to charge.
6. **Rebuild per segment.** GenetiCorp's identical product was worth $2,528 to one segment and $1,685 to another.

**The transfer caveat.** Every deep EVE example in the canon is industrial B2B, where the customer has an accounting system that can price an hour of labour or a repeated surgery. Practitioner critics argue it breaks for software — far more feature dimensions than the transaction data can support, competitors using identical terminology for different technologies, and value depending on how the buyer deploys it. **For consumer web products the objection is blunter: the buyer does no arithmetic at all at $10/month.** Run it anyway, because even a rough model gives you the sentences for your pricing page — but present the output as a ceiling and a copy source, never as a derivation of the number.

### Worked example — a consumer-scale EVE for Ledgerly

Ledgerly's buyer is a freelancer who files their own quarterly expenses. Per month:

| Component | Value | Working |
|---|---:|---|
| **Reference value** — receipt capture bundled in their accounting app | **$6.00** | the NBCA's price, not its use value |
| **+ Driver 1** — time saved | **$50.00** | 100 receipts × 45 seconds saved each = 75 min; at a $40/hr self-assessed rate, 1.25 h × $40 |
| **− Negative differentiation** — switching cost | **−$6.67** | 2 hours to re-import 12 months of history × $40, amortised over 12 months |
| **= Total Economic Value (ceiling)** | **$49.33 / month** | |

Solo at $9 captures **18%** of that ceiling; Solo at $14 captures 28%. Both are defensible and the model does not choose between them — which is exactly the canon's stated limitation. Two honest haircuts before quoting the $49: the $40/hour is a *self-assessed* rate the freelancer does not actually bill for evening admin, and **claimed time savings are not realised savings** unless the time is genuinely reallocated. Halving Driver 1 to $25 gives a $24.33 ceiling, which still sits comfortably above $14 — and *that* is the useful output: the price is not the constraint, so the constraint is somewhere else. `[Ledgerly's 45-seconds-per-receipt saving and the $40/hr rate — both assumed; Q18 of the interview is where the real numbers come from]`

---

## The breakeven sales change

**This is the highest-value arithmetic in the file and it takes ten minutes.** Nagle's instruction is to stop asking "what is the price elasticity of this product?" — that estimate is expensive, unstable, and rarely cost-effective — and to ask instead:

> **"What percentage change in unit sales would be necessary for this proposed price change to leave total contribution unchanged?"**

That is the breakeven sales change, and it converts an unanswerable empirical question into a falsifiable judgement call: *do I believe demand will move more than this?* **Elasticity stops being an estimate and becomes a threshold anyone in the room can accept or reject.**

### The formula

```
% Breakeven sales change (units) = −ΔP / (CM + ΔP)
```

ΔP and CM may be in dollars, percentages or decimals, **as long as they are consistent within one calculation**. The minus sign encodes the trade-off: price cuts *raise* the required volume, price increases *lower* the volume you can afford to lose. **Note that the denominator is the new contribution margin.**

*(Nagle & Müller, 6th ed., Ch. 9, derived in App. 9B.)*

### Worked: Westside Manufacturing

*(Nagle, Ch. 9. Reproduced with its arithmetic intact.)*

| Baseline | |
|---|---|
| Sales | 4,000 units/mo |
| Price | $10.00 |
| Revenue | $40,000 |
| Variable cost | $5.50/unit ($22,000) |
| Fixed cost | $15,000 |
| Contribution | $18,000 |

Proposed: a **5% price cut** → $9.50.

- Price effect (loss on units it would have sold anyway): 4,000 × $0.50 = **−$2,000**
- New contribution margin: $9.50 − $5.50 = **$4.00**
- Units needed to recover: $2,000 ÷ $4 = **500 units**
- Formula check: `−(−$0.50) / ($4.50 + (−$0.50)) = 0.50 / 4.00 = 0.125 = +12.5%`
- `0.125 × 4,000 = 500 units` ✔

So a 5% discount is only profitable if volume rises **more than 12.5%** — i.e. only if true price elasticity exceeds **2.5**. Sell 550 extra units → +$200 contribution. Sell 450 → −$200.

**Unit breakeven → dollar breakeven conversion:**

```
%BE($) = %BE(units) + %ΔPrice × [1 + %BE(units)]
       = 0.125 + (−0.05)(1.125) = 0.0688 → +6.9% in revenue terms
```

**Always quote the unit figure internally; the dollar figure is smaller and flatters the discount.**

### Then check the threshold against published elasticity priors

You do not have a demand curve. You do have priors — and the whole point of the exercise is that a threshold can be checked against them.

- **Tellis (1988), *JMR*:** 367 elasticities across ~220 brands/markets; **mean = −1.76**; after correcting for known method biases, **≈ −2.5**.
- **Bijmolt, van Heerde & Pieters (2005), *JMR*:** 1,851 elasticities across 81 studies; **mean = −2.62**.
- **Simon's rule of thumb:** price elasticity typically falls between **1.3 and 3.0, median ≈ 2**. `[unsourced — no work, edition or date was located for this attribution; it reaches this file as a named person and a band, with nothing behind either. Sourcing it means finding the primary publication the attribution points at.]` It is retained only because it agrees with the two meta-analyses above, and it must never be the prior a threshold is checked against on its own. Where a breakeven figure needs a prior, use Tellis or Bijmolt et al., both of which name their samples.
- **Tellis's brand-life-cycle decomposition** — use these as segment priors, not the grand mean: Introduction **−2.37** (n=18); **Growth −1.16 (n=106)**; Maturity −1.98 (n=225); Decline −2.01 (n=18).

**The growth-stage figure (−1.16) is the single most actionable number here:** customers have worse price information early, so a growing product is roughly half as price-sensitive as a mature one. Westside's 5% cut required elasticity above 2.5 — above both meta-analytic means — which is how the arithmetic kills a discount without anyone having to estimate anything.

### At software margins, run it in the other direction

At a **90% contribution margin**, a 10% price cut needs only **+12.5%** volume — which is why penetration pricing and free trials are more defensible for software than for manufacturing. Run it the other way and the same margin licenses increases: at 90% CM, a **10% price increase stays profitable unless you lose more than `10 / (90 + 10) = 10%` of units.** Published growth-stage elasticity of ~1.16 implies an expected loss nearer 12% — genuinely close, so **test it rather than assume it**.

### The reactive breakeven

Before matching a competitor's price cut, compute the sales that would have to be *at risk* to justify matching. **Match only when the cost of matching — which lands on all your volume — is less than the contribution of the preventable portion of the sales loss.** Nagle: "It simply makes no sense to match competitors' price discounts unless one can do so at a cost that is less than what one would lose from ceding some market share." Note the asymmetry: **the larger your share in the contested segment, the less profitable it is to cut price**, because you cut on everything to defend a slice.

### The one thing the formula cannot see

It is a **single-period contribution identity**. It ignores churn, lifetime value, expansion revenue and trial-to-paid conversion, and it cannot see that a 10% increase which loses 8% of new signups may also move renewal 18 months later. For a subscription this usually makes the naive breakeven **too optimistic about a price rise and too pessimistic about a cut**. Run the formula, then model the churn effect separately — it will not do it for you.

### Worked example — Ledgerly

Solo moves from **$9 to $11** (+22.2%) at an assumed 90% contribution margin:

```
−22.2 / (90 + 22.2) = −19.8%
```

The increase is profitable unless more than **19.8% of Solo units** are lost. The long-way check: old contribution $8.10/unit; new price $11 at $0.90 variable cost gives $10.10/unit; `8.10 / 10.10 = 0.802`, so you may keep 80.2% of units and still be ahead. At 40 customers, 19.8% is **just under eight people**, so the increase survives losing seven and fails on the eighth — a number a founder can hold in their head and check against reality. Then use Nagle's move on yourself: would you accept a commitment to keep 33 of 40 customers in exchange for the increase? `[Ledgerly COGS — unknown; the 90% margin is a software-typical assumption and every figure here inherits it]`

---

## Comparables triangulation

The cheapest method. **Run it first, and never run it alone.** Its purpose is to establish the **reference price in the buyer's head** — the thing the Van Westendorp method is criticised for ignoring entirely.

### Procedure

**Step 1 — Build the alternatives set, not the competitor set.** It must include direct competitors, substitutes in adjacent categories, potential entrants, and **always the status quo / do-nothing option**.

**Step 2 — Record five fields per alternative:**

| Field | Why |
|---|---|
| Price and unit (per month / per session / per copy / one-off) | Normalisation |
| What job it does that yours also does | Establishes substitutability |
| What it does that yours doesn't, and vice versa | Establishes the premium or discount you can defend |
| Switching cost from it to you | High switching cost lets you price below and still lose |
| Frequency of purchase | Converts one-off prices to annualised terms |

**Step 3 — Normalise everything to one unit.** For a subscription, normalise to **cost per year for the job**. A book bought once is not $18; it is $18 in year one and $0 thereafter.

**Step 4 — Weight the non-obvious substitutes.** This is where the method earns its keep. Weight each alternative by **P(the buyer actually considered it)**, which you get from Block 7 of the interview (Q27–Q29) — **not from your own imagination.** The weight is the fraction of interviewees who named it unprompted.

**Step 5 — Read the shape, not the average.**

### Worked example — *illustrative*

A decision-help product; the job is "decide something consequential without spiralling". Alternatives annualised, weights from n=15 interviews.

| Alternative | Raw price | Annualised for the job | Considered by | Weight | Weighted contribution |
|---|---|---:|---:|---:|---:|
| Therapy (weekly) | $120/session | ~$1,560 (13 sessions) | 4/15 | 0.27 | $416 |
| Coach (monthly) | $250/month | $3,000 | 2/15 | 0.13 | $400 |
| A book | $18 once | $18 | 9/15 | 0.60 | $11 |
| A competing app | $12/month | $144 | 5/15 | 0.33 | $48 |
| Asking a friend | $0 | $0 | 12/15 | 0.80 | $0 |
| **Doing nothing** | $0 | $0 | 15/15 | 1.00 | $0 |

Two things fall out, and neither of them is "average the prices":

- **The weighted mean is not your price.** It is $146/yr here, which is meaningless — an average across categories the buyer would never mix.
- **The real read is the shape.** The alternatives cluster at two poles: near-zero (book, friend, nothing) and high (therapy, coach). There is almost nothing in between, and the one in-between option is the $144/yr app. **That gap is the pricing opportunity**, and it is where you sit: materially above the book, visibly and defensibly below therapy. A $99–$180/yr price is the defensible zone — 6–10× a book and one-tenth to one-fifteenth of therapy, and **both of those ratios are things you can say out loud on a pricing page.**

**Step 5, concretely — write the sentence.** A comparables analysis is finished only when you can complete this, using a number from the table:

> *"It costs less than [one unit of the expensive substitute], and it does [the thing the cheap substitute can't]."*

If you cannot write that sentence, you have a spreadsheet, not a price.

### Failure modes

- **Copying the leader.** Their price encodes their cost structure, their funding, and their mistakes.
- **Excluding do-nothing.** Do-nothing wins most deals in a new category and is priced at $0. Your price must be justified against $0, not against the $12 app.
- **Anchoring on the cheapest visible competitor.** The cheapest competitor is often a hobby project that will not exist in 18 months.
- **Ignoring "contact us" tiers.** They are invisible entirely. Published list prices are, if anything, close to transacted prices for the mid-market — Vendr's data puts the average *negotiated* discount at ~10% and falling since mid-2022 — so list understates less than founders assume, but hidden enterprise tiers understate completely.

---

## Cost-plus floors with real COGS

**Cost-plus is a floor, never a price.** Value-based pricing typically allows you to charge a great deal more. The second-order mistake is worse than the first: founders underestimate costs by leaving customer acquisition out of the margin entirely.

### Procedure

1. **Enumerate true unit COGS per subscriber-month.** For software this is not zero:
   - Third-party API / inference cost × expected usage
   - Hosting, storage, bandwidth attributable to one user
   - **Payment processing** — a real COGS line and routinely forgotten
   - Support cost per user (minutes × loaded hourly rate)
   - Any human-in-the-loop delivery
2. **Pick a target gross margin.** Traditional software runs **60–80%+**; AI companies "typically have somewhat lower gross margins... in the 50–60% range", driven by "the 25% or more of revenue that AI companies often spend on cloud resources" (a16z, 2020-02-16).
3. **Solve for price rather than marking up**, because payment fees scale with price:

```
price = (fixed_COGS + payment_fixed_fee) / (1 − target_GM − payment_percentage_fee)
```

4. **Add CAC to get the real floor.** Gross margin ignores acquisition. If CAC is $60 and gross margin per month is $17, you are 3.5 months to gross-margin payback before any other cost. **A price that clears COGS but never clears CAC inside your churn-implied lifetime is below the true floor.**

### Worked example — *illustrative*

An AI-assisted consumer subscription at $20/month. Assumed usage: 300 model calls/month at $0.004 each; $0.35/user/month infrastructure; Stripe-style fees of 2.9% + $0.30.

- Inference: `300 × $0.004` = **$1.20**
- Infrastructure: **$0.35**
- Payment fees at $20: `(0.029 × $20) + $0.30` = **$0.88**
- **Total COGS: $2.43** → gross margin at $20 = `($20 − $2.43) / $20` = **87.9%**

Solving the formula backwards for target margins:

| Target gross margin | Minimum price |
|---:|---:|
| 75% | **$8.37** |
| 80% | **$10.82** |
| 85% | **$15.29** |

**Three things to take from this:**

1. **The floor is $8.37–$15.29 and the price is $20 — the floor told you almost nothing.** That is the correct and typical outcome for software. Cost-plus binds only when COGS is large relative to willingness to pay, which for AI products happens the moment a heavy user's call volume goes up 10×.
2. **Model the heavy user, not the average user.** At 3,000 calls/month the inference line becomes $12.00, COGS becomes $13.23, and gross margin at $20 collapses to **33.9%**. This is why AI products need a usage cap, a fair-use policy, or a metered dimension. **Compute the floor at the 95th-percentile user, not the mean.**
3. **Falling margin is structural, not temporary.** The cost drivers — compute intensity, rich-media data, human-in-the-loop support consuming up to 10–15% of revenue — are "structurally difficult to eliminate entirely, even with optimization". Budget as if inference costs fall slowly, not as if they vanish.

### Worked example — Ledgerly

At Solo ($9), the payment line alone is `(0.029 × $9) + $0.30 = $0.56` — **6.2% of the price**, a materially larger share than at $20 because the fixed $0.30 does not shrink with the price. That is an argument for setting the level higher that has nothing to do with willingness to pay: small prices are structurally more expensive to collect. `[Ledgerly OCR cost per receipt — unknown; no margin argument is possible until it exists, and it will bind first at the 95th-percentile Books user processing 400 receipts]`

---

## Conjoint and MaxDiff, and the cheap substitutes

**What they do.** Choice-based conjoint (CBC) presents respondents with repeated choices between product *profiles* — bundles of attribute levels including price — and infers part-worth utilities from the choice pattern. Because price is one attribute among many, CBC gives demand as a function of **both packaging and price** and supports market simulation. MaxDiff presents sets of items and asks for the best and worst in each, producing a ratio-scaled ranking of item importance. **MaxDiff does not produce a price.** It tells you which features belong behind which tier; you still need a pricing method for the number.

### When a solo founder can run these

- A list or panel that can realistically deliver **300+ qualified respondents**.
- 3–8 weeks, and either panel budget or a large owned audience.
- A genuine attribute space — at least 3 attributes with 2–4 levels each. If your product is one thing at one price, conjoint has nothing to chew on.

**When they cannot.** Pre-launch with no list. Recruiting 300 qualified respondents for a product nobody has heard of is a harder problem than pricing it. CBC at n=50 produces part-worths whose standard errors swamp the effects.

### Sample-size rules, exactly

- **Rule of thumb 1:** "300 respondents is a good rule of thumb for sample size"; for subgroup analysis, "at least 200 members of each subgroup" (Sawtooth Software).
- **Rule of thumb 2 — 500 appearances per level:** `n ≥ 500c / (t × a)`, where *c* = the maximum number of levels in any attribute, *t* = tasks per respondent, *a* = concepts per task excluding "None". Sawtooth: "500 exposures should be considered the bare minimum in most cases. In practice, it is safer to plan for 1000 exposures per level."
- **Rule of thumb 3 — the random-robot test:** run simulated random responses through your design; accept when main-effects standard errors are **below 0.05** and interaction or alternative-specific effects stay below 0.1.
- **MaxDiff:** minimum **N=300** for total-sample analysis, **N=200 per subgroup**. The important exception: "If you are showing each item 3 or more times to respondents and using a high-quality design, the scores you can calculate are quite robust and stable for tiny sample sizes" — total-sample scores only, no segmentation.

**Worked example of the formula.** 5 attributes, the largest with c=4 levels; t=12 tasks per respondent; a=3 concepts per task:

```
n ≥ 500 × 4 / (12 × 3) = 2000 / 36 = 55.6 → 56 respondents
```

for the bare 500-exposure minimum, or **112** at the safer 1000-exposure standard. Note the tension: the formula can return a number well below 300. **Take the larger of the formula result and the 300 rule of thumb** when you need credibility rather than bare estimability.

**Cost.** Full-service MaxDiff runs roughly **$5,000–$10,000** and a comparable conjoint **$10,000–$25,000** (agency list prices via a Drive Research / Quali-Fi comparison, secondary; DIY is far cheaper).

### The cheap substitutes, in ascending order of rigour

1. **Feature card-sorting in the interview.** Hand the respondent 8–12 index cards, one feature each, and ask them to sort into "must have / nice to have / don't care". This is MaxDiff's job done at n=15 by hand. Directionally right, costs nothing.
2. **Buy-a-feature / fixed-budget allocation.** Give each interviewee a synthetic budget (100 points, or $100) and a price on each feature, and have them buy a bundle. **Forced trade-offs are the mechanism conjoint monetises**; you can get the trade-off signal without the model.
3. **"Which two would you drop?"** Present your intended tier contents and ask which two items they would remove to save 30%. What survives is the base tier.
4. **Most/least on six at a time.** Show **6 features at a time** from a longer list; ask which are "must-have, I will pay for it" and which are "I don't need it"; rotate the six across respondents so every feature is compared. The purpose is to find the ~20% of features that drive ~80% of willingness to pay.
5. **Small-n MaxDiff**, exploiting the exception above: with a high-quality design showing each item ≥3 times, MaxDiff is usable well below 300 for total-sample scores only.
6. **A self-serve conjoint platform**, which auto-estimates the required sample size from your design — which at least tells you whether your list can support a study before you spend anything.

**A packaging heuristic usually stated alongside these exercises, and it needs its label:** if roughly **10–20%** of customers want a thing, make it an **add-on**; if **50%+** want it, it belongs in a leader package. `[unsourced — no source in any research lane states these bands, and they do not in fact fall out of the methods above, which return a demand share rather than a packaging rule.]` The bands on disk do not even agree with each other: `patterns/03-tier-architecture.md` states P-060's add-on rule at a **30–50%** demand share, and the vendor allocation ladder it quotes alongside it (≥80% base tier, 50–79% mid tier, 30–49% add-on, 10–29% enterprise, <10% discontinue) is marked there as a sorting device rather than a benchmark. **Treat the demand share these exercises produce as an input to P-060 and to the assembly check, never as a threshold you apply on its own.** Where the assembly check finds that a capability is the only fence holding the next rung up, it must not be sold as an add-on at any demand share.

---

## What to use when you have no traffic and no customers

Most products arriving at this skill are COLD: no traffic worth splitting, no instrumentation at the point of sale, and fewer than a hundred customers. **Two methods actually apply, and they are the first two rows of the selection table.**

**1. The qualitative WTP interview is the primary method.** It is the only instrument that produces a defensible number without traffic, a list, or a budget, and it is the only one that ends in a behavioural measurement rather than a stated preference. Run 15–20. Run Block 2 before any price question and let the median current spend be your floor. Do not name a price until Block 8, then name it as a fact and ask for a card. **If zero of fifteen commit at any price, you do not have a pricing problem** — and that is a more valuable finding than any number.

**2. Comparables triangulation is the mandatory companion.** It costs an afternoon, it bounds everything the interview produces, and it supplies the two ratios you will put on the pricing page. Build the alternatives set from Block 7 rather than from your own list, weight by who actually considered each option, and read the *gap* rather than the average.

**Three supporting calculations, all free and all runnable today:**

- **The breakeven sales change** (`−ΔP / (CM + ΔP)`) before any price move in either direction. Ten minutes, no data required beyond your margin, and at software margins it will usually license a price increase you were afraid of.
- **A one-page EVE at consumer scale**, even where the buyer does no arithmetic. Reference value is what they pay now for the closest alternative — a competitor's subscription, a one-off tool, an hour of their own time, or **$0 for doing nothing**. The output is a ceiling and, more usefully, the sentences for your page.
- **The cost-plus floor at the 95th-percentile user**, which for a zero-marginal-cost product will tell you nothing and for anything touching inference or human delivery will tell you everything.

**What not to do.** Do not run a Van Westendorp at n=40 — four intersections from 40 respondents are noise wearing a chart's clothes. Do not run conjoint or MaxDiff without 300 qualified respondents; substitute card-sorting or buy-a-feature in 15 interviews and accept a directional answer. Do not run a live price A/B test on low traffic: it cannot reach power, and showing different prices to different people at the same moment carries reputational exposure far stricter than the legal constraint. **The runnable substitutes are a public cohort ladder ("first 50 at $9, then $14") whose fill rate is the demand curve, a grandfathered increase read as a two-cohort natural experiment, and pre-orders or deposits — which need no traffic at all and are the strongest pre-launch signal that exists.** All three are carried as patterns in `patterns/04-price-points.md`, and together with the commitment ask they are the whole COLD toolkit.

---

**Sources.** Van Westendorp four questions and intersection definitions: Wikipedia and Conjointly's manual-calculation guide (accessed 2026-08-12); alternate phrasings and the Newton-Miller-Smith extension: Q Research Software wiki; criticisms: Relevant Insights. Gabor-Granger procedure: Wikipedia. Interview sequence: Maren's SaaS pricing interview template, 28Experts' pricing-research question set, Sachin Rekhi's primer on *The Mom Test*, and Koji's pricing-research interview guide (all accessed 2026-08-12). Intent haircut and the 25% why-ratio: secondary summaries of Ramanujam & Tacke, *Monetizing Innovation*. EVE, the breakeven sales change and the elasticity priors: Nagle & Müller, *The Strategy and Tactics of Pricing*, 6th ed., Ch. 2, 3 and 9; Tellis (1988) and Bijmolt, van Heerde & Pieters (2005), *JMR*. Sample sizes: Conjointly FAQ and Sawtooth Software. Margins: a16z, "The new business of AI" (2020-02-16). Negotiated-discount data: Vendr via SaaStr and Torii.
