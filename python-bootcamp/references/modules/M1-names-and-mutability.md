# M1 — Names, objects, and mutability

Six units, all **trap** units: ten parts, 1,000–1,500 words, per
[lesson-format.md](../lesson-format.md).

This module has the highest defect yield of the seven. Python's assignment and default-argument
semantics differ from Ruby's in ways the syntax does not advertise, and the resulting bugs produce
wrong answers rather than exceptions.

---

### 1.1 — Assignment binds a name; it does not copy  [trap]

**Model.** An assignment binds a name to an object. `b = a` gives you a second name for the one
object, so mutating through either name is visible through both. Rebinding a name (`b = something`)
affects only that name; mutating the object (`b.append(x)`) affects everyone holding a reference.
Function arguments are bound the same way, which is why a function can mutate a caller's list but
cannot make the caller's name point somewhere new.

**Ruby contrast.** Ruby works identically, so the reader's model is already correct — but Ruby's
`dup` and `freeze` habits mean they are used to *thinking about it*, whereas Python code rarely
mentions it and the aliasing goes unnoticed. The genuinely divergent case is `+=`. In Ruby, `b += [3]`
always creates a new array and rebinds. In Python, `+=` on a list calls `__iadd__`, which extends in
place, so the object every alias points at has changed. `b = b + [3]` does the Ruby thing. The two
lines look interchangeable and are not.

**The trap.** `+=` mutates in place for lists and rebinds for tuples, strings, and numbers, so the
same operator is aliasing-safe or aliasing-dangerous depending on the type of the object.

**Wild.** `list.extend` is literally what `+=` calls; showing `id()` before and after both forms makes
the difference visible in one line. `dict.update` is the same story for mappings.

**Predict snippets.**

```python
# 1
a = [1, 2]; b = a; b.append(3); print(a)

# 2
a = [1, 2]; b = a; b = b + [3]; print(a)

# 3
a = [1, 2]; b = a; b += [3]; print(a)

# 4
def add_note(notes):
    notes.append("verified")
    notes = ["reset"]
    return notes
original = ["intake"]
result = add_note(original)
print(original, result)
```

Expected: `[1, 2, 3]` · `[1, 2]` · `[1, 2, 3]` · `['intake', 'verified'] ['reset']`. Snippets 2 and 3
next to each other are the whole unit.

**Exercise.** Write `def split_household(members, moving_out)` that returns two lists — those staying
and those moving out — **without** mutating the `members` list the caller passed in. Then write three
assertions proving the caller's list is unchanged. Watch for: a `for` loop that calls
`members.remove()`, which both mutates the argument and skips elements.

---

### 1.2 — Mutable versus immutable  [trap]

**Model.** Some types can change after creation (`list`, `dict`, `set`, most objects you write) and
some cannot (`int`, `str`, `tuple`, `frozenset`). Immutability is a property of the *type*, not a flag
you set. A tuple's immutability is one level deep: the tuple promises its slots will always refer to
the same objects, and says nothing about whether those objects can change. Only immutable types are
reliably hashable, which is why a list cannot be a dictionary key.

**Ruby contrast.** Ruby has `freeze`, so immutability there is a per-object flag you can add to
anything, and Ruby strings are mutable by default while Python's never are. A Ruby developer's
instinct is that immutability is something you *do* to an object; in Python it is something an object
*is*. There is no `freeze`, and `"abc".upper()` returns a new string rather than changing one.

**The trap.** `t[1] += [4]` on a tuple holding a list both raises `TypeError` **and** performs the
mutation, because `__iadd__` runs and succeeds before the assignment back into the tuple fails.

**Wild.** `dict` keys and `set` members require `__hash__`; `frozenset` exists precisely so a set can
be a key. `str.replace` returning a new string is the everyday face of immutability.

**Predict snippets.**

```python
# 1
t = (1, [2, 3]); t[1].append(4); print(t)

# 2
t = (1, [2, 3])
try: t[1] += [4]
except TypeError: pass
print(t)

# 3
s = "hello"; s2 = s; s += " world"; print(s2)

# 4
d = {}; d[(1, [2])] = "x"
```

Expected: `(1, [2, 3, 4])` · `(1, [2, 3, 4])` · `hello` · `TypeError: unhashable type: 'list'`.
Snippet 2 is the trap; make sure the walk-through explains that the mutation completed first.

**Exercise.** Write a function that takes a list of `(applicant_id, program)` tuples and returns a
dictionary grouping applicant IDs by program. Then explain, in one sentence in a comment, why the
tuple works as a dictionary key but the equivalent two-element list would not.

---

### 1.3 — Default arguments are evaluated once, at `def` time  [trap]

