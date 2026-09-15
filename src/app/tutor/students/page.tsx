'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { STUDENT_LEVELS } from '@/lib/tutorLevels';
import { getPaymentStatus, normalizeText, PAYMENT_STATUS_STYLES, PaymentStatus } from '@/lib/tutorShared';

interface Student {
  id: string;
  name: string;
  level: string;
  day: string;
  session_time_start: string;
  session_time_end: string;
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

const DAY_ORDER = [
  'lundi',
  'mardi',
  'mercredi',
  'jeudi',
  'vendredi',
  'samedi',
  'dimanche',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

function dayIndex(day: string) {
  const idx = DAY_ORDER.indexOf(normalizeText(day));
  return idx === -1 ? DAY_ORDER.length : idx;
}

function StatusBadge({ status }: { status: PaymentStatus }) {
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide ${PAYMENT_STATUS_STYLES[status]}`}>
      {status}
    </span>
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

function ModalShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4">
      <div className="w-full sm:max-w-md bg-white dark:bg-gray-900 rounded-t-2xl sm:rounded-2xl p-5 space-y-3 max-h-[90vh] overflow-y-auto">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
        {children}
      </div>
    </div>
  );
}

function StudentModal({
  student,
  onClose,
  onSaved,
}: {
  student: Student | null;
  onClose: () => void;
  onSaved: () => void;
}) {
  const [name, setName] = useState(student?.name ?? '');
  const [level, setLevel] = useState(student?.level ?? '');
  const [day, setDay] = useState(student?.day ?? '');
  const [sessionTimeStart, setSessionTimeStart] = useState(student?.session_time_start ?? '18:00');
  const [sessionTimeEnd, setSessionTimeEnd] = useState(student?.session_time_end ?? '20:00');
  const [rate, setRate] = useState(student?.rate ?? 0);
  const [discount, setDiscount] = useState(student?.discount ?? 0);
  const [notes, setNotes] = useState(student?.notes ?? '');
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = {
        name,
        level,
        day,
        session_time_start: sessionTimeStart,
        session_time_end: sessionTimeEnd,
        rate: Number(rate),
        discount: Number(discount),
        notes: notes || null,
      };
      if (student) {
        await fetch(`/api/tutor/students/${student.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } else {
        await fetch('/api/tutor/students', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }
      onSaved();
    } finally {
      setSaving(false);
    }
  };

  return (
    <ModalShell title={student ? `Edit ${student.name}` : 'Add student'}>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Field label="Name">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className={inputClass} />
        </Field>
        <Field label="Level">
          <select value={level} onChange={(e) => setLevel(e.target.value)} required className={inputClass}>
            <option value="" disabled>
              Select a level
            </option>
            {STUDENT_LEVELS.map((lvl) => (
              <option key={lvl} value={lvl}>
                {lvl}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Day">
          <input type="text" value={day} onChange={(e) => setDay(e.target.value)} required placeholder="e.g. Lundi" className={inputClass} />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Start time">
            <input
              type="time"
              value={sessionTimeStart}
              onChange={(e) => setSessionTimeStart(e.target.value)}
              required
              className={inputClass}
            />
          </Field>
          <Field label="End time">
            <input
              type="time"
              value={sessionTimeEnd}
              onChange={(e) => setSessionTimeEnd(e.target.value)}
              required
              className={inputClass}
            />
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Rate">
            <input
              type="number"
              step="0.01"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              required
              className={inputClass}
            />
          </Field>
          <Field label="Discount">
            <input
              type="number"
              step="0.01"
              value={discount}
              onChange={(e) => setDiscount(Number(e.target.value))}
              className={inputClass}
            />
          </Field>
        </div>
        <Field label="Notes">
          <textarea value={notes ?? ''} onChange={(e) => setNotes(e.target.value)} rows={2} className={inputClass} />
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
    </ModalShell>
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
    <ModalShell title={`Log session — ${student.name}`}>
      <form onSubmit={handleSubmit} className="space-y-3">
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
    </ModalShell>
  );
}

function PaymentModal({
  student,
  onClose,
  onSaved,
}: {
  student: Student;
  onClose: () => void;
  onSaved: () => void;
}) {
  const effectiveRate = student.rate - student.discount;
  const [amount, setAmount] = useState(effectiveRate * 4);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [note, setNote] = useState('');
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await fetch('/api/tutor/payments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          student_id: student.id,
          amount: Number(amount),
          date,
          note: note || null,
        }),
      });
      onSaved();
    } finally {
      setSaving(false);
    }
  };

  return (
    <ModalShell title={`Record payment — ${student.name}`}>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Field label="Amount">
          <input
            type="number"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            required
            className={inputClass}
          />
        </Field>
        <Field label="Date">
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required className={inputClass} />
        </Field>
        <Field label="Note">
          <input type="text" value={note} onChange={(e) => setNote(e.target.value)} className={inputClass} />
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
    </ModalShell>
  );
}

