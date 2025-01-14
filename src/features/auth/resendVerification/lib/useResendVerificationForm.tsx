import { useEmailSchema } from '@/shared/lib'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export type ResendVerificationEmailField = { email: string }

export const useResendVerificationForm = () => {
  const { emailSchema } = useEmailSchema()

  const { handleSubmit, control } = useForm<ResendVerificationEmailField>({
    defaultValues: {
      email: '',
    },
    mode: 'onBlur',
    resolver: zodResolver(emailSchema),
  })

  return { control, handleSubmit }
}
