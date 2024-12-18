import { z } from 'zod'

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[ !"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]).{6,30}$/

export const passwordSchema = z.object({
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .regex(
      passwordRegex,
      'Password must contain a-z, A-Z, ! " # $ % & \' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _` { | } ~'
    )
    .default(''),
})
