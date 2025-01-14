import { useTranslation } from '@/shared/config'
import { useDeletePostMutation } from '@/entities/post'
import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'

export const useDeletePostDialog = () => {
  const params = useParams<{ userId: string; postId: string }>()
  const userId = params?.userId
  const postId = params?.postId
  const [deletePost, { isSuccess }] = useDeletePostMutation()
  const router = useRouter()
  const {
    t: {
      features: {
        posts: { deletePostDialog },
      },
      shared: { dialogs },
    },
  } = useTranslation()

  useEffect(() => {
    if (isSuccess && userId) {
      router.replace(`/profile/${userId}`)
    }
  }, [isSuccess, router, userId])

  return { deletePost, deletePostDialog, dialogs, postId }
}
