'use client'
import React, { useState } from 'react'
import { LogoutModal } from './LogoutModal'
import { useRouter } from 'next/navigation'
import { useLogoutMutation } from '@/entities/auth/api'
import { Button } from '@wandrehappen/ui-kit'

export const LogoutConfirmation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [logout] = useLogoutMutation()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await logout()
      setIsModalOpen(false)
      router.push('/auth/signin')
    } catch (error) {
      console.error('Failed to logout:', error)
    }
  }

  return (
    <div>
      <Button onClick={() => setIsModalOpen(true)}>Log out</Button>

      <LogoutModal
        isOpen={isModalOpen}
        email={'hardcode@gmail.com'}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleLogout}
      />
    </div>
  )
}
