'use client'
import { type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from '../store'

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const store = makeStore()
  return <Provider store={store}>{children}</Provider>
}
