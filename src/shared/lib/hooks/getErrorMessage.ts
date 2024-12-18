export const getStatusCode = (error: unknown) => {
  if (typeof error === 'object' && error !== null) {
    if ('data' in error && typeof error.data === 'object' && error.data !== null) {
      if ('code' in error.data && typeof error.data.code === 'number') {
        return error.data.code
      }
    }
  }
}

type StatusMessages = Record<number, string>

type GetErrorMessage = {
  errorMessages: StatusMessages
  error: unknown
}

export const getErrorMessage = ({ errorMessages, error }: GetErrorMessage) => {
  const statusCode = getStatusCode(error)
  if (statusCode) {
    return errorMessages[statusCode]
  }
}
