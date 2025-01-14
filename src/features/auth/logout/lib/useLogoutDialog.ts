import { useLogoutMutation } from '@/entities/user'
import { useTranslation } from '@/shared/config'
import { ROUTES } from '@/shared/router/routes'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectUserEmail } from '@/entities/user/model/authSlice'

export const useLogoutDialog = () => {
  const userEmail = useSelector(selectUserEmail)
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
      router.replace(ROUTES.AUTH.SIGN_IN)
    }
  }, [isSuccess, router])

  return {
    userEmail,
    logout,
    logOutDialog,
    dialogs,
  }
}
