import { type LoginFormSchema } from '@/features/auth/signin'
import s from '@/features/auth/signin/ui/signIn-form.module.scss'
import { ControlledTextField } from '@/shared/ui'
import { Button, Typography } from '@wandrehappen/ui-kit'
import Link from 'next/link'
import React from 'react'
import { useSignUpForm } from '@/features/auth/signup/lib/useSignUpForm'

type Props = {
  onSubmit: (data: LoginFormSchema) => void
  error: string
}

export const SignUpForm = ({ onSubmit, error }: Props) => {
  const { handleSubmit, control } = useSignUpForm()

  const formSubmit = (data: LoginFormSchema) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(formSubmit)} className={s.form}>
      <div className={s.inputsWrapper}>
        <ControlledTextField
          name={'username'}
          placeholder={'Username'}
          control={control}
          label={'username'}
          autoComplete={'username'}
        />
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
        <ControlledTextField
          placeholder={'**********'}
          control={control}
          name="confirmPassword"
          label={'confirmPassword'}
          type={'password'}
          error={error}
          autoComplete={'current-password'}
        />
      </div>
      <Typography asChild color={'light-900'} className={s.forgotPassword}>
        <Link href={'/auth/forgot-password'}>Test</Link>
      </Typography>
      <Button fullWidth>Test</Button>
    </form>
  )
}
