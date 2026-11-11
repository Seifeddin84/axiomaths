/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';
import path from 'path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkDirective from 'remark-directive';
import matter from 'gray-matter';
import { getAllLessons } from '@/lib/lessonReader';
import { renderLessonHtml } from '@/lib/lessonHtml';
import type { Lesson } from '@/types/lesson';
import { entryOf, idOf, plainText } from '@/lib/theoremKeys';

export { plainText };

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
  /** a figure placed right before or right after the theorem in its lesson */
  figureHtml: string | null;
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
  /** full proof written for the wiki only (lessons/_wiki/*.md): step table and/or exam-style write-up */
  wikiProofHtml: string | null;
  /** the theorem is admitted in the programme (« Admis » kept even with a wiki proof) */
  wikiAdmitted: boolean;
}

/** What the index page needs (no maths HTML: statements are fetched when an entry is opened). */
export type TheoremSummary = Omit<TheoremEntry, 'versions' | 'wikiProofHtml'> & { versionCount: number };

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

// ---------------------------------------------------------------------------------------------

const NO_LINKS = { wikiLinks: false } as const;

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
    const isFigure = (n: any) =>
      n?.type === 'paragraph' && n.children.filter((c: any) => !(c.type === 'text' && !c.value.trim())).length === 1 &&
      n.children.some((c: any) => c.type === 'image');
    const figureNode = isFigure(next) ? next : isFigure(prev) ? prev : null;
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
        statementHtml: renumber(await renderLessonHtml(slice(node), lesson.lang, NO_LINKS), number),
        proofHtml: proofNode ? await renderLessonHtml(slice(proofNode), lesson.lang, NO_LINKS) : null,
        figureHtml: figureNode ? await renderLessonHtml(slice(figureNode), lesson.lang, NO_LINKS) : null,
        links: linksFor(lesson),
      },
    });
  }
  return drafts;
}


/**
 * Proofs written for the wiki only, one file per theorem in lessons/_wiki/ :
 *   ---
 *   theorem: "Théorème de Rolle"   # wiki name (or any name of its alias group)
 *   admis: true                    # admitted in the programme: the « Admis » mention stays
 *   ---
 *   :::proof[…]  step table  :::        (omit when the lesson already has the table)
 *   :::redaction  one idea per line, exam style  :::
 */
interface WikiProof { key: string; markdown: string; admitted: boolean; lang: 'fr' | 'ar' }

function loadWikiProofs(): Map<string, WikiProof> {
  const dir = path.join(process.cwd(), 'lessons', '_wiki');
  const map = new Map<string, WikiProof>();
  if (!fs.existsSync(dir)) return map;
  for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.md'))) {
    const { data, content } = matter(fs.readFileSync(path.join(dir, file), 'utf8'));
    if (!data.theorem) {
      console.warn(`[theoremIndex] _wiki/${file}: no "theorem" in the frontmatter`);
      continue;
    }
    const key = entryOf(String(data.theorem)).key;
    map.set(key, { key, markdown: content, admitted: data.admis === true, lang: data.lang === 'ar' ? 'ar' : 'fr' });
  }
  return map;
}

const STATUS_RANK: Record<ProofStatus, number> = { proved: 2, admitted: 1, stated: 0 };

