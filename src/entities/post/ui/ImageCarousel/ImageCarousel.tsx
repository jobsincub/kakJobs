'use client'

import Image from 'next/image'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import s from './ImageCarousel.module.scss'

type Image = {
  id: string
  imageUrl: string
}

type ImagesSwiper = {
  images: Image[]
}

export const ImageCarousel = ({ images }: ImagesSwiper) => {
  return (
    <div className={s.swiperWrapper}>
      <Swiper
        modules={[Navigation, Pagination]}
        //navigation={{ nextEl: '.arrow_right', prevEl: '.arrow_left' }}
        navigation
        pagination={{ clickable: true }}
        // navigation={{
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',

        slidesPerView={1}
        spaceBetween={5}
      >
        {images.map(image => (
          <SwiperSlide key={image.id}>
            <Image alt={`Post Image ${image.id}`} src={image.imageUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
