'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Exercise } from '@/types/exercise';

interface BasketContextType {
  selectedExercises: Exercise[];
  addExercise: (exercise: Exercise) => void;
  removeExercise: (uid: string) => void;
  clearBasket: () => void;
  isSelected: (uid: string) => boolean;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export function ExerciseBasketProvider({ children }: { children: ReactNode }) {
  const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([]);

  const addExercise = (exercise: Exercise) => {
    setSelectedExercises(prev => {
      if (prev.some(e => e.uid === exercise.uid)) return prev;
      return [...prev, exercise];
    });
  };

  const removeExercise = (uid: string) => {
    setSelectedExercises(prev => prev.filter(e => e.uid !== uid));
  };

  const clearBasket = () => {
    setSelectedExercises([]);
  };

  const isSelected = (uid: string) => {
    return selectedExercises.some(e => e.uid === uid);
  };

  return (
    <BasketContext.Provider value={{ selectedExercises, addExercise, removeExercise, clearBasket, isSelected }}>
      {children}
    </BasketContext.Provider>
  );
}

export function useExerciseBasket() {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error('useExerciseBasket must be used within ExerciseBasketProvider');
  }
  return context;
}