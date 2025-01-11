'use client'
import { OrderStatus, selectStep } from '@/entities/post'
import { AddPhoto } from '@/features/post/addPhoto'
import { CropPhoto } from '@/features/post/cropPhoto'
import { Filters } from '@/features/post/filters'

import { Button, Dialog, DialogTrigger } from '@wandrehappen/ui-kit'
import React from 'react'
import { useSelector } from 'react-redux'
import { PublishDialogContent } from '@/features/post/publish'

export const CreatePost = () => {
  // const [crop, setCrop] = useState<Crop>()

  const step = useSelector(selectStep)

  const renderContentByStep = () => {
    switch (step) {
      case OrderStatus.addPhoto:
        return <AddPhoto />
      case OrderStatus.Cropping:
        return <CropPhoto />
      case OrderStatus.Filters:
        return <Filters />
      case OrderStatus.Publications:
        return <PublishDialogContent />
      default:
        return null
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add post</Button>
      </DialogTrigger>
      {renderContentByStep()}
    </Dialog>
  )
}
