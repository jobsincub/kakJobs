import { ControlledTextField } from '@/shared/ui'
import { Button, Typography } from '@wandrehappen/ui-kit'
import { NewPasswordFields, useCreateNewPasswordForm } from '../lib'
import s from './createNewPassword-form.module.scss'

type Props = {
  onSubmit: (data: NewPasswordFields) => void
}
export const CreateNewPasswordForm = ({ onSubmit }: Props) => {
  const { handleSubmit, control, isValid } = useCreateNewPasswordForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
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
      <Button disabled={!isValid}>Create new password</Button>
    </form>
  )
}
