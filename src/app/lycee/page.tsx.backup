import Link from 'next/link';
import { getAllExercises } from '@/lib/fileReader';

export default async function LyceePage() {
  const allExercises = await getAllExercises();

  const getLevelStats = (level: string) => {
  const levelExercises = allExercises.filter(ex => {
    if (!ex.level) return false;
    const exLevel = ex.level.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const targetLevel = level.toLowerCase();
    return exLevel === targetLevel || exLevel === targetLevel.replace('eme', 'ème');
  });

  console.log('===================');
  console.log(`Level: ${level}`);
  console.log(`Total exercises found: ${levelExercises.length}`);
  
  // Debug: Show first 3 exercises
  levelExercises.slice(0, 3).forEach(ex => {
    console.log('Exercise:', {
      uid: ex.uid,
      sections: ex.sections,
      section: ex.section,
      isArray: Array.isArray(ex.sections),
      sectionsType: typeof ex.sections,
      sectionType: typeof ex.section
    });
  });

  // Extract sections with detailed logging
  const allSections: string[] = [];
  
  levelExercises.forEach(ex => {
    if (ex.sections && Array.isArray(ex.sections)) {
      console.log(`Exercise ${ex.uid} has sections array:`, ex.sections);
      ex.sections.forEach(s => {
        if (s && typeof s === 'string' && s.trim()) {
          console.log(`  Adding section from array: "${s.trim()}"`);
          allSections.push(s.trim());
        } else {
          console.log(`  Skipping invalid section:`, s, typeof s);
        }
      });
    } else if (ex.section && typeof ex.section === 'string' && ex.section.trim()) {
      console.log(`Exercise ${ex.uid} has single section: "${ex.section}"`);
      allSections.push(ex.section.trim());
    } else {
      console.log(`Exercise ${ex.uid} has NO sections:`, {sections: ex.sections, section: ex.section});
    }
  });

  console.log('All sections collected:', allSections);
  
  const uniqueSections = Array.from(new Set(allSections)).sort();
  console.log('Unique sections:', uniqueSections);
  console.log('Unique count:', uniqueSections.length);
  console.log('===================');

  return {
    exerciseCount: levelExercises.length,
    sectionCount: uniqueSections.length,
    sections: uniqueSections
  };
};

  const premiereStats = getLevelStats('1ere');
  const deuxiemeStats = getLevelStats('2eme');
  const troisiemeStats = getLevelStats('3eme');
  const quatriemeStats = getLevelStats('4eme');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero - Full Width */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-screen-2xl mx-auto px-6">
          <Link href="/" className="text-orange-400 hover:text-orange-300 text-sm font-semibold mb-4 inline-block">
            ← RETOUR À L'ACCUEIL
          </Link>
          <h1 className="text-6xl font-black mb-4">LYCÉE</h1>
          <p className="text-xl text-gray-300">
            Exercices de mathématiques pour toutes les années du lycée tunisien
          </p>
        </div>
      </div>

      {/* Cards - Full Width, Compact Grid */}
      <div className="max-w-screen-2xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1ère Année */}
          <Link
            href="/lycee/1ere"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 p-6 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex flex-col h-full">
              <h2 className="text-3xl font-black text-white mb-2">1ère ANNÉE</h2>
              <div className="text-white/80 text-sm mb-4">
                {premiereStats.sectionCount === 0 ? (
                  <span>Tronc Commun</span>
                ) : (
                  <span>{premiereStats.sectionCount} section{premiereStats.sectionCount > 1 ? 's' : ''}</span>
                )}
              </div>
              <div className="mt-auto">
                <p className="text-white/70 text-sm">{premiereStats.exerciseCount} exercices</p>
              </div>
              <svg className="absolute bottom-6 right-6 w-8 h-8 text-white/30 group-hover:text-white/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </Link>

          {/* 2ème Année */}
          <Link
            href="/lycee/2eme"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-500 to-red-600 p-6 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex flex-col h-full">
              <h2 className="text-3xl font-black text-white mb-2">2ème ANNÉE</h2>
              <div className="text-white/80 text-sm mb-1">
                {deuxiemeStats.sectionCount} section{deuxiemeStats.sectionCount > 1 ? 's' : ''}
              </div>
              {deuxiemeStats.sections.length > 0 && (
                <div className="text-white/60 text-xs mb-4">
                  {deuxiemeStats.sections.join(' • ')}
                </div>
              )}
              <div className="mt-auto">
                <p className="text-white/70 text-sm">{deuxiemeStats.exerciseCount} exercices</p>
              </div>
              <svg className="absolute bottom-6 right-6 w-8 h-8 text-white/30 group-hover:text-white/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </Link>

          {/* 3ème Année */}
          <Link
            href="/lycee/3eme"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 p-6 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex flex-col h-full">
              <h2 className="text-3xl font-black text-white mb-2">3ème ANNÉE</h2>
              <div className="text-white/80 text-sm mb-1">
                {troisiemeStats.sectionCount} section{troisiemeStats.sectionCount > 1 ? 's' : ''}
              </div>
              {troisiemeStats.sections.length > 0 && (
                <div className="text-white/60 text-xs mb-4">
                  {troisiemeStats.sections.join(' • ')}
                </div>
              )}
              <div className="mt-auto">
                <p className="text-white/70 text-sm">{troisiemeStats.exerciceCount} exercices</p>
              </div>
              <svg className="absolute bottom-6 right-6 w-8 h-8 text-white/30 group-hover:text-white/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </Link>

          {/* 4ème Année */}
          <Link
            href="/lycee/4eme"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 p-6 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex flex-col h-full">
              <h2 className="text-3xl font-black text-white mb-2">4ème ANNÉE</h2>
              <div className="text-white/80 text-sm mb-1">
                {quatriemeStats.sectionCount} section{quatriemeStats.sectionCount > 1 ? 's' : ''}
              </div>
              {quatriemeStats.sections.length > 0 && (
                <div className="text-white/60 text-xs mb-4">
                  {quatriemeStats.sections.join(' • ')}
                </div>
              )}
              <div className="mt-auto">
                <p className="text-white/70 text-sm">{quatriemeStats.exerciceCount} exercices</p>
              </div>
              <svg className="absolute bottom-6 right-6 w-8 h-8 text-white/30 group-hover:text-white/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}