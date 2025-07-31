import { selectUserId } from '@/entities/user/model/authSlice'
import { useTranslation } from '@/shared/config'
import { useAppSelector } from '@/shared/lib/store/redux'
import { selectIsLoggedIn } from '@/entities/user/model/authSlice'
import { useEffect } from 'react'

export const useSidebar = () => {
  const {
    t: {
      widgets: { sidebar },
    },
  } = useTranslation()

  const myId = useAppSelector(selectUserId)
  const isLoggedIn = useAppSelector(selectIsLoggedIn)

  useEffect(() => {
    document.body.style.paddingLeft = isLoggedIn ? '220px' : '0'
  }, [isLoggedIn])

  return { sidebar, myId, isLoggedIn }
}
