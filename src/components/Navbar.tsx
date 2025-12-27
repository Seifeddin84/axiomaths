'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);

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

  return (
    <nav className="bg-gradient-to-r from-orange-500 to-orange-600 border-b-4 border-orange-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Text */}
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

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
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