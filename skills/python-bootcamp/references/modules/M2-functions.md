# M2 — Functions

Six units. Python functions are ordinary objects, and Python has no blocks — which means several
things a Ruby developer expresses with a block have to be expressed some other way, and choosing the
wrong replacement is the clearest tell that someone is writing Ruby in Python syntax.

Kinds per unit are marked below and defined in [lesson-format.md](../lesson-format.md).

---

### 2.1 — Functions are objects, and Python has no blocks  [trap]

**Model.** A `def` statement creates a function object and binds it to a name, exactly as an
assignment binds any other object. Functions can be stored in lists and dictionaries, passed as
arguments, returned from other functions, and given attributes. A function with no `return` returns
`None`, always and silently.

**Ruby contrast.** This is divergence 7 in [ruby-bridge.md](../ruby-bridge.md) and it is the largest
structural difference between the languages. Ruby uses one construct — the block — for four unrelated
jobs, and Python uses a different construct for each: `for` and comprehensions for iteration, `with`
for resource management, plain function objects for callbacks and strategies, and generator functions
for lazy sequences. The second contrast is smaller and bites sooner: Ruby returns the last expression
implicitly, and Python does not, so a method body that ends in an expression returns `None`.

**The trap.** The missing `return`. It produces `None` rather than an error, so the failure surfaces
somewhere downstream as a `TypeError` on an unrelated line.

**Wild.** `sorted(key=...)`, `functools.reduce`, and `logging.Handler.setFormatter` all take a plain
callable where Ruby would take a block. `str.strip` and `str.upper` referenced as unbound methods and
passed into `map` show that even built-in methods are ordinary values.

**Predict snippets.**

```python
# 1
def annualize(monthly): monthly * 12
print(annualize(100))

# 2
def apply_all(fns, value):
    for f in fns: value = f(value)
    return value
print(apply_all([str.strip, str.upper], "  snap  "))

# 3
def verify(doc): return "ok"
checks = {"paystub": verify}
print(checks["paystub"]("d-1"), verify.__name__)

# 4
print([x * 2 for x in range(3)], type((x * 2 for x in range(3))).__name__)
```

Expected: `None` · `SNAP` · `ok verify` · `[0, 2, 4] generator`. Snippet 1 is the Ruby reflex failing
silently; snippet 4 previews that a comprehension and a generator expression differ only in brackets.

**Exercise.** Write a `run_checks(doc, checks)` function that takes a document dictionary and a list
of small check functions, runs each one, and returns a list of the failure messages, where a check
returns `None` when it passes and a message string when it fails. Then define two checks — one for a
missing amount and one for a document older than 120 days — and call it. Watch for: a missing
`return` in the checks, and for reaching for a lambda where a named `def` reads better.

---

### 2.2 — Argument forms  [syntax]

**Model.** A signature can declare, in this order: positional-only parameters ending at `/`, ordinary
parameters, `*args` collecting extra positionals into a tuple, keyword-only parameters after a `*` or
after `*args`, and `**kwargs` collecting extra keywords into a dict. A default does not make a
parameter keyword-only; only position in the signature does that.

**Ruby contrast.** Ruby's keyword arguments are a distinct kind of parameter, so `def notify(app,
urgent: false)` genuinely requires the caller to write `urgent:`. Python's `def notify(app,
urgent=False)` declares an ordinary positional parameter that merely has a default, and
`notify(app, True)` is legal. To get Ruby's enforcement you must ask for it with a bare `*`.

**The forms.** Show each in one snippet: `*args`; `**kwargs`; `def f(a, *, b)` for keyword-only;
`def f(a, /, b)` for positional-only; and call-site unpacking with `f(*seq)` and `f(**mapping)`.

**Mistakes.** Assuming a default implies keyword-only. Placing a parameter after `*args` and being
surprised it became keyword-only. Passing a positional-only parameter by name.

**Predict snippets.**

```python
# 1
def summarize(applicant, *notes, program):
    return f"{applicant}: {len(notes)} notes for {program}"
print(summarize("A-1", "verified", "SNAP"))

# 2
def f(a, b=2, *args, **kwargs): return a, b, args, kwargs
print(f(1, 2, 3, x=4))

# 3
def notify(applicant, *, urgent=False): return f"{applicant} {urgent}"
print(notify("A-1", True))

