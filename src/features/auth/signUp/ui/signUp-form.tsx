'use client'
import { useSignUpMutation } from '@/entities/auth/api'
import { type LoginFormSchema, useSignInForm } from '@/features/auth/signin'
import { ControlledTextField } from '@/shared/ui'
import { Button, Typography } from '@wandrehappen/ui-kit'
import Link from 'next/link'
import React from 'react'
import s from 'src/features/auth/signUp/ui/signUp-form.module.scss'

export const SignUpForm = () => {
  const { handleSubmit, control } = useSignInForm()
  const [signUp] = useSignUpMutation()

  const onSubmit = (data: LoginFormSchema) => {
    console.log(data)
    signUp(data)
  }

  return (
    <div className={s.pageContainer}>
      <Typography color={'light'} variant={'h1'}>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <ControlledTextField control={control} name="email" label={'email'} className={s.input} />
        <ControlledTextField
          control={control}
          name="password"
          label={'password'}
          className={s.input}
          type={'password'}
        />
        <div className={s.contentContainer}>
          <Link href={'/auth/forgot-password'} className={s.link}>
            <Typography className={s.forgotPassword}>Forgot Password</Typography>
          </Link>

          <Button className={s.submit}>
            <Typography color={'light'} variant={'h3'}>
              Sign In
            </Typography>
          </Button>
        </div>
        <Typography>Don’t have an account?</Typography>
        {/* <DevTool control={control} /> */}
      </form>
    </div>
  )
}
