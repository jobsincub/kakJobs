'use client'
import { LogoutDialog } from '@/features/auth/logout'
import { LanguageSwitcher } from '@/features/languageSwitcher'
import { clsx } from 'clsx'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import s from './Header.module.scss'
import { Logo } from './logo'

type Props = ComponentPropsWithoutRef<'header'>

export const Header = forwardRef<ElementRef<'header'>, Props>(({ className, ...rest }, ref) => (
  <header className={clsx(s.header, className)} ref={ref} {...rest}>
    <div className={s.headerContainer}>
      <Logo />
      <LogoutDialog />
      <LanguageSwitcher />
    </div>
  </header>
))

Header.displayName = 'Header'
