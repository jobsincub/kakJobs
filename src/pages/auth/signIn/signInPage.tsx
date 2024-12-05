'use client'
import { useSignInMutation } from '@/entities/auth/api'
import { type LoginFormSchema, SignInForm } from '@/features/auth/signin'
import { Button, Typography } from '@wandrehappen/ui-kit'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import s from './signInPage.module.scss'

const SignInPage = () => {
  const [signIn, { isSuccess, isError }] = useSignInMutation()
  const router = useRouter()

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
        <h1>Sign In</h1>
      </Typography>
      <SignInForm
        onSubmit={onSubmit}
        error={isError ? 'The email or password are incorrect. Try again please' : ''}
      />
      <Typography asChild color={'light-100'} variant={'regular16'} className={s.text}>
        <p>Don’t have an account?</p>
      </Typography>
      <Button variant={'link'}>Sign Up</Button>
    </div>
  )
}

export default SignInPage
