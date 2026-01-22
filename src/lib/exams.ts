import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Exam {
  uid: string;
  type: string;
  
  // Classification
  establishment_type: 'lycee' | 'college';
  level: string;
  section: string;
  year: string;
  
  // Exam Details
  exam_type: 'Devoir de contrôle' | 'Devoir de synthèse';
  exam_number: number;
  date: string;
  duration: string;
  total_points: number;
  
  // School Information
  school: string;
  professor?: string;
  country: string;
  
  // Content
  chapters: string[];
  exercises?: {
    number: number;
    points: number;
    topic: string;
  }[];
  
  // File reference
  filename: string;
  pdfUrl: string;
}

/**
 * Load all exams from YAML files in /public/exams/
 */
export function getAllExams(): Exam[] {
  const examsDir = path.join(process.cwd(), 'public/exams');
  
  // Check if directory exists
  if (!fs.existsSync(examsDir)) {
    console.warn('Exams directory not found:', examsDir);
    return [];
  }
  
  const files = fs.readdirSync(examsDir);
  const yamlFiles = files.filter(file => file.endsWith('.yaml') || file.endsWith('.yml'));
  
  const exams: Exam[] = [];
  
  for (const file of yamlFiles) {
    try {
      const filePath = path.join(examsDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);
      
      // Construct PDF URL
      const pdfUrl = `/exams/${data.filename}`;
      
      exams.push({
        ...data,
        pdfUrl,
      } as Exam);
    } catch (error) {
      console.error(`Error loading exam ${file}:`, error);
    }
  }
  
  // Sort by year (newest first), then by exam number
  return exams.sort((a, b) => {
    const yearCompare = b.year.localeCompare(a.year);
    if (yearCompare !== 0) return yearCompare;
    return b.exam_number - a.exam_number;
  });
}

/**
 * Get unique values for filters
 */
export function getExamFilterOptions(exams: Exam[]) {
  return {
    establishments: Array.from(new Set(exams.map(e => e.establishment_type))).sort(),
    levels: Array.from(new Set(exams.map(e => e.level))).sort(),
    sections: Array.from(new Set(exams.map(e => e.section))).sort(),
    exam_types: Array.from(new Set(exams.map(e => e.exam_type))).sort(),
    years: Array.from(new Set(exams.map(e => e.year))).sort().reverse(), // newest first
    chapters: Array.from(new Set(exams.flatMap(e => e.chapters))).sort(),
    schools: Array.from(new Set(exams.map(e => e.school))).sort(),
  };
}
