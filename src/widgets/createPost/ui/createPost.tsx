'use client'
import { AddPhoto } from '@/features/post/addPhoto'
import { CropPhoto } from '@/features/post/cropPhoto'
import { Button, Dialog, DialogContent, DialogTrigger } from '@wandrehappen/ui-kit'
import React from 'react'
import { useSelector } from 'react-redux'
import { OrderStatus, selectStep } from '../model/postSlice'
import s from './createPost.module.scss'
import { PublishDialogContent } from '@/features/post/publish'

export const CreatePost = () => {
  // const [crop, setCrop] = useState<Crop>()

  const step = useSelector(selectStep)

  const renderContentByStep = () => {
    switch (step) {
      case OrderStatus['addPhoto']:
        return <AddPhoto />
      case OrderStatus['Cropping']:
        return <CropPhoto />
      case OrderStatus['Filters']:
      // return <ReviewPost />
      case OrderStatus['Publications']:
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
      <DialogContent className={s.content}>{renderContentByStep()}</DialogContent>
    </Dialog>
  )
}
