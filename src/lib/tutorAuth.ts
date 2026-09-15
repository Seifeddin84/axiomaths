// Shared by middleware.ts (edge runtime) and the /api/tutor/login route,
// so this only uses Web Crypto (crypto.subtle), not node:crypto.

export const TUTOR_SESSION_COOKIE = 'tutor_session';
const SESSION_PAYLOAD = 'tutor-authenticated';

const encoder = new TextEncoder();

function getSecret(): string | undefined {
  return process.env.TUTOR_PASSWORD;
}

async function getKey(secret: string) {
  return crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
}

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

export function verifyTutorPassword(password: string): boolean {
  const secret = getSecret();
  return !!secret && password === secret;
}

export async function createTutorSessionToken(): Promise<string> {
  const secret = getSecret();
  if (!secret) {
    throw new Error('TUTOR_PASSWORD is not set');
  }
  const key = await getKey(secret);
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(SESSION_PAYLOAD));
  return `${SESSION_PAYLOAD}.${toHex(signature)}`;
}

export async function verifyTutorSessionToken(token: string | undefined): Promise<boolean> {
  const secret = getSecret();
  if (!secret || !token) return false;

  const [payload, signatureHex] = token.split('.');
  if (payload !== SESSION_PAYLOAD || !signatureHex) return false;

  const key = await getKey(secret);
  const expectedSignature = await crypto.subtle.sign('HMAC', key, encoder.encode(payload));
  return timingSafeEqual(toHex(expectedSignature), signatureHex);
}
