import Link from 'next/link'
import { Typography } from '@wandrehappen/ui-kit'
import { routes } from '@/shared/router/routes'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

type NextLink = typeof Link
type Props = Omit<ComponentPropsWithoutRef<NextLink>, 'href'>

export const Logo = forwardRef<ElementRef<NextLink>, Props>((props, ref) => (
  <Typography asChild variant="large">
    <Link href={routes.home} ref={ref} {...props}>
      Inctagram
    </Link>
  </Typography>
))

Logo.displayName = 'Logo'
