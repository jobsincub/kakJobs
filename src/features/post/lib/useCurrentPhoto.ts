import { selectPhotos } from '@/entities/post/model/postSlice'
import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

export const useCurrentPhoto = () => {
  const photos = useSelector(selectPhotos)
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentPhoto = photos[currentIndex]

  const photosForRender = useMemo(
    () => photos.map(photo => ({ id: photo.id, imageUrl: photo.updatedImageUrl })),
    [photos]
  )

  return {
    photosForRender,
    currentIndex,
    setCurrentIndex,
    currentPhoto,
  }
}
