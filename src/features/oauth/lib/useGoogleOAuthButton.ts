import { useGoogleLogin } from '@react-oauth/google'
import { useEffect } from 'react'
import { ROUTES } from '@/shared/router/routes'
import { useGoogleLoginMutation } from '@/entities/user'
import { useRouter } from 'next/navigation'

export const useGoogleOAuthButton = () => {
  const [googleLogin, { isSuccess }] = useGoogleLoginMutation()
  const router = useRouter()

  const login = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: codeResponse => googleLogin({ code: codeResponse.code }),
    onError: error => {
      console.error('Google oAuth failed:', error)
    },
  })

  useEffect(() => {
    if (isSuccess) {
      router.replace(ROUTES.HOME)
    }
  }, [isSuccess, router])

  return { login }
}
