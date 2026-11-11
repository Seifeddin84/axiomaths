import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { BAC_SECTIONS, getBacPapers } from '@/lib/bac';
import { renderLessonHtml } from '@/lib/lessonHtml';
import { getNavTree } from '@/lib/navTree';
import { normalize } from '@/lib/lessonReader';
import 'katex/dist/katex.min.css';
import BacPaperTabs from '@/components/BacPaperTabs';
import { getAllExercises } from '@/lib/fileReader';
import { exerciseSections } from '@/lib/bac';
import { titleHtml } from '@/lib/bacTex';

export function generateStaticParams() {
  return getBacPapers().map(p => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const p = getBacPapers().find(x => x.id === id);
  if (!p) return {};
  return {
    title: `Bac ${p.year} ${p.subject} · session ${p.session} | Axiomaths`,
    description: `Sujet du baccalauréat tunisien de ${p.subject.toLowerCase()}, ${p.month ?? ''} ${p.year}, section ${p.sectionLabel} : énoncé en ligne, original d'époque et PDF.`,
  };
}

const SESSION_LABEL: Record<string, string> = { principale: 'Session principale', 'contrôle': 'Session de contrôle', controle: 'Session de contrôle' };

export default async function BacPaperPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const paper = getBacPapers().find(p => p.id === id);
  if (!paper) notFound();

  // chapter pages of 4ème, in the sections of the paper (Mathématiques first)
  const level = getNavTree()['lycee/4eme'];
  const sectionTitles = BAC_SECTIONS.filter(s => paper.sections.includes(s.slug)).map(s => s.label);
  const chapterHref = (chapter: string): string | undefined => {
    const sections = [...(level?.sections ?? [])].sort(
      (a, b) => Number(!sectionTitles.some(t => normalize(t) === normalize(a.title))) - Number(!sectionTitles.some(t => normalize(t) === normalize(b.title)))
    );
    for (const sec of sections) {
      const hit = sec.chapters.find(c => normalize(c.title) === normalize(chapter));
      if (hit) return hit.href;
    }
    return undefined;
  };

  // bank exercise -> its chapter page, opened on the card (#ex-<uid>)
  const bank = new Map(getAllExercises().map(e => [e.uid, e]));
  const bankHref = (uid: string): string => {
    const ex = bank.get(uid);
    if (!ex?.chapter) return `/recherche?q=${uid}`;
    const tree = getNavTree()[`lycee/${normalize(ex.level ?? '')}`] ?? level;
    const own = exerciseSections(ex).map(normalize);
    const sections = [...(tree?.sections ?? [])].sort(
      (a, b) => Number(!own.includes(normalize(a.title))) - Number(!own.includes(normalize(b.title)))
    );
    for (const sec of sections) {
      const hit = sec.chapters.find(c => normalize(c.title) === normalize(ex.chapter!));
      if (hit) return `${hit.href}#ex-${uid}`;
    }
    return `/recherche?q=${uid}`;
  };

  const blocks = await Promise.all(
    paper.blocks.map(async b => ({ ...b, html: await renderLessonHtml(b.markdown, 'fr', { wikiLinks: false }) }))
  );
  const btn = 'inline-flex items-center justify-center min-h-[44px] px-4 rounded-lg text-sm font-bold transition-colors';

  const enonce = (
    <div className="space-y-6">
      {blocks.map((b, i) => (
        <section key={i} className="rounded-lg border-2 border-gray-200 dark:border-gray-700 p-4 sm:p-6">
          <header className="mb-3">
            <h2 className="text-xl font-black text-gray-900 dark:text-white">
              <span dangerouslySetInnerHTML={{ __html: b.label }} />
              {b.points ? <span className="text-gray-500 font-bold"> ({b.points} points)</span> : null}
            </h2>
            {b.title && <p className="text-sm font-semibold text-gray-600 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: titleHtml(b.title) }} />}
            <div className="mt-2 flex flex-wrap gap-2">
              {b.horsProgramme && (
                <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-bold">
                  hors programme actuel
                </span>
              )}
              {b.chapitres.map(c => {
                const href = chapterHref(c);
                return href ? (
                  <Link key={c} href={href} className="px-2 py-1 rounded-md bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-bold hover:underline">
                    Cours : {c} →
                  </Link>
                ) : (
                  <span key={c} className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-bold text-gray-600">{c}</span>
                );
              })}
              {b.banque && (
                <Link href={bankHref(b.banque)} className="px-2 py-1 rounded-md bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-bold hover:underline">
                  Corrigé dans la banque : exercice #{b.banque} →
                </Link>
              )}
            </div>
          </header>
          <div className="lesson-content bac-paper" dangerouslySetInnerHTML={{ __html: b.html }} />
        </section>
      ))}
    </div>
  );

  const original =
    paper.scans.length > 0 ? (
      <div className="space-y-4">
        <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
          Le sujet tel qu&apos;il a été distribué en {paper.month?.toLowerCase()} {paper.year} ({paper.ministere}).
        </p>
        {paper.scans.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={src} src={src} alt={`Sujet original du bac ${paper.year}, page ${i + 1}`} loading="lazy" className="w-full rounded-lg border border-gray-200 dark:border-gray-700" />
        ))}
      </div>
    ) : (
      <p className="text-gray-500 font-semibold">L&apos;original de ce sujet n&apos;est pas encore numérisé.</p>
    );

  const pdf = (
    <div className="space-y-3">
      {paper.files.axiomath && (
        <a href={paper.files.axiomath} target="_blank" rel="noopener noreferrer" className={`${btn} w-full bg-orange-500 text-white hover:bg-orange-600`}>
          Sujet · version AxioMath (PDF composé en LaTeX)
        </a>
      )}
      {paper.files.corrige && (
        <a href={paper.files.corrige} target="_blank" rel="noopener noreferrer" className={`${btn} w-full border-2 border-teal-600 text-teal-700 dark:text-teal-400`}>
          Corrigé (PDF)
        </a>
      )}
      {paper.files.original && (
        <a href={paper.files.original} target="_blank" rel="noopener noreferrer" className={`${btn} w-full border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200`}>
          Original d&apos;époque (scan PDF)
        </a>
      )}
      {paper.files.tex && (
        <a href={paper.files.tex} download className="block text-center text-sm font-semibold text-gray-500 underline">
          Source LaTeX (.tex, classe axiobac)
        </a>
      )}
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <nav className="mb-4 text-sm font-semibold text-accent-600 dark:text-primary-400">
        <Link href="/" className="hover:underline">Accueil</Link>
        <span className="mx-2 text-gray-400">›</span>
        <Link href="/bac" className="hover:underline">Sujets du bac</Link>
        <span className="mx-2 text-gray-400">›</span>
        <span className="text-gray-700 dark:text-gray-300">{paper.year}</span>
      </nav>
      <h1 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white">
        Bac {paper.year} · {paper.subject}
      </h1>
      <p className="mt-2 text-base font-bold text-gray-600 dark:text-gray-400">
        {SESSION_LABEL[paper.session] ?? paper.session}
        {paper.month ? ` (${paper.month} ${paper.year})` : ''} · Section {paper.sectionLabel}
        {paper.duration ? ` · ${paper.duration}` : ''}
        {paper.coefficient ? ` · coef. ${paper.coefficient}` : ''}
      </p>
      {paper.notes && <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{paper.notes}</p>}
      <div className="mt-6">
        <BacPaperTabs enonce={enonce} original={original} pdf={pdf} />
      </div>
    </div>
  );
}
