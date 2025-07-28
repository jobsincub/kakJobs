import { z } from 'zod'

const VAR_KEYS = {
  APP_URL: 'NEXT_PUBLIC_APP_URL',
  BASE_API_URL: 'NEXT_PUBLIC_BASE_API_URL',
  RECAPTCHA_SITE_KEY: 'NEXT_PUBLIC_RECAPTCHA_SITE_KEY',
  GOOGLE_CLIENT_ID: 'NEXT_PUBLIC_GOOGLE_CLIENT_ID',
  GOOGLE_OAUTH_BASE_URL: 'NEXT_PUBLIC_GOOGLE_OAUTH_BASE_URL',
} as const

const schema = z
  .object({
    [VAR_KEYS.APP_URL]: z.string().url(`Env variable ${VAR_KEYS.APP_URL} must be a valid URL`),
    [VAR_KEYS.BASE_API_URL]: z
      .string()
      .url(`Env variable ${VAR_KEYS.BASE_API_URL} must be a valid URL`),
    [VAR_KEYS.RECAPTCHA_SITE_KEY]: z
      .string()
      .min(1, `Env variable ${VAR_KEYS.RECAPTCHA_SITE_KEY} is required`),
    [VAR_KEYS.GOOGLE_CLIENT_ID]: z
      .string()
      .min(1, `Env variable ${VAR_KEYS.GOOGLE_CLIENT_ID} is required`),
    [VAR_KEYS.GOOGLE_OAUTH_BASE_URL]: z
      .string()
      .url(`Env variable ${VAR_KEYS.GOOGLE_OAUTH_BASE_URL} must be a valid URL`),
  })
  .strict()

const parsed = schema.safeParse({
  [VAR_KEYS.APP_URL]: process.env.NEXT_PUBLIC_APP_URL,
  [VAR_KEYS.BASE_API_URL]: process.env.NEXT_PUBLIC_BASE_API_URL,
  [VAR_KEYS.RECAPTCHA_SITE_KEY]: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  [VAR_KEYS.GOOGLE_CLIENT_ID]: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  [VAR_KEYS.GOOGLE_OAUTH_BASE_URL]: process.env.NEXT_PUBLIC_GOOGLE_OAUTH_BASE_URL,
})

if (!parsed.success) {
  console.error('❌ Invalid environment variables:', parsed.error.format())
  throw parsed.error
}

export const ENV = parsed.data
