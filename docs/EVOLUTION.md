# EVOLUTION

Dated log of process changes and the evidence behind each.

## Why this file carries the whole record

Every consumer of this repo is live on the working tree. There is no install step between saving a
file here and an agent in another project reading it, so there is no release boundary to hang a
changelog on. `plugin.json` still carries a version, but only so that a future machine which cannot
share this disk gets a meaningful number from a plugin install. On this machine that number means
nothing.

So the discipline is: **write an entry here at the change, not at a release.** An entry names the
change and the evidence that motivated it. A rule with no incident behind it is decoration.

## The promotion policy

An agent, command, or rule is promoted the first time a **second** project needs it. Not the first
time it looks generic. The incident or case that motivated the promotion is logged beside it.

Two things this policy is protecting against, in both directions:

- **Promoting too early.** A rule written from one project's experience and promoted before a
  second project needed it reaches sessions where it is false. The cost lands on a project that
  never asked for it and cannot see where the rule came from.
- **Promoting too late.** The rule stays in one project, the other project rediscovers the same
  constraint the hard way, and the two write incompatible versions of it. That is the failure this
  whole repository was created to end.

`rules/RESIDUE.md` is the other half of the policy: it records what was deliberately **not**
promoted, with the reason. Without it, a reader who cannot find a rule cannot tell a deliberate
omission from an oversight.

---

## 2026-08-21 — the same project worked from two machines had two memories, and neither saw the other

**Change.** `scripts/wire.sh` gains two memory sections and `hooks/memory-push.sh` is new. The
general store: a home-directory session's memory directory becomes a symlink into a clone of the
new private `agent-memory` repo, and a `SessionEnd` hook commits and pushes that clone when it is
dirty. Per-project memory: `memory-map.txt` lists private repos, and for each one `wire.sh` writes
`autoMemoryDirectory` into that repo's `.claude/settings.local.json` pointing at
`<repo>/.claude/memory/`, creating the directory and migrating any machine-local memory into it.

**Evidence.** Auto memory is machine-local and keyed per project directory. The outperformer
devcontainer's memory recorded a real policy — never deploy a feature branch to staging — and it
was reachable only from inside that container. No host session and no other machine could see it,
and it took a read-only mount of the Docker volume to get it out. Claude Code has no native
cross-machine sync; `anthropics/claude-code` issue 56793 requests it and every published workaround
syncs the files through git.

**What was rejected.** The hosted memory layers, Mem0 and Zep and MemoryPlugin, and the
claude-memsync daemon. All add infrastructure to a problem that a repo already solves, and the
files stay greppable and importable into any of them later. Auto-committing project memory, because
that interleaves agent commits with the engineer's own work in a project's history; project memory
rides the normal commit flow instead, and the trade is that it reaches the other machine only when
the project work does. A single central repo holding every project's memory, rejected because
memory in the project repo travels with its branches, its remote and its container mount for free.

**Private repos only.** Several repos on this account are public. Repo-resident memory in one of
them publishes the agent's notes about the engineer, so `memory-map.txt` says private-only and the
three listed were checked with `gh repo view` on 2026-08-21.

---

## 2026-08-21 — the dependency workflow existed as one project's file and two unwritten habits

**Change.** `skills/safe-dependency-install/` is new and owns the whole third-party dependency
workflow in three gates: identity, cost, then API. `CookingApp-code/.agent/ai-development-protocol.md`
and the copies in `outperformer-code/.cursor/rules/` and `outperformer-staging/.cursor/rules/`
become pointers to it.

**Evidence.** Three things converged. The written half, the library-integration protocol, existed
byte-identical in three repos, which is the promotion trigger twice over. The package-name
verification habit existed only as something the engineer asked for in conversation and was written
down nowhere. And the cost half was paid for on 2026-08-21: a `brew install` declared one
dependency, pulled a 40-package closure, found several packages with no usable bottle because the
machine's Command Line Tools were older than the bottles required, and printed "building from
source" only after 535 MB had downloaded. The session noted the change and kept waiting, on sunk
cost, while the fast path — an already-cached archive and a JDK already on the machine — was
available throughout.

**What was rejected.** Three separate skills, because the three checks fire on the same trigger and
a split lets one of them be skipped. Leaving the protocol project-local, which is what produced
three drifting copies. The trade of one skill: a longer file that loads whole.

---

## 2026-08-21 — one skill needed by two tools in one repo was copied and kept in step by hand

**Change.** `outperformer-code/.agents/skills/` becomes the single tool-neutral source for that
repo's skills, and `.claude/skills/` and `.cursor/skills/` are relative symlinks into it. The same
pattern is documented in the README as the project-level convention.
`landing-page/.claude/skills/seo-visibility-expert`, which was gitignored, is committed.
`skill-orchestrator` is promoted here and metronome-core keeps a symlink.

