import { ReduxProvider } from '@/app/providers/ReduxProvider'
import type { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => (
  <ReduxProvider>{children}</ReduxProvider>
)
