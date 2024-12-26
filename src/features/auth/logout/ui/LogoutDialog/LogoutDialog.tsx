'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useLogoutMutation } from '@/entities/auth/api'
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
  Typography,
} from '@wandrehappen/ui-kit'
import s from './LogoutDialog.module.scss'
import { Logout } from '@wandrehappen/ui-kit'
import { useTranslation } from '@/shared/config'
import { Trans } from '@/shared/config/i18n/ui/Trans'
import { routes } from '@/shared/router/routes'

export const LogoutDialog = () => {
  const email = 'Epam@epam.com' // Todo: change to email from store
  const [logout, { isSuccess }] = useLogoutMutation()
  const router = useRouter()

  const {
    t: {
      features: {
        auth: { logOut },
      },
      shared: { dialogs },
    },
  } = useTranslation()

  const logoutHandler = () => {
    logout()
  }

  useEffect(() => {
    if (isSuccess) {
      router.push(routes.signin)
    }
  }, [isSuccess, router])

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
