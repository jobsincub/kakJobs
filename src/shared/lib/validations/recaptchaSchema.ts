import { z } from 'zod'
import { useTranslation } from '@/shared/config'

export const useRecaptchaSchema = () => {
  const {
    t: {
      shared: {
        validations: { recaptchaSchema: schema },
      },
    },
  } = useTranslation()

  const recaptchaSchema = z.object({
    recaptcha: z.string().min(1, schema.recaptchaValidation).default(''),
  })

  return {
    recaptchaSchema,
  }
}
