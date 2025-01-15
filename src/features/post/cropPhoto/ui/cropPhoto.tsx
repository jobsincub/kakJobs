import { nextStep, previousStep, selectPhotos, setPhoto } from '@/entities/post'
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
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from './cropPhoto.module.scss'
import Cropper, { Area, Point } from 'react-easy-crop'
import { useAddPhoto } from '@/features/post/addPhoto/lib/useAddPhoto'

export const CropPhoto = () => {
  const photos = useSelector(selectPhotos)
  const [isZoomActive, setIsZoomActive] = useState(false)
  const [isOpenCrop, setIsOpenCrop] = useState(false)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const { ImageUploadHandler } = useAddPhoto()
  const [selectedPhoto, setSelectedPhoto] = useState(photos[0].file)

  const [zoom, setZoom] = useState(1)
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
  const [aspect, setAspect] = useState<number>()
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | string>()
  const dispatch = useDispatch()

  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }

  console.log('cropped img', croppedAreaPixels)

  const onZoomClickHandler = () => {
    setIsZoomActive(!isZoomActive)
  }

  const onCropClickHandler = () => {
    setIsOpenCrop(!isOpenCrop)
  }

  const onGalleryClickHandler = () => {
    setIsGalleryOpen(!isGalleryOpen)
  }

  const setPhotoToCrop = (file: string) => {
    setSelectedPhoto(file)
  }

  const handleNextStep = () => {
    dispatch(nextStep())
    // dispatch(setPhoto(croppedAreaPixels))
  }

  const handlePrevStep = () => {
    dispatch(previousStep())
  }

  console.log(photos)

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
            <Cropper
              crop={crop}
              aspect={aspect}
              onCropChange={setCrop}
              image={selectedPhoto}
              zoom={zoom}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>
          <div className={s.iconContainer}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div className={s.iconWrapper} onClick={onCropClickHandler}>
                {isOpenCrop && (
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
                {isOpenCrop ? <Expand /> : <Expand fill={'#fffff'} />}
              </div>
              <div className={s.iconWrapper} onClick={onZoomClickHandler}>
                {isZoomActive && (
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
                {isZoomActive ? <MaximizeFill /> : <MaximizeOutline />}
              </div>
            </div>
            <div className={s.iconWrapper} onClick={onGalleryClickHandler}>
              {isGalleryOpen ? <ImageFill /> : <ImageOutline />}
              {isGalleryOpen && (
                <div className={s.galleryContainer}>
                  {photos.map(photo => {
                    return (
                      <div className={s.photoWrapper} key={photo.id}>
                        <Image
                          src={photo.file}
                          key={photo.id}
                          alt={'gallery'}
                          width={80}
                          height={80}
                          className={s.photoInGallery}
                          onClick={() => setPhotoToCrop(photo.file)}
                        />
                      </div>
                    )
                  })}
                  <PlusCircleOutline onClick={() => alert('hello world')} />
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogBody>
    </DialogContent>
  )
}
