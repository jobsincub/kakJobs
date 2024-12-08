'use client'
import { makeStore } from '@/shared/config'
import { type ReactNode } from 'react'
import { Provider } from 'react-redux'

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const store = makeStore()
  return <Provider store={store}>{children}</Provider>
}
