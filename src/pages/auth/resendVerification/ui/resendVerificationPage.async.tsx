import { Suspense } from 'react'
import ResendVerificationEmailPage from './resendVerificationPage'

const ResendVerificationEmailPageAsync = () => (
  <Suspense>
    <ResendVerificationEmailPage />
  </Suspense>
)

export default ResendVerificationEmailPageAsync
