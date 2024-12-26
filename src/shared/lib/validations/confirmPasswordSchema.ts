import { z } from 'zod'
import { useTranslation } from '@/shared/config'
import { usePasswordSchema } from '@/shared/lib'

export const useConfirmPasswordSchema = () => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[ !"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]).{6,30}$/

  const { passwordSchema } = usePasswordSchema()

  const {
    t: {
      shared: {
        validations: { passwordSchema: schema },
      },
    },
  } = useTranslation()

  const confirmPasswordSchema = z
    .object({
      confirmPassword: z
        .string()
        .min(6, schema.minLength)
        .regex(passwordRegex, schema.regexText)
        .default(''),
    })
    .merge(passwordSchema)
    .refine(data => data.password === data.confirmPassword, {
      message: schema.minLength,
      path: ['confirmPassword'],
    })

  return { confirmPasswordSchema }
}
