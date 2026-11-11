'use client';

import { useState, useEffect, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Exercise } from '@/types/exercise';
import SearchTable from '@/components/SearchTable';
import { fuzzyScore, prepareQuery } from '@/lib/fuzzy';
import type { SearchLesson, SearchTheorem } from '@/app/api/search-index/route';

const COLLEGE_LEVELS = ['7eme', '8eme', '9eme'];
const LEVEL_LABEL: Record<string, string> = {
  '7eme': '7ème', '8eme': '8ème', '9eme': '9ème', '1ere': '1ère', '2eme': '2ème', '3eme': '3ème', '4eme': '4ème',
};

function RechercheContent() {
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
  const [filterPiloteOnly, setFilterPiloteOnly] = useState(false);
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [index, setIndex] = useState<{ lessons: SearchLesson[]; theorems: SearchTheorem[] }>({ lessons: [], theorems: [] });

  useEffect(() => {
    const queryFromUrl = searchParams.get('q');
    if (queryFromUrl) setSearchText(queryFromUrl);
    // links from the home page: /recherche?niveau=4eme, ?prof=Nom
    const niveau = searchParams.get('niveau');
    if (niveau) {
      setFilterSchool(COLLEGE_LEVELS.includes(niveau) ? 'college' : 'lycee');
      setFilterLevel(niveau);
    }
    const prof = searchParams.get('prof');
    if (prof) setFilterProfessor(prof);

    fetch('/api/search-index')
      .then(res => (res.ok ? res.json() : { lessons: [], theorems: [] }))
      .then(setIndex)
      .catch(() => setIndex({ lessons: [], theorems: [] }));

    setLoading(true);
    fetch('/api/exercises')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        setExercises(data);
        setError(null);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [searchParams]);

  const uniqueSchools = useMemo(() =>
    [...new Set(exercises.map(ex => ex.school?.toLowerCase()))].filter((s): s is string => Boolean(s)).sort(),
    [exercises]
  );

  const uniqueLevels = useMemo(() =>
    [...new Set(exercises
      .filter(ex => filterSchool === 'all' || ex.school?.toLowerCase() === filterSchool)
      .map(ex => ex.level))].filter((l): l is string => Boolean(l)).sort(),
    [exercises, filterSchool]
  );

  const uniqueSections = useMemo(() =>
    [...new Set(exercises
      .filter(ex =>
        (filterSchool === 'all' || ex.school?.toLowerCase() === filterSchool) &&
        (filterLevel === 'all' || ex.level === filterLevel) &&
        ex.section
      )
      .map(ex => ex.section))].filter((s): s is string => Boolean(s)).sort(),
    [exercises, filterSchool, filterLevel]
  );

  const uniqueChapters = useMemo(() =>
    [...new Set(exercises
      .filter(ex =>
        (filterSchool === 'all' || ex.school?.toLowerCase() === filterSchool) &&
        (filterLevel === 'all' || ex.level === filterLevel) &&
        (filterSection === 'all' || ex.section === filterSection)
      )
      .map(ex => ex.chapter))].filter((c): c is string => Boolean(c)).sort(),
    [exercises, filterSchool, filterLevel, filterSection]
  );

  const uniqueCountries = useMemo(() =>
    [...new Set(exercises.map(ex => ex.country))].filter((c): c is string => Boolean(c)).sort(),
    [exercises]
  );

  const uniqueYears = useMemo(() =>
    [...new Set(exercises.map(ex => ex.year))].filter((y): y is number => Boolean(y)).sort().reverse(),
    [exercises]
  );

  const uniqueDifficulties = useMemo(() =>
    [...new Set(exercises.map(ex => ex.difficulty).filter(Boolean))].sort(),
    [exercises]
  );

  const uniqueProfessors = useMemo(() =>
    [...new Set(exercises.flatMap(ex => ex.professor ?? []))].filter(Boolean).sort(),
    [exercises]
  );

  const uniqueTags = useMemo(() =>
    [...new Set(exercises.flatMap(ex => ex.tags || []))].filter((t): t is string => Boolean(t)).sort(),
    [exercises]
  );

  const piloteCount = useMemo(() =>
    exercises.filter(ex => ex.schoolType === 'pilote').length,
    [exercises]
  );

  // typo- and accent-tolerant: "acroissements", "homothetie", "pytagore" all match
  const query = useMemo(() => prepareQuery(searchText), [searchText]);
  const hasQuery = query.words.length > 0;

  const matchingLessons = useMemo(() => {
    if (!hasQuery) return [];
    return index.lessons
      .filter(l => filterLevel === 'all' || l.level === filterLevel)
      .map(l => ({ l, score: 3 * fuzzyScore(query, `${l.title} ${l.chapter}`) + fuzzyScore(query, `${l.title} ${l.chapter} ${l.sections.join(' ')} ${l.summary}`) }))
      .filter(x => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map(x => x.l);
  }, [index, query, hasQuery, filterLevel]);

  const matchingTheorems = useMemo(() => {
    if (!hasQuery) return [];
    return index.theorems
      .filter(t => filterLevel === 'all' || t.levels.includes(filterLevel))
      .map(t => ({ t, score: 3 * fuzzyScore(query, `${t.name} ${t.altName ?? ''}`) + fuzzyScore(query, `${t.name} ${t.altName ?? ''} ${t.search}`) }))
      .filter(x => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map(x => x.t);
  }, [index, query, hasQuery, filterLevel]);

  const filteredExercises = useMemo(() => {
    return exercises.filter(ex => {
      const matchesSearch = !hasQuery || fuzzyScore(query, [
        ex.title, ex.source, ...(ex.professor ?? []), ...(ex.tags ?? []), ex.chapter, ex.section, ex.level,
      ].filter(Boolean).join(' ')) > 0;

      const matchesSchool     = filterSchool === 'all' || ex.school?.toLowerCase() === filterSchool;
      const matchesLevel      = filterLevel === 'all' || ex.level === filterLevel;
      const matchesSection    = filterSection === 'all' || ex.section === filterSection;
      const matchesChapter    = filterChapter === 'all' || ex.chapter === filterChapter;
      const matchesCountry    = filterCountry === 'all' || ex.country === filterCountry;
      const matchesYear       = filterYear === 'all' || ex.year?.toString() === filterYear;
      const matchesDifficulty = filterDifficulty === 'all' || ex.difficulty === filterDifficulty;
      const matchesProfessor  = filterProfessor === 'all' || (ex.professor?.includes(filterProfessor) ?? false);
      const matchesTag        = filterTag === 'all' || ex.tags?.includes(filterTag);
      const matchesPilote     = !filterPiloteOnly || ex.schoolType === 'pilote';

      return matchesSearch && matchesSchool && matchesLevel && matchesSection && matchesChapter &&
             matchesCountry && matchesYear && matchesDifficulty && matchesProfessor && matchesTag &&
             matchesPilote;
    });
  }, [exercises, query, hasQuery, filterSchool, filterLevel, filterSection, filterChapter,
      filterCountry, filterYear, filterDifficulty, filterProfessor, filterTag, filterPiloteOnly]);

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
    setFilterPiloteOnly(false);
  };

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
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
          <div className="mb-6">
            <Link href="/" className="text-orange-400 hover:text-orange-300 font-semibold text-sm uppercase tracking-wide">
              ← Retour à l'accueil
            </Link>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black mb-4 leading-tight uppercase">
            Recherche
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 font-light">
            Cours, théorèmes et exercices, même avec une faute de frappe
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900"></div>
      </section>

      <section className="bg-white dark:bg-gray-900 py-6 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Search bar */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="search"
                placeholder="Chapitre, théorème, professeur, bac…"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full px-4 sm:px-6 py-4 text-base sm:text-lg border-2 border-gray-300 dark:border-gray-700 focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              />
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {(matchingLessons.length > 0 || matchingTheorems.length > 0) && (
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {matchingLessons.length > 0 && (
                <div>
                  <h2 className="mb-2 text-sm font-black uppercase tracking-wider text-gray-500 dark:text-gray-400">Cours</h2>
                  <ul className="space-y-2">
                    {matchingLessons.map(l => (
                      <li key={l.href + l.title}>
                        <Link href={l.href} dir={l.dir} className="block p-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-orange-500 transition-colors">
                          <span className="block font-black text-gray-900 dark:text-white">{l.title}</span>
                          <span className="block text-xs font-semibold text-gray-500 dark:text-gray-400" dir="ltr">
                            {l.levelLabel}{l.sections.length > 0 ? ` · ${l.sections.join(', ')}` : ''} · {l.readTime} min
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {matchingTheorems.length > 0 && (
                <div>
                  <h2 className="mb-2 text-sm font-black uppercase tracking-wider text-gray-500 dark:text-gray-400">Théorèmes</h2>
                  <ul className="space-y-2">
                    {matchingTheorems.map(t => (
                      <li key={t.href + t.name}>
                        <Link href={t.href} dir={t.dir} className="block p-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-orange-500 transition-colors">
                          <span className="block font-black text-gray-900 dark:text-white">{t.name}</span>
                          <span className="block text-xs font-semibold text-gray-500 dark:text-gray-400" dir="ltr">
                            {t.levels.map(l => LEVEL_LABEL[l] ?? l).join(', ')} · {t.chapters.join(', ')}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="/theoremes" className="mt-2 inline-block text-sm font-bold text-orange-500 hover:underline">Tous les théorèmes →</Link>
                </div>
              )}
            </div>
          )}

          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
            <span className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">OU</span>
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
          </div>

          {/* Row 1: the filters students use most (level, chapter, teacher) */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 mb-4">
            <select
              value={filterSchool}
              onChange={(e) => { setFilterSchool(e.target.value); setFilterLevel('all'); setFilterSection('all'); setFilterChapter('all'); }}
              className="px-4 py-3 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none font-semibold"
            >
              <option value="all">École ({uniqueSchools.length})</option>
              {uniqueSchools.map((school, idx) => (
                <option key={`school-${idx}`} value={school}>{displaySchoolName(school)}</option>
              ))}
            </select>

            <select
              value={filterLevel}
              onChange={(e) => { setFilterLevel(e.target.value); setFilterSection('all'); setFilterChapter('all'); }}
              className="px-4 py-3 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={filterSchool === 'all'}
            >
              <option value="all">Niveau ({uniqueLevels.length})</option>
              {uniqueLevels.map((level, idx) => (
                <option key={`level-${idx}`} value={level}>{level}</option>
              ))}
            </select>

            <select
              value={filterSection}
              onChange={(e) => { setFilterSection(e.target.value); setFilterChapter('all'); }}
              className="px-4 py-3 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={filterLevel === 'all' || uniqueSections.length === 0}
            >
              <option value="all">Section ({uniqueSections.length})</option>
              {uniqueSections.map((section, idx) => (
                <option key={`section-${idx}`} value={section}>{section}</option>
              ))}
            </select>

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
          </div>

          <button
            type="button"
            onClick={() => setShowMoreFilters(v => !v)}
            className="md:hidden mb-4 text-sm font-bold text-orange-500"
            aria-expanded={showMoreFilters}
          >
            {showMoreFilters ? '− Moins de filtres' : '+ Plus de filtres (pays, année, difficulté, tag)'}
          </button>

          {/* Row 2: metadata filters (folded on phones) */}
          <div className={`${showMoreFilters ? 'grid' : 'hidden'} md:grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-4`}>
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

          {/* Row 3: Lycée Pilote toggle — clearly labelled checkbox-style button */}
          {piloteCount > 0 && (
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Établissement :
              </span>
              <button
                onClick={() => setFilterPiloteOnly(!filterPiloteOnly)}
                title={filterPiloteOnly ? 'Retirer le filtre Lycée Pilote' : 'Afficher uniquement les Lycées Pilotes'}
                className={`inline-flex items-center gap-2 px-4 py-3 border-2 font-bold text-sm transition-all select-none ${
                  filterPiloteOnly
                    ? 'border-purple-500 bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                    : 'border-purple-300 dark:border-purple-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400'
                }`}
              >
                {/* Checkbox indicator */}
                <span className={`w-4 h-4 border-2 flex items-center justify-center flex-shrink-0 ${
                  filterPiloteOnly ? 'border-white bg-white' : 'border-current'
                }`}>
                  {filterPiloteOnly && (
                    <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </span>
                🏆 Lycée Pilote
                <span className={`px-1.5 py-0.5 text-xs font-black rounded ${
                  filterPiloteOnly
                    ? 'bg-purple-700 text-white'
                    : 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300'
                }`}>
                  {piloteCount}
                </span>
              </button>
            </div>
          )}

          {/* Results count + reset */}
          <div className="flex items-center justify-between mb-6 p-4 bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500">
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              ✨ <span className="text-orange-500">{filteredExercises.length}</span> exercice{filteredExercises.length !== 1 ? 's' : ''} trouvé{filteredExercises.length !== 1 ? 's' : ''}
              {filterPiloteOnly && (
                <span className="ml-2 text-purple-500 text-sm font-semibold">• Lycée Pilote uniquement</span>
              )}
            </p>
            <button onClick={resetFilters} className="text-sm font-bold text-orange-500 hover:text-orange-600 uppercase tracking-wider">
              Réinitialiser
            </button>
          </div>

          <SearchTable exercises={filteredExercises} />
        </div>
      </section>
    </div>
  );
}

export default function RecherchePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">⏳</div>
          <p className="text-xl text-gray-600 dark:text-gray-400">Chargement...</p>
        </div>
      </div>
    }>
      <RechercheContent />
    </Suspense>
  );
}