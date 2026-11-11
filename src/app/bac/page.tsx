import 'katex/dist/katex.min.css';
import { titleHtml } from '@/lib/bacTex';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BAC_SECTIONS, getBacPapers } from '@/lib/bac';

export const metadata: Metadata = {
  title: 'Sujets du bac de mathématiques | Axiomaths',
  description: 'Sujets du baccalauréat tunisien de mathématiques, réécrits en LaTeX, avec le sujet original en archive.',
};

const SESSION_LABEL: Record<string, string> = { principale: 'Session principale', 'contrôle': 'Session de contrôle', controle: 'Session de contrôle' };

export default async function BacPage({ searchParams }: { searchParams: Promise<{ section?: string; ordre?: string }> }) {
  const { section, ordre } = await searchParams;
  const ascending = ordre === 'asc';
  // keep the other parameter when one changes
  const href = (sec: string | undefined, asc: boolean) => {
    const q = new URLSearchParams();
    if (sec) q.set('section', sec);
    if (asc) q.set('ordre', 'asc');
    const qs = q.toString();
    return qs ? `/bac?${qs}` : '/bac';
  };
  const current = BAC_SECTIONS.find(s => s.slug === section);
  const papers = getBacPapers();
  const shown = current ? papers.filter(p => p.sections.includes(current.slug)) : papers;
  const count = (slug: string) => papers.filter(p => p.sections.includes(slug)).length;

  const chip = 'inline-flex items-center gap-2 px-3 py-2 rounded-full border-2 text-sm font-bold transition-colors';
  const on = 'border-accent-500 bg-accent-500 text-white dark:border-primary-500 dark:bg-primary-500';
  const off = 'border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:border-accent-500 dark:hover:border-primary-500';
  const empty = 'border-dashed border-gray-200 dark:border-gray-800 text-gray-400 dark:text-gray-500';
  const btn = 'inline-flex items-center justify-center min-h-[44px] px-4 rounded-lg text-sm font-bold transition-colors';

  // group by year, most recent first (or oldest first with ?ordre=asc); principale before contrôle
  const years = [...new Set(shown.map(p => p.year))].sort((a, b) => (ascending ? a - b : b - a));
  const sessionRank = (s: string) => (s === 'principale' ? 0 : 1);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <nav className="mb-4 text-sm font-semibold text-accent-600 dark:text-primary-400">
        <Link href="/" className="hover:underline">Accueil</Link>
        <span className="mx-2 text-gray-400">›</span>
        <span className="text-gray-700 dark:text-gray-300">Sujets du bac{current ? ` · ${current.label}` : ''}</span>
      </nav>

      <h1 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-3">
        Sujets du bac{current ? ` · ${current.short}` : ''}
      </h1>
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 font-semibold mb-6">
        Les sujets anciens sont réécrits proprement par AxioMath, avec l&apos;original d&apos;époque en archive.
      </p>

      <a
        href="https://www.bacweb.tn"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-3 mb-6 p-4 rounded-lg border-2 border-teal-600 bg-teal-50 dark:bg-teal-900/20 hover:bg-teal-100 dark:hover:bg-teal-900/40 transition-colors"
      >
        <span aria-hidden className="text-2xl leading-none">↗</span>
        <span>
          <span className="block font-black text-teal-800 dark:text-teal-300">Tous les sujets et leurs corrigés sur bacweb.tn</span>
          <span className="block text-sm font-semibold text-teal-900/80 dark:text-teal-200/80">
            Notre archive se complète petit à petit. En attendant, les sujets officiels de toutes les sections et leurs corrigés se téléchargent sur bacweb.tn.
          </span>
        </span>
      </a>

      <ul className="flex flex-wrap gap-2 mb-8">
        <li>
          <Link href={href(undefined, ascending)} className={`${chip} ${!current ? on : off}`}>
            Toutes <span className="opacity-80">{papers.length}</span>
          </Link>
        </li>
        {BAC_SECTIONS.map(s => {
          const n = count(s.slug);
          return (
            <li key={s.slug}>
              <Link href={href(s.slug, ascending)} className={`${chip} ${current?.slug === s.slug ? on : n === 0 ? empty : off}`}>
                {s.short} <span className="opacity-80">{n}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      {shown.length > 1 && (
        <div className="flex items-center gap-2 mb-6 text-sm font-bold" role="group" aria-label="Trier par année">
          <span className="text-gray-600 dark:text-gray-400">Trier :</span>
          <Link
            href={href(current?.slug, false)}
            aria-current={!ascending ? 'true' : undefined}
            className={`${chip} ${!ascending ? on : off}`}
          >
            Plus récents d&apos;abord ↓
          </Link>
          <Link
            href={href(current?.slug, true)}
            aria-current={ascending ? 'true' : undefined}
            className={`${chip} ${ascending ? on : off}`}
          >
            Plus anciens d&apos;abord ↑
          </Link>
        </div>
      )}

      {shown.length === 0 ? (
        <p className="p-4 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 font-semibold">
          Les sujets arrivent bientôt{current ? ` pour la section ${current.label}` : ''}.{' '}
          <Link href="/lycee/4eme" className="text-accent-600 dark:text-primary-400 underline">En attendant : cours et exercices de 4ème</Link>
        </p>
      ) : (
        years.map(year => (
          <section key={year} className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-3">{year}</h2>
            <ul className="space-y-4">
              {shown
                .filter(p => p.year === year)
                .sort((a, b) => sessionRank(a.session) - sessionRank(b.session))
                .map(p => (
                <li key={p.id} className="p-4 sm:p-5 rounded-lg border-2 border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-black">
                      <Link href={`/bac/${p.id}`} className="text-gray-900 dark:text-white hover:text-orange-600 hover:underline underline-offset-4">
                        {p.subject} · {SESSION_LABEL[p.session] ?? p.session}{p.month ? ` (${p.month} ${p.year})` : ''} →
                      </Link>
                    </h3>
                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                      {[p.duration, p.coefficient ? `coef. ${p.coefficient}` : ''].filter(Boolean).join(' · ')}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-bold text-gray-600 dark:text-gray-400">Section : {p.sectionLabel}</p>

                  <ul className="mt-3 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    {p.blocks.map((b, i) => (
                      <li key={i}>
                        <span className="font-semibold" dangerouslySetInnerHTML={{ __html: b.label }} />
                        {b.points ? <span className="text-gray-500"> ({b.points} pts)</span> : null}
                        {b.title ? <span> : <span dangerouslySetInnerHTML={{ __html: titleHtml(b.title) }} /></span> : null}
                        {b.horsProgramme && <span className="ms-2 px-1.5 py-0.5 rounded text-xs font-bold bg-gray-100 dark:bg-gray-800 text-gray-500">hors programme actuel</span>}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link href={`/bac/${p.id}`} className={`${btn} bg-teal-600 text-white hover:bg-teal-700`}>
                      Lire en ligne
                    </Link>
                    {p.files.axiomath && (
                      <a href={p.files.axiomath} target="_blank" rel="noopener noreferrer" className={`${btn} bg-orange-500 text-white hover:bg-orange-600`}>
                        PDF AxioMath
                      </a>
                    )}
                    {p.files.original && (
                      <a href={p.files.original} target="_blank" rel="noopener noreferrer" className={`${btn} border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:border-orange-500`}>
                        Original d&apos;époque (archive)
                      </a>
                    )}
                    {p.files.corrige && (
                      <a href={p.files.corrige} target="_blank" rel="noopener noreferrer" className={`${btn} border-2 border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-600 hover:text-white`}>
                        Corrigé
                      </a>
                    )}
                    {p.files.tex && (
                      <a href={p.files.tex} download className="inline-flex items-center min-h-[44px] px-2 text-sm font-semibold text-gray-500 hover:text-orange-500 underline">
                        source .tex
                      </a>
                    )}
                  </div>
                  {p.notes && <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">{p.notes}</p>}
                </li>
              ))}
            </ul>
          </section>
        ))
      )}
    </div>
  );
}
