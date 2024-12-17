import { Input, type InputProps } from '@wandrehappen/ui-kit'
import { type FieldValues, useController, type UseControllerProps } from 'react-hook-form'

type Props<T extends FieldValues> = UseControllerProps<T> & Omit<InputProps, 'onChange'>

export const ControlledTextField = <T extends FieldValues>({
  control,
  name,
  defaultValue,
  rules,
  shouldUnregister,
  error: customError,
  ...checkboxProps
}: Props<T>) => {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({ control, name, defaultValue, rules, shouldUnregister })
  const finalError = error?.message ?? customError

  console.log(finalError)

  return (
    <>
      <Input
        error={finalError}
        {...checkboxProps}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </>
  )
}
