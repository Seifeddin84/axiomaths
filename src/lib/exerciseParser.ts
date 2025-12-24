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
    title: data.title,           // ADD THIS LINE
    country: data.country,
    year: data.year,             // ADD THIS LINE
    professor: data.professor,
    difficulty: data.difficulty,
    points: data.points,
    tags: data.tags || [],
    content: exerciseContent,
    solution: solution?.replace('## Solution', '').trim() || '',
  };
}

export function getDifficultyStars(difficulty: string): string {
  // Normalize to capitalized first letter
  const normalized = difficulty.charAt(0).toUpperCase() + difficulty.slice(1).toLowerCase();
  
  const map: Record<string, string> = {
    'Facile': '⭐',
    'Moyen': '⭐⭐',
    'Difficile': '⭐⭐⭐',
  };
  return map[normalized] || '⭐';
}