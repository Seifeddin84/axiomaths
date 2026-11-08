import Link from 'next/link';
import { notFound } from 'next/navigation';
import LessonRenderer from '@/components/LessonRenderer';
import {
  getAllLessons,
  getLessonBySlug,
  getAdjacentLessons,
  getChapterExercisesInfo,
  lessonLabel,
  LEVEL_DISPLAY,
  urlSlug,
} from '@/lib/lessonReader';
import { LessonHeading } from '@/types/lesson';

export function generateStaticParams() {
  return getAllLessons().map(l => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);
  if (!lesson) return {};
  return {
    title: `${lesson.title} — Cours ${lessonLabel(lesson)} | Axiomaths`,
    description: lesson.summary,
  };
}

/** Headings show `$…$` as plain text in the table of contents. */
function tocText(text: string) {
  return text.replace(/\$([^$]*)\$/g, '$1').replace(/\\[a-zA-Z]+/g, '').replace(/[{}]/g, '');
}

function Toc({ headings }: { headings: LessonHeading[] }) {
  return (
    <ol className="space-y-1 text-sm">
      {headings.map(h => (
        <li key={h.id} className={h.depth === 3 ? 'pl-4' : ''}>
          <a
            href={`#${h.id}`}
            className={`block py-1 leading-snug transition-colors hover:text-accent-600 dark:hover:text-primary-400 ${
              h.depth === 2
                ? 'font-bold text-gray-800 dark:text-gray-200'
                : 'font-medium text-gray-500 dark:text-gray-400'
            }`}
          >
            {tocText(h.text)}
          </a>
        </li>
      ))}
    </ol>
  );
}

const Chevron = () => (
  <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
);

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);
  if (!lesson) notFound();

  const { prev, next } = getAdjacentLessons(lesson);
  const exercises = getChapterExercisesInfo(lesson);
  const tocHeadings = lesson.headings.filter(h => h.depth === 2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center flex-wrap gap-1 text-sm font-semibold mb-8">
        <Link href={`/${lesson.school}`} className="text-accent-600 dark:text-primary-400 hover:underline">
          {lesson.school === 'college' ? 'Collège' : 'Lycée'}
        </Link>
        <Chevron />
        <Link href={`/${lesson.school}/${lesson.level}`} className="text-accent-600 dark:text-primary-400 hover:underline">
          {LEVEL_DISPLAY[lesson.level] ?? lesson.level} Année
        </Link>
        {lesson.sections[0] && (
          <>
            <Chevron />
            <Link href={`/${lesson.school}/${lesson.level}/${urlSlug(lesson.sections[0])}`} className="text-accent-600 dark:text-primary-400 hover:underline">
              {lesson.sections[0]}
            </Link>
          </>
        )}
        <Chevron />
        <Link href={exercises.href} className="text-accent-600 dark:text-primary-400 hover:underline">{lesson.chapter}</Link>
        <Chevron />
        <span className="text-gray-900 dark:text-white">Cours</span>
      </nav>

      {/* Header */}
      <header className="mb-10 max-w-3xl">
        <p className="text-xs font-black uppercase tracking-widest text-accent-600 dark:text-primary-400 mb-3">
          Cours · {lessonLabel(lesson)}
        </p>
        <h1 className="text-3xl sm:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-4">
          {lesson.title}
        </h1>
        {lesson.summary && (
          <p className="text-lg text-gray-600 dark:text-gray-300 font-serif leading-relaxed mb-5">{lesson.summary}</p>
        )}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
          <span>⏱ {lesson.readTime} min de lecture</span>
          {lesson.prerequisites.length > 0 && <span>Prérequis : {lesson.prerequisites.join(' · ')}</span>}
          {lesson.source && <span>Référence : {lesson.source}</span>}
        </div>
        <div className="mt-6">
          <Link
            href={exercises.href}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-lg bg-accent-500 text-white hover:bg-accent-600 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors"
          >
            S&apos;entraîner : exercices du chapitre
            {exercises.count > 0 && <span className="px-2 py-0.5 rounded bg-white/20 text-xs">{exercises.count}</span>}
          </Link>
        </div>
      </header>

      {/* Mobile table of contents */}
      {tocHeadings.length > 0 && (
        <details className="lg:hidden mb-8 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
          <summary className="cursor-pointer font-black text-gray-900 dark:text-white">Sommaire</summary>
          <div className="mt-3"><Toc headings={tocHeadings} /></div>
        </details>
      )}

      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-12">
        <article className="min-w-0 max-w-3xl">
          <LessonRenderer content={lesson.content} />

          {/* Prev / next */}
          <nav className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prev ? (
              <Link href={`/cours/${prev.slug}`} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-accent-500 dark:hover:border-primary-500">
                <span className="block text-xs font-bold text-gray-500 mb-1">← Chapitre précédent</span>
                <span className="font-black text-gray-900 dark:text-white">{prev.title}</span>
              </Link>
            ) : <span />}
            {next && (
              <Link href={`/cours/${next.slug}`} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-accent-500 dark:hover:border-primary-500 sm:text-right">
                <span className="block text-xs font-bold text-gray-500 mb-1">Chapitre suivant →</span>
                <span className="font-black text-gray-900 dark:text-white">{next.title}</span>
              </Link>
            )}
          </nav>
        </article>

        {/* Desktop table of contents */}
        {tocHeadings.length > 0 && (
          <aside className="hidden lg:block">
            <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
              <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-3">Sommaire</p>
              <Toc headings={tocHeadings} />
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
