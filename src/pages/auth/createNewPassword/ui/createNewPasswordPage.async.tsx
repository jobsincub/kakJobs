import { Suspense } from 'react'
import { CreateNewPasswordPage } from './createNewPasswordPage'

const CreateNewPasswordPageAsync = () => {
  return (
    <Suspense>
      <CreateNewPasswordPage />
    </Suspense>
  )
}

export default CreateNewPasswordPageAsync
