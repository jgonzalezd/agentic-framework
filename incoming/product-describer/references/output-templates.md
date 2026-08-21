# Output Templates

Read at Phase 6. These are shapes, not content — every line inside them is re-derived from the product.

---

## Chat output — synthesized mode

Lead with the description. The evidence ledger and caveats come after, because the user came for the pitch, not the audit.

```markdown
# [Product] — described to [audience]

> [One-line framing: who this version is for and what it's optimized to do.
>  If the product name is a working placeholder, say it here.]

[The description, in the audience pack's skeleton, with the pack's section
 headers. Margin notes on the framework behind a section go on their own
 line, indented, in small type:]

  ↳ the Core — Aulet Step 10

---

## What's bracketed, and how to fill it

| Placeholder | What it's for | How to get it |
|---|---|---|
| `[TAM — source needed]` | market section | pull the figure from a named report, or build bottom-up: beachhead headcount × price |
| … | … | … |

## Caveats

- [Anything the description assumes that isn't settled — name, price, stage,
   an unvalidated problem statement.]
```

When both audiences were requested, run the whole block twice with a clear rule between them. Never interleave, never produce a merged version.

---

## Chat output — per-framework mode

```markdown
# [Product] through [Framework] — [Author]

**What this framework says about describing a product:** [2–3 sentences.]

## To customers
[description]

**Why this works in this framework:** [3–4 bullets tying the moves back to the
 framework's concepts.]

## To investors
[description]

**Why this works in this framework:** [3–4 bullets.]
```

When comparing multiple lenses, repeat per framework and close with:

```markdown
## What each lens says to do next

| Framework | The next move it prescribes for this product |
|---|---|
| Aulet | … |
| Ries | … |
| Blank & Dorf | … |
| Blank | … |

**The real bottleneck:** [your read on which of those is actually blocking
 this product right now, and why.]
```

---

## Saved file — `Projects/<name>/pitch.md`

Offered at Phase 6 when the product maps to a project folder. Vault-tier file, so it carries frontmatter and wikilinks per the vault's Rule 6 and Rule 7.

```markdown
---
tags: [startup, project]
updated: YYYY-MM-DD
---

# [Product] — Pitch

Audience-tuned descriptions of [[Product]]. Regenerate with the
`product-describer` skill when the product, stage, or evidence changes —
this file goes stale the moment any of the three moves.

**Stage at time of writing:** [idea | building | beta | launched | revenue]
**Name status:** [confirmed | working placeholder — must be cleared]

## To customers

[description]

## To investors

[description]

## Open placeholders

| Placeholder | Section | How to fill it |
|---|---|---|
| … | … | … |

## Evidence ledger

**Known**

| Fact | Source |
|---|---|
| … | … |

**Unknown**

| Missing | Needed for | How to get it |
|---|---|---|
| … | … | … |

## Related

- [[<project README>]]
- [[<language bank, if one exists>]]
- [[ai-tools]]
```

The evidence ledger is saved deliberately. It's the part that stays useful after the copy is rewritten — a standing list of what this business still has to find out.

---

## Formatting rules for every output

- **Bracketed placeholders keep their explanation.** `[TAM]` alone is useless; `[TAM — source needed: name the report]` is a task. Never strip the note to tidy the prose.
- **Margin notes never appear in prose the user would paste.** They sit on their own line, clearly separate. A customer must never read the word "Aulet".
- **No exclamation marks**, either audience.
- **Never invent social proof** — no testimonials, ratings, star counts, user counts, press mentions, or logo walls, in any output, at any stage.
- **Working names are stated, not silently placeholdered.** If the product name isn't cleared, the reader of this document should know that in the first three lines.
