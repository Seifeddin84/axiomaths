/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';
import path from 'path';
import { createHash } from 'crypto';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkDirective from 'remark-directive';
import { getAllLessons } from '@/lib/lessonReader';
import { renderLessonHtml } from '@/lib/lessonHtml';
import type { Lesson } from '@/types/lesson';

/**
 * The theorems wiki is generated from the lessons: every `:::theorem[Title]` box becomes a
 * "version" of a wiki entry. Versions with the same name (after normalisation) are one entry, so
 * "Dérivable implique continue" taught in 3ème and in 4ème is a single entry with two chapters.
 *
 * Writing for the wiki (all optional, see lessons/_GUIDE.md):
 *   :::theorem[Terme général]{wiki="Terme général d'une suite arithmétique"}   → the wiki name,
 *       when the box title is too short to stand alone or clashes with another one.
 *   lessons/_theorem-aliases.json → joins differently named boxes (e.g. French + Arabic) into one entry.
 */

export type ProofStatus = 'proved' | 'admitted' | 'stated';

export interface TheoremLink {
  label: string;
  href: string;
  level: string;
}

export interface TheoremVersion {
  lessonSlug: string;
  lessonTitle: string;
  chapter: string;
  lang: 'fr' | 'ar';
  level: string;
  levelLabel: string;
  number: number;
  status: ProofStatus;
  statementHtml: string;
  proofHtml: string | null;
  links: TheoremLink[];
}

export interface TheoremEntry {
  id: string;
  name: string;
  nameHtml: string;
  altName?: string;
  dir: 'ltr' | 'rtl';
  levels: string[];
  links: TheoremLink[];
  chapters: string[];
  status: ProofStatus;
  versions: TheoremVersion[];
  search: string;
}

/** What the index page needs (no maths HTML: statements are fetched when an entry is opened). */
export type TheoremSummary = Omit<TheoremEntry, 'versions'> & { versionCount: number };

// ---------------------------------------------------------------------------------------------

const LEVEL_ORDER = ['7eme', '8eme', '9eme', '1ere', '2eme', '3eme', '4eme'];
const LEVEL_LABEL: Record<string, string> = {
  '7eme': '7ème', '8eme': '8ème', '9eme': '9ème',
  '1ere': '1ère', '2eme': '2ème', '3eme': '3ème', '4eme': '4ème',
};
const SECTION_SHORT: Record<string, string> = {
  'Mathématiques': 'Maths',
  'Sciences Expérimentales': 'Sc. exp.',
  'Economie et Gestion': 'Éco-Gestion',
  "Technologies de l'Informatique": 'Info',
};

const ARABIC = /[؀-ۿ]/;
const levelLabel = (level: string) => LEVEL_LABEL[level] ?? level;
const slugify = (t: string) => encodeURIComponent(t.toLowerCase().trim().replace(/\s+/g, '-'));
const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

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

const ADMIS_SUFFIX = /\s*\(\s*admis(e|es)?\s*\)\s*$/i;

