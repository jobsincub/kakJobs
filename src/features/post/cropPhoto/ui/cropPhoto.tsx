import { selectPhotos } from '@/entities/post'
import {
  DialogBody,
  DialogHeader,
  DialogTitle,
  Expand,
  ImageOutline,
  MaximizeOutline,
} from '@wandrehappen/ui-kit'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import s from './cropPhoto.module.scss'

export const CropPhoto = () => {
  const photos = useSelector(selectPhotos)

  return (
    <>
      <DialogHeader>
        <DialogTitle>Cropping</DialogTitle>
      </DialogHeader>
      <DialogBody>
        <Image src={photos[0].file} alt={'1'} width={300} height={300}></Image>
        {/*<ReactCrop crop={crop} onChange={c => setCrop(c)}>*/}
        <div style={{ maxWidth: '100%', position: 'relative' }}>
          <Image
            src={photos[0].file}
            alt={'1'}
            width={100}
            height={100}
            style={{ width: '100%', height: 'auto' }}
          />
          <div className={s.iconContainer}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div className={s.iconWrapper}>
                <Expand />
              </div>
              <div className={s.iconWrapper}>
                <MaximizeOutline />
              </div>
            </div>
            <div className={s.iconWrapper}>
              <ImageOutline />
            </div>
          </div>
        </div>
        {/*</ReactCrop>*/}
      </DialogBody>
    </>
  )
}
