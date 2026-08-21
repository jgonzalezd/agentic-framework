# Ruby Bridge

The reference every unit draws its "Coming from Ruby" part from. Consult it when writing a lesson;
never paste it into one wholesale. A lesson needs the one contrast that matters for its unit,
explained in prose, not a table dropped into the middle of a chapter.

## Contents

- How to use this file
- Surface translation — where the languages agree
- The seven real divergences
- Constructs Ruby has and Python does not
- Constructs Python has and Ruby does not
- False friends — same word, different meaning

## How to use this file

Hard rule 6 of [lesson-format.md](lesson-format.md) says the Ruby contrast must be specific rather
than decorative. The surface table below is *decorative* — it tells the reader how to spell something
and teaches nothing about semantics. Use it only in unit 0.1, whose entire subject is the surface.

Every other unit draws from "The seven real divergences" or from the sections after it. Those are
places where a correct Ruby instinct produces incorrect Python.

## Surface translation — where the languages agree

For unit 0.1 only.

| Ruby | Python | Note |
|---|---|---|
| `def foo; end` | `def foo():` | Indentation replaces `end` throughout |
| `puts x` | `print(x)` | |
| `p x` | `print(repr(x))` | See unit 3.2 |
| `nil` | `None` | |
| `require "json"` | `import json` | But see divergence 6 |
| `arr.each { \|x\| … }` | `for x in arr:` | |
| `arr << x` | `arr.append(x)` | |
| `arr.length` / `.size` | `len(arr)` | A built-in function, not a method |
| `"a #{b} c"` | `f"a {b} c"` | |
| `h.fetch(:k)` | `h["k"]` | Ruby symbols have no Python equivalent; use strings |
| `h[:k]` (nil if absent) | `h.get("k")` | Bare `h["k"]` raises `KeyError` |
| `attr_accessor :name` | plain public attribute | See unit 5.1 |
| `Struct.new(:a, :b)` | `@dataclass` | See unit 5.6 |
| `x.nil?` | `x is None` | |
| `unless c` / `until c` | `if not c` / `while not c` | Python has no `unless` or `until` |
| `raise ArgumentError, "m"` | `raise ValueError("m")` | |
| `rescue => e` | `except Exception as e:` | But see unit 6.1 |
| `ensure` | `finally` | |
| `self` (implicit receiver) | `self` (explicit parameter) | See divergence 1 |
| `@ivar` | `self.ivar` | |
| `@@cvar` | class-body assignment | See divergence 2 — the dangerous one |
| `Klass::CONST` | `Klass.CONST` | Python has no `::` |
| `obj.frozen?` / `.freeze` | no equivalent | Immutability is by type, not by flag |
| `1.upto(5)` | `range(1, 6)` | Half-open: the end is excluded |
| `arr.map(&:name)` | `[x.name for x in arr]` | Python has no `&:symbol` shorthand |

## The seven real divergences

These are the ones that produce wrong programs rather than syntax errors. Each names the unit that
teaches it.

### 1. `self` is a parameter, not a keyword — unit 3.1

In Ruby, `self` is a keyword available inside every method, and calling `other_method` with no
receiver implicitly calls it on `self`. In Python, `self` is an ordinary first parameter that you
declare and that the caller never passes, and there is no implicit receiver at all. Every call to a
method on the same object must be written `self.other_method()`. Forgetting the prefix does not call
the method; it raises `NameError`, because Python looks for a plain local or global name.

### 2. A class-body assignment is shared state — unit 1.4

Ruby distinguishes `@ivar` from `@@cvar` in the spelling, so a class variable announces itself. In
Python, an assignment in the class body creates a class attribute shared by every instance of the
class and every subclass, and it looks exactly like a field declaration:

```python
class Verifier:
    seen: list[str] = []      # one list, shared by every instance, forever
```

Reading `self.seen` finds the class attribute. Calling `self.seen.append(x)` mutates the shared list.
Assigning `self.seen = []` creates an instance attribute that shadows it, which is why the bug is
intermittent and hard to see. Instance state belongs in `__init__`.

### 3. Default arguments are evaluated once — unit 1.3

Ruby evaluates a default expression on every call, so `def f(x = [])` gives each call a fresh array.
Python evaluates the default once, when the `def` statement executes, and every call thereafter
shares that one object. The Python idiom is `def f(x=None)` followed by `if x is None: x = []`.

