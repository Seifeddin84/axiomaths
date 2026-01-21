'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isDark, setIsDark] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const darkMode = document.documentElement.classList.contains('dark');
    setIsDark(darkMode);
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    const newIsDark = !isDark;
    
    if (newIsDark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    
    setIsDark(newIsDark);
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/recherche?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/recherche');
    }
  };

  return (
    <nav className="bg-gradient-to-r from-orange-500 to-orange-600 border-b-4 border-orange-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 transition-transform group-hover:scale-110">
              <Image 
                src="/logo.png" 
                alt="Axiomaths" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-white font-black text-xl tracking-tight">
              AXIOMATHS
            </span>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-md mx-8 relative">
            <input
              type="text"
              placeholder="Rechercher des exercices..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
                        <Link
              href="/recherche"
              className={`px-4 py-2 font-black text-sm tracking-wide transition-all ${
                isActive('/recherche')
                  ? 'bg-white text-orange-600'
                  : 'text-white hover:bg-orange-400'
              }`}
            >
              RECHERCHE
            </Link>
            <Link
              href="/college"
              className={`px-4 py-2 font-black text-sm tracking-wide transition-all ${
                isActive('/college')
                  ? 'bg-white text-orange-600'
                  : 'text-white hover:bg-orange-400'
              }`}
            >
              COLLÈGE
            </Link>
            <Link
              href="/lycee"
              className={`px-4 py-2 font-black text-sm tracking-wide transition-all ${
                isActive('/lycee')
                  ? 'bg-white text-orange-600'
                  : 'text-white hover:bg-orange-400'
              }`}
            >
              LYCÉE
            </Link>
            <Link
              href="/blog"
              className={`px-4 py-2 font-black text-sm tracking-wide transition-all ${
                isActive('/blog')
                  ? 'bg-white text-orange-600'
                  : 'text-white hover:bg-orange-400'
              }`}
            >
              BLOG
            </Link>
            <Link
              href="/resources/useful-links"
              className={`px-4 py-2 font-black text-sm tracking-wide transition-all ${
                pathname === '/resources/useful-links'
                  ? 'bg-white text-orange-600'
                  : 'text-white hover:bg-orange-400'
              }`}
            >
              LIENS UTILES
            </Link>
            <Link
              href="/resources/mathematicians"
              className={`px-4 py-2 font-black text-sm tracking-wide transition-all ${
                pathname.startsWith('/resources/mathematicians')
                  ? 'bg-white text-orange-600'
                  : 'text-white hover:bg-orange-400'
              }`}
            >
              MATHÉMATICIENS
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="ml-2 p-2 text-white hover:bg-orange-400 transition-colors rounded"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}