// CustomSwiper.tsx
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Controller, Navigation, Pagination } from 'swiper/modules'
import s from './cropPhoto.module.scss'
import { ArrowLeft, ArrowRight } from '@wandrehappen/ui-kit'
import Cropper, { Area } from 'react-easy-crop'
import { useSelector } from 'react-redux'
import 'swiper/css'
import 'swiper/scss/navigation'
import 'swiper/css/pagination'
import 'swiper/css/controller'
import { selectPhotos } from '@/entities/post' // Импортируйте ваш CSS-модуль

interface CustomSwiperProps {
  handleSwiper: (swiper: any) => void
  isBeginning: boolean
  isEnd: boolean
  setCroppedAreaPixels: (croppedAreaPixels: any) => void
  crop: any
  aspect: any
  setCrop: (crop: any) => void
  zoom: any
  setZoom: (zoom: number) => void
}

const CustomSwiper: React.FC<CustomSwiperProps> = ({
  handleSwiper,
  isBeginning,
  isEnd,
  crop,
  setCrop,
  zoom,
  setZoom,
  aspect,
  setCroppedAreaPixels,
}) => {
  const photos = useSelector(selectPhotos)

  const [images, setImages] = useState(photos)

  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels)
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
      <div
        className={`${s.iconWrapper} ${s.customPrev}`}
        style={isBeginning ? { display: 'none' } : { display: 'flex' }}
      >
        <ArrowLeft />
      </div>
      <div
        className={`${s.iconWrapper} ${s.customNext}`}
        style={isEnd ? { display: 'none' } : { display: 'flex' }}
      >
        <ArrowRight />
      </div>
      {images.length > 0 &&
        images.map(photo => (
          <SwiperSlide key={photo.id}>
            <Cropper
              key={photo.id}
              crop={crop}
              image={photo.imageUrl}
              aspect={aspect}
              onCropChange={setCrop}
              zoom={zoom}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
              showGrid={false}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default CustomSwiper
