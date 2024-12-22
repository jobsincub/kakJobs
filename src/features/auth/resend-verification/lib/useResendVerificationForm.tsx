import { emailSchema } from '@/shared/lib'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export type ResendVerificationEmailField = z.infer<typeof emailSchema>
export const useResendVerificationForm = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: '',
      capture: '',
    },
    mode: 'onBlur',
    resolver: zodResolver(emailSchema),
  })
  return { control, handleSubmit }
}
