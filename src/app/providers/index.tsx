'use client'
import { StoreProvider } from '@/app/providers/ReduxProvider'
import type { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => (
  <StoreProvider>{children}</StoreProvider>
)
