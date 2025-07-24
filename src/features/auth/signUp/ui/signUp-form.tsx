import { OutputSchema, useSignUpForm } from '@/features/auth/signUp/lib/useSignUpForm'
import s from './signUp-form.module.scss'
import { Trans } from '@/shared/config'
import { ROUTES } from '@/shared/router/routes'
import { ControlledCheckbox, ControlledTextField } from '@/shared/ui'
import { Button, Typography } from '@wandrehappen/ui-kit'
import Link from 'next/link'
import React from 'react'

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
                    <Typography variant={'small-link'} asChild>
                      <Link href={ROUTES.AUTH.LEGAL.TERMS_OF_SERVICE}>{signUpForm.terms}</Link>
                    </Typography>
                  ),
                  2: () => (
                    <Typography variant={'small-link'} asChild>
                      <Link href={ROUTES.AUTH.LEGAL.PRIVACY_POLICY}>{signUpForm.privacy}</Link>
                    </Typography>
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
