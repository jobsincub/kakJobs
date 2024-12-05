'use client'

import * as React from 'react'
import { useSearchParams } from 'next/navigation'
import { useVerifyEmailMutation } from '@/entities/auth/api'
import { useEffect } from 'react'
import { Typography } from '@wandrehappen/ui-kit'
import Image from 'next/image'
import verificationImg from './../../assets/images/bro.png'
import s from './verify-email.module.scss'

export const VerifyEmailPage = () => {
  const searchParams = useSearchParams()
  const code = searchParams && searchParams.get('code')

  const [verifyEmail] = useVerifyEmailMutation()

  useEffect(() => {
    if (code) {
      verifyEmail(JSON.stringify({ code }))
    }
  }, [code, verifyEmail])
  return (
    <div className={s.container}>
      <Typography variant={'h1'}>Congratulations!</Typography>
      <Typography variant={'regular16'}>Your email has been confirmed</Typography>
      <div className={s.btnContainer}>
        <button style={{ color: 'white', backgroundColor: 'pink' }}>Sign In</button>
      </div>
      <Image src={verificationImg} alt={'verification-img'} />
    </div>
  )
}