**Evidence.** That repo had four skill surfaces. Five skills sat in `.cursor/skills/` where only
Cursor saw them; `tdd` sat in `.agents/skills/` where neither tool looked; `seo-visibility-expert`
sat in a gitignored directory as the only copy on earth; and `landing-page/.claude/skills/orchestrator`
was metronome-core's `skill-orchestrator` with one line changed, the `name:` field. After the
change, a Claude session in that repo discovered all seven skills, including `tdd` and
`seo-visibility-expert` for the first time.

**What was rejected.** Retiring Cursor, which is still in use. Leaving Cursor as-is, which keeps the
copy-and-sync. A pre-commit copy-sync from `.agents/skills/` to `.cursor/skills/`, held as the
fallback if Cursor turns out not to follow the symlinks; the forum thread records project-level
symlinks working from v2.4.21 and this Mac runs 3.12.10.

**The promotion policy took a deliberate exception here.** The nine Expo skills were promoted from
CookingApp-code although no second project needs them yet. The justification is not the second-project
trigger. It is the owner's instruction to consolidate that project's skills, plus a load check: Claude
Code discovers skills from `~/.claude/skills` and a project's `.claude/skills` only, CookingApp-code
has no `.claude` directory, so nothing loaded them in Claude and only Cursor loaded them, in one repo.

---

## 2026-08-21 — a committed absolute path is right in one environment and wrong in the rest

**Change.** Nothing in the repo hardcodes an environment-specific absolute path any more.
`project-skills.txt` entries use a `${WS}` token that `wire.sh` substitutes with the parent of
`--root`, overridable with a new `--workspace` flag. `wire.sh --state` and `snapshot.sh --dest`
both default to `<workspace>/.claude-state` instead of the constant `/workspace/.claude-state`;
`snapshot.sh` derives it from `BASH_SOURCE`. `commands/briefing.md` resolved `rules/reporting.md`
through the literal `/workspace/agentic-framework/`, and now resolves the framework root from its
own symlink with `readlink -f ~/.claude/commands/briefing.md`.

**Evidence.** Both `project-skills.txt` entries recorded container-only paths,
`/workspace/mms-repo/...` and `/workspace/youtube-metronome/...`. On the host those repos live
under `/Users/main/Git-Repos/CodeBases/JS-PSQL-Redis/`, so `wire.sh` reported both as MISSING and
neither `plan-orchestrator` nor `skill-orchestrator` was ever linked on this Mac. The same constant
sent `snapshot.sh` at a path that does not exist on the host, which is why `wire.sh`'s settings
restore had been printing SKIP and three unrecorded skills sat in the snapshot unrestored. After
the change both project skills resolve on the host and `snapshot.sh` writes into the existing
`/Users/main/Git-Repos/CodeBases/JS-PSQL-Redis/.claude-state/`.

**What was rejected.** A per-environment copy of `project-skills.txt`, which reintroduces the
divergence this repo exists to end. Making `--root` imply the workspace with no override, rejected
because the iOS Mac may clone the framework somewhere that is not beside its projects; `--workspace`
covers that without a second file. The trade of `${WS}`: the manifest is no longer a list of paths
you can paste into `ls`, in exchange for one committed file that resolves in every environment.

---

## 2026-08-21 — two skill repos meant two installers, and two environments got neither

**Change.** The `claude-skills` repo is merged into this one by `git subtree`, so its seven skills
now live at `skills/`: `interview-drilling`, `landing-page-designer`, `onboarding-builder`,
`pricing-strategist`, `product-describer`, `python-bootcamp`, `technical-blog-writer`. Its README
folded into this repo's README as a full skill table, and its `*/state/` ignore became
`skills/*/state/`. `~/.claude/skills` was a clone of that repo; it is now a plain directory that
`wire.sh` fills with symlinks. Two host-only assets moved in at the same time:
`commands/_post.md` and `hooks/block-icloud-writes.sh`.

**Evidence.** Skills reached the four environments through three unrelated channels. This repo
wired 5 skills by symlink, the `claude-skills` clone owned 7 more, and `~/.agents/skills` owned
`find-skills` and `koeficator`. The outperformer devcontainer persists `~/.claude` in a Docker
named volume with no connection to either repo, so on 2026-08-21 that container had none of the
shared skills, and the second Mac had nothing at all. `_post.md` and `block-icloud-writes.sh`
existed only in `~/.claude` on this Mac, so no container and no second machine had the iCloud
write protection that exists because of a real data-loss incident.

