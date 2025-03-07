import { SubmitHandler } from 'react-hook-form'
import { useAppDispatch } from '@/shared/lib'
import { reset, selectPhotos } from '@/entities/post'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/shared/router/routes'
import { createPost } from '@/entities/post/model/postSlice'
import { PostFormValues } from '../../ui/PostForm'
import { useState } from 'react'
import { useTranslation } from '@/shared/config'

export const usePublishDialogContent = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const photos = useSelector(selectPhotos)
  const imagesForCarousel = photos.map(photo => ({
    id: photo.id,
    imageUrl: photo.url,
  }))
  const [isSubmitting, setIsSubmitting] = useState(false)

  const publishPostHandler: SubmitHandler<PostFormValues> = async data => {
    try {
      setIsSubmitting(true)
      await dispatch(createPost({ ...data, photos })).unwrap()

      dispatch(reset())
      router.push(ROUTES.HOME)
    } catch (error) {
      console.error('Ошибка при создании поста: ', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const {
    t: {
      features: {
        post: { publishPostDialog },
      },
    },
  } = useTranslation()

  return { dispatch, publishPostHandler, imagesForCarousel, isSubmitting, publishPostDialog }
}
