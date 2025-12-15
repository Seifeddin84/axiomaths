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
  const chapters = getChaptersByLevel('college', level, null);
  
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav className="mb-12 flex items-center gap-3 text-sm uppercase tracking-wider font-semibold">
          <Link href="/" className="text-[#999999] hover:text-[#ff6b35]">Accueil</Link>
          <span className="text-[#e0e0e0]">→</span>
          <Link href="/college" className="text-[#999999] hover:text-[#ff6b35]">Collège</Link>
          <span className="text-[#e0e0e0]">→</span>
          <span className="text-[#ff6b35]">{levelDisplay}</span>
        </nav>

        {/* Page Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-[#ff6b35] text-white font-mono text-xs uppercase tracking-widest mb-6">
            {levelDisplay} Année
          </div>
          <h1 className="text-6xl sm:text-7xl font-black mb-6 text-black leading-none">
            {levelDisplay.toUpperCase()} ANNÉE
          </h1>
          <p className="text-2xl text-[#666666] font-serif">
            {chapters.length} chapitre{chapters.length > 1 ? 's' : ''} disponible{chapters.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Chapter Cards */}
        {chapters.length === 0 ? (
          <div className="bg-white border-2 border-[#e0e0e0] p-12 text-center">
            <p className="text-xl text-[#666666]">Aucun chapitre disponible.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((chapter, idx) => {
              const slug = chapter.toLowerCase().replace(/\s+/g, '-');
              
              return (
                <Link 
                  key={chapter} 
                  href={`/college/${level}/${encodeURIComponent(slug)}`}
                  className="group block"
                >
                  <div className="bg-white border-2 border-[#e0e0e0] p-8 h-full hover:border-[#ff6b35] hover:shadow-xl hover:-translate-y-2">
                    <div className="text-4xl font-black text-[#ff6b35] mb-4">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-2xl font-black mb-4 text-black group-hover:text-[#ff6b35] leading-tight">
                      {chapter}
                    </h3>
                    <div className="inline-block px-4 py-2 border-2 border-black group-hover:bg-[#ff6b35] group-hover:text-white group-hover:border-[#ff6b35] font-bold text-sm uppercase tracking-wider">
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