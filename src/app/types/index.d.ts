declare type RootState = ReturnType<ReturnType<typeof import('../store')['makeStore']>['getState']>;
declare type AppDispatch = ReturnType<typeof import('../store')['makeStore']>['dispatch'];
