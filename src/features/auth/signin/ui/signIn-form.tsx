import { type LoginFormSchema, useSignInForm } from '@/features/auth/signin'
import { ControlledTextField } from '@/shared/ui'
import { Button, Typography } from '@wandrehappen/ui-kit'
import Link from 'next/link'
import React from 'react'
import s from './signIn-form.module.scss'

type Props = {
  onSubmit: (data: LoginFormSchema) => void
  error: string
}

export const SignInForm = ({ onSubmit, error }: Props) => {
  const { handleSubmit, control } = useSignInForm()
  const formSubmit = (data: LoginFormSchema) => {
    onSubmit(data)
  }

  return (
    <div className={s.pageContainer}>
      <Typography color={'light-100'} variant={'h1'}>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit(formSubmit)} className={s.form}>
        <ControlledTextField control={control} name="email" label={'email'} className={s.input} />
        <ControlledTextField
          control={control}
          name="password"
          label={'password'}
          className={s.input}
          type={'password'}
          error={error}
        />
        <div className={s.contentContainer}>
          <Typography color={'light-900'} asChild className={s.link}>
            <Link href={'/auth/forgot-password'}>Forgot Password</Link>
          </Typography>
          <Typography asChild color={'light-100'} variant={'h3'} align={'center'}>
            <Button className={s.submit}>Sign In</Button>
          </Typography>
        </div>
        <Typography asChild color={'danger-100'}>
          <a href={'/'}>Don’t have an account?</a>
        </Typography>
        <Typography asChild color={'danger-100'} variant={'h3'}>
          <Link href={'/auth/signup'}>Sign Up</Link>
        </Typography>
        {/* <DevTool control={control} /> */}
      </form>
    </div>
  )
}
