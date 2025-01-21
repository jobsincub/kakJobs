import { nextStep, previousStep, selectPhotos } from '@/entities/post'
import {
  ArrowIos,
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
import s from './cropPhoto.module.scss'
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Area, Point } from 'react-easy-crop'
import { Swiper as SwiperType } from 'swiper'
import CustomSwiper from '@/features/post/cropPhoto/ui/customSwiper'

// const aspectRatios = [
//   { value: 4 / 3, text: '4/3' },
//   { value: 16 / 9, text: '16/9' },
//   { value: 1 / 2, text: '1/2' },
// ]

export const CropPhoto = () => {
  const photos = useSelector(selectPhotos)
  const dispatch = useDispatch()

  // const [isAddPhotoVisible, setAddPhotoVisible] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
  const [aspect, setAspect] = useState<number>()
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | string>()

  const [activeIcon, setActiveIcon] = useState<'zoom' | 'crop' | 'gallery' | null>(null)

  // const [images, setImages] = useState(photos[0].imageUrl)
  // const [selectedPhoto, setSelectedPhoto] = useState(null)
  console.log(photos[0].imageUrl)

  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const toggleIcon = (icon: 'zoom' | 'crop' | 'gallery') => {
    setActiveIcon(prev => (prev === icon ? null : icon))
  }

  const handleSwiper = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }

  const handleNextStep = () => {
    dispatch(nextStep())
  }

  const handlePrevStep = () => {
    dispatch(previousStep())
  }

  // const setPhotoToCrop = (file: string) => {
  //   // setPhoto([...file])
  // }

  // const handleAspectChange = (newAspect: number) => {
  //   setAspect(newAspect) // Обновляем соотношение сторон
  //   if (images) {
  //     // После установки нового аспекта сразу обрезаем фото
  //     const cropArea = {
  //       x: crop.x,
  //       y: crop.y,
  //       width: 300, // Здесь можно настроить ширину
  //       height: 300 * (1 / newAspect), // Пример: расчет высоты с учетом аспекта
  //     }
  //     onCropComplete(null, cropArea) // Вызываем onCropComplete для немедленного обновления
  //   }
  // }

  // const onCropComplete = async (croppedArea: any, croppedAreaPixels: any) => {
  //   const croppedImage = await getCroppedImg(images, croppedAreaPixels)
  //   setImages(croppedImage)
  //   // Здесь можно обработать croppedImage, например, показать пользователю
  // }

  // const addPhotoToGalleryHandler = () => {
  //   setAddPhotoVisible(true)
  //   setTimeout(() => {
  //     setAddPhotoVisible(false)
  //   }, 5000)
  // }

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
            <CustomSwiper
              handleSwiper={handleSwiper}
              isBeginning={isBeginning}
              isEnd={isEnd}
              setCroppedAreaPixels={setCroppedAreaPixels}
              crop={crop}
              aspect={aspect}
              zoom={zoom}
              setCrop={setCrop}
              setZoom={setZoom}
            />
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
                          // onClick={() => setPhotoToCrop(photo.imageUrl)}
                        />
                      </div>
                    )
                  })}
                  <PlusCircleOutline />
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogBody>
    </DialogContent>
  )
}
