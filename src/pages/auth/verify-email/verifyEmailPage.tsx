'use client'

import * as React from 'react'
import { useSearchParams } from 'next/navigation'
import { useVerifyEmailMutation } from '@/entities/auth/api'
import { useEffect } from 'react'
import { Button, Typography } from '@wandrehappen/ui-kit'
import Image from 'next/image'
import verificationImg from './bro.png'
import s from './verify-email.module.scss'
import Link from 'next/link'

export const VerifyEmailPage = () => {
  const searchParams = useSearchParams()
  const code = searchParams && searchParams.get('code')

  const [verifyEmail] = useVerifyEmailMutation()

  useEffect(() => {
    if (code) {
      verifyEmail({ code: code })
    }
  }, [code, verifyEmail])
  return (
    <div className={s.container}>
      <Typography variant={'h1'}>Congratulations!</Typography>
      <Typography variant={'regular16'}>Your email has been confirmed</Typography>
      <div className={s.btnContainer}>
        <Button asChild variant={'link'}>
          <Link href={'/auth/signin'}>Sign In</Link>
        </Button>
      </div>
      <Image src={verificationImg} alt={'verification-img'} />
    </div>
  )
}
