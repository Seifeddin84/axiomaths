import Link from 'next/link';

// This tells Next.js which dynamic routes to pre-render
export async function generateStaticParams() {
  return [
    { level: '1ere' },
    { level: '2eme' },
    { level: '3eme' },
    { level: '4eme' },
  ];
}

export default async function LyceeLevelPage({
  params,
}: {
  params: Promise<{ level: string }>;
}) {
  const { level } = await params;

  // Level configuration
  const levelConfig: Record<string, { title: string; description: string; sections: Array<{ id: string; title: string; description: string }> }> = {
    '1ere': {
      title: '1ère Année',
      description: 'Programme commun pour toutes les sections',
      sections: [
        {
          id: 'all',
          title: 'Toutes sections',
          description: 'Exercices de mathématiques pour la 1ère année',
        },
      ],
    },
    '2eme': {
      title: '2ème Année',
      description: 'Choisissez votre section',
      sections: [
        {
          id: 'sciences',
          title: 'Sciences',
          description: 'Mathématiques niveau sciences',
        },
        {
          id: 'economie',
          title: 'Économie et gestion',
          description: 'Mathématiques niveau économie',
        },
        {
          id: 'lettres',
          title: 'Lettres',
          description: 'Mathématiques niveau lettres',
        },
      ],
    },
    '3eme': {
      title: '3ème Année',
      description: 'Choisissez votre section',
      sections: [
        {
          id: 'math',
          title: 'Mathématiques',
          description: 'Section mathématiques',
        },
        {
          id: 'sciences-exp',
          title: 'Sciences expérimentales',
          description: 'Section sciences expérimentales',
        },
        {
          id: 'economie',
          title: 'Économie et gestion',
          description: 'Section économie',
        },
        {
          id: 'technique',
          title: 'Technique',
          description: 'Section technique',
        },
      ],
    },
    '4eme': {
      title: '4ème Année (BAC)',
      description: 'Préparation au baccalauréat',
      sections: [
        {
          id: 'math',
          title: 'Mathématiques',
          description: 'Bac mathématiques',
        },
        {
          id: 'sciences-exp',
          title: 'Sciences expérimentales',
          description: 'Bac sciences expérimentales',
        },
        {
          id: 'economie',
          title: 'Économie et gestion',
          description: 'Bac économie',
        },
        {
          id: 'technique',
          title: 'Technique',
          description: 'Bac technique',
        },
        {
          id: 'informatique',
          title: 'Informatique',
          description: 'Bac informatique',
        },
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
            href="/lycee"
            className="text-accent-600 dark:text-primary-400 hover:text-accent-700 dark:hover:text-primary-300"
          >
            Lycée
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

      {/* Section Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {config.sections.map((section) => (
          <Link
            key={section.id}
            href={`/lycee/${level}/${section.id}`}
            className="group p-6 border-2 border-gray-200 dark:border-gray-800 rounded-lg hover:border-accent-500 dark:hover:border-primary-500 hover:shadow-lg transition-all"
          >
            {/* Section Title */}
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-black text-gray-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-primary-400 transition-colors">
                {section.title}
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

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 font-semibold">
              {section.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-12 flex gap-4">
        <Link
          href={`/recherche?level=${level}`}
          className="px-6 py-3 bg-accent-500 text-white font-bold rounded-lg hover:bg-accent-600 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors"
        >
          Rechercher dans {config.title}
        </Link>
        <Link
          href="/lycee"
          className="px-6 py-3 border-2 border-accent-500 dark:border-primary-500 text-accent-600 dark:text-primary-400 font-bold rounded-lg hover:bg-accent-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white transition-colors"
        >
          Retour au lycée
        </Link>
      </div>
    </div>
  );
}