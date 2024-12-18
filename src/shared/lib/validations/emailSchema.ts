import { z } from 'zod'

export const emailSchema = z.object({
  email: z.string().email('The email must match the format\n example@example.com').default(''),
})
