'use client'
import { SignInForm } from '@/features/auth/signIn'
import { ROUTES } from '@/shared/router/routes'
import { AuthFormWrapper } from '@/shared/ui/authFormWrapper'
import { Page } from '@/widgets/page'
import { Button, Typography } from '@wandrehappen/ui-kit'
import Link from 'next/link'
import React from 'react'
import { UseSignInPage } from '../lib/useSignInPage'
import s from './signInPage.module.scss'
import { OAuthButtons } from '@/features/oauth'

export const SignInPage = () => {
  const { page, onSubmit, customError } = UseSignInPage()

  return (
    <Page mt={36} as={AuthFormWrapper}>
      <Typography asChild color={'light-100'} variant={'h1'} className={s.title}>
        <h1>{page.title}</h1>
      </Typography>
      <OAuthButtons withMarginBottom />
      <SignInForm onSubmit={onSubmit} error={customError} />
      <Typography asChild color={'light-100'} variant={'regular16'} className={s.text}>
        <p>{page.noAccountText}</p>
      </Typography>
      <Button asChild variant={'link'}>
        <Link href={ROUTES.AUTH.SIGN_UP}>{page.signUpLinkText}</Link>
      </Button>
    </Page>
  )
}
