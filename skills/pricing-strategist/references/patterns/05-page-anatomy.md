# Layer 05 — Page anatomy

**Layer slug:** `page-anatomy` · **Loaded at:** Phase 6

This layer governs where things go: what occupies the fold, what order the sections run in, how a tier card is composed, whether there is a comparison table and how it is built, where the badge sits, where the guarantee and the proof sit, and how all of it survives a phone. The thing that goes wrong most often is not a missing element — it is a page whose *decision zone* is spread across three screenfuls, so the buyer has to hold four tiers in working memory to compare them and instead holds none. The second most common failure is subtler and more expensive: treating this layer as a checklist and shipping every element at once, which is the single most-published *losing* move in the public record (P-141).

## How to use this layer

Read **P-121 → P-126 first**; they are the load-bearing ones and they decide the shape of the page before any other choice is available. **P-127 → P-129** (badge, attention, anchor) are steering devices and only matter once the ladder from Layer 03 is sound — a badge on a broken ladder is decoration on a structural fault. **P-130 → P-135** (the table and mobile) are situational: skip the whole block if your tiers differ on a single usage axis, because then the table is overhead. **P-136 → P-139** are objection-handling furniture and belong below the fold. **P-140 and P-141 are warnings, not recommendations** — read them before you commit to an ordering experiment or a redesign.

In a **COLD** regime almost nothing here can be tested, so treat every pattern as a prior and take the ones whose mechanism is a usability finding (P-121, P-131, P-132, P-134, P-136) over the ones whose mechanism is a conversion claim (P-127, P-140). In **HOT**, note that P-140 is the only pattern in this layer with a published effect trade-off you can instrument on both sides.

## Patterns

### P-121 — Put the whole decision in the first two screenfuls

- **layer**: `page-anatomy`
- **mechanism**: Attention decays steeply with scroll depth. The fold is not a wall — people do scroll — but the gradient behind it is severe enough that anything below the third screenful is optional reading. Everything required to *choose* must therefore sit above that line; everything required to *reassure* can sit below it.
- **works-when**: 3–5 tiers that fit horizontally, and a value metric legible from the card alone.
- **fails-when**: used as an argument for cramming. The 2018 data shows users will scroll, so compressing a legible layout into one screen to "beat the fold" trades comprehension for a myth. Also fails on 6+ tiers or multi-product pricing (monday.com, Typeform), where the fold cannot hold the grid and a product selector has to come first.
- **observed-effect**: NN/g eye-tracking, 120 participants, 130,000+ fixations, 1920×1080, 2018: **57%** of page-viewing time above the fold, **74%** within the first two screenfuls (to 2160px), **81%** within three, and **>42%** in the top 20% of the page. GoodUI Pattern #49 "Above The Fold Call To Action" aggregates **12 A/B tests** including Test #361 (Chaosgroup.com, **49,030 visitors**, pricing-plan selector moved from page bottom to near-top, measured on sales) and Test #349 (Backstage.com, **950,043 visitors**, subscription starts); GoodUI reports the meta-analysis at **"56.1% of 90% cumulative power target at 2% MDE from 11 tests"** — directionally supported, not conclusively powered — and the individual lifts are `[paywalled — subscription required]`. One published in-market instance: Paltalk moved all plans above the fold into a comparison table and added testimonials, **+6.74% successful purchases**, revenue "more than USD 2,000", **53 days**, 50/50 split of all incoming traffic, significance not stated (VWO, accessed Aug 2026) — and the two changes are not separable.
- **evidence**: `medium`
- **sources**: https://www.nngroup.com/articles/scrolling-and-attention/ · https://goodui.org/patterns/49/ (fetched 2026-08-12) · https://vwo.com/success-stories/paltalk/
- **how-to**: Budget the fold in this order: headline, subhead, billing toggle, tier cards with prices and CTAs. Compress each card's feature list to the 3–5 attributes buyers actually compare and push the rest into the table below. Then load the page on a real phone and a 13-inch laptop and check that a buyer can pick without scrolling. Verify with a scroll-depth heatmap on your own page rather than assuming the NN/g benchmark transfers — it is general-web eye-tracking, not pricing pages.
- **example-copy**: n/a (structural)
- **worked-example**: Ledgerly has three visible rungs (Free, Solo $9, Books $19) plus a top-up. The fold carries headline, subhead, toggle, three cards; the top-up pack moves *below* the cards, because it is a post-decision purchase for someone who has already chosen Solo, not a fourth option competing for the same attention.

### P-122 — Ship the conventional section order unless you have a reason not to

- **layer**: `page-anatomy`
- **mechanism**: Buyers arrive with a learned template for what a pricing page is. Matching it costs nothing and spends zero attention on orientation; deviating from it spends attention you needed for the decision. The order also encodes a dependency — the toggle changes the numbers in the cards, and the table is a deliberation aid consulted only after a shortlist has formed.
- **works-when**: any self-serve pricing page in a category where competitors also have one.
- **fails-when**: the page is a paywall inside an app rather than a marketing page, where the surrounding flow (not the section order) sets the frame; and for multi-product pricing, where a product selector must precede everything.
- **observed-effect**: Census of **33 live pricing pages fetched 2026-08-12** (Slack, Notion, Basecamp, Ahrefs, Figma, Linear, GitHub, Vercel, Dropbox, Kit, Todoist, Grammarly, Mailchimp, Intercom, monday.com, Asana, Calendly, Semrush, 1Password, Fathom, Miro, Airtable, Shopify, Squarespace, Zapier, ClickUp, Typeform, Framer, ElevenLabs, Descript, Buffer, Loom, Zoom): the near-universal order is **headline → subhead → billing toggle → tier cards → feature comparison table → social proof → FAQ → footer CTA**. **No page in the sample put the comparison table above the tier cards.** No causal test of section order located.
- **evidence**: `medium` *(census of revealed preference, not a controlled test)*
- **sources**: 33-page transcription 2026-08-12 (L17 copy bank)
- **how-to**: Use the order above as the default. If you deviate, name which element you moved and what question you think it answers earlier. The one deviation with a defensible mechanism is moving a single proof line into the subhead slot (Grammarly, Todoist, Linear all do this), which is a bet that credibility rather than comprehension is your blocker.
- **example-copy**: n/a (structural)
- **worked-example**: Ledgerly's page runs: headline → subhead → monthly/annual toggle → Free · Solo · Books → top-up pack strip → comparison table (12 rows) → one proof line → FAQ (6 questions) → footer CTA. The top-up strip is the only deviation and it sits *after* the cards because buying units is a decision that only exists once a plan is chosen.

### P-123 — Put the billing toggle above the cards, never below them

