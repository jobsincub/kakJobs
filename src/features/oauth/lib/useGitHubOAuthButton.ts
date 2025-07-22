import { useRouter } from 'next/navigation'
import { ENV } from '@/shared/config'

export const useGitHubOAuthButton = () => {
  const router = useRouter()
  const login = () => {
    router.push(
      `${ENV.NEXT_PUBLIC_GITHUB_API_URL}?redirect_url=${ENV.NEXT_PUBLIC_APP_URL}/oAuth/github`
    )
  }

  return { login }
}
