import { Button, Typography } from '@wandrehappen/ui-kit'
import {
  ResendVerificationEmailField,
  useResendVerificationForm,
} from '../lib/useResendVerificationForm'
import Image from 'next/image'
import s from './resendVerification-form.module.scss'
import rafiki from './assets/rafiki.png'
import { ControlledReCaptcha, ControlledTextField } from '@/shared/ui'
type Props = {
  onSubmit: (data: ResendVerificationEmailField) => void
}
export const ResendVerificationForm = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useResendVerificationForm()

  const formSubmit = (data: ResendVerificationEmailField) => {
    onSubmit(data)
    console.log(data)
  }
  return (
    <div className={s.container}>
      <div className={s.contentContainer}>
        <Typography color={'light-100'} variant={'h1'}>
          Email verification link expired
        </Typography>
        <Typography color={'light-100'} variant={'regular16'} className={s.text}>
          Looks like the verification link has expired. Not to worry, we can send the link again
        </Typography>
        <form onSubmit={handleSubmit(formSubmit)}>
          <ControlledReCaptcha control={control} name={'capture'} />
          <ControlledTextField
            control={control}
            name="email"
            label={'Email'}
            placeholder={'Epam@epam.com'}
          />
          <Button className={s.button}>Resend verification link</Button>
        </form>
        <Image src={rafiki} alt={'verification'} />
      </div>
    </div>
  )
}
