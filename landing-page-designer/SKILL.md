---
name: landing-page-designer
description: >
  Plans an iOS app's download-landing-page copy and section structure. Applies
  proven copywriting techniques (customer-value framing, emotional resonance,
  credibility numbers, plain-language/8th-grade readability, objection-handling,
  urgency) and a fixed, proven app-download section architecture. Drafts all
  copy in one of the pluggable tone packs (references/tones/) so the page
  sounds natural in the chosen voice. Reads whatever context is available
  about the app, then asks only the clarifying questions the context leaves
  open (tone, hook, proof points, CTA). Use when the user wants to design,
  draft, or audit an app's download landing page. Produces a content/structure
  spec only — never code or visuals.
---

# Landing Page Designer

An app-download landing page has exactly one job: **get the visitor to tap the store button**. Everything on the page either moves them toward that tap or gets cut. This skill plans the page's section structure and drafts its copy — grounded in proven copywriting technique, written at or below an 8th-grade reading level, and rendered in one deliberately chosen tone.

**Scope guard:** you design page *content and structure* — section order, purpose, draft copy, proof strategy, CTA mechanics, events to track. You do NOT write HTML/CSS/code, choose frameworks or hosting, or design visual style (visuals appear only as placeholder notes). If asked for implementation, deliver the spec first and treat implementation as a separate task. The page purpose is always app download — if the user actually needs a waitlist, lead-gen, or sales page, say so and stop; that's outside this skill.

**Progressive loading:** read each `references/` file only when its phase says so — not before. This file alone is enough to run Phases 0–1.

## Workflow

### Phase 0 — Orient
1. Determine the mode: **new page** (none exists) or **audit** (a page exists; the deliverable adds a gap analysis against your blind recommendation). If auditing, record *where* the existing page's copy lives and do NOT read it yet — it is quarantined until Phase 3.5.
2. Confirm the output directory. Default: `docs/landing-page/` in the host repo (in-vault: the app's `Projects/<name>/` folder). If another location is obviously better, propose it in one line.

### Phase 1 — Ingest
Read whatever context is available about the app, in this order of value: README, product/strategy/positioning docs, App Store listing copy, audience or pain research, pricing, brand-voice guides, competitor notes, or a pasted description. From it, note what you can already answer about: what the app does, who it's for, the core pain, the strongest differentiator, available proof (ratings, user counts, press, testimonials), expected traffic source, brand-voice constraints (banned words, reserved terms), and the store CTA specifics (iOS only? preorder?).

### Phase 1.5 — Mine the customer's language
**Read `references/customer-research.md` now.** Mandatory — never skipped for speed. Hooks fail when copy is written from imagination; recognition ("that's me") only happens when a line mirrors something a real customer feels, in words they'd use. Build the **language bank** and write it as `customer-language.md` in the confirmed output directory (alongside the Phase 5 triad):
1. Mine sources in rank order: (1) the founder/user's own words — interview answers, critique messages, vault context files — treated as first-class voice-of-customer; (2) app-store reviews of adjacent/competitor apps; (3) Reddit/forum threads where the pain is discussed in the wild.
2. Extract **verbatim quotes only** — never paraphrases posing as quotes — classified into: pain lines, desired outcomes, identity statements ("I want to be someone who…"), triggering moments, objections, and the bad alternative they use today.
3. Classify the target visitor's **awareness stage** (Schwartz: unaware → problem-aware → solution-aware → product-aware → most aware) — it dictates the hero's opening move (table in `customer-research.md`).

**Hard rule: no angle or hook may be proposed that cannot cite a language-bank line.** Hero and hook specs must carry a `Source:` trace pointing at the bank entry they mirror.

### Phase 2 — Clarify
**Read `references/clarifying-questions.md` now.** It is a menu, not a script: identify which direction questions the context left open and ask only those, as one short batch (aim ≤5). Skip everything the materials already answered.

Tone is always part of this step:
1. List the available tone packs by enumerating `references/tones/*.md` (every file except `_TEMPLATE.md`). Never hardcode or assume the list — packs are pluggable and may have been added or removed.
2. Recommend the best fit for this app's audience with a one-line why (each pack's Identity section says who it suits).
3. Let the user confirm or pick another. **Exactly one tone per page** — no mixing.

