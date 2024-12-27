import { ControlledTextField } from '@/shared/ui'
import { Button } from '@wandrehappen/ui-kit'
import {
  ResendVerificationEmailField,
  useResendVerificationForm,
} from '../lib/useResendVerificationForm'
import s from './resendVerification-form.module.scss'

type Props = {
  onSubmit: (data: ResendVerificationEmailField) => void
  error?: string
}
export const ResendVerificationForm = ({ onSubmit, error }: Props) => {
  const { control, handleSubmit, resendVerificationForm } = useResendVerificationForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <ControlledTextField
        control={control}
        name="email"
        label={'Email'}
        placeholder={'Epam@epam.com'}
        error={error}
      />
      <Button fullWidth className={s.button}>
        {resendVerificationForm.resendVerificationButtonText}
      </Button>
    </form>
  )
}
