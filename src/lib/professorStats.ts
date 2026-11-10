import fs from 'fs';
import path from 'path';
import { createHash } from 'crypto';
import { getAllExercises } from '@/lib/fileReader';

/**
 * Who wrote the exercises, from the `professor` field of every exercise (see exercises/_professors.json
 * for what the code cannot guess: non-names, book authors, two spellings of one person).
 */

export type CreditKind = 'prof' | 'book' | 'own';

export interface Counted {
  name: string;
  count: number;
}

export interface ProfessorStat {
  id: string;
  name: string;
  kind: CreditKind;
  count: number;
  levels: { level: string; label: string; count: number }[];
  chapters: Counted[];
  sources: Counted[];
  years: [number, number] | null;
  /** Text that finds this person's exercises with the search box of /recherche. */
  searchQuery: string;
}

export interface ProfessorOverview {
  exercises: number;
  /** Exercises that name at least one professor or author (an exercise with two names counts once). */
  credited: number;
  uncredited: number;
  professors: number;
  bookAuthors: number;
  ownExercises: number;
  stats: ProfessorStat[];
}

interface Config {
  own?: string[];
  unknown?: string[];
  bookAuthors?: string[];
  same?: string[][];
}

const LEVEL_ORDER = ['7eme', '8eme', '9eme', '1ere', '2eme', '3eme', '4eme'];
const LEVEL_LABEL: Record<string, string> = {
  '7eme': '7ème', '8eme': '8ème', '9eme': '9ème',
  '1ere': '1ère', '2eme': '2ème', '3eme': '3ème', '4eme': '4ème',
};

const TITLE = /^(?:m\.|mr\.?|mme|mlle|prof\.?|professeur|dr\.?|ustadh|الأستاذ|الاستاذ|أ\.)\s+/i;

const stripTitle = (s: string) => s.trim().replace(TITLE, '').trim();

/** « M. Rjiba Zied » and « zied rjiba » have the same key. */
function keyOf(name: string): string {
  return stripTitle(name)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ًͯ-ٟ]/g, '')
    .split(/[^\p{L}\p{N}]+/u)
    .filter(Boolean)
    .sort()
    .join(' ');
}

/** « A & B » credits A and B; a list « A, B, C » has already been cut at the commas by the exercise parser. */
function people(credit: string): string[] {
  return credit
    .split(/\s*&\s*|\s+et\s+|\s+و\s+/i)
    .map(stripTitle)
    .filter(Boolean);
}

function loadConfig(): Config {
  const file = path.join(process.cwd(), 'exercises', '_professors.json');
  return fs.existsSync(file) ? (JSON.parse(fs.readFileSync(file, 'utf8')) as Config) : {};
}

const top = (counts: Map<string, number>, limit: number): Counted[] =>
  [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([name, count]) => ({ name, count }));

const bump = (m: Map<string, number>, k: string | undefined) => {
  if (k) m.set(k, (m.get(k) ?? 0) + 1);
};

interface Acc {
  variants: Map<string, number>;
  kind: CreditKind;
  displayName?: string;
  exercises: number;
  levels: Map<string, number>;
  chapters: Map<string, number>;
  sources: Map<string, number>;
  years: number[];
}

export function getProfessorOverview(): ProfessorOverview {
  const config = loadConfig();
  const unknown = new Set((config.unknown ?? []).map(keyOf));
  const own = new Set((config.own ?? []).map(keyOf));
  const books = new Set((config.bookAuthors ?? []).map(keyOf));
  const same = new Map<string, { key: string; name: string }>();
  for (const group of config.same ?? []) {
    const [first, ...rest] = group;
    for (const n of [first, ...rest]) same.set(keyOf(n), { key: keyOf(first), name: stripTitle(first) });
  }

  const exercises = getAllExercises();
  const people_ = new Map<string, Acc>();
  let credited = 0;
  let ownExercises = 0;

  for (const ex of exercises) {
    const seen = new Set<string>();
    for (const credit of ex.professor ?? []) {
      for (const raw of people(credit)) {
        let key = keyOf(raw);
        if (!key || unknown.has(key)) continue;
        const merged = same.get(key);
        if (merged) key = merged.key;
        if (seen.has(key)) continue; // one exercise counts once for a person
        seen.add(key);

        const acc: Acc =
          people_.get(key) ??
          {
            variants: new Map(),
            kind: own.has(key) ? 'own' : books.has(key) ? 'book' : 'prof',
            displayName: merged?.name,
            exercises: 0,
            levels: new Map(),
            chapters: new Map(),
            sources: new Map(),
            years: [],
          };
        acc.exercises += 1;
        bump(acc.variants, raw);
        bump(acc.levels, ex.level);
        bump(acc.chapters, ex.chapter);
        bump(acc.sources, ex.source);
        if (ex.year) acc.years.push(ex.year);
        people_.set(key, acc);
      }
    }
    if (seen.size) credited += 1;
    if ([...seen].some(k => own.has(k))) ownExercises += 1;
  }

  const stats: ProfessorStat[] = [...people_.entries()].map(([key, acc]) => {
    // display name: the most used spelling, preferring one that is not ALL CAPS
    const variants = [...acc.variants.entries()].sort(
      (a, b) =>
        Number(a[0] === a[0].toUpperCase()) - Number(b[0] === b[0].toUpperCase()) ||
        b[1] - a[1] ||
        a[0].localeCompare(b[0])
    );
    const name = acc.displayName ?? variants[0][0];
    const searchQuery = [...acc.variants.keys()].sort((a, b) => a.length - b.length)[0];
    return {
      id: `p-${createHash('sha1').update(key).digest('hex').slice(0, 8)}`,
      name,
      kind: acc.kind,
      count: acc.exercises,
      levels: [...acc.levels.entries()]
        .sort((a, b) => LEVEL_ORDER.indexOf(a[0]) - LEVEL_ORDER.indexOf(b[0]))
        .map(([level, count]) => ({ level, label: LEVEL_LABEL[level] ?? level, count })),
      chapters: top(acc.chapters, 3),
      sources: top(acc.sources, 3),
      years: acc.years.length ? [Math.min(...acc.years), Math.max(...acc.years)] : null,
      searchQuery,
    };
  });

  stats.sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

  return {
    exercises: exercises.length,
    credited,
    uncredited: exercises.length - credited,
    professors: stats.filter(s => s.kind === 'prof').length,
    bookAuthors: stats.filter(s => s.kind === 'book').length,
    ownExercises,
    stats,
  };
}
