'use client'

import { Button, Typography } from '@wandrehappen/ui-kit'
import React from 'react'
import arrow from './arrow-back.png'
import Image from 'next/image'

type LegalLayoutType = {
  title: string
  description: string
}

export const LegalLayout = ({ title, description }: LegalLayoutType) => {
  return (
    <div>
      <div>
        <Button variant={'link'}>
          <Image src={arrow} alt={'arrow'} />
          <span> Back to Sign Up </span>
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
