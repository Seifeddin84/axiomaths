import Link from 'next/link';
import { getExercisesByChapter } from '@/lib/fileReader';
import ExerciseTable from '@/components/ExerciseTable';

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
  
  // Decode and convert URL slug back to chapter name
  const decodedChapter = decodeURIComponent(chapter);
  const chapterName = decodedChapter
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Get exercises for this chapter
  const exercises = getExercisesByChapter('lycee', level, section, chapterName);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <Link
          href={`/lycee/${level}/${section}`}
          className="text-gray-600 hover:text-black mb-8 inline-block"
        >
          ← {section.replace('-', ' ').toUpperCase()}
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