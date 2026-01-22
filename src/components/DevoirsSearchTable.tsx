'use client';

import { useState, useMemo } from 'react';
import type { Exam } from '@/lib/exams';

interface FilterOptions {
  establishments: string[];
  levels: string[];
  sections: string[];
  exam_types: string[];
  years: string[];
  chapters: string[];
  schools: string[];
}

interface Props {
  exams: Exam[];
  filterOptions: FilterOptions;
}

export default function DevoirsSearchTable({ exams, filterOptions }: Props) {
  // Filter states
  const [filters, setFilters] = useState({
    establishment: '',
    level: '',
    section: '',
    exam_type: '',
    year: '',
    chapter: '',
    school: '',
  });
  
  // Search text
  const [searchText, setSearchText] = useState('');
  
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
      if (filters.school && exam.school !== filters.school) return false;
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
      school: '',
    });
    setSearchText('');
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
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
            {(filterOptions.establishments || []).map(est => (
              <option key={est} value={est}>
                {est === 'lycee' ? 'Lycée' : 'Collège'}
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
            {(filterOptions.levels || []).map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
          
          {/* Section */}
          <select
            value={filters.section}
            onChange={(e) => setFilters({ ...filters, section: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="">Toutes les sections</option>
            {(filterOptions.sections || []).map(section => (
              <option key={section} value={section}>{section}</option>
            ))}
          </select>
          
          {/* Exam Type */}
          <select
            value={filters.exam_type}
            onChange={(e) => setFilters({ ...filters, exam_type: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="">Tous les types</option>
            {(filterOptions.exam_types || []).map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          
          {/* Year */}
          <select
            value={filters.year}
            onChange={(e) => setFilters({ ...filters, year: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="">Toutes les années</option>
            {(filterOptions.years || []).map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          
          {/* Chapter */}
          <select
            value={filters.chapter}
            onChange={(e) => setFilters({ ...filters, chapter: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="">Tous les chapitres</option>
            {(filterOptions.chapters || []).map(chapter => (
              <option key={chapter} value={chapter}>{chapter}</option>
            ))}
          </select>
          
          {/* School */}
          <select
            value={filters.school}
            onChange={(e) => setFilters({ ...filters, school: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="">Toutes les écoles</option>
            {(filterOptions.schools || []).map(school => (
              <option key={school} value={school}>{school}</option>
            ))}
          </select>
          
          {/* Reset Button */}
          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Réinitialiser
          </button>
        </div>
        
        {/* Results Count */}
        <div className="mt-4 text-sm text-gray-600">
          {filteredExams.length} devoir{filteredExams.length !== 1 ? 's' : ''} trouvé{filteredExams.length !== 1 ? 's' : ''}
        </div>
      </div>
      
      {/* Results Table */}
      {filteredExams.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
          <p className="text-gray-500">Aucun devoir trouvé avec ces critères</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
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
        </div>
      )}
    </div>
  );
}