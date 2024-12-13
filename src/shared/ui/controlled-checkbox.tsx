import { Checkbox } from '@wandrehappen/ui-kit'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { type FieldValues, useController, type UseControllerProps } from 'react-hook-form'

type Props<T extends FieldValues> = UseControllerProps<T> &
  Omit<ComponentPropsWithoutRef<'button'>, 'onChange'> & {
    label: ReactNode
  }

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  name,
  defaultValue,
  rules,
  label,
  shouldUnregister,
  ...checkboxProps
}: Props<T>) => {
  const {
    field: { value, onChange },
  } = useController({ control, name, defaultValue, rules, shouldUnregister })

  return <Checkbox checked={value} onCheckedChange={onChange} {...checkboxProps} label={label} />
}
