import { useTranslation } from '@/shared/config'

export const useDeletePostDialog = () => {
  const {
    t: {
      features: {
        post: { delete: deletePost },
      },
      shared: { dialogs },
    },
  } = useTranslation()

  return { deletePost, dialogs }
}
