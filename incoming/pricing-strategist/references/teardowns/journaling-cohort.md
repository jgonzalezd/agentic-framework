# The journaling cohort — Day One · Stoic · Finch · Reflectly · How We Feel · Jour

- **URL:** `dayoneapp.com/pricing/`, `getstoic.com`, `finchcare.com`, `reflectlyapp.com`, `howwefeel.org`, `jour.com`
- **Observed:** 2026-08-12
- **Fetched successfully:** **✅ Day One, Stoic, Finch, Reflectly · ❌ How We Feel (1,228-byte JS shell) · Jour redirects away.** Prices for Stoic, Finch and Reflectly come **only from the Apple App Store IAP list**, which exposes prices but **not billing periods.**
- **Category:** consumer subscription (journalling and self-care apps)
- **Buyer:** an individual building a reflection habit
- **Value metric:** **the account** across all six — nothing is metered anywhere in the cohort
- **Model:** mostly store-gated freemium subscription; **one lifetime SKU; one nonprofit; one dead** — `<models pack pending — references/models/ not yet populated>`
- **Scale:** Day One "Over 150,000 5-star reviews" (homepage) / "more than 200,000" (privacy pledge page) — **the two figures conflict**; Stoic "Over 3 MILLION people already journaling with stoic", 4.82 / 35,277 ratings; Finch 4.947 / 738,701 ratings

> **Torn down as a cohort because the structural finding is cohort-level: four of six never show a price on their own website.**

## Structure, top to bottom

Two distinct architectures:

**Day One** publishes a conventional pricing page — tiers, annual prices, feature comparison, and an extensive privacy pledge on a companion page.

**Reflectly, Stoic and Finch publish zero pricing on the open web.** Their sites are pure **store-badge funnels** — no price, no tier table, no pricing page (Stoic's `/pricing`, `/premium` and `/faq` all 404; Finch's `/plus` and `/guardian` both 404). **The paywall lands post-install, inside the app, after onboarding.** This defeats web-based competitive price comparison by design and enables the heavy regional and A/B testing visible in their SKU lists.

## Verbatim copy

**Day One:**
> **"Your journal for life"** · **"The #1 journaling app"**
> **"Start journaling. Stay consistent. Reflect more deeply."**
> **"Free to use. Better with the Gold plan"**
> **"Start your free 1 month trial inside the app. Cancel anytime without losing your data."**

**Day One, privacy — the gold standard in the entire corpus:**
> **"Privacy is the literal foundation upon which Day One is built."**
> **"End-to-end encryption is built into Day One and turned on by default."**
> **"Even if we wanted to read what's in your journal (we don't), we couldn't."**
> **"your content is 100% private."**
> **"Day One is safe from snooping eyes, just how a journal should be."**
> **"What you put in Day One will always be your data, but we pledge to protect it like it's our own."**
> **"You own the data, we keep it safe"**

**Stoic:**
> **"Beat Stress in 120 Seconds — AI-Powered Journal"** · **"Your Journal for a Healthier Mind"** · **"Free and private."**
> **"The journals are securely stored on your devices, and safely backed to ensure they're never lost. Absolutely nobody can access them but you."**

**Finch:**
> **"Daily self-care is finally fun — take care of your pet by taking care of yourself!"**

**Reflectly:**
> **"The World's First Intelligent Journal"**
> **"a journal utilizing artificial intelligence to help you structure and reflect upon your daily thoughts"**

**How We Feel:**
> **"Founded as a science-based nonprofit, How We Feel is made possible by donations from people who are passionate about bringing mental wellbeing to the widest possible audience."**
> **"All of your data is kept on your device unless you opt-in to send an anonymized version of your check-ins to be used in research to help more people."**

- **Badges / billing toggles / savings expressions:** `none observed on any of the six` — **Day One's pricing page carries no annual-vs-monthly savings framing whatsoever, which is unusual for the category**
- **Guarantee / refund:** `none observed` on any of the six; Day One's **"Cancel anytime without losing your data"** is the nearest equivalent

## Tier table

| Product | Free | Monthly | Annual | Lifetime |
|---|---|---|---|---|
| **Day One** | **"$0 per year"** (Basic) | **"$8.99" Silver — App Store SKU only, conflicts with own blog** | Silver **"$49.99"** · Gold **"$74.99"** | **None** |
| **Stoic** | **"Free and private."** | not verified | not verified | **"$299.00" — "Stoic Lifetime Premium"** |
| **Finch** | Yes | not verified — **9 SKUs $5.99–$69.99**, plus **"Guardian Program — $7.99"** | not verified | **None** |
| **Reflectly** | Yes | not verified — **8 SKUs $4.99–$59.99** | not verified | not verified |
| **How We Feel** | **Free, no IAPs at all** | — | — | — |
| **Jour** | **Defunct** | — | — | — |

