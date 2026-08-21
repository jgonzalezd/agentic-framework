# Whoop

- **URL:** https://www.whoop.com/us/en/membership and https://join.whoop.com/
- **Observed:** 2026-08-12
- **Fetched successfully:** **partial.** Direct fetch returned 403 on `/membership/`; the `r.jina.ai` text proxy rendered both `/membership` and `join.whoop.com` with real tier names and prices. `/pricing/`, `/membership/join/` and `/returns-policy/` **all returned 404.** **The money-back guarantee was not located first-party** — the Terms of Sale that was retrieved covers only apparel and accessories.
- **Category:** consumer subscription (wearable health tracking — **hardware bundled into the subscription**)
- **Buyer:** individual optimising sleep, training and recovery
- **Value metric:** **the membership** — flat, with a hardware bundle differentiating the tiers. Nothing is metered.
- **Model:** annual-only subscription with hardware included at every rung — `<models pack pending — references/models/ not yet populated>`
- **Scale:** unknown — no membership count observed on either page

## Structure, top to bottom

1. Promise
2. **What every tier includes** — stated before the tiers split, so the floor is never bare
3. Three tiers ascending, with hardware bundled into each
4. Free-trial entry point

The join flow leads with the zero: **"Get started for $0."**

## Verbatim copy

- **Headline:** **"Memberships built around you"**
- **Subhead:** **"Each WHOOP membership includes our most advanced wearable technology, 24/7 health insights, and personalized coaching to help you build lasting habits."**
- **Join-flow headline:** **"Three new memberships designed to meet your goals and your budget. Get started for $0."**
- **Tier names:** One · Peak · Life
- **Tier descriptors:** the hardware inclusion line is the descriptor — see below
- **Badge:** `none observed`
- **Billing toggle:** `none` — **prices are shown only in `/yr`**
- **Savings expression:** `none` — there is no monthly price to save against
- **CTAs:** **"Get started for $0"** · **"Join now"**
- **Trial:** **"1 - month free trial"** · **"Try PEAK free for 1 month"** with **"a certified pre-owned 5.0 device"** · **"Pick any membership before your trial ends."**
- **Hardware inclusion, verbatim per tier:**
  - One — **"Includes 5.0 Device, Basic Charger (wired), CoreKnit Jet Black Band"**
  - Peak — **"Includes 5.0 Device, Wireless PowerPack, SuperKnit Band"**
  - Life — **"Includes MG Device, Wireless PowerPack, SuperKnit Luxe Band"**
- **Science / feature claims:** **"Sleep, Strain, & Recovery insights"** · **"Personalized coaching"** · **"VO2 Max & heart rate zones"** · **"Women's Hormonal Insights"** · **"14+ day battery life"**
- **Partner promo, sitewide banner:** **"1 year free of Natural Cycles now included with all WHOOP memberships"**
- **Trade-in:** **"Get up to $119 off today"** for eligible wearables
- **Guarantee / refund:** **not located.** The Terms of Sale states only **"WHOOP will accept all unworn returns within thirty (30) days of delivery"** for apparel and accessories, and **explicitly defers device-with-membership returns to a separate Terms of Use that could not be retrieved.** **No consumer money-back guarantee language was obtained.**
- **Limit language:** `N/A — nothing is metered`

## Tier table

| Tier | Monthly | Annual (as displayed) | Fenced on | Allowance | CTA | Badge |
|---|---|---|---|---|---|---|
| One | **not displayed** | **$199/yr** | base device, wired charger, CoreKnit band | unlimited | "Get started for $0" | — |
| Peak | **not displayed** | **$239/yr** | wireless PowerPack, SuperKnit band | unlimited | "Get started for $0" | — |
| Life | **not displayed** | **$359/yr** | MG device, PowerPack, SuperKnit Luxe band | unlimited | "Get started for $0" | — |

**Trial:** 1 month free, **on Peak** (the middle tier), on a **certified pre-owned 5.0 device**. **Overage:** none. **Expiry:** n/a.

> **No monthly price appears anywhere in either fetch.** Whoop prices exclusively in `/yr` on the membership and join pages. **This is the most complete annual-only presentation in the consumer-subscription cohort** — even Blinkist, which deletes monthly from its page, implicitly acknowledges that one exists.

## Ladder arithmetic

**Monthly equivalents, derived.** One $199 ÷ 12 = **$16.58**; Peak $239 ÷ 12 = **$19.92**; Life $359 ÷ 12 = **$29.92**. **These are derived, not displayed — and their absence is the design.**

**Rung spacing.** Peak is **1.20× One** (+$40/yr); Life is **1.50× Peak** and **1.80× One** (+$120/yr over Peak). The steps are uneven: the first upgrade costs $40 and buys a charger and a band; the second costs $120 and buys a different device generation (5.0 → MG). **The price ladder tracks the hardware bill of materials, not a usage curve** — which is exactly why no per-unit arithmetic exists on this page.

**And that is the central trick.** You cannot mentally divide $199/yr by 12 and compare it to a rival's monthly subscription, **because the number includes a device.** The `/yr` denomination is presented not as a commitment but as *the unit the product comes in*. Every other company in the cohort frames annual as the *better* option, which quietly concedes that monthly is an option. **Whoop simply declines to hold the comparison.**

**Trial arithmetic, and the tier choice is deliberate.** The free month runs on **Peak — the middle tier, not the cheapest.** One month of Peak is worth **$19.92** derived. The user experiences the $239 product and is then invited to **"Pick any membership before your trial ends"**, which makes stepping down to One a *felt downgrade* rather than a neutral choice. **Anchoring above the floor, then letting the buyer descend.**

