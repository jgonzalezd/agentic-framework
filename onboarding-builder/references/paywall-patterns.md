# Paywall Patterns — placement, pricing psychology, and micro-craft

The paywall is the destination the whole flow has been building toward. Everything here feeds the paywall section of `strategy.md` and the paywall screens in `screens.md`.

## 1. Hard vs soft — and which archetype gets which

- **Hard paywall:** subscribe (usually via free trial) or you don't enter the product. Maximizes trial starts from high-intent users; requires that the onboarding *already sold them*.
- **Soft paywall:** the user enters and uses the product free; payment gates premium features or shows up dismissibly at upgrade moments.
- **Dismissible hard:** presented like a hard paywall at onboarding's end, but closable — often followed by a differently-framed secondary paywall (see §5).

| Archetype | Pairing | Why |
|---|---|---|
| A — Educational | **Soft**, in-product | No sales narrative happened; a hard wall after one sheet converts terribly. Let the product sell itself. |
| B — Benefit sequence | Dismissible after the sequence | Pitched but not invested; a strict hard wall gets mixed results and app-review risk. |
| C — Questionnaire | **Hard**, immediately after the plan reveal | 5–7 min invested + a personal plan on screen = peak willingness. Trial-start data skews heavily to session one — this is the moment. |

## 2. The paywall sequence — one point per screen

Don't dump price, trial mechanics, and benefits on one dense screen. Break the pitch into a short sequence, one idea per screen (the pattern popularized by Blinkist's trial timeline):

1. **Bridge:** "Your plan is ready" — the plan is the object being unlocked.
2. **Trial reassurance:** "Try everything free for 7 days."
3. **The timeline:** a visual — *Today:* full access · *Day 5:* we remind you before the trial ends · *Day 7:* billing starts, cancel anytime. The reminder promise is the anxiety-killer that lifts trial starts.
4. **Price screen** with plan selection and the CTA.

Fewer screens is fine (2–3), but never more than one job per screen.

## 3. Pricing psychology on the price screen

- **Monthly is a decoy, not a revenue line.** Show monthly *without* a trial at a deliberately unattractive per-month rate; show annual *with* the free trial at a fraction of the monthly-×12 price. The monthly's job is to make the annual look like the obvious deal — expect ~90% of buyers on annual.
- **Never show annual alone.** Removing the "pointless" monthly option to clean up the screen reliably tanks sales — the annual price loses its comparison anchor. Keep the decoy.
- **Trial lives on the annual only.** Monthly without trial + annual with trial pushes trial-takers to the plan you want.
- **Per-day/per-week reframing** for the annual ("less than $0.20/day") next to the pain-cost number the survey captured, if one exists ("you told us you spend $80/month on <problem>").
- **Anchor with the plan, not the features:** the screen sells access to *their* plan, not a feature grid.

## 4. Micro-craft

- **CTA color scarcity:** the CTA color appears nowhere else on the paywall (and sparingly in the flow) so the button visibly pops.
- **"Continue with Apple/Google"** wording beats "Sign up with…" (~double-digit lift); one sign-in option beats a menu; keep the button in thumb reach.
- **Copy above the CTA** answers the last fear: "Cancel anytime in Settings" / "We'll remind you before you're charged."
- **CTA text states the deal**, not "Subscribe": "Start my free week".
- **Restore purchases + terms** present but visually quiet.

## 5. Second chances and trial removal

- **Secondary paywall after dismissal:** when the user closes the paywall, show one differently-framed offer (e.g. the timeline variant, or a discount) before letting them through. One extra ask converts a real slice; more than one reads as desperation.
- **Remove the trial for engaged users:** once someone has used the product meaningfully post-onboarding, later paywalls can drop the trial entirely — either they're in or they're out. Engaged-cohort data shows *higher* paid conversion without the trial. Rule of thumb: trial at the onboarding paywall; no trial on in-product paywalls after real usage.
- **App-review caution:** a strict hard paywall with no dismiss can draw rejection; the dismissible-hard pattern plus genuine free surface area is the safer shape. Flag, don't over-engineer.
- **Web products:** the craft above transfers, minus store constraints — no app-review risk, no restore-purchases requirement, "Continue with Google/email" replaces Apple sign-in, and web billing keeps the store's ~30% cut (a web quiz funnel ending at a web paywall is a proven shape). State in the spec that the paywall is web-hosted where relevant.

## 6. Paywall spec checklist (fill into the deliverables)

- [ ] Paywall type + placement (which screen number) and what precedes it (plan reveal? demo?)
- [ ] Sequence screens, one point each, in order
- [ ] Plans shown: monthly (decoy, no trial) price · annual (hero, trial) price · effective per-day framing
- [ ] Trial length + reminder promise wording
- [ ] CTA text + reassurance line above it
- [ ] Dismissal path: secondary paywall (framing) or straight to product
- [ ] In-product paywall strategy for non-buyers (incl. trial-removal rule for engaged users)
- [ ] Any strategy-driven deferral ("no paywall until <milestone>") stated explicitly
