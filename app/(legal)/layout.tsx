'use client'
import { Arrow, Button } from '@wandrehappen/ui-kit'
import Link from 'next/link'
import React, { type ReactNode } from 'react'
import s from './layout.module.scss'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={s.layout}>
      <Button variant={'icon'} asChild gap={12} className={s.button}>
        <span>
          <Arrow />
          <Link href={'/auth/signin'} style={{ color: 'white' }}>
            Back to Sign Up
          </Link>
        </span>
      </Button>
      <div className={s.content}>{children}</div>
    </div>
  )
}
