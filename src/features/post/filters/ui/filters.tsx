import { selectPhotos, updatePhoto } from '@/entities/post'
import { useAppDispatch } from '@/shared/lib'
import { DialogBody, DialogContent, DialogDescription } from '@wandrehappen/ui-kit'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { CreatePostHeader } from '../../ui/createPostHeader'
import s from './filters.module.scss'
import { ImageFilterSelector } from './ImageFilterSelector'

export const Filters = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const dispatch = useAppDispatch()

  const photos = useSelector(selectPhotos)

  const currentImage = photos[0]
  console.log(currentImage)

  const [selectedFilter, setSelectedFilter] = useState<string>()

  const applyFilterHandler = (filterStyle: string) => {
    setSelectedFilter(filterStyle)

    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    const img = document.createElement('img')
    img.src = currentImage.imageUrl

    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height

      context.filter = filterStyle
      context.drawImage(img, 0, 0)

      //TODO CHANGE FORMAT
      const dataURL = canvas.toDataURL()
      dispatch(updatePhoto({ id: currentImage.id, imageUrl: currentImage.imageUrl }))

      console.log(dataURL)
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
        <canvas ref={canvasRef} style={{ display: 'none' }} />
        <Image
          src={currentImage.imageUrl}
          alt={'1'}
          width={490}
          height={504}
          style={{
            filter: selectedFilter,
          }}
          className={s.test}
        />
        <ImageFilterSelector
          image={currentImage.imageUrl}
          selectFilterHandler={applyFilterHandler}
        />
      </DialogBody>
    </DialogContent>
  )
}
