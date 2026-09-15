'use client';

import { FormEvent, Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/tutor/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        setError('Incorrect password.');
        return;
      }

      const from = searchParams.get('from');
      router.push(from && from.startsWith('/tutor') ? from : '/tutor');
      router.refresh();
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm"
      >
        <h1 className="text-lg font-black text-gray-900 dark:text-white mb-1">TutorDesk</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Enter the password to continue.</p>

        <label htmlFor="password" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
          className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-3 py-2 text-sm text-gray-900 dark:text-white mb-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />

        {error && <p className="text-sm text-red-600 dark:text-red-400 mb-3">{error}</p>}

        <button
          type="submit"
          disabled={loading || !password}
          className="w-full rounded-lg bg-primary-600 hover:bg-primary-700 disabled:opacity-50 text-white text-sm font-semibold py-2 transition-colors"
        >
          {loading ? 'Checking…' : 'Sign in'}
        </button>
      </form>
    </div>
  );
}

export default function TutorLoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
