// Typo- and accent-tolerant matching, shared by every search box of the site (client-safe: no fs).
//
//   "acroissements"  → finds "accroissements"  (doubled letters are collapsed on both sides)
//   "homothetie"     → finds "Homothétie"      (accents removed)
//   "pytagore"       → finds "Pythagore"       (one typo allowed from 4 letters, two from 8)
//   "التحاكى"         → finds "التحاكي"          (Arabic hamza / alef / ya / ta marbuta variants unified)
//
// A query matches a text when EVERY meaningful word of the query matches the start of some word
// of the text (so "deriv" finds "dérivabilité"), with that tolerance.

const STOP_WORDS = new Set([
  'de', 'des', 'du', 'la', 'le', 'les', 'l', 'd', 'et', 'en', 'un', 'une', 'a', 'au', 'aux', 'sur', 'pour',
  'في', 'من', 'على', 'و',
]);

/** Lowercase, strip accents and Arabic diacritics, unify letter variants, collapse doubled letters. */
export function foldText(text: string | undefined | null): string {
  if (!text) return '';
  return String(text)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')                 // Latin accents
    .replace(/[ً-ٰٟـ]/g, '')      // Arabic harakat, superscript alef, tatweel
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .replace(/ؤ/g, 'و')
    .replace(/ئ/g, 'ي')
    .replace(/œ/g, 'oe')
    .replace(/æ/g, 'ae')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .replace(/(\p{L})\1+/gu, '$1')                    // "accroissement" → "acroisement"
    .trim();
}

export function tokens(text: string | undefined | null): string[] {
  return foldText(text).split(' ').filter(Boolean);
}

function levenshtein(a: string, b: string, max: number): number {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let prev = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    let rowMin = i;
    for (let j = 1; j <= b.length; j++) {
      const v = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      cur.push(v);
      if (v < rowMin) rowMin = v;
    }
    if (rowMin > max) return max + 1;
    prev = cur;
  }
  return prev[b.length];
}

/** 3 = word starts with the query word, 1 = matches with a typo, 0 = no match. */
function wordScore(q: string, word: string): number {
  if (word.startsWith(q)) return 3;
  const allowed = q.length >= 8 ? 2 : q.length >= 4 ? 1 : 0;
  if (allowed === 0) return 0;
  for (let len = q.length - allowed; len <= q.length + allowed; len++) {
    if (len < 1 || len > word.length) continue;
    if (levenshtein(q, word.slice(0, len), allowed) <= allowed) return 1;
  }
  return 0;
}

export interface PreparedQuery {
  words: string[];
}

export function prepareQuery(query: string): PreparedQuery {
  const all = tokens(query);
  const meaningful = all.filter(w => !STOP_WORDS.has(w));
  return { words: meaningful.length > 0 ? meaningful : all };
}

/** Score of a text for a query (0 = no match). An empty query matches everything with score 1. */
export function fuzzyScore(query: PreparedQuery | string, text: string): number {
  const q = typeof query === 'string' ? prepareQuery(query) : query;
  if (q.words.length === 0) return 1;
  const words = tokens(text);
  let total = 0;
  for (const qw of q.words) {
    let best = 0;
    for (const w of words) {
      const s = wordScore(qw, w);
      if (s > best) best = s;
      if (best === 3) break;
    }
    if (best === 0) return 0;
    total += best;
  }
  return total;
}

export function fuzzyMatch(query: PreparedQuery | string, text: string): boolean {
  return fuzzyScore(query, text) > 0;
}
