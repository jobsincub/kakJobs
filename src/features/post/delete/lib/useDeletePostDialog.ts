import { useTranslation } from '@/shared/config'
import { useDeletePostMutation } from '@/entities/post'
import { useEffect } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { ROUTES } from '@/shared/router/routes'

export const useDeletePostDialog = () => {
  const params = useParams<{ userId: string }>()
  const searchParams = useSearchParams()
  const userId = params!.userId
  const postId = searchParams!.get('postId')!
  const [deletePost, { isSuccess, isLoading }] = useDeletePostMutation()
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
      router.replace(ROUTES.PROFILE(Number(userId)))
    }
  }, [isSuccess, router, userId])

  return { deletePost, deletePostDialog, dialogs, postId, isLoading }
}
