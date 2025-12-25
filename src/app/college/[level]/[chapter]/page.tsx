import Link from 'next/link';
import { getExercisesByChapter } from '@/lib/fileReader';
import ExercisesView from '@/components/ExercisesView';

const LEVEL_DISPLAY: Record<string, string> = {
  '7eme': '7ème',
  '8eme': '8ème',
  '9eme': '9ème',
};

export default async function CollegeChapterExercisesPage({
  params,
}: {
  params: Promise<{ level: string; chapter: string }>;
}) {
  const { level, chapter } = await params;
  const levelDisplay = LEVEL_DISPLAY[level];
  
  const decodedChapter = decodeURIComponent(chapter);
  const chapterName = decodedChapter
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  const exercises = getExercisesByChapter('college', level, null, chapterName);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav className="mb-12 flex items-center gap-3 text-sm uppercase tracking-wider font-semibold flex-wrap">
          <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400">Accueil</Link>
          <span className="text-gray-300 dark:text-gray-600">→</span>
          <Link href="/college" className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400">Collège</Link>
          <span className="text-gray-300 dark:text-gray-600">→</span>
          <Link href={`/college/${level}`} className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400">{levelDisplay}</Link>
          <span className="text-gray-300 dark:text-gray-600">→</span>
          <span className="text-orange-500 dark:text-orange-400">{chapterName}</span>
        </nav>

        {/* Page Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-orange-500 text-white font-mono text-xs uppercase tracking-widest mb-6">
            {exercises.length} Exercice{exercises.length > 1 ? 's' : ''}
          </div>
          <h1 className="text-6xl sm:text-7xl font-black mb-6 text-gray-900 dark:text-white leading-none uppercase">
            {chapterName}
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-400 font-serif">
            {levelDisplay} Année • Collège
          </p>
        </div>

        {/* Exercises */}
        {exercises.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-16 text-center">
            <div className="text-6xl mb-6">📚</div>
            <h2 className="text-3xl font-black mb-4 text-gray-900 dark:text-white">Aucun exercice disponible</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Les exercices pour ce chapitre seront bientôt ajoutés.</p>
          </div>
        ) : (
          <ExercisesView exercises={exercises} />
        )}
      </div>
    </div>
  );
}