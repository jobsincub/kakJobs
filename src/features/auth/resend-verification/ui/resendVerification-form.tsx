import { ControlledTextField } from '@/shared/ui'
import { Button } from '@wandrehappen/ui-kit'
import {
  ResendVerificationEmailField,
  useResendVerificationForm,
} from '../lib/useResendVerificationForm'
import s from './resendVerification-form.module.scss'

type Props = {
  onSubmit: (data: ResendVerificationEmailField) => void
}
export const ResendVerificationForm = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useResendVerificationForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <ControlledTextField
        control={control}
        name="email"
        label={'Email'}
        placeholder={'Epam@epam.com'}
      />
      <Button fullWidth className={s.button}>
        Resend verification link
      </Button>
    </form>
  )
}
