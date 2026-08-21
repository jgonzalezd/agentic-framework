# Benchmarks

**Loaded at:** Phase 2 (evidence inventory and regime declaration). Re-read any single table before you cite a number from it.

Every row below carries five fields: **value · exact cohort definition · sample size · source · date**. A row missing any of the five is not usable as evidence and is marked in the `Fields` column with what is missing. The `Fields` column is the first thing to read on any row you are about to quote.

Provenance flags used throughout, preserved from the research lanes: `[secondary]` (reached only through another publisher), `[proxy]` (fetched via a proxy or mirror), `[unverified-at-source]` (the primary page could not be fetched; figure comes from a search summary), `[gated]` (the full dataset sits behind an email form), `[paywalled]` (behind payment), `[derived]` (computed here from published prices, with the arithmetic shown).

---

## How to use these numbers

Four walls run through this file. Crossing one silently is the failure mode this whole skill exists to prevent, and Rule 4 of `SKILL.md` — *cohorts do not transfer silently* — is enforced here.

### 1. The mobile-vs-web wall

**Roughly 95% of the figures in the trial-mechanics, paywall, price-point, consumer-churn, involuntary-churn and reactivation tables are App Store / Google Play in-app-purchase artifacts.** They come from RevenueCat (115,000+ apps), Adapty (16,000+ apps) and Superwall (40M+ paywall opens) — three vendors whose entire dataset sits inside the store billing rails. A Stripe web checkout is a different machine.

What specifically does **not** cross the line:

- **Trial-to-paid conversion (25–45%).** In IAP, starting a trial requires a stored Apple/Google credential and one biometric tap. There is **no card-entry step**. RevenueCat's trial numbers are implicitly **100% card-on-file**. A web trial must first declare card-required vs card-not-required — and those two have different denominators (see wall 3).
- **Cancellation timing (55.4% of 3-day-trial cancels on Day 0).** iOS cancellation is a single OS-level flow reachable from Settings, and Apple emails reminders. The Day-0 spike is partly an **Apple UX artifact**, not a pure preference signal.
- **Involuntary churn: 32.3% of Google Play cancellations and 15.2% of App Store cancellations are billing errors.** These are **store billing-rail failure rates**. Stripe's retry logic and card-account-updater economics are entirely different. **Never quote the Google Play figure for a Stripe product.** The same applies to the recovery lifts — grace periods (+57%), account holds (+35%, −8% involuntary churn) and the In-App Messaging API (2×) are **Google Play platform features that do not exist on Stripe**.
- **Weekly plans.** Weekly billing is mobile-native — 56% of Adapty-cohort subscription revenue — and is rare and often distrusted in web SaaS. Every weekly figure in this file is a mobile figure.
- **Price points ($5.99 weekly / $34.80 yearly medians).** Shaped by Apple's price-tier grid, mobile impulse context, and a 30% take rate that makes low ARPU brutal. A Stripe product at ~2.9% + 30¢ can support architectures that would be irrational in-app.
- **Revenue per install, and time-to-$10K-MRR (109-day median).** "Install" has no web analogue, and these are App Store launches with App Store discovery dynamics.

**The one direct measurement of the wall itself.** RevenueCat's Dipsea test (n=1 app, ~12,500 users, ~3,100/variant, US only, 2025-05-07 → 2025-05-28) forced users out to a web checkout: initial conversion fell **27.0% → 18.1%**, and **CTA-tap → trial-start fell 65.6% → 39.1% — the link-out alone destroyed ~40% of intent.** Trial-to-paid was slightly *better* on web (26.3% vs 25.0%) because web-acquired users were more qualified; end-to-end conversion to paying was **6.3% IAP vs 5.3% web**. Net proceeds per customer: **$2.09 IAP vs $1.96 web** at the 30% fee, **$2.53 vs $1.96** at the 15% Small Business Program rate. This is **n=1, three weeks, renewals and long-term churn excluded** — an anecdote, not a benchmark. Adapty's independent cut (in-app paywall 1.60% conversion / $40.10 LTV vs web paywall 1.10% / $35.80) points the same way at larger N, which raises confidence in the direction only.

**What crosses with care**, because the mechanism is not platform-specific: the hard-paywall-vs-freemium *retention parity* finding (27% vs 28% year-1); annual plans retaining better than monthly and the shape of the annual cancellation curve (Month-1 spike, Month-12 pre-renewal spike); longer trials converting better than shorter ones (direction only, never magnitude); the high-price/high-LTV-despite-lower-retention trade.

**Tables that may cross:** *Annual discount ratios* (web SaaS list prices), *Volume-discount curves and top-up premiums* (web SaaS/AI list prices), *Unit economics and margin expectations* (mostly B2B/AI web), the checkout and cart-abandonment rows in *Conversion and funnel rates* (web e-commerce), and *Referral participation* (Shopify e-commerce — its own cohort, see the table note).
**Tables that may not:** *Trial mechanics*, *Paywall type and placement*, *Churn and retention — consumer* except where marked, *Involuntary churn* except the Churnkey/Stripe rows, *Price points by category*, and every RPI/RLTV figure.

**One carve-out inside *Trial mechanics*.** Three subsections added on 2026-08-12 — *Trial length: the only randomised evidence*, *Web-billing subscription aggregate: Recurly*, and *The substitute for a public web benchmark: Stripe's private one* — are **web figures and cross the wall by construction**. Each carries its own scope banner. The main trial table above them remains mobile-only.

### 2. The B2B-vs-consumer wall

L05 swept the PLG/SaaS canon and flagged the following as **B2B-only, do not import into a consumer product**:

- **All NRR and expansion-revenue benchmarks.** The 102% median NRR, the growth quadrants, the entire expansion-pricing edifice assumes accounts that *grow* — more seats, more usage, more departments. A single consumer paying $19/mo has no organization to expand into. For a solo consumer product NRR above 100% is essentially unreachable through expansion.
- **ACV-linked retention.** SaaS Capital's central finding is that retention *rises with ACV*. A sub-$30/mo product sits below the bottom of their lowest published band, so those benchmarks read **optimistic** down-market, not conservative.
- **Seat-based reasoning and its critique.** Both the seat default and the canon's argument against it presume multi-user accounts. Neither the disease nor the cure applies to a single-user consumer product.
- **The Enterprise / "Contact us" tier**, and every deal-loss-rate heuristic ("lose 20% of deals on price") — in self-serve consumer you observe bounce, not rejection, and bounce has a dozen causes.
- **Sales-assisted freemium bands** (5–7% good / 10–15% great) — unavailable at a $19/mo price point on unit economics alone.
- **The 3:1 LTV:CAC rule and the 5–7 month CAC payback target.** Derived from businesses with 1–2% *monthly* logo churn plus expansion revenue. A consumer app at 10%/month churn and no expansion is a different animal.
- **Buyer ≠ user economics.** Much B2B WTP research works because the buyer spends someone else's money — 70% of AI spend comes from an existing software budget (n=230, Apr–May 2026). Consumer WTP is structurally lower and far more loss-averse than any figure in the B2B literature.

The **only** direct consumer free-to-paid cut in the entire PLG canon is *B2C/hybrid: good 5–7% / great 8–12%* (n=200, Jan 2026) — one row inside a B2B study, with an unknown number of B2C respondents behind it. It is the most relevant number available and it is thin.

### 3. The definitional problem — why the "trial conversion benchmark" genre is broken

**Card-gated and ungated trials have different denominators.** ChartMogul (n=200 B2B products, Jan 2026) measured, per 1,000 website visitors: a card-required trial produces **35 signups → 10.5 customers**, while a card-free trial produces **45 signups → 3.6 customers**. Expressed as free-to-paid, that is **25–35% "good"** for card-required against **4–6% "good"** for card-free. The two rates are computed over populations that were filtered differently — one number describes people who already surrendered a card, the other describes everyone. **Comparing them, averaging them, or quoting either without its gating status makes the number meaningless.** Any benchmark headline of the form "trials convert at X%" is comparing incomparable things unless it states card status, and almost none do.

**And the two big free-to-paid datasets contradict each other.** Both come from Kyle Poyar's orbit:

| Study | "Good" free-trial free-to-paid | "Great" | Sample | Date |
|---|---|---|---|---|
| Lenny × OpenView × Pendo × Growth Unhinged | **8–12%** | 15–25% | 1,000+ products | Aug 2023 |
| ChartMogul / ProductLed / Growth Unhinged | **4–6%** (no card) | 10–15% | 200 B2B products | Jan 2026 |

The most likely explanation is definitional: the 2026 study defines conversion as *"percentage of leads or free signups that convert to become a paying customer within six months"* and splits card-required trials into their own band, which pulls the no-card band down. **Nobody in the canon reconciles them publicly, and the 2026 sample is five times smaller.** Anyone quoting "good free-trial conversion is X%" is quoting one of two incompatible answers.

**Do not average them.** Cite the 2026 numbers with their definition attached, or cite the 2023 numbers with theirs, and say which you used.

The same disease runs through the mobile data. "Conversion rate" variously means download→paid at D35, download→trial at D30, trial→paid, or paywall-view→purchase — **and these differ by an order of magnitude.** Two sources fetched on the same day gave incompatible freemium medians: 2.1% (RevenueCat, D35 download-to-paid) against 8% (an aggregator) and 30% for card-required trials, with a third citing 40–60%. Use 2–5% for self-serve free→paid as a planning number and **treat anything above 10% as requiring a stated definition before you believe it**. **Carry the planning number's own cohort with it, because it has no consumer-web measurement behind it:** its low end is RevenueCat's mobile IAP download-to-paid median and its high end is ChartMogul's B2B survey freemium band, and nobody has measured the quantity for a low-priced consumer web product. It is a planning placeholder in the absence of a benchmark, not a benchmark.

### 4. Staleness — which tables decay fastest

Ordered by decay rate, fastest first:

1. **AI pricing and AI margins.** The most-cited AI gross-margin band (50–60%) originates in a16z's *The New Business of AI* — **2020**. Measured AI gross margin moved 41% (2024) → 45% (2025) → 52% (Jan 2026 reading). Inference cost has been estimated to fall ~10× annually per unit of capability. **A 2024 AI-pricing figure is already stale; a 2020 one is a historical artifact being quoted as current.** Anything in *Unit economics and margin expectations* tagged with an AI cohort should be re-derived, not reused.
2. **Mobile subscription benchmarks.** RevenueCat re-publishes annually and the levels move materially year on year: hard-paywall D35 conversion 12.11% (2025) → 10.7% (2026); annual year-1 cancellation 56% (2025) → 72% (2026). **The year-over-year comparisons compare different samples** — 75,000 apps/$10B in 2025 vs 115,000/$16B in 2026 — so an unknown share of every "trend" is composition change from 40,000 newly added apps skewed toward recent launches and AI apps. The 56% → 72% jump in particular is too large to be plausibly all real.
3. **Pricing-model mix and price-change cadence.** Hybrid pricing was reported at 41% (n=240, Apr–May 2025) and 37% (n=230, Apr–May 2026), each described as a rise from a lower prior-year base, because the respondent mixes differ. Treat "hybrid is the plurality model, roughly 35–40%" as the defensible statement and **do not draw a trend line across the two**.
4. **Checkout and form-field benchmarks.** Baymard updates these; the current figure is 11.3 average form fields (2024), down from 11.8 (2021) and 12.7 (2019). Anyone quoting 14.88 is eight years behind.
5. **Page-anatomy census and live price observations.** The 33-page census and every teardown price was fetched **2026-08-12**. Pricing pages change constantly — the same dataset recorded 1,800+ pricing/packaging changes across 500 companies in 2025, i.e. 3.6 per company per year. **Assume any observed price is wrong within a quarter.**
6. **Behavioural price psychology.** Slowest-decaying in principle, but note the Fenneman et al. (2022) hypothesis that consumers have developed compensatory heuristics against psychological pricing — if true, the *age of a study is a discount factor on its estimate*, and nobody has systematically dated the decay.

### 5. Two structural cautions that apply to every table

**Vendor cohorts are not markets.** RevenueCat states it processes roughly **20% of global subscription app revenue** — meaning ~80% of the market is invisible, and the missing 80% is concentrated at the top (Netflix, Spotify, Duolingo, ChatGPT and most $100M+ apps run their own billing). Every "median app" figure describes the median *RevenueCat* app. Adapty and Superwall have the same problem plus a commercial incentive: Adapty sells paywall A/B infrastructure and publishes that experimenters earn up to 40× more; Superwall sells paywall tooling and publishes that better paywalls convert 37% better. These may be true and they are also exactly the finding each vendor needs.

**Almost nothing here is causal.** None of the published cuts control for anything. Hard-paywall apps are probably in different categories with different teams than freemium apps; multi-page-paywall builders are more sophisticated than single-page ones; apps running 50 experiments have the traffic to run them. **Every "X converts N× better than Y" below is a correlation between app populations, not a measured effect of switching.** The single true experiment in the mobile lane is the Dipsea IAP-vs-web test, and it is n=1.

---

## Conversion and funnel rates

### Free-to-paid by entry model — B2B, self-reported survey

| Metric | Value | Exact cohort | n | Source | Date | Fields |
|---|---|---|---|---|---|---|
| Median free-to-paid, all models | **8%** | Share of leads/free signups becoming paying customers **within six months**; B2B software products, self-reported via Typeform | 200 | ChartMogul, *The SaaS Conversion Report* | Jan 2026 | 5/5 |
| Freemium (regular) — good / great | **3–5% / 8–12%** | as above | 200 | ChartMogul | Jan 2026 | 5/5 |
| Freemium (ungated, no account needed to try) — good / great | **7–9% / 8–12%** | as above | 200 | ChartMogul | Jan 2026 | 5/5 |
| Free trial, **no card** — good / great | **4–6% / 10–15%** | as above | 200 | ChartMogul | Jan 2026 | 5/5 |
| Free trial, **card required** — good / great | **25–35% / 50–60%** | as above; only 20% of trial products require a card | 200 | ChartMogul | Jan 2026 | 5/5 |
| Free trial, card required — observed rate | **30%**, ">5× ones that don't" | as above | 200 | ChartMogul | Jan 2026 | 5/5 |
| Reverse trial — good / great | **4–6% / 8–12%** | as above | 200 | ChartMogul | Jan 2026 | 5/5 |
| AI-native / AI+SaaS — good / great | **6–8% / 15–20%** | as above | 200 | ChartMogul | Jan 2026 | 5/5 |
| Traditional SaaS — good / great | **5–7% / 12–16%** | as above | 200 | ChartMogul | Jan 2026 | 5/5 |
| **B2C / hybrid audience — good / great** | **5–7% / 8–12%** | as above; **the only consumer cut in the lane, inside a B2B study, B2C respondent count unknown** | 200 (B2C subset unknown) | ChartMogul | Jan 2026 | **4/5 — subset n unknown** |
| Free-trial conversion distribution | 20% below 2.5%; 30% at 2.5–7.5%; 23% above 25% | as above | 200 | ChartMogul | Jan 2026 | 5/5 |
| **Conflicting earlier cut:** freemium self-serve — good / great | **3–5% / 6–8%** | Free-to-paid, definition not aligned with the 2026 study | 1,000+ products | Lenny × OpenView × Pendo × Growth Unhinged | Aug 2023 | 5/5 |
| **Conflicting earlier cut:** free trial — good / great | **8–12% / 15–25%** | as above | 1,000+ | same | Aug 2023 | 5/5 |
| Freemium *with sales assist* — good / great | **5–7% / 10–15%** | as above; **B2B-only, unavailable below ~$50/mo** | 1,000+ | same | Aug 2023 | 5/5 |
| Developer-focused products, median | **5%** — "half the rate of non-developer products" | as above | 1,000+ | same | Aug 2023 | 5/5 |

