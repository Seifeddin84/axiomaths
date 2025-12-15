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
      {/* Table Header */}
      <div className="border-b-2 border-black pb-4 mb-4">
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

      {/* Table Rows */}
      <div className="space-y-2">
        {exercises.map((exercise) => {
          const isExpanded = expandedId === exercise.uid;
          const isSolutionShown = showSolution === exercise.uid;

          return (
            <div key={exercise.uid} className="border-2 border-black rounded-lg overflow-hidden">
              {/* Row Header */}
              <div
                className="grid grid-cols-[80px_1fr_120px_120px_80px_80px_50px] gap-4 px-4 py-6 cursor-pointer hover:bg-gray-50 transition-colors"
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

              {/* Expanded Content */}
              {isExpanded && (
                <div className="px-8 py-6 bg-gray-50 border-t-2 border-black">
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
                        <div className="mt-4 pl-6">
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