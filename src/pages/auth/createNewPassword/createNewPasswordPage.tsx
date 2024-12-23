'use client'
import { useCreateNewPasswordMutation } from '@/entities/auth/api'
import { NewPasswordFields } from '@/features/auth/create-new-password'
import { CreateNewPasswordForm } from '@/features/auth/create-new-password/ui'
import { useSearchParams } from 'next/navigation'

const CreateNewPasswordPage = () => {
  const [createNewPassword] = useCreateNewPasswordMutation()

  const searchParams = useSearchParams()
  const recoveryCode = searchParams?.get('code') ?? null
  const onSubmit = async (data: NewPasswordFields) => {
    if (!recoveryCode) {
      return 'Recovery code is missing!'
    }
    try {
      await createNewPassword({ newPassword: data.newPassword, recoveryCode })
      console.log('Password reset successfully!')
      console.log('New Password Data:', data)
      console.log('Recovery Code:', recoveryCode)
    } catch (error) {
      console.error('Failed to reset password:', error)
    }
  }

  return (
    <div>
      <CreateNewPasswordForm onSubmit={onSubmit} recoveryCode={recoveryCode} />
    </div>
  )
}

export default CreateNewPasswordPage
