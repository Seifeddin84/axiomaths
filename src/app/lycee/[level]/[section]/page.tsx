import Link from 'next/link';
import { getExercisesBySection } from '@/lib/fileReader';

const LEVEL_DISPLAY: Record<string, string> = {
  '1ere': '1ère',
  '2eme': '2ème',
  '3eme': '3ème',
  '4eme': '4ème',
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
  
  // Get unique chapters
  const chapters = [...new Set(exercises.map(ex => ex.chapter))].sort();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Breadcrumb */}
        <nav className="mb-12 flex items-center gap-3 text-sm uppercase tracking-wider font-semibold flex-wrap">
          <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400">Accueil</Link>
          <span className="text-gray-300 dark:text-gray-600">→</span>
          <Link href="/lycee" className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400">Lycée</Link>
          <span className="text-gray-300 dark:text-gray-600">→</span>
          <Link href={`/lycee/${level}`} className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400">{levelDisplay}</Link>
          <span className="text-gray-300 dark:text-gray-600">→</span>
          <span className="text-orange-500 dark:text-orange-400">{sectionDisplay}</span>
        </nav>

        {/* Page Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500 text-white font-mono text-xs uppercase tracking-widest mb-6">
            {levelDisplay} ANNÉE
          </div>
          <h1 className="text-6xl sm:text-7xl font-black mb-6 text-gray-900 dark:text-white leading-none uppercase">
            {sectionDisplay}
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
            <p className="text-xl text-gray-600 dark:text-gray-400">Les chapitres pour cette section seront bientôt ajoutés.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((chapter) => {
              const chapterExercises = exercises.filter(ex => ex.chapter === chapter);
              const chapterSlug = chapter.toLowerCase().replace(/\s+/g, '-');
              
              return (
                <Link
                  key={chapter}
                  href={`/lycee/${level}/${section}/${chapterSlug}`}
                  className="group block"
                >
                  <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-200 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl font-black text-blue-500 dark:text-blue-400">
                        {String(chapters.indexOf(chapter) + 1).padStart(2, '0')}
                      </div>
                      <svg className="w-6 h-6 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-black mb-3 text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
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