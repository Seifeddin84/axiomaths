import Link from 'next/link';
import { getAllExercises } from '@/lib/fileReader';

function slugify(text: string | undefined | null): string {
  if (!text) return '';
  if (typeof text !== 'string') return '';
  
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const CHAPTER_COLORS: Record<number, { from: string; to: string; border: string }> = {
  0: { from: 'from-blue-500', to: 'to-indigo-600', border: 'border-blue-700' },
  1: { from: 'from-purple-500', to: 'to-pink-600', border: 'border-purple-700' },
  2: { from: 'from-orange-500', to: 'to-red-600', border: 'border-orange-700' },
  3: { from: 'from-green-500', to: 'to-emerald-600', border: 'border-green-700' },
  4: { from: 'from-teal-500', to: 'to-cyan-600', border: 'border-teal-700' },
  5: { from: 'from-pink-500', to: 'to-rose-600', border: 'border-pink-700' },
};

export default async function SectionPage({
  params,
}: {
  params: Promise<{ level: string; section: string }>;
}) {
  const { level, section } = await params;
  
  const allExercises = await getAllExercises();
  
  // FIXED: Filter exercises for this level and section (handle array)
  const sectionExercises = allExercises.filter(ex => {
    const levelMatch = slugify(ex.level) === slugify(level);
    
    // FIXED: Check both array and single section
const sectionMatch = 
  (ex.sections && Array.isArray(ex.sections) && 
   // ✅ NEW: Type check before slugify
   ex.sections.some(s => s && typeof s === 'string' && slugify(s) === slugify(section))) ||
  slugify(ex.section) === slugify(section);
    
    return levelMatch && sectionMatch;
  });

  // Get unique chapters
  const uniqueChapters = Array.from(
    new Set(
      sectionExercises
        .map(ex => ex.chapter)
        .filter((chapter): chapter is string => Boolean(chapter))
    )
  ).sort();

  // Format section name
  const sectionName = section
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen">
      {/* Hero Section - SLIM */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <div className="mb-4">
            <Link href={`/lycee/${level}`} className="text-orange-400 hover:text-orange-300 font-semibold text-sm uppercase tracking-wide">
              ← Retour au {level}
            </Link>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black mb-3 leading-tight">
            {sectionName}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 font-light">
            {uniqueChapters.length} chapitre{uniqueChapters.length > 1 ? 's' : ''} • {sectionExercises.length} exercice{sectionExercises.length > 1 ? 's' : ''}
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-gray-900"></div>
      </section>

      {/* Chapter Cards - SLIM & LONG */}
      <section className="bg-white dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-6">
          {uniqueChapters.length > 0 ? (
            <div className="space-y-4">
              {uniqueChapters.map((chapter, index) => {
                const chapterSlug = slugify(chapter);
                const colors = CHAPTER_COLORS[index % 6];
                
                // Count exercises in this chapter
                const chapterExerciseCount = sectionExercises.filter(ex => 
                  slugify(ex.chapter) === chapterSlug
                ).length;
                
                return (
                  <Link
                    key={chapter}
                    href={`/lycee/${level}/${section}/${chapterSlug}`}
                    className="group block relative overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${colors.from} ${colors.to} transform group-hover:scale-105 transition-transform duration-300`}></div>
                    <div className={`relative p-6 border-l-8 ${colors.border} flex items-center justify-between`}>
                      <div>
                        <h2 className="text-2xl font-black text-white leading-tight mb-1">
                          {chapter}
                        </h2>
                        <p className="text-white text-opacity-80 text-sm">
                          {chapterExerciseCount} exercice{chapterExerciseCount > 1 ? 's' : ''}
                        </p>
                      </div>
                      <svg className="w-6 h-6 text-white transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📚</div>
              <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
                Aucun chapitre disponible
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Il n'y a pas encore de chapitres pour cette section.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}