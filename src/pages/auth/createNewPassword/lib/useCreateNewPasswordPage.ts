import { useCreateNewPasswordMutation } from '@/entities/auth/api'
import { NewPasswordFields } from '@/features/auth/create-new-password'
import { useTranslation } from '@/shared/config'
import { useRouter, useSearchParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import { useEffect } from 'react'

export const useCreateNewPasswordPage = () => {
  const router = useRouter()

  const [createNewPassword, { isSuccess }] = useCreateNewPasswordMutation()

  useEffect(() => {
    if (isSuccess) {
      router.push('/auth/signin')
    }
  }, [isSuccess, router])

  const {
    t: {
      pages: {
        auth: {
          createNewPasswordPage: { ...page },
        },
      },
    },
  } = useTranslation()

  const searchParams = useSearchParams()
  const recoveryCode = searchParams?.get('code')

  const onSubmit = (data: NewPasswordFields) => {
    if (!recoveryCode) {
      notFound()
    }
    createNewPassword({ newPassword: data.newPassword, recoveryCode })
  }

  return { onSubmit, page }
}
