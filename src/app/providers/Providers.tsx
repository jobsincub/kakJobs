import { StoreProvider } from '@/app/providers/StoreProvider'
import { UserProvider } from '@/app/providers/UserProvider'
import { type ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <StoreProvider>
      <UserProvider>{children}</UserProvider>
    </StoreProvider>
  )
}

export default Providers
