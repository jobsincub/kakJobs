import { useSignInMutation } from '@/entities/user'
import type { LoginFormSchema } from '@/features/auth/signIn'
import { useTranslation } from '@/shared/config'
import { getErrorMessage } from '@/shared/lib/hooks'
import { ROUTES } from '@/shared/router/routes'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useAppSelector } from '@/shared/lib/store/redux'
import { selectUserId } from '@/entities/user/model/authSlice'

export const UseSignInPage = () => {
  const userId = useAppSelector(selectUserId)
  const router = useRouter()

  const [signIn, { isSuccess, error }] = useSignInMutation()

  useEffect(() => {
    if (isSuccess && userId) {
      router.push(ROUTES.PROFILE(userId))
    }
  }, [isSuccess, router, userId])

  const {
    t: {
      pages: {
        auth: {
          signInPage: { errorMessages, ...page },
        },
      },
    },
  } = useTranslation()

  const customError = getErrorMessage({ errorMessages, error })

  const onSubmit = (data: LoginFormSchema) => {
    signIn(data)
  }

  return { page, customError, onSubmit }
}
