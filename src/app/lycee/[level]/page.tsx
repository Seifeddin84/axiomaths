import Link from 'next/link';
import { getUniqueSections } from '@/lib/fileReader';

const LEVEL_DISPLAY: Record<string, string> = {
  '1ere': '1ère',
  '2eme': '2ème',
  '3eme': '3ème',
  '4eme': '4ème',
};

export default async function LyceeLevelPage({
  params,
}: {
  params: Promise<{ level: string }>;
}) {
  const { level } = await params;
  const levelDisplay = LEVEL_DISPLAY[level];
  const sections = getUniqueSections('lycee', level);

  const sectionInfo: Record<string, { name: string; description: string }> = {
    'sciences': { name: 'Sciences', description: 'Section scientifique' },
    'lettres': { name: 'Lettres', description: 'Section littéraire' },
    'economie-et-services': { name: 'Économie et Services', description: 'Section économique' },
    'sport': { name: 'Sport', description: 'Section sportive' },
    'informatique': { name: 'Informatique', description: 'Section informatique' },
    'math': { name: 'Mathématiques', description: 'Section mathématiques' },
    'sciences-experimentales': { name: 'Sciences Expérimentales', description: 'Section sciences expérimentales' },
    'technique': { name: 'Technique', description: 'Section technique' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500 text-white font-mono text-xs uppercase tracking-widest mb-6">
            {levelDisplay} ANNÉE
          </div>
          <h1 className="text-6xl sm:text-7xl font-black mb-4 text-black dark:text-white leading-none">
            {levelDisplay} ANNÉE
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-400">
            {sections.length} section{sections.length > 1 ? 's' : ''} disponible{sections.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Section Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => {
            const info = sectionInfo[section] || { name: section, description: '' };
            return (
              <Link
                key={section}
                href={`/lycee/${level}/${section}`}
                className="group block"
              >
                <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-8 shadow-sm hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-200 h-full">
                  <h2 className="text-3xl font-black mb-3 text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                    {info.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {info.description}
                  </p>
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold">
                    ACCÉDER
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}