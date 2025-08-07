import { useTranslation } from '@/shared/config'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '@/entities/user'
import { usePathname } from 'next/navigation'

export const useHeader = () => {
  const {
    t: {
      widgets: {
        header: { signUp, logIn },
      },
    },
  } = useTranslation()
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const pathname = usePathname()
  const isAuthPage = pathname!.startsWith('/auth') || pathname!.startsWith('/oAuth')

  return { isLoggedIn, isAuthPage, logIn, signUp }
}
