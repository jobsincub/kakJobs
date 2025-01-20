import { SubmitHandler } from 'react-hook-form'
import { PublishPostFormValues } from '@/features/post/publish'
import { useAppDispatch } from '@/shared/lib'
import { reset, selectPhotos, useCreatePostMutation } from '@/entities/post'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/shared/router/routes'

export const usePublishDialogContent = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const photos = useSelector(selectPhotos)
  const [createPost, { isSuccess }] = useCreatePostMutation()

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset())
      router.push(ROUTES.HOME)
    }
  }, [isSuccess, dispatch, router])

  const onSubmit: SubmitHandler<PublishPostFormValues> = data => {
    createPost({ ...data, photos })
  }

  return { dispatch, onSubmit }
}
