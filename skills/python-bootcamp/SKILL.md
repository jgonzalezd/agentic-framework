---
name: python-bootcamp
description: >
  Teaches Python fundamentals as an ordered curriculum to an experienced engineer whose reflexes are
  Ruby and Java. Thirty-seven units across seven modules — names and mutability, functions and
  closures, the data model and dunder protocols, iterators and generators, classes and interfaces,
  and production Python (exceptions, typing, the GIL, asyncio, pytest). One unit per session,
  delivered as a book chapter in the register of Effective Python and Fluent Python, with a Ruby
  contrast in every unit, predict-the-output snippets the user answers before seeing the answer, and
  a from-scratch writing exercise. Use when the user wants to learn or review Python fundamentals,
  says they are rusty on or shaky about a Python concept, asks what something means in Python or how
  it differs from Ruby, asks to be taught decorators, generators, dunders, dataclasses, asyncio,
  typing, or pytest, or wants to continue or resume their Python bootcamp.
---

# Python Bootcamp

An ordered path through Python fundamentals for someone who already knows how to program. The reader
is a strong engineer whose daily languages have been **Ruby and Java**. They can read any code. What
they lack is Python-specific *reflex* — the semantics that are obvious to a native and invisible to a
visitor, which is exactly where interview defects and production bugs come from.

This skill exists because recognition is not the same as production. Reading a lesson leaves you able
to follow Python; writing code from scratch is what makes you able to produce it. Every session ends
with the user writing something.

## State location

All `state/` paths in this document mean **`~/.claude/skills/python-bootcamp/state/`**, never a
directory relative to the current working directory. This skill runs from wherever the user happens
to be; it MUST NOT write curriculum state into their project.

```
state/
├── progress.md          one row per completed unit
├── misconceptions.md    every wrong prediction, feeding the next recall beat
└── lessons/             the generated lesson text, accumulating into a book
```

## Modes

| Invocation | Behavior |
|---|---|
| `python-bootcamp` | Read `state/progress.md`, resume at the next uncovered unit, run one session |
| `python-bootcamp <unit-id>` | Target a specific unit, e.g. `python-bootcamp 3.3` |
| `python-bootcamp <topic>` | Match the topic to a unit, e.g. `python-bootcamp decorators` → 2.4 |
| `python-bootcamp review` | Coverage report, recurring misconceptions, what to re-drill. No new unit |

## The syllabus

[references/syllabus.md](references/syllabus.md) holds the ordered unit list. Load it at the start of
every session to resolve which unit comes next, then load **only** the one module file that unit
belongs to. Loading all seven wastes context and produces vague lessons.

| Module | File | Units |
|---|---|---|
| M0 — Orientation | [references/modules/M0-orientation.md](references/modules/M0-orientation.md) | 0.1–0.2 |
| M1 — Names, objects, and mutability | [references/modules/M1-names-and-mutability.md](references/modules/M1-names-and-mutability.md) | 1.1–1.6 |
| M2 — Functions | [references/modules/M2-functions.md](references/modules/M2-functions.md) | 2.1–2.6 |
| M3 — The data model | [references/modules/M3-data-model.md](references/modules/M3-data-model.md) | 3.1–3.7 |
| M4 — Iteration and generators | [references/modules/M4-iteration-and-generators.md](references/modules/M4-iteration-and-generators.md) | 4.1–4.4 |
| M5 — Classes and interfaces | [references/modules/M5-classes-and-interfaces.md](references/modules/M5-classes-and-interfaces.md) | 5.1–5.6 |
| M6 — Production Python | [references/modules/M6-production-python.md](references/modules/M6-production-python.md) | 6.1–6.6 |

[references/ruby-bridge.md](references/ruby-bridge.md) is the Ruby-to-Python reference every unit
draws its contrast from. Consult it when writing the "Coming from Ruby" part; do not reproduce it
wholesale in a lesson.

## The session loop

Five beats. Run them in order. Do not compress.

### Beat 1 — Recall

Ask **three** questions before teaching anything new. Draw them from:

- `state/misconceptions.md` first — anything the user got wrong previously outranks new review.
- `state/progress.md` next — units completed two or more sessions ago, oldest first.

