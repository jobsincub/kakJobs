const getStatus = (error: unknown) => {
  if (typeof error === 'object' && error !== null) {
    if ('data' in error && typeof error.data === 'object' && error.data !== null) {
      if ('code' in error.data && typeof error.data.code === 'number') {
        return error.data.code
      }
    }
  }
}

type StatusMessages = Record<number, string>

type GetErrors = {
  statusMessages: StatusMessages
  error: unknown
}

export const getError = ({ statusMessages, error }: GetErrors) => {
  const statusCode = getStatus(error)
  if (statusCode) {
    return statusMessages[statusCode]
  }
}
