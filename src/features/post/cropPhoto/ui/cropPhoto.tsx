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
import Image from 'next/image'
import React, { ChangeEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import s from './cropPhoto.module.scss'
import ReactCrop, { Crop } from 'react-image-crop'

export const CropPhoto = () => {
  const photos = useSelector(selectPhotos)
  const [active, setActive] = useState(false)
  const [scale, setScale] = useState(1)
  const [crop, setCrop] = useState<Crop>()

  const onClickHandler = () => {
    setActive(true)
  }

  const handleScale = (e: ChangeEvent<HTMLInputElement>) => {
    setScale(+e.currentTarget.value)
  }

  console.log(photos)

  return (
    <>
      <DialogHeader>
        <DialogTitle>Cropping</DialogTitle>
      </DialogHeader>
      <DialogBody>
        {/*<Image src={photos[0].file} alt={'1'} width={300} height={300}></Image>*/}
        <div style={{ maxWidth: '100%', position: 'relative' }}>
          <ReactCrop crop={crop} onChange={(c, percentageCrop) => setCrop(percentageCrop)}>
            <Image
              src={photos[0].file}
              alt={'1'}
              width={100}
              height={100}
              style={{ width: '100%', height: 'auto', transform: `scale(${scale})` }}
            />
          </ReactCrop>
          <div className={s.iconContainer}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div className={s.iconWrapper}>
                <Expand />
              </div>
              <div className={s.iconWrapper} onClick={onClickHandler}>
                {active && (
                  <div className={s.zoomContainer}>
                    <input type={'range'} value={scale} onChange={e => handleScale(e)} />
                  </div>
                )}
                {active ? <MaximizeFill /> : <MaximizeOutline />}
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
