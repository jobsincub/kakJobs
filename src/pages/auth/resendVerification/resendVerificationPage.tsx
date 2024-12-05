'use client'

import { useResendVerificationEmailMutation } from '@/entities/auth/api'
import {
  ResendVerificationEmailField,
  ResendVerificationForm,
} from '@/features/auth/resend-verification'

const ResendVerificationEmailPage = () => {
  const [resendVerificationEmail] = useResendVerificationEmailMutation()

  const onSubmit = (data: ResendVerificationEmailField) => {
    resendVerificationEmail(data)
  }
  return (
    <div>
      <ResendVerificationForm onSubmit={onSubmit} />
      <image />
    </div>
  )
}

export default ResendVerificationEmailPage
