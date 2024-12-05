'use client'

import * as React from 'react'
import { useSearchParams } from 'next/navigation'
import { useVerifyEmailMutation } from '@/entities/auth/api'
import { useEffect } from 'react'
import { Typography } from '@wandrehappen/ui-kit'

export const VerifyEmailPage = () => {
  const searchParams = useSearchParams()
  const code = searchParams && searchParams.get('code')

  const [verifyEmail] = useVerifyEmailMutation()

  useEffect(() => {
    if (code) {
      verifyEmail(JSON.stringify({ code }))
    }
  }, [code, verifyEmail])
  return (
    <div>
      <Typography variant={'h1'}>Verify email</Typography>
      <p>Code: {code}</p>
    </div>
  )
}
