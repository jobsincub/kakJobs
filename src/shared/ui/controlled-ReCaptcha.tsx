import React, { useCallback } from 'react'
import { GoogleReCaptcha } from 'react-google-recaptcha-v3'
import { type FieldValues, useController, type UseControllerProps } from 'react-hook-form'

type Props<T extends FieldValues> = UseControllerProps<T>

export const ControlledReCaptcha = <T extends FieldValues>({
  control,
  name,
  defaultValue,
  rules,
  shouldUnregister,
}: Props<T>) => {
  const {
    field: { onChange },
    fieldState: { error },
  } = useController({ control, name, defaultValue, rules, shouldUnregister })

  const onVerify = useCallback(
    (token: string) => {
      console.log(token)
      onChange(token)
    },
    [onChange]
  )

  return (
    <div>
      <GoogleReCaptcha onVerify={onVerify} />
      {error && <span style={{ color: 'red' }}>{error.message}</span>}
    </div>
  )
}
