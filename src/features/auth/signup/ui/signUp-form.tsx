import s from '@/features/auth/signup/ui/signUp-form.module.scss'
import { ControlledCheckbox, ControlledTextField } from '@/shared/ui'
import React from 'react'
import { OutputSchema, useSignUpForm } from '@/features/auth/signup/lib/useSignUpForm'
import { Button, Typography } from '@wandrehappen/ui-kit'
import Link from 'next/link'
import { routes } from '@/shared/router/routes'
import { Trans } from '@/shared/config'

type Props = {
  onSubmit: (data: OutputSchema) => void
  error?: string
}

export const SignUpForm = ({ onSubmit, error }: Props) => {
  const { handleSubmit, control, isValid, signUpForm } = useSignUpForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
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
              <Trans
                text={signUpForm.checkBoxText}
                tags={{
                  1: () => (
                    <Link className={s.link} href={routes.legal.termsOfService}>
                      {signUpForm.terms}
                    </Link>
                  ),
                  2: () => (
                    <Link className={s.link} href={routes.legal.privacyPolicy}>
                      {signUpForm.privacy}
                    </Link>
                  ),
                }}
              />
            </Typography>
          }
        />
      </div>
      <Button fullWidth disabled={!isValid}>
        {signUpForm.signUpLinkText}
      </Button>
    </form>
  )
}
