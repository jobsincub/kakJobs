'use client'
import { setupListeners } from '@reduxjs/toolkit/query'
import { type ReactNode, useEffect, useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from '../store'

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<AppStore | null>(null)

  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  useEffect(() => {
    if (storeRef.current != null) {
      const unsubscribe = setupListeners(storeRef.current.dispatch)
      return unsubscribe
    }
  }, [])

  return <Provider store={storeRef.current}>{children}</Provider>
}
