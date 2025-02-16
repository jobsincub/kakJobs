'use client'

import Image from 'next/image'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import s from './ImageCarousel.module.scss'

type Image = {
  id: string
  imageUrl: string
}

type ImagesSwiper = {
  images: Image[]
  currentImageId: (image: Image) => void
}

export const ImageCarousel = ({ images, currentImageId }: ImagesSwiper) => {
  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex

    currentImageId(images[currentIndex])
    console.log(images[currentIndex])
  }
  return (
    <div className={s.swiperWrapper}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={5}
        onSlideChange={handleSlideChange}
      >
        {images.map(image => (
          <SwiperSlide key={image.id}>
            <Image alt={`Post Image ${image.id}`} src={image.imageUrl} width={500} height={500} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
