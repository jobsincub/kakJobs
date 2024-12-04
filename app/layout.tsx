import { inter } from '@/app/fonts/fonts'
import { StoreProvider } from '@/app/providers/StoreProvider'
import type { Metadata } from 'next'
import '../src/app/styles/globals.scss'
import '@wandrehappen/ui-kit/dist/style.css'
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
      <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  )
}
