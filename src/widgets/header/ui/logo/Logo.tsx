import { ROUTES } from '@/shared/router/routes'
import { Typography } from '@wandrehappen/ui-kit'
import Link from 'next/link'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

type NextLink = typeof Link
type Props = Omit<ComponentPropsWithoutRef<NextLink>, 'href'>

export const Logo = forwardRef<ElementRef<NextLink>, Props>((props, ref) => (
  <Typography asChild variant="large">
    <Link href={ROUTES.HOME} ref={ref} {...props}>
      Inctagram
    </Link>
  </Typography>
))

Logo.displayName = 'Logo'
