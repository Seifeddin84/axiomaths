import { getAllExercises } from '@/lib/fileReader';
import ExercisesView from '@/components/ExercisesView';
import Link from 'next/link';

const LEVEL_DISPLAY: Record<string, string> = {
  '1ere': '1ère',
  '2eme': '2ème',
  '3eme': '3ème',
  '4eme': '4ème',
};

function normalize(text: string | undefined | null): string {
  if (!text) return '';
  return text
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');
}

function capitalize(text: string): string {
  return text
    .split(/[-\s]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ level: string; section: string; chapter: string }>;
}) {
  const { level, section, chapter } = await params;

  const decodedSection = decodeURIComponent(section);
  const decodedChapter = decodeURIComponent(chapter);

  const sectionDisplay = capitalize(decodedSection);
  const chapterDisplay = capitalize(decodedChapter);
  const levelDisplay = LEVEL_DISPLAY[level];

  const allExercises = await getAllExercises();

  const chapterExercises = allExercises.filter(ex => {
    const levelMatch = normalize(ex.level) === normalize(level);

    const sectionMatch = decodedSection === 'toutes-sections'
      ? true
      : (
        (ex.sections && Array.isArray(ex.sections) &&
          ex.sections.some(s => s && typeof s === 'string' && s !== 'null' && normalize(s) === normalize(decodedSection))) ||
        (ex.section && ex.section !== 'null' && normalize(ex.section) === normalize(decodedSection))
      );

    const chapterMatch = normalize(ex.chapter) === normalize(decodedChapter);

    return levelMatch && sectionMatch && chapterMatch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
      {/* Breadcrumb */}
      <nav className="flex items-center flex-wrap gap-1 text-sm font-semibold mb-8">
        <Link
          href="/lycee"
          className="text-accent-600 dark:text-primary-400 hover:text-accent-700 dark:hover:text-primary-300"
        >
          Lycée
        </Link>
        <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
        <Link
          href={`/lycee/${level}`}
          className="text-accent-600 dark:text-primary-400 hover:text-accent-700 dark:hover:text-primary-300"
        >
          {levelDisplay} Année
        </Link>

        {decodedSection !== 'toutes-sections' && (
          <>
            <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <Link
              href={`/lycee/${level}/${section}`}
              className="text-accent-600 dark:text-primary-400 hover:text-accent-700 dark:hover:text-primary-300"
            >
              {sectionDisplay}
            </Link>
          </>
        )}

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
          {chapterExercises.length} exercice{chapterExercises.length > 1 ? 's' : ''} disponible{chapterExercises.length > 1 ? 's' : ''}
        </p>
      </div>

      {/* Exercises */}
      {chapterExercises.length > 0 ? (
        <ExercisesView exercises={chapterExercises} />
      ) : (
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gray-100 dark:bg-gray-800 rounded-full">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">
            Aucun exercice disponible
          </h3>
          <p className="text-gray-600 dark:text-gray-400 font-semibold">
            Il n&apos;y a pas encore d&apos;exercices pour ce chapitre.
          </p>
        </div>
      )}
    </div>
  );
}