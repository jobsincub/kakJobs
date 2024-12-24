import { z } from 'zod'
import { useTranslation } from '@/shared/config'

export const useUserNameSchema = () => {
  const {
    t: {
      shared: {
        validations: { usernameSchema: schema },
      },
    },
  } = useTranslation()

  const userNameSchema = z.object({
    userName: z.string().min(6, schema.minValue).max(30, schema.maxValue),
  })

  return {
    userNameSchema,
  }
}
