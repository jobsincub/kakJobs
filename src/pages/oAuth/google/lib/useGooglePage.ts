import { useRouter, useSearchParams } from 'next/navigation'
import { useGoogleLoginMutation } from '@/entities/user'
import { useEffect } from 'react'
import { ENV } from '@/shared/config'
import { ROUTES } from '@/shared/router/routes'

export const useGooglePage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const code = searchParams!.get('code')
  const [googleLogin, { isSuccess }] = useGoogleLoginMutation()

  useEffect(() => {
    if (code) {
      googleLogin({ code, redirectUrl: `${ENV.NEXT_PUBLIC_APP_URL}/oAuth/google` })
    }
  }, [code, googleLogin, router])

  useEffect(() => {
    if (isSuccess) {
      router.replace(ROUTES.HOME)
    }
  }, [isSuccess, router])

  return { code }
}
