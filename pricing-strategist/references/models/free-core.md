# Free Core

## What the buyer is purchasing

Nothing, permanently — and that is not a stage in a funnel, it is the product. The person using the free thing is not a prospect who has failed to convert yet. They are the distribution: they arrived from a search result the free product ranks for, they linked to it, they shared a file that dragged a collaborator in, or they are the supply side of a market that only works because they are there. **Revenue comes from an edge of the business — a professional feature, an adjacent SKU, a team plan, an app, sponsorship — while the free core keeps producing the traffic that makes the edge sellable.**

The distinction that defines this pack: in `freemium.md` the free tier is a funnel and every non-converting free user is a cost. Here, **every free user is an asset**, and the conversion-optimising instinct — tighten the limit, gate the good part, put a wall in front of the value — destroys the acquisition engine that pays for everything. The two models look identical on a pricing page and are opposite businesses underneath.

## The mechanics

- **Unit of purchase:** whatever is sold at the edge — a Pro subscription, a team plan, an app, an export, an adjacent product. The core is never the SKU.
- **Cadence:** the free core is perpetual and unconditional. The edge is usually a subscription (`subscription.md`) or a one-off (`one-off.md`).
- **What governs the amount:** the edge's own ladder. The core has no meter the buyer can feel.
- **Entitlement on payment:** something *additional*. Never something *restored*.
- **What happens at the limit:** there should not be a limit on the core. Where there is one, it must sit far outside normal use, so that hitting it is evidence of a genuinely different buyer rather than of ordinary success.
- **Expiry and rollover:** not applicable to the core. It does not expire; that is the promise.

## Fits when

- **The free product is measurably the acquisition channel.** Concretely: it ranks for search terms with buying intent, or it produces links, or it drags a second person in per use (network effect), or it supplies the inventory a marketplace needs. If you cannot name which of those four it is, you are not free-core.
- **Marginal cost per free user is genuinely near zero.** A web tool that runs client-side, a static page, a calculator. This condition is much stricter here than in freemium, because the free population is supposed to grow without bound and there is no conversion rate to divide the cost by.
- **The value is legible and immediate**, so a stranger who lands from a search result gets the thing they came for in seconds and has a reason to return or to link.
- **There is a real edge to sell** — a genuinely different buyer or a genuinely additional capability. Free-core without an edge is not a business model, it is a hobby with traffic.
- **You can commit to not drifting.** RevenueCat's remedy is a written **Bill of Rights**: an internal constitution naming what must always be free and what is off-limits for A/B testing. Life360's version — "the core map, location history, and place alerts, they must be free." Without that document, free-core degrades into freemium one locally-winning experiment at a time.

**Boundary against neighbouring packs.** Same free rung as `freemium.md`, opposite purpose: funnel vs distribution, conversion vs reach. `hard-paywall.md` is the direct negation of this model and must never be recommended over it.

## Fails when

- **You paywall the core.** This is the failure this pack exists to prevent, and the mechanism is specific: the free product's rankings, links and word-of-mouth are a *stock* built over time by free usage. Gating it stops new stock forming immediately while the existing stock decays — so the conversion lift shows up in week one and the traffic collapse shows up over the following quarters, by which point the A/B test has been declared a win and shipped. **The measurement window that would catch it is longer than the window anyone runs.**
- **The free core has real per-use COGS.** Then unbounded free growth is unbounded cost, and you have built a business whose success condition is bankruptcy. Either the core must become cheap to serve (client-side, cached, batched) or you are in `freemium.md` and must fence accordingly.
- **The edge does not attract a different buyer.** If the paid thing is just "the free thing but more", every improvement to it is a temptation to remove something from free, and the drift begins.
- **You measure the free core on conversion.** A free-core product judged by free→paid rate will always look broken, and every remedy that dashboard suggests is the wrong one. Its KPIs are reach, return rate, referring domains, ranking positions, and supply-side liquidity.
- **Scale floor — inverted.** Free-core has no minimum customer count; it has a minimum **traffic** requirement, and below it the model is simply not operating. The mechanical test: `does the free population grow month over month without paid acquisition?` If not, free is not doing distribution work and you are paying its costs for nothing.

## The arithmetic

### The check that reveals whether you are actually free-core

```
free-core is real  ⟺  d(new free users)/dt  is materially driven by existing free users
                       (search rankings, links, invites, shared artifacts, supply liquidity)
```

If new free users arrive only from paid ads or founder-led promotion, the free tier is a cost centre wearing a distribution costume — treat it as `freemium.md` and fence it.

### The cost of gating, stated so it can be compared to the conversion lift

```
value of the free core  =  Σ over months ( organic sessions attributable to free × conversion of that traffic to the edge × ARPU )
```

The conversion lift from gating is immediate and measurable. The traffic loss is delayed and diffuse. **Any test that compares them must run past the lag of the acquisition mechanism** — for SEO, that is quarters, not weeks. `[the lag for any given product — unmeasured; no source in this library quantifies SEO decay after a paywall, and any number offered would be invented.]`

