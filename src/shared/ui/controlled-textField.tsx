import { Input, type InputProps } from '@wandrehappen/ui-kit'
import { type FieldValues, useController, type UseControllerProps } from 'react-hook-form'

type Props<T extends FieldValues> = UseControllerProps<T> & Omit<InputProps, 'onChange'>

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
