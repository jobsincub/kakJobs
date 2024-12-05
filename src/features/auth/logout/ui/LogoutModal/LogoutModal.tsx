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

  return (
    <div className={s.modal}>
      <div className={s.modalContent}>
        <Typography asChild>
          <p>Are you really want to log out of your account {email}?</p>
        </Typography>
        <div className={s.actions}>
          <Button onClick={onConfirm}>Yes</Button>
          <Button onClick={onClose}>No</Button>
        </div>
      </div>
    </div>
  )
}