### Worked example — Ledgerly

Ledgerly is **not** free-core, and establishing that is the useful exercise, because the failure mode this pack guards against is a product misidentifying itself in either direction.

Run the four tests:

| Test | Ledgerly | Verdict |
|---|---|---|
| Does the free tier rank / attract organic search? | 2,000 monthly visitors, source mix `[unattributed — not instrumented]` | **Unknown** |
| Does one free user drag in another? | A receipt is processed alone; nothing is shared | **No** |
| Is there supply-side liquidity? | No marketplace | **No** |
| Is marginal cost per free user near zero? | Every free receipt is an inference call | **No** |

Three clear noes and one unknown. And the free tier's own design settles it: **5 receipts/month is below the monthly volume of any real user**, so the free tier is a demo with a calendar attached rather than a usable product that could accumulate reach. Ledgerly is `freemium.md`, and its free tier should be optimised for conversion, not for reach.

**What Ledgerly would have to change to become free-core**, with the arithmetic that would follow: make the core receipt-to-entry conversion unlimited and cheap enough to serve unlimited. Ledgerly's cost-to-serve is **$0.060 per receipt pre-lever and $0.0186 after aggressive caching, a small routed model and batch execution** (`02-packaging-models` P-021, restated in `models/_TEMPLATE.md`) — so even the post-lever figure is a real bill on every free receipt, and unbounded free volume is unbounded cost at either number. The discount rates behind those levers (**≈90% off cached input reads, ~5× intra-family model spread, ~50% off batch**) **name no vendor and carry no date**; they trace to one practitioner framework post (Digital Applied, 2026-06-30) rather than to any provider's price list, so `[read the current rates off your own provider's price page before assuming a lever gets you to a given cost.]` Then sell the edge: the accountant-ready export, multi-year retention, the tax-season summary. At that point the free population is the marketing budget. **Until the cost-to-serve supports it, recommending free-core to Ledgerly would be recommending unbounded cost.** That conditional is the honest answer, and it is a cost question rather than a strategy question.

### The vault's own case — and why this pack exists

The Build engine already carries this rule as a hard `fails-when`. From `Build/Plays/Hard Paywall with Superwall.md`, verbatim:

> `fails-when: "FREE-CORE products — never recommend this for [[Projects/MetronomeOnline/README|MetronomeOnline]]. Also fails for B2B, considered purchases, and any product whose value only becomes visible after use."`

and step 1 of that play:

> "**Confirm you're not free-core.** If your free tier is the distribution engine, stop — go to [[Stripe Button Day One]] and monetize an edge instead."

MetronomeOnline is a free web metronome at metronomeonline.app whose stated growth plan is "focused SEO, targeted distribution, and feature depth that increases session time and return visits" (`Projects/MetronomeOnline/README.md`, project hub, status active as of 2026-06-30). A metronome behind a paywall ranks for nothing and gets linked by nobody; the free instrument **is** the acquisition engine, and the monetisable edge sits elsewhere — depth features, an app, a practice product. **The vault reached this conclusion independently of the external research, and it is recorded here so the pricing library and the Build engine cannot drift apart on it.** Per this skill's rules, `Pricing/Ledger.md` entries about this user's own products outrank anything in this pack.

## How it is presented

- **The free thing is the product page, not a pricing tier.** A free-core product's landing page shows the free product working. The pricing page is where the *edge* is sold, and many free-core products do not surface a pricing page in the primary nav at all.
- **Never phrase the free core as a restriction.** Not "Free — limited features". Figma's Starter card leads with what is unbounded: "**Unlimited drafts**", "UI kits and templates" (observed 2026-08-12, `references/teardowns/figma.md`). Raycast's is a promise rather than a tier name: "**Free, Forever.**" (observed 2026-08-12, `references/teardowns/raycast.md`).
- **The edge must be described as an addition, in the vocabulary of a different job.** "For teams", "For professionals", "For your business" — not "Unlock", not "Remove limits".
- **Publish the Bill of Rights where users can see it** if you can bear to. It converts a policy into a promise, and it is the strongest retention argument a free-core product has. No product in this library's teardown set was observed doing this publicly — RevenueCat presents it as an internal document.

## Who runs it

