import { useTranslation } from '@/shared/config'

export const useConfirmCloseDialog = () => {
  const {
    t: {
      features: {
        post: { updatePostDialog },
      },
      shared: { dialogs },
    },
  } = useTranslation()

  return {
    updatePostDialog,
    dialogs,
  }
}
