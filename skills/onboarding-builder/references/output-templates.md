# Output Templates — the deliverable contract

Every run produces exactly three files in the agreed output directory (default `docs/onboarding/`). Follow these skeletons; `<angle brackets>` are placeholders. Where a section doesn't apply (e.g. no survey in an Educational flow), keep the heading and write "N/A — <one-line reason>" so absence is visibly deliberate.

## Shared conventions

- Each file opens with a one-line header: `<App name> onboarding — <file role>. Generated <date> by onboarding-builder. Companion files: <the other two>.`
- All copy is **draft copy**: mark each file once with *"All copy is draft — run a brand-voice pass before shipping."*
- Screens are numbered `S1…Sn` consistently across all three files — `screens.md` is the source of truth for numbering.
- Spec only, no code: nothing in these files names frameworks, libraries, or implementation details beyond "analytics tool".

---

## 1. `strategy.md` template

```markdown
# <App> Onboarding Strategy

<header line>

## Transformation statement
After 30 days with <app>, the user is <after-state>.
Rating: none | mild | deep pain — <one line of evidence>. (User-confirmed: <date>)

## Archetype decision (flowchart trace)
- Q1 Transformation: <answer> — <evidence>
- Q2 Answers materially change the first experience: <yes/no> — <evidence>
- Q3 Monetization wants session-one trial starts: <yes/no> — <evidence>
→ **Archetype: <A / B / C / Hybrid B+C>** · target length: <n> screens
- What the length buys: <personalization / filtering / nothing → short>
- Ruled out: <archetype> because <one line>
- Strategy overrides: <none / e.g. "paywall deferred until <milestone> per product strategy">

## Paywall
Type: <hard / soft / dismissible / deferred> · Placement: after <S-n, what precedes it>
Pricing recommendation: <monthly decoy $x no trial · annual hero $y with n-day trial · per-day framing>
Secondary paywall: <framing after dismissal / none>
In-product strategy for non-buyers: <incl. trial-removal rule for engaged users>

## Competitor notes
<2–4 entries: name · archetype used · flow length · question themes · paywall type · what to steal/avoid>
<or: "Open task — competitor teardown not yet done (<reason>). Sources to check: Mobbin, app-store listings.">

## Data this flow collects
Personalization: <which answers shape the plan> · Segmentation/attribution: <which answers power marketing>

## Open risks & assumptions
- <assumption made without confirmation>
- <e.g. app-review risk of hard paywall; low traffic limits A/B power>
```

---

## 2. `screens.md` template

```markdown
# <App> Onboarding — Screen Spec

<header line> · Archetype: <X> · <n> screens · All copy is draft — run a brand-voice pass before shipping.

## Flow at a glance
S1 <slug> → S2 <slug> → … → Sn <slug>

## Screens

### S<n> — <Screen title> [<screen type from flow-anatomy>]
**Purpose:** <the one job this screen does in the narrative>
**Copy:**
- Headline: "<draft>"
- Body: "<draft>"
- CTA: "<draft>"
**Visual/content note:** <what's on screen besides copy — numbers, testimonial, progress bar, seeded demo items>
**Question block (survey screens only):**
Q<n>. "<question>"
  Options: <a> | <b> | <c> | <d>
  Data use: personalization | segmentation | both · Intensity: <1–5>
  Feeds: <where this answer resurfaces>
**Transition:** <auto-advance / tap / what unlocks the next screen>
```

**Filled example screen (illustrative — sleep-app domain):**

```markdown
### S7 — Cost of the problem [survey: pain-quantification]
**Purpose:** make the user put a number on what poor sleep costs them, anchoring the paywall price later.
**Copy:**
- Headline: "What is poor sleep costing you?"
- CTA: (options are the CTA — single tap advances)
**Visual/content note:** progress bar at ~40%; single-tap option cards.
**Question block:**
Q5. "How many workdays a month do you feel wrecked by a bad night?"
  Options: 1–2 | 3–5 | 6–10 | Honestly, most days
  Data use: both · Intensity: 4
  Feeds: plan urgency framing; severity cohort for conversion analysis
**Transition:** auto-advance on tap.
```

---

## 3. `measurement.md` template

```markdown
# <App> Onboarding — Measurement Plan

<header line> · Analytics tool: <name or TBD>

## Events
| Screen | viewed | completed | skipped | Properties |
|---|---|---|---|---|
| S1 <slug> | onb_01_<slug>_viewed | onb_01_<slug>_completed | — | — |
| S7 <slug> | onb_07_<slug>_viewed | onb_07_<slug>_completed | — | answer_q5 |
| … | | | | |
Flow-level: onb_started · onb_completed · paywall_viewed · paywall_dismissed · trial_started · purchase_completed · activation_<core_action>

## Funnel
onb_started → S1…Sn viewed → onb_completed → paywall_viewed → trial_started → purchase_completed

## Targets (hypotheses — recalibrate against first two weeks of real data)
| Metric | Definition | Starting target |
|---|---|---|
| Completion rate | onb_completed / onb_started | <x>% |
| Trial activation | trial_started / paywall_viewed | <x>% |
| Paid conversion | purchase_completed / trial_started | <x>% |

## Cadence & guardrails
<review cadence> · Activation guardrail: activation_<core_action> must precede every ask event. · Segment funnels by attribution + severity cohort before concluding.

## A/B backlog
| # | Idea | Hypothesis | Metric moved | Impact | Ease | Proximity | Score |
|---|---|---|---|---|---|---|---|
| 1 | <e.g. paywall: sequence vs single screen> | <…> | trial activation | 4 | 4 | 5 | 80 |
| … | | | | | | | |
<If traffic is low: note that sequential before/after beats underpowered splits.>
```

---

## Closing summary (chat, not a file)

After writing the triad, end the conversation turn with:
1. The decision in one sentence (archetype + paywall + why).
2. The flow at a glance (numbered screen list).
3. Next steps: implement the screens, wire the events, run the first backlog test — and where each spec file lives.
