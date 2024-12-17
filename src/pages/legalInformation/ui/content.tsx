import s from '@/pages/legalInformation/ui/content.module.scss'
import { Typography } from '@wandrehappen/ui-kit'
import React, { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'div'> & {
  title: string
}

export const Content = ({ title, children }: Props) => {
  return (
    <div className={s.textContainer}>
      <Typography asChild variant={'h1'}>
        <h1>{title}</h1>
      </Typography>
      <Typography asChild variant={'regular14'} className={s.description}>
        <div>{children}</div>
      </Typography>
    </div>
  )
}
