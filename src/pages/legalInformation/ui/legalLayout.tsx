'use client'

import { Button, Typography } from '@wandrehappen/ui-kit'
import React from 'react'
import arrow from './arrow-back.png'
import Image from 'next/image'
import s from './legalLayout.module.scss'

type LegalLayoutType = {
  title: string
  description: string
}

export const LegalLayout = ({ title, description }: LegalLayoutType) => {
  return (
    <div>
      <div>
        <Button variant={'link'} className={s.button} asChild>
          <Image src={arrow} alt={'arrow'} style={{ width: '24px' }} />
          <Typography variant={'regular14'}> Back to Sign Up </Typography>
        </Button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant={'h1'}>{title}</Typography>
        <Typography variant={'regular14'}>{description}</Typography>
      </div>
    </div>
  )
}