# 4
def f(a, /, b): return a + b
print(f(1, b=2))
print(f(a=1, b=2))
```

Expected: `TypeError: summarize() missing 1 required keyword-only argument: 'program'` ·
`(1, 2, (3,), {'x': 4})` · `TypeError: notify() takes 1 positional argument but 2 were given` · `3`
then `TypeError: f() got some positional-only arguments passed as keyword arguments: 'a'`.

**Exercise.** Write `def send_notice(applicant_id, *documents, program, urgent=False, **metadata)`
that returns a formatted string, then write four calls: a valid one, one that fails because `program`
was passed positionally, one passing two documents, and one adding two arbitrary metadata keys. The
point is to feel where the boundaries are.

---

### 2.3 — Scope and closures  [trap]

**Model.** Name resolution follows LEGB — local, enclosing, global, built-in — and a name assigned
anywhere in a function body is local to that function for the whole body, including before the
assignment. A nested function that reads an enclosing variable captures the *variable*, not its value
at definition time, so the function sees whatever the variable holds when the function is finally
called. `nonlocal` lets a nested function rebind an enclosing name, and `global` does the same for
module level.

**Ruby contrast.** Ruby blocks also close over variables rather than values, so the late-binding
behavior itself will not surprise the reader. What will surprise them is the assignment rule: in Ruby
you can read and reassign an outer local from inside a block with no ceremony, while in Python the
mere presence of `count += 1` makes `count` local and the read fails with `UnboundLocalError` before
the assignment ever happens. `nonlocal` is the ceremony Ruby does not require.

**The trap.** Building a list of functions in a loop. Every closure shares the one loop variable, so
they all see its final value.

**Wild.** `functools.lru_cache` and every decorator with state keep that state in a closure;
`functools.partial` exists partly because binding a value now is so often what you actually meant.

**Predict snippets.**

```python
# 1
fns = [lambda: i for i in range(3)]
print([f() for f in fns])

# 2
fns = [lambda i=i: i for i in range(3)]
print([f() for f in fns])

# 3
count = 0
def bump(): count += 1
bump()

# 4
def counter():
    n = 0
    def inc():
        nonlocal n
        n += 1
        return n
    return inc
c = counter()
print(c(), c(), c())
```

Expected: `[2, 2, 2]` · `[0, 1, 2]` · `UnboundLocalError: cannot access local variable 'count' where
it is not associated with a value` · `1 2 3`. Snippets 1 and 2 together are the unit; the default
argument in snippet 2 is evaluated at definition time, which is unit 1.3's mechanism used
deliberately rather than by accident.

**Exercise.** Write `def make_ceiling_checks(bands)` that takes a list of income ceilings such as
`[30000, 50000, 80000]` and returns a list of functions, where the *n*th function returns `True` when
an income is at or below the *n*th ceiling. Then call every returned function with `40000` and print
the results. Watch for: the late-binding bug, and for a fix using a default parameter or a factory
function rather than `nonlocal`.

---

### 2.4 — Decorators and `functools.wraps`  [trap]

**Model.** A decorator is a function that takes a function and returns a replacement. `@log` above a
`def` is exactly `verify = log(verify)`, run once at definition time. Because the name now refers to
the wrapper, everything that reads the function's metadata — `__name__`, `__doc__`, the signature,
type hints — reads the wrapper's metadata instead. `functools.wraps` copies that metadata across. A
decorator that takes arguments needs three levels, because `@tag("audit")` is a call whose *result* is
the decorator.

**Ruby contrast.** Ruby has no decorator syntax. The nearest equivalents are `alias_method` chaining
or `Module#prepend`, both of which are more machinery for the same job and both of which a Ruby
developer reaches for rarely. Consequently the reader will underestimate how ubiquitous decorators
are in Python and how much framework behavior depends on the metadata `wraps` preserves.

**The trap.** Forgetting `@wraps`. The breakage is never in the decorator; it is downstream, in
whatever introspects the function.

**Wild.** FastAPI reads a route handler's signature and type hints at import time to build validation
and OpenAPI docs, so an un-`wraps`-ed decorator on a handler silently produces a route that accepts
nothing. `pytest` collects tests by `__name__`, and `functools.lru_cache` is a decorator whose entire
value is its closure state.

**Predict snippets.**

```python
# 1
def log(fn):
    def wrapper(*a, **k): return fn(*a, **k)
    return wrapper
@log
def verify(doc): return "ok"
print(verify.__name__)

# 2
import functools
def log(fn):
    @functools.wraps(fn)
    def wrapper(*a, **k): return fn(*a, **k)
    return wrapper
@log
def verify(doc): return "ok"
print(verify.__name__)

# 3
def counted(fn):
    calls = 0
    def wrapper(*a, **k):
        nonlocal calls
        calls += 1
        return f"{fn.__name__}:{calls}"
    return wrapper
@counted
def a(): pass
@counted
def b(): pass
print(a(), a(), b())

# 4
def tag(label):
    def deco(fn):
        def wrapper(*a): return f"[{label}] {fn(*a)}"
        return wrapper
    return deco
@tag("audit")
def verify(doc): return "ok"
print(verify("d"))
```

Expected: `wrapper` · `verify` · `a:1 a:2 b:1` · `[audit] ok`. Snippet 3 shows each decorated function
getting its *own* closure, which is the thing people guess wrong in both directions.

**Exercise.** Write an `@audited` decorator that records every call in a module-level list as
`(function name, arguments)` and then calls through, preserving the wrapped function's `__name__`.
Apply it to two small verification functions, call each once, and print the audit log. Watch for:
`@functools.wraps`, and for `*args, **kwargs` in the wrapper rather than a fixed signature.

---

