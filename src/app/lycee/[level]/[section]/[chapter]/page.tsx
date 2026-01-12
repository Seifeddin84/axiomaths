import Link from 'next/link';
import { getExercisesByChapter } from '@/lib/fileReader';
import ExercisesView from '@/components/ExercisesView';
import { getCheatSheet } from '@/lib/cheatsheets';

const LEVEL_DISPLAY: Record<string, string> = {
  '1ere': '1ère',
  '2eme': '2ème',
  '3eme': '3ème',
  '4eme': '4ème',
};

export default async function ChapterExercisesPage({
  params,
}: {
  params: Promise<{ level: string; section: string; chapter: string }>;
}) {
  const { level, section, chapter } = await params;
  const levelDisplay = LEVEL_DISPLAY[level];
  
  const decodedChapter = decodeURIComponent(chapter);
  const chapterName = decodedChapter
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  const sectionDisplay = section
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  const exercises = getExercisesByChapter('lycee', level, section, chapterName);
  const cheatSheetFile = getCheatSheet('lycee', level, section, decodedChapter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav className="mb-12 flex items-center gap-3 text-sm uppercase tracking-wider font-semibold flex-wrap">
          <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400">Accueil</Link>
          <span className="text-gray-300 dark:text-gray-600">→</span>
          <Link href="/lycee" className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400">Lycée</Link>
          <span className="text-gray-300 dark:text-gray-600">→</span>
          <Link href={`/lycee/${level}`} className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400">{levelDisplay}</Link>
          <span className="text-gray-300 dark:text-gray-600">→</span>
          <Link href={`/lycee/${level}/${section}`} className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400">{sectionDisplay}</Link>
          <span className="text-gray-300 dark:text-gray-600">→</span>
          <span className="text-orange-500 dark:text-orange-400">{chapterName}</span>
        </nav>

        {/* Page Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500 text-white font-mono text-xs uppercase tracking-widest mb-6">
            {exercises.length} Exercice{exercises.length > 1 ? 's' : ''}
          </div>
          <h1 className="text-6xl sm:text-7xl font-black mb-6 text-gray-900 dark:text-white leading-none uppercase">
            {chapterName}
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-400 font-serif">
            {sectionDisplay} • {levelDisplay} Année
          </p>
        </div>

        {/* Cheat Sheet Banner */}
        {cheatSheetFile && (
          <div className="mb-12 p-8 bg-gradient-to-r from-orange-50 to-teal-50 dark:from-orange-900/20 dark:to-teal-900/20 border-2 border-orange-300 dark:border-orange-700 shadow-lg">
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">📋</span>
                  <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase">
                    Fiche Récapitulative
                  </h2>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Toutes les formules et définitions essentielles du chapitre
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <a href={`/fiches/${cheatSheetFile}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-bold uppercase tracking-wide hover:bg-orange-600 transition-all shadow-md">
                  <span>📄</span>
                  Consulter
                </a>
                <a href={`/fiches/${cheatSheetFile}`} download className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white font-bold uppercase tracking-wide hover:bg-teal-600 transition-all shadow-md">
                  <span>⬇️</span>
                  Télécharger
                </a>
              </div>
            </div>
          </div>
        )}

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