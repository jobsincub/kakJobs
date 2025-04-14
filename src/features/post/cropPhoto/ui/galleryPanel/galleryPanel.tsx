// @flow
import s from '@/features/post/cropPhoto/ui/galleryPanel/galleryPanel.module.scss'
import { Close, ImageFill, ImageOutline, PlusCircleOutline } from '@wandrehappen/ui-kit'
import * as React from 'react'
import { removePhoto, selectPhotos } from '@/entities/post'
import Image from 'next/image'

import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/shared/lib'
import { FileUploadTrigger } from '@/features/post/addPhoto'
import type { ImageCarouselHandle } from '@/entities/post/ui/ImageCarousel/ImageCarousel'

type GalleryPanelProps = {
  activeIcon: string | null
  toggleIcon: (icon: 'zoom' | 'crop' | 'gallery') => void
  carouselRef: React.RefObject<ImageCarouselHandle>
}

export const GalleryPanel = ({ activeIcon, toggleIcon, carouselRef }: GalleryPanelProps) => {
  const photos = useSelector(selectPhotos)
  const dispatch = useAppDispatch()

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
            photos.map((photo, index) => {
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
                    onClick={() => carouselRef.current?.goToSlide(index)}
                  />
                </div>
              )
            })
          )}

          <FileUploadTrigger multiple={true}>
            <button style={{ all: 'unset', cursor: 'pointer' }}>
              <PlusCircleOutline />
            </button>
          </FileUploadTrigger>
        </div>
      )}
      {activeIcon === 'gallery' ? <ImageFill /> : <ImageOutline />}
    </div>
  )
}
