import { ControlledTextField } from '@/shared/ui'
import { Button, Typography } from '@wandrehappen/ui-kit'
import React from 'react'
import { ForgotPasswordFormValues, useForgotPasswordForm } from '../lib/useForgotPasswordForm'
import ReCAPTCHA from 'react-google-recaptcha'
import s from './forgotPassword-form.module.scss'
import { ENV } from '@/shared/config'
import Link from 'next/link'
import { ROUTES } from '@/shared/router/routes'

type Props = {
  onSubmit: (data: ForgotPasswordFormValues) => void
  error?: string
  isSuccess: boolean
}

export const ForgotPasswordForm = ({ onSubmit, error, isSuccess }: Props) => {
  const {
    forgotPasswordForm,
    handleSubmit,
    control,
    isValid,
    reset,
    register,
    setValue,
    recaptchaRef,
    onChangeReCAPTCHA,
  } = useForgotPasswordForm()

  const submitHandler = (data: ForgotPasswordFormValues) => {
    onSubmit(data)

    if (isSuccess) {
      reset()
      recaptchaRef.current?.reset()
    } else if (error) {
      recaptchaRef.current?.reset()
      setValue('recaptcha', '', { shouldValidate: true })
    }
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)} className={s.form}>
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
      <Button fullWidth disabled={!isValid} className={s.sendLinkButton}>
        {isSuccess
          ? forgotPasswordForm.sendLinkAgainButtonText
          : forgotPasswordForm.sendLinkButtonText}
      </Button>
      <Button asChild variant={'link'}>
        <Link href={ROUTES.AUTH.SIGN_IN} color={'light-100'} className={s.signInLink}>
          {forgotPasswordForm.signInLinkText}
        </Link>
      </Button>
      <div className={s.recaptchaWrapper}>
        <ReCAPTCHA
          sitekey={ENV.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={onChangeReCAPTCHA}
          theme={'dark'}
        />
        <input type="hidden" {...register('recaptcha')} />
      </div>
    </form>
  )
}
