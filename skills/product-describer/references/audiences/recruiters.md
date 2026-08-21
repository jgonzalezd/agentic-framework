# Audience Pack — Recruiters

## What they're actually buying

**Evidence, not a product.** A recruiter reading a project description is not going to use the thing and is not investing money in it. They are pattern-matching a builder against a role — checking whether this person can plausibly do the job a hiring manager described to them, faster than reading a resume line by line. The product is the exhibit; the candidate is what's actually being evaluated.

This inverts both other packs. Customers ask "does this fix my problem." Investors ask "does this become a big business." Recruiters ask a third question entirely: **"can I forward this person to my hiring manager and look good for having found them?"** That means the description has to answer, in order: *is this real, what did they actually do, and does it match what we're hiring for* — not *is this a good business* and not *is this a good product to use*.

Recruiters are usually **time-boxed and skimming** — seconds per candidate, often between other profiles, frequently reading on a phone or in an inbox. Many are **not deeply technical**: they can recognize a live URL, a stack name, a scope of ownership, and a number, but a paragraph of architecture reasoning is wasted on them (and if it reaches a hiring manager, it gets reread anyway — so it still shouldn't be the lede). The default posture is **skeptical of self-report** — claims of impact without a way to verify them are the norm they're filtering against, so anything checkable outranks anything asserted.

---

## Section skeleton

**1. Headline** — one line: what this is, and the builder's role in it. Skimmable in an inbox. Names the person's function (built, shipped, operates) not just the product's function.

**2. The scope** — what exists, who built it, and over what timeframe. This is the section that separates "real, owned work" from "a bootcamp project" or "a team effort padded into a solo credit." State team size honestly — solo is a *feature* here, not something to soften.

**3. What it demonstrates** — the specific, checkable competencies this proves, named plainly (e.g., shipped a production system end-to-end, owns product decisions under ambiguity, works across the full stack, runs a real engineering process without oversight). Tie each to something a job req actually screens for — this is the section doing the actual matching work.

**4. How it was built** — enough process and technical signal for a technical reader to independently verify competence: stack, a real architectural decision and the trade-off behind it, how the work is organized (specs, decisions, instrumentation). Not a tech deep-dive — one or two concrete choices beat a full inventory.

**5. Evidence it's real** — the live link, plus any honestly-sourced usage signal (real users, real engagement, real timeline of shipped work). This is the section a skeptical recruiter actually clicks. If a number isn't independently verified, say so rather than presenting it as settled.

**6. What's being looked for** — role type, seniority, and what kind of work the candidate wants next. Recruiters need this to route the profile to the right req; omitting it wastes the exhibit.

Sections 1, 2, 5 are load-bearing and should never be cut. 3 and 4 can compress into fewer, denser lines under space pressure. 6 can be handled outside the description itself (a resume header, a portfolio bio) if the description is being embedded somewhere that already carries that context — but it must appear somewhere in the handoff, or the strongest exhibit in the world routes to no req at all.

---

## Register

- **First person, active voice.** "I built," "I shipped," "I run this as" — the candidate is the subject, not the product. Third person reads like a press release and buries the person being evaluated.
- **Short, declarative, skimmable.** Recruiters read in seconds; a sentence that needs rereading loses the slot. Bullets over paragraphs wherever the content allows it.
- **Specific over impressive-sounding.** A named architectural decision ("scheduled the audio with look-ahead instead of setInterval to kill timing drift") outranks an adjective ("robust," "scalable") every time — the former is checkable, the latter is filler every profile has.
- **Confident, not salesy.** State what was done plainly. No exclamation marks, no "passionate about," no "results-driven" — that register reads as filling space where evidence should be.
- **Numbers stated with their source or their honesty caveat attached** — "~470 new users/month (self-reported, not yet independently verified)" is stronger than a bare number, because it survives the recruiter's skepticism instead of triggering it.

---

## Disqualifiers — instant loss

- **Resume-speak with no referent**: "results-driven," "team player," "passionate about clean code" — phrases that could describe anyone and therefore describe no one.
- **Scope inflation or deflation**: claiming a team effort as solo work, or burying solo ownership in passive voice ("the product was built") so it's unclear who did what. Both cost trust the moment a hiring manager asks a follow-up question.
- **Business-pitch bleed**: TAM, monetization roadmap, growth projections. A recruiter does not care whether this becomes a business — that's an investor's question wearing the wrong audience's clothes.
- **User-benefit bleed**: describing what it's like to use the product instead of what it took to build it. That's the customer pack's job, not this one's.
- **No way to verify.** No live link, no repo, nothing a skeptical reader can click in ten seconds. An unverifiable claim is worse than no claim.
- **Invented numbers or invented usage/social proof** — the global rule, and especially costly here: a recruiter who can't verify a number simply discounts the whole profile, not just that line.

---

## Failure modes to watch for

**The resume ported into prose.** A dry restatement of a bullet list ("Built with Next.js, TypeScript, implemented i18n, SEO, analytics") with no story of ownership or decision-making behind it. Test: read it aloud — does it sound like a cover-letter cliché, or does it sound like someone describing a real thing they made choices about?

**Investor bleed.** Market size, growth model, revenue projections creeping in because the founder-brain reflex is to pitch the business. Test: strip any sentence that only matters to someone deciding whether to fund this — if the sentence goes, and nothing about the candidate's competence is lost, it didn't belong.

**Customer bleed.** Describing the product's feel-good user experience instead of the builder's demonstrated skill. Test: does this sentence answer "should I advance this candidate," or does it answer "should I use this app"? Only the first belongs here.

**Undersold scope.** Modesty or habit produces "worked on a metronome app" for someone who owns product, engineering, SEO, analytics, and monetization decisions end to end. Test: could a reader tell, from this paragraph alone, whether this was a 10-person team or one person wearing every hat? If not, rewrite until they can.

**Unverifiable claims.** A number, a user count, a "traction" line with nothing behind it a recruiter can click or independently sanity-check. Test: for every factual claim, ask "if a skeptical hiring manager tried to confirm this in two minutes, could they?"

---

## Worked example

*Illustrative only — never a template. The fictional product below must never appear in a deliverable.*

**Product:** *Sundial* — sleep planning for night-shift workers. Built solo, live, pre-revenue.

**Resume-speak (wrong):**
> Sundial is a results-driven sleep-optimization platform built with a modern full-stack architecture. Passionate about solving real problems for shift workers through data-driven scheduling algorithms.

Nothing here is checkable. "Results-driven," "modern," "data-driven" describe every profile a recruiter has read this week. There's no scope, no link, no way to tell if one person or ten built it.

**Evidence-first (right):**

> **Headline:** I designed, built, and operate Sundial, a live scheduling tool for night-shift workers — solo, from idea to production.
>
> **Scope:** One person, roughly [N months — state the real span]. Product decisions, engineering, and the initial rollout to the first users were all mine; no team, no cofounder.
>
> **What it demonstrates:** Shipped a production system end-to-end without oversight — architecture, data model, and UI. Made and owns product-scope calls under ambiguity (what to build first when nothing about the problem was pre-specified). Runs on a real engineering process, not one-off code — see below.
>
> **How it was built:** [stack — name it]. The one decision worth knowing: shift data comes from roster APIs rather than manual entry, because the earlier manual-entry version had near-zero completion — a real trade-off made after watching real usage fail, not a spec decision made in advance.
>
> **Evidence it's real:** Live at [URL]. [N — state honestly, flag if self-reported] users as of [date]; [any usage signal, with its source and confidence level attached].
>
> **What I'm looking for:** [role type / seniority / what kind of work comes next].

Note what changed: every sentence in the right version is either checkable (a link, a number with its source) or specific enough to be checked (a named trade-off a technical reader could interrogate). Nothing describes the business Sundial could become, and nothing describes what it feels like to use it — both were disqualifying bleed from the other two packs. What's left is exactly what a recruiter is filtering for: is this real, what did this person actually do, and does it match the req.
