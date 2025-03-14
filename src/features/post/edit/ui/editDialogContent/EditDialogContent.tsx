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
import { EditPostForm } from '../editPostForm'
import { ConfirmCloseDialog } from '../confirmCloseDialog'

export const EditDialogContent = () => {
  const {
    updatePostHandler,
    updatePostContent,
    isDialogOpen,
    isConfirmOpen,
    openConfirmHandler,
    confirmCloseHandler,
    setIsConfirmOpen,
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
          <EditPostForm onSubmit={updatePostHandler} />
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
