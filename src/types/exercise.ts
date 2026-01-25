// Exercise type definition
export interface Exercise {
  uid: string;
  title?: string;
  content: string;
  solution?: string;
  school?: string;
  level?: string;
  section?: string;        // Single section (backward compatibility)
  sections?: string[];     // Multiple sections (new feature)
  chapter?: string;
  source?: string;
  country?: string;
  year?: number;
  professor?: string;
  difficulty?: string;
  points?: number;
  tags?: string[];
}

export interface ExerciseMetadata {
  uid: string;
  school: string;
  level: string;
  section: string | null;      // Primary section (backward compatibility)
  sections?: string[];         // Multiple sections (NEW - added)
  chapter: string;
  source: string;
  title?: string;
  country: string;
  year?: number;
  professor: string | null;
  difficulty: string;
  points: number;
  tags: string[];
}