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

export const DeletePostDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Typography asChild variant={'regular14'}>
          <Button variant={'link'}>
            <TrashOutline />
            Delete Post
          </Button>
        </Typography>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Post</DialogTitle>
        </DialogHeader>
        <DialogBody className={s.body}>
          <DialogDescription className={s.description}>
            Are you sure you want to delete this post?
          </DialogDescription>
          <DialogFooter>
            <DialogClose>
              <Button variant={'tertiary'}>Yes</Button>
            </DialogClose>
            <DialogClose>
              <Button>No</Button>
            </DialogClose>
          </DialogFooter>
        </DialogBody>
      </DialogContent>
    </Dialog>
  )
}