> **Do not average the 2023 and 2026 bands.** See *The definitional problem* above.

### Funnel shape per 1,000 website visitors — B2B

| Model | Signups | Paying customers | Exact cohort | n | Source | Date | Fields |
|---|---|---|---|---|---|---|---|
| Freemium (all) | 90 | **5.0** | B2B software products, self-reported | 200 | ChartMogul | Jan 2026 | 5/5 |
| Freemium (ungated) | 70 | **5.6** | as above | 200 | ChartMogul | Jan 2026 | 5/5 |
| Free trial, no card | 45 | **3.6** | as above | 200 | ChartMogul | Jan 2026 | 5/5 |
| Free trial, card required | 35 | **10.5** | as above | 200 | ChartMogul | Jan 2026 | 5/5 |

This is the table that makes the definitional problem concrete: card-required trials produce ~2–3× the customers per visitor while producing the *fewest* signups.

### Landing page, checkout and web funnel — web e-commerce and general web

| Metric | Value | Exact cohort | n | Source | Date | Fields |
|---|---|---|---|---|---|---|
| SaaS landing-page conversion, median | **3.8%** (all-industry baseline 6.6%); hardware 4.1%, data/infra 3.3% | **Any page goal counts as a conversion** — an ebook download weighs the same as a demo request | 41,000 landing pages, 57M conversions, 464M pageviews | Unbounce, *Conversion Benchmark Report* `[unverified-at-source — direct fetch failed twice, ECONNREFUSED; figures from search summaries]` | Q4 2024 | **3/5 — downgraded 2026-08-13. The figures were read from search summaries rather than from a fetched primary, which is the exact provenance `anti-patterns.md` test 1 rules insufficient. Two further hazards: the cohort counts any page goal as a conversion, so this is not a purchase rate; and it is the nearest thing in this file to a "pricing-page conversion benchmark", which is the slot the fabricated Hotjar 2.8% occupies, so it will be reached for by anyone hunting that number** |
| Global cart abandonment | **70.22%** | Share of initiated carts not converted to purchase; page gives no formal definition | Average across 50 separate studies | Baymard Institute | Updated 2025-09-22 | 5/5 |
| Same, alternate figure on the same publisher's methodology hub | **70.19%** | as above, "tracked for 14 years" | as above | Baymard | current — **no specific date on page** | **4/5 — no precise date** |
| Checkout UX quality distribution | 65% "mediocre or worse"; 35% "decent or better"; **2%** "good"; **0%** "perfect" | Baymard's own graded scale, leading e-commerce sites | 344 sites | Baymard | current — **no specific date** | **4/5 — no precise date** |
| Avg unique checkout improvements needed per site | **32** distinct guideline violations | as above | 344 sites | Baymard | current — **no specific date** | **4/5 — no precise date** |
| Avg checkout form fields | **11.3** (2024); 11.8 (2021); 12.7 (2019) | Fields shown by default to a new user | Baymard e-commerce UX benchmark — **site count not stated on page** | Baymard | 2024-06-26 | **4/5 — n not stated** |
| Avg checkout steps | **5.1** | Steps for a new user | Baymard benchmark — **site count not stated** | Baymard | 2024 | **4/5 — n not stated** |
| Abandonment reason — extra costs too high (shipping/tax/fees) | **40%** | Share of abandoners *excluding* "just browsing" citing this reason | n=1,026 US adults (reasons list not separately n-labelled) | Baymard | 2025 | 5/5 |
| Abandonment — delivery too slow | **20%** | as above | 1,026 | Baymard | 2025 | 5/5 |
| Abandonment — didn't trust site with card | **19%** | as above | 1,026 | Baymard | 2025 | 5/5 |
| Abandonment — site wanted account creation | **18%** | as above | 1,026 | Baymard | 2025 | 5/5 |
| Abandonment — checkout too long/complicated | **17%** | as above | 1,026 | Baymard | 2025 | 5/5 |
| Abandonment — website errors/crashes | **17%** | as above | 1,026 | Baymard | 2025 | 5/5 |
| Abandonment — unsatisfactory returns policy | **13%** | as above | 1,026 | Baymard | 2025 | 5/5 |
| Abandonment — couldn't see total cost upfront | **12%** | as above | 1,026 | Baymard | 2025 | 5/5 |
| Abandonment — card declined | **10%** | as above | 1,026 | Baymard | 2025 | 5/5 |
| Abandonment — not enough payment methods | **9%** | as above | 1,026 | Baymard | 2025 | 5/5 |
| Potential conversion uplift from checkout redesign | **+35.26%** | **A model output, not a measured lift** — modelled gain for "the average large-sized ecommerce site" | Derived from 10 yrs of checkout testing on Walmart, Amazon, Wayfair, Crate & Barrel, ASOS etc.; **no count published** | Baymard | current — **no specific date** | **3/5 — no n, no date, and it is a projection** |
| Users who struggled to find guest checkout | **60%** | "serious trouble identifying, seeing and selecting the guest-checkout option" in moderated testing | **n not stated** | Baymard | 2013 | **4/5 — no n; also 13 years old** |
| Viewing time above the fold | **57%** (2018), down from **80%** (2010) | Share of total page-viewing time by eye fixation, general web | 2018: 120 participants, 130,000+ fixations, 1920×1080. 2010: 21 users, 541 pages, 57,453 fixations, 1024×768 | NN/g | 2018 / 2010 | 5/5 |
| Viewing time, first two screenfuls | **74%** (to 2160px); three screenfuls **81%**; top 20% of page **>42%** | as above | 120 participants, 130,000+ fixations | NN/g | 2018 | 5/5 |
| Adding ≥1 relevant non-card payment method | **+12% revenue, +7.4% conversion** (average) | Randomized surfacing of additional payment methods in Stripe Checkout / Payment Links; causal-forest analysis | 50+ methods × 200 buyer countries = 2M+ method-country pairs; **business count and duration not disclosed** | Stripe (vendor-run) | 2023–24 | **4/5 — business count undisclosed** |
| Migrating Card Element → Payment Element | **+10.5% revenue** | Revenue vs matched non-migrating cohort, quasi-experimental | Two matched cohorts of 5,000 businesses each | Stripe (vendor-run) | 2023-04-28 | 5/5 |
| Stripe Link (one-click) | **+14% conversion** | Businesses with a large returning-customer base, A/B tested | **not disclosed** | Stripe (vendor-run) | 2023 | **4/5 — no n** |
| 0.1s mobile speed improvement — retail | **+8.4% conversions, +9.2% AOV** | Progression and conversion rates after measured speed gain (FMP, EIL, observed load); no redesigns during study | 37 EU/US brand sites, 30M+ mobile sessions, 30 days | Deloitte/55 for Google | data end-2019, pub. 2020 | 5/5 |
| 0.1s mobile speed improvement — travel | **+10.1% conversions**, +1.9% AOV, +10% booking completion | as above | 37 sites, 30M+ sessions | Deloitte/Google | end-2019 | 5/5 |
| 0.1s mobile speed improvement — luxury | **+40.1%** detail→add-to-basket; +15.8% listing→detail | as above | 37 sites, 30M+ sessions | Deloitte/Google | end-2019 | 5/5 |
| 0.1s mobile speed improvement — lead gen | **+21.6%** to form submission; +7% page views | as above | 37 sites, 30M+ sessions | Deloitte/Google | end-2019 | 5/5 |
| Plan-order effect (lab) | Significant layout effect on time-to-first-fixation **F(2,136)=12.6881, p<0.001** and total fixation time **F(2,136)=7.419, p<0.001**; participants "choose more expensive packages more often when they are listed first" | Lab task: pick a plan with chat support + analysis tools on SurveyGizmo's pricing page | ~139 participants across 3 layouts (**inferred from df**) | Speero/CXL | 2016-09-19 | **4/5 — n inferred, not published** |
| Highlighting a "recommended" plan (lab) | PRO chosen more often when highlighted **and** when expensive-first; in cheap→expensive order, highlighting sped time-to-first-fixation (**p=0.0171**). **Total fixation time did NOT differ significantly in any group** | as above, 4 variations | 30–40 eye-tracking participants per variation + survey top-up | Speero/CXL | 2016-09-26 | 5/5 |

### Experiment base rates — how often anything works at all

| Metric | Value | Exact cohort | n | Source | Date | Fields |
|---|---|---|---|---|---|---|
| Share of well-designed experiments that improved the key metric | **~one-third** | Microsoft's own experiments "designed to improve a key metric" | **not published** | Kohavi et al. (Microsoft) | 2009 | **4/5 — no n** |
| Business-improvement ideas with no impact or negative impact | **75%** | Business-improvement ideas tested by QualPro over 22 years | 150,000 ideas | QualPro, via Kohavi et al. | 2009 | 5/5 |
| Netflix's own estimate of ideas that are wrong | **90%** | Assertion, no dataset | **none** | Netflix via Moran, cited in Kohavi et al. | 2007 | **3/5 — no n, assertion** |
| MSN Real Estate widget contest — correct pre-guesses of the winner | **3 of 21 people** | People asked to predict which of 6 designs would win | 21 | Kohavi et al. | 2009 | 5/5 |
| GoodUI published success rate | **92% success, 23% median impact** | **The 26 case studies GoodUI chose to write up and sell for $289** — not all experiments run. **Cohort label: GoodUI's corpus is predominantly e-commerce and general web, not SaaS pricing pages** | 26 case studies | GoodUI | accessed 2026-08-12 | 5/5 (but see cohort — this is the right tail of a distribution whose body is null, and it is e-commerce) |
| GoodUI database outcome split | 165 winning / 282 insignificant positive / 145 insignificant negative / 43 losing | Tests submitted by GoodUI clients and contributors; 12+ contributors account for the bulk, one individual responsible for 42 published tests. **Predominantly e-commerce and general web** | 635 tests | GoodUI | accessed 2026-08-12 | 5/5 |
| Case studies in the harvested A/B corpus publishing a sample size | **2 of ~45** | Public pricing/checkout A/B case studies harvested across VWO, GoodUI, CXL, RevenueCat blog and others | ~45 | L09 corpus | 2026-08-12 | 5/5 |
| Same, publishing a significance level | **4 of ~45** | as above | ~45 | L09 corpus | 2026-08-12 | 5/5 |

> **The practical consequence.** For a vendor case study with no sample size, no duration and no significance: read the *direction* as weakly informative and the *magnitude* as uninformative. With duration and significance but no sample size: read the direction as informative and halve the magnitude at least.

---

## Trial mechanics

> **Mobile-only.** Every row in this table is an App Store / Google Play in-app-purchase figure. See wall 1.

| Metric | Value | Exact cohort | n | Source | Date | Fields |
|---|---|---|---|---|---|---|
| Trial-to-paid, trials 17–32 days | **42.5%** median | All categories, iOS+Play IAP, median across apps | 115,000+ apps / $16B / 1B+ transactions | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Trial-to-paid, trials 5–9 days | **37.4%** median | as above | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Trial-to-paid, trials ≤4 days | **25.5%** median | as above | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Long-vs-short trial gap | **+66.7%** (42.5% ÷ 25.5% = 1.667) — **was stated as "+70%" until 2026-08-13; the ratio recomputes to +66.7%** | as above — **a correlation across app populations, not a measured effect of changing trial length** | 115,000+ apps | `[derived]` from the two RevenueCat rows above; SaaStr `[secondary]` published the same comparison | 2026 | 5/5 for the two component rows; the gap is arithmetic, not a separate measurement |
| Trial-to-paid, trials 17–32 days — **prior year** | **45.7%** median | Same definition, **different sample** | 75,000 apps / $10B | RevenueCat SOSA 2025 | 2025 | 5/5 |
| Trial-to-paid, Gaming | **25.0%** median; top quartile **>39.8%** | Gaming category | subset of 115,000+ | RevenueCat SOSA 2026 Gaming cut | 2026 | **4/5 — subset n not published** |
| Trial-to-paid, global average (Adapty) | **25.6%**; H&F **35.0%**; Entertainment **19.1%** | Adapty cohort, in-app | 16,000+ apps / $3B / 105,000 paywalls | Adapty, *State of In-App Subscriptions 2026* | 2026 | 5/5 |
| Download-to-trial (D30), Business | **9.1%** median; top quartile **>16.2%** | Business category | subset of 115,000+ | RevenueCat SOSA 2026 Business cut | 2026 | **4/5 — subset n not published** |
| Download-to-trial (D30), Gaming | **4.4%** median; top quartile **>10.3%** | Gaming | subset | RevenueCat SOSA 2026 | 2026 | **4/5 — subset n not published** |
| Download-to-trial (D30) by category | H&F **6.9%**, Education **6.5%**, Utilities **6.5%**, Gaming **4.4%**, Travel **4.1%**, Media & Ent. **4.0%** | All categories | 115,000+ apps | RevenueCat SOSA 2026 `[gated — several category cuts re-serve all-category figures publicly]` | 2026 | 5/5 |
| Download-to-trial (D30) by geo | North America **7.1%**; IN/SEA **3.0–3.7%** | Payer geography | 115,000+ apps | RevenueCat SOSA 2026 `[gated]` | 2026 | 5/5 |
| Install-to-trial (Adapty) | **10.9%** global average | Adapty cohort | 16,000+ apps | Adapty 2026 `[gated — full report form-gated]` | 2026 | 5/5 |
| Install-to-trial by geo (Adapty) | NA **14.5%**; other regions **7.6–10.2%** | as above | 16,000+ apps | Adapty 2026 | 2026 | 5/5 |
| Share of trial starts occurring on Day 0 | **78–89.9%** by category (Business highest 89.9%, Productivity lowest 78%) | All categories | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Same — prior year | **82%** | Different sample | 75,000 apps | RevenueCat SOSA 2025 | 2025 | 5/5 |
| Same (Adapty) | **90%** | Adapty cohort | 16,000+ apps | Adapty 2026 | 2026 | 5/5 |
| 3-day trials cancelled on Day 0 | **55.4%** | All categories — **partly an Apple/Play cancellation-UX artifact** | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| 3-day trials cancelled Day 0–1 | **84%** cumulative | as above | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| 7-day trials cancelled on Day 0 | **39.8%** | as above | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| 14-day trials cancelled on Day 0 | **35.7%** | as above | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| 30-day trials cancelled on Day 0 | **31.1%** | as above | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Trial-length mix, ≤4 days | **42.1% → 46.5%** YoY (+4.4pp) | Share of apps offering that length — **YoY across different samples** | 75,000 → 115,000 apps | RevenueCat SOSA 2025→2026 | 2025→2026 | 5/5 |
| Trial-length mix, 5–9 days | **43.5% → 39.9%** YoY | as above | 75,000 → 115,000 | RevenueCat | 2025→2026 | 5/5 |
| Trial-length mix, 17–32 days | **6.1% → 5.0%** YoY | as above | 75,000 → 115,000 | RevenueCat | 2025→2026 | 5/5 |
| Apps using ≤4-day trials, Gaming | **73.3%** | Gaming | subset of 115,000+ | RevenueCat SOSA 2026 | 2026 | **4/5 — subset n not published** |
| Apps using ≤4-day trials, Photo & Video | **68.2%** | Photo & Video | subset | RevenueCat SOSA 2026 | 2026 | **4/5 — subset n** |
| Apps using ≤4-day trials, Health & Fitness | **29.0%** (lowest) | H&F | subset | RevenueCat SOSA 2026 | 2026 | **4/5 — subset n** |
| Trial strategy mix | Mixed trial **38–59%**; no trial **18–44%**; pure trial **14–31%** (ranges across categories) | All categories | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Weekly-plan LTV: with 3-day trial vs without | **$54.50 vs $7.40** over 12 months (**+636%**) | Adapty cohort, weekly plans only | 16,000+ apps | Adapty 2026 | 2026 | 5/5 |
| Weekly-plan 12-mo LTV with trial — **alternate figure from the same publisher** | **$49.27** | Adapty cohort | 16,000+ apps | Adapty 2026 | 2026 | 5/5 — **but conflicts with the $54.50 row; the publisher does not reconcile them** |
| Best-performing single configuration by LTV | **Weekly $5.99 + 3-day free trial** = 1.5× average LTV across all configs | Adapty cohort | 16,000+ apps | Adapty 2026 | 2026 | 5/5 |
| Worst-performing configuration | **Annual $79.99, no trial** | Adapty cohort | 16,000+ apps | Adapty 2026 | 2026 | 5/5 |
| Trial vs direct purchase, Productivity | Direct **$56.95** > Trial **$49.13** (direct +16%) | Adapty, Productivity category | subset of 16,000+ | Adapty 2026 | 2026 | **4/5 — subset n** |
| Categories where trial beats direct | Utilities, Health & Fitness, Education | Adapty | subset of 16,000+ | Adapty 2026 | 2026 | **4/5 — subset n, no magnitudes** |
| Trial refund rate, Photo & Video | **6.4%** global; **14.1%** APAC | Adapty, Photo & Video | subset of 16,000+ | Adapty 2026 | 2026 | **4/5 — subset n** |
| Refund rate, MEA | **2.5%** non-trial vs **3.1%** trial | Adapty, MEA region | subset of 16,000+ | Adapty 2026 | 2026 | **4/5 — subset n** |
| Adding a 7-day trial | **+38–52%** effective paid conversion | RevenueCat internal testing | **sample size not disclosed** | RevenueCat blog | 2026 | **3/5 — vendor blog, no n, no method, no stated comparison base** |
| Trial length distribution, B2B web | 14 days **62%**; 7 days 14%; 30 days 14% | Modal trial duration, B2B software products, self-reported | 200 | ChartMogul | Jan 2026 | 5/5 — **web/B2B, safe to cross** |
| Share of B2B trial products requiring a card | **20%** (80% do not) | as above | 200 | ChartMogul | Jan 2026 | 5/5 — **web/B2B** |

