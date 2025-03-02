import { Sidebar } from '@/widgets/sidebar'
import React, { type ReactNode } from 'react'
import s from './layout.module.scss'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={s.layout}>
      <Sidebar />
      <main className={s.content}>{children}</main>
    </div>
  )
}
