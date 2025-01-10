import { selectPhotos } from '@/widgets/createPost'
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
  // const [crop, setCrop] = useState<Crop>({
  //   // aspect: 1,
  // })
  const photos = useSelector(selectPhotos)

  return (
    <>
      <DialogHeader>
        <DialogTitle>Cropping</DialogTitle>
      </DialogHeader>
      <DialogBody>
        {/*<ReactCrop crop={crop} onChange={c => setCrop(c)}>*/}
        <div style={{ maxWidth: '100%', position: 'relative' }}>
          <Image
            src={URL.createObjectURL(photos[0].file)}
            alt={'1'}
            width={100}
            height={100}
            style={{ width: '100%', height: 'auto' }}
          />
          <div className={s.iconContainer}>
            <div className={s.iconWrapper}>
              <Expand />
            </div>
            <div className={s.iconWrapper}>
              <MaximizeOutline />
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
