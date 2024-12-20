'use client'
import { SignInForm } from '@/features/auth/signin'
import Page from '@/widgets/page'
import { Button, Typography } from '@wandrehappen/ui-kit'
import Link from 'next/link'
import React from 'react'
import { UseSignInPage } from '../lib/useSignInPage'
import s from './signInPage.module.scss'

const SignInPage = () => {
  const { page, onSubmit, customError } = UseSignInPage()

  return (
    <Page mt={36} className={s.pageContainer}>
      <Typography asChild color={'light-100'} variant={'h1'}>
        <h1>{page.title}</h1>
      </Typography>
      <SignInForm onSubmit={onSubmit} error={customError} />
      <Typography asChild color={'light-100'} variant={'regular16'} className={s.text}>
        <p>{page.noAccountText}</p>
      </Typography>
      <Button asChild variant={'link'}>
        <Link href={'/auth/signup'}>{page.signUpLinkText}</Link>
      </Button>
    </Page>
  )
}

export default SignInPage
