'use client'
import { useTranslation } from '@/shared/config'
import { ROUTES } from '@/shared/router/routes'
import { Arrow, Button } from '@wandrehappen/ui-kit'
import Link from 'next/link'
import React, { type ReactNode } from 'react'
import s from './layout.module.scss'

export default function Layout({ children }: { children: ReactNode }) {
  const {
    t: {
      pages: { legal: page },
    },
  } = useTranslation()

  return (
    <main className={s.layout}>
      <Button variant={'link'} gap={12} className={s.button} asChild>
        <Link href={ROUTES.AUTH.SIGN_UP}>
          <Arrow />
          {page.layout.btnText}
        </Link>
      </Button>
      <div className={s.container}>{children}</div>
    </main>
  )
}
