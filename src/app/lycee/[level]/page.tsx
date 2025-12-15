import Link from 'next/link';
import { notFound } from 'next/navigation';

const SECTIONS_BY_LEVEL: Record<string, { section: string; display: string }[]> = {
  '1ere': [], // No sections for 1ère - goes directly to chapters
  '2eme': [
    { section: 'sciences', display: 'Sciences' },
    { section: 'lettres', display: 'Lettres' },
    { section: 'economie-services', display: 'Économie et Services' },
    { section: 'sport', display: 'Sport' },
    { section: 'informatique', display: 'Informatique' },
  ],
  '3eme': [
    { section: 'maths', display: 'Mathématiques' },
    { section: 'techniques', display: 'Techniques' },
    { section: 'sciences-exp', display: 'Sciences Expérimentales' },
    { section: 'informatique', display: 'Informatique' },
    { section: 'economie-gestion', display: 'Économie et Gestion' },
    { section: 'lettres', display: 'Lettres' },
    { section: 'sport', display: 'Sport' },
  ],
  '4eme': [
    { section: 'maths', display: 'Mathématiques' },
    { section: 'techniques', display: 'Techniques' },
    { section: 'sciences-exp', display: 'Sciences Expérimentales' },
    { section: 'informatique', display: 'Informatique' },
    { section: 'economie-gestion', display: 'Économie et Gestion' },
    { section: 'lettres', display: 'Lettres' },
    { section: 'sport', display: 'Sport' },
  ],
};

const LEVEL_DISPLAY: Record<string, string> = {
  '1ere': '1ère',
  '2eme': '2ème',
  '3eme': '3ème',
  '4eme': '4ème',
};

export default async function LyceeLevelPage({ 
  params 
}: { 
  params: Promise<{ level: string }> 
}) {
  const { level } = await params;
  
  if (!SECTIONS_BY_LEVEL[level]) {
    notFound();
  }
  
  const sections = SECTIONS_BY_LEVEL[level];
  const levelDisplay = LEVEL_DISPLAY[level];
  
  // For 1ère (no sections), redirect to chapters
  if (sections.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <Link href="/lycee" className="text-gray-600 hover:text-black mb-8 inline-block">
            ← LYCÉE
          </Link>
          
          <h1 className="text-5xl font-bold mb-12">{levelDisplay}</h1>
          
          <Link href={`/lycee/${level}/chapters`} className="block">
            <div className="border-2 border-black rounded-lg p-8 hover:bg-gray-50 transition-colors cursor-pointer">
              <h2 className="text-3xl font-semibold">Voir les chapitres</h2>
            </div>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/lycee" className="text-gray-600 hover:text-black mb-8 inline-block">
          ← LYCÉE
        </Link>
        
        <h1 className="text-5xl font-bold mb-12">{levelDisplay}</h1>
        
        <div className="space-y-4">
          {sections.map(({ section, display }) => (
            <Link key={section} href={`/lycee/${level}/${section}`} className="block">
              <div className="border-2 border-black rounded-lg p-8 hover:bg-gray-50 transition-colors cursor-pointer">
                <h2 className="text-3xl font-semibold">{display}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}