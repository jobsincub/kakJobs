'use client'

import { ForgotPasswordFormSchema, useForgotPasswordForm } from '@/features/auth/forgot-password'
import { ControlledReCaptcha, ControlledTextField } from '@/shared/ui'
import React from 'react'
import s from '@/features/auth/forgot-password/ui/forgotPassword-form.module.scss'
import { Button, Typography } from '@wandrehappen/ui-kit'
import { useTranslation } from '@/shared/config'

type Props = {
  onSubmit: (data: ForgotPasswordFormSchema) => void
  error?: string
  isSuccess: boolean
}

export const ForgotPasswordForm = ({ onSubmit, error, isSuccess }: Props) => {
  const { handleSubmit, control } = useForgotPasswordForm()

  const formSubmit = (data: ForgotPasswordFormSchema) => {
    if (data.recaptchaToken) {
      onSubmit(data)
    }
  }

  const {
    t: {
      features: {
        auth: { forgotPasswordForm },
      },
    },
  } = useTranslation()

  return (
    <form onSubmit={handleSubmit(formSubmit)} className={s.form}>
      <ControlledTextField
        placeholder={'Epam@epam.com'}
        control={control}
        name="email"
        label={forgotPasswordForm.emailLabel}
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
      <Button fullWidth>
        {isSuccess
          ? forgotPasswordForm.sendLinkAgainButtonText
          : forgotPasswordForm.sendLinkButtonText}
      </Button>
      <ControlledReCaptcha control={control} name={'recaptchaToken'} />
    </form>
  )
}
