'use client'

import { Button, DialogBody, DialogContent, DialogDescription } from '@wandrehappen/ui-kit'
import s from './PublishDialogContent.module.scss'
import { usePublishDialogContent } from '../../lib/usePublishDialogContent'
import { ImageCarousel } from '@/entities/post'
import { PostForm } from '../../../ui/PostForm'
import { POST_FORM_ID } from '../../../model'
import { CreatePostHeader } from '@/features/post/ui/createPostHeader'

export const PublishDialogContent = () => {
  const { publishPostHandler, imagesForCarousel, isSubmitting, publishPostDialog } =
    usePublishDialogContent()

  return (
    <DialogContent className={s.dialogContent}>
      <CreatePostHeader title={publishPostDialog.titleText}>
        <Button
          type={'submit'}
          disabled={isSubmitting}
          form={POST_FORM_ID}
          className={s.publishBtn}
          variant={'link'}
        >
          {publishPostDialog.buttonText}
        </Button>
      </CreatePostHeader>
      <DialogBody className={s.dialogBody}>
        <DialogDescription className={'srOnly'}>
          This dialog allows you to publish a new post with a description and images.
        </DialogDescription>
        <div className={s.imagesSlider}>
          <ImageCarousel images={imagesForCarousel} />
        </div>
        <PostForm onSubmit={publishPostHandler} />
      </DialogBody>
    </DialogContent>
  )
}
