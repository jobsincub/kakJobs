'use client'
import { Button } from '@wandrehappen/ui-kit'
import Link from 'next/link'
import type { ReactNode } from 'react'
import s from './item.module.scss'

type Props = {
  icon: ReactNode
  text: string
  href: string
}

export const Item = ({ icon, text, href }: Props) => {
  return (
    <Button variant={'link'} color={'white'} className={s.link} asChild>
      <Link href={href}>
        {icon}
        {text}
      </Link>
    </Button>
  )
}
