import Link from 'next/link';
import { getAllExercises } from '@/lib/fileReader';

const LEVEL_DISPLAY: Record<string, string> = {
  '1ere': '1ère',
  '2eme': '2ème',
  '3eme': '3ème',
  '4eme': '4ème',
};

function slugify(text: string | undefined | null): string {
  if (!text) return '';
  if (typeof text !== 'string') return '';
  return encodeURIComponent(
    text.toLowerCase().trim().replace(/\s+/g, '-')
  );
}

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

export default async function SectionPage({
  params,
}: {
  params: Promise<{ level: string; section: string }>;
}) {
  const { level, section } = await params;

  const decodedSection = decodeURIComponent(section);
  const sectionDisplay = capitalize(decodedSection);
  const levelDisplay = LEVEL_DISPLAY[level];

  const allExercises = await getAllExercises();

  const sectionExercises = allExercises.filter(ex => {
    const levelMatch = normalize(ex.level) === normalize(level);
    const normalizedSection = normalize(decodedSection);
    const sectionMatch =
      (ex.sections && Array.isArray(ex.sections) &&
        ex.sections.some(s => s && typeof s === 'string' && s !== 'null' && normalize(s) === normalizedSection)) ||
      (ex.section && ex.section !== 'null' && normalize(ex.section) === normalizedSection);
    return levelMatch && sectionMatch;
  });

  const uniqueChapters = Array.from(
    new Set(
      sectionExercises
        .map(ex => ex.chapter)
        .filter((chapter): chapter is string => Boolean(chapter))
    )
  ).sort();

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
        <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-900 dark:text-white">{sectionDisplay}</span>
      </nav>

      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-5xl font-black text-gray-900 dark:text-white mb-3">
          {sectionDisplay}
        </h1>
        <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 font-semibold">
          {uniqueChapters.length} chapitre{uniqueChapters.length > 1 ? 's' : ''} •{' '}
          {sectionExercises.length} exercice{sectionExercises.length > 1 ? 's' : ''}
        </p>
      </div>

      {/* Chapter Cards */}
      {uniqueChapters.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {uniqueChapters.map((chapter) => {
            const chapterSlug = slugify(chapter);
            const exerciseCount = sectionExercises.filter(ex => ex.chapter === chapter).length;

            return (
              <Link
                key={chapter}
                href={`/lycee/${level}/${section}/${chapterSlug}`}
                className="group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-primary-500/10 dark:from-accent-500/20 dark:to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative p-5 sm:p-6 border-2 border-gray-300 dark:border-gray-700 rounded-lg group-hover:border-accent-500 dark:group-hover:border-primary-500 group-hover:shadow-xl transition-all bg-white dark:bg-gray-800">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-start justify-between mb-4">
                    <h2
                      className="text-lg sm:text-xl font-black text-gray-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-primary-400 transition-colors flex-1 pr-2"
                      dir="auto"
                      style={{ unicodeBidi: 'plaintext', textAlign: 'start' }}
                    >
                      {capitalize(chapter)}
                    </h2>
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:bg-accent-500 dark:group-hover:bg-primary-500 flex items-center justify-center transition-all">
                      <svg
                        className="w-4 h-4 text-gray-400 group-hover:text-white transition-all group-hover:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 font-semibold">
                    <div className="w-8 h-8 rounded bg-accent-500/20 dark:bg-accent-900/30 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-accent-600 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span className="group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {exerciseCount} exercice{exerciseCount > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gray-100 dark:bg-gray-800 rounded-full">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">
            Aucun chapitre disponible
          </h3>
          <p className="text-gray-600 dark:text-gray-400 font-semibold">
            Il n&apos;y a pas encore d&apos;exercices pour cette section.
          </p>
        </div>
      )}
    </div>
  );
}