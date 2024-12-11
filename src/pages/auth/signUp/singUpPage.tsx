'use client'

import { useSignUpMutation } from '@/entities/auth/api'
import { useRouter } from 'next/navigation'
import { useTranslation } from '@/shared/config'
import { LoginFormSchema } from '@/features/auth/signin'
import { Button, Typography } from '@wandrehappen/ui-kit'
import s from './singUpPage.module.scss'
import { SignUpForm } from '@/features/auth/signup/ui'
import Link from 'next/link'
import React from 'react'

export const SingUpPage = () => {
  const [signUp, { isSuccess, isError }] = useSignUpMutation()

  const router = useRouter()

  const { t } = useTranslation()

  const onSubmit = (data: LoginFormSchema) => {
    signUp(data)
  }

  return (
    <div className={s.pageContainer}>
      <Typography asChild color={'light-100'} variant={'h1'}>
        <h1>Sign Up</h1>
      </Typography>
      <SignUpForm
        error={isError ? 'The email or password are incorrect. Try again please' : ''}
        onSubmit={onSubmit}
      />
      <Typography asChild color={'light-100'} variant={'regular16'} className={s.text}>
        <p>Do you have an account?</p>
      </Typography>
      <Button asChild variant={'link'}>
        <Link href={'/auth/signin'}>Sign in</Link>
      </Button>
    </div>
  )
}
