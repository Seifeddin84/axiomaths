import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        {/* 404 Error */}
        <h1 className="text-9xl font-black text-gray-900 dark:text-white mb-4">
          404
        </h1>
        
        {/* Message */}
        <p className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-8">
          Page introuvable
        </p>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 font-semibold mb-8 max-w-md mx-auto">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-accent-500 text-white font-bold rounded-lg hover:bg-accent-600 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors"
          >
            Retour à l'accueil
          </Link>
          <Link
            href="/recherche"
            className="px-6 py-3 border-2 border-accent-500 dark:border-primary-500 text-accent-600 dark:text-primary-400 font-bold rounded-lg hover:bg-accent-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white transition-colors"
          >
            Rechercher des exercices
          </Link>
        </div>
      </div>
    </div>
  );
}