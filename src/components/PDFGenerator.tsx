'use client';

import { Exercise } from '@/types/exercise';
import { useExerciseBasket } from '@/context/ExerciseBasketContext';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useRef, useState } from 'react';
import MathRenderer from './MathRenderer';
import { getDifficultyStars } from '@/lib/exerciseParser';

interface PDFGeneratorProps {
  exercises: Exercise[];
  onClose: () => void;
}

export default function PDFGenerator({ exercises, onClose }: PDFGeneratorProps) {
  const { clearBasket } = useExerciseBasket();
  const [generating, setGenerating] = useState(false);
  const [includeSolutions, setIncludeSolutions] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const generatePDF = async () => {
    if (!contentRef.current) return;
    
    setGenerating(true);
    
    try {
      const canvas = await html2canvas(contentRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 10;
      
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save(`axiomaths-exercises-${Date.now()}.pdf`);
      
      clearBasket();
      onClose();
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Erreur lors de la génération du PDF');
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <h2 className="text-2xl font-black text-gray-900 dark:text-white">
            Générer PDF ({exercises.length} exercices)
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Options */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={includeSolutions}
              onChange={(e) => setIncludeSolutions(e.target.checked)}
              className="w-5 h-5 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
            />
            <span className="text-gray-700 dark:text-gray-300 font-semibold">
              Inclure les solutions
            </span>
          </label>
        </div>

        {/* Preview */}
        <div className="flex-1 overflow-y-auto p-6">
          <div ref={contentRef} className="bg-white p-8 space-y-8">
            <div className="text-center border-b-2 border-gray-900 pb-6 mb-8">
              <h1 className="text-4xl font-black mb-2">AXIOMATHS</h1>
              <p className="text-gray-600">Recueil d'exercices de mathématiques</p>
            </div>

            {exercises.map((exercise, index) => (
              <div key={exercise.uid} className="break-inside-avoid mb-8">
                {/* Exercise Header */}
                <div className="flex items-start justify-between mb-4 pb-2 border-b border-gray-300">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-black text-lg">Exercice {index + 1}</span>
                      <span className="text-sm text-gray-600">#{exercise.uid}</span>
                      <span className="text-orange-500">{getDifficultyStars(exercise.difficulty)}</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {exercise.source} • {exercise.country} • {exercise.points} points
                    </p>
                  </div>
                </div>

                {/* Exercise Content */}
                <div className="mb-4">
                  <MathRenderer content={exercise.content} />
                </div>

                {/* Solution */}
                {includeSolutions && exercise.solution && (
                  <div className="mt-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <h4 className="font-black text-green-900">Solution</h4>
                    </div>
                    <MathRenderer content={exercise.solution} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 rounded-lg font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            Annuler
          </button>
          <button
            onClick={generatePDF}
            disabled={generating}
            className="flex-1 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-lg hover:shadow-orange-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {generating ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Génération...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Télécharger PDF
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}