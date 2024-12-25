'use client'
import { CreateNewPasswordForm } from '@/features/auth/create-new-password/ui'
import Page from '@/widgets/page'
import s from './createNewPasswordPage.module.scss'
import { Typography } from '@wandrehappen/ui-kit'
import { useCreateNewPasswordPage } from '../lib/useCreateNewPasswordPage'
import { notFound } from 'next/navigation'

const CreateNewPasswordPage = () => {
  const { onSubmit, page, recoveryCode } = useCreateNewPasswordPage()

  if (!recoveryCode) {
    notFound()
  }

  return (
    <Page mt={36} className={s.pageContainer}>
      <Typography asChild color={'light-100'} variant={'h1'}>
        <h1>{page.title}</h1>
      </Typography>
      <CreateNewPasswordForm onSubmit={onSubmit} />
    </Page>
  )
}

export default CreateNewPasswordPage
