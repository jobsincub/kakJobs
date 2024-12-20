import { z } from 'zod'
import { useTranslation } from '@/shared/config'

export const useAgreeTermsSchema = () => {
  const {
    t: {
      shared: {
        validations: { agreeTermsSchema: schema },
      },
    },
  } = useTranslation()

  const agreeTermsSchema = z.object({
    agreeTerms: z.boolean({
      message: schema.agreeMsg,
    }),
  })

  return {
    agreeTermsSchema,
  }
}
