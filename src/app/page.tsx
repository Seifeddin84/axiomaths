import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-4xl sm:text-6xl font-bold text-center mb-12 sm:mb-16 tracking-tight">
          AXIOMATHS
        </h1>
        
        <div className="space-y-3 sm:space-y-4">
          <Link href="/college" className="block">
            <div className="border-2 border-black rounded-lg p-6 sm:p-8 hover:bg-gray-50 transition-colors cursor-pointer active:bg-gray-100">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-2">COLLÈGE</h2>
              <p className="text-gray-600 text-base sm:text-lg">7ème • 8ème • 9ème</p>
            </div>
          </Link>
          
          <Link href="/lycee" className="block">
            <div className="border-2 border-black rounded-lg p-6 sm:p-8 hover:bg-gray-50 transition-colors cursor-pointer active:bg-gray-100">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-2">LYCÉE</h2>
              <p className="text-gray-600 text-base sm:text-lg">1ère • 2ème • 3ème • 4ème</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}