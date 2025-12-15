'use client';

import { useState } from 'react';
import { Exercise } from '@/types/exercise';
import { getDifficultyStars } from '@/lib/exerciseParser';
import MathRenderer from './MathRenderer';

interface ExerciseTableProps {
  exercises: Exercise[];
}

export default function ExerciseTable({ exercises }: ExerciseTableProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showSolution, setShowSolution] = useState<string | null>(null);

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

  return (
    <div className="w-full">
      {/* Desktop Table Header - Hidden on mobile */}
      <div className="hidden md:block border-b-2 border-black pb-4 mb-4">
        <div className="grid grid-cols-[80px_1fr_120px_120px_80px_80px_50px] gap-4 px-4 font-semibold">
          <div>#</div>
          <div>Source</div>
          <div>Pays</div>
          <div>Prof.</div>
          <div>Diff.</div>
          <div>Points</div>
          <div></div>
        </div>
      </div>

      {/* Exercise Rows */}
      <div className="space-y-4">
        {exercises.map((exercise) => {
          const isExpanded = expandedId === exercise.uid;
          const isSolutionShown = showSolution === exercise.uid;

          return (
            <div key={exercise.uid} className="border-2 border-black rounded-lg overflow-hidden">
              {/* Desktop Row Header */}
              <div
                className="hidden md:grid grid-cols-[80px_1fr_120px_120px_80px_80px_50px] gap-4 px-4 py-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleExercise(exercise.uid)}
              >
                <div className="font-mono">{exercise.uid}</div>
                <div className="truncate">{exercise.source}</div>
                <div>{exercise.country}</div>
                <div className="truncate">{exercise.professor || '-'}</div>
                <div>{getDifficultyStars(exercise.difficulty)}</div>
                <div>{exercise.points}</div>
                <div className="text-center text-xl">
                  {isExpanded ? '▲' : '▼'}
                </div>
              </div>

              {/* Mobile Card Header */}
              <div
                className="md:hidden p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleExercise(exercise.uid)}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="font-mono text-sm text-gray-600">#{exercise.uid}</div>
                  <div className="text-2xl">{isExpanded ? '▲' : '▼'}</div>
                </div>
                <div className="text-xl font-semibold mb-2">{exercise.source}</div>
                <div className="flex gap-4 text-sm text-gray-600">
                  <span>{getDifficultyStars(exercise.difficulty)}</span>
                  <span>•</span>
                  <span>{exercise.points} pts</span>
                  <span>•</span>
                  <span>{exercise.country}</span>
                </div>
                {exercise.professor && (
                  <div className="text-sm text-gray-500 mt-1">{exercise.professor}</div>
                )}
              </div>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="px-6 md:px-8 py-6 bg-gray-50 border-t-2 border-black">
                  <MathRenderer content={exercise.content} />

                  {/* Solution Toggle */}
                  {exercise.solution && (
                    <>
                      <div className="border-t-2 border-gray-300 my-6"></div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSolution(exercise.uid);
                        }}
                        className="flex items-center gap-2 text-lg font-semibold hover:text-gray-600 transition-colors"
                      >
                        📖 Solution {isSolutionShown ? '▲' : '▼'}
                      </button>

                      {isSolutionShown && (
                        <div className="mt-4 pl-4 md:pl-6">
                          <MathRenderer content={exercise.solution} />
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}