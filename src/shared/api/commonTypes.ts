export type IncorrectApiResponse = {
  statusCode: number
  messages: Message[]
  error: string
}

type Message = {
  message: string
  field: string
}
