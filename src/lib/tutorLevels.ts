export const STUDENT_LEVELS = [
  '7ème',
  '8ème',
  '9ème',
  '1ère',
  '2ème Sciences',
  '2ème Informatique',
  '2ème Economie',
  '2ème Lettres',
  '2ème Sport',
  '3ème Maths',
  '3ème Sciences Experimentales',
  '3ème Techniques',
  '3ème Informatique',
  '3ème Economie et Gestion',
  '3ème Lettres',
  '3ème Sport',
  '4ème Maths',
  '4ème Sciences Expérimentales',
  '4ème Informatique',
  '4ème Économie et Gestion',
  '4ème Techniques',
  '4ème Lettres',
  '4ème Sport',
];

interface LevelColor {
  bg: string;
  text: string;
  border: string;
}

// Cycles through 17 distinct Tailwind hues, then repeats the first six at a
// heavier shade so all 23 levels still read as visually distinct.
const PALETTE: LevelColor[] = [
  { bg: 'bg-red-100 dark:bg-red-900/40', text: 'text-red-800 dark:text-red-200', border: 'border-red-300 dark:border-red-700' },
  { bg: 'bg-orange-100 dark:bg-orange-900/40', text: 'text-orange-800 dark:text-orange-200', border: 'border-orange-300 dark:border-orange-700' },
  { bg: 'bg-amber-100 dark:bg-amber-900/40', text: 'text-amber-800 dark:text-amber-200', border: 'border-amber-300 dark:border-amber-700' },
  { bg: 'bg-yellow-100 dark:bg-yellow-900/40', text: 'text-yellow-800 dark:text-yellow-200', border: 'border-yellow-300 dark:border-yellow-700' },
  { bg: 'bg-lime-100 dark:bg-lime-900/40', text: 'text-lime-800 dark:text-lime-200', border: 'border-lime-300 dark:border-lime-700' },
  { bg: 'bg-green-100 dark:bg-green-900/40', text: 'text-green-800 dark:text-green-200', border: 'border-green-300 dark:border-green-700' },
  { bg: 'bg-emerald-100 dark:bg-emerald-900/40', text: 'text-emerald-800 dark:text-emerald-200', border: 'border-emerald-300 dark:border-emerald-700' },
  { bg: 'bg-teal-100 dark:bg-teal-900/40', text: 'text-teal-800 dark:text-teal-200', border: 'border-teal-300 dark:border-teal-700' },
  { bg: 'bg-cyan-100 dark:bg-cyan-900/40', text: 'text-cyan-800 dark:text-cyan-200', border: 'border-cyan-300 dark:border-cyan-700' },
  { bg: 'bg-sky-100 dark:bg-sky-900/40', text: 'text-sky-800 dark:text-sky-200', border: 'border-sky-300 dark:border-sky-700' },
  { bg: 'bg-blue-100 dark:bg-blue-900/40', text: 'text-blue-800 dark:text-blue-200', border: 'border-blue-300 dark:border-blue-700' },
  { bg: 'bg-indigo-100 dark:bg-indigo-900/40', text: 'text-indigo-800 dark:text-indigo-200', border: 'border-indigo-300 dark:border-indigo-700' },
  { bg: 'bg-violet-100 dark:bg-violet-900/40', text: 'text-violet-800 dark:text-violet-200', border: 'border-violet-300 dark:border-violet-700' },
  { bg: 'bg-purple-100 dark:bg-purple-900/40', text: 'text-purple-800 dark:text-purple-200', border: 'border-purple-300 dark:border-purple-700' },
  { bg: 'bg-fuchsia-100 dark:bg-fuchsia-900/40', text: 'text-fuchsia-800 dark:text-fuchsia-200', border: 'border-fuchsia-300 dark:border-fuchsia-700' },
  { bg: 'bg-pink-100 dark:bg-pink-900/40', text: 'text-pink-800 dark:text-pink-200', border: 'border-pink-300 dark:border-pink-700' },
  { bg: 'bg-rose-100 dark:bg-rose-900/40', text: 'text-rose-800 dark:text-rose-200', border: 'border-rose-300 dark:border-rose-700' },
  { bg: 'bg-red-200 dark:bg-red-800/50', text: 'text-red-900 dark:text-red-100', border: 'border-red-400 dark:border-red-600' },
  { bg: 'bg-orange-200 dark:bg-orange-800/50', text: 'text-orange-900 dark:text-orange-100', border: 'border-orange-400 dark:border-orange-600' },
  { bg: 'bg-amber-200 dark:bg-amber-800/50', text: 'text-amber-900 dark:text-amber-100', border: 'border-amber-400 dark:border-amber-600' },
  { bg: 'bg-lime-200 dark:bg-lime-800/50', text: 'text-lime-900 dark:text-lime-100', border: 'border-lime-400 dark:border-lime-600' },
  { bg: 'bg-teal-200 dark:bg-teal-800/50', text: 'text-teal-900 dark:text-teal-100', border: 'border-teal-400 dark:border-teal-600' },
  { bg: 'bg-indigo-200 dark:bg-indigo-800/50', text: 'text-indigo-900 dark:text-indigo-100', border: 'border-indigo-400 dark:border-indigo-600' },
];

export const LEVEL_COLORS: Record<string, LevelColor> = Object.fromEntries(
  STUDENT_LEVELS.map((level, i) => [level, PALETTE[i % PALETTE.length]])
);

export const DEFAULT_LEVEL_COLOR: LevelColor = {
  bg: 'bg-gray-100 dark:bg-gray-800',
  text: 'text-gray-700 dark:text-gray-300',
  border: 'border-gray-300 dark:border-gray-700',
};

export function getLevelColor(level: string): LevelColor {
  return LEVEL_COLORS[level] ?? DEFAULT_LEVEL_COLOR;
}
