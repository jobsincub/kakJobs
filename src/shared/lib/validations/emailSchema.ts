import { useTranslation } from '@/shared/config'
import { z } from 'zod'

export const useEmailSchema = () => {
  const {
    t: {
      shared: {
        validations: { emailValidateSchema: schema },
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
