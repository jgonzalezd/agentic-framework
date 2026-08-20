# Superhuman

- **URL:** attempted https://superhuman.com/pricing and https://superhuman.com/mail/pricing · fetched instead https://superhuman.com/plans
- **Observed:** 2026-08-12
- **Fetched successfully:** **no, for the target page.** Both `/pricing` and `/mail/pricing` return a JavaScript shell containing only the `<title>` "Superhuman Mail | Pricing" and no body content — the rendered Mail pricing page could not be read. `https://superhuman.com/plans` **did** fetch successfully and returns a *suite-level* pricing page covering Mail, Grammarly, Docs and Go; all first-hand copy below is from `/plans`. Standalone Mail pricing is `[secondary — page would not fetch]` and explicitly flagged as unverified. Nothing here is reconstructed from memory.
- **Category:** prosumer SaaS (premium email client, now bundled into a writing/productivity suite)
- **Buyer:** individual knowledge worker, sales/exec persona
- **Value metric:** **seats** (per user/month), with capability tiers
- **Model:** per-seat subscription where a formerly standalone premium product is used as the upgrade trigger for a suite tier — `<models pack pending — references/models/ not yet populated>`
- **Scale:** "Trusted by over 40 million people and 50,000 teams" (stated on `/plans`, observed 2026-08-12)

## Structure, top to bottom

As observed on `/plans`: headline "Your Superhuman suite" with a tagline describing Mail, Grammarly, Docs and Go → four tier cards (Free · Pro · Business · Enterprise) each with a descriptor and CTA → social proof line and logo row. **No comparison table, badge or FAQ was observed on this page.** The structure of the Mail-specific pricing page is **unknown — the page would not render.**

## Verbatim copy

*(All from `/plans`, observed 2026-08-12, unless marked secondary.)*

- **Headline:** "Your Superhuman suite"
- **Subhead:** a tagline describing Mail, Grammarly, Docs, and Go — exact string not captured
- **Tier names:** Free · Pro · Business · Enterprise
- **Tier descriptors:**
  - Free: "Chat with AI that works in every application and tab"
  - Pro: "Get unlimited paragraph rewrites and translations in 15+ languages"
  - Business: "Fly through your inbox and save 4 hours every single week"
  - Enterprise: "Scale enterprise-grade AI with advanced security and controls"
- **Badge:** none observed
- **Billing toggle:** not observed as a control; both price sets appear in the copy — "$12/month (billed annually)" / "$15/month"; "$33/month (billed annually)" / "$40/month"
- **Savings expression:** `none` observed — no percentage or duration framing
- **CTAs:** "Get Superhuman Free" / "Get Superhuman Pro" / "Get Superhuman Business" / "Contact Sales"
- **Guarantee / refund:** none observed on this page
- **Limit language:** "unlimited paragraph rewrites and translations in 15+ languages" (Pro); "unlimited automations" (Business)
- **Microcopy under CTA:** none observed
- **Social proof:** "Trusted by over 40 million people and 50,000 teams"

## Tier table

*(as observed on `/plans`)*

| Tier | Monthly | Annual (as displayed) | Fenced on | Allowance | CTA | Badge |
|---|---|---|---|---|---|---|
| Free | "$0" | — | AI chat, writing help 20+ languages, collaborative docs | not itemised | "Get Superhuman Free" | — |
| Pro | "$15/month" | "$12/month (billed annually)" | unlimited rewrites, plagiarism detection, custom domain publishing | "unlimited paragraph rewrites" | "Get Superhuman Pro" | — |
| Business | "$40/month" | "$33/month (billed annually)" | **Mail**, CRM integrations, unlimited automations | "unlimited automations" | "Get Superhuman Business" | — |
| Enterprise | — | "Custom pricing" | analytics, SAML SSO, BYOK encryption, dedicated support | custom | "Contact Sales" | — |

**Standalone Mail pricing** `[secondary — page would not fetch]`: multiple third-party sources as of 2026 report **Starter $30/mo (or $25/mo billed annually, $300/yr)** and **Business $40/mo (or $33/mo annually, $396/yr)**, with Enterprise via `sdr-team@superhuman.com`. Trial length is reported inconsistently across sources (30 days most commonly cited, 7 days in some signup paths). **None of this was verified against the live page.**

## Ladder arithmetic

**Annual discount, from the displayed pairs.**
- Pro: $12 ÷ $15 = **20.0% off** monthly; $12 × 12 = $144/yr vs $180 at monthly rate.
- Business: $33 ÷ $40 = **17.5% off** monthly; $33 × 12 = $396/yr vs $480 at monthly rate.

The two tiers carry **different annual discounts**, and the cheaper tier gets the *better* discount — mildly counter-conventional, since the deeper commitment usually earns the deeper cut.

