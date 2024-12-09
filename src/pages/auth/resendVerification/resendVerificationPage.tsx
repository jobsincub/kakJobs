'use client'
import { Typography } from '@wandrehappen/ui-kit'
import Image from 'next/image'
import rafiki from './assets/rafiki.png'
import s from './resendVerificationPage.module.scss'
import { useResendVerificationEmailMutation } from '@/entities/auth/api'
import {
  ResendVerificationEmailField,
  ResendVerificationForm,
} from '@/features/auth/resend-verification'

const ResendVerificationEmailPage = () => {
  const [resendVerificationEmail] = useResendVerificationEmailMutation()

  const onResend = (data: ResendVerificationEmailField) => {
    resendVerificationEmail(data)
  }

  return (
    <div className={s.container}>
      <Typography asChild color={'light-100'} variant={'h1'}>
        <h1>Email verification link expired</h1>
      </Typography>
      <Typography asChild color={'light-100'} variant={'regular16'} className={s.text}>
        <p>
          Looks like the verification link has expired. Not to worry, we can send the link again
        </p>
      </Typography>
      <ResendVerificationForm onSubmit={onResend} />
      <Image src={rafiki} alt={'verification'} />
    </div>
  )
}

export default ResendVerificationEmailPage
