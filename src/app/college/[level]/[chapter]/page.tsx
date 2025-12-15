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
  
  // Decode and convert URL slug back to chapter name
  const decodedChapter = decodeURIComponent(chapter);
  const chapterName = decodedChapter
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Get exercises for this chapter (no section for college)
  const exercises = getExercisesByChapter('college', level, null, chapterName);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <Link
          href={`/college/${level}`}
          className="text-gray-600 hover:text-black mb-8 inline-block"
        >
          ← {levelDisplay}
        </Link>

        <h1 className="text-5xl font-bold mb-12">{chapterName}</h1>

        {exercises.length === 0 ? (
          <p className="text-gray-600 text-xl">Aucun exercice disponible pour ce chapitre.</p>
        ) : (
          <ExerciseTable exercises={exercises} />
        )}
      </div>
    </div>
  );
}