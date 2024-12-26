'use client'
import { Arrow, Button } from '@wandrehappen/ui-kit'
import Link from 'next/link'
import React, { type ReactNode } from 'react'
import s from './layout.module.scss'
import { routes } from '@/shared/router/routes'
import { useTranslation } from '@/shared/config'

export default function Layout({ children }: { children: ReactNode }) {
  const {
    t: {
      pages: { legal: page },
    },
  } = useTranslation()

  return (
    <div className={s.layout}>
      <Button variant={'link'} gap={12} className={s.button} asChild>
        <Link href={routes.signUp}>
          <Arrow />
          {page.layout.btnText}
        </Link>
      </Button>
      <div className={s.container}>{children}</div>
    </div>
  )
}
