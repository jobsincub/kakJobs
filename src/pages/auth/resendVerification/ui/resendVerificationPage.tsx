'use client'
import { ResendButton, ResendVerificationForm } from '@/features/auth/resendVerification'
import { ROUTES } from '@/shared/router/routes'
import { EmailSentDialog } from '@/shared/ui'
import { Page } from '@/widgets/page'
import { Button, Typography } from '@wandrehappen/ui-kit'
import Image from 'next/image'
import Link from 'next/link'
import { useResendVerificationPage } from '../lib/useResendVerificationPage'
import rafiki from './assets/rafiki.png'
import s from './resendVerificationPage.module.scss'

export const ResendVerificationEmailPage = () => {
  const {
    isSuccess,
    onResendForm,
    formEmail,
    customError,
    page,
    queryEmail,
    onResendQuery,
    isAlreadyActivated,
  } = useResendVerificationPage()

  return (
    <Page mt={36} className={s.container}>
      {isAlreadyActivated ? (
        <>
          <Typography asChild color={'light-100'} variant={'h1'}>
            <h1>{page.alreadyActivated}</h1>
          </Typography>
          <Button asChild variant={'primary'} className={s.button}>
            <Link href={ROUTES.AUTH.SIGN_IN}>{page.singInLinkText}</Link>
          </Button>
        </>
      ) : (
        <>
          <EmailSentDialog email={queryEmail ?? formEmail} isOpen={isSuccess} />
          <Typography asChild color={'light-100'} variant={'h1'}>
            <h1>{page.title}</h1>
          </Typography>
          <Typography asChild color={'light-100'} variant={'regular16'} className={s.text}>
            <p>{page.text}</p>
          </Typography>
          {queryEmail ? (
            <>
              <ResendButton className={s.button} onClick={onResendQuery} />
              <Typography variant={'regular14'} color={'danger-900'} asChild>
                <p>{customError}</p>
              </Typography>
            </>
          ) : (
            <ResendVerificationForm onSubmit={onResendForm} error={customError} />
          )}
          <Image src={rafiki} alt={'verification'} className={s.img} priority={true} />
        </>
      )}
    </Page>
  )
}
