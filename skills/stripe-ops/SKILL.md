---
name: stripe-ops
description: Hard-won Stripe operational constraints. Use BEFORE provisioning a Stripe sandbox, wiring Stripe into CI, driving test clocks, creating webhook endpoints or portal configurations, or scripting the Stripe CLI. Each entry is a constraint that already cost a session real time; check the list before running any pipeline that depends on one. Do NOT use for Stripe product/pricing strategy or for reading this repo's payment code — the specs and tests own those.
metadata:
  version: 1.0.0
---

# Stripe operational constraints

Each entry: the constraint, the date it was paid for, the rule that avoids paying again. Current
account state (which sandboxes exist, what is claimed, where keys live) is in
`mmn-project/docs/INFRASTRUCTURE.md` § Stripe — this file holds rules, not state. Add entries via
`/distill-learning`, never by narrative.

1. **An unclaimed sandbox cannot drive test clocks.** A claimable sandbox issues only `rkcs_test_`
   restricted keys; test-clock creation needs a claimed sandbox's full `sk_test_` key. Paid for
   twice: 2026-08-07 (first sandbox), 2026-08-12 (CI sandbox — seeded, ran CI, watched the clock
   step fail, reverted the GitHub secret). Rule: no clock-driving pipeline runs against a sandbox
   until entry 2's sequence has completed.

1b. **Claiming does not rewrite the key already stored on the machine.** Stripe issues a *new* full
   `sk_test_` key that has to be copied out of the dashboard by hand; the `rkcs_test_` key in the
   profile's block of `~/.config/stripe/config.toml` stays exactly as it was, so that CLI profile
   remains read-only after the claim. Paid for twice: 2026-08-09 and again 2026-08-15, both times by
   reading "the sandbox is claimed" and concluding the local key worked. Rule: after a claim, prove
   the key by creating and deleting one test clock — the single call the restricted key refuses.
   Never infer a key's power from the sandbox's claim status.

2. **Sandbox provisioning is claim-gated; the claim is the founder's step.** Sequence: create the
   sandbox → hand the founder the claim URL → **stop** → founder confirms the claim → mint the
   full `sk_test_` key → seed the catalog → point consumers (CI secrets, env vars) at it → run.
   Skipping the stop is what wasted the 2026-08-12 run. The general form of this rule is the
   human-gated-checkpoint feedback memory.

3. **Every test event on an account is delivered to every registered webhook endpoint.** Two
   environments sharing one sandbox cross-deliver each other's events; that was the 2026-08-12
   alert-email noise (CI clock runs emailed the founder via the staging endpoint). Rule: one
   sandbox per webhook-consuming environment.

4. **Stripe CLI delete commands prompt for confirmation, and EOF is a silent no-op.** A script
   that calls `stripe … delete` without `echo yes |` reports success and deletes nothing. Cost:
   eight standing test clocks and CI cleanup steps that never cleaned (found 2026-08-12).

5. **Unscoped `stripe subscriptions list` never returns test-clock subscriptions.** Scope with
   `-d "test_clock=$CLOCK"`. Cost: a clock scenario silently modified a leftover fixture
   subscription and asserted the wrong grant (2026-08-12). Dated comment at the fix site in
   `mmn-project/scripts/stripe-clock.sh`.

6. **On API version `2026-07-29.dahlia`, invoices carry no `payment_intent`.** The join is
   `stripe invoice_payments list -d "invoice=…"` → `payment_intent` → `latest_charge`. Webhook
   endpoints render payloads at their creation API version forever, so pin the version at create
   time (2026-08-12).

7. **A webhook signing secret is shown once, at creation, and is unrecoverable.** Capture it
   straight to a scratch file and pipe it into the env store in one step, then delete the file.
   Cost: one endpoint deleted and recreated after the secret was grep-filtered out of visible
   output (2026-08-12).

8. **A portal configuration refuses two prices with the same billing interval on one product.**
   One product per tier is therefore required. Two adjacent facts, both verified live 2026-08-12:
   `login_page[enabled]=true` returns the no-code login URL in the response, and
   `transfer_lookup_key: true` on price create moves a lookup key atomically.

9. **Separation between two Stripe accounts is proved on the account that should stay quiet, not
   on the one under test.** A green pipeline says the new account works; it says nothing about
   whether the old one also received the events. Rule: before triggering the run, record three
   numbers on the *other* account — subscription count, customer count, and the id of the latest
   event — then re-read all three afterwards. Unchanged is the pass. Established 2026-08-15 proving
   the CI/staging split; the run that passed every step is the same run that would have passed while
   still cross-delivering, which is why the pipeline's own result cannot settle it.

10. **A pipeline that talks to Stripe should have no webhook endpoint registered on its account.**
    An endpoint is an address that can mail somebody; no endpoint means the failure cannot occur
    rather than being handled. `stripe listen --print-secret` gives a CI job a signing secret at run
    time and delivers only to the forwarder that job started, so registering one is never needed.
    Rule: after pointing a pipeline at an account, `stripe webhook_endpoints list` on it must return
    empty — and see entry 11, because a restricted key answers that call with a 403 (2026-08-15).

11. **A restricted key answers `events list` and `webhook_endpoints list` with a 403, not with an
    empty list.** Both return an error object shaped `{"error": {...}}` and no `data` key, so any
    reader that does `d.get('data', [])` reports zero and looks like a pass. Paid for 2026-08-15:
    "no webhook endpoint is registered on the CI account" was written into two repo documents and a
    board row on the strength of one such error. Rule: assert on the presence of `data` before
    counting it, and treat a count taken from a restricted key on those two endpoints as unverified.

11b. **That 403 exits 0, while an invalid-key 401 exits 1, so an exit-status check would have
   missed the one that caused the incident.** Measured 2026-08-16 on the `ci-money-path` profile's
   `rkcs_test_` claimable-sandbox key: `stripe webhook_endpoints list --project-name ci-money-path`
   exits **0**, prints `{"error": {...}}` on **stdout**, and writes nothing to stderr;
   `stripe get /v1/events` on the same key behaves identically. With an invalid key,
   `stripe webhook_endpoints list --api-key sk_test_bogus` exits **1**. The claim is that narrow —
   not that every Stripe API error exits 0. Two calls on the same restricted key do succeed for
   real: `stripe test_helpers test_clocks list` exits 0 with a genuine
   `{"object":"list","data":[],…}` body, and `stripe listen --print-secret` returns a `whsec_`
   value. Rule: never gate on `$?` alone for these two endpoints — parse the body and require a
   `data` key, per entry 11.

12. **A bare `stripe` command does not use the `[default]` profile.** `~/.config/stripe/config.toml`
    carries a top-level `project-name`, and the CLI runs against that profile whenever `-p` is
    absent. On 2026-08-15 it read `ci-money-path`, so `stripe subscriptions list` returned the CI
    sandbox's 4 rows while the staging account being reasoned about held 38. Rule: pass `-p`
    explicitly on every call whose account matters, and read the account id back from
    `request_log_url` in any error to confirm which account answered.
