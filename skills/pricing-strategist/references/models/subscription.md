# Subscription

## What the buyer is purchasing

Continued access. The buyer is not buying a thing, they are buying the state of *having* the thing available — the tool stays installed, the data stays theirs, the workflow keeps working, and the decision does not have to be revisited. What they are really buying is the removal of a recurring decision, which is why subscription feels cheap on the way in and expensive on the way out. The mental accounting is per-month, not per-use: a buyer will happily pay $9/mo for something they touch four times a year and will resent $30 once for something they use daily.

## The mechanics

- **Unit of purchase:** one billing period of access to a defined entitlement set.
- **Cadence:** monthly or annual, auto-renewing. Annual discounts cluster tightly at **16.7–25%**, and are usually expressed as time rather than percent — "two months free" is the market default and it is exactly 16.7% (L15 cross-cutting analysis of ElevenLabs, Fathom, Descript, TinyWow, Runway, Photoroom, observed 2026-08-12).
- **What governs the amount:** capability tier, seat count, or a soft allowance that most buyers never approach. If a hard allowance with paid overage governs the amount, you are running `hybrid.md`, not this.
- **Entitlement on payment:** the whole tier unlocks immediately and stays unlocked for the period. Nothing accrues, nothing depletes.
- **What happens at the limit:** in the pure form there is no limit, only a fair-use policy. In practice most subscriptions carry a soft cap (see `hybrid.md` for what happens when that cap gets a price).
- **Expiry and rollover:** not applicable — there is no balance. Access ends when payment stops; the ex-customer's *data* is a separate policy decision, and it is the one that determines whether cancellation is reversible.

## Fits when

- Value is delivered **continuously or unpredictably**, so the buyer cannot forecast their own usage and does not want to. A tool used "whenever a thing comes up" is a subscription; a tool used "once, in March" is a `one-off.md`.
- **Usage variance across your base is low**, or your marginal cost per use is near zero so variance does not matter. This is the load-bearing condition and it is the one AI products fail — see `## The arithmetic`.
- You want **relationship depth and cross-sell**; the recurring contact is the asset (L01 Ch. 7, the first of the five monetization models).
- The buyer is a **repeat visitor to the problem**. Bookkeeping, issue tracking, email, design files — the problem recurs on its own schedule.
- **Retention economics work.** Annual plans retain at **~28% Year-1 vs ~11% monthly vs ~3% weekly** (RevenueCat 2026, 115k apps, **mobile IAP medians — do not transfer to web checkout**). The counterweight from the same cohort: annual one-year reactivation is **~5%** against monthly's **~20%** — annual buys retention and forfeits the second chance.

**Boundary against neighbouring packs.** Subscription assumes no meaningful metered allowance (that is `hybrid.md`), no abstract currency (`credits.md`), no base-free consumption (`usage-based.md`), and treats any free tier as incidental rather than as the funnel (`freemium.md`) or the distribution engine (`free-core.md`).

## Fails when

- **Your marginal cost per use is material and your usage distribution is skewed.** This is not a soft failure. At a cost-to-serve of $0.04 per unit of work, a flat $30/mo plan runs **86.7% gross margin on a 100-task user, 33.3% on a 500-task user, and −233% on a 2,500-task user** (Digital Applied framework, 2026-06-30, via L10). Flat pricing does not degrade gradually; it inverts, and it inverts on exactly the users you were most pleased to sign.
- **Automated or programmatic usage can reach it.** A flat plan over an expensive backend is arbitrage bait. Anthropic barred Claude Pro and Max flat plans from powering third-party agent frameworks from **2026-04-04**, with a reported rationale that a single agentic session could consume **$1,000–$5,000 of API cost** (PYMNTS, 2026, via L10). Write the term on day one; writing it after the abuse starts converts a term into a takeaway.
- **The buyer's need is genuinely episodic** and they know it. Then every renewal is a decision you lose slowly, and you are one budget review from churn. A person who needs the thing once a year is a `one-off.md` buyer being billed twelve times.
- **You are selling agentic value on a per-seat meter.** Seats proxy value only when humans consume the product one login at a time. Seat-based pricing fell **21% → 15%** in twelve months (Growth Unhinged, 2025-06-04, n=240+, self-reported survey). The widely-repeated companion claim of "40% lower gross margins and 2.3× higher churn" for seat-priced AI has **no traceable primary source** — do not cite it.
- **Scale floor:** none, and that is the point. Subscription is the only model in this library with no operational minimum — one Stripe price object, one webhook, no meter, no balance ledger, no burn table, no expiry policy. Every other model in this directory has to justify its overhead against this baseline. When in doubt, and especially below roughly 100 customers, the honest answer is usually "subscription, and revisit at scale."

## The arithmetic

**Unit-economics shape.** Revenue per customer is fixed; cost per customer is a random variable. Margin is therefore a function of the *usage distribution*, not of the price:

```
GM(user) = (P − c · q_user) / P
```

