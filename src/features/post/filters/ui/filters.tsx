import { ImageCarousel, selectPhotos, updatePhoto } from '@/entities/post'
import { useAppDispatch } from '@/shared/lib'
import { DialogBody, DialogContent, DialogDescription } from '@wandrehappen/ui-kit'
import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { CreatePostHeader } from '../../ui/createPostHeader'
import s from './filters.module.scss'
import { ImageFilterSelector } from './ImageFilterSelector'

export const Filters = () => {
  const dispatch = useAppDispatch()

  const photos = useSelector(selectPhotos)

  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const currentImage = photos[currentIndex]

  const photosForRender = useMemo(() => {
    return photos.map(photo => ({ id: photo.id, imageUrl: photo.updatedImageUrl }))
  }, [photos])

  const applyFilterHandler = (filterStyle: string) => {
    const canvas = document.createElement('canvas')

    const context = canvas.getContext('2d')
    if (!context) {
      return
    }

    const img = new Image()
    img.src = currentImage.originalImageUrl

    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height

      context.clearRect(0, 0, canvas.width, canvas.height)

      context.filter = filterStyle
      context.drawImage(img, 0, 0)

      canvas.toBlob(blob => {
        if (!blob) return

        const imageUrl = URL.createObjectURL(blob)
        dispatch(
          updatePhoto({
            id: currentImage.id,
            updatedImageUrl: imageUrl,
          })
        )
      })
    }
  }

  return (
    <DialogContent className={s.content}>
      <CreatePostHeader title={'Filters'} nextButtonText={'Next'} />
      <DialogBody className={s.body}>
        <DialogDescription style={{ display: 'none' }}>
          This dialog allows you to enhance your photo by applying various filters. Experiment with
          different styles to achieve the desired look before.
        </DialogDescription>
        <ImageCarousel images={photosForRender} currentIndexCb={setCurrentIndex} />
        <ImageFilterSelector
          image={currentImage.originalImageUrl}
          selectFilterHandler={applyFilterHandler}
        />
      </DialogBody>
    </DialogContent>
  )
}