- **layer**: `page-anatomy`
- **mechanism**: The toggle rewrites every number in every card. Placed below the cards, it changes content the buyer has already read, evaluated and scrolled past — which either goes unnoticed (so the annual discount is never seen) or forces a re-read of the whole grid.
- **works-when**: any page with a monthly/annual control.
- **fails-when**: pages that show both prices simultaneously per card and have no toggle at all (Linear shows yearly only; Raycast shows "Annual Subscription -20%" inline) — then there is nothing to place, and the trade-off is that you lose the ability to make either term the headline number.
- **observed-effect**: `no quantified effect published`. Placement above the cards is the convention across the 33-page census (2026-08-12); no controlled test of toggle placement exists in the public record.
- **evidence**: `anecdote`
- **sources**: 33-page transcription 2026-08-12
- **how-to**: Place the toggle between the subhead and the cards, at the same horizontal centre as the grid so the eye passes through it. Make the saving visible *on the toggle itself*, not only in the cards — the toggle is what people click, so it has to carry the reason to click it.
- **example-copy**: "Pay monthly" / "Pay yearly" — Notion, 2026-08-12
- **worked-example**: Ledgerly's toggle sits directly under the subhead, labelled "Pay monthly / Pay yearly — save 2 months". Below it, Solo reads $90/yr and Books $190/yr, with the monthly rate as the secondary line in each card.

### P-124 — Default the toggle to the term you want to sell, and know the default is untested

- **layer**: `page-anatomy`
- **mechanism**: The default is the price most visitors will ever see and therefore the one they anchor to. Defaulting to annual displays a lower monthly-equivalent number while selling a longer commitment, improving cash collection and removing eleven churn opportunities.
- **works-when**: you offer a genuine annual discount and your buyer can plausibly commit for a year.
- **fails-when**: your buyer genuinely cannot commit annually (SMB, seasonal, or a product with a natural end state), where an annual default that hides a higher monthly rate produces a nasty surprise at checkout — one of the two cost-transparency failure modes Baymard measures. Also fails where the product resolves a finite problem: a buyer who is done in six weeks and finds themselves in month eleven writes the review that defines you.
- **observed-effect**: Annual/yearly billing is referenced in **57.1% (172/301)** of detected pricing experiments across 24 companies — the most common structural device of any, more common than badges (Lazyweb Research, July 2026). **Cohort label, applied at every point of use: this 301-experiment pool is dominated by mobile paywall screens — the same study reports a sub-pool of 255 mobile "All plans" screens (see P-135) — so 57.1% is mobile-paywall prevalence and is not a measurement of desktop pricing pages.** Nearly every page in the 33-page census defaults to annual and shows the annual-equivalent monthly price as the headline number. **No controlled test of toggle default state exists in the public record.** Counterweight on the retention side: Mojo demoted the monthly plan behind a "view all plans" link and reported **+15–20% yearly take-up with "only a minor increase in cancellations"** — and the cancellation figure was never quantified (RevenueCat, accessed Aug 2026, no sample, duration or significance published).
- **evidence**: `medium` *(prevalence is well-sourced; the causal claim that annual-default is better is not)*
- **sources**: https://www.lazyweb.com/research/most-popular-badge-prevalence-pricing-pages (2026-07) · https://www.revenuecat.com/blog/growth/paywall-tests-grow-app-revenue/ · 33-page transcription 2026-08-12
- **how-to**: Default to annual, show the annual-equivalent monthly figure as the large number, and put the billing qualifier immediately beneath it in smaller but legible type — "per user/month, billed annually", never a bare "$10/mo". Keep monthly reachable in one click. Before you call an annual push a win, define the counter-metrics up front: refund rate, day-30 and day-90 cancellation, and billing support contacts.
- **example-copy**: "$10.99 per user, per month billed annually" — Asana, 2026-08-12
- **worked-example**: Ledgerly defaults to annual: Solo shows "$7.50 /month, billed annually ($90)" against the $9 monthly rate. Because a freelancer's bookkeeping dread is permanent rather than finite, the annual default is defensible here — but the falsifier is explicit: if day-90 cancellations on annual exceed monthly's day-90 churn, the default is wrong.

### P-125 — Compose every tier card in one fixed order

- **layer**: `page-anatomy`
- **mechanism**: The "who it's for" line converts the card from a price list into a routing device, letting a visitor eliminate two of four tiers without reading a single feature. Fixing the order across cards also lets the eye compare like with like at the same vertical position, which is what makes a horizontal grid scannable at all.
- **works-when**: tiers map to identifiable buyer segments.
- **fails-when**: tiers differ only by a usage quantity — then the descriptor is redundant filler and the number should lead.
- **observed-effect**: The order **tier name → one-line "who this is for" descriptor → price → billing qualifier → CTA → feature delta** is near-universal across the 33-page census (2026-08-12). Asana, Miro, Notion and Calendly write the descriptor as a complete sentence naming both the buyer and the job. No controlled test of card element order located.
- **evidence**: `medium`
- **sources**: 33-page transcription 2026-08-12
- **how-to**: Lock the six slots and give every card the same vertical rhythm, so prices sit on one line and CTAs sit on another. Test the descriptors by covering the feature lists entirely — a reader should still be able to pick their tier. If they cannot, the descriptors are decoration and the page is doing no routing.
- **example-copy**: "For growing teams that need to track their projects' progress and hit deadlines." — Asana Starter, 2026-08-12
- **worked-example**: Ledgerly's Solo card: **Solo** / "For a freelancer filing their own quarterly expenses." / **$7.50** / "per month, billed annually — $90" / **Get Solo** / "Everything in Free, plus: 100 receipts a month · CSV and Xero export · 12-month history".

### P-126 — List the delta on the card, not the full feature set

- **layer**: `page-anatomy`
- **mechanism**: The decision at the card is an *upgrade increment* decision. Repeating inherited features buries the increment and triples card length, which pushes the CTA below the fold and destroys P-121.
- **works-when**: strictly nested tiers, where each includes everything in the one below.
- **fails-when**: non-nested packaging where a higher tier drops something — then the connector phrase is a lie and you need an explicit comparison table to carry the truth. Also fails for procurement buyers who want the whole matrix, which is what the table below is for.
- **observed-effect**: Standard convention across the 33-page census (2026-08-12); Linear, Intercom and Calendly all use an explicit connector phrase. Cards in the sample carry roughly **4–8 delta features**. No conversion test of delta-versus-full listing located.
- **evidence**: `medium` *(near-universal convention across the census, but the census is a single internal, non-public transcription by one organisation, so it cannot carry `strong`; and it is evidence of practice, not of effect — no conversion test exists)*
- **sources**: 33-page transcription 2026-08-12
- **how-to**: Open each paid tier's list with a connector naming the tier below, then 4–8 additions. Defer everything else to the table. If a higher tier genuinely removes something, say so on the card in plain words rather than letting the connector imply otherwise.
- **example-copy**: "Every Essential feature, plus" — Intercom, 2026-08-12
- **worked-example**: Ledgerly's Books card opens "Everything in Solo, plus:" and lists four additions — 400 receipts a month, multi-client tagging, accountant seat, unlimited history. Its full 12-row entitlement set lives in the table.

### P-127 — Badge exactly one tier

