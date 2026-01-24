'use client';

import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';

export default function HomeSearchBar() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/recherche?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/recherche');
    }
  };

  return (
    <form 
      onSubmit={handleSearch}
      className="relative group"
    >
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Rechercher des exercices par niveau, chapitre, difficulté..."
        className="w-full px-6 py-4 rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-orange-500 transition-all placeholder-gray-500 dark:placeholder-gray-400"
      />
      <button
        type="submit"
        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-orange-500 transition-colors"
      >
        <svg 
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </form>
  );
}