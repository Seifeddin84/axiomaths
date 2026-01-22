'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Exercise } from '@/types/exercise';
import SearchTable from '@/components/SearchTable';

export default function RecherchePage() {
  const searchParams = useSearchParams();
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchText, setSearchText] = useState('');
  const [filterSchool, setFilterSchool] = useState('all');
  const [filterLevel, setFilterLevel] = useState('all');
  const [filterSection, setFilterSection] = useState('all');
  const [filterChapter, setFilterChapter] = useState('all');
  const [filterCountry, setFilterCountry] = useState('all');
  const [filterYear, setFilterYear] = useState('all');
  const [filterDifficulty, setFilterDifficulty] = useState('all');
  const [filterProfessor, setFilterProfessor] = useState('all');
  const [filterTag, setFilterTag] = useState('all');

  // Load all exercises on mount and initialize search from URL
  useEffect(() => {
    // Get search query from URL
    const queryFromUrl = searchParams.get('q');
    if (queryFromUrl) {
      setSearchText(queryFromUrl);
    }

    setLoading(true);
    fetch('/api/exercises')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        console.log('Loaded exercises:', data.length);
        setExercises(data);
        setError(null);
      })
      .catch(err => {
        console.error('Error loading exercises:', err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [searchParams]);

  // Get unique values for filter dropdowns (with type predicates to fix TypeScript)
  const uniqueSchools = useMemo(() => 
    [...new Set(exercises.map(ex => ex.school?.toLowerCase()))].filter((school): school is string => Boolean(school)).sort(),
    [exercises]
  );

  const uniqueLevels = useMemo(() => 
    [...new Set(exercises
      .filter(ex => filterSchool === 'all' || ex.school?.toLowerCase() === filterSchool)
      .map(ex => ex.level))].filter((level): level is string => Boolean(level)).sort(),
    [exercises, filterSchool]
  );

  const uniqueSections = useMemo(() => 
    [...new Set(exercises
      .filter(ex => 
        (filterSchool === 'all' || ex.school?.toLowerCase() === filterSchool) &&
        (filterLevel === 'all' || ex.level === filterLevel) &&
        ex.section
      )
      .map(ex => ex.section))].filter((section): section is string => Boolean(section)).sort(),
    [exercises, filterSchool, filterLevel]
  );

  const uniqueChapters = useMemo(() => 
    [...new Set(exercises
      .filter(ex => 
        (filterSchool === 'all' || ex.school?.toLowerCase() === filterSchool) &&
        (filterLevel === 'all' || ex.level === filterLevel) &&
        (filterSection === 'all' || ex.section === filterSection)
      )
      .map(ex => ex.chapter))].filter((chapter): chapter is string => Boolean(chapter)).sort(),
    [exercises, filterSchool, filterLevel, filterSection]
  );

  const uniqueCountries = useMemo(() => 
    [...new Set(exercises.map(ex => ex.country))].filter((country): country is string => Boolean(country)).sort(),
    [exercises]
  );

  const uniqueYears = useMemo(() => 
    [...new Set(exercises.map(ex => ex.year))].filter((year): year is number => Boolean(year)).sort().reverse(),
    [exercises]
  );

  const uniqueDifficulties = useMemo(() => 
    [...new Set(exercises.map(ex => ex.difficulty))].filter((difficulty): difficulty is string => Boolean(difficulty)).sort(),
    [exercises]
  );

  const uniqueProfessors = useMemo(() => 
    [...new Set(exercises.map(ex => ex.professor))].filter((professor): professor is string => Boolean(professor)).sort(),
    [exercises]
  );

  const uniqueTags = useMemo(() => {
    const allTags = exercises.flatMap(ex => ex.tags || []);
    return [...new Set(allTags)].filter((tag): tag is string => Boolean(tag)).sort();
  }, [exercises]);

  // Filter exercises based on search and filters
  const filteredExercises = useMemo(() => {
    return exercises.filter(ex => {
      // Text search
      const searchLower = searchText.toLowerCase();
      const matchesSearch = searchText === '' || 
        ex.title?.toLowerCase().includes(searchLower) ||
        ex.source?.toLowerCase().includes(searchLower) ||
        ex.professor?.toLowerCase().includes(searchLower) ||
        ex.tags?.some(tag => tag.toLowerCase().includes(searchLower)) ||
        ex.chapter?.toLowerCase().includes(searchLower);

      // Filter matching (with normalization)
      const matchesSchool = filterSchool === 'all' || ex.school?.toLowerCase() === filterSchool;
      const matchesLevel = filterLevel === 'all' || ex.level === filterLevel;
      const matchesSection = filterSection === 'all' || ex.section === filterSection;
      const matchesChapter = filterChapter === 'all' || ex.chapter === filterChapter;
      const matchesCountry = filterCountry === 'all' || ex.country === filterCountry;
      const matchesYear = filterYear === 'all' || ex.year?.toString() === filterYear;
      const matchesDifficulty = filterDifficulty === 'all' || ex.difficulty === filterDifficulty;
      const matchesProfessor = filterProfessor === 'all' || ex.professor === filterProfessor;
      const matchesTag = filterTag === 'all' || ex.tags?.includes(filterTag);

      return matchesSearch && matchesSchool && matchesLevel && matchesSection && matchesChapter &&
             matchesCountry && matchesYear && matchesDifficulty && matchesProfessor && matchesTag;
    });
  }, [exercises, searchText, filterSchool, filterLevel, filterSection, filterChapter, 
      filterCountry, filterYear, filterDifficulty, filterProfessor, filterTag]);

  // Reset all filters
  const resetFilters = () => {
    setSearchText('');
    setFilterSchool('all');
    setFilterLevel('all');
    setFilterSection('all');
    setFilterChapter('all');
    setFilterCountry('all');
    setFilterYear('all');
    setFilterDifficulty('all');
    setFilterProfessor('all');
    setFilterTag('all');
  };

  // Helper to display school name properly
  const displaySchoolName = (school: string) => {
    if (school === 'college') return 'Collège';
    if (school === 'lycee') return 'Lycée';
    return school.charAt(0).toUpperCase() + school.slice(1);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">⏳</div>
          <p className="text-xl text-gray-600 dark:text-gray-400">Chargement des exercices...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <p className="text-xl text-red-600 dark:text-red-400">Erreur: {error}</p>
          <button onClick={() => window.location.reload()} className="mt-4 px-6 py-2 bg-orange-500 text-white font-bold">
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="mb-6">
            <Link href="/" className="text-orange-400 hover:text-orange-300 font-semibold text-sm uppercase tracking-wide">
              ← Retour à l'accueil
            </Link>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black mb-4 leading-tight uppercase">
            Recherche d'exercices
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 font-light">
            Trouvez rapidement les exercices dont vous avez besoin
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900"></div>
      </section>

      {/* Search & Filters Section */}
      <section className="bg-white dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Debug Info */}
          <div className="mb-4 p-3 bg-gray-100 dark:bg-gray-800 text-sm font-mono">
            <strong>Debug:</strong> Total: {exercises.length} | Schools: {uniqueSchools.length} | Filtered: {filteredExercises.length}
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher par titre, source, professeur, tags..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full px-6 py-4 text-lg border-2 border-gray-300 dark:border-gray-700 focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              />
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* "OU" Divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
            <span className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">OU</span>
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
          </div>

          {/* Filter Grid - Row 1 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {/* École */}
            <select 
              value={filterSchool}
              onChange={(e) => {
                setFilterSchool(e.target.value);
                setFilterLevel('all');
                setFilterSection('all');
                setFilterChapter('all');
              }}
              className="px-4 py-3 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none font-semibold"
            >
              <option value="all">École ({uniqueSchools.length})</option>
              {uniqueSchools.map((school, idx) => (
                <option key={`school-${idx}`} value={school}>
                  {displaySchoolName(school)}
                </option>
              ))}
            </select>

            {/* Niveau */}
            <select 
              value={filterLevel}
              onChange={(e) => {
                setFilterLevel(e.target.value);
                setFilterSection('all');
                setFilterChapter('all');
              }}
              className="px-4 py-3 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={filterSchool === 'all'}
            >
              <option value="all">Niveau ({uniqueLevels.length})</option>
              {uniqueLevels.map((level, idx) => (
                <option key={`level-${idx}`} value={level}>{level}</option>
              ))}
            </select>

            {/* Section */}
            <select 
              value={filterSection}
              onChange={(e) => {
                setFilterSection(e.target.value);
                setFilterChapter('all');
              }}
              className="px-4 py-3 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={filterLevel === 'all' || uniqueSections.length === 0}
            >
              <option value="all">Section ({uniqueSections.length})</option>
              {uniqueSections.map((section, idx) => (
                <option key={`section-${idx}`} value={section}>{section}</option>
              ))}
            </select>

            {/* Chapitre */}
            <select 
              value={filterChapter}
              onChange={(e) => setFilterChapter(e.target.value)}
              className="px-4 py-3 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={filterLevel === 'all'}
            >
              <option value="all">Chapitre ({uniqueChapters.length})</option>
              {uniqueChapters.map((chapter, idx) => (
                <option key={`chapter-${idx}`} value={chapter}>{chapter}</option>
              ))}
            </select>
          </div>

          {/* Filter Grid - Row 2 */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {/* Pays */}
            <select 
              value={filterCountry}
              onChange={(e) => setFilterCountry(e.target.value)}
              className="px-4 py-3 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none font-semibold"
            >
              <option value="all">Pays ({uniqueCountries.length})</option>
              {uniqueCountries.map((country, idx) => (
                <option key={`country-${idx}`} value={country}>{country}</option>
              ))}
            </select>

            {/* Année */}
            <select 
              value={filterYear}
              onChange={(e) => setFilterYear(e.target.value)}
              className="px-4 py-3 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none font-semibold"
            >
              <option value="all">Année ({uniqueYears.length})</option>
              {uniqueYears.map((year, idx) => (
                <option key={`year-${idx}`} value={year}>{year}</option>
              ))}
            </select>

            {/* Difficulté */}
            <select 
              value={filterDifficulty}
              onChange={(e) => setFilterDifficulty(e.target.value)}
              className="px-4 py-3 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none font-semibold"
            >
              <option value="all">Difficulté ({uniqueDifficulties.length})</option>
              {uniqueDifficulties.map((difficulty, idx) => (
                <option key={`difficulty-${idx}`} value={difficulty}>{difficulty}</option>
              ))}
            </select>

            {/* Professeur */}
            <select 
              value={filterProfessor}
              onChange={(e) => setFilterProfessor(e.target.value)}
              className="px-4 py-3 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none font-semibold"
            >
              <option value="all">Professeur ({uniqueProfessors.length})</option>
              {uniqueProfessors.map((professor, idx) => (
                <option key={`professor-${idx}`} value={professor}>{professor}</option>
              ))}
            </select>

            {/* Tag */}
            <select 
              value={filterTag}
              onChange={(e) => setFilterTag(e.target.value)}
              className="px-4 py-3 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none font-semibold"
            >
              <option value="all">Tag ({uniqueTags.length})</option>
              {uniqueTags.map((tag, idx) => (
                <option key={`tag-${idx}`} value={tag}>{tag}</option>
              ))}
            </select>
          </div>

          {/* Results Counter */}
          <div className="flex items-center justify-between mb-6 p-4 bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500">
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              ✨ <span className="text-orange-500">{filteredExercises.length}</span> exercice{filteredExercises.length !== 1 ? 's' : ''} trouvé{filteredExercises.length !== 1 ? 's' : ''}
            </p>
            <button 
              onClick={resetFilters}
              className="text-sm font-bold text-orange-500 hover:text-orange-600 uppercase tracking-wider"
            >
              Réinitialiser
            </button>
          </div>

          {/* Results Table */}
          <SearchTable exercises={filteredExercises} />
        </div>
      </section>
    </div>
  );
}