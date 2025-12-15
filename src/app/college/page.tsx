import Link from 'next/link';

const COLLEGE_LEVELS = [
  { level: '7eme', display: '7ème Année', desc: 'Enseignement de base' },
  { level: '8eme', display: '8ème Année', desc: 'Enseignement de base' },
  { level: '9eme', display: '9ème Année', desc: 'Enseignement de base' },
];

export default function CollegePage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav className="mb-12">
          <Link href="/" className="text-[#999999] hover:text-[#ff6b35] font-semibold uppercase text-sm tracking-wider">
            ← Accueil
          </Link>
        </nav>

        {/* Page Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-[#ff6b35] text-white font-mono text-xs uppercase tracking-widest mb-6">
            Enseignement de Base
          </div>
          <h1 className="text-6xl sm:text-7xl font-black mb-6 text-black leading-none">
            COLLÈGE
          </h1>
          <p className="text-2xl text-[#666666] max-w-3xl font-serif">
            Choisissez votre année d'études pour accéder aux exercices
          </p>
        </div>

        {/* Level Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COLLEGE_LEVELS.map(({ level, display, desc }) => (
            <Link key={level} href={`/college/${level}`} className="group block">
              <div className="bg-white border-2 border-[#e0e0e0] p-8 h-full hover:border-[#ff6b35] hover:shadow-xl hover:-translate-y-2">
                <div className="text-5xl font-black text-[#ff6b35] mb-4">{display.split(' ')[0]}</div>
                <h3 className="text-2xl font-black mb-3 text-black group-hover:text-[#ff6b35]">
                  {display}
                </h3>
                <p className="text-base text-[#666666] mb-6 font-serif">{desc}</p>
                <div className="inline-block px-4 py-2 border-2 border-black group-hover:bg-[#ff6b35] group-hover:text-white group-hover:border-[#ff6b35] font-bold text-sm uppercase tracking-wider">
                  Accéder →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}