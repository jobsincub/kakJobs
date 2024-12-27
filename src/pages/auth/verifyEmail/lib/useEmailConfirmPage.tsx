import { useVerifyEmailMutation } from '@/entities/auth'
import { useTranslation } from '@/shared/config'
import { ROUTES } from '@/shared/router/routes'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export const UseEmailConfirmPage = () => {
  const searchParams = useSearchParams()

  const code = searchParams?.get('code')

  const {
    t: {
      pages: {
        auth: { verifyEmail: page },
      },
    },
  } = useTranslation()

  const [verifyEmail, { isError, isSuccess }] = useVerifyEmailMutation()
  const router = useRouter()

  useEffect(() => {
    if (code) {
      verifyEmail({ code })
    }
  }, [code, verifyEmail])

  useEffect(() => {
    if (isError) {
      router.push(ROUTES.AUTH.RESEND_VERIFICATION)
    }
  }, [isError, router])

  return { page, code, isSuccess }
}
