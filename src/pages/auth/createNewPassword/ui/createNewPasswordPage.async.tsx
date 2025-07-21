import { Suspense } from 'react'
import { CreateNewPasswordPage } from './createNewPasswordPage'

export const CreateNewPasswordPageAsync = () => {
  return (
    <Suspense>
      <CreateNewPasswordPage />
    </Suspense>
  )
}
