import Link from 'next/link';
import { getChaptersByLevel } from '@/lib/fileReader';
import { notFound } from 'next/navigation';

const VALID_LEVELS = ['7eme', '8eme', '9eme'];

const LEVEL_DISPLAY: Record<string, string> = {
  '7eme': '7ème',
  '8eme': '8ème',
  '9eme': '9ème',
};

export default async function CollegeLevelPage({ 
  params 
}: { 
  params: Promise<{ level: string }> 
}) {
  const { level } = await params;
  
  if (!VALID_LEVELS.includes(level)) {
    notFound();
  }
  
  const levelDisplay = LEVEL_DISPLAY[level];
  
  // Get chapters for this level (no section for college)
  const chapters = getChaptersByLevel('college', level, null);
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <Link 
          href="/college" 
          className="text-gray-600 hover:text-black mb-8 inline-block"
        >
          ← COLLÈGE
        </Link>
        
        <h1 className="text-5xl font-bold mb-12">{levelDisplay}</h1>
        
        {chapters.length === 0 ? (
          <p className="text-gray-600 text-xl">Aucun chapitre disponible.</p>
        ) : (
          <div className="space-y-4">
            {chapters.map((chapter) => {
              // Create URL-safe slug
              const slug = chapter.toLowerCase().replace(/\s+/g, '-');
              
              return (
                <Link 
                  key={chapter} 
                  href={`/college/${level}/${encodeURIComponent(slug)}`}
                  className="block"
                >
                  <div className="border-2 border-black rounded-lg p-8 hover:bg-gray-50 transition-colors cursor-pointer">
                    <h2 className="text-3xl font-semibold">{chapter}</h2>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}