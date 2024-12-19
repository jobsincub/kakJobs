import { useSignInMutation } from '@/entities/auth/api'
import type { LoginFormSchema } from '@/features/auth/signin'
import { useTranslation } from '@/shared/config'
import { getError } from '@/shared/lib/hooks'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const UseSignInPage = () => {
  const router = useRouter()

  const [signIn, { isSuccess, error }] = useSignInMutation()

  useEffect(() => {
    if (isSuccess) {
      router.push('/auth/signup')
    }
  }, [isSuccess, router])

  const {
    t: {
      pages: {
        auth: {
          signInPage: { errors, ...page },
        },
      },
    },
  } = useTranslation()

  const statusMessages = { 400: errors['400'], 401: errors['401'] }

  const customError = getError({ statusMessages, error })

  const onSubmit = (data: LoginFormSchema) => {
    signIn(data)
  }

  return { page, customError, onSubmit }
}
