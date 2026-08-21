# M5 — Classes and interfaces

Six units. Everything about declaring types, sharing behavior, and describing the shape a caller must
satisfy.

---

### 5.1 — `@property` instead of getters  [syntax]

**Model.** Start with a plain public attribute. If it later needs validation, computation, or
logging, convert it to a `@property` and every existing caller keeps working unchanged, because
`a.income` is the same expression whether it reads an attribute or calls a property. A property with
only a getter is read-only, and assigning to it raises. Adding `@name.setter` makes it writable and
gives you a place to validate.

**Ruby contrast.** `attr_accessor :income` and a `@property` look like the same tool and are used at
opposite ends of the process. Ruby's convention is to declare the accessor up front, because Ruby
instance variables are private and there is no other way to expose them. Python attributes are public
by default, so declaring a getter and setter that only read and write a private field adds noise and
buys nothing. The Python instinct is to write `self.income = income` and reach for `@property` only
when behavior is actually needed.

**The forms.** A read-only computed property; a property with a validating setter; a private backing
attribute named with a single leading underscore; `@cached_property` from `functools` for an
expensive computation.

**Mistakes.** Writing `get_income()` and `set_income()`, which is the Java instinct. Naming the
property and its backing field the same thing, which recurses forever. Assigning `self.x = …` in
`__init__` when `x` is a read-only property, which raises at construction.

**Predict snippets.**

```python
# 1
class A:
    def __init__(self): self._x = 1
    @property
    def x(self): return self._x
a = A()
a.x = 5

# 2
class A:
    def __init__(self, v): self._v = v
    @property
    def v(self): return self._v
    @v.setter
    def v(self, val):
        if val < 0: raise ValueError("negative")
        self._v = val
a = A(1); a.v = 2; print(a.v)
a.v = -1

# 3
class A:
    @property
    def x(self): return 1
print(A().x, type(A.x).__name__)

# 4
class A:
    def __init__(self): self.x = 1
    @property
    def x(self): return 5
A()
```

Expected: `AttributeError: property 'x' of 'A' object has no setter` · `2` then
`ValueError: negative` · `1 property` · `AttributeError: property 'x' of 'A' object has no setter`.
Snippet 3 shows that a property accessed on the *class* is the descriptor object itself, which is the
mechanism behind all of this.

**Exercise.** Write an `IncomeRecord` class holding a monthly amount, exposing a read-only
`annual` property, and validating on assignment that the monthly amount is never negative. Then show
a caller that was written against a plain attribute and demonstrate it still works unchanged.

---

### 5.2 — `@classmethod` and `@staticmethod`  [syntax]

**Model.** A `@classmethod` receives the class as its first argument, conventionally named `cls`, and
is how Python spells an alternative constructor. Because it receives the *actual* class it was called
on, `cls(...)` inside a classmethod constructs the subclass when a subclass calls it, which a
hardcoded class name would not. A `@staticmethod` receives nothing special and is simply a function
namespaced inside the class.

**Ruby contrast.** Ruby's `def self.from_upload` is the direct equivalent of a `@classmethod`, and
Ruby's `self.class` inside an instance method plays the same polymorphic role as `cls`. The
divergence is that Python distinguishes `@classmethod` from `@staticmethod`, where Ruby has only the
one form; a Ruby developer reaching for `def self.helper` should ask whether the method needs the
class at all, and use `@staticmethod` when it does not.

**The forms.** `@classmethod` as an alternative constructor returning `cls(...)`; a classmethod
inherited by a subclass and constructing that subclass; `@staticmethod` for a pure helper; a
classmethod-based registry keyed by document type.

**Mistakes.** Hardcoding the class name inside a classmethod, which breaks inheritance.
Using `@staticmethod` where a module-level function would be clearer. Forgetting that both are
accessible from an instance as well as from the class.

**Predict snippets.**

```python
# 1
class Doc:
    def __init__(self, t): self.t = t
    @classmethod
    def from_upload(cls, name): return cls(name.split(".")[0])
print(Doc.from_upload("w2.pdf").t)

# 2
class Base:
    @classmethod
    def make(cls): return cls.__name__
class Child(Base): pass
print(Base.make(), Child.make())

# 3
class A:
    @staticmethod
    def helper(x): return x * 2
print(A.helper(3), A().helper(3))

# 4
class A:
    @classmethod
    def m(cls): return cls
print(A.m() is A, A().m() is A)
```

