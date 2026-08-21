# Anti-Slop Rules

> Read at **Phase 4.5**, the mechanical sweep gate. This file is the enforcement layer.
>
> **Frozen mirror.** The master lives in OutperformerVault at `Apps/OutperformerOS/GTM/Content/Engine/voice/04 - Anti-AI-Tell Rules.md` and `05 - Humane Register Reference.md`, plus the SmartVault memory rules on prose. This skill runs from arbitrary working directories with no vault access, so the rules are copied here and drift is accepted. When the master changes materially, update this file by hand.
>
> **The em-dash cap and the clause cap apply to drafts, not to this file.** Doctrine files are allowed to be dense. Posts are not.

---

## How to use this file

Every failure class below has a test you can apply and, where possible, a grep that finds it. Work through the classes in order, then run the grep battery at the bottom. A draft leaves this phase when the battery returns zero and every class has been checked by eye.

The classes are not equally dangerous. Class 3, fabricated concreteness, is the one that ends a candidacy rather than a draft, because it is the one a reader can check and find false. Class 1 is the one that most reliably makes a post read as machine-authored to this audience.

---

## Class 1 — Rhetorical symmetry

The most common machine signature. These constructions get reached for because they sound sharp, and readers who have been trained on AI content now parse them as a signature rather than as style.

| Banned | Why it is a tell |
|---|---|
| "It's not X — it's Y." | False binary; manufactured reframe |
| "X isn't A, it's B." | Same tell, different surface |
| "The real X is…" | Pseudo-revelation framing |
| "Not X. Not Y. But Z." | Triadic denial |
| "You don't have an X problem. You have a Y problem." | Symmetric substitution |
| "This isn't just X, it's Y." | The "not just" family, all of it |

**The reveal dash.** An em dash standing in for a colon, a dramatic pause or a reveal is banned. If the clauses on either side use matched auxiliaries — "haven't X — have Y", "aren't X — are Y", "don't X — do Y" — it is a reveal dash wearing a pause costume.

**The period-disguised reveal.** Swapping the dash for a period does not fix the tell when both clauses keep matched auxiliary verbs and matched participles. "The tests didn't fail. They were never run." is a symmetric reveal with a period in it.

**Allowed:** denial then replacement where the replacement verb is grammatically different and plain. "The linter doesn't infer the link. It requires you to write it." — plain active verb, no mirror. This rhythm is fine and appears in real writing.

**Banned rhythms.**
- Two consecutive sentences with matched subject-verb-object syntax.
- Tricolons whose third element resolves tension rather than adding information.
- Parallel openers stacked across sentences: "The spec wants X. The test wants Y. The reviewer wants Z."
- Symmetric "less of X, more of Y" as a default phrasing.

**Allowed:** a tricolon where each element carries distinct information, and a single parallel construction used once in a post for deliberate emphasis.

**The cross-sentence reveal pair.** Any two consecutive sentences where the first sets up and the second delivers a twist, even with no mirrored grammar. Test: if you can predict what sentence 2 does from the shape and position of sentence 1, the pair is crafted. Rewrite so the second sentence carries new information, or collapse both into one plain declarative.

---

## Class 2 — Writing for applause

**The aphorism close.** If a closing line would look at home on a slide or a poster, it is performing. Replace it with the actual instruction, the actual consequence, or the next concrete thing that happened.

Banned closes:
- A rhetorical question.
- A symmetric callback to the opening.
- "That's not X. That's Y." as a resolution when the thesis is already clear.
- Imperatives at the audience: "Choose wisely", "Act accordingly", "Remember this".
- **The knowing wink** — a close that implies a payoff the reader has to complete in their own head. Closes state; they do not imply.

**The clever-metaphor tell.** A metaphor that reads as a writer reaching for cleverness rather than as language a person would say. Say it out loud: would a colleague use this phrase at a desk? Invented literary metaphors — "the topography of your attention", "the architecture of your decisions" — are fingerprints.

