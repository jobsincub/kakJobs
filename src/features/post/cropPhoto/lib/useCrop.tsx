import { selectPhotos, updatePhoto } from '@/entities/post'
import { useAppDispatch } from '@/shared/lib'
import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { debounce } from '@/shared/lib/hooks/debounce'

export const useCrop = () => {
  const dispatch = useAppDispatch()

  const photos = useSelector(selectPhotos)

  const [currentIndex, setCurrentIndex] = useState(0)

  // Добавляем проверку на пустой массив
  const currentPhoto = photos.length > 0 ? photos[currentIndex] : null

  // Деструктурируем значения с дефолтными значениями для случая пустого массива
  const { id = '', updatedImageUrl = '', originalImageUrl = '' } = currentPhoto || {}

  const photosForRender = useMemo(() => {
    return photos.map(photo => ({ id: photo.id, imageUrl: photo.updatedImageUrl }))
  }, [photos])

  const applyZoomCallback1 = (zoom: number) => {
    // Добавляем проверку на наличие фото
    if (!originalImageUrl) return

    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    if (!context) return

    const img = new Image()
    img.src = originalImageUrl

    img.onload = () => {
      // Задаём размер canvas равным оригинальному размеру картинки,
      // чтобы итоговое изображение не «сжималось».
      canvas.width = img.width
      canvas.height = img.height

      // Рассчитываем ширину и высоту «видимой» области (с учётом zoom)
      // Например, если zoom=2, берём половину изображения по ширине и высоте.
      const sWidth = img.width / zoom
      const sHeight = img.height / zoom

      // Если хотим «зум» по центру, рассчитываем смещения
      const sx = (img.width - sWidth) / 2
      const sy = (img.height - sHeight) / 2

      // Очищаем canvas перед рисованием
      context.clearRect(0, 0, canvas.width, canvas.height)

      // Рисуем «фрагмент» (sx, sy, sWidth, sHeight) в полный размер canvas
      context.drawImage(
        img,
        sx, // Начальная точка вырезаемого фрагмента по X
        sy, // Начальная точка вырезаемого фрагмента по Y
        sWidth, // Ширина вырезаемого фрагмента
        sHeight, // Высота вырезаемого фрагмента
        0, // Координата X, куда рисуем на canvas
        0, // Координата Y, куда рисуем на canvas
        canvas.width, // Ширина в canvas
        canvas.height // Высота в canvas
      )

      // Преобразуем результат в Blob и создаём URL
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

  const applyZoomDebounce = debounce(applyZoomCallback1, 500)

  const applyAspectRatio = (aspectRatio: string) => {
    // Добавляем проверку на наличие фото
    if (!originalImageUrl) return

    console.log('Применение пропорций:', aspectRatio)
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    if (!context) return

    const img = new Image()
    img.src = originalImageUrl

    img.onload = () => {
      // Определяем нужные размеры для canvas, исходя из пропорций
      let aspectWidth = img.width
      let aspectHeight = img.height

      // Вычисляем пропорции для разных форматов
      switch (aspectRatio) {
        case '1:1': {
          aspectWidth = aspectHeight = Math.min(img.width, img.height)
          break
        }
        case '4:5': {
          aspectWidth = img.width
          aspectHeight = img.width * (5 / 4)
          break
        }
        case '16:9': {
          aspectWidth = img.width
          aspectHeight = img.width * (9 / 16)
          break
        }
        default:
          break
      }

      // Устанавливаем размеры canvas
      canvas.width = aspectWidth
      canvas.height = aspectHeight

      // Вычисляем смещения для центрирования фрагмента изображения
      const sx = (img.width - aspectWidth) / 2
      const sy = (img.height - aspectHeight) / 2

      // Очищаем canvas перед рисованием
      context.clearRect(0, 0, canvas.width, canvas.height)

      // Рисуем изображение с нужными размерами и смещением на canvas
      context.drawImage(
        img,
        sx, // Начальная точка вырезаемого фрагмента по X
        sy, // Начальная точка вырезаемого фрагмента по Y
        aspectWidth, // Ширина вырезаемого фрагмента
        aspectHeight, // Высота вырезаемого фрагмента
        0, // Координата X, куда рисуем на canvas
        0, // Координата Y, куда рисуем на canvas
        canvas.width, // Ширина на canvas
        canvas.height // Высота на canvas
      )

      // Преобразуем результат в Blob и создаём URL
      canvas.toBlob(blob => {
        if (!blob) return
        const updatedImageUrl = URL.createObjectURL(blob)

        // Обновляем изображение (если нужно)
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
    applyZoomDebounce,
    updatedImageUrl,
    applyAspectRatio,
  }
}
