'use client'

import { ForgotPasswordFormSchema, useForgotPasswordForm } from '@/features/auth/forgotPassword'
import { ControlledReCaptcha, ControlledTextField } from '@/shared/ui'
import { Button, Typography } from '@wandrehappen/ui-kit'
import React from 'react'
import s from './forgotPassword-form.module.scss'

type Props = {
  onSubmit: (data: ForgotPasswordFormSchema) => void
  error?: string
  isSuccess: boolean
}

export const ForgotPasswordForm = ({ onSubmit, error, isSuccess }: Props) => {
  const { forgotPasswordForm, handleSubmit, control, isValid } = useForgotPasswordForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <ControlledTextField
        placeholder={'Epam@epam.com'}
        control={control}
        name="email"
        label={'email'}
        error={error}
        autoComplete={'email'}
      />

      <div className={s.textWrapper}>
        <Typography color={'light-900'} variant={'small'}>
          {forgotPasswordForm.enterYourEmailText}
        </Typography>
        {isSuccess && (
          <Typography color={'light-100'} variant={'small'}>
            {forgotPasswordForm.sentLinkText}
            <br />
            {forgotPasswordForm.sendLinkAgainText}
          </Typography>
        )}
      </div>
      <Button fullWidth disabled={!isValid}>
        {isSuccess
          ? forgotPasswordForm.sendLinkAgainButtonText
          : forgotPasswordForm.sendLinkButtonText}
      </Button>
      <ControlledReCaptcha control={control} name={'recaptchaToken'} />
    </form>
  )
}
