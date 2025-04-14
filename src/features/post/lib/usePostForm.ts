import { useTranslation } from '@/shared/config'
import { useSelector } from 'react-redux'
import { selectUserName } from '@/entities/user/model/authSlice'

export const usePostForm = () => {
  const userName = useSelector(selectUserName)

  const {
    t: {
      features: {
        post: { postForm },
      },
    },
  } = useTranslation()

  return { userName, postForm }
}
