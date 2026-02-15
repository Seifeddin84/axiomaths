import Link from 'next/link';

export default function LyceePage() {
  const levels = [
    {
      id: '1ere',
      title: '1ère Année',
      description: 'Exercices de mathématiques pour la 1ère année du lycée',
      sections: ['Toutes sections'],
    },
    {
      id: '2eme',
      title: '2ème Année',
      description: 'Exercices de mathématiques pour la 2ème année du lycée',
      sections: ['Sciences', 'Économie', 'Lettres'],
    },
    {
      id: '3eme',
      title: '3ème Année',
      description: 'Exercices de mathématiques pour la 3ème année du lycée',
      sections: ['Mathématiques', 'Sciences expérimentales', 'Économie', 'Technique'],
    },
    {
      id: '4eme',
      title: '4ème Année (BAC)',
      description: 'Exercices de préparation au baccalauréat',
      sections: ['Mathématiques', 'Sciences expérimentales', 'Économie', 'Technique', 'Informatique'],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-4">
          Lycée
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 font-semibold">
          Exercices de mathématiques pour les 4 années du lycée tunisien
        </p>
      </div>

      {/* Level Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {levels.map((level) => (
          <Link
            key={level.id}
            href={`/lycee/${level.id}`}
            className="group p-8 border-2 border-gray-200 dark:border-gray-800 rounded-lg hover:border-accent-500 dark:hover:border-primary-500 hover:shadow-lg transition-all"
          >
            {/* Title */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-black text-gray-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-primary-400 transition-colors">
                {level.title}
              </h2>
              <svg
                className="w-7 h-7 text-gray-400 group-hover:text-accent-500 dark:group-hover:text-primary-500 group-hover:translate-x-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 font-semibold mb-4">
              {level.description}
            </p>

            {/* Sections */}
            <div className="flex flex-wrap gap-2">
              {level.sections.map((section) => (
                <span
                  key={section}
                  className="px-3 py-1 text-sm font-bold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {section}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {/* Search */}
        <Link
          href="/recherche"
          className="group p-6 border-2 border-accent-500 dark:border-primary-500 rounded-lg hover:bg-accent-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white transition-all"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-black text-accent-600 dark:text-primary-400 group-hover:text-white mb-2">
                Recherche avancée
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-semibold group-hover:text-white/90">
                Filtrer par niveau, chapitre, difficulté
              </p>
            </div>
            <svg
              className="w-6 h-6 text-accent-500 dark:text-primary-500 group-hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </Link>

        {/* Devoirs */}
        <Link
          href="/devoirs"
          className="group p-6 border-2 border-accent-500 dark:border-primary-500 rounded-lg hover:bg-accent-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white transition-all"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-black text-accent-600 dark:text-primary-400 group-hover:text-white mb-2">
                Sujets de devoirs
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-semibold group-hover:text-white/90">
                Examens et contrôles pour s'entraîner
              </p>
            </div>
            <svg
              className="w-6 h-6 text-accent-500 dark:text-primary-500 group-hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </Link>
      </div>

      {/* Info Box */}
      <div className="mt-12 p-6 bg-accent-50 dark:bg-primary-900/20 border-l-4 border-accent-500 dark:border-primary-500 rounded-lg">
        <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">
          Programme du lycée
        </h3>
        <p className="text-gray-700 dark:text-gray-300 font-semibold">
          Tous les exercices suivent le programme officiel du ministère de l'Éducation tunisien. Les exercices sont classés par niveau, section et chapitre pour faciliter votre révision.
        </p>
      </div>
    </div>
  );
}