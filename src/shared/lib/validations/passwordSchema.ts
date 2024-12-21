import { useTranslation } from '@/shared/config'
import { z } from 'zod'

export const usePasswordSchema = () => {
  const {
    t: {
      shared: {
        validations: { passwordSchema: schema },
      },
    },
  } = useTranslation()
  const passwordSchema = z.object({
    password: z.string().min(3, schema.minLength).default(''),
  })

  return { passwordSchema }
}
