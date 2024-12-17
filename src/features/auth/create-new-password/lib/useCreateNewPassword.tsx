import { PasswordSchema } from '@/shared/lib'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const newPasswordSchema = z
  .object({
    newPassword: PasswordSchema,
    passwordConfirmation: z.string(),
  })
  .refine(data => data.newPassword === data.passwordConfirmation, {
    message: 'The passwords must match',
    path: ['passwordConfirmation'],
  })

export type NewPasswordFields = z.infer<typeof newPasswordSchema>
export const useCreateNewPassword = () => {
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
