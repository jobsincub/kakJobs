'use client'
import { CreateNewPasswordForm } from '@/features/auth/create-new-password/ui'
import Page from '@/widgets/page'
import s from './createNewPasswordPage.module.scss'
import { Typography } from '@wandrehappen/ui-kit'
import { useCreateNewPasswordPage } from '../lib/useCreateNewPasswordPage'

const CreateNewPasswordPage = () => {
  const { onSubmit, recoveryCode } = useCreateNewPasswordPage()

  return (
    <Page mt={36} className={s.pageContainer}>
      <Typography asChild color={'light-100'} variant={'h1'} className={s.text}>
        <h1>Create New Password</h1>
      </Typography>
      <CreateNewPasswordForm onSubmit={onSubmit} recoveryCode={recoveryCode} />
    </Page>
  )
}

export default CreateNewPasswordPage
