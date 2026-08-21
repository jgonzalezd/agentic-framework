# M3 — The data model

Seven units. This is the module that makes Python click. The interpreter calls your dunder methods on
your behalf, and knowing which one fires when is the difference between using Python and writing
Python.

The organizing claim, borrowed from *Fluent Python*: the language already knows how to iterate, how
to compare, how to represent, and how to manage a resource. Your object joins in by implementing the
protocol, not by inventing a method name.

---

### 3.1 — `__init__`, `__new__`, and explicit `self`  [syntax]

**Model.** Constructing an object runs two methods. `__new__` allocates and returns the instance, and
`__init__` receives that already-existing instance as `self` and initializes it. You almost never
write `__new__`. `self` is an ordinary first parameter that you declare and the caller never passes;
the interpreter supplies it because `a.method()` is shorthand for `type(a).method(a)`.

**Ruby contrast.** Two differences, both of which produce errors rather than surprises, which makes
this a syntax unit rather than a trap. The constructor is called `__init__` rather than `initialize`.
More importantly, Ruby's `self` is an implicit receiver, so calling `other_method` bare inside a
method works; Python has no implicit receiver at all, and the same bare call raises `NameError`
because Python looks for a local or global name. Every access to the object's own state or methods
must be written `self.something`.

**The forms.** `__init__` with defaults; an alternative constructor as a `@classmethod` (previewing
5.2); accessing an attribute versus calling a method on `self`; the unbound form `Class.method(obj)`
showing that `self` really is just the first argument.

**Mistakes.** Writing `initialize`. Omitting `self` from the parameter list. Assigning to the bare
parameter name inside `__init__` instead of to `self.name`, which silently sets nothing.

**Predict snippets.**

```python
# 1
class Applicant:
    def __init__(self, name): name = name
print(hasattr(Applicant("ann"), "name"))

# 2
class Applicant:
    def __init__(self, name): self.name = name
    def greet(self): return f"hi {name}"
print(Applicant("ann").greet())

# 3
class A:
    def __new__(cls): print("new"); return super().__new__(cls)
    def __init__(self): print("init")
A()

# 4
class A:
    def m(self): return "x"
print(A.m(A()), A().m())
```

Expected: `False` · `NameError: name 'name' is not defined` · `new` then `init` · `x x`. Snippet 1 is
the silent one and snippet 4 is the one that makes `self` finally feel ordinary.

**Exercise.** Write an `Applicant` class holding an ID, a name, and a list of household members,
with an `add_member` method and a `household_size` method. Every member list must be independent
across instances. Then construct two applicants and prove independence with an assertion. Watch for:
the class-attribute trap from unit 1.4, and for a bare `name = name` in `__init__`.

---

### 3.2 — `__repr__` versus `__str__`  [syntax]

**Model.** `__repr__` is for developers; it should be unambiguous and, where practical, look like the
expression that would recreate the object. `__str__` is for end users and falls back to `__repr__`
when it is not defined. The distinction matters more than it looks, because containers always use
`__repr__` for their elements — printing a list of your objects calls `__repr__`, never `__str__` —
and so do tracebacks, debuggers, and log lines.

**Ruby contrast.** Ruby has the same pair as `inspect` and `to_s`, and `p` versus `puts` selects
between them, so the concept transfers cleanly. The divergence is the fallback direction: in Python,
`str()` falls back to `__repr__`, so defining only `__repr__` gives you sensible behavior everywhere,
while defining only `__str__` leaves every list, dict, and traceback showing `<__main__.Applicant
object at 0x…>`. Define `__repr__` first, always.

**The forms.** `__repr__` returning `f"Applicant({self.id!r})"`; the `!r` conversion inside an
f-string; `__str__` for a user-facing rendering; a dataclass's generated `__repr__` for free.

**Mistakes.** Defining `__str__` only. Building a `__repr__` that hides the fields you actually need
while debugging. Putting personally identifying information into `__repr__`, which in this domain
means it lands in every log line — a real defect, not a style note.

**Predict snippets.**

```python
# 1
class A:
    def __repr__(self): return "R"
    def __str__(self): return "S"
print(A(), str(A()), repr(A()), f"{A()}", f"{A()!r}", [A()])

# 2
class A:
    def __repr__(self): return "R"
print(A(), str(A()), [A()])

# 3
d = {"a": 1}
try: d["b"]
except KeyError as e: print(e)

# 4
from dataclasses import dataclass
@dataclass
class Applicant:
    id: str
    name: str
print(Applicant("A-1", "ann"))
```

