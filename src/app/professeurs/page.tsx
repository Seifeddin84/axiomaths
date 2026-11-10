import type { Metadata } from 'next';
import ProfessorStats from '@/components/ProfessorStats';
import { getProfessorOverview } from '@/lib/professorStats';

export const metadata: Metadata = {
  title: 'Professeurs — AxioMath',
  description: "Qui a écrit les exercices d'AxioMath : nombre d'exercices, niveaux, chapitres et sources de chaque professeur.",
};

function Tile({ value, label }: { value: number; label: string }) {
  return (
    <div className="px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="text-3xl font-black text-accent-600 dark:text-primary-400">{value}</div>
      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">{label}</div>
    </div>
  );
}

// Computed at build time from the `professor` field of the exercise files.
export default function ProfesseursPage() {
  const o = getProfessorOverview();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Professeurs</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Chaque exercice porte le nom de son auteur et sa source. Voici ce que chacun a apporté au site.
          </p>
          <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
            <Tile value={o.exercises} label="exercices" />
            <Tile value={o.professors} label="professeurs" />
            <Tile value={o.ownExercises} label="écrits par AxioMath" />
            <Tile value={o.uncredited} label="sans nom d'auteur" />
          </div>
        </div>
      </div>
      <ProfessorStats stats={o.stats} />
    </div>
  );
}
