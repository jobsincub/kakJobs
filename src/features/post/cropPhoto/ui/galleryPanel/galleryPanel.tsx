// @flow
import s from '@/features/post/cropPhoto/ui/galleryPanel/galleryPanel.module.scss'
import { Close, ImageFill, ImageOutline, PlusCircleOutline } from '@wandrehappen/ui-kit'
import * as React from 'react'
import { removePhoto, selectPhotos } from '@/entities/post'
import Image from 'next/image'

import { useSelector } from 'react-redux'
import { useAddPhoto } from '@/features/post/addPhoto/lib/useAddPhoto'
import { useAppDispatch } from '@/shared/lib'

type GalleryPanelProps = {
  activeIcon: string | null
  toggleIcon: (icon: 'zoom' | 'crop' | 'gallery') => void
}

export const GalleryPanel = ({ activeIcon, toggleIcon }: GalleryPanelProps) => {
  const photos = useSelector(selectPhotos)
  const dispatch = useAppDispatch()
  const { updateImageHandler, fileInputRef } = useAddPhoto()

  const handleAddPhotoClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleContainerClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const removePhotoHandler = (id: string) => {
    dispatch(removePhoto(id))
  }

  return (
    <div className={s.iconWrapper} onClick={() => toggleIcon('gallery')}>
      {activeIcon === 'gallery' && (
        <div className={s.galleryContainer} onClick={handleContainerClick}>
          {photos.length === 0 ? (
            <div className={s.noPhotos}>НЕТ ФОТО</div>
          ) : (
            photos.map(photo => {
              return (
                <div className={s.photoWrapper} key={photo.id}>
                  <button className={s.removeButton} onClick={() => removePhotoHandler(photo.id)}>
                    <Close />
                  </button>
                  <Image
                    src={photo.originalImageUrl}
                    key={photo.id}
                    alt={'gallery'}
                    width={80}
                    height={80}
                    className={s.photoInGallery}
                  />
                </div>
              )
            })
          )}

          <div onClick={handleAddPhotoClick}>
            <PlusCircleOutline />
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={updateImageHandler}
            style={{ display: 'none' }}
            accept="image/jpeg,image/png"
            multiple
          />
        </div>
      )}
      {activeIcon === 'gallery' ? <ImageFill /> : <ImageOutline />}
    </div>
  )
}
