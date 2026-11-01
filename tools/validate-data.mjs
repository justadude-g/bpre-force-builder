#!/usr/bin/env node
// Checks data/data.js for broken references, duplicate ids and missing fields.
// Usage: node tools/validate-data.mjs
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import vm from 'node:vm';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = readFileSync(join(root, 'data', 'data.js'), 'utf8');
const sandbox = { window: {} };
vm.runInNewContext(src, sandbox, { filename: 'data/data.js' });
const D = sandbox.window.BPRE_DATA;

const errors = [];
const warnings = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);
const isInt = (n, min = 0) => Number.isInteger(n) && n >= min;

if (!D) {
  console.error('data/data.js did not set window.BPRE_DATA');
  process.exit(1);
}

function ids(list, label) {
  const seen = new Set();
  for (const x of list || []) {
    if (!x.id || typeof x.id !== 'string') err(`${label}: an entry has no id (${JSON.stringify(x).slice(0, 60)})`);
    else if (seen.has(x.id)) err(`${label}: duplicate id "${x.id}"`);
    else if (!/^[a-z0-9-]+$/.test(x.id)) err(`${label}: id "${x.id}" should be lowercase letters, numbers and hyphens`);
    seen.add(x.id);
    if (!x.name && label !== 'ratios') err(`${label} "${x.id}": missing name`);
  }
  return seen;
}

const sets = ids(D.sets, 'sets');
ids(D.modes, 'modes');
const factions = ids(D.factions, 'factions');
const units = ids(D.units, 'units');
const cards = ids(D.cards, 'cards');
const options = ids(D.options, 'options');
ids(D.ratios, 'ratios');
const modeIds = new Set((D.modes || []).map((m) => m.id));

for (const m of D.modes || []) {
  if (!Array.isArray(m.presets) || !m.presets.length) err(`mode "${m.id}": presets must be a non-empty array`);
  for (const p of m.presets || []) {
    if (!isInt(p.points, 1)) err(`mode "${m.id}": preset points must be positive whole numbers`);
    if (!p.label) warn(`mode "${m.id}": preset ${p.points} has no label`);
  }
  if (!(m.presets || []).some((p) => p.points === m.defaultPoints)) err(`mode "${m.id}": defaultPoints ${m.defaultPoints} is not one of its presets`);
  for (const s of m.unitSets || []) if (!sets.has(s)) err(`mode "${m.id}": unknown set "${s}" in unitSets`);
  const depIds = new Set(['main', 'qrf']);
  for (const d of m.deployments || []) {
    if (!d.id || depIds.has(d.id)) err(`mode "${m.id}": deployment id "${d.id}" is missing or reused`);
    depIds.add(d.id);
    if (!d.name) err(`mode "${m.id}": deployment "${d.id}" has no name`);
    if (!isInt(d.points, 1)) err(`mode "${m.id}": deployment "${d.id}" needs whole-number points`);
    for (const u of d.allowedUnits || []) if (!units.has(u)) err(`mode "${m.id}": deployment "${d.id}" allows unknown unit "${u}"`);
  }
  for (const sl of m.fireSlots || []) {
    if (!sl.id || !sl.name) err(`mode "${m.id}": every fire slot needs an id and name`);
  }
  if ((m.fireSlots || []).length && !(D.cards || []).some((c) => c.slot)) warn(`mode "${m.id}" has fire slots but no cards are marked slot: true`);
  for (const k of ['interventionLimit', 'firesLimit']) {
    if (m[k] != null && !isInt(m[k])) err(`mode "${m.id}": ${k} must be a whole number or null`);
  }
}

for (const f of D.factions || []) {
  if (f.emblem && !existsSync(join(root, f.emblem))) err(`faction "${f.id}": emblem file "${f.emblem}" not found`);
  if (!f.emblem) warn(`faction "${f.id}" has no emblem`);
  for (const a of f.allies || []) {
    if (!factions.has(a)) err(`faction "${f.id}": unknown ally "${a}"`);
    else if (!(D.factions.find((x) => x.id === a).allies || []).includes(f.id)) warn(`faction "${f.id}" lists "${a}" as an ally, but not the other way round`);
  }
}