async function buildEntries(): Promise<TheoremEntry[]> {
  const lessons = getAllLessons();
  const groups = new Map<string, { name: string; ar?: string; versions: TheoremVersion[] }>();

  for (const lesson of lessons) {
    for (const { name, version } of await draftsOf(lesson)) {
      const e = entryOf(name);
      const group = groups.get(e.key) ?? { name: e.name, ar: e.alias?.ar, versions: [] };
      group.versions.push(version);
      groups.set(e.key, group);
    }
  }

  const wikiProofs = loadWikiProofs();
  const unused = new Set(wikiProofs.keys());
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
    const lessonStatus = versions.reduce<ProofStatus>((best, v) => (STATUS_RANK[v.status] > STATUS_RANK[best] ? v.status : best), 'stated');
    const wiki = wikiProofs.get(key);
    unused.delete(key);
    const wikiAdmitted = Boolean(wiki?.admitted) || versions.some(v => v.status === 'admitted');
    // a wiki proof proves the theorem, but an admitted one stays « Admis » (with its proof for the curious)
    const status: ProofStatus = wiki ? (wikiAdmitted ? 'admitted' : 'proved') : lessonStatus;
    const wikiProofHtml = wiki ? await renderLessonHtml(wiki.markdown, wiki.lang, NO_LINKS) : null;
    entries.push({
      id: idOf(key, group.name),
      name: plain,
      nameHtml: inline(await renderLessonHtml(group.name, ARABIC.test(group.name) ? 'ar' : 'fr', NO_LINKS)),
      altName: group.ar,
      dir: ARABIC.test(group.name) ? 'rtl' : 'ltr',
      levels,
      links,
      chapters,
      status,
      versions,
      wikiProofHtml,
      wikiAdmitted,
      search: [plain, group.ar, ...chapters, ...versions.map(v => v.lessonTitle)].filter(Boolean).join(' ').toLowerCase()
        + ' ' + key,
    });
  }

  // Latin names first (A→Z in French), Arabic-only entries after.
  for (const key of unused) console.warn(`[theoremIndex] lessons/_wiki: no theorem matches "${key}"`);
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
  fr: { proof: 'Voir la démonstration', curious: 'Admis · la démonstration pour les curieux', admitted: 'Admis dans ce cours', stated: 'Énoncé seul' },
  ar: { proof: 'عرض البرهان', curious: 'مقبولة في البرنامج · برهان للفضوليين', admitted: 'مقبولة دون برهان', stated: 'نص فقط' },
} as const;

/** HTML fragment shown when an entry is opened: one block per version (statement, proof, link to the lesson). */
export function entryFragmentHtml(entry: TheoremEntry): string {
  const wiki = entry.wikiProofHtml;
  const lessonProofs = entry.versions.filter(v => v.proofHtml);
  // usual case: one lesson proof (step table) → the exam-style write-up goes right under it, same toggle
  const host = wiki && lessonProofs.length === 1 ? lessonProofs[0] : null;
  const toggle = (lang: 'fr' | 'ar', body: string) => {
    const t = ENTRY_LABELS[lang];
    const curious = entry.wikiAdmitted && Boolean(wiki);
    return `<details class="wiki-proof${curious ? ' wiki-proof--curious' : ''}"><summary>${curious ? t.curious : t.proof}</summary>${body}</details>`;
  };

  const sections = entry.versions.map(v => {
    const t = ENTRY_LABELS[v.lang];
    const dir = v.lang === 'ar' ? 'rtl' : 'ltr';
    const links = v.links
      .map(l => `<a class="wiki-version__link" href="${escapeHtml(l.href)}">${escapeHtml(l.label)}</a>`)
      .join('');
    const proof = v.proofHtml
      ? toggle(v.lang, v.proofHtml + (v === host ? wiki : ''))
      : wiki
        ? ''
        : `<p class="wiki-proof wiki-proof--${v.status}">${v.status === 'admitted' ? t.admitted : t.stated}</p>`;
    return (
      `<section class="wiki-version" dir="${dir}">` +
      `<div class="wiki-version__head"><span class="wiki-version__chapter">${escapeHtml(v.chapter)}</span>` +
      `<span class="wiki-version__links">${links}</span></div>` +
      `<div class="lesson-content" dir="${dir}">${v.statementHtml}${v.figureHtml ?? ''}${proof}</div>` +
      `</section>`
    );
  });

  if (wiki && !host) {
    const lang = entry.dir === 'rtl' ? 'ar' : 'fr';
    sections.push(`<section class="wiki-version wiki-version--proof"><div class="lesson-content" dir="${entry.dir}">${toggle(lang, wiki)}</div></section>`);
  }
  return sections.join('');
}