/** The key two boxes must share to be the same wiki entry. */
function keyOf(name: string): string {
  return plainText(name)
    .replace(ADMIS_SUFFIX, '')
    .replace(/[ً-ٰٟـ]/g, '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9؀-ۿ]+/g, ' ')
    .trim();
}

interface AliasGroup {
  name: string;
  ar?: string;
  names?: string[];
}

function loadAliases(): Map<string, AliasGroup> {
  const map = new Map<string, AliasGroup>();
  const file = path.join(process.cwd(), 'lessons', '_theorem-aliases.json');
  if (!fs.existsSync(file)) return map;
  const parsed = JSON.parse(fs.readFileSync(file, 'utf8')) as { groups?: AliasGroup[] };
  for (const group of parsed.groups ?? []) {
    for (const n of [group.name, ...(group.names ?? [])]) map.set(keyOf(n), group);
  }
  return map;
}

// ---------------------------------------------------------------------------------------------

const parser = unified().use(remarkParse).use(remarkGfm).use(remarkMath).use(remarkDirective);

interface RawTheorem {
  node: any;
  parent: any;
  index: number;
  number: number;
}

/** Theorem boxes in document order — the same order the renderer numbers them in ("Théorème 3"). */
function collectTheorems(tree: any): RawTheorem[] {
  const found: RawTheorem[] = [];
  let count = 0;
  const walk = (node: any) => {
    if (!Array.isArray(node.children)) return;
    node.children.forEach((child: any, index: number) => {
      if (child.type === 'containerDirective' && child.name === 'theorem') {
        count += 1;
        found.push({ node: child, parent: node, index, number: count });
      }
      walk(child);
    });
  };
  walk(tree);
  return found;
}

/** Boxes that open a new statement: a proof found beyond one of them belongs to that one, not to ours. */
const NEW_STATEMENT = new Set(['theorem', 'definition', 'property', 'example', 'method', 'check', 'corollary']);

/** The `:::proof` that follows a theorem: right after it, or after a sentence or two (a remark, a figure…). */
function proofAfter(siblings: any[], index: number): any | null {
  for (const s of siblings.slice(index + 1, index + 4)) {
    if (s.type === 'heading' || s.type === 'thematicBreak') return null;
    if (s.type === 'containerDirective') {
      if (s.name === 'proof') return s;
      if (NEW_STATEMENT.has(s.name)) return null;
    }
  }
  return null;
}

const ADMITTED = { fr: /\badmis(e|es)?\b/i, ar: /نقبل|مقبول|(?:دون|بدون)\s+برهان/ };

/** A box renders as « Théorème 1 » when taken alone: put back the number it has in its lesson. */
function renumber(html: string, number: number): string {
  return html.replace(/(<span class="lesson-box__kind">[^<]*?)\s\d+(<\/span>)/, `$1 ${number}$2`);
}

const inline = (html: string) => html.replace(/^\s*<p>/, '').replace(/<\/p>\s*$/, '');

function linksFor(lesson: Lesson): TheoremLink[] {
  const hash = `#cours-${lesson.slug}`;
  const chapter = slugify(lesson.chapter);
  const label = levelLabel(lesson.level);
  if (lesson.school === 'college') {
    return [{ label, level: lesson.level, href: `/college/${lesson.level}/${chapter}${hash}` }];
  }
  if (!lesson.sections.length) {
    return [{ label, level: lesson.level, href: `/lycee/${lesson.level}/toutes-sections/${chapter}${hash}` }];
  }
  return lesson.sections.map(s => ({
    label: `${label} · ${SECTION_SHORT[s] ?? s}`,
    level: lesson.level,
    href: `/lycee/${lesson.level}/${slugify(s)}/${chapter}${hash}`,
  }));
}

interface Draft {
  name: string; // markdown (may hold $…$)
  version: TheoremVersion;
}

async function draftsOf(lesson: Lesson): Promise<Draft[]> {
  const source = lesson.content;
  const tree = parser.parse(source);
  const slice = (n: any) => source.slice(n.position.start.offset, n.position.end.offset);
  const drafts: Draft[] = [];

  for (const { node, parent, index, number } of collectTheorems(tree)) {
    const firstLine = slice(node).split('\n', 1)[0];
    const title = /^:+theorem\[([^\]]*)\]/.exec(firstLine)?.[1]?.trim();
    const name = String(node.attributes?.wiki ?? title ?? '').trim();
    if (!name) {
      console.warn(`[theoremIndex] ${lesson.slug}: theorem ${number} has no title, left out of the wiki`);
      continue;
    }

    const prev = parent.children[index - 1];
    const next = parent.children[index + 1];
    const proofNode = proofAfter(parent.children, index);
    const nearby = [slice(node), prev?.type === 'paragraph' ? slice(prev) : '', next?.type === 'paragraph' ? slice(next) : ''].join('\n');
    const status: ProofStatus = proofNode ? 'proved' : ADMITTED[lesson.lang].test(nearby) ? 'admitted' : 'stated';

    drafts.push({
      name,
      version: {
        lessonSlug: lesson.slug,
        lessonTitle: lesson.title,
        chapter: lesson.chapter,
        lang: lesson.lang,
        level: lesson.level,
        levelLabel: levelLabel(lesson.level),
        number,
        status,
        statementHtml: renumber(await renderLessonHtml(slice(node), lesson.lang), number),
        proofHtml: proofNode ? await renderLessonHtml(slice(proofNode), lesson.lang) : null,
        links: linksFor(lesson),
      },
    });
  }
  return drafts;
}

const STATUS_RANK: Record<ProofStatus, number> = { proved: 2, admitted: 1, stated: 0 };

