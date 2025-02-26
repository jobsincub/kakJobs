import { SubmitHandler } from 'react-hook-form'
import { useAppDispatch } from '@/shared/lib'
import { reset, selectPhotos } from '@/entities/post'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/shared/router/routes'
import { createPost } from '@/entities/post/model/postSlice'
import { PostFormValues } from '../../ui/PostForm'

export const usePublishDialogContent = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const photos = useSelector(selectPhotos)
  const imagesForCarousel = photos.map(photo => ({
    id: photo.id,
    imageUrl: photo.url,
  }))

  const publishPostHandler: SubmitHandler<PostFormValues> = async data => {
    try {
      await dispatch(createPost({ ...data, photos })).unwrap()

      dispatch(reset())
      router.push(ROUTES.HOME)
    } catch (error) {
      console.error('Ошибка при создании поста: ', error)
    }
  }

  return { dispatch, publishPostHandler, imagesForCarousel }
}
