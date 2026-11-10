// Navigation tree shown in the left sidebar: level -> sections -> chapters.
// Built on the server by src/lib/navTree.ts, rendered by src/components/Sidebar.tsx.

export interface NavChapter {
  title: string;       // chapter name as written in the exercises (French or Arabic)
  href: string;        // chapter page
  count: number;       // number of exercises (0 when the chapter only has a lesson so far)
}

export interface NavSection {
  title: string;       // e.g. "Sciences Expérimentales"
  slug: string;        // URL-encoded slug used in the section and chapter URLs
  href: string;        // section page (list of chapters)
  chapters: NavChapter[];
}

export interface NavLevel {
  key: string;         // "lycee/2eme"
  sections: NavSection[];   // levels with sections (2ème, 3ème, 4ème)
  chapters: NavChapter[];   // levels without sections (1ère, collège): chapters directly
}

export type NavTree = Record<string, NavLevel>;
