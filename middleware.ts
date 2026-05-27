import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// With Next.js SSG, prerendering middleware is no longer needed.
// All pages are statically generated at build time.
// This middleware is kept as a pass-through placeholder.

export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};
