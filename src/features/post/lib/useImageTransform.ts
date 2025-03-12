import { type Filter, updateUrlPhoto } from '@/entities/post/model/postSlice'
import { useDebouncedEffect } from '@/features/post/lib/useDebouncedEffect'
import { useAppDispatch } from '@/shared/lib'
import { useCallback } from 'react'

export const useImageTransform = (currentPhoto: {
  id: string
  originalImageUrl: string
  aspectRatio: number
  zoom: number
  filter: Filter
}) => {
  const dispatch = useAppDispatch()

  const {
    id,
    originalImageUrl,
    aspectRatio,
    zoom,
    filter: { filterStyle },
  } = currentPhoto

  const applyImageTransform = useCallback(() => {
    console.log(filterStyle)
    if (!originalImageUrl) return

    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    if (!context) return

    const img = new Image()
    img.src = originalImageUrl

    img.onload = () => {
      const defaultAspectRatio = img.width / img.height
      const finalAspectRatio = aspectRatio === 0 ? defaultAspectRatio : aspectRatio

      let aspectWidth = img.width
      let aspectHeight = aspectWidth / finalAspectRatio

      aspectHeight = Math.round(aspectHeight * 100) / 100

      if (aspectHeight > img.height) {
        aspectHeight = img.height
        aspectWidth = aspectHeight * finalAspectRatio
      }

      // Применяем zoom к ширине и высоте
      const sWidth = aspectWidth / zoom
      const sHeight = aspectHeight / zoom

      // Определяем начальную позицию для масштабирования
      const sx = (img.width - sWidth) / 2
      const sy = (img.height - sHeight) / 2

      // Устанавливаем размеры канваса
      canvas.width = aspectWidth
      canvas.height = aspectHeight

      context.clearRect(0, 0, canvas.width, canvas.height)
      // Применяем фильтр
      context.filter = filterStyle

      context.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, canvas.width, canvas.height)

      // Сохраняем итоговое изображение
      canvas.toBlob(blob => {
        if (!blob) return
        const updatedImageUrl = URL.createObjectURL(blob)

        dispatch(updateUrlPhoto({ id, updatedImageUrl }))
      })
    }
  }, [id, originalImageUrl, aspectRatio, zoom, filterStyle, dispatch])

  useDebouncedEffect(
    () => {
      applyImageTransform()
    },
    [aspectRatio, zoom, filterStyle, applyImageTransform],
    500
  )

  return {}
}