Expected: `S S R S R [R]` · `R R [R]` · `'b'` · `Applicant(id='A-1', name='ann')`. Snippet 1 is the
entire rule in one line; snippet 3 shows the `KeyError` message carrying `repr` of the key, which is
why the quotes are there.

**Exercise.** Write a `Document` class holding an ID, an applicant ID, a type, and a raw OCR text
field that may contain a Social Security number. Give it a `__repr__` useful for debugging and a
`__str__` for a leasing manager's screen, and make sure neither one can leak the raw text. Then print
the object, a list containing it, and its `str()`.

---

### 3.3 ★ — The `__eq__` and `__hash__` contract  [trap]

Corresponds to defect **D3** from interview drill 1, which the user missed.

**Model.** By default an object's equality is identity and its hash derives from its identity, so two
separately constructed objects are unequal and both can live in a set. The moment you define
`__eq__`, Python sets `__hash__` to `None` on that class, because the default identity hash would now
contradict your equality. An object with `__hash__` set to `None` is unhashable, so it cannot go in a
set or be a dict key. The contract you must uphold if you define both: equal objects must have equal
hashes, and anything you hash on must never change while the object is in a set or dict.

**Ruby contrast.** Ruby has the same contract — `eql?` and `hash` must agree for `Hash` keys — but
Ruby does *not* disable `hash` when you define `==`. A Ruby object with a custom `==` still works as a
hash key, using the inherited identity hash, which is a subtle bug rather than a loud one. Python
chose to fail loudly instead. The reader's instinct that "defining equality is harmless" is correct in
Ruby and wrong here.

**The trap.** `TypeError: unhashable type` at the first `set()` or dict-key use, which in a
verification pipeline means every call crashes. The second-order defect, which is the senior catch:
even after adding `__hash__`, deduplicating on a partial key merges genuinely different records that
happen to share those fields.

**Wild.** `@dataclass` implements the whole rule for you: with the default `eq=True, frozen=False` it
generates `__eq__` and sets `__hash__` to `None`; with `frozen=True` it generates both, because a
frozen instance cannot change out from under a set. `collections.namedtuple` and `frozenset` are
hashable for the same reason.

**Predict snippets.**

```python
# 1
class R:
    def __init__(self, i): self.i = i
    def __eq__(self, o): return self.i == o.i
print(R(1) == R(1))

# 2
class R:
    def __init__(self, i): self.i = i
    def __eq__(self, o): return self.i == o.i
print({R(1)})

# 3
class R:
    def __init__(self, i): self.i = i
print(R(1) == R(1), len({R(1), R(1)}))

# 4
from dataclasses import dataclass
@dataclass
class R: i: int
print(R(1) == R(1))
print({R(1)})
```

Expected: `True` · `TypeError: unhashable type: 'R'` · `False 2` · `True` then `TypeError:
unhashable type: 'R'`. Snippet 4 is the one that matters most, because a dataclass feels like it
should have handled this and, by design, has not.

**Exercise.** Take this result object, make it usable in a `set()`, and then answer in a comment
whether deduplicating a household's documents on `(applicant_id, annual_income)` is correct:

```python
class VerificationResult:
    def __init__(self, applicant_id, document_id, annual_income):
        self.applicant_id = applicant_id
        self.document_id = document_id
        self.annual_income = annual_income

    def __eq__(self, other):
        return (self.applicant_id == other.applicant_id
                and self.annual_income == other.annual_income)
```

Watch for: `__hash__` built from exactly the fields `__eq__` compares; an `isinstance` guard returning
`NotImplemented`; and, in the comment, the recognition that a pay stub and a self-employment filing
reporting the same amount are different documents and must not merge.

---

### 3.4 — Ordering and sorting with `key`  [syntax]

**Model.** `sorted(iterable, key=f)` calls `f` once per element and sorts by the results, which is
both faster and clearer than a comparator. Returning a tuple from `key` sorts by several fields at
once, in order. `list.sort()` sorts in place and returns `None`; `sorted()` returns a new list.
Defining `__lt__` makes your objects sortable directly, and `functools.total_ordering` fills in the
remaining comparison operators from `__eq__` and `__lt__`.

**Ruby contrast.** Ruby's `sort_by` is the direct equivalent of `key=` and Ruby's `<=>` combined with
`Comparable` is the direct equivalent of `__lt__` plus `total_ordering`, so the mapping is clean. The
one thing to flag is that Python has no spaceship operator; you write the individual comparison dunders
or let `total_ordering` derive them.

**The forms.** `key=lambda d: d["amount"]`; a tuple key for multi-field sort; `reverse=True`; negating
a numeric field to sort one column descending while another ascends; `operator.itemgetter` and
`attrgetter`; `total_ordering` on a domain class.

