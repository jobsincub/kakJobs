import { nextStep, previousStep, selectPhotos } from '@/entities/post'
import {
  ArrowIos,
  Button,
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Expand,
  ImageOutline,
  MaximizeFill,
  MaximizeOutline,
} from '@wandrehappen/ui-kit'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from './cropPhoto.module.scss'
import Cropper, { Area, Point } from 'react-easy-crop'

export const CropPhoto = () => {
  const photos = useSelector(selectPhotos)
  const [zoomActive, setZoomActive] = useState(false)
  const [isOpenCrop, setIsOpenCrop] = useState(false)

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
    setZoomActive(!zoomActive)
  }

  const onCropClickHandler = () => {
    setIsOpenCrop(!isOpenCrop)
  }

  const handleNextStep = () => {
    dispatch(nextStep())
    // dispatch(setPhoto(croppedAreaPixels))
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
      <DialogBody>
        <div style={{ width: '430px', position: 'relative' }}>
          <div style={{ position: 'relative', width: '100%', height: '430px' }}>
            <Cropper
              crop={crop}
              aspect={aspect}
              onCropChange={setCrop}
              image={photos[0].file}
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
                {zoomActive && (
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
                {zoomActive ? <MaximizeFill /> : <MaximizeOutline />}
              </div>
            </div>
            <div className={s.iconWrapper}>
              <ImageOutline />
            </div>
          </div>
        </div>
      </DialogBody>
    </DialogContent>
  )
}
