import { useGoogleLogin } from '@react-oauth/google'
import { useEffect } from 'react'
import { ROUTES } from '@/shared/router/routes'
import { useGoogleLoginMutation } from '@/entities/user'
import { useRouter } from 'next/navigation'
import { ENV } from '@/shared/config'

export const useGoogleOAuthButton = () => {
  const [googleLogin, { isSuccess }] = useGoogleLoginMutation()
  const router = useRouter()

  const login = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: codeResponse => googleLogin({ code: codeResponse.code }),
    onError: error => {
      console.error('Google oAuth failed:', error)
    },
    redirect_uri: ENV.NEXT_PUBLIC_APP_URL,
  })

  useEffect(() => {
    if (isSuccess) {
      router.replace(ROUTES.HOME)
    }
  }, [isSuccess, router])

  return { login }
}
