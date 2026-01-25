'use client';

import React, { useState, useMemo } from 'react';
import { Exercise } from '@/types/exercise';
import MathRenderer from './MathRenderer';
import { useExerciseBasket } from '@/context/ExerciseBasketContext';

type SortField = 'uid' | 'title' | 'school' | 'level' | 'section' | 'chapter' | 'country' | 'year' | 'difficulty' | 'points' | 'professor';
type SortOrder = 'asc' | 'desc';

interface SearchTableProps {
  exercises: Exercise[];
}

export default function SearchTable({ exercises }: SearchTableProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showSolution, setShowSolution] = useState<string | null>(null);
  const [sortField, setSortField] = useState<SortField>('uid');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const { addExercise, removeExercise, isSelected } = useExerciseBasket();
  
  // Inline table filters
  const [tableFilterSchool, setTableFilterSchool] = useState('all');
  const [tableFilterLevel, setTableFilterLevel] = useState('all');
  const [tableFilterSection, setTableFilterSection] = useState('all');
  const [tableFilterChapter, setTableFilterChapter] = useState('all');
  const [tableFilterYear, setTableFilterYear] = useState('all');
  const [tableFilterDifficulty, setTableFilterDifficulty] = useState('all');

  // Toggle expansion
  const toggleRow = (uid: string) => {
    setExpandedId(expandedId === uid ? null : uid);
    setShowSolution(null);
  };

  const toggleSolution = (uid: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setShowSolution(showSolution === uid ? null : uid);
  };

  // Get unique values for inline filters
  const uniqueSchools = useMemo(() => 
    [...new Set(exercises.map(ex => ex.school).filter(Boolean))].sort(),
    [exercises]
  );

  const uniqueLevels = useMemo(() => 
    [...new Set(exercises.map(ex => ex.level))].filter((level): level is string => Boolean(level)).sort(),
    [exercises]
  );

  const uniqueSections = useMemo(() => {
    // FIXED: Properly handle both array and single section
    const sectionsSet = new Set<string>();
    
    exercises.forEach(ex => {
      // Handle sections array (NEW FORMAT)
      if (ex.sections && Array.isArray(ex.sections)) {
        ex.sections.forEach(section => {
          if (section && typeof section === 'string') {
            sectionsSet.add(section.trim());
          }
        });
      }
      // Handle single section (OLD FORMAT)
      else if (ex.section && typeof ex.section === 'string') {
        sectionsSet.add(ex.section.trim());
      }
    });
    
    // Filter out invalid entries
    const validSections = [...sectionsSet].filter(s => 
      s && s !== 'null' && s !== 'undefined'
    );
    
    return validSections.sort();
  }, [exercises]);

  const uniqueChapters = useMemo(() => 
    [...new Set(exercises.map(ex => ex.chapter))].filter((chapter): chapter is string => Boolean(chapter)).sort(),
    [exercises]
  );

  const uniqueYears = useMemo(() => 
    [...new Set(exercises.map(ex => ex.year))].filter((year): year is number => Boolean(year)).sort().reverse(),
    [exercises]
  );

  const uniqueDifficulties = useMemo(() => 
    [...new Set(exercises.map(ex => ex.difficulty).filter(Boolean))].sort(),
    [exercises]
  );

  // Apply inline filters
  const tableFilteredExercises = useMemo(() => {
    return exercises.filter(ex => {
      const normalizeStr = (str: string | undefined | null) => 
        str?.toLowerCase().trim() || '';

      const matchesSchool = tableFilterSchool === 'all' || 
        normalizeStr(ex.school) === normalizeStr(tableFilterSchool);
      
      const matchesLevel = tableFilterLevel === 'all' || 
        normalizeStr(ex.level) === normalizeStr(tableFilterLevel);
      
      // Section filter - handle both array and single value
      const matchesSection = tableFilterSection === 'all' || 
        (ex.sections && ex.sections.some(s => normalizeStr(s) === normalizeStr(tableFilterSection))) ||
        normalizeStr(ex.section) === normalizeStr(tableFilterSection);
      
      const matchesChapter = tableFilterChapter === 'all' || 
        normalizeStr(ex.chapter) === normalizeStr(tableFilterChapter);
      
      const matchesYear = tableFilterYear === 'all' || 
        normalizeStr(ex.year?.toString()) === normalizeStr(tableFilterYear);
      
      const matchesDifficulty = tableFilterDifficulty === 'all' || 
        normalizeStr(ex.difficulty) === normalizeStr(tableFilterDifficulty);

      return matchesSchool && matchesLevel && matchesSection && matchesChapter && matchesYear && matchesDifficulty;
    });
  }, [exercises, tableFilterSchool, tableFilterLevel, tableFilterSection, tableFilterChapter, tableFilterYear, tableFilterDifficulty]);

  // Sort exercises
  const sortedExercises = useMemo(() => {
    const sorted = [...tableFilteredExercises].sort((a, b) => {
      let aValue: any = a[sortField];
      let bValue: any = b[sortField];

      if (aValue === undefined || aValue === null) aValue = '';
      if (bValue === undefined || bValue === null) bValue = '';

      if (typeof aValue === 'string') aValue = aValue.toLowerCase();
      if (typeof bValue === 'string') bValue = bValue.toLowerCase();

      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [tableFilteredExercises, sortField, sortOrder]);

  // Toggle sort
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  // Select/deselect all
  const toggleSelectAll = () => {
    if (selectedIds.length === sortedExercises.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(sortedExercises.map(ex => ex.uid));
    }
  };

  // Toggle individual selection
  const toggleSelect = (exercise: Exercise) => {
    if (isSelected(exercise.uid)) {
      removeExercise(exercise.uid);
      setSelectedIds(selectedIds.filter(id => id !== exercise.uid));
    } else {
      addExercise(exercise);
      setSelectedIds([...selectedIds, exercise.uid]);
    }
  };

  // Reset table filters
  const resetTableFilters = () => {
    setTableFilterSchool('all');
    setTableFilterLevel('all');
    setTableFilterSection('all');
    setTableFilterChapter('all');
    setTableFilterYear('all');
    setTableFilterDifficulty('all');
  };

  // Difficulty badge colors
  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty?.toLowerCase()) {
      case 'facile': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'moyen': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'difficile': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  // Sort arrow component
  const SortArrow = ({ field }: { field: SortField }) => {
    if (sortField !== field) {
      return <span className="text-gray-400">↕</span>;
    }
    return <span className="text-orange-500">{sortOrder === 'asc' ? '↑' : '↓'}</span>;
  };

  // Check if any table filters are active
  const hasActiveTableFilters = tableFilterSchool !== 'all' || tableFilterLevel !== 'all' || 
                                  tableFilterSection !== 'all' || tableFilterChapter !== 'all' || 
                                  tableFilterYear !== 'all' || tableFilterDifficulty !== 'all';

  if (exercises.length === 0) {
    return (
      <div className="border-2 border-gray-200 dark:border-gray-700 p-12 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Aucun exercice trouvé</h3>
        <p className="text-gray-600 dark:text-gray-400">Essayez d'ajuster vos filtres ou votre recherche</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      {/* Selected counter */}
      {selectedIds.length > 0 && (
        <div className="mb-4 p-4 bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 flex items-center justify-between">
          <p className="text-sm font-bold text-gray-900 dark:text-white">
            ☑️ <span className="text-teal-600 dark:text-teal-400">{selectedIds.length}</span> exercice{selectedIds.length > 1 ? 's' : ''} sélectionné{selectedIds.length > 1 ? 's' : ''}
          </p>
          <button 
            onClick={() => setSelectedIds([])}
            className="text-sm font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 uppercase"
          >
            Désélectionner
          </button>
        </div>
      )}

      {/* Active table filters indicator */}
      {hasActiveTableFilters && (
        <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 flex items-center justify-between">
          <p className="text-sm font-bold text-gray-900 dark:text-white">
            🔽 Filtres de table actifs • {sortedExercises.length} résultat{sortedExercises.length > 1 ? 's' : ''}
          </p>
          <button 
            onClick={resetTableFilters}
            className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 uppercase"
          >
            Réinitialiser filtres table
          </button>
        </div>
      )}

      <table className="w-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <thead className="bg-gray-50 dark:bg-gray-900">
          {/* Header row */}
          <tr className="border-b-2 border-gray-200 dark:border-gray-700">
            <th className="px-4 py-3 text-left w-12">
              <input
                type="checkbox"
                checked={selectedIds.length === sortedExercises.length && sortedExercises.length > 0}
                onChange={toggleSelectAll}
                className="w-4 h-4 cursor-pointer accent-orange-500"
              />
            </th>

            <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wider text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 w-32" onClick={() => handleSort('difficulty')}>
              <div className="flex items-center gap-2">
                Difficulté <SortArrow field="difficulty" />
              </div>
            </th>

            <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wider text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 min-w-[250px]" onClick={() => handleSort('title')}>
              <div className="flex items-center gap-2">
                Titre <SortArrow field="title" />
              </div>
            </th>

            <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wider text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 w-24" onClick={() => handleSort('school')}>
              <div className="flex items-center gap-2">
                École <SortArrow field="school" />
              </div>
            </th>

            <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wider text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 w-20" onClick={() => handleSort('level')}>
              <div className="flex items-center gap-2">
                Niveau <SortArrow field="level" />
              </div>
            </th>

            <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wider text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 w-40" onClick={() => handleSort('section')}>
              <div className="flex items-center gap-2">
                Section <SortArrow field="section" />
              </div>
            </th>

            <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wider text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 min-w-[180px]" onClick={() => handleSort('chapter')}>
              <div className="flex items-center gap-2">
                Chapitre <SortArrow field="chapter" />
              </div>
            </th>

            <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wider text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 w-20" onClick={() => handleSort('year')}>
              <div className="flex items-center gap-2">
                Année <SortArrow field="year" />
              </div>
            </th>

            <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wider text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 w-36" onClick={() => handleSort('professor')}>
              <div className="flex items-center gap-2">
                Professeur <SortArrow field="professor" />
              </div>
            </th>

            {/* STICKY COLUMN */}
            <th className="px-4 py-3 text-center text-xs font-black uppercase tracking-wider text-gray-700 dark:text-gray-300 w-32 sticky right-0 bg-gray-50 dark:bg-gray-900 border-l-2 border-gray-300 dark:border-gray-600 shadow-[-4px_0_8px_rgba(0,0,0,0.1)] dark:shadow-[-4px_0_8px_rgba(0,0,0,0.3)] z-10">
              Voir
            </th>
          </tr>

          {/* Filter row */}
          <tr className="bg-gray-100 dark:bg-gray-800 border-b-2 border-gray-200 dark:border-gray-700">
            <th className="px-2 py-2"></th>
            
            {/* Difficulté filter */}
            <th className="px-2 py-2">
              <select
                value={tableFilterDifficulty}
                onChange={(e) => setTableFilterDifficulty(e.target.value)}
                className="w-full px-2 py-1 text-xs border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-orange-500 focus:outline-none"
              >
                <option value="all">Tous</option>
                {uniqueDifficulties.map((difficulty, idx) => (
                  <option key={idx} value={difficulty}>{difficulty}</option>
                ))}
              </select>
            </th>
            
            <th className="px-2 py-2"></th>

            {/* École filter */}
            <th className="px-2 py-2">
              <select
                value={tableFilterSchool}
                onChange={(e) => setTableFilterSchool(e.target.value)}
                className="w-full px-2 py-1 text-xs border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-orange-500 focus:outline-none"
              >
                <option value="all">Tous</option>
                {uniqueSchools.map((school, idx) => (
                  <option key={idx} value={school}>
                    {school === 'college' ? 'Collège' : 'Lycée'}
                  </option>
                ))}
              </select>
            </th>

            {/* Niveau filter */}
            <th className="px-2 py-2">
              <select
                value={tableFilterLevel}
                onChange={(e) => setTableFilterLevel(e.target.value)}
                className="w-full px-2 py-1 text-xs border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-orange-500 focus:outline-none"
              >
                <option value="all">Tous</option>
                {uniqueLevels.map((level, idx) => (
                  <option key={idx} value={level}>{level}</option>
                ))}
              </select>
            </th>

            {/* Section filter */}
            <th className="px-2 py-2">
              <select
                value={tableFilterSection}
                onChange={(e) => setTableFilterSection(e.target.value)}
                className="w-full px-2 py-1 text-xs border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-orange-500 focus:outline-none"
              >
                <option value="all">Tous</option>
                {uniqueSections.map((section, idx) => (
                  <option key={idx} value={section}>{section}</option>
                ))}
              </select>
            </th>

            {/* Chapitre filter */}
            <th className="px-2 py-2">
              <select
                value={tableFilterChapter}
                onChange={(e) => setTableFilterChapter(e.target.value)}
                className="w-full px-2 py-1 text-xs border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-orange-500 focus:outline-none"
              >
                <option value="all">Tous</option>
                {uniqueChapters.map((chapter, idx) => (
                  <option key={idx} value={chapter}>{chapter}</option>
                ))}
              </select>
            </th>

            {/* Année filter */}
            <th className="px-2 py-2">
              <select
                value={tableFilterYear}
                onChange={(e) => setTableFilterYear(e.target.value)}
                className="w-full px-2 py-1 text-xs border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-orange-500 focus:outline-none"
              >
                <option value="all">Tous</option>
                {uniqueYears.map((year, idx) => (
                  <option key={idx} value={year}>{year}</option>
                ))}
              </select>
            </th>

            <th className="px-2 py-2"></th>

            {/* Empty cell for sticky column */}
            <th className="px-2 py-2 sticky right-0 bg-gray-100 dark:bg-gray-800 border-l-2 border-gray-300 dark:border-gray-600 z-10"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {sortedExercises.map((exercise, idx) => {
            const isExpanded = expandedId === exercise.uid;
            const isSolutionShown = showSolution === exercise.uid;
            const selected = isSelected(exercise.uid);

            return (
              <React.Fragment key={exercise.uid}>
                {/* Main Row */}
                <tr 
                  key={exercise.uid}
                  onClick={() => toggleRow(exercise.uid)}
                  className={`cursor-pointer transition-all ${
                    idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900'
                  } hover:bg-orange-50 dark:hover:bg-gray-700 ${
                    isExpanded ? 'ring-2 ring-inset ring-orange-500' : ''
                  } ${selected ? 'ring-2 ring-green-500' : ''}`}
                >
                  <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                    <input
                      type="checkbox"
                      checked={isSelected(exercise.uid)}
                      onChange={() => toggleSelect(exercise)}
                      className="w-4 h-4 cursor-pointer accent-orange-500"
                    />
                  </td>

                  <td className="px-4 py-3 text-sm">
                    <span className={`px-2 py-1 text-xs font-bold uppercase tracking-wider ${getDifficultyColor(exercise.difficulty)}`}>
                      {exercise.difficulty || '-'}
                    </span>
                  </td>

                  {/* Title - can wrap */}
                  <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div className="font-semibold leading-tight line-clamp-2">
                      {exercise.title || 'Sans titre'}
                    </div>
                    {exercise.source && (
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {exercise.source}
                      </div>
                    )}
                  </td>

                  <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    {exercise.school === 'college' ? 'Collège' : 'Lycée'}
                  </td>

                  <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    {exercise.level}
                  </td>

                  {/* Section - show array as badges */}
                  <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    {exercise.sections && exercise.sections.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {exercise.sections.map((section, sidx) => (
                          <span 
                            key={sidx}
                            className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded font-semibold"
                          >
                            {section}
                          </span>
                        ))}
                      </div>
                    ) : (
                      exercise.section || '-'
                    )}
                  </td>

                  {/* Chapter - can wrap */}
                  <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div className="line-clamp-2">
                      {exercise.chapter || '-'}
                    </div>
                  </td>

                  <td className="px-4 py-3 text-sm text-purple-600 dark:text-purple-400 font-semibold">
                    {exercise.year || '-'}
                  </td>

                  <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    {exercise.professor || '-'}
                  </td>

                  {/* STICKY CELL */}
                  <td className={`px-4 py-3 text-sm text-center sticky right-0 border-l-2 border-gray-300 dark:border-gray-600 z-10 ${
                    idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900'
                  } shadow-[-4px_0_8px_rgba(0,0,0,0.05)] dark:shadow-[-4px_0_8px_rgba(0,0,0,0.2)]`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white font-bold text-sm uppercase tracking-wide hover:bg-orange-600 transition-colors">
                      {isExpanded ? 'Masquer' : 'Voir'}
                      <svg
                        className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </td>
                </tr>

                {/* Expanded Content Row */}
                {isExpanded && (
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <td colSpan={10} className="p-0">
                      <div className="p-6 border-t-4 border-orange-500">
                        {/* Exercise Content */}
                        <div className="exercise-content border-t-4 border-gray-300 dark:border-gray-600">
                          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
                            <MathRenderer content={exercise.content} />
                          </div>
                        </div>

                        {/* Solution */}
                        {exercise.solution && (
                          <div className="p-6 bg-white dark:bg-gray-800 border-t-2 border-gray-200 dark:border-gray-700">
                            <button
                              onClick={(e) => toggleSolution(exercise.uid, e)}
                              className="mb-3 px-6 py-3 font-black text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-lg hover:shadow-orange-500/50 transition-all flex items-center gap-2"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                              </svg>
                              {isSolutionShown ? 'Masquer' : 'Voir'} la solution
                            </button>

                            {isSolutionShown && (
                              <div className="mt-6 p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-4 border-green-300 dark:border-green-700">
                                <div className="flex items-center gap-3 mb-6">
                                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                  </div>
                                  <h4 className="text-2xl font-black text-green-900 dark:text-green-100">Solution</h4>
                                </div>
                                <div className="prose prose-lg dark:prose-invert max-w-none">
                                  <MathRenderer content={exercise.solution} />
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}