**What was rejected.** Keeping two repos with unified wiring, which leaves two clone steps on every
new machine. Merging in the other direction, which would have put the process rules inside a repo
named for skills. Plugin distribution, rejected earlier and for the reason the README records: a
plugin cache path embeds the version, so every bump breaks a rules import.

**One thing the merge does not give you.** `git log --follow skills/<name>/SKILL.md` stops at the
subtree commit. The pre-merge commits are reachable — `b37495e` is an ancestor of this history —
but they record the file at its old path with no prefix, so `--follow` does not cross the graft.
Walk the pre-merge history with `git log <pre-merge sha> -- <old path>`, for example
`git log 511a2c6 -- interview-drilling/SKILL.md`.

---

## 2026-08-21 — one hook registrar could only ever register one hook

**Change.** `scripts/wire.sh` section 3 becomes `register_hook (event, matcher, command,
stale-key)` and is called twice. It registers `rename-plans.py` on `Stop` as before, and
`block-icloud-writes.sh` on `PreToolUse` with matcher `.*`. Before this the event, the absence of
a matcher, and the stale-registration key were all hardcoded into one Python heredoc.

**Evidence.** Adopting `block-icloud-writes.sh` into the framework was blocked by the registrar's
shape: there was nowhere to put a second hook without copying the whole block. The hook greps its
stdin and exits 0 when no iCloud path appears, so registering it against every tool costs one grep
per call and it is inert on any machine without iCloud Drive.

**What was rejected.** Symlinking hooks into `~/.claude/hooks/` and registering by that path, which
adds a layer that resolves differently per environment for no gain: both hooks read only stdin,
`HOME` and cwd. The trade of matcher `.*`: the hook runs on reads and searches too, not only
writes, in exchange for never missing a write tool that gets added later.

---

## 2026-08-18 — a rename hook that fires while the file's session is alive breaks that session

**Change.** `hooks/rename-plans.py` gains a grace period. A plan file modified within the last six
hours is skipped and left out of the seen-state, so a later Stop renames it once the writing
session has gone quiet. Before this, every unseen plan file was renamed on the very first Stop
after it appeared, including the plan the still-running session had just created.

**Evidence.** On 2026-08-18 the hook renamed the active session's plan at end of turn. The harness
tracks a plan by its original path, so `/plan view` answered "no plan found" and a cold-context
review subagent could not read the file it was pointed at. The user had to ask where the plan went.

**What was rejected.** Identifying the owning session from the hook's stdin JSON, because the Stop
payload carries no plan-file path, so ownership cannot be established without parsing transcripts.
The trade of the grace period: a finished session's plan keeps its random slug for up to six hours,
and a session idle longer than six hours can still be bitten. Reversible by changing one constant.

---

## 2026-08-18 — an open item that names the work but not the decision cannot be decided

**Change.** `rules/reporting.md` gains rule 25: every entry in a report's **Open** section is a
decision briefing. The heading is the decision phrased as a question. Six fields follow: What this
is, Why it's open, Product impact, Options, If you don't decide, My call. A decision sheet of
reply tokens closes the section. The shape list's sixth item said "what needs the reader" and now
adds "Every entry follows rule 25." A new command, `commands/briefing.md`, applies the rule to a
report already in conversation, recomputing every number from the repo before rendering.

**Evidence.** A metronome-core report ended with: "Write ~18 bindings for tests that already
exist... Or write tests for the ~6 specs at shipped with nothing asserting them... doing the
second first is defensible." The reader could not tell, in their words, "what the issue is about,
why it exist, the impact on the product, the blast radious". The item cost a full clarification
session that the six fields would have made unnecessary.

**What was rejected.** A separate `rules/open-items.md`, which needs a new CLAUDE.md import line
and a `wire.sh` change, and creates a second home for reporting rules. The trade of keeping it in
`reporting.md` is that the file grows by one long rule. Also rejected: briefings without a
recommendation. The reader chose "Recommendation + reasoning" explicitly, so rule 25 carves out
rule 4's "do not pre-decide" for one labeled opinion, placed after both sides are on the page.

---

## 2026-08-18 — a skill name that two projects both claim is not a name

**Change.** The two colliding `orchestrator` skills were renamed for the input each one takes.
`mms-repo/mmn-project/.claude/skills/orchestrator` is now `plan-orchestrator`; it reads a written
plan file and shards it into work packages for domain-scoped subagents.
`youtube-metronome/metronome-core/.claude/skills/orchestrator` is now `skill-orchestrator`; it takes
a request and delegates it across that project's specialist skills, writing a new skill when one is
missing. `project-skills.txt` holds both lines, where it previously held one and a comment
explaining which skill was excluded and why.

