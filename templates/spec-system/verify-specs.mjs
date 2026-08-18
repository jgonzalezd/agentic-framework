#!/usr/bin/env node
/**
 * Treat product specs like code — one engine, two host projects.
 *
 * This is the merge of the two hand-written linters that mms-repo/mmn-project and
 * youtube-metronome/metronome-core each grew independently. Everything either one hard-coded that
 * the other did differently is a config value now; everything they agreed on is below.
 *
 * What it always checks:
 *   - YAML-ish frontmatter is present and well-typed (status/area enums, ISO last_reviewed,
 *     id equal to the filename, list fields actually parsed as lists)
 *   - every configured required field is present
 *   - spec-reference fields (related_specs) resolve to real spec files
 *   - the index file and the specs directory are in sync, with no orphan in either direction
 *   - the required sections exist, and sections declared non-empty carry real prose
 *   - for statuses that claim the work exists: every test path named by the spec exists, and each
 *     of those files names the spec back by path
 *
 * The back-reference is the load-bearing check. A spec whose tests nobody can find is prose; a test
 * nobody can trace back to a spec is a guess. Statuses that do not claim the work exists (`planned`,
 * `idea`) are exempt from the test check on purpose — demanding a test file for unwritten work only
 * invites a stub. That exemption is the mmn-project rule and it is not configurable.
 *
 * Optional, per config: cross-reference checks (a frontmatter field whose values must appear in some
 * other file), and a non-fatal staleness warning.
 *
 * Usage:
 *   node verify-specs.mjs                       # loads ./spec-config.mjs relative to cwd
 *   node verify-specs.mjs --config path/to.mjs  # explicit config path
 *   import { verifySpecs } from './verify-specs.mjs'   # programmatic, returns a result object
 *
 * Node ESM, no dependencies.
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { execSync } from 'node:child_process';

/* ------------------------------------------------------------------ defaults */

/**
 * Everything a config may set, with the value used when it does not.
 * `areas: null` means "do not check the area enum at all"; an array means "check against it".
 */
export const DEFAULT_CONFIG = {
  /** Repo root. Every other path in the config is resolved against it. */
  root: process.cwd(),
  /** Directory holding one markdown file per spec. */
  specsDir: 'product/specs',
  /** The index that must list every spec, and must list nothing else. */
  indexFile: 'product/INDEX.md',
  /** Filenames inside specsDir that are not specs. */
  ignoreFiles: ['SPEC_TEMPLATE.md'],
  /** Captures the spec id from each index link. Must have exactly one capture group, and /g. */
  indexLinkPattern: /\]\(\.\/specs\/([a-z0-9-]+)\.md\)/g,

  /** Legal values of `status`. */
  statuses: ['idea', 'planned', 'in-progress', 'shipped', 'deprecated'],
  /** Statuses that claim the work exists and therefore owe real, back-referencing tests. */
  implementedStatuses: ['in-progress', 'shipped'],
  /** Statuses that are NOT printed in the work queue. */
  doneStatuses: ['shipped', 'deprecated'],
  /** Legal values of `area`, or null to skip the check. */
  areas: null,

  /** Frontmatter fields that must be present on every spec. */
  requiredFields: ['id', 'name', 'status', 'area', 'owner', 'last_reviewed', 'related_specs'],
  /** Of those, the ones that must parse as a list. */
  listFields: ['related_specs'],
  /** List fields whose values must be ids of real specs. */
  specRefFields: ['related_specs'],

  /** Headings that must appear in the body. Matched as a line, so include the `#` markers. */
  requiredSections: [
    '## WHAT & WHY',
    '### Problem / user need',
    '### Goals',
    '### Non-goals',
    '### Rationale & trade-offs',
    '### Behavior contract',
    '## HOW',
  ],
  /** Sections that must carry at least `minChars` of prose. */
  nonEmptySections: [{ heading: '### Non-goals', minChars: 20, hint: 'state at least one boundary' }],

  /** How a spec names its tests, and what proves the binding. */
  tests: {
    /**
     * 'section' — a bulleted list of backticked paths under a heading (mmn-project).
     * 'bullet'  — a single bullet line labelled `Tests:` carrying backticked paths (metronome-core).
     */
    mode: 'section',
    /** For mode 'section': the heading the list lives under. */
    heading: '### Tests',
    /** For mode 'bullet': the label the line starts with, after the dash. */
    label: 'Tests:',
    /** The string each named test file must contain. Receives the spec id. */
    backReference: (id) => `product/specs/${id}.md`,
    /**
     * Optional shell command that runs the suite. It is a literal written in the repo's own config
     * file, never anything read from a spec, so it is run through a shell on purpose.
     * Left null, the engine checks existence and the
     * back-reference only, and "and they pass" is enforced by whatever gate runs the linter and the
     * suite together. Set it to have this engine own that half too.
     */
    runCommand: null,
  },

  /**
   * Optional. Each entry: a frontmatter field whose every value must appear in some other file.
   * { field, kind: 'list'|'scalar', allowEmpty, source: {files|dir+extensions, patterns}, label }
   */
  crossReferences: [],

  /** Optional non-fatal staleness warning, or null. */
  staleWarning: null,

  /** 'error' exits 1 when specsDir is absent; 'skip' prints a note and passes. */
  onMissingSpecsDir: 'error',
};

