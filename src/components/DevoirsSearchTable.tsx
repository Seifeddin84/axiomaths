'use client';

import { useState, useMemo } from 'react';
import { Exam } from '@/lib/exams';

interface FilterOptions {
  establishments: Array<{ value: string; label: string }>;
  levels: Array<{ value: string; label: string }>;
  sections: Array<{ value: string; label: string }>;
  exam_types: Array<{ value: string; label: string }>;
  years: Array<{ value: string; label: string }>;
  chapters: Array<{ value: string; label: string }>;
}

interface Props {
  exams: Exam[];
  filterOptions: FilterOptions;
}

export default function DevoirsSearchTable({ exams, filterOptions }: Props) {
  // Search state
  const [searchText, setSearchText] = useState('');
  
  // Filter states
  const [filters, setFilters] = useState({
    establishment: '',
    level: '',
    section: '',
    exam_type: '',
    year: '',
    chapter: '',
  });

  // Filtered exams
  const filteredExams = useMemo(() => {
    if (!exams || exams.length === 0) return [];
    
    return exams.filter(exam => {
      // Apply filters
      if (filters.establishment && exam.establishment_type !== filters.establishment) return false;
      if (filters.level && exam.level !== filters.level) return false;
      if (filters.section && exam.section !== filters.section) return false;
      if (filters.exam_type && exam.exam_type !== filters.exam_type) return false;
      if (filters.year && exam.year !== filters.year) return false;
      if (filters.chapter && !(exam.chapters || []).includes(filters.chapter)) return false;
      
      // Apply search text
      if (searchText) {
        const searchLower = searchText.toLowerCase();
        const matchesSearch = 
          (exam.school || '').toLowerCase().includes(searchLower) ||
          (exam.chapters || []).some(c => c.toLowerCase().includes(searchLower)) ||
          (exam.level || '').toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }
      
      return true;
    });
  }, [exams, filters, searchText]);

  // Reset filters
  const resetFilters = () => {
    setFilters({
      establishment: '',
      level: '',
      section: '',
      exam_type: '',
      year: '',
      chapter: '',
    });
    setSearchText('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Rechercher par école, chapitre, niveau..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Establishment Type */}
          <select
            value={filters.establishment}
            onChange={(e) => setFilters({ ...filters, establishment: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="">Tous les établissements</option>
            {filterOptions.establishments.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          
          {/* Level */}
          <select
            value={filters.level}
            onChange={(e) => setFilters({ ...filters, level: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="">Tous les niveaux</option>
            {filterOptions.levels.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          
          {/* Section */}
          <select
            value={filters.section}
            onChange={(e) => setFilters({ ...filters, section: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="">Toutes les sections</option>
            {filterOptions.sections.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          
          {/* Exam Type */}
          <select
            value={filters.exam_type}
            onChange={(e) => setFilters({ ...filters, exam_type: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="">Tous les types</option>
            {filterOptions.exam_types.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          
          {/* Year */}
          <select
            value={filters.year}
            onChange={(e) => setFilters({ ...filters, year: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="">Toutes les années</option>
            {filterOptions.years.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          
          {/* Chapter */}
          <select
            value={filters.chapter}
            onChange={(e) => setFilters({ ...filters, chapter: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            disabled={filterOptions.chapters.length === 0}
          >
            <option value="">
              {filterOptions.chapters.length === 0 ? 'Chapitres (aucun pour le moment)' : 'Tous les chapitres'}
            </option>
            {filterOptions.chapters.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          
          {/* Reset Button */}
          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
          >
            Réinitialiser
          </button>
        </div>
        
        {/* Results Count */}
        <div className="mt-4 text-sm">
          {exams.length === 0 ? (
            <div className="flex items-center gap-2 text-gray-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Base de données en cours de construction - Contenu ajouté régulièrement</span>
            </div>
          ) : filteredExams.length === exams.length ? (
            <span className="text-gray-600">
              <span className="font-semibold text-orange-600">{filteredExams.length}</span> devoir{filteredExams.length !== 1 ? 's' : ''} disponible{filteredExams.length !== 1 ? 's' : ''}
            </span>
          ) : (
            <span className="text-gray-600">
              <span className="font-semibold text-orange-600">{filteredExams.length}</span> devoir{filteredExams.length !== 1 ? 's' : ''} trouvé{filteredExams.length !== 1 ? 's' : ''} sur {exams.length} au total
            </span>
          )}
        </div>
      </div>
      
      {/* Results Table or Empty State */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {filteredExams.length === 0 ? (
          <div className="p-12 text-center">
            <div className="max-w-md mx-auto">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Aucun devoir disponible pour le moment
              </h3>
              <p className="text-gray-600">
                La base de données contient actuellement <span className="font-semibold text-orange-600">{exams.length}</span> devoir{exams.length !== 1 ? 's' : ''}.
                {exams.length === 0 ? (
                  <span className="block mt-2 text-sm">
                    📚 Nouveau contenu ajouté régulièrement - Revenez bientôt !
                  </span>
                ) : (
                  <span className="block mt-2 text-sm">
                    Essayez de modifier vos critères de recherche.
                  </span>
                )}
              </p>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    École
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Niveau
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Section
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    N°
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Année
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Chapitres
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    PDF
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredExams.map(exam => (
                  <tr key={exam.uid} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {exam.school}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {exam.level}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {exam.section}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {exam.exam_type === 'Devoir de contrôle' ? 'Contrôle' : 'Synthèse'}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {exam.exam_number}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {exam.year}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      <div className="flex flex-wrap gap-1">
                        {(exam.chapters || []).map(chapter => (
                          <span
                            key={chapter}
                            className="inline-block px-2 py-1 text-xs bg-orange-100 text-orange-800 rounded"
                          >
                            {chapter}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <a
                        href={exam.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
                      >
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        PDF
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}