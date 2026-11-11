import fs from 'fs';
import path from 'path';
import { createHash } from 'crypto';

// Naming rules of the theorems wiki, shared by the wiki (theoremIndex.ts) and the lesson renderer
// (each theorem box of a lesson links to its wiki entry). No rendering here, so no import cycle.

/** `Dérivée de $\ln u$` → `Dérivée de ln u` : plain text for matching and searching. */
export function plainText(s: string): string {
  return s
    .replace(/\\(left|right|dfrac|frac|mapsto|,|;|!)/g, ' ')
    .replace(/\\iff/g, '⇔')
    .replace(/\\([a-zA-Z]+)/g, '$1')
    .replace(/[${}]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export const ADMIS_SUFFIX = /\s*\(\s*admis(e|es)?\s*\)\s*$/i;

/** The key two boxes must share to be the same wiki entry. */
export function keyOf(name: string): string {
  return plainText(name)
    .replace(ADMIS_SUFFIX, '')
    .replace(/[ً-ٰٟـ]/g, '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9؀-ۿ]+/g, ' ')
    .trim();
}

export interface AliasGroup {
  name: string;
  ar?: string;
  names?: string[];
}

let aliasCache: Map<string, AliasGroup> | null = null;

/** lessons/_theorem-aliases.json joins differently named boxes (e.g. French + Arabic) into one entry. */
export function loadAliases(): Map<string, AliasGroup> {
  if (aliasCache && process.env.NODE_ENV === 'production') return aliasCache;
  const map = new Map<string, AliasGroup>();
  const file = path.join(process.cwd(), 'lessons', '_theorem-aliases.json');
  if (fs.existsSync(file)) {
    const parsed = JSON.parse(fs.readFileSync(file, 'utf8')) as { groups?: AliasGroup[] };
    for (const group of parsed.groups ?? []) {
      for (const n of [group.name, ...(group.names ?? [])]) map.set(keyOf(n), group);
    }
  }
  aliasCache = map;
  return map;
}

/** Group key and display name of the wiki entry a box named `name` belongs to. */
export function entryOf(name: string): { key: string; name: string; alias?: AliasGroup } {
  const alias = loadAliases().get(keyOf(name));
  return alias
    ? { key: keyOf(alias.name), name: alias.name, alias }
    : { key: keyOf(name), name: name.replace(ADMIS_SUFFIX, '') };
}

/** Stable id of a wiki entry (/theoremes#id), from its group key and display name. */
export function idOf(key: string, displayName: string): string {
  const hash = createHash('sha1').update(key).digest('hex').slice(0, 6);
  const ascii = keyOf(displayName).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40);
  return `${ascii || 'theoreme'}-${hash}`;
}

/** /theoremes#id for a theorem box named `name` (its `wiki` attribute, or else its title). */
export function wikiIdForName(name: string): string {
  const e = entryOf(name);
  return idOf(e.key, e.name);
}