**Mistakes.** Writing `x = mylist.sort()` and getting `None`. Sorting a list of dictionaries without a
key and getting `TypeError`. Trying to mix ascending and descending in one `reverse=True` call, when
the answer is a negated field in the tuple key or two stable passes.

**Predict snippets.**

```python
# 1
docs = [("w2", 300), ("paystub", 100)]
print(sorted(docs, key=lambda d: d[1]))

# 2
print(sorted(["b", "A", "c"], key=str.lower))

# 3
from functools import total_ordering
@total_ordering
class Band:
    def __init__(self, p): self.p = p
    def __eq__(self, o): return self.p == o.p
    def __lt__(self, o): return self.p < o.p
print(Band(1) <= Band(2), Band(3) > Band(2))

# 4
print(sorted([3, 1, 2], reverse=True), [3, 1, 2].sort())
```

Expected: `[('paystub', 100), ('w2', 300)]` · `['A', 'b', 'c']` · `True True` · `[3, 2, 1] None`.

**Exercise.** Given a list of applicant dictionaries with `preference_category` (a string),
`log_number` (an integer), and `submitted_on` (a `date`), produce the lottery ordering: preference
category ascending, then log number ascending. Then produce a second ordering by submission date
descending with log number ascending as the tiebreak. The second one is the interesting half.

---

### 3.5 — `__getattr__`, `__getattribute__`, and `__setattr__`  [trap]

**Model.** `__getattribute__` runs on *every* attribute access and is almost never overridden.
`__getattr__` runs only when normal lookup has already failed, which makes it the safe hook for
defaults, lazy loading, and proxying. `__setattr__` runs on every assignment, including the ones
inside `__init__`, which is why a naive implementation causes infinite recursion.

**Ruby contrast.** `__getattr__` is Python's `method_missing`, but the two differ in culture as much
as mechanism. `method_missing` is a common Ruby idiom, used by ActiveRecord and countless DSLs. In
Python it is rare, because attribute access that cannot be seen in the source defeats autocomplete,
type checkers, and the reader. The right instinct here is to reach for it far less often than Ruby
taught you to.

**The trap.** `__getattr__` returning something for *every* name, including dunder lookups and typos,
so `hasattr` is always true and a misspelled attribute silently returns a default instead of raising.
The second trap is recursion inside `__setattr__`.

**Wild.** `unittest.mock.Mock` uses `__getattr__` to answer any attribute, which is exactly why a mock
never catches a typo in the attribute you asserted on. SQLAlchemy's deferred column loading and
`types.SimpleNamespace` are the well-behaved uses.

**Predict snippets.**

```python
# 1
class A:
    x = 1
    def __getattr__(self, name): return f"missing:{name}"
a = A()
print(a.x, a.y)

# 2
class A:
    def __init__(self): self.x = 1
    def __getattr__(self, n): return "M"
a = A()
print(a.x, a.z, hasattr(a, "anything_at_all"))

# 3
class A:
    def __setattr__(self, n, v): raise AttributeError("read only")
A().x = 1

# 4
class A:
    def __getattr__(self, n): return "M"
print(A().__dict__)
```

Expected: `1 missing:y` · `1 M True` · `AttributeError: read only` · `{}`. Snippet 2's `hasattr`
returning `True` for a name nobody defined is the trap in one call.

**Exercise.** Write a `LazyDocument` class that holds an applicant ID and loads the rest of its
fields from a supplied `fetch(applicant_id)` function on first access, caching the result, without
overriding `__getattribute__` and without infinite recursion in `__setattr__`. Then prove `fetch` runs
exactly once across three attribute reads, and that a genuinely misspelled attribute still raises
`AttributeError`.

---

### 3.6 — The container protocol  [syntax]

**Model.** Four dunders make an object behave like a collection. `__len__` powers `len()` and, when
`__bool__` is absent, truthiness. `__getitem__` powers subscripting, and on its own is enough to make
`for` and `in` work through a legacy fallback. `__contains__` powers `in` directly and more
efficiently. `__iter__` is the modern iteration hook, covered fully in unit 4.1. Inheriting from
`collections.abc.Sequence` or `Mapping` gives you a large set of mixin methods free, in exchange for
implementing two or three.

**Ruby contrast.** Ruby's answer is `include Enumerable` plus a definition of `each`, and
`collections.abc.Sequence` is the direct structural equivalent — implement the required methods, get
the rest. The divergence is which method is required: Ruby wants `each`, Python wants `__getitem__`
and `__len__` for a sequence or `__iter__` for a general iterable. Python's operators also route
through dunders rather than through same-named methods, so `len(q)` is not `q.len()`.

