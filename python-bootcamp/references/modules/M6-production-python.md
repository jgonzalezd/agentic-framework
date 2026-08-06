# M6 — Production Python

Six units. What separates code that runs from code you can deploy, debug, and hand to someone else.
This module is also the one most directly aimed at the FastAPI and AI-feature interview rounds.

Unit 6.5 assumes unit 4.2, because `async`/`await` is built on the same suspension machinery as
generators.

---

### 6.1 — Exceptions  [trap]

**Model.** Exceptions form a hierarchy under `BaseException`, with `Exception` as the base for
everything an application should normally catch and `KeyboardInterrupt` and `SystemExit` deliberately
outside it. A `try` statement has four blocks: `try`, `except`, `else` for the code that should run
only when nothing raised, and `finally` for cleanup that runs either way. Raising inside an `except`
block automatically chains the original as `__context__`, and `raise New() from original` sets
`__cause__` and prints "The above exception was the direct cause".

**Ruby contrast.** The shapes correspond — `rescue` to `except`, `ensure` to `finally`, `else` to
`else` — so the syntax translation is easy. Two things do not translate. A bare `rescue` in Ruby
catches `StandardError` and therefore *excludes* the signals you would not want to swallow, whereas a
bare `except:` in Python catches `BaseException` and will happily swallow `KeyboardInterrupt`, which
is why it is always wrong. And Ruby's `raise ArgumentError, "msg"` takes a class and a message, while
Python's `raise` takes an instantiated exception, `raise ValueError("msg")`.

**The trap.** `except Exception` around a block that was only supposed to catch one failure. It
swallows programming errors — a typo, an `AttributeError`, a `KeyError` from a renamed field — and
turns them into the fallback path, so a bug ships as a silently degraded feature.

**Wild.** `requests` defines a root `RequestException` that everything else inherits from, which is
the pattern to copy: one application root exception so callers can catch your errors and only yours.
`contextlib.suppress` is the honest way to say "ignore this specific one".

**Predict snippets.**

```python
# 1
try:
    raise ValueError("inner")
except ValueError:
    try:
        raise KeyError("outer")
    except KeyError as e:
        print(type(e.__context__).__name__)

# 2
try: print("t")
except Exception: print("e")
else: print("el")
finally: print("f")

# 3
def f():
    try: return "try"
    finally: print("finally")
print(f())

# 4
class AppError(Exception): pass
class NotFound(AppError): pass
try: raise NotFound("x")
except AppError as e: print(type(e).__name__, isinstance(e, Exception))
```

Expected: `ValueError` · `t` then `el` then `f` · `finally` then `try` · `NotFound True`. Snippet 3
surprises people: the `finally` block runs *before* the value is returned to the caller, and printing
the return value happens afterward.

**Exercise.** Design the exception surface for a document verification module: one root exception,
three specific ones beneath it, and a `verify(doc)` function that raises the right one for a missing
field, an unreadable scan, and an income above the program ceiling. Then write the caller that renders
a different message for each and lets anything unexpected propagate. Watch for: a bare `except`, and
for `raise … from e` when re-raising after catching a parsing error.

---

### 6.2 — Modules, packages, and import time  [trap]

**Model.** A module is a file, and importing it executes the file top to bottom, once. The resulting
module object is cached in `sys.modules`, so every later import of the same name binds the cached
object without re-running anything. `import x` binds the name `x`; `from x import y` evaluates `x`
fully and then copies a reference to `y` into the current namespace, which means later rebinding `x.y`
does not change what you already imported. Anything at module level — a database connection, a client
object, an expensive computation — is a program that runs at import time.

**Ruby contrast.** `require` also executes a file once, so the caching model transfers. The divergence
is namespacing: Ruby's `require` puts definitions into the global namespace and Python's `import`
binds exactly one name in the importing module. There is no Python equivalent of a file that
"pollutes" the global namespace, and no equivalent of Ruby's autoloading — a Python name that has not
been imported simply does not exist.

**The trap.** Side effects at module level. A client constructed at import time connects during test
collection, during a migration, and inside every worker fork. Circular imports are the second trap:
two modules that import each other work or fail depending on which one Python happens to load first
and where in the file the import sits.

