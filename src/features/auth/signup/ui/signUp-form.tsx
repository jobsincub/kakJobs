import s from '@/features/auth/signup/ui/signUp-form.module.scss'
import { ControlledCheckbox, ControlledTextField } from '@/shared/ui'
import React from 'react'
import {
  InputSchema,
  RegisterFormSchema,
  useSignUpForm,
} from '@/features/auth/signup/lib/useSignUpForm'
import { Button, Typography } from '@wandrehappen/ui-kit'
import Link from 'next/link'

type Props = {
  onSubmit: (data: RegisterFormSchema) => void
  error: string
}

export const SignUpForm = ({ onSubmit, error }: Props) => {
  const { handleSubmit, control, watch } = useSignUpForm()
  const agreeTerms = watch('agreeTerms')

  console.log(agreeTerms)

  const formSubmit = (data: InputSchema) => {
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
      <Button fullWidth disabled={!agreeTerms}>
        Sign Up
      </Button>
    </form>
  )
}