> ⚠ **A conflict to be aware of.** A search snippet attributed "average trial-to-paid 53%, H&F 62%, Entertainment 38%" to Adapty. Direct fetch of Adapty's primary page returned **25.6% / 35.0% / 19.1%**. The primary-fetch set is preferred. **Do not use the 53% figure.**

### Trial length — the only randomised evidence in this file

> **Web, randomised, and it points the opposite way from the mobile cross-section above.** Every other trial-length row in this file is a correlation across app populations. This one is an experiment. Read both, and read the P-185-versus-P-302 note in `patterns/07-risk-reversal.md` before choosing between them.

| Metric | Value | Exact cohort | n | Source | Date | Fields |
|---|---|---|---|---|---|---|
| **7-day vs 30-day trial — subscriptions** | **+5.59%** | Randomised field experiment at a large SaaS company; users randomised across 7 / 14 / 30-day trial conditions; experiment run **2015-12-01 → 2016-01-06** | **337,724 users** | Yoganarasimhan, Barzegary & Pani, *Management Science* 69(6), DOI 10.1287/mnsc.2022.4507 | online 2022-08-10, issue Jun 2023; verified 2026-08-12 | 5/5 |
| 7-day vs 30-day trial — retention at 2 years | **+6.4%** | as above | 337,724 | same | same | 5/5 |
| 7-day vs 30-day trial — revenue | **+7.91%** | as above | 337,724 | same | same | 5/5 |
| 14-day vs 30-day trial | **Not statistically different** | as above | 337,724 | same | same | 5/5 |
| Personalised trial length (lasso policy) vs uniform 30-day | **+6.8%** — against **+5.59%** for uniform 7-day, i.e. roughly one point of headroom over the best uniform rule | as above; authors also report that "personalized policies based on other methods (e.g., causal forests, random forests) perform worse than a simple uniform policy that assigns a short trial length to all users" | 337,724 | same | same | 5/5 |

> **The cohort caveat that must travel with these.** One company, one product category, and data collected in **2015–16**. Direction robust, magnitude indicative. The mechanism the authors support is consumer learning — they "rule out the demand cannibalization theory" — and they report that "long stretches of inactivity at the end of the trial are associated with lower conversions", which is an observational finding *inside* the randomised study and was not itself randomised.

### Web-billing subscription aggregate — Recurly State of Subscriptions

> **Web, not mobile.** Recurly is a card-on-file web subscription biller, so its trials are structurally the same object as a Stripe trial: a subscription with a trial period against a stored card, therefore **card-required / opt-out by default**. This is the only true web-billing trial aggregate located anywhere in the research. It is **uncut** — no split by trial length, card requirement or price band exists.

| Metric | Value | Exact cohort | n | Source | Date | Fields |
|---|---|---|---|---|---|---|
| Free-trial conversion | **fell from 46% to 33%** | Recurly network, card-on-file web subscriptions, all verticals | **67 million subscribers** | Recurly, *2025 State of Subscriptions*, press release | 2025-01-16 | 5/5 |
| Median trial-to-paid conversion | **50%** | as above, prior report | cohort described only as "millions of subscribers and billions of transactions" — **no precise n disclosed** | Recurly, *2024 State of Subscriptions*, press release | 2024-01-23 | **4/5 — n not disclosed** |
| Trial conversion, 2026 report | **not retrievable** | Software, Digital Media, Healthcare, Education | 76 million subscribers | Recurly, *2026 State of Subscriptions* | 2026-01-14 | **`[gated]` — the trial figure sits behind the report download** |
| New sign-ups who are returning subscribers | **1 in 4** | as above, 2026 cohort | 76 million subscribers | Recurly, 2026 report landing page | 2026-01-14 | 5/5 |
| Revenue per user, annual vs monthly plans | **50–60% higher** on annual | as above, 2026 cohort | 76 million subscribers | Recurly, 2026 report landing page | 2026-01-14 | 5/5 |

> **How far the Recurly series can be trusted.** Directionally strong, specifically weak. It is real billing data rather than a survey, and the card-required structure matches a Stripe trial. But the cohort is dominated by digital media and streaming, whose repertoire behaviour differs from a paid tool; there is no cut by length, card or price; and **50% → 46% → 33% is a falling series, so any single year is a poor prior.** The trend is the finding. **Do not quote 33% as "the" web trial conversion rate.** Recurly's pause figure (+337% usage among top merchants) is already recorded in *Consumer churn — non-mobile* and in `patterns/11-expansion-and-retention.md`; it is not repeated here.

### The substitute for a public web benchmark — Stripe's private one

| Metric | Value | Exact cohort | n | Source | Date | Fields |
|---|---|---|---|---|---|---|
| Access threshold for Stripe's in-dashboard benchmarking | **5 active subscriptions**, plus at least one paid subscription in the past year | Stripe Billing merchants | n/a — a platform access rule | `docs.stripe.com/billing/subscriptions/analytics/benchmarking` | accessed 2026-08-12 | 5/5 |
| Peer-group size behind the comparison | **at least 100 similar businesses**; top, median and bottom trends plus the merchant's percentile, over the past 12 months | Peer group built by a k-nearest-neighbors algorithm over public business information, MCC, an AI-generated industry, ARR and **ARPU**; **trial conversion rate is explicitly one of the benchmarked metrics** | ≥100 per peer group | same | accessed 2026-08-12 | 5/5 |

> **Stripe's trial-conversion definition, verbatim** (`docs.stripe.com/billing/subscriptions/analytics`, accessed 2026-08-12): "Trial conversion rate is the number of subscriptions that converted from a trial to a paid plan in the last 30 days, divided by the number of trials that ended in the last 30 days. […] might exceed 100% if some subscriptions convert to a paid plan after the end of their trial period." **It is a trailing-30-day ratio and must never be diffed against Recurly's annual figure or the ChartMogul six-month definition.** See P-301.

> **Do not double-count ChartMogul.** The "SaaS Conversion Report" at `chartmogul.com/reports/saas-conversion-report/` (published January 2026) **is** the n=200 study already in the *Free-to-paid by entry model* table above — confirmed identical on 2026-08-12: 200 B2B software products, typical respondent $1–10M ARR, $50–$249 ARPU, 25–50% YoY growth. It is a **Typeform survey distributed by email, Slack and social**, so it is self-reported, self-selected, B2B, and priced 2–10× above a consumer web product. The table already records it that way; it is not a second, corroborating source.

---

## Paywall type and placement

> **Mobile-only** unless a row says otherwise.

| Metric | Value | Exact cohort | n | Source | Date | Fields |
|---|---|---|---|---|---|---|
| Download-to-paid D35, **hard paywall** | **10.7%** median | All categories, iOS+Play; median across apps | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Download-to-paid D35, **freemium** | **2.1%** median | as above | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Hard-vs-freemium ratio | **5.1×** (10.7% ÷ 2.1%) | as above — **cross-population correlation, not a switching effect** | 115,000+ apps | `[derived]` from the two RevenueCat rows above; SaaStr `[secondary]` published the same ratio | 2026 | 5/5 for the two component rows; the ratio is arithmetic |
| Same metric — **prior year** | Hard **12.11%**, freemium **2.18%** | Same definition, **different sample** | 75,000 apps | RevenueCat SOSA 2025 | 2025 | 5/5 |
| YoY move | Hard fell ~1.4pp (12.1% → 10.7%); freemium flat (2.18% → 2.1%) | **Composition change across two different samples is not separable from real change** | 75,000 → 115,000 | RevenueCat 2025 vs 2026 | 2025→2026 | 5/5 with the caveat |
| Top-decile hard-paywall conversion | ~~38.7% / "~40%"~~ **WITHDRAWN 2026-08-13** | — | — | SaaStr / neoads, both unverifiable | — | **0/5 — do not cite** |
| Top-decile freemium conversion | ~~8.2%~~ **WITHDRAWN 2026-08-13** | — | — | neoads, unverifiable | — | **0/5 — do not cite** |
| **Year-1 payer retention, hard paywall vs freemium** | **27% vs 28% — essentially identical** | Yearly subscribers, all categories | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Median paywall conversion, no free trial | **3.6%** (75th pct ~**5.8%**) | Paywall view → purchase | **RevenueCat 2024 report — older cohort, size not restated** | RevenueCat blog | 2024 | **3/5 — vendor blog, n not restated, and two years stale against the 2026 report** |
| Median paywall conversion, with free trial | **10.9%** (75th pct ~**16.4%**) | as above | **older 2024 cohort, size not restated** | RevenueCat blog | 2024 | **3/5 — vendor blog, n not restated, two years stale** |
| Hard vs soft paywall LTV (Adapty) | Hard median **$41.90** (P90 $89.90); soft median **$20.00** (P90 $70.00) → hard median is **2.1× soft** `[derived]`. **The published figures are the two medians; the "+21%" gloss this row carried until 2026-08-13 was arithmetically impossible against them and has been removed** | Adapty cohort | 16,000+ apps | Adapty 2026 | 2026 | 5/5 for the two medians; the ratio is arithmetic |
| Hard vs soft paywall conversion (Adapty) | Soft **4.85%** vs hard **3.34%** view→payment — soft converts **~45% better** (4.85 ÷ 3.34 = 1.452; **was stated as "~50%" until 2026-08-13**) | Adapty cohort — **note this is the opposite direction from the RevenueCat D35 cut, because the denominator is different (paywall views vs downloads)** | 16,000+ apps | Adapty 2026 | 2026 | 5/5 for the two rates; the gap is arithmetic |
| Paywall placement conversion (Adapty) | Onboarding+trial **1.35%**; in-app+trial **0.89%**; onboarding no-trial **0.82%**; in-app no-trial **0.76%** | Paywall view → payment | 105,000 paywalls | Adapty 2026 | 2026 | 5/5 |
| Paywall fired after a "value moment" vs immediate hard paywall | **2.1× higher trial-start rate** | Adapty cohort — **the search surface states no funnel definition and no subset size for this cut** | **not stated at the surface this was read from** | Adapty 2026 `[unverified-at-source — reached through a search surface, primary not fetched]` | 2026 | **3/5 — unverified at source, no stated subset n** |
| Purchases occurring on Day 0 (Adapty) | **44.5%** | Adapty cohort | 16,000+ apps | Adapty 2026 | 2026 | 5/5 |
| Download-to-paid conversions on Day 0 (RevenueCat) | **50.6%**; Productivity highest at **71.9%** | All categories | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| **Multi-page vs single-page onboarding paywall** | **12.41% vs 9.07% = +37%** | Conversion = (trial starts + direct purchases) / paywall viewers; **onboarding placements only**; ≥50 opens per paywall; zero-transaction paywalls excluded | 40M+ paywall opens, Feb–May 2026 | Superwall (vendor-run; **best methodology disclosure in the mobile lane**) | 2026 | 5/5 |
| Multi-page share of onboarding paywall opens | **24%** | as above | 40M+ opens | Superwall | 2026 | 5/5 |
| Plans shown on paywall | 1 plan **20–40%**; 2 plans **41–60%**; 3+ plans **6–27%** (ranges across categories) | All categories | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Lifetime plan offered on paywall, Gaming | **18%** (highest of any category) | Gaming | subset of 115,000+ | RevenueCat SOSA 2026 | 2026 | **4/5 — subset n** |
| Apps using promotional offers | **9.3%** overall; H&F **14%**; Gaming **3.6%** | All categories — **the "115,000+ apps" cohort this row carried until 2026-08-13 was inherited from the RevenueCat rows above; neoads states no sample of its own** | **not stated by the only source that carries this figure** | neoads `[secondary]` citing RevenueCat — **the same agency page whose top-decile figures were withdrawn on 2026-08-13** | 2026 | **2/5 — agency page, no stated sample, no primary confirmation. Confirm against the RevenueCat report before citing** |
| Subscriptions sold at full price (Adapty) | **9 in 10** | Adapty cohort | 16,000+ apps | Adapty 2026 | 2026 | 5/5 |
| Discount adoption by category (Adapty) | Education **14.3%** (high) → Utilities **1.2%** (low) | Adapty cohort | 16,000+ apps | Adapty 2026 | 2026 | 5/5 |
| Animated paywall elements | **+12–18%** conversion vs static | RevenueCat internal testing | **sample size not disclosed** | RevenueCat blog | 2026 | **3/5 — vendor blog, no n, no method; a vendor's blog assertion is not that vendor's dataset** |
| Subscription-only monetization (no consumables/lifetime) | Overall **63.5%**; Shopping **79.6%**; Business **76.5%**; Gaming **40.5%** | All categories | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Annual/yearly billing referenced in detected pricing experiments | **57.1% (172/301)** — the most common structural device, more common than badges | Detected pricing experiments across 24 companies; **"detected UI differences with inferred reasoning, not measured conversion lift"**; publisher calls it "a lower bound, counting mentions not audited pages". **Cohort label, applied at every point of use: the 301-experiment pool is dominated by mobile paywall screens — the same study reports a sub-pool of 255 mobile "All plans" screens — so this is mobile-paywall prevalence and is not a measurement of desktop pricing pages.** See `patterns/05-page-anatomy.md` P-135 | 301 experiments, 24 companies | Lazyweb Research | 2026-07 | **4/5 — the pool composition is stated only through a sub-pool figure, so the mobile share cannot be computed exactly** |
| Section order on live web pricing pages | **headline → subhead → billing toggle → tier cards → comparison table → social proof → FAQ → footer CTA** is near-universal. **No page put the comparison table above the tier cards.** No causal test of section order located | **Web, desktop pricing pages — this row and the two below cross out of this section's mobile default.** Census of live self-serve pricing pages (Slack, Notion, Basecamp, Ahrefs, Figma, Linear, GitHub, Vercel, Dropbox, Kit, Todoist, Grammarly, Mailchimp, Intercom, monday.com, Asana, Calendly, Semrush, 1Password, Fathom, Miro, Airtable, Shopify, Squarespace, Zapier, ClickUp, Typeform, Framer, ElevenLabs, Descript, Buffer, Loom, Zoom) | 33 pages | L17 transcription | fetched 2026-08-12 | 5/5 — **web; revealed preference, not a controlled test** |
| Headline framing on live pricing pages | Outcome framing **10 of 33 (~30%)**, the largest single group; ~24% use a bare "Pricing" label | as above — **web** | 33 pages | L17 transcription | 2026-08-12 | 5/5 — **web** |
| Annual-saving expression | Percentage-only is the most common single approach (**13+ of 33**), and **8 of those hedge with "up to"** | as above — **web** | 33 pages | L17 transcription | 2026-08-12 | 5/5 — **web** |

