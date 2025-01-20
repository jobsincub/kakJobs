'use client'
import { selectIsLoggedIn, selectUserName } from '@/entities/user/model/authSlice'
import { LogoutDialog } from '@/features/auth/logout'
import { LanguageSwitcher } from '@/features/languageSwitcher'
import { clsx } from 'clsx'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { useSelector } from 'react-redux'
import s from './Header.module.scss'
import { Logo } from './logo'

type Props = ComponentPropsWithoutRef<'header'>

export const Header = forwardRef<ElementRef<'header'>, Props>(({ className, ...rest }, ref) => {
  const userName = useSelector(selectUserName)
  const isLoggedIn = useSelector(selectIsLoggedIn)

  return (
    <header className={clsx(s.header, className)} ref={ref} {...rest}>
      <div className={s.headerContainer}>
        <Logo />
        <span>{userName ? `Welcome, ${userName}` : 'Welcome, Guest'}</span>
        {isLoggedIn && <LogoutDialog />}
        <LanguageSwitcher />
      </div>
    </header>
  )
})

Header.displayName = 'Header'