**Model.** A `def` statement is executed, not merely declared. When Python runs it, every default
expression in the signature is evaluated immediately, and the resulting objects are stored on the
function. Every subsequent call reuses those same objects. For an immutable default this is
invisible. For a mutable default it means one list or dict is shared by every call for the lifetime of
the process.

**Ruby contrast.** Ruby evaluates a default expression on every call, so `def f(x = [])` genuinely
gives each call a fresh array and the Ruby habit is safe. This is the divergence that produces the
bug, because the Python code is spelled identically and behaves completely differently.

**The trap.** The accumulating default. It is worse than it first looks in a long-running server
process, where the shared list grows for the life of the worker and carries one request's data into
the next.

**Wild.** `dataclasses.field(default_factory=list)` exists *because* of this trap, and a dataclass
with a bare mutable default raises at class-definition time rather than letting you ship it. Django's
`JSONField(default=dict)` documentation warns to pass the callable, not `{}`, for the same reason.

**Predict snippets.**

```python
# 1
def add(item, bucket=[]):
    bucket.append(item)
    return bucket
print(add("a")); print(add("b"))

# 2
counter = 0
def f(x=counter): return x
counter = 10
print(f())

# 3
def add(item, bucket=None):
    bucket = bucket or []
    bucket.append(item)
    return bucket
existing = []
add("a", existing)
print(existing)

# 4
from dataclasses import dataclass
@dataclass
class Household:
    members: list = []
```

Expected: `['a']` then `['a', 'b']` · `0` · `[]` · `ValueError: mutable default <class 'list'> for
field members is not allowed: use default_factory`. Snippet 3 is subtle and worth the walk-through:
`bucket or []` discards a caller's *empty* list because an empty list is falsy, which previews 1.6.
The correct guard is `if bucket is None`.

**Exercise.** Write `def record_document(applicant_id, doc_id, ledger=None)` that appends `doc_id` to
`ledger` and returns it, correctly giving each call its own ledger when none is passed, while still
honoring an empty list a caller passes deliberately. Then call it three times without a ledger and
assert the results are independent.

---

### 1.4 ★ — Class attributes versus instance attributes  [trap]

Corresponds to defect **D1** from interview drill 1, which the user missed.

**Model.** An assignment inside a class body creates an attribute on the *class object*, shared by
every instance and every subclass. Attribute lookup on an instance checks the instance's own
namespace first and then walks the class and its bases, so reading `self.seen` finds the class
attribute when no instance attribute exists. Instance state is created by assigning to `self.x`,
conventionally inside `__init__`. The two look nearly identical in source and behave completely
differently.

**Ruby contrast.** Ruby spells the distinction in the sigil: `@name` is per-instance and `@@name` is
per-class, so the dangerous one announces itself every time you read it. Python's class-body
assignment is spelled exactly like a field declaration, and the modern annotated form —
`seen: list[str] = []` — reads even more like a type declaration than it does like shared state. The
annotation is inert; the assignment is not.

**The trap.** A mutable class attribute mutated through `self`. Cross-instance and cross-subclass
bleed, plus unbounded growth in a long-lived server process. Compounding the confusion: assigning
`self.seen = []` *creates an instance attribute that shadows the class one*, so some code paths
appear to work correctly and the bug looks intermittent.

**Wild.** Django model `Meta` options and DRF serializer `fields` are class attributes used correctly,
because they are immutable configuration read at class-definition time. `logging.Logger.manager` is a
deliberately shared class-level registry. The rule is not "never use class attributes"; it is "never
use a *mutable* one as instance state."

**Predict snippets.**

```python
# 1
class Verifier: seen = []
v1, v2 = Verifier(), Verifier()
v1.seen.append("doc-1")
print(v2.seen)

# 2
class Verifier: seen = []
v1, v2 = Verifier(), Verifier()
v1.seen = ["doc-1"]
print(v2.seen)

# 3
class Verifier: count = 0
v1, v2 = Verifier(), Verifier()
v1.count += 1
print(v1.count, v2.count, Verifier.count)

# 4
class Base: registry = []
class PayStub(Base): pass
class W2(Base): pass
PayStub.registry.append("ps")
print(W2.registry)
```

Expected: `['doc-1']` · `[]` · `1 0 0` · `['ps']`. Snippets 1 and 2 side by side are the shadowing
lesson; snippet 3 shows why immutable class attributes feel safe (`+=` on an int rebinds and therefore
creates an instance attribute); snippet 4 is defect D1 in four lines.

**Exercise.** Here is a broken class; the user rewrites it so each instance has its own `stale`
list, without changing the public interface:

```python
class DocumentChecker:
    stale: list[str] = []

    def check(self, doc_id, age_days):
        if age_days > 120:
            self.stale.append(doc_id)
        return len(self.stale) == 0
```

