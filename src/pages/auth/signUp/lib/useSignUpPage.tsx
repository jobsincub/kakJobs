import { useSignUpMutation } from '@/entities/user'
import { OutputSchema } from '@/features/auth/signUp'
import { ENV, useTranslation } from '@/shared/config'
import { getErrorMessage } from '@/shared/lib/hooks'

export const UseSignUpPage = () => {
  const [signUp, { originalArgs, isSuccess, error }] = useSignUpMutation()
  const email = originalArgs?.email

  const {
    t: {
      pages: {
        auth: {
          signUpPage: { errorMessages, ...page },
        },
      },
    },
  } = useTranslation()

  const onSubmit = (data: OutputSchema) => {
    // signUp(data)
    signUp({
      ...data,
      baseUrl: `${ENV.NEXT_PUBLIC_APP_URL}/auth/email-confirm`,
    })
  }

  const customError = getErrorMessage({ errorMessages, error })

  return { originalArgs, isSuccess, email, onSubmit, page, customError }
}
