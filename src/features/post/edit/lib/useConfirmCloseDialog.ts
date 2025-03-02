import { useTranslation } from '@/shared/config'

export const useConfirmCloseDialog = () => {
  const {
    t: {
      features: {
        posts: { updatePostDialog },
      },
      shared: { dialogs },
    },
  } = useTranslation()

  return { updatePostDialog, dialogs }
}
