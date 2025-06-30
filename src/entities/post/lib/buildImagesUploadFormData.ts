import { convertUrlToFile } from '@/shared/lib/hooks'
import { Photo } from '../model/postSlice'

export const buildImagesUploadFormData = async (photos: Photo[]) => {
  const formData = new FormData()

  const photoFiles = await Promise.all(
    photos.map(photo =>
      convertUrlToFile({
        fileUrl: photo.updatedImageUrl,
      })
    )
  )

  photoFiles.forEach(photoFile => {
    formData.append('file', photoFile)
  })

  return formData
}
