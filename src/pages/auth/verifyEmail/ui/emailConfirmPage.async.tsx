import { Suspense } from 'react'
import { EmailConfirmPage } from './emailConfirmPage'

export const EmailConfirmPageAsync = () => (
  <Suspense>
    <EmailConfirmPage />
  </Suspense>
)
