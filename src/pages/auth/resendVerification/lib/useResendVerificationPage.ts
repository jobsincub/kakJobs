import { useResendVerificationEmailMutation } from '@/entities/auth/api'
import { ResendVerificationEmailField } from '@/features/auth/resend-verification'
import { useTranslation } from '@/shared/config'
import { getErrorMessage } from '@/shared/lib/hooks'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const useResendVerificationPage = () => {
  const [resendVerificationEmail, { isSuccess, originalArgs, error }] =
    useResendVerificationEmailMutation()
  const router = useRouter()

  const email = originalArgs?.email

  useEffect(() => {
    if (isSuccess) {
      router.push('/auth/signin')
    }
  }, [isSuccess, router])

  const {
    t: {
      pages: {
        auth: {
          resendVerificationPage: { errorMessages, ...page },
        },
      },
    },
  } = useTranslation()

  const customError = getErrorMessage({ errorMessages, error })

  const onResend = (data: ResendVerificationEmailField) => {
    resendVerificationEmail(data)
  }

  return { isSuccess, onResend, email, customError, page }
}
