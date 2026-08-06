# Output Templates — the deliverable contract

Every run produces exactly three files in the agreed output directory (default `docs/landing-page/`; in-vault, the app's `Projects/<name>/` folder) — plus `customer-language.md`, the language bank already written there in Phase 1.5 (see `customer-research.md`). Follow these skeletons; `<angle brackets>` are placeholders. Where a section doesn't apply, keep the heading and write "N/A — <one-line reason>" so absence is visibly deliberate.

## Shared conventions

- Each file opens with a one-line header: `<App name> landing page — <file role>. Generated <date> by landing-page-designer. Tone: <pack name>. Companion files: <the other two>.`
- All copy is **draft copy**: mark each file once with *"All copy is draft — run a brand-voice pass before shipping."*
- Sections are numbered `S1…Sn` consistently across all three files — `sections.md` is the source of truth for numbering.
- Spec only, no code: nothing in these files names frameworks, libraries, or implementation details beyond "analytics tool".

---

## 1. `strategy.md` template

```markdown
# <App> Landing Page Strategy

<header line>

## Core promise
<One sentence: the customer outcome the whole page sells.> (User-confirmed: <date> / assumed)

## Audience read
Primary visitor: <who> · What they've tried that failed: <…> · After-state: <30 days in, …>

## Tone
Pack: **<tone-pack name>** — chosen because <one line tying pack Identity to this audience>.
Rejected nearest alternative: <pack> because <one line>.

## Proof strategy
<Available proof items with sources> · Placeholders: <list of [NEEDS PROOF] items> · If proof is thin: <honesty framing used>

## CTA mechanics
Store target: <iOS / iOS+Android / preorder> · Badge positions: <S-numbers> · Price disclosure on page: <yes/no + why>

## Traffic-source assumptions
Expected source: <paid / organic / mixed / unknown → designed for paid> · Message-match note: <ad promise the hero mirrors, if paid>

## Open risks & assumptions
- <assumption made without confirmation>
- <e.g. proof placeholders must be filled before launch; low traffic limits A/B power>
```

---

## 2. `sections.md` template

```markdown
# <App> Landing Page — Section Spec

<header line> · Tone: <pack> · <n> sections · All copy is draft — run a brand-voice pass before shipping.

## Page at a glance
S1 <slug> → S2 <slug> → … → Sn <slug>

## Sections

### S<n> — <Section title> [<type from section-anatomy>]
**Purpose:** <the one job this section does in the scroll narrative>
**Copy:**
- Headline: "<draft>"
- Subhead/body: "<draft>"
- CTA: "<draft>" (if present)
**Technique:** <framework/principle from copy-frameworks this section applies>
**Visual note:** <placeholder description — device mockup, carousel, rating badges — never a design spec>
**Transition:** <what pulls the eye onward>
```

In audit mode, append:

```markdown
## Gap analysis (existing page vs. this spec)
| Existing section | Verdict | Note |
|---|---|---|
| <hero> | keep / rewrite / move / cut | <one line> |
Tone diagnosis: closest pack <name>; drift: <where the voice wobbles or mixes>.
```

---

## 3. `measurement.md` template

```markdown
# <App> Landing Page — Measurement Plan

<header line> · Analytics tool: <name or TBD>

## Events
| Section | viewed | interaction | Properties |
|---|---|---|---|
| S1 <slug> | lp_01_<slug>_viewed | lp_cta_clicked (position=hero) | source, device |
| … | | | |
Page-level: lp_page_viewed · lp_scroll_50 · lp_scroll_90 · lp_store_redirect

## Funnel
lp_page_viewed → lp_scroll_50 → lp_cta_clicked → lp_store_redirect → (store side) install → first open
Attribution seam: <how the store side will be read — App Store Connect / campaign params / TBD>

## Targets (hypotheses — recalibrate against first two weeks of real data)
| Metric | Definition | Starting target |
|---|---|---|
| CTA click-through | lp_cta_clicked / lp_page_viewed | <x>% |
| Scroll depth | lp_scroll_50 / lp_page_viewed | <x>% |

## A/B backlog
| # | Idea | Hypothesis | Metric moved | Impact | Ease | Proximity | Score |
|---|---|---|---|---|---|---|---|
| 1 | <hero headline variant> | <…> | CTA click-through | 5 | 5 | 5 | 125 |
```

---

## Closing summary (chat, not a file)

After writing the triad, end the conversation turn with:
1. The core promise in one sentence.
2. The page at a glance (numbered section list).
3. The tone chosen and why, in one line.
4. Next steps: fill proof placeholders, implement the page, wire the events — and where each spec file lives.