Expected: `w2` · `Base Child` · `6 6` · `True True`. Snippet 2 is the reason `cls` exists rather than
a hardcoded name.

**Exercise.** Write a `Document` base class with a `from_upload(cls, filename)` classmethod that
returns the right subclass — `PayStub`, `W2`, or `BenefitsLetter` — based on the filename, using a
registry that each subclass adds itself to. Then add a fourth subclass and show that nothing in the
base class had to change.

---

### 5.3 — `super()` and the MRO  [trap]

**Model.** Python resolves attributes by walking the method resolution order, a single linearization
of the class and all its bases computed by the C3 algorithm. `super()` does not mean "my parent"; it
means "the next class after this one in the MRO *of the instance's type*". In single inheritance
those are the same thing. In multiple inheritance they are not, which is what makes cooperative
mixins work and what makes them surprising.

**Ruby contrast.** Ruby's `super` behaves the same way against Ruby's own ancestor chain, and Ruby's
`include` inserts a module into that chain much as a Python base class sits in the MRO. The real
divergence is `__init__`. Ruby's `initialize` is not called automatically by a subclass, and neither
is Python's `__init__` — but Python developers write cooperative `super().__init__(**kwargs)` chains
far more often, and every class in the chain must participate or the chain silently stops.

**The trap.** A subclass `__init__` that never calls `super().__init__()`, leaving the parent's
attributes unset, so the failure appears later as an `AttributeError` on an unrelated line. The second
trap is a mixin whose `super()` call lands in a sibling class its author never saw.

**Wild.** Django's class-based views are the canonical cooperative chain — `LoginRequiredMixin` before
`View` — and also the canonical place the ordering surprises people. `collections.OrderedDict` calling
`super().__setitem__` is a small, readable example.

**Predict snippets.**

```python
# 1
class A:
    def m(self): return "A"
class B(A):
    def m(self): return "B" + super().m()
class C(A):
    def m(self): return "C" + super().m()
class D(B, C): pass
print(D().m())

# 2
class A: pass
class B(A): pass
class C(A): pass
class D(B, C): pass
print([c.__name__ for c in D.__mro__])

# 3
class A:
    def __init__(self): self.a = 1
class B(A):
    def __init__(self): self.b = 2
print(hasattr(B(), "a"))

# 4
class A: pass
class B(A): pass
class C(A): pass
class D(B, C): pass
class E(C, B): pass
class F(D, E): pass
```

Expected: `BCA` · `['D', 'B', 'C', 'A', 'object']` · `False` · `TypeError: Cannot create a consistent
method resolution order (MRO) for bases B, C`. Snippet 1 is the unit: `B.m` calls `super().m()` and
reaches `C`, not `A`, even though `B`'s only declared base is `A`.

**Exercise.** Build `Auditable` and `Timestamped` mixins that each record something in `__init__` and
cooperate correctly with a `Document` base and with each other, so that constructing
`class Upload(Auditable, Timestamped, Document)` sets all three sets of attributes. Then print
`Upload.__mro__` and explain in one comment why the order in the class statement is the order the
`__init__` bodies run.

---

### 5.4 — ABCs versus Protocols  [trap]

**Model.** An abstract base class is *nominal*: a type qualifies by inheriting from it, and
instantiating a subclass that has not implemented every `@abstractmethod` raises `TypeError` at
construction. A `Protocol` is *structural*: a type qualifies by having the right methods, with no
inheritance and no runtime coupling at all, and conformance is checked by a static type checker.
Adding `@runtime_checkable` allows `isinstance` against a Protocol, but that check compares method
*names* only and never signatures.

**Ruby contrast.** Ruby has no ABCs and no Protocols; it has duck typing plus `respond_to?`. A
Protocol is duck typing with a written-down shape that a type checker enforces before the code runs,
which is the part Ruby cannot give you. An ABC is closer to a Java interface with implementation,
which is the reader's other instinct and the one to be careful with — reaching for an ABC purely to
declare an interface is the Java habit, and a Protocol is usually the better answer.

