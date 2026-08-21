# Measurement Plan — events, funnel, targets, backlog

The page's one job is the store tap, so the funnel is short and the events are few. Spec them all; the host team wires them with whatever analytics tool they use (never name a tool as a requirement).

## Events

Per section (`S1…Sn` from `sections.md`):
- `lp_<nn>_<slug>_viewed` — section entered the viewport
- `lp_cta_clicked` with property `position: hero | mid | final` — any store-badge/button tap
- Optional per interactive element: `lp_faq_<slug>_opened`, `lp_screenshots_swiped`

Page-level:
- `lp_page_viewed` with properties `source` (utm/referrer) and `device`
- `lp_scroll_50` / `lp_scroll_90` — depth markers
- `lp_store_redirect` — the actual hand-off to the App Store

**The attribution seam:** what happens after `lp_store_redirect` (store-page conversion, install, open) is Apple's territory — measurable only via App Store Connect analytics, campaign parameters, or an attribution setup. Spec the seam explicitly so nobody reads "store clicks" as "installs."

## Funnel

`lp_page_viewed` → `lp_scroll_50` → `lp_cta_clicked` → `lp_store_redirect` → *(store side)* product-page view → install → first open

Segment every funnel read by `source` before concluding anything — paid and organic visitors behave like different species, and a blended number hides both.

## Targets (hypotheses — recalibrate after two weeks of real data)

| Metric | Definition | Starting hypothesis |
|---|---|---|
| CTA click-through | `lp_cta_clicked` uniques / `lp_page_viewed` | flag as hypothesis; healthy pages commonly land 5–15%, paid traffic toward the low end |
| Scroll depth | `lp_scroll_50` / `lp_page_viewed` | if under ~50%, the hero or hook is losing people |
| Hero share of clicks | `position=hero` clicks / all CTA clicks | high share on paid traffic is expected; near-zero means a message-match problem |

## A/B backlog

Score each idea Impact × Ease × Proximity-to-the-tap (1–5 each). Seed the backlog with, at minimum: hero headline variant (biggest lever on the page), social-proof position, CTA copy on the store button, page length (full vs. minimum-viable anatomy). If traffic is low, note that sequential before/after comparison beats an underpowered split test.

| # | Idea | Hypothesis | Metric moved | Impact | Ease | Proximity | Score |
|---|---|---|---|---|---|---|---|
