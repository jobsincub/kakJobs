import { z } from 'zod'

export const PasswordSchema = z.object({
  password: z.string().min(3, 'Password must be at least 3 characters'),
})
