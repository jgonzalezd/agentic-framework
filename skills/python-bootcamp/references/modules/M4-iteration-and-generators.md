# M4 — Iteration and generators

Four units. Ruby's `yield` and Python's `yield` share a keyword and nothing else, which makes this the
highest-collision material in the curriculum. Unit 4.2 exists specifically to break that collision,
and unit 6.5 depends on it, because `async`/`await` is built on the same suspension machinery.

---

### 4.1 — The iterator protocol  [syntax]

**Model.** Two roles, easy to confuse. An **iterable** is anything that can produce a fresh iterator
when you call `iter()` on it; a list is iterable. An **iterator** is the thing that actually yields
values one at a time through `__next__`, and it is consumed as it goes. An iterator's `__iter__`
returns itself, which is what lets you use one in a `for` loop. A `for` loop is exactly this: call
`iter()` on the subject, call `__next__` repeatedly, stop when `StopIteration` is raised.

**Ruby contrast.** Ruby's `Enumerable` gives you everything from a single `each` definition, and
Ruby's `Enumerator` is the rough equivalent of a Python iterator. The divergence worth naming is
where the protocol lives. In Ruby you define `each` and the module supplies `map`, `select`, and the
rest. In Python you define `__iter__` and get the `for` statement and the built-ins; the mixin
methods come from inheriting `collections.abc.Iterable` or `Sequence`, which is opt-in rather than
automatic.

**The forms.** `iter()` and `next()` by hand; `StopIteration` as the ordinary termination signal;
`__iter__` implemented as a generator function, which is the common modern shape; the distinction
between an iterable that can be looped twice and an iterator that cannot.

**Mistakes.** Storing an iterator where you meant an iterable, so the second loop finds nothing.
Implementing `__iter__` to return `self` on a class that holds consumed state, which produces the
same problem. Catching `StopIteration` in application code, where it usually indicates a design
error rather than a condition to handle.

**Predict snippets.**

```python
# 1
it = iter([1, 2])
print(next(it), next(it))
next(it)

# 2
class Countdown:
    def __init__(self, n): self.n = n
    def __iter__(self):
        for i in range(self.n, 0, -1): yield i
c = Countdown(3)
print(list(c), list(c))

# 3
it = iter([1, 2, 3])
print(list(it), list(it))

# 4
lst = [1, 2]
it = iter(lst)
print(iter(it) is it, iter(lst) is lst)
```

Expected: `1 2` then `StopIteration` · `[3, 2, 1] [3, 2, 1]` · `[1, 2, 3] []` · `True False`.
Snippets 2 and 3 next to each other are the iterable-versus-iterator distinction: `Countdown` builds a
fresh generator on every `iter()` call, while the bare iterator in snippet 3 is spent.

**Exercise.** Write a `Waitlist` class holding a list of `(log_number, applicant_id)` tuples that can
be iterated any number of times, yielding applicant IDs in log-number order. Prove it by looping over
the same instance twice and getting identical results. Watch for: `__iter__` written as a generator
function, and for the mistake of sorting once in `__init__` and returning a stored iterator.

---

### 4.2 — Python's `yield` is not Ruby's `yield`  [trap]

**Model.** The presence of the `yield` keyword anywhere in a function body changes what that function
*is*. Calling it no longer runs the body; it constructs and returns a generator object, with the body
paused before its first line. Each `next()` runs the body forward until it reaches a `yield`, hands
that value out, and freezes the function — local variables, position, and all — until the next
request. A `return` inside a generator ends the iteration rather than producing a value.

**Ruby contrast.** This is the sharpest collision between the two languages. In Ruby, `yield` calls
the block the caller passed to this method, control returns immediately afterward, and the method runs
straight through as normal. In Python, `yield` suspends *this* function and hands a value to whoever
is iterating it. Ruby's `yield` is a call outward; Python's is a pause. The nearest Ruby analogue to a
Python generator is `Enumerator.new`, not `yield`.

**The trap.** Argument validation at the top of a generator function never runs when the caller
expects it to. The function is called, no exception appears, and the `ValueError` fires much later at
the first iteration — often inside a different module, sometimes inside a `try` that was never meant
to catch it.

**Wild.** `range`, `enumerate`, and `zip` are all lazy for this reason; `csv.reader` streams rows from
a file it has not finished reading; SQLAlchemy's `yield_per` streams result rows so a large query does
not materialize in memory.

**Predict snippets.**

```python
# 1
def gen():
    print("start"); yield 1; print("middle"); yield 2
g = gen()
print("created")
print(next(g))

# 2
def gen():
    yield 1
    return "done"
    yield 2
print(list(gen()))

# 3
def gen():
    x = yield 1
    print("got", x)
    yield 2
g = gen()
print(next(g))
print(g.send("hello"))

# 4
def check(docs):
    if not docs: raise ValueError("no docs")
    yield "ok"
check([])
print("no error")
```

Expected: `created` then `start` then `1` · `[1]` · `1` then `got hello` then `2` · `no error`.
Snippet 1 shows that calling a generator function runs none of its body, and snippet 4 is the trap:
the `ValueError` never fires because the generator is never iterated.

