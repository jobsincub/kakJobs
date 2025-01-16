import { selectPhotos } from '@/entities/post'
import { DialogBody, DialogContent, DialogDescription } from '@wandrehappen/ui-kit'
import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { CreatePostHeader } from '../../ui/createPostHeader'
import s from './filters.module.scss'
import { ImageFilterSelector } from './ImageFilterSelector'

export const Filters = () => {
  const photos = useSelector(selectPhotos)

  const currentImage = photos[0].imageUrl
  console.log(currentImage)

  const [selectedImage, setSelectedImage] = useState<string>(currentImage)
  console.log(selectedImage)

  return (
    <DialogContent className={s.content}>
      <CreatePostHeader title={'Filters'} nextButtonText={'Next'} />
      <DialogBody className={s.body}>
        <DialogDescription style={{ display: 'none' }}>
          This dialog allows you to enhance your photo by applying various filters. Experiment with
          different styles to achieve the desired look before.
        </DialogDescription>
        <Image
          src={selectedImage}
          alt={'1'}
          width={490}
          height={504}
          style={{
            // aspectRatio: '1 / 1',
            objectFit: 'cover',
          }}
          className={s.test}
        />
        <ImageFilterSelector image={currentImage} onImageSelect={setSelectedImage} />
      </DialogBody>
    </DialogContent>
  )
}
