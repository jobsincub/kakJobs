'use client'
import { emailSchema, passwordSchema } from '@/shared/lib'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { userNameSchema } from '@/features/auth/signup/lib/userNameSchema'
import { confirmPasswordSchema } from '@/shared/lib/validations/confirmPasswordSchema'
import { agreeTermsSchema } from '@/shared/lib/validations/agreeTermsSchema'

const signUpSchema = z
  .object({})
  .merge(userNameSchema)
  .merge(emailSchema)
  .merge(passwordSchema)
  .merge(agreeTermsSchema)
  .merge(confirmPasswordSchema)
  .refine(data => data.password === data.confirmPassword, {
    message: 'The passwords must match',
    path: ['confirmPassword'],
  })
  .transform(({ userName, email, password }) => ({
    userName,
    email,
    password,
  }))

export type InputSchema = z.input<typeof signUpSchema>

export type RegisterFormSchema = z.output<typeof signUpSchema>

export const useSignUpForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<InputSchema, undefined, RegisterFormSchema>({
    resolver: zodResolver(signUpSchema),
    mode: 'onSubmit',
  })
  return { control, handleSubmit, errors, watch }
}
