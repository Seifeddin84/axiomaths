'use client';

import { useEffect, useState } from 'react';
import { getLevelColor } from '@/lib/tutorLevels';
import { getPaymentStatus, normalizeText, PAYMENT_STATUS_STYLES, PaymentStatus } from '@/lib/tutorShared';

interface Student {
  id: string;
  name: string;
  level: string;
  day: string;
  session_time_start: string | null;
  session_time_end: string | null;
}

interface Session {
  id: string;
  student_id: string;
}

interface Payment {
  id: string;
  student_id: string;
}

const DAYS = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
const START_HOUR = 8;
const END_HOUR = 22;
const HOUR_HEIGHT = 64; // px
const TOTAL_HEIGHT = (END_HOUR - START_HOUR) * HOUR_HEIGHT;
const HOURS = Array.from({ length: END_HOUR - START_HOUR + 1 }, (_, i) => START_HOUR + i);

function parseTime(t: string): number | null {
  const match = /^(\d{1,2}):(\d{2})/.exec(t);
  if (!match) return null;
  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  return hours + minutes / 60;
}

function formatHour(h: number) {
  return `${String(h).padStart(2, '0')}:00`;
}

interface ScheduledStudent {
  student: Student;
  top: number;
  height: number;
  status: PaymentStatus;
}

const STACK_GAP = 2; // px gap between stacked cards sharing a time block

// Groups overlapping entries (same day, overlapping time range) and stacks
// them vertically — each gets an equal slice of the shared block's height,
// full width — instead of letting them render on top of one another.
function stackOverlaps(items: ScheduledStudent[]): ScheduledStudent[] {
  const sorted = [...items].sort((a, b) => a.top - b.top);
  const result: ScheduledStudent[] = [];

  let cluster: ScheduledStudent[] = [];
  let clusterEnd = -Infinity;

  const flushCluster = () => {
    if (cluster.length === 0) return;
    if (cluster.length === 1) {
      result.push(cluster[0]);
    } else {
      const clusterTop = Math.min(...cluster.map((c) => c.top));
      const clusterBottom = Math.max(...cluster.map((c) => c.top + c.height));
      const slotHeight = (clusterBottom - clusterTop) / cluster.length;
      cluster.forEach((item, i) => {
        result.push({
          ...item,
          top: clusterTop + i * slotHeight,
          height: Math.max(slotHeight - STACK_GAP, 16),
        });
      });
    }
    cluster = [];
  };

  for (const item of sorted) {
    if (cluster.length === 0 || item.top < clusterEnd) {
      cluster.push(item);
      clusterEnd = Math.max(clusterEnd, item.top + item.height);
    } else {
      flushCluster();
      cluster = [item];
      clusterEnd = item.top + item.height;
    }
  }
  flushCluster();

  return result;
}

export default function SchedulePage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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
          throw new Error('Failed to load schedule');
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
    loadData();
  }, []);

  if (loading) {
    return <p className="text-gray-500 dark:text-gray-400">Loading…</p>;
  }

  if (error) {
    return <p className="text-red-600 dark:text-red-400">{error}</p>;
  }

  const byDay = new Map<string, ScheduledStudent[]>(DAYS.map((d) => [d, []]));
  let unscheduledCount = 0;

  for (const student of students) {
    const day = DAYS.find((d) => normalizeText(d) === normalizeText(student.day || ''));
    const start = student.session_time_start ? parseTime(student.session_time_start) : null;
    const end = student.session_time_end ? parseTime(student.session_time_end) : null;

    if (!day || start === null || end === null || end <= start) {
      unscheduledCount += 1;
      continue;
    }

    const clampedStart = Math.max(start, START_HOUR);
    const clampedEnd = Math.min(end, END_HOUR);
    if (clampedEnd <= clampedStart) {
      unscheduledCount += 1;
      continue;
    }

    const status = getPaymentStatus(
      sessions.filter((s) => s.student_id === student.id).length,
      payments.filter((p) => p.student_id === student.id).length
    );

    byDay.get(day)!.push({
      student,
      top: (clampedStart - START_HOUR) * HOUR_HEIGHT,
      height: Math.max((clampedEnd - clampedStart) * HOUR_HEIGHT, 32),
      status,
    });
  }

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-black text-gray-900 dark:text-white">Schedule</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Weekly timetable
          {unscheduledCount > 0 && ` — ${unscheduledCount} student${unscheduledCount > 1 ? 's' : ''} without a day/time set`}
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[720px] border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-gray-900">
          {/* Header row */}
          <div className="grid" style={{ gridTemplateColumns: '56px repeat(6, 1fr)' }}>
            <div className="border-b border-r border-gray-200 dark:border-gray-800" />
            {DAYS.map((day) => (
              <div
                key={day}
                className="px-2 py-2 text-center text-xs font-bold uppercase tracking-wide text-gray-600 dark:text-gray-400 border-b border-r last:border-r-0 border-gray-200 dark:border-gray-800"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Body */}
          <div className="grid" style={{ gridTemplateColumns: '56px repeat(6, 1fr)' }}>
            {/* Time labels */}
            <div className="relative border-r border-gray-200 dark:border-gray-800" style={{ height: TOTAL_HEIGHT }}>
              {HOURS.map((h, i) => (
                <div
                  key={h}
                  className="absolute right-1.5 -translate-y-1/2 text-[10px] text-gray-400 dark:text-gray-500"
                  style={{ top: i * HOUR_HEIGHT }}
                >
                  {formatHour(h)}
                </div>
              ))}
            </div>

            {DAYS.map((day) => (
              <div
                key={day}
                className="relative border-r last:border-r-0 border-gray-200 dark:border-gray-800"
                style={{ height: TOTAL_HEIGHT }}
              >
                {HOURS.slice(0, -1).map((h, i) => (
                  <div
                    key={h}
                    className="absolute inset-x-0 border-t border-gray-100 dark:border-gray-800/60"
                    style={{ top: i * HOUR_HEIGHT }}
                  />
                ))}

                {stackOverlaps(byDay.get(day)!).map(({ student, top, height, status }) => {
                  const colors = getLevelColor(student.level);
                  return (
                    <div
                      key={student.id}
                      className={`absolute left-1 right-1 rounded-lg border px-2 py-1 overflow-hidden shadow-sm ${colors.bg} ${colors.border}`}
                      style={{ top, height }}
                    >
                      <div className="flex items-start justify-between gap-1">
                        <p className={`text-[11px] font-bold leading-tight truncate ${colors.text}`}>{student.name}</p>
                        <span
                          className={`shrink-0 px-1 py-0.5 rounded text-[8px] font-bold uppercase leading-none ${PAYMENT_STATUS_STYLES[status]}`}
                        >
                          {status}
                        </span>
                      </div>
                      <p className={`text-[10px] leading-tight truncate opacity-80 ${colors.text}`}>{student.level}</p>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
