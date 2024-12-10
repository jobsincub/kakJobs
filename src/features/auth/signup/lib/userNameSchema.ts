import { z } from 'zod'

export const userNameSchema = z.object({
  username: z
    .string()
    .min(6, 'Строка должна содержать минимум 6 символов')
    .max(30, 'Строка должна содержать максимум 30 символов'),
})
