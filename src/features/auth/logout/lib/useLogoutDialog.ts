import { useLogoutMutation } from '@/entities/auth/api'
import { useRouter } from 'next/navigation'
import { useTranslation } from '@/shared/config'
import { useEffect } from 'react'
import { routes } from '@/shared/router/routes'

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
      router.push(routes.signin)
    }
  }, [isSuccess, router])

  return {
    email,
    logout,
    logOutDialog,
    dialogs,
  }
}
