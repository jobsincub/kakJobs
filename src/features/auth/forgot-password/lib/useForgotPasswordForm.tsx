'use client'
import { recaptchaSchema, useEmailSchema } from '@/shared/lib'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export type ForgotPasswordFormSchema = {
  email: string
  recaptchaToken: string
}

export const useForgotPasswordForm = () => {
  const { emailSchema } = useEmailSchema()
  //const { recaptchaSchema } = usePasswordSchema()

  const forgotPasswordSchema = z.object({}).merge(emailSchema).merge(recaptchaSchema)

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ForgotPasswordFormSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
    mode: 'onBlur',
  })
  return { control, handleSubmit, errors }
}