**Evidence.** The entry below records the collision and parked it, on the grounds that making the
second skill global would need a rename first. Parking it left the manifest carrying a decision
nobody could act on: metronome-core's orchestrator was reachable only from metronome-core, and the
comment saying so was the only record. The names were also uninformative in both directions —
neither said what its skill orchestrates, so the collision was not obvious from either name.

**What was rejected.** Naming them for their project, `mmn-orchestrator` and
`metronome-orchestrator`. It resolves the collision and reads as an address rather than a
capability. A third project wanting plan execution would have to either reuse a name carrying
another project's label or write a third copy. The trade is that the project a skill belongs to is
no longer visible in its name, and `project-skills.txt` is now the only place that mapping is
written down.

---

## 2026-08-18 — a wiring step done by hand is a wiring step that is missed

**Change.** `wire.sh` now links project-scoped skills as well as framework ones, from a committed
list at `project-skills.txt`. Before this, `mms-repo/CLAUDE.md` and `mmn-project/CLAUDE.md` both
said to symlink a project skill by hand in the same turn you create it. Both now point at the
manifest. `docs/INSTALL.md` gains the step as item 2.

**Evidence.** `orchestrator` was documented as needing that hand-made symlink and never got one.
`~/.claude/skills/orchestrator` did not exist on 2026-08-18, checked directly. It went unnoticed
because a session whose working directory is the owning project reads that project's
`.claude/skills/` on its own, so the skill worked in the one place its absence was cheapest and
existed nowhere else. A hand-made symlink would not have survived anyway: `~/.claude` is not a host
bind mount, so a container rebuild deletes every link.

**What was rejected.** A directory sweep over `<workspace>/*/.claude/skills/*`, which needs no list
and cannot go stale. Its dry run is why it was rejected. `mms-repo/mmn-project` and
`youtube-metronome/metronome-core` both ship a skill named `orchestrator` — different files, 278
lines against 370, each naming its own project's layout — and the sweep repointed the link to
whichever it reached last, printing `repoint` and nothing else. It also pulled in seven
metronome-core skills nobody had asked to make global. The trade: the manifest needs a line added
when a skill is created, and a scan would not. What that buys is that a name collision is a written
decision instead of an ordering accident.

---

## 2026-08-18 — the framework repo is created

**Change.** The reporting rules, the planning rules, four skills, one command, one hook and four
template sets moved out of two project repositories into this one. Three environments now consume
one working tree by symlink and `@`-import.

**Evidence.** The process lived per project, so an agent in one repo did not inherit the other's
rules. A plan written in the metronome project used an analogy that the mmn project's reporting
rules ban. Nothing in either repository would have caught it, because neither repository knew about
the other's rules.

**What was rejected.** A plugin install on each machine. It was rejected because all three
environments sit on the same disk, so an install step would add a release boundary with nothing on
the other side of it. The trade is that an unfinished edit here is live everywhere immediately, and
that is accepted deliberately: one engineer, one session at a time. It would not be acceptable with
a second person.

---

## 2026-08-16 — a check that did not answer is not a check that found nothing

**Change.** Three writing rules were added to the reporting contract, along with a shell library
that refuses an error reply, a test that blocks a merge, and a review performed by a subagent
outside the session that wrote the artifact. The rules now in `rules/reporting.md`:

- An error is not an empty result. A call that failed and a call that returned nothing are
  different states, and the difference must survive into the report.
- A claim written into a file carries the check that produced it: the date, the command or console
  that answered, and the account or environment it was read on.
- Evidence is reported with the decision it changes. A result that changes nothing is cut.

**Evidence.** A session reported "no webhook endpoint is registered on the CI account" as a checked
fact. The command behind it had returned a 403 permission error. The code counted the reply's `data`
field, found it absent, defaulted to empty, and read zero. "Nobody is allowed to look" was recorded
as "there is nothing there". The false claim reached three files before it was caught.

The exit code did not catch it either: a restricted key's 403 exits 0, while an invalid key exits 1.

**Why it is here rather than in one project.** The defect is in how a claim is checked and written
down. Nothing about it is specific to one vendor or one codebase. The full account stays in that
project's repository at `mms-repo/docs/2026-08-16-guardrails-handover.md`, because the account names
accounts, board rows and commits that only exist there.

---

## Entry format

```
## YYYY-MM-DD — the finding, stated as a finding

**Change.** What the rule, skill or template now says, and what it said before.

**Evidence.** The incident, case or measurement. Name what it cost.

**What was rejected.** The alternative, and what choosing against it traded.
```

An entry with no evidence section is not finished. If nothing went wrong and nothing was measured,
the change is a preference, and a preference does not need a shared rule.
