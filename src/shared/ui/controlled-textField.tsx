import { Input } from '@wandrehappen/ui-kit'
import type { ComponentPropsWithoutRef } from 'react'
import { type FieldValues, useController, type UseControllerProps } from 'react-hook-form'

type Props<T extends FieldValues> = UseControllerProps<T> &
  Omit<ComponentPropsWithoutRef<'input'>, 'onChange'>

export const ControlledTextField = <T extends FieldValues>({
  control,
  name,
  defaultValue,
  rules,
  shouldUnregister,
  ...checkboxProps
}: Props<T>) => {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({ control, name, defaultValue, rules, shouldUnregister })

  return (
    <>
      <Input
        error={error?.message}
        {...checkboxProps}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <span>{error.message}</span>}
    </>
  )
}
