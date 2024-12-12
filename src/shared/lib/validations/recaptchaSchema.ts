import { z } from 'zod'

export const recaptchaSchema = z.object({
  recaptchaToken: z.string().default(''),
})
