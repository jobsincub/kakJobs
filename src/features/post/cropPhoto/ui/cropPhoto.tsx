import { ImageCarousel } from '@/entities/post'
import { ImageCarouselHandle } from '@/entities/post/ui/ImageCarousel/ImageCarousel'
import { useCrop } from '@/features/post/cropPhoto/lib/useCrop'
import { AspectPanel } from '@/features/post/cropPhoto/ui/aspectPanel/aspectPanel'
import { GalleryPanel } from '@/features/post/cropPhoto/ui/galleryPanel/galleryPanel'
import { ZoomPanel } from '@/features/post/cropPhoto/ui/zoomPanel/zoomPanel'
import { CreatePostHeader } from '@/features/post/ui/createPostHeader'
import { DialogBody, DialogContent } from '@wandrehappen/ui-kit'
import React, { useRef, useState } from 'react'
import s from './cropPhoto.module.scss'

export const CropPhoto = () => {
  const { photosForRender, setCurrentIndex, setAspectRatioHandler, setZoomHandler } = useCrop()

  const carouselRef = useRef<ImageCarouselHandle>(null)
  const [activeIcon, setActiveIcon] = useState<string | null>(null)

  const toggleIcon = (icon: 'zoom' | 'crop' | 'gallery') => {
    setActiveIcon(activeIcon === icon ? null : icon)
  }

  return (
    <DialogContent className={s.content}>
      <CreatePostHeader title={'Cropping'} nextButtonText={'Next'} />
      <DialogBody className={s.body}>
        <div className={s.frameContainer}>
          <ImageCarousel
            images={photosForRender}
            currentIndexCb={setCurrentIndex}
            ref={carouselRef}
          />
          <div className={s.iconContainer}>
            <div style={{ display: 'flex', gap: '20px' }}>
              <AspectPanel
                activeIcon={activeIcon}
                toggleIcon={toggleIcon}
                onAspectChange={setAspectRatioHandler}
              />
              <ZoomPanel
                activeIcon={activeIcon}
                toggleIcon={toggleIcon}
                onZoomChange={setZoomHandler}
              />
            </div>
            <div style={{ position: 'absolute', left: '440px' }}>
              <GalleryPanel
                activeIcon={activeIcon}
                toggleIcon={toggleIcon}
                carouselRef={carouselRef}
              />
            </div>
          </div>
        </div>
      </DialogBody>
    </DialogContent>
  )
}
