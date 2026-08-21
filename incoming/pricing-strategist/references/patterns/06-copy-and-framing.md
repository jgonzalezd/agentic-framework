# Layer 06 — Copy and framing

**Layer slug:** `copy` · **Loaded at:** Phase 6

This layer governs the words: what the headline is spent on, what job the subhead is given, what the tiers are called and how the "who this is for" line is written, how a saving is expressed, what the button says, what sits under the button, how a metered feature is named, how the FAQ question is voiced, and how the price is argued for against whatever the buyer would otherwise do. `05-page-anatomy.md` decides where the elements go; this layer decides what they say. The thing that goes wrong most often is that the page describes the *product* in every slot — a headline that names the software, a descriptor that is a taxonomy of company sizes, a feature row that states a credit allowance — so that a visitor who already knows what the product is learns nothing new anywhere on the page and leaves with the same doubt they arrived with. The second most common failure is register: importing a direct-response mechanism together with the barker's voice it was written in, which converts the visit and taxes the relationship (P-166).

## How to use this layer

Read **P-142 first and alone**. It decides which of the other patterns even apply, because it fixes where price belongs relative to the buyer's awareness, and a page that gets that wrong cannot be rescued by better sentences. Then **P-143 → P-147** (headline, subhead, denominator, tier names, tier descriptors) — these are load-bearing and they are written in that order, because each answers the question the previous one raised. **P-148 → P-151** (savings expressions) are situational: skip the whole block if you have no annual term. **P-152 → P-158** (feature naming, CTA, microcopy, FAQ voice) are the highest-yield cheap edits on most pages and can be shipped independently of everything else. **P-159 → P-165** are the price-justification block and only matter where the buyer has a live alternative in mind — which, for a consumer product, is usually *doing nothing* (P-161). **P-166 and P-167 are register patterns, not tactics**; read them before you borrow a single line from the direct-response canon.

In a **COLD** regime nothing here can be A/B tested, so take the patterns whose mechanism is a comprehension or usability finding (P-142, P-145, P-152, P-157) over the ones whose mechanism is a persuasion claim (P-154, P-159, P-162) — the first group is free and the second group is a bet. In **HOT**, P-154 is the only pattern in this layer with even a secondary published effect range, and it is weak enough that you should treat your own test as the first real evidence.

**The copy bank below the patterns is the point of this file.** It is a verbatim, attributed transcription of what 33 live pricing pages actually said on 2026-08-12. Read the slot you are writing before you write it. Every worked example in this layer is fictional; every quoted string in the bank is real.

## Patterns

### P-142 — Let the awareness stage decide where the price appears and what it is compared to

- **layer**: `copy`
- **mechanism**: Schwartz's ladder: "the more aware your market, the easier the selling job, the less you need to say." A price is a piece of information that only becomes useful once the buyer has accepted that they have a problem and that a category of solution exists. Shown earlier than that, a number does not persuade — it creates resistance against a purchase the reader had not yet contemplated. Shown later than that, it is friction against a buyer who arrived ready to pay.
- **works-when**: you know your traffic mix, or can segment the pricing page by referrer or campaign, so you know which rung the majority of arrivals are on.
- **fails-when**: traffic is heterogeneous and you write for the average — you then serve nobody, which is the single most common pricing-page failure. It also fails when applied as an excuse to hide the price from most-aware buyers: the ladder says price is *absent* at problem-aware, not that price should be hard to find on a page called "Pricing".
- **observed-effect**: `no quantified effect published`. Schwartz's framework has no published effect size anywhere in the literature; the stage-by-stage pricing placement below is practitioner inference (LeadGen Economy, n.d., accessed 2026-08) rather than a tested result.
- **evidence**: `medium` *(a structural doctrine with a clear causal story and a century of practitioner adoption; zero measurement)*
- **sources**: https://www.leadgen-economy.com/blog/five-stages-awareness-lead-generation/ · https://betweenthelinescopy.com/blog/stages-of-awareness/ · https://www.motiveinmotion.com/market-sophistication/
- **how-to**: Map the five rungs onto price treatment. **Unaware** — price absent; the page is diagnostic content and does not belong on a pricing URL. **Problem aware** — price absent; substitute the *cost of inaction*, quantified in the buyer's own units (hours, repetitions, missed occasions), not in dollars. **Solution aware** — price appears *comparatively*, positioned against the category, with no detailed tier table yet. **Product aware** — price prominent, and the price objection answered in the open with FAQ, guarantee and proof. **Most aware** — bare price, obvious CTA, no educational copy at all. Then structure the single page as a descending funnel: most-aware at the top, product-aware in the middle, solution-aware at the bottom. Stages 1–2 belong upstream. This resolves the long-versus-short argument permanently — the page is long but front-loaded, so length costs the ready buyer nothing.
- **example-copy**: Problem-aware register, cost-of-inaction instead of price: "Cheaper than downtime" — Incident.io, via Copyhackers 2025-03
- **worked-example**: Ledgerly's pricing URL is reached three ways. Search traffic on "receipt scanner app" arrives solution-aware, so the bottom of the page carries a comparison against a spreadsheet and against a bookkeeper's hourly rate. In-product upgrade prompts arrive most-aware, so the fold is name, price, button, nothing else. Blog traffic on "how to categorise expenses for a tax return" arrives problem-aware — and that traffic is sent to the blog post's own CTA, not to the pricing page, because a number is the wrong thing to show someone still deciding whether the problem is worth solving.

### P-143 — Spend the headline on the outcome unless your pricing model is the objection

- **layer**: `copy`
- **mechanism**: The headline is the only element every visitor reads. Spending it on the word "Pricing" tells the visitor something the URL already told them. Spending it on the outcome re-establishes why the price is worth paying in the instant before the price is shown, which is the only moment on the page where that argument still has leverage. The exception is a value metric the buyer does not recognise: when the mechanic is the objection, explaining the mechanic *is* the outcome work, because a buyer who cannot predict their bill will not click regardless of how good the outcome sounds.
- **works-when**: your pricing model is conventional (per-seat, three nested tiers) and self-evident from the cards, so the mechanic needs no explanation and the slot is free.
- **fails-when**: your value metric is unusual — per-channel, per-pageview, per-outcome, per-credit — where an outcome headline leaves the real objection unanswered and the buyer resolves it by leaving. Also fails when traffic arrives from inside a product they already use with intent fully formed; there the bare label is honest and the outcome pitch is noise.
- **observed-effect**: Census of **33 live pricing pages fetched 2026-08-12**: **outcome framing 10 of 33 (~30%)** — the largest single group (Notion, Miro, GitHub, Grammarly, Shopify, Framer, Kit, Buffer, Fathom, monday.com); **routing/selection framing 7 of 33 (~21%)** (Asana, Calendly, Figma, Basecamp, Loom, Slack, Airtable); **bare label 8 of 33 (~24%)** (Linear, Ahrefs, Semrush, Todoist, Descript, 1Password, Typeform, Vercel); **mechanic framing ~3** (Buffer, Fathom, Intercom). Companies with an unusual value metric spend the headline on the mechanic. **No public controlled test isolating pricing-page headline framing could be located.**
- **evidence**: `medium` *(census of revealed preference, not a controlled test)*
- **sources**: 33-page transcription 2026-08-12 (see copy bank)
- **how-to**: Write the headline as the sentence the buyer would use to justify the purchase to someone else — a colleague, a spouse, an accountant. Reserve routing language ("pick the plan that fits") for the subhead, where it costs nothing. Use a bare "Pricing" label only if you can name the in-product surface your traffic arrives from. If your value metric is one a competitor does not also use, write the mechanic instead and put the outcome in the subhead.
- **example-copy**: "One tool to run your company." — Notion, 2026-08-12 · "Only pay for the channels you use" — Buffer, 2026-08-12
- **worked-example**: Ledgerly meters receipts, which is a metric the buyer already counts — a freelancer knows roughly how many receipts a month they have. So the mechanic is self-evident and the headline goes to the outcome: "Your shoebox, filed." The subhead then does the routing.

### P-144 — Give the subhead a different job from the headline

- **layer**: `copy`
- **mechanism**: The headline and subhead occupy a single attention unit — they are read as one gesture. If both sell the outcome, the second is wasted, and it is the more expensive waste because the subhead is the last free line before the price. The subhead's job is to answer the question the headline just provoked, which for a cold visitor is almost always "what does it cost me to find out?" and for a warm one is "why should I believe you?".
- **works-when**: always. The pattern is about non-duplication, not about a specific job.
- **fails-when**: never as a rule, but the *choice* of job goes wrong routinely. De-risk framing on a brand the buyer already trusts wastes the slot; proof framing on a brand nobody has heard of is a claim rather than a reassurance and lands as boasting.
- **observed-effect**: In the 33-page census (2026-08-12), de-risking is the most common subhead job. **Three pages use the subhead purely for social proof** — Grammarly, Todoist and Linear — which is a specific and legible bet that credibility rather than comprehension is their blocker at that moment. No causal test of subhead framing located.
- **evidence**: `medium`
- **sources**: 33-page transcription 2026-08-12
- **how-to**: Name the headline's job out loud (outcome / mechanic / routing / label). Then pick a *different* one for the subhead from: route, de-risk, prove, explain the mechanic. If the headline was a bare label, the subhead is obliged to do the outcome work the headline skipped. Read the two lines aloud in sequence; if the second could be deleted without the reader losing information, it has not been given a job.
- **example-copy**: "Or start with the basics for free, and upgrade at any time." — Slack, 2026-08-12
- **worked-example**: Ledgerly's headline "Your shoebox, filed." is outcome. The subhead therefore de-risks and routes in one line: "Start free with 5 receipts a month. Upgrade when the shoebox gets deep." With 40 customers it cannot honestly do the proof job, so the proof slot is left empty rather than filled with a number that would not survive being checked.

### P-145 — Answer the two denominator questions next to the price

- **layer**: `copy`
- **mechanism**: The value equation is `Value = (Dream Outcome × Perceived Likelihood) ÷ (Time Delay × Effort and Sacrifice)`. Founders reflexively work the numerator — bigger promise, more features — because that is the half the product controls. But because the denominator *divides*, improvements there are non-linear, and because pricing pages are almost universally silent on both denominator terms, the improvement is available for free. "How long until this works" and "how much do I have to do" are the two unspoken questions a pricing page essentially never answers, and answering them costs two sentences and no product change.
- **works-when**: the product genuinely delivers a fast first win, or genuinely requires little of the buyer, and the page has simply never said so. This is the common case.
- **fails-when**: time-to-value is genuinely long or effort is genuinely high. Claiming otherwise buys a refund and a review rather than a customer, and for a metered product it buys them in month one. Also fails when the sentences are written as marketing superlatives ("get started in seconds!") rather than as a specific, checkable claim.
- **observed-effect**: `no quantified effect published`. Hormozi's stated claim of a 2.5× response rate from the same ad spend with a better offer is a book assertion with no published test — see Folklore. The scoring discipline below is a diagnostic, not a measured intervention. One adjacent, real observation: **16Personalities leads with the time cost before any mention of money** — "Only 10 minutes to get a 'freakishly accurate' description of who you are and why you do things the way you do." (observed 2026-08-12) — which is the denominator's Time Delay term used as the headline promise.
- **evidence**: `anecdote`
- **sources**: https://wisewords.blog/book-summaries/100m-offers-book-summary/ · https://www.supersummary.com/100m-offers/summary/ · L14 teardowns 2026-08-12
- **how-to**: Score all four slots 1–5 using only what a stranger can see on the page — score the perception the page creates, not the truth about the product, because a product that works in three days and never says so scores a 1 and deserves it. Find your lowest denominator score. Write one sentence that lowers Time Delay (name the first-win moment, ideally same-session) and one that lowers Effort (state what the buyer has to do, and name the residual honestly). Place both immediately adjacent to the price, not in a features section, because the denominator's job is to be read in the same glance as the number. Where the time cost is genuinely small, promote it above the price entirely.
- **example-copy**: "Only 10 minutes to get a 'freakishly accurate' description of who you are and why you do things the way you do." — 16Personalities, 2026-08-12
- **worked-example**: Ledgerly's Solo card carries two lines under the price: "Your first receipt is filed about ninety seconds after you sign up." and "You photograph the receipt. That is the whole job — there is nothing to install and no chart of accounts to set up." Neither required a product change. The falsifier is instrumented: if median time-to-first-filed-receipt for new signups exceeds five minutes, the first sentence is a lie and comes down.

### P-146 — Name tiers for self-identification, not for status

- **layer**: `copy`
- **mechanism**: A tier name is the first routing device on the card and it is read before the descriptor and before the price. A name drawn from the buyer's own vocabulary for themselves ("Hobbyist", "Creator", "Personal") lets them locate their row instantly; a name drawn from a generic status ladder ("Premium", "Gold", "Pro") forces a comparison, because status ladders only have meaning relative to each other and therefore have to be decoded from the prices. The status ladder also carries a cost that is invisible in a conversion test: nobody wants to click the button that calls them casual, so a status name at the bottom of the ladder makes the cheap tier faintly humiliating and pushes some buyers out of the funnel rather than up it.
- **works-when**: the tiers genuinely map to distinguishable people or jobs to be done.
- **fails-when**: the tiers are actually usage-limit variants of one product. Then identity names are fiction, the buyer cannot find themselves in any of them, and honest volume names ("100 receipts", "400 receipts") beat invented personas. Also fails where a category convention is strong enough that deviating costs orientation — in developer tooling, "Hobby / Pro / Enterprise" is a shared vocabulary and inventing your own names spends attention.
- **observed-effect**: `no quantified effect published`. Across the 33-page census (2026-08-12) four naming families are in use: **conventional ladder** (Slack: Free/Pro/Business+/Enterprise+; Notion: Free/Plus/Business/Enterprise; Vercel: Hobby/Pro/Enterprise), **audience-named** (Asana: Personal/Starter/Advanced/Enterprise; Kit: Newsletter/Creator/Pro; Descript: Hobbyist/Creator/Business/Enterprise), **job-named** (Shopify: Basic/Grow/Advanced/Plus; Intercom: Essential/Advanced/Expert), and **capability-named rather than tiered** (1Password: Unified Access / Enterprise Password Manager / SaaS Manager / Privileged Access / Device Trust). No controlled test of naming families located anywhere in the public record.
- **evidence**: `anecdote`
- **sources**: 33-page transcription 2026-08-12 · https://copyhackers.com/2025/03/saas-pricing-page-checklist/ · L13 teardowns 2026-08-12
- **how-to**: Write the sentence "I'm on the ___ plan" in the buyer's voice and see whether it is something a person would say about themselves without wincing. Prefer a noun the buyer already uses for their own role over an adjective ranking them. If your ladder is a volume ladder, name it by volume and stop pretending. And check the bottom rung specifically: the cheapest name must not be a demotion, because a ladder whose base insults the buyer produces abandonment where you wanted an upgrade.
- **example-copy**: "Newsletter" / "Creator" / "Pro" — Kit, 2026-08-12 · "Hobbyist" / "Creator" / "Business" / "Enterprise" — Descript, 2026-08-12
- **worked-example**: Ledgerly's rungs are Free / Solo / Books. "Solo" is what the buyer already calls themselves; "Books" names the job (doing your books) rather than ranking the buyer. The rejected alternative was Free / Pro / Premium, which would have made the $9 plan the second-best thing a freelancer could be.