for (const pair of D.incompatible || []) {
  if (!Array.isArray(pair) || pair.length !== 2) err('incompatible: each entry must be a pair of faction ids');
  for (const f of pair || []) if (!factions.has(f)) err(`incompatible: unknown faction "${f}"`);
  const [a, b] = pair || [];
  const fa = (D.factions || []).find((x) => x.id === a);
  if (fa && (fa.allies || []).includes(b)) warn(`faction "${a}" lists "${b}" as an ally, but they are incompatible; the app will hide that pairing`);
}

for (const o of D.options || []) {
  if (!isInt(o.cost)) err(`option "${o.id}": cost must be a whole number`);
  for (const m of o.modes || []) if (!modeIds.has(m)) err(`option "${o.id}": unknown mode "${m}"`);
}

for (const u of D.units || []) {
  if (!factions.has(u.faction)) err(`unit "${u.id}": unknown faction "${u.faction}"`);
  if (!sets.has(u.set)) err(`unit "${u.id}": unknown set "${u.set}"`);
  if (u.cost === null || u.cost === undefined) warn(`unit "${u.id}": no cost`);
  else if (!isInt(u.cost)) err(`unit "${u.id}": cost must be a whole number`);
  if (u.move != null && typeof u.move !== 'number') err(`unit "${u.id}": move must be a number`);
  if (u.perPoints != null && !isInt(u.perPoints, 1)) err(`unit "${u.id}": perPoints must be a whole number`);
  for (const f of u.fires || []) {
    if (!cards.has(f.card)) err(`unit "${u.id}": fires refers to unknown card "${f.card}"`);
    if (!isInt(f.count, 1)) err(`unit "${u.id}": fires count must be 1 or more`);
  }
  for (const o of u.options || []) if (!options.has(o)) err(`unit "${u.id}": unknown option "${o}"`);
}

for (const r of D.ratios || []) {
  for (const id of [...(r.members || []), ...(r.per || [])]) if (!units.has(id)) err(`ratio "${r.id}": unknown unit "${id}"`);
  if (!isInt(r.max, 1)) err(`ratio "${r.id}": max must be a whole number`);
}

for (const c of D.cards || []) {
  if (!['intervention', 'special', 'fires'].includes(c.type)) err(`card "${c.id}": type must be "intervention", "special" or "fires"`);
  if (!sets.has(c.set)) err(`card "${c.id}": unknown set "${c.set}"`);
  for (const f of c.factions || []) if (!factions.has(f)) err(`card "${c.id}": unknown faction "${f}"`);
  if (c.notes && c.notes.length > 100) warn(`card "${c.id}": notes are long. Put the full effect in "text".`);
  if (c.type !== 'special' && !c.text) warn(`card "${c.id}": no "text" for the Full effect panel`);
}


