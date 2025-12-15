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
  
  const chapters = getChaptersByLevel('lycee', level, section);
  
  // Format section name
  const sectionDisplay = section
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav className="mb-12 flex items-center gap-3 text-sm uppercase tracking-wider font-semibold">
          <Link href="/" className="text-[#999999] hover:text-[#ff6b35]">Accueil</Link>
          <span className="text-[#e0e0e0]">→</span>
          <Link href="/lycee" className="text-[#999999] hover:text-[#ff6b35]">Lycée</Link>
          <span className="text-[#e0e0e0]">→</span>
          <Link href={`/lycee/${level}`} className="text-[#999999] hover:text-[#ff6b35]">{levelDisplay}</Link>
          <span className="text-[#e0e0e0]">→</span>
          <span className="text-[#ff6b35]">{sectionDisplay}</span>
        </nav>

        {/* Page Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-[#2196f3] text-white font-mono text-xs uppercase tracking-widest mb-6">
            {levelDisplay} Année
          </div>
          <h1 className="text-6xl sm:text-7xl font-black mb-6 text-black leading-none">
            {sectionDisplay.toUpperCase()}
          </h1>
          <p className="text-2xl text-[#666666] font-serif">
            {chapters.length} chapitre{chapters.length > 1 ? 's' : ''} disponible{chapters.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Chapter Cards */}
        {chapters.length === 0 ? (
          <div className="bg-white border-2 border-[#e0e0e0] p-12 text-center">
            <p className="text-xl text-[#666666]">Aucun chapitre disponible pour cette section.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((chapter, idx) => {
              const slug = chapter.toLowerCase().replace(/\s+/g, '-');
              
              return (
                <Link 
                  key={chapter} 
                  href={`/lycee/${level}/${section}/${encodeURIComponent(slug)}`}
                  className="group block"
                >
                  <div className="bg-white border-2 border-[#e0e0e0] p-8 h-full hover:border-[#2196f3] hover:shadow-xl hover:-translate-y-2">
                    <div className="text-4xl font-black text-[#2196f3] mb-4">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-2xl font-black mb-4 text-black group-hover:text-[#2196f3] leading-tight">
                      {chapter}
                    </h3>
                    <div className="inline-block px-4 py-2 border-2 border-black group-hover:bg-[#2196f3] group-hover:text-white group-hover:border-[#2196f3] font-bold text-sm uppercase tracking-wider">
                      Voir exercices →
                    </div>
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