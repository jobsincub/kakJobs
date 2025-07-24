'use client'
import { selectIsLoggedIn } from '@/entities/user/model/authSlice'
import { LanguageSwitcher } from '@/features/languageSwitcher'
import { useTranslation } from '@/shared/config'
import { ROUTES } from '@/shared/router/routes'
import { Button } from '@wandrehappen/ui-kit'
import { clsx } from 'clsx'
import Link from 'next/link'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { useSelector } from 'react-redux'
import s from './Header.module.scss'
import { Logo } from './logo'
import { usePathname } from 'next/navigation'

type Props = ComponentPropsWithoutRef<'header'>

export const Header = forwardRef<ElementRef<'header'>, Props>(({ className, ...rest }, ref) => {
  const {
    t: {
      widgets: {
        header: { signUp, logIn },
      },
    },
  } = useTranslation()
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const pathname = usePathname()
  const isAuthPage = pathname!.startsWith('/auth')

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
