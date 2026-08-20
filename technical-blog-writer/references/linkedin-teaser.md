# LinkedIn Teaser

> Read at **Phase 7**. The teaser is a separate piece of writing, not a compressed post. It runs the mechanical sweep and the fingerprint check, and it skips the blind critic.

---

## The constraints

- **Under 1,300 characters.** Longer posts get truncated with a "see more" and the truncation point is around 200 characters, so the first 2 lines carry the whole decision.
- **The first line has to survive truncation.** It states the concrete result or the concrete problem. No wind-up, no greeting, no "I'm excited to share".
- **3 to 5 short paragraphs**, single-line breaks between them. LinkedIn renders dense paragraphs as a wall and readers leave.
- **0 to 3 hashtags**, at the end, lowercase, real ones. More than 3 reads as reach-farming.
- **No emojis. No exclamation marks. No bullet-point lists made of arrows or check marks.**
- **Ends with a link line** to the post, written as a placeholder the user fills in: `<post URL>`.

---

## The shape

1. **The hook.** The single strongest concrete fact from the truth ledger, stated flat. A number, a specific failure, or a decision that sounds wrong until explained.
2. **The problem in 2 or 3 sentences.** Enough for a reader to recognise it as their own.
3. **What you did about it**, in 1 short paragraph, without walking through the implementation.
4. **The honest limit.** One line naming the sample size, the scope or what is still unknown. This is the line that makes the rest believable, and it is the line most people cut.
5. **The link.**

---

## The register

The same voice as the post. LinkedIn pulls hard toward a house style — the one-line paragraphs building to a lesson, the humble-brag framing, the closing question to farm comments. All of it is banned here. A teaser that adopts LinkedIn's register undoes the point of a post that avoided it.

Specifically banned in teasers, in addition to everything in `anti-slop.md`:

- "I'm excited to share", "Thrilled to announce", "Proud to share".
- A closing question asking for opinions.
- "Here's what I learned:" followed by a list.
- Any sentence beginning "In a world where".
- Numbered lessons.
- The single-sentence paragraph used repeatedly for rhythm.

---

## Checks before delivering

Run the grep battery from `anti-slop.md` against the teaser file, run the fingerprint count by hand, and count the characters:

```bash
wc -m "$TEASER"
```

Report the character count in the deliverable.

---

## Output

Write to `_teasers/YYYY-MM-DD-<slug>.md` in the blog repository, and print the full text in the deliverable message so the user can copy it directly without opening the file.

The file gets no frontmatter. It is raw text meant to be pasted.
