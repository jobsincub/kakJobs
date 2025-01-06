import { selectPhotos } from '@/widgets/createPost'
import { DialogBody, DialogHeader, DialogTitle } from '@wandrehappen/ui-kit'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

export const CropPhoto = () => {
  const photos = useSelector(selectPhotos)

  return (
    <>
      <DialogHeader>
        <DialogTitle>Cropping</DialogTitle>
      </DialogHeader>
      <DialogBody>
        <Image src={URL.createObjectURL(photos[0].file)} alt={'1'} width={300} height={300}></Image>
      </DialogBody>
    </>
  )
}
