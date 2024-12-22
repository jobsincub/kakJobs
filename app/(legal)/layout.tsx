'use client'
import { Arrow, Button } from '@wandrehappen/ui-kit'
import Link from 'next/link'
import React, { type ReactNode } from 'react'
import s from './layout.module.scss'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={s.layout}>
      <Button variant={'link'} gap={12} className={s.button} asChild>
        <Link href={'/auth/signin'}>
          <Arrow /> Back to Sign Up
        </Link>
      </Button>
      <div className={s.container}>{children}</div>
    </div>
  )
}
