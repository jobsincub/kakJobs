'use client'

import { Arrow, Button, Typography } from '@wandrehappen/ui-kit'
import React from 'react'
import s from './legalLayout.module.scss'
import Link from 'next/link'

type ParagraphsType = {
  p1: string
  p2: string
  p3: string
  p4: string
  p5: string
  p6: string
  p7: string
}

type LegalLayoutType = {
  title: string
  paragraphs: ParagraphsType
}

export const LegalLayout = ({ title, paragraphs }: LegalLayoutType) => {
  const { p1, p2, p3, p4, p5, p6, p7 } = paragraphs

  return (
    <div>
      <Button variant={'icon'} asChild gap={12} className={s.button}>
        <div>
          <Arrow />
          <Link href={'/auth/signin'} style={{ color: 'white' }}>
            Back to Sign Up
          </Link>
        </div>
      </Button>
      <div className={s.textContainer}>
        <Typography variant={'h1'}>{title}</Typography>
        <Typography variant={'regular14'} className={s.description}>
          <p>{p1}</p>
          <p>{p2}</p>
          <p>{p3}</p>
          <p>{p4}</p>
          <p>{p5}</p>
          <p>{p6}</p>
          <p>{p7}</p>
        </Typography>
      </div>
    </div>
  )
}
