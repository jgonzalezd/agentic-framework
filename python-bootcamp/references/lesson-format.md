# Lesson Format

The fixed shape of a bootcamp lesson, and the canonical teaching register for this user across every
skill. A lesson is a **complete book item** — the standard is a chapter item from *Effective Python*
or *Fluent Python*. After reading it once, the reader has the mechanism, knows how it differs from
the Ruby they already have reflexes for, has *seen* the bug as wrong output, has seen the fix produce
the right output, knows when the risky tool is the correct choice, when it is mandatory, and where a
major library uses it.

`interview-drilling/references/refresher-format.md` points here. Change the Voice section in this
file and both skills change together.

## Contents

- Audience
- Voice — write book prose, not assistant prose
- The two lesson kinds
- Shape of a trap unit (ten parts)
- Shape of a syntax unit (six parts)
- Six hard rules
- Worked example — a trap unit
- Worked example — the two parts unique to a syntax unit
- Anti-patterns

## Audience

The reader is a strong engineer whose daily languages have been **Ruby and Java**, not Python. They
can read any code, but Python-specific semantics are not reflexes.

- **Never assume Python-idiom fluency.** Any Python-specific semantic an example relies on — `self`,
  method lookup, class versus instance attributes, dunder protocols, decorators being plain
  functions, generators — gets one plain sentence of grounding the first time it appears.
- **Bridge from Ruby first, Java second.** Ruby is the reader's mother tongue here. "In Java you'd
  mark this `final`; Python has no equivalent" teaches faster than a paragraph of pure Python, and
  "Ruby evaluates the default on every call; Python evaluates it once" teaches faster still.
- The bar: read top to bottom once, never scroll back, never simulate the interpreter unaided.

## Voice — write book prose, not assistant prose

This is the rule that took four rounds of user feedback to find, so it is a hard rule. Write the way
Joshua Bloch and Sandi Metz write, not the way a terse assistant summarizes.

Book prose:
- Complete, ordinary declarative sentences — subject, verb, object. If a sentence cannot be read
  aloud naturally, rewrite it.
- One idea per sentence, connected with explicit transitions: "To make this concrete, suppose…",
  "In other words,…", "Notice that…", "The reason is worth spelling out.", "Luckily, there is a
  way to avoid this."
- Patient. It addresses the reader as "you" and unfolds one thought at a time.