**Why the two top-decile rows were withdrawn on 2026-08-13.** Both were sourced to a trade post and an unidentifiable agency page, neither carrying a date, a sample size, or a statement of which funnel stage "conversion" was measured at. They had also silently inherited the **115,000+ apps** cohort from the RevenueCat rows above them, which is not their sample — no sample was ever stated. The harm is one-directional and specific: a top-decile figure read as a target tells a founder whose paywall converts at the *median* that it is broken, and the reflexive remedy is a price cut. This library will quote a distribution when a named cohort at a named funnel stage supports one, and otherwise quote nothing. See `models/hard-paywall.md` › Folklore and unverified claims.

**Three further rows in this table were downgraded on 2026-08-13, for the same class of reason.** The promotional-offers row traces only to the same agency page and had inherited the same RevenueCat cohort, so its sample field is now blank and it sits at 2/5. The value-moment row was reached through a search surface rather than a fetched primary and states no subset size, so it is 3/5 and carries an `[unverified-at-source]` flag. The animated-paywall row is a vendor blog post with the sample size explicitly undisclosed, which this file's own rules say cannot support a 4/5 rating.

---

## Churn and retention — consumer

> **Consumer table. Mobile-only unless the row says otherwise. Do not mix with the B2B table below.**

### Year-1 retention by plan duration

| Plan | Value | Exact cohort | n | Source | Date | Fields |
|---|---|---|---|---|---|---|
| Weekly | LQ 1% · **median 3%** · UQ 4% | "If you start with 100 subscribers, how many at the end of one year?" iOS+Play | 10,000+ apps | RevenueCat | pub. 2022-09-07, upd. 2024-06-06 | 5/5 — **the cleanest cut, and the oldest** |
| Monthly | LQ 5% · **median 11%** · UQ 19% | as above | 10,000+ apps | RevenueCat | 2022 / upd. 2024 | 5/5 |
| Annual | LQ 17% · **median 28%** · UQ 43% | as above | 10,000+ apps | RevenueCat | 2022 / upd. 2024 | 5/5 |
| Annual | **44.1%** (down from 47.1% prior year) | Year-1 retention, iOS+Play | 75,000 apps | RevenueCat SOSA 2025 | 2025 | 5/5 |
| Monthly | **17.0%** (from 18.8%) | as above | 75,000 apps | RevenueCat SOSA 2025 | 2025 | 5/5 |
| Weekly | **3.4%** (from 4.2%) | as above | 75,000 apps | RevenueCat SOSA 2025 | 2025 | 5/5 |
| Annual | **~28% retained** (i.e. **~72% churn within year 1**) | Year-1, iOS+Play | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Monthly | **~10%** (AI apps ~6%) | as above | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Annual (2024 report as re-quoted) | **27–28%**; Monthly **11.4%**; Weekly **3.4%** | 2024 cohort | **size not restated** | RevenueCat, quoting SOSA 2024 | 2024 | **4/5 — n not restated** |
| Annual trial-originated, Day-380 | **19.9%** | **Trial-originated subscribers only** — a different population from the RevenueCat cuts | 16,000+ apps / $3B / 500M+ transactions | Adapty 2026 | 2026 | 5/5 |
| Monthly trial-originated, Day-380 | **14.2%** | as above | 16,000+ apps | Adapty 2026 | 2026 | 5/5 |
| Weekly trial-originated, Day-380 | **5.5%** | as above | 16,000+ apps | Adapty 2026 | 2026 | 5/5 |