### Phase 3 — Section draft
**Read `references/section-anatomy.md`, `references/copy-frameworks.md`, and the chosen tone pack now.**
Draft the complete ordered section spec: every section's type, purpose, and actual draft copy. The tone pack's example rewrites are your few-shot anchors — before writing each slot (headline, subhead, feature blurb, FAQ answer, CTA), re-read that slot's rewrite in the pack and match its register, not just its adjectives. Check every draft against: the 8th-grade readability rule, the global banned-cliché list (both in `copy-frameworks.md`), and the pack's own banned words.

### Phase 3.25 — Tone-fidelity pass
Re-read every drafted section against the pack's **Voice attributes** and **Anti-patterns**. Apply the distinctiveness test: *could this line appear unchanged on a page written in a different tone pack?* If yes, it's tone-neutral filler — rewrite it until it could only belong to this pack. Distinctiveness governs **tone**, nothing else — and **cleverness is not distinctiveness**: a line can be maximally distinctive and still fail the recognition test (`copy-frameworks.md`), and failing recognition kills it. Also confirm no line has drifted into the pack's listed anti-patterns.

### Phase 3.5 — Compare (audit mode only)
Only now — with your independent section spec drafted — read the quarantined existing page. Produce the gap analysis: section by section, what it gets right, what's missing, what's misordered, what should be cut. Include a tone diagnosis: which pack the incumbent is closest to, and where its voice drifts or mixes.

### Phase 4 — Measurement
**Read `references/measurement-plan.md` now.** Produce the section-level event set, the install-funnel definition, starting targets (flagged as hypotheses), and the prioritized A/B backlog.

### Phase 5 — Write deliverables
**Read `references/output-templates.md` now.** Write the triad into the confirmed output directory, following the templates exactly:
- `strategy.md` — value prop, audience read, chosen tone pack + why, proof strategy, CTA mechanics, traffic-source assumptions, risks
- `sections.md` — the ordered section-by-section spec (header names the tone pack)
- `measurement.md` — events, funnel, targets, A/B backlog

Close in chat with: the page's core promise in one sentence, the section flow at a glance, the tone chosen and why, and next steps.

## Rules

- **One tap, one page.** Every section either advances the visitor toward the store tap or gets cut. When in doubt, cut.
- **8th-grade readability is a hard constraint**, not a style preference — no tone pack may override it. See `copy-frameworks.md` for the rule and its evidence.
- **Copy is mined, not invented.** No hook or hero may be proposed that cannot cite a language-bank line (`customer-language.md`, Phase 1.5); hero and hook specs carry a `Source:` trace to the bank entry they mirror. A line no real customer's words support is imagination, not copy.
- **Tone comes from the pack, never from adjectives.** Draft against the pack's example rewrites; a line that would survive unchanged under a different pack fails. This distinctiveness test governs *tone* only — could the line only belong to this pack? — and cleverness is not distinctiveness: a maximally distinctive line that fails the recognition test still dies.
- **Design blind, compare after** (audit mode). Never read the existing page before your own spec is drafted — anchoring on the incumbent is a failure mode, not a shortcut.
- **Claims need proof.** Every number, rating, or testimonial in the draft is either sourced from the ingest materials or explicitly marked `[NEEDS PROOF — placeholder]`. Never invent social proof.
- **Traffic source shapes the fold.** Paid traffic: the hero must match the ad's promise and carry a store CTA above the fold. Organic/referral: more narrative before the ask is fine. If unknown, design for paid (the stricter case) and note the assumption.
- Reference-file examples (including tone-pack rewrites) are **illustrative, never templates** — re-derive every line from this app's context. The fictional app in the tone packs must never leak into the deliverable.
- Output is copy and spec. **No code**, no framework choices, no visual design.

## Adding a new tone

Tone packs are pluggable: copy `references/tones/_TEMPLATE.md` to `references/tones/<tone-name>.md` and fill **every** section, following the checklist at the top of the template. The example rewrites must render the template's shared base-copy sample (never a new sample), pass the 8th-grade rule and the global banned-cliché list, and read as clearly distinct from every existing pack's rewrites of the same lines. Nothing else needs updating — this skill discovers tones by listing the directory.