**The forms.** `__len__` alone; `__getitem__` alone and the iteration it enables; `__contains__` for
efficient membership; subclassing `Sequence` to get `index`, `count`, `__reversed__`, and `__iter__`.

**Mistakes.** Defining `__len__` on an object that is legitimately empty sometimes, and thereby making
it falsy — worth pairing with unit 1.6. Implementing `__getitem__` without handling a `slice` object.
Writing `q.length` or `q.size` from Ruby memory.

**Predict snippets.**

```python
# 1
class Q:
    def __init__(self, items): self.items = items
    def __len__(self): return len(self.items)
print(len(Q([1, 2])), bool(Q([1, 2])), bool(Q([])))

# 2
class Q:
    def __init__(self, i): self.i = i
    def __getitem__(self, k): return self.i[k]
q = Q(["a", "b"])
print(q[0], list(q), "a" in q)

# 3
from collections.abc import Sequence
class Q(Sequence):
    def __init__(self, i): self.i = i
    def __getitem__(self, k): return self.i[k]
    def __len__(self): return len(self.i)
q = Q(["a", "b"])
print(q.index("b"), list(reversed(q)))

# 4
class Q:
    def __contains__(self, x): return x == "a"
print("a" in Q(), "b" in Q())
```

Expected: `2 True False` · `a ['a', 'b'] True` · `1 ['b', 'a']` · `True False`. Snippet 1's third
value is the truthiness consequence and snippet 2 shows `__getitem__` alone driving both `for` and
`in`.

**Exercise.** Write a `WorkQueue` class wrapping a list of application IDs that supports `len()`,
indexing, `in`, and iteration, and that is falsy when empty. Implement it twice — once with the
individual dunders and once by subclassing `collections.abc.Sequence` — and say in a comment which
version you would put in a code review and why.

---

### 3.7 — Context managers  [trap]

**Model.** `with expr as name:` calls `expr.__enter__()`, binds its return value to `name`, runs the
body, and then calls `__exit__(exc_type, exc_value, traceback)` — on the way out, whether the body
finished or raised. If `__exit__` returns a truthy value, Python treats the exception as handled and
swallows it. `contextlib.contextmanager` turns a generator into a context manager, where everything
before the `yield` is setup and everything after is teardown; but code after a bare `yield` is skipped
entirely when the body raises, so the teardown must sit in a `finally`.

**Ruby contrast.** This is Ruby's block-with-ensure pattern — `File.open("x") { |f| … }` — promoted
into language syntax. The reader already has the instinct for scoped resource management; what they
lack is the Python spelling and the two failure modes below, neither of which Ruby's `ensure` has an
equivalent for.

**The trap.** Two of them. A `@contextmanager` generator whose cleanup follows a bare `yield` leaks
the resource on any exception, and in this domain that resource is often a temp file holding an
income document. An `__exit__` that returns `True` — easy to write by accident when the last line of
the method is a truthy expression — silently swallows every exception raised in the body.

**Wild.** `open()` as the canonical case; `pytest.raises` as a context manager that deliberately
returns truthy from `__exit__` because suppressing the exception *is* its job; `contextlib.suppress`
as the same idea named honestly; `contextlib.ExitStack` for a number of resources known only at
runtime.

**Predict snippets.**

```python
# 1
from contextlib import contextmanager
@contextmanager
def scope():
    print("open"); yield "res"; print("close")
with scope() as r: print(r)

# 2
from contextlib import contextmanager
@contextmanager
def scope():
    print("open"); yield; print("close")
try:
    with scope(): raise ValueError("x")
except ValueError: print("caught")

# 3
class CM:
    def __enter__(self): return self
    def __exit__(self, *a): return True
with CM(): raise ValueError("boom")
print("still here")

# 4
from contextlib import contextmanager
@contextmanager
def scope():
    try: yield
    finally: print("close")
try:
    with scope(): raise ValueError("x")
except ValueError: print("caught")
```

Expected: `open` / `res` / `close` · `open` / `caught` with **no** `close` · `still here` ·
`close` / `caught`. Snippets 2 and 4 side by side are the unit; snippet 3 is the swallowed exception.

**Exercise.** Write a `@contextmanager` called `downloaded_document(url)` that writes a temp file,
yields its path, and deletes it afterward — including when the body raises, since the file holds an
income document. Then write two `with` blocks proving it: one that succeeds and one that raises, both
asserting the file is gone afterward. Watch for: `try`/`finally` around the `yield`, and for
`tempfile` plus `os.unlink` rather than a hand-rolled path.
