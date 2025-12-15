import Link from 'next/link';

const COLLEGE_LEVELS = [
  { level: '7eme', display: '7ème' },
  { level: '8eme', display: '8ème' },
  { level: '9eme', display: '9ème' },
];

export default function CollegePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/" className="text-gray-600 hover:text-black mb-8 inline-block">
          ← Accueil
        </Link>
        
        <h1 className="text-5xl font-bold mb-12">COLLÈGE</h1>
        
        <div className="space-y-4">
          {COLLEGE_LEVELS.map(({ level, display }) => (
            <Link key={level} href={`/college/${level}`} className="block">
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