**Wild.** `if __name__ == "__main__":` exists exactly so a file can be both an importable module and a
script. FastAPI's dependency injection and lifespan handlers exist so clients are built at startup
rather than at import. `functools.lru_cache` on a factory function is the usual fix for "expensive
thing that must be built once, but not at import".

**Predict snippets.**

```python
# 1
import sys, json
first = sys.modules["json"]
import json
print(sys.modules["json"] is first)

# 2
from math import pi
import math
math.pi = 3
print(pi, math.pi)

# 3
import json
import json as j
print(json is j)

# 4
def f():
    import re
    return re.__name__
print(f())
```

Expected: `True` · `3.141592653589793 3` · `True` · `re`. Snippet 2 is the unit: `from … import`
copied the *value* at import time, so rebinding the attribute on the module afterward leaves the
imported name pointing at the old object.

**Exercise.** You are given a module that opens a database connection at the top level. Restructure it
so the connection is created on first use rather than at import, is created only once, and can be
replaced in tests without monkeypatching a module-level global. Then explain in a comment what breaks
today when the test suite merely imports the module.

---

### 6.3 — Type hints  [trap]

**Model.** Annotations are stored on the function in `__annotations__` and are otherwise inert. Python
does not check them, coerce to them, or raise on a mismatch; a static checker such as mypy or
pyright does, before the code runs, and libraries such as Pydantic and FastAPI read them at import
time and build real behavior from them. `Optional[str]` is shorthand for `str | None` and describes
the *value*, saying nothing about whether the argument may be omitted. `Any` silences the checker
rather than describing anything.

**Ruby contrast.** Ruby has no annotation syntax in the language — RBS and Sorbet live outside or
alongside it — so the reader has no habit of reading types in a signature and, more importantly, no
habit of distrusting them. A Java background makes this worse rather than better, because in Java the
declared type is enforced by the compiler and the runtime. In Python the annotation is documentation
that some tools happen to read.

**The trap.** Trusting an annotation as validation. A function annotated `amount: Decimal` will
cheerfully receive a string from JSON or OCR and fail later during arithmetic. This is the same trap
as unit 5.6 seen from the function side rather than the class side.

**Wild.** FastAPI is the clearest case of hints having real behavior: it reads a handler's
annotations to build request validation, response serialization, and the OpenAPI schema, so a wrong
annotation there is a wrong API contract. `dataclasses` reads annotations to decide which class
attributes are fields. `typing.get_type_hints` is how a library resolves them at runtime.

**Predict snippets.**

```python
# 1
def f(x: int) -> str: return x
print(f("not an int"))

# 2
from typing import Optional
def f(x: Optional[str]): return x
f()

# 3
def f(a: int, b: str = "x") -> bool: ...
print(f.__annotations__)

# 4
from typing import get_type_hints
def f(x: "int") -> "str": ...
print(get_type_hints(f))
```

Expected: `not an int` · `TypeError: f() missing 1 required positional argument: 'x'` ·
`{'a': <class 'int'>, 'b': <class 'str'>, 'return': <class 'bool'>}` ·
`{'x': <class 'int'>, 'return': <class 'str'>}`. Snippet 2 is the naming trap: `Optional` describes
the value, and the parameter is still required.

**Exercise.** Annotate this function correctly, then say in a comment which of the annotations a
running Python process will actually act on and which exist only for mypy and for the reader:

```python
def certify(applicant_id, documents, ceiling=None, on_review=None):
    ...
```

Assume `documents` is a list of `Document` objects, `ceiling` is an optional `Decimal`, and
`on_review` is an optional callback taking a `Document` and returning nothing.

---

### 6.4 — The GIL  [syntax]

**Model.** CPython holds one global interpreter lock, so only one thread executes Python bytecode at a
time. A thread releases the lock while it waits on I/O — a socket, a disk read, a database round trip
— which is why threads genuinely help with I/O-bound work. A thread does not release it during
computation, so four threads doing arithmetic run no faster than one and usually slower. Real CPU
parallelism requires separate processes, which is what `multiprocessing` and
`concurrent.futures.ProcessPoolExecutor` give you.

