import Link from 'next/link';
import { getAllExercises } from '@/lib/fileReader';

const LEVEL_DISPLAY: Record<string, string> = {
  '7eme': '7ème',
  '8eme': '8ème',
  '9eme': '9ème',
};

export default async function CollegeLevelPage({
  params,
}: {
  params: Promise<{ level: string }>;
}) {
  const { level } = await params;
  const levelDisplay = LEVEL_DISPLAY[level];
  
  const exercises = getAllExercises().filter(
    ex => ex.school === 'college' && ex.level === level
  );
  
  // Get unique chapters
  const chapters = [...new Set(exercises.map(ex => ex.chapter))].sort();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Breadcrumb */}
        <nav className="mb-12 flex items-center gap-3 text-sm uppercase tracking-wider font-semibold flex-wrap">
          <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400">Accueil</Link>
          <span className="text-gray-300 dark:text-gray-600">→</span>
          <Link href="/college" className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400">Collège</Link>
          <span className="text-gray-300 dark:text-gray-600">→</span>
          <span className="text-orange-500 dark:text-orange-400">{levelDisplay}</span>
        </nav>

        {/* Page Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-orange-500 text-white font-mono text-xs uppercase tracking-widest mb-6">
            {levelDisplay} ANNÉE
          </div>
          <h1 className="text-6xl sm:text-7xl font-black mb-6 text-gray-900 dark:text-white leading-none uppercase">
            {levelDisplay} ANNÉE
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-400 font-serif">
            {chapters.length} chapitre{chapters.length > 1 ? 's' : ''} disponible{chapters.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Chapter Cards */}
        {chapters.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-16 text-center">
            <div className="text-6xl mb-6">📚</div>
            <h2 className="text-3xl font-black mb-4 text-gray-900 dark:text-white">Aucun chapitre disponible</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Les chapitres pour cette année seront bientôt ajoutés.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((chapter) => {
              const chapterExercises = exercises.filter(ex => ex.chapter === chapter);
              const chapterSlug = chapter.toLowerCase().replace(/\s+/g, '-');
              
              return (
                <Link
                  key={chapter}
                  href={`/college/${level}/${chapterSlug}`}
                  className="group block"
                >
                  <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-xl hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-200 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl font-black text-orange-500 dark:text-orange-400">
                        {String(chapters.indexOf(chapter) + 1).padStart(2, '0')}
                      </div>
                      <svg className="w-6 h-6 text-gray-400 dark:text-gray-500 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-black mb-3 text-gray-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                      {chapter}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {chapterExercises.length} exercice{chapterExercises.length > 1 ? 's' : ''}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}