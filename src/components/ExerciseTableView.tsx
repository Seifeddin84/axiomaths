'use client';

import { useState, useMemo } from 'react';
import { Exercise } from '@/types/exercise';
import MathRenderer from './MathRenderer';
import { useExerciseBasket } from '@/context/ExerciseBasketContext';

interface ExerciseTableViewProps {
  exercises: Exercise[];
}

type SortField = 'uid' | 'difficulty' | 'points' | 'year' | null;
type SortOrder = 'asc' | 'desc';

export default function ExerciseTableView({ exercises }: ExerciseTableViewProps) {
  const [filters, setFilters] = useState({
    country: '',
    professor: '',
    difficulty: '',
    tag: '',
    source: '',
    year: '',
  });
  const [sortField, setSortField] = useState<SortField>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showSolution, setShowSolution] = useState<string | null>(null);
  const { addExercise, removeExercise, isSelected } = useExerciseBasket();

  // Get unique values for filters
  const filterOptions = useMemo(() => {
    const countries = [...new Set(exercises.map(e => e.country))].filter(Boolean).sort();
    const professors = [...new Set(exercises.map(e => e.professor).filter((p): p is string => Boolean(p)))].sort();
    const difficulties = [...new Set(exercises.map(e => e.difficulty))].sort();
    const tags = [...new Set(exercises.flatMap(e => e.tags))].sort();
    const sources = [...new Set(exercises.map(e => e.source))].filter(Boolean).sort();
    const years = [...new Set(exercises.map(e => e.year).filter((y): y is number => Boolean(y)))].sort((a, b) => b - a);
    
    return { countries, professors, difficulties, tags, sources, years };
  }, [exercises]);

  // Filter and sort exercises
  const filteredAndSortedExercises = useMemo(() => {
    let filtered = exercises.filter(exercise => {
      if (filters.country && exercise.country !== filters.country) return false;
      if (filters.professor && exercise.professor !== filters.professor) return false;
      if (filters.difficulty && exercise.difficulty !== filters.difficulty) return false;
      if (filters.tag && !exercise.tags.includes(filters.tag)) return false;
      if (filters.source && !exercise.source.toLowerCase().includes(filters.source.toLowerCase())) return false;
      if (filters.year && exercise.year?.toString() !== filters.year) return false;
      return true;
    });

    // Apply sorting
    if (sortField) {
      filtered = [...filtered].sort((a, b) => {
        let aVal: any, bVal: any;
        
        if (sortField === 'difficulty') {
          const difficultyOrder = { 'Facile': 1, 'Moyen': 2, 'Difficile': 3 };
          aVal = difficultyOrder[a.difficulty as keyof typeof difficultyOrder] || 0;
          bVal = difficultyOrder[b.difficulty as keyof typeof difficultyOrder] || 0;
        } else if (sortField === 'points') {
          aVal = a.points;
          bVal = b.points;
        } else if (sortField === 'year') {
          aVal = a.year || 0;
          bVal = b.year || 0;
        } else if (sortField === 'uid') {
          aVal = a.uid;
          bVal = b.uid;
        }

        if (sortOrder === 'asc') {
          return aVal > bVal ? 1 : -1;
        } else {
          return aVal < bVal ? 1 : -1;
        }
      });
    }

    return filtered;
  }, [exercises, filters, sortField, sortOrder]);

  const clearFilters = () => {
    setFilters({ country: '', professor: '', difficulty: '', tag: '', source: '', year: '' });
  };

  const hasActiveFilters = Object.values(filters).some(v => v !== '');

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) {
      return (
        <svg className="w-4 h-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      );
    }
    return sortOrder === 'asc' ? (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    ) : (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    );
  };

  const toggleExercise = (uid: string) => {
    if (expandedId === uid) {
      setExpandedId(null);
      setShowSolution(null);
    } else {
      setExpandedId(uid);
      setShowSolution(null);
    }
  };

  const toggleSolution = (uid: string) => {
    setShowSolution(showSolution === uid ? null : uid);
  };

  const handleCheckboxChange = (exercise: Exercise, checked: boolean, e: React.MouseEvent) => {
    e.stopPropagation();
    if (checked) {
      addExercise(exercise);
    } else {
      removeExercise(exercise.uid);
    }
  };

  return (
    <div className="space-y-6">
      {/* Filter Bar */}
      <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-black flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filtres
          </h3>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-red-600 hover:text-red-700 font-black flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Effacer tout
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {/* Country Filter */}
          <div>
            <label className="block text-sm font-black mb-2">Pays</label>
            <select
              value={filters.country}
              onChange={(e) => setFilters({ ...filters, country: e.target.value })}
              className="w-full px-3 py-2 border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 font-semibold"
            >
              <option value="">Tous</option>
              {filterOptions.countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>

          {/* Source Filter */}
          <div>
            <label className="block text-sm font-black mb-2">Source</label>
            <input
              type="text"
              placeholder="Rechercher..."
              value={filters.source}
              onChange={(e) => setFilters({ ...filters, source: e.target.value })}
              className="w-full px-3 py-2 border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
            />
          </div>

          {/* Year Filter */}
          <div>
            <label className="block text-sm font-black mb-2">Année</label>
            <select
              value={filters.year}
              onChange={(e) => setFilters({ ...filters, year: e.target.value })}
              className="w-full px-3 py-2 border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 font-semibold"
            >
              <option value="">Toutes</option>
              {filterOptions.years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          {/* Difficulty Filter */}
          <div>
            <label className="block text-sm font-black mb-2">Difficulté</label>
            <select
              value={filters.difficulty}
              onChange={(e) => setFilters({ ...filters, difficulty: e.target.value })}
              className="w-full px-3 py-2 border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 font-semibold"
            >
              <option value="">Toutes</option>
              {filterOptions.difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </select>
          </div>

          {/* Professor Filter */}
          <div>
            <label className="block text-sm font-black mb-2">Professeur</label>
            <select
              value={filters.professor}
              onChange={(e) => setFilters({ ...filters, professor: e.target.value })}
              className="w-full px-3 py-2 border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 font-semibold"
            >
              <option value="">Tous</option>
              {filterOptions.professors.map(professor => (
                <option key={professor} value={professor}>{professor}</option>
              ))}
            </select>
          </div>

          {/* Tag Filter */}
          <div>
            <label className="block text-sm font-black mb-2">Tag</label>
            <select
              value={filters.tag}
              onChange={(e) => setFilters({ ...filters, tag: e.target.value })}
              className="w-full px-3 py-2 border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 font-semibold"
            >
              <option value="">Tous</option>
              {filterOptions.tags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-sm font-black text-gray-600 dark:text-gray-400">
        {filteredAndSortedExercises.length} exercice{filteredAndSortedExercises.length !== 1 ? 's' : ''} trouvé{filteredAndSortedExercises.length !== 1 ? 's' : ''}
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-orange-400 to-orange-500 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-black uppercase tracking-wide">
                  <button onClick={() => handleSort('uid')} className="flex items-center gap-2 hover:opacity-80">
                    UID <SortIcon field="uid" />
                  </button>
                </th>
                <th className="px-4 py-3 text-left text-sm font-black uppercase tracking-wide">Titre</th>
                <th className="px-4 py-3 text-left text-sm font-black uppercase tracking-wide">Source</th>
                <th className="px-4 py-3 text-left text-sm font-black uppercase tracking-wide">Chapitre</th>
                <th className="px-4 py-3 text-left text-sm font-black uppercase tracking-wide">
                  <button onClick={() => handleSort('year')} className="flex items-center gap-2 hover:opacity-80">
                    Année <SortIcon field="year" />
                  </button>
                </th>
                <th className="px-4 py-3 text-left text-sm font-black uppercase tracking-wide">Pays</th>
                <th className="px-4 py-3 text-left text-sm font-black uppercase tracking-wide">Professeur</th>
                <th className="px-4 py-3 text-left text-sm font-black uppercase tracking-wide">
                  <button onClick={() => handleSort('difficulty')} className="flex items-center gap-2 hover:opacity-80">
                    Difficulté <SortIcon field="difficulty" />
                  </button>
                </th>
                <th className="px-4 py-3 text-left text-sm font-black uppercase tracking-wide">
                  <button onClick={() => handleSort('points')} className="flex items-center gap-2 hover:opacity-80">
                    Points <SortIcon field="points" />
                  </button>
                </th>
                <th className="px-4 py-3 text-left text-sm font-black uppercase tracking-wide">Tags</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredAndSortedExercises.map((exercise, idx) => {
                const isExpanded = expandedId === exercise.uid;
                const isSolutionShown = showSolution === exercise.uid;
                const selected = isSelected(exercise.uid);

                return (
                  <>
                    <tr 
                      key={exercise.uid}
                      onClick={() => toggleExercise(exercise.uid)}
                      className={`cursor-pointer transition-colors h-14 ${
                        idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900'
                      } hover:bg-orange-50 dark:hover:bg-gray-700 ${
                        isExpanded ? 'ring-2 ring-orange-500' : ''
                      } ${selected ? 'ring-2 ring-green-500' : ''}`}
                    >
                      <td className="px-4 py-3 text-sm">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selected}
                            onChange={(e) => handleCheckboxChange(exercise, e.target.checked, e as any)}
                            onClick={(e) => e.stopPropagation()}
                            className="w-4 h-4 border-2 border-gray-300 text-green-500 focus:ring-green-500 cursor-pointer"
                          />
                          <span className="font-mono font-black text-orange-600 dark:text-orange-400">
                            #{exercise.uid}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm font-black" style={{ maxWidth: '300px' }}>
                        <div className="break-words">
                          {exercise.title || exercise.source}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm font-semibold max-w-xs truncate text-gray-600 dark:text-gray-400">
                        {exercise.title ? exercise.source : '-'}
                      </td>
                      <td className="px-4 py-3 text-sm font-semibold">{exercise.chapter}</td>
                      <td className="px-4 py-3 text-sm">
                        <span className="inline-flex items-center px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs font-black">
                          {exercise.year || '-'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <span className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-black">
                          {exercise.country}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm font-semibold">
                        {exercise.professor || '-'}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`inline-flex items-center px-3 py-1 text-xs font-black ${
                          exercise.difficulty === 'Facile' 
                            ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                            : exercise.difficulty === 'Moyen'
                            ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                            : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                        }`}>
                          {exercise.difficulty}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <span className="font-black text-orange-600 dark:text-orange-400">
                          {exercise.points} pts
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <div className="flex flex-wrap gap-1">
                          {exercise.tags.slice(0, 2).map(tag => (
                            <span 
                              key={tag}
                              className="inline-flex items-center px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold"
                            >
                              {tag}
                            </span>
                          ))}
                          {exercise.tags.length > 2 && (
                            <span className="text-xs text-gray-400 font-black self-center">
                              +{exercise.tags.length - 2}
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                    
                    {/* Expanded Exercise Content */}
                    {isExpanded && (
                      <tr>
                        <td colSpan={10} className="p-0 bg-gray-50 dark:bg-gray-900">
                          <div className="exercise-content border-t-4 border-orange-300 dark:border-orange-600">
                            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
                              <MathRenderer content={exercise.content} />
                            </div>
                          </div>
                          
                          {/* Solution */}
                          {exercise.solution && (
                            <div className="p-6 bg-white dark:bg-gray-800">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleSolution(exercise.uid);
                                }}
                                className="px-6 py-3 font-black text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-lg hover:shadow-orange-500/50 transition-all flex items-center gap-2"
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
                        </td>
                      </tr>
                    )}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}