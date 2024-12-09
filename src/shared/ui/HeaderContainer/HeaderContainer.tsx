import { ComponentPropsWithoutRef, forwardRef } from 'react'
import s from './HeaderContainer.module.scss'
import { clsx } from 'clsx'

type Props = ComponentPropsWithoutRef<'div'>

export const HeaderContainer = forwardRef<HTMLDivElement, Props>(
  ({ children, className, ...rest }, ref) => (
    <div className={clsx(s.headerContainer, className)} ref={ref} {...rest}>
      {children}
    </div>
  )
)

HeaderContainer.displayName = 'HeaderContainer'
