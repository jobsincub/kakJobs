'use client'
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
import React from 'react'
import { useAddPhoto } from '../lib/useAddPhoto'
import s from './addPhoto.module.scss'

export const AddPhoto = () => {
  const {
    dragOverHandler,
    dragLeaveHandler,
    dragOver,
    fileDropHandler,
    ImageUploadHandler,
    updateImageHandler,
    fileInputRef,
    error,
  } = useAddPhoto()

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
