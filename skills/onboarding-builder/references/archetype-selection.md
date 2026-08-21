# Archetype Selection — the decision framework

This file decides ONE thing: which onboarding archetype the app gets, which paywall type it pairs with, and how long the flow should be. Walk the flowchart, record the trace, and get user confirmation before designing any screen.

## 1. The paradox rule

The two loudest pieces of onboarding advice contradict each other, and both are backed by winners:

- Some of the best-retaining apps onboard in **two screens** — sign in, grant one permission, and the value lands inside the very next thing the user was already going to do.
- Some of the fastest-growing consumer apps run **20–100+ screens** of questions before the user ever sees the product — and thrive.

The resolution: **default to SHORT. Surface tangible value as fast as possible.** Every screen you add is friction, and friction only earns its place when it buys one of exactly two things:

1. **A personalized first experience that would be impossible without the data.** If the home screen would feel generic without the user's answers, the questions are the trade: they give up speed, they get a first experience built specifically for them.
2. **Buyer filtering and commitment.** A user who invests 5–7 minutes answering questions self-selects as high-intent — the ones who bounce were unlikely to convert anyway. The invested time creates sunk-cost commitment: after seeing "their" personalized plan, starting a trial at a hard paywall feels like a no-brainer.

If neither applies, every extra screen is pure drop-off. A long flow that buys neither personalization nor filtering is a government form.

## 2. The transformation test

Long flows only work when the app offers a **genuine transformation** — the user's life is meaningfully different after adopting it (healthier, richer, calmer, more skilled, out of a bad habit, closer to a goal they emotionally care about). You sell the transformation; the features are just evidence.

Ask: *"Complete this sentence honestly: after 30 days with this app, the user is ___."* If the answer is a changed person ("sleeping through the night", "conversational in Spanish", "out of debt"), the transformation is real. If the answer is only a completed task ("has converted currencies accurately", "has scanned documents"), it's a **utility** — valuable, but not a transformation.

**The utility counter-case:** a questionnaire on a utility app is absurd and destroys trust. "What frustrates you about dealing with foreign currency?" before a currency converter reads as manipulation, because the user knows no plan is being personalized. Nobody's purchase behavior changes after a 15-page quiz about a converter. Utilities go short and let the product sell itself.

Transformation is a spectrum, not a boolean. Rate it: **none / mild / deep pain**. "Deep pain" = the user has tried and failed before, thinks about the problem between sessions, and would describe it as affecting their life.

## 3. Archetype A — Educational (short)

**What:** one screen (or two: value sheet + a single permission/sign-in), modeled on familiar OS patterns. States what the app does, gets out of the way, and drops the user into the product. Better yet, the "onboarding" is just the first real use — the app does the work, not the user.

**When:** utilities and tools; apps whose value lands in the first minute of real use; apps with no meaningful personalization payload.

**Paywall pairing: SOFT.** This flow contains no sales narrative, no problem-priming, no transformation — so a hard paywall right after it fails: the user has been given no reason to pay. Let them use the product; paywall on the natural upgrade moment.

## 4. Archetype B — Benefit / transformation sequence (medium)

**What:** a controlled 3–7 screen sequence that sells the *transformation* — identify the problem, show the after-state, remove doubt (social proof), then paywall. The user's full attention is yours for these seconds; the sequence is a pitch, not a tour.

**The anti-pattern that kills this archetype:** the feature spec sheet. "Screen 1: feature A. Screen 2: feature B. Screen 3: it also does C." Nobody reads it and nobody cares. A habit tracker doesn't track habits — it makes you someone who follows through. Sell that.

**When:** real transformation exists but there's little to personalize (everyone gets roughly the same product), or the answers wouldn't change the first experience.

**Paywall pairing:** paywall directly after the sequence works, but a *hard* paywall here gets mixed results (and app-review risk) — the user has been pitched but hasn't invested. Prefer soft-leaning (dismissible) or give a taste of the product first.

## 5. Archetype C — Questionnaire → personalized plan → hard paywall (long)

**What:** a survey walks the user through their own problem, an optional in-flow demo delivers the aha moment, a "building your plan" moment converts their answers into a visibly personal plan, and a **hard paywall** gates the plan. The flow is deliberately long — it builds the user's own investment.

**When (all three must hold):**
- Deep-pain transformation (test in §2 rates "deep pain", or strong "mild")
- Answers materially change the plan/first experience (or credibly appear to)
- Monetization wants high-intent trial starts in session one (subscription with trial, hard paywall)

