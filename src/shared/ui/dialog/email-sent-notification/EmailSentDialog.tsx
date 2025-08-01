import { useTranslation } from '@/shared/config'
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
import { ComponentPropsWithoutRef, useState } from 'react'
import s from './EmailSentDialog.module.scss'

type Props = Omit<ComponentPropsWithoutRef<typeof Dialog>, 'open' | 'onOpenChange'> & {
  email: string | undefined
  isOpen: boolean
}

export const EmailSentDialog = ({ email, isOpen, ...rest }: Props) => {
  const [open, setOpen] = useState(isOpen)
  const {
    t: {
      features: {
        auth: { emailSent },
      },
      shared: { dialogs },
    },
  } = useTranslation()

  return (
    <Dialog open={open} onOpenChange={setOpen} {...rest}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{emailSent.titleText}</DialogTitle>
        </DialogHeader>
        <DialogBody className={s.dialogBody}>
          <DialogDescription className={s.dialogDescription}>
            {emailSent.notificationText(email || '')}
          </DialogDescription>
          <DialogFooter>
            <DialogClose>
              <Button>{dialogs.ok}</Button>
            </DialogClose>
          </DialogFooter>
        </DialogBody>
      </DialogContent>
    </Dialog>
  )
}
