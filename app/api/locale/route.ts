import { NextResponse } from 'next/server'

type Local = 'en' | 'ru'

export async function POST(request: Request) {
  const { locale }: { locale: Local } = await request.json()

  if (!['en', 'ru'].includes(locale)) {
    return NextResponse.json({ error: 'Invalid locale' }, { status: 400 })
  }

  const response = NextResponse.json({ success: true, locale }, { status: 200 })

  response.cookies.set('i18n-locale', locale, {
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    secure: false,
    maxAge: 60 * 60 * 24 * 365,
  })

  return response
}
