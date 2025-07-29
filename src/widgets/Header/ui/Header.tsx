'use client'
import { LanguageSwitcher } from '@/features/languageSwitcher'
import { ROUTES } from '@/shared/router/routes'
import { Button } from '@wandrehappen/ui-kit'
import { clsx } from 'clsx'
import Link from 'next/link'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import s from './Header.module.scss'
import { Logo } from './Logo'
import { useHeader } from '../lib/useHeader'

type Props = ComponentPropsWithoutRef<'header'>

export const Header = forwardRef<ElementRef<'header'>, Props>(({ className, ...rest }, ref) => {
  const { isLoggedIn, isAuthPage, logIn, signUp } = useHeader()

  return (
    <header className={clsx(s.header, className)} ref={ref} {...rest}>
      <div className={s.headerContainer}>
        <div className={s.wrapper}>
          <Logo />
          <LanguageSwitcher />
        </div>
        {!isLoggedIn && !isAuthPage && (
          <div className={s.buttonWrapper}>
            <Button asChild variant={'tertiary'} className={s.button}>
              <Link href={ROUTES.AUTH.SIGN_IN}>{logIn}</Link>
            </Button>
            <Button asChild className={s.button}>
              <Link href={ROUTES.AUTH.SIGN_UP}>{signUp}</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
})

Header.displayName = 'Header'