### P-147 — Write the tier descriptor as a promise about the buyer's life, not a taxonomy of the software

- **layer**: `copy`
- **mechanism**: The descriptor is the most under-used line on a pricing page and the one that does the most work per word, because it converts the card from a price list into a routing device — a visitor can eliminate two of four tiers without reading a single feature. But there are two very different things people write in that slot. "For growing businesses to streamline teamwork" is a taxonomy: it tells the buyer which bucket they are in. "Fly through your inbox and save 4 hours every single week" is a promise: it tells the buyer what changes. At consumer and prosumer price points nobody is comparing feature matrices, so the taxonomy answers a question the buyer is not asking.
- **works-when**: tiers map to identifiable buyer segments, and you can name a specific outcome for each. Best when the promise is specific enough to be falsified.
- **fails-when**: tiers differ only by a usage quantity, where a descriptor is redundant filler and the number should lead. And the promise version fails hard when it is generic — a vague promise is strictly worse than an honest taxonomy, because the taxonomy at least routes.
- **observed-effect**: `no quantified effect published`. Present on the large majority of the 33-page census (2026-08-12). **Asana, Miro, Notion and Calendly write descriptors as complete sentences naming both the buyer and the job.** The contrast is sharpest between two pages in the same cohort: Notion writes "For growing businesses to streamline teamwork." where Superhuman writes "Fly through your inbox and save 4 hours every single week." in the identical slot (L11 teardowns, 2026-08-12). No controlled test of descriptor framing located.
- **evidence**: `anecdote`
- **sources**: 33-page transcription 2026-08-12 · L11 teardowns 2026-08-12 · https://copyhackers.com/2025/03/saas-pricing-page-checklist/
- **how-to**: Use one of four formulas: "Best for [persona]"; "For [persona] looking to [job]"; action verb plus functional job; or desired outcome plus main capability. One line, under the plan name, above the price. Then run the cover test: hide every feature list on the page and ask whether a reader can still pick their tier. If they cannot, the descriptors are decoration and the page is doing no routing at all. Where you can make the promise falsifiable — a number of hours, a specific artefact — do, because a falsifiable promise is the only kind that gets believed.
- **example-copy**: "For growing teams that need to track their projects' progress and hit deadlines." — Asana Starter, 2026-08-12 · "Fly through your inbox and save 4 hours every single week" — Superhuman Business, 2026-08-12
- **worked-example**: Ledgerly's three descriptors: Free — "For trying it on last month's receipts."; Solo — "For a freelancer who files their own quarterly expenses."; Books — "For a freelancer with an accountant who wants the year already sorted." Each names a person and a job. The Books line is the only one that names a second human being, which is deliberate: the accountant seat is the feature the tier exists for.

### P-148 — Express the annual saving twice: percentage at the toggle, currency at the card

- **layer**: `copy`
- **mechanism**: A percentage scans fast and applies to everything, so it belongs on the toggle, which is a single global control. An absolute figure is exact and belongs on the card, where it justifies a specific commitment. Each unit fails alone at some price point — "save 17%" is meaningless on a $5 plan, "$78" is meaningless beside a $790 plan — but a page that carries both guarantees that at least one of them feels material at whatever price the reader is looking at.
- **works-when**: the discount varies by tier, which is exactly the situation that forces the "up to" hedge and is also the situation dual expression solves.
- **fails-when**: the saving is trivial in both units — then say "2 months free" instead (P-149). It also fails if the two figures disagree: a percentage on the toggle that does not reconcile with the currency figure on the cheapest card is a false claim, not a rounding difference.
- **observed-effect**: `no quantified effect published`. In the 33-page census (2026-08-12), **percentage-only is the most common single approach (13+ of 33 pages), and 8 of those hedge with "up to"** — Notion, Asana, Squarespace, ClickUp, Descript, Loom, Miro and Semrush all hedge, because the discount differs per tier. **Kit and Typeform run the dual expression simultaneously**: Kit's toggle says "Pay yearly—save 17%" while its cards say "Save $78 per year" and "Save $158 per year"; Typeform's toggle says "Yearly (Save 30%)" with per-tier figures "$132/yr", "$276/yr", "$456/yr". No controlled comparison of savings-expression framings exists in the public record.
- **evidence**: `medium` *(prevalence and a clear mechanism; no test)*
- **sources**: 33-page transcription 2026-08-12
- **how-to**: Put the percentage on the toggle where it applies to everything; put the currency figure on each card where it is exact. If your per-tier discounts differ, the toggle must say "up to" or you are making a false claim on the cheapest tier — and understand that "up to" costs you most of the number's force, which is a reason to equalise the discount across tiers rather than a reason to drop the hedge.
- **example-copy**: Toggle "Pay yearly—save 17%" with card "$390 billed yearly—Save $78 per year" — Kit, 2026-08-12
- **worked-example**: Ledgerly prices annual at ten months on both paid rungs, so the discount is identical across tiers and the toggle needs no hedge: "Pay yearly — save 17%". Solo's card then reads "$90 billed yearly — save $18 a year". At $18 the currency figure is the weaker of the two, which is the signal to switch that card to the months framing (P-149).

### P-149 — Prefer "N months free" when the percentage is unimpressive

- **layer**: `copy`
- **mechanism**: "Two months free" is a concrete, unit-free benefit that reads identically well at $5 and at $500, and it converts a ~17% discount into something that sounds like a gift rather than a rounding error. There is an adjacent behavioural finding that "free" is processed differently from a discount of equal or greater value, though the specific experiment usually cited for it is secondary-sourced and belongs in Folklore rather than in this pattern's evidence.
- **works-when**: your annual discount sits in the 15–20% band, which maps almost exactly onto two months free, and the annual price is genuinely ten months' price so the claim is literally true.
- **fails-when**: discounts above roughly 25%, where the percentage is genuinely impressive and burying it inside a months count throws away the bigger number. Also fails when the arithmetic is fudged — "two months free" on an annual price of 10.5 months is a checkable lie and the buyer with a calculator is exactly the buyer considering annual.
- **observed-effect**: `no quantified effect published` for the framing comparison. Used by **Fathom** ("Pay yearly instead (2 months free)"), **Buffer** ("$60 billed yearly (save 2 months)") and **ElevenLabs** (annual option at "two months free") in the 33-page census, 2026-08-12. Note the split within the pattern: Buffer states it as a *saving* and Fathom as a *gift*, and no test distinguishes them. The wider claim that "50% more free" outsold a mathematically superior "35% off" by 75% more units is secondary-sourced to a University of Minnesota study that could not be located at primary level — see Folklore.
- **evidence**: `anecdote`
- **sources**: 33-page transcription 2026-08-12 · https://www.referralcandy.com/blog/free-shipping-vs-percentage-discount-which-drives-more-sales-in-2026
- **how-to**: Compute your annual discount as a months-equivalent. If it lands on a clean integer and the percentage is under about 20%, use the months framing. Set the annual price at exactly ten months so "two months free" is literally true rather than approximately true, then still show the monthly-equivalent number on the annual plan so the buyer can compare like with like without doing arithmetic.
- **example-copy**: "Pay yearly instead (2 months free)" — Fathom Analytics, 2026-08-12
- **worked-example**: Ledgerly's $18 annual saving on Solo is trivially small in currency and unremarkable as 17%. As "two months on us" it is a benefit the reader can picture. The card therefore reads "$90 a year — two months on us", with "$7.50/month, billed annually" beneath it.

### P-150 — Denominate the annual price in monthly units, and never multiply the monthly price up

