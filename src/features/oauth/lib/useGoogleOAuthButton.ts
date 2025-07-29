import { ENV } from '@/shared/config'
import { useRouter } from 'next/navigation'

export const useGoogleOAuthButton = () => {
  const router = useRouter()

  const login = () => {
    const baseUrl = ENV.NEXT_PUBLIC_GOOGLE_OAUTH_BASE_URL
    const params = new URLSearchParams({
      client_id: ENV.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      scope: ['openid', 'profile', 'email'].join(' '),
      redirect_uri: `${ENV.NEXT_PUBLIC_APP_URL}/oAuth/google`,
      response_type: 'code',
    })

    router.push(`${baseUrl}?${params.toString()}`)
  }

  return { login }
}
