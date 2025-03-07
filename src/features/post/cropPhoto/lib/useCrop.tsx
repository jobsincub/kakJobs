import { updateAspectRatioPhoto, updateZoomPhoto } from '@/entities/post/model/postSlice'
import { useCurrentPhoto } from '@/features/post/lib/useCurrentPhoto'
import { useImageTransform } from '@/features/post/lib/useImageTransform'
import { useAppDispatch } from '@/shared/lib'
import { AspectRatio } from '../ui/aspectPanel/aspectPanel'

export const useCrop = () => {
  const dispatch = useAppDispatch()

  const { currentPhoto, setCurrentIndex, photosForRender } = useCurrentPhoto()
  useImageTransform(currentPhoto)

  const setAspectRatioHandler = (aspectRatio: AspectRatio) => {
    dispatch(updateAspectRatioPhoto({ aspectRatio, id: currentPhoto.id }))
  }

  const setZoomHandler = (zoom: number) => {
    dispatch(updateZoomPhoto({ zoom, id: currentPhoto.id }))
  }

  return {
    photosForRender,
    setCurrentIndex,
    // debouncedApplyImageTransform,
    setAspectRatioHandler,
    setZoomHandler,
  }
}
