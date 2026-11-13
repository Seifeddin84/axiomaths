// In 2ème, the Sciences and Technologie de l'informatique sections study maths from the
// same textbook (« Mathématiques 2ème année, Sections : Sciences – Technologie de
// l'informatique »). The site keeps two section pages for the students' comfort, but they
// are the same content: anything of 2ème tagged with one of them is shown under both.
// Applied once, when exercises and lessons are read, so every page, count, filter and
// search sees the same thing.

export const TWIN_SECTIONS_2EME = ['Sciences', 'Informatique'] as const;

const fold = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[’']/g, "'")
    .replace(/\s+/g, ' ')
    .trim();

// names used for these two sections in the files (old and new)
const TWIN_NAMES = new Set(
  [
    'Sciences',
    'Informatique',
    "Technologies de l'Informatique",
    "Technologie de l'informatique",
    "Sciences et technologies de l'informatique",
    'Sciences et Informatique',
  ].map(fold)
);

/** True for a section name that means 2ème Sciences or 2ème Informatique. */
export function isTwinSection2eme(section: string): boolean {
  return TWIN_NAMES.has(fold(section));
}

/**
 * Sections of an exercise or a lesson as the site uses them. For lycée 2ème, a Sciences or
 * Informatique tag (whatever its spelling) becomes both « Sciences » and « Informatique ».
 * Other levels and sections are returned unchanged (duplicates removed).
 */
export function siteSections(school: unknown, level: unknown, sections: string[]): string[] {
  const is2eme = fold(String(level ?? '')) === '2eme' && fold(String(school ?? 'lycee')) !== 'college';
  const out: string[] = [];
  const push = (s: string) => {
    if (!out.some(o => fold(o) === fold(s))) out.push(s);
  };
  for (const s of sections) {
    if (is2eme && isTwinSection2eme(s)) TWIN_SECTIONS_2EME.forEach(push);
    else push(s);
  }
  return out;
}

// Order of the section cards: the way the textbooks list them, not alphabetical (alphabetical put
// « Informatique » first on the 2ème page, and a pupil took it for a school subject).
const ORDER_2EME = ['sciences', 'informatique', 'economie et service', 'lettres'];
const ORDER_OTHER = [
  'mathematiques',
  'sciences experimentales',
  'economie et gestion',
  'informatique',
  'technique',
  'lettres',
];

/** Sections in display order for a level; unknown ones come last, alphabetically. */
export function sortSections(level: unknown, sections: string[]): string[] {
  const order = fold(String(level ?? '')) === '2eme' ? ORDER_2EME : ORDER_OTHER;
  const rank = (s: string) => {
    const i = order.indexOf(fold(s));
    return i === -1 ? order.length : i;
  };
  return [...sections].sort((a, b) => rank(a) - rank(b) || a.localeCompare(b, 'fr'));
}

/** For a 2ème twin section, the name of the other one (same maths textbook, same content). */
export function twinOf2eme(section: string): string | null {
  if (!isTwinSection2eme(section)) return null;
  return fold(section) === fold('Sciences') ? 'Informatique' : 'Sciences';
}
