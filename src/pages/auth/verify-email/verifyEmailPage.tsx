'use client'

import * as React from 'react'
import { useSearchParams } from 'next/navigation'
import { useVerifyEmailMutation } from '@/entities/auth/api'
import { useEffect } from 'react'
import { Typography } from '@wandrehappen/ui-kit'

export const VerifyEmailPage = () => {
  const searchParams = useSearchParams()
  const code = searchParams && searchParams.get('code')

  const [verifyEmail, { data, error, isLoading }] = useVerifyEmailMutation()

  useEffect(() => {
    if (code) {
      verifyEmail(JSON.stringify({ code }))
    }
  }, [code, verifyEmail])
  return (
    <div>
      <Typography variant={'h1'}>Verify email</Typography>
      <p>Code: {code}</p>
      {isLoading && <p>Loading...</p>}
      {data && <p>Verification successful!</p>}
      {error && <p>Error: some error</p>}
    </div>
  )
}
