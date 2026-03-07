import Link from 'next/link';
import { getAllExercises } from '@/lib/fileReader';

const LEVEL_DISPLAY: Record<string, string> = {
  '1ere': '1ère',
  '2eme': '2ème',
  '3eme': '3ème',
  '4eme': '4ème',
};

// URL-encode slugify for Arabic support
function slugify(text: string | undefined | null): string {
  if (!text) return '';
  if (typeof text !== 'string') return '';
  
  return encodeURIComponent(
    text.toLowerCase().trim().replace(/\s+/g, '-')
  );
}

// Simple normalize for comparison
function normalize(text: string | undefined | null): string {
  if (!text) return '';
  return text
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');
}

// Capitalize first letter of each word for display
function capitalize(text: string): string {
  return text
    .split(/[-\s]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default async function LyceeLevelPage({
  params,
}: {
  params: Promise<{ level: string }>;
}) {
  const { level } = await params;
  const levelDisplay = LEVEL_DISPLAY[level];
  
  const allExercises = await getAllExercises();
  
  // Filter exercises for this level
  const levelExercises = allExercises.filter(ex => 
    normalize(ex.level) === normalize(level)
  );

  // Get unique sections from exercises (filter out null, "null", and empty strings)
  const uniqueSections = Array.from(
    new Set(
      levelExercises.flatMap(ex => {
        if (ex.sections && Array.isArray(ex.sections)) {
          return ex.sections.filter(s => s && typeof s === 'string' && s !== 'null' && s.trim() !== '');
        }
        // Filter out null, "null" string, and empty values
        return (ex.section && ex.section !== 'null' && typeof ex.section === 'string' && ex.section.trim() !== '') 
          ? [ex.section] 
          : [];
      })
    )
  ).sort();

  // If no sections, show chapters directly (like 1ère)
  const hasRealSections = uniqueSections.length > 0;
  
  // Get unique chapters if no sections
  const uniqueChapters = !hasRealSections ? Array.from(
    new Set(
      levelExercises
        .map(ex => ex.chapter)
        .filter((chapter): chapter is string => Boolean(chapter))
    )
  ).sort() : [];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Breadcrumb */}
      <div className="mb-8">
        <nav className="flex items-center space-x-2 text-sm font-semibold">
          <Link
            href="/lycee"
            className="text-accent-600 dark:text-primary-400 hover:text-accent-700 dark:hover:text-primary-300"
          >
            Lycée
          </Link>
          <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-900 dark:text-white">{levelDisplay} Année</span>
        </nav>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-4">
          {levelDisplay} Année
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 font-semibold">
          {hasRealSections 
            ? `${uniqueSections.length} section${uniqueSections.length > 1 ? 's' : ''} • ${levelExercises.length} exercice${levelExercises.length > 1 ? 's' : ''}`
            : `${uniqueChapters.length} chapitre${uniqueChapters.length > 1 ? 's' : ''} • ${levelExercises.length} exercice${levelExercises.length > 1 ? 's' : ''}`
          }
        </p>
      </div>

      {/* Section or Chapter Cards - IMPROVED DESIGN */}
      {hasRealSections ? (
        /* SECTIONS - For levels with multiple sections like 2ème, 4ème */
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {uniqueSections.map((section) => {
            const sectionSlug = slugify(section);
            
            // Count exercises in this section (ignore null/"null" sections)
            const sectionExercises = levelExercises.filter(ex => {
              return (
                (ex.sections && Array.isArray(ex.sections) && 
                 ex.sections.some(s => s && typeof s === 'string' && s === section)) ||
                (ex.section === section && ex.section !== 'null' && ex.section !== null)
              );
            });
            
            return (
              <Link
                key={section}
                href={`/lycee/${level}/${sectionSlug}`}
                className="group relative overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-primary-500/10 dark:from-accent-500/20 dark:to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Card content */}
                <div className="relative p-8 border-2 border-gray-300 dark:border-gray-700 rounded-lg group-hover:border-accent-500 dark:group-hover:border-primary-500 group-hover:shadow-xl transition-all bg-white dark:bg-gray-800">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Section Title */}
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-primary-400 transition-colors flex-1 pr-2">
                      {capitalize(section)}
                    </h2>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:bg-accent-500 dark:group-hover:bg-primary-500 flex items-center justify-center transition-all">
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-white transition-all group-hover:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Exercise Count */}
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 font-semibold">
                    <div className="w-10 h-10 rounded bg-accent-500/20 dark:bg-accent-900/30 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-accent-600 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span className="group-hover:text-gray-900 dark:group-hover:text-white transition-colors text-base">
                      {sectionExercises.length} exercice{sectionExercises.length > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        /* CHAPTERS - For levels without sections like 1ère */
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {uniqueChapters.map((chapter) => {
            const chapterSlug = slugify(chapter);
            
            const exerciseCount = levelExercises.filter(ex => 
              ex.chapter === chapter
            ).length;
            
            return (
              <Link
                key={chapter}
                href={`/lycee/${level}/toutes-sections/${chapterSlug}`}
                className="group relative overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-primary-500/10 dark:from-accent-500/20 dark:to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Card content */}
                <div className="relative p-6 border-2 border-gray-300 dark:border-gray-700 rounded-lg group-hover:border-accent-500 dark:group-hover:border-primary-500 group-hover:shadow-xl transition-all bg-white dark:bg-gray-800">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Chapter Title */}
                  <div className="flex items-start justify-between mb-4">
                    <h2 
                      className="text-xl font-black text-gray-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-primary-400 transition-colors flex-1 pr-2"
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

                  {/* Exercise Count */}
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
      )}

      {/* No content message */}
      {!hasRealSections && uniqueChapters.length === 0 && (
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
            Il n'y a pas encore d'exercices pour ce niveau.
          </p>
        </div>
      )}
    </div>
  );
}