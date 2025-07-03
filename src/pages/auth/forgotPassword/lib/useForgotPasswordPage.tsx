'use client'
import { usePasswordRecoveryMutation } from '@/entities/user'
import type { ForgotPasswordFormValues } from '@/features/auth/forgotPassword'
import { ENV, useTranslation } from '@/shared/config'
import { getErrorMessage } from '@/shared/lib/hooks'

export const UseForgotPasswordPage = () => {
  const [passwordRecovery, { isSuccess, originalArgs, error }] = usePasswordRecoveryMutation()
  const email = originalArgs?.email

  const {
    t: {
      pages: {
        auth: {
          forgotPasswordPage: { errorMessages, ...page },
        },
      },
    },
  } = useTranslation()

  const customError = getErrorMessage({ errorMessages, error })

  const onSubmit = (data: ForgotPasswordFormValues) => {
    passwordRecovery({ ...data, baseUrl: `${ENV.NEXT_PUBLIC_APP_URL}/auth/create-new-password` })
  }

  return { page, customError, email, isSuccess, onSubmit }
}
