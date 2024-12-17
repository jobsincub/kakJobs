import { z } from 'zod'

// export const PasswordSchema = z.object({
//   password: z.string().min(3, 'Password must be at least 3 characters').default(''),
// })

const MIN_CHARACTERS_MESSAGE = 'Minimum number of characters 6'
const MAX_CHARACTERS_MESSAGE_PASSWORD = 'Maximum number of characters 20'
const REG_EXP_PASSWORD = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/
const PASSWORD_WARNING = `Password must contain 0-9, a-z, A-Z, ! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ \` { | } ~`

export const PasswordSchema = z
  .string()
  .min(6, MIN_CHARACTERS_MESSAGE)
  .max(20, MAX_CHARACTERS_MESSAGE_PASSWORD)
  .refine(
    password =>
      /[0-9]/.test(password) &&
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      REG_EXP_PASSWORD.test(password),
    PASSWORD_WARNING
  )
