import { selectPhotos } from '@/entities/post'
import {
  ArrowIos,
  Button,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@wandrehappen/ui-kit'
import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
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
      <DialogHeader isCloseIconVisible={false}>
        <Button variant={'link'}>
          <ArrowIos color={'white'} />
        </Button>
        <DialogTitle>Filters</DialogTitle>
        <Button variant={'link'}>Next</Button>
      </DialogHeader>
      <DialogBody className={s.body}>
        <DialogDescription style={{ display: 'none' }}>
          This dialog allows you to enhance your photo by applying various filters. Experiment with
          different styles to achieve the desired look before.
        </DialogDescription>
        <Image
          src={selectedImage}
          alt={'1'}
          width={490} // Задаём ширину
          height={504} // Задаём высоту
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