async function buildEntries(): Promise<TheoremEntry[]> {
  const aliases = loadAliases();
  const lessons = getAllLessons();
  const groups = new Map<string, { name: string; ar?: string; versions: TheoremVersion[] }>();

  for (const lesson of lessons) {
    for (const { name, version } of await draftsOf(lesson)) {
      const alias = aliases.get(keyOf(name));
      const key = alias ? keyOf(alias.name) : keyOf(name);
      const group = groups.get(key) ?? { name: alias?.name ?? name.replace(ADMIS_SUFFIX, ''), ar: alias?.ar, versions: [] };
      group.versions.push(version);
      groups.set(key, group);
    }
  }

  const entries: TheoremEntry[] = [];
  for (const [key, group] of groups) {
    const versions = group.versions.sort(
      (a, b) => LEVEL_ORDER.indexOf(a.level) - LEVEL_ORDER.indexOf(b.level) || a.number - b.number
    );
    const plain = plainText(group.name);
    const links: TheoremLink[] = [];
    for (const v of versions) for (const l of v.links) if (!links.some(x => x.href === l.href)) links.push(l);
    const levels = [...new Set(versions.map(v => v.level))];
    const chapters = [...new Set(versions.map(v => v.chapter))];
    const status = versions.reduce<ProofStatus>((best, v) => (STATUS_RANK[v.status] > STATUS_RANK[best] ? v.status : best), 'stated');
    const hash = createHash('sha1').update(key).digest('hex').slice(0, 6);
    const ascii = keyOf(group.name).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40);

    entries.push({
      id: `${ascii || 'theoreme'}-${hash}`,
      name: plain,
      nameHtml: inline(await renderLessonHtml(group.name, ARABIC.test(group.name) ? 'ar' : 'fr')),
      altName: group.ar,
      dir: ARABIC.test(group.name) ? 'rtl' : 'ltr',
      levels,
      links,
      chapters,
      status,
      versions,
      search: [plain, group.ar, ...chapters, ...versions.map(v => v.lessonTitle)].filter(Boolean).join(' ').toLowerCase()
        + ' ' + key,
    });
  }

  // Latin names first (A→Z in French), Arabic-only entries after.
  return entries.sort((a, b) =>
    Number(a.dir === 'rtl') - Number(b.dir === 'rtl') || a.name.localeCompare(b.name, a.dir === 'rtl' ? 'ar' : 'fr', { sensitivity: 'base' })
  );
}

let cache: Promise<TheoremEntry[]> | null = null;

export function getTheoremEntries(): Promise<TheoremEntry[]> {
  if (process.env.NODE_ENV !== 'production') return buildEntries(); // lessons change while editing
  return (cache ??= buildEntries());
}

export async function getTheoremSummaries(): Promise<TheoremSummary[]> {
  return (await getTheoremEntries()).map(({ versions, ...rest }) => ({ ...rest, versionCount: versions.length }));
}

export async function getTheoremEntry(id: string): Promise<TheoremEntry | undefined> {
  return (await getTheoremEntries()).find(e => e.id === id);
}

export const ENTRY_LABELS = {
  fr: { proof: 'Voir la démonstration', admitted: 'Admis dans ce cours', stated: 'Énoncé seul' },
  ar: { proof: 'عرض البرهان', admitted: 'مقبولة دون برهان', stated: 'نص فقط' },
} as const;

/** HTML fragment shown when an entry is opened: one block per version (statement, proof, link to the lesson). */
export function entryFragmentHtml(entry: TheoremEntry): string {
  return entry.versions
    .map(v => {
      const t = ENTRY_LABELS[v.lang];
      const dir = v.lang === 'ar' ? 'rtl' : 'ltr';
      const links = v.links
        .map(l => `<a class="wiki-version__link" href="${escapeHtml(l.href)}">${escapeHtml(l.label)}</a>`)
        .join('');
      const proof = v.proofHtml
        ? `<details class="wiki-proof"><summary>${t.proof}</summary>${v.proofHtml}</details>`
        : `<p class="wiki-proof wiki-proof--${v.status}">${v.status === 'admitted' ? t.admitted : t.stated}</p>`;
      return (
        `<section class="wiki-version" dir="${dir}">` +
        `<div class="wiki-version__head"><span class="wiki-version__chapter">${escapeHtml(v.chapter)}</span>` +
        `<span class="wiki-version__links">${links}</span></div>` +
        `<div class="lesson-content" dir="${dir}">${v.statementHtml}${proof}</div>` +
        `</section>`
      );
    })
    .join('');
}
