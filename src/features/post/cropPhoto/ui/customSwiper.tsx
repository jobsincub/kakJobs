// CustomSwiper.tsx
import { selectPhotos, updatePhoto } from '@/entities/post'
import { useAppDispatch } from '@/shared/lib' // Импортируйте ваш CSS-модуль
import React, { useState } from 'react'
import Cropper, { Area, Point } from 'react-easy-crop'
import { useSelector } from 'react-redux'
import 'swiper/css'
import 'swiper/scss/navigation'
import 'swiper/css/pagination'
import 'swiper/css/controller'
import { Controller, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import s from './cropPhoto.module.scss'
import { NavigationButtons } from '@/features/post/cropPhoto/ui/NavigationButtons'
import { Swiper as SwiperType } from 'swiper'

type CustomSwiperProps = {
  crop: any
  setCrop: any
  aspect: any
  zoom: any
  setZoom: any
}

export const CustomSwiper = ({ crop, setCrop, aspect, zoom, setZoom }: CustomSwiperProps) => {
  const photos = useSelector(selectPhotos)
  const dispatch = useAppDispatch()

  const [images, setImages] = useState(photos)

  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const handleSwiper = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }

  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    const img = new Image()
    img.src = images[0].originalImageUrl

    // Создаем объект изображения
    img.onload = () => {
      const scaleX = img.naturalWidth / img.width
      const scaleY = img.naturalHeight / img.height

      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      // Рассчитываем размеры canvas

      canvas.width = croppedAreaPixels.width
      canvas.height = croppedAreaPixels.height
      // Обрезаем изображение

      ctx?.drawImage(
        img,
        croppedAreaPixels.x * scaleX,
        croppedAreaPixels.y * scaleY,
        croppedAreaPixels.width * scaleX,
        croppedAreaPixels.height * scaleY,
        0,
        0,
        canvas.width,
        canvas.height
      )

      canvas.toBlob(blob => {
        console.log(blob)
        if (!blob) return
        console.log(blob)

        const imageUrl = URL.createObjectURL(blob)
        dispatch(
          updatePhoto({
            id: photos[0].id,
            updatedImageUrl: imageUrl,
          })
        )
        console.log(imageUrl)
      })
    }
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Controller]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation={{
        prevEl: `.${s.customPrev}`,
        nextEl: `.${s.customNext}`,
      }}
      onSwiper={handleSwiper}
      onSlideChange={handleSwiper}
      className={s.swiper}
    >
      <NavigationButtons isBeginning={isBeginning} isEnd={isEnd} />
      <SwiperSlide>
        <Cropper
          crop={crop}
          image={images[0].updatedImageUrl}
          aspect={aspect}
          onCropChange={setCrop}
          zoom={zoom}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
          showGrid={false}
          objectFit={'cover'}
        />
      </SwiperSlide>
    </Swiper>
  )
}
