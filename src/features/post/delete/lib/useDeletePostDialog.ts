import { useTranslation } from '@/shared/config'
import { useDeletePostMutation } from '@/entities/post'
import { useEffect } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'

export const useDeletePostDialog = () => {
  const params = useParams<{ userId: string }>()
  const searchParams = useSearchParams()
  const userId = params!.userId
  const postId = searchParams!.get('postId')!
  const [deletePost, { isSuccess }] = useDeletePostMutation()
  const router = useRouter()
  const {
    t: {
      features: {
        post: { deletePostDialog },
      },
      shared: { dialogs },
    },
  } = useTranslation()

  useEffect(() => {
    if (isSuccess) {
      router.replace(`/profile/${userId}`)
    }
  }, [isSuccess, router, userId])

  return { deletePost, deletePostDialog, dialogs, postId }
}