> ⚠ **The 2025 and 2026 RevenueCat figures are not on the same basis** and the report's own framing shifted (44.1% annual year-1 retention in 2025 vs "~72% of annual subscriptions churn within year one" in 2026). Treat the *direction* as the signal and the levels as approximate.
> ⚠ **Two credible vendors with large samples disagree by a factor of ~2 on the annual advantage** — RevenueCat's annual/monthly gap is 2.5×, Adapty's is 1.4×. The likely reason is population (Adapty's cut is trial-originated only). **That disagreement is itself the finding.**

### Retention by price band — note the direction

| Cut | Value | Exact cohort | n | Source | Date | Fields |
|---|---|---|---|---|---|---|
| Low-priced **annual** | **53.7%** year-1 retention | Price-band cohorts, iOS+Play | 75,000 apps | RevenueCat SOSA 2025 | 2025 | 5/5 |
| High-priced **annual** | **48.3%** | as above | 75,000 apps | RevenueCat SOSA 2025 | 2025 | 5/5 |
| Low-priced **monthly** | **22.5%** | as above | 75,000 apps | RevenueCat SOSA 2025 | 2025 | 5/5 |
| High-priced **monthly** | **12.2%** | as above | 75,000 apps | RevenueCat SOSA 2025 | 2025 | 5/5 |
| 12-month retention by price tier | Low **36%** · Mid **26%** · High **23%** | Price-tier cohorts | 115,000+ apps | RevenueCat | 2026 | 5/5 |
| High-priced **monthly** plans, year-1 retention | **6.7%** | Price tier × plan duration | 75,000 apps | RevenueCat SOSA 2025 | 2025 | 5/5 |

> ⚠ **In this dataset, at both durations, lower-priced cohorts retain *better*.** This directly contradicts the widely repeated claim that higher-priced customers retain better. **Neither direction is causal** — these are cross-app comparisons. An app charging $50/month is not the same app charging $5/month with the price changed; it is a different product sold to a different person. **This data cannot answer "what happens if I raise my price," and does not claim to.**

### Renewal rates and cancellation timing

| Metric | Value | Exact cohort | n | Source | Date | Fields |
|---|---|---|---|---|---|---|
| First-renewal rate, monthly | **median 56%**, top quartile 71% | iOS+Play; **a 30-day survival test** | 10,000+ apps | RevenueCat | 2022-08-16, upd. 2024-06-06 | 5/5 |
| First-renewal rate, annual | **median 27%**, top quartile 45% | as above; **a 365-day survival test — the publisher warns these two rows are not comparable** | 10,000+ apps | RevenueCat | 2022 / upd. 2024 | 5/5 |
| First-renewal by category, **annual** (LQ/median/UQ) | Travel 28/**40**/60 · Business 21/**40**/53 · Media&Ent 20/**37**/56 · Utilities 21/**35**/52 · Shopping 17/**30**/50 · Gaming 15/**26**/45 · Social&Lifestyle 13/**25**/41 · H&F 16/**25**/37 · Education 17/**24**/32 · Photo&Video 15/**23**/35 · Productivity 14/**23**/38 | Annual plans, per category | 115,000+ apps | RevenueCat | 2026 | 5/5 |
| First-renewal by category, **monthly** (LQ/median/UQ) | Business 49/**61**/74 · Media&Ent 41/**58**/72 · Shopping 46/**58**/69 · H&F 46/**57**/68 · Utilities 43/**57**/70 · Education 48/**56**/66 · Productivity 40/**54**/66 · Travel 41/**53**/66 · Gaming 42/**53**/68 · Photo&Video 35/**48**/59 · Social&Lifestyle 27/**42**/61 | Monthly plans, per category | 115,000+ apps | RevenueCat | 2026 | 5/5 |
| First-renewal by category, **weekly** (medians) | Education **58%** · H&F **54%** · Productivity **53%** · Business **52%** · Shopping **51%** · Gaming **51%** · Utilities **49%** · Travel **48%** · Media&Ent **45%** · Photo&Video **45%** · Social&Lifestyle **35%** | Weekly plans, per category | 115,000+ apps | RevenueCat | 2026 | 5/5 |
| Annual subscriber year-1 cancellation | **72%** (worsened from **56%** prior year) | All categories | 115,000+ (2026) vs 75,000 (2025) | RevenueCat SOSA 2026 | 2026 | 5/5 — **the jump is too large to be plausibly all real; some is composition change** |
| Share of annual cancellations in **Month 1** | **35%** | Annual subscribers | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Same, prior year framing | "nearly 30% of annual subscriptions cancelled in the first month" | Annual subscribers | 75,000 apps | RevenueCat SOSA 2025 | 2025-06-06 | 5/5 |
| Annual cancellations, months 2–11 | **3–10% per month** | Annual subscribers | 115,000+ apps | RevenueCat | 2026 | 5/5 |
| Annual cancellations, **Month 12** (pre-renewal spike) | **9–14%** | Annual subscribers | 115,000+ apps | RevenueCat | 2026 | 5/5 |
| Weekly retention curve shape | 1st renewal **35–58%** → 2nd **67–75%** → 3rd converges **74–91%** | Weekly subscribers — **survivorship: this describes the surviving cohort, not the original one** | 115,000+ apps | RevenueCat | 2026 | 5/5 with the caveat |
| Annual vs monthly churn reduction | Annual plans reduce churn **51%** vs monthly | All categories — **correlational, and the search surface states neither the churn definition nor the window, so this cannot be reconciled against the per-plan retention rows above (which give ~28% annual vs ~10% monthly year-1 retention on a different basis)** | **not stated at the surface this was read from** | RevenueCat `[unverified-at-source — reached through a search surface, primary not fetched]` | 2026 | **3/5 — unverified at source, definition unstated** |
| Category first-renewal (Adapty) | Utilities **58.1%**; Health & Fitness **30.3%** | Adapty cohort, mixed plan durations — **not comparable to the RevenueCat per-plan cuts** | 16,000+ apps | Adapty 2026 | 2026 | 5/5 |

### Consumer churn — non-mobile

| Metric | Value | Exact cohort | n | Source | Date | Fields |
|---|---|---|---|---|---|---|
| Total monthly churn, all industries | **3.60%** (voluntary 2.34%, involuntary 1.25%) | Recurly network, monthly rates | **network size not published** | Recurly | data stated as July 2026 | **4/5 — no n** |
| Digital media & entertainment | 4.14% total / 2.55% vol / 1.59% invol | as above | **not published** | Recurly | July 2026 | **4/5 — no n** |
| Ecommerce | 4.25% / 2.87% / 1.38% | as above | **not published** | Recurly | July 2026 | **4/5 — no n** |
| Education | 4.99% / 3.30% / 1.69% | as above | **not published** | Recurly | July 2026 | **4/5 — no n** |
| Travel, hospitality & entertainment | 3.91% / 2.63% / 1.28% | as above | **not published** | Recurly | July 2026 | **4/5 — no n** |
| **$10–$25 ARPC band** | **4.29%** total, 1.30% involuntary | Recurly network by average revenue per customer | **not published** | Recurly | July 2026 | **4/5 — no n** |
| $100–$250 ARPC band | 2.87% | as above | **not published** | Recurly | July 2026 | **4/5 — no n** |
| Consumer SaaS (subscription) 6-month **user** retention — good / great | ~40% / ~70% | **Practitioner opinion survey**, not measured data | 20 growth leaders (incl. Andrew Chen, Brian Balfour, Casey Winters, Elena Verna) | Lenny Rachitsky | 2020-06-09 | 5/5 — **but it is expert opinion, not a dataset** |
| Consumer transactional 6-month retention — good / great | ~30% / ~50% | as above | 20 growth leaders | Lenny Rachitsky | 2020-06-09 | 5/5 — **opinion** |
| Public comparators | Netflix **66% 12-month**; Spotify **72% 6-month**; Hulu **53% 12-month** | Cited inside the same practitioner piece; **original measurement basis not given** | **not published** | Lenny Rachitsky `[secondary]` | 2020-06-09 | **3/5 — no n, no primary, no measurement definition** |

### Reactivation and win-back — consumer, mobile

| Cut | Value | Exact cohort | n | Source | Date | Fields |
|---|---|---|---|---|---|---|
| Monthly subscribers, all | **20.1%** reactivate within 1 year (up from 13.7% prior year) | **Unprompted — no win-back campaign**; iOS+Play | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Weekly subscribers | **9.0%** | as above | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| **Annual subscribers** | **5.2%** (range quoted 4–6%) — i.e. **~95% never return** | as above | 115,000+ apps | RevenueCat SOSA 2026 | 2026-05-28 | 5/5 |
| High-priced monthly | **28.9%** | as above | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Low-priced monthly | **15.4%** | as above | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| High-priced annual | **4.4%** | as above | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Annual reactivation by geography | **4.9–5.9%** across every geography studied | as above | 115,000+ apps | RevenueCat SOSA 2026 `[secondary via PPC Land]` | 2026-05-28 | 5/5 |
| Monthly reactivation by geography | **18–24%** worldwide; Asia-Pacific 24%; North America ~18% (lowest) | as above | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Annual reactivation by category | **3% → 8%** range | as above | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Monthly reactivation by category | **6% → 36%** range; Productivity **36.1%** (doubled from 17.1%); H&F ~12% | as above | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Prior-year comparison | Monthly ~**13%+**; yearly ~**4.58%** | Different sample | 75,000 apps | RevenueCat SOSA 2025 | 2025 | 5/5 |
| Post-reactivation tenure | "average four months" before churning again | Reactivated subscribers | 115,000+ apps | RevenueCat | 2026 | 5/5 |
| **Win-back *campaign* reactivation rates** | 8–25% figures circulate ("8–15% for well-segmented streaming campaigns", "15–25% of churned customers") | Vendor blogs and SEO content | **no disclosed sample anywhere** | untraceable | — | **0/5 — `[unsourced]`. Do not cite.** The defensible number is the RevenueCat ~20% unprompted baseline; any campaign must be measured as lift over it, against a holdout |
| Monthly → annual conversion effect | **+189 days lifetime, +$146 per subscriber** | **Within-population matched-pair design** — subscribers moved monthly→annual matched against similar subscribers who weren't. Controls for a good deal of selection | 50,000+ matched subscriber pairs | Churnkey (vendor-reported, **not independently replicated**) | 2024 data | 5/5 |

---

## Churn and retention — B2B

> **B2B table. Do not mix with the consumer table above.** Everything here assumes accounts that can grow, contracts, and a sales motion. See wall 2.

| Metric | Value | Exact cohort | n | Source | Date | Fields |
|---|---|---|---|---|---|---|
| Median NRR, private SaaS at $25K–$50K ACV | **102%** (top quartile 111%, bottom 97%) | Private SaaS companies, 14th annual survey | **not disclosed on page** | SaaS Capital | 2025 | **4/5 — n not disclosed** |
| Direction of NRR by contract value | "higher net retention correlates with higher ACVs" | as above | **not disclosed** | SaaS Capital | 2025 | **4/5 — no n, no magnitude** |
| Median growth rate, private SaaS >$1M ARR | **24%** | as above | **not disclosed** | SaaS Capital | 2025 | **4/5 — no n** |
| NRR × CAC-payback quadrants → growth | High-NRR/low-payback: 13% of respondents, **71%** growth · High/high: 15%, 40% · Low/low: 15%, 30% · Low/high: 12%, **10%** | B2B SaaS survey respondents | 800+ | Poyar, 2025 SaaS Benchmarks | Aug–Sep 2025 | 5/5 |
| NRR grading | 100% "good", 110% "better", 120%+ "best" | **A framework, not a measurement** | **none** | Bessemer, *State of the Cloud 2023* | 2023 | **3/5 — no n, no dataset; opinion** |
| Top-quartile YoY growth, <$1M ARR | **300%** (up from 250% in 2024) | B2B SaaS survey | 800+ | Poyar 2025 Benchmarks | Aug–Sep 2025 | 5/5 |
| AI-native vs B2B SaaS growth by ARR band | <$1M: 100% vs 75% · $1–5M: 110% vs 40% · $5–20M: 90% vs 30% · $20–50M: 60% vs 35% · >$50M: 40% vs 15% | as above | 800+ | Poyar 2025 Benchmarks | Aug–Sep 2025 | 5/5 |
| SMB/mid-market SaaS 6-month **user** retention — good / great | ~60% / ~80% | **Practitioner opinion survey** | 20 growth leaders | Lenny Rachitsky | 2020-06-09 | 5/5 — **opinion, not data** |
| Consumer SaaS 12-month **net revenue** retention — good / great | ~55% / ~80% | as above | 20 growth leaders | Lenny Rachitsky | 2020-06-09 | 5/5 — **opinion** |
| Best-in-class LTV:CAC | >3, "sometimes as high as 7 or 8" | B2B SaaS heuristic — **derived from businesses with 1–2% monthly logo churn plus expansion revenue** | **none** | Skok, forentrepreneurs.com | ongoing, **no fixed date** | **3/5 — no n, no date; heuristic** |
| Best-in-class CAC payback | 5–7 months; >12 months = "anemic" | as above | **none** | Skok | ongoing | **3/5 — heuristic** |
| CAC payback ceiling with abundant capital | 18 months | as above | **none** | Skok & Reiss | 2016-02-23 | **4/5 — no n** |
| Involuntary share of churn, B2B | **16%** | Churnkey analysis of Stripe's 2024 report + Churnkey's own data | Stripe: $1.4T across 200M subscriptions; Churnkey: 5.4M failed payments across 25M subscriptions over one year | Churnkey / Stripe | 2024 data | 5/5 |
| Companies that changed pricing in the prior year | **~75%** | B2B monetization survey | 240 | Poyar, *State of B2B Monetization* | survey Apr–May 2025 | 5/5 |
| Companies that changed pricing **or packaging** | **~75%**; most aggressive among >$50M ARR | as above | 230 | Poyar 2026 edition | survey Apr–May 2026 | 5/5 |
| Pricing changes across top-500 SaaS/AI companies with transparent pricing | **>1,800 changes = 3.6 per company** in 2025 | Census of published pricing pages for a curated 500-company index; **inclusion criteria not published** | 500 companies | Poyar / PricingSaaS `[paywalled — headline verified, full methodology behind paywall]` | Jan 2026 | **4/5 — methodology paywalled** |
| Credit-model adoption growth | **+126% YoY** (35 → 79 companies) — note **79/500 = 16% absolute adoption**; the 126% is a small-base growth rate | PricingSaaS 500 Index, census of published pricing pages | 500 companies | PricingSaaS `[paywalled — raw company list not publicly auditable]` | 2026-01-07 | **4/5 — dataset not auditable** |
| Hybrid pricing | **41%** (up from 27% prior year) | B2B monetization survey | 240 | Poyar 2025 | Apr–May 2025 | 5/5 |
| Hybrid pricing | **37%** (from 25% prior year) — most popular model | **Different respondent mix; 2026 skews far more enterprise (25% >$150M ARR)** | 230 | Poyar 2026 | Apr–May 2026 | 5/5 — **do not draw a trend line across these two rows** |
| Flat-fee | **22%** (from 29%) | B2B monetization survey | 240 | Poyar 2025 | Apr–May 2025 | 5/5 |
| Flat-fee among <$5M ARR | **37%** | as above | 230 | Poyar 2026 | Apr–May 2026 | 5/5 |
| Seat-based | **15%** (from 21%) | as above | 240 | Poyar 2025 | Apr–May 2025 | 5/5 |
| Seat-based among >$150M ARR | **29%** | as above | 230 | Poyar 2026 | Apr–May 2026 | 5/5 |
| Outcome-based | **5%** today; **25%** expect it by 2028 | as above | 240 | Poyar 2025 | Apr–May 2025 | 5/5 |
| Companies offering customers a *choice* of pricing model | **29%**, up from 21% | as above | 230 | Poyar 2026 | Apr–May 2026 | 5/5 |
| Companies displaying pricing publicly | **45%**; concentrated in <$5K ACV and PLG | as above | 240 | Poyar 2025 | Apr–May 2025 | 5/5 |
| Any form of usage-based pricing | **61%** (2022), 45% (2021), 34% (2020); +15% actively testing | Private SaaS | **count undisclosed** | OpenView 2nd ed. `[secondary via TechCrunch]` | survey Jul–Aug 2022 | **4/5 — n undisclosed** |
| Companies using good-better-best packaging | **"two-thirds"** | not defined | **not disclosed** | Poyar, Packaging 201 | Sep 2023 | **3/5 — no n, vague cohort** |
| Model adoption, B2B entry point | Free trial 57% / freemium 26% / reverse trial 7% / interactive demo 7% / paid trial 4% | Primary landing point for new customers | 200 | ChartMogul | Jan 2026 | 5/5 |
| Freemium/free-trial/enterprise prevalence | **54.1% freemium, 38.2% free trial, 31.0% "contact sales", 22.4% demo-only** — ⚠ **two of these four shares are impossible on the stated sample.** On n=110 every share must be a multiple of 1/110 = 0.909%. 38.2% (42/110) and 31.0% (34/110) resolve exactly; **54.1% and 22.4% resolve to 59.5 and 24.6 products and cannot be counts out of 110** | Scan of live B2B products | 110 products **as stated by the publisher; the arithmetic says at least two figures were computed on a different denominator** | SaaS Research Lab | Mar 2026 | **2/5 — internally impossible against its own stated n; do not cite any of the four until the publisher's denominator is resolved** |
| Free-tier health diagnostics | Free→paid 2–5% healthy, below 2% alarm; free:paid ratio ~50:1 healthy, above 100:1 = too generous | **Practitioner heuristics, no dataset** | **none** | L16 source S26 | 2026 | **3/5 — heuristic** |

---

## Involuntary churn and dunning recovery

> **Split by billing rail.** The Churnkey/Stripe rows are web/card-on-file and cross to a Stripe product. The RevenueCat/Google Play rows do not.

### Web / Stripe rail

| Metric | Value | Exact cohort | n | Source | Date | Fields |
|---|---|---|---|---|---|---|
| Involuntary share of all churn — Digital goods | **29%** | Card-billed subscriptions | Stripe: $1.4T / 200M subscriptions; Churnkey: 5.4M failed payments / 25M subscriptions over one year | Churnkey analysis of Stripe 2024 report | 2024 data | 5/5 |
| Business services | 26% | as above | as above | Churnkey/Stripe | 2024 | 5/5 |
| Personal services | 25% | as above | as above | Churnkey/Stripe | 2024 | 5/5 |
| Education | 24% | as above | as above | Churnkey/Stripe | 2024 | 5/5 |
| Merchandise | 23% | as above | as above | Churnkey/Stripe | 2024 | 5/5 |
| SaaS | 22% | as above | as above | Churnkey/Stripe | 2024 | 5/5 |
| Travel & lodging | 18% | as above | as above | Churnkey/Stripe | 2024 | 5/5 |
| Leisure | 17% | as above | as above | Churnkey/Stripe | 2024 | 5/5 |
| Insurance | 9% | as above | as above | Churnkey/Stripe | 2024 | 5/5 |
| **B2C overall** | **24%** | as above | as above | Churnkey/Stripe | 2024 | 5/5 |
| **B2B overall** | **16%** | as above | as above | Churnkey/Stripe | 2024 | 5/5 |
| **By price band — under $10/mo** | **35%** of all churn is involuntary | Card-billed subscriptions by monthly price | as above | Churnkey/Stripe | 2024 | 5/5 |
| $10–$30 | 23% | as above | as above | Churnkey/Stripe | 2024 | 5/5 |
| $30–$100 | 26% | as above | as above | Churnkey/Stripe | 2024 | 5/5 |
| $100–$1,000 | 19% | as above | as above | Churnkey/Stripe | 2024 | 5/5 |
| $1,000–$10,000 | 15% | as above | as above | Churnkey/Stripe | 2024 | 5/5 |
| Over $10,000 | 24% | as above | as above | Churnkey/Stripe | 2024 | 5/5 |
| Stripe Smart Retries alone | **51%** of failed payments recovered, avg **5.5 days** to recover | Card-billed subscriptions | 5.4M failed payments / 25M subscriptions | Churnkey (vendor-reported) | 2024 data | 5/5 |
| Churnkey Precision Retries + Stripe | **55%**, avg 4.8 days (+4pp, 0.7 days faster) | as above — **the vendor's own product against the baseline** | 5.4M failed payments | Churnkey | 2024 data | 5/5 |
| Silent retries + failed-payment wall + dunning, combined | **70% of all detected involuntary churn recovered** | as above | 5.4M failed payments | Churnkey | 2024 data | 5/5 |
| Dunning email #1 | **2.8%** incremental recovery | as above | 5.4M failed payments | Churnkey | 2024 data | 5/5 |
| Dunning email #2 | **1.9%** | as above | 5.4M failed payments | Churnkey | 2024 data | 5/5 |
| Dunning email #3 | **1.7%** | as above | 5.4M failed payments | Churnkey | 2024 data | 5/5 |
| Structured dunning overall (SaaS) | **60–85%** of involuntary churn recoverable | SaaS, no cohort definition given | **not published** | Baremetrics (vendor blog) | upd. 2026-06-02 | **3/5 — vendor blog, no n, no cohort definition; the range is wide enough to be unfalsifiable** |
| Pre-dunning email sent 30 days before card expiry | **73% open rate, 11% CTR** | Email performance, no cohort size given | **not published** | Baremetrics (vendor blog) | upd. 2026-06-02 | **3/5 — vendor blog, no n** |
| Stripe Adaptive Acceptance | **$6B recovered in 2024**; +60% YoY retry success rate; 70% greater precision; 35% fewer retry attempts | Stripe network, false-decline recovery | Stripe network (size not restated for this cut) | Stripe (vendor-run) | 2025-02-12 | **4/5 — cut-specific n not restated** |

> **Read the shape of that data.** Silent retries do the overwhelming majority of the work (51% on Stripe's default logic alone). The three dunning emails together add **6.4 percentage points**. This is the opposite of how most founders allocate effort.
> **Under $10/month, more than a third of churn is a payment failure, not a decision.** If you price in the $5–$10 band and have not built dunning, roughly one in three of your "churned" customers never chose to leave.

### Mobile / store rails — **does not transfer to Stripe**

| Metric | Value | Exact cohort | n | Source | Date | Fields |
|---|---|---|---|---|---|---|
| Cancellations that are involuntary billing errors, **Google Play** | **32.3%** (rounded to 31% elsewhere in the same report); 28.2% in the prior year's report | Google Play subscriptions | 115,000+ apps (2026); 75,000 (2025) | RevenueCat | 2026 | 5/5 |
| Same, **App Store** | **15.2%** (rounded to 14%); 15.1% prior year | iOS subscriptions | 115,000+ apps | RevenueCat | 2026 | 5/5 |
| Failed-payment recovery, **platform defaults only** | **~10–15%** | Baseline, no dunning, store rails | 115,000+ apps | RevenueCat | 2026 | 5/5 |
| Recovery lift from enabling **grace periods** | **+57%** recovery of renewal declines | **Google Play platform feature — does not exist on Stripe** | 115,000+ apps + Google Play docs | RevenueCat | 2026 | 5/5 |
| Recovery lift from **account holds** | **+35%** decline recovery; **−8%** involuntary churn | as above | as above | RevenueCat | 2026 | 5/5 |
| Google Play **In-App Messaging API** | **2×** user recovery | as above | as above | RevenueCat | 2026 | 5/5 |
| Combined (grace + hold + in-app messaging) | **~30–35%** of failed payments recovered — roughly triples the ~10–15% baseline | as above | as above | RevenueCat | 2026 | 5/5 |
| Truecaller case | **40%** of at-risk subscribers recovered, up from **15%** baseline | **1 app** | n=1 | RevenueCat | 2026 | 5/5 — **n=1, anecdote** |
| Retry window | Grace period up to **30 days** + account hold remainder = **60 days** max | Google Play platform mechanics | n/a (platform documentation) | Google Play / RevenueCat | 2026 | 5/5 |
| Apple involuntary-churn definition | "churned because of a billing issue and Apple was not able to recover the payment within the **60 day retry window**" | Apple's own definition — **you do not control the retry logic on iOS** | n/a (platform documentation) | Apple App Store Connect | current | 5/5 |
| RevenueCat Web Billing retry window | Up to **30 days** of retries on failed renewal | RevenueCat Web Billing product | n/a (product documentation) | RevenueCat docs | 2026 | 5/5 — **web** |
| Economic sizing | For a $1M ARR Android app, 32% involuntary cancellation ≈ **>$300K/year** | **Illustrative arithmetic, not a measurement** | n/a | RevenueCat | 2026 | **3/5 — a worked example, not data** |

---

## Price points by category

> **Mobile-only.** These are shaped by Apple's price-tier grid and a 30% take rate. See wall 1.

| Metric | Value | Exact cohort | n | Source | Date | Fields |
|---|---|---|---|---|---|---|
| Most common price points (modal) | Weekly **$5.00**; Monthly **$10.00**; Yearly **$30.00** | All categories, iOS+Play | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Median prices | Weekly **$5.99**; Monthly **$8–$9.99**; Yearly **$34.80** (up from $31.60) | as above | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Yearly median by category | Education **$44.99** (highest); H&F **$39.94**; Gaming **$24.99**; Travel **$20.00** (lowest) | Per category | subsets of 115,000+ | RevenueCat SOSA 2026 | 2026 | **4/5 — subset n not published** |
| Gaming medians | Weekly **$5.81**; Monthly **$4.99**; Yearly **$24.99** | Gaming | subset | RevenueCat SOSA 2026 Gaming cut | 2026 | **4/5 — subset n** |
| Weekly median, Business | **$6.89** (highest of any category) | Business | subset | RevenueCat SOSA 2026 Business cut | 2026 | **4/5 — subset n** |
| Yearly median by geography | NA **$39.99**; W. Europe **$39.44**; IN/SEA **$18.32** — a **2.2×** spread | Payer geography | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Monthly median, North America | **$9.99** | NA | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Adapty global medians | Weekly **$5.71–$8.94**; Monthly **$12.99**; Annual **$38.42** | Adapty cohort, **2025 data published in the 2026 report** | 16,000+ apps | Adapty 2026 | 2026 (2025 data) | 5/5 |
| Cross-country price variation | Up to **4×** between countries; European prices **29–39% above** North America | Adapty cohort, localized store prices | 16,000+ apps | Adapty 2026 | 2026 | 5/5 |
| Download-to-paid D35 by price tier | High **2.8%** (top quartile >6.1%); Mid **2.0%** (>4.4%); Low **1.4%** (>3.7%) | Price-tier cohorts | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Trial conversion by price tier | High-priced **8.9%** vs low-priced **4.4%** | Price tiers — **unlike the other two SaaStr rows in this file, this cut cannot be derived from any RevenueCat row recorded here, so the trade post is its sole carrier; the "115,000+ apps" cohort it previously showed was inherited from neighbouring rows** | **not stated by the trade post** | SaaStr `[secondary]` on RevenueCat, primary cut not located | 2026 | **3/5 — trade post, no stated sample, no primary confirmation** |
| Weekly-plan revenue share (Adapty) | **56%** of app subscription revenue (up from 43.3% in 2023) | Adapty cohort — **weekly billing is mobile-native and rare on web** | 16,000+ apps | Adapty 2026 | 2026 | 5/5 |
| High-tier weekly plans, revenue per install | **5.2×** low-tier | Adapty cohort | 16,000+ apps | Adapty 2026 | 2026 | 5/5 |
| Plan-duration mix (share of subs sold, medians) | Overall Weekly **34%** / Monthly **42%** / Yearly **33%**. Extremes: Gaming 82% weekly; Productivity 77% monthly; H&F 68% yearly; Gaming yearly 13%. By geo: NA 36% monthly / 40% yearly; MEA 55% monthly / 19% yearly; IN/SEA 45% monthly / 24% yearly | All categories | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |

### Web SaaS starter-price prevalence

| Metric | Value | Exact cohort | n | Source | Date | Fields |
|---|---|---|---|---|---|---|
| Median starter price | **$29**, IQR **$19–$49**, clustering at $19/$25/$29/$49 | Live B2B/prosumer SaaS pricing pages | 110 products | SaaS Research Lab | Mar 2026 | **3/5 — web and safe to cross, but downgraded 2026-08-13: the same publisher's prevalence row in *Churn and retention — B2B* is arithmetically impossible against this same n=110, which puts the publisher's denominator discipline in doubt for every figure it reports** |

---

## Volume-discount curves and top-up premiums

> **Web SaaS / AI tools.** All per-unit figures are `[derived]` from published list prices; monthly-billed prices used for comparability. Prices observed **2026-08-12**.

### Volume-discount curves, entry rung → top rung

| Product | Unit | Entry rung | Top rung | Entry $/unit | Top $/unit | **Discount** | Volume range | Source | Date | Fields |
|---|---|---|---|---|---|---|---|---|---|---|
| PhotoAI | AI credit | $19 / 50 | $199 / 10,000 | $0.3800 | $0.0199 | **94.8%** | 200× | published pricing page, `[derived]` | 2026-08-12 | 5/5 |
| Bannerbear | API credit | $49 / 1,000 | $299 / 20,000 | $0.0490 | $0.0150 | **69.5%** | 20× | published pricing page, `[derived]` | 2026-08-12 | 5/5 |
| Runway | credit | $15 / 625 | $95 / 9,500 | $0.0240 | $0.0100 | **58.3%** | 15.2× | published pricing page, `[derived]` | 2026-08-12 | 5/5 |
| Descript | AI credit | $24 / 400 | $65 / 1,500 | $0.0600 | $0.0433 | **27.8%** | 3.75× | published pricing page, `[derived]` | 2026-08-12 | 5/5 |
| Descript | media hour | $24 / 10 | $65 / 40 | $2.4000 | $1.6250 | **32.3%** — **non-monotonic**: Creator is $1.167, cheaper than Business | 4× | published pricing page, `[derived]` | 2026-08-12 | 5/5 |
| ElevenLabs (core) | credit (1 character) | $6 / 30k | $990 / 6M | $0.000200 | $0.000165 | **17.5%** | 200× | published pricing page, `[derived]` | 2026-08-12 | 5/5 |
| ElevenLabs Reception AI | phone minute | $22 / 60 | $99 / 500 | $0.3667 | $0.1980 | **46.0%** | 8.3× | published pricing page, `[derived]` | 2026-08-12 | 5/5 |

**There is no single market curve — the curve is determined by whether the unit is identical across tiers.** Two clusters, from this n=7 sample:

- **Shallow (17–33%): commodity units.** ElevenLabs core sits at 17.5% even across a 200× volume range, because a character is a character. When the unit is genuinely identical at every tier, a steep discount is an arbitrage invitation — the big customer buys many small accounts. Shallow curves are a defence.
- **Steep (58–95%): fenced or differentiated units.** PhotoAI's 94.8% is only possible because the tiers also differ in output quality; Bannerbear and Runway carry tier-exclusive features (bandwidth, credit rollover) that make cross-tier substitution unattractive.
- **The practical band for a small product selling a uniform unit: 20–40% entry to top.** Everything in this dataset selling a truly identical unit lands there. `n=7 products; this is a small sample and should be read as a shape, not a distribution.`

**Two secondary regularities in the same sample:**
1. **The curve flattens or inverts at the top rung in almost every product.** ElevenLabs Scale ($0.1661) is worse than Pro ($0.1650); Bannerbear Enterprise ($0.01495) worse than Scale ($0.0149); Descript Business 39% worse per media hour than Creator. The top tier is never sold on unit price.
2. **The entry rung is often not a volume tier at all.** PhotoAI Starter is 7.8× the per-unit price of the next rung; Reception AI Basic is 33% worse per minute than Plus. The bottom rung is priced as a paid trial whose job is to make rung 2 look correct.

### Top-up premium over in-plan unit price — the load-bearing datapoint

**ElevenLabs Reception AI** is the one product in the corpus that publishes both halves of the arithmetic. Overage is **"$0.40 per credit"**, applied uniformly across all three paid tiers.

| Tier | Plan $/min `[derived]` | Flat overage | **Top-up premium over plan** | Source | Date | Fields |
|---|---|---|---|---|---|---|
| Basic | $22 ÷ 60 = $0.3667 | $0.40 | **+9%** | published docs page | 2026-08-12 | 5/5 |
| Plus | $55 ÷ 200 = $0.2750 | $0.40 | **+45%** | published docs page | 2026-08-12 | 5/5 |
| Premium | $99 ÷ 500 = $0.1980 | $0.40 | **+102%** | published docs page | 2026-08-12 | 5/5 |

> ⚠ **Stated assumption: 1 credit = 1 phone minute.** The plans are denominated in minutes and the overage in credits, and the page does not give the mapping. Web-chat minutes are exactly 2× phone minutes in every tier, so **if credits map to chat minutes instead, every premium above halves.** This is flagged, not asserted.

**The mechanism**, which generalises: a single flat top-up rate pegged just above the *highest* in-plan unit rate — which is your *cheapest, entry* tier — is automatically never cheaper than any tier's marginal unit (no inversion possible at any rung) and progressively more punitive as customers grow (automatic upgrade pressure). **Peg to entry, not to your top tier.** Pegging to the top tier hands entry customers a live arbitrage.

**Other top-up rates could not be captured.** Descript ("Top up media minutes" / "Top up AI credits") and Runway ("purchase additional credits from the Plans & Billing page") both surface the *existence* of top-ups publicly and withhold the *rate* until you are logged in and out of credits. **These are real gaps, not estimates.** Bannerbear publishes the opposite policy verbatim: **"It is not possible to go over your monthly image / video API credits limit."**

**One published overage multiplier exists outside this sample**: Zapier at **2.5× monthly / 1.25× annual** (L16 source S10). No benchmark distribution of overage multiples exists in the public record. `[unsourced as a published rule — would need a survey of metered SaaS overage rates against plan rates.]`

---

## Annual discount ratios

> **Web SaaS list prices. Safe to cross to a web checkout.**

| Source | Reported average | Exact cohort | n | Date | Fields |
|---|---|---|---|---|---|
| CompareEdge, *SaaS Annual Billing Discount Report 2026* | **Median 20%**; core band **16–25%** | **Published list-price gaps** between monthly and annual on live self-serve vendor pricing pages, both prices published | **560 plans across 207 products** | pub. 2026-07-02, upd. 2026-08-10 | 5/5 |
| Vendr 2024 dataset `[secondary via Torii]` | **Median annual prepay discount 18%**; tiered programmes reach 25% for multi-year | **Negotiated enterprise contracts** — a different thing from a published list gap | **not disclosed in the secondary source** | 2024 data, accessed 2026-08-12 | **4/5 — n not disclosed** |
| Vendr Q2 2023 `[secondary via SaaStr]` | **~10% average** — **this is *negotiated* discount off list, NOT annual-vs-monthly** | Vendr customer base | **size not disclosed** | ~mid-2023 | **4/5 — n not disclosed; and it measures a different quantity** |
| Saastruecost citing Vendr 2024 `[secondary, search snippet]` | 17% average annual discount | Enterprise transactions | ~6,000 transactions | 2024 | **4/5 — reached only through a search snippet** |
| Credit/indie corpus | Annual discounts cluster at **16.7–25%**, almost always expressed as *time*: "two months free" (ElevenLabs, Fathom), "Save up to 35%" (Descript), 25% (TinyWow), 20% (Runway), 33% (Photoroom). **PhotoAI is the outlier at ~57%** ("6+ months free") | Live pricing pages of credit-based and indie products | 7 products | observed 2026-08-12 | 5/5 — **small n** |
| Consumer subscription counter-example | **Oura: annual saves 2.6%** ($5.99 × 12 = $71.88 vs $69.99 annual). No badge, no strikethrough, no savings percentage; the hero CTA quotes the **monthly** price | Live membership page | n=1 | observed 2026-08-12 | 5/5 — **n=1** |

> **Do not average CompareEdge with Vendr.** CompareEdge measures published list-price gaps on self-serve pages; Vendr measures negotiated enterprise contracts. The convergence at 17–20% is mildly reassuring, not a single confirmed fact. CompareEdge is the only source here with disclosed primary methodology, and it is a comparison site rather than a research firm — treat the 20% median as **medium evidence, not settled**.
> **CompareEdge's own caveat:** gaps exceeding 40% "represent introductory rates rather than genuine discounts" — for VPNs and hosting, "the monthly rate exists so the long-plan banner has something dramatic to point at." Their category medians span Email Marketing 12% to VPN 80%. **The honest average for real software, excluding introductory-rate categories, is the 16–25% band.**

### The break-even discount from your own churn rate

`[derived — author's arithmetic in L19, not a cited benchmark]`. Let *p* = monthly price, *c* = monthly churn. Expected revenue from a monthly subscriber over 12 months = `p × Σ(1−c)^k` for k=0..11; the indifference annual price is that sum.

| Monthly churn | Expected 12-mo revenue at $20/mo | Indifferent annual price | Break-even discount off $240 |
|---:|---:|---:|---:|
| 3% | $204.11 | $204.11 | **15.0%** |
| 5% | $183.86 | $183.86 | **23.4%** |
| 8% | $158.08 | $158.08 | **34.1%** |

**The higher your churn, the larger the annual discount you can rationally give.** At 3% monthly churn a 20% annual discount is *destroying* value relative to letting them pay monthly. Two adjustments before using this: it assumes a 12-month horizon only (extending the horizon favours monthly), and it ignores the one COGS line annual *cuts* — twelve $20 charges incur 12 × ($0.58 + $0.30) = $10.56 in Stripe-style fees against $5.87 on one $192 charge, recovering $4.69/year, about 2.4% of the annual price. Small, real, and nobody counts it.

At **3–4% monthly churn** the computed break-even discount lands at **15.0–18.9%**, which is the **15–19%** band this library treats as authoritative and the band P-093 in `patterns/04-price-points.md` prescribes. Recurly's overall benchmark of **3.60%** sits inside it and computes to **17.6%**. The **4.29%** rate for the $10–$25 ARPC band — the band a low-priced consumer product actually sits in — computes to **20.5%**, above the 15–19% band but still inside the observed 16–25% core market band and well under the 25% threshold at which the discount is hiding a churn problem. That the computed break-even and the published market median land within a few points of each other is the strongest argument for the market average being roughly right. **It is not a reason to average CompareEdge's 20% with Vendr's 18% or 17%**, because those measure published list gaps and negotiated enterprise contracts respectively; the point is that two different instruments land in the same neighbourhood, not that they can be pooled.

`[unsourced — that "N months free" outconverts "N% off"; would need an A/B test of the same offer under both framings. No such test was located.]`

---

## Referral participation

> **Cohort warning: this is e-commerce, not subscription.** The best-documented referral dataset available covers Shopify stores, not subscription products. Read it for the shape of participation, not as a subscription benchmark.

| Metric | Value | Exact cohort | n | Source | Date | Fields |
|---|---|---|---|---|---|---|
| Share-action rate, **top quartile** | **4.64%** | Clicks on share button per eligible prompt; established Shopify referral programs | 500 programs | ReferralCandy | window 2025-07-01 → 2026-06-30 | 5/5 |
| Share-action rate, **top 10%** | **13.38%** | as above | 500 programs | ReferralCandy | 2025-07 → 2026-06 | 5/5 |
| Time to first measurable referred sale | **14 days** typical; 68% of programs within the first month | as above | 500 programs | ReferralCandy | 2025-07 → 2026-06 | 5/5 |
| Share of advocates who refer exactly once | **83%** | as above | 500 programs | ReferralCandy | 2025-07 → 2026-06 | 5/5 |
| Share of referred customers from the top 1.1% of advocates (11+ referrals) | **30.2%** | as above | 500 programs | ReferralCandy | 2025-07 → 2026-06 | 5/5 |
| Referred customers' likelihood of becoming advocates | **10.7×** other channels | as above | 500 programs | ReferralCandy | 2025-07 → 2026-06 | 5/5 |
| Cash/commission vs coupon-only rewards | **2.2×–4.5×** more likely to produce meaningful referral revenue | as above | 500 programs | ReferralCandy | 2025-07 → 2026-06 | 5/5 |
| Programs that reward both sides (give-get) | **>78%** | Consumer referral attitudes | **survey n not published in the summarising source** | impact.com `[secondary — summarising two of its own reports]` | pub. 2025 | **3/5 — referral-software vendor summarising its own reports, no n, no method** |
| Consumers who participate in referral programs | **44%** (56% do not) | as above | **not published** | impact.com `[secondary]` | 2025 | **3/5 — referral-software vendor summarising its own reports, no n, no method** |
| Non-participants who never received a referral link/code | **60%** | as above | **not published** | impact.com `[secondary]` | 2025 | **3/5 — referral-software vendor summarising its own reports, no n, no method** |
| Minimum reward value consumers expect | **$21 or an 11% discount** | as above | **not published** | impact.com `[secondary]` | 2025 | **3/5 — referral-software vendor summarising its own reports, no n, no method** |
| Most commonly offered reward | **$10 store credit** — the gap against the $21 expectation is the finding | as above | **not published** | impact.com `[secondary]` | 2025 | **3/5 — referral-software vendor summarising its own reports, no n, no method** |
| Top consumer reward preference | **Cash (58%)**, then free products, then third-party gift cards | as above | **not published** | impact.com `[secondary]` | 2025 | **3/5 — referral-software vendor summarising its own reports, no n, no method** |
| Programs using tiered structures | **20%** | as above | **not published** | impact.com `[secondary]` | 2025 | **3/5 — referral-software vendor summarising its own reports, no n, no method** |
| Dropbox referral mechanics | Give-get, symmetric, paid in product: **500MB each side**, capped at 16GB (Basic) / 32GB (Plus). ~100,000 registered users (Sept 2008) → ~2.2M (Sept 2009) → ~4M (end 2010). **2.8M direct referrals in February 2010**; **35% of daily signups from referrals** in the first 15 months. Paid-search CAC at the time was **$233–$338** | n=1 company, historical | n=1 | ReferralRock `[secondary]` — a referral-software vendor's retelling; **no primary Dropbox source was fetched for any figure in this row** | events 2008–2010 | **3/5 — n=1, 16 years old, and reached only through a vendor blog that sells referral software. The CAC range in particular has no primary and should not be quoted as a number** |

> **Two caveats almost every Dropbox retelling omits, both present in the source:** **one-third of signups already came from word of mouth before the program launched**, and the long-run effect was a **"permanent 60% bump"** — not a 3,900% one. The 3,900% figure is total growth over the window, not referral-attributed growth.
> **At small scale the programme economics do not switch on.** With 60 customers and a top-quartile 4.64% share-action rate you will generate roughly three shares. The concentration finding (top 1.1% of advocates → 30.2% of referrals) means the mechanism requires scale. The instrumentation is still worth having.

---

## Unit economics and margin expectations

### Gross margin by product archetype

| Benchmark | Value | Exact cohort | n | Source | Date | Fields |
|---|---|---|---|---|---|---|
| AI product gross margin, average | **52%** (up from 45% in 2025 and 41% in 2024) | Scaling-stage AI B2B companies | **not disclosed in the summarising source** | ICONIQ Growth `[secondary]` | Jan 2026 reading, pub. 2026-05-15 | **4/5 — n not disclosed** |
| LLM-native companies | ~65% | LLM-native companies | **not disclosed** | Bessemer, *State of AI 2025* `[secondary]` | 2025 | **4/5 — no n** |
| AI startups, investor-accepted band | **50–60%** | **Originates in a16z (Casado & Bornstein), *The New Business of AI*, 2020** — still the most-cited number in 2026 | **none published** | a16z | **2020** | **3/5 — no n, and six years stale while being quoted as current** |
| Traditional SaaS | 80–90% | Classic SaaS | **multiple, none specified** | multiple | **no date** | **2/5 — no n, no date, no single source. Folk knowledge.** |
| **Median AI gross-margin *target* set by operators** | **50%**; only **12%** target SaaS-like 80%+; **12%** target ≤20% | B2B monetization survey respondents | 230 | Growth Unhinged / Poyar | 2026-05-13 | 5/5 |
| Median target AI gross margin (same survey, restated) | **~50%** vs 70–80%+ for classic SaaS | as above | 230 | Poyar 2026 | Apr–May 2026 | 5/5 |
| Gross-margin compression, early-stage companies | **~10 points YoY** | B2B SaaS survey | 800+ | Poyar 2025 Benchmarks | Aug–Sep 2025 | 5/5 |
| Public comps | HubSpot 84% (down from 85% in Q2–Q3 2024); Snowflake 67.2% LTM product GM in Q4 FY26, targeting 75% FY27; Datadog 80% at $1B quarterly revenue | Public company reporting | n/a (public filings) | via ICONIQ summary `[secondary]` | Q1 2026 | 5/5 |
| Inference as share of AI product revenue | **~23%** at scaling-stage AI B2B companies — an industry-average IER of about **4.3**, i.e. below the healthy line | ICONIQ Growth *2026 State of AI Bi-Annual Snapshot* | **not disclosed** | ICONIQ `[secondary]` | 2026-05-15 | **4/5 — no n** |
| AI credits in use / planned within 6–12 months | **29% / 33%** | B2B monetization survey | 230 | Poyar 2026 | Apr–May 2026 | 5/5 |
| AI spend from customers' existing tech/software budget | **70%** | as above | 230 | Poyar 2026 | Apr–May 2026 | 5/5 |
| Companies that have launched AI features | **70%**; +22% have them on the roadmap | B2B SaaS survey | 800+ | Poyar 2025 Benchmarks | Aug–Sep 2025 | 5/5 |
| AI is core to the product | **36%** overall; **75%** of post-2022 startups | as above | 800+ | Poyar 2025 Benchmarks | Aug–Sep 2025 | 5/5 |
| AI as core offering / no AI / standalone add-on | **53% / 20% / 16%** | B2B monetization survey | 240 | Poyar 2025 | Apr–May 2025 | 5/5 |

### The flat-pricing margin inversion

`[derived — a published stress test, not a measurement of any real company's book.]` Same $0.04 cost-to-serve per task, three package designs, three user profiles:

| User | Tasks/mo | Cost | Flat $30/mo | Pure usage @ $0.08 | Hybrid: $15 base + overage |
|---|---|---|---|---|---|
| Light | 100 | $4 | **86.7%** GM | 50% GM | 73.3% GM |
| Median | 500 | $20 | **33.3%** GM | 50% GM | 42.9% GM |
| Power | 2,500 | $100 | **−233%** GM | 50% GM | 48.7% GM |

Source: Digital Applied, 2026-06-30. **The $0.04 cost-to-serve is this published example's own assumption, not a market rate, and it is not Ledgerly's cost-to-serve** — Ledgerly's canonical figures are $0.060 per receipt pre-lever and $0.0186 post-lever, and substituting the $0.040 here for either of those is a defect this library has committed before.

**Flat pricing does not fail gradually — it inverts.** At flat $30/mo the light user contributes about $26 of margin and the power user destroys about $70, so a single power user at 2,500 tasks consumes the margin contributed by **roughly three** light users, not seven as this passage read until 2026-08-13. The correction does not soften the conclusion, because the power user's contribution is *negative* rather than merely small: hybrid remains the only column acceptable at every row.

**The published cost floor** is **2× cost-to-serve**, producing 50% gross margin at every usage level ($0.040 cost → $0.08 per-task floor). It is a floor, not a target. Note that inference cost has been estimated to fall roughly **10× annually** per unit of capability (a16z "LLMflation", 2024), so a price set at 2× today drifts to 4× or 6× within a year if held.

**Cost levers to pull before raising price:** model routing (~5× price spread between tiers of the same model family; one vendor claims up to 70% compute reduction), prompt caching on repeated input (≈90% discount on cached input reads), batch/async processing (~50% discount). Compute your floor *after* applying these. ⚠ **`[unsourced]` — these three multipliers carry no named vendor, no price sheet and no observation date anywhere in this library, and they are load-bearing for every cost-lever recommendation built on them. Treat them as the shape of the levers rather than as figures, and re-derive each one against a dated published price sheet before it enters a deliverable.**

### Realized LTV per payer — the metric that is actually available

> **Mobile-only.** RevenueCat uses RLTV (money actually collected to date) rather than projected LTV precisely because projections are unfalsifiable.

| Cut | Month-1 RLTV per payer | Year-1 RLTV per payer | Exact cohort | n | Source | Date | Fields |
|---|---|---|---|---|---|---|---|
| **Global median** | — | **$23** | All payers, iOS+Play | 115,000+ apps | RevenueCat SOSA 2026 | pub. 2026-03-19 | 5/5 |
| High-priced apps | $35.89 | **$62.19** (top quartile $109.64) | Price-tier cohort | 115,000+ | RevenueCat | 2026 | 5/5 |
| Mid-priced apps | $15.78 | **$28.75** | as above | 115,000+ | RevenueCat | 2026 | 5/5 |
| Low-priced apps | $6.67 | **$10.69** | as above | 115,000+ | RevenueCat | 2026 | 5/5 |
| North America | $17.02 | $26.07 (top quartile $46) | Payer geography | 115,000+ | RevenueCat | 2026 | 5/5 |
| Western Europe | $17.89 | $26.64 | as above | 115,000+ | RevenueCat | 2026 | 5/5 |
| IN/SEA | $10.59 | $19.32 | as above | 115,000+ | RevenueCat | 2026 | 5/5 |
| Health & Fitness | $24.23 | $35.64 | Category | subset | RevenueCat | 2026 | **4/5 — subset n** |
| Business | $18.76 | $35.48 (top quartile $69.19) | Category | subset | RevenueCat | 2026 | **4/5 — subset n** |
| Productivity | — | $24.95 | Category | subset | RevenueCat | 2026 | **4/5 — subset n** |
| Gaming | $8.41 | $11.22 | Category | subset | RevenueCat | 2026 | **4/5 — subset n** |
| AI apps | — | $30.16 (41% above non-AI $21.37) | AI vs non-AI split | 115,000+ | RevenueCat | 2026 | 5/5 |

> ⚠ **Internal inconsistency in the publisher's own public pages.** Per-geo Year-1 RLTV appears both as NA $26.07 / WE $26.64 / IN-SEA $19.32 (chart) and as NA $32 / WE $25 / global $23 / IN-SEA $14 (narrative and secondary coverage). These are probably two different definitions — e.g. all payers vs cohort-complete payers. **Do not average them; cite whichever definition you can pin down.**

**The practical anchor:** the median mobile subscription app realizes **$23 of gross booking value per paying customer in the first year**. After Apple's 15% Small Business Program commission that is ~$19.55 net. Any CAC above roughly $8–10 is, for the median app, a losing trade in year 1. The curve is front-loaded — Health & Fitness realizes $24.23 of its $35.64 year-1 value in month 1 (68%).

### Revenue per install — mobile only

| Cut | D14 | D60 | Exact cohort | n | Source | Date | Fields |
|---|---|---|---|---|---|---|---|
| All categories | $0.23 | $0.34 | Realized revenue per install, medians, iOS+Play | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Health & Fitness | $0.48 | $0.66 | Category | subset | RevenueCat | 2026 | **4/5 — subset n** |
| Business | $0.31 | $0.50 | Category | subset | RevenueCat | 2026 | **4/5 — subset n** |
| Productivity | $0.30 | $0.50 | Category | subset | RevenueCat | 2026 | **4/5 — subset n** |
| Gaming | $0.08 | $0.14 | Category | subset | RevenueCat | 2026 | **4/5 — subset n** |
| North America | $0.38 | $0.55 | Geography | 115,000+ | RevenueCat | 2026 | 5/5 |
| Western Europe | $0.25 | — | Geography | 115,000+ | RevenueCat | 2026 | 5/5 |
| IN/SEA | $0.08 | $0.11 | Geography | 115,000+ | RevenueCat | 2026 | 5/5 |
| **Hard paywall** | **$2.32** | **$3.09** | Paywall type | 115,000+ | RevenueCat | 2026 | 5/5 |
| **Freemium** | **$0.27** | **$0.38** | Paywall type | 115,000+ | RevenueCat | 2026 | 5/5 |
| High-priced | $0.61 | $0.94 | Price tier | 115,000+ | RevenueCat | 2026 | 5/5 |
| Low-priced | $0.08 | $0.11 | Price tier | 115,000+ | RevenueCat | 2026 | 5/5 |
| Yearly-dominant | $0.36 | $0.46 | Plan mix | 115,000+ | RevenueCat | 2026 | 5/5 |
| Weekly-dominant | $0.19 | $0.32 | Plan mix | 115,000+ | RevenueCat | 2026 | 5/5 |
| Monthly-dominant | $0.18 | $0.29 | Plan mix | 115,000+ | RevenueCat | 2026 | 5/5 |

### The small-N wall on any LTV or LTV:CAC claim

`[derived — the arithmetic in L20 §5, at a true monthly churn of 10% and ARPU × GM of $8.50/mo. Author's arithmetic, not a cited benchmark.]` Because `LTV ∝ 1/churn`, the relative error in LTV is approximately the relative error in churn, and for small `p` the relative standard error collapses to `≈ 1/√k` where `k` is the number of **observed cancellations**.

| Subscriber-months observed | Expected churn events `k` | 95% CI on monthly churn | Implied lifetime (months) | Implied LTV | LTV spread |
|---|---|---|---|---|---|
| 30 | 3 | 0% – 20.7% | 4.8 – ∞ | $41 – ∞ | **unbounded** |
| 100 | 10 | 4.1% – 15.9% | 6.3 – 24.4 | $54 – $207 | **3.8×** |
| 250 | 25 | 6.3% – 13.7% | 7.3 – 15.9 | $62 – $135 | **2.2×** |
| 400 | 40 | 7.1% – 12.9% | 7.8 – 14.1 | $66 – $120 | **1.8×** |
| 1,000 | 100 | 8.1% – 11.9% | 8.4 – 12.3 | $71 – $105 | **1.5×** |
| 4,000 | 400 | 9.1% – 10.9% | 9.2 – 11.0 | $78 – $93 | **1.2×** |

**A CAC:LTV ratio carries decision-grade information at roughly 100 observed churn events and directional information at about 25. Below ~10 events it is decoration.** At 10%/month churn, 25 events ≈ 250 subscriber-months (40 customers for 6 months); 100 events ≈ 1,000 subscriber-months. **Under 100 customers, use payback period** — it requires only ARPU (known exactly), gross margin (known exactly) and CAC (known exactly), and zero extrapolation of a churn curve.

Also note the peeking penalty (Evan Miller, 2010-04): at a 50% baseline with a 5% threshold, checking after every observation raises the true false-positive rate to **26.1%** — "more than five times what you probably thought." One peek requires a 2.9% reported threshold to hold a true 5%; ten peeks require 1.0%. Fix sample size in advance.

### Market structure — mobile launches

| Metric | Value | Exact cohort | n | Source | Date | Fields |
|---|---|---|---|---|---|---|
| Median app MRR growth YoY | **+5.3%** | All apps in cohort | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Top decile MRR growth | **+306%**; bottom decile **−33%** or worse | Deciles | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Median monthly revenue 1 year post-launch | **~$72**; top quartile **>$429**, P90 **>$2,574**; Gaming P90 $4,554 | New launches | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Share of new apps reaching $1K MRR within 2 years | **17.3%** | New launches | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Share of new apps reaching $10K MRR within 2 years | **4.6%** (~5% in the prior year's report, n=75,000) | New launches | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Median days to $1K MRR | All categories **58**; Gaming 32 (fastest); Business 113 (slowest) | **Conditional on reaching it — survivorship** | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 with the caveat |
| Median days to $10K MRR | All categories **109**; Gaming 53 | as above | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 with the caveat |
| New subscription-app launches per month | ~2,000 (Jan 2022) → **14,700+** (Jan 2026) = 7× | Global | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Revenue held by pre-2020 apps vs 2025+ launches | **69%** vs **3%** | Cohort by launch year | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Adapty revenue distribution | Median app **$492/month**; **59.3%** make under $1,000 total; only **7.2%** cross $100K; top 10% capture **94.5%** of revenue | Adapty cohort | 16,000+ apps | Adapty 2026 | 2026 | 5/5 |
| Web revenue adoption | **41%** of top-tier (Tier 5) apps generate web revenue vs **1.3%** of hobby apps (**31×** gap); web is **3.2%** of total revenue globally, **4.9%** in North America | Cohort by app tier | 115,000+ apps | RevenueCat SOSA 2026 | 2026 | 5/5 |
| Global IAP spend 2025 | **$167B**, +10% YoY; downloads +0.8%; non-game IAP surpassed games for the first time (+21% YoY) | Global iOS + Google Play, all apps | Global store data | Sensor Tower, *State of Mobile 2026* `[gated — PDF via form]` | 2026 (2025 data) | 5/5 |
| 2025 mobile app consumer spend, alternate estimate | **~$156B**, +21% YoY; downloads down 5th year running | Global, all apps | Appfigures global estimates | Appfigures `[secondary via MediaPost]` | 2026-01-16 | 5/5 — **conflicts with the $167B figure above; the two publishers use different estimation methods and neither reconciles** |
| Average revenue per download | App Store **$0.67** vs Google Play **$0.11** | Global, **all apps, not subscription-only** | **primary not confirmed** | search-surfaced 2026 data | 2026 | **3/5 — primary not confirmed, n not stated** |

> ⚠ **Sample conflict to carry.** TechCrunch's coverage of the AI-vs-non-AI cut cites a **75,000-developer / $11B** sample against the headline **115,000 / $16B** — likely an earlier cut. The AI/non-AI table below therefore sits on an unclear denominator.

| Metric | AI apps | Non-AI apps | Exact cohort | n | Source | Date | Fields |
|---|---|---|---|---|---|---|---|
| Share of analyzed apps | 27.1% | 72.9% | iOS+Play | **75,000+ or 115,000+ — sources conflict** | RevenueCat via TechCrunch `[secondary]` | 2026-03-10 | **4/5 — denominator disputed** |
| Annual-plan retention | 21.1% | 30.7% | as above | disputed | as above | 2026-03-10 | **4/5** |
| Monthly-plan retention | 6.1% | 9.5% | as above | disputed | as above | 2026-03-10 | **4/5** |
| Weekly-plan retention | 2.5% | 1.7% | as above | disputed | as above | 2026-03-10 | **4/5** |
| Trial-to-paid | 8.5% | 5.6% | as above | disputed | as above | 2026-03-10 | **4/5** |
| Monetization rate | 2.4% | 2.0% | as above | disputed | as above | 2026-03-10 | **4/5** |
| Monthly RLTV | $18.92 | $13.59 | as above | disputed | as above | 2026-03-10 | **4/5** |
| Annual RLTV | $30.16 | $21.37 | as above | disputed | as above | 2026-03-10 | **4/5** |
| Refund rate | 4.2% | 3.5% | as above | disputed | as above | 2026-03-10 | **4/5** |

> Summarized elsewhere as AI apps earning **+41% revenue per payer** while **churning ~30% faster** / **36% worse 12-month retention**. The "36% worse" and "30% faster" framings are **the same underlying gap expressed two ways — do not stack them.**

### Experimentation volume

| Metric | Value | Exact cohort | n | Source | Date | Fields |
|---|---|---|---|---|---|---|
| Apps running ≥50 paywall experiments vs 1 | **18.7× median revenue premium** | Adapty cohort — **almost certainly a selection effect: apps with the traffic to run 50 experiments are bigger apps** | 16,000+ apps | Adapty (vendor sells experimentation tooling) | 2026 | 5/5 with the caveat |
| Apps running experiments vs not | "up to **40×** more revenue"; average tester ran **14.7** experiments | as above | 16,000+ apps | Adapty | 2026 | 5/5 with the caveat |
| Experiment win rate for LTV uplift, by lever | Localization **62.3%** · Trial structure **59.6%** · Plan duration **58.7%** · Number of plans **57.1%** · Price changes **45.5%** · **Visual/copy only 34.6%** | Adapty experiment corpus | 105,000 paywalls | Adapty | 2026 | 5/5 |

---

## Refunds, disputes and network thresholds

Added 2026-08-13. The thresholds are hard primary facts read off network and processor documentation; the refund rates are the softest rows in this section and are labelled accordingly. **Read `07-risk-reversal.md` P-312 through P-316 before acting on any of it** — the operative findings here are rules, not rates.

| Metric | Value | Cohort / definition | Sample | Source | Date | Confidence |
|---|---|---|---|---|---|---|
| **Visa VAMP — non-compliant** | **0.5% ratio, or a count of 5** | `[TC40 fraud reports + TC15 disputes] ÷ settled transactions`; a transaction in both is counted twice | network rule | Visa VAMP fact sheet · docs.stripe.com/disputes/monitoring-programs | eff. 2025-06-01 | 5/5 |
| **Visa VAMP — excessive** | **1.5%** (2.2% CEMEA), or a count of 1,500 | as above; measured against the same calendar month's payments | network rule | as above | 2026-04 cut in force | 5/5 |
| **Mastercard ECM** | 100–299 disputes/mo **and** 1.5–2.99% | both limbs required; fines $1,000 (mo 2–3) → $100,000 (mo 19+) | network rule | docs.stripe.com/disputes/monitoring-programs | 2026-08-12 | 5/5 |
| **Mastercard HECM** | 300+ disputes **and** 3%+ | fines escalate to $200,000; exit needs 3 consecutive clean months | network rule | as above | 2026-08-12 | 5/5 |
| Stripe's stated industry line | dispute activity above **0.75%** is excessive | a spike or steep trend can trigger placement earlier | — | docs.stripe.com/disputes/measuring | 2026-08-12 | 5/5 |
| Dispute fees | **$15 received + $15 countered** (USD) | countered fee added for disputes initiated after 2025-06-17; received fee never returns | processor schedule | support.stripe.com | 2025-06-17 | 5/5 |
| Dispute win rate by Radar band | **60% / 40% / 25% / 15% / 5%** | five dots to one; "very difficult to overturn" even at the top | processor data | docs.stripe.com/disputes/best-practices | 2026-08-12 | 5/5 |
| Early fraud warning → dispute | **80%** convert if unaddressed | absent liability shift | processor data | as above | 2026-08-12 | 4/5 |
| First-period refund rate, **AI apps** | **4.2%** median (upper end ~16%) | share of paid subs refunded in the first billing period. **Mobile IAP, not web** | 115,000+ apps | RevenueCat SOSA 2026 `[secondary ×2, email-gated]` | 2026 | 3/5 |
| First-period refund rate, non-AI apps | **3.5%** median | as above | as above | as above | 2026 | 3/5 |
| Refund rate by price tier | low **2.7%** · mid **3.9%** · high **4.5%** | as above; North America 3.4%, India & SE Asia 7.7% | as above | as above | 2026 | 3/5 |
| Steam unit refund rate | **median 9.5%**, mean 10.8% | self-reported by developers; frictionless 14-day / <2h policy inflates it. Poor analogue for SaaS | ~150 studios | GameDiscoverCo `[independent]` | 2025-02-04 | 3/5 |
| Observed dispute rate, SaaS / digital goods | **NO PUBLIC SOURCE** | — | — | — | — | **n/a — see folklore** |

**Why the last row is blank rather than filled.** No billing provider, processor, or SaaS-metrics vendor publishes an observed dispute rate for software or digital goods. Stripe publishes none. The widely-quoted vertical table ("digital goods 1.2–2.0%, SaaS 1.2%") is folklore whose citation chain dissolves on inspection — the two sources it names that could be obtained in full do not contain the data. The thresholds above are what actually bind, and they are knowable exactly.

**The structural point, which matters more than any rate here.** Refunds and disputes are substitutes rather than independent line items. A low refund rate bought with policy friction is not a saving — it is a transfer into a cost centre where each event carries up to $30 in non-refundable fees, a win rate capped at 60%, and a count that hits Visa's non-compliant threshold at **five**. See P-316.

---

## What this file does not contain

Named honestly, because an absent benchmark is a finding rather than a gap to fill with something plausible:

- **No genuine Stripe-web-checkout subscription funnel benchmarks anywhere in the research.** The entire large-N subscription corpus is store-rails.
- **No public web-native trial benchmark cut by trial length × card-required × price point, for consumer web — and this absence was verified provider by provider on 2026-08-12, not merely unfound.** Checked directly: **Stripe** publishes nothing (it computes a benchmark privately per merchant instead — see *The substitute for a public web benchmark* above); **Paddle / ProfitWell** publish no aggregate, only an unsourced blog range now in the folklore register; **Chargebee, Lemon Squeezy and FastSpring** surfaced nothing; **Baremetrics'** Open Benchmarks (600+ Stripe-connected SMBs) covers cohort revenue, ARPU, pricing models and failed payments but **carries no trial-conversion metric**; **ChartMogul's** report is the n=200 B2B survey already in this file, not a second source. **Recurly is the only true web-billing aggregate and it publishes one uncut number per year.** State the absence in a deliverable rather than substituting a figure that pretends to be it. What would close it: a billing provider publishing the three-way cut for B2C web — Recurly holds the data at 76 million subscribers and already segments by vertical, and simply does not publish it.
- **No conversion-by-trial-length cut for consumer web from any billing provider.** The only trial-length evidence that is not a mobile cross-section is the single randomised experiment recorded above, which is one company's data from 2015–16. **Nothing in this file supports a claim that a particular trial length is the web consumer benchmark**, and the widely repeated 7/14/30-day conversion ladders trace to a ring of SEO domains — see the folklore register.
- **No CAC or paid-acquisition efficiency data in the mobile reports**, so no LTV:CAC and no view of whether any of it is profitable. No organic-vs-paid split either, so every conversion rate blends wildly different traffic qualities.
- **No expansion-revenue data for small consumer products.** Expansion benchmarks are overwhelmingly B2B. `[unsourced — would need RevenueCat or Adapty to publish the share of subscription apps also selling consumables and the resulting revenue split, which neither does as of their 2026 reports.]`
- **No public dataset of SaaS ladder arithmetic.** Nobody has scraped a large sample of pricing pages and computed per-unit rates, overage multiples and assembly costs. That study would be straightforward and does not exist.
- **No benchmark distribution of overage multiples**, no measured evidence on tier naming, and no measured anchoring effect of an unpriced "contact us" rung. All three are `[unsourced]`.
- **No randomised experiment on tier count, price ending or anchoring conducted on a recurring-revenue web product with real revenue at stake.** The behavioural literature is chocolates, jams, catalogue clothing, restaurant checks, wine and event tickets. Every application of it to subscription software is an extrapolation across a category boundary.
- **Almost no true price-*level* tests in the public A/B record.** The evidence is overwhelmingly about presentation. **Treat any confident claim about optimal price points as unevidenced.**
- **No sample-size guidance for WTP research that traces to a real methodology source.** The "minimum 100 respondents, 100–150 per segment" guidance that appears in search results traces only to AI-generated sites. `[unsourced.]`
- **Refund and money-back-guarantee data is absent from the SaaS canon entirely**, and thin in the mobile data beyond a couple of category figures.
- **No relationship between guarantee *duration* and refund rate is established anywhere, in either direction.** The research lane assigned to settle it (L18, then L18b's section 2) did not run. Contradictory claims circulate with equally thin sourcing and both sit in the folklore register. **No deliverable may recommend a guarantee length on the basis of its refund effect** — only on the basis of what the seller is willing to honour. What would answer it: refund rates by month-since-purchase from the operator cohorts behind the 1-year-versus-90-day and lifetime-guarantee claims, or academic work on guarantee duration as distinct from presence.
- **No refund-rate benchmark for a low-priced consumer web subscription, no breakdown of refund reasons for software, and no data relating refund rate to guarantee wording or placement.** Named as an unknown on 2026-08-12; the sub-lanes commissioned to fill it did not run.
- **Several of the deepest cuts are `[gated]`**: RevenueCat's full report is a 330+ page PDF behind an email form; Adapty's full report is form-gated; Sensor Tower's is form-gated. Category-level Utilities benchmarks in particular should be treated as `[gated — requires report download]` because the public page re-serves all-category figures.

---

**Related**: `anti-patterns.md` (the claims this library refuses to cite) · `derivation-methods.md` · `experimentation.md`
