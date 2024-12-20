'use client'

import { useSignUpMutation } from '@/entities/auth/api'
import { Button, Typography } from '@wandrehappen/ui-kit'
import s from './signUpPage.module.scss'
import { SignUpForm } from '@/features/auth/signup/ui'
import Link from 'next/link'
import React from 'react'
import { OutputSchema } from '@/features/auth/signup/lib/useSignUpForm'
import { EmailSentDialog } from '@/shared/ui'
import { useTranslation } from '@/shared/config'
import { routes } from '@/shared/router/routes'

export const SignUpPage = () => {
  const [signUp, { isError, originalArgs, isSuccess }] = useSignUpMutation()
  const email = originalArgs?.email || ''

  const {
    t: {
      pages: {
        auth: { signUpPage },
      },
    },
  } = useTranslation()

  const onSubmit = (data: OutputSchema) => {
    signUp(data)
  }

  return (
    <div className={s.pageContainer}>
      <EmailSentDialog email={email} isOpen={isSuccess} />
      <Typography asChild color={'light-100'} variant={'h1'}>
        <h1>{signUpPage.title}</h1>
      </Typography>
      <SignUpForm error={isError ? 'User already exists' : ''} onSubmit={onSubmit} />
      <div className={s.textWrapper}>
        <Typography asChild color={'light-100'} variant={'regular16'} className={s.text}>
          <p>{signUpPage.isHaveAccount}</p>
        </Typography>
        <Button asChild variant={'link'}>
          <Link href={routes.signIn}>{signUpPage.signInLinkText}</Link>
        </Button>
      </div>
    </div>
  )
}
