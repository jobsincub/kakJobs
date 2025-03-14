'use client'
import {
  Button,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  ImageOutline,
  Typography,
} from '@wandrehappen/ui-kit'
import React from 'react'
import { useFileUpload } from '../lib/useFileUpload'
import s from './addPhoto.module.scss'
import { FileUploadTrigger } from './FileUploadTrigger/fileUploadTrigger'

export const AddPhoto = () => {
  const { fileDropHandler, dragLeaveHandler, dragOver, dragOverHandler, error } = useFileUpload()
  return (
    <DialogContent className={s.content}>
      <DialogHeader>
        <DialogTitle>Add Photo</DialogTitle>
      </DialogHeader>
      <DialogBody className={s.body}>
        <DialogDescription style={{ display: 'none' }}>
          This dialog allows you to add a photo by dragging and dropping a file or selecting one
          from your computer.
        </DialogDescription>
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
          <FileUploadTrigger multiple={false}>
            <Button>Select from Computer</Button>
          </FileUploadTrigger>
          <Button variant={'tertiary'}>Open Draft</Button>
        </div>
      </DialogBody>
    </DialogContent>
  )
}
