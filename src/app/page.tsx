import Link from 'next/link';
import { getProfessorOverview } from '@/lib/professorStats';
import { getAllExercises } from '@/lib/fileReader';
import { getAllLessons, normalize } from '@/lib/lessonReader';
import { getAllExams } from '@/lib/exams';
import { BAC_SECTIONS, bacSectionSlugs, exerciseSections, isBacExam, isBacExercise } from '@/lib/bac';
import HomeSearchBar from '@/components/HomeSearchBar';
import HomeTasks, { HomeBacSection, HomeLevel, HomeLevelCounts } from '@/components/HomeTasks';

const LEVELS: HomeLevel[] = [
  { key: '7eme', label: '7ème', school: 'college' },
  { key: '8eme', label: '8ème', school: 'college' },
  { key: '9eme', label: '9ème', school: 'college' },
  { key: '1ere', label: '1ère', school: 'lycee' },
  { key: '2eme', label: '2ème', school: 'lycee' },
  { key: '3eme', label: '3ème', school: 'lycee' },
  { key: '4eme', label: '4ème', school: 'lycee' },
];

function countByLevel(levels: (string | undefined | null)[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const l of LEVELS) out[l.key] = levels.filter(x => normalize(x) === normalize(l.key)).length;
  return out;
}

export default async function HomePage() {
  const overview = getProfessorOverview();
  const topProfessors = overview.stats.filter(s => s.kind === 'prof').slice(0, 6);

  const exercises = getAllExercises();
  const lessons = getAllLessons();
  const allExams = getAllExams();
  const exams = allExams.filter(e => !isBacExam(e));
  const bacExercises = exercises.filter(isBacExercise);
  const bacPapers = allExams.filter(isBacExam);
  const bacSections: HomeBacSection[] = BAC_SECTIONS.map(s => ({
    slug: s.slug,
    label: s.short,
    count:
      bacExercises.filter(ex => bacSectionSlugs(exerciseSections(ex)).includes(s.slug)).length +
      bacPapers.filter(p => bacSectionSlugs([p.section]).includes(s.slug)).length,
  }));
  const bacTotal = bacExercises.length + bacPapers.length;
  const byCours = countByLevel(lessons.map(l => l.level));
  const byExercices = countByLevel(exercises.map(e => e.level));
  const byDevoirs = countByLevel(exams.map(e => e.level));
  const counts: Record<string, HomeLevelCounts> = Object.fromEntries(
    LEVELS.map(l => [l.key, { cours: byCours[l.key], exercices: byExercices[l.key], devoirs: byDevoirs[l.key] }])
  );
  const totals: HomeLevelCounts = { cours: lessons.length, exercices: exercises.length, devoirs: exams.length };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-14">
      {/* Hero: say what the site is, then let the student search right away */}
      <div className="text-center mb-8 sm:mb-10">
        <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white mb-4">
          Maîtrisez les mathématiques
        </h1>
        <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6 font-semibold">
          Cours, exercices et devoirs de mathématiques pour le collège et le lycée tunisiens
        </p>
        <div className="max-w-2xl mx-auto">
          <HomeSearchBar />
        </div>
      </div>

      <HomeTasks levels={LEVELS} counts={counts} totals={totals} bacSections={bacSections} bacTotal={bacTotal} />

      <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold">
        <Link href="/theoremes" className="px-4 py-2 rounded-full border-2 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:border-accent-500 dark:hover:border-primary-500">
          Théorèmes
        </Link>
        <Link href="/professeurs" className="px-4 py-2 rounded-full border-2 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:border-accent-500 dark:hover:border-primary-500">
          Professeurs
        </Link>
        <Link href="/blog" className="px-4 py-2 rounded-full border-2 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:border-accent-500 dark:hover:border-primary-500">
          Blog
        </Link>
      </div>

      {/* Professors behind the exercises */}
      {topProfessors.length > 0 && (
        <div className="mt-6 p-6 border-2 border-gray-200 dark:border-gray-800 rounded-lg">
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
            <h2 className="text-xl font-black text-gray-900 dark:text-white">Les professeurs derrière les exercices</h2>
            <Link href="/professeurs" className="text-sm font-bold text-accent-600 dark:text-primary-400 hover:underline">
              Voir les {overview.professors} professeurs →
            </Link>
          </div>
          <ul className="flex flex-wrap gap-2">
            {topProfessors.map(p => (
              <li key={p.id}>
                <Link
                  href={`/recherche?q=${encodeURIComponent(p.searchQuery)}`}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border-2 border-gray-200 dark:border-gray-700 text-sm font-bold text-gray-800 dark:text-gray-200 hover:border-accent-500 dark:hover:border-primary-500 transition-colors"
                >
                  <span dir="auto">{p.name}</span>
                  <span className="text-accent-600 dark:text-primary-400">{p.count}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}