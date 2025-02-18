'use client'
import { type Locale, setInitialLocale } from '@/entities/app'
import { setupListeners } from '@reduxjs/toolkit/query'
import { type ReactNode, useEffect, useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from '../store'

type Props = {
  children: ReactNode
  locale: Locale
}

export const StoreProvider = ({ children, locale }: Props) => {
  const storeRef = useRef<AppStore | null>(null)

  if (!storeRef.current) {
    storeRef.current = makeStore()
    storeRef.current.dispatch(setInitialLocale({ locale: locale }))
  }

  useEffect(() => {
    if (storeRef.current != null) {
      const unsubscribe = setupListeners(storeRef.current.dispatch)
      return unsubscribe
    }
  }, [])

  return <Provider store={storeRef.current}>{children}</Provider>
}
