import { Button, GoogleIcon } from '@wandrehappen/ui-kit'
import { useGoogleLogin } from '@react-oauth/google'
import { useGoogleLoginMutation } from '@/entities/user'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/shared/router/routes'

export function GoogleOAuthButton() {
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

  return (
    <Button asChild variant={'link'} onClick={() => login()}>
      <GoogleIcon width={'36px'} height={'36px'} />
    </Button>
  )
}
