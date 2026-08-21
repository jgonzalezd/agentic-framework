# JustAnswer

> **⚠ NO JUSTANSWER PAGE WAS EVER FETCHED.** Every path returned **HTTP 403** on 2026-08-12. This teardown is built from the **FTC's complaint against JustAnswer LLC and CEO Andrew Kurtzig, filed 2026-01-13 in the Northern District of California**, which **quotes JustAnswer's own on-screen copy verbatim**. That is in one respect a *stronger* evidentiary source than a marketing page — it is sworn and dated — but it is still second-hand, and it reflects the copy as the FTC found it, not necessarily as the site reads today.

- **URL attempted:** `https://www.justanswer.com/pricing`, `/topics-pricing/`, `/help/faq`
- **Observed:** 2026-08-12 (fetch attempts); FTC complaint filed 2026-01-13
- **Fetched successfully:** **no — 403 on every path.** Carriers of the complaint fetched 2026-08-12: `ppc.land`, `regulatoryoversight.com`, `allaboutadvertisinglaw.com`.
- **Category:** advice/wellness — one-off expert answer, sold at the moment of acute need
- **Buyer:** a person with one urgent problem — a sick pet, a broken car, a legal question — intercepted mid-search
- **Value metric:** **advertised as a single answer; structurally a monthly subscription.**
- **Model:** negative-option continuity behind a nominal-fee offer — `<models pack pending — references/models/ not yet populated>`
- **Scale:** the FTC alleges the conduct affected **"hundreds of thousands of consumers between January 2022 and the present."**

## Structure, top to bottom

The funnel is **intent-captured, not brand-led.** Nobody goes to JustAnswer; they search a problem and are intercepted.

1. Consumer searches a problem — e.g. "ask a vet online"
2. Clicks a **search ad** → category landing page
3. Interacts with the **Pearl chatbot**, which elicits the user's story
4. Pearl displays the "$5 (fully-refundable)" framing — *while the user is mid-disclosure and has been told an expert is already being briefed*
5. Consumer enters card details
6. **The subscription disclosure appears in small print between the card fields and "Confirm now"**
7. On confirm, **both** the join fee **and** the full monthly subscription are charged immediately

**This is the only large business in the corpus built on the exact purchase shape of a single acute answer — and it monetises that shape by refusing to sell it as a one-off.**

## Verbatim copy

All quoted by the FTC complaint as JustAnswer's own on-screen copy.

- **The chatbot, named "Pearl," during signup:**
  > "OK, got it. Here's a secure form to join JustAnswer for $5 (fully-refundable). While you're filling this out, I'll tell the Veterinarian about your situation and then connect you two."
- **The payment-form disclosure, sitting between the card fields and the button:**
  > "By clicking 'Confirm now' I agree to the Terms of Service, Privacy Policy, to be charged the one-time join fee, and a $39 monthly membership fee today and each month until I cancel."
- **The advertised offer**, as characterised in the complaint: expert help for **"as little as $1 or $5"**
- **On legibility**, the FTC:
  > "The material terms were still difficult to see in comparison with the much larger text on the payment form"
  
  and the checkbox involved the
  > "omission of any language regarding the price consumers would pay for the subscription"
- **Headline / subhead / tier names / badge / billing toggle / savings expression / CTAs / guarantee:** **not obtainable — the pages 403'd.**

## Tier table

| Element | Figure | Source |
|---|---|---|
| Advertised entry | **"as little as $1 or $5"** | FTC complaint `[secondary]` |
| Actual recurring charge | **"$28–$125" per month**, by category | FTC complaint `[secondary]` |
| Mechanics category | "$47/month" | FTC complaint `[secondary]` |
| Legal category (Oct 2024) | "$79/month" | FTC complaint `[secondary]` |
| All categories (Nov 2025) | "$65/month" | FTC complaint `[secondary]` |
| Disclosed in-form example | **"a $39 monthly membership fee today and each month until I cancel"** | JustAnswer's own copy, as quoted |
| Headline arbitrage, as stated by the carrier | **"$5 advertised vs. $130 annual subscription = 26×"** | ppc.land `[secondary]` |

**One-off availability: advertised yes, structurally no.** **Price revealed:** in small print between the card fields and "Confirm now".

