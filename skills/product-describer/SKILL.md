---
name: product-describer
description: >
  Describes a product differently depending on who is listening. Produces one
  audience-tuned description per audience — customers (buying a better version
  of themselves) and investors (buying a scalable business) — synthesized from
  Aulet's Disciplined Entrepreneurship, Ries's Lean Startup, and Blank & Dorf's
  Customer Development. Runs an evidence inventory before drafting so no market
  size, retention figure, testimonial, or traction claim is ever invented:
  unsourced numbers become explicit bracketed placeholders with a note on how
  to get them. Audiences are pluggable packs in references/audiences/. Use when
  the user wants to describe, pitch, position, or explain a product to someone
  — "how do I describe this", "write my investor blurb", "explain this to
  customers", "what's my one-liner". Produces prose descriptions only — never
  landing-page HTML, deck slides, or a financial model.
---

# Product Describer

The founder knows what they built. What they usually don't have is the version of it that lands on the specific person in front of them. This skill produces that version.

The whole discipline reduces to one rule that every framework here agrees on: **never describe a product by its features, its tech, or its architecture — describe what it does for whoever is listening.** And then it splits, hard, on who's listening:

- A **customer** is buying a better version of themselves. They do not care that the product exists.
- An **investor** is buying a business. They are not buying the product at all.

A description that tries to do both does neither. So: one output per audience, always.

**Scope guard:** you write prose descriptions — headlines, problem statements, positioning paragraphs, pitch sections. You do NOT write landing-page HTML or full page specs (`landing-page-designer`), onboarding flows (`onboarding-builder`), deck slides, or financial models. If asked for those, deliver the description first and treat the rest as a separate task.

**Progressive loading:** read each `references/` file only when its phase says so. This file alone runs Phases 0–3.

---

## Workflow

### Phase 0 — Orient

Establish three things, in one pass, mostly from what the user already said:

1. **The product.** Name it. If the name is a working placeholder, note it now — that becomes a caveat in the output, not a silent `[NAME]`.
2. **The audience(s).** Enumerate `references/audiences/*.md` (every file except `_TEMPLATE.md`) to see what's available — never hardcode the list, packs are pluggable. If the user named an audience, use it. If not, ask which one, or offer both.
3. **The mode.**
   - **Synthesized** (default) — one best-in-class description per audience, with short margin notes naming which framework a section comes from.
   - **Per-framework** — only when the user explicitly asks for a specific lens ("the Lean Startup version", "compare the frameworks", "how would Aulet describe this"). This mode reads `references/frameworks.md` and produces that lens's customer + investor pair with its reasoning shown.

### Phase 1 — Ingest

Read whatever context exists about the product, in this order of value:

