import type { Locale } from '@/entities/app'
import { type ReactNode } from 'react'
import { ReCaptchaProvider } from './ReCaptchaProvider'
import { StoreProvider } from './StoreProvider'
import { UserProvider } from './UserProvider'

type Props = {
  children: ReactNode
  locale: Locale
}

export const Providers = ({ children, locale }: Props) => {
  return (
    <StoreProvider locale={locale}>
      <ReCaptchaProvider>
        <UserProvider>{children}</UserProvider>
      </ReCaptchaProvider>
    </StoreProvider>
  )
}

export default Providers
