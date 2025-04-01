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
} from '@wandrehappen/ui-kit'
import s from './ConfirmCloseDialog.module.scss'
import { useConfirmCloseDialog } from '../../../lib/useConfirmCloseDialog'

type Props = {
  open: boolean
  onOpenChange: (isOpen: boolean) => void
  onConfirm: () => void
}

export const ConfirmCloseDialog = ({ open, onOpenChange, onConfirm }: Props) => {
  const { updatePostDialog, dialogs } = useConfirmCloseDialog()

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={s.rectangleDialog}>
        <DialogHeader>
          <DialogTitle>{updatePostDialog.closePost}</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <DialogDescription className={s.description}>
            {updatePostDialog.description}
          </DialogDescription>
          <DialogFooter>
            <DialogClose onClick={onConfirm}>
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
