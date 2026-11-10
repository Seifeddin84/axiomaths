import type { Metadata } from 'next';
import TheoremWiki from '@/components/TheoremWiki';
import { getTheoremSummaries } from '@/lib/theoremIndex';

export const metadata: Metadata = {
  title: 'Théorèmes — AxioMath',
  description:
    "Tous les théorèmes des cours AxioMath, du collège à la terminale : énoncé, démonstration, niveaux concernés, lien vers le chapitre.",
};

// The index is generated from the lessons at build time (src/lib/theoremIndex.ts).
export default async function TheoremesPage() {
  const entries = await getTheoremSummaries();
  const present = new Set(entries.flatMap(e => e.levels));
  const levels = ['7eme', '8eme', '9eme', '1ere', '2eme', '3eme', '4eme']
    .filter(l => present.has(l))
    .map(l => l.replace('eme', 'ème').replace('1ere', '1ère'));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Théorèmes</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {entries.length} énoncés tirés des cours ({levels.join(', ')}). Ouvre un énoncé pour lire sa démonstration, ou clique
            sur une classe pour aller au cours du chapitre.
          </p>
        </div>
      </div>
      <TheoremWiki entries={entries} />
    </div>
  );
}