**Trial:** Day One "free 1 month trial inside the app". **Overage:** none anywhere. **Expiry:** n/a.

> **Day One's monthly-price conflict is unresolved.** Its own blog states flatly **"At this time, monthly plans are not offered,"** and the pricing page lists annual only — but the live App Store listing exposes **"Day One Silver (1 Month) — $8.99."** **Two first-party sources disagree; the blog could not be dated. Treat Day One monthly as not verified.**

> **Apple's IAP list gives prices but not periods.** Only Day One names SKUs with durations. **For Reflectly, Stoic and Finch, monthly-versus-annual assignment is genuinely unobtainable from public sources — any teardown asserting "$X/month" for those three without in-app observation is guessing.**

## Ladder arithmetic

**Day One is the only member whose ladder can be computed.**

| Tier | Annual | ÷ 12 | Step |
|---|---|---|---|
| Basic | "$0 per year" | $0 | — |
| Silver | **$49.99** | **$4.17/mo** | — |
| Gold | **$74.99** | **$6.25/mo** | **1.50× Silver** |

**And Day One's pricing page carries no savings framing at all** — no percentage, no strikethrough, no "best value" badge, no monthly price to compare against. **In a category where every peer divides the annual number down to a monthly one, Day One simply publishes two annual numbers.** If the App Store's $8.99 monthly SKU is real, the implied annual saving on Silver would be $8.99 × 12 = $107.88 → $49.99, a **53.7% discount** — **derived from a conflicted source, and Day One does not claim it.** A company that could advertise a 54% saving and declines to is making a positioning choice.

**Stoic's lifetime arithmetic is the one genuine one-off in the cohort.** **"$299.00" Stoic Lifetime Premium** against a top AI SKU of **$99.99** is **2.99× — a roughly three-year breakeven** if $99.99 is the annual AI rate. **The period is not verified**, so the breakeven is a shape rather than a number.

**Stoic also runs two parallel subscription ladders** — a base "premium" ladder (**$6.99–$39.99**) and a materially more expensive **"AI" ladder ($12.99–$99.99)**. At the top, the AI ladder is **2.5× the base ladder**. **Parallel AI and non-AI ladders let the AI tier carry a premium without repricing the base product** — the same decoupling `raycast.md` achieves with a stackable add-on, executed as two separate ladders instead.

**Finch's SKU spread ($5.99–$69.99, nine SKUs) is an 11.7× range**, and **Reflectly's ($4.99–$59.99, eight SKUs) is 12.0×.** Without billing periods these cannot be resolved into ladders — but **the sheer SKU count is itself evidence of heavy regional and A/B price testing**, which is precisely what store-gating enables. Finch also runs **a second cheap paid tier with its own CTA — "Guardian Program — $7.99" — whose purpose could not be verified (the help centre 403s).**

**Does any add-on invert the ladder?** No add-ons observed anywhere in the cohort.

**Does a lower tier plus add-ons reach a higher tier?** No stacking path in any of the six.

**Refund arithmetic:** none anywhere.

## Social proof, trust and objection handling

**Day One is the strongest:** "Apple App of the Year," "Apple Editors' Choice," "Apple Design Award," **"Over 150,000 5-star reviews,"** press logos (Time, The Verge, Washington Post, Lifehacker, 9to5Mac, Wired, New York Times), App Store 4.8 / 118,000 ratings, "Editors' Choice."

**Stoic:** "Over 3 MILLION people already journaling with stoic," Y Combinator S19, "App of the Day award...in 100+ countries," 4.82 / 35,277 ratings.

**Finch:** 4.947 / 738,701 ratings, "Editors' Choice."

> **⚠ Two sites carry stale social proof.** **Finch's homepage says "500k+ ratings" against an actual 738,701, and rounds 4.9 up to 5.0.** **Day One says "Over 150,000 5-star reviews" on the homepage but "more than 200,000" on its privacy pledge page.** Both are understatements in Finch's rating count and inconsistencies in Day One's — evidence that social-proof numbers rot unless someone owns them.

**The privacy hierarchy across the cohort is the most instructive trust material in the corpus**, because the six sit at every point on a spectrum:

1. **Day One — a capability claim.** **"Even if we wanted to read what's in your journal (we don't), we couldn't."** This is the best privacy sentence found anywhere in this research. It works because it describes **a mechanism, not an intention** — the parenthetical disclaims the desire, and then the clause disclaims the *capability*. **A user can verify a capability claim; they can only trust an intention.**
2. **Stoic — exclusivity without encryption.** "Absolutely nobody can access them but you." Strong-sounding, but no mechanism is named.
3. **How We Feel — opt-in research, on-device by default.** "All of your data is kept on your device unless you opt-in…"
4. **`rosebud.md` — the AI hedge.** "Encrypted in transit and at rest" plus a "HIPAA aligned" badge. **Not end-to-end, and cannot be**, because AI must read the text.

