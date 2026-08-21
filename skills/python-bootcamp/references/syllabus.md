# Syllabus

Thirty-seven units, in order. Load this file at the start of every session to resolve which unit
comes next, then load **only** that unit's module file.

## How the path was built

The ordering comes from **Python Distilled** (Beazley), which is written for people who already
program and therefore leads with the object model and semantics instead of a runway on what a
variable is. The unit shape comes from **Effective Python, 3rd edition** (Slatkin), whose 125
numbered single-claim items are the register this curriculum imitates; its item list also served as
the coverage checklist. The spine of modules M3 and M4 comes from **Fluent Python, 2nd edition**
(Ramalho), whose organizing claim is that "Pythonic" means implementing the protocols the interpreter
already knows how to call. Typing and dataclasses as production tools come from **Robust Python**
(Viafore).

None of those books addresses the Ruby-to-Python transition, which is this reader's actual gap. That
layer is original to this curriculum and appears in every unit.

## Reading the table

**Kind** decides the lesson shape, defined in [lesson-format.md](lesson-format.md). A **trap** unit
gets ten parts and 1,000–1,500 words. A **syntax** unit gets six parts and 600–900 words.

**★** marks a unit that corresponds to a defect the user has already missed in a graded drill. These
are sequenced as early as their dependencies allow.

---

## M0 — Orientation

Two units. The point is to stop translating Ruby line by line and start reading Python as its own
language.

| ID | Title | Kind | The claim |
|---|---|---|---|
| 0.1 | The Ruby-to-Python translation table | syntax | Most of the syntax maps cleanly; the handful of places it does not are where every bug lives |
| 0.2 | The object model in one page | syntax | Names are references to objects, and classes and functions are objects too |

## M1 — Names, objects, and mutability

Six units. This module has the highest defect yield of the seven, because Python's assignment and
default-argument semantics differ from Ruby's in ways the syntax does not advertise.

| ID | Title | Kind | The claim |
|---|---|---|---|
| 1.1 | Assignment binds a name; it does not copy | trap | `b = a` gives you a second name for one object, and mutating through either is visible through both |
| 1.2 | Mutable versus immutable | trap | A tuple's immutability is one level deep, so a tuple holding a list still changes under you |
| 1.3 | Default arguments are evaluated once, at `def` time | trap | `def f(x=[])` creates one list that every call shares forever |
| 1.4 ★ | Class attributes versus instance attributes | trap | An assignment in the class body is shared by every instance, the way Ruby's `@@var` is — but nothing in the syntax says so |
| 1.5 | `copy`, `deepcopy`, and shallow freezing | trap | `copy()` duplicates the container and not its contents, and `frozen=True` is shallow for the same reason |
| 1.6 | Truthiness and `None` | trap | Empty containers and zero are falsy in Python, so `if x:` and `if x is not None:` are different tests |

## M2 — Functions

Six units. Python functions are ordinary objects, and Python has no blocks — which means several
things a Ruby developer expresses with a block have to be expressed some other way.

| ID | Title | Kind | The claim |
|---|---|---|---|
| 2.1 | Functions are objects, and Python has no blocks | trap | The four Ruby block idioms map to four different Python constructs, and choosing the wrong one is the tell |
| 2.2 | Argument forms | syntax | `*args`, `**kwargs`, keyword-only `*`, and positional-only `/` are the whole repertoire |
| 2.3 | Scope and closures | trap | A closure captures the variable, not its value, so a loop that builds functions captures the last value |
| 2.4 | Decorators and `functools.wraps` | trap | A decorator replaces your function with a different one, and without `wraps` everything that reads metadata breaks |
| 2.5 | Raise rather than return `None` | syntax | A `None` return collapses "absent" and "failed" into one value the caller cannot distinguish |
| 2.6 | `lambda`, `partial`, and comprehensions | syntax | Python's replacements for `&:symbol`, `.map`, and `.select`, and when each is the readable one |

## M3 — The data model

Seven units. This is the module that makes Python click. The interpreter calls your dunder methods on
your behalf, and knowing which method fires when is the difference between using Python and writing
Python.

