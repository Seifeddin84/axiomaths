'use client';

import { useEffect, useState } from 'react';

interface Student {
  id: string;
  name: string;
  level: string;
  day: string;
  rate: number;
  discount: number;
  notes: string | null;
  created_at: string;
}

interface Session {
  id: string;
  student_id: string;
  date: string;
  duration: number;
  topic: string;
  homework: string | null;
  archive_ref: string | null;
  grade: number | null;
  notes: string | null;
  created_at: string;
}

const selectClass =
  'px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500';

export default function SessionsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [studentFilter, setStudentFilter] = useState('all');

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const [studentsRes, sessionsRes] = await Promise.all([
          fetch('/api/tutor/students'),
          fetch('/api/tutor/sessions'),
        ]);
        if (!studentsRes.ok || !sessionsRes.ok) throw new Error('Failed to load sessions');
        setStudents(await studentsRes.json());
        setSessions(await sessionsRes.json());
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) {
    return <p className="text-gray-500 dark:text-gray-400">Loading…</p>;
  }

  if (error) {
    return <p className="text-red-600 dark:text-red-400">{error}</p>;
  }

  const studentName = (id: string) => students.find((s) => s.id === id)?.name ?? 'Unknown student';

  const filteredSessions =
    studentFilter === 'all' ? sessions : sessions.filter((s) => s.student_id === studentFilter);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-black text-gray-900 dark:text-white">Sessions</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">{filteredSessions.length} sessions</p>
        </div>
        <select
          value={studentFilter}
          onChange={(e) => setStudentFilter(e.target.value)}
          className={selectClass}
        >
          <option value="all">All students</option>
          {students.map((student) => (
            <option key={student.id} value={student.id}>
              {student.name}
            </option>
          ))}
        </select>
      </div>

      {filteredSessions.length === 0 ? (
        <p className="text-sm text-gray-500 dark:text-gray-400">No sessions found.</p>
      ) : (
        <div className="space-y-3">
          {filteredSessions.map((session) => (
            <div
              key={session.id}
              className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">{studentName(session.student_id)}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {session.date} · {session.duration} min
                  </p>
                </div>
                {session.grade !== null && session.grade !== undefined && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">
                    Grade: {session.grade}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{session.topic}</p>
              {session.homework && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Homework: {session.homework}</p>
              )}
              {session.archive_ref && (
                <a
                  href={session.archive_ref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs font-semibold text-primary-600 dark:text-primary-400 hover:underline mt-1"
                >
                  Overleaf link ↗
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
