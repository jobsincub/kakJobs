'use client'
import { StoreProvider } from '@/app/providers/StoreProvider'
import type { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => (
  <StoreProvider>{children}</StoreProvider>
)
