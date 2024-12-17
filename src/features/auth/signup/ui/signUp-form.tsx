import s from '@/features/auth/signup/ui/signUp-form.module.scss'
import { ControlledCheckbox, ControlledTextField } from '@/shared/ui'
import React from 'react'
import { RegisterFormSchema, useSignUpForm } from '@/features/auth/signup/lib/useSignUpForm'
import { Button, Typography } from '@wandrehappen/ui-kit'
import Link from 'next/link'

type Props = {
  onSubmit: (data: RegisterFormSchema) => void
  error: string
}

export const SignUpForm = ({ onSubmit, error }: Props) => {
  const { handleSubmit, control, watch, errors } = useSignUpForm()
  const values = watch()

  const isFormValid =
    Object.values(values).every(value => value) && Object.keys(errors).length === 0

  const formSubmit = (data: RegisterFormSchema) => {
    onSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit(formSubmit)} className={s.form}>
      <div className={s.inputsWrapper}>
        <ControlledTextField
          name={'userName'}
          placeholder={'Username'}
          control={control}
          error={error}
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
          autoComplete={'current-password'}
        />
        <ControlledTextField
          placeholder={'**********'}
          control={control}
          name="confirmPassword"
          label={'confirmPassword'}
          type={'password'}
          autoComplete={'current-password'}
        />
        <div style={{ display: 'flex' }}>
          <ControlledCheckbox
            name={'agreeTerms'}
            control={control}
            label={
              <Typography variant={'small'}>
                I agree to the{' '}
                <Link className={s.link} href="/legal/terms-of-service">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link className={s.link} href="/legal/privacy-policy">
                  Privacy Policy
                </Link>
              </Typography>
            }
          />
        </div>
      </div>
      <Button fullWidth disabled={!isFormValid}>
        Sign Up
      </Button>
    </form>
  )
}
