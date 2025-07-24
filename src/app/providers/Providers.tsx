import type { Locale } from '@/entities/app'
import { type ReactNode } from 'react'
import { StoreProvider } from './StoreProvider'
import { UserProvider } from './UserProvider'
import { GoogleProvider } from './GoogleProvider'

type Props = {
  children: ReactNode
  locale: Locale
}

export const Providers = ({ children, locale }: Props) => {
  return (
    <GoogleProvider>
      <StoreProvider locale={locale}>
        <UserProvider>{children}</UserProvider>
      </StoreProvider>
    </GoogleProvider>
  )
}
