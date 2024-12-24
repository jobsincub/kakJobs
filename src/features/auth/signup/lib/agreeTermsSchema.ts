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
    agreeTerms: z
      .boolean({
        required_error: 'Checkbox is required',
        message: schema.agreeMsg,
      })
      .refine(val => val, {
        message: 'Checkbox is required',
      }),
  })

  return {
    agreeTermsSchema,
  }
}
