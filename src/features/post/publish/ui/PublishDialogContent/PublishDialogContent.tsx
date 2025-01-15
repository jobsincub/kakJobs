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
import { PublishPostForm } from './PublishPostForm'
import { PUBLISH_POST_FORM_ID } from '../../lib/usePublishPostForm'
import { usePublishDialogContent } from '@/features/post/publish/lib/usePublishDialogContent'
import { previousStep } from '@/entities/post'

export const PublishDialogContent = () => {
  const { dispatch, onSubmit } = usePublishDialogContent()

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
        <Button
          type={'submit'}
          form={PUBLISH_POST_FORM_ID}
          className={s.publishBtn}
          variant={'link'}
        >
          Publish
        </Button>
      </DialogHeader>
      <DialogBody className={s.dialogBody}>
        <div className={s.imagesSlider}>IMAGES SLIDER</div>
        {/* TODO: добавить слайдер фоток */}
        <PublishPostForm onSubmit={onSubmit} />
      </DialogBody>
    </DialogContent>
  )
}