**The trial device is certified pre-owned**, which slashes the company's cost of trialling to near zero while keeping the experience genuine — and the refurb detail is **disclosed rather than hidden.**

**Trade-in arithmetic.** "Get up to $119 off today" against One at $199/yr is **up to 59.8% of the first year**; against Life at $359/yr it is **up to 33.1%**. A competitor's device becomes a down payment, and the concession is worth proportionally most on the cheapest tier — which is where switchers land.

**Bundle arithmetic.** "1 year free of Natural Cycles now included with all WHOOP memberships" inflates perceived value at **zero marginal cost to Whoop** and is applied uniformly, so it does not distort the ladder. `The retail value of Natural Cycles is not recorded in the research`, so the size of the inflation cannot be computed.

**Does any add-on invert the ladder?** No add-ons exist.

**Does a lower tier plus add-ons reach a higher tier?** No stacking path — the tiers differ by physical hardware, which cannot be bought separately per the observed page.

**Refund arithmetic:** **not computable.** No consumer money-back guarantee was located, and the retrievable Terms of Sale explicitly excludes devices-with-membership.

## Social proof, trust and objection handling

**No customer count, testimonials, ratings or logos observed on either page.**

The objection handling is structural rather than rhetorical, and it is well built:

- **The floor is guaranteed before the tiers split.** "Each WHOOP membership includes our most advanced wearable technology, 24/7 health insights, and personalized coaching…" **The cheapest option must not feel like a penalty, or the ladder produces abandonment instead of upgrades.**
- **"Get started for $0"** removes the price from the first decision entirely.
- **The trade-in** converts the sunk cost of a competitor's device from an objection into a discount.
- **The partner bundle** adds perceived value without touching price.

## FAQ

**None observed on either page.** `N/A — no FAQ section captured.`

## In-app paywall, where documented

**None found.** **Whoop's paywall is the hardware purchase** — there is no in-app freemium wall to tear down, because the device is inseparable from the membership. No dated third-party teardown surfaced. **Recorded as an absence of evidence rather than filled.**

## Mechanisms in use

`<pattern IDs pending — library numbering in progress>`

- **Bundling hardware into a subscription so the annual price is never compared to a monthly one.**
- **`/yr`-only denomination** — the most complete annual-only presentation in the cohort.
- **Free trial on the middle tier**, so the user anchors above the floor and descending feels like a downgrade.
- **Certified pre-owned trial hardware**, disclosed.
- **Tier names as an identity ladder** — One → Peak → **Life**, where the top tier is not "Pro" but a way of living.
- **Guaranteeing the floor before the tiers split**, so no tier feels punitive.
- **Third-party bundle inflating perceived value at zero marginal cost.**
- **Trade-in credit converting a competitor's device into a down payment.**

## What they do that most pages don't

**They never show a monthly price, so the annual number is not a choice — it is the price.**

**They give the free trial on the middle tier, on a certified pre-owned device.** The tier choice anchors the buyer above the floor; the refurb choice cuts the trial's cost to near zero without degrading the experience. Both details are disclosed rather than hidden.

**They guarantee the floor in the subhead.** Stating what *every* membership includes, before any tier appears, is the correct way to open a three-rung ladder — it prevents the cheapest option from reading as a punishment.

## What they conspicuously omit

- **Any monthly price**, anywhere.
- **Any savings claim** — there is nothing to save against.
- **Any money-back guarantee** locatable first-party; the retrievable returns policy explicitly excludes devices with memberships.
- Any badge, FAQ, testimonial or member count.

## Documented pricing changes

| Date | Change | Stated reason | Source |
|---|---|---|---|
| — | Restructured to the **One / Peak / Life** ladder alongside the 5.0 and MG device generation, replacing the earlier single-membership model | not stated | observed structure; **no dated first-party prior price observation exists in this corpus** |

**The history was not reconstructed.**

## What transfers, and what doesn't

**Hardware-driven, and this is the load-bearing caveat.** Whoop can decline to show a monthly price because **the subscription arrives with a physical object**, which defeats per-month comparison shopping outright. A pure software product has no such shield: hide the monthly price and the buyer simply assumes the worst or leaves. **Do not copy the annual-only presentation without the thing that makes it defensible.**

The deeper category lesson, visible when Whoop is read alongside `oura.md`: **hardware changes the entire monetisation logic.** Both hardware companies behave unlike the software subscriptions — no in-app paywall exists to tear down, and Oura actively declines to push annual. **When the large commitment is extracted up front, the subscription's job is to be forgettable rather than optimised.**

**Genuinely universal:**
1. **Guarantee the floor before the tiers split.** One sentence naming what every plan includes prevents the cheapest tier from reading as a penalty. A ladder whose bottom rung feels punitive produces abandonment, not upgrades.
2. **Run the trial on the tier you want them to keep, not the cheapest one.** Letting the user experience the middle tier and then "pick any membership" makes descending a felt loss. This is the same lever Headspace pulls with trial *length* rather than trial *tier*.
3. **Name the top tier as an identity, not a rank.** One → Peak → **Life** ends at a way of living; "Basic → Pro → Enterprise" ends at a procurement category.
4. **Bundle a partner's product for perceived value at zero marginal cost** — but apply it uniformly, or it distorts the ladder.
5. **Convert a competitor's sunk cost into your discount.** A trade-in turns the single strongest reason not to switch into the reason to switch.
