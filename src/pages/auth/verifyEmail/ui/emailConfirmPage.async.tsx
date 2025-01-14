import { Suspense } from 'react'
import { EmailConfirmPage } from './emailConfirmPage'

const EmailConfirmPageAsync = () => (
  <Suspense>
    <EmailConfirmPage />
  </Suspense>
)

export default EmailConfirmPageAsync
