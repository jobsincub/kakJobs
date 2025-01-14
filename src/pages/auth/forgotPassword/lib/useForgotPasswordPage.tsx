'use client'
import { usePasswordRecoveryMutation } from '@/entities/user'
import type { ForgotPasswordFormSchema } from '@/features/auth/forgotPassword'
import { useTranslation } from '@/shared/config'
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

  const onSubmit = (data: ForgotPasswordFormSchema) => {
    if (data.recaptchaToken) {
      passwordRecovery(data)
    }
  }

  return { page, customError, email, isSuccess, onSubmit }
}
