export type PaymentStatus = 'ok' | 'due' | 'late';

export function normalizeText(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim();
}

export function getPaymentStatus(sessionCount: number, paymentCount: number): PaymentStatus {
  const totalCycles = Math.floor(sessionCount / 4);
  const paidCycles = paymentCount;
  if (totalCycles <= paidCycles) return 'ok';
  return totalCycles - paidCycles > 1 ? 'late' : 'due';
}

export const PAYMENT_STATUS_STYLES: Record<PaymentStatus, string> = {
  ok: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  due: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  late: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
};
