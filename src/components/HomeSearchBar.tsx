'use client';

import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';

export default function HomeSearchBar() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = searchQuery.trim();
    router.push(q ? `/recherche?q=${encodeURIComponent(q)}` : '/recherche');
  };

  return (
    <form onSubmit={handleSearch} role="search" className="relative">
      <input
        type="search"
        enterKeyHint="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="homothétie, Thalès, bac 2023…"
        aria-label="Rechercher un cours, un théorème ou un exercice"
        className="w-full ps-5 pe-14 py-4 rounded-lg border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-800 text-base sm:text-lg focus:outline-none focus:border-accent-500 dark:focus:border-primary-500 placeholder-gray-500 dark:placeholder-gray-400"
      />
      <button
        type="submit"
        aria-label="Rechercher"
        className="absolute end-2 top-1/2 -translate-y-1/2 p-2.5 rounded-md text-gray-500 dark:text-gray-400 hover:text-accent-500 dark:hover:text-primary-400 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </form>
  );
}
