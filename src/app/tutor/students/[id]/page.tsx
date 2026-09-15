'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

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

function LogSessionModal({
  studentId,
  studentName,
  onClose,
  onSaved,
}: {
  studentId: string;
  studentName: string;
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
          student_id: studentId,
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
    <ModalShell title={`Log session — ${studentName}`}>
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
  studentId,
  studentName,
  suggestedAmount,
  onClose,
  onSaved,
}: {
  studentId: string;
  studentName: string;
  suggestedAmount: number;
  onClose: () => void;
  onSaved: () => void;
}) {
  const [amount, setAmount] = useState(suggestedAmount);
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
        body: JSON.stringify({ student_id: studentId, amount: Number(amount), date, note: note || null }),
      });
      onSaved();
    } finally {
      setSaving(false);
    }
  };

  return (
    <ModalShell title={`Record payment — ${studentName}`}>
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

export default function StudentDetailPage() {
  const params = useParams<{ id: string }>();
  const studentId = params.id;

  const [student, setStudent] = useState<Student | null>(null);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [logOpen, setLogOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/tutor/students/${studentId}`);
      if (!res.ok) throw new Error('Failed to load student');
      const data = await res.json();
      setStudent(data.student);
      setSessions(data.sessions);
      setPayments(data.payments);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studentId]);

  if (loading) {
    return <p className="text-gray-500 dark:text-gray-400">Loading…</p>;
  }

  if (error || !student) {
    return <p className="text-red-600 dark:text-red-400">{error ?? 'Student not found'}</p>;
  }

  const effectiveRate = student.rate - student.discount;
  const gradedSessions = sessions.filter((s) => s.grade !== null && s.grade !== undefined);
  const avgGrade =
    gradedSessions.length > 0
      ? gradedSessions.reduce((sum, s) => sum + Number(s.grade), 0) / gradedSessions.length
      : null;
  const totalCycles = Math.floor(sessions.length / 4);
  const suggestedPayment = effectiveRate * 4;

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-black text-gray-900 dark:text-white">{student.name}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {student.level} · {student.day}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setLogOpen(true)}
            className="px-4 py-2 rounded-lg text-sm font-bold bg-primary-600 text-white hover:bg-primary-700"
          >
            Log session
          </button>
          <button
            onClick={() => setPaymentOpen(true)}
            className="px-4 py-2 rounded-lg text-sm font-bold bg-accent-500 text-white hover:bg-accent-600"
          >
            Record payment
          </button>
        </div>
      </div>

      {/* Info card */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Rate</p>
          <p className="text-lg font-black text-gray-900 dark:text-white mt-1">{student.rate.toFixed(2)} DT</p>
        </div>
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Discount</p>
          <p className="text-lg font-black text-gray-900 dark:text-white mt-1">{student.discount.toFixed(2)} DT</p>
        </div>
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Effective rate</p>
          <p className="text-lg font-black text-gray-900 dark:text-white mt-1">{effectiveRate.toFixed(2)} DT</p>
        </div>
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Avg. grade</p>
          <p className="text-lg font-black text-gray-900 dark:text-white mt-1">{avgGrade !== null ? avgGrade.toFixed(2) : '—'}</p>
        </div>
      </div>

      {student.notes && (
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Notes</p>
          <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{student.notes}</p>
        </div>
      )}

      {/* Payment history */}
      <section>
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
          Payment history <span className="text-sm font-normal text-gray-500 dark:text-gray-400">({payments.length} / {totalCycles} cycles paid)</span>
        </h2>
        {payments.length === 0 ? (
          <p className="text-sm text-gray-500 dark:text-gray-400">No payments recorded yet.</p>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-500 dark:text-gray-400">Date</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-500 dark:text-gray-400">Amount</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-500 dark:text-gray-400">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {payments.map((payment) => (
                  <tr key={payment.id} className="bg-white dark:bg-gray-900">
                    <td className="px-4 py-2 text-gray-700 dark:text-gray-300">{payment.date}</td>
                    <td className="px-4 py-2 font-semibold text-gray-900 dark:text-white">{Number(payment.amount).toFixed(2)} DT</td>
                    <td className="px-4 py-2 text-gray-500 dark:text-gray-400">{payment.note ?? '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Session history */}
      <section>
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Session history</h2>
        {sessions.length === 0 ? (
          <p className="text-sm text-gray-500 dark:text-gray-400">No sessions logged yet.</p>
        ) : (
          <div className="space-y-3">
            {sessions.map((session) => (
              <div
                key={session.id}
                className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-bold text-gray-900 dark:text-white">{session.date}</p>
                  {session.grade !== null && session.grade !== undefined && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">
                      Grade: {session.grade}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{session.topic}</p>
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
                {session.notes && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 whitespace-pre-wrap">{session.notes}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {logOpen && (
        <LogSessionModal
          studentId={student.id}
          studentName={student.name}
          onClose={() => setLogOpen(false)}
          onSaved={() => {
            setLogOpen(false);
            loadData();
          }}
        />
      )}

      {paymentOpen && (
        <PaymentModal
          studentId={student.id}
          studentName={student.name}
          suggestedAmount={suggestedPayment}
          onClose={() => setPaymentOpen(false)}
          onSaved={() => {
            setPaymentOpen(false);
            loadData();
          }}
        />
      )}
    </div>
  );
}