**Ruby contrast.** MRI has a global VM lock with exactly the same consequence, so the instinct
transfers cleanly and the reader is better positioned here than in most units. The differences are
practical rather than conceptual: Python's `concurrent.futures` gives one interface over both threads
and processes, and Python's asyncio (unit 6.5) is a third model with no direct Ruby equivalent in
common use.

**The forms.** `threading.Thread` with `start` and `join`; `ThreadPoolExecutor` for bounded
concurrency over blocking calls; `ProcessPoolExecutor` for CPU work; `threading.Lock` as a context
manager; a note that a timing demonstration belongs in the lesson body rather than in a predict
snippet, since wall-clock results are not deterministic.

**Mistakes.** Reaching for threads to speed up parsing or number crunching. Sharing a mutable
structure between threads with no lock — `counter += 1` is three bytecodes and can interleave.
Creating a thread per item over a large collection instead of using a bounded pool.

**Predict snippets.**

```python
# 1
import threading
result = []
def work(n): result.append(n * 2)
ts = [threading.Thread(target=work, args=(i,)) for i in range(3)]
for t in ts: t.start()
for t in ts: t.join()
print(sorted(result))

# 2
from concurrent.futures import ThreadPoolExecutor
with ThreadPoolExecutor(2) as ex:
    print(list(ex.map(lambda x: x * 2, [1, 2, 3])))

# 3
import threading
print(threading.current_thread().name)

# 4
import threading
lock = threading.Lock()
with lock: print(lock.locked())
print(lock.locked())
```

Expected: `[0, 2, 4]` · `[2, 4, 6]` · `MainThread` · `True` then `False`. Note that `ex.map` returns
results in submission order even though the work may finish out of order, which is worth one sentence.

**Exercise.** You need to fetch application status from a slow external API for 200 applicants, and
separately to compute an eligibility score for each of the same 200 from data already in memory. Write
the two calls — one using `ThreadPoolExecutor` and one using `ProcessPoolExecutor` — and say in a
comment which is which and why swapping them would make things worse.

---

### 6.5 — asyncio  [trap]

**Model.** An `async def` function returns a coroutine object; calling it runs none of the body, in
exactly the way unit 4.2 described for generators. `await` suspends the coroutine and hands control
back to the event loop, which is free to run another task until the awaited operation completes. There
is one loop on one thread. Consequently any *synchronous* blocking call inside a coroutine —
`requests.get`, `time.sleep`, a synchronous database driver, a large computation — stops the loop and
therefore stalls every other request the process is serving, not merely this one. `asyncio.gather`
runs awaitables concurrently; a sequence of `await`s in a loop does not.

**Ruby contrast.** Ruby has fibers and, more recently, the fiber scheduler, but async I/O is not the
default idiom in most Ruby applications the way it is in modern Python web work. There is no
widespread Ruby equivalent to the `async def`/`await` split, and no equivalent of the "colored
function" problem where an async function can only be awaited from another async function. Expect this
unit to feel genuinely new rather than like a translation.

**The trap.** One blocking call in one handler collapsing tail latency for the whole process. It does
not raise, it does not log, and under light load it does not even look slow; it appears as a p99
cliff under concurrency, which is exactly the answer an interviewer is listening for.

**Wild.** `httpx` exists as the async counterpart to `requests` precisely because `requests` blocks
the loop. `asyncio.to_thread` was added in 3.9 to wrap unavoidable blocking calls. FastAPI runs a
plain `def` handler in a threadpool for this reason, which is why a sync handler is sometimes the
*safer* choice than a badly written async one.

**Predict snippets.**

```python
# 1
import asyncio
async def f(): return 1
print(type(f()).__name__)

# 2
import asyncio
async def f(): return 1
print(asyncio.run(f()))

# 3
import asyncio
async def main():
    return await asyncio.gather(*(asyncio.sleep(0, result=i) for i in range(3)))
print(asyncio.run(main()))

# 4
import asyncio
order = []
async def task(n):
    order.append(f"start{n}")
    await asyncio.sleep(0)
    order.append(f"end{n}")
async def main(): await asyncio.gather(task(1), task(2))
asyncio.run(main())
print(order)
```

