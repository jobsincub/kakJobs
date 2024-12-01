'use client'
//import { useSignInMutation } from '@/entities/auth/api'
import {
  type ForgotPasswordFormSchema,
  useForgotPasswordForm,
} from '@/features/auth/forgot-password'
import { ControlledTextField } from '@/shared/ui'
import React from 'react'

export const FogotPassworForm = () => {
  const { handleSubmit, control } = useForgotPasswordForm()
  //const [passwordRecovery] = useSignInMutation()

  const onSubmit = (data: ForgotPasswordFormSchema) => {
    console.log(data)
    //passwordRecovery(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '358px',
        height: '528px',
        border: '1px solid green',
      }}
    >
      <span>email</span>
      <ControlledTextField control={control} name="email" />
      <button type="submit">Submit</button>
      {/* <DevTool control={control} /> */}
    </form>
  )
}
