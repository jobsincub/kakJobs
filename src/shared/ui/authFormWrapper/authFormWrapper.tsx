import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import s from './authFormWrapper.module.scss'

type Props = {
  children: ReactNode
} & ComponentPropsWithoutRef<'div'>

export const AuthFormWrapper = ({ children, ...rest }: Props) => {
  return (
    <div {...rest} className={s.wrapper}>
      {children}
    </div>
  )
}