*(Note: the ppc.land "$130 annual" figure does not reconcile with the complaint's "$28–$125" monthly range on any obvious reading. It is reproduced verbatim with its attribution and **not** harmonised.)*

## Ladder arithmetic

**There is no ladder — there is a gap between an advertised number and a charged number, and the arithmetic of that gap is the whole case.**

**Day-one arithmetic.** The user is told **"$5 (fully-refundable)"**. On confirm, they are charged the join fee **and** the first month. Using the disclosed in-form example: $5 + $39 = **$44 on day one, 8.8× the advertised number.**

**Twelve-month arithmetic**, at each rate the complaint names:

| Rate | Year one, incl. $5 join fee | Multiple of the "$5" advertised |
|---|---|---|
| $28/mo (low end of range) | $341 | **68×** |
| $39/mo (disclosed example) | $473 | **95×** |
| $47/mo (Mechanics) | $569 | **114×** |
| $65/mo (all categories, Nov 2025) | $785 | **157×** |
| $79/mo (Legal, Oct 2024) | $953 | **191×** |
| $125/mo (high end of range) | $1,505 | **301×** |

**Against the market, the same answer costs less elsewhere as a genuine one-off.** MentorCruise's floor for a single human answer is **"$39/call"** (see `mentorcruise.md`) — the same number JustAnswer charges *monthly*, forever, for what was advertised as one answer.

**Does any add-on invert the ladder?** N/A — there are no tiers and no add-ons, only a single continuity charge.

**Does a lower tier plus add-ons reach a higher tier?** N/A.

**Refund arithmetic.** The word **"fully-refundable"** attaches to the **$5 join fee only**, not to the monthly membership. It does double duty: **risk reversal *and* misdirection from the recurring charge.** The refundable thing is the small thing.

## Social proof, trust and objection handling

**Trust is manufactured by role-naming rather than credential-showing** — "the Veterinarian," "the Mechanic," "the Lawyer." **The definite article implies a specific, already-assigned professional.** No credential is shown; a grammatical article does the work a licence number would.

The bot has a **human name ("Pearl")**.

**The "someone is waiting" device is the highest-leverage sunk cost in the corpus** — not time, but **disclosure plus an implied waiting expert.** "While you're filling this out, I'll tell the Veterinarian about your situation" is said *while the card fields are open*. What the user has invested by the paywall is their problem, written out, plus the belief that a named professional is already reading it.

## FAQ

**Not obtainable** — `/help/faq` returned 403.

## Mechanisms in use

`<pattern IDs pending — library numbering in progress>`

- **Intent interception** — buy the moment of need at auction rather than build a brand.
- **Disclosure-as-sunk-cost** — take the story before naming the price.
- **The "someone is waiting" device** — a live expert is briefed *while you enter your card*.
- **Nominal-fee anchoring** — a $1/$5 number occupies the price slot; the real number arrives in small print.
- **Negative-option continuity** — the one-off buyer becomes a subscriber by default, not by choice.
- **Role-naming with a definite article** as a credential substitute.
- **"Fully-refundable" attached to the small charge**, doing risk-reversal and misdirection at once.

## What they do that most pages don't

**Nothing here should be reproduced.** Recorded for completeness of mechanism, not as technique:

They place the material term — a recurring charge — **between the card fields and the confirm button**, in type the FTC found "difficult to see in comparison with the much larger text on the payment form", with **"omission of any language regarding the price"** on the consent checkbox itself.

## What they conspicuously omit

- **A one-off SKU**, despite advertising one.
- **The recurring price**, from every surface except the fine print at the moment of card entry.
- Any pricing page reachable by an unauthenticated visitor.

## Documented pricing changes

| Date | Change | Stated reason | Source |
|---|---|---|---|
| Oct 2024 | Legal category at "$79/month" | not stated | FTC complaint `[secondary]` |
| Nov 2025 | All categories moved to "$65/month" | not stated | FTC complaint `[secondary]` |
| 2026-01-13 | **FTC complaint filed** against JustAnswer LLC and CEO Andrew Kurtzig, N.D. Cal. Counts under **ROSCA**: failure to "clearly and conspicuously disclose the subscription fee" and failure to "obtain express informed consent" | alleged conduct affecting "hundreds of thousands of consumers between January 2022 and the present" | ppc.land, regulatoryoversight.com, allaboutadvertisinglaw.com |

## What transfers, and what doesn't

**The lesson is the inverse of the tactic, and it is worth stating precisely.**

**JustAnswer proves two things at once.** First, that **demand for a single acute answer is enormous and monetisable at the moment of need** — the company built a large business on it and bid competitively for problem-shaped search queries to reach it. Second, that **hiding the recurring charge is a legal liability rather than a growth strategy.**

**Read the structure as a market signal, not just a scandal.** JustAnswer had every incentive and all the data, and concluded the one-off could not be monetised at a price it wanted — so it faked recurring. **The demand is proven; honest monetisation of it is the open problem.** See `mentorcruise.md` for the only researched model that serves the one-off buyer honestly *and* keeps an upgrade path, and `16personalities.md` for the model that accepts the one-off as terminal and monetises breadth instead.

**Do not adopt, under any framing:**
1. **Nominal-fee anchoring.** A $1/$5 number in the price slot with the real number in fine print is the most tempting mechanism in this neighbourhood and the most expensive to get wrong. It is now two ROSCA counts.
2. **Negative-option continuity on a buyer who asked for one thing.** If the buyer's stated need is singular, defaulting them into recurring billing converts a satisfied customer into a chargeback and a regulator.
3. **Material terms placed between the card fields and the button.** Placement is not disclosure. The FTC's own framing — "difficult to see in comparison with the much larger text" — is a standard about relative prominence, not about presence.

**Genuinely transferable, and only these:**
1. **Intent interception is a legitimate acquisition strategy.** Buying the moment of need at auction works precisely because willingness to pay peaks there. The problem was never the traffic source.
2. **Take the story before the price, but deliver value before the charge.** JustAnswer and `noom.md` both convert disclosure into willingness to pay; `16personalities.md` does the same and then **hands the promised value over for free** before selling depth. **One monetises sunk cost; the other monetises demonstrated satisfaction. Only the second compounds.**
3. **If you advertise a price, charge that price.** The entire complaint reduces to this sentence.
