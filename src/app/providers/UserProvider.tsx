'use client'
import { useMeQuery } from '@/entities/user'
import { type ReactNode } from 'react'

export const UserProvider = ({ children }: { children: ReactNode }) => {
  useMeQuery()

  return <>{children}</>
}
