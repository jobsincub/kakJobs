import {
  Button,
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogTitle,
  ImageOutline,
  Input,
  Typography,
} from '@wandrehappen/ui-kit'
import React, { ChangeEvent, DragEvent, useRef, useState } from 'react'
import s from 'src/features/post/createPost/ui/addPhoto.module.scss'
import { z } from 'zod'

const MAX_FILE_SIZE = 20 * 1024 * 1024 // 20 MB
const ACCEPTED_FORMATS = ['image/jpeg', 'image/png']

const fileSchema = z.object({
  name: z.string(),
  type: z.string().refine(type => ACCEPTED_FORMATS.includes(type), {
    message: 'The photo must have JPEG or PNG format',
  }),
  size: z.number().max(MAX_FILE_SIZE, { message: 'The photo must be less than 20 MB' }),
})

export const AddPhoto = () => {
  // const dispatch = useAppDispatch()
  const [dragOver, setDragOver] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const fileUploadCallback = (file: File) => {
    const result = fileSchema.safeParse(file)
    if (result.success) {
      // dispatch(setImage(file))
      setError(null)
    } else {
      setError(result.error.errors[0].message)
    }
  }

  const updateImageHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      fileUploadCallback(event.target.files[0])
    }
  }

  const ImageUploadHandler = () => {
    fileInputRef.current?.click()
  }

  const dragOverHandler = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setDragOver(true)
  }

  const dragLeaveHandler = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setDragOver(false)
  }

  const fileDropHandler = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      fileUploadCallback(event.dataTransfer.files[0])
    }
    setDragOver(false)
  }

  return (
    <DialogContent className={s.content}>
      <DialogHeader>
        <DialogTitle>Add Photo</DialogTitle>
      </DialogHeader>
      <DialogBody className={s.body}>
        <div
          className={`${s.card} ${dragOver ? s.dragOver : ''}`}
          onDragOver={dragOverHandler}
          onDragLeave={dragLeaveHandler}
          onDrop={fileDropHandler}
        >
          <ImageOutline width={'40'} height={'40'} />
          <Typography variant={'regular16'}>Drag and drop image here</Typography>
        </div>
        <Typography color={'danger-500'}>{error}</Typography>
        <div className={s.buttonsWrapper}>
          <Button onClick={ImageUploadHandler}>Select from Computer</Button>
          <Button variant={'tertiary'}>Open Draft</Button>
          <Input
            ref={fileInputRef}
            type={'file'}
            accept={'image/png, image/jpeg'}
            onChange={updateImageHandler}
            style={{ display: 'none' }}
          />
        </div>
      </DialogBody>
    </DialogContent>
  )
}
