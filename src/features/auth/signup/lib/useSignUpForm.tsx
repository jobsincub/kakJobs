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

export type RegisterFormSchema = z.infer<typeof signUpSchema>

export const useSignUpForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: 'asdsadasdas',
      email: 'Hello@Mail.ru',
      password: '123456Aa$',
      confirmPassword: '123456Aa$',
      agreeTerms: true,
    },
    mode: 'onTouched',
  })
  return { control, handleSubmit, errors }
}
