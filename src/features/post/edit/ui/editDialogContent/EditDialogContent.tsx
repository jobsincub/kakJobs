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
import { ConfirmCloseDialog } from '../../ui/confirmCloseDialog/ConfirmCloseDialog'
import { EditPostForm } from '../editPostForm'

export const EditDialogContent = () => {
  const {
    updatePostHandler,
    isUpdateDialogOpen,
    handleOpenUpdateDialog,
    handleCloseUpdateDialog,
    updatePostContent,
  } = useEditDialogContent()

  return (
    <Dialog>
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
          <DialogCloseIcon onClick={handleOpenUpdateDialog} />
        </DialogHeader>
        <DialogBody className={s.dialogBody}>
          <div className={s.imagesBox}>Здесь красивая картинка</div>
          <EditPostForm onSubmit={updatePostHandler} />
        </DialogBody>
        {isUpdateDialogOpen && <ConfirmCloseDialog onClose={handleCloseUpdateDialog} />}
      </DialogContent>
    </Dialog>
  )
}