Expected: `coroutine`, accompanied by a `RuntimeWarning` that the coroutine was never awaited · `1` ·
`[0, 1, 2]` · `['start1', 'start2', 'end1', 'end2']`. Snippet 4 is the mechanism made visible: both
tasks start before either finishes, because `await` handed control back to the loop.

**Exercise.** Here is a handler with three defects. Name each one, say what it does to the *other*
requests the process is serving, and rewrite it:

```python
import time, requests

async def notify_all(applicants):
    results = []
    for a in applicants:
        r = requests.post("https://sms.example/send", json={"to": a.phone})
        results.append(r.status_code)
        time.sleep(0.2)
    return results
```

Watch for: `httpx.AsyncClient` and `await asyncio.sleep`, `asyncio.gather` for concurrency, and a
bounded `Semaphore` rather than an unbounded gather over every applicant.

---

### 6.6 — pytest  [trap]

**Model.** A pytest fixture is dependency injection: a test declares a parameter, and pytest supplies
the value by calling the fixture of that name. `scope` controls how often the fixture runs —
`function` by default, then `class`, `module`, and `session` — and a broader scope means the same
object is shared by more tests. `parametrize` runs one test body against many inputs as separate test
cases. `monkeypatch` undoes its changes automatically at the end of the test.

**Ruby contrast.** RSpec's `let` is lazy and memoized per example, which is close to a
function-scoped fixture, and `before(:all)` is close to a module-scoped one. The instinct transfers.
What does not transfer is the injection style: RSpec `let` defines a method you call, while a pytest
fixture is requested by *naming it as a parameter*, which is why a typo in the parameter name produces
"fixture not found" rather than a `NameError`.

**The trap.** Two. A module- or session-scoped fixture returning a mutable object shares one object
across tests, so one test's mutation changes another's starting state and the suite passes or fails
depending on ordering. And a mock placed at your own seam rather than at a process edge tests the
mock: if you patched the function under test, the assertion proves nothing.

**Wild.** `monkeypatch.setattr` and `freezegun` are the standard process-edge tools for the clock;
`responses` and `respx` stub HTTP at the transport layer rather than at your own function;
`pytest.raises` is a context manager whose `__exit__` deliberately suppresses, per unit 3.7.

**Predict snippets.**

Note that this unit's snippets ask "what does this prove" as often as "what does this print", which
is a deliberate variation for testing material.

```python
# 1
def make_ledger(entries=[]):
    entries.append("x")
    return entries
print(make_ledger(), make_ledger())

# 2
from unittest.mock import Mock
m = Mock()
m.verify.return_value = "ok"
print(m.verify("x"))
print(callable(m.verrify), m.verrify("x") is not None)

# 3
from unittest.mock import Mock
m = Mock()
m.check(1)
m.check.assert_called_once_with(999)

# 4
from unittest.mock import Mock
class Real:
    def verify(self, doc): return "ok"
loose, strict = Mock(), Mock(spec=Real)
print(loose.verrify("d") is not None)
strict.verrify("d")
```

Expected: `['x'] ['x', 'x']` · `ok` then `True True` · `AssertionError: expected call not found.` ·
`True` then `AttributeError: Mock object has no attribute 'verrify'`.

Snippets 2 and 4 are the pair that matters. A bare `Mock` answers *any* attribute, so a typo in the
method you are exercising silently returns another mock and the test passes while testing nothing.
`Mock(spec=Real)` restricts the mock to the real object's attributes and turns that typo back into an
error. Worth saying explicitly during the walk-through: modern `unittest.mock` does guard misspelled
`assert_*` method names — `m.check.assert_called_onse_with(...)` raises `AttributeError` rather than
passing silently — so the surviving hazard is the typo'd *subject* in snippet 2, not the typo'd
assertion.

**Exercise.** Here is a test that passes and proves nothing. Say precisely what it fails to catch,
then rewrite it so it would fail if `annualize` were wrong:

```python
def test_certify(monkeypatch):
    monkeypatch.setattr("verification.annualize", lambda doc: 50_000)
    result = verification.certify([{"type": "w2"}])
    assert result == 50_000
```

Then add a second test that freezes the clock and proves the 120-day staleness boundary behaves
correctly on the day itself and the day after.