**The structural point: AI-over-your-text and end-to-end encryption are incompatible, and the copy shows it.** Day One claims it *cannot* read your journal; every AI journal in this corpus claims only that it encrypts what it *can* read.

## FAQ

**None captured on any of the six.** `N/A — not captured in research.`

## Mechanisms in use

`<pattern IDs pending — library numbering in progress>`

- **Store-gated pricing as deliberate anti-comparison** (Reflectly, Stoic, Finch) — no price on the open web, paywall post-install.
- **Parallel AI and non-AI ladders** (Stoic) letting the AI tier carry a premium without repricing the base.
- **A lifetime SKU as the escape from recurring billing** (Stoic, $299).
- **A second cheap paid tier with its own CTA** (Finch's "Guardian Program — $7.99") — purpose unverified.
- **Nonprofit positioning as the alternative to monetisation entirely** (How We Feel).
- **Annual-only publication with no savings framing** (Day One).
- **Privacy as a capability claim rather than a policy** (Day One).
- **Trial inside the app, with data portability promised** ("Cancel anytime without losing your data").

## What they do that most pages don't

**Day One states a privacy mechanism instead of a privacy intention**, and pairs it with **"Cancel anytime without losing your data"** — which answers the second-biggest objection to a journalling subscription (lock-in of years of personal writing) in six words.

**Three of the six refuse to publish any price at all.** Store-gating is a real strategy with a real payoff — it makes the SKU proliferation visible in Finch's nine and Reflectly's eight possible, because no competitor and no journalist can build a comparison table.

**Stoic sells a $299 lifetime.** It is **the only one-off purchase in the entire journalling cohort**, and it proves a segment will pay a large single sum to escape recurring billing. Note what it is *not*: a one-off **deliverable**. It is a one-off **purchase of a subscription** — a different animal from the artefacts in `one-off-report-market.md`.

## What they conspicuously omit

- **Any price on the open web** — Reflectly, Stoic, Finch.
- **Any billing period in the store data** — Reflectly, Stoic, Finch.
- **Any savings framing** — Day One, despite having a large one available.
- **Any refund or guarantee** — all six.
- **Any FAQ** — all six.

## Documented pricing changes

| Date | Change | Stated reason | Source |
|---|---|---|---|
| — | **Jour is gone.** `jour.com` **302-redirects to `alan.com`** (a French health-insurance company); Alan's site makes no mention of Jour; an iTunes catalogue search returns no Jour app | not stated | observed 2026-08-12 |
| 2026-09-30 | **Youper announces on its homepage that it is shutting down** *(adjacent product, recorded here for the attrition signal)* | not stated | observed 2026-08-12 |

**No pricing history was obtainable for any surviving member, and none was reconstructed.**

> **Two dead products in a seven-product sample is a real signal about category attrition**, and it belongs in any pricing analysis of this space: the going rate for a journalling subscription is being set by a population that is visibly shrinking.

## What transfers, and what doesn't

**Store-gating is available only to app-first products.** A web product has no store to hide behind, and hiding the price on a web page is simply hiding the price — with the measured cost documented in `betterhelp.md` (39% of users wanted the price sooner).

**Genuinely universal:**
1. **State privacy as a mechanism, not an intention.** **"Even if we wanted to read what's in your journal (we don't), we couldn't."** Disclaim the desire, then disclaim the *capability*. If your architecture genuinely prevents you from reading user data — no accounts, nothing stored, gone when the tab closes — **you can make an unqualified claim every AI competitor must hedge.** Put it adjacent to the input box, where the hesitation actually happens.
2. **Answer the lock-in objection explicitly.** "Cancel anytime without losing your data" removes the fear that a subscription is holding years of personal writing hostage.
3. **A lifetime SKU is a real product for a real segment.** Stoic's $299 at roughly 3× its top annual rate shows a buyer will pay to stop being billed. Price it at 3–5× annual and treat it as a distinct offer, not a discount.
4. **Run parallel ladders if your AI costs more than your base product.** Stoic's base ($6.99–$39.99) and AI ($12.99–$99.99) ladders let the expensive capability carry its own price without repricing what already worked.
5. **Own your social-proof numbers.** Finch understates its own rating count by a third; Day One contradicts itself between two pages. **Numbers rot, and a buyer who catches one has been handed a reason to disbelieve the rest.**
