import { selectUserId } from '@/entities/user/model/authSlice'
import { useTranslation } from '@/shared/config'
import { useAppSelector } from '@/shared/lib/store/redux'
import { selectIsLoggedIn } from '@/entities/user/model/authSlice'

export const useSidebar = () => {
  const {
    t: {
      widgets: { sidebar },
    },
  } = useTranslation()

  const myId = useAppSelector(selectUserId)
  const isLoggedIn = useAppSelector(selectIsLoggedIn)

  return { sidebar, myId, isLoggedIn }
}
