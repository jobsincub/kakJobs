'use client'
import { LanguageSwitcher } from '@/features/languageSwitcher'
import s from './Header.module.scss'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { clsx } from 'clsx'
import { Logo } from './logo'
import { LogoutDialog } from '@/features/auth/logout'

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
