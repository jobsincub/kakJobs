import { setPhoto } from '@/entities/post'
import { useAppDispatch } from '@/shared/lib'
import { ChangeEvent, DragEvent, useRef, useState } from 'react'
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

export const useAddPhoto = () => {
  const dispatch = useAppDispatch()

  const [dragOver, setDragOver] = useState(false)

  const [error, setError] = useState<string | null>(null)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const fileUploadCallback = (file: File) => {
    const result = fileSchema.safeParse(file)
    if (!result.success) {
      setError(result.error.errors[0].message)
      return
    }
    dispatch(setPhoto(URL.createObjectURL(file)))
    setError(null)
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
    const file = event.dataTransfer.files?.[0]
    if (file) fileUploadCallback(file)
    setDragOver(false)
  }

  return {
    dragOverHandler,
    dragLeaveHandler,
    dragOver,
    fileDropHandler,
    error,
    ImageUploadHandler,
    fileInputRef,
    updateImageHandler,
  }
}
