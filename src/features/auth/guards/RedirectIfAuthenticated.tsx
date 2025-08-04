'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '@/entities/user'
import { ROUTES } from '@/shared/router/routes'

export function RedirectIfAuthenticated({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const isLoggedIn = useSelector(selectIsLoggedIn)

  useEffect(() => {
    if (isLoggedIn) {
      router.replace(ROUTES.HOME)
    }
  }, [isLoggedIn, router])

  return <>{children}</>
}
