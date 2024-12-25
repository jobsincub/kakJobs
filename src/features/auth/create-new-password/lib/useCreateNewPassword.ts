import { useTranslation } from '@/shared/config'
import { usePasswordSchema } from '@/shared/lib'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

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
    },
  } = useTranslation()

  const newPasswordSchema = z
    .object({
      passwordConfirmation: z.string(),
    })
    .merge(passwordSchema)
    .transform(({ password, ...rest }) => ({ ...rest, newPassword: password }))
    .refine(data => data.newPassword === data.passwordConfirmation, {
      message: errorMessages,
      path: ['passwordConfirmation'],
    })

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<NewPasswordFields>({
    defaultValues: {
      newPassword: '',
      passwordConfirmation: '',
    },
    mode: 'onBlur',
    resolver: zodResolver(newPasswordSchema),
  })
  return { handleSubmit, control, isValid }
}
