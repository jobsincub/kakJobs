'use client'
import { useSignInMutation } from '@/entities/auth/api'
import { type LoginFormSchema, useSignInForm } from '@/features/auth/signin'
import { ControlledTextField } from '@/shared/ui'
import { DevTool } from '@hookform/devtools'
import React from 'react'

export const SignInForm = () => {
  const { handleSubmit, control } = useSignInForm()
  const [signIn, { data }] = useSignInMutation()

  const onSubmit = (data: LoginFormSchema) => {
    console.log(data)
    signIn(data)
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
      <span>password</span>
      <ControlledTextField control={control} name="password" />
      <button type="submit">Submit</button>
      <DevTool control={control} />
    </form>
  )
}
