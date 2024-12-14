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
} from '@wandrehappen/ui-kit'
import s from './logout-confirmation.module.scss'
import { Logout } from '@wandrehappen/ui-kit'
import { useTranslation } from '@/shared/config'

export const LogoutConfirmation = () => {
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
      router.push('/auth/signin')
    }
  }, [isSuccess, router])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'icon'} className={s.logoutButton}>
          <Logout />
          {logOut.buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{logOut.titleText}</DialogTitle>
        </DialogHeader>
        <DialogBody className={s.dialogBody}>
          <DialogDescription className={s.dialogDescription}>
            {logOut.confirmationText} <span className={s.account}>“Epam@epam.com”</span>?
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
