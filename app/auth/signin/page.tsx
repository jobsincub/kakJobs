import SignInPage from '@/pages/auth/signIn/signInPage'
import { LogoutConfirmation } from '@/features/auth/logout'

export default function SignIn() {
  return (
    <>
      <LogoutConfirmation />
      <SignInPage />
    </>
  )
}
