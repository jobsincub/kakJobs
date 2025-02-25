import { selectPhotos, updatePhoto } from '@/entities/post'
import { useAppDispatch } from '@/shared/lib'
import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

export const useFilters = () => {
  const dispatch = useAppDispatch()

  const photos = useSelector(selectPhotos)

  const [currentIndex, setCurrentIndex] = useState(0)

  const { id, updatedImageUrl, originalImageUrl } = photos[currentIndex]

  const photosForRender = useMemo(() => {
    return photos.map(photo => ({ id: photo.id, imageUrl: updatedImageUrl }))
  }, [photos])

  const applyFilterHandler = (filterStyle: string) => {
    const canvas = document.createElement('canvas')

    const context = canvas.getContext('2d')
    if (!context) {
      return
    }

    const img = new Image()
    img.src = originalImageUrl

    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height

      context.clearRect(0, 0, canvas.width, canvas.height)

      context.filter = filterStyle
      context.drawImage(img, 0, 0)

      canvas.toBlob(blob => {
        if (!blob) return

        const updatedImageUrl = URL.createObjectURL(blob)
        dispatch(
          updatePhoto({
            id,
            updatedImageUrl,
          })
        )
      })
    }
  }

  return {
    photosForRender,
    setCurrentIndex,
    originalImageUrl,
    applyFilterHandler,
  }
}