/* ------------------------------------------------------------------ helpers */

function read(file) {
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
}

function walk(dir, extensions, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, extensions, acc);
    else if (extensions.some((e) => entry.name.endsWith(e))) acc.push(full);
  }
  return acc;
}

/** Minimal YAML-ish frontmatter parser for the controlled format: scalars + block/inline lists. */
export function parseFrontmatter(raw, tag, errors) {
  const m = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!m) {
    errors.push(`${tag}: missing YAML frontmatter`);
    return null;
  }
  const meta = {};
  let currentKey = null;
  for (const line of m[1].split('\n')) {
    if (currentKey && /^\s+-\s+/.test(line)) {
      meta[currentKey].push(line.replace(/^\s+-\s+/, '').trim().replace(/^["']|["']$/g, ''));
      continue;
    }
    const im = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!im) continue;
    const key = im[1];
    const val = im[2].trim();
    if (val === '') {
      meta[key] = []; // empty value starts a block list
      currentKey = key;
    } else if (val.startsWith('[') && val.endsWith(']')) {
      const inner = val.slice(1, -1).trim();
      meta[key] = inner === '' ? [] : inner.split(',').map((s) => s.trim().replace(/^["']|["']$/g, ''));
      currentKey = null;
    } else {
      meta[key] = val.replace(/^["']|["']$/g, '');
      currentKey = null;
    }
  }
  return meta;
}

/** The body of a section, up to the next heading of the same or higher level. */
function sectionBody(raw, heading) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = raw.split(new RegExp(`^${escaped}\\s*$`, 'm'));
  if (parts[1] === undefined) return undefined;
  return parts[1].split(/^#{2,3} /m)[0];
}

/** Repo-relative test paths a spec names, per the configured mode. */
export function testPaths(raw, testsConfig) {
  if (testsConfig.mode === 'bullet') {
    const label = testsConfig.label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const line = raw.match(new RegExp(`^\\s*-\\s+${label}(.*(?:\\n(?!\\s*[-#]).*)*)`, 'm'));
    if (!line) return [];
    // Drop parenthesised asides before reading the backticks. A `Tests:` bullet routinely glosses
    // each path — "`test/esInternalLinks.test.ts` (ES chrome/home emit real `/es/*` links)" — and
    // a backticked token inside that gloss is prose, not a fourth test file. Section mode does not
    // need this: its regex is anchored to `- ` at line start, so only a token that opens its own
    // bullet counts. Measured on metronome-core 2026-08-18: without this, `/es/*` was reported as
    // a named test that does not exist.
    const prose = line[1].replace(/\([^)]*\)/g, ' ');
    return [...prose.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  }
  const body = sectionBody(raw, testsConfig.heading);
  if (body === undefined) return [];
  return [...body.matchAll(/^\s*-\s+`([^`]+)`/gm)].map((m) => m[1]);
}

/** The set of legal values for one cross-reference check. */
function buildReferenceSet(root, source) {
  const files = source.files
    ? source.files.map((f) => path.resolve(root, f))
    : walk(path.resolve(root, source.dir), source.extensions || ['.ts', '.tsx']);
  const text = files.map(read).join('\n');
  const set = new Set();
  for (const pattern of source.patterns) {
    for (const m of text.matchAll(pattern)) {
      for (const group of m.slice(1)) if (group) set.add(group);
    }
  }
  return set;
}

function mergeConfig(userConfig) {
  const config = { ...DEFAULT_CONFIG, ...userConfig };
  config.tests = { ...DEFAULT_CONFIG.tests, ...(userConfig.tests || {}) };
  return config;
}

/* ------------------------------------------------------------------ engine */

/**
 * Run every check. Returns { ok, errors, warnings, specCount, queue } and prints nothing on its
 * own beyond the optional test-command output; the CLI below does the printing.
 */
export function verifySpecs(userConfig = {}) {
  const config = mergeConfig(userConfig);
  const root = path.resolve(config.root);
  const specsDir = path.resolve(root, config.specsDir);
  const indexFile = path.resolve(root, config.indexFile);

  const errors = [];
  const warnings = [];

  if (!fs.existsSync(specsDir)) {
    if (config.onMissingSpecsDir === 'skip') {
      return { ok: true, errors, warnings: [`no ${config.specsDir} directory — skipped`], specCount: 0, queue: [] };
    }
    return { ok: false, errors: [`No ${config.specsDir} directory found.`], warnings, specCount: 0, queue: [] };
  }

  const implemented = new Set(config.implementedStatuses);
  const done = new Set(config.doneStatuses);
  const listFields = new Set(config.listFields);

  const indexIds = new Set([...read(indexFile).matchAll(config.indexLinkPattern)].map((m) => m[1]));
  const files = fs
    .readdirSync(specsDir)
    .filter((f) => f.endsWith('.md') && !config.ignoreFiles.includes(f));
  const specIds = new Set(files.map((f) => path.basename(f, '.md')));
  const queue = [];

  const referenceSets = config.crossReferences.map((check) => ({
    check,
    values: buildReferenceSet(root, check.source),
  }));

  const staleText = config.staleWarning?.exemptIfMentionedIn
    ? walk(path.resolve(root, config.staleWarning.exemptIfMentionedIn), ['.md']).map(read).join('\n')
    : '';
  const now = Date.now();

  for (const file of files) {
    const tag = `${config.specsDir}/${file}`;
    const id = path.basename(file, '.md');
    const raw = read(path.join(specsDir, file));
    const meta = parseFrontmatter(raw, tag, errors);
    if (!meta) continue;

    for (const field of config.requiredFields) {
      if (!(field in meta)) errors.push(`${tag}: missing frontmatter field "${field}"`);
      else if (listFields.has(field) && !Array.isArray(meta[field])) errors.push(`${tag}: "${field}" must be a list`);
    }

    if (meta.id !== id) errors.push(`${tag}: id "${meta.id}" must equal the filename "${id}"`);
    if (meta.status && !config.statuses.includes(meta.status)) {
      errors.push(`${tag}: invalid status "${meta.status}" (expected one of ${config.statuses.join(', ')})`);
    }
    if (config.areas && meta.area && !config.areas.includes(meta.area)) {
      errors.push(`${tag}: invalid area "${meta.area}" (expected one of ${config.areas.join(', ')})`);
    }

    if (meta.last_reviewed) {
      const date = new Date(meta.last_reviewed);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(meta.last_reviewed) || Number.isNaN(date.getTime())) {
        errors.push(`${tag}: last_reviewed "${meta.last_reviewed}" is not an ISO date (YYYY-MM-DD)`);
      } else if (config.staleWarning && config.staleWarning.statuses.includes(meta.status)) {
        const ageDays = (now - date.getTime()) / 86400000;
        if (ageDays > config.staleWarning.days && !staleText.includes(id)) {
          warnings.push(
            `${tag}: ${meta.status} spec last reviewed ${Math.round(ageDays)}d ago with no reference in ` +
              `${config.staleWarning.exemptIfMentionedIn} — overdue for a review`,
          );
        }
      }
    }

    for (const field of config.specRefFields) {
      for (const ref of meta[field] || []) {
        if (!specIds.has(ref)) errors.push(`${tag}: ${field} "${ref}" has no spec file`);
      }
    }

    for (const { check, values } of referenceSets) {
      const raws = check.kind === 'scalar' ? [meta[check.field]].filter(Boolean) : meta[check.field] || [];
      for (const value of raws) {
        if (check.allowEmpty && value === '') continue;
        if (!values.has(value)) errors.push(`${tag}: ${check.field} "${value}" ${check.label}`);
      }
    }

    if (!indexIds.has(id)) errors.push(`${tag}: no row in ${config.indexFile} linking ./specs/${id}.md`);

    for (const section of config.requiredSections) {
      if (!raw.includes(`\n${section}`)) errors.push(`${tag}: missing required section "${section}"`);
    }
    for (const { heading, minChars, hint } of config.nonEmptySections) {
      const body = (sectionBody(raw, heading) ?? '').trim();
      if (body.length < minChars) errors.push(`${tag}: ${heading} is empty — ${hint}`);
    }

    // The rule that survives the merge: test bindings are owed at in-progress and shipped, never
    // at planned or idea.
    const tests = testPaths(raw, config.tests);
    if (implemented.has(meta.status)) {
      if (tests.length === 0) {
        errors.push(`${tag}: status "${meta.status}" but no test paths named for this spec`);
      }
      const backReference = config.tests.backReference(id);
      for (const rel of tests) {
        const full = path.resolve(root, rel);
        if (!fs.existsSync(full)) {
          errors.push(`${tag}: names the test "${rel}", which does not exist`);
        } else if (!read(full).includes(backReference)) {
          errors.push(`${tag}: "${rel}" does not back-reference ${backReference}`);
        }
      }
    }

    if (!done.has(meta.status)) queue.push(`${id} [${meta.status}]`);
  }

  for (const id of indexIds) {
    if (!specIds.has(id)) errors.push(`${config.indexFile}: links ./specs/${id}.md but no such spec exists`);
  }

  // A named test that exists and back-references its spec can still be failing. Only a run settles
  // that, so a project that wants this engine to own the whole "shipped" rule configures the command.
  if (config.tests.runCommand && errors.length === 0) {
    try {
      execSync(config.tests.runCommand, { cwd: root, stdio: 'inherit' });
    } catch {
      errors.push(`tests.runCommand failed: ${config.tests.runCommand}`);
    }
  }

  return { ok: errors.length === 0, errors, warnings, specCount: files.length, queue };
}

/* ------------------------------------------------------------------ CLI */

async function loadConfig(argv) {
  const flag = argv.indexOf('--config');
  const file = flag === -1 ? 'spec-config.mjs' : argv[flag + 1];
  const full = path.resolve(process.cwd(), file);
  if (!fs.existsSync(full)) {
    console.error(`❌ No spec config at ${full}. Pass --config <path> or add spec-config.mjs.`);
    process.exit(1);
  }
  const mod = await import(pathToFileURL(full).href);
  return mod.default ?? mod.config ?? {};
}

async function main() {
  const config = await loadConfig(process.argv.slice(2));
  const result = verifySpecs(config);

  for (const w of result.warnings) console.warn(`⚠️  ${w}`);
  if (!result.ok) {
    for (const e of result.errors) console.error(`❌ ${e}`);
    console.error(`\n${result.errors.length} spec problem(s) found.`);
    process.exit(1);
  }
  console.log(`✅ Verified ${result.specCount} product spec${result.specCount === 1 ? '' : 's'}.`);
  if (result.queue.length) console.log(`   Work queue (not yet shipped): ${result.queue.join(', ')}`);
}

// Only run as a CLI when invoked directly, so importing the engine has no side effects.
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname)) {
  await main();
}
