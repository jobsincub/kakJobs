import { ReCaptchaProvider } from '@/app/providers/ReCaptchaProvider'
import { StoreProvider } from '@/app/providers/StoreProvider'
import { UserProvider } from '@/app/providers/UserProvider'
import { type ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <StoreProvider>
      <ReCaptchaProvider>
        <UserProvider>{children}</UserProvider>
      </ReCaptchaProvider>
    </StoreProvider>
  )
}

export default Providers
