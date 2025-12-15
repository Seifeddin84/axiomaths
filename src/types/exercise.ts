export interface Exercise {
  uid: string;
  school: 'college' | 'lycee';
  level: string;
  section: string | null;
  chapter: string;
  source: string;
  country: string;
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
  country: string;
  professor: string | null;
  difficulty: string;
  points: number;
  tags: string[];
}