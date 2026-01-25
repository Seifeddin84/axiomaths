import { getAllExercises } from '@/lib/fileReader';
import ExercisesView from '@/components/ExercisesView';
import Link from 'next/link';

// FIXED: Handle null/undefined values
function slugify(text: string | undefined | null): string {
  if (!text) return '';
  if (typeof text !== 'string') return '';
  
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ level: string; section: string; chapter: string }>;
}) {
  const { level, section, chapter } = await params;
  
  const allExercises = await getAllExercises();
  
  // CRITICAL FIX: Filter exercises that match level, section (in array OR single), and chapter
  const chapterExercises = allExercises.filter(ex => {
    // Match level
    const levelMatch = slugify(ex.level) === slugify(level);
    
    // FIXED: Match section - check BOTH array and single section
const sectionMatch = 
  (ex.sections && Array.isArray(ex.sections) && 
   // ✅ NEW: Type check before slugify
   ex.sections.some(s => s && typeof s === 'string' && slugify(s) === slugify(section))) ||
  slugify(ex.section) === slugify(section);
    
    // Match chapter
    const chapterMatch = slugify(ex.chapter) === slugify(chapter);
    
    return levelMatch && sectionMatch && chapterMatch;
  });

  // Format chapter name for display
  const chapterName = chapter
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm">
        <Link href="/lycee" className="text-orange-500 hover:text-orange-600">
          Lycée
        </Link>
        {' '}/{' '}
        <Link href={`/lycee/${level}`} className="text-orange-500 hover:text-orange-600">
          {level}
        </Link>
        {' '}/{' '}
        <Link href={`/lycee/${level}/${section}`} className="text-orange-500 hover:text-orange-600">
          {section}
        </Link>
        {' '}/{' '}
        <span className="text-gray-600 dark:text-gray-400">{chapterName}</span>
      </div>

      {/* Header */}
      <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2">
        {chapterName}
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        {chapterExercises.length} exercice{chapterExercises.length > 1 ? 's' : ''} disponible{chapterExercises.length > 1 ? 's' : ''}
      </p>

      {/* Exercises */}
      {chapterExercises.length > 0 ? (
        <ExercisesView exercises={chapterExercises} />
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📭</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Aucun exercice disponible
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Il n'y a pas encore d'exercices pour ce chapitre.
          </p>
        </div>
      )}
    </div>
  );
}