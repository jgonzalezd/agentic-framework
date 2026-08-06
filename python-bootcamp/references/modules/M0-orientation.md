# M0 — Orientation

Two units. The goal is to stop translating Ruby line by line and start reading Python as its own
language.

Both units are **syntax** units: six parts, 600–900 words, per
[lesson-format.md](../lesson-format.md).

---

### 0.1 — The Ruby-to-Python translation table  [syntax]

**Model.** Most Ruby syntax has a direct Python spelling, and learning those spellings removes the
friction that makes an experienced engineer feel like a beginner. The value of this unit is not the
table itself; it is knowing which entries are *safe* translations and which are the handful that only
look safe. This is the one unit permitted to use the surface table in
[ruby-bridge.md](../ruby-bridge.md) directly.

**Ruby contrast.** The whole unit is contrast. Work through the surface table in the order it is
written, grouping by what the reader will reach for first: printing, collections, string building,
conditionals, methods and attributes, exceptions, imports.

**Mistakes.** Three worth showing as running code. Indentation is syntax, not style, so a
misaligned line is a `SyntaxError` or, worse, a valid program that means something else. `range(1, 6)`
excludes its endpoint where Ruby's `1.upto(5)` includes it. A dictionary lookup with `d["k"]` raises
`KeyError` where Ruby's `h[:k]` quietly returns `nil`, which means Ruby code translated literally will
start raising in production.

**Wild.** Not applicable — a syntax unit at this level has no library to point at. Skip the
"in the wild" framing and spend the words on the forms instead.

**Predict snippets.**

```python
# 1
print(list(range(1, 5)))

# 2
d = {"program": "SNAP"}
print(d.get("income"))

# 3
d = {"program": "SNAP"}
print(d["income"])

# 4
names = ["ann", "bo"]
print(names.length)
```

Expected: `[1, 2, 3, 4]` · `None` · `KeyError: 'income'` · `AttributeError: 'list' object has no
attribute 'length'`. The last two are the point: Ruby's forgiving lookups raise in Python.

**Exercise.** Give the user this Ruby and ask for the Python:

```ruby
class Applicant
  attr_accessor :name, :household_size

  def initialize(name, household_size)
    @name = name
    @household_size = household_size
  end

  def large_household?
    @household_size > 4
  end

  def to_s
    "#{@name} (#{@household_size})"
  end
end
```

Watch for: `self` declared as a parameter, `__init__` rather than `initialize`, no `attr_accessor`
(plain public attributes), `__str__` rather than `to_s`, no question mark in the method name, and an
f-string. Do not accept `@property` here; that is unit 5.1, and reaching for it now is the Java
instinct rather than the Python one.

---

### 0.2 — The object model in one page  [syntax]

**Model.** Three facts carry the rest of the curriculum. First, a variable is a name bound to an
object, never a box holding a value; assignment rebinds the name and never copies the object. Second,
everything is an object, including classes, functions, and modules, so a function can be stored in a
dictionary and a class can be passed as an argument. Third, "Pythonic" has a precise meaning: the
interpreter knows how to call a fixed set of dunder methods, and code is Pythonic when it implements
those protocols so the language's own syntax works on your objects.

**Ruby contrast.** Ruby also treats everything as an object, so the reader will nod along and miss
the difference. The difference is that Ruby reaches objects through *methods* and Python reaches them
through *protocols*. In Ruby you get length by calling `arr.length`, a method on the object. In Python
you call the built-in `len(arr)`, and `len` turns around and calls `arr.__len__()`. The same pattern
holds for `str()`, `iter()`, `bool()`, and the operators. Ruby's operators are methods you can define
with the operator's own name; Python's are dunder methods the interpreter dispatches to. This is why
the data model (module M3) is a whole third of the curriculum.

**Mistakes.** Believing `a = b` copies. Believing a class name is a keyword rather than a value that
can be assigned and passed. Writing `arr.len()` or `obj.to_s()` from muscle memory.

**Wild.** Show `type()` returning a class and `type(type)` returning `type` itself, then show a
function stored in a dictionary as the dispatch table it is. Both take two lines and both make the
point that these are ordinary values.

**Predict snippets.**

```python
# 1
def verify(doc): return "ok"
checks = {"paystub": verify}
print(checks["paystub"]("d-1"))

# 2
print(type(5), type(int))

# 3
Program = str
print(Program(42))

# 4
class Applicant: pass
a = Applicant()
a.household_size = 4
print(a.household_size, Applicant.household_size)
```

Expected: `ok` · `<class 'int'> <class 'type'>` · `42` · the fourth prints `4` and then raises
`AttributeError: type object 'Applicant' has no attribute 'household_size'`, which previews unit 1.4
without explaining it.

**Exercise.** Ask for a six-line dispatch table: a dictionary mapping three document type strings
(`"paystub"`, `"w2"`, `"benefits_letter"`) to three small functions that each return an annual income
figure from a monthly or biweekly amount, plus a `verify(doc_type, amount)` function that looks up the
right one and calls it. Watch for: functions defined and then referenced by name without parentheses
when stored, and a `dict.get` with a sensible failure rather than a bare lookup.
