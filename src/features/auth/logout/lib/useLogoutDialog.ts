import { useLogoutMutation } from '@/entities/auth/api'
import { useTranslation } from '@/shared/config'
import { routes } from '@/shared/router/routes'
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
      router.push(routes.signIn)
    }
  }, [isSuccess, router])

  return {
    email,
    logout,
    logOutDialog,
    dialogs,
  }
}
