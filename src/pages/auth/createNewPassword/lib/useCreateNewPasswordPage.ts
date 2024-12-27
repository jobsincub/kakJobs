import { useCreateNewPasswordMutation } from '@/entities/auth/api'
import type { NewPasswordFields } from '@/features/auth/createNewPassword'
import { useTranslation } from '@/shared/config'
import { getErrorMessage } from '@/shared/lib/hooks'
import { ROUTES } from '@/shared/router/routes'
import { useRouter, useSearchParams } from 'next/navigation'

import { useEffect } from 'react'

export const useCreateNewPasswordPage = () => {
  const router = useRouter()

  const [createNewPassword, { isSuccess, error }] = useCreateNewPasswordMutation()

  useEffect(() => {
    if (isSuccess) {
      router.push(ROUTES.AUTH.SIGN_IN)
    }
  }, [isSuccess, router])

  const {
    t: {
      pages: {
        auth: {
          createNewPasswordPage: { errorMessages, ...page },
        },
      },
    },
  } = useTranslation()

  const customError = getErrorMessage({ errorMessages, error })

  const searchParams = useSearchParams()
  const recoveryCode = searchParams?.get('code')

  const onSubmit = (data: NewPasswordFields) => {
    if (recoveryCode) {
      createNewPassword({ newPassword: data.newPassword, recoveryCode })
    }
  }

  return { onSubmit, page, recoveryCode, customError }
}
