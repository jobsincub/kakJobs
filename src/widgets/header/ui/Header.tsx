'use client'
import { LanguageSwitcher } from '@/features/languageSwitcher'
import s from './Header.module.scss'
import { HeaderContainer } from '@/shared/ui/HeaderContainer'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { clsx } from 'clsx'
import { Logo } from './logo'

type Props = ComponentPropsWithoutRef<'header'>

export const Header = forwardRef<ElementRef<'header'>, Props>(({ className, ...rest }, ref) => (
  <header className={clsx(s.header, className)} ref={ref} {...rest}>
    <HeaderContainer className={s.headerContainer}>
      <Logo />
      <LanguageSwitcher />
    </HeaderContainer>
  </header>
))

Header.displayName = 'Header'
