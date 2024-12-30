import { useLogoutMutation } from '@/entities/user'
import { useTranslation } from '@/shared/config'
import { ROUTES } from '@/shared/router/routes'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const useLogoutDialog = () => {
  const email = 'Epam@epam.com' // Todo: change to email from store
  const [logout, { isSuccess }] = useLogoutMutation()
  const router = useRouter()

  const {
    t: {
      features: {
        auth: { logOutDialog },
      },
      shared: { dialogs },
    },
  } = useTranslation()

  useEffect(() => {
    if (isSuccess) {
      router.push(ROUTES.AUTH.SIGN_IN)
    }
  }, [isSuccess, router])

  return {
    email,
    logout,
    logOutDialog,
    dialogs,
  }
}
