'use client'
import { CreateNewPasswordForm } from '@/features/auth/createNewPassword'
import { AuthFormWrapper } from '@/shared/ui/authFormWrapper'
import Page from '@/widgets/page'
import { Typography } from '@wandrehappen/ui-kit'
import { notFound } from 'next/navigation'
import { useCreateNewPasswordPage } from '../lib/useCreateNewPasswordPage'
import s from './createNewPasswordPage.module.scss'

export const CreateNewPasswordPage = () => {
  const { onSubmit, page, recoveryCode, customError } = useCreateNewPasswordPage()

  if (!recoveryCode) {
    notFound()
  }

  return (
    <Page mt={36} className={s.pageContainer} as={AuthFormWrapper}>
      <Typography asChild color={'light-100'} variant={'h1'}>
        <h1>{page.title}</h1>
      </Typography>
      <CreateNewPasswordForm onSubmit={onSubmit} error={customError} />
    </Page>
  )
}
