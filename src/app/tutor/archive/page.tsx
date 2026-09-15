'use client';

import { useEffect, useState } from 'react';

interface Archive {
  id: string;
  title: string;
  level: string;
  topic: string;
  url: string | null;
  notes: string | null;
  created_at: string;
}

const inputClass =
  'w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500';

const selectClass =
  'px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500';

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">{label}</span>
      {children}
    </label>
  );
}

function AddArchiveModal({ onClose, onSaved }: { onClose: () => void; onSaved: () => void }) {
  const [title, setTitle] = useState('');
  const [level, setLevel] = useState('');
  const [topic, setTopic] = useState('');
  const [url, setUrl] = useState('');
  const [notes, setNotes] = useState('');
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await fetch('/api/tutor/archive', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, level, topic, url: url || null, notes: notes || null }),
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
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Add problem list</h3>

        <Field label="Title">
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required className={inputClass} />
        </Field>
        <Field label="Level">
          <input type="text" value={level} onChange={(e) => setLevel(e.target.value)} required className={inputClass} />
        </Field>
        <Field label="Topic">
          <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} required className={inputClass} />
        </Field>
        <Field label="Overleaf link">
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} className={inputClass} />
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

export default function ArchivePage() {
  const [entries, setEntries] = useState<Archive[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [levelFilter, setLevelFilter] = useState('all');
  const [addOpen, setAddOpen] = useState(false);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/tutor/archive');
      if (!res.ok) throw new Error('Failed to load archive');
      setEntries(await res.json());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return <p className="text-gray-500 dark:text-gray-400">Loading…</p>;
  }

  if (error) {
    return <p className="text-red-600 dark:text-red-400">{error}</p>;
  }

  const levels = Array.from(new Set(entries.map((e) => e.level))).sort();
  const filtered = levelFilter === 'all' ? entries : entries.filter((e) => e.level === levelFilter);

  const handleDelete = async (id: string) => {
    await fetch(`/api/tutor/archive/${id}`, { method: 'DELETE' });
    loadData();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-black text-gray-900 dark:text-white">Archive</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">{filtered.length} problem lists</p>
        </div>
        <div className="flex items-center gap-2">
          <select value={levelFilter} onChange={(e) => setLevelFilter(e.target.value)} className={selectClass}>
            <option value="all">All levels</option>
            {levels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
          <button
            onClick={() => setAddOpen(true)}
            className="px-4 py-2 rounded-lg text-sm font-bold bg-primary-600 text-white hover:bg-primary-700"
          >
            Add problem list
          </button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-gray-500 dark:text-gray-400">No problem lists yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((entry) => (
            <div
              key={entry.id}
              className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 space-y-2"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="font-bold text-gray-900 dark:text-white">{entry.title}</p>
                <button
                  onClick={() => handleDelete(entry.id)}
                  className="text-xs font-semibold text-red-600 dark:text-red-400 hover:underline flex-shrink-0"
                >
                  Delete
                </button>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-semibold">
                  {entry.level}
                </span>
                <span className="text-gray-500 dark:text-gray-400">{entry.topic}</span>
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                {new Date(entry.created_at).toLocaleDateString()}
              </p>
              {entry.url && (
                <a
                  href={entry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs font-semibold text-primary-600 dark:text-primary-400 hover:underline"
                >
                  Overleaf link ↗
                </a>
              )}
              {entry.notes && (
                <p className="text-xs text-gray-500 dark:text-gray-400 whitespace-pre-wrap">{entry.notes}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {addOpen && (
        <AddArchiveModal
          onClose={() => setAddOpen(false)}
          onSaved={() => {
            setAddOpen(false);
            loadData();
          }}
        />
      )}
    </div>
  );
}
