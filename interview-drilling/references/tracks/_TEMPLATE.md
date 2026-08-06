# Track: <Name>

Copy this file to `references/tracks/<slug>.md`, fill it in, and add one row to the Tracks table in
`SKILL.md`. No other edits are needed — tracks are pluggable.

The obvious next one is `react-nextjs.md` (server vs client components, App Router data fetching,
hooks and re-render traps, forms and optimistic UI, streaming LLM responses into the UI, state
management, accessibility — which matters unusually much for a public-benefit product).

## Contents

- Refresher units (N concepts)
- Artifact seeds (N scenarios)
- Follow-up question bank
- Blind-spot markers

---

## Refresher units

Aim for 8–12. Each is raw material that beat 1 expands into the teaching shape in
`references/refresher-format.md`. Keep them dense — this file is read by a model, not skimmed by a
human.

### 1. <Concept>

**Model.** <The mechanism underneath. Why the behavior is predictable rather than memorized. Two to
four sentences. Name what actually happens, not the syntax.>
**Rule.** <A decision rule applicable under time pressure. "Reach for X when Y." Never "it depends.">
**Tell.** <The specific knowledge that distinguishes shipped-this from read-about-this.>

---

## Artifact seeds

Aim for 6–8. Each is a *generation prompt*, not fixed code, so drills don't repeat verbatim across
sessions. Ground every scenario in the target product's domain (see `references/role-context.md`) —
never `Foo`/`Bar`.

### Seed A — <Scenario name>
<One or two sentences of setup: what this code is supposed to do.>
**Defects:** <3–6 defect classes to seed, mixed severity. At least one must only bite in production —
concurrency, scale, partial failure — rather than being visible at rest.>
**Decoys:** <1–2 things that pattern-match to "bug" but are correct here. Without these, precision
cannot be scored, and precision is the signal no other prep tool trains.>

---

## Follow-up question bank

Group under 3–4 headings so beat 5 can pick questions that fit the artifact just critiqued. Phrase
them as an interviewer would say them out loud, not as documentation headings.

**On <dimension>**
- <Question>
- <Question>

---

## Blind-spot markers

Six to ten bullets. Each is a *behavior*, not a fact — the observable thing someone does when they
have actually operated this in production. These feed the blind-spot line written to
`state/progress.md`, so make them specific enough to recognize in a transcript.

- <Behavior>
