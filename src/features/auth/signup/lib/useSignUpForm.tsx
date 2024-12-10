'use client'
import { emailSchema, PasswordSchema } from '@/shared/lib'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { userNameSchema } from '@/features/auth/signup/lib/userNameSchema'

const signUpSchema = z.object({}).merge(userNameSchema).merge(emailSchema).merge(PasswordSchema)

export type LoginFormSchema = z.infer<typeof signUpSchema>

export const useSignUpForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { username: '', email: '', password: '' },
    mode: 'onTouched',
  })
  return { control, handleSubmit, errors }
}