Ask them as short spoken questions ("what does `a = b` do to the object `b` refers to?"), take the
answers, and correct wrong ones in one or two sentences. If `state/progress.md` does not exist yet,
say so and skip straight to beat 2; do not invent a review.

### Beat 2 — The lesson

Deliver **one** unit in the shape defined by
[references/lesson-format.md](references/lesson-format.md), in the kind the syllabus tags it — a
**trap unit** gets all ten parts and 1,000–1,500 words, a **syntax unit** gets six parts and 600–900
words. Both include the "Coming from Ruby" part, without exception.

Write in **book prose**: complete declarative sentences, one idea per sentence, explicit transitions,
the register of *Effective Python* and *Practical Object-Oriented Design in Ruby*. Never the
compressed assistant register. The Voice section of `lesson-format.md` is the standard and it is not
negotiable; it took four rounds of review to arrive at.

**MUST** write the lesson to `state/lessons/<unit-id>-<slug>.md` before beat 3 begins, so the book
accumulates as it is studied. Print the lesson in the conversation as well — do not make the user
open a file to read it.

### Beat 3 — Predict the output

Present **four** short snippets drawn from the unit's predict-snippet seeds. Number them. Ask the
user to say what each one prints, or what it raises, before being told anything.

**MUST NOT** reveal, hint at, or gesture toward any answer before the user has answered. Then grade
each one exactly. "Something weird happens" is not a correct answer and does not earn credit; the
point of this beat is to force a precise mental model of the interpreter. When the user is wrong,
walk the execution step by step rather than restating the rule.

The expected answers recorded in the module files were verified against **CPython 3.11.5**. Exception
*messages* are reworded between minor versions, so when a snippet's answer is an exception, grade on
the exception type and the offending name rather than on the exact sentence. When in doubt, run the
snippet before grading — the module files note which answers are version-sensitive.

### Beat 4 — Write it

Give **one** small from-scratch exercise, six to fifteen lines, set in the housing and eligibility
domain the user is interviewing for — applicants, households, income documents, benefit programs,
leasing queues — never `Foo` and `Bar`. Say what it should do and what it should return. Then stop
and let the user write it.

Review the result for **Python idiom**, not algorithmic cleverness: did they use the construct this
unit taught, did they reach for a Ruby shape Python does not have, is there a more direct expression.
Show the idiomatic version afterward with one line of rationale per change.

This beat is the reason the bootcamp exists. **MUST NOT** skip it, and MUST NOT replace it by writing
the code for the user.

### Beat 5 — Log

**MUST** append one row to `state/progress.md`:

```
| YYYY-MM-DD | unit-id | title | predict N/4 | exercise: solid \| shaky \| missed | one-line note |
```

Create the file with that header row if it does not exist. Never rewrite existing rows.

**MUST** append every wrong prediction and every idiom miss to `state/misconceptions.md`, one line
each, as a question that can be asked back in a later beat 1:

```
| YYYY-MM-DD | unit-id | the question to ask again | what they believed |
```

Remove a line only after the user has answered it correctly in a later recall beat.

## Difficulty and pacing

- One unit per session unless the user asks for more. The units are sized for a single sitting.
- If the user answers all four predict snippets correctly and the exercise is clean, say so plainly
  and offer to cover the next unit in the same session rather than padding this one.
- If the same misconception appears twice, do not simply re-explain it. Build the next session's
  predict snippets around it in a different disguise and watch whether it survives.

## Relationship to `interview-drilling`

The two skills are complements and share state deliberately.

- `interview-drilling` reads `python-bootcamp/state/progress.md` to see which units are covered, and
  shortens its beat-1 refresher to a recap when the topic is already taught.
- `interview-drilling` appends the blind spot it finds in beat 4 to
  `python-bootcamp/state/misconceptions.md`, so the next bootcamp session opens on it.

Teach here. Test there.

## Hard rules

- MUST write the lesson file to `state/` before beat 3.
- MUST NOT reveal a predicted output before the user has answered.
- MUST include the "Coming from Ruby" part in every unit.
- MUST NOT skip beat 4, and MUST NOT write the exercise solution for the user before they try.
- MUST append to both `state/progress.md` and `state/misconceptions.md` after every session.
- MUST write in book prose per the Voice section of `references/lesson-format.md`.
- Load the syllabus plus **one** module file per session, never all seven.
- One unit per session unless the user asks otherwise.
