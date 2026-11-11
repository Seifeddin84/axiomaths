import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllExercises } from '@/lib/fileReader';
import { getAllExams } from '@/lib/exams';
import { BAC_SECTIONS, bacSectionSlugs, exerciseSections, isBacExam, isBacExercise } from '@/lib/bac';
import ExercisesView from '@/components/ExercisesView';

export const metadata: Metadata = {
  title: 'Bac — sujets et exercices de mathématiques | Axiomaths',
  description: 'Sujets du baccalauréat tunisien et exercices de bac, classés par section de 4ème année.',
};

export default async function BacPage({ searchParams }: { searchParams: Promise<{ section?: string }> }) {
  const { section } = await searchParams;
  const current = BAC_SECTIONS.find(s => s.slug === section);

  const exercises = getAllExercises().filter(isBacExercise);
  const papers = getAllExams().filter(isBacExam);

  const exSlugs = (ex: (typeof exercises)[number]) => bacSectionSlugs(exerciseSections(ex));
  const paperSlugs = (p: (typeof papers)[number]) => bacSectionSlugs([p.section]);

  const count = (slug: string) =>
    exercises.filter(ex => exSlugs(ex).includes(slug)).length + papers.filter(p => paperSlugs(p).includes(slug)).length;

  const shownExercises = current ? exercises.filter(ex => exSlugs(ex).includes(current.slug)) : exercises;
  const shownPapers = (current ? papers.filter(p => paperSlugs(p).includes(current.slug)) : papers).sort(
    (a, b) => String(b.year).localeCompare(String(a.year))
  );

  const chip = 'inline-flex items-center gap-2 px-3 py-2 rounded-full border-2 text-sm font-bold transition-colors';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <nav className="mb-4 text-sm font-semibold text-accent-600 dark:text-primary-400">
        <Link href="/" className="hover:underline">Accueil</Link>
        <span className="mx-2 text-gray-400">›</span>
        <span className="text-gray-700 dark:text-gray-300">Bac{current ? ` · ${current.label}` : ''}</span>
      </nav>

      <h1 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-3">
        Bac{current ? ` ${current.label}` : ''}
      </h1>
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 font-semibold mb-6">
        Sujets du baccalauréat et exercices de bac, par section de 4ème année.
      </p>

      <ul className="flex flex-wrap gap-2 mb-8">
        <li>
          <Link
            href="/bac"
            className={`${chip} ${!current ? 'border-accent-500 bg-accent-500 text-white dark:border-primary-500 dark:bg-primary-500' : 'border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:border-accent-500 dark:hover:border-primary-500'}`}
          >
            Toutes <span className="opacity-80">{exercises.length + papers.length}</span>
          </Link>
        </li>
        {BAC_SECTIONS.map(s => {
          const n = count(s.slug);
          const active = current?.slug === s.slug;
          return (
            <li key={s.slug}>
              <Link
                href={`/bac?section=${s.slug}`}
                className={`${chip} ${active ? 'border-accent-500 bg-accent-500 text-white dark:border-primary-500 dark:bg-primary-500' : n === 0 ? 'border-dashed border-gray-200 dark:border-gray-800 text-gray-400 dark:text-gray-500' : 'border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:border-accent-500 dark:hover:border-primary-500'}`}
              >
                {s.short} <span className="opacity-80">{n}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <section className="mb-10">
        <h2 className="text-xl font-black text-gray-900 dark:text-white mb-3">Sujets complets</h2>
        {shownPapers.length === 0 ? (
          <p className="p-4 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 font-semibold">
            Les sujets PDF du bac arrivent bientôt{current ? ` pour la section ${current.label}` : ''}.
          </p>
        ) : (
          <ul className="space-y-2">
            {shownPapers.map(p => (
              <li key={p.uid}>
                <a
                  href={p.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-accent-500 dark:hover:border-primary-500 transition-colors"
                >
                  <span>
                    <span className="block font-black text-gray-900 dark:text-white">
                      Bac {p.year} · {p.section}
                    </span>
                    <span className="block text-sm font-semibold text-gray-500 dark:text-gray-400">
                      {p.exam_type}{p.duration ? ` · ${p.duration}` : ''}
                    </span>
                  </span>
                  <span className="shrink-0 px-3 py-1 rounded bg-orange-500 text-white text-sm font-bold">PDF</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2 className="text-xl font-black text-gray-900 dark:text-white mb-3">
          Exercices de bac <span className="text-gray-500 dark:text-gray-400">({shownExercises.length})</span>
        </h2>
        {shownExercises.length === 0 ? (
          <p className="p-4 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 font-semibold">
            Pas encore d&apos;exercice de bac ici.{' '}
            <Link href="/lycee/4eme" className="text-accent-600 dark:text-primary-400 underline">
              Voir les cours et exercices de 4ème
            </Link>
          </p>
        ) : (
          <ExercisesView exercises={shownExercises} />
        )}
      </section>
    </div>
  );
}
