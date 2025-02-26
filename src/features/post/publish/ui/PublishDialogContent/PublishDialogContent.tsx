'use client'

import {
  ArrowIos,
  Button,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@wandrehappen/ui-kit'
import s from './PublishDialogContent.module.scss'
import { usePublishDialogContent } from '../../lib/usePublishDialogContent'
import { ImageCarousel, previousStep } from '@/entities/post'
import { PostForm } from '../../../ui/PostForm'
import { POST_FORM_ID } from '../../../model'

export const PublishDialogContent = () => {
  const { dispatch, publishPostHandler, imagesForCarousel } = usePublishDialogContent()

  return (
    <DialogContent className={s.dialogContent}>
      <DialogHeader isCloseIconVisible={false}>
        <Button className={s.backIconBtn} variant={'link'} onClick={() => dispatch(previousStep())}>
          <ArrowIos />
        </Button>
        <DialogTitle>Publication</DialogTitle>
        <DialogDescription className={'srOnly'}>
          This dialog allows you to publish a new post with a description and images.
        </DialogDescription>
        <Button type={'submit'} form={POST_FORM_ID} className={s.publishBtn} variant={'link'}>
          Publish
        </Button>
      </DialogHeader>
      <DialogBody className={s.dialogBody}>
        <div className={s.imagesSlider}>
          <ImageCarousel images={imagesForCarousel} />
        </div>
        <PostForm onSubmit={publishPostHandler} />
      </DialogBody>
    </DialogContent>
  )
}
