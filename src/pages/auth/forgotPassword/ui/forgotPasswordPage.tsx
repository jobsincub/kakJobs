'use client'
import { ForgotPasswordForm } from '@/features/auth/forgotPassword'
import { EmailSentDialog } from '@/shared/ui'
import { AuthFormWrapper } from '@/shared/ui/authFormWrapper'
import Page from '@/widgets/page'
import { Typography } from '@wandrehappen/ui-kit'
import { UseForgotPasswordPage } from '../lib/useForgotPasswordPage'

const ForgotPasswordPage = () => {
  const { page, onSubmit, customError, email, isSuccess } = UseForgotPasswordPage()

  return (
    <Page mt={36} as={AuthFormWrapper}>
      <EmailSentDialog email={email} isOpen={isSuccess} />
      <Typography asChild color={'light-100'} variant={'h1'}>
        <h1>{page.title}</h1>
      </Typography>
      <ForgotPasswordForm onSubmit={onSubmit} error={customError} isSuccess={isSuccess} />
    </Page>
  )
}

export default ForgotPasswordPage
