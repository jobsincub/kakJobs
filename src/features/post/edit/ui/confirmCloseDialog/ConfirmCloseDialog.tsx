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
import { useConfirmCloseDialog } from '../../lib/useConfirmCloseDialog'
type Props = {
  onClose: () => void
}
export const ConfirmCloseDialog = ({ onClose }: Props) => {
  const { updatePostDialog, dialogs } = useConfirmCloseDialog()
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className={s.rectangleDialog}>
        <DialogHeader>
          <DialogTitle>{updatePostDialog.closePost}</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <DialogDescription className={s.description}>
            {updatePostDialog.description}
          </DialogDescription>
          <DialogFooter>
            <DialogClose onClick={onClose}>
              <Button variant={'tertiary'}>{dialogs.yes}</Button>
            </DialogClose>
            <DialogClose onClick={onClose}>
              <Button>{dialogs.no}</Button>
            </DialogClose>
          </DialogFooter>
        </DialogBody>
      </DialogContent>
    </Dialog>
  )
}
