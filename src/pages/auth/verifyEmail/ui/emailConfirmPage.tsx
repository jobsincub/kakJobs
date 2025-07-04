'use client'

import { ROUTES } from '@/shared/router/routes'
import { Page } from '@/widgets/page'
import { Button, Typography } from '@wandrehappen/ui-kit'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { UseEmailConfirmPage } from '../lib/useEmailConfirmPage'
import verificationImg from './bro.png'
import s from './verify-email.module.scss'

export const EmailConfirmPage = () => {
  const { page, confirmationCode, isSuccess, isAlreadyActivated } = UseEmailConfirmPage()

  if (!confirmationCode) {
    notFound()
  }

  if (!isSuccess && !isAlreadyActivated) {
    return
  }

  return (
    <Page className={s.container} mt={35}>
      <Typography variant={'h1'}>{page.title}</Typography>
      {isAlreadyActivated ? (
        <Typography variant={'regular16'}>{page.alreadyActivated}</Typography>
      ) : (
        <Typography variant={'regular16'}>{page.confirmText}</Typography>
      )}
      <Button asChild variant={'primary'} className={s.button}>
        <Link href={ROUTES.AUTH.SIGN_IN} className={s.link}>
          {page.singInLinkText}
        </Link>
      </Button>
      <Image src={verificationImg} alt={'verification-img'} />
    </Page>
  )
}