where `P` is the plan price, `c` is cost-to-serve per unit of work, and `q_user` is that user's monthly volume.

**The margin cliff — and where it sits exactly.** Set GM = 0:

```
q* = P / c        ← break-even volume; every unit past this is a loss
```

Above `q*` the margin is not thin, it is negative, and it scales linearly with how far past `q*` the user goes. This is the flat-price margin inversion.

**The check that reveals coherence:** compute `q*`, then look at your actual p95 usage. **If p95 > q\*, your flat price is a bet that your best customers stay mediocre.** Price the package against p95, not p50 (L10-04).

**Worked example — Ledgerly.**

Ledgerly's Books rung is $19/mo for 400 receipts. Treat it for a moment as a flat "unlimited" $19 plan, which is what founders reach for when the cap generates support tickets.

Ledgerly is fictional, so its cost-to-serve is derived rather than measured, and it is derived once — in `02-packaging-models` P-021, restated in `models/_TEMPLATE.md` — at **$0.060 per receipt before the cost levers**. That is the figure this stress test uses, because the test is about the ladder as it stands. An earlier version used $0.040, which is the generic single-pass example from the same source rather than Ledgerly's own three-pass cost; correcting it moved every cell below and moved the break-even volume by 158 receipts. On a real product the instruction is unchanged: `[instrument input/output tokens per receipt in production, take p50 AND p95, include retries, OCR pre-pass, guardrail calls and failed extractions you don't charge for.]`

```
q* = P / c = $19.00 / $0.060 = 316.7 receipts
```

| User | Receipts/mo | Cost | Flat $19 revenue | GM |
|---|---|---|---|---|
| Light | 50 | $3.00 | $19 | **84.2%** |
| Median | 200 | $12.00 | $19 | **36.8%** |
| Break-even | 317 | $19.02 | $19 | **≈0.0%** |
| Power | 1,000 | $60.00 | $19 | **−215.8%** |
| Power+ | 2,000 | $120.00 | $19 | **−531.6%** |

One 2,000-receipt user loses **$101/mo**. A light user contributes **$16/mo**. So **6.3 light users are consumed by one power user**, and the two sentences have to agree: at Ledgerly's 40 paying customers, **six power users erase the margin of the other thirty-four** — 6 × $101 = $606 against 34 × $16 = $544 — while five do not, at $505 against $560. This pack previously said four power users erased thirty-six, which contradicted its own ratio in the following clause; the corrected figures are consistent in both directions. This is the arithmetic reason Ledgerly's existing 400-receipt cap should be defended rather than removed, and the reason the fix is `hybrid.md` rather than a bigger flat number. Note that the cap sits *above* the break-even volume of 317, so even the capped Books tier is underwater at full utilisation until the cost levers are pulled.

**The second check — annual coherence.** Ledgerly has no annual plan. At the market default of "two months free" (16.7%): Solo $9/mo → $90/yr ($7.50/mo effective); Books $19/mo → $190/yr ($15.83/mo effective). Verify the ladder still holds inside the annual prices: $90/yr for 1,200 receipts = $0.075/receipt; $190/yr for 4,800 receipts = $0.0396/receipt. Monotone decreasing, and Books annual ($15.83/mo effective) does not undercut Solo monthly ($9) — the failure mode L16's commitment-fence row names, where the annual price of tier *n+1* undercuts the monthly price of tier *n* and breaks the ladder.

## How it is presented

The page must answer **"what do I get for as long as I pay"** and nothing else. Two things are load-bearing:

1. **A billing toggle with the saving expressed as time, not percent.** Notion ships "Pay monthly / Pay yearly" with "**Save up to 20% with yearly**" (observed 2026-08-12, `references/teardowns/notion.md`). ElevenLabs and Fathom use "two months free". Time is more legible than a percentage and it is arithmetically identical at 16.7%.
2. **The per-period unit stated in the price string itself.** Linear ships "**$10 per user/month**" / "Billed yearly" rather than a bare number (observed 2026-08-12, `references/teardowns/linear.md`). Notion: "$10/member/mo". The unit in the price string is what stops the buyer computing the wrong total.

Do **not** show a usage meter, allowance table, or credit burn table on a pure subscription page — every one of those tells the buyer there is a limit they should be worried about, and if there genuinely is one you are running `hybrid.md` and should say so.

Where the tier fence is capability rather than volume, each tier needs a one-sentence description a buyer can repeat. Notion's Business rung is fenced almost entirely on "full Notion AI plus SSO and admin" for exactly 2× Plus, and the teardown records secondary analyses flagging that as the page's weakest value justification (observed 2026-08-12) — a 2× jump carried by one adjective-adjacent feature is the shape L16 Check 6 rejects.

## Who runs it

| Product | Structure | Observed | Teardown |
|---|---|---|---|
| Linear | Per-seat subscription, Free / Basic "$10 per user/month" / Business "$16 per user/month" / Enterprise custom; free-tier fence is **issues (250)**, not seats | 2026-08-12 | `references/teardowns/linear.md` |
| Notion | Per-seat subscription, Free / Plus $10 / Business $20 per member/mo / Enterprise custom, with a credit meter stacked on top for agents | 2026-08-12 | `references/teardowns/notion.md` |
| Superhuman | Per-seat subscription where a formerly standalone premium product became the upgrade trigger for a suite tier; Free / Pro / Business / Enterprise | 2026-08-12 | `references/teardowns/superhuman.md` |
| Raycast | Freemium flat-rate subscription, "Free, Forever." / Pro "$10 / month" ("$8 / month" annual) / Teams Pro "$15 / user / month" | 2026-08-12 | `references/teardowns/raycast.md` |
| Claude (Anthropic) | Flat subscription $20 / $100 / $200 governed by rolling-window and weekly rate limits rather than a priced allowance | 2026-07-05 (explainx.ai timeline, secondary) | — |

## Migrating into and out of it

**Into it, from one-off:** the hard part is not the billing, it is that a buyer who bought an artefact does not automatically want a relationship. L14's finding across the decision-advice neighbourhood is blunt: **nobody converts a one-off artefact buyer into a subscriber honestly.** The only working path observed (MentorCruise, 2026-08-12) works because the recurring product is *a relationship with a specific human* — a different, obviously better thing — not a repetition of the same deliverable. If your subscription is just "the same artefact, monthly", expect the JustAnswer outcome: that company monetised single-answer intent by defaulting buyers into recurring billing and is defending two ROSCA counts filed **2026-01-13** (L14, observed 2026-08-12).

**Into it, from usage-based:** easy and usually welcome. Buyers prefer a predictable line item; procurement especially.

**Out of it, to hybrid:** the standard move, and the survivable version is **additive, not replacing**. Figma, HubSpot, Adobe and Cursor all added credit meters in 2025 *without killing the seat price* (PricingSaaS via L10, 2026-01-07). Retrofitting a second dimension onto an existing price is far more survivable than repricing the first one.

**Grandfathering.** Compute break-even churn before you touch a price: `break-even churn = 1 − (P_old / P_new)`. At $20 → $30 that is **33.3%** — you can lose a third of the affected cohort and stay flat (L16 Check 12, S21). Time-limit every grandfather clause and put an expiry date on it; a permanent grandfather converts your best early customers into your worst-paying ones, which is exactly PayPro's diagnostic that "users on grandfathered pricing are often the heavy users who pay the least."

## Interactions

**Composes with:** `freemium.md` and `free-core.md` (both are subscriptions with a free rung, differing in what the free rung is *for*); `hybrid.md` (subscription is the base fee inside it); `credits.md` (a credit allowance bolted onto a seat price — the Figma/Notion shape); `one-off.md` as a lifetime SKU sold alongside (Stoic's "$299.00 Lifetime Premium", observed 2026-08-12, is a one-off *purchase of a subscription*).

**Excludes:** `usage-based.md` in its pure form, and `hard-paywall.md` is not an alternative to subscription but a decision about the free rung underneath it.

**Pattern layers that matter most:** `03-tier-architecture` (the fence per rung is the whole design), `11-expansion-and-retention` (annual/monthly mix and the save flow are where subscription revenue is actually won), `04-price-points` (the annual ratio).

## Where this model is contested

**1. The seat is dying, and the obituary is overwritten.** Seat-based pricing fell **21% → 15%** in twelve months (Growth Unhinged, 2025-06-04, n=240+), and Gartner is quoted in trade press putting up to **$234B of enterprise software spend structurally at risk by 2030** on this basis. But 21% → 15% leaves seats materially present, **29% of >$150M-ARR companies still use them** (Growth Unhinged, 2026-05-13, n=230), and the "SaaSpocalypse" framing is trade-press narrative rather than a pricing finding. Both surveys are self-reported and self-selected from a newsletter audience that skews pricing-engaged; the author's own consecutive editions disagree about levels (see `hybrid.md`).

**2. The flat-price inversion is the serious critique and it is arithmetic, not opinion.** For any product with material per-use COGS, the subscription's defining virtue — the buyer stops thinking about usage — is precisely what destroys it. The counter-argument is that inference costs fall fast (a16z's 2024 "LLMflation" analysis estimated roughly **10× annual decline** in inference cost per unit of capability, via L10), so a flat plan that inverts today may be comfortable in eighteen months. That is a real argument and it is also a bet on a trend nobody has published a norm for.

**3. Subscription fatigue is asserted more than measured.** The claim that buyers now reject new subscriptions on principle circulates widely; the strongest evidence in this library pointing that way is indirect — Stoic's "$299.00 Lifetime Premium" at roughly 3× its top annual SKU implying a ~3-year breakeven, and Nomads.com collapsing to a pure two-rung one-off ladder ($19.99 Lifetime / $9.99 Lite, observed 2026-08-12) after a reported $100 lifetime in 2022. Two products is an observation, not a trend, and the founder's explanation for the Nomads.com move could not be found.
