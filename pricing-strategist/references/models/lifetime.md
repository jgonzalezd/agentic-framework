# Lifetime

> **The thinnest-evidenced pack in this directory, and it must be read as such.** Four live products, one `secondhand` price history from a single May-2022 article, and no controlled comparison of a lifetime SKU against the subscription it replaced exists anywhere in this library. What the pack has instead is arithmetic, and the arithmetic is unusually decisive: a lifetime price is a bet on a number — the customer's remaining lifetime — that a small product cannot estimate, multiplied against a cost it cannot cap.

## What the buyer is purchasing

The end of a recurring decision. The buyer is not primarily buying the product cheaply; they are buying out of the relationship — no renewal, no card that keeps working, no line item that reappears each month and has to be re-justified. Nomads.com states the whole proposition in four words: **"Billed once. Then never again"** (observed 2026-08-12). What the buyer thinks they are getting is a *state* — membership, access, ownership — rather than a *flow* they consume.

That mental model is the model's opportunity and its trap. The buyer believes they have bought a thing. You have sold an obligation with no end date and no repricing event, and the two of you will not discover the difference at the same time.

## The mechanics

- **Unit of purchase:** one payment granting perpetual entitlement to a defined scope.
- **Cadence:** once. There is no second transaction with this customer under this SKU, ever.
- **What governs the amount:** nothing observable. Unlike every other model in this directory, the amount is not set by seats, usage, capability or time — it is set by your estimate of the customer's remaining lifetime, which is a forecast rather than a measurement.
- **Entitlement on payment:** the tier's capability set immediately, plus an implicit and usually unwritten promise about the future. **Write the scope down or you have sold an unfunded support obligation** — say whether future major versions, new features, and continued hosting are included, and whether "lifetime" means the buyer's lifetime or the product's.
- **What happens at the limit:** there is no limit unless you write one. A lifetime SKU with a refilling monthly allowance is a subscription you have stopped billing; a lifetime SKU with a fixed total balance is a credit pack and belongs in `credits.md`. **The only safe form for a product with real per-use cost is the second one**, and calling it "lifetime" is then a stretch.
- **Expiry and rollover:** none by definition, which is exactly the property that makes the liability unbounded.

## Fits when

- **Marginal cost per served user is genuinely near zero.** This is the load-bearing condition and everything else is secondary. Nomads.com sells access to a data stock — city pages, cost-of-living data, rankings for 1,500+ cities — where one more member costs approximately nothing to serve; its founder's self-reported infrastructure claim is *"my sites get 4 billion requests a year but I only pay $244/mo to host them on my own VPS"* (levels.io, `anecdote`, self-reported and unaudited, captured 2026-08-12).
- **The value is access to a stock rather than consumption of a flow.** A directory, a database, a one-time transformation, a community roll. The buyer reaches a state and stays there.
- **You have a genuine cash-flow reason and you are pricing the cash, not the customer.** Pre-launch funding, a runway gap, a founder cohort. A lifetime sale is a loan from your future revenue at an interest rate you are setting blind — that can still be the right trade when the alternative is not existing, and it is a legitimate use. Say to yourself that that is what you are doing.
- **The cohort is capped and closed.** A founder/community lifetime sold to a stated number of buyers inside a stated window bounds the liability arithmetically, which is the only mechanism in this pack that makes an unbounded obligation finite. It also supplies honest scarcity (`08-urgency-and-timing`) rather than manufactured scarcity.
- **The recurring charge itself is the objection.** For a COLD consumer product where the buyer has never heard of you, "billed once" removes the largest single reason to close the tab. Nomads.com pairs it with **"7-day money back guarantee"** and runs no subscription at all (observed 2026-08-12).

**Boundary against neighbouring packs.** `one-off.md` sells a bounded deliverable that ends; lifetime sells an unbounded entitlement that does not. `subscription.md` keeps a repricing event; lifetime destroys it. If you are tempted to attach a meter to a lifetime SKU, you want `credits.md`.

## Fails when

