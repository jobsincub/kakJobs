'use client'
import { useTranslation } from '@/shared/config'
import { useEmailSchema, useRecaptchaSchema } from '@/shared/lib'
import ReCAPTCHA from 'react-google-recaptcha'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useRef } from 'react'

export type ForgotPasswordFormValues = {
  email: string
  recaptcha: string
}

export const useForgotPasswordForm = () => {
  const { emailSchema } = useEmailSchema()
  const { recaptchaSchema } = useRecaptchaSchema()
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const forgotPasswordFormSchema = z.object({}).merge(emailSchema).merge(recaptchaSchema)

  const {
    t: {
      features: {
        auth: { forgotPasswordForm },
      },
    },
  } = useTranslation()

  const {
    handleSubmit,
    control,
    reset,
    register,
    setValue,
    formState: { isValid },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: { email: '', recaptcha: '' },
    mode: 'onBlur',
  })

  const onChangeReCAPTCHA = (token: string | null) => {
    setValue('recaptcha', token || '', { shouldValidate: true })
  }

  return {
    forgotPasswordForm,
    control,
    handleSubmit,
    isValid,
    reset,
    register,
    setValue,
    recaptchaRef,
    onChangeReCAPTCHA,
  }
}
