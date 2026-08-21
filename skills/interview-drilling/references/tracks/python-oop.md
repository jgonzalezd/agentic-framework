# Track: Python Language & OOP

## Contents

- Refresher units (11 concepts)
- Artifact seeds (8 scenarios)
- Follow-up question bank
- Blind-spot markers

---

## Refresher units

One per concept. Expand into the teaching shape in `references/refresher-format.md`.

### 1. Composition vs inheritance

**Model.** Inheritance couples you to the parent's *implementation* — every internal `self.method()`
call becomes an extension point you did not choose to expose. Composition couples you only to a
declared interface.
**Rule.** Inherit for genuine substitutable is-a where you own both sides, or where a framework
mandates a base class. Otherwise compose and delegate.
**Tell.** Senior answers can name when inheritance *was* right, not just recite the maxim.
**Wild.** stdlib `logging`: `Logger` *holds* `Handler`s, `Handler` *holds* a `Formatter` (composition); `StreamHandler`/`FileHandler` subclass `Handler` overriding only the designed `emit()` (inheritance done right).

### 2. ABCs vs Protocols — nominal vs structural typing

**Model.** `ABC` is nominal: you must inherit to qualify, and instantiation fails loudly on a missing
method. `Protocol` is structural: anything with the right shape qualifies, checked statically, with
zero runtime coupling. `@runtime_checkable` only checks method *names*, never signatures.
**Rule.** `Protocol` for interfaces you consume (especially across a boundary you do not own).
`ABC` when you have shared implementation to hand down or need enforcement at construction.
**Tell.** Knowing `runtime_checkable` does not validate signatures — a common false-confidence source.
**Wild.** `collections.abc` (`Mapping`, `Sequence`) for ABCs with mixin methods; `typing.SupportsIndex` and pytest's duck-typed fixtures for the Protocol side.

### 3. dataclasses vs Pydantic vs plain classes vs NamedTuple

**Model.** `dataclass` generates boilerplate; it does **not** validate — type hints are inert at
runtime. Pydantic validates and coerces at construction, at real CPU cost. `NamedTuple` is immutable
and tuple-compatible. `frozen=True` dataclasses are hashable and safe to share.
**Rule.** Pydantic at trust boundaries (HTTP, files, LLM output). Dataclasses for internal
already-validated structures. Never Pydantic in a hot inner loop.
**Tell.** Knowing `dataclass` type hints do nothing at runtime; that `frozen=True` is shallow.
**Wild.** FastAPI itself: Pydantic models at every request boundary, plain classes internally; stdlib `inspect` returns NamedTuples (`inspect.signature` internals).

### 4. Mutable defaults and shared state

**Model.** Default arguments are evaluated **once** at function definition. `def f(x=[])` shares one
list across all calls forever. Same trap: mutable class attributes shared across instances, and
`dataclass` catching this at definition time via `field(default_factory=...)` — but only for the
dataclass case.
**Rule.** `None` sentinel plus in-body construction, or `field(default_factory=list)`.
**Tell.** Naming the *class attribute* version too, which nothing catches for you.
**Wild.** `dataclasses.field(default_factory=list)` exists *because* of this trap; Django's `JSONField(default=dict)` docs warn to pass the callable, not `{}`.

### 5. Dunder methods

**Model.** `__eq__` without `__hash__` makes instances unhashable (Python sets `__hash__ = None`).
`__repr__` is for developers and shows up in every log line and traceback. Context-manager
(`__enter__`/`__exit__`) and iterator (`__iter__`/`__next__`) protocols are what `with` and `for`
actually call.
**Rule.** Define `__repr__` on every domain object. Define `__hash__` whenever you define `__eq__` on
something that goes in a set or dict key.
**Tell.** Knowing `__exit__` returning truthy *swallows* the exception — a silent-failure vector.
**Wild.** `pathlib.Path.__truediv__` making `base / "reports" / name` work; `requests.Response.__bool__` (truthiness = status < 400) as a designed but surprising dunder.

### 6. Decorators and `functools.wraps`

