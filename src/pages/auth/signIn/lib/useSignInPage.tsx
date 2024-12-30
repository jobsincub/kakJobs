import { useSignInMutation } from '@/entities/user'
import type { LoginFormSchema } from '@/features/auth/signIn'
import { useTranslation } from '@/shared/config'
import { getErrorMessage } from '@/shared/lib/hooks'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const UseSignInPage = () => {
  const router = useRouter()

  const [signIn, { isSuccess, error }] = useSignInMutation()

  useEffect(() => {
    if (isSuccess) {
      // router.push('/auth/signup')
    }
  }, [isSuccess, router])

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
