'use client'
import { useSignInMutation } from '@/entities/auth/api'
import { type LoginFormSchema, SignInForm } from '@/features/auth/signin'
import { useTranslation } from '@/shared/config'
import { Button, Typography } from '@wandrehappen/ui-kit'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import s from './signInPage.module.scss'

const SignInPage = () => {
  const [signIn, { isSuccess, isError }] = useSignInMutation()

  const router = useRouter()

  const {
    t: {
      pages: {
        auth: { signInPage },
      },
    },
  } = useTranslation()

  const onSubmit = (data: LoginFormSchema) => {
    signIn(data)
  }

  useEffect(() => {
    if (isSuccess) {
      router.push('')
    }
  }, [isSuccess, router])

  return (
    <div className={s.pageContainer}>
      <Typography asChild color={'light-100'} variant={'h1'}>
        <h1>{signInPage.title}</h1>
      </Typography>
      <SignInForm
        onSubmit={onSubmit}
        error={isError ? 'The email or password are incorrect. Try again please' : ''}
      />
      <Typography asChild color={'light-100'} variant={'regular16'} className={s.text}>
        <p>{signInPage.noAccountText}</p>
      </Typography>
      <Button asChild variant={'link'}>
        <Link href={'/auth/signup'}>{signInPage.signUpLinkText}</Link>
      </Button>
    </div>
  )
}

export default SignInPage
