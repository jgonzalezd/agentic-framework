# Flow Anatomy — the screen-type pattern library

How to assemble the chosen archetype into an ordered sequence of screens, and what each screen type must accomplish. Copy examples below are illustrative patterns drawn from multiple domains — always re-derive copy in the target app's voice.

## 1. Sequencing principles

1. **One job per screen.** One slide, one point. If a screen makes two claims, split it. This applies doubly at the paywall.
2. **Value before asks.** Never request a permission, rating, sign-up, or payment before the user has received (or vividly pictured) value. First-session activation is the guardrail metric: no ask may precede the moment the user gets something.
3. **Commitment escalation.** Effort and intensity ramp up. Easy taps first, identity and pain questions later, the paywall last — each step is justified by the investment already made.
4. **The flow is a narrative, not a list.** Problem → agitation → possibility → proof → personal plan → price. If a screen doesn't advance that story, cut it.
5. **Momentum.** Single-tap answers, auto-advance, a visible progress bar. The user should never wonder how much is left or what to do next.

## 2. Long-flow master sequence (Archetype C; hybrid uses a subset)

The proven ordering. Numbers are structural positions, not literal screen counts.

1. **Affirmation opener** — congratulate the decision
2. **Value / transformation screens** (1–3) — the after-state
3. **Social proof #1** — numbers
4. **Sign-in / light data** (optional here; can move later)
5. **Problem-walking survey** — the questionnaire core (see `question-design.md`)
6. **Social proof #2** — a testimonial, placed after the emotional low point
7. **Personalization loading moment** — "building your plan…"
8. **Plan reveal** — their answers, reflected back as a plan
9. **In-flow demo / aha teaser** (optional but powerful) — do the core action once
10. **Review prompt** — immediately after the aha, never before
11. **Paywall** (see `paywall-patterns.md`)

## 3. Screen-type library

### 3a. Affirmation opener
**Job:** reaffirm the download decision and frame what follows as the user's own journey, not the app's tour. Kills first-screen anxiety and sets the transformation frame.
**Copy formula:** Congratulations / welcome + "you've taken the first step toward <after-state>".
**Examples (illustrative):**
- "Congratulations — you're on your way to a healthier relationship with your phone."
- "Welcome. You just took the first step toward your first 10K."

### 3b. Value / transformation screen
**Job:** sell the after-state, not the feature. The feature is evidence, mentioned only as the mechanism.
**Copy formula:** headline = the transformation; body = mechanism in one line; visual = the outcome.
**Anti-pattern:** the spec sheet ("Track X. Sync Y. Export Z.").
**Examples:**
- Feature: "Photo-based meal logging" → Transformation: "Know what's in every meal — just take a photo."
- Feature: "Spaced-repetition flashcards" → Transformation: "Hold a real conversation in 90 days."

### 3c. Social proof
**Job:** remove doubt at the two moments it spikes — early ("is this legit?") and late ("will this work for *me*?").
**Forms:** big numbers ("Join 500,000+ people who…"), star ratings, press logos, a single vivid testimonial matched to the pain just surveyed.
**Placement rule:** #1 after the value screens; #2 after the heaviest survey questions, where the user most needs to hear "people like you succeeded".
**Pre-launch rule:** if no real numbers, ratings, or testimonials exist yet, **never fabricate them**. Honest substitutes at the same structural positions: mechanism-as-proof ("why this works", the method's logic or research basis), founder story, beta-user quotes, or press/community mentions. Swap in real social proof as it accrues.

### 3d. Problem-walking survey block
The questionnaire core — full craft in `question-design.md`. Structural notes here: chunk questions (3–5 per visual section) with micro-affirmations between chunks ("Got it — you're not alone: 68% of users say the same."); keep a progress indicator; single-tap options only.

### 3e. Sign-in / permissions
**Job:** minimum viable friction. One option beats a menu — "Continue with Apple/Google" outperforms "Sign up with…" wording. Each permission gets asked at the moment it's obviously needed, with one line of *why*, never as an opening battery.

### 3f. Personalization loading moment
**Job:** convert answers into perceived intelligence. A few seconds of "Analyzing your answers… building your custom plan" makes the plan feel computed *for them* — even when the plan logic is simple, the pause is what makes personalization believable. Show their own inputs scrolling by ("Factoring in: your schedule · your goal · your past attempts").
**Rule:** never fake specificity you'll contradict later; the plan reveal must actually reflect the answers.

### 3g. Plan reveal
**Job:** the emotional peak. Mirror their answers back as a coherent plan with their goal date, their inputs, a projected outcome ("Based on your answers, you can reach <goal> by <date>"). This is what the paywall will gate — it must feel worth paying for on sight.

### 3h. In-flow demo / aha teaser
**Job:** let the user *do* the core action once, inside the flow — a taste, not a tour. **Pre-seed the content** so there's zero blank-slate work: offer 3–4 ready-made items to act on rather than asking the user to hunt for their own. The aha ("holy crap, that just worked") is the strongest conversion asset an onboarding can have.
**Examples:** a recipe app has you import one of four pre-picked recipes with one tap; a scanner app has you scan the card on screen; a music app plays your first personalized drill.

### 3i. Review prompt
**Job:** harvest the aha. Ask for the store rating **immediately after** the demo succeeds — the moment of "that was amazing" — and never anywhere else. Before value it's insulting; long after, the peak has passed.
**No app store (web products):** the aha-harvest moment still exists — use it for a testimonial ask, a share prompt, or nothing. If nothing, mark the screen "N/A — web, no store" rather than silently dropping the concept.

### 3j. Paywall handoff
The last survey/plan screen must flow into the paywall with the plan as the object of desire: "Your plan is ready." Full paywall craft in `paywall-patterns.md`.

## 4. Educational single-screen anatomy (Archetype A)

One sheet, modeled on familiar OS patterns (the "What's New" sheet):
- App name + one-line promise
- 3 bullet benefits (outcome-phrased, not feature-phrased)
- Single CTA: "Continue"
Then straight into the product — ideally into a pre-seeded first use. Optional second screen only for a truly required permission or sign-in. No sales narrative here; the product sells itself and the (soft) paywall lives inside the product at the upgrade moment.

## 5. Mid-length benefit sequence (Archetype B / hybrid)

3–7 screens: problem naming ("Sound familiar? <pain scenario>") → transformation ("Imagine <after-state>") → mechanism-as-proof (one screen: how it works) → social proof → [if hybrid: 5–8 targeted questions + light plan reveal] → paywall or product entry. Lead with the ONE benefit users actually come for — the thing they search for — and surprise-and-delight with secondary features later, in-product, not in the onboarding.

## 6. Anti-patterns

- **The feature tour / spec sheet** — features listed ≠ desire created.
- **The government form** — sign-up, four permission dialogs, and a walkthrough before anything of value appears.
- **Asking before giving** — rating prompts, notification requests, or email capture before the first aha.
- **Front-loaded hard questions** — intense/personal questions on screen 2 before any commitment exists.
- **Long flow with generic outcome** — 20 questions that end in a home screen identical for everyone. The broken promise churns harder than no quiz.
- **Blank-slate demo** — "try it now!" with an empty state and no seeded content.
- **Burying the hero benefit** — opening with minor features because the team finds them novel.