**The trap.** `@runtime_checkable` giving false confidence. `isinstance(obj, MyProtocol)` returns
`True` for an object whose method takes entirely different arguments, so a check that looks like
validation validates almost nothing.

**Wild.** `collections.abc` is the ABC side done right, because those base classes hand down real
mixin methods and are not merely interface declarations. `typing.SupportsIndex` and
`os.PathLike` are Protocol-shaped. FastAPI and pytest lean on structural duck typing throughout.

**Predict snippets.**

```python
# 1
from abc import ABC, abstractmethod
class V(ABC):
    @abstractmethod
    def go(self): ...
V()

# 2
from typing import Protocol
class Verifier(Protocol):
    def go(self) -> str: ...
class Duck:
    def go(self): return "ok"
def run(v: Verifier): return v.go()
print(run(Duck()))

# 3
from typing import Protocol, runtime_checkable
@runtime_checkable
class V(Protocol):
    def go(self, a, b) -> str: ...
class Wrong:
    def go(self): return "x"
print(isinstance(Wrong(), V))

# 4
from abc import ABC, abstractmethod
class V(ABC):
    @abstractmethod
    def go(self): ...
class Impl(V):
    def go(self): return "ok"
print(Impl().go(), isinstance(Impl(), V))
```

Expected: `TypeError: Can't instantiate abstract class V with abstract method go` · `ok` · `True` ·
`ok True`. The first message is version-sensitive — Python 3.12 rewords it to "without an
implementation for abstract method 'go'" — so grade on the exception type and the named method rather
than on the sentence. Snippet 3 is the trap and the reason to distrust `@runtime_checkable` as a
validation mechanism.

**Exercise.** Define the interface a notification channel must satisfy — `send(applicant_id, message)`
returning a delivery ID — twice: once as an ABC and once as a Protocol. Write an email channel that
satisfies both. Then say in a comment which one you would use for a channel implemented in another
team's package, and why.

---

### 5.5 ★ — Composition and the template-method trap  [trap]

Corresponds to defect **D2** from interview drill 1, which the user missed.

A complete worked lesson for this unit already exists in
[lesson-format.md](../lesson-format.md), where it serves as the register exemplar. Deliver that
lesson rather than writing a new one, then use the snippets and exercise below, which are different
from the ones in the exemplar.

**Model.** When a parent method calls another method on `self`, that call is an extension point
whether or not the parent's author intended one, because the lookup starts at the instance's actual
class. A subclass that overrides such a method changes the parent's own logic from underneath it.
Composition removes the exposure by making the existing class a held component rather than a base, so
the two objects interact only through calls the owner chooses to forward.

**Ruby contrast.** A Ruby developer's instinct here is a module and `include`, which feels lighter
than subclassing and carries the identical exposure — an included module's methods run against the
same `self` and are reached by the host's internal calls exactly as a subclass's would be. Ruby's
`private` does not close the hole either, since it restricts the receiver rather than the override.
Java's `final` is the only one of the three languages' tools that actually forbids it.

**The trap.** Two shapes, and the artifact in drill 1 used the second. The first is overriding a hook
the parent calls internally, which hijacks the parent's logic. The second is overriding the *template
method itself* — the public method that runs the policy — so every check the parent performed is
skipped and the subclass returns a clean result for a document that should have been flagged.

**Wild.** `logging` uses both tools deliberately: handlers subclass `Handler` and override the
documented `emit` hook, while formatters are composed and attached at runtime with `setFormatter`.
That division is the whole decision rule made concrete.

**Predict snippets.**

```python
# 1
class Timer:
    def start(self):
        self.reset(); return "started"
    def reset(self): self.t = None
class LapTimer(Timer):
    def reset(self):
        self.laps = []
        super().reset()
lt = LapTimer(); lt.laps = [12.4]; lt.start()
print(lt.laps)

# 2
class Base:
    def verify(self, age): return {"warnings": self.check(age)}
    def check(self, age): return ["stale"] if age > 120 else []
class Sub(Base):
    def verify(self, age): return {"warnings": []}
print(Base().verify(200), Sub().verify(200))

# 3
class Base:
    def __init__(self): self.items = self.build()
    def build(self): return []
class Sub(Base):
    def __init__(self):
        super().__init__()
        self.prefix = "p"
    def build(self): return [self.prefix]
Sub()

# 4
class Timer:
    def __init__(self): self._t = None
    def start(self): self._t = 0; return "started"
class LapTimer:
    def __init__(self):
        self._timer = Timer(); self.laps = []
    def start(self): return self._timer.start()
lt = LapTimer(); lt.laps = [12.4]; lt.start()
print(lt.laps)
```

