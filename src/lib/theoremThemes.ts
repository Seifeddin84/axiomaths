// One-word theme for each lesson chapter, used on /theoremes to filter and to label a theorem
// (« Probabilités – Absence de mémoire »). Chapters of several levels share a theme
// (Suites réelles, Suites arithmétiques et géométriques → Suites).

const RULES: [RegExp, string][] = [
  [/probabilit/, 'Probabilités'],
  [/statistique/, 'Statistiques'],
  [/denombrement|التعداد/, 'Dénombrement'],
  [/complexe/, 'Complexes'],
  [/trigonometr/, 'Trigonométrie'],
  [/espace/, 'Espace'],
  [/coniques?/, 'Coniques'],
  [/similitude/, 'Similitudes'],
  [/deplacement|isometrie/, 'Isométries'],
  [/rotation/, 'Rotations'],
  [/homothetie/, 'Homothéties'],
  [/vecteur|translation/, 'Vecteurs'],
  [/thales|طالس/, 'Thalès'],
  [/relations? metrique|القياسية/, 'Métriques'],
  [/differentielle/, 'Différentielles'],
  [/primitive/, 'Primitives'],
  [/integrale/, 'Intégrales'],
  [/logarithme/, 'Logarithme'],
  [/exponentielle/, 'Exponentielle'],
  [/reciproque/, 'Réciproques'],
  [/derive|derivabilite/, 'Dérivation'],
  [/continuite|limite/, 'Limites'],
  [/suite/, 'Suites'],
  [/bezout|divisibilite|congruence|arithmetique dans/, 'Arithmétique'],
  [/polynome|algebrique|degre|equation/, 'Algèbre'],
  [/fonction/, 'Fonctions'],
];

const fold = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');

/** One-word theme of a chapter name; the chapter itself when no rule matches. */
export function chapterTheme(chapter: string): string {
  const f = fold(chapter);
  for (const [re, theme] of RULES) if (re.test(f)) return theme;
  return chapter;
}

/** Main theme of a theorem: the theme of its first chapter. */
export function mainTheme(chapters: string[]): string | undefined {
  return chapters.length ? chapterTheme(chapters[0]) : undefined;
}
