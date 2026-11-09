// Lesson (cours) type definitions

export interface LessonHeading {
  depth: 2 | 3;
  text: string; // heading text, math delimiters kept (rendered as plain text in the TOC)
  id: string;
}

export interface Lesson {
  slug: string;
  title: string;
  summary?: string;
  lang: 'fr' | 'ar';         // language of the lesson (`ar` => right-to-left layout)
  dir: 'ltr' | 'rtl';
  school: string;            // "lycee" | "college"
  level: string;             // "2eme", "3eme", ...
  sections: string[];        // e.g. ["Sciences", "Technologies de l'Informatique"]
  chapter: string;           // must match the `chapter` field of the exercises
  prerequisites: string[];
  source?: string;           // reference textbook
  updated?: string;
  content: string;           // markdown body
  headings: LessonHeading[];
  readTime: number;          // minutes
}
