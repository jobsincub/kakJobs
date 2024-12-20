import { z } from 'zod'

export const useConfirmPasswordSchema = () => {
  const confirmPasswordSchema = z.object({
    confirmPassword: z.string(),
  })

  return { confirmPasswordSchema }
}
