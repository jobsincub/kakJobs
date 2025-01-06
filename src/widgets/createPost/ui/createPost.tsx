'use client'
import { AddPhoto } from '@/features/post/addPhoto'
import { CropPhoto } from '@/features/post/cropPhoto'
import { Button, Dialog, DialogContent, DialogTrigger } from '@wandrehappen/ui-kit'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectStep } from '../model/postSlice'
import s from './createPost.module.scss'

export const CreatePost = () => {
  // const [crop, setCrop] = useState<Crop>()

  const step = useSelector(selectStep)

  const renderContentByStep = () => {
    switch (step) {
      case 1:
        return <AddPhoto />
      case 2:
        return <CropPhoto />
      case 3:
      // return <ReviewPost />
      // Добавьте другие случаи по мере необходимости
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
