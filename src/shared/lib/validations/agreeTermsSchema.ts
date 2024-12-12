import { z } from 'zod'

export const agreeTermsSchema = z.object({
  agreeTerms: z.boolean({
    message: 'Agree Terms',
  }),
})
