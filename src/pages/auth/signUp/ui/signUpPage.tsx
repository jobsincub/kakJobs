'use client'

import { SignUpForm } from '@/features/auth/signUp/ui'
import { UseSignUpPage } from '@/pages/auth/signUp/lib/useSignUpPage'
import { ROUTES } from '@/shared/router/routes'
import { EmailSentDialog } from '@/shared/ui'
import { AuthFormWrapper } from '@/shared/ui/authFormWrapper'
import Page from '@/widgets/page'
import { Button, Typography } from '@wandrehappen/ui-kit'
import Link from 'next/link'
import React from 'react'
import s from './signUpPage.module.scss'

export const SignUpPage = () => {
  const { page, customError, isSuccess, email, onSubmit } = UseSignUpPage()

  return (
    <Page mt={24} as={AuthFormWrapper}>
      <EmailSentDialog email={email} isOpen={isSuccess} />
      <Typography asChild color={'light-100'} variant={'h1'}>
        <h1>{page.title}</h1>
      </Typography>
      <SignUpForm error={customError} onSubmit={onSubmit} />
      <div className={s.textWrapper}>
        <Typography asChild color={'light-100'} variant={'regular16'} className={s.text}>
          <p>{page.isHaveAccount}</p>
        </Typography>
        <Button asChild variant={'link'}>
          <Link href={ROUTES.AUTH.SIGN_IN}>{page.signInLinkText}</Link>
        </Button>
      </div>
    </Page>
  )
}