Metaphors must come from shared idioms or concrete everyday objects. "Guardrail", "scaffolding", "smoke test", "paper trail" are fine because they are already in the vocabulary. If you invented it to be pithy, cut it and write a plain declarative instead. Plain beats clever.

**Tech-as-brain metaphors are banned outright**: "operating system" for a mind or a culture, "hardwired", "wired to", "rewire", "running the software of", "the algorithm in your head".

**Portentous fragments.** A one-line paragraph that exists for weight rather than for information. "That was the bug." on its own line is a drum roll. If the fragment carries real content, put it in a sentence.

---

## Class 3 — Fabricated concreteness

The most dangerous class in technical writing, because it survives every stylistic check. The post passes the specificity floor, feels grounded, and a reader who tries to verify anything finds nothing.

**The research veneer.** Concrete-sounding claims that mimic the texture of measurement without being measured. "Most teams lose about 40 minutes a day to this" — invented duration. "The model reads a missing test as an absent requirement" — folk cognition dressed as a finding.

**The test.** For every concrete-sounding claim, silently complete *"this comes from…"* with a real source: a commit, a file, a dated run, a named study, or a personal observation explicitly framed as one. If the answer is "I made it sound right", the claim is fabricated. Cut it or reframe it explicitly as a guess.

**Decorative specificity.** A number that satisfies the specificity floor on the surface without pinning down the claim. Swap it for a different number: if the meaning does not change, it was decoration. "I spent about 3 hours on it" changes nothing if it becomes 5 hours; "8 commits in 136 minutes" is a real constraint on what could have happened.

**Undefined value modifiers.** "Expensive", "dangerous", "powerful", "fragile", "brittle" without the next clause specifying the cost, the danger or the failure. If you cannot specify it, cut the modifier.

**Menace adverbs.** "Quietly", "silently", "subtly", "secretly" in front of a behavioural claim, used to manufacture ominous texture. "The spec quietly drifts from the code." Cut the adverb or replace it with a concrete claim about when and how often.

**In technical posts specifically, these are the fabrication hotspots:**
- Performance numbers and time savings.
- Line counts, file counts, test counts.
- Adoption claims and "teams I've worked with".
- Reconstructed error messages and command output. Quote the real one or do not quote.
- Comparisons to named alternatives you have not actually run.

---

## Class 4 — Compressed assistant register

The house style of a chat response, which is not the house style of a person writing about their own work.

- **Fragments used as sentences** for emphasis. Write complete declaratives.
- **Colon scaffolding**: "The problem: the spec never named the test." Use a sentence.
- **Em-dash chains**: more than one dash in a sentence, ever.
- **Bolded lead-ins on every bullet**, turning prose into a slide deck.
- **Section headers that are labels rather than claims**: "The Solution", "Key Takeaways", "Final Thoughts".
- **The summary that restates rather than concludes.** A closing section that lists what the post already said adds nothing; end on the last real thing that happened, or on what is still unresolved.

The antidote is the register of technical books — Effective Java, Fluent Python, POODR. Complete sentences, explicit transitions, one idea per sentence, the reasoning shown rather than compressed. `book-prose.md` carries the positive anatomy.

**Clause cap: 4 per sentence, target 3.** Direct is not the same as packed.

---

## Class 5 — Ambient vocabulary

Greppable and non-negotiable. These words are saturated and their presence is enough on its own.

**Banned outright:** unlock, leverage (as a verb), elevate, transform, level up, supercharge, streamline (as filler), rewire, hardwired, game-changer, seamless, robust (as a compliment with no metric), delve, tapestry, testament to, "in today's fast-paced", "at the end of the day", "the beauty of this approach".

**Banned hedges in the user's own voice:** maybe, I think, arguably, sort of, kind of, "it could be argued". You either measured it or you are explicitly guessing, and an explicit guess is written as "I have not tested this beyond my own two repositories", not as "arguably".