### 4. Empty containers are falsy — unit 1.6

In Ruby, only `false` and `nil` are falsy; `[]`, `{}`, `0`, and `""` are all truthy. In Python, all
of those are falsy. A Ruby developer writing `if applicants:` to mean "if the caller supplied an
argument" gets a test that also fails for an empty list, which is usually a bug. When you mean
"present", write `if applicants is not None:`.

### 5. `yield` suspends the function — unit 4.2

Ruby's `yield` calls the block the caller passed in and then continues. Python's `yield` turns the
whole function into a generator, and calling it runs no code at all until something iterates the
result. Same keyword, unrelated mechanisms. This is the single most confusing collision between the
two languages.

### 6. Import binds a name; it does not paste code — unit 6.2

Ruby's `require` executes a file and its definitions land in the global namespace. Python's `import`
executes the module once, caches it in `sys.modules`, and binds one name in the *current* module's
namespace. Importing the same module twice does not run it twice. `from x import y` copies a
reference at import time, so later rebinding `x.y` does not change what you imported.

### 7. There are no blocks — unit 2.1

This is the largest structural difference, because Ruby uses blocks for four unrelated jobs and
Python uses a different construct for each:

| Ruby block used for | Python construct |
|---|---|
| Iteration — `each`, `map`, `select` | `for`, comprehensions, generator expressions |
| Resource management — `File.open { … }` | context managers and `with` |
| Callbacks and strategies — `sort_by { … }` | a function object, or `key=` |
| Lazy sequences — `Enumerator.new { … }` | generator functions |

Reaching for a block-shaped API in Python — passing a lambda where a `with` belongs — is a reliable
tell that someone is writing Ruby in Python syntax.

## Constructs Ruby has and Python does not

- **Blocks, `yield`-to-block, procs, and lambdas as a distinct kind.** Python has functions, and a
  `lambda` is only a single-expression function, not a separate concept.
- **`&:symbol` shorthand.** Use a comprehension or `operator.attrgetter`.
- **Symbols.** Python uses strings. There is no `:name`/`"name"` distinction.
- **Open classes and monkeypatching built-ins.** You cannot add a method to `str`. Python's answer is
  a module-level function or a subclass.
- **`method_missing` as a common idiom.** `__getattr__` exists (unit 3.5) but fires only after normal
  lookup fails and is used far less often.
- **`unless`, `until`, and statement modifiers** (`do_it if ready`). Python has a conditional
  expression, `x if c else y`, and nothing else.
- **Implicit return.** Python functions return `None` unless you write `return`.
- **`freeze`.** Immutability in Python is a property of the type, not a flag on an object.
- **Multiple assignment from a method returning several values.** Python returns one tuple, which
  unpacking then destructures — the same effect by a different mechanism.

## Constructs Python has and Ruby does not

- **Decorators** as first-class syntax (unit 2.4). Ruby achieves similar effects with `alias_method`
  or `prepend`, which is more machinery for the same job.
- **Comprehensions** (unit 4.4), which are a distinct syntax rather than a method on a collection.
- **Keyword-only and positional-only parameters**, declared with `*` and `/` (unit 2.2).
- **Multiple inheritance with a defined linearization** (unit 5.3). Ruby's modules achieve the same
  goal by insertion into the ancestor chain.
- **`with` and the context-manager protocol** as a language feature (unit 3.7).
- **Gradual typing** with annotations that tools read (unit 6.3).
- **A global interpreter lock that shapes your concurrency choices** (units 6.4 and 6.5). Ruby's MRI
  has a GVL with the same consequence, so the instinct transfers even if the name does not.

## False friends — same word, different meaning

| Word | In Ruby | In Python |
|---|---|---|
| `yield` | Calls the block the caller passed | Suspends this function and emits a value |
| `self` | Keyword, implicit receiver | Ordinary declared parameter, never implicit |
| `private` | Restricts the receiver; subclasses still override | Convention only; a single underscore means "please don't" |
| `map` | Method on the collection | Built-in function returning a lazy iterator |
| `lambda` | A full object with strict arity | A single-expression function, nothing more |
| `hash` | The dictionary type | The integer used for set and dict placement |
| `module` | A mixin, included into classes | A file of code, imported |
| `raise` | Takes a class and a message | Takes an instantiated exception |
| `class variable` | `@@x`, visibly distinct | An assignment in the class body, visibly identical to a field |
