import { z } from 'zod'
import { useTranslation } from '@/shared/config'

export const useUserNameSchema = () => {
  const {
    t: {
      features: {
        auth: { signUpForm: schema },
      },
    },
  } = useTranslation()

  const userNameSchema = z.object({
    userName: z
      .string()
      .min(6, schema.usernameSchema.minValue)
      .max(30, schema.usernameSchema.maxValue),
  })

  return {
    userNameSchema,
  }
}
