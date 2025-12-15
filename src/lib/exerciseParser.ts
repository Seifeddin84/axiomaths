import matter from 'gray-matter';
import { Exercise, ExerciseMetadata } from '@/types/exercise';

export function parseExercise(fileContent: string, filename: string): Exercise {
  const { data, content } = matter(fileContent);
  
  // Split content and solution
  const [exerciseContent, solution] = content.split('---').map(s => s.trim());
  
  return {
    uid: data.uid,
    school: data.school,
    level: data.level,
    section: data.section,
    chapter: data.chapter,
    source: data.source,
    country: data.country,
    professor: data.professor,
    difficulty: data.difficulty,
    points: data.points,
    tags: data.tags || [],
    content: exerciseContent,
    solution: solution?.replace('## Solution', '').trim() || '',
  };
}

export function getDifficultyStars(difficulty: string): string {
  const map: Record<string, string> = {
    'Facile': '⭐',
    'Moyen': '⭐⭐',
    'Difficile': '⭐⭐⭐',
  };
  return map[difficulty] || '⭐';
}