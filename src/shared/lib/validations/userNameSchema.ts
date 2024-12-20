import { z } from 'zod'

export const userNameSchema = z.object({
  userName: z
    .string()
    .min(6, 'Minimum number of characters 6')
    .max(30, 'Maximum number of characters 30'),
})
