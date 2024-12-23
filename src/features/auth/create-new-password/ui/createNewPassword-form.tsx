import { ControlledTextField } from '@/shared/ui'
import { Button } from '@wandrehappen/ui-kit'
import { NewPasswordFields, useCreateNewPassword } from '../lib'

type Props = {
  onSubmit: (data: NewPasswordFields, recoveryCode: string | null) => void
  recoveryCode: string | null
}
export const CreateNewPasswordForm = ({ onSubmit, recoveryCode }: Props) => {
  const { handleSubmit, control } = useCreateNewPassword()
  const formSubmit = (data: NewPasswordFields) => {
    onSubmit(data, recoveryCode)
  }
  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <ControlledTextField
        control={control}
        label={'New password'}
        name={'newPassword'}
        type={'password'}
        placeholder={'Enter new password'}
      />
      <ControlledTextField
        control={control}
        label={'Password confirmation'}
        name={'passwordConfirmation'}
        type={'password'}
        placeholder={'Confirm new password'}
      />
      <Button>Create new password</Button>
    </form>
  )
}
