'use client'

import { notFound, useRouter, useSearchParams } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { ROUTES } from '@/shared/router/routes'
import { useEffect } from 'react'
import { tokenReceived } from '@/entities/user'

export function GithubPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const dispatch = useDispatch()
  const accessToken = searchParams!.get('accessToken')
  const email = searchParams!.get('email')

  useEffect(() => {
    if (accessToken && email) {
      dispatch(tokenReceived({ accessToken }))
      router.replace(ROUTES.HOME)
    } else {
      notFound()
    }
  }, [accessToken, dispatch, email, router])

  return <div>Processing GitHub authentication...</div>
}
