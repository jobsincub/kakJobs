'use client'
import { type AppStore, makeStore } from '@/shared/config'
import { setupListeners } from '@reduxjs/toolkit/query'
import { type ReactNode, useEffect, useRef } from 'react'
import { Provider } from 'react-redux'

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  useEffect(() => {
    if (storeRef.current != null) {
      return setupListeners(storeRef.current.dispatch)
    }
  }, [])

  return <Provider store={storeRef.current}>{children}</Provider>
}
