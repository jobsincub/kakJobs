import { inter } from '@/app/fonts'
import { Providers } from '@/app/providers'
import { Header } from '@/widgets/header/ui'
import type { Metadata } from 'next'
import '../src/app/styles/globals.scss'
import '@wandrehappen/ui-kit/dist/style.css'
import type { ReactNode } from 'react'
import s from './layout.module.scss'

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
        <Providers>
          <Header />
          <main className={s.rootLayout}>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
