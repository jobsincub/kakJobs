import { Button, GitHubIcon } from '@wandrehappen/ui-kit'
import { useRouter } from 'next/navigation'
import { ENV } from '@/shared/config'

export function GitHubOAuthButton() {
  const router = useRouter()
  const login = () => {
    router.push(`${ENV.NEXT_PUBLIC_GITHUB_API_URL}?redirect_url=http://localhost:3000`)
  }

  return (
    <Button asChild variant={'link'} onClick={() => login()}>
      <GitHubIcon width={'36px'} height={'36px'} />
    </Button>
  )
}
