import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { clsx } from 'clsx'
import s from './OAuthButtons.module.scss'
import { GoogleOAuthButton } from '../GoogleOAuthButton'

type Props = ComponentPropsWithoutRef<'div'> & {
  withMarginBottom?: boolean
}

export const OAuthButtons = forwardRef<ElementRef<'div'>, Props>(function OAuthButtons(
  { className, withMarginBottom, ...rest },
  ref
) {
  const classes = clsx(
    s.oAuthButtons,
    {
      [s.withMarginBottom]: withMarginBottom,
    },
    className
  )

  return (
    <div className={classes} ref={ref} {...rest}>
      <GoogleOAuthButton />
    </div>
  )
})
