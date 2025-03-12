import { type Filter, updateFilterPhoto } from '@/entities/post/model/postSlice'
import { useCurrentPhoto } from '@/features/post/lib/useCurrentPhoto'
import { useImageTransform } from '@/features/post/lib/useImageTransform'
import { useAppDispatch } from '@/shared/lib'

export const useFilters = () => {
  const dispatch = useAppDispatch()

  const { currentPhoto, setCurrentIndex, photosForRender } = useCurrentPhoto()
  useImageTransform(currentPhoto)

  const applyFilterHandler = (filter: Filter) => {
    dispatch(updateFilterPhoto({ id: currentPhoto.id, filter }))
  }

  return {
    photosForRender,
    setCurrentIndex,
    currentOriginalImageUrl: currentPhoto.originalImageUrl,
    applyFilterHandler,
    currentId: currentPhoto.id,
  }
}
