import { selectPhotos, updatePhoto } from '@/entities/post'
import { useAppDispatch } from '@/shared/lib'
import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

export const useFilters = () => {
  const dispatch = useAppDispatch()

  const photos = useSelector(selectPhotos)

  const [currentIndex, setCurrentIndex] = useState(0)

  const { id: currentId, originalImageUrl: currentOriginalImageUrl } = photos[currentIndex]

  const photosForRender = useMemo(() => {
    return photos.map(photo => ({ id: photo.id, imageUrl: photo.updatedImageUrl }))
  }, [photos])

  const applyFilterHandler = (filterStyle: string) => {
    const img = new Image()
    img.src = currentOriginalImageUrl

    img.onload = () => {
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')
      if (!context) return

      canvas.width = img.width
      canvas.height = img.height
      context.clearRect(0, 0, canvas.width, canvas.height)

      context.filter = filterStyle
      context.drawImage(img, 0, 0)

      canvas.toBlob(blob => {
        if (!blob) return
        const updatedImageUrl = URL.createObjectURL(blob)
        dispatch(updatePhoto({ id: currentId, updatedImageUrl }))
      })
    }
  }

  return {
    photosForRender,
    setCurrentIndex,
    currentOriginalImageUrl,
    applyFilterHandler,
  }
}