- **You have real per-use cost.** The liability is the price divided by the monthly cost-to-serve, and it is finite and usually near. See the COGS arithmetic below — this is the condition that makes lifetime pricing dangerous for an AI product in a way it never was for downloadable software, where marginal cost was genuinely zero and a perpetual licence cost nothing to honour.
- **You cannot estimate churn, which at small scale means always.** The correct lifetime price is a function of expected remaining lifetime, expected lifetime is `1 / churn`, and churn precision is governed by the number of observed cancellations, not by customer count or elapsed time. **The mechanical scale floor: do not price a lifetime SKU before roughly 100 observed churn events** (≈1,000 subscriber-months), which is the point at which the implied LTV narrows to a 1.5× spread. At 25 events (≈250 subscriber-months) the spread is 2.2× and the number is directional at best. Below about 10 events it is decoration (`11-expansion-and-retention`, author's binomial arithmetic on stated assumptions).
- **The buyer expects updates indefinitely.** "Lifetime" without a written scope converts every future roadmap decision into a question about whether the 2024 cohort is entitled to it.
- **You need the option to reprice.** Every other model in this directory has a renewal at which a mistake can be corrected. This one does not. A lifetime cohort is permanent grandfathering, sold deliberately — and the grandfathering literature is uniformly against permanent grandfathering (Glencoyne: indefinite grandfathering creates *"unsustainable long-term revenue drag"*; SaaSDash: *"pricing complexity, sales friction, and NRR distortion"*, both fetched 2026-08-12 via L16).
- **Your lifetime buyers are your heaviest users, and they are.** The adjacent measured finding is PayPro's diagnostic on grandfathered cohorts — *"users on grandfathered pricing are often the heavy users who pay the least"* (fetched 2026-08-12, via L16). The same selection runs on a lifetime SKU with more force, because the buyer who computes that a lifetime deal is worth it is exactly the buyer who intends to use it for years. **This has not been measured on lifetime SKUs specifically; it is a mechanism with an adjacent observation, not a finding.**
- **You need revenue with a floor under it.** Lifetime revenue is a function of this month's new customers only. There is no MRR, no renewal base, no expansion — the same structural objection `one-off.md` carries, in a more permanent form.
- **Operational scale floor:** the *operational* overhead is the lowest in this directory — one price, one checkout, no meter, no dunning, no save flow. **The constraint is not overhead, it is irreversibility.** The floor is therefore an evidence floor rather than a headcount floor: below ~100 observed churn events you are not qualified to name the price, regardless of how easy it is to charge it.

## The arithmetic

### The break-even identity

Selling a lifetime instead of a subscription trades a stream for a lump sum and takes on a cost tail. Write `m` for monthly gross profit per subscriber, `c` for monthly cost-to-serve, `L = 1/churn` for expected remaining lifetime in months, and `H` for the horizon over which you intend to honour the entitlement. You are indifferent when

```
P_lifetime  =  m × L   +   c × H
               ↑           ↑
     forgone subscription  cost of serving
     gross profit          a customer who
                           can never churn
```

Both terms matter and operators routinely drop one. Dropping `m × L` produces a lifetime price that merely covers hosting and gives away the business. Dropping `c × H` produces the AI-era failure this pack exists for.

**Neither term is discounted here.** Cash today is worth more than cash spread over five years, and that is the one real argument for a lifetime SKU — but no founder-scale discount rate is published anywhere in this library, so the undiscounted identity is the honest floor and the discount is a judgement you apply on top, explicitly.

### Worked example — Ledgerly

Ladder in its **corrected** shape: free 5/mo · **Solo $9 / 100** · **Books $19 / 400** · top-up **$5 / 50**. This pack derives a forward price rather than diagnosing a trap, so it uses the corrected top-up throughout; the incumbent $4 pack and the dominance failure it produces are diagnosed in `hybrid.md` and are not relevant to a lifetime SKU, which has no volume dimension to invert. Cost-to-serve is derived once, in `02-packaging-models` P-021 and restated in `models/_TEMPLATE.md`, at **$0.060 per receipt before the routing/caching/batching levers and $0.0186 after them**. This section uses the post-lever $0.0186, because it is deriving a forward price and P-021's rule is to compute the floor after the levers; the COGS section below uses the pre-lever $0.060 where it is stress-testing the ladder as it stands, and says so at each point. At $0.0186 a Solo customer at full utilisation costs **$1.86/month** and returns **$7.14/month of gross profit** (79.3% GM).

**Step 1 — the indifference price, across the churn rates you cannot distinguish.** Horizon fixed at 5 years (60 months):

| Assumed monthly churn | `L` (months) | `m × L` | `c × H` | **Indifference price** | **× the $9 monthly** |
|---|---|---|---|---|---|
| 15% | 6.7 | $47.62 | $111.60 | **$159.22** | **17.7×** |
| 10% | 10.0 | $71.40 | $111.60 | **$183.00** | **20.3×** |
| 5% | 20.0 | $142.80 | $111.60 | **$254.40** | **28.3×** |
| 3% | 33.3 | $238.00 | $111.60 | **$349.60** | **38.8×** |
| **0%** | **∞** | **∞** | $111.60 | **unbounded** | **unbounded** |

**Step 2 — now ask whether Ledgerly knows which row it is on. It does not, and this is the trap.** At ~40 paying customers you accumulate 40 subscriber-months per calendar month. The published binomial arithmetic (`11-expansion-and-retention`) reads:

```
 30 subscriber-months  ≈  3 churn events   →  95% CI on churn  0% – 20.7%   →  L: 4.8 months to ∞
250 subscriber-months  ≈ 25 churn events   →  95% CI           6.3% – 13.7%  →  L: 7.3 – 15.9 months
1,000 subscriber-months ≈ 100 churn events →  95% CI           8.1% – 11.9%  →  L: 8.4 – 12.3 months
```

Translated to Ledgerly's calendar: 250 subscriber-months is **six months** at the current base; 1,000 is **twenty-five months**. Feeding those intervals back through the identity:

```
at   30 subscriber-months:  indifference price = $146  to  UNBOUNDED ABOVE
at  250 subscriber-months:  indifference price = $164  to  $225        (1.4× spread)
at 1,000 subscriber-months: indifference price = $172  to  $200        (1.2× spread)
```

**Read the first line carefully.** With three churn events on the board, the 95% interval on churn includes values arbitrarily close to zero, and at zero churn the correct lifetime price is infinite. That is not a weak estimate of the right price; it is not an estimate. **The churn number that would let a founder price a lifetime SKU correctly arrives roughly two years after the moment they want to sell one** — and the moment they want to sell one is precisely the cash-flow moment when they are least able to wait.

**Step 3 — the answer to "at what multiple of monthly."** Ledgerly's lifetime SKU stops destroying value somewhere around **20× the monthly price ($183)** on a 10%-churn assumption, and needs **28×–39×** if churn is actually 3–5%. `02-packaging-models` P-029 states the same conclusion from the stricter COGS-only side: five years of service at $0.0186/receipt costs $111.60, and at the standard 2× cost-to-serve floor a lifetime price must clear **$223.20**. **Both routes land in the $180–$350 band, against a product whose monthly price is $9.** The two numbers agree, and the agreement is the finding.

**Step 4 — the market cross-check, which is one product wide.** Calm's lifetime SKU is reported at $399.99–$499.99 against a $69.99 annual and a $14.99–$16.99 monthly, i.e. **5.7–7.1 years to break even, or ~26.7× the monthly price** — `[secondary, and the two price sources conflict; see references/teardowns/calm.md]`. 26.7× sits inside the 20×–39× band the Ledgerly arithmetic produces. **That is one product, with an unpublished cost-to-serve, and it is the only cross-check available.** Stoic's **"$299.00 Lifetime Premium"** at roughly 3× its top annual SKU ($99.99) implies a ~3-year breakeven (observed 2026-08-12) — a *lower* multiple, from a product whose marginal cost is also unpublished. **Two products, two answers, no cohort. Do not present a market multiple as a norm.**

### THE COGS PROBLEM — the arithmetic that kills lifetime for AI products

A lifetime customer never churns. That is the selling point, and it is also the reason the cost never stops. For a customer with monthly cost-to-serve `c`, there is a horizon at which the deal turns into pure loss:

```
H*  =  P_lifetime / c      ← the month your lifetime customer becomes a liability
```

`H*` is not a risk, it is a date. Compute it before you publish the price. On a hypothetical **$99 Ledgerly lifetime**:

| Usage shape | Monthly cost-to-serve | **H\*** |
|---|---|---|
| Solo-shaped, post-levers (100 receipts × $0.0186) | $1.86 | **53 months** (4.4 yrs) |
| Books-shaped, post-levers (400 × $0.0186) | $7.44 | **13.3 months** |
| Books-shaped, **pre**-levers (400 × $0.060) | $24.00 | **4.1 months** |
| Downloadable software, 1995 | ≈ $0 | **never** |

**The last two rows are the whole argument.** A perpetual licence on downloadable software was safe because marginal cost was genuinely zero — honouring it forever cost nothing forever. A perpetual entitlement over an inference-bearing pipeline has a finite `H*`, and at pre-lever costs on a heavy user it is measured in months. The customer who cannot leave is the customer whose cost never stops.

**And the sign can be negative from day one.** Ledgerly's Books tier at pre-lever cost is already underwater at full utilisation — $19 revenue against $24 of cost, a **−26.3% gross margin** (`02-packaging-models`, P-022). When monthly gross profit `m` is negative, there is no `P_lifetime` that works: the identity has no solution, because every month of the entitlement subtracts. **A lifetime SKU over a tier with negative unit economics is not mispriced, it is unpriceable.**

**That conclusion depends entirely on the pre-lever cost being $0.060 and not $0.040, so the figure is worth naming rather than assuming.** `hybrid.md` previously ran the same tier at $0.040, which produces a positive 15.8% gross margin and dissolves this conclusion completely. The two packs cited the same source for contradictory numbers; the disagreement is now resolved in favour of P-021's own Ledgerly derivation, and `hybrid.md` has been corrected to match. If a future revision measures a lower cost-to-serve, this paragraph's verdict has to be revisited rather than carried forward — it is a conclusion about a sign, and the sign is what moved.

**The two mechanisms that make a lifetime survivable with real COGS**, both of which change what you are selling:

1. **Cap the entitlement in total units** — a permanent balance rather than a perpetual refill. This bounds `c × H` absolutely, and it is `credits.md` wearing the word "lifetime". Runway's *"Any additional credits you purchase never expire"* is this shape, honestly labelled (observed 2026-08-12).
2. **Cap the cohort** — N buyers, one window. This bounds the aggregate liability without bounding any individual's.

Anything else leaves `H` unbounded, and `H` unbounded means the arithmetic above has no right-hand side.

## How it is presented

- **Say "billed once" in the price string, twice if you can.** Nomads.com puts **"Billed once. Then never again"** on both rungs (observed 2026-08-12). With no relationship to build and no renewal to reassure, the absence of recurrence *is* the product attribute and it must be legible without reading terms.
- **Two rungs at roughly a 2× spread.** Nomads.com runs **"$9.99 Lite"** and **"$19.99 Lifetime"** with no subscription anywhere on the page (observed 2026-08-12). Doubling for "forever" is the easiest arithmetic a buyer can do in their head, and the cheap rung's job is to make the expensive one read as obviously correct.
- **Define the word "lifetime" on the page.** Whose lifetime, what scope, which future versions. Every dispute this SKU will ever generate is a dispute about that sentence.
- **Pair it with a real guarantee.** Nomads.com: **"7-day money back guarantee"**. A single large irreversible payment from a cold buyer carries the entire trust load on the guarantee (`07-risk-reversal`) — note that this library's research lane on guarantee *duration* did not complete, so choose the length by what you are willing to honour rather than by a claimed refund effect.
- **If a lifetime sits beside a subscription, publish the break-even yourself.** The buyer will compute it. Calm's implied 5.7–7.1 years is what that computation looks like when the vendor leaves it to the customer, and *"pay for a decade of a habit you have not yet formed"* is the sentence the customer arrives at.
- **Fence the free tier on breadth, not volume.** Nomads.com's free rung shows city pages and rankings but not members-only depth, and trades an email for a **50% off** code — which quietly makes the real entry price ~$5.00 Lite / ~$10.00 Lifetime (observed 2026-08-12). Volume fences make no sense in front of a SKU that has no volume dimension.

## Who runs it

| Product | Structure | Observed | Teardown |
|---|---|---|---|
| Nomads.com (Nomad List) | Pure two-rung one-off ladder — **"$9.99 Lite" / "$19.99 Lifetime"**, both "Billed once. Then never again", "7-day money back guarantee"; **no subscription offered at all**; free tier fenced on breadth + 50%-off email capture | 2026-08-12 | — |
| Stoic | **"$299.00 Lifetime Premium"** sold alongside subscriptions, at ~3× its top annual AI SKU ($99.99) → ~3-year breakeven. A one-off *purchase of a subscription* | 2026-08-12 | — |
| Calm | Lifetime SKU reported at **$399.99–$499.99** against $69.99/yr → 5.7–7.1 years to break even. `[secondary; the two sources conflict and the base is unverified]` | 2026-08-12 | `references/teardowns/calm.md` |
| Oura | **Ran a lifetime membership and stopped.** Historical lifetime access was granted to certain early ring purchasers; not sold today, `/lifetime-membership` 404s. **No first-party statement about the discontinuation was obtainable and none is asserted** | 2026-08-12 | `references/teardowns/oura.md` |
| Nomad List (historical) | Free Slack community → **"$5 fee"** → **"$100 lifetime cost"** | Article May 2022 — `secondhand`, single source (listenupih.com) | — |

**Market share, for scale rather than as a lifetime figure:** RevenueCat's State of Subscription Apps 2026 (115,000+ apps) puts **subscription-only monetization — that is, no consumables and no lifetime — at 63.5% overall**, ranging from 79.6% in Shopping to 40.5% in Gaming. Roughly a third of apps therefore run *something* non-recurring. **The benchmark does not separate lifetime from consumables, so it cannot be quoted as a lifetime adoption rate.**

## Migrating into and out of it

**Into it: the cheapest pricing change you will ever ship, and the only one you cannot undo.** There is no meter to build, no dunning, no proration, no grandfathering policy to write. That asymmetry — trivial to adopt, impossible to reverse — is why this pack leads with the arithmetic rather than the mechanics.

**Out of it: you can stop selling it. You cannot un-sell it.** Oura is the observed instance of the only available exit: the lifetime membership is simply no longer offered, the URL 404s, and the existing holders keep what they bought (observed 2026-08-12, no first-party explanation obtainable). Plan for the installed base to be permanent.

**The price-increase toolkit does not apply, and this is worth stating precisely.** L16's Check 12 gives break-even churn as `1 − (P_old / P_new)` — for 500 customers moving $20 → $30, that is 33.3%, meaning you can lose 166 of them and stay flat. **For a lifetime cohort the expression is undefined**: there is no `P_old` per period and no renewal event at which a new price could take effect.

The grandfathering thresholds have nothing to attach to either — and this pack previously called them "the consensus grandfathering playbook", which overstated what they are. They are recorded at `03-tier-architecture` P-062, and each traces to a single vendor blog or aggregator fetched 2026-08-12: **grandfather above a ~20% increase and migrate directly below ~10%, on a 90-day timeline** is SaaSDash's; the **5% canary batch** through billing is PayPro Global's; the **window length** is not a 6–24 month consensus at all but two disagreeing ranges, 6–12 months from two sources against 12–24 months from an aggregator, with only the refusal of *indefinite* grandfathering common to all of them. P-062 also marks the adjacent notice-period figures "numerically unverified". **There is no consensus here, there is a cluster of vendor guidance**, and none of it survives contact with a cohort that has no renewal. The only lever left is the *entitlement* — quietly reducing what "lifetime" covers — and that is the credit-redenomination failure (Cursor's 2025-07-04 apology and refunds) with no billing relationship left to soften it.

**The Nomad List trajectory — the worked case, and the rare downward move.** As recorded in L15, with its grades intact:

```
free Slack community  →  "$5 fee"  →  "$100 lifetime cost"    [all secondhand, one May-2022 article]
                                            ↓
        observed 2026-08-12:  "$19.99 Lifetime" / "$9.99 Lite"  [primary]
```

Every other price change in L15's indie postmortem table is an **increase** — Bannerbear $9 → $49/mo, ConvertKit deliberately priced above Mailchimp at $29 against $10. Nomad List is the only decrease, and it is a decrease in a *lifetime* price specifically, alongside a collapse to a pure two-rung one-off ladder. **No founder explanation was located.** Two readings are available and the evidence cannot separate them: the $100 price may have exhausted its addressable buyers, making a cheap rung the only way to reopen volume against a fixed stock of content; or the cost of serving a member may have fallen far enough (the $244/mo infrastructure claim) that $19.99 is simply fine. **Record the direction, not a theory** — and record the direction as the instructive part, because it demonstrates the one repricing a lifetime SKU *can* make: you can always cut the price for future buyers, and you can never raise it for past ones.

**The asymmetry generalises.** Under lifetime pricing, the only price move available to you is downward, and every downward move is visible to a cohort that already paid more and can never be compensated with anything except goodwill.

## Interactions

**Composes with:** `one-off.md` (a lifetime is a one-off whose deliverable is time rather than an artefact, and it inherits every one-off finding — including that one-off buyers do not honestly convert to subscribers), `free-core.md` (Nomads.com's breadth-fenced free tier is the acquisition engine a terminal-revenue model requires), `subscription.md` (as a lifetime SKU sold alongside, which is Stoic's and Calm's shape), `credits.md` (the capped-balance form, which is the only safe version when marginal cost is non-zero).

**Excludes:** `hybrid.md` and `usage-based.md` at the same SKU. An allowance that refills forever is a subscription you stopped billing; a meter attached to a perpetual entitlement is a credit balance. Both are honest products, and neither is this one.

**Pattern layers that matter most:** `11-expansion-and-retention` (the churn-precision arithmetic is the gate — the entire pack turns on a number this layer says you do not have), `04-price-points` (the COGS floor and the CAC-inclusive floor), `08-urgency-and-timing` (a capped cohort is the honest scarcity that also bounds the liability), `07-risk-reversal` (the guarantee carries the trust load on a single irreversible payment).

## Where this model is contested

**1. The evidence base is four products and one `secondhand` article, and no counterfactual exists anywhere.** Nomads.com, Stoic, Calm (secondary, self-inconsistent) and Oura (discontinued). Nobody has published a comparison of a lifetime SKU against the subscription it replaced, for the same product, on the same cohort. `02-packaging-models` P-029 rates this `anecdote` and that rating is correct. **Every "lifetime pricing works/doesn't work" claim in circulation, including the arithmetic in this pack, is a mechanism argument rather than a measured one.**

**2. The cash-now argument is real and the undiscounted identity understates it.** A solo founder facing a runway gap does not value $183 spread over 20 months the same way a spreadsheet does, and a lifetime sale is a legitimate way to convert future revenue into present survival. **No founder-scale discount rate is published in any source in this library**, so the size of that correction is unknown. The identity in `## The arithmetic` is therefore a floor for a business that expects to exist in five years, and it is deliberately silent about the business that will not exist in five months.

**3. The heavy-user selection claim is a mechanism with an adjacent observation, not a finding.** PayPro measured that *grandfathered* users are often the heavy users who pay least. Nobody has measured usage of lifetime cohorts against subscriber cohorts on the same product. The mechanism is plausible enough to price against and thin enough that it should not be stated as fact.

**4. The Nomad List down-move is one product with no explanation.** It is the most interesting datapoint in this pack and the least usable. The starting price is `secondhand` from a single May-2022 source, the founder's rationale could not be fetched, and a single trajectory does not establish that lifetime prices tend downward. **`one-off.md` reaches the same verdict from the other direction: two products is an observation, not a trend.**

**5. The strongest case against this pack's own conclusion is that the arithmetic assumes you keep serving the customer.** A lifetime buyer who stops using the product costs nothing, and usage decay is real and large in consumer products. If 80% of lifetime buyers go dormant within a year, `c × H` collapses and the required price falls with it. **No dormancy curve for lifetime cohorts is published in this library, and its absence is the single most valuable missing number for this model.** A founder who measures it on their own free tier will know more than any source cited here.

**6. Whether "subscription fatigue" is a real force is asserted more than measured.** The strongest evidence pointing that way is indirect and already counted twice in this library — Stoic's $299 lifetime at ~3× its top annual, and Nomads.com abandoning recurring entirely. Both are in this pack's table. **They are the evidence, not corroboration of it.**
