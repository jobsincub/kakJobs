import s from '@/features/auth/signup/ui/signUp-form.module.scss'
import { ControlledCheckbox, ControlledTextField } from '@/shared/ui'
import React from 'react'
import { OutputSchema, useSignUpForm } from '@/features/auth/signup/lib/useSignUpForm'
import { Button, Typography } from '@wandrehappen/ui-kit'
import Link from 'next/link'
import { useTranslation } from '@/shared/config'
import { routes } from '@/shared/router/routes'

type Props = {
  onSubmit: (data: OutputSchema) => void
  error?: string
}

export const SignUpForm = ({ onSubmit, error }: Props) => {
  const { handleSubmit, control, watch, errors } = useSignUpForm()
  const values = watch()

  const isFormValid =
    Object.values(values).every(value => value) && Object.keys(errors).length === 0

  const formSubmit = (data: OutputSchema) => {
    onSubmit(data)
  }

  const {
    t: {
      features: {
        auth: { signUpForm },
      },
    },
  } = useTranslation()

  return (
    <form onSubmit={handleSubmit(formSubmit)} className={s.form}>
      <div className={s.inputsWrapper}>
        <ControlledTextField
          name={'userName'}
          placeholder={'Username'}
          control={control}
          error={error}
          label={'Username'}
          autoComplete={'username'}
        />
        <ControlledTextField
          placeholder={'Epam@epam.com'}
          control={control}
          name="email"
          label={'Email'}
          autoComplete={'email'}
        />
        <ControlledTextField
          placeholder={'**********'}
          control={control}
          name="password"
          label={'Password'}
          type={'password'}
          autoComplete={'current-password'}
        />
        <ControlledTextField
          placeholder={'**********'}
          control={control}
          name="confirmPassword"
          label={'Password confirmation'}
          type={'password'}
          autoComplete={'current-password'}
        />
        <ControlledCheckbox
          name={'agreeTerms'}
          control={control}
          className={s.checkBox}
          label={
            <Typography variant={'small'}>
              {signUpForm.agreeStart}{' '}
              <Link className={s.link} href={routes.legal.termsOfService}>
                {signUpForm.terms}
              </Link>{' '}
              {signUpForm.agreeMid}{' '}
              <Link className={s.link} href={routes.legal.privacyPolicy}>
                {signUpForm.privacy}
              </Link>
            </Typography>
          }
        />
      </div>
      <Button fullWidth disabled={!isFormValid}>
        {signUpForm.signUpLinkText}
      </Button>
    </form>
  )
}
