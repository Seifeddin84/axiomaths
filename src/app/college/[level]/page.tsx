import Link from 'next/link';
import { getChaptersByLevel, getExercisesByChapter } from '@/lib/fileReader';

const LEVEL_DISPLAY: Record<string, string> = {
  '7eme': '7ème',
  '8eme': '8ème',
  '9eme': '9ème',
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

export default async function CollegeLevelPage({
  params,
}: {
  params: Promise<{ level: string }>;
}) {
  const { level } = await params;
  const levelDisplay = LEVEL_DISPLAY[level];
  const chapters = getChaptersByLevel('college', level, null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="mb-6">
            <Link href="/college" className="text-orange-400 hover:text-orange-300 font-semibold text-sm uppercase tracking-wide">
              ← Retour au Collège
            </Link>
          </div>
          <h1 className="text-6xl sm:text-7xl font-black mb-4 leading-tight">
            {levelDisplay} ANNÉE
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 font-light">
            {chapters.length} chapitre{chapters.length > 1 ? 's' : ''} disponible{chapters.length > 1 ? 's' : ''}
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900"></div>
      </section>

      {/* Chapter Cards */}
      <section className="bg-white dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-6">
          {chapters.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-16 text-center">
              <div className="text-6xl mb-6">📚</div>
              <h2 className="text-3xl font-black mb-4 text-gray-900 dark:text-white">Aucun chapitre disponible</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">Les chapitres seront bientôt ajoutés.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {chapters.map((chapter, index) => {
                const chapterSlug = slugify(chapter);
                const exerciseCount = getExercisesByChapter('college', level, null, chapter).length;
                const colors = CHAPTER_COLORS[index % 6];
                
                return (
                  <Link
                    key={chapter}
                    href={`/college/${level}/${chapterSlug}`}
                    className="group block relative overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.from} ${colors.to} transform group-hover:scale-105 transition-transform duration-300`}></div>
                    <div className={`relative p-8 border-4 ${colors.border}`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-5xl font-black text-white opacity-50">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <svg className="w-8 h-8 text-white transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-black text-white mb-4 leading-tight">
                        {chapter}
                      </h2>
                      <div className="h-1 w-16 bg-white mb-4"></div>
                      <p className="text-white text-opacity-90">
                        {exerciseCount} exercice{exerciseCount > 1 ? 's' : ''}
                      </p>
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