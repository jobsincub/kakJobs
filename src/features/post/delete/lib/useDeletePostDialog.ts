import { useTranslation } from '@/shared/config'

export const useDeletePostDialog = () => {
  const {
    t: {
      features: {
        posts: { deletePostDialog },
      },
      shared: { dialogs },
    },
  } = useTranslation()

  return { deletePostDialog, dialogs }
}
