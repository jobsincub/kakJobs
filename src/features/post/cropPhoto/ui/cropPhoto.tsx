import { selectPhotos } from '@/entities/post'
import {
  DialogBody,
  DialogHeader,
  DialogTitle,
  Expand,
  ImageOutline,
  MaximizeFill,
  MaximizeOutline,
} from '@wandrehappen/ui-kit'
import React, { ChangeEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import s from './cropPhoto.module.scss'
import ReactCrop, { Crop, PixelCrop } from 'react-image-crop'

export const CropPhoto = () => {
  const photos = useSelector(selectPhotos)
  const [zoomActive, setZoomActive] = useState(false)
  const [isOpenCrop, setIsOpenCrop] = useState(false)
  const [scale, setScale] = useState(1)
  const [crop, setCrop] = useState<Crop>()
  const [aspect, setAspect] = useState<number | undefined>(16 / 9)
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>()

  const onZoomClickHandler = () => {
    setZoomActive(!zoomActive)
  }

  const onCropClickHandler = () => {
    setIsOpenCrop(!isOpenCrop)
  }

  const handleScale = (e: ChangeEvent<HTMLInputElement>) => {
    setScale(+e.currentTarget.value)
  }
  return (
    <>
      <DialogHeader>
        <DialogTitle>Cropping</DialogTitle>
      </DialogHeader>
      <DialogBody>
        {/*<Image src={photos[0].file} alt={'1'} width={300} height={300}></Image>*/}
        <div style={{ maxWidth: '100%', position: 'relative' }}>
          <ReactCrop crop={crop} onChange={c => setCrop(c)} onComplete={c => setCompletedCrop(c)}>
            {/*<Image*/}
            {/*  src={photos[0].file}*/}
            {/*  alt={'1'}*/}
            {/*  width={100}*/}
            {/*  height={100}*/}
            {/*  style={{ width: '100%', height: 'auto', transform: `scale(${scale})` }}*/}
            {/*  onLoad={onImageLoad}*/}
            {/*/>*/}
            <img src={photos[0].file} alt={'Crop me'} />
          </ReactCrop>
          <div className={s.iconContainer}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div className={s.iconWrapper} onClick={onCropClickHandler}>
                {isOpenCrop && (
                  <div className={s.cropContainer}>
                    <ul className={s.list}>
                      <li>
                        <span>Original</span> <ImageOutline />
                      </li>
                      <li>
                        <span>1:1</span>
                      </li>
                      <li>
                        <span>4:5</span>
                      </li>
                      <li>
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
                    <input type={'range'} value={scale} onChange={e => handleScale(e)} />
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
    </>
  )
}
