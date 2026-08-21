# Question Design — survey craft for the questionnaire flow

Read this only when the chosen flow contains survey questions. Every question must earn its screen; this file defines what "earning it" means.

## 1. What a good onboarding question does

A great question does up to three jobs at once — aim for at least two:

1. **Pain articulation.** The user states their own problem out loud. Each answer makes them think about the problem a little more — by the end of the survey they've walked through their own pain and are primed to want it solved. The survey IS the sales pitch; the app never had to claim anything.
2. **Authority building.** Precise, knowing questions signal expertise. When the app asks exactly the questions a specialist would ask, the user concludes "this app understands my problem" — and believes the eventual plan can deliver.
3. **Data capture.** Answers feed personalization (the plan), segmentation (who converts, who churns — which then sharpens marketing messaging), and attribution.

A question that does none of these — asked out of curiosity or "nice to know" — is drop-off with no payoff. Cut it.

## 2. The pain-quantification battery

The core pattern: make the pain concrete along five axes. Adapt the axes to the domain; each is one single-tap question.

| Axis | Pattern | Why it converts |
|---|---|---|
| **Frequency** | "How often do you <experience the pain>?" | Turns a vague habit into a countable fact |
| **Cost** | "How much do you spend on <the problem> per week/month?" (money, hours, or missed outcomes) | Puts a number on the pain; the paywall price now has an anchor |
| **Affected areas** | "Which areas of your life does this affect most?" (multi-select) | Widens the stakes beyond the immediate symptom |
| **Failed attempts** | "Have you tried to <solve it> before?" / "What have you tried?" | Recalls past failure → openness to a new approach; strongest buyer signal |
| **Trajectory** | "Do you feel it's getting worse over time?" | Urgency: the cost of not acting |

Plus two framing questions that bookend the battery:
- **Goal/motivation (open the survey):** "What brings you here?" / "What's your main goal?" — easy, self-defining, and the primary segmentation key.
- **Readiness/commitment (close it):** "How committed are you to <goal> right now?" — a self-declared commitment right before the plan reveal (people act consistently with what they just declared).

## 3. Ordering: intensity escalation

Rank every question's intensity (1 = trivial tap, 5 = emotionally heavy or very personal) and **sort ascending**. Push the harder, more intense questions toward the end: by then the user has invested time and is committed to finishing, so completion holds — the same question that bounces users on screen 2 gets answered on screen 12. Demographic basics can go early (easy) or late (bundled with account creation); emotionally heavy questions never open the survey.

## 4. Dual-use data mapping

Tag every question with what its answer feeds. Both tags on one question is the ideal.

- **`personalization`** — visibly shapes the plan/first experience. The plan reveal must reference these back ("Because you're aiming for <goal> and have <constraint>…"). If an answer never resurfaces, the personalization promise is broken.
- **`segmentation` / attribution** — powers marketing and product analytics:
  - **Age brackets: use the exact brackets of the ad platforms you'll buy on** (e.g. 18–24 / 25–34 / 35–44 / 45–54 / 55+), so cohorts map 1:1 to ad targeting.
  - **"How did you hear about us?"** — self-reported attribution; in a post-tracking-consent world this is often the most reliable channel signal you get, and it cross-checks what the ad platforms claim.
  - Pain-severity answers → conversion analysis ("users reporting daily pain convert 3×") → sharper ad messaging and pricing decisions.

## 5. Borrow validated instruments

Before inventing questions, check whether the domain has scientifically validated survey instruments (clinical screeners, national health/behavior surveys, standardized assessments — e.g. dependence scales, sleep-quality indices, physical-activity questionnaires). Adapt their wording. Benefits: the questions are proven to measure what they claim, they sound authoritative because they *are* the questions professionals ask, and the collected data is meaningful beyond the app. If the domain warrants it, flag "consult a behavioral scientist / domain expert to review the battery" as an open task in `strategy.md` — top apps do exactly this.

## 6. Question-bank spec format

Specify every question in `screens.md` as:

```
Q<n>. <question text>
  Options: <opt 1> | <opt 2> | <opt 3> | <opt 4>   (single-tap; multi-select if flagged)
  Data use: personalization | segmentation | both
  Intensity: 1–5
  Feeds: <where the answer resurfaces — plan section, cohort report, ad audience>
```

**Worked examples (illustrative, three domains):**

- Sleep app — "How many nights per week do you struggle to fall asleep?" · `0–1 | 2–3 | 4–5 | Almost every night` · both · intensity 2 · feeds plan-intensity + severity cohort
- Budgeting app — "Have you tried budgeting before?" · `Never | Apps that didn't stick | Spreadsheets | I budget but overspend anyway` · both · intensity 3 · feeds plan approach + "failed-before" segment (high-convert)
- Screen-time app — "Which area of your life does your phone use affect most?" · `Sleep | Focus at work | Time with family | How I feel about myself` · both · intensity 4 · feeds plan framing + messaging angle per segment

## 7. Answer-option craft

- **Mutually exclusive, collectively covering** — every user must find exactly one honest tap (add "Not sure" only where genuine).
- **Self-recognizable** — options phrased in the user's inner voice ("I start strong, then fall off") beat clinical scales ("moderate adherence difficulty").
- **No dead ends** — every option must route somewhere valid in the plan. If an answer would mean "this app isn't for you", either cut the question or design the honest off-ramp deliberately.
- **3–5 options** — fewer feels crude, more slows the tap.
- **No leading fake-outs** — options can frame, but an answer set engineered to force one choice reads as manipulation and burns the authority the survey just built.
