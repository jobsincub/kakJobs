'use client'

import { useGooglePage } from '../lib/useGooglePage'

export function GooglePage() {
  const { code } = useGooglePage()

  if (!code) return null

  return <div>Processing Google authentication...</div>
}