**Rung spacing.** Pro→Business is **2.75×** annual ($12→$33) and **2.67×** monthly ($15→$40). That is a very wide single step, and the entire justification is that Mail sits above it.

**The structural fact.** On the suite page **Superhuman Mail is fenced behind the Business tier**. The email product that (per `[secondary]` history) was the whole company at a flat $30/user/mo is now the *upgrade trigger* for a $33/mo suite plan. Against that history, the current Business annual rate of $33 is **+10% on the old flat $30**, while the entry point into the brand fell from $30 to $0.

**Cross-check on the secondary Mail figures.** $25/mo × 12 = $300/yr ✓ matches the reported "$300/yr". $33/mo × 12 = $396/yr ✓ matches the reported "$396/yr". The two secondary figures are internally consistent, which raises confidence in the arithmetic without making them first-hand.

**Does any add-on invert?** N/A — no add-ons are published on `/plans`.

**Does a lower tier plus add-ons reach a higher tier?** N/A for the same reason. The only route to Mail is Business.

## Social proof, trust and objection handling

"Trusted by over 40 million people and 50,000 teams" — an aggregate count only available post-acquisition, deployed to make a premium price feel mainstream. Logos include **OpenAI, Figma, HubSpot, DoorDash, Expensify, Geico**. No testimonials with quotes, no ratings, no security or privacy framing observed on `/plans`, no refund or cancellation language observed.

## FAQ

**None observed on `/plans`.** Whether the unfetchable Mail pricing page carries one is **unknown — the page would not render.**

## Mechanisms in use

`<pattern IDs pending — library not yet numbered>`

- **Descriptor lines that promise an outcome, not a feature set.** "Fly through your inbox and save 4 hours every single week" is a quantified time-savings claim used as the *tier descriptor* — the position where peers write "For growing businesses".
- **Aggregate proof at extreme scale** ("over 40 million people and 50,000 teams").
- **Price-anchored bundling**: a $12 Pro tier makes the $33 Business tier readable as "a bit more", when historically Mail alone was $25–30.
- **CTA copy carries the brand + tier name** ("Get Superhuman Business").
- **Premium-price-as-positioning**: historically the entire company charged a flat $30/user/mo for an email client, with no free tier, which functioned as a qualifying filter.

## What they do that most pages don't

- Puts a quantified, falsifiable ROI claim ("save 4 hours every single week") in the tier descriptor slot.
- Historically ran with **no free tier and no self-serve signup** (invite/onboarding-call gated) — the opposite of every peer in the cohort.

## What they conspicuously omit

- No badge, no comparison-table detail, no FAQ observed on `/plans`.
- No refund or cancellation language observed.
- No trial length stated on the observed page.

## Documented pricing changes

| Date | Change | Stated reason | Source |
|---|---|---|---|
| ~2015–2024 | Single flat price: **$30/user/mo**, one plan, no tiers | premium positioning | `[secondary]` spendbase.co, hippieceolife.com |
| 2024-08-12 | Repackaged into three tiers: **Starter, Business, Enterprise**. Starter $25/user/mo annual, Business $33/user/mo annual. Newest AI features gated behind Business | tier introduction / AI gating | `[secondary]` vendr.com, usagepricing.com |
| 2025 → 2026 | Post-Grammarly-acquisition consolidation into a **suite** page (Mail + Grammarly + Docs + Go); Free tier introduced; Mail moved behind the Business tier | bundling | live `/plans` page, observed 2026-08-12 |

The 2024 change is the most instructive event: a company that had held one price for a decade **lowered** its entry price ($30 → $25 annual) while simultaneously creating a *higher* tier ($33) and moving new AI capability into it. Net effect: lower barrier, higher ceiling, and an upgrade path that did not previously exist.

## What transfers, and what doesn't

**Genuinely universal, and the highest-value line on the page:** **make the tier descriptor a promise about the buyer's life, not a description of the software.** "Fly through your inbox and save 4 hours every single week" occupies the slot where peers write a taxonomy. At consumer price points nobody compares feature matrices — they decide whether the thing changes anything. Write the outcome, and make it specific enough to be falsifiable.

**Also universal:** the tier-naming CTA ("Get Superhuman Business"), and the 2024 repricing shape — *lower the entry, raise the ceiling, and put the new capability in the new top tier*. That move is available at any scale and is one of the few repricings in the corpus with a clearly stated logic.

**Scale-driven, do not copy:** the 40-million-people proof line, the Fortune-500 logo row, the Enterprise tier, and the historical invite-gated no-free-tier motion (which worked as a qualifying filter only because demand exceeded supply).

**Read the fetch failure as evidence.** The Mail pricing page renders nothing without JavaScript. That is a deliberate choice about who gets to read a price and how, and it is worth noting alongside the same behaviour observed elsewhere in this corpus.
