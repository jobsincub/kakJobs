import { z } from 'zod'

export const emailSchema = z.object({
  email: z.string().email('ВЫ ВВЕЛИ НЕ ПОЧТУ').default(''),
})