1. The product's project hub — `Projects/<name>/README.md` — plus any `strategy.md`, `prd.md`, or positioning doc beside it.
2. A **customer language bank** if one exists (`customer-language.md` in the project's landing-page folder). This is the highest-value input for customer-facing output: real verbatim quotes from real people.
3. Existing App Store listing copy, landing page copy, or prior pitches.
4. Pricing and business-model notes.
5. `_context/` files where the product touches the user's own life or expertise.
6. Failing all of that: the description the user pasted into the conversation.

Then write down, for yourself, what the context does **not** answer. That list drives Phases 2 and 3.

### Phase 2 — Evidence inventory

This is the mechanism that keeps the output honest, and it runs **before** any drafting — because once a plausible number is in a draft, it survives.

Build a two-column ledger:

| Known | Source |
|---|---|
| the fact | where it came from — file, quote, the user's own words |

| Unknown | What it's for | How to get it |
|---|---|---|
| the missing fact | which section needs it | the concrete next step that would produce it |

Every Unknown becomes a **bracketed token** that gets carried verbatim into the draft:

```
[TAM — source needed: pull the wellness-app market figure from a named report]
[retention — no data yet; measure the 30-day cohort after beta]
[price — not decided; the model below assumes a subscription]
```

Nothing enters a draft unless it is in the Known column or wrapped in a bracket. A bracket with a real next step is a *better* artifact than a confident fake — it's a to-do list for making the pitch true.

### Phase 3 — Clarify

Ask only the gaps that structurally block a section. One short batch, aim for ≤5, skip anything the context already answered. The usual suspects:

- **Who exactly** is this for — not a demographic, a person with a problem.
- **The beachhead** — the narrowest group who feels this most acutely and would buy first.
- **The differentiator** — what this does that the current alternative (often "nothing", "a notes app", or "a chat with an LLM") doesn't.
- **Price and model** — free, subscription, one-off, freemium.
- **Honest stage** — idea / building / in beta / launched / has revenue.

Stage is not optional. It decides whether the investor description talks about traction or about what's being proven next, and getting it wrong is the fastest way to produce a pitch that reads as dishonest.

**If the context is too thin to describe the product at all** — the user has a category ("a mental models app") but no concept — say so and ask. Do not invent a product to describe. An invented product produces a pitch for something that doesn't exist, which is worse than no pitch.

### Phase 4 — Draft

Read the chosen audience pack(s) now. Draft to the pack's skeleton, register, and disqualifier list. In synthesized mode, add short margin notes naming the framework behind a section (e.g. `↳ the Core — Aulet Step 10`) so the user can see the scaffolding without having to speak it.

### Phase 5 — Audit

Two sweeps. Both mandatory, both on the finished draft.

**Sweep 1 — fabrication.** Walk every number, percentage, currency figure, rating, user count, testimonial, named customer, and press mention. Each is either traceable to the Known column or bracketed. No exceptions — a market size that sounds right is still invented. Grep your own draft for digits and `$` and check each hit.

**Sweep 2 — recognition** (customer output only). Read the problem statement as the target person. Do they think *"that's me"* — or *"that's clever"*? Only the first one works. Where a language bank exists, problem and headline lines carry a `Source:` trace to the bank entry they mirror. Where none exists, ship the lines flagged as **unvalidated** and point at the fix in one line: mine a language bank first (`landing-page-designer` Phase 1.5 does exactly this).

### Phase 6 — Deliver

Output in chat, formatted per `references/output-templates.md` (read it now).

If the product maps to a `Projects/` folder, offer to save it as `pitch.md` there. If Phase 3 surfaced product facts the project README doesn't have, offer to fold those into the README too — the answers are worth more than the pitch.

Close with:
- The one-sentence version of each description.
- The top 3 unknowns blocking the strongest version, ranked by how much they'd change the pitch.

---

## Rules

1. **Never open with features, tech, or architecture.** Open with what it does for the listener. The stack is an implementation detail to a customer and a risk factor to an investor — it is never the lede.
2. **One audience per output.** Never blend. If both are wanted, produce two clearly separated descriptions.
3. **Numbers are sourced or bracketed — never invented, never "illustrative".** This is the rule the skill exists to enforce. A tagged fake number gets pasted into a real deck eventually; a bracket cannot.
4. **Customer language is mined, not invented.** Cite the bank where one exists; flag as unvalidated where it doesn't. A line no real person's words support is imagination, not copy.
5. **State the stage honestly.** Never claim validated learning that didn't happen. Pre-launch, the honest posture — *here's the riskiest assumption and how we're testing it* — is the Lean Startup posture, and it reads stronger to a real investor than invented traction.
6. **Frameworks are scaffolding, not vocabulary.** The user should never have to say "beachhead", "QVP", or "value hypothesis" out loud for the pitch to work. Margin notes carry the framework; the prose doesn't.
7. **An unresolved product name is a first-class caveat.** Say it in the output — not a silent placeholder the user forgets to fill.
8. **Reference examples are illustrative, never templates.** Re-derive every line from this product's context. The example product in the packs must never leak into a deliverable.

---

## Adding an audience

Audiences are pluggable. Copy `references/audiences/_TEMPLATE.md` to `references/audiences/<audience>.md` and fill every section following the checklist at the top. Press, partners, acquirers, hiring candidates, and enterprise buyers are all natural additions — each is buying something different, which is the whole point.

Nothing else needs updating: the skill discovers audiences by listing the directory.
