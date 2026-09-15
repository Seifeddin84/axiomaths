'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import {
  HomeIcon,
  UsersIcon,
  ClockIcon,
  CalendarDaysIcon,
  ArchiveBoxIcon,
} from '@heroicons/react/24/outline';

const NAV_ITEMS = [
  { label: 'Dashboard', href: '/tutor', icon: HomeIcon },
  { label: 'Students', href: '/tutor/students', icon: UsersIcon },
  { label: 'Schedule', href: '/tutor/schedule', icon: ClockIcon },
  { label: 'Sessions', href: '/tutor/sessions', icon: CalendarDaysIcon },
  { label: 'Archive', href: '/tutor/archive', icon: ArchiveBoxIcon },
];

export default function TutorLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname === '/tutor/login') {
    return <>{children}</>;
  }

  const isActive = (href: string) =>
    href === '/tutor' ? pathname === '/tutor' : pathname.startsWith(href);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/tutor" className="text-lg font-black text-gray-900 dark:text-white">
            TutorDesk
          </Link>
          <nav className="hidden sm:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive(item.href)
                    ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Page content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 pb-24 sm:pb-6">
        {children}
      </main>

      {/* Mobile bottom nav */}
      <nav className="sm:hidden fixed bottom-0 inset-x-0 z-40 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 pb-[env(safe-area-inset-bottom)]">
        <div className="grid grid-cols-5">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-semibold ${
                  active
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
