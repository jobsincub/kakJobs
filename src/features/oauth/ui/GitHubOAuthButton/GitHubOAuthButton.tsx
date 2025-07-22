import { Button, GitHubIcon } from '@wandrehappen/ui-kit'
import { useGitHubOAuthButton } from '../../lib/useGitHubOAuthButton'

export function GitHubOAuthButton() {
  const { login } = useGitHubOAuthButton()

  return (
    <Button asChild variant={'link'} onClick={() => login()}>
      <GitHubIcon width={'36px'} height={'36px'} />
    </Button>
  )
}
