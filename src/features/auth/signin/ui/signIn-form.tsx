import { type LoginFormSchema, useSignInForm } from '@/features/auth/signin'
import { useTranslation } from '@/shared/config'
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

  const {
    t: {
      features: {
        auth: { signInForm },
      },
    },
  } = useTranslation()

  return (
    <form onSubmit={handleSubmit(formSubmit)} className={s.form}>
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
      <Button fullWidth>{signInForm.signInButtonText}</Button>
    </form>
  )
}
