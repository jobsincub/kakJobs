import { useTranslation } from '@/shared/config'
import { Button } from '@wandrehappen/ui-kit'
import type { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'button'>
export const ResendButton = (props: Props) => {
  const {
    t: {
      features: {
        auth: {
          resendVerificationForm: { resendVerificationButtonText },
        },
      },
    },
  } = useTranslation()

  return (
    <Button fullWidth {...props}>
      {resendVerificationButtonText}
    </Button>
  )
}
