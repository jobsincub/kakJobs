'use client'
import React from 'react'
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
  Logout,
  Typography,
} from '@wandrehappen/ui-kit'
import s from './LogoutDialog.module.scss'
import { Trans } from '@/shared/config/i18n/ui/Trans'
import { useLogoutDialog } from '@/features/auth/logout/lib/useLogoutDialog'

export const LogoutDialog = () => {
  const { logout, logOut, email, dialogs } = useLogoutDialog()

  const logoutHandler = () => {
    logout()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Typography asChild variant={'bold14'}>
          <Button variant={'link'}>
            <Logout />
            {logOut.buttonText}
          </Button>
        </Typography>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{logOut.titleText}</DialogTitle>
        </DialogHeader>
        <DialogBody className={s.dialogBody}>
          <DialogDescription className={s.dialogDescription}>
            <Trans
              text={logOut.confirmationText}
              tags={{
                1: () => (
                  <Typography asChild variant={'bold16'}>
                    <span>{`“${email}”`}</span>
                  </Typography>
                ),
              }}
            />
          </DialogDescription>
          <DialogFooter>
            <DialogClose>
              <Button variant={'tertiary'} onClick={logoutHandler}>
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
