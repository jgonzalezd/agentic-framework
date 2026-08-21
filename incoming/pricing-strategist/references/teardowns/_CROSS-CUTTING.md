---
tags: [pricing, teardown]
---

# Cross-cutting findings across the teardown corpus

**This file is derived. It contains no observation of its own.** Every price, quotation and date below was read out of an individual teardown in this directory, and the individual teardowns remain the primary record. Where this file and a teardown disagree, the teardown wins. Where this file computes a number the teardown did not, the computation is shown so it can be checked.

## Scope, and what N means in each section

The corpus was 38 teardowns when this file was compiled. Two further teardowns, `runway.md` and `elevenlabs-reception-ai.md`, were written alongside it from lane research that had never been turned into files, and both are cited by name where they are used.

Sections 1 and 2 count over the **original 38**, because they classify marketing-page furniture that the two new files (a pricing page with no captured marketing copy, and a documentation page) largely do not have. Sections 4, 5 and 7 use **all 40**, because they run on arithmetic rather than on copy.

**Every teardown in the corpus carries the observation date 2026-08-12.** Secondary sources inside them carry their own dates and are marked as such. Every price in this file is a 2026-08-12 observation unless it is explicitly attributed to a dated secondary source.

---

## 1. The annual-push playbook

### 1a. The toggle default is almost entirely unrecorded, and that is the first finding

Of the 38 teardowns, **exactly one records the default state of a billing toggle.** `framer.md` reports a control "labelled 'Yearly billing', shown as the default state", and confirms that "no monthly-billed figure is displayed anywhere on the page".

The rest break down as follows.

| Toggle status | Count | Products |
|---|---|---|
| Toggle present, **default recorded** | **1** | Framer (yearly) |
| Toggle present, default **not captured** | 11 | Cursor, Descript, ElevenLabs, Fathom, Figma, Gamma, Notion, Oura, PhotoAI, Rosebud, TinyWow |
| **No toggle exists on the page** | 19 | 16Personalities, Abby, Bannerbear, Blinkist, ChatGPT, Claude, Headspace, Intro.co, journaling cohort, Linear, MentorCruise, Nomads.com, Noom, one-off report market, Perplexity, Raycast, Strava, Talkspace, Whoop |
| Page could not be observed at all | 7 | BetterHelp, Calm, Duolingo, JustAnswer, Midjourney, Superhuman, Vercel |

**So the honest answer to "does the corpus default the toggle to annual?" is that the corpus does not record it.** One observation is not a finding. Anyone using this library to argue for an annual default is arguing from a single page.

What the corpus does record is the **verbatim toggle label**, in seven cases, and six of the seven put monthly first:

- Cursor: **"Monthly Yearly"**
- Figma: **"MonthlyAnnual"**
- Gamma: **"Pay monthly Pay annually"**
- Notion: **"Pay monthly" / "Pay yearly"**
- Raycast, using section headers rather than a control: **"Monthly Subscription"** and **"Annual Subscription -20%"**
- ElevenLabs: **"Monthly billing"** — a single named state
- Framer: **"Yearly billing"** — the one that leads with annual, and the one recorded as defaulting to it

**The far more common move than defaulting a toggle is deleting the monthly option.** Nineteen of 38 pages have no toggle because they have nothing to toggle between, and in **five** of those nineteen the reason is that annual is the only price shown: Blinkist, Linear, Perplexity, Strava and Whoop. Two further pages display annual prices only while still carrying a toggle somewhere on the page, so they belong beside those five rather than inside them — Framer, whose toggle defaults to yearly, and Figma, whose toggle exists on Professional alone. All seven are set out below.

The evidence column distinguishes two things that are easy to conflate. Where a row quotes page copy, the string was captured from the live page. Where it quotes a teardown's own field annotation — Blinkist, Linear and Whoop — the words are the teardown author's record of an absence, not something printed on the page.

| Product | Evidence, as the teardown records it |
|---|---|
| Blinkist | **"none — there is no monthly option to toggle to"**; both SKUs are named "PRO - 12 Months" and "PREMIUM - 12 Months" |
| Framer | Yearly-billing prices are the only prices displayed |
| Linear | **"none present. Yearly is presented as the only price."** |
| Perplexity | **"$17/month when billed annually"** is the only price on the page |
| Strava | **"Annual only."** printed on three of four plans; the Individual monthly price is offered but **not displayed on the page** |
| Whoop | **"prices are shown only in `/yr`"** — $199, $239, $359, with no monthly figure in either fetch |
| Figma | The toggle exists on Professional only; Organization and Enterprise show **"Billed annually"** with no toggle |

### 1b. Discount depth, computed from the two prices rather than from the claim

Fifteen products publish, or can be resolved to, both a monthly and an annual price. Every percentage below is computed as `1 − (annual ÷ (monthly × 12))`.

| Product | Category | Monthly | Annual, as monthly | **Computed** | Claim on the page |
|---|---|---|---|---|---|
| Oura | consumer sub | $5.99 | $69.99 → $5.83 | **2.63%** | none |
| Claude Pro | AI tool | $20 | $200/yr → $16.67 | **16.67%** | "$17" inside the price string |
| ElevenLabs (all 5 rungs) | AI tool | $6 · $22 · $99 · $299 · $990 | $5 · $18.33 · $82.50 · $249.17 · $825 | **16.67% at every rung** | "two months free — you pay for 10 months" |
| Fathom | credit/indie | $45 | not shown | **16.67%** (definitional) | "Pay yearly instead (2 months free)" |
| Superhuman Business | prosumer SaaS | $40 | $33 | **17.50%** | none |
| Superhuman Pro | prosumer SaaS | $15 | $12 | **20.00%** | none |
| Midjourney (all 4 rungs) `[secondary]` | AI tool | $10 · $30 · $60 · $120 | $8 · $24 · $48 · $96 | **20.00% at every rung** | "20% discount ... by committing to an annual plan" |
| Raycast Pro and Teams Pro | prosumer SaaS | $10 · $15 | $8 · $12 | **20.00% at both rungs** | "Annual Subscription -20%" |
| Runway (all 3 rungs) | AI tool | $15 · $35 · $95 | $12 · $28 · $76 | **20.00% at every rung** | none captured |
| Descript Business | credit/indie | $65 | $50 | **23.08%** | "Save up to 35% with annual billing" |
| TinyWow | credit/indie | $20 | $15 | **25.00%** | none stated as a percentage |
| Duolingo, cheap arm | consumer sub | $9.99 | $83.99 → $7.00 | **29.94%** | none on the web page |
| Rosebud | decision/wellbeing | $12.99 | $107.99 → $8.99 | **30.72%** | "SAVE 30%" |
| Descript Creator (badged) | credit/indie | $35 | $24 | **31.43%** | "Save up to 35%" |
| Descript Hobbyist | credit/indie | $24 | $16 | **33.33%** | "Save up to 35%" |
| Duolingo, expensive arm | consumer sub | $12.99 | $95.99 → $8.00 | **38.42%** | none |
| Headspace | consumer sub | $12.99 | $69.99 → $5.83 | **55.10%** | none as a percentage |
| PhotoAI Starter | credit/indie | $19 | $99 → $8.25 | **56.58%** | "6+ months free" |
| Calm, $16.99 / $79.99 arm | consumer sub | $16.99 | $6.67 | **60.77%** | not obtained |
| Calm, $14.99 / $69.99 arm | consumer sub | $14.99 | $5.83 | **61.09%** | not obtained |

Taking one headline figure per product, the **median annual discount in this corpus is 20.00%**, and **8 of the 15 products land in a 16.67%–25.00% band**. One sits below it (Oura at 2.63%) and six sit above it (Duolingo, Rosebud, Descript, Headspace, PhotoAI, Calm).

**Category predicts depth, with one clean edge.** The three deepest discounts in the corpus are Headspace at 55.10%, PhotoAI at 56.58% and Calm at 61.09%, and two of those three are consumer wellness subscriptions. Meanwhile Claude, ElevenLabs, Fathom, Superhuman, Midjourney, Raycast and Runway — every one of them a prosumer, AI-tool or developer-facing product — land between **16.67% and 20.00% without exception**. A B2B buyer is being offered two months; a consumer is being offered half.

**16.67% is not a coincidence and it is not really a percentage.** It is 10/12. Two independent products state it as a duration and never as a number: ElevenLabs writes **"Annual billing works out to two months free — you pay for 10 months"**, and Fathom writes **"Pay yearly instead (2 months free)"**. The buyer verifies 2/12 without arithmetic and without trusting a base.

### 1c. Does the claim survive the arithmetic?

Eight savings claims can be checked against two observed prices. **Seven reconcile exactly. One does not.**

