import Link from 'next/link';
import { getAllExercises } from '@/lib/fileReader';

const LEVEL_DISPLAY: Record<string, string> = {
  '7eme': '7ème',
  '8eme': '8ème',
  '9eme': '9ème',
};

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

export default async function CollegePage() {
  const allExercises = await getAllExercises();
  
  // Get exercises for each level
  const levels = ['7eme', '8eme', '9eme'];
  const levelData = levels.map(level => {
    const exercises = allExercises.filter(ex => normalize(ex.level) === normalize(level));
    return {
      level,
      count: exercises.length,
      display: LEVEL_DISPLAY[level],
    };
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-6xl font-black text-gray-900 dark:text-white mb-6">
          Collège
        </h1>
        <p className="text-2xl text-gray-600 dark:text-gray-400 font-semibold">
          Exercices de mathématiques pour le collège tunisien : 7ème, 8ème et 9ème année
        </p>
      </div>

      {/* Level Cards - NO CHAPTER PREVIEWS */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {levelData.map(({ level, count, display }) => (
          <Link
            key={level}
            href={`/college/${level}`}
            className="group relative overflow-hidden"
          >
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-primary-500/10 dark:from-accent-500/20 dark:to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Card content */}
            <div className="relative p-8 border-2 border-gray-300 dark:border-gray-700 rounded-lg group-hover:border-accent-500 dark:group-hover:border-primary-500 group-hover:shadow-xl transition-all bg-white dark:bg-gray-800 h-full">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Level Title */}
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-3xl font-black text-gray-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-primary-400 transition-colors">
                  {display} Année
                </h2>
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:bg-accent-500 dark:group-hover:bg-primary-500 flex items-center justify-center transition-all">
                  <svg
                    className="w-6 h-6 text-gray-400 group-hover:text-white transition-all group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium">
                Exercices de mathématiques pour la {display} année du collège
              </p>

              {/* Exercise Count - NO CHAPTER PREVIEW */}
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 font-semibold">
                <div className="w-10 h-10 rounded bg-accent-500/20 dark:bg-accent-900/30 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-accent-600 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="group-hover:text-gray-900 dark:group-hover:text-white transition-colors text-base">
                  {count} exercice{count > 1 ? 's' : ''}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* About Section */}
      <div className="bg-gradient-to-r from-primary-900/50 to-accent-900/50 dark:from-primary-900/20 dark:to-accent-900/20 border-l-4 border-primary-500 p-8 rounded-lg">
        <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
          À propos du collège
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Les exercices du collège couvrent les trois années (7ème, 8ème et 9ème) avec des chapitres adaptés au programme tunisien. Chaque exercice est corrigé et classé par difficulté.
        </p>
      </div>
    </div>
  );
}