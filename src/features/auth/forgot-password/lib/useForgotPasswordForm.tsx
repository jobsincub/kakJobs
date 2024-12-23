'use client'
import { recaptchaSchema, useEmailSchema } from '@/shared/lib'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useTranslation } from '@/shared/config'

export type ForgotPasswordFormSchema = {
  email: string
  recaptchaToken: string
}

export const useForgotPasswordForm = () => {
  const { emailSchema } = useEmailSchema()
  //const { recaptchaSchema } = usePasswordSchema()

  const forgotPasswordSchema = z.object({}).merge(emailSchema).merge(recaptchaSchema)

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
    formState: { isValid },
  } = useForm<ForgotPasswordFormSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
    mode: 'onBlur',
  })

  return { forgotPasswordForm, control, handleSubmit, isValid }
}
