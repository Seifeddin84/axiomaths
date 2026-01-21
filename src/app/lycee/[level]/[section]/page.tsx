import Link from 'next/link';
import { getExercisesBySection } from '@/lib/fileReader';

const LEVEL_DISPLAY: Record<string, string> = {
  '1ere': '1ère',
  '2eme': '2ème',
  '3eme': '3ème',
  '4eme': '4ème',
};

function slugify(text: string): string {
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
  const levelDisplay = LEVEL_DISPLAY[level];
  
  const sectionDisplay = section
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const exercises = getExercisesBySection('lycee', level, section);
  const chapters = [...new Set(exercises.map(ex => ex.chapter))].sort();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="mb-6">
            <Link href={`/lycee/${level}`} className="text-orange-400 hover:text-orange-300 font-semibold text-sm uppercase tracking-wide">
              ← Retour à {levelDisplay}
            </Link>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black mb-4 leading-tight uppercase">
            {sectionDisplay}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 font-light">
            {levelDisplay} Année • {chapters.length} chapitre{chapters.length > 1 ? 's' : ''}
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900"></div>
      </section>

      {/* Chapter Cards - SLIM HORIZONTAL VERSION */}
      <section className="bg-white dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-6">
          {chapters.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-16 text-center">
              <div className="text-6xl mb-6">📚</div>
              <h2 className="text-3xl font-black mb-4 text-gray-900 dark:text-white">Aucun chapitre disponible</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">Les chapitres pour cette section seront bientôt ajoutés.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto">
              {chapters.map((chapter, index) => {
                const chapterExercises = exercises.filter(ex => ex.chapter === chapter);
                const chapterSlug = slugify(chapter);
                const colors = CHAPTER_COLORS[index % 6];
                
                return (
                  <Link
                    key={chapter}
                    href={`/lycee/${level}/${section}/${chapterSlug}`}
                    className="group block"
                  >
                    <div className={`relative overflow-hidden bg-gradient-to-r ${colors.from} ${colors.to} hover:shadow-xl transition-all duration-300 hover:scale-[1.02] p-5 border-l-8 ${colors.border}`}>
                      <div className="flex items-center justify-between">
                        {/* Left: Number + Title */}
                        <div className="flex items-center gap-4 flex-1">
                          <div className="text-4xl font-black text-white opacity-40 min-w-[3rem]">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <div className="flex-1">
                            <h2 className="text-xl font-black text-white mb-1 leading-tight">
                              {chapter}
                            </h2>
                            <p className="text-white text-opacity-80 text-sm">
                              {chapterExercises.length} exercice{chapterExercises.length > 1 ? 's' : ''}
                            </p>
                          </div>
                        </div>
                        {/* Right: Arrow */}
                        <svg className="w-7 h-7 text-white transform group-hover:translate-x-2 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}