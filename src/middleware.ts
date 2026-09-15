import { NextRequest, NextResponse } from 'next/server';
import { TUTOR_SESSION_COOKIE, verifyTutorSessionToken } from '@/lib/tutorAuth';

export const config = {
  matcher: ['/tutor/:path*', '/api/tutor/:path*'],
};

const PUBLIC_PATHS = new Set(['/tutor/login', '/api/tutor/login']);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_PATHS.has(pathname)) {
    return NextResponse.next();
  }

  const token = request.cookies.get(TUTOR_SESSION_COOKIE)?.value;
  const isAuthenticated = await verifyTutorSessionToken(token);

  if (isAuthenticated) {
    return NextResponse.next();
  }

  if (pathname.startsWith('/api/tutor')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const loginUrl = new URL('/tutor/login', request.url);
  loginUrl.searchParams.set('from', pathname);
  return NextResponse.redirect(loginUrl);
}
