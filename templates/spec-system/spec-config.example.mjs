/**
 * Example config for verify-specs.mjs.
 *
 * Copy this next to the engine (or anywhere, and pass `--config <path>`), delete what you do not
 * need, and keep the comments that explain a choice. Every key is optional; the engine's
 * DEFAULT_CONFIG fills the rest.
 *
 * Two real projects are shown so a third can see the shape of each decision:
 *   A. mms-repo/mmn-project        — a small spec set, tests bound under a `### Tests` heading
 *   B. youtube-metronome/metronome-core — a larger one, extra frontmatter tied to analytics
 *
 * Export A as the default and keep B as reference, or the other way round.
 */

/* ===================================================================== A. mmn-project */

export const mmnProject = {
  root: process.cwd(), // run from mmn-project/, or set an absolute path

  specsDir: 'product/specs',
  indexFile: 'product/INDEX.md',

  // No `gated` here: this project has no feature-flag stage.
  statuses: ['idea', 'planned', 'in-progress', 'shipped', 'deprecated'],
  implementedStatuses: ['in-progress', 'shipped'], // owe tests. Never add 'planned'.
  doneStatuses: ['shipped', 'deprecated'], // everything else prints in the work queue

  areas: ['library', 'dev-tooling', 'web-flow', 'prompts', 'evals'],

  requiredFields: ['id', 'name', 'status', 'area', 'owner', 'last_reviewed', 'related_specs'],
  listFields: ['related_specs'],
  specRefFields: ['related_specs'],

  requiredSections: [
    '## WHAT & WHY',
    '### Problem / user need',
    '### Goals',
    '### Non-goals',
    '### Rationale & trade-offs',
    '### Behavior contract',
    '## HOW',
    '### Tests',
  ],
  nonEmptySections: [{ heading: '### Non-goals', minChars: 20, hint: 'state at least one boundary' }],

  tests: {
    // A bulleted list of backticked repo-relative paths under a heading:
    //   ### Tests
    //   - `packages/core/__tests__/thing.test.ts`
    mode: 'section',
    heading: '### Tests',
    backReference: (id) => `product/specs/${id}.md`,
    // Left null: `make app-check` runs this linter and the suite in the same gate, so "and they
    // pass" is already enforced there. Set it if the linter is run on its own.
    runCommand: null,
  },

  onMissingSpecsDir: 'error', // a missing specs dir is a broken checkout, not a pass
};

/* =============================================================== B. metronome-core */

export const metronomeCore = {
  root: process.cwd(),

  specsDir: 'product/specs',
  indexFile: 'product/INDEX.md',

  // `gated` = merged but hidden behind a feature flag.
  statuses: ['idea', 'planned', 'in-progress', 'shipped', 'gated', 'deprecated'],
  // Adopting the mmn rule: bindings are owed once the work claims to exist, and `gated` code
  // exists. `planned` and `idea` stay exempt.
  implementedStatuses: ['in-progress', 'shipped', 'gated'],
  doneStatuses: ['shipped', 'gated', 'deprecated'],

  areas: ['tempo', 'rhythm', 'sound', 'persistence', 'session', 'content', 'meta'],

  requiredFields: [
    'id',
    'name',
    'status',
    'area',
    'introduced_version',
    'owner',
    'last_reviewed',
    'success_metrics',
    'related_events',
    'related_specs',
  ],
  listFields: ['success_metrics', 'related_events', 'related_specs'],
  specRefFields: ['related_specs'],

  requiredSections: [
    '## WHAT & WHY',
    '### Problem / user need',
    '### Goals',
    '### Non-goals',
    '### Rationale & trade-offs',
    '### Success metrics',
    '### Behavior contract',
    '## HOW',
  ],
  nonEmptySections: [{ heading: '### Non-goals', minChars: 20, hint: 'state at least one boundary' }],

  tests: {
    // Tests are named inline on one pointer line:
    //   - Tests: `test/tapTempo.test.ts`, `test/tempoMath.test.ts`
    mode: 'bullet',
    label: 'Tests:',
    backReference: (id) => `product/specs/${id}.md`,
    runCommand: null,
  },

  // Frontmatter values that must exist somewhere else in the repo. Each `source` is either
  // `files: [...]` or `dir` + `extensions`, plus the patterns whose capture groups are the legal
  // values.
  crossReferences: [
    {
      field: 'introduced_version',
      kind: 'scalar',
      allowEmpty: true, // "" means the feature predates the changelog
      source: {
        files: ['app/lib/whatsNew/changelog.ts'],
        patterns: [/version:\s*"([^"]+)"/g],
      },
      label: 'is not a version in app/lib/whatsNew/changelog.ts',
    },
    {
      field: 'success_metrics',
      kind: 'list',
      source: {
        files: ['product/metrics/metrics-map.md'],
        // first-column backticked token of each table row
        patterns: [/^\|\s*`([a-z][a-z0-9_]+)`/gm],
      },
      label: 'is not defined in product/metrics/metrics-map.md',
    },
    {
      field: 'related_events',
      kind: 'list',
      source: {
        dir: 'app',
        extensions: ['.ts', '.tsx'],
        patterns: [/track(?:Event|Once)\(\s*"([^"]+)"(?:\s*,\s*"([^"]+)")?/g, /sendEvent\(\s*"([^"]+)"/g],
      },
      label: 'is not a tracked event under app/',
    },
  ],

  // Non-fatal. A shipped spec nobody has revisited in 90 days, with no write-up naming it, is
  // overdue for a product review.
  staleWarning: {
    days: 90,
    statuses: ['shipped', 'gated'],
    exemptIfMentionedIn: 'product/learning/insights',
  },

  // This linter runs in `prebuild`, and a build in a tree without product/ should not fail.
  onMissingSpecsDir: 'skip',
};

export default mmnProject;
