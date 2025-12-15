import Link from 'next/link';
import { notFound } from 'next/navigation';

const SECTIONS_BY_LEVEL: Record<string, { section: string; display: string; desc: string }[]> = {
  '1ere': [],
  '2eme': [
    { section: 'sciences', display: 'Sciences', desc: 'Section scientifique' },
    { section: 'lettres', display: 'Lettres', desc: 'Section littéraire' },
    { section: 'economie-services', display: 'Économie et Services', desc: 'Section économique' },
    { section: 'sport', display: 'Sport', desc: 'Section sportive' },
    { section: 'informatique', display: 'Informatique', desc: 'Section informatique' },
  ],
  '3eme': [
    { section: 'maths', display: 'Mathématiques', desc: 'Section mathématiques' },
    { section: 'techniques', display: 'Techniques', desc: 'Section technique' },
    { section: 'sciences-exp', display: 'Sciences Expérimentales', desc: 'Section sciences' },
    { section: 'informatique', display: 'Informatique', desc: 'Section informatique' },
    { section: 'economie-gestion', display: 'Économie et Gestion', desc: 'Section économique' },
    { section: 'lettres', display: 'Lettres', desc: 'Section littéraire' },
    { section: 'sport', display: 'Sport', desc: 'Section sportive' },
  ],
  '4eme': [
    { section: 'maths', display: 'Mathématiques', desc: 'Section mathématiques' },
    { section: 'techniques', display: 'Techniques', desc: 'Section technique' },
    { section: 'sciences-exp', display: 'Sciences Expérimentales', desc: 'Section sciences' },
    { section: 'informatique', display: 'Informatique', desc: 'Section informatique' },
    { section: 'economie-gestion', display: 'Économie et Gestion', desc: 'Section économique' },
    { section: 'lettres', display: 'Lettres', desc: 'Section littéraire' },
    { section: 'sport', display: 'Sport', desc: 'Section sportive' },
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
  
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav className="mb-12 flex items-center gap-3 text-sm uppercase tracking-wider font-semibold">
          <Link href="/" className="text-[#999999] hover:text-[#ff6b35]">Accueil</Link>
          <span className="text-[#e0e0e0]">→</span>
          <Link href="/lycee" className="text-[#999999] hover:text-[#ff6b35]">Lycée</Link>
          <span className="text-[#e0e0e0]">→</span>
          <span className="text-[#ff6b35]">{levelDisplay}</span>
        </nav>

        {/* Page Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-[#2196f3] text-white font-mono text-xs uppercase tracking-widest mb-6">
            {levelDisplay} Année
          </div>
          <h1 className="text-6xl sm:text-7xl font-black mb-6 text-black leading-none">
            {levelDisplay.toUpperCase()} ANNÉE
          </h1>
          <p className="text-2xl text-[#666666] font-serif">
            {sections.length > 0 ? `${sections.length} sections disponibles` : 'Tronc commun'}
          </p>
        </div>

        {/* Section Cards */}
        {sections.length === 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href={`/lycee/${level}/chapters`} className="group block">
              <div className="bg-white border-2 border-[#e0e0e0] p-8 h-full hover:border-[#2196f3] hover:shadow-xl hover:-translate-y-2">
                <div className="text-4xl font-black text-[#2196f3] mb-4">01</div>
                <h3 className="text-2xl font-black mb-4 text-black group-hover:text-[#2196f3]">
                  Tronc Commun
                </h3>
                <p className="text-base text-[#666666] mb-6 font-serif">Programme général</p>
                <div className="inline-block px-4 py-2 border-2 border-black group-hover:bg-[#2196f3] group-hover:text-white group-hover:border-[#2196f3] font-bold text-sm uppercase tracking-wider">
                  Voir chapitres →
                </div>
              </div>
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map(({ section, display, desc }) => (
              <Link key={section} href={`/lycee/${level}/${section}`} className="group block">
                <div className="bg-white border-2 border-[#e0e0e0] p-8 h-full hover:border-[#2196f3] hover:shadow-xl hover:-translate-y-2">
                  <div className="text-4xl font-black text-[#2196f3] mb-4">
                    {display.charAt(0)}
                  </div>
                  <h3 className="text-2xl font-black mb-3 text-black group-hover:text-[#2196f3] leading-tight">
                    {display}
                  </h3>
                  <p className="text-base text-[#666666] mb-6 font-serif">{desc}</p>
                  <div className="inline-block px-4 py-2 border-2 border-black group-hover:bg-[#2196f3] group-hover:text-white group-hover:border-[#2196f3] font-bold text-sm uppercase tracking-wider">
                    Accéder →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}