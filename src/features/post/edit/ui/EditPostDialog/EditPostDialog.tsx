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
import s from './EditPostDialog.module.scss'
import { useEditDialogContent } from '../../lib/useEditDialogContent'
import { ConfirmCloseDialog } from './СonfirmCloseDialog'
import { PostForm } from '@/features/post/ui/PostForm'

export const EditPostDialog = () => {
  const {
    updatePostHandler,
    updatePostContent,
    isEditPostDialogOpen,
    isConfirmCloseDialogOpen,
    toggleEditPostDialog,
    confirmCloseHandler,
    setIsConfirmCloseDialogOpen,
    post,
    setIsPostFormDirty,
  } = useEditDialogContent()

  return (
    <Dialog open={isEditPostDialogOpen} onOpenChange={toggleEditPostDialog}>
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
            defaultValues={{ description: post!.description || '' }}
            onDirtyChange={setIsPostFormDirty}
          />
        </DialogBody>
        <ConfirmCloseDialog
          open={isConfirmCloseDialogOpen}
          onOpenChange={setIsConfirmCloseDialogOpen}
          onConfirm={confirmCloseHandler}
        />
      </DialogContent>
    </Dialog>
  )
}