**Model.** A decorator is a function returning a replacement function. Without `functools.wraps`,
`__name__`, `__doc__`, type hints, and `__wrapped__` are lost — which breaks FastAPI's signature
introspection, pytest collection, and every traceback. Decorators with arguments need three levels.
**Rule.** Always `@wraps`. Decorator state lives in the closure, and it is shared across all calls.
**Tell.** Connecting missing `@wraps` to a *concrete* downstream breakage rather than "it's tidier."
**Wild.** Flask's `@app.route` and pytest's `@pytest.fixture` — both are registration decorators that depend on preserved metadata; `functools.lru_cache` as a stateful closure decorator.

### 7. Generators and lazy evaluation

**Model.** Generators produce on demand, hold one item in memory, and are **single-pass** — a second
iteration silently yields nothing. `yield` inside a `try/finally` runs cleanup on close/GC, which is
non-deterministic. Generator expressions passed to `len()` or iterated twice are a classic bug.
**Rule.** Generators for large or streaming data. Materialize to a list the moment something needs to
iterate twice, index, or take a length.
**Tell.** Spotting the second-iteration-yields-empty bug, which produces wrong results, not errors.
**Wild.** `csv.reader` and SQLAlchemy's `yield_per` stream rows lazily; `itertools` is a whole library of single-pass composition.

### 8. Context managers

**Model.** `with` guarantees `__exit__` even on exception. `contextlib.contextmanager` turns a
generator into one — but code after `yield` only runs if you wrap it in `try/finally`, otherwise an
exception skips cleanup entirely. `ExitStack` composes a dynamic number of them.
**Rule.** Any acquire/release pair — DB sessions, file handles, locks, temp files — is a context
manager. In `@contextmanager`, the `yield` goes inside `try` and cleanup inside `finally`, always.
**Tell.** Knowing the naked-`yield` cleanup-skip failure mode.
**Wild.** `open()`, `pytest.raises`, `sqlite3.Connection` as transaction scope; `contextlib.ExitStack` in `unittest.mock.patch.multiple`'s implementation.

### 9. async/await and what actually blocks

**Model.** One event loop, one thread. `await` yields control; a synchronous call does not. Any
blocking call in a coroutine — `requests.get`, `time.sleep`, a sync DB driver, `open().read()`, a
CPU-bound loop — stalls **every** concurrent request, not just this one. `asyncio.gather` runs
concurrently; sequential `await`s in a loop do not.
**Rule.** In async code: async libraries only. Blocking work goes through
`asyncio.to_thread` / `run_in_executor`; CPU-bound work goes to a process pool or a queue.
**Tell.** Naming the *tail-latency* consequence — p99 collapse under load — not just "it's slower."
**Wild.** `httpx` (async twin of `requests`) exists because `requests` blocks the loop; `asyncio.to_thread` added in 3.9 precisely to wrap legacy blocking calls.

### 10. MRO and cooperative `super()`

**Model.** C3 linearization determines attribute lookup. `super()` follows the MRO of the *instance's*
type, not the lexical parent — so in multiple inheritance, `super()` in a mixin may land somewhere the
mixin author never saw. Cooperative multiple inheritance requires every class in the chain to call
`super()` with compatible signatures.
**Rule.** Keep hierarchies shallow. If you need diamond inheritance to work, you probably wanted
composition.
**Tell.** Knowing `super()` is MRO-relative, not parent-relative.
**Wild.** Django class-based views (`LoginRequiredMixin`, `View`) are the canonical cooperative-`super()` mixin chain — and the canonical place it surprises people.

### 11. Typing and pytest

**Model.** Type hints are erased at runtime unless something reads them (Pydantic, FastAPI,
`typing.get_type_hints`). `Optional[X]` means the value can be `None`, not that the argument is
optional. `TypeVar` propagates a caller's type through; `Any` disables checking silently.
For pytest: fixtures are dependency injection; scope controls reuse; over-mocking tests the mock.
**Rule.** Type public boundaries. Mock at process edges (network, clock, LLM API), not at your own
seams — if you mocked your own function, you tested nothing.
**Tell.** Being able to say what a given test would *fail to catch*.
**Wild.** FastAPI reads type hints at runtime to build validation and docs — the clearest case of hints having real behavior; pytest's `monkeypatch`/`freezegun` for process-edge mocking.

---

## Artifact seeds

Scenario + defect classes to seed + decoys that pair well. Generate fresh code from these; do not
reuse verbatim across drills.

