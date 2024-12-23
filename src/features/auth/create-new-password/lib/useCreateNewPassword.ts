import { usePasswordSchema } from '@/shared/lib'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export type NewPasswordFields = {
  newPassword: string
  passwordConfirmation: string
}
export const useCreateNewPassword = () => {
  const { passwordSchema } = usePasswordSchema()
  const newPasswordSchema = z
    .object({
      passwordConfirmation: z.string(),
    })
    .merge(passwordSchema)
    .refine(data => data.password === data.passwordConfirmation, {
      message: 'The passwords must match',
      path: ['passwordConfirmation'],
    })

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<NewPasswordFields>({
    defaultValues: {
      newPassword: '',
      passwordConfirmation: '',
    },
    mode: 'onChange',
    resolver: zodResolver(newPasswordSchema),
  })
  return { handleSubmit, control, errors }
}
