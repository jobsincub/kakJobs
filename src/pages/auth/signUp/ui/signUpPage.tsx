'use client'

import { SignUpForm } from '@/features/auth/signUp'
import { ROUTES } from '@/shared/router/routes'
import { EmailSentDialog } from '@/shared/ui'
import { AuthFormWrapper } from '@/shared/ui/authFormWrapper'
import { Page } from '@/widgets/page'
import { Button, Typography } from '@wandrehappen/ui-kit'
import Link from 'next/link'
import React from 'react'
import { UseSignUpPage } from '../lib/useSignUpPage'
import s from './signUpPage.module.scss'
import { GoogleOAuthButton } from '@/features/oauth'

export const SignUpPage = () => {
  const { page, customError, isSuccess, email, onSubmit } = UseSignUpPage()

  return (
    <Page mt={24} as={AuthFormWrapper}>
      <EmailSentDialog email={email} isOpen={isSuccess} />
      <Typography asChild color={'light-100'} variant={'h1'} className={s.title}>
        <h1>{page.title}</h1>
      </Typography>
      <div className={s.oAuthButtons}>
        <GoogleOAuthButton />
      </div>
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