### Seed A — Document verifier hierarchy
Four verifiers (pay stub, W-2, benefits letter, self-employment ledger) built as a deep inheritance
chain, with one subclass overriding a method the base calls internally.
**Defects:** implementation coupling via a template method; a subclass that violates the base
contract (LSP); shared mutable class attribute accumulating results across instances; `__eq__`
without `__hash__` on the result object.
**Decoys:** a genuinely correct use of an ABC for a closed variant set; a deliberate `# noqa` on a
narrow, justified case.

### Seed B — Eligibility rule engine
Household income tested against AMI bands, with rules registered by decorator.
**Defects:** decorator missing `@wraps`, breaking a downstream registry that keys on `__name__`;
mutable default `exclusions=[]` accumulating across households; float arithmetic on money;
decorator-closure state shared across concurrent calls.
**Decoys:** a `global` registry dict that is actually fine (module-level, write-once at import).

### Seed C — Application status timeline
Builds an applicant's event timeline from several sources, returned as a generator.
**Defects:** generator consumed twice — second pass silently empty; `len()` on a generator
expression; a `yield` inside `try` without `finally` so a DB cursor leaks; timezone-naive datetime
comparison across a DST boundary.
**Decoys:** a generator that is correctly single-pass and documented as such.

### Seed D — Income document parser with a context manager
`@contextmanager` wrapping a temp-file download and parse.
**Defects:** cleanup after `yield` with no `try/finally`, so an exception leaks the temp file (which
contains PII); `__exit__` returning `True` and swallowing errors; bare `except:` catching
`KeyboardInterrupt`.
**Decoys:** an `ExitStack` that looks over-engineered but correctly handles a variable file count.

### Seed E — Async notification dispatcher
Sends deadline notices to applicants across email/SMS.
**Defects:** `requests.post` inside an `async def`; `time.sleep` for rate limiting; sequential
`await` in a loop where `gather` was intended; an unbounded `gather` over every applicant, opening
thousands of connections.
**Decoys:** a deliberately sequential loop that is correct because the API requires ordering.

### Seed F — Applicant/household models
A mix of dataclasses and Pydantic models across a service boundary.
**Decoys and defects:** a `dataclass` with type hints trusted to validate LLM/OCR output; `frozen=True`
assumed deep when it holds a mutable list; Pydantic model constructed per row in a 50k-row loop;
`Optional[str]` fields never checked for `None`.
**Decoys:** a plain dataclass used correctly for already-validated internal data.

### Seed G — Notification mixins
Multiple inheritance across `Auditable`, `Notifiable`, `Timestamped` mixins.
**Defects:** a mixin whose `super().save()` lands somewhere unexpected via MRO; incompatible
`__init__` signatures breaking cooperative init; a mixin depending on an attribute only some hosts
define.
**Decoys:** a shallow, correct two-mixin case.

### Seed H — Test suite for eligibility
pytest tests for the rule engine.
**Defects:** module-scoped mutable fixture leaking state between tests; the unit under test mocked
out entirely; `datetime.now()` unfrozen making a deadline test fail one day a year; a test asserting
on a dict whose ordering is incidental.
**Decoys:** a correctly frozen clock; a `monkeypatch` at a genuine process edge.

---

## Follow-up question bank

Ask 3–5 in beat 5, chosen to fit the artifact.

**On the design**
- Why composition here rather than a base class? When *would* you inherit?
- What does this class own that nothing else should touch?
- If a fifth document type arrives next sprint, what changes?

**On the mechanism**
- Walk me through what Python actually does at definition time versus call time here.
- This is `async def` — what in it can block the loop, and what happens to the other 200 requests?
- What breaks if two requests hit this at the same instant?

**On testing**
- How would you test this without a real database or a real LLM call?
- What would this test suite fail to catch?
- Which of these mocks is testing something real?

**On the trade-off**
- What do you think the author was optimizing for? Does that hold at 50k applicants?
- What would you accept in a PR under deadline, and what would you block?

---

## Blind-spot markers

Tells that separate shipped-this from read-about-this:

- Names *consequences* under concurrency and load, not just rule violations
- Knows `dataclass` hints do not validate and `frozen=True` is shallow
- Connects missing `@wraps` to a specific downstream breakage
- Spots single-pass generator reuse — which returns wrong results silently rather than raising
- Knows `__exit__` returning truthy swallows exceptions
- Distinguishes "blocks the loop" from "is slow"
- Can articulate what a test does *not* cover
- In this domain: notices when a leaked temp file or a logged payload contains PII
