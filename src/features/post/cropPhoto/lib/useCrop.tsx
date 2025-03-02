import { selectPhotos, updatePhoto } from '@/entities/post'
import { useAppDispatch } from '@/shared/lib'
import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

type CropConfig = {
  scale: number
  aspectRatio: {
    objectFit: 'contain' | 'cover'
    paddingBottom: string
  }
}

export const useCrop = () => {
  const dispatch = useAppDispatch()

  const photos = useSelector(selectPhotos)

  const [currentIndex, setCurrentIndex] = useState(0)

  const { id, updatedImageUrl, originalImageUrl } = photos[currentIndex]

  const photosForRender = useMemo(() => {
    return photos.map(photo => ({ id: photo.id, imageUrl: photo.updatedImageUrl }))
  }, [photos, updatedImageUrl])

  const applyCropHandler = ({ scale, aspectRatio }: CropConfig) => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    if (!context) return

    const img = new Image()
    img.src = originalImageUrl

    img.onload = () => {
      // Базовые размеры для всех форматов
      const baseSize = 500

      // Вычисляем размеры на основе paddingBottom
      const ratio =
        aspectRatio.paddingBottom === 'auto'
          ? img.naturalWidth / img.naturalHeight
          : parseFloat(aspectRatio.paddingBottom) / 100

      // Устанавливаем размеры canvas
      canvas.width = baseSize
      canvas.height = baseSize / ratio

      // Очищаем canvas
      context.clearRect(0, 0, canvas.width, canvas.height)

      // Вычисляем размеры и позицию для отрисовки
      let drawWidth, drawHeight, x, y

      if (aspectRatio.objectFit === 'cover') {
        // Для cover - заполняем всю область
        const scaleToFit = Math.max(canvas.width / img.width, canvas.height / img.height)
        drawWidth = img.width * scaleToFit
        drawHeight = img.height * scaleToFit
      } else {
        // Для contain - сохраняем пропорции
        const scaleToFit = Math.min(canvas.width / img.width, canvas.height / img.height)
        drawWidth = img.width * scaleToFit
        drawHeight = img.height * scaleToFit
      }

      // Центрируем изображение
      x = (canvas.width - drawWidth) / 2
      y = (canvas.height - drawHeight) / 2

      // Применяем масштаб
      const scaledWidth = drawWidth * scale
      const scaledHeight = drawHeight * scale
      const scaledX = x - (scaledWidth - drawWidth) / 2
      const scaledY = y - (scaledHeight - drawHeight) / 2

      // Рисуем изображение с применением всех трансформаций
      context.drawImage(img, scaledX, scaledY, scaledWidth, scaledHeight)

      // Сохраняем результат
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
    applyCropHandler,
  }
}
