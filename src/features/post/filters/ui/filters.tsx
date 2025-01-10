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
import React from 'react'
import { useSelector } from 'react-redux'

export const Filters = () => {
  const photos = useSelector(selectPhotos)
  const currentImage = photos[0].file
  console.log(currentImage)
  return (
    <DialogContent>
      <DialogHeader isCloseIconVisible={false}>
        <Button variant={'link'}>
          <ArrowIos color={'white'} />
        </Button>
        <DialogTitle>Filters</DialogTitle>
        <Button variant={'link'}>Next</Button>
      </DialogHeader>
      <DialogBody>
        <DialogDescription style={{ display: 'none' }}>
          This dialog allows you to enhance your photo by applying various filters. Experiment with
          different styles to achieve the desired look before.
        </DialogDescription>
        <Image
          src={currentImage}
          alt={'1'}
          width={500} // Задаём ширину
          height={300} // Задаём высоту
        />
      </DialogBody>
    </DialogContent>
  )
}
