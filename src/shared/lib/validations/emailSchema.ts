import { z } from 'zod'
import { useTranslation } from '@/shared/config'

export const useUserEmailSchema = () => {
  const {
    t: {
      shared: {
        validations: { emailSchema: schema },
      },
    },
  } = useTranslation()

  const emailSchema = z.object({
    email: z.string().email(schema.emailValidation).default(''),
  })

  return {
    emailSchema,
  }
}
