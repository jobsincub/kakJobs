import { z } from 'zod'
import { passwordSchema } from '@/shared/lib'

export const confirmPasswordSchema = z.object({
  confirmPassword: passwordSchema.shape.password,
})
