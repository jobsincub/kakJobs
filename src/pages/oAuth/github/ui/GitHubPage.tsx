'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { ROUTES } from '@/shared/router/routes'
import { useEffect } from 'react'
import { tokenReceived, useGithubUpdateTokensMutation } from '@/entities/user'

export function GithubPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const dispatch = useDispatch()
  const accessToken = searchParams!.get('accessToken')
  const email = searchParams!.get('email')
  const [githubUpdateTokens, { isSuccess }] = useGithubUpdateTokensMutation()

  useEffect(() => {
    if (accessToken && email) {
      dispatch(tokenReceived({ accessToken }))
      githubUpdateTokens()
    }
  }, [accessToken, dispatch, email, githubUpdateTokens])

  useEffect(() => {
    if (isSuccess) {
      router.replace(ROUTES.HOME)
    }
  }, [isSuccess, router])

  if (!accessToken && !email) {
    return null
  }

  return <div>Processing GitHub authentication...</div>
}
