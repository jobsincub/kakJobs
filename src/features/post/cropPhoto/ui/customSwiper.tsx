// CustomSwiper.tsx
import React, { useRef, useState } from 'react'
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
import { selectPhotos, updatePhoto } from '@/entities/post'
import { cropImage } from '@/features/post/cropPhoto/ui/cropImage'
import { useAppDispatch } from '@/shared/lib' // Импортируйте ваш CSS-модуль

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
}) => {
  const photos = useSelector(selectPhotos)
  const dispatch = useAppDispatch()
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const [images, setImages] = useState(photos)

  const [image, setImage] = useState(images[0].imageUrl)

  // const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
  //   setCroppedAreaPixels(croppedAreaPixels)
  // }
  const onCropComplete = (croppedArea: any, croppedAreaPixels: any) => {
    // const croppedImage = cropImage(image, croppedAreaPixels, zoom, aspect, photos[0].id)
    // setImage(croppedImage)

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    // Создаем объект изображения
    const img = new Image()
    img.src = images[0].imageUrl
    img.onload = () => {
      const scaleX = img.width / img.naturalWidth
      const scaleY = img.height / img.naturalHeight

      // Рассчитываем размеры canvas
      if (aspect) {
        canvas.width = crop.width * aspect
        canvas.height = crop.height * aspect
      }

      // Обрезаем изображение
      ctx?.drawImage(
        img,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        canvas.width,
        canvas.height
      )
      console.log(canvas.toDataURL('image/jpeg'))
      if (photos[0].id) {
        dispatch(updatePhoto({ id: photos[0].id, imageUrl: canvas.toDataURL('image/jpeg') }))
      }
    }
    // Здесь можно обработать croppedImage, например, показать пользователю
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
      <canvas ref={canvasRef} style={{ display: 'none' }} />
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
              image={images[0].imageUrl}
              aspect={aspect}
              onCropChange={setCrop}
              zoom={zoom}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
              showGrid={false}
            />
          </SwiperSlide>
        ))}
      {/*<button onClick={onCropComplete}>+</button>*/}
    </Swiper>
  )
}

export default CustomSwiper
