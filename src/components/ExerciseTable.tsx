'use client';

import { useState } from 'react';
import { Exercise } from '@/types/exercise';
import { getDifficultyStars } from '@/lib/exerciseParser';
import MathRenderer from './MathRenderer';
import { useExerciseBasket } from '@/context/ExerciseBasketContext';

interface ExerciseTableProps {
  exercises: Exercise[];
}

export default function ExerciseTable({ exercises }: ExerciseTableProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showSolution, setShowSolution] = useState<string | null>(null);
  const { addExercise, removeExercise, isSelected } = useExerciseBasket();

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

  const handleCheckboxChange = (exercise: Exercise, checked: boolean) => {
    if (checked) {
      addExercise(exercise);
    } else {
      removeExercise(exercise.uid);
    }
  };

  return (
    <div className="space-y-4">
      {exercises.map((exercise) => {
        const isExpanded = expandedId === exercise.uid;
        const isSolutionShown = showSolution === exercise.uid;
        const selected = isSelected(exercise.uid);

        return (
          <div
            key={exercise.uid}
            className={`bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-lg transition-all ${
              isExpanded ? 'ring-4 ring-orange-500' : ''
            } ${selected ? 'ring-4 ring-green-500' : ''}`}
          >
            {/* Header */}
            <div className="p-6">
              <div className="flex items-start gap-4">
                {/* Checkbox */}
                <div className="flex items-center pt-1">
                  <input
                    type="checkbox"
                    checked={selected}
                    onChange={(e) => {
                      e.stopPropagation();
                      handleCheckboxChange(exercise, e.target.checked);
                    }}
                    className="w-5 h-5 border-2 border-gray-300 text-green-500 focus:ring-green-500 cursor-pointer"
                  />
                </div>

                {/* Content */}
                <div
                  className="flex-1 cursor-pointer"
                  onClick={() => toggleExercise(exercise.uid)}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono font-black text-gray-500 dark:text-gray-400">#{exercise.uid}</span>
                    <span className="text-lg">{getDifficultyStars(exercise.difficulty)}</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-black">
                      {exercise.points} pts
                    </span>
                    {exercise.year && (
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs font-black">
                        {exercise.year}
                      </span>
                    )}
                  </div>
                  
                  {/* Title with Country and Year on same line */}
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2 flex items-center gap-2 flex-wrap">
                    <span>{exercise.title || exercise.source}</span>
                    {exercise.title && exercise.country && (
                      <>
                        <span className="text-gray-400 dark:text-gray-500">,</span>
                        <span className="text-gray-900 dark:text-white">{exercise.country}</span>
                      </>
                    )}
                    {exercise.title && exercise.year && (
                      <>
                        <span className="text-gray-400 dark:text-gray-500">,</span>
                        <span className="text-purple-600 dark:text-purple-400">{exercise.year}</span>
                      </>
                    )}
                  </h3>
                  
                  {/* Source line (only if title exists) */}
                  {exercise.title && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-semibold">
                      {exercise.source}
                    </p>
                  )}
                  
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-1 font-semibold">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {exercise.country}
                    </span>
                    {exercise.professor && (
                      <span className="flex items-center gap-1 font-semibold">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {exercise.professor}
                      </span>
                    )}
                  </div>
                </div>

                {/* Expand Icon */}
                <div className="text-gray-400 dark:text-gray-500 cursor-pointer" onClick={() => toggleExercise(exercise.uid)}>
                  {isExpanded ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>
              </div>
            </div>

            {/* Expanded Content */}
            {isExpanded && (
              <>
                {/* Exercise - LaTeX Style Background */}
                <div className="exercise-content border-t-4 border-gray-300 dark:border-gray-600">
                  <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
                    <MathRenderer content={exercise.content} />
                  </div>
                </div>

                {/* Solution */}
                {exercise.solution && (
                  <div className="p-6 bg-white dark:bg-gray-800 border-t-2 border-gray-200 dark:border-gray-700">
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
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}