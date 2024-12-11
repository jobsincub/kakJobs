import { z } from 'zod'

export const agreeTermsSchema = z.object({
  agreeTerms: z.boolean().refine(value => value, {
    message: 'You need to agree terms.',
  }),
})
