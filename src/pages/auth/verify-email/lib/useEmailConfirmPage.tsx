import { useVerifyEmailMutation } from '@/entities/auth/api'
import { useTranslation } from '@/shared/config'
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
      router.push('/auth/resend-verification')
    }
  }, [isError, router])

  return { page, code, isSuccess }
}
