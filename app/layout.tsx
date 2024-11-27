import { Providers } from '@/app/providers'
import type { Metadata } from 'next'
import '../src/app/styles/globals.scss'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
