'use client'
import { useSignInMutation } from '@/entities/auth/api'
import { type LoginFormSchema, SignInForm } from '@/features/auth/signin'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const SignInPage = () => {
  const [signIn, { isSuccess, isError }] = useSignInMutation()
  const router = useRouter()

  const onSubmit = (data: LoginFormSchema) => {
    signIn(data)
  }

  useEffect(() => {
    if (isSuccess) {
      // router.push('http://localhost:3000/залогинился')
    }
  }, [isSuccess, router])

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <SignInForm
        onSubmit={onSubmit}
        error={isError ? 'The email or password are incorrect. Try again please' : ''}
      />
    </div>
  )
}

export default SignInPage
