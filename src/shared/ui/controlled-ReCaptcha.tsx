import { useEffect } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
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
    formState: { isSubmitting },
  } = useController({ control, name, defaultValue, rules, shouldUnregister })

  const { executeRecaptcha } = useGoogleReCaptcha()

  useEffect(() => {
    ;(async () => {
      if (executeRecaptcha) {
        const token = await executeRecaptcha()
        console.log(token)
        onChange(token) // Send token to backend or handle verification here
      }
    })()
  }, [executeRecaptcha, onChange, isSubmitting])

  return null
}
