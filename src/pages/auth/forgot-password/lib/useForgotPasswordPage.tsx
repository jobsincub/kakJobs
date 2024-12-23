'use client'
import { ForgotPasswordFormSchema } from '@/features/auth/forgot-password'
import { usePasswordRecoveryMutation } from '@/entities/auth/api'
import { useTranslation } from '@/shared/config'
import { getErrorMessage } from '@/shared/lib/hooks'

export const UseForgotPasswordPage = () => {
  const [passwordRecovery, { isSuccess, originalArgs, error }] = usePasswordRecoveryMutation()

  const {
    t: {
      pages: {
        auth: {
          forgotPasswordPage: { errorMessages, ...page },
        },
      },
    },
  } = useTranslation()

  console.log(error)

  const customError = getErrorMessage({ errorMessages, error })

  const onSubmit = (data: ForgotPasswordFormSchema) => {
    if (data.recaptchaToken) {
      passwordRecovery(data)
    }
  }

  return { page, customError, originalArgs, isSuccess, onSubmit }
}
