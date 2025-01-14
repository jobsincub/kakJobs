import { useVerifyEmailMutation } from '@/entities/user'
import { useTranslation } from '@/shared/config'
import { getStatusCode } from '@/shared/lib/hooks'
import { ROUTES } from '@/shared/router/routes'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export const UseEmailConfirmPage = () => {
  const router = useRouter()

  const searchParams = useSearchParams()
  const code = searchParams?.get('code')
  const email = searchParams?.get('email')

  const {
    t: {
      pages: {
        auth: { verifyEmail: page },
      },
    },
  } = useTranslation()

  const [verifyEmail, { isError, isSuccess, error }] = useVerifyEmailMutation()

  const isAlreadyActivated = getStatusCode(error) === 409

  useEffect(() => {
    if (code) {
      verifyEmail({ code })
    }
  }, [code, verifyEmail])

  useEffect(() => {
    if (isError && !isAlreadyActivated) {
      router.push(`${ROUTES.AUTH.RESEND_VERIFICATION}?email=${email}`)
    }
  }, [isError, router, isAlreadyActivated, email])

  return { page, code, isSuccess, isAlreadyActivated }
}