Then write a test that fails against the original and passes against the fix. Watch for: adding
`__init__` with `self.stale = []`, and a test that constructs *two* checkers, since a single-instance
test passes either way.

---

### 1.5 — `copy`, `deepcopy`, and shallow freezing  [trap]

**Model.** `copy.copy(x)` builds a new outer container whose slots refer to the very same inner
objects. `copy.deepcopy(x)` recursively copies all the way down. Slicing (`rows[:]`), `list(rows)`,
and `dict(d)` are all shallow copies. Because `frozen=True` on a dataclass only blocks attribute
assignment, a frozen dataclass holding a list is frozen at exactly one level, for the same reason a
tuple is.

**Ruby contrast.** Ruby's `dup` and `clone` are also shallow, so the concept transfers. What does not
transfer is the expectation set by `freeze`: a Ruby developer who reaches for `frozen=True` on a
dataclass is usually expecting something closer to `freeze` applied recursively, and gets a promise
about attribute rebinding only.

**The trap.** A "defensive copy" that copies nothing that mattered, so the caller's nested data is
still shared and still mutable.

**Wild.** `dict.copy()` documented as shallow; `copy.deepcopy` used in test fixtures to stop one test
mutating another's data; `dataclasses.replace` as the idiomatic way to derive a changed copy of a
frozen instance.

**Predict snippets.**

```python
# 1
import copy
rows = [["a"], ["b"]]
shallow = copy.copy(rows); shallow[0].append("x")
print(rows)

# 2
import copy
rows = [["a"], ["b"]]
deep = copy.deepcopy(rows); deep[0].append("x")
print(rows)

# 3
from dataclasses import dataclass
@dataclass(frozen=True)
class Household: members: list
h = Household(["ann"]); h.members.append("bo")
print(h.members)

# 4
rows = [["a"], ["b"]]
c = rows[:]; c.append(["c"])
print(len(rows), len(c))
```

Expected: `[['a', 'x'], ['b']]` · `[['a'], ['b']]` · `['ann', 'bo']` · `2 3`. Snippet 3 is the one
worth dwelling on, since `frozen=True` reads like a guarantee it does not make.

**Exercise.** Write `def with_added_member(household, name)` that takes a frozen dataclass
`Household(applicant_id: str, members: tuple[str, ...])` and returns a *new* household with the member
added, leaving the original untouched. Then explain in one comment why declaring `members` as a tuple
rather than a list makes `frozen=True` mean what a reader expects.

---

### 1.6 — Truthiness and `None`  [trap]

**Model.** `if x:` calls `bool(x)`, which calls `x.__bool__()` if defined and otherwise
`len(x) != 0`. Consequently `0`, `0.0`, `""`, `[]`, `{}`, `set()`, and `None` are all falsy. `None` is
a singleton, so the correct test for it is `is None` rather than `== None`. Because `or` returns its
first truthy operand, `x or default` substitutes the default for *any* falsy value, not only for
absence.

**Ruby contrast.** This is the divergence. In Ruby only `false` and `nil` are falsy; `[]`, `{}`, `0`,
and `""` are all truthy. Ruby's `x || default` therefore means "if x is absent", and it means exactly
that, reliably. The identical-looking Python `x or default` means "if x is absent **or** empty **or**
zero", which is why the Ruby idiom silently corrupts amounts of zero and lists of length zero.

**The trap.** `income or "not provided"` displaying "not provided" for a verified income of `$0`,
which in a benefits system is a real and meaningful value.

**Wild.** `argparse` and Pydantic both use a dedicated sentinel rather than `None` for "not supplied",
precisely because `None` is a legitimate value in many APIs; `dict.get(key, default)` versus
`dict.get(key) or default` is the same distinction one level down.

**Predict snippets.**

```python
# 1
def notify(applicants=None):
    if not applicants: return "no applicants"
    return f"{len(applicants)} applicants"
print(notify([]))

# 2
income = 0
print(income or "not provided")

# 3
print(bool([]), bool([0]), bool(""), bool("0"))

# 4
x = None
print(x is None, [] == False, bool([]) == False)
```

Expected: `no applicants` · `not provided` · `False True False True` · `True False True`. Snippet 2
is the money case; snippet 4's middle value surprises almost everyone, since `[] == False` compares a
list to a boolean and is simply `False`, while `bool([]) == False` converts first.

**Exercise.** Write `def format_income(verified_amount, fallback="Not yet verified")` that returns a
dollar string when an amount has been verified — including a verified amount of `$0` — and the
fallback only when nothing has been verified at all. The user must decide how the function
distinguishes those two cases. Watch for: `verified_amount or fallback`, which is the bug, and for a
correct `if verified_amount is None`.