Banned (the assistant register):
- Sentence fragments used as sentences ("Compose everywhere else.")
- Colon-led scaffolding ("The test, before subclassing: imagine…")
- Em-dash chains stacking three or more clauses into one sentence
- Stacked abstract qualifiers ("could a change to the parent's private internals break the child
  without the parent's public signature changing?")
- Invented compound jargon ("reset-via-start")

Calibration — the same idea in both registers:

> **Bad:** The test, before subclassing: imagine the parent's author rewrites its method bodies
> tomorrow — same public methods, same arguments, different internals. Would your subclass still
> work?

> **Good:** Before you subclass, ask one question. If the author of the parent class rewrote its
> method bodies tomorrow, keeping every public method and signature the same, would your subclass
> still work?

Identical content. The difference is complete sentences and the absence of scaffolding punctuation.

## The two lesson kinds

The syllabus tags every unit as one kind or the other. The kinds exist because not every unit has a
hazard at its center, and forcing a "see it break" section onto a unit about argument forms produces
a contrived bug that teaches nothing.

| | Trap unit | Syntax unit |
|---|---|---|
| Center of the unit | A specific way Python surprises you | A repertoire you need at your fingertips |
| Parts | Ten | Six |
| Length | 1,000–1,500 words | 600–900 words |
| Snippets | Up to 5, each ≤15 lines | Up to 6, each ≤10 lines |
| Example units | 1.3 mutable defaults, 3.3 `__eq__`/`__hash__`, 4.2 `yield` | 2.2 argument forms, 4.4 comprehensions |

Both kinds carry "Coming from Ruby". That part is never optional, in either kind.

## Shape of a trap unit

Ten parts, in this order. **1,000–1,500 words**, up to 5 code snippets of ≤15 lines each.
Completeness is the constraint; length serves it.

```markdown
### <unit-id> — <title>

<Why this matters — 1–2 sentences of real stakes: a production failure mode, an interview
expectation. Not a definition.>

**Coming from Ruby.** <The Ruby you would write, then the Python that looks equivalent and is not.
Name the divergence in prose. Where Ruby has no analogue at all, say so plainly rather than
inventing one.>

**The mechanism.** <Plain, full sentences at a whiteboard. Ground every Python-specific semantic;
bridge from Ruby or Java where it clarifies.>

**See it break.** <Minimal code demonstrating the trap, a walk-through, and — non-negotiable — a
demo whose final line shows THE BUG AS VALUES:
`print(lt.laps)    # expected: [12.4] — actual: []`>

**The fix.** <The corrected pattern. Opens by stating what changed vs. the previous snippet and what
stayed the same. Walk-through, then the SAME demo re-run, now producing the expected value.>

**When <the risky tool> is the right call.** <A genuine, concrete positive example — a short snippet
or a precisely described real case. Not a hedge sentence.>

**When you have no choice.** <Where the language or ecosystem mandates the pattern, with named
examples the reader will recognize.>

**In the wild.** <One named, important open-source library. What it does with each side of the
trade-off and why that division works. Specific classes, not vibes.>

**How to decide.** <The decision rule, unfolded in book prose and run against the running example.
One idea per sentence.>

**In the interview.** <The 2–3 questions interviewers actually ask, phrased as spoken, plus one
sentence on what a strong answer includes.>
```

## Shape of a syntax unit

Six parts, in this order. **600–900 words**, up to 6 code snippets of ≤10 lines each.

```markdown
### <unit-id> — <title>

<Why this matters — 1–2 sentences. What you cannot read or write fluently without it.>

**Coming from Ruby.** <Same requirement as a trap unit. For syntax units this part often carries the
most value, because the reader's instinct is to reach for a Ruby shape that does not exist.>

**The mechanism.** <How the construct actually works, in full sentences.>

**The forms.** <Each form of the construct, one short snippet each, every snippet followed by a
sentence naming what it does and when you reach for it. This is the repertoire.>

**The mistakes people make.** <Two or three specific errors, each shown as code with the wrong
result as a value where the error produces one, and a sentence on the correct form.>

**In the interview.** <The 2–3 questions interviewers ask, plus what a strong answer includes.>
```

## Six hard rules

1. **Every snippet gets a walk-through.** Immediately after each code block, prose narrates execution
   step by step through the surprising line — which method is looked up, on which object, what fires,
   what state changes. The reader never simulates the interpreter alone.
2. **One running example, explicitly threaded.** A single example carries the whole lesson. Each
   snippet after the first opens with a sentence stating its relationship to the previous one. Never
   make the reader guess whether a name is the same class as before.
3. **Conclusions live in prose, never in comments.** A comment may *locate* a line; it may not carry
   the argument. If a comment says *why*, delete it and derive the why in the walk-through.
4. **The bug must be shown as values.** In a trap unit, "See it break" ends with a runnable demo
   whose last line carries `# expected: X — actual: Y`, and "The fix" re-runs the *same* demo showing
   the expected value now obtained. A trap without visible wrong output has been asserted, not
   demonstrated. The same applies to "The mistakes people make" in a syntax unit.
5. **Positive cases are mandatory and concrete.** In a trap unit, "When it's the right call", "When
   you have no choice", and "In the wild" each need a named, real example. None may be a hedge
   sentence.
6. **The Ruby contrast is specific, not decorative.** Name the actual divergent behavior, not a
   difference in spelling. "Ruby uses `end` and Python uses indentation" teaches nothing here. "Ruby
   evaluates a default argument on every call; Python evaluates it once, when `def` executes" is the
   whole lesson.

## Worked example — a trap unit

### 5.5 — Composition and the template-method trap

Inheritance looks like the safest feature in object-oriented programming, and it is one of the most
common sources of quiet breakage in long-lived codebases. Interviewers return to this topic
constantly, and they are not checking whether you know the slogan "favor composition over
inheritance." They are checking whether you understand why the slogan exists and when to ignore it.

**Coming from Ruby.** In Ruby your instinct for this problem is probably a module rather than a
subclass, because Ruby gives you `include` and Python does not:

```ruby
module Lapping
  def reset
    @laps = []
    super
  end
end

class LapTimer < Timer
  include Lapping
end
```

That instinct is worth examining, because the module does not actually solve the problem you are
about to see. When Ruby includes `Lapping`, the module is inserted into the ancestor chain and its
methods run against the *same* `self` as the host class, so `Timer`'s internal calls reach the
module's `reset` exactly as they would reach a subclass's. Ruby's `private` does not close the hole
either, since a private method in Ruby restricts the receiver, not the override. Python has no
`include` at all, so the same idea is spelled as a mixin class in the inheritance chain, and it
carries the identical exposure. The lesson below therefore applies to both languages; what differs is
only that Ruby's `include` makes the design feel lighter than it is.

**The mechanism.** Unlike an ordinary method call between objects, inheritance breaks encapsulation.
Here is why. When Python resolves a method call, it looks at the class of the actual object first and
only then walks up the inheritance chain; Ruby resolves methods the same way. Now consider a parent
class that calls one of its own methods. When a method in the parent executes `self.reset()`, and
`self` happens to be an instance of a subclass, the lookup starts at the subclass — and if the
subclass has overridden `reset`, the parent runs the child's version in the middle of its own logic.
In other words, every call the parent makes on `self` is a place where a subclass can change the
parent's behavior, whether or not anyone intended that. Java offers `final` and `private` to close
these openings. Python and Ruby offer nothing; every method can be overridden from anywhere.

**See it break.** To make this concrete, suppose we have a `Timer` class and we want a version that
also records lap times. Subclassing looks like the natural move:

```python
class Timer:
    def start(self):
        self.reset()
        self._t0 = now()
    def reset(self):
        self._t0 = None

class LapTimer(Timer):
    def reset(self):
        self.laps = []
        super().reset()
```

The author of `LapTimer` overrode `reset` with the public API in mind: when a user resets the timer,
the laps should be cleared too. Now watch what happens when we record a lap and then start the timer
for the next runner:

```python
lt = LapTimer()
lt.laps = [12.4]
lt.start()
print(lt.laps)    # expected: [12.4] — actual: []
```

When `lt.start()` runs, Python finds no `start` method on `LapTimer`, so it uses the one inherited
from `Timer`. The first line of that method is `self.reset()`. Because `self` is a `LapTimer`, this
call finds the child's `reset`, and the child's `reset` clears the laps. The recorded lap is gone. No
exception was raised and nothing was logged; the data simply disappeared, because starting the timer
was never supposed to touch the laps at all. In Java, the author of `Timer` could have declared
`reset` to be `final` or `private`, and this bug could not compile. In Python there is no way to
forbid it.

**The fix.** Luckily, there is a way to get the new behavior without the fragility. Instead of
extending `Timer`, give `LapTimer` a private field that holds a `Timer` instance, and forward calls
to it. This design is called composition, because the existing class becomes a component of the new
one. `Timer` itself does not change at all:

```python
class LapTimer:
    def __init__(self):
        self._timer = Timer()
        self.laps = []
    def start(self):
        self._timer.start()
    def reset(self):
        self.laps = []
        self._timer.reset()
```

Run the same three lines again, and `print(lt.laps)` now shows `[12.4]`, as expected. The reason is
worth spelling out. When `lt.start()` forwards to `self._timer.start()`, the `self` inside that call
is the plain `Timer` object, so `Timer`'s own `reset` is the only one it can reach. The timer holds
no reference back to the `LapTimer` that owns it, and therefore has no way to touch its laps. The two
classes now interact only through the calls that `LapTimer` chooses to forward.

**When inheritance is the right call.** The standard library's `logging` module shows inheritance
working exactly as designed. Every handler — `StreamHandler`, `FileHandler`, `SocketHandler` —
subclasses `logging.Handler`. The parent owns the machinery that all handlers need: thread locking,
level filtering, and formatting. Each subclass overrides a single method, `emit`, which the parent's
documentation names as the intended extension point. Writing your own handler takes four lines:

```python
class DatabaseHandler(logging.Handler):
    def emit(self, record):
        save_to_db(self.format(record))
```

Notice how different this is from the `LapTimer` situation. Here the parent's author designed and
documented `emit` as the place to override. The author of `Timer` never published `reset` as an
extension point; the subclass simply took one.

**When you have no choice.** Some inheritance is required. Python will not let you raise an object
that does not derive from an exception class — `raise "boom"` fails with `TypeError: exceptions must
derive from BaseException` — which is why every codebase defines errors like
`class PaymentError(Exception)`. Frameworks impose the same requirement: a Django model must subclass
`models.Model`, a classic unittest suite must subclass `unittest.TestCase`, and a Rails model
subclasses `ApplicationRecord`. In these cases the base class is the framework's contract, and using
it is not a design decision to argue over.

**In the wild.** The `logging` module is also worth studying because it uses both techniques side by
side, each where it belongs. Formatting is composed, not inherited: a `Logger` holds a list of
handlers, and each handler holds a formatter that you attach with `setFormatter`. Because any handler
can be paired with any formatter at runtime, the library never needs classes like `JsonFileHandler`
and `PlainFileHandler`, whose combinations would multiply without end. Inheritance is reserved for
the closed family of handlers that share the parent's locking and filtering machinery. One library,
both tools, and a clear reason for each.

**How to decide.** Before you subclass, ask one question. If the author of the parent class rewrote
its method bodies tomorrow, keeping every public method and signature the same, would your subclass
still work? For `LapTimer` the answer was no. The moment `Timer.start()` stops calling `reset()`
internally, the laps quietly stop being cleared. A subclass that can be broken by changes it cannot
see is depending on how the parent is written, not on what the parent promises, and that dependence
is exactly what composition removes.

It is fair to object that composition can be broken by a change to `Timer` too. The difference is
which changes can break you. The composed version depends only on `Timer`'s public contract — the
methods it explicitly calls — which is the same surface every ordinary client depends on, the part an
author promises to keep stable and deprecates loudly. The inheriting version depends, in addition, on
`Timer`'s internal call graph: the private fact that `start()` happens to call `reset()`. No client
can observe that fact, so the author feels free to change it without notice, and when they do,
nothing raises — subclasses simply change behavior in silence. Depending on a public contract is
ordinary software; depending on private internals is what "inheritance violates encapsulation" means.
Reserve inheritance for the two cases above: a framework that requires it, or a family of variants
where the parent publishes exactly which method a child should fill in.

**In the interview.** Expect these questions, more or less verbatim: "Why composition here rather
than a base class?", "When would you actually use inheritance?", and "A fifth variant arrives next
sprint — what changes?" A strong answer explains the mechanism — internal `self` calls acting as
unintended extension points — and then points to a real positive case such as the logging handlers,
instead of reciting the maxim.

## Worked example — the two parts unique to a syntax unit

The remaining parts of a syntax unit follow the same rules as above. These two are the ones without a
counterpart in a trap unit, so they are shown here. The subject is unit 2.2, argument forms.

**Coming from Ruby.** Ruby and Python both have keyword arguments, and that surface similarity is
what makes the difference easy to miss. In Ruby, a method defined as `def notify(applicant, urgent:
false)` requires `urgent` to be passed by name, because Ruby's keyword arguments are a distinct kind
of parameter with their own syntax. In Python, `def notify(applicant, urgent=False)` declares an
ordinary positional parameter that merely has a default, and a caller is free to write
`notify(app, True)`. If you want Python to enforce what Ruby enforces for you, you have to ask for it
with a bare `*` in the signature, which is covered under "The forms" below.

**The mistakes people make.** The first mistake is assuming a default makes a parameter
keyword-only, as above. The second is collecting arguments with `*args` and then trying to give one
of them a default, which is not possible; a parameter after `*args` becomes keyword-only, and that is
usually what you actually wanted. The third produces a real error rather than a surprise:

```python
def summarize(applicant, *notes, program):
    return f"{applicant}: {len(notes)} notes for {program}"

print(summarize("A-1042", "income verified", "SNAP"))
# expected: A-1042: 1 notes for SNAP
# actual:   TypeError: summarize() missing 1 required keyword-only argument: 'program'
```

Because `program` sits after `*notes`, Python treats it as keyword-only, so the third positional
argument was swallowed into `notes` and `program` was never supplied. Calling
`summarize("A-1042", "income verified", program="SNAP")` returns what the author intended.

## Anti-patterns

- **Assistant register.** Fragments, colon-led scaffolding, em-dash chains, stacked qualifiers,
  compound jargon. See the Voice section; this is the failure mode that took four rounds to name.
- **Assumed fluency.** Using a Python idiom without one grounding sentence. The reader's reflexes are
  Ruby and Java.
- **Decorative Ruby contrast.** A "Coming from Ruby" part that compares syntax rather than semantics.
  See hard rule 6.
- **Orphaned snippet.** A code block whose relationship to the previous one is unstated, or with no
  walk-through after it.
- **Invisible bug.** A trap demonstrated only in prose, with no `expected: X — actual: Y` values.
  Asserting is not showing.
- **Hedged positives.** "Sometimes inheritance is fine" with no named example. The positive cases get
  the same rigor as the failure case.
- **Conclusion-in-a-comment.** A comment that asserts what the walk-through must derive.
- **Trap shape forced onto a syntax unit.** A contrived bug invented so the unit can have a "See it
  break" section. Use the syntax shape instead; the syllabus says which kind each unit is.
