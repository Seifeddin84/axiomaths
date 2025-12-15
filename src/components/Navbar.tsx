'use client';

import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { useExerciseBasket } from '@/context/ExerciseBasketContext';
import { useState } from 'react';
import PDFGenerator from './PDFGenerator';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { selectedExercises } = useExerciseBasket();
  const [showPDFModal, setShowPDFModal] = useState(false);

  return (
    <>
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-sm">
                <span className="text-white font-black text-lg">A</span>
              </div>
              <span className="text-xl font-black text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">
                Axiomaths
              </span>
            </Link>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Basket Button */}
              {selectedExercises.length > 0 && (
                <button
                  onClick={() => setShowPDFModal(true)}
                  className="relative px-4 py-2 rounded-lg font-semibold text-sm bg-gradient-to-r from-green-500 to-green-600 text-white hover:shadow-lg hover:shadow-green-500/50 transition-all flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="hidden sm:inline">Panier</span>
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center font-bold">
                    {selectedExercises.length}
                  </span>
                </button>
              )}

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </button>

              {/* Navigation Links */}
              <Link href="/college">
                <button className="px-5 py-2 rounded-lg font-semibold text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
                  Collège
                </button>
              </Link>
              <Link href="/lycee">
                <button className="px-5 py-2 rounded-lg font-semibold text-sm bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/50 transition-all">
                  Lycée
                </button>
              </Link>
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