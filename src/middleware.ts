import next from 'next';
import { NextResponse } from 'next/server';

export function middleware(
  request: Request,
  response: Response,
  next: () => void
) {
  console.log('Request URL:', request.url);
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
