'use client'

import * as React from 'react'
import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useVerifyEmailMutation } from '@/entities/auth/api'
import { Button, Typography } from '@wandrehappen/ui-kit'
import Image from 'next/image'
import verificationImg from './bro.png'
import s from './verify-email.module.scss'
import Link from 'next/link'
import { useTranslation } from '@/shared/config/i18n'

export const VerifyEmailPage = () => {
  const searchParams = useSearchParams()
  const code = searchParams && searchParams.get('code')
  const { t } = useTranslation()
  const text = t.pages.auth.verifyEmail
  const [verifyEmail, { isError, isSuccess }] = useVerifyEmailMutation()
  const router = useRouter()
  console.log(router)

  useEffect(() => {
    if (code) {
      verifyEmail({ code: code })
    }
  }, [code, verifyEmail])

  useEffect(() => {
    if (isError) {
      router.push('/auth/resend-verification')
    }
  }, [isError, router])

  if (isSuccess) {
    return (
      <div className={s.container}>
        <Typography variant={'h1'}>{text.title}</Typography>
        <Typography variant={'regular16'}>{text.confirmText}</Typography>
        <div className={s.btnContainer}>
          <Button asChild variant={'primary'} className={s.button}>
            <Link href={'/auth/signin'} className={s.link}>
              {text.singInLinkText}
            </Link>
          </Button>
        </div>
        <Image src={verificationImg} alt={'verification-img'} />
      </div>
    )
  }
}
