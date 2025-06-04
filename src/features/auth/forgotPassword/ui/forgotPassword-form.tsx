import { ControlledTextField } from '@/shared/ui'
import { Button, Typography } from '@wandrehappen/ui-kit'
import React from 'react'
import { ForgotPasswordFormSchema, useForgotPasswordForm } from '../lib/useForgotPasswordForm'
import ReCAPTCHA from 'react-google-recaptcha'
import s from './forgotPassword-form.module.scss'
import { ENV } from '@/shared/config'
import Link from 'next/link'
import { ROUTES } from '@/shared/router/routes'

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
      <div className={s.recaptchaWrapper}>
        <ReCAPTCHA
          sitekey={ENV.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={onChange}
          theme={'dark'}
        />
      </div>
    </form>
  )
}
