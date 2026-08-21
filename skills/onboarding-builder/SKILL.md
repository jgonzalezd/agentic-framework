---
name: onboarding-builder
description: >
  Designs a high-converting app onboarding flow for any app: strategy (archetype +
  paywall decision), screen-by-screen spec with draft copy and question banks, and a
  measurement plan. Use when the user wants to design, redesign, or audit an app's
  onboarding, first-run experience, onboarding quiz/questionnaire, or paywall
  placement. Produces content and conversion-journey specs only — never code.
---

# Onboarding Builder

Onboarding is the user's first — and often only — experience with a product. Treat it as a **priming and sales journey**: it walks users through their own problem, positions the product as the solution, and ends at a paywall decision. It is never a feature tour. It is also a data instrument: answers collected during onboarding feed personalization, segmentation, and attribution.

**Scope guard:** you design screen *content* and the *conversion journey* — screen order, purpose, draft copy, questions, paywall strategy, events to track. You do NOT write app code, choose frameworks or SDKs, or design visual style. If asked for implementation, deliver the spec first and treat implementation as a separate task.

**Progressive loading:** read each `references/` file only when its phase says so — not before. This file alone is enough to run Phases 0–3.

## Workflow

### Phase 0 — Orient
1. Determine the mode: **new flow** (no onboarding exists / greenfield) or **audit** (an onboarding exists; the deliverable adds a gap analysis against the recommendation). The mode is **provisional until Phase 1 completes** — if ingest reveals a shipped onboarding (or that a supposed one doesn't exist), switch modes and say so. Existence is discoverable from file names, route lists, or the user saying so — determining the mode never requires reading the incumbent design itself.
2. Confirm the output directory. Default: `docs/onboarding/` in the host repo. If the repo layout makes another location obviously better, propose it in one line.
3. Note whether web access is available (affects Phase 3 only).

### Phase 1 — Ingest (read before asking — product truth only)
Ingest inputs come in two classes. Keep them strictly apart:

- **Product truth — read now**, in this order of value: README, marketing/strategy/positioning docs, audience/pain research, app-store or landing-page copy, pricing config, voice guides, competitor profiles. When product-truth docs contradict each other, prefer the one that declares itself newer or superseding, and note the conflict in the brief.
- **Incumbent onboarding material — quarantine, do NOT read yet**: existing onboarding screens/copy, flow specs and wireframes, the team's notes or decisions about how onboarding should work. Record *where* this material lives (paths, doc names) and read nothing inside it. It is the comparison subject for Phase 5.5, never an input to your design. If a product-truth doc embeds a description of the current flow, skip that section and note it as quarantined.

Then build the **Understanding Brief** — 8 slots, each marked `inferred (source)`, `assumed`, or `unknown`:

1. What the app does (one sentence)
2. Target audience
3. Core pain — and its frequency/intensity
4. **The transformation** — "after 30 days, the user is ___" — or "none: utility"
5. Monetization model + price points
6. Existing onboarding — **existence and location only** (that one exists, where it's documented, plus metrics if any); its contents stay unread until Phase 5.5
7. Known competitors
8. Brand voice — tone, words they use/avoid, and any **banned words or reserved terms** (vocabulary rules that constrain copy)

### Phase 2 — Gap interview
1. Present the brief in one compact block: "Here's what I inferred — correct anything wrong."
2. Then fill `unknown`/`assumed` slots by asking **one question at a time**. Never ask what the materials already answered.
3. Hard cap: ~6 questions. The cap counts gap-filling questions only — the brief-correction pass and the mandatory transformation confirmation are outside it. Anything still unknown after the cap → state the assumption explicitly and proceed.
4. **Exception to the cap:** slot 4, the transformation, may never remain assumed. It drives every downstream decision — get the user to confirm or correct the transformation sentence before Phase 4.
5. If ingest filled every slot, don't invent questions — the interview collapses to just the brief correction plus the transformation confirmation.

### Phase 3 — Competitor research (never block on this)
- With web access: study 2–4 top competitor onboardings in the niche — teardown libraries (e.g. Mobbin), app-store listings, published teardowns. Capture per competitor: archetype, flow length, question themes, paywall type, one thing to steal or avoid.
- Without web access: competitor research already present in the host's materials (competitor profiles, market-research docs) counts as user-provided knowledge — use it. Otherwise ask the user once; whatever remains uncovered goes into `strategy.md` as an open task with suggested sources.

### Phase 4 — Strategy decision
**Read `references/archetype-selection.md` now.** Walk its decision flowchart against the confirmed brief. Produce: archetype, paywall type, target flow length, and the written flowchart trace (which branch fired at each node, with evidence).

**Mandatory gate:** present the decision and rationale to the user and get confirmation **before drafting any screens**. This is the one required approval point in the workflow.

### Phase 5 — Screen design
**Read `references/flow-anatomy.md` and `references/paywall-patterns.md` now.** If the flow contains any survey questions, **also read `references/question-design.md`.**
Draft the complete ordered screen spec: every screen's type, purpose, and actual draft copy in the app's voice; full question banks with answer options and data-use mappings; explicit placement of social proof, demo/aha teaser, loading moment, review prompt, and paywall sequence.

### Phase 5.5 — Compare (audit mode only)
Only now — with your independent screen spec drafted — read the quarantined incumbent onboarding material from Phase 1. Produce the gap analysis: the existing flow classified against your blind recommendation, screen by screen (what it gets right, what's missing, what's misordered, what should be cut). New-flow mode skips this phase.

### Phase 6 — Measurement
**Read `references/measurement-plan.md` now.** Produce the event set for every screen, the funnel definition, starting targets (flagged as hypotheses), and the prioritized A/B backlog.

### Phase 7 — Write deliverables
**Read `references/output-templates.md` now.** Write the triad into the confirmed output directory, following the templates exactly:
- `strategy.md` — transformation, flowchart trace, paywall + pricing, competitor notes, risks
- `screens.md` — the ordered screen-by-screen spec
- `measurement.md` — events, funnel, targets, A/B backlog

Close in chat with: the decision in one sentence, the flow at a glance (numbered screens), and next steps.

## Rules

- **Default short.** Add length only when the flowchart shows it buys personalization or buyer filtering.
- **Design blind, compare after.** Never read the incumbent onboarding or the team's assumptions about how onboarding should work before your own recommendation is drafted — an expert derives from product truth first and uses the incumbent only as a comparison subject. Anchoring on the prior design is a failure mode, not a shortcut.
- **Product stage and strategy beat the flowchart.** If billing doesn't exist yet, or the documented strategy is free-first/distribution-first, never recommend a paywall the product can't or won't ship — design for activation and data capture, spec the future paywall, and mark it "deferred by strategy" in `strategy.md`.
- **Sell the transformation, never the feature list.** Features appear only as evidence for the after-state.
- **Value before asks.** No rating prompt, permission battery, or payment ask before the user gets (or vividly pictures) value.
- Reference-file examples are **illustrative patterns across domains, never templates** — re-derive every decision and every line of copy from this app's brief. Reference copy may violate the host's own voice rules (banned words, punctuation) — never lift it verbatim.
- Output is copy and spec. **No code**, no framework choices, no visual design.
- Interviews: one question at a time; never re-ask what the materials answered.
- Audit mode: same phases plus Phase 5.5; the existing flow is classified against the recommendation only *after* the blind design exists, and deliverables include the gap analysis.
