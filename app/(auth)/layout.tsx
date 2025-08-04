import type { ReactNode } from 'react'
import { RedirectIfAuthenticated } from '@/features/auth/guards/RedirectIfAuthenticated'

export default function AuthLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return <RedirectIfAuthenticated>{children}</RedirectIfAuthenticated>
}
