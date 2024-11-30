'use client'
import { type AppStore, makeStore } from '@/shared/config'
import { type ReactNode, useRef } from 'react'
import { Provider } from 'react-redux'

export default function StoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
