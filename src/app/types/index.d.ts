declare type AppStore = ReturnType<typeof import('../store')['makeStore']>;
declare type RootState = ReturnType<ReturnType<typeof import('../store')['makeStore']>['getState']>;
declare type AppDispatch = ReturnType<typeof import('../store')['makeStore']>['dispatch'];

declare type ApiResponse<T> = {
  data: T
  code: number
  extensions: Extension[]
}
type Extension = {
  message: string
  field: string | null
}