| Claim | Product | Verdict |
|---|---|---|
| "two months free — you pay for 10 months" | ElevenLabs | 16.67% at all five rungs. **Exact.** |
| "2 months free" | Fathom | 16.67%. **Exact by construction.** |
| "Annual Subscription -20%" | Raycast | 20.00% at both rungs. **Exact.** |
| "20% discount" `[secondary]` | Midjourney | 20.00% at all four rungs. **Exact.** |
| "SAVE 30%" against a struck "regularly $155.99/yr" | Rosebud | 30.72% against $12.99 × 12 = $155.88. **Exact, and the anchor is the buyer's own monthly price annualised rather than an invented list price.** |
| "6+ months free" | PhotoAI | 56.58% is 6.79 months free. **Honest and conservative** — though the page's "$9/month equivalent" overstates the true $8.25 by $0.75. |
| "Save $35.00" / "Save $20.00" | Blinkist | $35.00 ÷ $174.99 = 20.00%; $20.00 ÷ $99.99 = 20.00%. **Exact against the stated list prices.** |
| "Save up to 35% with annual billing" | Descript | Best observed rung is **33.33%**. **No captured tier reaches 35%.** The badged tier gets 31.43% and the most expensive tier gets the smallest discount of the three, 23.08%. |

**Four claims in the corpus carry the "up to" hedge, and not one of them is verifiable from its own page.** Descript's "Save up to 35%" is the only one where the check can be run, and it is the one that fails. Gamma's **"Save up to 28% with annual billing"** cannot be checked because the monthly prices did not render. Notion's **"Save up to 20% with yearly"** cannot be checked because the annual prices did not render. Strava's **"Up to 60% Off"** on the Runna bundle cannot be checked because Runna's standalone price was never recorded.

Strava's headline **"Save 44%"** deserves its own line. The page does not print the Individual monthly price at all, so the only route to it is through the claim itself ($6.67 ÷ 0.56 = $11.91). **The claim is the sole evidence for the number it is a claim about.** By contrast Strava's **"50% Off (Verified Students)"** checks exactly: $39.99 ÷ $79.99 = 50.00%.

The corpus's most unverifiable saving is 16Personalities' **"Save 70% vs. buying individual types"**, which implies an à-la-carte total of about $96.67 against a $29 suite. The individual-type prices are not published anywhere, so the anchor is constructed and uncheckable by design.

### 1d. How the saving is displayed, and where

Sixteen of 38 pages carry any savings expression at all. **Eighteen explicitly carry none. Four could not be observed.**

| Form | Count | Products and verbatim |
|---|---|---|
| **Percentage** | 8 | Descript "Save up to 35% with annual billing" · Gamma "Save up to 28% with annual billing" · Notion "Save up to 20% with yearly" · Raycast "Annual Subscription -20%" · Rosebud "SAVE 30%" · Strava "Save 44%" · Midjourney "20% discount" `[secondary]` · 16Personalities "Save 70% vs. buying individual types" |
| **Duration** | 3 | ElevenLabs "two months free — you pay for 10 months" · Fathom "Pay yearly instead (2 months free)" · PhotoAI "6+ months free" |
| **Dollar amount, against a strikethrough** | 1 | Blinkist "Save $35.00" and "Save $20.00", struck from $174.99 and $99.99 |
| **A monthly-equivalent figure with no claim attached** | 4 | Claude "$17" · Headspace "$5.83 USD/month" · Noom "average monthly cost $17.42" · TinyWow "$15.00 per month" beside "$20 per month" |
| **Nothing** | 18 | Abby, Bannerbear, ChatGPT, Cursor, Duolingo, Figma, Framer, Intro.co, journaling cohort, Linear, MentorCruise, Nomads.com, Oura, Perplexity, Superhuman, Talkspace, Whoop, one-off report market |
| **Unobtainable** | 4 | BetterHelp, Calm, JustAnswer, Vercel |

