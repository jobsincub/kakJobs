import type { ReactNode } from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { ENV } from '@/shared/config'

export function GoogleProvider({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <GoogleOAuthProvider clientId={ENV.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      {children}
    </GoogleOAuthProvider>
  )
}
