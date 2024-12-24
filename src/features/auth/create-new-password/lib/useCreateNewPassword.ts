// import { usePasswordSchema } from '@/shared/lib'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export type NewPasswordFields = {
  newPassword: string
  passwordConfirmation: string
}
export const useCreateNewPasswordForm = () => {
  const newPasswordSchema = z
    .object({
      newPassword: z.string().min(6).default(''),
      passwordConfirmation: z.string(),
    })
    .refine(data => data.newPassword === data.passwordConfirmation, {
      message: 'The passwords must match',
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
