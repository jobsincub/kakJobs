'use client'

import { Button, Typography } from '@wandrehappen/ui-kit'
import React from 'react'
import arrow from './arrow-back.png'
import Image from 'next/image'
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
      <Button variant={'link'} className={s.button} asChild>
        <Typography variant={'regular14'}>
          <Image src={arrow} alt={'arrow'} style={{ width: '24px' }} />
          <Link href={'/auth/signin'}>Back to Sign Up</Link>
        </Typography>
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
