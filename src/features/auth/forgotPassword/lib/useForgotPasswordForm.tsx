'use client'
import { useTranslation } from '@/shared/config'
import { useEmailSchema, useRecaptchaSchema } from '@/shared/lib'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useRef } from 'react'
import { ReCAPTCHA } from '@wandrehappen/ui-kit'

export type ForgotPasswordFormValues = {
  email: string
  recaptcha: string
}

export const useForgotPasswordForm = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const { emailSchema } = useEmailSchema()
  const { recaptchaSchema } = useRecaptchaSchema()

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
    formState: { isValid },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: { email: '', recaptcha: '' },
    mode: 'onBlur',
  })

  return {
    forgotPasswordForm,
    control,
    handleSubmit,
    isValid,
    reset,
    recaptchaRef,
  }
}
