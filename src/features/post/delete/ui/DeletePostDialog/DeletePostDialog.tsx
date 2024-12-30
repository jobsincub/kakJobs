'use client'
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Typography,
  TrashOutline,
  DialogBody,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@wandrehappen/ui-kit'
import s from './DeletePostDialog.module.scss'
import { useDeletePostDialog } from '../../lib/useDeletePostDialog'

export const DeletePostDialog = () => {
  const { dialogs, deletePost } = useDeletePostDialog()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Typography asChild variant={'regular14'}>
          <Button variant={'link'}>
            <TrashOutline />
            {deletePost.buttonText}
          </Button>
        </Typography>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{deletePost.titleText}</DialogTitle>
        </DialogHeader>
        <DialogBody className={s.body}>
          <DialogDescription className={s.description}>
            {deletePost.confirmationText}
          </DialogDescription>
          <DialogFooter>
            <DialogClose>
              <Button variant={'tertiary'}>{dialogs.yes}</Button>
            </DialogClose>
            <DialogClose>
              <Button>{dialogs.no}</Button>
            </DialogClose>
          </DialogFooter>
        </DialogBody>
      </DialogContent>
    </Dialog>
  )
}
