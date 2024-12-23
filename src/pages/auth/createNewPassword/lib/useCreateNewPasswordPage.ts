import { useCreateNewPasswordMutation } from '@/entities/auth/api'
import { NewPasswordFields } from '@/features/auth/create-new-password'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export const useCreateNewPasswordPage = () => {
  const router = useRouter()

  const [createNewPassword, { isSuccess }] = useCreateNewPasswordMutation()

  useEffect(() => {
    if (isSuccess) {
      router.push('/auth/signin')
    }
  }, [isSuccess, router])

  const searchParams = useSearchParams()
  const recoveryCode = searchParams?.get('code') ?? null

  const onSubmit = (data: NewPasswordFields) => {
    if (!recoveryCode) {
      return 'Recovery code is missing!'
    }
    createNewPassword({ newPassword: data.newPassword, recoveryCode })
  }
  {
    return { onSubmit, recoveryCode }
  }
}
