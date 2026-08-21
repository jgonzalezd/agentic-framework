# Positioning — writing for people hiring staff, lead and senior engineers

> Read at **Phase 3**, when choosing the angle. This file decides what the post is *for*, which is upstream of what it says.

---

## What this audience is reading for

Someone hiring at staff or lead level is not evaluating whether the author can build the thing. They assume that. They are looking for 3 signals, in this order:

1. **Judgment under real constraints.** What was traded away, and why. A post that only describes what was built shows execution; a post that names what was rejected shows judgment.
2. **Production scars.** Whether the author has been on the wrong end of a system failing in front of users. This is the signal that separates 15 years from 3, and it cannot be simulated by knowing a framework well.
3. **Honest calibration.** Whether the author knows the difference between what they measured and what they believe. A stated limitation is the single most credible sentence in most technical posts.

They are not reading for framework depth. There is always someone deeper in any given framework, and depth in a tool dates within 2 years.

---

## The rule: lead with the operator, never the framework

Every angle gets checked against this. The post can be *about* a tool, but the argument has to be about a decision.

- Framework lead, weak: "How I built a spec verification linter in Node."
- Operator lead, strong: "A spec that no test references is a spec the code has already drifted away from, so I made that condition fail a build."

The first invites comparison with everyone else who built a linter. The second states a position that a staff engineer can agree or disagree with, which is what makes them keep reading.

---

## The operator facts

Use these when the post needs to establish standing. Use at most 1 or 2, in a subordinate clause, never as a paragraph of credentials.

- 15 years of engineering, all of it at startups, 2 of them acquired.
- Owned SOC 2 Type 2 end to end.
- Ran distributed scraping pipelines at roughly 10M pages per week.
- Migrated a 1.5TB live MySQL database to RDS without downtime.
- Cut an AWS bill by 36%.
- Took disaster recovery from 8 hours at about 70% reliability to under 2 hours at 100%.
- Owned a product roadmap next to a CEO, prioritised from customer interviews.
- Has done customer success, including angry customers on the phone.
- Currently runs a small product studio and shipped 3 products end to end in the last 12 months: an iOS app, a Next.js app and a Rails app.

**The sanctioned line about AI**, when the post touches on working with agents:

> The way I work now is directing AI agents to research, plan and ship, and reviewing all of it against 15 years of knowing what breaks in production.

Say it that way or not at all. The failure mode is a post that reads as though the author is a spectator to their own output. The frame is that the agent changes how fast the first version arrives, and it does not change who is accountable at 2am.

---

## Landmines

- **Never use a term you cannot define.** If the post names a pattern, an algorithm or a standard, the author has to be able to explain it in an interview when asked. Being asked and stumbling costs more than never mentioning it.
- **Always attribute.** A claim from documentation, a study or someone else's post is cited. Stating it as your own knowledge reads as bluffing to anyone who knows where it came from.
- **Never paper over a gap.** If the post touches a technology the author is not deep in, one honest sentence about where the depth actually is, then move. Overclaiming and disowning cost about the same.
- **No architect mode.** 3 paragraphs of general principle, then stop and return to what actually happened. A post that generalises for its second half reads as someone who has not done the specific thing recently.
- **No credential paragraph.** The operator facts appear in passing, attached to a technical point they actually support. A block of background at the top is a résumé, and a post that opens with a résumé gets closed.
- **Never claim adoption you do not have.** "I use this on 2 of my own projects" is a fact. "Teams are using this" with 1 user is the claim that ends the post's credibility if checked.

---

## The recognition test

Every candidate angle at Phase 3 has to answer one question honestly: **would a staff or lead engineer recognise a problem they personally have within the first 3 sentences?**

If the answer is no, the post will be read by people who already work on this exact tool and nobody else. That is a fine outcome for a changelog and a poor one for a post whose job is to make a hiring manager want to talk to the author.

Recognition comes from the specific, not the general. "My specs drifted from my tests" is recognised. "Documentation tends to decay over time" is agreed with and forgotten.

---

**Frozen:** 2026-08-20 from the SmartVault interview-prep document dated 2026-08-06, which is the source of record for these facts. Note that `_context/work-career.md` is an empty template and must never be used as a source. When the operator facts change, update this file by hand.