### 2.5 — Raise rather than return `None`  [syntax]

**Model.** Returning `None` to signal failure collapses two different situations into one value: "the
thing legitimately is `None` or zero or empty" and "the operation could not be performed." The caller
cannot tell them apart, so the check gets forgotten and the `None` travels until it hits an operation
that cannot handle it, far from where it was produced. Raising a specific exception makes the failure
impossible to ignore and puts the traceback at the real cause.

**Ruby contrast.** Ruby's standard library leans on `nil` returns and gives you `&.` to keep going
safely, so returning `nil` for "not found" is idiomatic and low-friction there. Python has no safe
navigation operator. The idiomatic Python is either a raise or an explicit sentinel, and the standard
library shows both: `dict[key]` raises while `dict.get(key)` returns `None`, and the pair exists so
the caller chooses.

**The forms.** A custom exception deriving from a single root application exception. A sentinel
object for the rare case where `None` is a legitimate value. `dict.get` with an explicit default. The
`try`/`except` at the boundary that turns the exception into a user-facing message.

**Mistakes.** Returning `None` from a lookup and having the caller do arithmetic on it. Catching
`Exception` around the raise, which throws away the distinction you just created. Using `None` as
both "absent" and "verified as nothing", which unit 1.6 already showed corrupts a `$0` income.

**Predict snippets.**

```python
# 1
def find_income(docs, doc_type):
    for d in docs:
        if d["type"] == doc_type: return d["amount"]
docs = [{"type": "w2", "amount": 0}]
print(find_income(docs, "w2"), find_income(docs, "paystub"))

# 2
def parse(v):
    try: return int(v)
    except ValueError: return None
print(parse("12") + 1)
print(parse("x") + 1)

# 3
class NotVerified(Exception): pass
def check(x):
    if x is None: raise NotVerified("no document")
    return x
try: check(None)
except NotVerified as e: print(type(e).__name__, e)

# 4
def f(): pass
print(f() is None)
```

Expected: `0 None` · `13` then `TypeError: unsupported operand type(s) for +: 'NoneType' and 'int'` ·
`NotVerified no document` · `True`. Snippet 1 is the ambiguity in one line: `0` and `None` are both
returned, and only one of them means failure.

**Exercise.** Rewrite this so a caller cannot confuse "no such document" with "an income of zero",
and write the two-line caller that handles each case differently:

```python
def income_for(applicant_id, doc_type, docs):
    for d in docs:
        if d["applicant"] == applicant_id and d["type"] == doc_type:
            return d["amount"]
    return None
```

---

### 2.6 — `lambda`, `partial`, and comprehensions  [syntax]

**Model.** A `lambda` is a function limited to a single expression, useful as a small inline callable
and nothing more. `functools.partial` binds some arguments now and returns a callable wanting the
rest. A comprehension builds a list, dict, or set from an iterable in one expression, and a generator
expression does the same lazily. Between them these three cover almost everything Ruby does with
`&:symbol`, `map`, and `select`.

**Ruby contrast.** Ruby's `arr.map(&:name)` has no Python shorthand at all. The Python is
`[x.name for x in arr]`, and reaching for `map(lambda x: x.name, arr)` instead is the translation
tell — it is longer, slower to read, and produces a lazy iterator rather than a list. `select` becomes
a comprehension with an `if` clause, and `reduce` moved to `functools` in Python 3 specifically
because it is usually less readable than a loop.

**The forms.** List, dict, and set comprehensions; the `if` filter clause; a generator expression
passed straight into `sum` or `any`; `sorted(key=lambda …)`; `functools.partial`;
`operator.attrgetter` as the closest thing to `&:symbol`.

**Mistakes.** Assigning a lambda to a name, which gives you a worse `def` with a useless `__name__`.
Building a comprehension with three nested clauses that a loop would say more clearly. Calling
`list()` on a `map` twice and getting an empty list the second time.

**Predict snippets.**

```python
# 1
names = ["ann", "bo"]
print([n.upper() for n in names])

# 2
from functools import partial
def annualize(amount, periods): return amount * periods
biweekly = partial(annualize, periods=26)
print(biweekly(100))

# 3
docs = [{"amt": 10}, {"amt": 0}, {"amt": 5}]
print(sorted(docs, key=lambda d: d["amt"]))

# 4
m = map(str.upper, ["a", "b"])
print(list(m), list(m))
```

Expected: `['ANN', 'BO']` · `2600` · `[{'amt': 0}, {'amt': 5}, {'amt': 10}]` · `['A', 'B'] []`.
Snippet 4 previews unit 4.3 and is the reason a comprehension is usually the better choice.

**Exercise.** Given a list of document dictionaries with `type`, `applicant`, and `amount` keys,
write four one-liners: the total of all amounts, the applicant IDs with any amount above 50,000, a
dictionary mapping applicant ID to their highest amount, and the list sorted by amount descending
then by applicant ID ascending. Watch for: `sum()` over a generator expression rather than a built
list, and a tuple key in the final sort.