Placement follows form. Percentages sit **on or beside the billing control** (Descript, Gamma, Notion, Raycast) or **as a badge on a card** (Strava's "Save 44%"). Durations sit **in body copy next to the toggle**. Monthly-equivalent figures sit **inside the price string itself**, which is why they need no claim: Claude prints **"$17"** and explains it in a footnote reading **"Per month with annual subscription discount ($200 billed up front). $20 if billed monthly."**

**The direction is invariant across the whole corpus. The big number is divided down; the small number is never multiplied up.** Headspace shows $69.99 as **"$5.83 USD/month"**. Strava shows $79.99 as **"$6.67/month"** and $139.99 for four people as **"$2.92/mo. per person"**, a double reduction. Noom shows $209 as **"average monthly cost $17.42"**. Talkspace shows a therapy plan as **"$69/week"** rather than the $3,588 a year it comes to. BetterHelp `[secondary]` shows **"$65 to $100 per week"** billed every four weeks. **Not one page in 40 displays "monthly = $155.88/year."**

Two accompanying facts make the badge placement legible. Where an annual card carries a badge, the badge is a **value** claim: Headspace **"Best value"** on Annual, TinyWow **"Best Value"** on Yearly. Where a percentage is on a badge instead, it is Strava, whose teardown notes the choice is arithmetic — 44 reads larger than the roughly $63 it represents, while Blinkist makes the opposite choice at a price point where $35.00 reads larger than 20%.

### 1e. The outliers, and what they do instead

**Oura does not push annual at all.** $5.99 × 12 = $71.88 against a $69.99 annual price is a **2.63% saving**, there is no badge, no strikethrough and no percentage, and the hero CTA quotes the monthly figure: **"Take control of your health for just $5.99/month"**. The reason is structural. The large commitment was already extracted at the ring purchase, and the membership's job is to be small enough to be ignored. **Push annual only when the subscription is the primary purchase decision.**

**Whoop removes the comparison rather than winning it.** No monthly price appears anywhere in either fetch; the prices are $199, $239 and $359 per year, and each includes a physical device. A buyer cannot divide by twelve and compare against a rival, because the number is not a subscription price.

**Blinkist replaces the annual argument with an intro-offer argument.** There is no monthly plan on the page to discount against, so the only saving shown is a 20% intro discount on Blinkist's own list annual price, presented with a live countdown reading **"20% discount reserved for🔥 10:00"** and a disclosed renewal: **"By proceeding you accept that $139.99 is processed as an intro offer, then $174.99 will be billed every 12 months automatically."**

**Headspace and Notion vary the risk instead of the price.** Headspace runs **"Annual - 14 days free"** against **"Monthly - 7 days free"**, a 2× asymmetry placed on the plan carrying twelve months of lock-in. Notion runs a refund window of **"within three days of signing up for monthly billing, or within 30 days of signing up for annual billing"**, a 10× asymmetry pointing the same way. Two different categories, the same principle: de-risk the plan you want rather than discounting it harder.

**Fathom refuses the question.** On discounts: **"Never. Not even for Black Friday"**. On a free tier: **"Nope, and here's why: we've heavily invested in enterprise-level infrastructure"**.

**Noom has no annual axis at all.** It sells 4-, 6- and 12-month terms at $169, $179 and $209, and the marginal month costs exactly **$5.00 at both steps**. Read that way Noom is a $169 entry fee plus $5 per month, and the entry fee is **81% of the twelve-month price**.

**BetterHelp runs the arithmetic in the opposite direction.** `[secondary]` sources give **"$65 to $100 per week"** billed **"every four weeks"**. A four-week cycle produces **13 billing periods a year, not 12**, so a reader who mentally converts "$260–$400 a month" to a year understates the true $3,380–$5,200 by **8.3%** using their own arithmetic.

---

## 2. Emotional versus mechanical framing

Each of the 38 pricing-page headlines is classified below as **outcome-framed** (it names a changed state of the buyer, or what they will be able to do or feel), **mechanic-framed** (it names the pricing structure, the plan-selection act, the product category or the brand), or **absent** (no headline was captured, whether because the page carried none or because it could not be fetched).

### Outcome-framed — 13 of 38

| Product | Verbatim headline |
|---|---|
| 16Personalities | **"It's so incredible to finally be understood."** |
| Abby | **"Someone To Talk To, Anytime"** |
| Bannerbear | **"Start Automating Today"** |
| Calm | **"Calm is the #1 mental health app designed to help you manage stress, sleep better, and live a happier, healthier life"** *(homepage; the pricing page was never obtained)* |
| Duolingo | **"learn a new language the fun way"** |
| Headspace | **"Be kind to your mind"** |
| journaling cohort | Day One **"Your journal for life"** · Stoic **"Beat Stress in 120 Seconds — AI-Powered Journal"** · Finch **"Daily self-care is finally fun — take care of your pet by taking care of yourself!"** · Reflectly **"The World's First Intelligent Journal"** |
| MentorCruise | **"Get a clear roadmap to your goal"** |
| Noom | **"Meds to lose the weight. Noom to keep it off."** |
| Notion | **"One tool to run your company."** |
| Perplexity | **"The most accurate answers from all the top AI models"** |
| Rosebud | **"Accelerate your personal growth with the world's best AI journal"** |
| Strava | **"The best of Strava. Built for your goals."** |

### Mechanic-framed — 17 of 38

| Product | Verbatim headline |
|---|---|
| ChatGPT | **"Pricing"** |
| Cursor | **"Pricing"** |
| Descript | **"A plan for whatever you create"** |
| ElevenLabs | **"Flexible pricing for your needs"** |
| Fathom | **"Simple and sustainable pricing"** |
| Figma | **"Pick your plan, choose your seats"** |
| Framer | **"Start free, then scale your site"** |
| Gamma | **"Choose the plan that's right for you"** |
| Intro.co | **"Book the world's most in-demand experts & get advice over a video call"** |
| Linear | **"Pricing"** *(the teardown notes this is the entire H1 — no marketing headline)* |
| Oura | **"Oura Membership"** |
| PhotoAI | **"Photo AI Pricing — Plans Starting at $19/month"** |
| Raycast | **"Raycast Pricing: Free Forever or Pro with AI for $8/month"** |
| Superhuman | **"Your Superhuman suite"** |
| Talkspace | **"Research-backed therapy, covered by insurance"** |
| Vercel | **"Vercel Pricing"** *(flagged in the teardown as the structured-representation title, not confirmed as the visual H1)* |
| Whoop | **"Memberships built around you"** |

Three of these seventeen are the bare word **"Pricing"** with nothing else: ChatGPT, Cursor and Linear.

### Absent — 8 of 38

| Product | Why |
|---|---|
| BetterHelp | Every path returned 403 or an empty JS body. Headline **"unobtainable"**. |
| Blinkist | Only the page title was captured; no pricing headline. |
| Claude | **`N/A — not captured in research`** |
| JustAnswer | Every path returned 403. Headline **"not obtainable"**. |
| Midjourney | No fetch path rendered the page. |
| Nomads.com | **`N/A — not captured in research`** |
| one-off report market | No headline field captured for any of the three products. |
| TinyWow | **`N/A — not captured in research`** |

### The split, cut by category

| Category | N | Outcome | Mechanic | Absent | **Outcome share of captured headlines** |
|---|---|---|---|---|---|
| Prosumer SaaS | 7 | 1 | 6 | 0 | **14%** (1 of 7) |
| AI tool | 7 | 1 | 4 | 2 | **20%** (1 of 5) |
| Consumer subscription | 7 | 4 | 2 | 1 | **67%** (4 of 6) |
| Decision and wellbeing | 11 | 6 | 2 | 3 | **75%** (6 of 8) |
| Credit and indie | 6 | 1 | 3 | 2 | **25%** (1 of 4) |
| **Total** | **38** | **13** | **17** | **8** | **43%** (13 of 30) |

**Category predicts framing, and the split is not subtle.** Among the 30 captured headlines, consumer subscriptions and decision-and-wellbeing products are outcome-framed **10 times out of 14**. Prosumer SaaS, AI tools and credit products are outcome-framed **3 times out of 16**. **Ten of the corpus's 13 outcome-framed headlines belong to the two consumer-facing categories.**

The two exceptions are worth naming because they are the pages a B2B product should study. **Notion** heads a per-seat SaaS pricing page with **"One tool to run your company."** — an outcome, not a plan-selection instruction. **Perplexity** heads its Pro page with **"The most accurate answers from all the top AI models"**, which performs a competitive comparison the page never states in numbers. Everyone else in those categories writes some version of "choose your plan".

**The reverse exception is Talkspace**, the only wellness product in the corpus with a mechanic-framed headline: **"Research-backed therapy, covered by insurance"** leads with proof and a payment mechanism rather than with a changed state, and the page's whole conversion path runs through **"Check eligibility"** rather than through aspiration.

---

## 3. Unit naming

### The corpus's vocabulary for the metered unit

| Name | Products |
|---|---|
| **credits** | ElevenLabs, ElevenLabs Reception AI (overage only), Gamma, PhotoAI, Bannerbear ("API credits"), Descript ("AI credits"), Figma ("AI credits"), Notion ("Notion credits"), Framer, Perplexity ("bonus credits"), Runway, Vercel ("usage credit", dollar-denominated) |
| **minutes / hours of media** | Descript ("media minutes", "media hours"), ElevenLabs Reception AI ("phone minutes", "web chat minutes") |
| **hours of compute** | Midjourney ("Fast GPU Time", hr/mo) |
| **pageviews** | Fathom |
| **seats, members, users, editors** | Linear ("per user/month"), Notion ("per member / month"), Figma ("Full seat", "Dev seat", "Collab seat"), Vercel ("$20/user/month"), Superhuman, Raycast, Framer ("editors"), Cursor Teams |
| **artefacts** | Linear ("250 issues"), Framer (the site), Gamma ("slides per prompt"), PhotoAI ("free photos") |
| **infrastructure primitives** | Vercel ("Edge Requests", "Fast Data Transfer" in GB, "Active CPU" in hours) |
| **tokens, as context only** | ChatGPT ("27K", "54K", "128K") |
| **a session multiple** | Claude ("usage per 5-hour session", "5x or 20x more usage than Pro") |
| **a limit multiplier** | Cursor ("3x Pro limits on Agent", "20x Pro limits on Agent", "5x Standard limits on Agent") |
| **comparative adverbs** | ChatGPT ("Limited", "More", "Expanded", "Maximum") |
| **a week of human access** | Talkspace, BetterHelp |
| **a session or call** | MentorCruise ("$39/call"), Intro.co ("$450 • Session"), Talkspace ("Extra live session") |
| **a programme term** | Noom ("12 months $209") |
| **a report or a single-use code** | Enneagram Institute ("one, single-use test code"), UnderstandMyself, 16Personalities |
| **nothing at all** | Blinkist, Calm, Duolingo, Headspace, Strava, Oura, Whoop, journaling cohort, Abby, Rosebud, TinyWow — all of which price "the account" |

### Neutral names

A neutral unit is one the buyer can count in their own world before they buy. The corpus has fewer of these than it has credit systems.

- **Fathom's "pageviews"** is the buyer's own analytics number.
- **Descript's "media minutes"** is the length of footage already sitting on the buyer's disk.
- **Midjourney's "Fast GPU Time"**, priced in hours, is rented duration, and the top-up is quoted in the same unit at **"$4/hr"**.
- **Vercel** publishes raw primitives with rates attached: **"10M per month included; then starting at $2 per 1M"**, **"1TB / month included; then starting at $0.15 per GB"**, **"Starting at $0.128 per hour"**.
- **Linear's "250 issues"** counts the artefact the buyer creates.
- **Talkspace's "Up to four 30 minute video sessions per month"** is a countable human unit, and it is why Talkspace is one of only three pages in the corpus where an add-on premium can be computed.
- **Runway** is the only credit seller that publishes a conversion for each output type: **"Gen-4.5 video: 60 credits/5s"**, **"Gen-4 Image (1080p): 8 credits/image"**, **"Text to Speech: 1 credit/50 chars"**.

Two products place a concrete unit *beside* an abstract one, which is the cheapest available fix for an illegible meter. **Gamma** sells credits but fences the free tier on **"Up to 10 slides per prompt"** against **"Up to 100 slides per prompt"**, a 10× step the buyer understands instantly against a 2.5× credit step they do not. **PhotoAI** sells credits but prints **"48 free photos"**, **"144 free photos"**, **"480 free photos"** and **"2,400 free photos"** alongside them.

### Flattering names

- **Claude** sells **"Choose 5x or 20x more usage than Pro"** on a tier called **Max**. The multiplier flatters by inviting the buyer to identify as a 20× person.
- **Cursor** does the same with **"3x Pro limits on Agent"** and **"20x Pro limits on Agent"**, and then completes the move in its FAQ: **"We recommend Pro+ for daily agent users, and Ultra for agent power users."** When the unit cannot sort buyers, a sentence naming two kinds of person can.
- **ChatGPT** turns adverbs into a status ladder: **"Maximum Codex tasks"**, **"Maximum deep research"**, **"Maximum memory and context"**.
- **PhotoAI** names quality rather than quantity: **"Ultra quality photos"**, **"Ultra-high likeness"**.
- **Blinkist** flatters upward and disparages downward, labelling the expensive tier **"Reach your goals faster"** and the cheap one **"For casual learners"**.

### Obscuring names

- **ChatGPT's ladder of adverbs** — "Limited" → "More" → "Expanded" → "Maximum" — is a chain in which each term is defined by reference to the one below, terminating in an unquantified base. Nothing resolves.
- **Claude's Pro allowance bullet, in full, is "More usage."** The only anchoring appears in the FAQ, as a ratio to another unquantified thing: **"Pro gives you at least 5x more usage per 5-hour session than Free."**
- **Cursor** publishes **"Extended limits on Agent"**, **"Generous limits for Grok"** and **"Limited Agent requests"** as its allowance language.
- **Gamma** discloses that its unit does not have a fixed value: **"The number of credits an action uses can vary based on what you're doing, which AI model is used, and the length or complexity of the generation."**
- **Perplexity's "4,000 bonus credits"** is the corpus's clearest failure of unit communication. "Bonus" implies a baseline that is never named, quantified or mentioned, and the same bullet list contains **"More usage limits and memory"** with no referent. A precise number attached to an undisclosed base is worse than honest vagueness, because it invites an estimate the buyer cannot make.
- **Duolingo's Gems** are sold in four consumable SKUs at $0.99, $4.99, $9.99 and $19.99 with **no published exchange rate to anything**, so no per-unit arithmetic and no inversion check is possible.
- **Notion** publishes exactly one per-unit price on its whole page — **"$10 per 1,000 monthly Notion credits"**, or $0.01 per credit — and publishes no credit allowance for any seat tier, so the number has nothing to be compared against.

### Who exposes a raw provider unit, and who wraps it

**Cursor is the corpus's one controlled experiment, and it ran in public.** In June 2025 it moved Pro from a request count to the provider's own meter: **"all users will get at least $20 of model inference at API prices per month"**, with the stated reason that **"the hardest requests cost an order of magnitude more than simple ones"** and **"API-based pricing is the best way to reflect that"**. Within weeks it published **"We recognize that we didn't handle this pricing rollout well, and we're sorry"** and refunded **"any unexpected charges you may have incurred for usage over the past 3 weeks"** in a dated window, **"between June 16 and July 4"**. Today the public unit is multipliers and the dollar meter survives only as the unpriced overage. **The most economically honest unit anyone in this corpus has shipped is the one that had to be withdrawn.**

The lesson the episode actually teaches is narrower than "don't expose provider units". "$20 of inference" is perfectly legible as a *quantity* and completely illegible as a *duration*. A monthly subscription implicitly promises a duration, and a dollar meter cannot deliver one.

**Who else exposes it.** **Claude** exposes API rates only at the top of the ladder — **"Seat price + usage at API rates"**, **"$20/seat. Usage cost scales with model and task."** — and lets buyers self-select between a predictability product and a pass-through product. **Vercel** publishes marginal infrastructure rates on the pricing page itself and pairs them with a ceiling: **"All new teams have a default on-demand usage budget of $200 (which can be customized)."** At 10× the $20 seat price, the ceiling tells the buyer their worst plausible month before it tells them the rates. **ChatGPT** exposes tokens only as a context window and immediately translates them — "27K" is annotated **"~12 pages of text"** and "128K" is **"~250 pages of text"** — but never meters on them.

**Who wraps, and what wrapping buys.** ElevenLabs wraps characters as credits but publishes the peg: **"1 text character equals 1 credit"**, extended across products at **"Speech to Text 330 credits per minute; Eleven Music 900 credits per minute; Sound Effects 200 credits per generation"**. Runway wraps compute and publishes three conversions. Midjourney wraps compute as "Fast GPU Time" and leaves the conversion to third parties, one of which supplies **"A single still image uses roughly one GPU minute, while an HD video batch uses about 26"** — the teardown's own comment is that third parties performing this conversion is evidence the page does not.

**What the wrapper buys is repricing freedom.** An abstract credit decouples the page from the provider's price list, so an input cost can move without the pricing page moving, and a single currency can span products whose true costs differ by an order of magnitude. What it costs is evaluability: a wrapper with no published exchange rate cannot be sized before purchase. **The corpus contains exactly one wrapper with a published 1:1 peg, and ElevenLabs' is the only unit in the AI-tool cohort a buyer can evaluate using a document they already have on their desk.**

---

## 4. The volume-discount curve

Every product below has two or more paid rungs and publishes enough to compute a price per unit at each. Products whose rungs differ only in features, occupancy or billing period, and products whose allowances were not captured, are excluded and listed at the end.

| Product | Unit | Rung 1 | Rung 2 | Rung 3 | Rung 4 | **Rung 1 → 2** | **Entry → top** | Volume range |
|---|---|---|---|---|---|---|---|---|
| PhotoAI | AI credit | $0.3800 | $0.0490 | $0.0330 | $0.0199 | **87.1%** | **94.8%** | 200× |
| Bannerbear | API credit | $0.0490 | $0.0149 | $0.01495 | — | **69.6%** | **69.5%** | 20× |
| Runway | credit | $0.02400 | $0.01556 | $0.01000 | — | **35.2%** | **58.3%** | 15.2× |
| Descript | media hour | $2.400 | $1.167 | $1.625 | — | **51.4%** | **32.3%** | 4× |
| ElevenLabs Reception AI | phone minute¹ | $0.36667 | $0.27500 | $0.19800 | — | **25.0%** | **46.0%** | 8.3× |
| Gamma | credit² | $0.0090 | $0.0045 | $0.0045 | — | **50.0%** | **50.0%** | 20× |
| Midjourney `[sec]` | Fast GPU hour | $3.03 | $2.00 | $2.00 | $2.00 | **34.0%** | **34.0%** | 18× |
| Noom | month of programme | $42.25 | $29.83 | $17.42 | — | **29.4%** | **58.8%** | 3× |
| Descript | AI credit | $0.0600 | $0.0438 | $0.0433 | — | **27.0%** | **27.8%** | 3.75× |
| ElevenLabs core | credit | $0.000200 | $0.000182 | $0.000165 | $0.0001661 / $0.000165 | **9.1%** | **17.5%** | 200× |
| Enneagram Institute | test | $20.00 | $18.00 | — | — | **10.0%** | **10.0%** | 2× |
| Claude | Pro-unit of session usage | $20.00 | $20.00 | $10.00 | — | **0.0%** | **50.0%** | 20× |
| Cursor³ | Pro-unit of Agent limit | $20.00 | $10.00 | — | — | **50.0%** | **50.0%** | 20× |
| Figma, Collab seat | AI credit | $0.006 | $0.010 | $0.010 | — | **−66.7%** | **−66.7%** | 1× |
| Figma, Dev seat | AI credit | $0.024 | $0.050 | $0.070 | — | **−108.3%** | **−191.7%** | 1× |
| Figma, Full seat | AI credit | $0.00533 | $0.01571 | $0.02118 | — | **−194.7%** | **−297.4%** | 1.42× |
| ChatGPT `[sec] prices` | 1,000 tokens of context | $0.148 | $0.370 | $0.781 | — | **−150.0%** | **−427.3%** | 2.37× |
| Talkspace psychiatry | follow-up appointment | $175.00 standalone | $136.00 in the 2-item bundle | $158.33 in the 3-pack | — | **22.3%** | **9.5%** | 3× |

¹ Rests on the stated assumption that 1 credit = 1 phone minute; the page does not publish the mapping. See `elevenlabs-reception-ai.md`.
² Computed from the annual-equivalent rates, the only ones captured. Gamma's monthly-billing prices did not render.
³ `cursor.md` previously described Pro→Ultra as "exactly flat per unit", which does not follow from the two prices it publishes: $200 is 10× $20 and it buys "20x Pro limits on Agent", so the per-unit price halves. **That prose has since been corrected in `cursor.md` itself**, and the 50.0% above is the arithmetic both files now carry.

### The corpus's normal shape

Restricting to the eight products selling a genuinely metered unit — PhotoAI, Bannerbear, Runway, Descript, Reception AI, Gamma, Midjourney and ElevenLabs core — **the rung 1 → rung 2 discount runs from 9.1% to 87.1%, with a median of 42.6%.** That is a very wide band for a single statistic, and the width itself is the finding.

**The median is sensitive to how Descript is counted, so the counting rule is stated rather than left implicit.** The 42.6% figure treats each product as one observation and uses Descript's media-hour meter, giving eight values (87.1 · 69.6 · 51.4 · 50.0 · 35.2 · 34.0 · 25.0 · 9.1) whose middle pair, 50.0% and 35.2%, averages to 42.6%. Counting Descript's AI-credit meter as a ninth series adds 27.0% and moves the median to **35.2%**. Both are defensible and neither is a norm: with eight observations spread across a 78-point range, the median is a description of this corpus and not a benchmark anyone should price against.

**What sets the steepness is not ambition. It is whether the unit is identical at every rung.** ElevenLabs core runs **17.5% across a 200× volume range** because a character is a character everywhere, and a steeper curve would invite a Business customer to buy 33 Starter accounts. PhotoAI runs **94.8% across the same 200× range** because each rung also changes output quality and likeness — **"Medium quality photos"**, **"High likeness"**, **"Ultra-high likeness"** — so a Starter credit and an Ultra credit do not buy the same thing. Bannerbear's 69.5% is fenced by bandwidth (10 → 50 → 100 GB) and Runway's 58.3% is fenced by rollover being a Max-only privilege.

**Runway is the corpus's only near-linear ladder.** Standard → Pro is 35.2% and Pro → Max is 35.7%. Every other ladder front-loads its discount into the first step and then stops.

### Every flat or inverted curve in the corpus

There are ten. **The top rung is almost never sold on unit price.**

| Product | Where | The numbers |
|---|---|---|
| **ElevenLabs core** | Scale is worse than Pro | $0.1661 vs $0.1650 per 1,000 credits — **0.67% worse**; Business returns to exactly $0.1650, so the curve is flat from Pro onward across a 10× range |
| **Bannerbear** | Enterprise is worse than Scale | $0.01495 vs $0.0149 — **0.34% worse**. Enterprise sells bandwidth (100 GB vs 50 GB), not credits |
| **Descript, media hours** | Business is worse than Creator | $1.625 vs $1.167 — **39.2% worse**. A team of three on Business pays 86% more for 33% more hours |
| **Gamma** | Ultra equals Pro | $0.0045 at both — **exactly flat** across a 5× step. Ultra sells model quality, 100 custom domains and early access |
| **Midjourney** | Standard, Pro and Mega are identical | **$2.00/hr at all three**, flat across a 4× volume range. Basic at $3.03 is 51.5% worse than everything above it |
| **Claude** | Pro to Max 5x | $20.00 per Pro-unit at both — **exactly flat**. The discount arrives only at Max 20x, where usage quadruples and price doubles |
| **Figma, all three seat types** | Throughout | Full-seat credits **rise 3.97×** from Professional to Enterprise. At Enterprise a Collab seat buys credits at $0.010 while a Full seat buys them at $0.02118, a **2.1× inversion between seat types** |
| **ChatGPT** | Throughout | Context per 1,000 tokens rises **5.3×** from Go to Pro. Go and Plus have **identical 54K context at 2.5× the price** |
| **Talkspace psychiatry** | The largest pack is not the best deal | The 2-item bundle prices a follow-up at $136; the 3-pack prices it at **$158.33, 16.4% worse** |
| **Vercel** | Overage equals the in-plan rate | 10M edge requests × $2 per 1M = **$20.00**, exactly the "$20 of included usage credit". The marginal rate inside and outside the plan is the same number |

Two of these ten are defensible in a way the others are not. **Figma's inversion and ChatGPT's inversion both occur on a meter the buyer is not actually buying** — governance and reasoning capability are what the tier price is for, and the credits or context ride along. **Figma's teardown records the correct caveat**: whether AI credits pool across seats in a workspace was not captured, so whether the seat-type inversion is exploitable is unknown.

Two further shapes recur often enough to name. **The entry rung is routinely priced badly on purpose**: PhotoAI's Starter is **7.8× the per-credit price of the next rung**, Midjourney's Basic is **51.5% worse than every tier above it**, and Reception AI's Basic is **33% worse per minute than Plus**. In each case the bottom rung's job is to make rung 2 read as the first serious option. And **the badge sits where the discount stops**: Gamma badges "Most popular" on Pro, the rung where the per-credit rate stops improving; PhotoAI badges "Most Popular" on Max, one rung above the sharp improvement; Talkspace badges "Most Popular" on the $99/week tier, which is where the video sessions arrive and where the best computable value sits.

### Excluded, and why

Fathom (only one pageview band was captured, at $45 for 500,000 pageviews, so there is no curve); Framer, Notion, Linear, Superhuman, Raycast and Vercel (per-seat ladders with no published allowance to divide, so the rung ratio *is* the price); every consumer subscription and the journaling cohort (nothing is metered anywhere); Nomads.com, Intro.co, MentorCruise and the one-off report market (one-off products whose rungs are different deliverables rather than different volumes); Blinkist, Whoop and Noom's GLP-1 line (tiers differ by capability, hardware or product); Duolingo's Gems (no exchange rate to anything); Perplexity (one tier on the captured page).

---

## 5. Top-up versus plan premium arithmetic

**This section carries the Phase 4.5 gate, so its first finding is a negative one.**

Thirteen products in the corpus sell both a recurring plan and something purchasable on top of it: Cursor, Descript, ElevenLabs Reception AI, Figma, Fathom, Framer, Gamma, Midjourney, Notion, Raycast, Runway and Vercel, plus Talkspace, which sells a per-session add-on inside a weekly subscription. **Only four publish enough, in a common unit, for the premium to be computed.** Seven of the remaining nine withhold the rate, and two price the add-on in a unit the plan is not denominated in.

Three of those four cases are add-ons in the ordinary sense — a discrete thing bought on top of a plan, priced in the same unit the plan meters. Vercel is a fourth case of a different kind: nothing discrete is purchased, and the comparison is between the marginal rate inside the plan and the marginal rate outside it on the same meter. `elevenlabs-reception-ai.md` and `talkspace.md` each describe themselves as one of **three** pages where an add-on premium can be computed, and they are right on that narrower reading. The count of four below includes Vercel because its arithmetic bears on the same question.

### The four computable cases

| Product | Unit | Plan $/unit, by rung | Top-up $/unit | **Top-up as a multiple of the plan** |
|---|---|---|---|---|
| **ElevenLabs Reception AI**¹ | phone minute | Basic $0.36667 · Plus $0.27500 · Premium $0.19800 | **"$0.40 per credit"**, flat | **1.09× · 1.45× · 2.02×** |
| **Midjourney** `[secondary]` | Fast GPU hour | Basic $3.03 · Standard, Pro, Mega $2.00 | **"$4/hr"**, flat across all plans | **1.32× · 2.00×** |
| **Talkspace** | one 30-minute video session | $32.50, from ($99 − $69) × 4.33 weeks ÷ 4 sessions | **"$65 each"** `[secondary]` | **2.00×** |
| **Vercel** | 1M edge requests | $2.00, from 10M included against a $20 credit | **"starting at $2 per 1M"** | **≥1.00×** |

¹ Rests on the 1-credit-equals-1-phone-minute assumption flagged in `elevenlabs-reception-ai.md`. If a credit maps to a web chat minute instead, the plan rates halve and the multiples become 2.18×, 2.91× and 4.04×.

### The distribution

Seven observations, across four products, three categories and two continents of unit design:

**1.00× · 1.09× · 1.32× · 1.45× · 2.00× · 2.00× · 2.02×**

All seven reproduce from the prices in the underlying teardowns. Two qualifications belong on the list itself. Vercel's 1.00× is a **lower bound** rather than a point observation, because the rate it rests on is quoted as "starting at $2 per 1M". And the two entry-tier observations are **1.09×** (Reception AI Basic) and **1.32×** (Midjourney Basic), so the rounded range below rounds one endpoint down and the other up; anyone checking the gate against the source figures should expect those two numbers rather than 1.10 and 1.30.

**The corpus norm, stated as a range: a top-up priced at 1.1×–1.3× the entry tier's per-unit price, resolving to 2.0× at the top tier.** Both products that publish a flat top-up rate peg it just above their *worst* in-plan rate — the entry rung's — and both land within 0.02× of exactly 2.00× at their top rung, from completely different units and completely different rationales. Talkspace reaches 2.00× on a human service with no credits anywhere. **Three independent products, three categories, converging on 2×.**

The mechanism is worth stating because it is not obvious. A **single flat top-up rate pegged just above the entry tier's in-plan price** does three things at once, with no further rules written anywhere:

1. **The ladder cannot invert at any rung**, because the entry rate is the highest in-plan rate that exists.
2. **The premium widens automatically as the customer grows**, producing escalating upgrade pressure without a per-tier overage table.
3. **It is one number to publish and defend.**

Test it against the ladder. A Reception AI Basic customer buying 140 extra minutes to reach Plus's 200 pays $22 + (140 × $0.40) = **$78.00 against Plus at $55.00**, a 41.8% penalty; matching Premium's 500 minutes costs **$198.00 against $99.00**, a 100% penalty. A Midjourney Standard customer buying 15 extra hours to reach Pro's 30 pays $30 + (15 × $4) = **$90 against Pro at $60**, a 50% penalty; matching Mega's 60 hours costs **$210 against $120**, a 75% penalty. **The penalty scales against the customer automatically.**

### The violator

**Vercel is the only product in the corpus whose top-up sits at parity with its plan rate.** The included allowance of "10M per month" at the published overage rate of "$2 per 1M" comes to exactly **$20.00**, which is exactly the **"$20 of included usage credit"** Pro carries. Inside the plan and outside it, an edge request costs the same.

Two caveats and one compensation:

- The rate is quoted as **"starting at $2 per 1M"**, so the real overage may be higher and the true multiple may exceed 1.00×.
- The parity finding holds on the edge-request meter only. The other included figure, **"1TB / month included"** at **"$0.15 per GB"**, comes to **$153.60**, which cannot also fit inside a $20 credit. `vercel.md` flags this as a live inconsistency, most likely residue of pre- and post-September-2025 language, and does not resolve it.
- **What compensates is not a price feature at all.** Vercel publishes a spend ceiling — **"a default on-demand usage budget of $200"**, exactly **10× the $20 seat price** — so the buyer learns their worst plausible month before they learn the rates. And the credit is reported `[secondary]` to belong to the team rather than the seat, so a two-seat team pays $40 and still receives $20 of credit. **The included value per seat halves at two seats and falls to a third at three**, which quietly restores the gradient that flat pricing removed.

**No observation in the corpus places a top-up below its plan's per-unit price.** Not one.

### How everyone above parity compensates

Three products sit above parity — Reception AI, Midjourney and Talkspace — and two of the three attach a non-price justification to the premium. The two justifications are different from each other, but Midjourney's is shared with a fourth product, Runway, whose own top-up rate is unpublished and which therefore contributes no multiple to the distribution above.

- **Midjourney** makes purchased capacity permanent while included capacity is not: **"extra fast hours cost $4 each and do not expire"** against plan hours where **"Fast hours don't roll over"** and unused time **"still resets monthly even on annual plans"**. Paid-for capacity is treated as property; included capacity is treated as a lease.
- **Runway** states the same device in three separate sentences and adds a rung to it. Standard and Pro plan credits **"don't roll over — they reset within 24 hours of your billing date"**. Max plan credits **"roll over to the following month"**. Purchased credits **"never expire"**. Rollover is not a concession; it is a **feature Runway charges $95 for**.
- **Talkspace** compensates with an access fence rather than with permanence: the "$65 each" extra session is **available to higher-tier subscribers only**. That fence is load-bearing. A Messaging-only subscriber at $69/week ($298.77/month) buying one $65 session would pay $363.77 for one session plus messaging, undercutting the $99/week video tier at $428.67 in any light month. **Fencing the add-on is what stops the ladder inverting where the price alone would not.**
- **Reception AI** compensates with nothing at all. The flat rate does the entire job.

### The seven products that sell a top-up and cannot be checked

| Product | What is published | What is withheld |
|---|---|---|
| **Descript** | **"Top up media minutes"** and **"Top up AI credits"** are surfaced on Hobbyist, Creator and Business | Both rates. Help-centre fetches returned 403 |
| **Gamma** | **"Paid users can purchase additional credits"** | The rate |
| **Cursor** | **"On-demand usage allows you to continue using models after your included amount is consumed, billed in arrears"** | The rate, anywhere on the pricing page |
| **Runway** | Top-ups exist, **"The minimum purchase is 1,000 credits"**, and purchased credits **"never expire"** | The per-credit price |
| **Notion** | **"$10 per 1,000 monthly Notion credits"** = $0.01/credit | Any credit allowance for any seat tier, so the plan side of the ratio does not exist |
| **Raycast** | Advanced AI at **+$8/month** `[secondary]`, a 100% uplift on the $8 annual Pro price | Any AI unit allowance on either side |
| **Figma** | **"Customize your plan with optional add-ons"** | Every add-on price |

**Fathom and Framer are excluded rather than withheld, because the two prices are denominated in different things.** Fathom's **"packs of 50 for $10/month"** against a base of $45/month carrying **"50 sites included"** looks like a 4.5× inversion and is not one: the $45 buys 500,000 pageviews and only incidentally 50 sites. Framer's **"$20 / month, and viewers are free"** editor add-on is a seat price against a per-site plan price. In both cases **no multiple is computable, and computing one would be wrong.**

The genuine finding in Framer's case is a different check that does pass: **Basic $10 + one editor $20 = $30, exactly Pro's price**, at which point Pro dominates because it also carries staging, rollback, roles and permissions, locales, relational CMS and redirects. Notion runs the identical structure: **Plus $10 + one credit block $10 = $20, exactly Business**, at which point Business dominates on full Notion AI, SSO and admin. **Two prosumer products independently priced their add-on at exactly the gap to the next tier**, which makes stacking never rational without anyone having to say so.

### The three ways the corpus avoids the question entirely

- **Refuse the top-up.** Bannerbear publishes the sharpest sentence in the corpus on this: **"It is not possible to go over your monthly image / video API credits limit."** No overage, no packs, no rollover mentioned. Zero inversion risk and zero pricing-page complexity, at the cost of a hard wall for a customer mid-campaign. PhotoAI shows no top-up either.
- **Substitute capped rollover.** ElevenLabs sells no top-up and instead offers **"Unused credits roll over for up to two months — up to 2× your monthly quota"** with a ceiling of **"3× your monthly quota"** and the retention clause **"Downgrading or cancelling forfeits unused credits."** The cap is set deliberately below the next rung: a Creator can bank at most 363,000 credits against Pro's 600,000 monthly, and a Gamma Plus customer can bank at most 2,000 against Pro's 4,000. **Banking can never substitute for upgrading.**
- **Guard with a minimum purchase size.** Runway's 1,000-credit minimum is **1.6× the entire 625-credit monthly allowance of the Standard plan**, 44.4% of a Pro month and 10.5% of a Max month. **One number produces a tier-graduated barrier**, punitive at the bottom and irrelevant at the top, and it works whether or not the rate is ever published.

### The one-off analogues, which point the same way

Where the corpus sells a bundle and its components, the à-la-carte unit is always priced **above** the bundled unit, never below.

- **Enneagram Institute**: **"$20 per test"** standalone against **"$40 $36 both tests"**, or $18.00 each in the bundle. **À-la-carte is 1.11× the bundle.** The strikethrough is honest arithmetic on the company's own published single-test price.
- **Talkspace psychiatry**: a standalone follow-up is **"$175"**; the eval-plus-one bundle at **"$435"** against a **"$299"** evaluation implies $136, and the three-pack at **"$475"** implies $158.33. **À-la-carte is 1.29× and 1.11× the bundled unit.**
- **16Personalities**: **"Save 70% vs. buying individual types"** implies an à-la-carte total of about $96.67 against a $29 suite, a **3.33× multiple** — but the individual-type prices are not published, so this is derived from the claim and not from two observed prices. It belongs in the section only as a caution about anchors.

---

## 6. The one-off buyer

Thirteen products in the corpus serve a genuinely episodic need and publish enough to be classified. **Eight sell a one-off. Five force a subscription onto it.** A further group, listed third below, sells a subscription that is trivially cancellable and lets the buyer treat it as a one-off; those products are quoted for their cancellation language rather than counted, because "how easily can I leave?" is a different question from "can I buy this once?"

### Sells a genuine one-off

| Product | Price points, verbatim | Structure |
|---|---|---|
| **UnderstandMyself** | **"$9.95"** | One-off report, no account, no recurrence |
| **Nomads.com** | **"$9.99"** Lite · **"$19.99"** Lifetime, both **"Billed once. Then never again"** | Two-rung one-off ladder; **no subscription exists at all**; **"7-day money back guarantee"** |
| **Enneagram Institute** | **"$20 per test"** (RHETI and IVQ) · **"$40 $36 both tests"** | **"Each test purchase comes with one, single-use test code. Test codes expire one year from date of purchase."** |
| **16Personalities** | **"$29"**, explicitly **"One-time purchase (not subscription-based)"** | Paywall sits after a free result is delivered; **"30-day money-back guarantee"**, **"no questions asked"** |
| **MentorCruise** | **"$39/call"** Introductory Call · **"$119/call"** Study Plan · **"$149/call"** Interview Preparation | One-off and recurring sold side by side as separate first-class products; recurring is **"$120–$270/month"** |
| **Intro.co** | **"$450 • Session"**; observed range **"$69"** to **"$2,500"** | **"Subscription: None exists"**. The working band is $100–$500 |
| **Talkspace psychiatry** | **"$299"** initial evaluation · **"$175"** follow-up · **"$435"** eval + 1 · **"$475"** three follow-ups | **A genuine one-off ladder living inside a weekly-subscription business** |
| **Stoic** | **"$299.00" "Stoic Lifetime Premium"** | The only verified lifetime SKU in the journaling cohort |

Calm's lifetime SKU is excluded: the two secondary sources conflict at **$399.99** and **$499.99**, neither is first-party, and `calm.md` instructs that neither be cited without verification.

### Forces a subscription onto an acute need

| Product | The smallest possible purchase | The gap |
|---|---|---|
| **BetterHelp** | **$260** — four weeks at the low end of **"$65 to $100 per week"** `[secondary]`, **"billed every four weeks"** | **6.7× the corpus's cheapest single human answer.** `betterhelp.md` states it plainly: "A person who needs help with one problem this fortnight has no legitimate way to buy from BetterHelp at all." |
| **JustAnswer** | Advertised **"as little as $1 or $5"**; the payment form discloses **"a $39 monthly membership fee today and each month until I cancel"**; the FTC complaint gives actual rates of **"$28–$125" per month** by category | **$44 on day one at the disclosed example, 8.8× the advertised number.** Over twelve months the disclosed $39 rate reaches **$473, or 95× the "$5"** |
| **Abby** | **"$19.99 / month"**; the tier table records **"One-off: Not offered"** | No episodic path at all |
| **Rosebud** | **"$12.99/mo"** or **"$107.99/yr"**; the tier table records **"One-off: None"** | No episodic path at all |
| **Noom** | **"4 months $169"** | The shortest available commitment is four months |

### Sells a subscription that is trivially cancellable

The corpus's most-quoted cancellation language, all verbatim:

- **Gamma**: **"Absolutely! You can upgrade, downgrade, or cancel your plan at any time from 'Settings & members'. If you cancel, you'll retain access to your paid features and credits until the end of your current billing period."** Paired with **"Your content remains yours, regardless of your subscription status."**
- **MentorCruise**: **"Try your first call for free with every mentor you're meeting. Cancel anytime, no questions asked."** and **"No Strings — Cancelling is simple and can be done anytime."**
- **Duolingo**: **"no commitment. cancel anytime."**, with a company-made commitment inside the trial timeline — **"Day 5: Get reminded when your trial is about to end"** — giving the user 48 hours of warned time.
- **Day One**: **"Cancel anytime without losing your data."**
- **Blinkist**: **"You can cancel anytime in your Settings"**, in the same sentence as the renewal disclosure.
- **ElevenLabs**: **"You can cancel your subscription at any time"** — but **"Downgrading or cancelling forfeits unused credits."** The cancellation is easy and it costs you your balance.

### What the price points say

- **The cheapest single human answer anywhere in the corpus is "$39/call"** (MentorCruise's Introductory Call). The cheapest named-expert session is **"$69"** (Intro.co's observed floor).
- **The cheapest no-human artefact is "$9.95"** (UnderstandMyself).
- **A one-off, self-serve, no-human personal-insight deliverable bears $9.95–$36.** Four independent products cluster inside it — UnderstandMyself $9.95, Enneagram RHETI $20, 16Personalities $29, the Enneagram bundle $36 — and **no researched product in this shape prices above $36.**
- **The $36–$39 seam is where the buyer's comparison set flips from "a report" to "a person."** 16Personalities sits at $29, deliberately on the report side of it.
- **A single market-rate therapy session is $100–$200** (Psychology Today, cited in four teardowns), against which Talkspace's implied in-plan session rate of **$32.50** is a 3× to 6× reduction and Rosebud's whole year at **$107.99** costs roughly one session.

### What this says about carrying a one-off SKU

The corpus contains exactly one company that has answered to a federal regulator, and it is the one that advertised a one-off and shipped a subscription. The FTC alleges JustAnswer's conduct affected **"hundreds of thousands of consumers between January 2022 and the present"**, and the word **"fully-refundable"** in **"a secure form to join JustAnswer for $5 (fully-refundable)"** attaches only to the $5 join fee, not to the recurring charge. **The refundable thing is the small thing.**

The two marketplaces that sell one-offs as first-class products publish the price before any commitment, and **neither is damaged by it**. Intro.co accepts the one-off as terminal and never attempts conversion. MentorCruise's recurring product survives alongside its one-offs because it is qualitatively different rather than cheaper per call: at $120/month against $39/call, **3.08 calls buys the same spend**, so the arithmetic does not force the upgrade and the page does not pretend it does. `mentorcruise.md` names the contrast directly — this is the property JustAnswer lacked, where the recurring product was the *same* answer and could therefore only be sold by default rather than by choice.

**The structure that most cleanly serves an acute need without abandoning recurring revenue is Talkspace's**: a weekly subscription business carrying a genuine, separately-priced, one-off ladder ($299 / $435 / $175 / $475) for the buyer whose need is a single event. And the most transferable detail in the whole section is MentorCruise's one-off ladder, whose rungs are **not volume tiers but different deliverables**: $39 buys a conversation, $119 buys a *plan*, $149 buys *interview preparation*. The 3.05× step from $39 to $119 is paid for **specification**, not for time.

---

## 7. Competitive price maps

All prices observed **2026-08-12**. Secondary figures are marked and carry the source's own date.

### Prosumer SaaS — per seat per month

| Product | Free | Entry paid | Second rung | Top self-serve | Add-ons |
|---|---|---|---|---|---|
| Linear | $0 — "2 teams", "250 issues", "Unlimited members" | **$10** per user, billed yearly | **$16** per user, billed yearly | Custom | **none published, of any kind** |
| Notion | $0 | **$10** per member | **$20** per member | Custom | "$10 per 1,000 monthly Notion credits" |
| Raycast | "Free, Forever." | Pro **$10** monthly / **$8** annual | Teams Pro **$15** monthly / **$12** annual | Custom | Advanced AI **+$8/mo** `[secondary]` |
| Superhuman | $0 | Pro **$15** monthly / **$12** annual | Business **$40** monthly / **$33** annual | Custom | none published |
| Framer | $0 | Basic **$10**/mo (yearly billing) | Pro **$30**/mo (yearly billing) | Custom | extra editor **$20/mo** |
| Vercel | Hobby, "Free forever", non-commercial `[secondary]` | Pro **$20** per user + usage, with "$20 of included usage credit" | — | Custom | metered: **$2 per 1M** edge requests, **$0.15 per GB**, **$0.128 per hour** |
| Figma | Starter, free | Professional: Full **$16** · Dev **$12** · Collab **$3** | Organization: Full **$55** · Dev **$25** · Collab **$5** | Enterprise: Full **$90** · Dev **$35** · Collab **$5** | prices not captured |

**Where the mass sits: $10–$20 per seat per month.** All seven entry rungs are inside it at monthly billing, and four of them are exactly $10; Raycast's annual $8 is the only entry figure anywhere in the category below the band. The second rung sits at **$15–$40**, Raycast's Teams Pro marking the floor. Figma's Organization ($55) and Enterprise ($90) are the only prices above $40 anywhere in the category, and both are governance products rather than capability products — Figma's own AI-credit allowance rises only 1.42× end to end while its price rises 5.63×.

### AI tools — individual plans, monthly

| Product | Free | Entry paid | Middle | Top individual |
|---|---|---|---|---|
| ElevenLabs | $0, 10,000 credits/mo | Starter **$6** | Creator **$22** (badged "Popular") | Pro **$99** · Scale **$299** · Business **$990** |
| Gamma¹ | $0, "400 starter credits" that "do not refill" | Plus **$9** | Pro **$18** (badged "Most popular") | Ultra **$90** |
| Midjourney `[sec]` | — | Basic **$10** | Standard **$30** | Pro **$60** · Mega **$120** |
| Runway | $0, "125 one-time credits" | Standard **$15** | Pro **$35** | Max **$95** |
| Perplexity | not verified | Pro **"$17/month when billed annually"** | — | Max, not verified |
| ChatGPT | $0 | Go **$8** `[sec]` | Plus **$20** (OpenAI help centre) | Pro **"From"** $100; $200 upper `[sec]` |
| Claude | $0 | Pro **$20** monthly / **$17** with annual | Max **"From $100"** | Max 20x **$200** (support centre) |
| Cursor | $0 Hobby | Pro **$20** | Pro+ **not shown on the card** | Ultra **$200** |
| ElevenLabs Reception AI | 14-day trial | Basic **$22** | Plus **$55** | Premium **$99** |

¹ Gamma's captured figures are the **annual-equivalent** rates, the only ones that rendered; its monthly-billing prices did not come through. See `gamma.md`, which proves the point by multiplying them out against the displayed annual totals. Every other row in this table is a monthly price.

**Where the mass sits: $17–$22 is the assistant tier.** Four independent products land within $3 of one another — ChatGPT Plus $20, Claude Pro $20, Cursor Pro $20, Perplexity Pro $17 — and it is the tightest cluster anywhere in the corpus.

**The step above it is a cliff, not a rung.** Gamma Ultra $90, Runway Max $95, ChatGPT Pro "From" $100, Claude Max $100 and $200, Cursor Ultra $200. Of those five ladders, three have **nothing between $20 and $100** — ChatGPT, Claude and Cursor — and two of the three conceal the interior: Cursor names Pro+ but does not price it, and both ChatGPT and Claude use a **"From"** prefix that hides a 2× spread. The other two do carry an interior rung, Runway at $35 and Gamma at $18.

### Consumer subscription

| Product | Monthly | Annual | Annual ÷ 12 | Family |
|---|---|---|---|---|
| Oura | **$5.99** | **$69.99** | $5.83 | none |
| Headspace | **$12.99** | **$69.99** | $5.83 | **$99.99**/yr, 6 accounts |
| Calm | **$14.99 and $16.99, both live as IAP SKUs** | **$69.99 and $79.99, both live as IAP SKUs** | $5.83 / $6.67 | **$99.99**/yr, 6 `[sec]` |
| Strava | offered, **price not displayed** | **$79.99/year + tax** | $6.67 | **$139.99**/yr, 4 accounts |
| Duolingo | **$9.99 and $12.99, both live as IAP SKUs** | **$83.99 and $95.99, both live as IAP SKUs** | $7.00 / $8.00 | **$119.99**/yr, 6 accounts |
| Blinkist | **not offered on the page** | PRO **$139.99** (from $174.99) · PREMIUM **$79.99** (from $99.99) | $11.67 / $6.67 | none |
| Day One | **$8.99** — store SKU only, conflicts with the company's own blog | Silver **$49.99** · Gold **$74.99** | $4.17 / $6.25 | none |
| Whoop | **not displayed anywhere** | One **$199** · Peak **$239** · Life **$359** | $16.58 / $19.92 / $29.92 | none |

**Where the mass sits: $69.99–$79.99 a year.** Calm, Headspace and Strava hit it exactly, and **six products carry at least one annual SKU whose effective monthly rate lands between $5.83 and $6.67** — Oura and Headspace at $5.83, Calm at both $5.83 and $6.67, Strava at $6.67, Blinkist's PREMIUM at $6.67 and Day One's Gold at $6.25. Whoop is 2.8×–5.1× the band because its price includes a physical device, which is precisely why it declines to print a monthly figure.

**Family plans converge on the same break-even.** Calm and Headspace at $99.99/yr for six, Duolingo at $119.99/yr for six, Strava at $139.99/yr for four. **All four break even at two accounts** — two Headspace individuals cost $139.98 against $99.99, two Strava individuals cost $159.98 against $139.99 — and all four seed the family plan at the *individual* decision point.

**Two live price tests are visible in the App Store IAP manifest** on the same day, at Calm and Duolingo, in both cases with two concurrent monthly SKUs and two concurrent annual SKUs. `calm.md` and `duolingo.md` both note the method independently: **reading a competitor's IAP manifest requires no account and no access to a protected page.**

### Decision and wellbeing

| Product | One-off | Subscription |
|---|---|---|
| UnderstandMyself | **$9.95** | — |
| Enneagram RHETI / IVQ | **$20** each · **$36** both | — |
| 16Personalities | **$29** | none, by design |
| MentorCruise | **$39** · **$119** · **$149** per call | **$120–$270/month** |
| Intro.co | **$69–$2,500** per session; working band **$100–$500** | none |
| Stoic | **$299.00** lifetime | base ladder $6.99–$39.99 · AI ladder $12.99–$99.99 |
| Rosebud | none | **$12.99/mo** · **$107.99/yr** shown as **$8.99/mo** |
| Abby | none | **$19.99/month** |
| Talkspace "Tee AI Plan" | — | **$19.99/month after free trial** |
| Talkspace therapy | psychiatry **$175–$475** | **$69** · **$99** · **$109** per week |
| BetterHelp `[sec]` | none | **$65–$100/week**; **$260–$400** per four weeks |
| Noom | — | 4 months **$169** · 6 months **$179** · 12 months **$209** |
| JustAnswer `[FTC complaint]` | advertised **"as little as $1 or $5"** | actual **$28–$125/month**; disclosed example **$39/month** |

**Four bands, and they barely overlap.** A one-off no-human artefact is **$9.95–$36**. An AI-advice subscription is **$8.99–$19.99/month** — Rosebud at $8.99 annual-equivalent, Abby and Talkspace's Tee plan both at $19.99. A single human answer is **$39–$500**. Human therapy is **$69–$109/week**, which annualises to $3,588–$5,668 and is never displayed that way by anyone.

### Credit and indie

| Product | Free | Entry paid | Middle | Top | Top-up |
|---|---|---|---|---|---|
| Nomads.com | free, limited to breadth of data | **$9.99** Lite | **$19.99** Lifetime | — | none |
| Runway | $0, 125 one-time credits | **$15** | **$35** | **$95** | exists, **rate not published**, min 1,000 credits |
| TinyWow | free, **"access to all our free tools"** | **$20**/month | **$15**/month yearly | — | none — nothing is metered |
| Descript | $0 | Hobbyist **$24** / $16 annual | Creator **$35** / $24 annual | Business **$65** / $50 annual | exists, **rates not published** |
| PhotoAI | none | Starter **$19** | Pro **$49** · Max **$99** | Ultra **$199** | **none shown** |
| Fathom | **none, by stated policy** | **$45/month** for "Up to 500,000 pageviews" | — | — | sites, **"packs of 50 for $10/month"** |
| Bannerbear | 30-credit trial, no card | Automate **$49** | Scale **$149** | Enterprise **$299** | **none, by explicit policy** |
| ElevenLabs Reception AI | 14-day trial | Basic **$22** | Plus **$55** | Premium **$99** | **"$0.40 per credit"** |

**Where the mass sits: $15–$49 a month at the entry rung.** Six of the eight are inside it. Fathom is the only product in the entire corpus with no free tier at all, and it explains why on the page: **"Nope, and here's why: we've heavily invested in enterprise-level infrastructure"**, alongside **"Never. Not even for Black Friday"** on discounts.

---

## Corpus gaps

Named so nothing here is mistaken for complete coverage.

**Teardowns that the lane research supports but that were not written, and why.** The verbatim strings quoted in the two entries below are the only quotations anywhere in this file with **no primary record in this directory** — there is no Photoroom or Clipdrop teardown to check them against, so they cannot be verified from what is on disk and should be re-observed before any of them is used. The same caveat attaches to `tinywow.md`'s comparative line placing Photoroom's annual discount at 33%, which traces to this same lane research and to nothing else.

- **Photoroom** (`https://www.photoroom.com/pricing`, observed 2026-08-12). The lane captured tier names, verbatim identity descriptors — **"Perfect for solopreneurs"**, **"Great for small businesses"**, **"Best for growing brands"** — dual-meter allowances (4,250 / 12,000 / 20,000 AI credits against 1,000 / 3,000 / 10,000 exports), a **"MonthlyYearlySave 33%"** toggle, CTA copy, and two real API prices (**"$0.02"** per image for background removal, **"$0.10"** per image for GenAI editing, plus "1,000 free images" in sandbox). **The subscription dollar amounts did not render and are absent from every source.** A teardown of a pricing page with no plan prices would be an empty tier table, so none was written. **What it would contribute if completed:** the corpus's clearest dual-meter segmentation case, where the value meter (exports, 1 : 3 : 10) is scaled more than twice as fast as the cost meter (credits, 1 : 2.8 : 4.7).
- **Clipdrop** (`https://clipdrop.co/pricing`, observed 2026-08-12). **No prices rendered at all** — the page served "--per month" and "Start - days Free trial". The fence structure did render, verbatim, as per-tool rolling daily caps: **"Background Removal" — "20/24h"**, **"Text Remover" — "50/24h"**, against a Pro tier at **"1000/24h"** for all tools plus "Skip Queue" and "High Resolution". **What it would contribute:** the corpus's only rolling-24-hour-per-tool meter, which dissolves the rollover, expiry and top-up questions entirely, and a 50× free-to-Pro step on the same meter.

**Cross-references inside the corpus that were broken and are now closed.** `runway.md` was cited as an existing file by `descript.md`, `gamma.md` and `midjourney.md`. `elevenlabs-reception-ai.md` was cited by `bannerbear.md`, `descript.md`, `gamma.md`, `midjourney.md`, `photoai.md` and `talkspace.md` as the corpus's load-bearing sub-plus-top-up datapoint. **Both files existed only as references until they were written alongside this one.**

**Structural gaps that limit specific sections above.**

- **Section 1 has one observation, not 38.** The toggle default is recorded on exactly one page. Any recommendation about defaulting a toggle rests on Framer alone.
- **Section 5 rests on four products and one assumption.** Nine of the thirteen products selling a top-up withhold the rate or price it in a non-comparable unit, and the corpus's sharpest datapoint, Reception AI, rests on an unverified 1-credit-equals-1-phone-minute mapping. **A second published plan-plus-overage pair from an indie-scale product would materially raise confidence in the 1.1×–1.3× peg.**
- **Section 4 excludes seven products with 2+ paid rungs** because their allowances were never captured or because seats are the unit and there is nothing to divide.
- **Ten teardowns rest wholly or largely on secondary sources**, each flagged inside its own file: BetterHelp (no page ever fetched), JustAnswer (built from the FTC complaint filed 2026-01-13), Midjourney (no page ever fetched, two agreeing third parties), Calm (pricing page 403'd; prices from the App Store IAP manifest), ChatGPT (prices render client-side and came from the help centre and trackers), Duolingo (prices from the IAP manifest), Superhuman (standalone Mail pricing unverified), Perplexity (one proxy fetch of `/pro` is the sole source), Vercel (a structured representation rather than the rendered page), Whoop (guarantee language not located).
- **All 40 teardowns still carry the placeholder `<models pack pending — references/models/ not yet populated>`** in their Model field, and all 40 carry `<pattern IDs pending — library numbering in progress>` under Mechanisms in use. `references/models/` and `references/patterns/` are both populated. **The corpus is not yet wired to the two libraries it is supposed to connect to**, which is the single largest piece of unfinished work in this directory.
