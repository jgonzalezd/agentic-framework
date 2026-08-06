# Customer Research — mine the language before writing a word

Winning headlines are **mined, not written** (voice-of-customer research / review mining). The hero's job is recognition ("that's me"), not insight ("huh, interesting") — and recognition only happens when a line mirrors something a real customer already feels, in the words they'd use. This file is the mining protocol. Its output is the **language bank** — `customer-language.md` in the output directory — and every angle, hero, and hook downstream must cite a line in it (SKILL.md's hard rule).

## The mining protocol

**Sources, in rank order** (higher ranks win when they conflict):
1. **The founder/user's own words** — interview answers, critique messages, vault context files. First-class voice-of-customer: founders usually built the app for a pain they felt, and their unguarded phrasing is the purest sample you'll get.
2. **App-store reviews of adjacent/competitor apps** — especially 2–4★ reviews, where users state both the pain and what the incumbent gets wrong.
3. **Reddit/forum threads** where the pain is discussed in the wild — the visitor's vocabulary before any marketer touched it.

**Extraction rules:**
- **Verbatim only.** Copy the sentence exactly as written — never a paraphrase posing as a quote. The exact words are the asset; smoothing them destroys it.
- **Tag every quote with its source** — URL, file path, or message reference — so a hook's `Source:` trace can be audited later.
- Classify every quote into one of six bins:

| Bin | What it captures | Example shape |
|---|---|---|
| Pain lines | the problem as felt | "I forget people I truly care about exist." |
| Desired outcomes | the after-state in their words | "I just want to fall asleep without my brain racing." |
| Identity statements | who they want to be ("I want to be someone who…") | being "the friend that I want to be" |
| Triggering moments | the event that sends them looking | "Missed my best friend's birthday. Again." |
| Objections | why they'd hesitate | "I've tried apps like this before." |
| Bad alternative | what they use today instead | "A spreadsheet I update twice a year." |

A bank with fewer than ~3 quotes in a bin the page needs is thin — say so in `strategy.md` and interview the founder to fill the gap (questions below).

## Awareness stage (Schwartz) — what the hero must do first

Classify the target visitor's stage before drafting anything; it dictates the hero's opening move. A problem-aware visitor won't adopt the writer's frame in 5 seconds — they need their problem mirrored in their own words before they'll read another line.

| Stage | Visitor's state | What they need first | Hero's opening move |
|---|---|---|---|
| Unaware | doesn't feel the problem yet | the symptom made visible | lead with a vivid moment or surprising fact, not the product; page runs longer |
| Problem-aware | feels the pain, doesn't know fixes exist | their problem mirrored in their own words ("that's me") | open with the pain line from the bank, then the after-state (PAS) |
| Solution-aware | knows the category, not your app | why this approach wins | lead with outcome + differentiator against the bad alternative |
| Product-aware | knows your app, unconvinced | proof and objection handling | lead with the strongest claim backed by a real number |
| Most aware | ready — just needs the deal | the offer, zero friction | promise restated + store CTA immediately; short page |

## Founder interview (when sources are thin)

Ask as voice-of-customer mining; capture answers verbatim into the bank:
- "What almost stopped you from buying/building this?"
- "Who is this for, and what have they already tried that failed?"
- "Say what the product does in the words you'd use to a friend."
- "Describe the exact moment someone realizes they need this."
- "What would that person type into App Store search or Google?"

## Worked examples — the customer sentence the headline compresses

**Headspace** (headspace.com) — leads with a problem menu in the customer's own words: "Stress less · Sleep soundly · Manage anxiety · Process thoughts · Practice meditation · Start therapy." Hero: "Stress less, sleep better, and feel happier every day…" — with specificity claims like "1,000+ expert-led exercises." In-app onboarding keeps the same register: "Meditation made simple", "Focus on what matters to you", "Learn in just 10 minutes a day" — plain, concrete, small. Compresses the sentence a customer actually says: "I'm stressed and I can't sleep" — not "a mindfulness solution."

**Mesh** (me.sh, personal-CRM category) — hero "Every relationship, remembered." is a compression of its own on-page testimonial: "I forget people I truly care about exist. Not maliciously." Also "Never miss what matters." / "Your network, finally under control." The headline works because a real quote on the same page proves someone feels exactly this.

**Dex** (getdex.com) — "One place for your relationships — impress with thoughtfulness." Pain in customer words: "Manually keeping track of who you've met takes time you don't have." Objections handled in the market's own terms: "Built for people, not sales pipeline" / "Built to be private." Desire as identity: being "the friend that I want to be."

## Core principles (attributed)

- **Mined, not written** (voice-of-customer research / review mining) — the winning headline usually already exists in a review, a forum post, or the founder's own mouth. The job is to find it and compress it, not invent it.
- **Harry Dry** (marketingexamples.com) — clarity over creativity. "Group together reoccurring objections. Use their own words to handle them."
- **Julian Shapiro** (julian.com) — the header test: "If the visitor reads only this text on your page, will they know exactly what you sell?" Specificity: "Groceries delivered in 1 hour" beats "Improve your workflow." Value-prop derivation: start from the bad alternative → state how you're better → turn that into an action statement. The CTA continues the narrative — "Find food", not "Sign up".