| Product | Structure | Observed | Teardown |
|---|---|---|---|
| Figma | Starter free with "Unlimited drafts"; monetises at the **seat** edge (Professional $16 / Organization $55 / Enterprise $90 per Full seat, with $12/$25/$35 Dev and $3/$5/$5 Collab seats). Free files shared with collaborators are the network mechanism; the Collab seat at **$3/mo** exists precisely so free-adjacent participants are cheap to include | 2026-08-12 | `references/teardowns/figma.md` |
| 16Personalities | Free test taken at enormous scale ("a billion tests"); monetises a one-off report at "$29" and **accepts the one-off as terminal**, monetising breadth rather than depth | 2026-08-12 | — |
| MetronomeOnline (this vault) | Free web metronome; growth plan is SEO + distribution + session depth; monetisation deferred to an edge. Named in `Build/Plays/Hard Paywall with Superwall.md` › `fails-when` as a product that must never be hard-paywalled | project hub, 2026-06-30; play observed in-vault | — |
| Slack | Free tier retained permanently with a 90-day history fence; the free workspace is the network that makes the paid workspace worth buying — note this is the **hybrid architecture** in RevenueCat's taxonomy (taster limits *plus* exclusive premium features like Slack Connect), so it sits on the boundary between this pack and `freemium.md` | via L16 (S12) | — |

**A caution on this table.** Free-core is defined by a *mechanism* (free users produce acquisition) that pricing pages do not disclose. Figma and Slack are classified here on the strength of an observable network mechanism, not on a published statement from either company. **No source in this library measures what share of any of these products' acquisition is attributable to their free tier.** Treat the classification as a reading, and where you can, verify it against the product's own attribution data before betting a pricing decision on it.

## Migrating into and out of it

**Into it, from freemium:** cheap in mechanics, expensive in discipline. You must remove fences and then not put them back, and you will have quarters where the conversion dashboard says you were wrong.

**Out of it, to freemium or hard paywall: assume it is one-way.** Rankings, links and habit are stocks built slowly and lost quickly. There is no grandfathering mechanism that protects a search ranking. If you do it anyway, do it on **new traffic only** and hold the old free experience for the existing base — and accept that you will not have a clean read for at least a quarter.

**Repricing the edge** is safe and routine, because it does not touch the core. That is the model's structural advantage: **your price experiments cannot damage your acquisition**, which is a freedom neither `freemium.md` nor `hard-paywall.md` has.

## Interactions

**Composes with:** `subscription.md` and `hybrid.md` at the edge; `one-off.md` at the edge (16Personalities' "$29" report against a free test is the cleanest instance in this library); `usage-based.md` at an API edge, where the free core builds the audience and the metered API monetises the professionals inside it.

**Excludes:** `hard-paywall.md`, categorically and by mechanism — this is the one exclusion in this directory that should be stated as a refusal rather than a trade-off. Also excludes any credit meter *on the core*: a meter on the free product is a fence, and a fence on the core is the thing this pack forbids.

**Pattern layers that matter most:** `03-tier-architecture` (specifically the lead-magnet-vs-product split, which is this decision), `09-trust-and-proof` (the permanence of free is a trust claim and must be honoured), `11-expansion-and-retention` (the edge is where all expansion mechanics live).

## Where this model is contested

**1. The best large-N data in this library argues against it, and the argument is serious.** Gating access produced **5× conversion (10.7% vs 2.1% D35 download-to-paid) and ~8× revenue per install ($3.09 vs $0.38 at D60), with statistically identical Year-1 payer retention (27% vs 28%)** — RevenueCat 2026, 115,000+ apps, $16B, **mobile in-app purchases**. A free-core advocate must answer this honestly: on the measured window, gating wins decisively. The rebuttal is not that the data is wrong but that **the data cannot see the mechanism free-core relies on** — an app-store cohort has store search as its acquisition channel, so a free tier there does far less distribution work than a free web product does, and D60 is far shorter than the lag over which SEO and link equity decay. Both halves of that rebuttal are reasoning, not measurement. **Nothing in this library quantifies the traffic loss from paywalling a free-core product**, and that is the single biggest evidential hole in this pack.

**2. "Free-core" is diagnosed after the fact more often than it is designed.** It is an attractive label for a product that has not yet found a way to charge, and the four tests in `## The arithmetic` are easy to answer optimistically. The discipline is to answer them with instrumentation — referring domains, organic landing pages, invite rate, supply-side counts — and to accept "we are freemium" when the data says so.

**3. The cost condition is getting harder, not easier.** Classic free-core products were cheap to serve. A free core with per-inference cost is a fundamentally different animal, and the industry's response so far has been to fence it: Anthropic barred flat plans from powering third-party agent frameworks from **2026-04-04** after a reported **$1,000–$5,000 of API cost** per agentic session; Perplexity's "unlimited Pro Search" cap was cut from 600 to 200 per week in early 2026. Both are free-adjacent generosity being withdrawn under cost pressure, and they suggest the free-core promise is very hard to keep on top of an expensive backend.

**4. The drift critique cuts both ways.** RevenueCat's warning is that free-core erodes through accumulated local wins. The opposing reading is that those wins are the market telling you the free tier was over-generous, and that a Bill of Rights is a mechanism for ignoring evidence. Both readings are consistent with the same data; what separates them is whether the free tier is genuinely producing acquisition — which returns to test 1, and which most products never actually measure.
