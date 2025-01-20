import { nextStep, previousStep, selectPhotos, setPhoto } from '@/entities/post'
import {
  ArrowIos,
  ArrowLeft,
  ArrowRight,
  Button,
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Expand,
  ImageFill,
  ImageOutline,
  MaximizeFill,
  MaximizeOutline,
  PlusCircleOutline,
} from '@wandrehappen/ui-kit'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from './cropPhoto.module.scss'
import Cropper, { Area, Point } from 'react-easy-crop'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import { Controller, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/scss/navigation'
import 'swiper/css/pagination'
import 'swiper/css/controller'

const aspectRatios = [
  { value: 4 / 3, text: '4/3' },
  { value: 16 / 9, text: '16/9' },
  { value: 1 / 2, text: '1/2' },
]

export const CropPhoto = () => {
  const photos = useSelector(selectPhotos)
  const dispatch = useDispatch()

  const [activeIcon, setActiveIcon] = useState<'zoom' | 'crop' | 'gallery' | null>(null)

  const toggleIcon = (icon: 'zoom' | 'crop' | 'gallery') => {
    setActiveIcon(prev => (prev === icon ? null : icon))
  }

  const [selectedPhoto, setSelectedPhoto] = useState(photos[0].imageUrl)

  const [zoom, setZoom] = useState(1)
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
  const [aspect, setAspect] = useState<number>()
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | string>()

  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const handleSwiper = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }

  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }
  const setPhotoToCrop = (file: string) => {
    setSelectedPhoto(file)
  }

  const handleNextStep = () => {
    dispatch(nextStep())
  }

  const handlePrevStep = () => {
    dispatch(previousStep())
  }

  const addPhotoToGalleryHandler = () => {
    dispatch(setPhoto(selectedPhoto))
  }

  return (
    <DialogContent>
      <DialogHeader isCloseIconVisible={false}>
        <Button variant={'link'} onClick={handlePrevStep}>
          <ArrowIos color={'white'} />
        </Button>
        <DialogTitle>Cropping</DialogTitle>
        <Button variant={'link'} onClick={handleNextStep}>
          Next
        </Button>
      </DialogHeader>
      <DialogBody style={{ padding: 0 }}>
        <div style={{ width: '430px' }}>
          <div style={{ position: 'relative', width: '100%', height: '430px' }}>
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
                className={s.iconWrapper + ' ' + s.customPrev}
                style={isBeginning ? { display: 'none' } : { display: 'flex' }}
              >
                <ArrowLeft />
              </div>
              <div
                className={s.iconWrapper + ' ' + s.customNext}
                style={isEnd ? { display: 'none' } : { display: 'flex' }}
              >
                <ArrowRight />
              </div>
              {photos.length > 0 &&
                photos.map(photo => (
                  <SwiperSlide key={photo.id}>
                    <Cropper
                      key={photo.id}
                      crop={crop}
                      aspect={aspect}
                      onCropChange={setCrop}
                      image={selectedPhoto}
                      zoom={zoom}
                      onZoomChange={setZoom}
                      onCropComplete={onCropComplete}
                      showGrid={false}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className={s.iconContainer}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div className={s.iconWrapper} onClick={() => toggleIcon('crop')}>
                {activeIcon === 'crop' && (
                  <div className={s.cropContainer}>
                    <ul className={s.list}>
                      <li onClick={() => setAspect(0)}>
                        <span>Original</span> <ImageOutline />
                      </li>
                      <li onClick={() => setAspect(1)}>
                        <span>1:1</span>
                      </li>
                      <li onClick={() => setAspect(4 / 5)}>
                        <span>4:5</span>
                      </li>
                      <li onClick={() => setAspect(16 / 9)}>
                        <span>16:9</span>
                      </li>
                    </ul>
                  </div>
                )}
                {activeIcon === 'crop' ? <Expand /> : <Expand fill={'#fffff'} />}
              </div>
              <div className={s.iconWrapper} onClick={() => toggleIcon('zoom')}>
                {activeIcon === 'zoom' && (
                  <div className={s.zoomContainer}>
                    <input
                      type={'range'}
                      value={zoom}
                      min={1}
                      max={3}
                      step={0.1}
                      onChange={e => setZoom(Number(e.target.value))}
                    />
                  </div>
                )}
                {activeIcon === 'zoom' ? <MaximizeFill /> : <MaximizeOutline />}
              </div>
            </div>
            <div className={s.iconWrapper} onClick={() => toggleIcon('gallery')}>
              {activeIcon === 'gallery' ? <ImageFill /> : <ImageOutline />}
              {activeIcon === 'gallery' && (
                <div className={s.galleryContainer}>
                  {photos.map(photo => {
                    return (
                      <div className={s.photoWrapper} key={photo.id}>
                        <Image
                          src={photo.imageUrl}
                          key={photo.id}
                          alt={'gallery'}
                          width={80}
                          height={80}
                          className={s.photoInGallery}
                          onClick={() => setPhotoToCrop(photo.imageUrl)}
                        />
                      </div>
                    )
                  })}
                  <PlusCircleOutline onClick={addPhotoToGalleryHandler} />
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogBody>
    </DialogContent>
  )
}
