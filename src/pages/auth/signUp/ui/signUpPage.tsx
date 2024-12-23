'use client'

import { Button, Typography } from '@wandrehappen/ui-kit'
import s from './signUpPage.module.scss'
import { SignUpForm } from '@/features/auth/signup/ui'
import Link from 'next/link'
import React from 'react'
import { EmailSentDialog } from '@/shared/ui'
import { routes } from '@/shared/router/routes'
import Page from '@/widgets/page'
import { UseSignUpPage } from '@/pages/auth/signUp/lib/useSignUpPage'

export const SignUpPage = () => {
  const { page, customError, isSuccess, email, onSubmit } = UseSignUpPage()

  return (
    <Page mt={24} className={s.pageContainer}>
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
          <Link href={routes.signIn}>{page.signInLinkText}</Link>
        </Button>
      </div>
    </Page>
  )
}
