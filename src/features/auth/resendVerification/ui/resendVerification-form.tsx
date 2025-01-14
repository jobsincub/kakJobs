import { ControlledTextField } from '@/shared/ui'
import {
  ResendVerificationEmailField,
  useResendVerificationForm,
} from '../lib/useResendVerificationForm'
import { ResendButton } from './ResendButton'
import s from './resendVerification-form.module.scss'

type Props = {
  onSubmit: (data: ResendVerificationEmailField) => void
  error?: string
}
export const ResendVerificationForm = ({ onSubmit, error }: Props) => {
  const { control, handleSubmit } = useResendVerificationForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <ControlledTextField
        control={control}
        name="email"
        label={'Email'}
        placeholder={'Epam@epam.com'}
        error={error}
      />
      <ResendButton className={s.button} />
    </form>
  )
}
