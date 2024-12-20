'use client'
import { useEmailSchema, usePasswordSchema } from '@/shared/lib'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useUserNameSchema } from '@/shared/lib/validations/userNameSchema'
import { useConfirmPasswordSchema } from '@/shared/lib/validations/confirmPasswordSchema'
import { useAgreeTermsSchema } from '@/shared/lib/validations/agreeTermsSchema'
import { useTranslation } from '@/shared/config'

type InputSchema = {
  userName: string
  email: string
  password: string
  confirmPassword: string
  agreeTerms: boolean
}

export type OutputSchema = {
  userName: string
  email: string
  password: string
}

export const useSignUpForm = () => {
  const { userNameSchema } = useUserNameSchema()
  const { emailSchema } = useEmailSchema()
  const { passwordSchema } = usePasswordSchema()
  const { agreeTermsSchema } = useAgreeTermsSchema()
  const { confirmPasswordSchema } = useConfirmPasswordSchema()

  const {
    t: {
      shared: {
        validations: { comparePassError: schema },
      },
    },
  } = useTranslation()

  const signUpSchema = z
    .object({})
    .merge(userNameSchema)
    .merge(emailSchema)
    .merge(passwordSchema)
    .merge(agreeTermsSchema)
    .merge(confirmPasswordSchema)
    .refine(data => data.password === data.confirmPassword, {
      message: schema.passError,
      path: ['confirmPassword'],
    })
    .transform(({ userName, email, password }) => ({
      userName,
      email,
      password,
    }))

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<InputSchema, undefined, OutputSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onTouched',
  })
  return { control, handleSubmit, errors, watch }
}
