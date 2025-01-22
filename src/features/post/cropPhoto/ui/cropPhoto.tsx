import { nextStep, previousStep, selectPhotos } from '@/entities/post'
import {
  ArrowIos,
  Button,
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogTitle,
  ImageFill,
  ImageOutline,
  PlusCircleOutline,
} from '@wandrehappen/ui-kit'
import s from './cropPhoto.module.scss'
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Point } from 'react-easy-crop'
import { CustomSwiper } from '@/features/post/cropPhoto/ui/customSwiper'
import { AspectPanel } from '@/features/post/cropPhoto/ui/AspectPanel'
import { ZoomPanel } from '@/features/post/cropPhoto/ui/ZoomPanel'

// const aspectRatios = [
//   { value: 4 / 3, text: '4/3' },
//   { value: 16 / 9, text: '16/9' },
//   { value: 1 / 2, text: '1/2' },
// ]

type PhotoType = {}

export const CropPhoto = () => {
  const photos = useSelector(selectPhotos)
  const dispatch = useDispatch()

  console.log(photos)
  const [zoom, setZoom] = useState(1)
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
  const [aspect, setAspect] = useState<number>(4 / 3)

  const [activeIcon, setActiveIcon] = useState<'zoom' | 'crop' | 'gallery' | null>(null)

  const [images, setImages] = useState(photos)
  const [selectedImg, setSelectedImg] = useState<null | string>(null)
  // console.log(photos[0].imageUrl)

  const toggleIcon = (icon: 'zoom' | 'crop' | 'gallery') => {
    setActiveIcon(prev => (prev === icon ? null : icon))
  }

  const handleNextStep = () => {
    dispatch(nextStep())
  }

  const handlePrevStep = () => {
    dispatch(previousStep())
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
            {selectedImg && (
              <CustomSwiper
                id={selectedImg.id}
                imageUrl={selectedImg.originalImageUrl}
                crop={selectedImg.crop}
                aspect={selectedImg.aspect}
                zoom={selectedImg.zoom}
                setCrop={setCrop}
                setZoom={setZoom}
              />
            )}
          </div>
          <div className={s.iconContainer}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <AspectPanel activeIcon={activeIcon} setAspect={setAspect} toggleIcon={toggleIcon} />
              <ZoomPanel
                activeIcon={activeIcon}
                toggleIcon={toggleIcon}
                zoom={zoom}
                setZoom={setZoom}
              />
            </div>
            <div className={s.iconWrapper} onClick={() => toggleIcon('gallery')}>
              {activeIcon === 'gallery' ? <ImageFill /> : <ImageOutline />}
              {activeIcon === 'gallery' && (
                <div className={s.galleryContainer}>
                  {photos.map(photo => {
                    return (
                      <div className={s.photoWrapper} key={photo.id}>
                        <Image
                          src={photo.originalImageUrl}
                          key={photo.id}
                          alt={'gallery'}
                          width={80}
                          height={80}
                          className={s.photoInGallery}
                          onClick={() => setSelectedImg(photo)}
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