// ---- Starter forces ----
{
  const sp = join(root, 'data', 'starters.js');
  if (existsSync(sp)) {
    const sb = { window: {} };
    vm.runInNewContext(readFileSync(sp, 'utf8'), sb, { filename: 'data/starters.js' });
    const S = sb.window.BPRE_STARTERS || [];
    const unitById = new Map(D.units.map((u) => [u.id, u]));
    const cardById = new Map(D.cards.map((c) => [c.id, c]));
    const seen = new Set();
    for (const x of S) {
      const tag = `starter "${x.id}"`;
      if (!/^[a-z0-9-]+$/.test(x.id || '')) err(`${tag}: bad id`);
      if (seen.has(x.id)) err(`${tag}: duplicate id`);
      seen.add(x.id);
      const mode = (D.modes || []).find((m) => m.id === x.mode);
      const fac = (D.factions || []).find((f) => f.id === x.faction);
      if (!mode) { err(`${tag}: unknown mode "${x.mode}"`); continue; }
      if (!fac) { err(`${tag}: unknown faction "${x.faction}"`); continue; }
      if (x.ally) {
        if (!(fac.allies || []).includes(x.ally)) err(`${tag}: ${x.ally} is not an ally of ${x.faction}`);
        if ((D.incompatible || []).some((p) => p.includes(x.faction) && p.includes(x.ally))) err(`${tag}: ${x.faction} and ${x.ally} can never be fielded together`);
      }
      if (!x.name || !x.blurb) err(`${tag}: needs a name and a blurb`);
      if (!(mode.presets || []).some((p) => p.points === x.points)) warn(`${tag}: ${x.points} CP is not a preset for ${mode.name}`);
      const allowed = [x.faction, x.ally].filter(Boolean);
      let total = 0;
      let used = {};
      for (const [id, q] of Object.entries(x.units || {})) {
        const u = unitById.get(id);
        if (!u) { err(`${tag}: unknown unit "${id}"`); continue; }
        if (!allowed.includes(u.faction)) err(`${tag}: ${u.name} (${u.faction}) is not in this force`);
        if (!isInt(q, 1)) err(`${tag}: bad quantity for ${id}`);
        total += (u.cost || 0) * q;
        used[id] = q;
      }
      if (total > x.points) err(`${tag}: ${total} CP is over the ${x.points} CP limit`);
      if (total < x.points - 20) warn(`${tag}: only ${total} of ${x.points} CP used`);
      for (const [id, q] of Object.entries(used)) {
        const u = unitById.get(id);
        if (u.perPoints && q > Math.floor(total / u.perPoints)) err(`${tag}: ${u.name} is limited to one per ${u.perPoints} CP`);
      }
      for (const r of D.ratios || []) {
        const have = r.members.reduce((n, id) => n + (used[id] || 0), 0);
        const base = r.per.reduce((n, id) => n + (used[id] || 0), 0);
        if (have > base * r.max) err(`${tag}: breaks "${r.label}" (${have} against room for ${base * r.max})`);
      }
      const hand = x.cards || [];
      if (typeof mode.interventionLimit === 'number' && hand.length !== mode.interventionLimit) err(`${tag}: needs ${mode.interventionLimit} Intervention cards, has ${hand.length}`);
      if (new Set(hand).size !== hand.length) err(`${tag}: repeats a card`);
      for (const id of hand) {
        const c = cardById.get(id);
        if (!c) { err(`${tag}: unknown card "${id}"`); continue; }
        if (c.type !== 'intervention') err(`${tag}: "${id}" is not an Intervention card`);
        if (c.factions && c.factions.length && !c.factions.some((f) => allowed.includes(f))) err(`${tag}: "${id}" needs ${c.factions.join(' or ')} in the force`);
      }
    }
    const perFaction = {};
    for (const x of S) perFaction[x.faction] = (perFaction[x.faction] || 0) + 1;
    for (const f of D.factions || []) if (!perFaction[f.id]) warn(`no starter force for ${f.name}`);
    console.log(`${S.length} starter forces checked.`);
  }
}

// ---- rules index ----
{
  const rp = join(root, 'data', 'rules-index.js');
  if (existsSync(rp)) {
    const sb = { window: {} };
    vm.runInNewContext(readFileSync(rp, 'utf8'), sb, { filename: 'data/rules-index.js' });
    const R = sb.window.BPRE_RULES_INDEX;
    if (!R || !Array.isArray(R.books) || !Array.isArray(R.entries)) {
      err('rules index: data/rules-index.js must set window.BPRE_RULES_INDEX with books and entries');
    } else {
      const bookIds = new Set(R.books.map((b) => b.id));
      const seen = new Set();
      const pageOk = /^\d+(-\d+)?(, \d+(-\d+)?)*$/;
      for (const e of R.entries) {
        const tag = `rules index "${e.term}"`;
        if (!e.term) { err('rules index: an entry has no term'); continue; }
        const key = e.term.toLowerCase();
        if (seen.has(key)) err(`${tag}: duplicate term`);
        seen.add(key);
        if (!Array.isArray(e.refs) || !e.refs.length) err(`${tag}: no refs`);
        for (const r of e.refs || []) {
          if (!bookIds.has(r.book)) err(`${tag}: unknown book "${r.book}"`);
          if (typeof r.pages !== 'string' || !pageOk.test(r.pages)) err(`${tag}: pages "${r.pages}" should look like "36" or "30-31, 38"`);
          else for (const m of r.pages.matchAll(/(\d+)-(\d+)/g)) if (+m[2] <= +m[1]) err(`${tag}: range "${m[0]}" runs backwards`);
        }
      }
      console.log(`${R.entries.length} rules index entries checked.`);
    }
  }
}

for (const w of warnings) console.log('warn  ' + w);
for (const e of errors) console.log('ERROR ' + e);
const byType = (t) => (D.cards || []).filter((c) => c.type === t).length;
console.log(`\n${D.units.length} units, ${byType('intervention')} Intervention, ${byType('special')} Special Intervention and ${byType('fires')} Fires cards.`);
if (errors.length) {
  console.log(`${errors.length} error(s).`);
  process.exit(1);
}
console.log('Data OK.');
