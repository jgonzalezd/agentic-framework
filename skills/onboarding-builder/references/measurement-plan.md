# Measurement Plan — instrumentation, funnels, and the A/B backlog

An onboarding is never finished — it's shipped, measured, and iterated. This file defines what `measurement.md` must contain so every future change is a data decision, not a taste decision.

## 1. Event naming — one event set per screen

Convention (adapt names to the host's analytics tool — the *structure* is what matters):

```
onb_<nn>_<screen_slug>_viewed
onb_<nn>_<screen_slug>_completed      (answered / tapped primary CTA)
onb_<nn>_<screen_slug>_skipped       (only where skip exists)
```

Plus flow-level events: `onb_started`, `onb_completed`, `paywall_viewed`, `paywall_dismissed`, `trial_started`, `purchase_completed`, and one `activation_<core_action>` event for the first real value moment (in-flow demo or first in-product use). `onb_completed` fires on completing the **last screen before product handoff** — if the flow deliberately ends inside the product (a seeded first session), that in-product moment is the activation event, not part of onboarding; state the boundary explicitly in `measurement.md`. Survey answers ride as event properties on the question's `_completed` event — this is what makes cohort analysis ("daily-pain users convert 3×") possible later.

Number screens with zero-padded position (`onb_04_...`) so funnel tools sort correctly; when screens are reordered in a test, keep the slug stable and let `nn` change.

## 2. The funnel

Define it explicitly in `measurement.md`, top to bottom:

```
onb_started
  → each screen viewed (in order)
  → onb_completed
  → paywall_viewed
  → trial_started
  → purchase_completed  (trial converts to paid)
```

Review per-step conversion: any single screen shedding noticeably more than its neighbors (rule of thumb: >10% step drop, or >2× the median step drop for long flows) is the next test candidate — reword it, move it later, or cut it.

## 3. The three co-metrics — and the completion-rate trap

Optimize these **together**, never one alone:

1. **Onboarding completion rate** (`onb_completed / onb_started`)
2. **Trial activation rate** (`trial_started / paywall_viewed`)
3. **Paid conversion** (`purchase_completed / trial_started`) — plus early retention (D3/D7) as the health check behind it

**No-paywall / no-card models:** when there is no paywall screen (deferred paywall, or trial starts at signup with no card), `trial_started / paywall_viewed` is undefined — define a documented proxy instead (e.g. `signup_completed / onb_started` as trial activation) and state the standard definition to switch to once a paywall ships. Never leave the metric silently missing.

**The trap:** completion rate alone is maximized by deleting the onboarding. A shorter flow that lifts completion but drops trial starts lost you money; a longer flow that sheds low-intent users but lifts trial starts and paid conversion won — that's the buyer-filtering effect working as designed. Judge every change by the *product* of the funnel, ideally revenue per `onb_started`.

## 4. Cadence and guardrails

- **Weekly** (daily in the first two weeks after launch): scan per-screen drop-off; investigate the worst step.
- **First-session activation guardrail:** track that `activation_<core_action>` precedes every ask event (review prompt, notification permission, paywall for soft flows). If an ask fires before activation for a meaningful share of users, the sequence regressed — fix before optimizing anything else.
- **Segment before concluding:** split funnels by attribution answer and severity cohort; a screen that "underperforms" overall may simply be shedding a low-intent channel.

## 5. Building the A/B backlog

Sources of test ideas, in priority order: (1) the worst-dropping screen, (2) paywall variants, (3) question order/wording, (4) adding/removing whole screens, (5) pricing display. Classic high-yield tests: question reorder (intensity escalation done right), paywall sequence vs single screen, trial length, decoy price point, secondary-paywall framing, demo-in-flow vs demo-in-product, social-proof placement.

**Prioritization rubric** — score each idea 1–5 on three axes, rank by product:

- **Impact:** how much funnel volume flows through the changed screen × how bad its current drop is
- **Ease:** copy change (5) → reorder (4) → new screen (2) → new mechanic (1)
- **Proximity to money:** paywall & plan-reveal changes (5) → survey (3) → openers (2)

One test at a time per funnel stage; a test needs enough `onb_started` volume to read — at low traffic, prefer sequential before/after comparison over underpowered splits, and say so in `measurement.md`.

## 6. `measurement.md` deliverable checklist

- [ ] Event table: every screen × viewed/completed/skipped + flow-level events + activation event
- [ ] Survey-answer properties enumerated (which question → which property → which cohort question it answers)
- [ ] Funnel definition, top to bottom
- [ ] The three co-metrics with starting targets — **flag all targets as hypotheses to calibrate against the app's own first-two-weeks data** (cross-app benchmarks vary wildly; a strong questionnaire flow can see double-digit trial activation, utilities far less)
- [ ] Review cadence + activation guardrail stated
- [ ] A/B backlog table: idea · hypothesis · metric it moves · Impact/Ease/Proximity scores · rank
- [ ] Analytics tool noted (or "TBD — any funnel-capable tool works: Mixpanel, Amplitude, PostHog, Firebase")
