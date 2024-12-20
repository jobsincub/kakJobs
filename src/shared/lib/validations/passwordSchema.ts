import { z } from 'zod'
import { useTranslation } from '@/shared/config'

export const usePasswordSchema = () => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[ !"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]).{6,30}$/

  const {
    t: {
      shared: {
        validations: { passwordSchema: schema },
      },
    },
  } = useTranslation()

  const passwordSchema = z.object({
    password: z.string().min(6, schema.minValue).regex(passwordRegex, schema.regexText).default(''),
  })

  return {
    passwordSchema,
  }
}
