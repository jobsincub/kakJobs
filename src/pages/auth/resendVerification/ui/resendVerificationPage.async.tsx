import { Suspense } from 'react'
import { ResendVerificationEmailPage } from './resendVerificationPage'

export const ResendVerificationEmailPageAsync = () => (
  <Suspense>
    <ResendVerificationEmailPage />
  </Suspense>
)
