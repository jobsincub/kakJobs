import { type LoginFormSchema, useSignInForm } from '@/features/auth/signin'
import { ControlledTextField } from '@/shared/ui'
import { Button, Typography } from '@wandrehappen/ui-kit'
import Link from 'next/link'
import React from 'react'
import s from './signIn-form.module.scss'

type Props = {
  onSubmit: (data: LoginFormSchema) => void
  error?: string
}

export const SignInForm = ({ onSubmit, error }: Props) => {
  const { handleSubmit, control, signInForm, isValid } = useSignInForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <div className={s.inputsWrapper}>
        <ControlledTextField
          placeholder={'Epam@epam.com'}
          control={control}
          name="email"
          label={'email'}
          autoComplete={'email'}
        />
        <ControlledTextField
          placeholder={'**********'}
          control={control}
          name="password"
          label={'password'}
          type={'password'}
          error={error}
          autoComplete={'current-password'}
        />
      </div>
      <Typography asChild color={'light-900'} className={s.forgotPassword}>
        <Link href={'/auth/forgot-password'}>{signInForm.forgotPasswordLink}</Link>
      </Typography>
      <Button disabled={!isValid} fullWidth>
        {signInForm.signInButtonText}
      </Button>
    </form>
  )
}
