import Link from 'next/link';
import { getChaptersByLevel } from '@/lib/fileReader';

const LEVEL_DISPLAY: Record<string, string> = {
  '1ere': '1ère',
  '2eme': '2ème',
  '3eme': '3ème',
  '4eme': '4ème',
};

export default async function SectionChaptersPage({ 
  params 
}: { 
  params: Promise<{ level: string; section: string }> 
}) {
  const { level, section } = await params;
  const levelDisplay = LEVEL_DISPLAY[level];
  
  // Get chapters for this level and section
  const chapters = getChaptersByLevel('lycee', level, section);
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <Link 
          href={`/lycee/${level}`} 
          className="text-gray-600 hover:text-black mb-8 inline-block"
        >
          ← {levelDisplay}
        </Link>
        
        <h1 className="text-5xl font-bold mb-12 capitalize">
          {section.replace('-', ' ')}
        </h1>
        
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
                  href={`/lycee/${level}/${section}/${encodeURIComponent(slug)}`}
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