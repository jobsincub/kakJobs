'use client'

import { useGithubPage } from '@/pages/oAuth/github/lib/useGithubPage'

export function GithubPage() {
  const { accessToken, email } = useGithubPage()

  if (!accessToken && !email) {
    return null
  }

  return <div>Processing GitHub authentication...</div>
}
