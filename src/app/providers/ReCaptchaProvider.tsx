'use client'

import type { ReactNode } from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { ENV } from '@/shared/config/env'

export const ReCaptchaProvider = ({ children }: { children: ReactNode }) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={ENV.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      container={{ parameters: { badge: 'bottomright' } }}
    >
      {children}
    </GoogleReCaptchaProvider>
  )
}
