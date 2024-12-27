'use client'
import { Trans } from '@/shared/config/i18n/ui/Trans'
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
import React from 'react'
import { useLogoutDialog } from '../../lib/useLogoutDialog'
import s from './LogoutDialog.module.scss'

export const LogoutDialog = () => {
  const { logout, logOutDialog, email, dialogs } = useLogoutDialog()

  const logoutHandler = () => {
    logout()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Typography asChild variant={'bold14'}>
          <Button variant={'link'}>
            <Logout />
            {logOutDialog.buttonText}
          </Button>
        </Typography>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{logOutDialog.titleText}</DialogTitle>
        </DialogHeader>
        <DialogBody className={s.dialogBody}>
          <DialogDescription className={s.dialogDescription}>
            <Trans
              text={logOutDialog.confirmationText}
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
