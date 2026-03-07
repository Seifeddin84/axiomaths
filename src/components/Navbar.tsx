'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const router = useRouter();

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-3">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Axiomaths"
              width={36}
              height={36}
              className="object-contain"
            />
            <span className="text-lg sm:text-xl font-black text-gray-900 dark:text-white hidden xs:block">
              AXIOMATHS
            </span>
          </Link>

          {/* Search Bar — desktop only */}
          <div className="flex-1 max-w-xl mx-4 hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher des exercices..."
                className="w-full px-4 py-2 pl-10 text-sm font-medium border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') router.push('/recherche');
                }}
              />
              <svg
                className="absolute left-3 top-2.5 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-1 sm:gap-3 flex-shrink-0">

            {/* Search icon — mobile only, links to /recherche */}
            <Link
              href="/recherche"
              className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-accent-500 dark:hover:text-primary-400 transition-colors"
              aria-label="Rechercher"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>

            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-accent-500 dark:hover:text-primary-400 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* CTA Button */}
            <Link
              href="/recherche"
              className="px-3 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors bg-accent-500 text-white hover:bg-accent-600 dark:bg-primary-500 dark:hover:bg-primary-600 whitespace-nowrap"
            >
              {/* Short label on mobile */}
              <span className="sm:hidden">Exercices</span>
              <span className="hidden sm:inline">Rechercher des exercices</span>
            </Link>

            {/* Devoirs + Blog — hidden on mobile (in sidebar) */}
            <Link
              href="/devoirs"
              className="hidden md:block px-3 py-2 text-sm font-bold text-accent-600 dark:text-primary-400 hover:text-white hover:bg-accent-500 dark:hover:bg-primary-500 rounded-lg transition-colors"
            >
              Devoirs
            </Link>
            <Link
              href="/blog"
              className="hidden md:block px-3 py-2 text-sm font-bold text-accent-600 dark:text-primary-400 hover:text-white hover:bg-accent-500 dark:hover:bg-primary-500 rounded-lg transition-colors"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}