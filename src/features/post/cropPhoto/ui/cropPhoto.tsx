import { selectPhotos } from '@/entities/post'
import { DialogBody, DialogContent } from '@wandrehappen/ui-kit'
import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { CreatePostHeader } from '@/features/post/ui/createPostHeader'
import { AspectPanel } from '@/features/post/cropPhoto/ui/aspectPanel/aspectPanel'
import s from './cropPhoto.module.scss'
import { ZoomPanel } from '@/features/post/cropPhoto/ui/zoomPanel/zoomPanel'

export const CropPhoto = () => {
  const photos = useSelector(selectPhotos)
  const [activeIcon, setActiveIcon] = useState<string | null>(null)
  const [imageStyle, setImageStyle] = useState({
    objectFit: 'cover' as 'cover' | 'contain',
    paddingBottom: '100%',
  })

  const toggleIcon = (icon: 'zoom' | 'crop' | 'gallery') => {
    setActiveIcon(activeIcon === icon ? null : icon)
  }

  const handleAspectChange = (aspectConfig: {
    ratio: number | null
    objectFit: 'contain' | 'cover'
    paddingBottom: string
  }) => {
    setImageStyle({
      objectFit: aspectConfig.objectFit,
      paddingBottom: aspectConfig.paddingBottom,
    })
  }

  return (
    <>
      <DialogContent>
        <CreatePostHeader title={'Cropping'} nextButtonText={'Next'} />
        <DialogBody style={{ maxWidth: '500px' }}>
          <div
            style={{
              width: '100%',
              paddingBottom: imageStyle.paddingBottom,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Image
              src={photos[0].originalImageUrl}
              fill
              alt={'some picture'}
              style={{
                objectFit: imageStyle.objectFit,
              }}
            />
            <div className={s.iconContainer}>
              <AspectPanel
                activeIcon={activeIcon}
                toggleIcon={toggleIcon}
                onAspectChange={handleAspectChange}
              />
              <ZoomPanel activeIcon={activeIcon} toggleIcon={toggleIcon} />
            </div>
          </div>
        </DialogBody>
      </DialogContent>
    </>
  )
}
