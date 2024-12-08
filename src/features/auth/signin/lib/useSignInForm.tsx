'use client'
import { emailSchema, PasswordSchema } from '@/shared/lib'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const signInSchema = z.object({}).merge(emailSchema).merge(PasswordSchema)

export type LoginFormSchema = z.infer<typeof signInSchema>

export const useSignInForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: '', password: '' },
    mode: 'onTouched',
  })
  return { control, handleSubmit, errors }
}