- **layer**: `copy`
- **mechanism**: A subscription decision is made in a mental account whose unit is the month. Displaying the annual commitment as a yearly total forces the buyer to convert before they can compare, and the conversion itself makes the number feel large. Dividing the big number down puts both plans on one axis where annual wins by a wide margin. The asymmetry is the whole point and it is deliberate everywhere it appears: nobody multiplies the monthly plan up to its yearly total, because that would put both plans on one axis where *neither* looks cheap.
- **works-when**: the subscription is the primary purchase decision and the annual term carries a real discount.
- **fails-when**: the large commitment was already extracted elsewhere. Where hardware or a setup fee was the real decision, pushing annual reopens a settled objection — Oura's annual saves **2.6%** and its hero CTA quotes the *monthly* price, which is the counter-example that defines the boundary. It also fails when the divided figure is presented *instead of* the total rather than alongside it, which is the cost-transparency failure that produces checkout surprise.
- **observed-effect**: **5 of 7 consumer subscriptions surveyed denominate annual in monthly units** (Headspace, Strava, Blinkist implicitly, Whoop by year-only, Calm per 2023 reporting) — Strava shows "$6.67/month" with "$79.99/year + tax" as fine print; Headspace shows "$5.83 USD/month" against a $12.99 monthly plan (L13 teardowns, observed 2026-08-12; six of the seven pages resisted direct fetch and some figures are secondary — see that lane's caveats). **No page in either the 7-page consumer sample or the 33-page SaaS census displays a monthly plan's annualised total.** No controlled test of denomination exists in the public record. Related and separately sourced: Noom shows "12 months $209 average monthly cost $17.42"; Rosebud shows "$107.99/yr" as "$8.99/mo"; Strava divides twice, by term *and* by household, to reach "$2.92/mo. per person" (L14/L13 teardowns, 2026-08-12).
- **evidence**: `medium` *(near-universal practice with an obvious mechanism; no test)*
- **sources**: L13 teardowns 2026-08-12 · L14 teardowns 2026-08-12 · 33-page transcription 2026-08-12
- **how-to**: Show the monthly-equivalent as the large number and the annual total as the qualifier immediately beneath it, legible rather than hidden — "$7.50/month, billed annually ($90)". Never publish the monthly plan's annual total. If you divide by a second axis (per seat, per household member), divide honestly and keep the total visible in the same block, because a number divided twice with the total suppressed is the shape of a deceptive price.
- **example-copy**: "$10.99 per user, per month billed annually" — Asana, 2026-08-12
- **worked-example**: Ledgerly's annual Solo card leads with "$7.50" and qualifies with "per month, billed annually — $90". The $9 monthly rate sits beside it as a live struck-through reference. The page never shows "$108 a year" for the monthly plan, and the deliverable states that omission explicitly so it reads as a decision rather than an oversight.

### P-151 — State the renewal price inside the discount disclosure

- **layer**: `copy`
- **mechanism**: The fear behind trial and intro-offer hesitancy is not the price — it is being charged a price you did not agree to at a time you did not expect. Naming the renewal amount, the renewal interval and the cancellation route inside the same sentence as the discount converts the offer from a trap the buyer must track into a term they have already read. This is the one place in the whole copy layer where the best-documented result came from *more* disclosure rather than less.
- **works-when**: you run an intro price, a promotional rate, or a trial that auto-converts — i.e. any offer whose displayed price is not the price the buyer will pay in month two.
- **fails-when**: there is no discount to disclose, where adding renewal language to a flat price manufactures an anxiety that was not there. It also fails if the disclosure is technically complete but written in terms-of-service register; the sentence has to be readable at a glance or it reads as fine print, which is worse than silence because fine print signals something to hide.
- **observed-effect**: **Blinkist** discloses inline: "By proceeding you accept that $139.99 is processed as an intro offer, then $174.99 will be billed every 12 months automatically. You can cancel anytime in your Settings." Growth.Design measured the underlying principle — a paywall whose only job became addressing the fear of being charged — at **+23% trial signups, push-notification opt-ins 6% → 74%, complaints −55%** (via L13 teardowns, 2026-08-12; **Growth.Design publishes no sample size, duration or significance for this case, and the observation is undated in the secondary source**). In the 33-page SaaS census every promotional anchor carried a footnote marker, but only Slack's "50% off for 3 months*" states the duration in the offer line itself.
- **evidence**: `medium` *(one measured case, no denominators, plus consistent adjacent practice)*
- **sources**: L13 teardowns 2026-08-12 · 33-page transcription 2026-08-12
- **how-to**: Write one sentence with four facts in it: what is charged now, what is charged at renewal, how often, and where to cancel. Put it under the button, not behind an asterisk. Then extend the same logic to the trial calendar — Duolingo renders the trial as dated events ("Today / Day 5 / Day 7") including "Day 5: Get reminded when your trial is about to end", which converts your billing terms from a threat the buyer must track into a promise you make. Ship the reminder email before you ship the copy claiming it exists.
- **example-copy**: "By proceeding you accept that $139.99 is processed as an intro offer, then $174.99 will be billed every 12 months automatically. You can cancel anytime in your Settings." — Blinkist, observed 2026-08-12
- **worked-example**: Ledgerly runs no intro price, so most of this pattern does not apply — and the deliverable says so. What it does adopt is the trial-calendar half: under every paid CTA sits "$0 today. We email you two days before the first charge." with the email actually built, because a promised reminder that does not arrive is the single most expensive line on a pricing page.

### P-152 — Name features in consequences, not credits

- **layer**: `copy`
- **mechanism**: NN/g's comparison-table eyetracking identified "unexplained jargon" as one of three specific things that disrupt the scan. The mechanism is simple: a buyer who cannot convert "50K credits per billing account per month" into anything they recognise gets no decision information from that row, so the row lengthens the table without shortening the decision. Metered AI entitlements are the worst current offender because the unit is both novel and arbitrary — the buyer has no prior at all for what a credit buys.
- **works-when**: always, but most urgently for usage-metered features and for any limit the buyer will actually hit.
- **fails-when**: technical buyers who genuinely transact in the raw unit — API rate limits, bandwidth, build minutes — where the plain-language gloss is patronising and the number is the information. Show both there rather than replacing one with the other.
- **observed-effect**: NN/g (Kate Moran, 2020-12-13) names **excessive table length, unexplained jargon, and placeholder content** as the three disruptors of the lawn-mower scan; the remedy list is "fixed headers, self-explanatory cells, and elimination of repetitive or placeholder content". **This is a usability finding; no conversion effect published.** Across the 33-page census (2026-08-12) credit entitlements are the single worst jargon offender: "AI Studio Basic w/50K credits per billing account per month" (Asana), "$0.001 $10 per 10,000 credits" (ClickUp), "Convert: $50 per 500,000 events" (Framer). The contrast case is Miro's free-tier limit written as a plain consequence: "Create and share unlimited boards. Three most recent ones will remain editable".
- **evidence**: `medium` *(direct eyetracking research on the scanning mechanism; the conversion consequence is an inference)*
- **sources**: https://www.nngroup.com/articles/lawn-mower-pattern/ · 33-page transcription 2026-08-12
- **how-to**: For every metered unit, write the plain-language equivalent beside it — "500 credits (about 40 receipts)" — and put the equivalent first if the buyer is not technical. For every limit, state in the same cell what happens when it is hit, because an unqualified limit is read as a cliff and a cliff is an objection. Then delete every row that is identical across all tiers; those rows carry no decision information and lengthen the scan that the jargon was already damaging.
- **example-copy**: "Create and share unlimited boards. Three most recent ones will remain editable" — Miro Free, 2026-08-12
- **worked-example**: Ledgerly's table never writes "100 OCR credits". It writes "100 receipts a month — about five a week", and the overage row reads "Past 100, receipts queue until next month, or add 50 for $5" rather than "overage applies". The second half of that sentence is what stops the limit reading as a cliff.

### P-153 — Differentiate the sales-assisted CTA from the self-serve CTA

- **layer**: `copy`
- **mechanism**: A CTA is a prediction about the next screen. "Get started" on a tier that actually opens a lead form promises self-service that does not exist, and the buyer discovers the mismatch after committing a click — which produces an abandoned form and a first impression of a company that misrepresents small things. Naming the motion in the verb keeps the prediction accurate at zero cost.
- **works-when**: any page carrying both self-serve and sales-led tiers.
- **fails-when**: never, in the sense that the differentiation itself is always right. The failure available here is a different one: dressing a *self-serve* tier in sales language, which some founders do to seem more substantial and which converts a click into an email exchange nobody wanted.
- **observed-effect**: **Unanimous across all 33 pages in the census (2026-08-12)** — every multi-tier page differentiates the enterprise CTA from the self-serve CTAs. This is the single strongest regularity in the entire dataset. Observed variants: "Contact Sales" / "Contact sales" (Notion, Slack, Figma, Linear, GitHub, Grammarly, Asana, Calendly, Airtable, Miro, Typeform, Descript, Loom, Mailchimp, Intercom), "Talk to sales" (Ahrefs, Descript), "Let's talk" (Semrush), "Let's Talk" (Loom), "Get a quote" (monday.com), "Get a custom demo" (ClickUp), "Request a quote" (1Password), "Book demo" (Airtable), "Request demo" (Semrush), "Request a demo" (Mailchimp), "Get a demo" (Intercom), "Contact us" (Fathom, ElevenLabs). **No conversion test of CTA differentiation located** — the evidence is unanimity of practice, not measured effect.
- **evidence**: `medium` *(near-universal practice across a full census, but the census is a single internal, non-public transcription by one organisation, and one organisation's observation cannot carry `strong`; note also that it is evidence of convention, not of effect — no test exists)*
- **sources**: 33-page transcription 2026-08-12
- **how-to**: Pick the verb that accurately describes the next screen. "Contact sales" for a form, "Book demo" for a calendar, "Get a quote" for a pricing request. Never dress a sales motion in self-serve clothing. And if you have no sales motion, do not ship an empty "Contact us" column — for a solo founder an unstaffed enterprise tier signals a company that is not there, which costs more than the tier could earn.
- **example-copy**: "Get a quote" — monday.com Enterprise, 2026-08-12
- **worked-example**: Ledgerly has no sales-assisted tier and ships none. The pattern applies in the negative and the deliverable records it: the top-up pack's button reads "Add 50 receipts — $5" rather than "Learn more", because the next screen is a charge and the button should say so.

### P-154 — Put the offer in the button, not only beside it

- **layer**: `copy`
- **mechanism**: The button is the element being clicked, so it is the element read at the moment of decision. Naming the trial length, the price or the absence of a card inside the button front-loads the risk reversal into that moment rather than relying on the buyer to have retained it from a line they read thirty seconds earlier. The generalisable variable is **specificity**, not any particular grammatical construction.
- **works-when**: the offer differs by tier, or is unusually generous, or is the thing that actually removes the objection.
- **fails-when**: the button grows long enough to wrap on mobile, which converts a decisive element into a paragraph. It also fails when the specificity is about something the buyer does not care about — "Start your 14-day trial of the Standard plan with full API access" is specific and useless.
- **observed-effect**: The defensible figure is **secondary and unaudited**: KISSmetrics states that replications of CTA-copy specificity effects land "typically in the range of **10–40% improvement**" (kissmetrics.io/blog/cta-button-best-practices, snippet retrieved 2026-08-12; **direct fetch failed, so this is a search-snippet reading of a secondary source with no sample size, no cohort and no dates for any constituent test**). Treat it as a plausible order of magnitude, never as a forecast. **The famous +90% first-person figure from the same citation cluster is Folklore and must not be quoted — see the Folklore table and P-166.** In the census (2026-08-12), Basecamp varies the trial length *inside* the button across tiers: "Try it free for 60 days" and "Try it free for 30 days".
- **evidence**: `anecdote` *(a secondary, unaudited range from a source that could not be fetched directly; the prevalence observation is first-party)*
- **sources**: https://kissmetrics.io/blog/cta-button-best-practices (snippet, 2026-08-12) · 33-page transcription 2026-08-12
- **how-to**: Replace "Get started" with the specific offer wherever one exists, and check the wrap at 375px before shipping. Then measure it on your own traffic rather than budgeting against the 10–40% range — that range is secondary, unaudited, and drawn from a cluster whose headline claim did not survive source-chasing, which is exactly the profile of a number that will not replicate for you.
- **example-copy**: "Try it free for 60 days" — Basecamp, 2026-08-12
- **worked-example**: Ledgerly's Solo button reads "Start Solo — no card" rather than "Get started". At 2,000 monthly visitors and 40 customers the page cannot detect even a 40% change in click-through on this element with any usable confidence, so the change ships as a prior and the queued hypothesis is recorded rather than tested.

### P-155 — Make the CTA self-describing when it is read out of context

- **layer**: `copy`
- **mechanism**: On mobile and for screen-reader users the button is frequently separated from the card header that gave it meaning. A button naming its tier stays unambiguous under those conditions; four identical "Get started" buttons become four identical unlabelled controls. The accessibility argument here is stronger than the conversion argument and does not depend on any effect claim.
- **works-when**: tiers have short, distinct names that fit inside a button without wrapping.
- **fails-when**: long tier names ("Enterprise Password Manager") make the button unwieldy — there, use an accessible name rather than visible text, which gets the whole benefit without the layout cost.
- **observed-effect**: `no quantified effect published`. A deliberate minority practice in the 33-page census (2026-08-12): **ElevenLabs** ("Choose Starter" / "Choose Creator" / "Choose Pro" / "Choose Scale" / "Choose Business"), **Typeform** ("Get Basic" / "Get Plus" / "Get Business" / "Get Talent"), **Framer** ("Start with Basic" / "Start with Pro"), **GitHub** ("Continue with Team"). The majority use one generic label repeated across every tier. Superhuman does the same in its own cohort ("Get Superhuman Free" / "Get Superhuman Pro" / "Get Superhuman Business", L11 teardowns 2026-08-12).
- **evidence**: `anecdote` *(no conversion test located; the accessibility rationale is the load-bearing argument)*
- **sources**: 33-page transcription 2026-08-12 · L11 teardowns 2026-08-12
- **how-to**: Prefer "Get [Tier]" or "Start with [Tier]". At minimum give each button a distinct accessible name even where the visible text repeats, so a screen-reader user hearing a list of buttons hears four different destinations rather than "Get started, Get started, Get started, Get started".
- **example-copy**: "Continue with Team" — GitHub, 2026-08-12
- **worked-example**: Ledgerly's three buttons read "Start free", "Start Solo — no card" and "Start Books — no card". Read as a list with no surrounding context they still describe three different purchases, which is the test.

### P-156 — Answer both trial fears in the microcopy under the button

- **layer**: `copy`
- **mechanism**: Trial hesitancy has two distinct components that fire at the same instant and are usually collapsed into one line. The first is "what leaves my account right now". The second is "will I be silently charged later". Answering only the first leaves the second live, and the second is the one that produces the abandoned signup, because it is the one the buyer has been burned by before. Both belong immediately under the button, because that is where the hesitation happens; in an FAQ two thousand pixels below they arrive after the decision.
- **works-when**: any trial or freemium motion where a card is taken, deferred or not taken at all.
- **fails-when**: the microcopy block grows past two short lines and starts competing visually with the button it is supposed to support. It also fails when a line is aspirational rather than true — "cancel anytime" beside a flow that requires emailing support is the most expensive sentence you can write.
- **observed-effect**: `no quantified effect published`. Near-universal in the 33-page census (2026-08-12). **Most pages answer only the first fear; Grammarly answers both separately** — "$0 payment today" for what leaves the account now, and "Email reminder 2 days before trial ends." for the silent-charge fear — which is the most sophisticated pair in the sample. Fathom extends the same logic to lock-in: "There are no contracts, meaning you can cancel anytime (with a complete data export)."
- **evidence**: `anecdote` *(prevalence is well-observed; no controlled effect size located for microcopy content)*
- **sources**: 33-page transcription 2026-08-12
- **how-to**: Two short lines under the CTA. Line one: what is charged today. Line two: what happens when the trial ends, including who tells you and when. Add a third line on data portability only if lock-in is a live objection in your category — and then name the export format, because "your data is yours" is a sentiment and "export everything as CSV" is a mechanism.
- **example-copy**: "$0 payment today" + "Email reminder 2 days before trial ends." — Grammarly, 2026-08-12
- **worked-example**: Ledgerly's paid CTAs each carry "$0 today. We email you two days before the first charge." and "Cancel any time — export every receipt as CSV on the way out." The second line exists because a bookkeeping product's specific lock-in fear is the data, not the money.

### P-157 — Write each FAQ question in the customer's own anxious voice

- **layer**: `copy`
- **mechanism**: A pricing FAQ is the objection-handling half of a sales conversation rendered as text, and an objection is only neutralised when the buyer recognises it as *theirs*. A question written in marketing voice — "What is our cancellation policy?" — is answered before it is felt, so the reassurance lands on nobody. The same question in the buyer's voice, with the buyer's disbelief intact, is read as the company having heard the objection before, which is itself the reassurance.
- **works-when**: you have real sales-call transcripts, support tickets or cancellation reasons to mine, so the wording is transcribed rather than imagined.
- **fails-when**: the FAQ is used to paper over pricing the cards failed to explain. Four "which plan is right for me" questions mean the cards are broken and the FAQ is treating a symptom. It also fails when the anxious voice is performed rather than borrowed — a manufactured worry reads as ventriloquism.
- **observed-effect**: `no quantified effect published` for FAQ voice, and **no credible evidence that FAQ presence lifts conversion at all** — the circulating "15–25% lower exit rates" is fabricated (see Folklore). What the census does establish is the objection taxonomy: across **15 transcribed FAQs** (2026-08-12) the set is highly consistent, dominated by reversibility/commitment, then plan routing, then hidden cost and overage, then trial mechanics, then billing mechanics, then discount eligibility, then security. **Basecamp's is the best-constructed in the sample** because each question is transcribed anxiety rather than a heading: "Could we really add 1000 users and still just pay $299/month total?" is a disbelief objection stated as disbelief. The FAQ is also a reliable X-ray of the pricing model: Notion's is 11-of-17 about billing mechanics (seat pricing at scale), Vercel's 5-of-11 about overage (metered pricing), Figma's leads with "What is a seat?" (a novel unit that must be taught before it can be sold), and Linear publishes none at all (L11 teardowns, 2026-08-12).
- **evidence**: `medium` *(for the objection taxonomy — a 15-page transcription)* / **none** *(for any effect of FAQ presence or voice)*
- **sources**: 33-page transcription 2026-08-12 · L11 teardowns 2026-08-12
- **how-to**: Pull the last 50 pre-purchase questions and cancellation reasons verbatim. Cluster them, then use the buyer's actual words as the question text — including the disbelief, the "really", the "what if". Order by blocking power rather than frequency (see `05-page-anatomy.md` P-137). Cap at five or six questions for a consumer-priced product. Then read a competitor's FAQ as what it is: a list of the objections that cost them money.
- **example-copy**: "Could we really add 1000 users and still just pay $299/month total?" — Basecamp, 2026-08-12
- **worked-example**: Ledgerly's overage question is not "What are the plan limits?" but "What happens if I have a big month?" — which is how the freelancer says it, and which lets the answer be "Nothing bad: receipts past 100 wait for next month, or you add 50 for $5." The question's voice is what makes the answer read as reassurance rather than as policy.

### P-158 — Disclose the unfavourable term at the button

- **layer**: `copy`
- **mechanism**: Volunteering a cost raises the credibility of every other claim on the page, because a source that states its own downsides is read as not selling. It also self-selects: a buyer who proceeds past the disclosure has already accepted the term, which reduces refunds, early churn and the support ticket that begins "nobody told me". This is the technique most native to a calm brand voice and the one the direct-response canon never uses.
- **works-when**: the admission is genuine and material, and sits before or at the decision rather than in fine print afterwards.
- **fails-when**: the admission is a humblebrag ("our only flaw is that we care too much"), which is worse than silence. It also fails when the disclosed term is severe enough to be the actual product problem — disclosure buys credibility, it does not fix a policy the market will not accept.
- **observed-effect**: `no quantified effect published`. **Typeform discloses "Credit card required" at the button** on its Growth Flow trial, against a census in which every other page advertises the absence of a card (2026-08-12) — trading click-rate for qualified starts. Adjacent and weaker: a Label Insight figure that 94% of consumers say they are likely to be loyal to a brand offering complete transparency, which could not be traced to the original study and is in Folklore.
- **evidence**: `anecdote`
- **sources**: 33-page transcription 2026-08-12 · https://www.articlesfactory.com/articles/copywriting/the-damaging-admissiona-persuasive-technique.html
- **how-to**: Pick the limitation that generates your most common refund or cancellation and state it in your own words above the pricing table, then immediately name who the product *is* right for. Do not apologise for it and do not soften it with a "but". At the button, disclose any term the buyer would be annoyed to discover one screen later — a required card, an annual-only plan, a hard cap.
- **example-copy**: "Credit card required" — Typeform, 2026-08-12 · "Annual commitment required" — Ahrefs Enterprise, 2026-08-12
- **worked-example**: Above Ledgerly's tier cards sits one line: "This won't replace an accountant, and it won't do your VAT return. It turns a shoebox of paper into a spreadsheet your accountant can actually use." That sentence is the most common refund reason inverted, and stating it costs a small number of signups who were going to churn in week two.

### P-159 — Sell in one sentence, justify in the next — and never reverse them

- **layer**: `copy`
- **mechanism**: Sugarman's split: buyers decide emotionally and then need a rational structure with which to defend the decision, to themselves and to whoever else sees the statement. Hopkins's reason-why tradition is the same instinct a generation earlier — a claim without a mechanism does not become a belief. A price-justification paragraph therefore has two halves and omitting either one breaks it: emotion alone is unjustifiable, logic alone is defensive. The order matters because logic first reads as pre-emptive defence of a price the reader had not yet objected to.
- **works-when**: the logical half contains a real mechanism or a real number rather than a restated benefit.
- **fails-when**: the reason-why is invented. A fabricated reason is worse than no reason, because it is checkable and its falsity is discovered by exactly the sceptical buyer you were trying to convert.
- **observed-effect**: `no quantified effect published` for the two-sentence structure. Hopkins's own documented result is from another medium entirely — 5,000 letters offering carpet sweepers as Christmas presents producing 1,000 orders, a 20% response rate in 1890s mail order (via secondary summaries) — and does not transfer to a web paywall. Two real pricing-page instances of the structure in customer language: ProcureDesk's "A small price to pay to get rid of 90% of manual approvals" and Bench.co's "We're saving $X monthly through productivity gains" (both via Copyhackers, 2025-03).
- **evidence**: `medium` *(a mechanism with an obvious causal story and a long practitioner record; no isolated measurement)*
- **sources**: https://www.upgrow.io/joe-sugarman-slippery-slide-landing-page-style/ · https://swipefile.com/joe-sugarman-triggers · https://copyhackers.com/2025/03/saas-pricing-page-checklist/
- **how-to**: Write the price justification as exactly two sentences. First: what it feels like to have the problem gone, in the buyer's own language, specific. Second: the arithmetic or the mechanism that makes the number reasonable. Do not reverse the order and do not add a third sentence — the third is always a restatement and it dilutes both.
- **example-copy**: "A small price to pay to get rid of 90% of manual approvals" — ProcureDesk customer quote, via Copyhackers 2025-03
- **worked-example**: Ledgerly's justification block under the cards: "The quarter ends and there is nothing to dread — the receipts are already filed." Then: "$90 a year against the four hours you spend every quarter with a shoebox and a calculator." The second sentence contains a number the buyer supplied themselves in the support tickets; it was not invented for the page.

### P-160 — Justify the price against the named alternative, not against nothing

- **layer**: `copy`
- **mechanism**: A price shown alone is judged against the buyer's whole budget, which is an unwinnable comparison. A price shown beside the thing the buyer would otherwise buy is judged against that thing's price, which is a comparison you chose. The mechanism is anchoring, but the honest version of it: you do not invent a value stack, you name the real alternatives and let the buyer price them from their own knowledge.
- **works-when**: a named, real, priced alternative exists that the buyer already recognises — a tool, a service, a professional's hourly rate.
- **fails-when**: the assigned values are fictional. A "$4,000 value" attached to a PDF is the canonical infomercial tell and destroys credibility instantly with any buyer who has seen the construction before — which, in a mature market, is all of them. It also fails when the named alternative is one the buyer does not actually consider, which makes the comparison read as a strawman.
- **observed-effect**: `no quantified effect published` for the comparison framing itself. Verified alternative prices from the decision-adjacent market (L14 teardowns, 2026-08-12): **Talkspace publishes its own comparison table — traditional in-person therapy "$175–$500" per session against Talkspace "$69–$109" weekly**; a single therapy session bears "$100-$200" at US market rate (Psychology Today); the cheapest single human answer located anywhere is MentorCruise's "$39/call". A named single scenario outperformed a range in the same source's own copy: "she was paying nearly $1,000 a month for weekly in-person therapy sessions", before switching at $276 monthly. **These are competitor list prices, not measured conversion effects.**
- **evidence**: `medium` *(anchoring is robust behavioural science; this specific presentation is unmeasured in public)*
- **sources**: L14 teardowns 2026-08-12 · https://wisewords.blog/book-summaries/100m-offers-book-summary/
- **how-to**: Replace any fabricated dollar value with the actual named alternatives the buyer would otherwise assemble, and let them price those themselves — this preserves the anchoring mechanism without inventing a single number. Prefer one named person's before-and-after cost to a range, because a range invites the reader to pick its bottom end. State the comparison once, flatly, and never repeat it elsewhere on the page.
- **example-copy**: "This replaces [named tool], [named tool], and a spreadsheet you maintain by hand."
- **worked-example**: Ledgerly's comparison sits at the bottom of the page, serving solution-aware traffic per P-142: "A bookkeeper in the UK charges £25–£40 an hour. Ledgerly Books is £15 a month." The bookkeeper rate is cited to a public source and dated, because an unsourced competitor price is a claim about someone else's business and will eventually be corrected in public.

### P-161 — Argue against doing nothing: the unclaimed rhetorical position

- **layer**: `copy`
- **mechanism**: For most consumer products the real competitor is not another vendor — it is the buyer continuing to do what they are already doing. Every price-justification argument in the market compares against a *paid* alternative, which implicitly concedes that the buyer has decided to spend money and is only choosing where. A buyer who has not decided that is unaddressed by the entire genre. The argument that reaches them is the ongoing cost of the status quo, stated in their own units, with the arithmetic left to do its own work.
- **works-when**: the status quo has a cost the reader can feel and count — hours, repetitions, a recurring annoyance, a deferred decision.
- **fails-when**: the pain is mild or aesthetic. Manufacturing a cost of inaction for a nice-to-have product reads as fear-mongering and is the most common way this tactic curdles. It also fails against a recurring subscription more than against a one-off: a $260/month commitment has its own ongoing cost to argue against, which weakens the comparison, while a one-time charge has none.
- **observed-effect**: `no quantified effect published`. The finding is an absence, and it is a strong one: **across 30+ products fetched in the decision-adjacent market on 2026-08-12, not one argued its price against inaction.** The entire market benchmarks against therapy, coaching or in-person sessions. The nearest anyone comes is counterfactual-savings testimonials — Intro.co's cite "$14,000" saved on interior design and "$600+" on fashion advice, so the session pays for itself inside the quote (L14 teardowns, 2026-08-12).
- **evidence**: `anecdote` *(a census absence plus a well-established loss-aversion mechanism; no test of the copy application)*
- **sources**: L14 teardowns 2026-08-12 · https://www.leadgen-economy.com/blog/five-stages-awareness-lead-generation/
- **how-to**: Quantify the status quo in the buyer's own units — hours, repetitions, missed occasions — not in dollars, unless dollars are literally what they lose. Put that quantity adjacent to the price so the comparison is unavoidable but unstated. Do not editorialise; the arithmetic does the work and any adjective you add reads as pressure. Place it low on the page, where problem-aware and solution-aware readers arrive (P-142).
- **example-copy**: "Feel better in minutes, not months." — Rosebud, 2026-08-12 *(a time-denominated inaction argument that never mentions a price, and therefore cannot be argued with on price)*
- **worked-example**: Ledgerly's cost-of-inaction line: "Four hours a quarter, four times a year, and the receipts you cannot find are the ones you do not claim." No number is attached to the unclaimed expenses, because Ledgerly has no honest estimate of them and an invented one would be the exact failure this pattern warns about.

### P-162 — Pick a comparison object your buyer actually buys, and retire the coffee

- **layer**: `copy`
- **mechanism**: Reframing a recurring price against a familiar small purchase shifts the mental account the buyer charges it to. A £700 coffee machine is judged against everything £700 buys; "£2 a day for a year" is judged against what £2 buys, which is very little. The mechanic is sound and survives. The stock phrase does not: "less than a cup of coffee a day" has been used so widely that it now functions as a marketing tell, announcing that the reader is being handled.
- **works-when**: the comparison object is genuinely in this buyer's routine and the register matches the brand.
- **fails-when**: the object is generic, or the register clashes. In a calm or literary brand voice the coffee construction is actively corrosive, and the damage is to the voice rather than to the click — which means an A/B test on the page will not find it.
- **observed-effect**: `no quantified effect published` for the subscription case; classified as psychological pricing in the general literature with no controlled test located. Notably, **the per-day reframe appears on none of the 33 B2B and prosumer pricing pages fetched 2026-08-12**. The consumer pages that would carry it (Blinkist, Headspace, Duolingo) were unreachable in that lane, so this is **unverified rather than disproved** — it is plausibly a consumer-paywall device that does not appear on SaaS pricing pages at all.
- **evidence**: `anecdote`
- **sources**: 33-page transcription 2026-08-12 · https://en.wikipedia.org/wiki/Psychological_pricing · https://analyticure.com/pricing-strategy-coffee-shop-analogy/
- **how-to**: Pick an object your specific reader actually buys — a paperback, a magazine subscription, a cinema ticket, a parking hour. State it once, flatly, without an exclamation point, and never repeat it elsewhere on the page. If you cannot name an object that fits both the buyer and the brand voice, skip the pattern; a generic comparison is worse than none.
- **example-copy**: "Less than a paperback a month." · **Avoid:** "That's less than a cup of coffee a day!"
- **worked-example**: Ledgerly's buyer is a freelancer who buys accounting software, not coffee metaphors. The comparison object is therefore the thing they already pay for: "About a third of what you pay for your invoicing app." Used once, in the justification block, and nowhere else.

### P-163 — Let a customer make the substitution claim you cannot make yourself

- **layer**: `copy`
- **mechanism**: There are claims a vendor cannot make in its own voice — that the product replaces a professional, that it is better than the expensive alternative, that the buyer can now stop paying for something else. Made first-party, those claims are either legally exposed, arrogant, or both. Made by a customer in a quoted review, the same claim is testimony rather than assertion, and the vendor's own copy can simultaneously hedge. The structure is: **first-party hedges, third-party asserts.**
- **works-when**: you have genuine, attributable customer statements that make the claim spontaneously, and a category where the strong claim carries real risk.
- **fails-when**: the quotes are solicited to order, curated into something the customer did not mean, or anonymous. It also fails as an ethical dodge: quoting a customer to make a claim you know to be false is the same misrepresentation with an extra step, and in regulated-adjacent categories it will be treated as such.
- **observed-effect**: `no quantified effect published`. The clearest live instance: **Rosebud positions itself first-party as "a companion rather than replacement" and hedges explicitly with "not a substitute for a human connection", while its displayed user quotes carry the substitution argument** — "ONLY 12.99 a month, way cheaper than a therapist", "Much cheaper than private talk therapy", "better than the therapists that I have paid for", "so much better than in person therapy with a human", "I prefer this over seeing my psychiatrist/therapist" (L14 teardowns, 2026-08-12). Separately, **no verified AI product in that lane used an explicit price-of-therapy anchor in its own voice** — the explicit anchor lives only in testimonials.
- **evidence**: `anecdote` *(one well-documented instance of the structure; no measurement of its effect)*
- **sources**: L14 teardowns 2026-08-12
- **how-to**: Read your existing reviews for the sentence you would not write yourself, and quote it exactly, with attribution and date. Keep your own voice hedged in the adjacent copy so the two are not in tension. Never edit a quote toward the claim you wanted — the specificity of an unedited customer sentence is what makes it read as testimony, and a tidied quote reads as copy.
- **example-copy**: "ONLY 12.99 a month, way cheaper than a therapist" — user review displayed by Rosebud, 2026-08-12
- **worked-example**: With 40 customers Ledgerly has three usable reviews and none of them makes a substitution claim. The deliverable therefore records the slot as empty and names the trigger: the first review that says some version of "I stopped paying my bookkeeper for the quarterly tidy-up" goes directly under the Books card, unedited, with a first name and a month.

### P-164 — Count the feature or don't claim it

- **layer**: `copy`
- **mechanism**: A counted feature reads as evidence of work already done; an uncounted one reads as a claim about work you say you have done. The number is doing two jobs at once — it is specific, which Hopkins's reason-why tradition holds is what converts a claim into a belief, and it is checkable, which means offering it is a small act of exposure that the reader registers as confidence.
- **works-when**: the count is real, current, and large enough to be impressive without rounding — and small enough that you are willing to have it checked.
- **fails-when**: the count is trivially small, where stating it is worse than staying vague, or where it is a vanity metric the buyer does not value (features shipped, integrations available). It also fails when it decays: a number on a page is a promise to keep the number current, and a stale count found by a buyer is a credibility loss out of all proportion to the number's original value.
- **observed-effect**: `no quantified effect published`. Widespread in consumer subscription copy: "500+ Sleep Stories®", "50,000+ minutes of audio", "Track over 50 health metrics", "100+ language courses", "9,000+ summaries" (L13 teardowns, 2026-08-12). The counted-authority variant is Calm citing "a Calm Science study of 900+ parents (US)" — its own research, branded as an institution, with the sample size stated; **specificity does the persuading while the provenance goes unexamined, which is exactly the manoeuvre this library's evidence vocabulary exists to catch.** In the SaaS census the equivalent is a single proof line: "Trusted by more than 40,000 companies" (Linear), "Trusted by over 40 million people and 50,000 organizations" (Grammarly), "337K+ ★★★★★ reviews" (Todoist), all 2026-08-12.
- **evidence**: `medium` *(consistent practice across two independent cohorts with a clear specificity mechanism; no isolated test)*
- **sources**: L13 teardowns 2026-08-12 · 33-page transcription 2026-08-12
- **how-to**: Replace every adjective of scale with the count behind it, or delete the adjective. Prefer one real, current, specific number placed under the pricing cards over a logo wall you cannot honestly assemble. Where you have no honest number yet, write down which counter you would need in the product to earn one, and ship the counter — that is a smaller job than most copy rewrites and it makes the claim permanently available.
- **example-copy**: "Trusted by more than 40,000 companies" — Linear, 2026-08-12
- **worked-example**: Ledgerly cannot honestly write a customer count at 40 paying customers. The count it *can* earn is receipts processed, which requires one counter in the product. Until that ships, the proof slot stays empty and the deliverable records `[proof line — no honest number available at 40 customers; ship the lifetime-receipts counter to earn one]` rather than writing something softer and vaguer.

### P-165 — Stamp the currency inline and state the tax posture beside the price

- **layer**: `copy`
- **mechanism**: A bare "$" is ambiguous across USD, CAD, AUD and SGD, and the ambiguity is resolved by the non-US buyer assuming the worse case or leaving. Tax is the same failure one step later: the abandonment driver is not that tax exists but that it appeared later than expected, which is read as a bait-and-switch even when it is standard practice.
- **works-when**: any page with international traffic, which is all of them.
- **fails-when**: never as a principle, but the tax line must stay terse. A card whose largest block of text is a VAT explanation has solved a trust problem by creating a comprehension one.
- **observed-effect**: Baymard's aggregate UX statistics (aggregate of ~50 studies, fetched 2026-08-12): **40%** of shoppers abandoned checkout because "extra costs (including shipping, tax, and fees) were too high" and **12%** because they "couldn't see the total order cost before initiating checkout". **This is e-commerce checkout data; transfer to a SaaS pricing page is an inference, not a measurement.** In the 33-page census explicit tax disclosure is rare and terse — Todoist's "plus local tax" on the Business tier and Fathom's "All pricing is in USD and renews automatically unless cancelled." are the clearest instances — while the largest vendors stamp currency onto the number itself: "$0 USD per month" (GitHub), "$8.75 USD per user / month" (Slack), "$12 USD" (Grammarly), "$117.33/mo" with an explicit currency selector (Semrush). A practitioner claim that "37% of our customers would not proceed with the purchase once they would find out that VAT was added at the later stage" (UX StackExchange) is a **single unaudited first-party report and is in Folklore.**
- **evidence**: `medium` *(solid underlying data, inferred transfer to this surface)*
- **sources**: https://baymard.com/learn/ux-statistics · 33-page transcription 2026-08-12
- **how-to**: Write the currency code into the price string itself, not only into a page-level selector, because the selector is out of the buyer's field of view by the time they read the card. Add one short line on tax treatment near the price. If you charge VAT on top for some geographies, say so before checkout rather than at it — the whole failure mode is timing, not the tax.
- **example-copy**: "$8.75 USD per user / month, when paying monthly" — Slack, 2026-08-12 · "plus local tax" — Todoist, 2026-08-12
- **worked-example**: Ledgerly's cards read "$7.50 USD" rather than "$7.50", with "plus local VAT where applicable" as a single line under the card row rather than repeated on each card. Repeating it three times would have tripled the visual weight of a caveat.

### P-166 — Extract the mechanism from the register before you borrow direct-response copy

- **layer**: `copy`
- **mechanism**: The direct-response canon was formalised in one-shot mail order, where there was no month eleven. Its tactics optimise the moment of purchase and are silent about everything downstream, because in that economics there was no downstream. A subscription inherits the entire downstream cost of every persuasion device its page runs. Most of the canon's *mechanisms* survive re-voicing — name the guarantee, answer objections in purchase order, put the emotional claim before the logical one. Two do not, because they are load-bearing on the hype register itself: the fabricated value stack and manufactured urgency.
- **works-when**: you are borrowing a structural mechanism (ordering, adjacency, specificity, naming) rather than a tone.
- **fails-when**: the mechanism cannot be separated from its register. And it fails silently in the most dangerous way when you run scarcity cues and read the A/B test as vindication: the test measures the conversion and cannot see the benevolence cost, which arrives months later as churn, lower referral and reluctance to recommend.
- **observed-effect**: **Tuncer et al. (2023), 202 participants** `[secondary — the study was reached only through a Substack summary of it; the paper itself was never fetched in this corpus, so the sample, the instruments and the reported directions are all as that summary states them]`, three site versions (countdown timer / stock progress bar / control), measured with NASA-TLX, a website-trust benevolence scale and UEQ-short: countdown timers produced **significantly higher frustration** than no scarcity cues; limited-time cues degraded pragmatic quality, functioning as visual clutter; and **both cue types negatively affected perceived vendor benevolence**, with users reading them as opportunistic ploys. **The benevolence damage occurred for honest cues too, not only deceptive ones** — which is the sharpest edge of the finding and the reason it cannot be escaped by simply telling the truth. Supporting: Kristofferson et al. (2017) on timers triggering annoyance and aggression; Mathur et al. (2019) classifying scarcity cues as dark patterns; Luguri and Strahilevitz (2021) on increased mistrust and impulsive buying. **The study measured perceptions, not revenue — the trust cost is demonstrated, the size of the revenue consequence is not.** Existence proof on the other side: 37signals states outright that "Urgency is overrated, ASAP is poison" and has run a durable software business for two decades with no sales team and essentially no paid advertising — which proves the urgency layer is *optional*, not that it does not work.
- **evidence**: `medium` *(the trust cost rests on one controlled study reached through a single secondary carrier, which is one organisation's summary rather than the two independent sources a `strong` rating requires; the supporting papers are cited by that same summary. The conversion side of the trade remains poorly sourced and the revenue consequence is unmeasured.)*
- **sources**: https://uxpsychology.substack.com/p/the-use-of-scarcity-cues-in-e-commerce `[secondary carrier for Tuncer et al. 2023]` · https://basecamp.com/guides/why-we-choose-profit · https://basecamp.com/guides/how-we-communicate
- **how-to**: For each borrowed line, write down the mechanism in one sentence with no adjectives, then rewrite the line in your own register from the mechanism alone. Hormozi's "In 30 days, if you wouldn't jump into shark infested waters to get our product back, we will return every dollar you paid" contains a genuinely good idea — a named, vivid, memorable guarantee — in a voice that would destroy a quiet brand on contact; his own cited client's "Love it or leave it guarantee" is the same mechanism at a survivable volume. Then audit the page for any element implying a constraint you cannot document and remove each one. If you keep a timer, make it survive a refresh and reflect a real event. **Price the conflict explicitly in the deliverable**: state that the scarcity cue is expected to raise conversion and to cost benevolence, that your A/B test can only see the first, and that on a subscription the second is charged to renewal — then decide with both halves on the table rather than pretending only one exists.
- **example-copy**: Hormozi's register — "In 30 days, if you wouldn't jump into shark infested waters to get our product back, we will return every dollar you paid" · the same mechanism re-voiced, from his own cited client — "Love it or leave it guarantee" · honest price-change urgency — "This price goes up on [date] for new subscribers. If you're in before then, you keep it."
- **worked-example**: Ledgerly declines all manufactured urgency. The one urgency instrument it keeps is a real price rise announced with a date and honoured — announcing a rise and then not raising is the same lie as a resetting timer, discovered a month later. The deliverable states the trade in one line so the decision is not re-litigated every quarter: *scarcity cues are expected to convert and to cost benevolence; a subscription pays that bill at renewal, where no page test can see it.*

### P-167 — In a sophisticated market, justify price with a mechanism or an identity, never a bigger claim

- **layer**: `copy`
- **mechanism**: Schwartz's second ladder is market sophistication, and it governs the claim rather than the page structure. Level 1 states the plain claim; level 2 enlarges it to its limit; level 3 introduces a unique mechanism; level 4 elaborates the mechanism against competing mechanisms; level 5 abandons claims entirely because the market has heard them all and sells identification instead. The consequence for pricing is direct: in a level 4–5 market, price justification cannot be a larger promise, because a larger promise is the move the market has been inoculated against. It has to be a mechanism ("here is why this costs what it costs") or an identity ("this is what people like you use").
- **works-when**: you can honestly locate your category's level — usually by reading three competitors' headlines and noting whether they are still making claims or have moved to identity.
- **fails-when**: you misjudge the level downward and run level-2 copy into a cynical market, which reads as amateurish; or misjudge it upward and run level-5 identity copy into a market that has not yet heard the basic claim, which reads as content-free. Also fails where the "mechanism" you offer is not a real one — an invented mechanism in a level-4 market is checked by exactly the buyers who moved the market to level 4.
- **observed-effect**: `no quantified effect published`. Schwartz's own canonical illustration is the diet market's progression: "Lose ugly fat" → "Lose 47 pounds in 4 weeks" → "Floats fat right out of your body" → "First no-diet reducing drug" → wordless identification (Marlboro). Corroborating observation from the 2026 census rather than from the doctrine: the falsifiable social claim is receding at the sophisticated end — **of seven prosumer SaaS pricing pages surveyed, exactly one carried a recommendation badge, and it read "Recommended" rather than "Most popular"** (L11 teardowns, 2026-08-12), which is a market that has stopped making checkable claims about other buyers.
- **evidence**: `medium` *(a structural doctrine with no effect size, plus one independent census observation consistent with it)*
- **sources**: https://www.motiveinmotion.com/market-sophistication/ · https://betweenthelinescopy.com/blog/stages-of-awareness/ · L11 teardowns 2026-08-12
- **how-to**: Read the headlines of your three closest competitors and locate the level. If they are still stating plain benefits, a mechanism will differentiate you. If they are all stating mechanisms, elaborate yours or move to identity. In a level-5 market, let restraint be the claim — and spend the saved persuasion budget on the two things the value equation says actually move perceived value: how fast the first win arrives and how little the reader has to do to get it (P-145).
- **example-copy**: Mechanism register — "Only pay for the channels you use" — Buffer, 2026-08-12 · identity register — "Be kind to your mind" — Headspace, 2026-08-12
- **worked-example**: Receipt scanning is a level 3–4 market: every competitor claims accuracy, so accuracy claims are inert. Ledgerly's justification is therefore a mechanism sentence — "Every receipt is read twice: once by the model, once by you, in the same second it takes to swipe" — rather than "the most accurate receipt scanner", which is the level-2 move the market stopped hearing years ago.

## Copy bank

*Every entry below was observed by direct fetch of the live page on **2026-08-12** unless a different source and date is given. **Nothing has been paraphrased, tidied, shortened or corrected** — capitalisation, punctuation, spacing and typographic oddities are as transcribed, including the ones that look like errors. Roughly 430 verbatim strings from the source transcription are reproduced here; **none were cut.*** Supplementary sections at the end carry additional verbatim material from the consumer-subscription, prosumer-SaaS and decision-adjacent teardown lanes, each labelled with its source lane.

### Headlines

| Copy | Source | Framing |
|---|---|---|
| "One tool to run your company." | Notion | outcome |
| "Where teams and AI work as one" | Miro | outcome |
| "Great Writing Starts With a Plan" | Grammarly | outcome |
| "You've got plans. Us too." | Shopify | outcome |
| "Start free, then scale your site" | Framer | outcome |
| "Beautiful websites" | Squarespace | outcome |
| "Try the Copilot-powered platform" | GitHub | outcome |
| "The best work solution, for the best price." | ClickUp | outcome + price |
| "Flexible Pricing Plans for Every Stage of Your Creator Business" | Kit | outcome |
| "Plans for every team, people and agents included." | monday.com | outcome |
| "Only pay for the channels you use" | Buffer | mechanic |
| "Simple and sustainable pricing" | Fathom Analytics | mechanic |
| "Get Fin and Intercom for a single, fully integrated customer service platform" | Intercom | outcome |
| "Pick the plan that fits your team" | Asana | routing |
| "Pick the perfect plan for your team" | Calendly | routing |
| "Pick a package and try Basecamp for free." | Basecamp | routing + risk reversal |
| "Pick your plan, choose your seats" | Figma | routing |
| "Choose the plan that fits your needs." | Loom | routing |
| "Choose a paid plan built for businesses." | Slack | routing |
| "A plan for every organization's needs" | Airtable | routing |
| "Flexible pricing for your needs" | ElevenLabs | routing |
| "Plans & pricing" | Ahrefs | label |
| "Plans & Pricing" | Semrush, Typeform | label |
| "Plans and pricing" | Todoist | label |
| "Pricing and plans" | 1Password | label |
| "Pricing" | Linear, Descript | label |

### Subheads

| Copy | Source | Job |
|---|---|---|
| "Or start with the basics for free, and upgrade at any time." | Slack | de-risk |
| "Start free, no credit card needed." | monday.com | de-risk |
| "Free for 14 days. Pay annually to save up to 36%." | Squarespace | de-risk + savings |
| "Try 3 days free, then $1/month for 3 months." | Shopify | offer |
| "Trusted by over 40 million people and 50,000 organizations" | Grammarly | proof |
| "337K+ ★★★★★ reviews" | Todoist | proof |
| "Trusted by more than 40,000 companies" | Linear | proof |
| "Join 30 million+ people who rely on Todoist to manage work and life" | Todoist | proof |
| "For solo creators through to multi-brand agencies. Add channels as you grow, remove them when you don't." | Buffer | routing + mechanic |
| "Get the information you need about your website without compromising anyone's digital privacy. Start with a 7-day free trial of Fathom and then pay a fair and sustainable monthly price based on your average monthly page views." | Fathom | mechanic |
| "Semrush helps you build and measure brand visibility, everywhere search happens. Start with what you need. Add more as you grow." | Semrush | mechanic |
| "We get it, there's a lot you can do with GitHub. That's why we've packed all of it into a single risk-free trial that includes GitHub Enterprise, Copilot, and Advanced Security." | GitHub | de-risk |
| "A plan for whatever you create" | Descript | routing |
| "Built for the future. Available today." | Linear | brand |
| "Find out why customers see up to 24x ROI* using the Standard plan with a 14-day trial.†" | Mailchimp | proof + offer |
| "Run 1 project free forever. Includes 1 GB of storage and up to 20 users." | Basecamp | mechanic |
| "Top-of-the-line, all-inclusive pricing. Unlimited users, no per-user fees." | Basecamp | mechanic |

### Tier names

- Conventional ladder: Free / Pro / Business / Enterprise — Slack (Free, Pro, Business+, Enterprise+), Notion (Free, Plus, Business, Enterprise), Vercel (Hobby, Pro, Enterprise)
- Audience-named: Personal / Starter / Advanced / Enterprise — Asana; Newsletter / Creator / Pro — Kit; Hobbyist / Creator / Business / Enterprise — Descript
- Job-named: Basic / Grow / Advanced / Plus — Shopify; Essential / Advanced / Expert — Intercom
- Lowercase as brand: "free forever" / "unlimited" / "business" / "enterprise" — ClickUp
- Playful/scale: Free / Starter / Creator / Pro / Scale / Business / Enterprise — ElevenLabs
- Capability-named (not tiered): Unified Access / Enterprise Password Manager / SaaS Manager / Privileged Access / Device Trust — 1Password
- Renamed enterprise: "Ultimate is a new name for our Enterprise tier" — monday.com CRM
- Feature-in-the-name: "Business + AI" — Loom; "Brain AI" / "Everything AI" — ClickUp

### Tier descriptors (the "who it's for" line)

- "For individuals to organize personal projects and life." — Notion Free
- "For small teams and professionals to work together." — Notion Plus
- "For growing businesses to streamline teamwork." — Notion Business
- "For organizations to operate with scalability, control, and security." — Notion Enterprise
- "For one or two people managing personal projects." — Asana Personal
- "For growing teams that need to track their projects' progress and hit deadlines." — Asana Starter
- "For companies that need to manage a portfolio of work and goals across departments." — Asana Advanced
- "For companies that need to coordinate and automate complex work across departments, without limits." — Asana Enterprise
- "For personal use" / "For professionals and small teams" / "For growing businesses" / "For large companies" — Calendly
- "For small teams getting started with Miro" / "For small teams collaborating regularly with unlimited boards" / "For growing organizations and consultants to streamline workflows with AI" / "For large organizations that need security, governance, and AI at scale" — Miro
- "The basics for individuals and organizations" / "Advanced collaboration for individuals and organizations" / "Security, compliance, and flexible deployment" — GitHub
- "For solo entrepreneurs" / "For small teams" / "For global reach" / "For complex businesses" — Shopify
- "Creative personal sites" / "Growing professional sites" / "Mission critical sites" — Framer
- "The perfect starting place for your web app or personal project. Free forever." — Vercel Hobby
- "Critical security, performance, observability, platform SLAs, and support." — Vercel Enterprise
- "Best for personal use or small teams" / "Best for larger teams" — Zoom
- "Get started on your creative journey with text-based editing and give our AI tools a spin." — Descript Free
- "Elevate your projects, watermark-free" — Descript Hobbyist
- "Unlock advanced AI-powered creativity" — Descript Creator
- "For teams with more video to make than editors to make it" — Descript Enterprise
- "Get started with video communication" / "Move work forward faster with unlimited videos and basic editing" / "Communicate your best with videos instantly enhanced and edited with Loom AI" — Loom
- "A great choice for freelancers, startups, and smaller teams." — Basecamp
- "Trying automation solo" / "Individuals needing the full platform" / "Teams building together" / "Scaling across an organization" — Zapier
- "Customer support for individuals, startups, and small businesses." / "Powerful automation tools and AI features for growing support teams." / "Collaboration, security, and multibrand features for large support teams." — Intercom
- "Create interactive AI forms that connect to your workflow" / "Make your AI forms more beautiful and on-brand" / "Analyze performance with AI and do more with your data" — Typeform
- "Start organizing your life for free" / "Organize your work and life" / "Manage your teamwork, too" — Todoist
- "Fully customized to your business needs" — monday.com Enterprise

### Badges

**Factual-claim badges (falsifiable):**
- "Most popular" — GitHub (Team), Kit (Creator), Grammarly (Pro)
- "Most Popular" — monday.com (Pro), Shopify (Grow)
- "MOST POPULAR" — Descript (Creator), Loom (Business + AI)
- "Popular" — ClickUp (Business), ElevenLabs (Creator)

**Opinion badges (unfalsifiable):**
- "Recommended" — Notion (Business), GitHub (Enterprise), Kit (Pro), Buffer (Essentials)
- "RECOMMENDED" — ClickUp (Everything AI)
- "Recommended plan" — Calendly (Teams)
- "Best value" — Mailchimp (Premium), Slack (Business+, with sparkle icon)
- "Best Value" — Dropbox (Standard, Advanced)

**Substantiated alternative to a badge:**
- Intercom "suggests that a particular plan was chosen by **53% of businesses**" — via Smashing Magazine, https://bfy.intercom.com/ (2022-07)

**Non-tier badges (feature-level, worth separating):**
- "New" / "Beta" / "Soon" — Ahrefs (on individual features)
- "New" / "Beta" — Figma (Figma Motion, Figma Sites, Figma Buzz)
- "Under 250 contacts? It's free." — Mailchimp (a routing badge, not a recommendation badge)
- "Enterprise-grade security with SOC2 Type II certification." — Todoist (trust badge)

### Savings expressions

**Percentage (plain):**
- "Yearly SAVE 18%" — monday.com
- "Yearly SAVE 33%" — monday.com CRM
- "Yearly (save 20%)" — Miro
- "Yearly (Save 30%)" — Typeform
- "Pay annually, save up to 17%" — Ahrefs
- "Annually save up to 17%" — Semrush
- "SAVE UP TO 17%" — Loom
- "Save up to 20% with yearly" — Notion
- "Save up to 18%" — Asana
- "Save up to 30% with yearly" — ClickUp
- "Save up to 20% with yearly" — ClickUp (AI section)
- "Save up to 35% with annual billing" — Descript
- "Pay annually to save up to 36%" — Squarespace
- "Save 16%" (Standard) / "Save 20%" (Teams) — Calendly *(per-tier percentages, not one page-level number)*
- "annual discount 33% off" — Zapier
- "Pay yearly—save 17%" — Kit (toggle, run simultaneously with the per-card dollar figures below)

**Absolute dollars:**
- "$390 billed yearly—Save $78 per year" — Kit Creator
- "$790 billed yearly—Save $158 per year" — Kit Pro
- "$132/yr" / "$276/yr" / "$456/yr" / "$600/yr" — Typeform (per tier)

**Months free:**
- "Pay yearly instead (2 months free)" — Fathom Analytics
- "$60 billed yearly (save 2 months)" — Buffer Essentials
- "$120 billed yearly (save 2 months)" — Buffer Team
- annual option at "two months free" — ElevenLabs
- "12 Months free" (startup grant, not a billing toggle) — ElevenLabs

**Strikethrough / reference-price:**
- "$117.33 monthly … instead of $139 monthly" — Semrush
- "$165.17/mo billed annually" vs "$199 monthly" — Semrush Starter
- "$248.17/mo billed annually" vs "$299 monthly" — Semrush Pro+
- Basic "$39/mo → $29/mo", Grow "$105/mo → $79/mo", Advanced "$399/mo → $299/mo" — Shopify
- "$8.75 $4.38 USD per user / month" — Slack Pro (50% promo)
- "$18 $9 USD per user / month" — Slack Business+
- "$13/month → $11.05/mo for 12 months" (15% discount) — Mailchimp Essentials
- "$22/month → $11 per month" (50% first-month) — ElevenLabs Creator

**Promotional / time-boxed:**
- "50% off for 3 months*" — Slack
- "Try 3 days free, then $1/month for 3 months." — Shopify
- "$4 USD per user/month for the first 12 months*" — GitHub Team
- "Save 15% on 10,000+ contacts" — Mailchimp
- "Take 20% off any new website plan For a limited time, take 20% off any new website plan. Use code at checkout" — Squarespace
- "Special offer: $10 off / month" — monday.com Free
- "Special monthly discount = -$20 | Total = $120" — monday.com Standard

**Billing toggle labels:**
- "Pay monthly" / "Pay yearly" — Notion
- "Pay annually" / "Pay monthly" — Squarespace
- "Billed monthly" / "Billed yearly" — Dropbox
- "Billed yearly" / "Billed monthly" — Calendly
- "Billed annually" / "Billed monthly" — Intercom
- "Billed Yearly" / "Billed Monthly" — Todoist
- "Monthly" / "Annual" — Descript
- "Bill me: Monthly | Annually" — Loom
- "Yearly billing" — Framer

### CTAs

**Self-serve, generic:**
- "Get started" — Notion, Ahrefs, Linear, Asana, Calendly, Descript, ClickUp, Miro, Framer
- "Get Started" — Slack, Todoist, ClickUp
- "Get started for free" — Figma, Descript
- "Sign up" — Notion (Free), Loom (Starter)
- "Sign up free" — Basecamp
- "Sign up for free" — Airtable
- "Join for free" — GitHub (Free)
- "Start for free" — Todoist, Miro
- "Start for Free" — Framer
- "Build for free" — ElevenLabs
- "Let's go" — Buffer (Free)
- "Select plan" — Figma
- "Buy now" / "or buy now" — Dropbox
- "Buy this plan" — Miro
- "Purchase now" — Asana
- "Get Basic" — Dropbox

**Trial-framed:**
- "Try for free" — monday.com, Dropbox, Grammarly, Loom, Miro, Semrush
- "Try for Free" — Grammarly (footer)
- "Try it free for 60 days" — Basecamp
- "Try it free for 30 days" — Basecamp
- "Try Kit for free" — Kit
- "Try free for 14 days" — Typeform
- "Try for free" — Vercel-style generic
- "Start free trial" — Kit, Intercom, Mailchimp ("Start Free Trial")
- "Start 14-day free trial" — Buffer
- "Start 7-day Free Trial" — Grammarly
- "Start free for 30 days" — GitHub
- "Start a free trial" — GitHub
- "Start your 7-day free trial" — Fathom
- "Start free trial" — Semrush (footer)
- "Request Trial" — Framer (Enterprise)
- "Try for $399" — Shopify Plus *(a paid trial — unusual and worth noting)*

**Tier-named (self-describing):**
- "Continue with Team" — GitHub
- "Choose Starter" / "Choose Creator" / "Choose Pro" / "Choose Scale" / "Choose Business" — ElevenLabs
- "Get Basic" / "Get Plus" / "Get Business" / "Get Talent" — Typeform
- "Start with Basic" / "Start with Pro" — Framer

**Sales-assisted (unanimous differentiation across all 33 pages):**
- "Contact Sales" / "Contact sales" — Notion, Slack, Figma, Linear, GitHub, Grammarly, Asana, Calendly, Airtable, Miro, Typeform, Descript, Loom, Mailchimp, Intercom
- "Talk to sales" — Ahrefs, Descript
- "Let's talk" — Semrush
- "Let's Talk" — Loom
- "Get a quote" — monday.com
- "Get a custom demo" — ClickUp
- "Request a quote" — 1Password
- "Book demo" — Airtable
- "Request demo" — Semrush
- "Request a demo" — Mailchimp
- "Get a demo" — Intercom
- "Contact us" — Fathom, ElevenLabs

**Closing-section CTAs:**
- "Ready to Achieve Your Goals?" → "Try for Free" / "Looking for Enterprise? Contact Sales" — Grammarly
- "Compare all features and plans" — Descript
- "View all features" — Intercom

### Microcopy under the CTA

- "No credit card required. Cancel anytime." — Squarespace
- "No credit card required." — Mailchimp
- "Upgrade anytime." — Kit
- "Start free, no credit card needed." — monday.com
- "Email reminder 2 days before trial ends." — Grammarly
- "$0 payment today" — Grammarly
- "Invite guests and clients for free. We will only bill you for employees." — Basecamp
- "Your whole organization for one fixed price. Unlimited users, plus every feature." — Basecamp
- "50 sites included" — Fathom
- "Add them yourself in packs of 50 for $10/month" — Fathom
- "Credit card required" — Typeform (Growth Flow)
- "14-day free trial of Professional (no credit card required)" — Zapier
- "Includes 20 free Lite seats" / "Includes 50 free Lite seats" — Intercom
- "Up to 2 users can collaborate for free" — Asana
- "If you're on a paid plan, you can let others view and comment on your files without purchasing extra seats." — Figma
- "Additional editors are $20 / month, and viewers are free" — Framer
- "Create and share unlimited boards. Three most recent ones will remain editable" — Miro (Free)
- "Annual commitment required" — Ahrefs (Enterprise)
- "Custom pricing—from 30 members" — Miro (Enterprise)
- "All pricing is in USD and renews automatically unless cancelled." — Fathom
- "plus local tax" — Todoist

**Feature-delta connectors:**
- "All Free features +" / "All Basic features +" / "All Business features +" — Linear
- "Every Essential feature, plus" / "Every Advanced feature, plus" — Intercom
- "Free features, plus:" / "Standard features, plus:" / "Teams features, plus:" — Calendly

### Feature naming — jargon and its opposite

**Jargon (the worst offenders in the 2026 sample are all metered AI entitlements):**
- "AI Studio Basic w/50K credits per billing account per month" — Asana
- "$0.001 $10 per 10,000 credits" — ClickUp
- "Convert: $50 per 500,000 events" — Framer

**Consequence language (the same job done in the buyer's units):**
- "Create and share unlimited boards. Three most recent ones will remain editable" — Miro Free
- "Invite guests and clients for free. We will only bill you for employees." — Basecamp

**Comparison-table group headers:**
- "Productivity and collaboration" / "AI-powered work" / "Security" / "Compliance" / "Administration" / "Support" — Slack

### Currency, tax and published-price strings

- "$0 USD per month" — GitHub
- "$8.75 USD per user / month" — Slack
- "$8.75 USD per user / month, when paying monthly" — Slack
- "$12 USD" — Grammarly
- "$117.33/mo" (with an explicit currency selector on the page) — Semrush
- "$10.99 per user, per month billed annually" — Asana
- "Starting at $21 USD per user/month" — GitHub Enterprise
- "Starts at $15k /yr" — Calendly
- "plus local tax" — Todoist (Business tier)
- "All pricing is in USD and renews automatically unless cancelled." — Fathom

### Guarantee statements

- "100% Money-back Guarantee" — ClickUp
- "Risk-free, cancel anytime, no long-term lock-in" — Basecamp
- "Try Semrush free for seven days. Cancel anytime." — Semrush
- "There are no contracts, meaning you can cancel anytime (with a complete data export)." — Fathom Analytics
- "14-day free trial. No card required. Free migrations." — Kit
- "Risk-Free • No Credit Card Required" — Mailchimp
- "If you don't wish to upgrade and haven't entered your payment details, your account will automatically be downgraded to the Free plan." — Buffer (stated in FAQ)
- "Todoist meets the compliance standards your company requires, without the complexity." — Todoist *(compliance assurance, not a refund guarantee)*

### FAQ questions that handle objections

**Reversibility / commitment:**
- "Can we upgrade, downgrade, switch packages, or cancel whenever we want?" — Basecamp
- "What if I change my mind?" — monday.com
- "Can I change my plan?" — monday.com
- "Can I upgrade, downgrade or switch between plans?" — Typeform
- "Can I pause a paid subscription?" — Typeform
- "Can I cancel or change my subscription anytime?" — Shopify
- "What happens if I cancel?" — ClickUp
- "What happens if I cancel my subscription?" — Typeform
- "How do I upgrade or downgrade?" — Calendly
- "What does the renewal process look like?" — Calendly
- "Can I upgrade myself or do I have to upgrade my entire Workspace?" — ClickUp
- "I have a Hobby account, how do I upgrade to a paid plan?" — Vercel

**Trial mechanics / auto-charge fear:**
- "Do I need a credit card to try Basecamp?" — Basecamp
- "Will I automatically be charged when my free trial is up?" — Basecamp
- "What happens at the end of my trial?" — Calendly
- "How long is the free trial?" — Mailchimp
- "Can we try Calendly with multiple users?" — Calendly

**Which plan / routing:**
- "Which Vercel plan is right for me?" — Vercel
- "Which pricing plan is right for me?" — monday.com
- "Which plan is best for me and my team?" — Calendly
- "Which plan is right for me?" — Framer
- "Which plan do I need to use Slackbot?" — Slack
- "What are the benefits of a paid vs free plan?" — Typeform
- "What's included in the free plan?" — Typeform, Framer
- "Is Airtable free to use?" — Airtable
- "Is there a free version of monday.com?" — monday.com

**Hidden cost / overage / limits:**
- "Are there any additional fees?" — Shopify
- "What happens when I hit my usage limits?" — Airtable
- "What happens if I go over a limit?" — Framer
- "I went over my included credit. What can I do?" — Vercel
- "Can I buy additional usage?" — Vercel
- "How can I manage my spend?" — Vercel
- "What are the limits for each plan?" — Vercel
- "Is there a limit to the number of responses I can collect?" — Typeform
- "How does Vercel calculate usage?" — Vercel
- "Do cached responses affect usage?" — Vercel
- "What are credits?" — Framer
- "What are AI credits?" — monday.com
- "How is AI Studio priced?" — Asana

**Seat / licence mechanics:**
- "Our team has several accounts which are not being actively used…" — Slack
- "We want to add new users to our workspace…" — Slack
- "How am I billed when I add paid users to a Workspace?" — ClickUp
- "What if I have multiple Workspaces?" — ClickUp
- "How many users are included in my plan?" — Asana
- "How can I add people to my plan?" — Asana
- "What is a seat (Full vs Lite)?" — Intercom
- "Is there a limit to how many teams I can have?" — Vercel
- "How are extra editors billed?" — Framer
- "Could we really add 1000 users and still just pay $299/month total?" — Basecamp *(disbelief objection, stated as disbelief)*

**Billing / payment:**
- "How can I pay for Slack?" — Slack
- "What payment methods do you accept?" — monday.com, Calendly, ClickUp
- "What are my payment options?" — Airtable
- "Can you pay for monday.com monthly?" — monday.com
- "Do you offer custom invoicing?" — Vercel
- "How can I manage my billing?" — monday.com
- "What is your refund policy?" — ClickUp
- "Do you offer discounts if I pay yearly instead of monthly?" — Typeform

**Discount eligibility:**
- "Do you offer non-profit or educational discounts?" — Basecamp
- "Do you offer discounts for non-profit organizations…" — Slack
- "Does monday.com offer plans to nonprofits and NGOs?" — monday.com
- "Do you offer any discounted plans?" — monday.com
- "We're a non-profit organization, is there special pricing available?" — Calendly
- "Does Asana offer a discount for nonprofits?" — Asana

**Security / compliance / trust:**
- "How does Slack protect the security of my data when using AI features?" — Slack
- "How secure is monday.com?" — monday.com
- "How secure is Typeform?" — Typeform
- "What can I do with my data once it's collected?" — Typeform
- "Is Shopify PCI Compliant or PCI Certified?" — Shopify

**Scope / logistics:**
- "In what countries can I use Shopify?" — Shopify
- "Can I use my own domain name with Shopify?" — Shopify
- "Do you get web hosting with Shopify?" — Shopify
- "Do you have mobile apps?" — monday.com
- "I want to transfer a domain name to Vercel. Is there a fee?" — Vercel
- "Can I use Fin with my existing helpdesk?" — Intercom

### Price-justification lines

*Supplementary — from the decision-adjacent teardown lane (L14), all observed 2026-08-12 unless noted. These are the lines that argue a price against an alternative rather than describing the product.*

**Name the alternative's price and let the contrast do the work:**
- Talkspace's own published comparison table — traditional in-person therapy **"$175–$500"** per session against Talkspace "$69–$109" weekly subscription

**Tell one specific person's before-and-after cost:**
- "she was paying nearly $1,000 a month for weekly in-person therapy sessions" — Talkspace blog *(before switching at $276 monthly)*

**Make the real price feel like an edge case:**
- "Most insured members have a $0 copay" · "Average Talkspace member copay per session $10" · "If you pay out-of-pocket Talkspace therapy plans begin at $69/week." — Talkspace *(the out-of-pocket price is stated third)*

**Compare on time rather than money:**
- "Feel better in minutes, not months." — Rosebud

**Let testimonials make the substitution claim (first-party hedges, third-party asserts):**
- "not a substitute for a human connection" — Rosebud, in its own voice
- "ONLY 12.99 a month, way cheaper than a therapist" — user review displayed by Rosebud
- "Much cheaper than private talk therapy" — user review displayed by Rosebud
- "better than the therapists that I have paid for" — user review displayed by Rosebud
- "so much better than in person therapy with a human" — user review displayed by Rosebud
- "I prefer this over seeing my psychiatrist/therapist" — user review displayed by Rosebud

**Divide the price by time until it is small:**
- "12 months $209 average monthly cost $17.42" — Noom
- "$107.99/yr" displayed as "$8.99/mo" — Rosebud
- "$6.67/month" with "$79.99/year + tax" as fine print — Strava *(L13)*
- "$5.83 USD/month" against a $12.99 monthly plan — Headspace *(L13)*
- "$2.92/mo. per person" on a $139.99/year family commitment — Strava *(L13, divided twice: by term and by household)*

**Strike through a higher number even on a small digital good:**
- "$40 $36 both tests" — Enneagram Institute
- "SAVE 30%" against "regularly $155.99/yr" — Rosebud
- "$139.99" over "$174.99" with "Save $35.00" — Blinkist *(L13)*
- "Save 44%" / "50% Off" / "Up to 60% Off" — Strava *(L13)*

**Frame the bundle against the à la carte:**
- "Save 70% vs. buying individual types" — 16Personalities

**Attack the risk instead of the price:**
- "Risk-Free, 100% Money-Back Guarantee" · "we'll refund your money – no questions asked" — 16Personalities
- "If you're unhappy with the product, just email us at support@16personalities.com within 30 days, and we'll refund your money – no questions asked." — 16Personalities
- "Try your first call for free with every mentor you're meeting. Cancel anytime, no questions asked." — MentorCruise
- "Cancel anytime without losing your data." — Day One

**Price the time cost before the money cost:**
- "Only 10 minutes to get a 'freakishly accurate' description of who you are and why you do things the way you do." — 16Personalities

**Quantify the counterfactual saving inside a testimonial:**
- "$14,000" saved on interior design · "$600+" on fashion advice — Intro.co testimonials

**Sell ROI to a buyer who is not the user (B2B boundary case):**
- "14x average return on investment" · "50% reduction in voluntary turnover rate" · "21% uptick in workforce efficiency at Mercedes-AMG Petronas F1" · "Findings based on comparison study of BetterUp users vs. non-users" — BetterUp

**The disqualified play, recorded so it is recognised:**
- "as little as $1 or $5" against "$28–$125" monthly — JustAnswer *(nominal-fee anchoring; the subject of two ROSCA counts — do not copy)*

### Emotional and identity framing

*Supplementary — from the consumer-subscription teardown lane (L13), observed 2026-08-12; note that six of the seven pages in that lane resisted direct fetch and some strings are secondary-sourced, as flagged there.*

- "Be kind to your mind" — Headspace *(sells a changed relationship with yourself; never mentions meditation, sleep or focus)*
- "The best of Strava. Built for your goals." — Strava *(the goals are the user's and pre-existing)*
- "When I cannot fall asleep, I turn on this app and am out within 5 minutes." — Calm, lead testimonial *(specific, immediate, falsifiable tonight)*
- "learn a new language the fun way" — Duolingo *(sells the mechanism when the outcome is intimidating)*
- "Reach your goals faster" versus "For casual learners" — Blinkist tier names *(nobody clicks the button that calls them casual)*
- "I noticed in the app that my resting heart rate had skyrocketed. I went to the ER, where tests determined I had A-fib." — Oura, lead testimonial *(flat voice, first person, describes a consequence)*
- "500+ Sleep Stories®" · "50,000+ minutes of audio" · "Track over 50 health metrics" · "100+ language courses" · "9,000+ summaries" — counted features across the lane
- "a Calm Science study of 900+ parents (US)" — Calm *(manufactured authority, named, with the sample size stated)*
- "Start achieving your goals. On us for 30 days." — Strava *(the trial as gift rather than sample)*
- "HSA/FSA eligible membership coverage" — Oura *(recategorises the spend out of discretionary wellness)*
- "Each WHOOP membership includes our most advanced wearable technology, 24/7 health insights, and personalized coaching…" — Whoop *(guarantees the floor before the tiers split)*
- "Enjoy 6x the mindfulness for less" — Headspace *(divides by household, verbally)*
- "Save 85%, with valid SheerID student verification" — Headspace *(affinity discount as objection catch)*
- "By proceeding you accept that $139.99 is processed as an intro offer, then $174.99 will be billed every 12 months automatically. You can cancel anytime in your Settings." — Blinkist
- "Today / Day 5 / Day 7" with "Day 5: Get reminded when your trial is about to end" — Duolingo trial calendar
- "20% discount reserved for🔥 10:00" — Blinkist *(countdown urgency on a digital good; recorded as the least honest technique in that lane, not as a recommendation)*
- "Annual only." — Strava, on three of four plans *(monthly made hard to choose rather than discounted against)*
- "Your journal for life" · "The #1 journaling app" · "Start journaling. Stay consistent. Reflect more deeply." · "Free to use. Better with the Gold plan" · "Start your free 1 month trial inside the app. Cancel anytime without losing your data." — Day One
- "Even if we wanted to read what's in your journal (we don't), we couldn't." — Day One *(privacy as a capability claim, not an intention)*
- "Beat Stress in 120 Seconds — AI-Powered Journal" · "Your Journal for a Healthier Mind" · "Free and private." — Stoic
- "Daily self-care is finally fun — take care of your pet by taking care of yourself!" — Finch
- "The World's First Intelligent Journal" · "a journal utilizing artificial intelligence to help you structure and reflect upon your daily thoughts" — Reflectly
- "Founded as a science-based nonprofit, How We Feel is made possible by donations from people who are passionate about bringing mental wellbeing to the widest possible audience." — How We Feel
- "It's so incredible to finally be understood." — 16Personalities *(L14)*
- "Premium Career Suite | Build a career that's right for your unique personality." — 16Personalities *(L14)*
- "Accelerate your personal growth with the world's best AI journal" — Rosebud *(L14)*
- "Someone To Talk To, Anytime" · "Whether you're overthinking a relationship, trying to make a decision, or just need to get something out of your head, Abby helps you talk it through." — Abby *(L14)*
- "Abby is not a licensed therapist, psychologist, or psychiatrist" · "Abby cannot diagnose mental health conditions" · "not a replacement for professional therapy or clinical care" — Abby, safety framing stated plainly *(L14)*
- "We don't accept cash, crypto, tacos, or private jets in exchange for your personal information" — Rocket Money *(L14; specificity and humour carrying a privacy promise)*

### Prosumer-SaaS descriptors and CTAs

*Supplementary — from the prosumer-SaaS teardown lane (L11), observed 2026-08-12.*

- "Chat with AI that works in every application and tab" / "Get unlimited paragraph rewrites and translations in 15+ languages" / "Fly through your inbox and save 4 hours every single week" / "Scale enterprise-grade AI with advanced security and controls" — Superhuman tier descriptors
- "Get Superhuman Free" / "Get Superhuman Pro" / "Get Superhuman Business" / "Contact Sales" — Superhuman CTAs
- "Your Superhuman suite" — Superhuman headline
- "Free for everyone" · "Billed yearly" · "Annual billing only" — Linear billing descriptors
- "Trusted by more than 40,000 companies" with link "Customer stories→" — Linear
- "Raycast Pro" / "New Level Unlocked" / "Turn Pro to harness the power of AI, make Raycast your own with custom themes, keep your Macs in sync and more." — Raycast
- "Raycast Pricing: Free Forever or Pro with AI for $8/month" — Raycast page title
- "You've got questions. We've got answers" — Raycast subhead
- "Monthly Subscription" and "Annual Subscription -20%" — Raycast, used as section headers *instead of* a toggle
- "Starting at $8/month" — Raycast
- "for individuals. It includes Raycast AI, Cloud Sync and more." / "for organizations. On top of all Pro features, teams can share Extensions, Snippets and Quicklinks privately." — Raycast plan descriptions
- "50% discount to verified students" — "Only applies to the Raycast Pro plan, and not the Advanced AI add-on." — Raycast
- "Custom limits, Unlimited editors, Enterprise-grade security, Uptime guarantee, SCIM, SSO" — Framer Enterprise feature list
- "If you live in the EU or Turkey, you are legally eligible for a refund if your subscription was purchased within the last 14 days." — Framer refund policy
- "Payments for Figma subscriptions are non-refundable." — Figma
- "What if my side project receives a lot of traffic?" — Framer FAQ *(the exact fear that stops a hobbyist upgrading)*
- "What is a seat?" — Figma, leading FAQ question *(a novel unit taught before it is sold)*

## Interactions

**P-142 (awareness ladder) versus `05-page-anatomy.md` P-121 (fold) and P-139 (page length).** These are the same argument reached from two directions and they resolve cleanly. P-121 says the decision must sit in the first two screenfuls; P-142 says the most-aware buyer converts at the top and the solution-aware buyer needs comparison at the bottom. Together they produce one instruction: **the page is long but front-loaded**, so length costs the ready buyer nothing and gives the evaluating buyer somewhere to go. What they jointly forbid is the common compromise of a medium-length page written for the average visitor, which serves neither end of the ladder. P-139's "cut hard for consumer mobile" is compatible only when your traffic is genuinely all most-aware — check before you cut.

**P-145 (denominator) versus P-159 through P-162 (the justification block).** The denominator patterns and the justification patterns compete for the same two inches of page beside the price, and the denominator should usually win, because it is free and honest and almost nobody else has taken the slot. Price justification is a persuasion argument with a real chance of reading as defensive; time-to-first-value is an information disclosure that reads as confidence. If you can only fit one block beside the price, fit P-145 and push P-160/P-161 to the bottom of the page where solution-aware readers arrive.

**P-147 (descriptor as promise) versus `05-page-anatomy.md` P-125 (fixed card order) and P-126 (delta list).** P-125 owns the slot and P-147 owns the sentence that goes in it, and they fail together in one specific way: a promise-style descriptor that is long enough to break the vertical rhythm across cards destroys the horizontal scan P-125 exists to protect. Write the promise, then cut it to the length of the shortest card's descriptor. If it will not fit, the promise is not specific enough — vagueness is what makes copy long.

**P-148/P-149/P-150 (savings expressions) versus `05-page-anatomy.md` P-123/P-124 (toggle placement and default) and P-129 (anchoring).** The toggle is the element that carries the saving, so the copy and the placement are one decision. P-150's "denominate annual in monthly units" and P-129's "term anchor" are the same move seen from two layers: showing "$7.50/mo billed annually" beside a struck "$9 monthly" is simultaneously a denomination choice and a reference-price choice. The one place they can pull apart is the hedge — a page that defaults to annual (P-124) and hedges the toggle with "up to" (P-148) has made its default's headline benefit vague, which is the worst of both. Equalise the discount across tiers so the hedge is unnecessary.

**P-151 (renewal disclosure) versus P-154 (offer in the button) and `07-risk-reversal.md`.** These three compete for the space under the button and there is room for two lines, not four. The ordering rule is: whichever of the two trial fears is live in your category goes first (P-156), the renewal amount goes second, and P-154's offer specificity moves *into* the button rather than under it. If you cannot fit the renewal disclosure under the button, that is a signal your offer has too many terms, not that the disclosure should be dropped.

**P-152 (consequences not credits) versus `05-page-anatomy.md` P-131 (lawn-mower scan) and P-133 (grouped table).** P-131 explicitly delegates jargon replacement to this pattern, and the delegation runs one way: shortening the table (P-133) does not fix jargon, it hides it. Do P-152 first, because replacing credits with consequences frequently reveals that two rows were saying the same thing and can be merged — which shortens the table for free and reduces the work P-133 has to do.

**P-153/P-154/P-155 (three CTA patterns) with each other.** These can conflict inside one button. "Start with Books — 14 days free, no card" satisfies all three and is too long. The priority order when they collide is: accuracy about the next screen (P-153) beats offer specificity (P-154) beats tier naming (P-155), because a wrong prediction costs a click and a wasted trip, while a missing tier name costs only clarity for a minority of readers who can be served by an accessible name instead.

**P-157 (FAQ voice) versus `05-page-anatomy.md` P-137 (FAQ ordering).** P-137 owns which questions appear and in what order; this layer owns their wording. The two share one failure diagnosis: if you find yourself writing four routing questions in the buyer's anxious voice, the voice is not the problem — the cards are, and the correct fix is P-147, not a better FAQ.

**P-158 (damaging admission) versus P-164 (count the feature) and `09-trust-and-proof.md`.** A page that discloses a limitation and states a count in the same block is making two credibility bids at once, and they reinforce each other — the admission makes the number believable and the number makes the admission read as confidence rather than apology. The failure is doing only the first: a page full of honest limitations and no evidence reads as a product that does not work.

**P-166 (register) versus P-154 (CTA specificity), P-159 (emotion then logic) and `08-urgency-and-timing.md`.** This is the layer's central conflict and it is asymmetric in a way that matters. **A conversion test can see the upside of a direct-response tactic and cannot see its downside.** Tuncer et al. measured the benevolence cost of scarcity cues — including honest ones — and a subscription pays that cost at renewal, which is months outside any test window. The rule this library applies: mechanisms that are *disclosures* (specificity, adjacency, ordering, naming) carry no register cost and can be adopted as-is; mechanisms that are *pressure* (timers, fabricated scarcity, invented value stacks) must be declined or run with the trust cost stated in writing beside the expected lift. Never let an A/B win be the whole argument for a pressure tactic — it is the half of the ledger the instrument can read.

**P-167 (sophistication level) versus P-143 (outcome headline) and `09-trust-and-proof.md` (badge wording).** In a level 4–5 market an outcome headline that makes a bigger claim is the wrong move even though P-143 recommends outcome framing — the resolution is that the outcome is stated as a *mechanism* or an *identity* rather than as a superlative. This is also why the falsifiable "Most popular" badge is receding at the sophisticated end while "Recommended" survives: the badge wording is a truth claim owned by the trust layer, and a cynical market prices unfalsifiable opinion above unverifiable fact.

**This layer versus `07-risk-reversal.md`.** The copy bank carries the guarantee statements because they are language, but the *decision* about which guarantee instrument to run — unconditional, conditional, anti-guarantee, performance — belongs to Layer 07 and is not made here. Two cross-layer rules that touch wording and are recorded here for the writer: name the guarantee rather than calling it "satisfaction", because a generic guarantee is invisible precisely because it is universal; and build the guarantee from the buyer's single biggest fear restated as a promise, which means writing down the sentence they say to themselves before closing the tab and guaranteeing against exactly that.

## Folklore

| Claim | Where it circulates | Traceable to | Verdict |
|---|---|---|---|
| Changing a CTA from "Start your free 30 day trial" to "Start **my** free 30 day trial" lifts click-through **+90%** | Unbounce (×2 articles), KISSmetrics, KlientBoost, Campaign Monitor, Zoho Academy, Unlayer, e-shot, LinkedIn, and ~10 content farms | Michael Aagaard / ContentVerve, a test run for Unbounce, c. 2013. The original post is dead; the only reachable copy is a Wayback capture that was **blocked from the research environment** | **Do not quote 90%, and do not adopt first-person copy on the strength of it.** One test, one page, one product, ~13 years old, three-week runtime, **no published sample size or confidence interval in any secondary account**. **Zero of 33 live pricing pages fetched 2026-08-12 use first-person CTA copy** — thirteen years of near-universal citation with no observable adoption among the highest-traffic SaaS pricing pages in the world. That absence is itself evidence. The defensible residue is *specificity*, at **10–40%**, from KISSmetrics' secondary and unaudited statement — labelled as such in P-154 |
| A "most popular" badge on the middle tier increases selection of that tier by **30–40%** | leadsuitenow.com, attributed to "Conversion Rate Experts research" | No reachable study; Conversion Rate Experts has no published paper matching this | **Fabricated. Use no number for badge lift.** No badge-lift figure survives source-chasing anywhere in the public record |
| "Most popular" badges increase conversions by **30%** | wppricingtables.com | None — it is marketing copy for a WordPress plugin | **Untraceable** |
| Product badges increase conversion rates by **55%** | plumrocket.com | None | **Untraceable** |
| Trust badges increase conversion **15–30%** for unfamiliar brands | growth-engines.com | None | **Untraceable** |
| FAQ sections produce **15–25% lower exit rates** on pricing pages | leadsuitenow.com | None | **Untraceable. Invented-looking range.** There is no credible evidence that FAQ presence lifts conversion at all — which does not mean FAQs are useless, only that no number may be attached to them |
| A money-back guarantee increases sales **21%** and overall revenue **6.4%** | SPOTIO, leadsuitenow.com, multiple CRO blogs | Attributed to "Neil Patel"; no study, dataset or test writeup located | **Untraceable.** A separate single-operator self-reported test on a $197 product reports a similar shape (+21% sales, 12% refund requests) with **no sample size and no significance testing** — that one is citable as an anecdote, the Patel attribution is not |
| A more compelling offer produces a **2.5×** response rate on the same ad spend | Hormozi, *$100M Offers*, and every summary of it | The book, which cites nothing | **Book assertion with no published test.** The value equation remains useful as a diagnostic (P-145); the multiplier does not |
| "**50% more free**" outsold a mathematically superior "35% off" by **75% more units** (University of Minnesota) | ReferralCandy and a wide cluster of pricing-psychology posts | A secondary citation of a study that could not be located at primary level | **Real-sounding, secondary only.** Do not present it as a measured result. The months-free framing (P-149) stands on its own mechanics without it |
| **94%** of consumers are likely to be loyal to a brand offering complete transparency | Label Insight, quoted widely in transparency and damaging-admission posts | The original Label Insight study and its methodology could not be located | **Untraceable at primary level.** Treat the damaging-admission effect as plausible-but-unmeasured |
| Checkout countdown timers lift purchase completion **up to 9.3%** when the deadline is real | revenueflows.ai and adjacent Shopify-optimisation posts | The source presents this and every adjacent figure with no attribution | **Untraceable** |
| Buyers who detect fake urgency show **23–41%** lower repeat-purchase rates | revenueflows.ai | Presented without attribution; no merchant cohort data published | **Untraceable — and note the irony that the anti-urgency case is being made with the same unsourced-number habit as the pro-urgency case.** The defensible finding is Tuncer et al. (2023, n=202) on benevolence, which measured perceptions rather than revenue |
| "**37%** of our customers would not proceed with the purchase once they would find out that VAT was added at the later stage" | UX StackExchange answer, quoted in tax-display discussions | A single practitioner's unaudited first-party claim, no methodology | **Anecdote, not research.** Directionally consistent with Baymard's 12% "couldn't see total cost before checkout" figure, but the two are not interchangeable |
| The per-day reframe ("less than a cup of coffee a day") lifts subscription conversion | Ubiquitous in pricing-psychology writing | No controlled test of the subscription case located anywhere | **Unverified in either direction.** It appears on **none of the 33 B2B and prosumer pricing pages fetched 2026-08-12**, and the consumer pages that would carry it could not be fetched. Treat the *mechanic* as plausible and the *stock phrase* as spent |
| "Pricing Page Conversion Statistics 2026: A 4,200 A/B Test Study" | visionary-marketing.co.uk | No underlying dataset published | **Treat as fabricated until the dataset is shown.** The "we analysed N thousand tests" genre dated 2025–26 is overwhelmingly AI-generated, and it is the dominant source of confident copy statistics in current search results |

## Where this layer is thin

- **There is no controlled test of pricing-page headline framing anywhere in the public record.** P-143 rests entirely on a census of what 33 companies chose, which is revealed preference and nothing more. The same is true of the subhead (P-144), tier naming (P-146) and descriptor framing (P-147). Four of this layer's load-bearing patterns therefore have zero causal evidence between them, and the honest posture is to treat the census as a prior and instrument your own page.
- **The single most-cited number in CRO — the +90% first-person CTA lift — could not be verified at source**, because the primary post is dead and web.archive.org was unreachable from the research environment. A retry from a network with archive access would settle it. Until then the entire CTA-copy literature rests on a secondary 10–40% range from a page that also could not be fetched directly, which is a weaker foundation than the volume of citation suggests.
- **Savings-expression framing has never been tested.** Percentage versus currency versus months-free versus dual expression is a four-way comparison that every SaaS company makes and nobody has published. It is also one of the cheapest tests available to anyone with traffic, which makes the absence surprising.
- **Nothing in the direct-response canon has a clean public counterfactual.** The value equation, the awareness ladder, the sophistication ladder, the emotion-then-logic structure and the damaging admission are all structurally illuminating and empirically unmeasured. Schwartz's framework in particular has no published effect size of any kind, and its stage-by-stage pricing guidance is practitioner inference layered on top of a doctrine that was itself never tested.
- **The scarcity research measures perceptions, not revenue.** Tuncer et al. demonstrated a benevolence cost with a stated N and real instruments, but measured frustration, usability and trust rather than purchases or lifetime value. The trust cost is well demonstrated; **the size of the revenue consequence is unknown**, which means P-166's trade-off can be stated but not priced. Anyone claiming to know the exchange rate between conversion lift and benevolence damage is guessing.
- **The evidence base skews heavily toward B2B and prosumer SaaS.** The 33-page census, the Copyhackers checklist, the Gartner review figures and the value-stack literature all come from B2B or high-ticket contexts. Transfer to a sub-$30/month consumer subscription is an assumption running through this entire layer, and it is most suspect exactly where consumer-specific devices live — the per-day reframe, emotional framing, the identity tier name.
- **Guarantee wording has no effect evidence at all.** Whether "no questions asked" produces materially more refunds than a neutral phrasing is undocumented everywhere. Everything in the guarantee section of the copy bank is craft consensus plus transcription.
- **The consumer-subscription lane's copy is unevenly sourced.** Six of the seven pages in that teardown resisted direct fetch; the in-app paywall evidence is strong and recent for Duolingo, strong but undated for Blinkist and Strava, and three years stale for Calm. Those strings are reproduced here because they are transcriptions rather than paraphrases, but they are a weaker class of observation than the 33 pages fetched directly on 2026-08-12, and the supplementary sections are labelled so the distinction survives.
- **A solo founder at ~2,000 monthly visitors cannot test a single pattern in this layer.** Detecting even a 20% change in click-through on a CTA at 40 conversions a month takes longer than the product's strategy will survive. The honest posture at that scale is to adopt the disclosure patterns as priors — P-145, P-152, P-156, P-157 cost nothing and are defensible on comprehension grounds alone — decline the pressure patterns on the trust arithmetic in P-166, and spend experimental budget where published effect sizes are an order of magnitude larger: packaging, plan visibility and the value metric.
