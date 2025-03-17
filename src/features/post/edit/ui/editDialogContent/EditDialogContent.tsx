'use client'

import {
  Button,
  Dialog,
  DialogBody,
  DialogCloseIcon,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  EditOutline,
  Typography,
} from '@wandrehappen/ui-kit'

import s from './EditDialogContent.module.scss'
import { useEditDialogContent } from '../../lib/useEditDialogContent'
import { ConfirmCloseDialog } from '../confirmCloseDialog'
import { PostForm } from '@/features/post/ui/PostForm'

export const EditDialogContent = () => {
  const {
    updatePostHandler,
    updatePostContent,
    isDialogOpen,
    isConfirmOpen,
    openConfirmHandler,
    confirmCloseHandler,
    setIsConfirmOpen,
    post,
  } = useEditDialogContent()

  return (
    <Dialog open={isDialogOpen} onOpenChange={openConfirmHandler}>
      <DialogTrigger asChild>
        <Typography asChild variant={'regular14'}>
          <Button variant={'link'}>
            <EditOutline />
            {updatePostContent.buttonText}
          </Button>
        </Typography>
      </DialogTrigger>
      <DialogContent className={s.dialogContent}>
        <DialogHeader isCloseIconVisible={false}>
          <DialogTitle>{updatePostContent.titleText}</DialogTitle>
          <DialogCloseIcon />
        </DialogHeader>
        <DialogBody className={s.dialogBody}>
          <div className={s.imagesBox}>Здесь красивая картинка</div>
          <PostForm
            onSubmit={updatePostHandler}
            defaultValues={{ description: post?.description || '' }}
          />
        </DialogBody>
        <ConfirmCloseDialog
          open={isConfirmOpen}
          onOpenChange={setIsConfirmOpen}
          onConfirm={confirmCloseHandler}
        />
      </DialogContent>
    </Dialog>
  )
}
