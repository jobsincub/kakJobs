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
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import s from './cropPhoto.module.scss'
import Cropper, { Point } from 'react-easy-crop'

export const CropPhoto = () => {
  const photos = useSelector(selectPhotos)
  const [zoomActive, setZoomActive] = useState(false)
  const [isOpenCrop, setIsOpenCrop] = useState(false)

  console.log(photos)
  const [zoom, setZoom] = useState(1)
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
  const [aspect, setAspect] = useState<number>()

  const onZoomClickHandler = () => {
    setZoomActive(!zoomActive)
  }

  const onCropClickHandler = () => {
    setIsOpenCrop(!isOpenCrop)
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>Cropping</DialogTitle>
      </DialogHeader>
      <DialogBody>
        {/*<Image src={photos[0].file} alt={'1'} width={300} height={300}></Image>*/}
        <div style={{ minWidth: '500px', minHeight: '500px', position: 'relative' }}>
          <Cropper
            crop={crop}
            aspect={aspect}
            onCropChange={setCrop}
            image={photos[0].file}
            onZoomChange={setZoom}
          />
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
    </>
  )
}
