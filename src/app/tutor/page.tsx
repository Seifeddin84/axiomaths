'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

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

interface Payment {
  id: string;
  student_id: string;
  amount: number;
  date: string;
  note: string | null;
  created_at: string;
}

type PaymentStatus = 'ok' | 'due' | 'late';

const DAY_NAMES_FR = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
const DAY_NAMES_EN = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

function normalize(s: string) {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim();
}

function isToday(day: string) {
  const idx = new Date().getDay();
  const n = normalize(day);
  return n === DAY_NAMES_FR[idx] || n === DAY_NAMES_EN[idx];
}

function getPaymentStatus(sessionCount: number, paymentCount: number): PaymentStatus {
  const totalCycles = Math.floor(sessionCount / 4);
  const paidCycles = paymentCount;
  if (totalCycles <= paidCycles) return 'ok';
  return totalCycles - paidCycles > 1 ? 'late' : 'due';
}

const STATUS_STYLES: Record<PaymentStatus, string> = {
  ok: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  due: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  late: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
};

function StatusBadge({ status }: { status: PaymentStatus }) {
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide ${STATUS_STYLES[status]}`}>
      {status}
    </span>
  );
}

function StatCard({ label, value, highlight }: { label: string; value: string | number; highlight?: boolean }) {
  return (
    <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">{label}</p>
      <p
        className={`text-2xl font-black mt-1 ${
          highlight ? 'text-red-600 dark:text-red-400' : 'text-gray-900 dark:text-white'
        }`}
      >
        {value}
      </p>
    </div>
  );
}

const inputClass =
  'w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500';

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">{label}</span>
      {children}
    </label>
  );
}

function LogSessionModal({
  student,
  onClose,
  onSaved,
}: {
  student: Student;
  onClose: () => void;
  onSaved: () => void;
}) {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [duration, setDuration] = useState(60);
  const [topic, setTopic] = useState('');
  const [homework, setHomework] = useState('');
  const [archiveRef, setArchiveRef] = useState('');
  const [grade, setGrade] = useState('');
  const [notes, setNotes] = useState('');
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await fetch('/api/tutor/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          student_id: student.id,
          date,
          duration: Number(duration),
          topic,
          homework: homework || null,
          archive_ref: archiveRef || null,
          grade: grade ? Number(grade) : null,
          notes: notes || null,
        }),
      });
      onSaved();
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full sm:max-w-md bg-white dark:bg-gray-900 rounded-t-2xl sm:rounded-2xl p-5 space-y-3 max-h-[90vh] overflow-y-auto"
      >
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Log session — {student.name}</h3>

        <Field label="Date">
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required className={inputClass} />
        </Field>
        <Field label="Duration (min)">
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            required
            min={1}
            className={inputClass}
          />
        </Field>
        <Field label="Topic">
          <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} required className={inputClass} />
        </Field>
        <Field label="Homework">
          <input type="text" value={homework} onChange={(e) => setHomework(e.target.value)} className={inputClass} />
        </Field>
        <Field label="Archive link (Overleaf)">
          <input type="text" value={archiveRef} onChange={(e) => setArchiveRef(e.target.value)} className={inputClass} />
        </Field>
        <Field label="Grade">
          <input type="number" step="0.5" value={grade} onChange={(e) => setGrade(e.target.value)} className={inputClass} />
        </Field>
        <Field label="Notes">
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={2} className={inputClass} />
        </Field>

        <div className="flex gap-2 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-2 rounded-lg font-semibold border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="flex-1 px-4 py-2 rounded-lg font-semibold bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-50"
          >
            {saving ? 'Saving…' : 'Save'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function TutorDashboard() {
  const [students, setStudents] = useState<Student[]>([]);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [logStudent, setLogStudent] = useState<Student | null>(null);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [studentsRes, sessionsRes, paymentsRes] = await Promise.all([
        fetch('/api/tutor/students'),
        fetch('/api/tutor/sessions'),
        fetch('/api/tutor/payments'),
      ]);
      if (!studentsRes.ok || !sessionsRes.ok || !paymentsRes.ok) {
        throw new Error('Failed to load dashboard data');
      }
      setStudents(await studentsRes.json());
      setSessions(await sessionsRes.json());
      setPayments(await paymentsRes.json());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const sessionsByStudent = (id: string) => sessions.filter((s) => s.student_id === id);
  const paymentsByStudent = (id: string) => payments.filter((p) => p.student_id === id);

  const studentsWithStatus = students.map((student) => ({
    student,
    status: getPaymentStatus(sessionsByStudent(student.id).length, paymentsByStudent(student.id).length),
  }));

  const totalRevenue = payments.reduce((sum, p) => sum + Number(p.amount), 0);
  const alerts = studentsWithStatus.filter((s) => s.status !== 'ok');
  const todaysStudents = students.filter((s) => isToday(s.day));

  if (loading) {
    return <p className="text-gray-500 dark:text-gray-400">Loading…</p>;
  }

  if (error) {
    return <p className="text-red-600 dark:text-red-400">{error}</p>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-black text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">Overview of your tutoring activity</p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Students" value={students.length} />
        <StatCard label="Sessions" value={sessions.length} />
        <StatCard label="Revenue" value={`${totalRevenue.toFixed(2)} DT`} />
        <StatCard label="Pending payments" value={alerts.length} highlight={alerts.length > 0} />
      </div>

      {/* Alerts */}
      {alerts.length > 0 && (
        <section>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Payment alerts</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {alerts.map(({ student, status }) => (
              <div
                key={student.id}
                className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center justify-between gap-3"
              >
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">{student.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{student.level}</p>
                </div>
                <div className="flex items-center gap-2">
                  <StatusBadge status={status} />
                  <Link
                    href={`/tutor/students/${student.id}`}
                    className="text-xs font-semibold text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Today's students */}
      <section>
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Today&apos;s students</h2>
        {todaysStudents.length === 0 ? (
          <p className="text-sm text-gray-500 dark:text-gray-400">No sessions scheduled for today.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {todaysStudents.map((student) => (
              <div
                key={student.id}
                className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center justify-between gap-3"
              >
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">{student.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {student.level} · {student.day}
                  </p>
                </div>
                <button
                  onClick={() => setLogStudent(student)}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-primary-600 text-white hover:bg-primary-700 transition-colors"
                >
                  Log session
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {logStudent && (
        <LogSessionModal
          student={logStudent}
          onClose={() => setLogStudent(null)}
          onSaved={() => {
            setLogStudent(null);
            loadData();
          }}
        />
      )}
    </div>
  );
}
