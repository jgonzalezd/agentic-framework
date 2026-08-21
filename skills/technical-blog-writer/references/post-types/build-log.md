# Build Log

> "I built this thing, here is the constraint that shaped it, here is what happened when I used it."

---

## Choose this when

The subject is something the author built and has since used. There is a repository, a commit history, and at least 1 recorded result from running it on real work.

Choose this over `war-story` when the interesting part is the design constraint rather than a specific failure. Choose it over `decision-analysis` when there was no real fork in the road, only a problem and a response to it.

## Do not choose this when

- The thing was built but never used. That post has no evidence section and turns into a feature list.
- The build was uneventful and the interesting part was a single bug. Use `war-story`.
- The author is still mid-build. A post about something unfinished cannot honour the "what it does not do" section, because the answer is "most of it, so far".

## Required ledger rows

1. Dated commits with hashes, so the timeline is real.
2. Sizes of the load-bearing files, so the reader knows what scale of thing this is.
3. At least 1 measured result from running it on real work, **or** an explicit row stating that nothing has been measured. The second is allowed and the post then says so plainly; what is not allowed is a build log that implies a result it does not have.
4. At least 1 limitation row: no tests, a sample of 1, an untested path, a case it does not handle.

## Anatomy

1. **The problem as it was lived.** A specific moment, not the category. Mandatory.
2. **The constraint that shaped it.** The thing that ruled out the obvious approach: time, dependencies, an existing system, a habit that had to survive. This section carries the argument, and a build log without it is a README.
3. **What got built.** Sizes, dates, the 1 or 2 mechanisms that matter. Not every feature. Mandatory.
4. **The load-bearing detail.** The single design decision the whole thing rests on, explained properly, with code. Mandatory.
5. **What it does not do.** Mandatory, no exceptions. Limits, scope, sample size.
6. **What happened when I used it.** The measured result, with its source and its sample. If nothing was measured, this section says exactly that in 1 sentence and the post ends sooner.

## The thesis shape

A position about how this class of problem should be handled, which the build embodies.

Example: "A cache that cannot tell you why it evicted something is a cache you will eventually stop trusting, so eviction reasons should be a first-class output rather than a debug log line."

## Failure mode

**Feature-list drift.** The post starts as an argument and becomes an enumeration, usually beginning at the phrase "it also supports". The check at Phase 4.5: count the features described in more than 1 sentence. More than 2 and the post has drifted; keep the ones the thesis needs and compress the rest into a single sentence pointing at the README.

Second failure: **implied results.** Phrases like "it has made my specs much more reliable" with no measurement behind them. Either a ledger row supports it or it is cut.

## Length

700 to 1,400 words. The load-bearing detail section is what earns the upper end; everything else compresses.
