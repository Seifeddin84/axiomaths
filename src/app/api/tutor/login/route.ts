import { NextRequest, NextResponse } from 'next/server';
import { TUTOR_SESSION_COOKIE, createTutorSessionToken, verifyTutorPassword } from '@/lib/tutorAuth';

const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const password = typeof body?.password === 'string' ? body.password : '';

  if (!verifyTutorPassword(password)) {
    return NextResponse.json({ error: 'Incorrect password' }, { status: 401 });
  }

  const token = await createTutorSessionToken();
  const response = NextResponse.json({ ok: true });
  response.cookies.set(TUTOR_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_MAX_AGE,
  });
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.delete(TUTOR_SESSION_COOKIE);
  return response;
}
