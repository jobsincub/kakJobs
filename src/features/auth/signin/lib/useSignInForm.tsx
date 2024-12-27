'use client'
import { useTranslation } from '@/shared/config'
import { useEmailSchema, usePasswordSchema } from '@/shared/lib'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export type LoginFormSchema = {
  email: string
  password: string
}

export const useSignInForm = () => {
  const { emailSchema } = useEmailSchema()
  const { passwordSchema } = usePasswordSchema()

  const signInSchema = z.object({}).merge(emailSchema).merge(passwordSchema)

  const {
    handleSubmit,
    control,
    formState: {},
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: '', password: '' },
    mode: 'onTouched',
  })

  const {
    t: {
      features: {
        auth: { signInForm },
      },
    },
  } = useTranslation()

  return { control, handleSubmit, signInForm }
}
