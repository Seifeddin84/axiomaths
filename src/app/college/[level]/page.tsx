import Link from 'next/link';

// This tells Next.js which dynamic routes to pre-render
export async function generateStaticParams() {
  return [
    { level: '7eme' },
    { level: '8eme' },
    { level: '9eme' },
  ];
}

export default async function CollegeLevelPage({
  params,
}: {
  params: Promise<{ level: string }>;
}) {
  const { level } = await params;

  // Level configuration
  const levelConfig: Record<string, { title: string; description: string; chapters: Array<{ id: string; title: string; count: number }> }> = {
    '7eme': {
      title: '7ème Année',
      description: 'Programme de mathématiques pour la 7ème année du collège',
      chapters: [
        { id: 'geometrie', title: 'Géométrie', count: 12 },
        { id: 'algebre', title: 'Algèbre', count: 8 },
        { id: 'calcul', title: 'Calcul numérique', count: 10 },
      ],
    },
    '8eme': {
      title: '8ème Année',
      description: 'Programme de mathématiques pour la 8ème année du collège',
      chapters: [
        { id: 'equations', title: 'Équations', count: 15 },
        { id: 'geometrie-espace', title: 'Géométrie dans l\'espace', count: 9 },
        { id: 'statistiques', title: 'Statistiques', count: 7 },
      ],
    },
    '9eme': {
      title: '9ème Année',
      description: 'Programme de mathématiques pour la 9ème année du collège',
      chapters: [
        { id: 'calcul-litteral', title: 'Calcul littéral', count: 14 },
        { id: 'pythagore', title: 'Théorème de Pythagore', count: 11 },
        { id: 'trigonometrie', title: 'Trigonométrie', count: 13 },
      ],
    },
  };

  const config = levelConfig[level];
  if (!config) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white">
          Niveau non trouvé
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Breadcrumb */}
      <div className="mb-8">
        <nav className="flex items-center space-x-2 text-sm font-semibold">
          <Link
            href="/college"
            className="text-accent-600 dark:text-primary-400 hover:text-accent-700 dark:hover:text-primary-300"
          >
            Collège
          </Link>
          <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-900 dark:text-white">{config.title}</span>
        </nav>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-4">
          {config.title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 font-semibold">
          {config.description}
        </p>
      </div>

      {/* Chapter Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {config.chapters.map((chapter) => (
          <Link
            key={chapter.id}
            href={`/college/${level}/${chapter.id}`}
            className="group p-6 border-2 border-gray-200 dark:border-gray-800 rounded-lg hover:border-accent-500 dark:hover:border-primary-500 hover:shadow-lg transition-all"
          >
            {/* Chapter Title */}
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-black text-gray-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-primary-400 transition-colors">
                {chapter.title}
              </h2>
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-accent-500 dark:group-hover:text-primary-500 group-hover:translate-x-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Exercise Count */}
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 font-semibold">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {chapter.count} exercices
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Links */}
      <div className="mt-12 flex gap-4">
        <Link
          href={`/recherche?level=${level}`}
          className="px-6 py-3 bg-accent-500 text-white font-bold rounded-lg hover:bg-accent-600 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors"
        >
          Rechercher dans {config.title}
        </Link>
        <Link
          href="/college"
          className="px-6 py-3 border-2 border-accent-500 dark:border-primary-500 text-accent-600 dark:text-primary-400 font-bold rounded-lg hover:bg-accent-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white transition-colors"
        >
          Retour au collège
        </Link>
      </div>
    </div>
  );
}