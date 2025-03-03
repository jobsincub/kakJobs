import { ImageCarousel } from '@/entities/post'
import { useCrop } from '@/features/post/cropPhoto/lib/useCrop'
import { AspectPanel } from '@/features/post/cropPhoto/ui/aspectPanel/aspectPanel'
import { ZoomPanel } from '@/features/post/cropPhoto/ui/zoomPanel/zoomPanel'
import { CreatePostHeader } from '@/features/post/ui/createPostHeader'
import { DialogBody, DialogContent } from '@wandrehappen/ui-kit'
import React, { useState } from 'react'
import s from './cropPhoto.module.scss'
import { GalleryPanel } from '@/features/post/cropPhoto/ui/galleryPanel/galleryPanel'

export const CropPhoto = () => {
  const { photosForRender, applyZoomDebounce, applyAspectRatio, setCurrentIndex } = useCrop()

  const [activeIcon, setActiveIcon] = useState<string | null>(null)

  const handleZoomChange = (newScale: number) => {
    applyZoomDebounce(newScale)
  }

  const handleAspectChange = (ratio: string) => {
    console.log(ratio)
    applyAspectRatio(ratio)
  }

  const toggleIcon = (icon: 'zoom' | 'crop' | 'gallery') => {
    setActiveIcon(activeIcon === icon ? null : icon)
  }

  return (
    <DialogContent className={s.content}>
      <CreatePostHeader title={'Cropping'} nextButtonText={'Next'} />
      <DialogBody className={s.body}>
        <div className={s.frameContainer}>
          <ImageCarousel images={photosForRender} currentIndexCb={setCurrentIndex} />
          <div className={s.iconContainer}>
            <div style={{ display: 'flex', gap: '20px' }}>
              <AspectPanel
                activeIcon={activeIcon}
                toggleIcon={toggleIcon}
                onAspectChange={handleAspectChange}
              />
              <ZoomPanel
                activeIcon={activeIcon}
                toggleIcon={toggleIcon}
                onZoomChange={handleZoomChange}
              />
            </div>
            <div style={{ position: 'absolute', left: '440px' }}>
              <GalleryPanel activeIcon={activeIcon} toggleIcon={toggleIcon} />
            </div>
          </div>
        </div>
      </DialogBody>
    </DialogContent>
  )
}
