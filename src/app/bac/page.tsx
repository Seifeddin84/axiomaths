import Link from 'next/link';
import type { Metadata } from 'next';
import { BAC_SECTIONS, getBacPapers } from '@/lib/bac';

export const metadata: Metadata = {
  title: 'Sujets du bac de mathématiques | Axiomaths',
  description: 'Sujets du baccalauréat tunisien de mathématiques, réécrits en LaTeX, avec le sujet original en archive.',
};

const SESSION_LABEL: Record<string, string> = { principale: 'Session principale', 'contrôle': 'Session de contrôle', controle: 'Session de contrôle' };

export default async function BacPage({ searchParams }: { searchParams: Promise<{ section?: string }> }) {
  const { section } = await searchParams;
  const current = BAC_SECTIONS.find(s => s.slug === section);
  const papers = getBacPapers();
  const shown = current ? papers.filter(p => p.sections.includes(current.slug)) : papers;
  const count = (slug: string) => papers.filter(p => p.sections.includes(slug)).length;

  const chip = 'inline-flex items-center gap-2 px-3 py-2 rounded-full border-2 text-sm font-bold transition-colors';
  const on = 'border-accent-500 bg-accent-500 text-white dark:border-primary-500 dark:bg-primary-500';
  const off = 'border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:border-accent-500 dark:hover:border-primary-500';
  const empty = 'border-dashed border-gray-200 dark:border-gray-800 text-gray-400 dark:text-gray-500';
  const btn = 'inline-flex items-center justify-center min-h-[44px] px-4 rounded-lg text-sm font-bold transition-colors';

  // group by year, most recent first
  const years = [...new Set(shown.map(p => p.year))];

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
        Chaque sujet existe en deux versions : réécrit proprement par AxioMath, et l&apos;original d&apos;époque, en archive.
      </p>

      <ul className="flex flex-wrap gap-2 mb-8">
        <li>
          <Link href="/bac" className={`${chip} ${!current ? on : off}`}>
            Toutes <span className="opacity-80">{papers.length}</span>
          </Link>
        </li>
        {BAC_SECTIONS.map(s => {
          const n = count(s.slug);
          return (
            <li key={s.slug}>
              <Link href={`/bac?section=${s.slug}`} className={`${chip} ${current?.slug === s.slug ? on : n === 0 ? empty : off}`}>
                {s.short} <span className="opacity-80">{n}</span>
              </Link>
            </li>
          );
        })}
      </ul>

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
              {shown.filter(p => p.year === year).map(p => (
                <li key={p.id} className="p-4 sm:p-5 rounded-lg border-2 border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-black text-gray-900 dark:text-white">
                      {p.subject} · {SESSION_LABEL[p.session] ?? p.session}{p.month ? ` (${p.month} ${p.year})` : ''}
                    </h3>
                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                      {[p.duration, p.coefficient ? `coef. ${p.coefficient}` : ''].filter(Boolean).join(' · ')}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-bold text-gray-600 dark:text-gray-400">Section : {p.sectionLabel}</p>

                  {p.exercises.length > 0 && (
                    <ul className="mt-3 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      {p.exercises.map((e, i) => (
                        <li key={i}>
                          <span className="font-semibold">{e.title}</span>
                          {e.points ? <span className="text-gray-500"> · {e.points} pts</span> : null}
                          {e.chapters?.length ? <span className="text-gray-500"> · {e.chapters.join(', ')}</span> : null}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.files.axiomath && (
                      <a href={p.files.axiomath} target="_blank" rel="noopener noreferrer" className={`${btn} bg-orange-500 text-white hover:bg-orange-600`}>
                        Sujet · version AxioMath (PDF)
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