**Banned punctuation and ornament:** emojis anywhere in the post, exclamation marks in prose, bold used for emphasis more than a few times per post, headers with emoji.

**Banned openers:** "In this post, we will…", "In today's world…", "As developers, we all know…", "Have you ever…". Open on the thing that happened.

---

## Class 6 — Spelled-out numbers

Numerals, always, for any quantity. Write 3, not three. Write 136 minutes, not "just over two hours" unless the imprecision is the point and is stated.

Spelled-out words are allowed only in genuine idioms — "one of the", "no one", "on the other hand". Everything else is a quantity and takes a numeral.

---

## Hard floors

**The specificity floor.** The post must carry at least one of these, and a good post carries them throughout: a concrete number, a named proper noun (a tool, a file, a repository, a person), a specific action verb with a specific object, or a dated scene. A post built from abstract assertion fails regardless of how well it reads.

**The fingerprint check.** If 3 or more of these are present, the post reads as machine-authored and must be rewritten rather than patched:

1. Em dashes doing rhetorical work.
2. Symmetric paired sentences with matched syntax.
3. An "it's not X, it's Y" construction anywhere.
4. Undefined value modifiers.
5. A tech-as-brain metaphor.
6. Zero specificity anchors in a section.
7. A closing rhetorical question.
8. A tricolon that resolves rather than informs.
9. Research-veneer fabrication.

**The em-dash cap.** 1 per post, parenthetical only, and only where removing it would lose a genuine aside. If replacing it with a period changes nothing except removing suspense, it was doing rhetorical work and it goes.

**The read-aloud test.** Read the passage out loud. If it sounds like a person explaining something to a colleague at 8am on a Tuesday, it passes. If it sounds like a keynote, a case study or a LinkedIn thought-leadership post, rewrite it.

---

## The grep battery

Run every command against the draft file. Each must return the stated result before the phase closes. The battery finds what is greppable; the clause cap, the read-aloud test and the fingerprint check are manual and must be done by eye in the same pass.

```bash
DRAFT=<path to draft>

# 1. Em dashes — at most 1, and inspect the survivor by eye
grep -o '—' "$DRAFT" | wc -l

# 2. Rhetorical symmetry — expect 0
grep -inE "isn'?t just|not just a|it'?s not about|isn'?t [a-z]+ — it'?s|the real [a-z]+ is|doesn'?t have a [a-z]+ problem" "$DRAFT"

# 3. Ambient vocabulary — expect 0
grep -inE 'unlock|leverag|elevate|transform|level up|supercharge|game.?changer|seamless|rewire|hardwired|delve|tapestry|testament to' "$DRAFT"

# 4. Hedges in the author's voice — expect 0
grep -inE '\b(maybe|i think|arguably|sort of|kind of)\b' "$DRAFT"

# 5. Exclamation marks in prose — expect 0
grep -n '!' "$DRAFT" | grep -v '!\[' 

# 6. Emoji — expect 0
grep -nP '[\x{1F300}-\x{1FAFF}\x{2600}-\x{27BF}]' "$DRAFT"

# 7. Spelled-out quantities — review every hit, idioms pass, quantities do not
grep -inwE 'one|two|three|four|five|six|seven|eight|nine|ten' "$DRAFT"

# 8. Generic openers and label headers — expect 0
grep -inE '^In (this|today)|^As (developers|engineers)|^## (The Solution|Key Takeaways|Final Thoughts|Conclusion)' "$DRAFT"

# 9. Fabrication sweep — every hit maps to a truth-ledger row
grep -onE '[0-9][0-9,.]*%?|\$[0-9]+' "$DRAFT" | sort -u
```

Report the counts in the deliverable. Sweep 9 is reported as a mapping, each value beside the ledger row that produced it, not as a count.

---

**Mirrored:** 2026-08-20 from the OutperformerVault voice engine, rules dated 2026-04-20 and 2026-07-20.
