import { SubmitHandler } from 'react-hook-form'
import { PublishPostFormValues } from '@/features/post/publish'
import { useAppDispatch } from '@/shared/lib'
import { reset, selectPhotos } from '@/entities/post'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/shared/router/routes'
import { createPost } from '@/entities/post/model/postSlice'

export const usePublishDialogContent = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const photos = useSelector(selectPhotos)

  const publishPostHandler: SubmitHandler<PublishPostFormValues> = async data => {
    try {
      await dispatch(createPost({ ...data, photos })).unwrap()

      dispatch(reset())
      router.push(ROUTES.HOME)
    } catch (error) {
      console.error('Ошибка при создании поста: ', error)
    }
  }

  return { dispatch, publishPostHandler }
}
