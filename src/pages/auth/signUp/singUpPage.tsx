'use client'

import { useSignUpMutation } from '@/entities/auth/api'
import { Button, Typography } from '@wandrehappen/ui-kit'
import s from './singUpPage.module.scss'
import { SignUpForm } from '@/features/auth/signup/ui'
import Link from 'next/link'
import React from 'react'
import { RegisterFormSchema } from '@/features/auth/signup/lib/useSignUpForm'

export const SingUpPage = () => {
  const [signUp, { isError }] = useSignUpMutation()

  // const { t } = useTranslation()

  const onSubmit = (data: RegisterFormSchema) => {
    signUp(data)
  }

  return (
    <div className={s.pageContainer}>
      <Typography asChild color={'light-100'} variant={'h1'}>
        <h1>Sign Up</h1>
      </Typography>
      <SignUpForm error={isError ? 'User already exists' : ''} onSubmit={onSubmit} />
      <Typography asChild color={'light-100'} variant={'regular16'} className={s.text}>
        <p>Do you have an account?</p>
      </Typography>
      <Button asChild variant={'link'}>
        <Link href={'/auth/signin'}>Sign in</Link>
      </Button>
    </div>
  )
}
