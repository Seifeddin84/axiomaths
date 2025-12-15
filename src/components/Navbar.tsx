'use client';

import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { useExerciseBasket } from '@/context/ExerciseBasketContext';
import { useState, useEffect } from 'react';
import PDFGenerator from './PDFGenerator';

const COLLEGE_LEVELS = [
  { level: '7eme', display: '7ème Année' },
  { level: '8eme', display: '8ème Année' },
  { level: '9eme', display: '9ème Année' },
];

const LYCEE_LEVELS = [
  { level: '1ere', display: '1ère Année' },
  { level: '2eme', display: '2ème Année' },
  { level: '3eme', display: '3ème Année' },
  { level: '4eme', display: '4ème Année' },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { selectedExercises } = useExerciseBasket();
  const [showPDFModal, setShowPDFModal] = useState(false);
  const [collegeOpen, setCollegeOpen] = useState(false);
  const [lyceeOpen, setLyceeOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <nav className="bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 border-b-2 border-orange-700 dark:border-orange-900 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-white dark:bg-gray-900 flex items-center justify-center border-2 border-white">
                <span className="text-orange-500 font-black text-xl">A</span>
              </div>
              <span className="text-2xl font-black text-white group-hover:text-orange-100 transition-colors">
                AXIOMATHS
              </span>
            </Link>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* Collège Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCollegeOpen(true)}
                onMouseLeave={() => setCollegeOpen(false)}
              >
                <Link href="/college">
                  <button className="px-6 py-2 font-bold text-sm text-white hover:bg-white/20 transition-all border-2 border-transparent hover:border-white uppercase tracking-wider">
                    Collège
                  </button>
                </Link>
                
                {collegeOpen && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-white dark:bg-gray-800 border-2 border-orange-500 shadow-xl">
                    {COLLEGE_LEVELS.map(({ level, display }) => (
                      <Link
                        key={level}
                        href={`/college/${level}`}
                        className="block px-6 py-3 text-gray-900 dark:text-white hover:bg-orange-500 hover:text-white transition-colors border-b border-gray-200 dark:border-gray-700 last:border-0 font-semibold"
                      >
                        {display}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Lycée Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setLyceeOpen(true)}
                onMouseLeave={() => setLyceeOpen(false)}
              >
                <Link href="/lycee">
                  <button className="px-6 py-2 font-bold text-sm bg-white text-orange-500 hover:bg-orange-100 transition-all border-2 border-white uppercase tracking-wider">
                    Lycée
                  </button>
                </Link>
                
                {lyceeOpen && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-white dark:bg-gray-800 border-2 border-orange-500 shadow-xl">
                    {LYCEE_LEVELS.map(({ level, display }) => (
                      <Link
                        key={level}
                        href={`/lycee/${level}`}
                        className="block px-6 py-3 text-gray-900 dark:text-white hover:bg-orange-500 hover:text-white transition-colors border-b border-gray-200 dark:border-gray-700 last:border-0 font-semibold"
                      >
                        {display}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Basket Button */}
              {selectedExercises.length > 0 && (
                <button
                  onClick={() => setShowPDFModal(true)}
                  className="relative px-5 py-2 font-bold text-sm bg-green-500 text-white hover:bg-green-600 transition-all flex items-center gap-2 border-2 border-green-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="hidden sm:inline">PANIER</span>
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs flex items-center justify-center font-bold border-2 border-white">
                    {selectedExercises.length}
                  </span>
                </button>
              )}

              {/* Dark Mode Toggle */}
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2 bg-white/10 hover:bg-white/20 transition-colors border-2 border-transparent hover:border-white"
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* PDF Generator Modal */}
      {showPDFModal && (
        <PDFGenerator
          exercises={selectedExercises}
          onClose={() => setShowPDFModal(false)}
        />
      )}
    </>
  );
}