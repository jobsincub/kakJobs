'use client'

import type { ReactNode } from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

export const ReCaptchaProvider = ({ children }: { children: ReactNode }) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={'6LfdoY0qAAAAAPHtDMsLzB9MFrTcTJdRXEI6KHpP'}
      container={{ parameters: { badge: 'bottomright' } }}
    >
      {children}
    </GoogleReCaptchaProvider>
  )
}
