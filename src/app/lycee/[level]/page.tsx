import Link from 'next/link';
import { getAllExercises } from '@/lib/fileReader';

const LEVEL_DISPLAY: Record<string, string> = {
  '1ere': '1ère',
  '2eme': '2ème',
  '3eme': '3ème',
  '4eme': '4ème',
};

function slugify(text: string | undefined | null): string {
  if (!text) return '';
  if (typeof text !== 'string') return '';
  
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default async function LyceeLevelPage({
  params,
}: {
  params: Promise<{ level: string }>;
}) {
  const { level } = await params;
  const levelDisplay = LEVEL_DISPLAY[level];
  
  const allExercises = await getAllExercises();
  
  // Filter exercises for this level
  const levelExercises = allExercises.filter(ex => {
    if (!ex.level) return false;
    const exLevel = slugify(ex.level);
    const targetLevel = slugify(level);
    return exLevel === targetLevel;
  });

  // FIXED: Better unique sections calculation
  const uniqueSections = Array.from(
    new Set<string>(
      levelExercises.flatMap(ex => {
        const result: string[] = [];
        
        // Handle sections array (NEW FORMAT)
        if (ex.sections && Array.isArray(ex.sections)) {
          ex.sections.forEach(s => {
            if (s && typeof s === 'string' && s.trim()) {
              result.push(s.trim());
            }
          });
        }
        // Handle single section (OLD FORMAT)
        else if (ex.section && typeof ex.section === 'string' && ex.section.trim()) {
          result.push(ex.section.trim());
        }
        
        return result;
      })
    )
  ).sort();

  // DEBUG: Enhanced logging
  console.log('=== Level Page Debug ===');
  console.log('Level:', level);
  console.log('Total exercises:', levelExercises.length);
  console.log('Unique sections found:', uniqueSections);
  console.log('Sample exercises:', levelExercises.slice(0, 3).map(ex => ({
    uid: ex.uid,
    sections: ex.sections,
    section: ex.section,
    isArray: Array.isArray(ex.sections)
  })));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero - Full Width */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12">
        <div className="max-w-screen-2xl mx-auto px-6">
          <Link href="/lycee" className="text-orange-400 hover:text-orange-300 text-sm font-semibold mb-4 inline-block">
            ← RETOUR AU LYCÉE
          </Link>
          <h1 className="text-5xl font-black mb-2">{levelDisplay} ANNÉE</h1>
          <p className="text-lg text-gray-300">
            {uniqueSections.length} section{uniqueSections.length > 1 ? 's' : ''} disponible{uniqueSections.length > 1 ? 's' : ''}
          </p>
        </div>
      </div>

      {/* Section Cards - Full Width, Compact */}
      <div className="max-w-screen-2xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {uniqueSections.map((section, index) => {
            const sectionSlug = slugify(section);
            
            const exerciseCount = levelExercises.filter(ex => {
  if (ex.sections && Array.isArray(ex.sections)) {
    // ✅ NEW: Check if s is a string before calling trim
    return ex.sections.some(s => 
      s && typeof s === 'string' && s.trim() === section
    );
  }
  return ex.section?.trim() === section;
}).length;
            
            const colors = [
              'from-blue-500 to-indigo-600',
              'from-purple-500 to-pink-600',
              'from-orange-500 to-red-600',
              'from-green-500 to-emerald-600',
              'from-teal-500 to-cyan-600',
              'from-rose-500 to-pink-600',
            ];
            
            const colorClass = colors[index % colors.length];
            
            return (
              <Link
                key={section}
                href={`/lycee/${level}/${sectionSlug}`}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br p-6 hover:scale-105 transition-transform duration-300"
                style={{
                  background: `linear-gradient(135deg, ${colorClass.includes('blue') ? '#3b82f6, #4f46e5' : 
                                                      colorClass.includes('purple') ? '#a855f7, #ec4899' :
                                                      colorClass.includes('orange') ? '#f97316, #dc2626' :
                                                      colorClass.includes('green') ? '#22c55e, #10b981' :
                                                      colorClass.includes('teal') ? '#14b8a6, #06b6d4' :
                                                      '#f43f5e, #ec4899'})`
                }}
              >
                <div className="flex flex-col h-full">
                  <h2 className="text-2xl font-black text-white mb-3">{section}</h2>
                  <div className="mt-auto">
                    <p className="text-white/80 text-sm">{exerciseCount} exercice{exerciseCount > 1 ? 's' : ''}</p>
                  </div>
                  <svg className="absolute bottom-6 right-6 w-6 h-6 text-white/30 group-hover:text-white/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}