**Exercise.** Write `def stream_events(applicant_id, sources)` that raises `ValueError` immediately —
at call time, not at first iteration — when `sources` is empty, and otherwise yields events lazily
from each source in turn. Then prove both halves: that the empty case raises before any iteration, and
that the good case has not read the second source after one `next()`. Watch for: the two-function
split, where an ordinary function validates and then returns the generator from a nested or private
generator function.

---

### 4.3 — Generators are single-pass  [trap]

**Model.** A generator is an iterator, so it is consumed as it is read and it cannot be rewound.
Iterating it a second time produces nothing at all, and — this is the part that makes it dangerous —
it does so without raising. A generator also has no length and no indexing, because computing either
would require running it to the end. When something needs to be traversed more than once, indexed, or
counted, materialize it with `list()`.

**Ruby contrast.** Ruby's `Enumerator` is lazy in the same way, but Ruby developers meet laziness
rarely, because `map` and `select` on an array return arrays. In Python the lazy forms are everywhere
and are the default for `map`, `filter`, `zip`, `enumerate`, `dict.items`, and every generator
expression. The instinct that "a collection operation returns a collection" is correct in Ruby and
wrong here.

**The trap.** The silently empty second pass. It returns a wrong answer — a total of zero, an empty
report, a household counted as having no income — rather than raising, which means it survives into
production and is found by a person rather than by a test.

**Wild.** `itertools.tee` exists precisely to allow two independent passes over one source;
`functools.reduce` and `sum` consume an iterator entirely; `list(response.iter_lines())` in `requests`
is the everyday materialize-before-reuse case.

**Predict snippets.**

```python
# 1
g = (x for x in range(3))
print(sum(g), sum(g))

# 2
def timeline(events):
    for e in events: yield e
t = timeline(["a", "b"])
print(len(list(t)), len(list(t)))

# 3
g = (x for x in range(3))
print(len(g))

# 4
def gen():
    try:
        yield 1
        yield 2
    finally:
        print("cleanup")
g = gen()
print(next(g))
g.close()
```

Expected: `3 0` · `2 0` · `TypeError: object of type 'generator' has no len()` · `1` then `cleanup`.
Snippet 1 is the whole unit in two calls; snippet 4 shows that a generator's `finally` runs on
`close()`, which is what makes `try`/`finally` around a `yield` a working cleanup mechanism and
connects to unit 3.7.

**Exercise.** Here is a function that returns the wrong total. Find the bug, state the wrong value it
produces, and fix it in the way that keeps the streaming behavior where it matters:

```python
def certify(documents):
    incomes = (extract_income(d) for d in documents)
    if not any(i > 500_000 for i in incomes):
        return sum(incomes)
    raise NeedsReview("income above ceiling")
```

Watch for: naming the actual wrong output — a total of `0` for every household under the ceiling —
rather than only describing the rule.

---

### 4.4 — Comprehensions, `enumerate`, `zip`, `itertools`  [syntax]

**Model.** A comprehension builds a list, dict, or set from an iterable in a single expression, with
an optional `if` clause for filtering. Swapping the brackets for parentheses makes a generator
expression, which is lazy and can be passed straight into `sum`, `any`, `all`, or `max` without
building an intermediate list. `enumerate` yields index-value pairs and takes a `start`. `zip` walks
several iterables in parallel and stops at the shortest. `itertools` is a library of composable
single-pass building blocks.

**Ruby contrast.** This is where a Ruby developer's fluency is worth the most and translates the
least. `arr.each_with_index` becomes `enumerate(arr)`; `arr.map(&:name)` becomes a comprehension;
`arr.select { … }` becomes a comprehension with an `if`; `arr.group_by { … }` has no direct
equivalent, and the Python is either a `defaultdict(list)` loop or `itertools.groupby` on
pre-sorted input. That last one catches people: `groupby` groups *consecutive* equal keys and does not
sort for you.

**The forms.** List, dict, and set comprehensions; the `if` filter; a generator expression inside
`sum`/`any`/`all`; `enumerate(seq, start=1)`; `zip` and `zip(strict=True)`; `itertools.chain`,
`islice`, and `groupby`; `collections.defaultdict` and `Counter` as the usual group-by answer.

**Mistakes.** Using `groupby` without sorting first. Assuming `zip` errors on unequal lengths, when by
default it silently truncates. Writing a comprehension with two `for` clauses and an `if` that a plain
loop would express more clearly.

**Predict snippets.**

```python
# 1
for i, name in enumerate(["a", "b"], start=1): print(i, name)

# 2
print(list(zip([1, 2, 3], ["a", "b"])))

# 3
print({k: v for k, v in [("a", 1), ("b", 2)] if v > 1})

# 4
from itertools import groupby
data = [("snap", 1), ("hcv", 2), ("snap", 3)]
print({k: len(list(g)) for k, g in groupby(data, key=lambda x: x[0])})
```

Expected: `1 a` then `2 b` · `[(1, 'a'), (2, 'b')]` · `{'b': 2}` · `{'snap': 1, 'hcv': 1}`. Snippet 4
is the `groupby` trap: because the two `snap` entries are not adjacent, the second one overwrites the
first in the dictionary and the count is wrong.

**Exercise.** Given a list of document dictionaries with `applicant`, `type`, and `amount`, produce a
dictionary mapping each applicant to their total amount, using `collections.defaultdict`. Then produce
the same result a second way with `itertools.groupby`, sorting first, and say in a comment which one
you would ship.
