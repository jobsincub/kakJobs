import { StoreProvider } from '@/app/providers/ReduxProvider'
import type { Metadata } from 'next'
import '../src/app/styles/globals.scss'
import '@wandrehappen/ui-kit/dist/style.css'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StoreProvider>
  )
}
