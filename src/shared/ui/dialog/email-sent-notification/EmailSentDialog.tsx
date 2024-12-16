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
import { ComponentPropsWithoutRef } from 'react'
import { useTranslation } from '@/shared/config'
import s from './EmailSentDialog.module.scss'

type Props = ComponentPropsWithoutRef<typeof Dialog> & {
  email: string
}

export const EmailSentDialog = ({ email, ...rest }: Props) => {
  const {
    t: {
      features: {
        auth: { emailSent },
      },
      shared: { dialogs },
    },
  } = useTranslation()

  return (
    <Dialog {...rest}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{emailSent.titleText}</DialogTitle>
        </DialogHeader>
        <DialogBody className={s.dialogBody}>
          <DialogDescription className={s.dialogDescription}>
            {emailSent.notificationText(email)}
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
