'use client'
import { emailSchema, passwordSchema } from '@/shared/lib'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { userNameSchema } from '@/features/auth/signup/lib/userNameSchema'
import { confirmPasswordSchema } from '@/shared/lib/validations/confirmPasswordSchema'

const signUpSchema = z
  .object({})
  .merge(userNameSchema)
  .merge(emailSchema)
  .merge(passwordSchema)
  .merge(confirmPasswordSchema)

export type RegisterFormSchema = z.infer<typeof signUpSchema>

export const useSignUpForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { username: '', email: '', password: '', confirmPassword: '' },
    mode: 'onTouched',
  })
  return { control, handleSubmit, errors }
}
