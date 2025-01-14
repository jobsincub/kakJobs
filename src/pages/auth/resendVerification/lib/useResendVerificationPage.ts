import { useResendVerificationEmailMutation } from '@/entities/user'
import { ResendVerificationEmailField } from '@/features/auth/resendVerification'
import { useTranslation } from '@/shared/config'
import { getErrorMessage, getStatusCode } from '@/shared/lib/hooks'
import { ROUTES } from '@/shared/router/routes'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export const useResendVerificationPage = () => {
  const [resendVerificationEmail, { isSuccess, originalArgs, error }] =
    useResendVerificationEmailMutation()
  const router = useRouter()
  const searchParams = useSearchParams()
  const queryEmail = searchParams?.get('email')
  const formEmail = originalArgs?.email

  useEffect(() => {
    if (isSuccess) {
      router.push(ROUTES.AUTH.SIGN_IN)
    }
  }, [isSuccess, router])

  const isAlreadyActivated = getStatusCode(error) === 409

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

  const onResendForm = (data: ResendVerificationEmailField) => {
    resendVerificationEmail(data)
  }

  const onResendQuery = () => {
    if (queryEmail) {
      resendVerificationEmail({ email: queryEmail })
    }
  }

  return {
    isSuccess,
    onResendForm,
    formEmail,
    customError,
    page,
    queryEmail,
    onResendQuery,
    isAlreadyActivated,
  }
}
