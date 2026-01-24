import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

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
    console.warn('⚠️ Exams directory not found:', examsDir);
    return [];
  }
  
  const files = fs.readdirSync(examsDir);
  console.log('📁 Files in exams directory:', files);
  
  const yamlFiles = files.filter(file => file.endsWith('.yaml') || file.endsWith('.yml'));
  console.log('📄 YAML files found:', yamlFiles);
  
  const exams: Exam[] = [];
  
  for (const file of yamlFiles) {
    try {
      const filePath = path.join(examsDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      console.log(`\n📖 Parsing ${file}...`);
      console.log('Content length:', fileContent.length);
      
      const data = yaml.load(fileContent) as any; 
      console.log('✅ Parsed data:', JSON.stringify(data, null, 2));
      
      // Construct PDF URL
      const pdfUrl = `/exams/${data.filename}`;
      
      exams.push({
        ...data,
        pdfUrl,
      } as Exam);
    } catch (error) {
      console.error(`❌ Error loading exam ${file}:`, error);
    }
  }
  
  console.log(`\n✅ Total exams loaded: ${exams.length}`);
  
  // Sort by year (newest first), then by exam number
  return exams.sort((a, b) => {
    const yearCompare = b.year.localeCompare(a.year);
    if (yearCompare !== 0) return yearCompare;
    return b.exam_number - a.exam_number;
  });
}

/**
 * Get filter options - returns all possible values, not just what's in database
 */
export function getExamFilterOptions() {
  return {
    // All establishment types
    establishments: [
      { value: 'college', label: 'Collège' },
      { value: 'lycee', label: 'Lycée' },
    ],
    
    // All levels (collège: 7-9ème, lycée: 1-4ème)
    levels: [
      { value: '7eme', label: '7ème' },
      { value: '8eme', label: '8ème' },
      { value: '9eme', label: '9ème' },
      { value: '1ere', label: '1ère' },
      { value: '2eme', label: '2ème' },
      { value: '3eme', label: '3ème' },
      { value: '4eme', label: '4ème' },
    ],
    
    // All sections - VALUES MUST MATCH YAML DATA EXACTLY
    sections: [
      { value: 'Mathématiques', label: 'Mathématiques' },
      { value: 'Sciences Expérimentales', label: 'Sciences Expérimentales' },
      { value: 'Sciences Techniques', label: 'Sciences Techniques' },
      { value: 'Sciences Informatiques', label: 'Sciences Informatiques' },
      { value: 'Économie et Services', label: 'Économie et Services' },
      { value: 'Lettres', label: 'Lettres' },
      { value: 'Sport', label: 'Sport' },
    ],
    
    // Exam types
    exam_types: [
      { value: 'Devoir de contrôle', label: 'Devoir de contrôle' },
      { value: 'Devoir de synthèse', label: 'Devoir de synthèse' },
    ],
    
   years: Array.from({ length: 10 }, (_, i) => {
  const endYear = new Date().getFullYear() + 1 - i; // 2026, 2025, 2024...
  const startYear = endYear - 1;
  return {
    value: `${startYear}/${endYear}`, // Still match YAML format for filtering
    label: `${endYear}`, // Display only ending year
  };
}),
    
    // Chapters - we'll keep this dynamic since there are too many
    chapters: [],
  };
}

/**
 * Get chapters from existing exams (dynamic)
 */
export function getExamChapters(exams: Exam[]): Array<{ value: string; label: string }> {
  if (!exams || exams.length === 0) {
    return [];
  }
  
  const chapters = Array.from(new Set(exams.flatMap(e => e.chapters || []))).sort();
  return chapters.map(ch => ({ value: ch, label: ch }));
}