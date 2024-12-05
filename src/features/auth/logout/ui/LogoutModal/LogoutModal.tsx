'use client'
import React from 'react'
import s from './LogoutModal.module.scss'
import { Button, Typography } from '@wandrehappen/ui-kit'

type LogoutModalProps = {
  isOpen: boolean
  email: string | null
  onClose: () => void
  onConfirm: () => void
}

export const LogoutModal = ({ isOpen, email, onClose, onConfirm }: LogoutModalProps) => {
  if (!isOpen) return null

  const ContentClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return (
    <div className={s.modal} onClick={onClose}>
      <div className={s.modalContent} onClick={ContentClickHandler}>
        <header className={s.modalHeader}>
          <Typography asChild variant={'h1'} className={s.modalTitle}>
            <h2>Log Out</h2>
          </Typography>
          <Button variant={'secondary'} className={s.modalCloseButton}>
            X
          </Button>
        </header>
        <div className={s.modalBody}>
          <Typography asChild variant={'regular16'} className={s.modalDescription}>
            <p>
              Are you really want to log out of your account “
              <Typography variant={'bold16'}>{email}</Typography>”?
            </p>
          </Typography>
          <div className={s.modalActions}>
            <Button className={s.modalButton} variant={'tertiary'} onClick={onConfirm}>
              Yes
            </Button>
            <Button className={s.modalButton} onClick={onClose}>
              No
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
