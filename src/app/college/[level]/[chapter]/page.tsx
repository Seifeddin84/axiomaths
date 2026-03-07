import Link from 'next/link';
import { getAllExercises } from '@/lib/fileReader';
import ExercisesView from '@/components/ExercisesView';

const LEVEL_DISPLAY: Record<string, string> = {
  '7eme': '7ème',
  '8eme': '8ème',
  '9eme': '9ème',
};

function normalize(text: string | undefined | null): string {
  if (!text) return '';
  const trimmed = text.trim();

  // Arabic script: strip spaces AND hyphens for comparison
  // The URL builder replaces spaces with hyphens, so "الأعداد الكسرية"
  // becomes "الأعداد-الكسرية" in the URL — we strip both to match.
  if (/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/.test(trimmed)) {
    return trimmed.replace(/[\s\-_]+/g, '').toLowerCase();
  }

  // Latin text: strip diacritics and non-alphanumeric
  return trimmed
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');
}

function capitalize(text: string): string {
  // Don't capitalize Arabic — it has no case
  if (/[\u0600-\u06FF]/.test(text)) return text;
  return text
    .split(/[-\s]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default async function CollegeChapterExercisesPage({
  params,
}: {
  params: Promise<{ level: string; chapter: string }>;
}) {
  const { level, chapter } = await params;

  const decodedChapter = decodeURIComponent(chapter);
  const chapterDisplay = capitalize(decodedChapter);
  const levelDisplay = LEVEL_DISPLAY[level];

  const allExercises = await getAllExercises();

  const exercises = allExercises.filter(ex => {
    const levelMatch = normalize(ex.level) === normalize(level);
    const chapterMatch = normalize(ex.chapter) === normalize(decodedChapter);
    return levelMatch && chapterMatch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
      {/* Breadcrumb */}
      <nav className="flex items-center flex-wrap gap-1 text-sm font-semibold mb-8">
        <Link href="/college" className="text-accent-600 dark:text-primary-400 hover:text-accent-700 dark:hover:text-primary-300">
          Collège
        </Link>
        <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
        <Link href={`/college/${level}`} className="text-accent-600 dark:text-primary-400 hover:text-accent-700 dark:hover:text-primary-300">
          {levelDisplay} Année
        </Link>
        <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-900 dark:text-white">{chapterDisplay}</span>
      </nav>

      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <h1
          className="text-3xl sm:text-5xl font-black text-gray-900 dark:text-white mb-3"
          dir="auto"
          style={{ unicodeBidi: 'plaintext', textAlign: 'start' }}
        >
          {chapterDisplay}
        </h1>
        <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 font-semibold">
          {exercises.length} exercice{exercises.length > 1 ? 's' : ''} disponible{exercises.length > 1 ? 's' : ''}
        </p>
      </div>

      {exercises.length > 0 ? (
        <ExercisesView exercises={exercises} />
      ) : (
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gray-100 dark:bg-gray-800 rounded-full">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">Aucun exercice disponible</h3>
          <p className="text-gray-600 dark:text-gray-400 font-semibold">
            Il n&apos;y a pas encore d&apos;exercices pour ce chapitre.
          </p>
        </div>
      )}
    </div>
  );
}