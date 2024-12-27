'use client'
import { ForgotPasswordForm } from '@/features/auth/forgot-password'
import { EmailSentDialog } from '@/shared/ui'
import Page from '@/widgets/page'
import { Button, Typography } from '@wandrehappen/ui-kit'
import Link from 'next/link'
import React from 'react'
import { UseForgotPasswordPage } from '../lib/useForgotPasswordPage'
import s from './forgotPasswordPage.module.scss'

const ForgotPasswordPage = () => {
  const { page, onSubmit, customError, email, isSuccess } = UseForgotPasswordPage()

  return (
    <Page mt={36} className={s.pageContainer}>
      <EmailSentDialog email={email} isOpen={isSuccess} />
      <Typography asChild color={'light-100'} variant={'h1'}>
        <h1>{page.title}</h1>
      </Typography>
      <ForgotPasswordForm onSubmit={onSubmit} error={customError} isSuccess={isSuccess} />
      <Button asChild variant={'link'}>
        <Link href={'/auth/signin'} color={'light-100'} className={s.signIn}>
          {page.signInLinkText}
        </Link>
      </Button>
    </Page>
  )
}

export default ForgotPasswordPage
