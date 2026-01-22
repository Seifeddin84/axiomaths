import { getAllExams, getExamFilterOptions } from '@/lib/exams';
import DevoirsSearchTable from '@/components/DevoirsSearchTable';

// Server component - fetches data at build time
export default function DevoirsPage() {
  const allExams = getAllExams();
  const filterOptions = getExamFilterOptions(allExams);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Devoirs</h1>
          <p className="mt-2 text-gray-600">
            Recherchez et téléchargez des devoirs de contrôle et de synthèse
          </p>
        </div>
      </div>
      
      {/* Client component with search and filtering */}
      <DevoirsSearchTable exams={allExams} filterOptions={filterOptions} />
    </div>
  );
}
