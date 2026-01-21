import fs from 'fs';
import path from 'path';
import { parseExercise } from './exerciseParser';
import { Exercise } from '@/types/exercise';

const exercisesDirectory = path.join(process.cwd(), 'exercises');

// Make this defensive - handle undefined/null
function normalizeForComparison(str: string | undefined | null): string {
  if (!str) return ''; // Return empty string for undefined/null
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

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
  const normalizedChapter = normalizeForComparison(chapter);
  const normalizedSection = section ? normalizeForComparison(section) : null;
  
  return allExercises.filter((exercise) => {
    const matchesSchool = exercise.school === school;
    const matchesLevel = exercise.level === level;
    
    const exerciseSection = exercise.section ? normalizeForComparison(exercise.section) : null;
    const matchesSection = normalizedSection === null || exerciseSection === normalizedSection;
    
    const matchesChapter = normalizeForComparison(exercise.chapter) === normalizedChapter;
    
    return matchesSchool && matchesLevel && matchesSection && matchesChapter;
  });
}

export function getUniqueSections(school: string, level: string): string[] {
  const allExercises = getAllExercises();
  
  const sections = allExercises
    .filter(exercise => exercise.school === school && exercise.level === level)
    .map(exercise => exercise.section)
    .filter((section): section is string => section !== null && section !== undefined);
  
  return [...new Set(sections)].sort();
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
    .map(ex => ex.chapter)
    .filter((chapter): chapter is string => chapter !== null && chapter !== undefined); // Add this filter!
  
  return [...new Set(chapters)];
}

export function getExercisesBySection(
  school: string,
  level: string,
  section: string
): Exercise[] {
  const allExercises = getAllExercises();
  
  const normalizedSection = normalizeForComparison(section);
  
  return allExercises.filter((exercise) => {
    const matchesSchool = exercise.school === school;
    const matchesLevel = exercise.level === level;
    
    const exerciseSection = exercise.section ? normalizeForComparison(exercise.section) : '';
    const matchesSection = exerciseSection === normalizedSection;
    
    return matchesSchool && matchesLevel && matchesSection;
  });
}