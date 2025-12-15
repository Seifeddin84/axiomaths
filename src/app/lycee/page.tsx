import Link from 'next/link';

const LYCEE_LEVELS = [
  { level: '1ere', display: '1ère' },
  { level: '2eme', display: '2ème' },
  { level: '3eme', display: '3ème' },
  { level: '4eme', display: '4ème' },
];

export default function LyceePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/" className="text-gray-600 hover:text-black mb-8 inline-block">
          ← Accueil
        </Link>
        
        <h1 className="text-5xl font-bold mb-12">LYCÉE</h1>
        
        <div className="space-y-4">
          {LYCEE_LEVELS.map(({ level, display }) => (
            <Link key={level} href={`/lycee/${level}`} className="block">
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