function StudentCard({
  student,
  sessionCount,
  paymentCount,
  onLogSession,
  onRecordPayment,
  onEdit,
  onDelete,
}: {
  student: Student;
  sessionCount: number;
  paymentCount: number;
  onLogSession: () => void;
  onRecordPayment: () => void;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const status = getPaymentStatus(sessionCount, paymentCount);
  const cycleProgress = sessionCount % 4;

  return (
    <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 space-y-3">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-bold text-gray-900 dark:text-white">{student.name}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{student.level}</p>
        </div>
        <StatusBadge status={status} />
      </div>

      <div>
        <div className="flex justify-between text-[11px] text-gray-500 dark:text-gray-400 mb-1">
          <span>Cycle progress</span>
          <span>{cycleProgress}/4</span>
        </div>
        <div className="h-1.5 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
          <div
            className="h-full bg-primary-500 rounded-full transition-all"
            style={{ width: `${(cycleProgress / 4) * 100}%` }}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 pt-1">
        <Link
          href={`/tutor/students/${student.id}`}
          className="px-3 py-1.5 rounded-lg text-xs font-bold border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          View
        </Link>
        <button
          onClick={onLogSession}
          className="px-3 py-1.5 rounded-lg text-xs font-bold bg-primary-600 text-white hover:bg-primary-700"
        >
          Log session
        </button>
        <button
          onClick={onRecordPayment}
          className="px-3 py-1.5 rounded-lg text-xs font-bold bg-accent-500 text-white hover:bg-accent-600"
        >
          Record payment
        </button>
        <button
          onClick={onEdit}
          className="px-3 py-1.5 rounded-lg text-xs font-bold border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="px-3 py-1.5 rounded-lg text-xs font-bold border border-red-300 dark:border-red-800 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [addOpen, setAddOpen] = useState(false);
  const [editStudent, setEditStudent] = useState<Student | null>(null);
  const [logStudent, setLogStudent] = useState<Student | null>(null);
  const [paymentStudent, setPaymentStudent] = useState<Student | null>(null);

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
        throw new Error('Failed to load students');
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

  const handleDelete = async (student: Student) => {
    if (!window.confirm(`Remove ${student.name}? This also deletes their logged sessions and payments.`)) {
      return;
    }
    await fetch(`/api/tutor/students/${student.id}`, { method: 'DELETE' });
    loadData();
  };

  if (loading) {
    return <p className="text-gray-500 dark:text-gray-400">Loading…</p>;
  }

  if (error) {
    return <p className="text-red-600 dark:text-red-400">{error}</p>;
  }

  const groups = new Map<string, Student[]>();
  for (const student of students) {
    const key = student.day || 'Unscheduled';
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(student);
  }
  const sortedDays = Array.from(groups.keys()).sort((a, b) => dayIndex(a) - dayIndex(b));

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-black text-gray-900 dark:text-white">Students</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">{students.length} total</p>
        </div>
        <button
          onClick={() => setAddOpen(true)}
          className="px-4 py-2 rounded-lg text-sm font-bold bg-primary-600 text-white hover:bg-primary-700"
        >
          Add student
        </button>
      </div>

      {students.length === 0 ? (
        <p className="text-sm text-gray-500 dark:text-gray-400">No students yet.</p>
      ) : (
        sortedDays.map((day) => (
          <section key={day}>
            <h2 className="text-sm font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">{day}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {groups.get(day)!.map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                  sessionCount={sessions.filter((s) => s.student_id === student.id).length}
                  paymentCount={payments.filter((p) => p.student_id === student.id).length}
                  onLogSession={() => setLogStudent(student)}
                  onRecordPayment={() => setPaymentStudent(student)}
                  onEdit={() => setEditStudent(student)}
                  onDelete={() => handleDelete(student)}
                />
              ))}
            </div>
          </section>
        ))
      )}

      {addOpen && (
        <StudentModal
          student={null}
          onClose={() => setAddOpen(false)}
          onSaved={() => {
            setAddOpen(false);
            loadData();
          }}
        />
      )}

      {editStudent && (
        <StudentModal
          student={editStudent}
          onClose={() => setEditStudent(null)}
          onSaved={() => {
            setEditStudent(null);
            loadData();
          }}
        />
      )}

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

      {paymentStudent && (
        <PaymentModal
          student={paymentStudent}
          onClose={() => setPaymentStudent(null)}
          onSaved={() => {
            setPaymentStudent(null);
            loadData();
          }}
        />
      )}
    </div>
  );
}
