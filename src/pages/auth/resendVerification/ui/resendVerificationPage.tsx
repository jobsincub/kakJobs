'use client'
import { Typography } from '@wandrehappen/ui-kit'
import Image from 'next/image'
import rafiki from './assets/rafiki.png'
import s from './resendVerificationPage.module.scss'
import { ResendVerificationForm } from '@/features/auth/resend-verification'
import { EmailSentDialog } from '@/shared/ui'
import { useResendVerificationPage } from '../lib/useResendVerificationPage'
import Page from '@/widgets/page'

const ResendVerificationEmailPage = () => {
  const { onResend, email, isSuccess } = useResendVerificationPage()

  return (
    <Page mt={36} className={s.container}>
      <EmailSentDialog email={email} isOpen={isSuccess} />
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
    </Page>
  )
}

export default ResendVerificationEmailPage
