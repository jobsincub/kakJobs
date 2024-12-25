import { useTranslation } from '@/shared/config'
import { usePasswordSchema } from '@/shared/lib'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export type PasswordFields = {
  password: string
  passwordConfirmation: string
}
export type NewPasswordFields = {
  newPassword: string
  passwordConfirmation: string
}
export const useCreateNewPasswordForm = () => {
  const { passwordSchema } = usePasswordSchema()
  const {
    t: {
      pages: {
        auth: {
          createNewPasswordPage: { errorMessages },
        },
      },
      features: {
        auth: { createNewPasswordForm },
      },
    },
  } = useTranslation()

  const newPasswordSchema = z
    .object({
      passwordConfirmation: z.string(),
    })
    .merge(passwordSchema)
    .refine(data => data.password === data.passwordConfirmation, {
      message: errorMessages,
      path: ['passwordConfirmation'],
    })
    .transform(({ password, ...rest }) => ({ ...rest, newPassword: password }))

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<PasswordFields, undefined, NewPasswordFields>({
    defaultValues: {
      password: '',
      passwordConfirmation: '',
    },
    mode: 'onBlur',
    resolver: zodResolver(newPasswordSchema),
  })

  return { handleSubmit, control, isValid, createNewPasswordForm }
}
