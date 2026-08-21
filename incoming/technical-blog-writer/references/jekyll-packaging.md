# Jekyll Packaging

> Read at **Phase 6**. The blog repository is the authority and this file is a mirror of it, so verify before writing: read the newest file in `_posts/` and confirm the frontmatter shape below still matches.

---

## The repository

`~/Git-Repos/CodeBases/Ruby/jgonzalezd.github.io` — Jekyll with the Chirpy theme, published through GitHub Pages.

## Filename

`_posts/YYYY-MM-DD-<slug>.md`

The slug is lowercase and hyphenated, derived from the title but shortened. Aim for 3 to 6 words. Check `_posts/` for an existing post with the same date or a near-identical slug before writing.

## Frontmatter

```yaml
---
layout: post
title: The exact title, sentence case, no trailing period
date: YYYY-MM-DD HH:MM +0000
categories:
- Software Engineering
- AI Engineering
tags:
- lowercase-kebab
- one-concept-each
---
```

- `categories` — 1 to 3, title case. Reuse existing ones. The ones already in the repository include Software Engineering, AI Engineering, Developer Tools, Workflows, Prompting, Ruby On Rails, Startup, Philosophy, Personal Knowledge Management.
- `tags` — 4 to 8, lowercase kebab case, one concept each. Reuse existing tags where they fit; a new tag that appears once is a dead tag.
- `date` — include a plausible time and the `+0000` offset. It controls ordering when 2 posts share a day.

## Body

The body starts immediately after the frontmatter, with a paragraph rather than a heading. Do not repeat the title as an `# H1`; the layout renders it.

Headings inside the body start at `##`.

An optional bolded `**tldr;**` block after the opening paragraph appears in some posts and is not a convention. Use it only when the post is long and its result can be stated in 2 lines.

## Images

Only if real images exist. The convention is one directory per post:

```
assets/img/<slug>/<name>.png
```

referenced as:

```markdown
![Alt text describing what to look at](/assets/img/<slug>/<name>.png){: width="750" }
```

`width="750"` for full-width screenshots, `width="250"` for small ones. Alt text says what the reader should notice, not what the file is.

Never invent an image reference. A post that links a screenshot that does not exist ships a broken image.

## Code blocks

Fenced, with a language tag. Real code and real output only.

## Links

Inline markdown links. Link the repository being written about at the point where the reader would want it, which is usually right after the first description of what it does, and again at the end.

---

## Hard rules

- **Write files. Run no git commands.** Not `add`, not `commit`, not `push`, not `checkout`. The user reviews and ships.
- **Never modify an existing post** unless the mode is `audit` and the user named that file.
- **Never write anywhere except** `_posts/`, `_teasers/` and `assets/img/<slug>/`.
- **Do not touch `_config.yml`**, the theme, or any layout.

`_teasers/` is a directory whose name starts with an underscore, so Jekyll does not build it and nothing in it is published. It is a staging area for text the user pastes elsewhere.

---

**Mirrored:** 2026-08-20, verified against 18 posts in the repository. Re-verify against the newest post on each run.
