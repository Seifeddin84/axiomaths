export interface Exercise {
  uid: string;
  school: 'college' | 'lycee';
  level: string;
  section: string | null;
  chapter: string;
  source: string;
  title?: string;  // Made optional for backward compatibility
  country: string;
  year?: number;   // Made optional for backward compatibility
  professor: string | null;
  difficulty: 'Facile' | 'Moyen' | 'Difficile';
  points: number;
  tags: string[];
  content: string;
  solution: string;
}

export interface ExerciseMetadata {
  uid: string;
  school: string;
  level: string;
  section: string | null;
  chapter: string;
  source: string;
  title?: string;  // Added
  country: string;
  year?: number;   // Added
  professor: string | null;
  difficulty: string;
  points: number;
  tags: string[];
}