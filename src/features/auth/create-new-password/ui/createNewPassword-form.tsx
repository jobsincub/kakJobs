import { ControlledTextField } from '@/shared/ui'
import { Button, Typography } from '@wandrehappen/ui-kit'
import { NewPasswordFields, useCreateNewPassword } from '../lib'
import s from './createNewPassword-form.module.scss'

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
    <form onSubmit={handleSubmit(formSubmit)} className={s.form}>
      <ControlledTextField
        control={control}
        label={'New password'}
        name={'newPassword'}
        type={'password'}
        placeholder={'**********'}
      />
      <ControlledTextField
        control={control}
        label={'Password confirmation'}
        name={'passwordConfirmation'}
        type={'password'}
        placeholder={'**********'}
      />
      <Typography asChild color={'light-900'} className={s.text} variant={'regular16'}>
        <p>Your password must be between 6 and 20 characters</p>
      </Typography>
      <Button className={s.btn}>Create new password</Button>
    </form>
  )
}
