import Link from 'next/link';
import { getUniqueSections, getExercisesBySection } from '@/lib/fileReader';

const LEVEL_DISPLAY: Record<string, string> = {
  '1ere': '1ère',
  '2eme': '2ème',
  '3eme': '3ème',
  '4eme': '4ème',
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const SECTION_COLORS: Record<number, { from: string; to: string; border: string }> = {
  0: { from: 'from-blue-500', to: 'to-indigo-600', border: 'border-blue-700' },
  1: { from: 'from-purple-500', to: 'to-pink-600', border: 'border-purple-700' },
  2: { from: 'from-orange-500', to: 'to-red-600', border: 'border-orange-700' },
  3: { from: 'from-green-500', to: 'to-emerald-600', border: 'border-green-700' },
  4: { from: 'from-teal-500', to: 'to-cyan-600', border: 'border-teal-700' },
  5: { from: 'from-pink-500', to: 'to-rose-600', border: 'border-pink-700' },
};

export default async function LyceeLevelPage({
  params,
}: {
  params: Promise<{ level: string }>;
}) {
  const { level } = await params;
  const levelDisplay = LEVEL_DISPLAY[level];
  const sections = getUniqueSections('lycee', level);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-16">
  <div className="mb-6">
    <Link href="/lycee" className="text-orange-400 hover:text-orange-300 font-semibold text-sm uppercase tracking-wide">
      ← Retour au Lycée
    </Link>
  </div>
  <h1 className="text-6xl sm:text-7xl font-black mb-4 leading-tight">
    {levelDisplay} ANNÉE
  </h1>
  <p className="text-xl sm:text-2xl text-gray-300 font-light">
    {sections.length} section{sections.length > 1 ? 's' : ''} disponible{sections.length > 1 ? 's' : ''}
  </p>
</div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900"></div>
      </section>

      {/* Section Cards */}
      <section className="bg-white dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => {
              const sectionSlug = slugify(section);
              const colors = SECTION_COLORS[index % 6];
              const exerciseCount = getExercisesBySection('lycee', level, sectionSlug).length;
              
              return (
                <Link
                  key={section}
                  href={`/lycee/${level}/${sectionSlug}`}
                  className="group block relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.from} ${colors.to} transform group-hover:scale-105 transition-transform duration-300`}></div>
                  <div className={`relative p-8 border-4 ${colors.border}`}>
                    <div className="flex items-start justify-between mb-4">
                      <h2 className="text-3xl font-black text-white leading-tight">
                        {section}
                      </h2>
                      <svg className="w-8 h-8 text-white transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                    
                    <div className="h-1 w-20 bg-white mb-6"></div>
                    
                    <p className="text-white text-opacity-90 text-lg">
                      {exerciseCount} exercice{exerciseCount > 1 ? 's' : ''}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}