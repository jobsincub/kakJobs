'use client'
import {
  Button,
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  TrashOutline,
  Typography,
} from '@wandrehappen/ui-kit'
import s from './DeletePostDialog.module.scss'
import { useDeletePostDialog } from '../../lib/useDeletePostDialog'

export const DeletePostDialog = () => {
  const { dialogs, deletePostDialog, deletePost, postId } = useDeletePostDialog()

  const deletePostHandler = async () => {
    if (!postId) {
      console.error('Post ID is undefined')
      return
    }

    try {
      await deletePost(postId).unwrap()
    } catch (error) {
      console.error('Failed to delete post:', error)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Typography asChild variant={'regular14'}>
          <Button variant={'link'}>
            <TrashOutline />
            {deletePostDialog.buttonText}
          </Button>
        </Typography>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{deletePostDialog.titleText}</DialogTitle>
        </DialogHeader>
        <DialogBody className={s.body}>
          <DialogDescription className={s.description}>
            {deletePostDialog.confirmationText}
          </DialogDescription>
          <DialogFooter>
            <DialogClose>
              <Button variant={'tertiary'} onClick={deletePostHandler}>
                {dialogs.yes}
              </Button>
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
