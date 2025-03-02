import { ImageCarousel, selectPhotos } from '@/entities/post'
import { DialogBody, DialogContent } from '@wandrehappen/ui-kit'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { CreatePostHeader } from '@/features/post/ui/createPostHeader'
import { AspectPanel } from '@/features/post/cropPhoto/ui/aspectPanel/aspectPanel'
import s from './cropPhoto.module.scss'
import { ZoomPanel } from '@/features/post/cropPhoto/ui/zoomPanel/zoomPanel'
import { useCrop } from '@/features/post/cropPhoto/lib/useCrop'

type ImageState = {
  scale: number
  objectFit: 'cover' | 'contain'
  paddingBottom: string
}

export const CropPhoto = () => {
  const { applyCropHandler, originalImageUrl, setCurrentIndex, photosForRender } = useCrop()
  const photos = useSelector(selectPhotos)
  const [activeIcon, setActiveIcon] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Храним состояние для каждого изображения
  const [imagesState, setImagesState] = useState<Record<string, ImageState>>(() => {
    // Инициализируем начальное состояние для каждого изображения
    const initialState: Record<string, ImageState> = {}
    photos.forEach(photo => {
      initialState[photo.id] = {
        scale: 1,
        objectFit: 'cover',
        paddingBottom: '100%'
      }
    })
    return initialState
  })

  // Обработчик смены изображения
  const handleImageChange = (index: number) => {
    setCurrentIndex(index)
    setCurrentImageIndex(index)
  }

  const getCurrentImageState = () => {
    const currentPhotoId = photos[currentImageIndex].id
    return imagesState[currentPhotoId]
  }

  const handleZoomChange = (newScale: number) => {
    const currentPhotoId = photos[currentImageIndex].id
    
    // Обновляем состояние для текущего изображения
    setImagesState(prev => ({
      ...prev,
      [currentPhotoId]: {
        ...prev[currentPhotoId],
        scale: newScale
      }
    }))

    applyCropHandler({
      scale: newScale,
      aspectRatio: {
        objectFit: imagesState[currentPhotoId].objectFit,
        paddingBottom: imagesState[currentPhotoId].paddingBottom,
      },
    })
  }

  const handleAspectChange = (aspectConfig: {
    ratio: number | null
    objectFit: 'contain' | 'cover'
    paddingBottom: string
  }) => {
    const currentPhotoId = photos[currentImageIndex].id
    
    // Обновляем состояние для текущего изображения
    setImagesState(prev => ({
      ...prev,
      [currentPhotoId]: {
        ...prev[currentPhotoId],
        objectFit: aspectConfig.objectFit,
        paddingBottom: aspectConfig.paddingBottom,
      }
    }))

    applyCropHandler({
      scale: imagesState[currentPhotoId].scale,
      aspectRatio: {
        objectFit: aspectConfig.objectFit,
        paddingBottom: aspectConfig.paddingBottom,
      },
    })
  }

  const toggleIcon = (icon: 'zoom' | 'crop' | 'gallery') => {
    setActiveIcon(activeIcon === icon ? null : icon)
  }

  const currentState = getCurrentImageState()

  return (
    <DialogContent className={s.content}>
      <CreatePostHeader title={'Cropping'} nextButtonText={'Next'} />
      <DialogBody className={s.body}>
        <div className={s.frameContainer}>
          <div className={s.imageWrapper}>
            <ImageCarousel 
              images={photosForRender} 
              currentIndexCb={handleImageChange}
              className={s.carousel}
            />
          </div>
          <div className={s.iconContainer}>
            <AspectPanel
              activeIcon={activeIcon}
              toggleIcon={toggleIcon}
              onAspectChange={handleAspectChange}
            />
            <ZoomPanel
              activeIcon={activeIcon}
              toggleIcon={toggleIcon}
              onZoomChange={handleZoomChange}
              currentScale={currentState.scale}
            />
          </div>
        </div>
      </DialogBody>
    </DialogContent>
  )
}
