import { useResendVerificationEmailMutation } from '@/entities/auth/api'
import { ResendVerificationEmailField } from '@/features/auth/resend-verification'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const useResendVerificationPage = () => {
  const [resendVerificationEmail, { isSuccess, originalArgs }] =
    useResendVerificationEmailMutation()
  const router = useRouter()

  const email = originalArgs?.email || ''

  useEffect(() => {
    if (isSuccess) {
      router.push('/auth/signin')
    }
  }, [isSuccess, router])

  const onResend = (data: ResendVerificationEmailField) => {
    resendVerificationEmail(data)
  }

  return { isSuccess, onResend, email }
}
