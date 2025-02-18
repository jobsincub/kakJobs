import { NextRequest, NextResponse } from 'next/server'

const DEFAULT_LOCALE = 'en'
const COOKIE_NAME = 'i18n-locale'

export function middleware(request: NextRequest) {
  const locale = request.cookies.get(COOKIE_NAME)?.value || DEFAULT_LOCALE

  const headers = new Headers(request.headers)
  headers.set('x-locale', locale)

  const response = NextResponse.next({
    request: { headers },
  })

  if (!request.cookies.has(COOKIE_NAME)) {
    response.cookies.set(COOKIE_NAME, DEFAULT_LOCALE, {
      maxAge: 365 * 24 * 60 * 60,
      path: '/',
    })
  }

  return response
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)'],
}
