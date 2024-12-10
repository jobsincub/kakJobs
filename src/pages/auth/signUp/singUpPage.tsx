'use client'

import { useSignUpMutation } from '@/entities/auth/api'
import { useRouter } from 'next/navigation'
import { useTranslation } from '@/shared/config'
import { LoginFormSchema } from '@/features/auth/signin'
import { Typography } from '@wandrehappen/ui-kit'
import s from './singUpPage.module.scss'

export const SingUpPage = () => {
  const [signUp, { isSuccess, isError }] = useSignUpMutation()

  const router = useRouter()

  const { t } = useTranslation()

  const onSubmit = (data: LoginFormSchema) => {
    signUp(data)
  }

  return (
    <div className={s.pageContainer}>
      <Typography asChild color={'light-100'} variant={'h1'}>
        <h1>Sign Up</h1>
      </Typography>
    </div>
  )
}
