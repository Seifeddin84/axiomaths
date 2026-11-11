// The bac: sections of 4ème année and what counts as a bac exercise or a bac paper.
//
// An exercise is a bac exercise when its `source` starts with "Bac" (e.g. "Bac Tunisie 1984")
// or when its tags contain "bac". Matching the word anywhere would also catch books such as
// "MAXI MATHS 2ÈME BAC" (Moroccan terminale) — so the rule is deliberately strict.
//
// A bac paper is a YAML file of public/exams/ (same format as the devoirs) whose `exam_type`
// starts with "Bac", e.g. exam_type: "Bac session principale", level: "4eme", section: "Mathématiques".

import type { Exercise } from '@/types/exercise';
import type { Exam } from '@/lib/exams';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { foldText } from '@/lib/fuzzy';
import { parseBacTex, type BacTexBlock } from '@/lib/bacTex';

export interface BacSection {
  slug: string;
  label: string;
  short: string;
  /** folded words that identify the section in the `section` field of the data */
  match: string[];
}

export const BAC_SECTIONS: BacSection[] = [
  { slug: 'mathematiques', label: 'Mathématiques', short: 'Maths', match: ['mathematique', 'maths'] },
  { slug: 'sciences-experimentales', label: 'Sciences expérimentales', short: 'Sc. exp.', match: ['experimental'] },
  { slug: 'sciences-techniques', label: 'Sciences techniques', short: 'Technique', match: ['technique'] },
  { slug: 'informatique', label: "Sciences de l'informatique", short: 'Info', match: ['informatique'] },
  { slug: 'economie-gestion', label: 'Économie et gestion', short: 'Éco-gestion', match: ['economie', 'gestion'] },
  { slug: 'lettres', label: 'Lettres', short: 'Lettres', match: ['letre'] },
  { slug: 'sport', label: 'Sport', short: 'Sport', match: ['sport'] },
];

export function bacSectionSlugs(sectionNames: (string | null | undefined)[]): string[] {
  const folded = sectionNames.filter(Boolean).map(s => foldText(s));
  return BAC_SECTIONS.filter(sec => folded.some(f => sec.match.some(m => f.includes(foldText(m))))).map(s => s.slug);
}

export function exerciseSections(ex: Exercise): string[] {
  return [...(Array.isArray(ex.sections) ? ex.sections : []), ...(ex.section ? [ex.section] : [])].filter(
    s => typeof s === 'string' && s !== 'null'
  );
}

export function isBacExercise(ex: Exercise): boolean {
  return /^\s*bac\b/i.test(ex.source ?? '') || (ex.tags ?? []).some(t => foldText(t) === 'bac');
}

export function isBacExam(exam: Exam): boolean {
  return /^\s*bac\b/i.test(String(exam.exam_type ?? ''));
}

// ---------------------------------------------------------------------------------------------
// Bac papers: public/bac/<id>/sujet.yaml + axiomath.pdf (rewritten in LaTeX) + original.pdf (scan)
// + sujet.tex (source) + corrige.pdf (optional). Only these appear under « Sujets du bac ».

export interface BacPaper {
  id: string;
  year: number;
  session: string;
  month?: string;
  subject: string;
  sections: string[];        // slugs of BAC_SECTIONS
  sectionLabel: string;      // historical name of the section
  ministere?: string;
  duration?: string;
  coefficient?: string;
  blocks: BacTexBlock[];     // exercises and problem parts, read from sujet.tex
  notes?: string;
  scans: string[];           // original-1.jpg, original-2.jpg, … (pages of the original)
  previews: string[];        // axiomath-1.png, … (pages of the AxioMath PDF, for the preview)
  files: { axiomath?: string; original?: string; tex?: string; corrige?: string };
}

/**
 * Every folder public/bac/<id>/ with a sujet.tex (class latex/axiobac.cls). Metadata and
 * statements come from the .tex; sujet.yaml only adds notes. Only full papers live here.
 */
export function getBacPapers(): BacPaper[] {
  const root = path.join(process.cwd(), 'public', 'bac');
  if (!fs.existsSync(root)) return [];
  const papers: BacPaper[] = [];
  for (const id of fs.readdirSync(root).sort()) {
    const dir = path.join(root, id);
    const texFile = path.join(dir, 'sujet.tex');
    if (!fs.existsSync(texFile)) continue;
    const { meta, blocks } = parseBacTex(fs.readFileSync(texFile, 'utf8'));
    const extra = fs.existsSync(path.join(dir, 'sujet.yaml'))
      ? ((yaml.load(fs.readFileSync(path.join(dir, 'sujet.yaml'), 'utf8')) as Record<string, any>) ?? {})
      : {};
    const file = (name: string) => (fs.existsSync(path.join(dir, name)) ? `/bac/${id}/${name}` : undefined);
    const pages = (prefix: string) =>
      fs
        .readdirSync(dir)
        .filter(f => new RegExp(`^${prefix}-\\d+\\.(jpe?g|png|webp)$`).test(f))
        .sort((a, b) => Number(/\d+/.exec(a)![0]) - Number(/\d+/.exec(b)![0]))
        .map(f => `/bac/${id}/${f}`);
    const scans = pages('original');
    const previews = pages('axiomath');
    papers.push({
      id,
      year: meta.annee,
      session: meta.session,
      month: meta.mois,
      subject: meta.epreuve,
      sections: meta.sections,
      sectionLabel: meta.sectionbac,
      ministere: meta.ministere,
      duration: meta.duree,
      coefficient: meta.coefficient,
      blocks,
      notes: extra.notes,
      scans,
      previews,
      files: { axiomath: file('axiomath.pdf'), original: file('original.pdf'), tex: file('sujet.tex'), corrige: file('corrige.pdf') },
    });
  }
  return papers.sort((a, b) => b.year - a.year || a.session.localeCompare(b.session));
}

/** « Bac 1984 · session principale » */
export function bacPaperName(p: Pick<BacPaper, 'year' | 'session'>): string {
  return `Bac ${p.year} · session ${p.session}`;
}
