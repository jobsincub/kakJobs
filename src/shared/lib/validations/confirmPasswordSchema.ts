import { z } from 'zod'

export const confirmPasswordSchema = z.object({
  confirmPassword: z.string(),
})
