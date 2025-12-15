import fs from 'fs';
import path from 'path';
import { parseExercise } from './exerciseParser';
import { Exercise } from '@/types/exercise';

const exercisesDirectory = path.join(process.cwd(), 'exercises');

export function getAllExercises(): Exercise[] {
  const filenames = fs.readdirSync(exercisesDirectory);
  
  const exercises = filenames
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const filePath = path.join(exercisesDirectory, filename);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      return parseExercise(fileContent, filename);
    });
  
  return exercises;
}

export function getExercisesByChapter(
  school: string,
  level: string,
  section: string | null,
  chapter: string
): Exercise[] {
  const allExercises = getAllExercises();
  
  return allExercises.filter(ex => 
    ex.school === school &&
    ex.level === level &&
    ex.section === section &&
    ex.chapter === chapter
  );
}

export function getChaptersByLevel(
  school: string,
  level: string,
  section: string | null
): string[] {
  const allExercises = getAllExercises();
  
  const chapters = allExercises
    .filter(ex => 
      ex.school === school &&
      ex.level === level &&
      ex.section === section
    )
    .map(ex => ex.chapter);
  
  return [...new Set(chapters)];
}