'use client'

import { useVerifyEmailMutation } from '@/entities/auth/api'
import { useTranslation } from '@/shared/config/i18n'
import { Button, Typography } from '@wandrehappen/ui-kit'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import * as React from 'react'
import { useEffect } from 'react'
import verificationImg from './bro.png'
import s from './verify-email.module.scss'

export const VerifyEmailPage = () => {
  const searchParams = useSearchParams()
  const code = searchParams?.get('code')
  const {
    t: {
      pages: {
        auth: { verifyEmail: page },
      },
    },
  } = useTranslation()
  const [verifyEmail, { isError, isSuccess }] = useVerifyEmailMutation()
  const router = useRouter()

  useEffect(() => {
    if (code) {
      verifyEmail({ code })
    }
  }, [code, verifyEmail])

  useEffect(() => {
    if (isError) {
      router.push('/auth/resend-verification')
    }
  }, [isError, router])

  if (!isSuccess) {
    return
  }

  return (
    <div className={s.container}>
      <Typography variant={'h1'}>{page.title}</Typography>
      <Typography variant={'regular16'}>{page.confirmText}</Typography>
      <div className={s.btnContainer}>
        <Button asChild variant={'primary'} className={s.button}>
          <Link href={'/auth/signin'} className={s.link}>
            {page.singInLinkText}
          </Link>
        </Button>
      </div>
      <Image src={verificationImg} alt={'verification-img'} />
    </div>
  )
}
