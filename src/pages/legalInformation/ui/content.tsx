import Page from '@/widgets/page'
import { Typography } from '@wandrehappen/ui-kit'
import React, { ComponentPropsWithoutRef } from 'react'
import s from './content.module.scss'

type Props = ComponentPropsWithoutRef<'div'> & {
  title: string
}

export const Content = ({ title, children }: Props) => {
  return (
    <Page mt={24} className={s.textContainer}>
      <Typography asChild variant={'h1'}>
        <h1>{title}</h1>
      </Typography>
      <Typography asChild variant={'regular14'} className={s.description}>
        <div>{children}</div>
      </Typography>
    </Page>
  )
}
