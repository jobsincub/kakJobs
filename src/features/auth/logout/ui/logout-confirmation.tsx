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

export const LogoutConfirmation = () => {
  const [logout, { isSuccess }] = useLogoutMutation()
  const router = useRouter()

  useEffect(() => {
    if (isSuccess) {
      router.push('/auth/signin')
    }
  }, [isSuccess, router])

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={'icon'} className={s.logoutButton}>
            <Logout />
            Log Out
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Log Out</DialogTitle>
          </DialogHeader>
          <DialogBody className={s.dialogBody}>
            <DialogDescription className={s.dialogDescription}>
              Are you really want to log out of your account{' '}
              <span className={s.account}>“Epam@epam.com”</span>?
            </DialogDescription>
            <DialogFooter>
              <DialogClose>
                <Button variant={'tertiary'} onClick={() => logout()}>
                  Yes
                </Button>
              </DialogClose>
              <DialogClose>
                <Button>No</Button>
              </DialogClose>
            </DialogFooter>
          </DialogBody>
        </DialogContent>
      </Dialog>
    </>
  )
}
