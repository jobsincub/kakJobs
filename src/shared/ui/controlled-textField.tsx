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
    field: { value, onChange },
  } = useController({ control, name, defaultValue, rules, shouldUnregister })

  return <input {...checkboxProps} type="text" checked={value} onChange={onChange} />
}
