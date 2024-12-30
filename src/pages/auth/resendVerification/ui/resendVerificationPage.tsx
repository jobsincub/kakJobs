'use client'
import { ResendVerificationForm } from '@/features/auth/resendVerification'
import { EmailSentDialog } from '@/shared/ui'
import Page from '@/widgets/page'
import { Typography } from '@wandrehappen/ui-kit'
import Image from 'next/image'
import { useResendVerificationPage } from '../lib/useResendVerificationPage'
import rafiki from './assets/rafiki.png'
import s from './resendVerificationPage.module.scss'

const ResendVerificationEmailPage = () => {
  const { isSuccess, onResend, email, customError, page } = useResendVerificationPage()

  return (
    <Page mt={36} className={s.container}>
      <EmailSentDialog email={email} isOpen={isSuccess} />
      <Typography asChild color={'light-100'} variant={'h1'}>
        <h1>{page.title}</h1>
      </Typography>
      <Typography asChild color={'light-100'} variant={'regular16'} className={s.text}>
        <p>{page.text}</p>
      </Typography>
      <ResendVerificationForm onSubmit={onResend} error={customError} />
      <Image src={rafiki} alt={'verification'} className={s.img} />
    </Page>
  )
}

export default ResendVerificationEmailPage
