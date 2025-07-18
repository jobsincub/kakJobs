import { Button, GoogleIcon } from '@wandrehappen/ui-kit'
import { useGoogleOAuthButton } from '../../lib/useGoogleOAuthButton'

export function GoogleOAuthButton() {
  const { login } = useGoogleOAuthButton()

  return (
    <Button asChild variant={'link'} onClick={() => login()}>
      <GoogleIcon width={'36px'} height={'36px'} />
    </Button>
  )
}