- **layer**: `page-anatomy`
- **mechanism**: The badge works by being the only signal on the page — it substitutes a fast social shortcut for a slow feature comparison. Two badges restore the comparison problem *and* signal that the badges are decoration rather than information.
- **works-when**: 3+ tiers where the choice is genuinely hard.
- **fails-when**: 2 tiers, where the layout already tells the buyer everything and the badge is redundant; and on multi-product pages with genuinely separate sections, where one badge per section is legitimate.
- **observed-effect**: Badges appear in **38.2% (115 of 301)** of detected pricing experiments across 24 companies (Lazyweb Research, July 2026 — the author explicitly flags this as "a lower bound, counting mentions not audited pages", and that these are "detected UI differences with inferred reasoning, not measured conversion lift"). **Cohort label: the 301-experiment pool is dominated by mobile paywall screens — the same study reports a sub-pool of 255 mobile "All plans" screens (see P-135) — so 38.2% is mobile-paywall prevalence and must not be quoted as desktop pricing-page prevalence.** The badge is **not reliably on the middle tier**: in the 33-page census it sits second (Kit, Shopify, Buffer), third (Notion, ClickUp, Calendly, Loom, Descript, Slack), fourth (monday.com), and on the **most expensive** tier (Mailchimp "Best value" on Premium; GitHub "Recommended" on Enterprise). Two pages in the census badge **two** tiers — Grammarly ("Most popular" on Pro *and* Enterprise) and Dropbox ("Best Value" on Standard *and* Advanced). **No badge lift figure survives source-chasing; the circulating "30–40%" is fabricated — see Folklore.**
- **evidence**: `medium` *(prevalence)* / **no evidence for effect size**
- **sources**: https://www.lazyweb.com/research/most-popular-badge-prevalence-pricing-pages · 33-page transcription 2026-08-12
- **how-to**: Pick one tier — the one you are steering toward, which Lazyweb confirms is "typically mid or premium tiers", not necessarily the middle. If the page has genuinely separate product sections, one badge per section is acceptable, but never two within one visible grid. If you can compute the actual share of customers on that tier, state the number instead of the badge (see P-138).
- **example-copy**: "Most popular" on Team, "Recommended" on Enterprise — GitHub, 2026-08-12
- **worked-example**: Ledgerly has three rungs and badges Solo, because Solo is the rung the ladder arithmetic supports as the destination for a freelancer at 60–100 receipts. Books gets no badge: with 40 paying customers, "most popular" on Books would be a checkable false claim.

### P-128 — Expect the badge to redirect attention, not increase it

