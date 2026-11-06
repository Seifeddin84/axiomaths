import Link from 'next/link';
import { getAllLessons, lessonLabel } from '@/lib/lessonReader';

export const metadata = {
  title: 'Cours de mathématiques | Axiomaths',
  description: 'Cours de mathématiques conformes au programme tunisien, chapitre par chapitre.',
};

export default function CoursIndexPage() {
  const lessons = getAllLessons();

  // group by "2ème Sciences", "3ème Economie et Gestion", ...
  const groups = new Map<string, typeof lessons>();
  for (const lesson of lessons) {
    const key = lessonLabel(lesson);
    groups.set(key, [...(groups.get(key) ?? []), lesson]);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
      <div className="mb-10 sm:mb-14 max-w-3xl">
        <h1 className="text-3xl sm:text-5xl font-black text-gray-900 dark:text-white mb-3">Cours</h1>
        <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 font-semibold">
          L&apos;intuition d&apos;abord, la formule ensuite, et un exemple chiffré à chaque étape.
        </p>
      </div>

      {lessons.length === 0 && (
        <p className="text-gray-600 dark:text-gray-400 font-semibold">Aucun cours publié pour le moment.</p>
      )}

      <div className="space-y-12">
        {Array.from(groups.entries()).map(([label, items]) => (
          <section key={label}>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-5">{label}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {items.map(lesson => (
                <Link
                  key={lesson.slug}
                  href={`/cours/${lesson.slug}`}
                  className="group relative p-5 sm:p-6 border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 hover:border-accent-500 dark:hover:border-primary-500 hover:shadow-xl transition-all"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-lg bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="text-xs font-black uppercase tracking-widest text-accent-600 dark:text-primary-400 mb-2">
                    Chapitre {lesson.order}
                  </p>
                  <h3 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white mb-2">{lesson.title}</h3>
                  {lesson.summary && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium line-clamp-3 mb-3">{lesson.summary}</p>
                  )}
                  <p className="text-xs font-bold text-gray-500">{lesson.readTime} min de lecture</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
