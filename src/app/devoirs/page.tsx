import { getAllExams, getExamFilterOptions, getExamChapters } from '@/lib/exams';
import DevoirsSearchTable from '@/components/DevoirsSearchTable';

// Server component - fetches data at build time
export default function DevoirsPage() {
  const allExams = getAllExams();
  const filterOptions = getExamFilterOptions(); // No longer needs exams parameter
  const chapters = getExamChapters(allExams); // Get chapters from actual exams
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Devoirs</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Recherchez et téléchargez des devoirs de contrôle et de synthèse
          </p>
        </div>
      </div>
      
      {/* Client component with search and filtering */}
      <DevoirsSearchTable 
        exams={allExams} 
        filterOptions={{...filterOptions, chapters}} 
      />
    </div>
  );
}