| ID | Title | Kind | The claim |
|---|---|---|---|
| 3.1 | `__init__`, `__new__`, and explicit `self` | syntax | `__init__` initializes an object that already exists, and `self` is a normal first parameter |
| 3.2 | `__repr__` versus `__str__` | syntax | `__repr__` is what you read in every traceback and log line, so every domain object needs one |
| 3.3 ★ | The `__eq__` and `__hash__` contract | trap | Defining `__eq__` sets `__hash__` to `None`, and the object becomes unusable in a set or as a dict key |
| 3.4 | Ordering and sorting with `key` | syntax | `key=` beats a comparator, and `total_ordering` fills in the operators you did not write |
| 3.5 | `__getattr__`, `__getattribute__`, `__setattr__` | trap | Python's `method_missing` equivalent fires only after normal lookup fails, which is why it is rarer here |
| 3.6 | The container protocol | syntax | `__len__`, `__getitem__`, `__contains__`, and `__iter__` are what make your object work with the language |
| 3.7 | Context managers | trap | `with` guarantees cleanup, `@contextmanager` needs `try`/`finally` around the `yield`, and a truthy `__exit__` silently swallows the exception |

## M4 — Iteration and generators

Four units. Ruby's `yield` and Python's `yield` share a keyword and nothing else, which makes this
module the highest-collision material in the curriculum.

| ID | Title | Kind | The claim |
|---|---|---|---|
| 4.1 | The iterator protocol | syntax | `for` calls `__iter__` and then `__next__` until `StopIteration`, and that is the whole mechanism |
| 4.2 | Python's `yield` is not Ruby's `yield` | trap | Ruby's `yield` calls the block you were given; Python's `yield` suspends your function and hands a value out |
| 4.3 | Generators are single-pass | trap | Iterating a generator a second time yields nothing, silently, and returns a wrong answer instead of raising |
| 4.4 | Comprehensions, `enumerate`, `zip`, `itertools` | syntax | The repertoire that replaces `each_with_index`, `zip`, `map`, and `select` |

## M5 — Classes and interfaces

Six units. Everything about declaring types, sharing behavior, and describing the shape a caller must
satisfy.

| ID | Title | Kind | The claim |
|---|---|---|---|
| 5.1 | `@property` instead of getters | syntax | Start with a public attribute and convert it to a property later without changing a single caller |
| 5.2 | `@classmethod` and `@staticmethod` | syntax | `@classmethod` is how Python spells an alternative constructor, and it inherits correctly |
| 5.3 | `super()` and the MRO | trap | `super()` follows the MRO of the instance's class, not the lexical parent, so a mixin can land somewhere its author never saw |
| 5.4 | ABCs versus Protocols | trap | An ABC requires inheritance; a Protocol requires only shape — and `@runtime_checkable` checks names, never signatures |
| 5.5 ★ | Composition and the template-method trap | trap | Overriding a method the parent calls internally hijacks the parent's own logic |
| 5.6 | dataclass, Pydantic, NamedTuple | trap | A dataclass's type hints do nothing at runtime, so a dataclass at a trust boundary validates nothing |

## M6 — Production Python

Six units. What separates code that runs from code you can deploy, debug, and hand to someone else.

| ID | Title | Kind | The claim |
|---|---|---|---|
| 6.1 | Exceptions | trap | `except Exception` catches things you never meant to catch, and `raise … from` is what keeps the original cause readable |
| 6.2 | Modules, packages, and import time | trap | A module body runs once, on first import, and anything at module level is a program that executes at import |
| 6.3 | Type hints | trap | Hints are erased at runtime unless something reads them, and `Optional[str]` does not mean the argument is optional |
| 6.4 | The GIL | syntax | Threads help with blocking I/O and never with CPU work, and processes are the answer for the latter |
| 6.5 | asyncio | trap | One loop on one thread, so a single blocking call stalls every concurrent request rather than only its own |
| 6.6 | pytest | trap | Fixtures are dependency injection, a module-scoped mutable fixture leaks state, and a mock at your own seam tests nothing |

---

## Order and dependencies

The path is linear and each module assumes the ones before it. Three dependencies are worth naming
explicitly, because they are the ones that make out-of-order study fail:

- **1.4 depends on 1.1.** The class-attribute trap only makes sense once you accept that a name is a
  reference and that every instance is looking at the same object.
- **3.3 depends on 1.2.** The `__hash__` contract is a statement about immutability; hashing a value
  that can change is the reason the rule exists.
- **6.5 depends on 4.2.** `async def` and `await` are built on the same suspension machinery as
  generators, and asyncio is far easier once `yield` is understood as suspension.

Units 1.4, 3.3, and 5.5 are the ★ units. If the user wants to go straight at their known gaps rather
than follow the path, take those three in that order, since each satisfies its dependency.
