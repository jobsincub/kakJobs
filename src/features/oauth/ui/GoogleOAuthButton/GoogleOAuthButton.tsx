import { Button, GoogleIcon } from '@wandrehappen/ui-kit'
import { useGoogleLogin } from '@react-oauth/google'

export function GoogleOAuthButton() {
  const login = useGoogleLogin({
    onSuccess: codeResponse => console.log(codeResponse),
    flow: 'auth-code',
  })

  return (
    <Button asChild variant={'link'} onClick={() => login()}>
      <GoogleIcon />
    </Button>
  )
}
