'use client'
import { emailSchema } from '@/shared/lib'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const forgotPasswordSchema = z.object({}).merge(emailSchema)

export type ForgotPasswordFormSchema = z.infer<typeof forgotPasswordSchema>

export const useForgotPasswordForm = () => {
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