Expected: `[]` · `{'warnings': ['stale']} {'warnings': []}` ·
`AttributeError: 'Sub' object has no attribute 'prefix'` · `[12.4]`. Snippet 2 is defect D2 in six
lines; snippet 3 shows the ordering hazard that makes template methods fragile even when everyone
means well; snippet 4 is the composed fix producing the right answer.

**Exercise.** Here is the drill-1 defect in miniature. Fix it so the base class's checks cannot be
skipped, without changing the public interface:

```python
class Verifier:
    def verify(self, doc):
        warnings = []
        if doc["age_days"] > 120:
            warnings.append("stale")
        income = self._annualize(doc)
        if income > 500_000:
            warnings.append("above ceiling")
        return {"income": income, "warnings": warnings}

    def _annualize(self, doc):
        raise NotImplementedError

class BenefitsLetterVerifier(Verifier):
    def verify(self, doc):
        return {"income": doc["monthly"] * 12, "warnings": []}

    def _annualize(self, doc):
        raise NotImplementedError("computes its own total")
```

Watch for: the subclass implementing `_annualize` and deleting its `verify` entirely, and for the
recognition that the dead `_annualize` was the tell.

---

### 5.6 — dataclass, Pydantic, NamedTuple  [trap]

**Model.** A `@dataclass` generates `__init__`, `__repr__`, and `__eq__` from annotated class
attributes, and does no validation whatsoever — the annotations are inert at runtime. Pydantic
validates and coerces at construction, at a real CPU cost per instance. `NamedTuple` is immutable,
tuple-compatible, and hashable. `frozen=True` on a dataclass blocks attribute assignment and, as unit
1.5 showed, is shallow.

**Ruby contrast.** `Struct.new(:a, :b)` is the closest Ruby analogue to a dataclass, and it too
validates nothing, so the reader's expectation is correct here. The divergence is the presence of type
annotations, which look like a declaration of intent that the runtime enforces and are not. A Ruby
developer has no habit of reading a type in a class body, so `amount: Decimal` reads more like a
promise than it does to someone used to Python.

**The trap.** A dataclass used at a trust boundary. OCR output, an LLM response, or a JSON request
body assigned into `amount: Decimal` produces a dataclass holding a string, and the failure appears
later during arithmetic, far from the boundary that should have rejected it.

**Wild.** FastAPI uses Pydantic at every request boundary and plain objects internally, which is the
rule in practice: validate at the edges, use cheap structures inside. `inspect.signature` returns
NamedTuples. `dataclasses.field(default_factory=...)` exists because of unit 1.3.

**Predict snippets.**

```python
# 1
from dataclasses import dataclass
@dataclass
class A: x: int
a = A("not an int")
print(a.x, type(a.x).__name__)

# 2
from dataclasses import dataclass, field
@dataclass
class A:
    items: list = field(default_factory=list)
print(A().items is A().items)

# 3
from typing import NamedTuple
class P(NamedTuple):
    a: int
    b: str
p = P(1, "x")
print(p[0], p.a, len(p), p == (1, "x"))

# 4
from dataclasses import dataclass
@dataclass(frozen=True)
class A: x: int
a = A(1)
print(hash(a) == hash(A(1)))
a.x = 2
```

Expected: `not an int str` · `False` · `1 1 2 True` · `True` then
`FrozenInstanceError: cannot assign to field 'x'`. Snippet 1 is the trap in three lines and snippet 4
connects back to unit 3.3, since `frozen=True` is what makes a dataclass hashable.

**Exercise.** You are receiving OCR output as a dictionary with string values and need an internal
`ExtractedIncome` object with a `Decimal` amount and a `date`. Write the boundary: one function that
validates and converts, raising a specific exception on bad input, and one frozen dataclass for the
validated result. Then say in a comment where Pydantic would be worth its cost here and where it would
not.
