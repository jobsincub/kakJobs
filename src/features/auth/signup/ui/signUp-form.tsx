import { type LoginFormSchema } from '@/features/auth/signin'
import s from '@/features/auth/signin/ui/signIn-form.module.scss'
import { ControlledCheckbox, ControlledTextField } from '@/shared/ui'
import React from 'react'
import { useSignUpForm } from '@/features/auth/signup/lib/useSignUpForm'
import { Button } from '@wandrehappen/ui-kit'

type Props = {
  onSubmit: (data: LoginFormSchema) => void
  error: string
}

export const SignUpForm = ({ onSubmit, error }: Props) => {
  const { handleSubmit, control } = useSignUpForm()

  const formSubmit = (data: LoginFormSchema) => {
    console.log(data)
    // onSubmit(data)
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
        <ControlledCheckbox name={'agreeTerms'} control={control} />
      </div>
      <Button fullWidth>Sign Up</Button>
    </form>
  )
}
