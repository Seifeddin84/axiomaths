import Link from 'next/link';
import { getExercisesByChapter } from '@/lib/fileReader';
import ExerciseTable from '@/components/ExerciseTable';

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
    <div className="min-h-screen bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav className="mb-12 flex items-center gap-3 text-sm uppercase tracking-wider font-semibold flex-wrap">
          <Link href="/" className="text-[#999999] hover:text-[#ff6b35]">Accueil</Link>
          <span className="text-[#e0e0e0]">→</span>
          <Link href="/college" className="text-[#999999] hover:text-[#ff6b35]">Collège</Link>
          <span className="text-[#e0e0e0]">→</span>
          <Link href={`/college/${level}`} className="text-[#999999] hover:text-[#ff6b35]">{levelDisplay}</Link>
          <span className="text-[#e0e0e0]">→</span>
          <span className="text-[#ff6b35]">{chapterName}</span>
        </nav>

        {/* Page Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-[#ff6b35] text-white font-mono text-xs uppercase tracking-widest mb-6">
            {exercises.length} Exercice{exercises.length > 1 ? 's' : ''}
          </div>
          <h1 className="text-6xl sm:text-7xl font-black mb-6 text-black leading-none">
            {chapterName.toUpperCase()}
          </h1>
          <p className="text-2xl text-[#666666] font-serif">
            {levelDisplay} Année • Collège
          </p>
        </div>

        {/* Exercises */}
        {exercises.length === 0 ? (
          <div className="bg-white border-2 border-[#e0e0e0] p-16 text-center">
            <div className="text-6xl mb-6">📚</div>
            <h2 className="text-3xl font-black mb-4">Aucun exercice disponible</h2>
            <p className="text-xl text-[#666666]">Les exercices pour ce chapitre seront bientôt ajoutés.</p>
          </div>
        ) : (
          <ExerciseTable exercises={exercises} />
        )}
      </div>
    </div>
  );
}