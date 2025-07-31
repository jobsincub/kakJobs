import { selectUserId } from '@/entities/user/model/authSlice'
import { useTranslation } from '@/shared/config'
import { useAppSelector } from '@/shared/lib/store/redux'

export const useSidebar = () => {
  const {
    t: {
      widgets: { sidebar },
    },
  } = useTranslation()

  const myId = useAppSelector(selectUserId)

  return { sidebar, myId }
}