**Why it converts:** every question makes the user articulate their problem a bit more; good questions build authority ("this app understands me"); by the plan reveal, they're not looking at an app anymore — they're looking at a solution built just for them. The time invested makes the trial a no-brainer, and the length itself filters out non-buyers.

## 6. The decision flowchart

Walk this literally and write down which branch fired at each node.

```
Q1. Transformation test (§2): none / mild / deep pain?
│
├─ NONE (utility) ──────────────► ARCHETYPE A (Educational)
│                                 Paywall: SOFT, post-usage
│                                 Length: 1–2 screens
│
├─ MILD ──► Q2. Would the user's answers materially change
│           their plan or first experience?
│           ├─ NO ──────────────► ARCHETYPE B (Benefit sequence)
│           │                     Paywall: dismissible after sequence
│           │                     Length: 3–7 screens
│           └─ YES ─────────────► HYBRID B+C (mid-length)
│                                 Short benefit sequence + 5–8 targeted
│                                 questions + light plan reveal
│                                 Paywall: dismissible (presented hard,
│                                 always closable — never a strict wall)
│                                 Length: 8–14 screens
│
└─ DEEP PAIN ──► Q2. Answers materially change the plan/first experience?
                ├─ NO ──────────► ARCHETYPE B, heavy on social proof
                │                 Length: 5–8 screens
                └─ YES ──► Q3. Does the monetization model want
                           high-intent trial starts in session one?
                           ├─ YES ─────► ARCHETYPE C (Questionnaire)
                           │             Paywall: HARD after plan reveal
                           │             Length: 15–30+ screens
                           └─ NO ──────► HYBRID B+C
                             (e.g. free-first growth strategy, or
                              billing not built yet: collect data now,
                              paywall later)
                             Length: 10–16 screens
                             Paywall: deferred by strategy — still SPEC
                             the future paywall and mark it deferred, so
                             billing ships into a decided shape. The
                             deferred spec inherits the type of the
                             branch that would fire with billing live
                             (Q3-YES → hard; hybrid → dismissible)
```

Note on hybrid lengths: the two HYBRID B+C branches share an archetype name but not a range — mild-pain hybrid is 8–14 screens, deep-pain hybrid is 10–16. Take the length (and question count) from the branch that actually fired, never from the archetype name.

Overrides that beat the flowchart:
- **Explicit product strategy wins.** If the app's documented strategy says "distribution first, no paywall yet", design the flow for activation and data capture and mark the paywall section "deferred by strategy".
- **Auditing an existing flow:** derive the flowchart recommendation blind — from product truth only, without having read the incumbent design — then classify what exists against it; the deliverable becomes the gap analysis plus the redesign.

## 7. Decision record — what `strategy.md` must state

Every archetype choice ships with a written trace. Checklist:

- [ ] Transformation statement (the "after 30 days, the user is ___" sentence) and its rating, **user-confirmed**
- [ ] Q1/Q2/Q3 answers with one line of evidence each
- [ ] Chosen archetype + target screen count
- [ ] Paywall type (hard / soft / dismissible / deferred) + placement
- [ ] What the length is buying (personalization / filtering / neither→short) — in one sentence
- [ ] What was ruled out and why (one line)

## 8. Cross-domain patterns (illustrative — never templates)

| App type | Transformation | Typical winner | Why |
|---|---|---|---|
| Calorie/weight tracking | Deep pain, answers drive the plan | C — long questionnaire, hard paywall | Plan is genuinely personal; audience has failed before; filtering pays |
| Habit cessation (smoking, drinking, doomscrolling) | Deep pain, emotionally loaded | C — questionnaire walks the user through their own problem | Articulating the habit's cost IS the pitch |
| Meeting notes / AI productivity tool | Mild–none; value lands in next meeting | A — two screens to value | Any quiz would delay the aha that sells itself |
| Currency converter, scanner, calculator | None (utility) | A — single sheet, soft paywall | No plan to personalize; quiz destroys trust |
| Recipe/meal planning | Mild pain, real personalization | Hybrid B+C — lead with hero benefit, few questions, in-flow demo | Demo of the core action converts better than more questions |
| Language learning | Deep pain (goal), answers set the path | C or hybrid | Goal/level questions genuinely shape content |

These show the *reasoning*, not answers to copy. Re-derive from the flowchart for every app.