- **layer**: `page-anatomy`
- **mechanism**: A visual highlight acts as a scanning shortcut and an authority cue. It pulls the eye to the marked plan sooner, which biases the option set the buyer actually evaluates — but it does not buy more total reading. The card has to be comprehensible in a single fixation or the redirected attention is wasted.
- **works-when**: three or more visually similar tiers where the buyer has no strong prior about which fits.
- **fails-when**: the highlighted plan is transparently the one that benefits you and the copy gives no reason for the recommendation — sophisticated buyers discount the badge. And it fails when the badged card is dense: attention arrived earlier but left just as fast.
- **observed-effect**: Speero/CXL eye-tracking, 2016-09-26, 30–40 participants per variation across 4 variations of a single stimulus (SurveyGizmo's pricing page): participants chose the PRO plan more often when it was highlighted **and** when plans were ordered expensive-first. In cheap→expensive order, highlighting produced a significant improvement in time-to-first-fixation (**p=0.0171**). **Total time fixating did not differ significantly in any group.** Lab study, single stimulus, not an in-market revenue test.
- **evidence**: `medium` *(one well-instrumented lab study; small N per cell; 2016; never replicated in-market publicly)*
- **sources**: https://speero.com/post/the-effects-of-highlighting-a-recommended-pricing-plan-original-research
- **how-to**: Design the badged card to be readable in one glance — name, buyer, price, one differentiator, CTA. Label the badge with a reason rather than a bare word where you honestly can ("Most popular with teams of 10–50" beats "Recommended"). Do not expect the badge to make anyone read more of the page; it decides *which* card gets the fixation you already had.
- **example-copy**: "Recommended plan" — Calendly Teams, 2026-08-12
- **worked-example**: Ledgerly's badged Solo card is trimmed to five lines so it is legible in one fixation, and the badge reads "Most freelancers land here" — an honest paraphrase only if Solo really is the modal plan; otherwise it reverts to "Recommended" (see Layer 09).

### P-129 — Anchor against a price you actually charge

- **layer**: `page-anatomy`
- **mechanism**: A visible reference price supplies the comparison the buyer would otherwise construct for themselves, and shifts the judgement from "is this worth $X" to "is saving $Y worth acting now". The annual-versus-monthly form of this anchor is permanently true, so it needs no expiry and carries no substantiation risk.
- **works-when**: you have a genuine monthly rate that real customers actually pay, or a real time-boxed promotion with a stated end condition.
- **fails-when**: the "was" price is fictional. A reference price never charged is a fabricated anchor with legal exposure in the EU/UK and under FTC guidance, and buyers who have seen the "discount" price for a year discount the anchor entirely. `[unsourced — would need EU Directive 98/6/EC as amended by 2019/2161 Art. 6a and current FTC pricing guidance fetched directly]`
- **observed-effect**: GoodUI Pattern #21 "What It's Worth", **10 tests**, pooled statistical power **85.5% of the 90% cumulative target at 2% MDE** — one of the better-evidenced patterns in that library; medians `[paywalled — subscription required]`. Constituent tests include Kay.com (Jan 2026, **1,052,531 visitors**), Jared.com (Feb 2025, **2,285,675 visitors**), and Volders.de #431 (Sep 2022, 34,645 visitors, "added crossed-out higher price anchor vs. current price only", measuring completed purchases). **The evidence base is skewed to high-consideration e-commerce (two million-visitor jewellery tests), so transfer to SaaS is an inference.** In the 33-page census, genuine strikethrough is less common than the CRO literature implies and splits into a **term anchor** (Semrush "$117.33/mo billed annually … instead of $139 monthly"; Shopify Basic "$39/mo → $29/mo") and a **promotional anchor** (Slack "50% off for 3 months*"; Mailchimp "$13/month → $11.05/mo for 12 months"; ElevenLabs Creator "$22/month → $11 per month"). Every promotional anchor in the census carried a footnote marker.
- **evidence**: `medium`
- **sources**: https://goodui.org/patterns/21/ · https://goodui.org/patterns/21/tests/431/ · 33-page transcription 2026-08-12
- **how-to**: Prefer the term anchor. Show the annual-equivalent as the primary number and the monthly rate struck through or introduced with "instead of", in a muted colour at smaller size. Never strike through a price you have never charged. If you run a promotional anchor, carry a footnote and a stated end condition, and expect to have to substantiate the prior price.
- **example-copy**: "$117.33/mo billed annually … instead of $139 monthly" — Semrush, 2026-08-12
- **worked-example**: Ledgerly's Solo card shows **$7.50/mo billed annually** with *$9 monthly* struck beside it. That anchor is permanently true — $9 is a live, charged price — so it needs no asterisk. A "was $19" anchor on Solo would be fabricated and is refused.

### P-130 — Prefer a gridded comparison table to self-contained plan tiles

- **layer**: `page-anatomy`
- **mechanism**: Self-contained tiles make each plan look complete and attractive on its own, which is good for the cheapest plan and bad for you. A gridded table with aligned rows makes *absences* visible — the empty cells in the cheap column do the upselling — and lowers the cognitive cost of comparing.
- **works-when**: tiers differ on discrete, nameable features and the differences genuinely favour trading up. Best with 3–4 tiers and 5–12 comparison rows.
- **fails-when**: tiers differ on a continuous usage metric (seats, receipts, API calls) rather than on features — a table of near-identical rows adds noise and scroll cost for a decision that has one axis. Also degrades badly on mobile (P-134).
- **observed-effect**: GoodUI Pattern #115 "Pricing Comparison Table", **5 tests**; medians `[paywalled — subscription required]` (public page renders the literal string `X.X%`). One free leak with a real signal: **Netflix A/B tested three self-contained pricing tiles against its traditional comparison table and rejected the tiles**, logged at **+0.5 evidence in favour of the table**. Constituent tests: #463 Volders.de (23,336 visitors), #451 Fluke.com (52,560), #420 Designlab.com (9,521), #294 Umbraco.com (18,623), #277 Prepagent.com. Cohort is overwhelmingly European consumer e-commerce.
- **evidence**: `medium` *(5 tests with unpublished medians, plus one large-company rejection of the alternative)*
- **sources**: https://goodui.org/patterns/115/
- **how-to**: Build one grid where every feature is a row and every plan a column, and use explicit checkmarks and explicit blanks or crosses — a missing row is invisible, an empty cell is a felt absence. Put label and value on separate lines within each cell (the Umbraco variant) so columns stay narrow enough to align. Then apply P-133 to keep it short and P-134 to keep it usable on a phone.
- **example-copy**: n/a (structural)
- **worked-example**: Ledgerly's tiers differ mainly on receipts-per-month, which is one axis — so the table is trimmed to the 6 rows that are genuinely categorical (export formats, history window, multi-client tagging, accountant seat, support, top-up eligibility) and the volume difference is carried by the cards. A 30-row grid here would be manufactured differentiation.

### P-131 — Build the table for the lawn-mower scan

- **layer**: `page-anatomy`
- **mechanism**: NN/g eyetracking established that when users are actively cross-comparing several attributes across adjacent options, they scan tables row-by-row alternating direction — left-to-right, then right-to-left — the "lawn mower" pattern. That scan only survives if column identity stays continuously visible and each cell is self-explanatory.
- **works-when**: tiers differ across many dimensions and cross-comparison is the real decision.
- **fails-when**: tiers differ on one axis, where the table is pure overhead; and any layout where the headers scroll away, which converts the scan into repeated up-and-down hunting.
- **observed-effect**: NN/g (Kate Moran, 2020-12-13) found users "are likely to methodically scan comparison tables row by row, from right to left and back again" when "actively comparing several features of two or more adjacent products or services", and names three specific disruptors: **excessive table length, unexplained jargon, and placeholder content**. Smashing Magazine (2022-07) adds "loss of orientation": "when headers aren't visible, users tend to scroll up and down the page repeatedly." This is a usability finding; **no conversion effect published**.
- **evidence**: `medium` *(the scanning behaviour is direct eyetracking research, but it rests on a single organisation's study and the second source is an observational design article rather than independent research; nothing here is evidence about conversion)*
- **sources**: https://www.nngroup.com/articles/lawn-mower-pattern/ · https://www.smashingmagazine.com/2022/07/designing-better-pricing-page/
- **how-to**: Sticky column headers, non-negotiable. Make every cell readable without its row label. Delete every row that is identical across all tiers — it carries no decision information and lengthens the scan. Replace jargon in cells with the consequence (see P-152 in Layer 06).
- **example-copy**: n/a (structural)
- **worked-example**: Ledgerly's 6-row table pins "Free · Solo · Books" as sticky headers and writes cells as consequences: not "12mo retention" but "12 months of history".

### P-132 — Load the top band of every column, because the scan starts there

- **layer**: `page-anatomy`
- **mechanism**: Before the row-by-row comparison begins, the eye runs an orientation pass across the top row of names and prices and then down the leftmost columns — an "r"-shaped sweep. Whatever is not in that band is read late or not at all, and the rightmost columns are read least.
- **works-when**: any multi-column horizontal pricing table on desktop.
- **fails-when**: mobile stacked layouts, where the geometry that produces the pattern does not exist at all — which is why P-135 is a separate pattern rather than a footnote.
- **observed-effect**: Speero/CXL eye-tracking, 2016-09-19, ~139 participants across 3 layouts on a single stimulus page: a significant layout effect on mean time-to-first-fixation, **F(2,136)=12.6881, p<0.001**, and on total time fixating, **F(2,136)=7.419, p<0.001**; "people viewed pricing tables in an 'r' shape pattern regardless of plan order or highlighting, examining features and prices at the top first", and spent most time on the first two plans in left-to-right order regardless of order. The companion study adds "the general pattern was the same for all variants: people tended to start viewing the middle of a page then gaze slightly left."
- **evidence**: `medium` *(two lab studies, same stimulus and research team, 2016; no in-market replication published)*
- **sources**: https://speero.com/post/pricing-page-optimization-how-to-order-pricing-plans-original-research · https://speero.com/post/the-effects-of-highlighting-a-recommended-pricing-plan-original-research
- **how-to**: Put the three things that decide the purchase — plan name, price, and the single differentiating outcome — in the top band of every column. Never put a decisive differentiator in row 12. Place the plan you least need chosen in the rightmost column.
- **example-copy**: n/a (structural)
- **worked-example**: Ledgerly's three column heads each carry name, price, and one differentiator: "5 receipts/mo" · "100 receipts/mo + export" · "400 receipts/mo + accountant seat". A buyer who reads only that band can already choose.

### P-133 — Collapse the table into named groups and show differences only

- **layer**: `page-anatomy`
- **mechanism**: Progressive disclosure attacks the "excessive length" failure NN/g identified head-on, letting a buyer open only the group they care about while leaving the full matrix available to whoever needs it.
- **works-when**: 20+ feature rows.
- **fails-when**: short tables, where collapsing adds a click for no benefit; and procurement buyers who want the whole matrix at once — give them an expand-all.
- **observed-effect**: Smashing Magazine (2022-07) guidance: "Group attributes as collapsible sections", show "key features first, and display the rest on request", and "show differences within rows". Slack's page groups features under named headers. **Observational pattern survey; no conversion data attached** — the article cites exactly one research source (NN/g's lawn-mower study).
- **evidence**: `medium` *(observational)*
- **sources**: https://www.smashingmagazine.com/2022/07/designing-better-pricing-page/ · Slack pricing 2026-08-12
- **how-to**: Group into 5–8 named sections, open the first by default, and provide an expand-all. Delete rows identical across tiers before you group — grouping a table that should have been shortened just hides the length rather than removing it.
- **example-copy**: Group headers: "Productivity and collaboration" / "AI-powered work" / "Security" / "Compliance" / "Administration" / "Support" — Slack, 2026-08-12
- **worked-example**: Ledgerly's table is 6 rows and therefore is **not** grouped — collapsing it would add a click to a table that fits on one screen. This pattern is explicitly rejected for this product, and the rejection is stated in the deliverable so it does not read as an oversight.

### P-134 — Never horizontally scroll a comparison table on mobile

- **layer**: `page-anatomy`
- **mechanism**: The lawn-mower scan is impossible when only one column is visible. The user can then read sequentially but not compare, which is precisely the work the table exists to do.
- **works-when**: any responsive pricing page.
- **fails-when**: never — but the replacement must be chosen deliberately rather than inherited from a CSS default.
- **observed-effect**: Smashing Magazine (2022-07): "Feature comparison tables just don't translate well to narrow screens." Named alternatives with implementations: floating tabs to switch plans (tabs preferred over dropdowns), one attribute per row, accordions (Canva "avoids it on mobile and uses accordions instead"), tilted headings (GitLab), and a two-plan side-by-side picker from a list of five (Dropbox). **Observational; no conversion data.** Baymard's adjacent mobile constraint: the touch keyboard occupies ~**50%** of portrait screen space and 70–80% in landscape, so the effective viewport is roughly half what a layout assumes (2013).
- **evidence**: `medium` *(observational)*
- **sources**: https://www.smashingmagazine.com/2022/07/designing-better-pricing-page/ · https://baymard.com/blog/mobile-checkout
- **how-to**: Below the table's breakpoint, switch to a plan-selector (tabs) plus a single-column feature list, or a two-plan comparison picker. Never a horizontal scroll container. Never a dropdown where tabs fit.
- **example-copy**: n/a (structural)
- **worked-example**: On mobile, Ledgerly's 6-row table becomes a two-tab selector — "Solo | Books" — with the six attributes listed one per row under the active tab. Free is not a tab; it is a text link under the cards, because nobody comparison-shops a free plan.

### P-135 — On mobile, lead with the promoted plan rather than replicating desktop order

- **layer**: `page-anatomy`
- **mechanism**: A horizontal grid stacked vertically turns "the highlighted middle column" into "the second or third card down", frequently below the fold. The badge's entire function — being seen first — is destroyed by the stack, and the positional effect that governs desktop (P-132) does not exist here.
- **works-when**: mobile is a meaningful share of pricing-page visits.
- **fails-when**: buyers arrive knowing exactly which tier they want, where any ordering is fine.
- **observed-effect**: Lazyweb Research (July 2026) found badges on only **16.1% (41 of 255)** of mobile "All plans" screens versus 38.2% of pricing experiments overall, because mobile paywalls "often default to a single promoted plan rather than a labeled grid" — i.e. **the mobile-native pattern is pre-selection, not badging.** The ordering recommendation itself is `[unsourced — would need a mobile-specific A/B test of stack order]`.
- **evidence**: `medium` *(prevalence)* / the ordering rule is an inference
- **sources**: https://www.lazyweb.com/research/most-popular-badge-prevalence-pricing-pages (2026-07)
- **how-to**: Do not let CSS stack order decide. Explicitly order mobile cards with the promoted tier first, or pre-select it and let the buyer expand alternatives. Check where the CTA of the promoted card lands on a 667px-tall viewport, not on a desktop browser resized narrow.
- **example-copy**: n/a (structural)
- **worked-example**: Ledgerly's mobile stack runs **Solo (badged) → Books → Free-as-a-link**, inverting the desktop left-to-right order. The falsifier is instrumented: if mobile plan-mix shifts toward Books without a revenue gain, the pre-selection is steering wrongly.

### P-136 — Publish a price, or publish priced scenarios

- **layer**: `page-anatomy`
- **mechanism**: Withholding the price forces the visitor to spend the one resource they will not spend during evaluation — contact with a salesperson — so they resolve the uncertainty at a competitor's site instead. A buyer in the research phase needs a cost *level* to shortlist you, not a quote.
- **works-when**: B2B or considered purchases where the visitor is self-directed and alternatives are one search away; and complex configured pricing, where a scenario table substitutes for a number.
- **fails-when**: genuinely bespoke enterprise deals with no representative configuration, or where a published number would anchor low against a value-based negotiation. Commercially it also fails where sales insists on qualification-before-price — but the research says that costs you the shortlist.
- **observed-effect**: NN/g reports repeatedly observing participants "get frustrated and leaving sites that don't show prices" and "go to competitors' sites when websites do not show prices", and calls missing pricing "the most user-hostile element of most B2B websites". Complex pricing tools "proved complex, time-consuming, and error prone"; one participant preferred a simple table of prices for common shipment types over a calculator requiring ZIP codes and package specs. **Critically, NN/g publishes no sample size, no dates and no statistics for any of this** — L08 demoted the claim to `medium` for exactly that reason, and the widely quoted "price is the #1 information need" ranking is not a measured ranking (see Folklore).
- **evidence**: `medium` *(repeated qualitative observation across two NN/g articles, 2006 and 2013; never quantified. L17 rated this `strong`; L08's demotion to `medium` on the unquantified-claim grounds is the rating carried here.)*
- **sources**: https://www.nngroup.com/articles/show-price/ (2013-12-01) · https://www.nngroup.com/articles/show-prices-for-common-scenarios/ (2006-04-09)
- **how-to**: Put a number on the page even if it is a starting-at price, a range, or a per-seat rate. If you cannot publish an exact price, publish three to five named, recognisable customer scenarios each with a concrete total, named after the customer rather than after your tiers. Keep the calculator, but place it *below* the scenarios rather than in their place. Measure the counterfactual honestly: publishing price usually reduces lead count while raising lead quality.
- **example-copy**: "Starting at $21 USD per user/month" — GitHub Enterprise, 2026-08-12
- **worked-example**: Ledgerly has no enterprise tier and therefore no hidden price. The relevant application is the top-up: rather than "contact us for volume", the page states "$5 for 50 extra receipts" inline, so a buyer at 130 receipts can compute their own total without a conversation — one pack on top of Solo, $9 + $5 = **$14** that month. The published number has to be the one that survives the Phase 4.5 dominance check in `03-tier-architecture.md`: at $5 the pack prices receipts at $0.100 against Solo's $0.090, whereas $4 would price them at $0.080 and put the top-up below the plan rate it sits on top of.

### P-137 — Order the FAQ by blocking power, not by frequency

- **layer**: `page-anatomy`
- **mechanism**: A pricing FAQ is not documentation; it is the objection-handling half of a sales conversation rendered as text. Questions that gate the click belong first; questions asked after the decision belong last. Its position — below the cards and the table — is correct precisely because it answers second-order fear rather than first-order choice.
- **works-when**: you have real sales-call or support-ticket transcripts to mine.
- **fails-when**: the FAQ is used to paper over pricing the cards failed to explain. Four "which plan is right for me" questions mean the cards are broken and the FAQ is treating a symptom.
- **observed-effect**: An FAQ appeared on essentially every substantial pricing page in the 33-page census. Across **15 transcribed FAQs** the objection set is highly consistent, ranked by frequency: **reversibility/commitment** (present on nearly every page) → **which plan is right for me** → **hidden cost/overage** → **trial mechanics and auto-charge fear** → **billing mechanics** → **discount eligibility** → **security/compliance**. **No credible evidence that FAQ presence lifts conversion exists** — the circulating "15–25% lower exit rates" is fabricated (see Folklore). The FAQ is also a reliable X-ray of a pricing model: Notion's is 11-of-17 questions about billing mechanics (the signature of seat pricing at scale), Vercel's is 5-of-11 about usage overage (the signature of metered pricing), Figma's leads with "What is a seat?" (a novel unit that must be taught before it can be sold), and Linear publishes none at all (2026-08-12).
- **evidence**: `medium` *(for the objection taxonomy)* / **none** *(for any effect of FAQ presence)*
- **sources**: 33-page transcription 2026-08-12 · L11 teardowns 2026-08-12
- **how-to**: Order: cancellation and commitment → trial and auto-charge → overage and hidden cost → seats and billing mechanics → discounts → security. Cap it at five or six questions for a consumer-priced product; five honest answers beat seventeen procedural ones. Write each question in the customer's own anxious voice (P-157 in Layer 06), and read a competitor's FAQ as a list of the objections that cost them money.
- **example-copy**: "Could we really add 1000 users and still just pay $299/month total?" — Basecamp, 2026-08-12
- **worked-example**: Ledgerly's FAQ runs six questions in blocking order: "Can I cancel any time?" · "What happens if I go over 100 receipts?" · "Do you need my card to start?" · "Can I get my data out?" · "What happens to my receipts if I downgrade?" · "Do you support VAT invoices?" The overage question is second because Ledgerly meters, and metered products generate financial anxiety rather than administrative anxiety.

### P-138 — Put the guarantee and the proof where the objection fires

- **layer**: `page-anatomy`
- **mechanism**: Objections arise sequentially as the buyer descends the page — cost, then fit, then risk, then lock-in. A single trust block placed anywhere is either premature or too late for most of them. Reassurance adjacent to the element that provoked it keeps anxiety continuously suppressed; the same reassurance in a footer never reaches the moment it was built for.
- **works-when**: any page where the purchase carries perceived risk — a new brand, a recurring commitment, or data the buyer would lose on exit.
- **fails-when**: the proof competes visually with the CTA, or the list becomes long enough to read as protesting too much. The best-documented result in this cluster is about *toning proof down*, not adding more.
- **observed-effect**: GoodUI Pattern #15 "Bulleted Reassurances" is the most-tested pattern relevant to this layer — **18 tests** (12 measuring sales, 4 revenue, 9 progression) across checkout, product, landing and cart screens; medians `[paywalled — subscription required]`. Supporting published cases: Examine.com's pricing rebuild used bulleted reassurances as one of **7 grouped changes for +28% sales** (2018-01-03, **no sample size, no CI, no significance disclosed**); GoodUI datastory #20 "Six Reassurances For Higher Sales" reports **+17% paid accounts** (Covenanteyes.com, 4 variations, sample and significance paywalled). Counterweight: WorkZone converted customer logos beside a demo form from full colour to **black and white** and got **+34% form submissions, 22 days, 99% significance**, sample not published — proof that competes with the CTA can hurt. **On placement specifically — adjacent-to-CTA versus a separate band — no comparative test exists.** `[unsourced — would need a controlled test of proof adjacency on a pricing page]` In the 33-page census the guarantee appears in three positions: a page-level band (ClickUp), under the tier cards (Basecamp), and adjacent to the trial CTA (Semrush, Fathom); social proof appears either in the subhead above everything (Grammarly, Todoist, Linear) or as a band below the cards.
- **evidence**: `medium` *(strong pooled evidence that reassurance near the price helps; no evidence at all on which placement wins)*
- **sources**: https://goodui.org/patterns/15/ · https://goodui.org/blog/7-pricing-screen-ui-changes-for-28-sales-on-examine-com/ · https://vwo.com/blog/ab-testing-examples/ · 33-page transcription 2026-08-12
- **how-to**: Write down the three objections a buyer has at the instant they see the price and answer each within the price block — what is charged today, cancellation terms, and what happens to their data. Keep the proof visually subordinate to the CTA. Prefer one specific, current, checkable number over a logo wall you cannot honestly assemble. Where you can compute the share of customers on a tier, state it: Intercom "suggests that a particular plan was chosen by **53% of businesses**" (via Smashing Magazine, 2022-07, https://bfy.intercom.com/) is the substantiated version of a badge.
- **example-copy**: "There are no contracts, meaning you can cancel anytime (with a complete data export)." — Fathom Analytics, 2026-08-12
- **worked-example**: Ledgerly places two lines under each paid CTA ("No card to start. Cancel any time." / "Export everything as CSV whenever you like.") and one proof line under the card row. With 40 customers it cannot honestly write a count, so the proof line is bracketed: `[proof line — no honest number available at 40 customers; the first defensible claim is receipts processed to date, which requires a counter in the product]`.

### P-139 — Size the page to the price point and the device

- **layer**: `page-anatomy`
- **mechanism**: A long page asks the buyer to read before deciding; a short page asks them only to decide. Which is right depends on whether the objections genuinely need answering before a decision is possible — which is a function of price, considered-ness, and whether value was already established upstream.
- **works-when**: consumer mobile, low price point, impulse or habit purchase, and the value proposition already established during onboarding — cut hard. Or: B2B, high price, multiple stakeholders, procurement review — go long, and use P-133 to keep it navigable.
- **fails-when**: cutting a page whose price genuinely provokes objections you have now nowhere to answer; or going long on a $9/mo consumer product, where the length itself reads as a decision you are making difficult.
- **observed-effect**: Three RevenueCat consumer-app redesigns in the same direction, all long-form → short-form: driver's-licence prep app **ARPU +17.02%**; party game app **+31% install-to-trial, +64% revenue**; food app (long-form with 3 options, features, CEO note and FAQ → simplified with real App Store reviews) **+72% install-to-trial**. **None of the four RevenueCat redesign case studies publishes a sample size, a duration, or a significance level.** Platform caveat recorded in the same source: **Apple began rejecting apps using free-trial toggles in February 2026.** On desktop SaaS pricing pages specifically, **no controlled evidence of optimal page length exists** — see "Where this layer is thin".
- **evidence**: `medium` *(three independent consumer apps in the same direction, zero denominators; nothing at all for web SaaS)*
- **sources**: https://www.revenuecat.com/blog/growth/paywall-redesigns-case-studies/
- **how-to**: Decide the page's job first. If the buyer arrives already convinced, cut to plan, price, one line of value, one concrete piece of proof, and push everything else behind links. If the buyer arrives evaluating, keep the length but put the decision in the first two screenfuls (P-121) and everything else below. Do not import a mobile-app paywall's length onto a web pricing page or vice versa — the cohorts do not transfer.
- **example-copy**: n/a (structural)
- **worked-example**: Ledgerly at $9–$19 with a cold, self-serve buyer sits on the short side: fold, table (6 rows), one proof line, six FAQ questions, footer CTA. The FAQ is the only section that could grow, and it grows only when a real support ticket demands it.

### P-140 — Treat premium-first ordering as an ARPU lever with a conversion cost

- **layer**: `page-anatomy`
- **mechanism**: Leading with the most expensive plan makes it read as the recommendation and walks the buyer down a feature-loss gradient, which engages loss aversion. The positional effect is real and measurable — but it moves *mix*, and mix and volume can move in opposite directions.
- **works-when**: you are optimising revenue per visitor and can absorb slightly fewer total conversions.
- **fails-when**: you are optimising logo count, funnel volume, or a land-and-expand motion — a conversion loss is a real cost when the cheap tier is your expansion engine. It also fails on mobile, where the stacked layout destroys the positional effect entirely (P-135), and in right-to-left locales.
- **observed-effect**: GoodUI **Evidence #70** (uptowork.com, published 2017-01-02): reordering three plans from cheapest-first to most-expensive-first produced **"possible +14% increase to premium (most expensive plan) sales"** alongside a **"slight −1.1% decrease in overall sales"** (described as insignificant), netting a revenue gain. **GoodUI publishes no sample size and no confidence level for this test.** The parent pattern #17 "Least Or Most Expensive First" holds **7 tests** with medians `[paywalled — subscription required]`. Speero/CXL's lab study agrees directionally: participants "choose more expensive packages more often when they are listed first" (~139 participants, single stimulus, 2016). **The decisive counterweight: all 33 pages in the 2026 census order tiers cheapest-first, left-to-right. Premium-first is essentially absent from the market.**
- **evidence**: `anecdote` *(one published test, unpowered, plus one small lab study, contradicted by universal market practice)*
- **sources**: https://goodui.org/blog/evidence-70-least-or-most-expensive-plans-first/ · https://goodui.org/patterns/17/ · https://speero.com/post/pricing-page-optimization-how-to-order-pricing-plans-original-research · 33-page transcription 2026-08-12
- **how-to**: Treat this as a hypothesis to test on your own traffic, never as a best practice to adopt. Instrument **both** conversion rate and revenue per visitor — the entire finding is a trade between them, and reporting only one will mislead you. The published test would have been called a failure on a conversion-only dashboard while making more money. Re-test on mobile separately, because the positional mechanism does not survive the stack.
- **example-copy**: n/a (structural)
- **worked-example**: Ledgerly at 2,000 monthly visitors and 40 customers **cannot run this test**: detecting a 1.1% conversion change on that base needs traffic it does not have, and a +14% mix shift on a three-rung ladder is worth roughly a handful of dollars a month. The recommendation is to ship cheapest-first with the market, record premium-first as a queued hypothesis, and revisit it above roughly 300 paying customers.

### P-141 — Never redesign the whole pricing page in one jump

- **layer**: `page-anatomy`
- **mechanism**: A wholesale redesign changes dozens of things at once. If it loses you learn nothing about which change caused the loss; if it wins you cannot carry the learning forward. Redesigns also silently delete small elements that turn out to have been load-bearing, and the deleted element is almost always something nobody thought mattered.
- **works-when**: you have qualitative instrumentation — heatmaps, scrollmaps, session recordings — running alongside, so a loss is still diagnosable. And at genuinely low traffic, where bundling several changes is the only way to get an effect into detectable range (accepting that you will not know which change did the work).
- **fails-when**: the redesign is your only shot and you have no diagnostic layer — then a loss is a pure write-off.
- **observed-effect**: BigCommerce pricing page v1: **−4% trial conversion, −25% demo conversion**. Diagnosed via heatmaps and scrollmaps, which showed a small "Learn more" payment link had been deleted and that mobile users behaved differently; v2 then delivered **+15% trials, +45% demos**. No sample size, duration or significance published (VWO, accessed Aug 2026). Independent corroboration of the attribution problem: Microsoft's MSN Search Box test changed button size, button label and the treatment of "Popular Searches" simultaneously and produced an explicit statistical draw — "Neither variant was statistically significantly better than the other" (Kohavi et al., 2009). Base rate for calibration: at Microsoft, "only about one-third" of well-designed experiments improved their target metric.
- **evidence**: `medium` *(one detailed published loss-then-recovery plus an independent published null from bundled changes)*
- **sources**: https://vwo.com/blog/leverage-bad-ab-test-results/ · https://exp-platform.com/Documents/ExP_DMCaseStudies.pdf
- **how-to**: If a redesign is unavoidable, run it *with* heatmaps and session recording from day one and treat the first round as a diagnostic rather than a decision. Diff old and new element by element and list everything you removed. Then rebuild v2 as the old page plus only the changes the diagnostics support.
- **example-copy**: n/a (structural)
- **worked-example**: For Ledgerly the honest sequencing is: fix the ladder arithmetic first (Layer 03), then ship the fold rebuild (P-121, P-125, P-126) as one bundle because 2,000 monthly visitors cannot power anything smaller — with a scroll heatmap and session recording turned on before the change, so a loss remains diagnosable. Everything else waits.

## Interactions

**P-121 (fold) versus P-139 (length) versus P-133 (grouping).** These three pull against each other and the resolution is always the same: the *decision* compresses, the *reassurance* expands. Compressing objection-handling into the fold is the failure mode P-121 explicitly warns about; expanding the decision zone to fill a long page is the failure mode P-139 warns about. Decide which zone each element belongs to before deciding where it goes.

**P-131 (lawn-mower row scan) versus P-132 (r-shaped orientation scan).** Two eyetracking findings that appear to contradict each other and do not. NN/g's row-by-row scan is what happens when a user has *already committed* to cross-comparing several attributes; Speero's "r" sweep is the *orientation pass* that precedes it and that most users never leave. Design for both: the top band decides for the majority (P-132), the sticky headers and self-explanatory cells serve the minority who go deep (P-131). If you can only do one, do P-132 — more people stop there.

**P-130 (grid beats tiles) versus P-121 (fold) and P-133 (collapse).** GoodUI's table evidence argues for making absences visible; the fold rule argues for keeping the decision short. The separator is your ladder's shape: if tiers differ on discrete features, the grid does upsell work and earns its rows; if they differ on one usage axis, the grid manufactures differentiation and you should carry the difference in the cards instead. Ledgerly is the second case.

**P-127/P-128 (badge) versus Layer 09 (trust-proof) and Layer 03 (tier architecture).** The badge is a page-anatomy device but its *wording* is a truth claim owned by the trust layer — "Most popular" is falsifiable, "Recommended" is not. And a badge cannot rescue a ladder that fails the Phase 4.5 arithmetic; if a lower tier plus two top-ups reaches a higher tier's allowance, badging the higher tier is dressing a structural defect. **Structure before decoration, always.**

**P-140 (premium-first) versus P-127 (badge) versus P-135 (mobile).** Speero found the ordering and highlighting effects compound on plan selection — which means applying both at once makes the mix shift larger and the attribution impossible. Then P-135 removes the ordering mechanism entirely on mobile while leaving the badge in place, so a page running both is running two different experiments on two device classes. Split the read-out by device or you will average away the whole effect.

**P-124 (annual default) versus Layer 11 (expansion and retention) and Layer 07 (risk reversal).** An annual default converts at checkout and pays back at renewal; the conversion metric sees the first and never the second. Mojo's unquantified "minor increase in cancellations" is the exact shape of this blind spot. Any annual-default decision must carry a renewal-horizon falsifier, which is a Layer 11 concern, and it interacts with trial length — a longer trial on the annual plan (Headspace: 14 days annual, 7 days monthly) de-risks the commitment instead of discounting it, which is a Layer 07 instrument solving a Layer 05 problem.

**P-136 (publish a price) versus Layer 04 (price points).** Publishing a starting-at number anchors your negotiation range whether you intended to or not. The page-anatomy argument is that hiding the number costs you the shortlist; the price-points argument is that the published number *is* an anchor. Where they conflict — genuinely negotiated enterprise deals — publish a scenario rather than a floor, because a scenario anchors on a configuration rather than on a minimum.

**P-141 (no big-bang redesign) versus Layer 12 (experimentation) at low traffic.** The isolate-one-variable discipline is correct for learning and ruinous for shipping below a few thousand conversions. At COLD scale, bundling is the right call and P-141's requirement collapses to one thing: instrument the diagnostics *before* you ship, so a loss is still readable.

## Folklore

| Claim | Where it circulates | Traceable to | Verdict |
|---|---|---|---|
| A "most popular" badge on the middle tier increases selection of that tier by **30–40%** | leadsuitenow.com, attributed to "Conversion Rate Experts research" | No reachable study; Conversion Rate Experts has no published paper matching this | **Fabricated. Do not use a number for badge lift.** No badge-lift figure survives source-chasing anywhere in the public record |
| "Most popular" badges increase conversions by **30%** | wppricingtables.com | None — it is marketing copy for a WordPress plugin | **Untraceable** |
| Product badges increase conversion rates by **55%** | plumrocket.com | None | **Untraceable** |
| Trust badges increase conversion **15–30%** for unfamiliar brands | growth-engines.com | None | **Untraceable** |
| FAQ sections produce **15–25% lower exit rates** on pricing pages | leadsuitenow.com | None | **Untraceable. Invented-looking range.** There is no credible evidence that FAQ presence lifts conversion at all |
| Money-back guarantee increases sales **21%** and overall revenue **6.4%** | SPOTIO, leadsuitenow.com, multiple CRO blogs | Attributed to "Neil Patel"; no study, dataset or test writeup located | **Untraceable** |
| Hotjar's 2025 analysis of ~3,000 SaaS pricing pages found average pricing-page conversion **2.8%**, top quartile **6.5–12%** | leadsuitenow.com and a cluster of 2026-dated AI-written SaaS SEO posts; returned confidently by search answer boxes | **Nothing.** Hotjar's own pricing-page article (now redirecting to contentsquare.com) contains no such study and states a standard benchmark cannot be pinned down | **FABRICATED. The most-repeated pricing-page statistic that traces to no primary source.** A live citation-laundering loop |
| "Pricing Page Conversion Statistics 2026: A 4,200 A/B Test Study" | visionary-marketing.co.uk | No underlying dataset published | **Treat as fabricated until the dataset is shown.** The "we analysed N thousand tests" genre dated 2025–26 is overwhelmingly AI-generated |
| Users don't scroll — **80%** of attention is above the fold | Still quoted in 2020s design posts | NN/g's genuine **2010** finding (n=21, 1024×768). NN/g's own **2018** replication (n=120, 1920×1080) puts it at **57%** | **Superseded.** Quoting 80% today misrepresents the source's updated position |
| **Three tiers is optimal**; four or more causes decision paralysis | Near-universal in SaaS pricing advice, usually backed by the Iyengar & Lepper "jam study" | No controlled pricing-page experiment establishing an optimal tier count could be located. The jam study concerned 24 vs 6 jam varieties at a supermarket tasting booth — not tiers, not a funnel with prior intent. GoodUI's own pattern #113 "More Or Fewer Plans" sits at **10.7% of its 90% cumulative power target at 2% MDE from 3 tests** — by far the weakest pricing pattern in that library | **Best-practice folklore.** May well be right; is not evidenced. Treat as a hypothesis |
| "Price is the **#1 information need** on any website, including B2B" | Quoted everywhere as "NN/g research" | NN/g's article (Loranger, 2013-12-01) makes the claim from "numerous usability studies" and supplies **no sample size, no dates, no percentages** | **Real source, unquantified claim.** Citable as expert qualitative observation, not as a measured ranking |
| HubSpot increased Enterprise tier adoption by **27%** by testing premium features before bundling | getmonetizely.com | None | **Untraceable** |
| "**35%** of checkout abandonment is preventable" / "35% conversion increase from better checkout" | Ubiquitous, attributed to Baymard | Real Baymard figure (**35.26%**) but it is a **modelled ceiling** for "the average large-sized ecommerce site", not a measured average lift | **Real but routinely misstated** |

## Where this layer is thin

- **Scroll-depth data on pricing pages does not exist in the public record.** Searches return only analytics-vendor documentation explaining what the metric is (VWO, Plausible, Databox, Microsoft Clarity). No vendor has published aggregated pricing-page scroll benchmarks. This is the clearest single hole in this territory, and it undermines every confident claim about what "below the fold" costs you — including the confident version of P-121. The NN/g figures used here are general-web eyetracking, and pricing pages have unusual scroll characteristics: a decision zone at the top and a long reference matrix below.
- **Page length has no evidence at all for web pricing pages.** `[unsourced — would need a public A/B test of pricing-page length]` P-139 rests entirely on three consumer mobile-app paywall redesigns with no denominators, and mobile paywalls are not web pricing pages.
- **Social-proof placement — adjacent to the CTA versus a separate band — has never been tested comparatively.** Both are observed in the wild; neither has been measured against the other.
- **Billing-toggle default state has never been tested publicly.** Universal annual-defaulting is revealed preference, not evidence, and the counter-argument (annual default inflates checkout surprise for monthly-intent buyers) has never been measured.
- **Guarantee placement has no test.** And in subscription SaaS the guarantee has largely been displaced by trial plus cancel-anytime — only 1 of the 33 pages surveyed (ClickUp) offers an explicit money-back guarantee — so the question may be partly moot.
- **Whether the comparison table helps or hurts conversion is unknown.** NN/g establishes how people *scan* it; nobody has published whether its presence *converts* better. It is entirely plausible that long tables mainly serve a small procurement minority while adding scroll cost for everyone else.
- **Whether badges work at all, and by how much, is undocumented.** Prevalence is well-sourced (38.2%), but it is prevalence in a pool dominated by mobile paywall screens rather than desktop pricing pages, so even the prevalence figure transfers only as an analogy. Effect size is completely absent from public data, and every circulating number traces to a content farm. The badge's real value may be decision-*speed* rather than conversion — which is what the one real lab study actually measured.
- **Mobile pricing-page layout is a genuine void.** Baymard's mobile work is from 2013; both pricing-plan experiments are 2016 desktop eyetracking whose central finding — a positional left-to-right effect — cannot survive a vertical stack. Nobody has published what replaces it. Given mobile's traffic share this is the largest unexplored question in the layer.
- **Both real pricing-page experiments in the literature are lab studies from September 2016 on the same single stimulus page** (SurveyGizmo's), with 30–140 participants. Everything else in the "pricing page CRO" genre is extrapolated from e-commerce checkout research, extrapolated from general landing-page benchmarks, or invented. That vacuum is precisely why the Folklore table above is so long.
- **A solo founder at ~2,000 monthly visitors cannot learn any of this from their own traffic.** Detecting the −1.1% in P-140 would take years. The honest posture at that scale is to adopt the usability-mechanism patterns as priors, instrument scroll depth and plan-mix so the questions become answerable later, and spend experimental budget on packaging and plan visibility, where published effect sizes are an order of magnitude larger than anything in this layer.
