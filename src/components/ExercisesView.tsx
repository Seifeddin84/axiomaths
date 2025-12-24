'use client';

import { useState } from 'react';
import { Exercise } from '@/types/exercise';
import ExerciseTable from './ExerciseTable';
import ExerciseTableView from './ExerciseTableView';

interface ExercisesViewProps {
  exercises: Exercise[];
}

export default function ExercisesView({ exercises }: ExercisesViewProps) {
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  return (
    <div className="space-y-6">
      {/* View Toggle Buttons */}
      <div className="flex justify-end gap-2">
        <button
          onClick={() => setViewMode('cards')}
          className={`px-4 py-2 font-black flex items-center gap-2 transition-all ${
            viewMode === 'cards'
              ? 'bg-orange-500 text-white shadow-lg'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          Vue Cartes
        </button>
        <button
          onClick={() => setViewMode('table')}
          className={`px-4 py-2 font-black flex items-center gap-2 transition-all ${
            viewMode === 'table'
              ? 'bg-orange-500 text-white shadow-lg'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Vue Tableau
        </button>
      </div>

      {/* Conditional Rendering */}
      {viewMode === 'cards' ? (
        <ExerciseTable exercises={exercises} />
      ) : (
        <ExerciseTableView exercises={exercises} />
      )}
    </div>
  );
}