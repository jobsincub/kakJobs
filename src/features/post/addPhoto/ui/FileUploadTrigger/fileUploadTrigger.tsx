import { useFileUpload } from '@/features/post/addPhoto/lib/useFileUpload'
import { Button } from '@wandrehappen/ui-kit'
import { ChangeEvent, type ReactNode, useRef } from 'react'
import s from './fileUploadTrigger.module.scss'

type FileUploadTriggerProps = {
  children: ReactNode
  setError?: (error: string | null) => void
  multiple: boolean
  onChange?: () => void
}

export const FileUploadTrigger = ({ children, multiple }: FileUploadTriggerProps) => {
  const { fileUploadCallback } = useFileUpload()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const updateImageHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files) return

    if (multiple) {
      ;[...files].forEach(fileUploadCallback)
    } else {
      fileUploadCallback(files[0])
    }
  }

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        onChange={updateImageHandler}
        accept={'image/png, image/jpeg'}
        style={{ display: 'none' }}
        multiple={multiple}
        className={s.hiddenInput}
      />
      <Button
        asChild
        onClick={() => {
          fileInputRef.current?.click()
        }}
      >
        {children}
      </Button>
    </>
  )
}

FileUploadTrigger.displayName = 'FileUploadTrigger'
