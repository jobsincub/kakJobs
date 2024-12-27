import { useResendVerificationEmailMutation } from '@/entities/auth'
import { ResendVerificationEmailField } from '@/features/auth/resendVerification'
import { useTranslation } from '@/shared/config'
import { getErrorMessage } from '@/shared/lib/hooks'
import { ROUTES } from '@/shared/router/routes'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const useResendVerificationPage = () => {
  const [resendVerificationEmail, { isSuccess, originalArgs, error }] =
    useResendVerificationEmailMutation()
  const router = useRouter()

  const email = originalArgs?.email

  useEffect(() => {
    if (isSuccess) {
      router.push(ROUTES.AUTH.SIGN_IN)
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
