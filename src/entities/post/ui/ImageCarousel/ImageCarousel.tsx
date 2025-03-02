'use client'

import { clsx } from 'clsx'
import Image from 'next/image'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import type { Swiper as SwiperType } from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import s from './ImageCarousel.module.scss'

type Image = {
  id: string
  imageUrl: string
}

type Props = {
  images: Image[]
  currentIndexCb?: (index: number) => void
  className?: string
}

export const ImageCarousel = ({ images, currentIndexCb, className }: Props) => {
  const handleSlideChange = (swiper: SwiperType) => {
    if (currentIndexCb) {
      currentIndexCb(swiper.activeIndex)
    }
  }

  return (
    <div className={clsx(s.wrapper, className)}>
      <Swiper
        className={s.swiper}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={5}
        onSlideChange={handleSlideChange}
      >
        {images.map(image => (
          <SwiperSlide key={image.id} className={clsx(s.wrapper, className)}>
            <div className={s.imageContainer}>
              <Image
                alt={`Post Image ${image.id}`}
                src={image.imageUrl}
                fill
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
